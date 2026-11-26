/*! For license information please see cwj32u.295.30defb0f.chunk.js.LICENSE.txt */
export const id = 295;
export const ids = [295];
export const modules = {
  41798: (HH, BH, LH) => {
    LH.d(BH, {
      b: () => mh,
      d: () => oh,
      h: () => zz
    });
    var AH, rH = Object.defineProperty,
      SH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? rH(HH, BH, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: LH
      }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
      hH = Object.defineProperty,
      tH = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? hH(HH, BH, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: LH
      }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
      zH = (HH => (HH[HH.Document = 0] = "Document", HH[HH.DocumentType = 1] = "DocumentType", HH[HH.Element = 2] = "Element", HH[HH.Text = 3] = "Text", HH[HH.CDATA = 4] = "CDATA", HH[HH.Comment = 5] = "Comment", HH))(zH || {});
    const CH = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      EH = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      XH = {},
      GH = {};

    function YH(HH) {
      if (XH[HH]) return XH[HH];
      const BH = globalThis[HH],
        LH = BH.prototype,
        AH = HH in CH ? CH[HH] : void 0,
        rH = Boolean(AH && AH.every((HH => {
          var BH, AH;
          return Boolean(null == (AH = null == (BH = Object.getOwnPropertyDescriptor(LH, HH)) ? void 0 : BH.get) ? void 0 : AH.toString().includes("[native code]"))
        }))),
        SH = HH in EH ? EH[HH] : void 0,
        hH = Boolean(SH && SH.every((HH => {
          var BH;
          return "function" === typeof LH[HH] && (null == (BH = LH[HH]) ? void 0 : BH.toString().includes("[native code]"))
        })));
      if (rH && hH && !globalThis.Zone) return XH[HH] = BH.prototype, BH.prototype;
      try {
        const AH = document.createElement("iframe");
        AH.style.display = "none", document.body.appendChild(AH);
        const rH = AH.contentWindow;
        if (!rH) return BH.prototype;
        const SH = rH[HH].prototype;
        if (!SH) return AH.remove(), LH;
        const hH = navigator.userAgent;
        return hH.includes("Safari") && !hH.includes("Chrome") ? (AH.classList.add("rr-block"), AH.setAttribute("__rrwebUntaintedMutationObserver", ""), GH[HH] = () => AH.remove()) : AH.remove(), XH[HH] = SH
      } catch {
        return LH
      }
    }
    const uH = {};

    function QH(HH, BH, LH) {
      var AH, rH;
      const SH = null == (AH = uH[HH]) ? void 0 : AH[LH];
      if (SH) return SH.call(BH);
      const hH = YH(HH),
        tH = null == (rH = Object.getOwnPropertyDescriptor(hH, LH)) ? void 0 : rH.get;
      return tH ? ((uH[HH] || (uH[HH] = {}))[LH] = tH, tH.call(BH)) : BH[LH]
    }
    const WH = {};

    function MH(HH, BH, LH) {
      const AH = `${HH}.${String(LH)}`;
      if (WH[AH]) return WH[AH].bind(BH);
      const rH = YH(HH)[LH];
      return "function" !== typeof rH ? BH[LH] : (WH[AH] = rH, rH.bind(BH))
    }
    let xH = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (xH = () => (new Date).getTime());
    const vH = {
      ownerDocument: function(HH) {
        return QH("Node", HH, "ownerDocument")
      },
      childNodes: function(HH) {
        return QH("Node", HH, "childNodes")
      },
      parentNode: function(HH) {
        return QH("Node", HH, "parentNode")
      },
      parentElement: function(HH) {
        return QH("Node", HH, "parentElement")
      },
      textContent: function(HH) {
        return QH("Node", HH, "textContent")
      },
      firstChild: function(HH) {
        return QH("Node", HH, "firstChild")
      },
      lastChild: function(HH) {
        return QH("Node", HH, "lastChild")
      },
      nextSibling: function(HH) {
        return QH("Node", HH, "nextSibling")
      },
      previousSibling: function(HH) {
        return QH("Node", HH, "previousSibling")
      },
      contains: function(HH, BH) {
        return MH("Node", HH, "contains")(BH)
      },
      getRootNode: function(HH) {
        return MH("Node", HH, "getRootNode")()
      },
      host: function(HH) {
        return HH && "host" in HH ? QH("ShadowRoot", HH, "host") : null
      },
      styleSheets: function(HH) {
        return HH.styleSheets
      },
      shadowRoot: function(HH) {
        return HH && "shadowRoot" in HH ? QH("Element", HH, "shadowRoot") : null
      },
      querySelector: function(HH, BH) {
        return QH("Element", HH, "querySelector")(BH)
      },
      querySelectorAll: function(HH, BH) {
        return QH("Element", HH, "querySelectorAll")(BH)
      },
      nowTimestamp: xH,
      mutationObserverCtor: function() {
        return [YH("MutationObserver").constructor, GH.MutationObserver ?? (() => {})]
      },
      patch: function(HH, BH, LH) {
        try {
          if (!(BH in HH)) return () => {};
          const AH = HH[BH],
            rH = LH(AH);
          return "function" === typeof rH && (rH.prototype = rH.prototype || {}, Object.defineProperties(rH, {
            __rrweb_original__: {
              enumerable: !1,
              value: AH
            }
          })), HH[BH] = rH, () => {
            HH[BH] = AH
          }
        } catch {
          return () => {}
        }
      }
    };

    function PH(HH) {
      return HH.nodeType === HH.ELEMENT_NODE
    }

    function TH(HH) {
      const BH = HH && "host" in HH && "mode" in HH && vH.host(HH) || null;
      return Boolean(BH && "shadowRoot" in BH && vH.shadowRoot(BH) === HH)
    }

    function UH(HH) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(HH)
    }

    function VH(HH) {
      try {
        const LH = HH.rules || HH.cssRules;
        if (!LH) return null;
        let AH = HH.href;
        !AH && HH.ownerNode && (AH = HH.ownerNode.baseURI);
        const rH = Array.from(LH, (HH => OH(HH, AH))).join("");
        return (BH = rH).includes(" background-clip: text;") && !BH.includes(" -webkit-background-clip: text;") && (BH = BH.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), BH
      } catch (LH) {
        return null
      }
      var BH
    }

    function OH(HH, BH) {
      if (function(HH) {
          return "styleSheet" in HH
        }(HH)) {
        let BH;
        try {
          BH = VH(HH.styleSheet) || function(HH) {
            const {
              cssText: BH
            } = HH;
            if (BH.split('"').length < 3) return BH;
            const LH = ["@import", `url(${JSON.stringify(HH.href)})`];
            return "" === HH.layerName ? LH.push("layer") : HH.layerName && LH.push(`layer(${HH.layerName})`), HH.supportsText && LH.push(`supports(${HH.supportsText})`), HH.media.length && LH.push(HH.media.mediaText), LH.join(" ") + ";"
          }(HH)
        } catch (LH) {
          BH = HH.cssText
        }
        return HH.styleSheet.href ? gH(BH, HH.styleSheet.href) : BH
      } {
        let LH = HH.cssText;
        return function(HH) {
          return "selectorText" in HH
        }(HH) && HH.selectorText.includes(":") && (LH = function(HH) {
          const BH = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return HH.replace(BH, "$1\\$2")
        }(LH)), BH ? gH(LH, BH) : LH
      }
    }
    class bH {
      constructor() {
        tH(this, "idNodeMap", new Map), tH(this, "nodeMetaMap", new WeakMap)
      }
      getId(HH) {
        var BH;
        if (!HH) return -1;
        return (null == (BH = this.getMeta(HH)) ? void 0 : BH.id) ?? -1
      }
      yAH(HH) {
        return this.idNodeMap.get(HH) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(HH) {
        return this.nodeMetaMap.get(HH) || null
      }
      removeNodeFromMap(HH) {
        const BH = this.getId(HH);
        this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH)))
      }
      has(HH) {
        return this.idNodeMap.has(HH)
      }
      hasNode(HH) {
        return this.nodeMetaMap.has(HH)
      }
      add(HH, BH) {
        const LH = BH.id;
        this.idNodeMap.set(LH, HH), this.nodeMetaMap.set(HH, BH)
      }
      replace(HH, BH) {
        const LH = this.yAH(HH);
        if (LH) {
          const HH = this.nodeMetaMap.get(LH);
          HH && this.nodeMetaMap.set(BH, HH)
        }
        this.idNodeMap.set(HH, BH)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function kH() {
      return new bH
    }

    function mH(HH) {
      let {
        element: BH,
        maskInputOptions: LH,
        tagName: AH,
        type: rH,
        value: SH,
        maskInputFn: hH
      } = HH, tH = SH || "";
      const zH = rH && oH(rH);
      return (LH[AH.toLowerCase()] || zH && LH[zH]) && (tH = hH ? hH(tH, BH) : "*".repeat(tH.length)), tH
    }

    function oH(HH) {
      return HH.toLowerCase()
    }
    const IH = "__rrweb_original__";

    function fH(HH) {
      const BH = HH.type;
      return HH.hasAttribute("data-rr-is-password") ? "password" : BH ? oH(BH) : null
    }

    function lH(HH, BH) {
      let LH;
      try {
        LH = new URL(HH, BH ?? window.location.href)
      } catch (rH) {
        return null
      }
      const AH = LH.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == AH ? void 0 : AH[1]) ?? null
    }
    const KH = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      cH = /^(?:[a-z+]+:)?\/\//i,
      eH = /^www\..*/i,
      qH = /^(data:)([^,]*),(.*)/i;

    function gH(HH, BH) {
      return (HH || "").replace(KH, ((HH, LH, AH, rH, SH, hH) => {
        const tH = AH || SH || hH,
          zH = LH || rH || "";
        if (!tH) return HH;
        if (cH.test(tH) || eH.test(tH)) return `url(${zH}${tH}${zH})`;
        if (qH.test(tH)) return `url(${zH}${tH}${zH})`;
        if ("/" === tH[0]) return `url(${zH}${function(HH){let BH="";return BH=HH.indexOf("//")>-1?HH.split("/").slice(0,3).join("/"):HH.split("/")[0],BH=BH.split("?")[0],BH}(BH)+tH}${zH})`;
        const CH = tH.split("#")[0],
          EH = tH.substring(CH.length),
          XH = BH.split("#")[0].split("/"),
          GH = CH.split("/");
        XH.pop();
        for (const BH of GH) "." !== BH && (".." === BH ? XH.pop() : XH.push(BH));
        return `url(${zH}${XH.join("/")}${EH}${zH})`
      }))
    }
    const NH = "(?:/\\*[^*]*\\*/)|[\\s;]",
      RH = new RegExp(`${NH}|\\b(0)px?`, "g"),
      jH = new RegExp(NH, "g");

    function nH(HH) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? HH.replace(jH, "") : HH.replace(RH, "$1")
    }

    function FH(HH, BH) {
      return function(HH, BH) {
        let LH = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const AH = Array.from(BH.childNodes),
          rH = [];
        let SH = 0;
        if (AH.length > 1 && HH && "string" === typeof HH) {
          let BH = nH(HH, LH);
          const hH = BH.length / HH.length;
          for (let tH = 1; tH < AH.length; tH++)
            if (AH[tH].textContent && "string" === typeof AH[tH].textContent) {
              const zH = nH(AH[tH].textContent, LH),
                CH = 100;
              let EH = 3;
              for (; EH < zH.length && (zH[EH].match(/[a-zA-Z0-9]/) || -1 !== zH.indexOf(zH.substring(0, EH), 1)); EH++);
              for (; EH < zH.length; EH++) {
                let XH = zH.substring(0, EH),
                  GH = BH.split(XH),
                  YH = -1;
                if (2 === GH.length) YH = GH[0].length;
                else if (GH.length > 2 && "" === GH[0] && "" !== AH[tH - 1].textContent) YH = BH.indexOf(XH, 1);
                else if (1 === GH.length) {
                  if (XH = XH.substring(0, XH.length - 1), GH = BH.split(XH), GH.length <= 1) return rH.push(HH), rH;
                  EH = CH + 1
                } else EH === zH.length - 1 && (YH = BH.indexOf(XH));
                if (GH.length >= 2 && EH > CH) {
                  const HH = AH[tH - 1].textContent;
                  if (HH && "string" === typeof HH) {
                    const LH = nH(HH).length;
                    YH = BH.indexOf(XH, LH)
                  } - 1 === YH && (YH = GH[0].length)
                }
                if (-1 !== YH) {
                  let tH = Math.floor(YH / hH);
                  for (; tH > 0 && tH < HH.length;) {
                    if (SH += 1, SH > 50 * AH.length) return rH.push(HH), rH;
                    const zH = nH(HH.substring(0, tH), LH);
                    if (zH.length === YH) {
                      rH.push(HH.substring(0, tH)), HH = HH.substring(tH), BH = BH.substring(YH);
                      break
                    }
                    zH.length < YH ? tH += Math.max(1, Math.floor((YH - zH.length) / hH)) : tH -= Math.max(1, Math.floor((zH.length - YH) * hH))
                  }
                  break
                }
              }
            }
        }
        return rH.push(HH), rH
      }(HH, BH).join("/* rr_split */")
    }
    let DH = 1;
    const wH = new RegExp("[^a-z0-9-_:]");

    function ZH() {
      return DH++
    }
    let dH, aH;
    const sH = /^[^ \t\n\r\u000c]+/,
      JH = /^[, \t\n\r\u000c]+/;
    const iH = new WeakMap;

    function pH(HH, BH) {
      return BH && "" !== BH.trim() ? HB(HH, BH) : BH
    }

    function yH(HH) {
      return Boolean("svg" === HH.tagName || HH.ownerSVGElement)
    }

    function HB(HH, BH) {
      let LH = iH.get(HH);
      if (LH || (LH = HH.createElement("a"), iH.set(HH, LH)), BH) {
        if (BH.startsWith("blob:") || BH.startsWith("data:")) return BH
      } else BH = "";
      return LH.setAttribute("href", BH), LH.href
    }

    function BB(HH, BH, LH, AH) {
      return AH ? "src" === LH || "href" === LH && ("use" !== BH || "#" !== AH[0]) || "xlink:href" === LH && "#" !== AH[0] || "background" === LH && ["table", "td", "th"].includes(BH) ? pH(HH, AH) : "srcset" === LH ? function(HH, BH) {
        if ("" === BH.trim()) return BH;
        let LH = 0;

        function AH(HH) {
          let AH;
          const rH = HH.exec(BH.substring(LH));
          return rH ? (AH = rH[0], LH += AH.length, AH) : ""
        }
        const rH = [];
        for (; AH(JH), !(LH >= BH.length);) {
          let SH = AH(sH);
          if ("," === SH.slice(-1)) SH = pH(HH, SH.substring(0, SH.length - 1)), rH.push(SH);
          else {
            let AH = "";
            SH = pH(HH, SH);
            let hH = !1;
            for (;;) {
              const HH = BH.charAt(LH);
              if ("" === HH) {
                rH.push((SH + AH).trim());
                break
              }
              if (hH) ")" === HH && (hH = !1);
              else {
                if ("," === HH) {
                  LH += 1, rH.push((SH + AH).trim());
                  break
                }
                "(" === HH && (hH = !0)
              }
              AH += HH, LH += 1
            }
          }
        }
        return rH.join(", ")
      }(HH, AH) : "style" === LH ? gH(AH, HB(HH)) : "object" === BH && "data" === LH ? pH(HH, AH) : AH : AH
    }

    function LB(HH, BH, LH) {
      return ["video", "audio"].includes(HH) && "autoplay" === oH(BH)
    }

    function AB(HH, BH, LH) {
      if (!HH) return !1;
      if (HH.nodeType !== HH.ELEMENT_NODE) return !!LH && AB(vH.parentNode(HH), BH, LH);
      for (let AH = HH.classList.length; AH--;) {
        const LH = HH.classList[AH];
        if (BH.test(LH)) return !0
      }
      return !!LH && AB(vH.parentNode(HH), BH, LH)
    }

    function rB(HH, BH, LH, AH) {
      let rH;
      if (PH(HH)) {
        if (rH = HH, !vH.childNodes(rH).length) return !1
      } else {
        if (null === vH.parentElement(HH)) return !1;
        rH = vH.parentElement(HH)
      }
      try {
        if ("string" === typeof BH) {
          if (AH) {
            if (rH.closest(`.${BH}`)) return !0
          } else if (rH.classList.contains(BH)) return !0
        } else if (AB(rH, BH, AH)) return !0;
        if (LH)
          if (AH) {
            if (rH.closest(LH)) return !0
          } else if (rH.matches(LH)) return !0
      } catch (SH) {}
      return !1
    }

    function SB(HH, BH) {
      const {
        doc: LH,
        mirror: AH,
        blockClass: rH,
        blockSelector: SH,
        needsMask: hH,
        inlineStylesheet: tH,
        maskInputOptions: CH = {},
        maskTextFn: EH,
        maskInputFn: XH,
        dataURLOptions: GH = {},
        inlineImages: YH,
        recordCanvas: uH,
        keepIframeSrcFn: QH,
        newlyAddedElement: WH = !1,
        cssCaptured: MH = !1
      } = BH, xH = function(HH, BH) {
        if (!BH.hasNode(HH)) return;
        const LH = BH.getId(HH);
        return 1 === LH ? void 0 : LH
      }(LH, AH);
      switch (HH.nodeType) {
        case HH.DOCUMENT_NODE:
          return "CSS1Compat" !== HH.compatMode ? {
            type: zH.Document,
            childNodes: [],
            compatMode: HH.compatMode
          } : {
            type: zH.Document,
            childNodes: []
          };
        case HH.DOCUMENT_TYPE_NODE:
          return {
            type: zH.DocumentType, name: HH.name, publicId: HH.publicId, systemId: HH.systemId, rootId: xH
          };
        case HH.ELEMENT_NODE:
          return function(HH, BH) {
            const {
              doc: LH,
              blockClass: AH,
              blockSelector: rH,
              inlineStylesheet: SH,
              maskInputOptions: hH = {},
              maskInputFn: tH,
              dataURLOptions: CH = {},
              inlineImages: EH,
              recordCanvas: XH,
              keepIframeSrcFn: GH,
              newlyAddedElement: YH = !1,
              rootId: uH
            } = BH, QH = function(HH, BH, LH) {
              try {
                if ("string" === typeof BH) {
                  if (HH.classList.contains(BH)) return !0
                } else
                  for (let LH = HH.classList.length; LH--;) {
                    const AH = HH.classList[LH];
                    if (BH.test(AH)) return !0
                  }
                if (LH) return HH.matches(LH)
              } catch (AH) {}
              return !1
            }(HH, AH, rH), WH = function(HH) {
              if (HH instanceof HTMLFormElement) return "form";
              const BH = oH(HH.tagName);
              return wH.test(BH) ? "div" : BH
            }(HH);
            let MH = {};
            const xH = HH.attributes.length;
            for (let zH = 0; zH < xH; zH++) {
              const BH = HH.attributes[zH];
              LB(WH, BH.name, BH.value) || (MH[BH.name] = BB(LH, WH, oH(BH.name), BH.value))
            }
            if ("link" === WH && SH) {
              const BH = Array.from(LH.styleSheets).find((BH => BH.href === HH.href));
              let AH = null;
              BH && (AH = VH(BH)), AH && (delete MH.rel, delete MH.href, MH._cssText = AH)
            }
            if ("style" === WH && HH.sheet) {
              let BH = VH(HH.sheet);
              BH && (HH.childNodes.length > 1 && (BH = FH(BH, HH)), MH._cssText = BH)
            }
            if (["input", "textarea", "select"].includes(WH)) {
              const BH = HH.value,
                LH = HH.checked;
              "radio" !== MH.type && "checkbox" !== MH.type && "submit" !== MH.type && "button" !== MH.type && BH ? MH.value = mH({
                element: HH,
                type: fH(HH),
                tagName: WH,
                value: BH,
                maskInputOptions: hH,
                maskInputFn: tH
              }) : LH && (MH.checked = LH)
            }
            "option" === WH && (HH.selected && !hH.select ? MH.selected = !0 : delete MH.selected);
            "dialog" === WH && HH.open && (MH.rr_open_mode = HH.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === WH && XH)
              if ("2d" === HH.__context)(function(HH) {
                const BH = HH.getContext("2d");
                if (!BH) return !0;
                for (let LH = 0; LH < HH.width; LH += 50)
                  for (let AH = 0; AH < HH.height; AH += 50) {
                    const rH = BH.getImageData,
                      SH = IH in rH ? rH[IH] : rH;
                    if (new Uint32Array(SH.call(BH, LH, AH, Math.min(50, HH.width - LH), Math.min(50, HH.height - AH)).data.buffer).some((HH => 0 !== HH))) return !1
                  }
                return !0
              })(HH) || (MH.rr_dataURL = HH.toDataURL(CH.type, CH.quality));
              else if (!("__context" in HH)) {
              const BH = HH.toDataURL(CH.type, CH.quality),
                AH = LH.createElement("canvas");
              AH.width = HH.width, AH.height = HH.height;
              BH !== AH.toDataURL(CH.type, CH.quality) && (MH.rr_dataURL = BH)
            }
            if ("img" === WH && EH) {
              dH || (dH = LH.createElement("canvas"), aH = dH.getContext("2d"));
              const BH = HH,
                AH = BH.currentSrc || BH.getAttribute("src") || "<unknown-src>",
                rH = BH.crossOrigin,
                SH = () => {
                  BH.removeEventListener("load", SH);
                  try {
                    dH.width = BH.naturalWidth, dH.height = BH.naturalHeight, aH.drawImage(BH, 0, 0), MH.rr_dataURL = dH.toDataURL(CH.type, CH.quality)
                  } catch (HH) {
                    if ("anonymous" !== BH.crossOrigin) return BH.crossOrigin = "anonymous", void(BH.complete && 0 !== BH.naturalWidth ? SH() : BH.addEventListener("load", SH));
                    console.warn(`Cannot inline img src=${AH}! Error: ${HH}`)
                  }
                  "anonymous" === BH.crossOrigin && (rH ? MH.crossOrigin = rH : BH.removeAttribute("crossorigin"))
                };
              BH.complete && 0 !== BH.naturalWidth ? SH() : BH.addEventListener("load", SH)
            }
            if (["audio", "video"].includes(WH)) {
              const BH = MH;
              BH.rr_mediaState = HH.paused ? "paused" : "played", BH.rr_mediaCurrentTime = HH.currentTime, BH.rr_mediaPlaybackRate = HH.playbackRate, BH.rr_mediaMuted = HH.muted, BH.rr_mediaLoop = HH.loop, BH.rr_mediaVolume = HH.volume
            }
            YH || (HH.scrollLeft && (MH.rr_scrollLeft = HH.scrollLeft), HH.scrollTop && (MH.rr_scrollTop = HH.scrollTop));
            if (QH) {
              const {
                width: BH,
                height: LH
              } = HH.getBoundingClientRect();
              MH = {
                class: MH.class,
                rr_width: `${BH}px`,
                rr_height: `${LH}px`
              }
            }
            "iframe" !== WH || GH(MH.src) || (HH.contentDocument || (MH.rr_src = MH.src), delete MH.src);
            let vH;
            try {
              customElements.get(WH) && (vH = !0)
            } catch (PH) {}
            return {
              type: zH.Element,
              tagName: WH,
              attributes: MH,
              childNodes: [],
              isSVG: yH(HH) || void 0,
              needBlock: QH,
              rootId: uH,
              isCustom: vH
            }
          }(HH, {
            doc: LH,
            blockClass: rH,
            blockSelector: SH,
            inlineStylesheet: tH,
            maskInputOptions: CH,
            maskInputFn: XH,
            dataURLOptions: GH,
            inlineImages: YH,
            recordCanvas: uH,
            keepIframeSrcFn: QH,
            newlyAddedElement: WH,
            rootId: xH
          });
        case HH.TEXT_NODE:
          return function(HH, BH) {
            const {
              needsMask: LH,
              maskTextFn: AH,
              rootId: rH,
              cssCaptured: SH
            } = BH, hH = vH.parentNode(HH), tH = hH && hH.tagName;
            let CH = "";
            const EH = "STYLE" === tH || void 0,
              XH = "SCRIPT" === tH || void 0;
            XH ? CH = "SCRIPT_PLACEHOLDER" : SH || (CH = vH.textContent(HH), EH && CH && (CH = gH(CH, HB(BH.doc))));
            !EH && !XH && CH && LH && (CH = AH ? AH(CH, vH.parentElement(HH)) : CH.replace(/[\S]/g, "*"));
            return {
              type: zH.Text,
              textContent: CH || "",
              rootId: rH
            }
          }(HH, {
            doc: LH,
            needsMask: hH,
            maskTextFn: EH,
            rootId: xH,
            cssCaptured: MH
          });
        case HH.CDATA_SECTION_NODE:
          return {
            type: zH.CDATA, textContent: "", rootId: xH
          };
        case HH.COMMENT_NODE:
          return {
            type: zH.Comment, textContent: vH.textContent(HH) || "", rootId: xH
          };
        default:
          return !1
      }
    }

    function hB(HH) {
      return void 0 === HH || null === HH ? "" : HH.toLowerCase()
    }

    function tB(HH) {
      return !0 === HH || "all" === HH ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === HH,
        headMetaDescKeywords: "all" === HH,
        headTitleMutations: "all" === HH
      } : HH || {}
    }

    function zB(HH, BH) {
      const {
        doc: LH,
        mirror: AH,
        blockClass: rH,
        blockSelector: SH,
        maskTextClass: hH,
        maskTextSelector: tH,
        skipChild: CH = !1,
        inlineStylesheet: EH = !0,
        maskInputOptions: XH = {},
        maskTextFn: GH,
        maskInputFn: YH,
        slimDOMOptions: uH,
        dataURLOptions: QH = {},
        inlineImages: WH = !1,
        recordCanvas: MH = !1,
        onSerialize: xH,
        onIframeLoad: VH,
        iframeLoadTimeout: OH = 5e3,
        onStylesheetLoad: bH,
        stylesheetLoadTimeout: kH = 5e3,
        keepIframeSrcFn: mH = () => !1,
        newlyAddedElement: oH = !1,
        cssCaptured: IH = !1
      } = BH;
      let {
        needsMask: fH
      } = BH, {
        preserveWhiteSpace: KH = !0
      } = BH;
      if (!fH) {
        fH = rB(HH, hH, tH, void 0 === fH)
      }
      const cH = SB(HH, {
        doc: LH,
        mirror: AH,
        blockClass: rH,
        blockSelector: SH,
        needsMask: fH,
        inlineStylesheet: EH,
        maskInputOptions: XH,
        maskTextFn: GH,
        maskInputFn: YH,
        dataURLOptions: QH,
        inlineImages: WH,
        recordCanvas: MH,
        keepIframeSrcFn: mH,
        newlyAddedElement: oH,
        cssCaptured: IH
      });
      if (!cH) return console.warn(HH, "not serialized"), null;
      let eH;
      eH = AH.hasNode(HH) ? AH.getId(HH) : function(HH, BH) {
        if (BH.comment && HH.type === zH.Comment) return !0;
        if (HH.type === zH.Element) {
          if (BH.script && ("script" === HH.tagName || "link" === HH.tagName && ("preload" === HH.attributes.rel && "script" === HH.attributes.as || "modulepreload" === HH.attributes.rel) || "link" === HH.tagName && "prefetch" === HH.attributes.rel && "string" === typeof HH.attributes.href && "js" === lH(HH.attributes.href))) return !0;
          if (BH.headFavicon && ("link" === HH.tagName && "shortcut icon" === HH.attributes.rel || "meta" === HH.tagName && (hB(HH.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === hB(HH.attributes.name) || "icon" === hB(HH.attributes.rel) || "apple-touch-icon" === hB(HH.attributes.rel) || "shortcut icon" === hB(HH.attributes.rel)))) return !0;
          if ("meta" === HH.tagName) {
            if (BH.headMetaDescKeywords && hB(HH.attributes.name).match(/^description|keywords$/)) return !0;
            if (BH.headMetaSocial && (hB(HH.attributes.property).match(/^(og|twitter|fb):/) || hB(HH.attributes.name).match(/^(og|twitter):/) || "pinterest" === hB(HH.attributes.name))) return !0;
            if (BH.headMetaRobots && ("robots" === hB(HH.attributes.name) || "googlebot" === hB(HH.attributes.name) || "bingbot" === hB(HH.attributes.name))) return !0;
            if (BH.headMetaHttpEquiv && void 0 !== HH.attributes["http-equiv"]) return !0;
            if (BH.headMetaAuthorship && ("author" === hB(HH.attributes.name) || "generator" === hB(HH.attributes.name) || "framework" === hB(HH.attributes.name) || "publisher" === hB(HH.attributes.name) || "progid" === hB(HH.attributes.name) || hB(HH.attributes.property).match(/^article:/) || hB(HH.attributes.property).match(/^product:/))) return !0;
            if (BH.headMetaVerification && ("google-site-verification" === hB(HH.attributes.name) || "yandex-verification" === hB(HH.attributes.name) || "csrf-token" === hB(HH.attributes.name) || "p:domain_verify" === hB(HH.attributes.name) || "verify-v1" === hB(HH.attributes.name) || "verification" === hB(HH.attributes.name) || "shopify-checkout-api-token" === hB(HH.attributes.name))) return !0
          }
        }
        return !1
      }(cH, uH) || !KH && cH.type === zH.Text && !cH.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : ZH();
      const qH = Object.assign(cH, {
        id: eH
      });
      if (AH.add(HH, qH), -2 === eH) return null;
      xH && xH(HH);
      let gH = !CH;
      if (qH.type === zH.Element) {
        gH = gH && !qH.needBlock, delete qH.needBlock;
        const BH = vH.shadowRoot(HH);
        BH && UH(BH) && (qH.isShadowHost = !0)
      }
      if ((qH.type === zH.Document || qH.type === zH.Element) && gH) {
        uH.headWhitespace && qH.type === zH.Element && "head" === qH.tagName && (KH = !1);
        const BH = {
          doc: LH,
          mirror: AH,
          blockClass: rH,
          blockSelector: SH,
          needsMask: fH,
          maskTextClass: hH,
          maskTextSelector: tH,
          skipChild: CH,
          inlineStylesheet: EH,
          maskInputOptions: XH,
          maskTextFn: GH,
          maskInputFn: YH,
          slimDOMOptions: uH,
          dataURLOptions: QH,
          inlineImages: WH,
          recordCanvas: MH,
          preserveWhiteSpace: KH,
          onSerialize: xH,
          onIframeLoad: VH,
          iframeLoadTimeout: OH,
          onStylesheetLoad: bH,
          stylesheetLoadTimeout: kH,
          keepIframeSrcFn: mH,
          cssCaptured: !1
        };
        if (qH.type === zH.Element && "textarea" === qH.tagName && void 0 !== qH.attributes.value);
        else {
          qH.type === zH.Element && void 0 !== qH.attributes._cssText && "string" === typeof qH.attributes._cssText && (BH.cssCaptured = !0);
          for (const LH of Array.from(vH.childNodes(HH))) {
            const HH = zB(LH, BH);
            HH && qH.childNodes.push(HH)
          }
        }
        let TH = null;
        if (PH(HH) && (TH = vH.shadowRoot(HH)))
          for (const HH of Array.from(vH.childNodes(TH))) {
            const LH = zB(HH, BH);
            LH && (UH(TH) && (LH.isShadow = !0), qH.childNodes.push(LH))
          }
      }
      const NH = vH.parentNode(HH);
      return NH && TH(NH) && UH(NH) && (qH.isShadow = !0), qH.type === zH.Element && "iframe" === qH.tagName && function(HH, BH, LH) {
        const AH = HH.contentWindow;
        if (!AH) return;
        let rH, SH = !1;
        try {
          rH = AH.document.readyState
        } catch (tH) {
          return
        }
        if ("complete" !== rH) {
          const AH = setTimeout((() => {
            SH || (BH(), SH = !0)
          }), LH);
          return void HH.addEventListener("load", (() => {
            clearTimeout(AH), SH = !0, BH()
          }))
        }
        const hH = "about:blank";
        if (AH.location.href !== hH || HH.src === hH || "" === HH.src) return setTimeout(BH, 0), HH.addEventListener("load", BH);
        HH.addEventListener("load", BH)
      }(HH, (() => {
        const BH = HH.contentDocument;
        if (BH && VH) {
          const LH = zB(BH, {
            doc: BH,
            mirror: AH,
            blockClass: rH,
            blockSelector: SH,
            needsMask: fH,
            maskTextClass: hH,
            maskTextSelector: tH,
            skipChild: !1,
            inlineStylesheet: EH,
            maskInputOptions: XH,
            maskTextFn: GH,
            maskInputFn: YH,
            slimDOMOptions: uH,
            dataURLOptions: QH,
            inlineImages: WH,
            recordCanvas: MH,
            preserveWhiteSpace: KH,
            onSerialize: xH,
            onIframeLoad: VH,
            iframeLoadTimeout: OH,
            onStylesheetLoad: bH,
            stylesheetLoadTimeout: kH,
            keepIframeSrcFn: mH
          });
          LH && VH(HH, LH)
        }
      }), OH), qH.type === zH.Element && "link" === qH.tagName && "string" === typeof qH.attributes.rel && ("stylesheet" === qH.attributes.rel || "preload" === qH.attributes.rel && "string" === typeof qH.attributes.href && "css" === lH(qH.attributes.href)) && function(HH, BH, LH) {
        let AH, rH = !1;
        try {
          AH = HH.sheet
        } catch (hH) {
          return
        }
        if (AH) return;
        const SH = setTimeout((() => {
          rH || (BH(), rH = !0)
        }), LH);
        HH.addEventListener("load", (() => {
          clearTimeout(SH), rH = !0, BH()
        }))
      }(HH, (() => {
        if (bH) {
          const BH = zB(HH, {
            doc: LH,
            mirror: AH,
            blockClass: rH,
            blockSelector: SH,
            needsMask: fH,
            maskTextClass: hH,
            maskTextSelector: tH,
            skipChild: !1,
            inlineStylesheet: EH,
            maskInputOptions: XH,
            maskTextFn: GH,
            maskInputFn: YH,
            slimDOMOptions: uH,
            dataURLOptions: QH,
            inlineImages: WH,
            recordCanvas: MH,
            preserveWhiteSpace: KH,
            onSerialize: xH,
            onIframeLoad: VH,
            iframeLoadTimeout: OH,
            onStylesheetLoad: bH,
            stylesheetLoadTimeout: kH,
            keepIframeSrcFn: mH
          });
          BH && bH(HH, BH)
        }
      }), kH), qH
    }
    const CB = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      EB = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(HH) {
            HH.params.match(CB) && (HH.params = HH.params.replace(CB, "$1-$2"))
          }
        })
      },
      XB = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const HH = [];
          return {
            Rule: function(BH) {
              -1 === HH.indexOf(BH) && (HH.push(BH), BH.selectors.forEach((function(HH) {
                HH.includes(":hover") && (BH.selector += ",\n" + HH.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function GB(HH) {
      return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
    }

    function YB(HH) {
      if (HH.__esModule) return HH;
      var BH = HH.default;
      if ("function" == typeof BH) {
        var LH = function HH() {
          return this instanceof HH ? Reflect.construct(BH, arguments, this.constructor) : BH.apply(this, arguments)
        };
        LH.prototype = BH.prototype
      } else LH = {};
      return Object.defineProperty(LH, "__esModule", {
        value: !0
      }), Object.keys(HH).forEach((function(BH) {
        var AH = Object.getOwnPropertyDescriptor(HH, BH);
        Object.defineProperty(LH, BH, AH.get ? AH : {
          enumerable: !0,
          get: function() {
            return HH[BH]
          }
        })
      })), LH
    }
    var uB, QB = {
      exports: {}
    };

    function WB() {
      if (uB) return QB.exports;
      uB = 1;
      var HH = String,
        BH = function() {
          return {
            isColorSupported: !1,
            reset: HH,
            bold: HH,
            dim: HH,
            italic: HH,
            underline: HH,
            inverse: HH,
            hidden: HH,
            strikethrough: HH,
            black: HH,
            red: HH,
            green: HH,
            yellow: HH,
            blue: HH,
            magenta: HH,
            cyan: HH,
            white: HH,
            gray: HH,
            bgBlack: HH,
            bgRed: HH,
            bgGreen: HH,
            bgYellow: HH,
            bgBlue: HH,
            bgMagenta: HH,
            bgCyan: HH,
            bgWhite: HH
          }
        };
      return QB.exports = BH(), QB.exports.createColors = BH, QB.exports
    }
    const MB = YB(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var xB, vB;

    function PB() {
      if (vB) return xB;
      vB = 1;
      let HH = WB(),
        BH = MB;
      class LH extends Error {
        constructor(HH, BH, AH, rH, SH, hH) {
          super(HH), this.name = "CssSyntaxError", this.reason = HH, SH && (this.file = SH), rH && (this.source = rH), hH && (this.plugin = hH), "undefined" !== typeof BH && "undefined" !== typeof AH && ("number" === typeof BH ? (this.line = BH, this.column = AH) : (this.line = BH.line, this.column = BH.column, this.endLine = AH.line, this.endColumn = AH.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, LH)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(LH) {
          if (!this.source) return "";
          let AH = this.source;
          null == LH && (LH = HH.isColorSupported), BH && LH && (AH = BH(AH));
          let rH, SH, hH = AH.split(/\r?\n/),
            tH = Math.max(this.line - 3, 0),
            zH = Math.min(this.line + 2, hH.length),
            CH = String(zH).length;
          if (LH) {
            let {
              bold: BH,
              gray: LH,
              red: AH
            } = HH.createColors(!0);
            rH = HH => BH(AH(HH)), SH = HH => LH(HH)
          } else rH = SH = HH => HH;
          return hH.slice(tH, zH).map(((HH, BH) => {
            let LH = tH + 1 + BH,
              AH = " " + (" " + LH).slice(-CH) + " | ";
            if (LH === this.line) {
              let BH = SH(AH.replace(/\d/g, " ")) + HH.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return rH(">") + SH(AH) + HH + "\n " + BH + rH("^")
            }
            return " " + SH(AH) + HH
          })).join("\n")
        }
        toString() {
          let HH = this.showSourceCode();
          return HH && (HH = "\n\n" + HH + "\n"), this.name + ": " + this.message + HH
        }
      }
      return xB = LH, LH.default = LH, xB
    }
    var TB, UB, VB, OB, bB, kB, mB, oB, IB, fB, lB, KB, cB, eB, qB, gB, NB, RB, jB, nB, FB, DB, wB, ZB, dB, aB, sB, JB, iB, pB, yB, HL, BL, LL, AL, rL, SL, hL, tL, zL, CL, EL, XL, GL, YL, uL, QL, WL, ML, xL, vL, PL, TL, UL = {};

    function VL() {
      return TB || (TB = 1, UL.isClean = Symbol("isClean"), UL.my = Symbol("my")), UL
    }

    function OL() {
      if (VB) return UB;
      VB = 1;
      const HH = {
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
      class BH {
        constructor(HH) {
          this.builder = HH
        }
        atrule(HH, BH) {
          let LH = "@" + HH.name,
            AH = HH.params ? this.rawValue(HH, "params") : "";
          if ("undefined" !== typeof HH.raws.afterName ? LH += HH.raws.afterName : AH && (LH += " "), HH.nodes) this.block(HH, LH + AH);
          else {
            let rH = (HH.raws.between || "") + (BH ? ";" : "");
            this.builder(LH + AH + rH, HH)
          }
        }
        beforeAfter(HH, BH) {
          let LH;
          LH = "decl" === HH.type ? this.raw(HH, null, "beforeDecl") : "comment" === HH.type ? this.raw(HH, null, "beforeComment") : "before" === BH ? this.raw(HH, null, "beforeRule") : this.raw(HH, null, "beforeClose");
          let AH = HH.parent,
            rH = 0;
          for (; AH && "root" !== AH.type;) rH += 1, AH = AH.parent;
          if (LH.includes("\n")) {
            let BH = this.raw(HH, null, "indent");
            if (BH.length)
              for (let HH = 0; HH < rH; HH++) LH += BH
          }
          return LH
        }
        block(HH, BH) {
          let LH, AH = this.raw(HH, "between", "beforeOpen");
          this.builder(BH + AH + "{", HH, "start"), HH.nodes && HH.nodes.length ? (this.body(HH), LH = this.raw(HH, "after")) : LH = this.raw(HH, "after", "emptyBody"), LH && this.builder(LH), this.builder("}", HH, "end")
        }
        body(HH) {
          let BH = HH.nodes.length - 1;
          for (; BH > 0 && "comment" === HH.nodes[BH].type;) BH -= 1;
          let LH = this.raw(HH, "semicolon");
          for (let AH = 0; AH < HH.nodes.length; AH++) {
            let rH = HH.nodes[AH],
              SH = this.raw(rH, "before");
            SH && this.builder(SH), this.stringify(rH, BH !== AH || LH)
          }
        }
        comment(HH) {
          let BH = this.raw(HH, "left", "commentLeft"),
            LH = this.raw(HH, "right", "commentRight");
          this.builder("/*" + BH + HH.text + LH + "*/", HH)
        }
        decl(HH, BH) {
          let LH = this.raw(HH, "between", "colon"),
            AH = HH.prop + LH + this.rawValue(HH, "value");
          HH.important && (AH += HH.raws.important || " !important"), BH && (AH += ";"), this.builder(AH, HH)
        }
        document(HH) {
          this.body(HH)
        }
        raw(BH, LH, AH) {
          let rH;
          if (AH || (AH = LH), LH && (rH = BH.raws[LH], "undefined" !== typeof rH)) return rH;
          let SH = BH.parent;
          if ("before" === AH) {
            if (!SH || "root" === SH.type && SH.first === BH) return "";
            if (SH && "document" === SH.type) return ""
          }
          if (!SH) return HH[AH];
          let hH = BH.root();
          if (hH.rawCache || (hH.rawCache = {}), "undefined" !== typeof hH.rawCache[AH]) return hH.rawCache[AH];
          if ("before" === AH || "after" === AH) return this.beforeAfter(BH, AH);
          {
            let HH = "raw" + ((tH = AH)[0].toUpperCase() + tH.slice(1));
            this[HH] ? rH = this[HH](hH, BH) : hH.walk((HH => {
              if (rH = HH.raws[LH], "undefined" !== typeof rH) return !1
            }))
          }
          var tH;
          return "undefined" === typeof rH && (rH = HH[AH]), hH.rawCache[AH] = rH, rH
        }
        rawBeforeClose(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && HH.nodes.length > 0 && "undefined" !== typeof HH.raws.after) return BH = HH.raws.after, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
          })), BH && (BH = BH.replace(/\S/g, "")), BH
        }
        rawBeforeComment(HH, BH) {
          let LH;
          return HH.walkComments((HH => {
            if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeDecl") : LH && (LH = LH.replace(/\S/g, "")), LH
        }
        rawBeforeDecl(HH, BH) {
          let LH;
          return HH.walkDecls((HH => {
            if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeRule") : LH && (LH = LH.replace(/\S/g, "")), LH
        }
        rawBeforeOpen(HH) {
          let BH;
          return HH.walk((HH => {
            if ("decl" !== HH.type && (BH = HH.raws.between, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawBeforeRule(HH) {
          let BH;
          return HH.walk((LH => {
            if (LH.nodes && (LH.parent !== HH || HH.first !== LH) && "undefined" !== typeof LH.raws.before) return BH = LH.raws.before, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
          })), BH && (BH = BH.replace(/\S/g, "")), BH
        }
        rawColon(HH) {
          let BH;
          return HH.walkDecls((HH => {
            if ("undefined" !== typeof HH.raws.between) return BH = HH.raws.between.replace(/[^\s:]/g, ""), !1
          })), BH
        }
        rawEmptyBody(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && 0 === HH.nodes.length && (BH = HH.raws.after, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawIndent(HH) {
          if (HH.raws.indent) return HH.raws.indent;
          let BH;
          return HH.walk((LH => {
            let AH = LH.parent;
            if (AH && AH !== HH && AH.parent && AH.parent === HH && "undefined" !== typeof LH.raws.before) {
              let HH = LH.raws.before.split("\n");
              return BH = HH[HH.length - 1], BH = BH.replace(/\S/g, ""), !1
            }
          })), BH
        }
        rawSemicolon(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && HH.nodes.length && "decl" === HH.last.type && (BH = HH.raws.semicolon, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawValue(HH, BH) {
          let LH = HH[BH],
            AH = HH.raws[BH];
          return AH && AH.value === LH ? AH.raw : LH
        }
        root(HH) {
          this.body(HH), HH.raws.after && this.builder(HH.raws.after)
        }
        rule(HH) {
          this.block(HH, this.rawValue(HH, "selector")), HH.raws.ownSemicolon && this.builder(HH.raws.ownSemicolon, HH, "end")
        }
        stringify(HH, BH) {
          if (!this[HH.type]) throw new Error("Unknown AST node type " + HH.type + ". Maybe you need to change PostCSS stringifier.");
          this[HH.type](HH, BH)
        }
      }
      return UB = BH, BH.default = BH, UB
    }

    function bL() {
      if (bB) return OB;
      bB = 1;
      let HH = OL();

      function BH(BH, LH) {
        new HH(LH).stringify(BH)
      }
      return OB = BH, BH.default = BH, OB
    }

    function kL() {
      if (mB) return kB;
      mB = 1;
      let {
        isClean: HH,
        my: BH
      } = VL(), LH = PB(), AH = OL(), rH = bL();

      function SH(HH, BH) {
        let LH = new HH.constructor;
        for (let AH in HH) {
          if (!Object.prototype.hasOwnProperty.call(HH, AH)) continue;
          if ("proxyCache" === AH) continue;
          let rH = HH[AH],
            hH = typeof rH;
          "parent" === AH && "object" === hH ? BH && (LH[AH] = BH) : "source" === AH ? LH[AH] = rH : Array.isArray(rH) ? LH[AH] = rH.map((HH => SH(HH, LH))) : ("object" === hH && null !== rH && (rH = SH(rH)), LH[AH] = rH)
        }
        return LH
      }
      class hH {
        constructor() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[HH] = !1, this[BH] = !0;
          for (let HH in LH)
            if ("nodes" === HH) {
              this.nodes = [];
              for (let BH of LH[HH]) "function" === typeof BH.clone ? this.append(BH.clone()) : this.append(BH)
            } else this[HH] = LH[HH]
        }
        addToError(HH) {
          if (HH.postcssNode = this, HH.stack && this.source && /\n\s{4}at /.test(HH.stack)) {
            let BH = this.source;
            HH.stack = HH.stack.replace(/\n\s{4}at /, `$&${BH.input.from}:${BH.start.line}:${BH.start.column}$&`)
          }
          return HH
        }
        after(HH) {
          return this.parent.insertAfter(this, HH), this
        }
        assign() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let BH in HH) this[BH] = HH[BH];
          return this
        }
        before(HH) {
          return this.parent.insertBefore(this, HH), this
        }
        cleanRaws(HH) {
          delete this.raws.before, delete this.raws.after, HH || delete this.raws.between
        }
        clone() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = SH(this);
          for (let LH in HH) BH[LH] = HH[LH];
          return BH
        }
        cloneAfter() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = this.clone(HH);
          return this.parent.insertAfter(this, BH), BH
        }
        cloneBefore() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = this.clone(HH);
          return this.parent.insertBefore(this, BH), BH
        }
        error(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: LH,
              start: AH
            } = this.rangeBy(BH);
            return this.source.input.error(HH, {
              column: AH.column,
              line: AH.line
            }, {
              column: LH.column,
              line: LH.line
            }, BH)
          }
          return new LH(HH)
        }
        getProxyProcessor() {
          return {
            get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
            set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "prop" !== BH && "value" !== BH && "name" !== BH && "params" !== BH && "important" !== BH && "text" !== BH || HH.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[HH]) {
            this[HH] = !1;
            let BH = this;
            for (; BH = BH.parent;) BH[HH] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let HH = this.parent.index(this);
          return this.parent.nodes[HH + 1]
        }
        positionBy(HH, BH) {
          let LH = this.source.start;
          if (HH.index) LH = this.positionInside(HH.index, BH);
          else if (HH.word) {
            let AH = (BH = this.toString()).indexOf(HH.word); - 1 !== AH && (LH = this.positionInside(AH, BH))
          }
          return LH
        }
        positionInside(HH, BH) {
          let LH = BH || this.toString(),
            AH = this.source.start.column,
            rH = this.source.start.line;
          for (let SH = 0; SH < HH; SH++) "\n" === LH[SH] ? (AH = 1, rH += 1) : AH += 1;
          return {
            column: AH,
            line: rH
          }
        }
        prev() {
          if (!this.parent) return;
          let HH = this.parent.index(this);
          return this.parent.nodes[HH - 1]
        }
        rangeBy(HH) {
          let BH = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            LH = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: BH.column + 1,
              line: BH.line
            };
          if (HH.word) {
            let AH = this.toString(),
              rH = AH.indexOf(HH.word); - 1 !== rH && (BH = this.positionInside(rH, AH), LH = this.positionInside(rH + HH.word.length, AH))
          } else HH.start ? BH = {
            column: HH.start.column,
            line: HH.start.line
          } : HH.index && (BH = this.positionInside(HH.index)), HH.end ? LH = {
            column: HH.end.column,
            line: HH.end.line
          } : "number" === typeof HH.endIndex ? LH = this.positionInside(HH.endIndex) : HH.index && (LH = this.positionInside(HH.index + 1));
          return (LH.line < BH.line || LH.line === BH.line && LH.column <= BH.column) && (LH = {
            column: BH.column + 1,
            line: BH.line
          }), {
            end: LH,
            start: BH
          }
        }
        raw(HH, BH) {
          return (new AH).raw(this, HH, BH)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let AH = this,
              rH = !1;
            for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
            for (let HH of BH) HH === this ? rH = !0 : rH ? (this.parent.insertAfter(AH, HH), AH = HH) : this.parent.insertBefore(AH, HH);
            rH || this.remove()
          }
          return this
        }
        root() {
          let HH = this;
          for (; HH.parent && "document" !== HH.parent.type;) HH = HH.parent;
          return HH
        }
        toJSON(HH, BH) {
          let LH = {},
            AH = null == BH;
          BH = BH || new Map;
          let rH = 0;
          for (let SH in this) {
            if (!Object.prototype.hasOwnProperty.call(this, SH)) continue;
            if ("parent" === SH || "proxyCache" === SH) continue;
            let HH = this[SH];
            if (Array.isArray(HH)) LH[SH] = HH.map((HH => "object" === typeof HH && HH.toJSON ? HH.toJSON(null, BH) : HH));
            else if ("object" === typeof HH && HH.toJSON) LH[SH] = HH.toJSON(null, BH);
            else if ("source" === SH) {
              let AH = BH.get(HH.input);
              null == AH && (AH = rH, BH.set(HH.input, rH), rH++), LH[SH] = {
                end: HH.end,
                inputId: AH,
                start: HH.start
              }
            } else LH[SH] = HH
          }
          return AH && (LH.inputs = [...BH.keys()].map((HH => HH.toJSON()))), LH
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH;
          HH.stringify && (HH = HH.stringify);
          let BH = "";
          return HH(this, (HH => {
            BH += HH
          })), BH
        }
        warn(HH, BH, LH) {
          let AH = {
            node: this
          };
          for (let rH in LH) AH[rH] = LH[rH];
          return HH.warn(BH, AH)
        }
        get proxyOf() {
          return this
        }
      }
      return kB = hH, hH.default = hH, kB
    }

    function mL() {
      if (IB) return oB;
      IB = 1;
      let HH = kL();
      class BH extends HH {
        constructor(HH) {
          HH && "undefined" !== typeof HH.value && "string" !== typeof HH.value && (HH = {
            ...HH,
            value: String(HH.value)
          }), super(HH), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return oB = BH, BH.default = BH, oB
    }

    function oL() {
      if (lB) return fB;
      lB = 1;
      return fB = {
        nanoid: function() {
          let HH = "",
            BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; BH--;) HH += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return HH
        },
        customAlphabet: function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let LH = "",
              AH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BH;
            for (; AH--;) LH += HH[Math.random() * HH.length | 0];
            return LH
          }
        }
      }, fB
    }

    function IL() {
      if (cB) return KB;
      cB = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = MB, {
        existsSync: LH,
        readFileSync: AH
      } = MB, {
        dirname: rH,
        join: SH
      } = MB;
      class hH {
        constructor(HH, BH) {
          if (!1 === BH.map) return;
          this.loadAnnotation(HH), this.inline = this.startWith(this.annotation, "data:");
          let LH = BH.map ? BH.map.prev : void 0,
            AH = this.loadMap(BH.from, LH);
          !this.mapFile && BH.from && (this.mapFile = BH.from), this.mapFile && (this.root = rH(this.mapFile)), AH && (this.text = AH)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new HH(this.text)), this.consumerCache
        }
        decodeInline(HH) {
          if (/^data:application\/json;charset=utf-?8,/.test(HH) || /^data:application\/json,/.test(HH)) return decodeURIComponent(HH.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(HH) || /^data:application\/json;base64,/.test(HH)) return BH = HH.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(BH, "base64").toString() : window.atob(BH);
          var BH;
          let LH = HH.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + LH)
        }
        getAnnotationURL(HH) {
          return HH.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(HH) {
          return "object" === typeof HH && ("string" === typeof HH.mappings || "string" === typeof HH._mappings || Array.isArray(HH.sections))
        }
        loadAnnotation(HH) {
          let BH = HH.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!BH) return;
          let LH = HH.lastIndexOf(BH.pop()),
            AH = HH.indexOf("*/", LH);
          LH > -1 && AH > -1 && (this.annotation = this.getAnnotationURL(HH.substring(LH, AH)))
        }
        loadFile(HH) {
          if (this.root = rH(HH), LH(HH)) return this.mapFile = HH, AH(HH, "utf-8").toString().trim()
        }
        loadMap(LH, AH) {
          if (!1 === AH) return !1;
          if (AH) {
            if ("string" === typeof AH) return AH;
            if ("function" !== typeof AH) {
              if (AH instanceof HH) return BH.fromSourceMap(AH).toString();
              if (AH instanceof BH) return AH.toString();
              if (this.isMap(AH)) return JSON.stringify(AH);
              throw new Error("Unsupported previous source map format: " + AH.toString())
            } {
              let HH = AH(LH);
              if (HH) {
                let BH = this.loadFile(HH);
                if (!BH) throw new Error("Unable to load previous source map: " + HH.toString());
                return BH
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let HH = this.annotation;
              return LH && (HH = SH(rH(LH), HH)), this.loadFile(HH)
            }
          }
        }
        startWith(HH, BH) {
          return !!HH && HH.substr(0, BH.length) === BH
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return KB = hH, hH.default = hH, KB
    }

    function fL() {
      if (qB) return eB;
      qB = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = MB, {
        fileURLToPath: LH,
        pathToFileURL: AH
      } = MB, {
        isAbsolute: rH,
        resolve: SH
      } = MB, {
        nanoid: hH
      } = oL(), tH = MB, zH = PB(), CH = IL(), EH = Symbol("fromOffsetCache"), XH = Boolean(HH && BH), GH = Boolean(SH && rH);
      class YH {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === HH || "undefined" === typeof HH || "object" === typeof HH && !HH.toString) throw new Error(`PostCSS received ${HH} instead of CSS string`);
          if (this.css = HH.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, BH.from && (!GH || /^\w+:\/\//.test(BH.from) || rH(BH.from) ? this.file = BH.from : this.file = SH(BH.from)), GH && XH) {
            let HH = new CH(this.css, BH);
            if (HH.text) {
              this.map = HH;
              let BH = HH.consumer().file;
              !this.file && BH && (this.file = this.mapResolve(BH))
            }
          }
          this.file || (this.id = "<input css " + hH(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(HH, BH, LH) {
          let rH, SH, hH, tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (BH && "object" === typeof BH) {
            let HH = BH,
              AH = LH;
            if ("number" === typeof HH.offset) {
              let AH = this.fromOffset(HH.offset);
              BH = AH.line, LH = AH.col
            } else BH = HH.line, LH = HH.column;
            if ("number" === typeof AH.offset) {
              let HH = this.fromOffset(AH.offset);
              SH = HH.line, hH = HH.col
            } else SH = AH.line, hH = AH.column
          } else if (!LH) {
            let HH = this.fromOffset(BH);
            BH = HH.line, LH = HH.col
          }
          let CH = this.origin(BH, LH, SH, hH);
          return rH = CH ? new zH(HH, void 0 === CH.endLine ? CH.line : {
            column: CH.column,
            line: CH.line
          }, void 0 === CH.endLine ? CH.column : {
            column: CH.endColumn,
            line: CH.endLine
          }, CH.source, CH.file, tH.plugin) : new zH(HH, void 0 === SH ? BH : {
            column: LH,
            line: BH
          }, void 0 === SH ? LH : {
            column: hH,
            line: SH
          }, this.css, this.file, tH.plugin), rH.input = {
            column: LH,
            endColumn: hH,
            endLine: SH,
            line: BH,
            source: this.css
          }, this.file && (AH && (rH.input.url = AH(this.file).toString()), rH.input.file = this.file), rH
        }
        fromOffset(HH) {
          let BH, LH;
          if (this[EH]) LH = this[EH];
          else {
            let HH = this.css.split("\n");
            LH = new Array(HH.length);
            let BH = 0;
            for (let AH = 0, rH = HH.length; AH < rH; AH++) LH[AH] = BH, BH += HH[AH].length + 1;
            this[EH] = LH
          }
          BH = LH[LH.length - 1];
          let AH = 0;
          if (HH >= BH) AH = LH.length - 1;
          else {
            let BH, rH = LH.length - 2;
            for (; AH < rH;)
              if (BH = AH + (rH - AH >> 1), HH < LH[BH]) rH = BH - 1;
              else {
                if (!(HH >= LH[BH + 1])) {
                  AH = BH;
                  break
                }
                AH = BH + 1
              }
          }
          return {
            col: HH - LH[AH] + 1,
            line: AH + 1
          }
        }
        mapResolve(HH) {
          return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
        }
        origin(HH, BH, SH, hH) {
          if (!this.map) return !1;
          let tH, zH, CH = this.map.consumer(),
            EH = CH.originalPositionFor({
              column: BH,
              line: HH
            });
          if (!EH.source) return !1;
          "number" === typeof SH && (tH = CH.originalPositionFor({
            column: hH,
            line: SH
          })), zH = rH(EH.source) ? AH(EH.source) : new URL(EH.source, this.map.consumer().sourceRoot || AH(this.map.mapFile));
          let XH = {
            column: EH.column,
            endColumn: tH && tH.column,
            endLine: tH && tH.line,
            line: EH.line,
            url: zH.toString()
          };
          if ("file:" === zH.protocol) {
            if (!LH) throw new Error("file: protocol is not available in this PostCSS build");
            XH.file = LH(zH)
          }
          let GH = CH.sourceContentFor(EH.source);
          return GH && (XH.source = GH), XH
        }
        toJSON() {
          let HH = {};
          for (let BH of ["hasBOM", "css", "file", "id"]) null != this[BH] && (HH[BH] = this[BH]);
          return this.map && (HH.map = {
            ...this.map
          }, HH.map.consumerCache && (HH.map.consumerCache = void 0)), HH
        }
        get from() {
          return this.file || this.id
        }
      }
      return eB = YH, YH.default = YH, tH && tH.registerInput && tH.registerInput(YH), eB
    }

    function lL() {
      if (NB) return gB;
      NB = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = MB, {
        dirname: LH,
        relative: AH,
        resolve: rH,
        sep: SH
      } = MB, {
        pathToFileURL: hH
      } = MB, tH = fL(), zH = Boolean(HH && BH), CH = Boolean(LH && rH && AH && SH);
      return gB = class {
        constructor(HH, BH, LH, AH) {
          this.stringify = HH, this.mapOpts = LH.map || {}, this.root = BH, this.opts = LH, this.css = AH, this.originalCSS = AH, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let HH;
          HH = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let BH = "\n";
          this.css.includes("\r\n") && (BH = "\r\n"), this.css += BH + "/*# sourceMappingURL=" + HH + " */"
        }
        applyPrevMaps() {
          for (let BH of this.previous()) {
            let AH, rH = this.toUrl(this.path(BH.file)),
              SH = BH.root || LH(BH.file);
            !1 === this.mapOpts.sourcesContent ? (AH = new HH(BH.text), AH.sourcesContent && (AH.sourcesContent = null)) : AH = BH.consumer(), this.map.applySourceMap(AH, rH, this.toUrl(this.path(SH)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let HH;
              for (let BH = this.root.nodes.length - 1; BH >= 0; BH--) HH = this.root.nodes[BH], "comment" === HH.type && 0 === HH.text.indexOf("# sourceMappingURL=") && this.root.removeChild(BH)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), CH && zH && this.isMap()) return this.generateMap();
          {
            let HH = "";
            return this.stringify(this.root, (BH => {
              HH += BH
            })), [HH]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let HH = this.previous()[0].consumer();
            HH.file = this.outputFile(), this.map = BH.fromSourceMap(HH, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new BH({
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
          this.css = "", this.map = new BH({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let HH, LH, AH = 1,
            rH = 1,
            SH = "<no source>",
            hH = {
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
          this.stringify(this.root, ((BH, tH, zH) => {
            if (this.css += BH, tH && "end" !== zH && (hH.generated.line = AH, hH.generated.column = rH - 1, tH.source && tH.source.start ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.start.line, hH.original.column = tH.source.start.column - 1, this.map.addMapping(hH)) : (hH.source = SH, hH.original.line = 1, hH.original.column = 0, this.map.addMapping(hH))), HH = BH.match(/\n/g), HH ? (AH += HH.length, LH = BH.lastIndexOf("\n"), rH = BH.length - LH) : rH += BH.length, tH && "start" !== zH) {
              let HH = tH.parent || {
                raws: {}
              };
              ("decl" === tH.type || "atrule" === tH.type && !tH.nodes) && tH === HH.last && !HH.raws.semicolon || (tH.source && tH.source.end ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.end.line, hH.original.column = tH.source.end.column - 1, hH.generated.line = AH, hH.generated.column = rH - 2, this.map.addMapping(hH)) : (hH.source = SH, hH.original.line = 1, hH.original.column = 0, hH.generated.line = AH, hH.generated.column = rH - 1, this.map.addMapping(hH)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((HH => HH.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let HH = this.mapOpts.annotation;
          return ("undefined" === typeof HH || !0 === HH) && (!this.previous().length || this.previous().some((HH => HH.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((HH => HH.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(HH) {
          if (this.mapOpts.absolute) return HH;
          if (60 === HH.charCodeAt(0)) return HH;
          if (/^\w+:\/\//.test(HH)) return HH;
          let BH = this.memoizedPaths.get(HH);
          if (BH) return BH;
          let SH = this.opts.to ? LH(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (SH = LH(rH(SH, this.mapOpts.annotation)));
          let hH = AH(SH, HH);
          return this.memoizedPaths.set(HH, hH), hH
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((HH => {
              if (HH.source && HH.source.input.map) {
                let BH = HH.source.input.map;
                this.previousMaps.includes(BH) || this.previousMaps.push(BH)
              }
            }));
            else {
              let HH = new tH(this.originalCSS, this.opts);
              HH.map && this.previousMaps.push(HH.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let HH = {};
          if (this.root) this.root.walk((BH => {
            if (BH.source) {
              let LH = BH.source.input.from;
              if (LH && !HH[LH]) {
                HH[LH] = !0;
                let AH = this.usesFileUrls ? this.toFileUrl(LH) : this.toUrl(this.path(LH));
                this.map.setSourceContent(AH, BH.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let HH = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(HH, this.css)
          }
        }
        sourcePath(HH) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(HH.source.input.from) : this.toUrl(this.path(HH.source.input.from))
        }
        toBase64(HH) {
          return Buffer ? Buffer.from(HH).toString("base64") : window.btoa(unescape(encodeURIComponent(HH)))
        }
        toFileUrl(HH) {
          let BH = this.memoizedFileURLs.get(HH);
          if (BH) return BH;
          if (hH) {
            let BH = hH(HH).toString();
            return this.memoizedFileURLs.set(HH, BH), BH
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(HH) {
          let BH = this.memoizedURLs.get(HH);
          if (BH) return BH;
          "\\" === SH && (HH = HH.replace(/\\/g, "/"));
          let LH = encodeURI(HH).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(HH, LH), LH
        }
      }
    }

    function KL() {
      if (jB) return RB;
      jB = 1;
      let HH = kL();
      class BH extends HH {
        constructor(HH) {
          super(HH), this.type = "comment"
        }
      }
      return RB = BH, BH.default = BH, RB
    }

    function cL() {
      if (FB) return nB;
      FB = 1;
      let HH, BH, LH, AH, {
          isClean: rH,
          my: SH
        } = VL(),
        hH = mL(),
        tH = KL(),
        zH = kL();

      function CH(HH) {
        return HH.map((HH => (HH.nodes && (HH.nodes = CH(HH.nodes)), delete HH.source, HH)))
      }

      function EH(HH) {
        if (HH[rH] = !1, HH.proxyOf.nodes)
          for (let BH of HH.proxyOf.nodes) EH(BH)
      }
      class XH extends zH {
        append() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          for (let AH of BH) {
            let HH = this.normalize(AH, this.last);
            for (let BH of HH) this.proxyOf.nodes.push(BH)
          }
          return this.markDirty(), this
        }
        cleanRaws(HH) {
          if (super.cleanRaws(HH), this.nodes)
            for (let BH of this.nodes) BH.cleanRaws(HH)
        }
        each(HH) {
          if (!this.proxyOf.nodes) return;
          let BH, LH, AH = this.getIterator();
          for (; this.indexes[AH] < this.proxyOf.nodes.length && (BH = this.indexes[AH], LH = HH(this.proxyOf.nodes[BH], BH), !1 !== LH);) this.indexes[AH] += 1;
          return delete this.indexes[AH], LH
        }
        every(HH) {
          return this.nodes.every(HH)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let HH = this.lastEach;
          return this.indexes[HH] = 0, HH
        }
        getProxyProcessor() {
          return {
            get: (HH, BH) => "proxyOf" === BH ? HH : HH[BH] ? "each" === BH || "string" === typeof BH && BH.startsWith("walk") ? function() {
              for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
              return HH[BH](...AH.map((HH => "function" === typeof HH ? (BH, LH) => HH(BH.toProxy(), LH) : HH)))
            } : "every" === BH || "some" === BH ? LH => HH[BH]((function(HH) {
              for (var BH = arguments.length, AH = new Array(BH > 1 ? BH - 1 : 0), rH = 1; rH < BH; rH++) AH[rH - 1] = arguments[rH];
              return LH(HH.toProxy(), ...AH)
            })) : "root" === BH ? () => HH.root().toProxy() : "nodes" === BH ? HH.nodes.map((HH => HH.toProxy())) : "first" === BH || "last" === BH ? HH[BH].toProxy() : HH[BH] : HH[BH],
            set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "name" !== BH && "params" !== BH && "selector" !== BH || HH.markDirty()), !0)
          }
        }
        index(HH) {
          return "number" === typeof HH ? HH : (HH.proxyOf && (HH = HH.proxyOf), this.proxyOf.nodes.indexOf(HH))
        }
        insertAfter(HH, BH) {
          let LH, AH = this.index(HH),
            rH = this.normalize(BH, this.proxyOf.nodes[AH]).reverse();
          AH = this.index(HH);
          for (let SH of rH) this.proxyOf.nodes.splice(AH + 1, 0, SH);
          for (let SH in this.indexes) LH = this.indexes[SH], AH < LH && (this.indexes[SH] = LH + rH.length);
          return this.markDirty(), this
        }
        insertBefore(HH, BH) {
          let LH, AH = this.index(HH),
            rH = 0 === AH && "prepend",
            SH = this.normalize(BH, this.proxyOf.nodes[AH], rH).reverse();
          AH = this.index(HH);
          for (let hH of SH) this.proxyOf.nodes.splice(AH, 0, hH);
          for (let hH in this.indexes) LH = this.indexes[hH], AH <= LH && (this.indexes[hH] = LH + SH.length);
          return this.markDirty(), this
        }
        normalize(AH, zH) {
          if ("string" === typeof AH) AH = CH(HH(AH).nodes);
          else if ("undefined" === typeof AH) AH = [];
          else if (Array.isArray(AH)) {
            AH = AH.slice(0);
            for (let HH of AH) HH.parent && HH.parent.removeChild(HH, "ignore")
          } else if ("root" === AH.type && "document" !== this.type) {
            AH = AH.nodes.slice(0);
            for (let HH of AH) HH.parent && HH.parent.removeChild(HH, "ignore")
          } else if (AH.type) AH = [AH];
          else if (AH.prop) {
            if ("undefined" === typeof AH.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof AH.value && (AH.value = String(AH.value)), AH = [new hH(AH)]
          } else if (AH.selector) AH = [new BH(AH)];
          else if (AH.name) AH = [new LH(AH)];
          else {
            if (!AH.text) throw new Error("Unknown node type in node creation");
            AH = [new tH(AH)]
          }
          return AH.map((HH => (HH[SH] || XH.rebuild(HH), (HH = HH.proxyOf).parent && HH.parent.removeChild(HH), HH[rH] && EH(HH), "undefined" === typeof HH.raws.before && zH && "undefined" !== typeof zH.raws.before && (HH.raws.before = zH.raws.before.replace(/\S/g, "")), HH.parent = this.proxyOf, HH)))
        }
        prepend() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          BH = BH.reverse();
          for (let AH of BH) {
            let HH = this.normalize(AH, this.first, "prepend").reverse();
            for (let BH of HH) this.proxyOf.nodes.unshift(BH);
            for (let BH in this.indexes) this.indexes[BH] = this.indexes[BH] + HH.length
          }
          return this.markDirty(), this
        }
        push(HH) {
          return HH.parent = this, this.proxyOf.nodes.push(HH), this
        }
        removeAll() {
          for (let HH of this.proxyOf.nodes) HH.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(HH) {
          let BH;
          HH = this.index(HH), this.proxyOf.nodes[HH].parent = void 0, this.proxyOf.nodes.splice(HH, 1);
          for (let LH in this.indexes) BH = this.indexes[LH], BH >= HH && (this.indexes[LH] = BH - 1);
          return this.markDirty(), this
        }
        replaceValues(HH, BH, LH) {
          return LH || (LH = BH, BH = {}), this.walkDecls((AH => {
            BH.props && !BH.props.includes(AH.prop) || BH.fast && !AH.value.includes(BH.fast) || (AH.value = AH.value.replace(HH, LH))
          })), this.markDirty(), this
        }
        some(HH) {
          return this.nodes.some(HH)
        }
        walk(HH) {
          return this.each(((BH, LH) => {
            let AH;
            try {
              AH = HH(BH, LH)
            } catch (rH) {
              throw BH.addToError(rH)
            }
            return !1 !== AH && BH.walk && (AH = BH.walk(HH)), AH
          }))
        }
        walkAtRules(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("atrule" === LH.type && HH.test(LH.name)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("atrule" === LH.type && LH.name === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("atrule" === HH.type) return BH(HH, LH)
          })))
        }
        walkComments(HH) {
          return this.walk(((BH, LH) => {
            if ("comment" === BH.type) return HH(BH, LH)
          }))
        }
        walkDecls(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("decl" === LH.type && HH.test(LH.prop)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("decl" === LH.type && LH.prop === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("decl" === HH.type) return BH(HH, LH)
          })))
        }
        walkRules(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("rule" === LH.type && HH.test(LH.selector)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("rule" === LH.type && LH.selector === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("rule" === HH.type) return BH(HH, LH)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return XH.registerParse = BH => {
        HH = BH
      }, XH.registerRule = HH => {
        BH = HH
      }, XH.registerAtRule = HH => {
        LH = HH
      }, XH.registerRoot = HH => {
        AH = HH
      }, nB = XH, XH.default = XH, XH.rebuild = HH => {
        "atrule" === HH.type ? Object.setPrototypeOf(HH, LH.prototype) : "rule" === HH.type ? Object.setPrototypeOf(HH, BH.prototype) : "decl" === HH.type ? Object.setPrototypeOf(HH, hH.prototype) : "comment" === HH.type ? Object.setPrototypeOf(HH, tH.prototype) : "root" === HH.type && Object.setPrototypeOf(HH, AH.prototype), HH[SH] = !0, HH.nodes && HH.nodes.forEach((HH => {
          XH.rebuild(HH)
        }))
      }, nB
    }

    function eL() {
      if (wB) return DB;
      wB = 1;
      let HH, BH, LH = cL();
      class AH extends LH {
        constructor(HH) {
          super({
            type: "document",
            ...HH
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new HH(new BH, this, LH).stringify()
        }
      }
      return AH.registerLazyResult = BH => {
        HH = BH
      }, AH.registerProcessor = HH => {
        BH = HH
      }, DB = AH, AH.default = AH, DB
    }

    function qL() {
      if (dB) return ZB;
      dB = 1;
      let HH = {};
      return ZB = function(BH) {
        HH[BH] || (HH[BH] = !0, "undefined" !== typeof console && console.warn && console.warn(BH))
      }
    }

    function gL() {
      if (sB) return aB;
      sB = 1;
      class HH {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = HH, BH.node && BH.node.source) {
            let HH = BH.node.rangeBy(BH);
            this.line = HH.start.line, this.column = HH.start.column, this.endLine = HH.end.line, this.endColumn = HH.end.column
          }
          for (let LH in BH) this[LH] = BH[LH]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return aB = HH, HH.default = HH, aB
    }

    function NL() {
      if (iB) return JB;
      iB = 1;
      let HH = gL();
      class BH {
        constructor(HH, BH, LH) {
          this.processor = HH, this.messages = [], this.root = BH, this.opts = LH, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          LH.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (LH.plugin = this.lastPlugin.postcssPlugin);
          let AH = new HH(BH, LH);
          return this.messages.push(AH), AH
        }
        warnings() {
          return this.messages.filter((HH => "warning" === HH.type))
        }
        get content() {
          return this.css
        }
      }
      return JB = BH, BH.default = BH, JB
    }

    function RL() {
      if (BL) return HL;
      BL = 1;
      let HH = cL();
      class BH extends HH {
        constructor(HH) {
          super(HH), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return HL = BH, BH.default = BH, HH.registerAtRule(BH), HL
    }

    function jL() {
      if (AL) return LL;
      AL = 1;
      let HH, BH, LH = cL();
      class AH extends LH {
        constructor(HH) {
          super(HH), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(HH, BH, LH) {
          let AH = super.normalize(HH);
          if (BH)
            if ("prepend" === LH) this.nodes.length > 1 ? BH.raws.before = this.nodes[1].raws.before : delete BH.raws.before;
            else if (this.first !== BH)
            for (let rH of AH) rH.raws.before = BH.raws.before;
          return AH
        }
        removeChild(HH, BH) {
          let LH = this.index(HH);
          return !BH && 0 === LH && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[LH].raws.before), super.removeChild(HH)
        }
        toResult() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new HH(new BH, this, LH).stringify()
        }
      }
      return AH.registerLazyResult = BH => {
        HH = BH
      }, AH.registerProcessor = HH => {
        BH = HH
      }, LL = AH, AH.default = AH, LH.registerRoot(AH), LL
    }

    function nL() {
      if (SL) return rL;
      SL = 1;
      let HH = {
        comma: BH => HH.split(BH, [","], !0),
        space: BH => HH.split(BH, [" ", "\n", "\t"]),
        split(HH, BH, LH) {
          let AH = [],
            rH = "",
            SH = !1,
            hH = 0,
            tH = !1,
            zH = "",
            CH = !1;
          for (let EH of HH) CH ? CH = !1 : "\\" === EH ? CH = !0 : tH ? EH === zH && (tH = !1) : '"' === EH || "'" === EH ? (tH = !0, zH = EH) : "(" === EH ? hH += 1 : ")" === EH ? hH > 0 && (hH -= 1) : 0 === hH && BH.includes(EH) && (SH = !0), SH ? ("" !== rH && AH.push(rH.trim()), rH = "", SH = !1) : rH += EH;
          return (LH || "" !== rH) && AH.push(rH.trim()), AH
        }
      };
      return rL = HH, HH.default = HH, rL
    }

    function FL() {
      if (tL) return hL;
      tL = 1;
      let HH = cL(),
        BH = nL();
      class LH extends HH {
        constructor(HH) {
          super(HH), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return BH.comma(this.selector)
        }
        set selectors(HH) {
          let BH = this.selector ? this.selector.match(/,\s*/) : null,
            LH = BH ? BH[0] : "," + this.raw("between", "beforeOpen");
          this.selector = HH.join(LH)
        }
      }
      return hL = LH, LH.default = LH, HH.registerRule(LH), hL
    }

    function DL() {
      if (CL) return zL;
      CL = 1;
      let HH = mL(),
        BH = function() {
          if (yB) return pB;
          yB = 1;
          const HH = "'".charCodeAt(0),
            BH = '"'.charCodeAt(0),
            LH = "\\".charCodeAt(0),
            AH = "/".charCodeAt(0),
            rH = "\n".charCodeAt(0),
            SH = " ".charCodeAt(0),
            hH = "\f".charCodeAt(0),
            tH = "\t".charCodeAt(0),
            zH = "\r".charCodeAt(0),
            CH = "[".charCodeAt(0),
            EH = "]".charCodeAt(0),
            XH = "(".charCodeAt(0),
            GH = ")".charCodeAt(0),
            YH = "{".charCodeAt(0),
            uH = "}".charCodeAt(0),
            QH = ";".charCodeAt(0),
            WH = "*".charCodeAt(0),
            MH = ":".charCodeAt(0),
            xH = "@".charCodeAt(0),
            vH = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            PH = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            TH = /.[\r\n"'(/\\]/,
            UH = /[\da-f]/i;
          return pB = function(VH) {
            let OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              qH = VH.css.valueOf(),
              gH = eH.ignoreErrors,
              NH = qH.length,
              RH = 0,
              jH = [],
              nH = [];

            function FH(HH) {
              throw VH.error("Unclosed " + HH, RH)
            }
            return {
              back: function(HH) {
                nH.push(HH)
              },
              endOfFile: function() {
                return 0 === nH.length && RH >= NH
              },
              nextToken: function(VH) {
                if (nH.length) return nH.pop();
                if (RH >= NH) return;
                let eH = !!VH && VH.ignoreUnclosed;
                switch (OH = qH.charCodeAt(RH), OH) {
                  case rH:
                  case SH:
                  case tH:
                  case zH:
                  case hH:
                    bH = RH;
                    do {
                      bH += 1, OH = qH.charCodeAt(bH)
                    } while (OH === SH || OH === rH || OH === tH || OH === zH || OH === hH);
                    cH = ["space", qH.slice(RH, bH)], RH = bH - 1;
                    break;
                  case CH:
                  case EH:
                  case YH:
                  case uH:
                  case MH:
                  case QH:
                  case GH: {
                    let HH = String.fromCharCode(OH);
                    cH = [HH, HH, RH];
                    break
                  }
                  case XH:
                    if (lH = jH.length ? jH.pop()[1] : "", KH = qH.charCodeAt(RH + 1), "url" === lH && KH !== HH && KH !== BH && KH !== SH && KH !== rH && KH !== tH && KH !== hH && KH !== zH) {
                      bH = RH;
                      do {
                        if (IH = !1, bH = qH.indexOf(")", bH + 1), -1 === bH) {
                          if (gH || eH) {
                            bH = RH;
                            break
                          }
                          FH("bracket")
                        }
                        for (fH = bH; qH.charCodeAt(fH - 1) === LH;) fH -= 1, IH = !IH
                      } while (IH);
                      cH = ["brackets", qH.slice(RH, bH + 1), RH, bH], RH = bH
                    } else bH = qH.indexOf(")", RH + 1), mH = qH.slice(RH, bH + 1), -1 === bH || TH.test(mH) ? cH = ["(", "(", RH] : (cH = ["brackets", mH, RH, bH], RH = bH);
                    break;
                  case HH:
                  case BH:
                    kH = OH === HH ? "'" : '"', bH = RH;
                    do {
                      if (IH = !1, bH = qH.indexOf(kH, bH + 1), -1 === bH) {
                        if (gH || eH) {
                          bH = RH + 1;
                          break
                        }
                        FH("string")
                      }
                      for (fH = bH; qH.charCodeAt(fH - 1) === LH;) fH -= 1, IH = !IH
                    } while (IH);
                    cH = ["string", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  case xH:
                    vH.lastIndex = RH + 1, vH.test(qH), bH = 0 === vH.lastIndex ? qH.length - 1 : vH.lastIndex - 2, cH = ["at-word", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  case LH:
                    for (bH = RH, oH = !0; qH.charCodeAt(bH + 1) === LH;) bH += 1, oH = !oH;
                    if (OH = qH.charCodeAt(bH + 1), oH && OH !== AH && OH !== SH && OH !== rH && OH !== tH && OH !== zH && OH !== hH && (bH += 1, UH.test(qH.charAt(bH)))) {
                      for (; UH.test(qH.charAt(bH + 1));) bH += 1;
                      qH.charCodeAt(bH + 1) === SH && (bH += 1)
                    }
                    cH = ["word", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  default:
                    OH === AH && qH.charCodeAt(RH + 1) === WH ? (bH = qH.indexOf("*/", RH + 2) + 1, 0 === bH && (gH || eH ? bH = qH.length : FH("comment")), cH = ["comment", qH.slice(RH, bH + 1), RH, bH], RH = bH) : (PH.lastIndex = RH + 1, PH.test(qH), bH = 0 === PH.lastIndex ? qH.length - 1 : PH.lastIndex - 2, cH = ["word", qH.slice(RH, bH + 1), RH, bH], jH.push(cH), RH = bH)
                }
                return RH++, cH
              },
              position: function() {
                return RH
              }
            }
          }, pB
        }(),
        LH = KL(),
        AH = RL(),
        rH = jL(),
        SH = FL();
      const hH = {
        empty: !0,
        space: !0
      };
      return zL = class {
        constructor(HH) {
          this.input = HH, this.root = new rH, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: HH,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(HH) {
          let BH, LH, rH, SH = new AH;
          SH.name = HH[1].slice(1), "" === SH.name && this.unnamedAtrule(SH, HH), this.init(SH, HH[2]);
          let hH = !1,
            tH = !1,
            zH = [],
            CH = [];
          for (; !this.tokenizer.endOfFile();) {
            if (BH = (HH = this.tokenizer.nextToken())[0], "(" === BH || "[" === BH ? CH.push("(" === BH ? ")" : "]") : "{" === BH && CH.length > 0 ? CH.push("}") : BH === CH[CH.length - 1] && CH.pop(), 0 === CH.length) {
              if (";" === BH) {
                SH.source.end = this.hT(HH[2]), SH.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === BH) {
                tH = !0;
                break
              }
              if ("}" === BH) {
                if (zH.length > 0) {
                  for (rH = zH.length - 1, LH = zH[rH]; LH && "space" === LH[0];) LH = zH[--rH];
                  LH && (SH.source.end = this.hT(LH[3] || LH[2]), SH.source.end.offset++)
                }
                this.end(HH);
                break
              }
              zH.push(HH)
            } else zH.push(HH);
            if (this.tokenizer.endOfFile()) {
              hH = !0;
              break
            }
          }
          SH.raws.between = this.spacesAndCommentsFromEnd(zH), zH.length ? (SH.raws.afterName = this.spacesAndCommentsFromStart(zH), this.raw(SH, "params", zH), hH && (HH = zH[zH.length - 1], SH.source.end = this.hT(HH[3] || HH[2]), SH.source.end.offset++, this.spaces = SH.raws.between, SH.raws.between = "")) : (SH.raws.afterName = "", SH.params = ""), tH && (SH.nodes = [], this.current = SH)
        }
        checkMissedSemicolon(HH) {
          let BH = this.colon(HH);
          if (!1 === BH) return;
          let LH, AH = 0;
          for (let rH = BH - 1; rH >= 0 && (LH = HH[rH], "space" === LH[0] || (AH += 1, 2 !== AH)); rH--);
          throw this.input.error("Missed semicolon", "word" === LH[0] ? LH[3] + 1 : LH[2])
        }
        colon(HH) {
          let BH, LH, AH, rH = 0;
          for (let [SH, hH] of HH.entries()) {
            if (BH = hH, LH = BH[0], "(" === LH && (rH += 1), ")" === LH && (rH -= 1), 0 === rH && ":" === LH) {
              if (AH) {
                if ("word" === AH[0] && "progid" === AH[1]) continue;
                return SH
              }
              this.doubleColon(BH)
            }
            AH = BH
          }
          return !1
        }
        comment(HH) {
          let BH = new LH;
          this.init(BH, HH[2]), BH.source.end = this.hT(HH[3] || HH[2]), BH.source.end.offset++;
          let AH = HH[1].slice(2, -2);
          if (/^\s*$/.test(AH)) BH.text = "", BH.raws.left = AH, BH.raws.right = "";
          else {
            let HH = AH.match(/^(\s*)([^]*\S)(\s*)$/);
            BH.text = HH[2], BH.raws.left = HH[1], BH.raws.right = HH[3]
          }
        }
        createTokenizer() {
          this.tokenizer = BH(this.input)
        }
        decl(BH, LH) {
          let AH = new HH;
          this.init(AH, BH[0][2]);
          let rH, SH = BH[BH.length - 1];
          for (";" === SH[0] && (this.semicolon = !0, BH.pop()), AH.source.end = this.hT(SH[3] || SH[2] || function(HH) {
              for (let BH = HH.length - 1; BH >= 0; BH--) {
                let LH = HH[BH],
                  AH = LH[3] || LH[2];
                if (AH) return AH
              }
            }(BH)), AH.source.end.offset++;
            "word" !== BH[0][0];) 1 === BH.length && this.unknownWord(BH), AH.raws.before += BH.shift()[1];
          for (AH.source.start = this.hT(BH[0][2]), AH.prop = ""; BH.length;) {
            let HH = BH[0][0];
            if (":" === HH || "space" === HH || "comment" === HH) break;
            AH.prop += BH.shift()[1]
          }
          for (AH.raws.between = ""; BH.length;) {
            if (rH = BH.shift(), ":" === rH[0]) {
              AH.raws.between += rH[1];
              break
            }
            "word" === rH[0] && /\w/.test(rH[1]) && this.unknownWord([rH]), AH.raws.between += rH[1]
          }
          "_" !== AH.prop[0] && "*" !== AH.prop[0] || (AH.raws.before += AH.prop[0], AH.prop = AH.prop.slice(1));
          let hH, tH = [];
          for (; BH.length && (hH = BH[0][0], "space" === hH || "comment" === hH);) tH.push(BH.shift());
          this.precheckMissedSemicolon(BH);
          for (let HH = BH.length - 1; HH >= 0; HH--) {
            if (rH = BH[HH], "!important" === rH[1].toLowerCase()) {
              AH.important = !0;
              let LH = this.stringFrom(BH, HH);
              LH = this.spacesFromEnd(BH) + LH, " !important" !== LH && (AH.raws.important = LH);
              break
            }
            if ("important" === rH[1].toLowerCase()) {
              let LH = BH.slice(0),
                rH = "";
              for (let BH = HH; BH > 0; BH--) {
                let HH = LH[BH][0];
                if (0 === rH.trim().indexOf("!") && "space" !== HH) break;
                rH = LH.pop()[1] + rH
              }
              0 === rH.trim().indexOf("!") && (AH.important = !0, AH.raws.important = rH, BH = LH)
            }
            if ("space" !== rH[0] && "comment" !== rH[0]) break
          }
          BH.some((HH => "space" !== HH[0] && "comment" !== HH[0])) && (AH.raws.between += tH.map((HH => HH[1])).join(""), tH = []), this.raw(AH, "value", tH.concat(BH), LH), AH.value.includes(":") && !LH && this.checkMissedSemicolon(BH)
        }
        doubleColon(HH) {
          throw this.input.error("Double colon", {
            offset: HH[2]
          }, {
            offset: HH[2] + HH[1].length
          })
        }
        emptyRule(HH) {
          let BH = new SH;
          this.init(BH, HH[2]), BH.selector = "", BH.raws.between = "", this.current = BH
        }
        end(HH) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(HH)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.position())
        }
        freeSemicolon(HH) {
          if (this.spaces += HH[1], this.current.nodes) {
            let HH = this.current.nodes[this.current.nodes.length - 1];
            HH && "rule" === HH.type && !HH.raws.ownSemicolon && (HH.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        hT(HH) {
          let BH = this.input.fromOffset(HH);
          return {
            column: BH.col,
            line: BH.line,
            offset: HH
          }
        }
        init(HH, BH) {
          this.current.push(HH), HH.source = {
            input: this.input,
            start: this.hT(BH)
          }, HH.raws.before = this.spaces, this.spaces = "", "comment" !== HH.type && (this.semicolon = !1)
        }
        other(HH) {
          let BH = !1,
            LH = null,
            AH = !1,
            rH = null,
            SH = [],
            hH = HH[1].startsWith("--"),
            tH = [],
            zH = HH;
          for (; zH;) {
            if (LH = zH[0], tH.push(zH), "(" === LH || "[" === LH) rH || (rH = zH), SH.push("(" === LH ? ")" : "]");
            else if (hH && AH && "{" === LH) rH || (rH = zH), SH.push("}");
            else if (0 === SH.length) {
              if (";" === LH) {
                if (AH) return void this.decl(tH, hH);
                break
              }
              if ("{" === LH) return void this.rule(tH);
              if ("}" === LH) {
                this.tokenizer.back(tH.pop()), BH = !0;
                break
              }
              ":" === LH && (AH = !0)
            } else LH === SH[SH.length - 1] && (SH.pop(), 0 === SH.length && (rH = null));
            zH = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (BH = !0), SH.length > 0 && this.unclosedBracket(rH), BH && AH) {
            if (!hH)
              for (; tH.length && (zH = tH[tH.length - 1][0], "space" === zH || "comment" === zH);) this.tokenizer.back(tH.pop());
            this.decl(tH, hH)
          } else this.unknownWord(tH)
        }
        parse() {
          let HH;
          for (; !this.tokenizer.endOfFile();) switch (HH = this.tokenizer.nextToken(), HH[0]) {
            case "space":
              this.spaces += HH[1];
              break;
            case ";":
              this.freeSemicolon(HH);
              break;
            case "}":
              this.end(HH);
              break;
            case "comment":
              this.comment(HH);
              break;
            case "at-word":
              this.atrule(HH);
              break;
            case "{":
              this.emptyRule(HH);
              break;
            default:
              this.other(HH)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(HH, BH, LH, AH) {
          let rH, SH, tH, zH, CH = LH.length,
            EH = "",
            XH = !0;
          for (let GH = 0; GH < CH; GH += 1) rH = LH[GH], SH = rH[0], "space" !== SH || GH !== CH - 1 || AH ? "comment" === SH ? (zH = LH[GH - 1] ? LH[GH - 1][0] : "empty", tH = LH[GH + 1] ? LH[GH + 1][0] : "empty", hH[zH] || hH[tH] || "," === EH.slice(-1) ? XH = !1 : EH += rH[1]) : EH += rH[1] : XH = !1;
          if (!XH) {
            let AH = LH.reduce(((HH, BH) => HH + BH[1]), "");
            HH.raws[BH] = {
              raw: AH,
              value: EH
            }
          }
          HH[BH] = EH
        }
        rule(HH) {
          HH.pop();
          let BH = new SH;
          this.init(BH, HH[0][2]), BH.raws.between = this.spacesAndCommentsFromEnd(HH), this.raw(BH, "selector", HH), this.current = BH
        }
        spacesAndCommentsFromEnd(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH || "comment" === BH);) LH = HH.pop()[1] + LH;
          return LH
        }
        spacesAndCommentsFromStart(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[0][0], "space" === BH || "comment" === BH);) LH += HH.shift()[1];
          return LH
        }
        spacesFromEnd(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH);) LH = HH.pop()[1] + LH;
          return LH
        }
        stringFrom(HH, BH) {
          let LH = "";
          for (let AH = BH; AH < HH.length; AH++) LH += HH[AH][1];
          return HH.splice(BH, HH.length - BH), LH
        }
        unclosedBlock() {
          let HH = this.current.source.start;
          throw this.input.error("Unclosed block", HH.line, HH.column)
        }
        unclosedBracket(HH) {
          throw this.input.error("Unclosed bracket", {
            offset: HH[2]
          }, {
            offset: HH[2] + 1
          })
        }
        unexpectedClose(HH) {
          throw this.input.error("Unexpected }", {
            offset: HH[2]
          }, {
            offset: HH[2] + 1
          })
        }
        unknownWord(HH) {
          throw this.input.error("Unknown word", {
            offset: HH[0][2]
          }, {
            offset: HH[0][2] + HH[0][1].length
          })
        }
        unnamedAtrule(HH, BH) {
          throw this.input.error("At-rule without name", {
            offset: BH[2]
          }, {
            offset: BH[2] + BH[1].length
          })
        }
      }
    }

    function wL() {
      if (XL) return EL;
      XL = 1;
      let HH = cL(),
        BH = DL(),
        LH = fL();

      function AH(HH, AH) {
        let rH = new LH(HH, AH),
          SH = new BH(rH);
        try {
          SH.parse()
        } catch (hH) {
          throw hH
        }
        return SH.root
      }
      return EL = AH, AH.default = AH, HH.registerParse(AH), EL
    }

    function ZL() {
      if (YL) return GL;
      YL = 1;
      let {
        isClean: HH,
        my: BH
      } = VL(), LH = lL(), AH = bL(), rH = cL(), SH = eL(), hH = (qL(), NL()), tH = wL(), zH = jL();
      const CH = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        EH = {
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
        XH = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function GH(HH) {
        return "object" === typeof HH && "function" === typeof HH.then
      }

      function YH(HH) {
        let BH = !1,
          LH = CH[HH.type];
        return "decl" === HH.type ? BH = HH.prop.toLowerCase() : "atrule" === HH.type && (BH = HH.name.toLowerCase()), BH && HH.append ? [LH, LH + "-" + BH, 0, LH + "Exit", LH + "Exit-" + BH] : BH ? [LH, LH + "-" + BH, LH + "Exit", LH + "Exit-" + BH] : HH.append ? [LH, 0, LH + "Exit"] : [LH, LH + "Exit"]
      }

      function uH(HH) {
        let BH;
        return BH = "document" === HH.type ? ["Document", 0, "DocumentExit"] : "root" === HH.type ? ["Root", 0, "RootExit"] : YH(HH), {
          eventIndex: 0,
          events: BH,
          iterator: 0,
          node: HH,
          visitorIndex: 0,
          visitors: []
        }
      }

      function QH(BH) {
        return BH[HH] = !1, BH.nodes && BH.nodes.forEach((HH => QH(HH))), BH
      }
      let WH = {};
      class MH {
        constructor(HH, LH, AH) {
          let SH;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof LH || null === LH || "root" !== LH.type && "document" !== LH.type)
            if (LH instanceof MH || LH instanceof hH) SH = QH(LH.root), LH.map && ("undefined" === typeof AH.map && (AH.map = {}), AH.map.inline || (AH.map.inline = !1), AH.map.prev = LH.map);
            else {
              let HH = tH;
              AH.syntax && (HH = AH.syntax.parse), AH.parser && (HH = AH.parser), HH.parse && (HH = HH.parse);
              try {
                SH = HH(LH, AH)
              } catch (zH) {
                this.processed = !0, this.error = zH
              }
              SH && !SH[BH] && rH.rebuild(SH)
            }
          else SH = QH(LH);
          this.result = new hH(HH, SH, AH), this.helpers = {
            ...WH,
            postcss: WH,
            result: this.result
          }, this.plugins = this.processor.plugins.map((HH => "object" === typeof HH && HH.prepare ? {
            ...HH,
            ...HH.prepare(this.result)
          } : HH))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (HH) {
          return this.async().catch(HH)
        } finally(HH) {
          return this.async().then(HH, HH)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(HH, BH) {
          let LH = this.result.lastPlugin;
          try {
            BH && BH.addToError(HH), this.error = HH, "CssSyntaxError" !== HH.name || HH.plugin ? LH.postcssVersion : (HH.plugin = LH.postcssPlugin, HH.setMessage())
          } catch (AH) {
            console && console.error && console.error(AH)
          }
          return HH
        }
        prepareVisitors() {
          this.listeners = {};
          let HH = (HH, BH, LH) => {
            this.listeners[BH] || (this.listeners[BH] = []), this.listeners[BH].push([HH, LH])
          };
          for (let BH of this.plugins)
            if ("object" === typeof BH)
              for (let LH in BH) {
                if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!XH[LH])
                  if ("object" === typeof BH[LH])
                    for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
                  else "function" === typeof BH[LH] && HH(BH, LH, BH[LH])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let HH = 0; HH < this.plugins.length; HH++) {
            let LH = this.plugins[HH],
              AH = this.runOnRoot(LH);
            if (GH(AH)) try {
              await AH
            } catch (BH) {
              throw this.handleError(BH)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let BH = this.result.root;
            for (; !BH[HH];) {
              BH[HH] = !0;
              let AH = [uH(BH)];
              for (; AH.length > 0;) {
                let HH = this.visitTick(AH);
                if (GH(HH)) try {
                  await HH
                } catch (LH) {
                  let HH = AH[AH.length - 1].node;
                  throw this.handleError(LH, HH)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [HH, AH] of this.listeners.OnceExit) {
                this.result.lastPlugin = HH;
                try {
                  if ("document" === BH.type) {
                    let HH = BH.nodes.map((HH => AH(HH, this.helpers)));
                    await Promise.all(HH)
                  } else await AH(BH, this.helpers)
                } catch (LH) {
                  throw this.handleError(LH)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(HH) {
          this.result.lastPlugin = HH;
          try {
            if ("object" === typeof HH && HH.Once) {
              if ("document" === this.result.root.type) {
                let BH = this.result.root.nodes.map((BH => HH.Once(BH, this.helpers)));
                return GH(BH[0]) ? Promise.all(BH) : BH
              }
              return HH.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof HH) return HH(this.result.root, this.result)
          } catch (BH) {
            throw this.handleError(BH)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let HH = this.result.opts,
            BH = AH;
          HH.syntax && (BH = HH.syntax.stringify), HH.stringifier && (BH = HH.stringifier), BH.stringify && (BH = BH.stringify);
          let rH = new LH(BH, this.result.root, this.result.opts).generate();
          return this.result.css = rH[0], this.result.map = rH[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let HH of this.plugins) {
            if (GH(this.runOnRoot(HH))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let BH = this.result.root;
            for (; !BH[HH];) BH[HH] = !0, this.walkSync(BH);
            if (this.listeners.OnceExit)
              if ("document" === BH.type)
                for (let HH of BH.nodes) this.visitSync(this.listeners.OnceExit, HH);
              else this.visitSync(this.listeners.OnceExit, BH)
          }
          return this.result
        }
        then(HH, BH) {
          return this.async().then(HH, BH)
        }
        toString() {
          return this.css
        }
        visitSync(HH, BH) {
          for (let [AH, rH] of HH) {
            let HH;
            this.result.lastPlugin = AH;
            try {
              HH = rH(BH, this.helpers)
            } catch (LH) {
              throw this.handleError(LH, BH.proxyOf)
            }
            if ("root" !== BH.type && "document" !== BH.type && !BH.parent) return !0;
            if (GH(HH)) throw this.getAsyncError()
          }
        }
        visitTick(BH) {
          let LH = BH[BH.length - 1],
            {
              node: AH,
              visitors: rH
            } = LH;
          if ("root" !== AH.type && "document" !== AH.type && !AH.parent) return void BH.pop();
          if (rH.length > 0 && LH.visitorIndex < rH.length) {
            let [HH, BH] = rH[LH.visitorIndex];
            LH.visitorIndex += 1, LH.visitorIndex === rH.length && (LH.visitors = [], LH.visitorIndex = 0), this.result.lastPlugin = HH;
            try {
              return BH(AH.toProxy(), this.helpers)
            } catch (hH) {
              throw this.handleError(hH, AH)
            }
          }
          if (0 !== LH.iterator) {
            let rH, SH = LH.iterator;
            for (; rH = AH.nodes[AH.indexes[SH]];)
              if (AH.indexes[SH] += 1, !rH[HH]) return rH[HH] = !0, void BH.push(uH(rH));
            LH.iterator = 0, delete AH.indexes[SH]
          }
          let SH = LH.events;
          for (; LH.eventIndex < SH.length;) {
            let BH = SH[LH.eventIndex];
            if (LH.eventIndex += 1, 0 === BH) return void(AH.nodes && AH.nodes.length && (AH[HH] = !0, LH.iterator = AH.getIterator()));
            if (this.listeners[BH]) return void(LH.visitors = this.listeners[BH])
          }
          BH.pop()
        }
        walkSync(BH) {
          BH[HH] = !0;
          let LH = YH(BH);
          for (let AH of LH)
            if (0 === AH) BH.nodes && BH.each((BH => {
              BH[HH] || this.walkSync(BH)
            }));
            else {
              let HH = this.listeners[AH];
              if (HH && this.visitSync(HH, BH.toProxy())) return
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
      return MH.registerPostcss = HH => {
        WH = HH
      }, GL = MH, MH.default = MH, zH.registerLazyResult(MH), SH.registerLazyResult(MH), GL
    }

    function dL() {
      if (ML) return WL;
      ML = 1;
      let HH = function() {
          if (QL) return uL;
          QL = 1;
          let HH = lL(),
            BH = bL(),
            LH = (qL(), wL());
          const AH = NL();
          class rH {
            constructor(LH, rH, SH) {
              let hH;
              rH = rH.toString(), this.stringified = !1, this._processor = LH, this._css = rH, this._opts = SH, this._map = void 0;
              let tH = BH;
              this.result = new AH(this._processor, hH, this._opts), this.result.css = rH;
              let zH = this;
              Object.defineProperty(this.result, "root", {
                get: () => zH.root
              });
              let CH = new HH(tH, hH, this._opts, rH);
              if (CH.isMap()) {
                let [HH, BH] = CH.generate();
                HH && (this.result.css = HH), BH && (this.result.map = BH)
              } else CH.clearAnnotation(), this.result.css = CH.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (HH) {
              return this.async().catch(HH)
            } finally(HH) {
              return this.async().then(HH, HH)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(HH, BH) {
              return this.async().then(HH, BH)
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
              let HH, BH = LH;
              try {
                HH = BH(this._css, this._opts)
              } catch (AH) {
                this.error = AH
              }
              if (this.error) throw this.error;
              return this._root = HH, HH
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return uL = rH, rH.default = rH, uL
        }(),
        BH = ZL(),
        LH = eL(),
        AH = jL();
      class rH {
        constructor() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(HH)
        }
        normalize(HH) {
          let BH = [];
          for (let LH of HH)
            if (!0 === LH.postcss ? LH = LH() : LH.postcss && (LH = LH.postcss), "object" === typeof LH && Array.isArray(LH.plugins)) BH = BH.concat(LH.plugins);
            else if ("object" === typeof LH && LH.postcssPlugin) BH.push(LH);
          else if ("function" === typeof LH) BH.push(LH);
          else {
            if ("object" !== typeof LH || !LH.parse && !LH.stringify) throw new Error(LH + " is not a PostCSS plugin")
          }
          return BH
        }
        process(LH) {
          let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || AH.parser || AH.stringifier || AH.syntax ? new BH(this, LH, AH) : new HH(this, LH, AH)
        }
        use(HH) {
          return this.plugins = this.plugins.concat(this.normalize([HH])), this
        }
      }
      return WL = rH, rH.default = rH, AH.registerProcessor(rH), LH.registerProcessor(rH), WL
    }
    const aL = GB(function() {
      if (TL) return PL;
      TL = 1;
      let HH = PB(),
        BH = mL(),
        LH = ZL(),
        AH = cL(),
        rH = dL(),
        SH = bL(),
        hH = function() {
          if (vL) return xL;
          vL = 1;
          let HH = mL(),
            BH = IL(),
            LH = KL(),
            AH = RL(),
            rH = fL(),
            SH = jL(),
            hH = FL();

          function tH(zH, CH) {
            if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
            let {
              inputs: EH,
              ...XH
            } = zH;
            if (EH) {
              CH = [];
              for (let HH of EH) {
                let LH = {
                  ...HH,
                  __proto__: rH.prototype
                };
                LH.map && (LH.map = {
                  ...LH.map,
                  __proto__: BH.prototype
                }), CH.push(LH)
              }
            }
            if (XH.nodes && (XH.nodes = zH.nodes.map((HH => tH(HH, CH)))), XH.source) {
              let {
                inputId: HH,
                ...BH
              } = XH.source;
              XH.source = BH, null != HH && (XH.source.input = CH[HH])
            }
            if ("root" === XH.type) return new SH(XH);
            if ("decl" === XH.type) return new HH(XH);
            if ("rule" === XH.type) return new hH(XH);
            if ("comment" === XH.type) return new LH(XH);
            if ("atrule" === XH.type) return new AH(XH);
            throw new Error("Unknown node type: " + zH.type)
          }
          return xL = tH, tH.default = tH, xL
        }(),
        tH = eL(),
        zH = gL(),
        CH = KL(),
        EH = RL(),
        XH = NL(),
        GH = fL(),
        YH = wL(),
        uH = nL(),
        QH = FL(),
        WH = jL(),
        MH = kL();

      function xH() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return 1 === BH.length && Array.isArray(BH[0]) && (BH = BH[0]), new rH(BH)
      }
      return xH.plugin = function(HH, BH) {
        let LH, AH = !1;

        function SH() {
          console && console.warn && !AH && (AH = !0, console.warn(HH + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(HH + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let LH = BH(...arguments);
          return LH.postcssPlugin = HH, LH.postcssVersion = (new rH).version, LH
        }
        return Object.defineProperty(SH, "postcss", {
          get: () => (LH || (LH = SH()), LH)
        }), SH.process = function(HH, BH, LH) {
          return xH([SH(LH)]).process(HH, BH)
        }, SH
      }, xH.stringify = SH, xH.parse = YH, xH.fromJSON = hH, xH.list = uH, xH.comment = HH => new CH(HH), xH.atRule = HH => new EH(HH), xH.decl = HH => new BH(HH), xH.rule = HH => new QH(HH), xH.root = HH => new WH(HH), xH.document = HH => new tH(HH), xH.CssSyntaxError = HH, xH.Declaration = BH, xH.JF = AH, xH.Processor = rH, xH.Document = tH, xH.Comment = CH, xH.Warning = zH, xH.AtRule = EH, xH.Result = XH, xH.Input = GH, xH.Rule = QH, xH.Root = WH, xH.Node = MH, LH.registerPostcss(xH), PL = xH, xH.default = xH, PL
    }());
    aL.stringify, aL.fromJSON, aL.plugin, aL.parse, aL.list, aL.document, aL.comment, aL.atRule, aL.rule, aL.decl, aL.root, aL.CssSyntaxError, aL.Declaration, aL.JF, aL.Processor, aL.Document, aL.Comment, aL.Warning, aL.AtRule, aL.Result, aL.Input, aL.Rule, aL.Root, aL.Node;
    const sL = {
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

    function JL(HH, BH) {
      const LH = null == BH ? void 0 : BH.stylesWithHoverClass.get(HH);
      if (LH) return LH;
      let AH = HH;
      try {
        AH = aL([EB, XB]).process(HH).css
      } catch (rH) {
        console.warn("Failed to adapt css for replay", rH)
      }
      return null == BH || BH.stylesWithHoverClass.set(HH, AH), AH
    }

    function iL() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const pL = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      yL = new WeakSet;

    function HA(HH) {
      if (HH.UNSAFE_allowUnprotectedRebuild) return;
      const BH = HH.doc.defaultView;
      if (BH && (!yL.has(HH.doc) || ! function(HH) {
          if (!HH || "IFRAME" !== HH.tagName) return !1;
          if (!("sandbox" in HH)) return !1;
          const BH = Array.from(HH.sandbox);
          return 1 === BH.length && "allow-same-origin" === BH[0]
        }(BH.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function BA(HH, BH, LH, AH) {
      const {
        doc: rH,
        hackCss: SH,
        cache: hH
      } = AH;
      HH.childNodes.length ? function(HH, BH, LH, AH) {
        const rH = [];
        for (const EH of HH.childNodes) EH.type === zH.Text && rH.push(EH);
        const SH = BH.split("/* rr_split */");
        for (; SH.length > 1 && SH.length > rH.length;) SH.splice(-2, 2, SH.slice(-2).join(""));
        let hH = "";
        LH && (hH = JL(SH.join(""), AH));
        let tH = 0,
          CH = -1;
        for (let zH = 0; zH < rH.length && zH !== SH.length; zH++) {
          const HH = rH[zH];
          let BH = SH[zH];
          const AH = zH < SH.length - 1 ? SH[zH + 1] : null;
          if (LH && AH) {
            let HH = tH,
              LH = AH.length;
            LH = Math.min(LH, 30);
            let rH = !1;
            for (; LH > 2; LH--) {
              const BH = AH.substring(0, LH),
                SH = hH.substring(tH).indexOf(BH);
              if (rH = -1 !== SH, rH) {
                HH += SH;
                break
              }
            }
            rH || (HH += BH.length), BH = hH.substring(tH, HH), tH = HH
          } else LH && (BH = hH.substring(tH)); - 1 !== CH && (BH = BH.substring(CH)), AH && (-1 !== CH || BH.endsWith("0p") && AH.startsWith("x")) && (CH = AH.indexOf("}"), -1 !== CH && (CH += 1, BH += AH.substring(0, CH))), HH.textContent = BH
        }
      }(HH, LH, SH, hH) : (SH && (LH = JL(LH, hH)), BH.appendChild(rH.createTextNode(LH)))
    }

    function LA(HH, BH) {
      var LH;
      const {
        doc: AH,
        hackCss: rH,
        cache: SH
      } = BH;
      switch (HH.type) {
        case zH.Document:
          return AH.implementation.createDocument(null, "", null);
        case zH.DocumentType:
          return AH.implementation.createDocumentType(HH.name || "html", HH.publicId, HH.systemId);
        case zH.Element: {
          const rH = function(HH) {
            let BH = sL[HH.tagName] ? sL[HH.tagName] : HH.tagName;
            return "link" === BH && HH.attributes._cssText && (BH = "style"), BH
          }(HH);
          let SH;
          HH.isSVG ? SH = AH.createElementNS("http://www.w3.org/2000/svg", rH) : (HH.isCustom && (null == (LH = AH.defaultView) ? void 0 : LH.customElements) && !AH.defaultView.customElements.get(HH.tagName) && AH.defaultView.customElements.define(HH.tagName, class extends AH.defaultView.HTMLElement {}), SH = AH.createElement(rH));
          const tH = {};
          for (const LH in HH.attributes) {
            if (!Object.prototype.hasOwnProperty.call(HH.attributes, LH)) continue;
            let zH = HH.attributes[LH];
            if (("option" !== rH || "selected" !== LH || !1 !== zH) && null !== zH)
              if (!0 === zH && (zH = ""), LH.startsWith("rr_")) tH[LH] = zH;
              else {
                if ("string" !== typeof zH);
                else {
                  if ("style" === rH && "_cssText" === LH) {
                    BA(HH, SH, zH, BH);
                    continue
                  }
                  if ("textarea" === rH && "value" === LH) {
                    SH.appendChild(AH.createTextNode(zH)), HH.childNodes = [];
                    continue
                  }
                }
                try {
                  if (HH.isSVG && "xlink:href" === LH) SH.setAttributeNS("http://www.w3.org/1999/xlink", LH, zH.toString());
                  else if ("onload" === LH || "onclick" === LH || "onmouse" === LH.substring(0, 7)) SH.setAttribute("_" + LH, zH.toString());
                  else {
                    if ("meta" === rH && "Content-Security-Policy" === HH.attributes["http-equiv"] && "content" === LH) {
                      SH.setAttribute("csp-content", zH.toString());
                      continue
                    }
                    "link" === rH && ("preload" === HH.attributes.rel && "script" === HH.attributes.as || "modulepreload" === HH.attributes.rel) || "link" === rH && "prefetch" === HH.attributes.rel && "string" === typeof HH.attributes.href && "js" === lH(HH.attributes.href) || ("img" === rH && HH.attributes.srcset && HH.attributes.rr_dataURL ? SH.setAttribute("rrweb-original-srcset", HH.attributes.srcset) : SH.setAttribute(LH, zH.toString()))
                  }
                } catch (hH) {}
              }
          }
          for (const BH in tH) {
            const LH = tH[BH];
            if ("canvas" === rH && "rr_dataURL" === BH) {
              const HH = AH.createElement("img");
              HH.onload = () => {
                const BH = SH.getContext("2d");
                BH && BH.drawImage(HH, 0, 0, HH.width, HH.height)
              }, HH.src = LH.toString(), SH.RRNodeType && (SH.rr_dataURL = LH.toString())
            } else if ("img" === rH && "rr_dataURL" === BH) {
              const BH = SH;
              BH.currentSrc.startsWith("data:") || (BH.setAttribute("rrweb-original-src", HH.attributes.src), BH.src = LH.toString())
            }
            if ("rr_width" === BH) SH.style.setProperty("width", LH.toString());
            else if ("rr_height" === BH) SH.style.setProperty("height", LH.toString());
            else if ("rr_mediaCurrentTime" === BH && "number" === typeof LH) SH.currentTime = LH;
            else if ("rr_mediaState" === BH) switch (LH) {
              case "played":
                SH.play().catch((HH => console.warn("media playback error", HH)));
                break;
              case "paused":
                SH.pause()
            } else "rr_mediaPlaybackRate" === BH && "number" === typeof LH ? SH.playbackRate = LH : "rr_mediaMuted" === BH && "boolean" === typeof LH ? SH.muted = LH : "rr_mediaLoop" === BH && "boolean" === typeof LH ? SH.loop = LH : "rr_mediaVolume" === BH && "number" === typeof LH ? SH.volume = LH : "rr_open_mode" === BH && SH.setAttribute("rr_open_mode", LH)
          }
          if (HH.isShadowHost)
            if (SH.shadowRoot)
              for (; SH.shadowRoot.firstChild;) SH.shadowRoot.removeChild(SH.shadowRoot.firstChild);
            else SH.attachShadow({
              mode: "open"
            });
          return "input" !== rH && "textarea" !== rH || SH.setAttribute("autocomplete", "off"), SH
        }
        case zH.Text:
          return HH.isStyle && rH ? AH.createTextNode(JL(HH.textContent, SH)) : AH.createTextNode(HH.textContent);
        case zH.CDATA:
          return AH.createCDATASection(HH.textContent);
        case zH.Comment:
          return AH.createComment(HH.textContent);
        default:
          return null
      }
    }

    function AA(HH, BH) {
      const {
        doc: LH,
        mirror: AH,
        skipChild: rH = !1,
        hackCss: SH = !0,
        afterAppend: hH,
        cache: tH
      } = BH;
      if (AH.has(HH.id)) {
        const BH = AH.yAH(HH.id),
          LH = AH.getMeta(BH);
        if (EH = HH, (CH = LH) && EH && CH.type === EH.type && (CH.type === zH.Document ? CH.compatMode === EH.compatMode : CH.type === zH.DocumentType ? CH.name === EH.name && CH.publicId === EH.publicId && CH.systemId === EH.systemId : CH.type === zH.Comment || CH.type === zH.Text || CH.type === zH.CDATA ? CH.textContent === EH.textContent : CH.type === zH.Element && CH.tagName === EH.tagName && JSON.stringify(CH.attributes) === JSON.stringify(EH.attributes) && CH.isSVG === EH.isSVG && CH.needBlock === EH.needBlock)) return AH.yAH(HH.id)
      }
      var CH, EH;
      let XH = LA(HH, {
        doc: LH,
        hackCss: SH,
        cache: tH
      });
      if (!XH) return null;
      if (HH.rootId && AH.yAH(HH.rootId) !== LH && AH.replace(HH.rootId, LH), HH.type === zH.Document && (LH.close(), LH.open(), "BackCompat" === HH.compatMode && HH.childNodes && HH.childNodes[0].type !== zH.DocumentType && (HH.childNodes[0].type === zH.Element && "xmlns" in HH.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === HH.childNodes[0].attributes.xmlns ? LH.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : LH.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), XH = LH), AH.add(XH, HH), (HH.type === zH.Document || HH.type === zH.Element) && !rH)
        for (const GH of HH.childNodes) {
          const BH = AA(GH, {
            doc: LH,
            mirror: AH,
            skipChild: !1,
            hackCss: SH,
            afterAppend: hH,
            cache: tH
          });
          if (BH) {
            if (GH.isShadow && PH(XH) && XH.shadowRoot) XH.shadowRoot.appendChild(BH);
            else if (HH.type === zH.Document && GH.type == zH.Element) {
              const HH = BH;
              let LH = null;
              HH.childNodes.forEach((HH => {
                "BODY" === HH.nodeName && (LH = HH)
              })), LH ? (HH.removeChild(LH), XH.appendChild(BH), HH.appendChild(LH)) : XH.appendChild(BH)
            } else XH.appendChild(BH);
            hH && hH(BH, GH.id)
          } else console.warn("Failed to rebuild", GH)
        }
      return XH
    }

    function rA(HH, BH) {
      HA(BH);
      const {
        doc: LH,
        onVisit: AH,
        hackCss: rH = !0,
        afterAppend: SH,
        cache: hH,
        mirror: tH = new bH
      } = BH, CH = AA(HH, {
        doc: LH,
        mirror: tH,
        skipChild: !1,
        hackCss: rH,
        afterAppend: SH,
        cache: hH
      });
      return function(HH, BH) {
        for (const AH of HH.getIds()) HH.has(AH) && (LH = HH.yAH(AH), BH(LH));
        var LH
      }(tH, (HH => {
        AH && AH(HH),
          function(HH, BH) {
            const LH = BH.getMeta(HH);
            if ((null == LH ? void 0 : LH.type) !== zH.Element) return;
            const AH = HH;
            for (const rH in LH.attributes) {
              if (!Object.prototype.hasOwnProperty.call(LH.attributes, rH) || !rH.startsWith("rr_")) continue;
              const HH = LH.attributes[rH];
              "rr_scrollLeft" === rH && (AH.scrollLeft = HH), "rr_scrollTop" === rH && (AH.scrollTop = HH)
            }
          }(HH, tH)
      })), CH
    }
    var SA = Object.defineProperty,
      hA = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? SA(HH, BH, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: LH
      }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH),
      tA = Object.defineProperty,
      zA = (HH, BH, LH) => ((HH, BH, LH) => BH in HH ? tA(HH, BH, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: LH
      }) : HH[BH] = LH)(HH, "symbol" !== typeof BH ? BH + "" : BH, LH);
    Date.now().toString();
    let CA = class {
      constructor() {
        zA(this, "idNodeMap", new Map), zA(this, "nodeMetaMap", new WeakMap)
      }
      getId(HH) {
        var BH;
        if (!HH) return -1;
        return (null == (BH = this.getMeta(HH)) ? void 0 : BH.id) ?? -1
      }
      yAH(HH) {
        return this.idNodeMap.get(HH) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(HH) {
        return this.nodeMetaMap.get(HH) || null
      }
      removeNodeFromMap(HH) {
        const BH = this.getId(HH);
        this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH)))
      }
      has(HH) {
        return this.idNodeMap.has(HH)
      }
      hasNode(HH) {
        return this.nodeMetaMap.has(HH)
      }
      add(HH, BH) {
        const LH = BH.id;
        this.idNodeMap.set(LH, HH), this.nodeMetaMap.set(HH, BH)
      }
      replace(HH, BH) {
        const LH = this.yAH(HH);
        if (LH) {
          const HH = this.nodeMetaMap.get(LH);
          HH && this.nodeMetaMap.set(BH, HH)
        }
        this.idNodeMap.set(HH, BH)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    };

    function EA(HH) {
      return HH && HH.__esModule && Object.prototype.hasOwnProperty.call(HH, "default") ? HH.default : HH
    }

    function XA(HH) {
      if (HH.__esModule) return HH;
      var BH = HH.default;
      if ("function" == typeof BH) {
        var LH = function HH() {
          return this instanceof HH ? Reflect.construct(BH, arguments, this.constructor) : BH.apply(this, arguments)
        };
        LH.prototype = BH.prototype
      } else LH = {};
      return Object.defineProperty(LH, "__esModule", {
        value: !0
      }), Object.keys(HH).forEach((function(BH) {
        var AH = Object.getOwnPropertyDescriptor(HH, BH);
        Object.defineProperty(LH, BH, AH.get ? AH : {
          enumerable: !0,
          get: function() {
            return HH[BH]
          }
        })
      })), LH
    }
    var GA, YA = {
      exports: {}
    };

    function uA() {
      if (GA) return YA.exports;
      GA = 1;
      var HH = String,
        BH = function() {
          return {
            isColorSupported: !1,
            reset: HH,
            bold: HH,
            dim: HH,
            italic: HH,
            underline: HH,
            inverse: HH,
            hidden: HH,
            strikethrough: HH,
            black: HH,
            red: HH,
            green: HH,
            yellow: HH,
            blue: HH,
            magenta: HH,
            cyan: HH,
            white: HH,
            gray: HH,
            bgBlack: HH,
            bgRed: HH,
            bgGreen: HH,
            bgYellow: HH,
            bgBlue: HH,
            bgMagenta: HH,
            bgCyan: HH,
            bgWhite: HH
          }
        };
      return YA.exports = BH(), YA.exports.createColors = BH, YA.exports
    }
    const QA = XA(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var WA, MA;

    function xA() {
      if (MA) return WA;
      MA = 1;
      let HH = uA(),
        BH = QA;
      class LH extends Error {
        constructor(HH, BH, AH, rH, SH, hH) {
          super(HH), this.name = "CssSyntaxError", this.reason = HH, SH && (this.file = SH), rH && (this.source = rH), hH && (this.plugin = hH), "undefined" !== typeof BH && "undefined" !== typeof AH && ("number" === typeof BH ? (this.line = BH, this.column = AH) : (this.line = BH.line, this.column = BH.column, this.endLine = AH.line, this.endColumn = AH.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, LH)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(LH) {
          if (!this.source) return "";
          let AH = this.source;
          null == LH && (LH = HH.isColorSupported), BH && LH && (AH = BH(AH));
          let rH, SH, hH = AH.split(/\r?\n/),
            tH = Math.max(this.line - 3, 0),
            zH = Math.min(this.line + 2, hH.length),
            CH = String(zH).length;
          if (LH) {
            let {
              bold: BH,
              gray: LH,
              red: AH
            } = HH.createColors(!0);
            rH = HH => BH(AH(HH)), SH = HH => LH(HH)
          } else rH = SH = HH => HH;
          return hH.slice(tH, zH).map(((HH, BH) => {
            let LH = tH + 1 + BH,
              AH = " " + (" " + LH).slice(-CH) + " | ";
            if (LH === this.line) {
              let BH = SH(AH.replace(/\d/g, " ")) + HH.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return rH(">") + SH(AH) + HH + "\n " + BH + rH("^")
            }
            return " " + SH(AH) + HH
          })).join("\n")
        }
        toString() {
          let HH = this.showSourceCode();
          return HH && (HH = "\n\n" + HH + "\n"), this.name + ": " + this.message + HH
        }
      }
      return WA = LH, LH.default = LH, WA
    }
    var vA, PA, TA, UA, VA, OA, bA, kA, mA, oA, IA, fA, lA, KA, cA, eA, qA, gA, NA, RA, jA, nA, FA, DA, wA, ZA, dA, aA, sA, JA, iA, pA, yA, Hr, Br, Lr, Ar, rr, Sr, hr, tr, zr, Cr, Er, Xr, Gr, Yr, ur, Qr, Wr, Mr, xr, vr, Pr = {};

    function Tr() {
      return vA || (vA = 1, Pr.isClean = Symbol("isClean"), Pr.my = Symbol("my")), Pr
    }

    function Ur() {
      if (TA) return PA;
      TA = 1;
      const HH = {
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
      class BH {
        constructor(HH) {
          this.builder = HH
        }
        atrule(HH, BH) {
          let LH = "@" + HH.name,
            AH = HH.params ? this.rawValue(HH, "params") : "";
          if ("undefined" !== typeof HH.raws.afterName ? LH += HH.raws.afterName : AH && (LH += " "), HH.nodes) this.block(HH, LH + AH);
          else {
            let rH = (HH.raws.between || "") + (BH ? ";" : "");
            this.builder(LH + AH + rH, HH)
          }
        }
        beforeAfter(HH, BH) {
          let LH;
          LH = "decl" === HH.type ? this.raw(HH, null, "beforeDecl") : "comment" === HH.type ? this.raw(HH, null, "beforeComment") : "before" === BH ? this.raw(HH, null, "beforeRule") : this.raw(HH, null, "beforeClose");
          let AH = HH.parent,
            rH = 0;
          for (; AH && "root" !== AH.type;) rH += 1, AH = AH.parent;
          if (LH.includes("\n")) {
            let BH = this.raw(HH, null, "indent");
            if (BH.length)
              for (let HH = 0; HH < rH; HH++) LH += BH
          }
          return LH
        }
        block(HH, BH) {
          let LH, AH = this.raw(HH, "between", "beforeOpen");
          this.builder(BH + AH + "{", HH, "start"), HH.nodes && HH.nodes.length ? (this.body(HH), LH = this.raw(HH, "after")) : LH = this.raw(HH, "after", "emptyBody"), LH && this.builder(LH), this.builder("}", HH, "end")
        }
        body(HH) {
          let BH = HH.nodes.length - 1;
          for (; BH > 0 && "comment" === HH.nodes[BH].type;) BH -= 1;
          let LH = this.raw(HH, "semicolon");
          for (let AH = 0; AH < HH.nodes.length; AH++) {
            let rH = HH.nodes[AH],
              SH = this.raw(rH, "before");
            SH && this.builder(SH), this.stringify(rH, BH !== AH || LH)
          }
        }
        comment(HH) {
          let BH = this.raw(HH, "left", "commentLeft"),
            LH = this.raw(HH, "right", "commentRight");
          this.builder("/*" + BH + HH.text + LH + "*/", HH)
        }
        decl(HH, BH) {
          let LH = this.raw(HH, "between", "colon"),
            AH = HH.prop + LH + this.rawValue(HH, "value");
          HH.important && (AH += HH.raws.important || " !important"), BH && (AH += ";"), this.builder(AH, HH)
        }
        document(HH) {
          this.body(HH)
        }
        raw(BH, LH, AH) {
          let rH;
          if (AH || (AH = LH), LH && (rH = BH.raws[LH], "undefined" !== typeof rH)) return rH;
          let SH = BH.parent;
          if ("before" === AH) {
            if (!SH || "root" === SH.type && SH.first === BH) return "";
            if (SH && "document" === SH.type) return ""
          }
          if (!SH) return HH[AH];
          let hH = BH.root();
          if (hH.rawCache || (hH.rawCache = {}), "undefined" !== typeof hH.rawCache[AH]) return hH.rawCache[AH];
          if ("before" === AH || "after" === AH) return this.beforeAfter(BH, AH);
          {
            let HH = "raw" + ((tH = AH)[0].toUpperCase() + tH.slice(1));
            this[HH] ? rH = this[HH](hH, BH) : hH.walk((HH => {
              if (rH = HH.raws[LH], "undefined" !== typeof rH) return !1
            }))
          }
          var tH;
          return "undefined" === typeof rH && (rH = HH[AH]), hH.rawCache[AH] = rH, rH
        }
        rawBeforeClose(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && HH.nodes.length > 0 && "undefined" !== typeof HH.raws.after) return BH = HH.raws.after, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
          })), BH && (BH = BH.replace(/\S/g, "")), BH
        }
        rawBeforeComment(HH, BH) {
          let LH;
          return HH.walkComments((HH => {
            if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeDecl") : LH && (LH = LH.replace(/\S/g, "")), LH
        }
        rawBeforeDecl(HH, BH) {
          let LH;
          return HH.walkDecls((HH => {
            if ("undefined" !== typeof HH.raws.before) return LH = HH.raws.before, LH.includes("\n") && (LH = LH.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof LH ? LH = this.raw(BH, null, "beforeRule") : LH && (LH = LH.replace(/\S/g, "")), LH
        }
        rawBeforeOpen(HH) {
          let BH;
          return HH.walk((HH => {
            if ("decl" !== HH.type && (BH = HH.raws.between, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawBeforeRule(HH) {
          let BH;
          return HH.walk((LH => {
            if (LH.nodes && (LH.parent !== HH || HH.first !== LH) && "undefined" !== typeof LH.raws.before) return BH = LH.raws.before, BH.includes("\n") && (BH = BH.replace(/[^\n]+$/, "")), !1
          })), BH && (BH = BH.replace(/\S/g, "")), BH
        }
        rawColon(HH) {
          let BH;
          return HH.walkDecls((HH => {
            if ("undefined" !== typeof HH.raws.between) return BH = HH.raws.between.replace(/[^\s:]/g, ""), !1
          })), BH
        }
        rawEmptyBody(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && 0 === HH.nodes.length && (BH = HH.raws.after, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawIndent(HH) {
          if (HH.raws.indent) return HH.raws.indent;
          let BH;
          return HH.walk((LH => {
            let AH = LH.parent;
            if (AH && AH !== HH && AH.parent && AH.parent === HH && "undefined" !== typeof LH.raws.before) {
              let HH = LH.raws.before.split("\n");
              return BH = HH[HH.length - 1], BH = BH.replace(/\S/g, ""), !1
            }
          })), BH
        }
        rawSemicolon(HH) {
          let BH;
          return HH.walk((HH => {
            if (HH.nodes && HH.nodes.length && "decl" === HH.last.type && (BH = HH.raws.semicolon, "undefined" !== typeof BH)) return !1
          })), BH
        }
        rawValue(HH, BH) {
          let LH = HH[BH],
            AH = HH.raws[BH];
          return AH && AH.value === LH ? AH.raw : LH
        }
        root(HH) {
          this.body(HH), HH.raws.after && this.builder(HH.raws.after)
        }
        rule(HH) {
          this.block(HH, this.rawValue(HH, "selector")), HH.raws.ownSemicolon && this.builder(HH.raws.ownSemicolon, HH, "end")
        }
        stringify(HH, BH) {
          if (!this[HH.type]) throw new Error("Unknown AST node type " + HH.type + ". Maybe you need to change PostCSS stringifier.");
          this[HH.type](HH, BH)
        }
      }
      return PA = BH, BH.default = BH, PA
    }

    function Vr() {
      if (VA) return UA;
      VA = 1;
      let HH = Ur();

      function BH(BH, LH) {
        new HH(LH).stringify(BH)
      }
      return UA = BH, BH.default = BH, UA
    }

    function Or() {
      if (bA) return OA;
      bA = 1;
      let {
        isClean: HH,
        my: BH
      } = Tr(), LH = xA(), AH = Ur(), rH = Vr();

      function SH(HH, BH) {
        let LH = new HH.constructor;
        for (let AH in HH) {
          if (!Object.prototype.hasOwnProperty.call(HH, AH)) continue;
          if ("proxyCache" === AH) continue;
          let rH = HH[AH],
            hH = typeof rH;
          "parent" === AH && "object" === hH ? BH && (LH[AH] = BH) : "source" === AH ? LH[AH] = rH : Array.isArray(rH) ? LH[AH] = rH.map((HH => SH(HH, LH))) : ("object" === hH && null !== rH && (rH = SH(rH)), LH[AH] = rH)
        }
        return LH
      }
      class hH {
        constructor() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[HH] = !1, this[BH] = !0;
          for (let HH in LH)
            if ("nodes" === HH) {
              this.nodes = [];
              for (let BH of LH[HH]) "function" === typeof BH.clone ? this.append(BH.clone()) : this.append(BH)
            } else this[HH] = LH[HH]
        }
        addToError(HH) {
          if (HH.postcssNode = this, HH.stack && this.source && /\n\s{4}at /.test(HH.stack)) {
            let BH = this.source;
            HH.stack = HH.stack.replace(/\n\s{4}at /, `$&${BH.input.from}:${BH.start.line}:${BH.start.column}$&`)
          }
          return HH
        }
        after(HH) {
          return this.parent.insertAfter(this, HH), this
        }
        assign() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let BH in HH) this[BH] = HH[BH];
          return this
        }
        before(HH) {
          return this.parent.insertBefore(this, HH), this
        }
        cleanRaws(HH) {
          delete this.raws.before, delete this.raws.after, HH || delete this.raws.between
        }
        clone() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = SH(this);
          for (let LH in HH) BH[LH] = HH[LH];
          return BH
        }
        cloneAfter() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = this.clone(HH);
          return this.parent.insertAfter(this, BH), BH
        }
        cloneBefore() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            BH = this.clone(HH);
          return this.parent.insertBefore(this, BH), BH
        }
        error(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: LH,
              start: AH
            } = this.rangeBy(BH);
            return this.source.input.error(HH, {
              column: AH.column,
              line: AH.line
            }, {
              column: LH.column,
              line: LH.line
            }, BH)
          }
          return new LH(HH)
        }
        getProxyProcessor() {
          return {
            get: (HH, BH) => "proxyOf" === BH ? HH : "root" === BH ? () => HH.root().toProxy() : HH[BH],
            set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "prop" !== BH && "value" !== BH && "name" !== BH && "params" !== BH && "important" !== BH && "text" !== BH || HH.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[HH]) {
            this[HH] = !1;
            let BH = this;
            for (; BH = BH.parent;) BH[HH] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let HH = this.parent.index(this);
          return this.parent.nodes[HH + 1]
        }
        positionBy(HH, BH) {
          let LH = this.source.start;
          if (HH.index) LH = this.positionInside(HH.index, BH);
          else if (HH.word) {
            let AH = (BH = this.toString()).indexOf(HH.word); - 1 !== AH && (LH = this.positionInside(AH, BH))
          }
          return LH
        }
        positionInside(HH, BH) {
          let LH = BH || this.toString(),
            AH = this.source.start.column,
            rH = this.source.start.line;
          for (let SH = 0; SH < HH; SH++) "\n" === LH[SH] ? (AH = 1, rH += 1) : AH += 1;
          return {
            column: AH,
            line: rH
          }
        }
        prev() {
          if (!this.parent) return;
          let HH = this.parent.index(this);
          return this.parent.nodes[HH - 1]
        }
        rangeBy(HH) {
          let BH = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            LH = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: BH.column + 1,
              line: BH.line
            };
          if (HH.word) {
            let AH = this.toString(),
              rH = AH.indexOf(HH.word); - 1 !== rH && (BH = this.positionInside(rH, AH), LH = this.positionInside(rH + HH.word.length, AH))
          } else HH.start ? BH = {
            column: HH.start.column,
            line: HH.start.line
          } : HH.index && (BH = this.positionInside(HH.index)), HH.end ? LH = {
            column: HH.end.column,
            line: HH.end.line
          } : "number" === typeof HH.endIndex ? LH = this.positionInside(HH.endIndex) : HH.index && (LH = this.positionInside(HH.index + 1));
          return (LH.line < BH.line || LH.line === BH.line && LH.column <= BH.column) && (LH = {
            column: BH.column + 1,
            line: BH.line
          }), {
            end: LH,
            start: BH
          }
        }
        raw(HH, BH) {
          return (new AH).raw(this, HH, BH)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let AH = this,
              rH = !1;
            for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
            for (let HH of BH) HH === this ? rH = !0 : rH ? (this.parent.insertAfter(AH, HH), AH = HH) : this.parent.insertBefore(AH, HH);
            rH || this.remove()
          }
          return this
        }
        root() {
          let HH = this;
          for (; HH.parent && "document" !== HH.parent.type;) HH = HH.parent;
          return HH
        }
        toJSON(HH, BH) {
          let LH = {},
            AH = null == BH;
          BH = BH || new Map;
          let rH = 0;
          for (let SH in this) {
            if (!Object.prototype.hasOwnProperty.call(this, SH)) continue;
            if ("parent" === SH || "proxyCache" === SH) continue;
            let HH = this[SH];
            if (Array.isArray(HH)) LH[SH] = HH.map((HH => "object" === typeof HH && HH.toJSON ? HH.toJSON(null, BH) : HH));
            else if ("object" === typeof HH && HH.toJSON) LH[SH] = HH.toJSON(null, BH);
            else if ("source" === SH) {
              let AH = BH.get(HH.input);
              null == AH && (AH = rH, BH.set(HH.input, rH), rH++), LH[SH] = {
                end: HH.end,
                inputId: AH,
                start: HH.start
              }
            } else LH[SH] = HH
          }
          return AH && (LH.inputs = [...BH.keys()].map((HH => HH.toJSON()))), LH
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : rH;
          HH.stringify && (HH = HH.stringify);
          let BH = "";
          return HH(this, (HH => {
            BH += HH
          })), BH
        }
        warn(HH, BH, LH) {
          let AH = {
            node: this
          };
          for (let rH in LH) AH[rH] = LH[rH];
          return HH.warn(BH, AH)
        }
        get proxyOf() {
          return this
        }
      }
      return OA = hH, hH.default = hH, OA
    }

    function br() {
      if (mA) return kA;
      mA = 1;
      let HH = Or();
      class BH extends HH {
        constructor(HH) {
          HH && "undefined" !== typeof HH.value && "string" !== typeof HH.value && (HH = {
            ...HH,
            value: String(HH.value)
          }), super(HH), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return kA = BH, BH.default = BH, kA
    }

    function kr() {
      if (IA) return oA;
      IA = 1;
      return oA = {
        nanoid: function() {
          let HH = "",
            BH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; BH--;) HH += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return HH
        },
        customAlphabet: function(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let LH = "",
              AH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : BH;
            for (; AH--;) LH += HH[Math.random() * HH.length | 0];
            return LH
          }
        }
      }, oA
    }

    function mr() {
      if (lA) return fA;
      lA = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = QA, {
        existsSync: LH,
        readFileSync: AH
      } = QA, {
        dirname: rH,
        join: SH
      } = QA;
      class hH {
        constructor(HH, BH) {
          if (!1 === BH.map) return;
          this.loadAnnotation(HH), this.inline = this.startWith(this.annotation, "data:");
          let LH = BH.map ? BH.map.prev : void 0,
            AH = this.loadMap(BH.from, LH);
          !this.mapFile && BH.from && (this.mapFile = BH.from), this.mapFile && (this.root = rH(this.mapFile)), AH && (this.text = AH)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new HH(this.text)), this.consumerCache
        }
        decodeInline(HH) {
          if (/^data:application\/json;charset=utf-?8,/.test(HH) || /^data:application\/json,/.test(HH)) return decodeURIComponent(HH.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(HH) || /^data:application\/json;base64,/.test(HH)) return BH = HH.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(BH, "base64").toString() : window.atob(BH);
          var BH;
          let LH = HH.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + LH)
        }
        getAnnotationURL(HH) {
          return HH.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(HH) {
          return "object" === typeof HH && ("string" === typeof HH.mappings || "string" === typeof HH._mappings || Array.isArray(HH.sections))
        }
        loadAnnotation(HH) {
          let BH = HH.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!BH) return;
          let LH = HH.lastIndexOf(BH.pop()),
            AH = HH.indexOf("*/", LH);
          LH > -1 && AH > -1 && (this.annotation = this.getAnnotationURL(HH.substring(LH, AH)))
        }
        loadFile(HH) {
          if (this.root = rH(HH), LH(HH)) return this.mapFile = HH, AH(HH, "utf-8").toString().trim()
        }
        loadMap(LH, AH) {
          if (!1 === AH) return !1;
          if (AH) {
            if ("string" === typeof AH) return AH;
            if ("function" !== typeof AH) {
              if (AH instanceof HH) return BH.fromSourceMap(AH).toString();
              if (AH instanceof BH) return AH.toString();
              if (this.isMap(AH)) return JSON.stringify(AH);
              throw new Error("Unsupported previous source map format: " + AH.toString())
            } {
              let HH = AH(LH);
              if (HH) {
                let BH = this.loadFile(HH);
                if (!BH) throw new Error("Unable to load previous source map: " + HH.toString());
                return BH
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let HH = this.annotation;
              return LH && (HH = SH(rH(LH), HH)), this.loadFile(HH)
            }
          }
        }
        startWith(HH, BH) {
          return !!HH && HH.substr(0, BH.length) === BH
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return fA = hH, hH.default = hH, fA
    }

    function or() {
      if (cA) return KA;
      cA = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = QA, {
        fileURLToPath: LH,
        pathToFileURL: AH
      } = QA, {
        isAbsolute: rH,
        resolve: SH
      } = QA, {
        nanoid: hH
      } = kr(), tH = QA, zH = xA(), CH = mr(), EH = Symbol("fromOffsetCache"), XH = Boolean(HH && BH), GH = Boolean(SH && rH);
      class YH {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === HH || "undefined" === typeof HH || "object" === typeof HH && !HH.toString) throw new Error(`PostCSS received ${HH} instead of CSS string`);
          if (this.css = HH.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, BH.from && (!GH || /^\w+:\/\//.test(BH.from) || rH(BH.from) ? this.file = BH.from : this.file = SH(BH.from)), GH && XH) {
            let HH = new CH(this.css, BH);
            if (HH.text) {
              this.map = HH;
              let BH = HH.consumer().file;
              !this.file && BH && (this.file = this.mapResolve(BH))
            }
          }
          this.file || (this.id = "<input css " + hH(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(HH, BH, LH) {
          let rH, SH, hH, tH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (BH && "object" === typeof BH) {
            let HH = BH,
              AH = LH;
            if ("number" === typeof HH.offset) {
              let AH = this.fromOffset(HH.offset);
              BH = AH.line, LH = AH.col
            } else BH = HH.line, LH = HH.column;
            if ("number" === typeof AH.offset) {
              let HH = this.fromOffset(AH.offset);
              SH = HH.line, hH = HH.col
            } else SH = AH.line, hH = AH.column
          } else if (!LH) {
            let HH = this.fromOffset(BH);
            BH = HH.line, LH = HH.col
          }
          let CH = this.origin(BH, LH, SH, hH);
          return rH = CH ? new zH(HH, void 0 === CH.endLine ? CH.line : {
            column: CH.column,
            line: CH.line
          }, void 0 === CH.endLine ? CH.column : {
            column: CH.endColumn,
            line: CH.endLine
          }, CH.source, CH.file, tH.plugin) : new zH(HH, void 0 === SH ? BH : {
            column: LH,
            line: BH
          }, void 0 === SH ? LH : {
            column: hH,
            line: SH
          }, this.css, this.file, tH.plugin), rH.input = {
            column: LH,
            endColumn: hH,
            endLine: SH,
            line: BH,
            source: this.css
          }, this.file && (AH && (rH.input.url = AH(this.file).toString()), rH.input.file = this.file), rH
        }
        fromOffset(HH) {
          let BH, LH;
          if (this[EH]) LH = this[EH];
          else {
            let HH = this.css.split("\n");
            LH = new Array(HH.length);
            let BH = 0;
            for (let AH = 0, rH = HH.length; AH < rH; AH++) LH[AH] = BH, BH += HH[AH].length + 1;
            this[EH] = LH
          }
          BH = LH[LH.length - 1];
          let AH = 0;
          if (HH >= BH) AH = LH.length - 1;
          else {
            let BH, rH = LH.length - 2;
            for (; AH < rH;)
              if (BH = AH + (rH - AH >> 1), HH < LH[BH]) rH = BH - 1;
              else {
                if (!(HH >= LH[BH + 1])) {
                  AH = BH;
                  break
                }
                AH = BH + 1
              }
          }
          return {
            col: HH - LH[AH] + 1,
            line: AH + 1
          }
        }
        mapResolve(HH) {
          return /^\w+:\/\//.test(HH) ? HH : SH(this.map.consumer().sourceRoot || this.map.root || ".", HH)
        }
        origin(HH, BH, SH, hH) {
          if (!this.map) return !1;
          let tH, zH, CH = this.map.consumer(),
            EH = CH.originalPositionFor({
              column: BH,
              line: HH
            });
          if (!EH.source) return !1;
          "number" === typeof SH && (tH = CH.originalPositionFor({
            column: hH,
            line: SH
          })), zH = rH(EH.source) ? AH(EH.source) : new URL(EH.source, this.map.consumer().sourceRoot || AH(this.map.mapFile));
          let XH = {
            column: EH.column,
            endColumn: tH && tH.column,
            endLine: tH && tH.line,
            line: EH.line,
            url: zH.toString()
          };
          if ("file:" === zH.protocol) {
            if (!LH) throw new Error("file: protocol is not available in this PostCSS build");
            XH.file = LH(zH)
          }
          let GH = CH.sourceContentFor(EH.source);
          return GH && (XH.source = GH), XH
        }
        toJSON() {
          let HH = {};
          for (let BH of ["hasBOM", "css", "file", "id"]) null != this[BH] && (HH[BH] = this[BH]);
          return this.map && (HH.map = {
            ...this.map
          }, HH.map.consumerCache && (HH.map.consumerCache = void 0)), HH
        }
        get from() {
          return this.file || this.id
        }
      }
      return KA = YH, YH.default = YH, tH && tH.registerInput && tH.registerInput(YH), KA
    }

    function Ir() {
      if (qA) return eA;
      qA = 1;
      let {
        SourceMapConsumer: HH,
        SourceMapGenerator: BH
      } = QA, {
        dirname: LH,
        relative: AH,
        resolve: rH,
        sep: SH
      } = QA, {
        pathToFileURL: hH
      } = QA, tH = or(), zH = Boolean(HH && BH), CH = Boolean(LH && rH && AH && SH);
      return eA = class {
        constructor(HH, BH, LH, AH) {
          this.stringify = HH, this.mapOpts = LH.map || {}, this.root = BH, this.opts = LH, this.css = AH, this.originalCSS = AH, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let HH;
          HH = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let BH = "\n";
          this.css.includes("\r\n") && (BH = "\r\n"), this.css += BH + "/*# sourceMappingURL=" + HH + " */"
        }
        applyPrevMaps() {
          for (let BH of this.previous()) {
            let AH, rH = this.toUrl(this.path(BH.file)),
              SH = BH.root || LH(BH.file);
            !1 === this.mapOpts.sourcesContent ? (AH = new HH(BH.text), AH.sourcesContent && (AH.sourcesContent = null)) : AH = BH.consumer(), this.map.applySourceMap(AH, rH, this.toUrl(this.path(SH)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let HH;
              for (let BH = this.root.nodes.length - 1; BH >= 0; BH--) HH = this.root.nodes[BH], "comment" === HH.type && 0 === HH.text.indexOf("# sourceMappingURL=") && this.root.removeChild(BH)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), CH && zH && this.isMap()) return this.generateMap();
          {
            let HH = "";
            return this.stringify(this.root, (BH => {
              HH += BH
            })), [HH]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let HH = this.previous()[0].consumer();
            HH.file = this.outputFile(), this.map = BH.fromSourceMap(HH, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new BH({
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
          this.css = "", this.map = new BH({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let HH, LH, AH = 1,
            rH = 1,
            SH = "<no source>",
            hH = {
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
          this.stringify(this.root, ((BH, tH, zH) => {
            if (this.css += BH, tH && "end" !== zH && (hH.generated.line = AH, hH.generated.column = rH - 1, tH.source && tH.source.start ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.start.line, hH.original.column = tH.source.start.column - 1, this.map.addMapping(hH)) : (hH.source = SH, hH.original.line = 1, hH.original.column = 0, this.map.addMapping(hH))), HH = BH.match(/\n/g), HH ? (AH += HH.length, LH = BH.lastIndexOf("\n"), rH = BH.length - LH) : rH += BH.length, tH && "start" !== zH) {
              let HH = tH.parent || {
                raws: {}
              };
              ("decl" === tH.type || "atrule" === tH.type && !tH.nodes) && tH === HH.last && !HH.raws.semicolon || (tH.source && tH.source.end ? (hH.source = this.sourcePath(tH), hH.original.line = tH.source.end.line, hH.original.column = tH.source.end.column - 1, hH.generated.line = AH, hH.generated.column = rH - 2, this.map.addMapping(hH)) : (hH.source = SH, hH.original.line = 1, hH.original.column = 0, hH.generated.line = AH, hH.generated.column = rH - 1, this.map.addMapping(hH)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((HH => HH.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let HH = this.mapOpts.annotation;
          return ("undefined" === typeof HH || !0 === HH) && (!this.previous().length || this.previous().some((HH => HH.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((HH => HH.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(HH) {
          if (this.mapOpts.absolute) return HH;
          if (60 === HH.charCodeAt(0)) return HH;
          if (/^\w+:\/\//.test(HH)) return HH;
          let BH = this.memoizedPaths.get(HH);
          if (BH) return BH;
          let SH = this.opts.to ? LH(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (SH = LH(rH(SH, this.mapOpts.annotation)));
          let hH = AH(SH, HH);
          return this.memoizedPaths.set(HH, hH), hH
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((HH => {
              if (HH.source && HH.source.input.map) {
                let BH = HH.source.input.map;
                this.previousMaps.includes(BH) || this.previousMaps.push(BH)
              }
            }));
            else {
              let HH = new tH(this.originalCSS, this.opts);
              HH.map && this.previousMaps.push(HH.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let HH = {};
          if (this.root) this.root.walk((BH => {
            if (BH.source) {
              let LH = BH.source.input.from;
              if (LH && !HH[LH]) {
                HH[LH] = !0;
                let AH = this.usesFileUrls ? this.toFileUrl(LH) : this.toUrl(this.path(LH));
                this.map.setSourceContent(AH, BH.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let HH = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(HH, this.css)
          }
        }
        sourcePath(HH) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(HH.source.input.from) : this.toUrl(this.path(HH.source.input.from))
        }
        toBase64(HH) {
          return Buffer ? Buffer.from(HH).toString("base64") : window.btoa(unescape(encodeURIComponent(HH)))
        }
        toFileUrl(HH) {
          let BH = this.memoizedFileURLs.get(HH);
          if (BH) return BH;
          if (hH) {
            let BH = hH(HH).toString();
            return this.memoizedFileURLs.set(HH, BH), BH
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(HH) {
          let BH = this.memoizedURLs.get(HH);
          if (BH) return BH;
          "\\" === SH && (HH = HH.replace(/\\/g, "/"));
          let LH = encodeURI(HH).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(HH, LH), LH
        }
      }
    }

    function fr() {
      if (NA) return gA;
      NA = 1;
      let HH = Or();
      class BH extends HH {
        constructor(HH) {
          super(HH), this.type = "comment"
        }
      }
      return gA = BH, BH.default = BH, gA
    }

    function lr() {
      if (jA) return RA;
      jA = 1;
      let HH, BH, LH, AH, {
          isClean: rH,
          my: SH
        } = Tr(),
        hH = br(),
        tH = fr(),
        zH = Or();

      function CH(HH) {
        return HH.map((HH => (HH.nodes && (HH.nodes = CH(HH.nodes)), delete HH.source, HH)))
      }

      function EH(HH) {
        if (HH[rH] = !1, HH.proxyOf.nodes)
          for (let BH of HH.proxyOf.nodes) EH(BH)
      }
      class XH extends zH {
        append() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          for (let AH of BH) {
            let HH = this.normalize(AH, this.last);
            for (let BH of HH) this.proxyOf.nodes.push(BH)
          }
          return this.markDirty(), this
        }
        cleanRaws(HH) {
          if (super.cleanRaws(HH), this.nodes)
            for (let BH of this.nodes) BH.cleanRaws(HH)
        }
        each(HH) {
          if (!this.proxyOf.nodes) return;
          let BH, LH, AH = this.getIterator();
          for (; this.indexes[AH] < this.proxyOf.nodes.length && (BH = this.indexes[AH], LH = HH(this.proxyOf.nodes[BH], BH), !1 !== LH);) this.indexes[AH] += 1;
          return delete this.indexes[AH], LH
        }
        every(HH) {
          return this.nodes.every(HH)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let HH = this.lastEach;
          return this.indexes[HH] = 0, HH
        }
        getProxyProcessor() {
          return {
            get: (HH, BH) => "proxyOf" === BH ? HH : HH[BH] ? "each" === BH || "string" === typeof BH && BH.startsWith("walk") ? function() {
              for (var LH = arguments.length, AH = new Array(LH), rH = 0; rH < LH; rH++) AH[rH] = arguments[rH];
              return HH[BH](...AH.map((HH => "function" === typeof HH ? (BH, LH) => HH(BH.toProxy(), LH) : HH)))
            } : "every" === BH || "some" === BH ? LH => HH[BH]((function(HH) {
              for (var BH = arguments.length, AH = new Array(BH > 1 ? BH - 1 : 0), rH = 1; rH < BH; rH++) AH[rH - 1] = arguments[rH];
              return LH(HH.toProxy(), ...AH)
            })) : "root" === BH ? () => HH.root().toProxy() : "nodes" === BH ? HH.nodes.map((HH => HH.toProxy())) : "first" === BH || "last" === BH ? HH[BH].toProxy() : HH[BH] : HH[BH],
            set: (HH, BH, LH) => (HH[BH] === LH || (HH[BH] = LH, "name" !== BH && "params" !== BH && "selector" !== BH || HH.markDirty()), !0)
          }
        }
        index(HH) {
          return "number" === typeof HH ? HH : (HH.proxyOf && (HH = HH.proxyOf), this.proxyOf.nodes.indexOf(HH))
        }
        insertAfter(HH, BH) {
          let LH, AH = this.index(HH),
            rH = this.normalize(BH, this.proxyOf.nodes[AH]).reverse();
          AH = this.index(HH);
          for (let SH of rH) this.proxyOf.nodes.splice(AH + 1, 0, SH);
          for (let SH in this.indexes) LH = this.indexes[SH], AH < LH && (this.indexes[SH] = LH + rH.length);
          return this.markDirty(), this
        }
        insertBefore(HH, BH) {
          let LH, AH = this.index(HH),
            rH = 0 === AH && "prepend",
            SH = this.normalize(BH, this.proxyOf.nodes[AH], rH).reverse();
          AH = this.index(HH);
          for (let hH of SH) this.proxyOf.nodes.splice(AH, 0, hH);
          for (let hH in this.indexes) LH = this.indexes[hH], AH <= LH && (this.indexes[hH] = LH + SH.length);
          return this.markDirty(), this
        }
        normalize(AH, zH) {
          if ("string" === typeof AH) AH = CH(HH(AH).nodes);
          else if ("undefined" === typeof AH) AH = [];
          else if (Array.isArray(AH)) {
            AH = AH.slice(0);
            for (let HH of AH) HH.parent && HH.parent.removeChild(HH, "ignore")
          } else if ("root" === AH.type && "document" !== this.type) {
            AH = AH.nodes.slice(0);
            for (let HH of AH) HH.parent && HH.parent.removeChild(HH, "ignore")
          } else if (AH.type) AH = [AH];
          else if (AH.prop) {
            if ("undefined" === typeof AH.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof AH.value && (AH.value = String(AH.value)), AH = [new hH(AH)]
          } else if (AH.selector) AH = [new BH(AH)];
          else if (AH.name) AH = [new LH(AH)];
          else {
            if (!AH.text) throw new Error("Unknown node type in node creation");
            AH = [new tH(AH)]
          }
          return AH.map((HH => (HH[SH] || XH.rebuild(HH), (HH = HH.proxyOf).parent && HH.parent.removeChild(HH), HH[rH] && EH(HH), "undefined" === typeof HH.raws.before && zH && "undefined" !== typeof zH.raws.before && (HH.raws.before = zH.raws.before.replace(/\S/g, "")), HH.parent = this.proxyOf, HH)))
        }
        prepend() {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          BH = BH.reverse();
          for (let AH of BH) {
            let HH = this.normalize(AH, this.first, "prepend").reverse();
            for (let BH of HH) this.proxyOf.nodes.unshift(BH);
            for (let BH in this.indexes) this.indexes[BH] = this.indexes[BH] + HH.length
          }
          return this.markDirty(), this
        }
        push(HH) {
          return HH.parent = this, this.proxyOf.nodes.push(HH), this
        }
        removeAll() {
          for (let HH of this.proxyOf.nodes) HH.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(HH) {
          let BH;
          HH = this.index(HH), this.proxyOf.nodes[HH].parent = void 0, this.proxyOf.nodes.splice(HH, 1);
          for (let LH in this.indexes) BH = this.indexes[LH], BH >= HH && (this.indexes[LH] = BH - 1);
          return this.markDirty(), this
        }
        replaceValues(HH, BH, LH) {
          return LH || (LH = BH, BH = {}), this.walkDecls((AH => {
            BH.props && !BH.props.includes(AH.prop) || BH.fast && !AH.value.includes(BH.fast) || (AH.value = AH.value.replace(HH, LH))
          })), this.markDirty(), this
        }
        some(HH) {
          return this.nodes.some(HH)
        }
        walk(HH) {
          return this.each(((BH, LH) => {
            let AH;
            try {
              AH = HH(BH, LH)
            } catch (rH) {
              throw BH.addToError(rH)
            }
            return !1 !== AH && BH.walk && (AH = BH.walk(HH)), AH
          }))
        }
        walkAtRules(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("atrule" === LH.type && HH.test(LH.name)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("atrule" === LH.type && LH.name === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("atrule" === HH.type) return BH(HH, LH)
          })))
        }
        walkComments(HH) {
          return this.walk(((BH, LH) => {
            if ("comment" === BH.type) return HH(BH, LH)
          }))
        }
        walkDecls(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("decl" === LH.type && HH.test(LH.prop)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("decl" === LH.type && LH.prop === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("decl" === HH.type) return BH(HH, LH)
          })))
        }
        walkRules(HH, BH) {
          return BH ? HH instanceof RegExp ? this.walk(((LH, AH) => {
            if ("rule" === LH.type && HH.test(LH.selector)) return BH(LH, AH)
          })) : this.walk(((LH, AH) => {
            if ("rule" === LH.type && LH.selector === HH) return BH(LH, AH)
          })) : (BH = HH, this.walk(((HH, LH) => {
            if ("rule" === HH.type) return BH(HH, LH)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return XH.registerParse = BH => {
        HH = BH
      }, XH.registerRule = HH => {
        BH = HH
      }, XH.registerAtRule = HH => {
        LH = HH
      }, XH.registerRoot = HH => {
        AH = HH
      }, RA = XH, XH.default = XH, XH.rebuild = HH => {
        "atrule" === HH.type ? Object.setPrototypeOf(HH, LH.prototype) : "rule" === HH.type ? Object.setPrototypeOf(HH, BH.prototype) : "decl" === HH.type ? Object.setPrototypeOf(HH, hH.prototype) : "comment" === HH.type ? Object.setPrototypeOf(HH, tH.prototype) : "root" === HH.type && Object.setPrototypeOf(HH, AH.prototype), HH[SH] = !0, HH.nodes && HH.nodes.forEach((HH => {
          XH.rebuild(HH)
        }))
      }, RA
    }

    function Kr() {
      if (FA) return nA;
      FA = 1;
      let HH, BH, LH = lr();
      class AH extends LH {
        constructor(HH) {
          super({
            type: "document",
            ...HH
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new HH(new BH, this, LH).stringify()
        }
      }
      return AH.registerLazyResult = BH => {
        HH = BH
      }, AH.registerProcessor = HH => {
        BH = HH
      }, nA = AH, AH.default = AH, nA
    }

    function cr() {
      if (wA) return DA;
      wA = 1;
      let HH = {};
      return DA = function(BH) {
        HH[BH] || (HH[BH] = !0, "undefined" !== typeof console && console.warn && console.warn(BH))
      }
    }

    function er() {
      if (dA) return ZA;
      dA = 1;
      class HH {
        constructor(HH) {
          let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = HH, BH.node && BH.node.source) {
            let HH = BH.node.rangeBy(BH);
            this.line = HH.start.line, this.column = HH.start.column, this.endLine = HH.end.line, this.endColumn = HH.end.column
          }
          for (let LH in BH) this[LH] = BH[LH]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return ZA = HH, HH.default = HH, ZA
    }

    function qr() {
      if (sA) return aA;
      sA = 1;
      let HH = er();
      class BH {
        constructor(HH, BH, LH) {
          this.processor = HH, this.messages = [], this.root = BH, this.opts = LH, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(BH) {
          let LH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          LH.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (LH.plugin = this.lastPlugin.postcssPlugin);
          let AH = new HH(BH, LH);
          return this.messages.push(AH), AH
        }
        warnings() {
          return this.messages.filter((HH => "warning" === HH.type))
        }
        get content() {
          return this.css
        }
      }
      return aA = BH, BH.default = BH, aA
    }

    function gr() {
      if (yA) return pA;
      yA = 1;
      let HH = lr();
      class BH extends HH {
        constructor(HH) {
          super(HH), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return pA = BH, BH.default = BH, HH.registerAtRule(BH), pA
    }

    function Nr() {
      if (Br) return Hr;
      Br = 1;
      let HH, BH, LH = lr();
      class AH extends LH {
        constructor(HH) {
          super(HH), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(HH, BH, LH) {
          let AH = super.normalize(HH);
          if (BH)
            if ("prepend" === LH) this.nodes.length > 1 ? BH.raws.before = this.nodes[1].raws.before : delete BH.raws.before;
            else if (this.first !== BH)
            for (let rH of AH) rH.raws.before = BH.raws.before;
          return AH
        }
        removeChild(HH, BH) {
          let LH = this.index(HH);
          return !BH && 0 === LH && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[LH].raws.before), super.removeChild(HH)
        }
        toResult() {
          let LH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new HH(new BH, this, LH).stringify()
        }
      }
      return AH.registerLazyResult = BH => {
        HH = BH
      }, AH.registerProcessor = HH => {
        BH = HH
      }, Hr = AH, AH.default = AH, LH.registerRoot(AH), Hr
    }

    function Rr() {
      if (Ar) return Lr;
      Ar = 1;
      let HH = {
        comma: BH => HH.split(BH, [","], !0),
        space: BH => HH.split(BH, [" ", "\n", "\t"]),
        split(HH, BH, LH) {
          let AH = [],
            rH = "",
            SH = !1,
            hH = 0,
            tH = !1,
            zH = "",
            CH = !1;
          for (let EH of HH) CH ? CH = !1 : "\\" === EH ? CH = !0 : tH ? EH === zH && (tH = !1) : '"' === EH || "'" === EH ? (tH = !0, zH = EH) : "(" === EH ? hH += 1 : ")" === EH ? hH > 0 && (hH -= 1) : 0 === hH && BH.includes(EH) && (SH = !0), SH ? ("" !== rH && AH.push(rH.trim()), rH = "", SH = !1) : rH += EH;
          return (LH || "" !== rH) && AH.push(rH.trim()), AH
        }
      };
      return Lr = HH, HH.default = HH, Lr
    }

    function jr() {
      if (Sr) return rr;
      Sr = 1;
      let HH = lr(),
        BH = Rr();
      class LH extends HH {
        constructor(HH) {
          super(HH), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return BH.comma(this.selector)
        }
        set selectors(HH) {
          let BH = this.selector ? this.selector.match(/,\s*/) : null,
            LH = BH ? BH[0] : "," + this.raw("between", "beforeOpen");
          this.selector = HH.join(LH)
        }
      }
      return rr = LH, LH.default = LH, HH.registerRule(LH), rr
    }

    function nr() {
      if (tr) return hr;
      tr = 1;
      let HH = br(),
        BH = function() {
          if (iA) return JA;
          iA = 1;
          const HH = "'".charCodeAt(0),
            BH = '"'.charCodeAt(0),
            LH = "\\".charCodeAt(0),
            AH = "/".charCodeAt(0),
            rH = "\n".charCodeAt(0),
            SH = " ".charCodeAt(0),
            hH = "\f".charCodeAt(0),
            tH = "\t".charCodeAt(0),
            zH = "\r".charCodeAt(0),
            CH = "[".charCodeAt(0),
            EH = "]".charCodeAt(0),
            XH = "(".charCodeAt(0),
            GH = ")".charCodeAt(0),
            YH = "{".charCodeAt(0),
            uH = "}".charCodeAt(0),
            QH = ";".charCodeAt(0),
            WH = "*".charCodeAt(0),
            MH = ":".charCodeAt(0),
            xH = "@".charCodeAt(0),
            vH = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            PH = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            TH = /.[\r\n"'(/\\]/,
            UH = /[\da-f]/i;
          return JA = function(VH) {
            let OH, bH, kH, mH, oH, IH, fH, lH, KH, cH, eH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              qH = VH.css.valueOf(),
              gH = eH.ignoreErrors,
              NH = qH.length,
              RH = 0,
              jH = [],
              nH = [];

            function FH(HH) {
              throw VH.error("Unclosed " + HH, RH)
            }
            return {
              back: function(HH) {
                nH.push(HH)
              },
              endOfFile: function() {
                return 0 === nH.length && RH >= NH
              },
              nextToken: function(VH) {
                if (nH.length) return nH.pop();
                if (RH >= NH) return;
                let eH = !!VH && VH.ignoreUnclosed;
                switch (OH = qH.charCodeAt(RH), OH) {
                  case rH:
                  case SH:
                  case tH:
                  case zH:
                  case hH:
                    bH = RH;
                    do {
                      bH += 1, OH = qH.charCodeAt(bH)
                    } while (OH === SH || OH === rH || OH === tH || OH === zH || OH === hH);
                    cH = ["space", qH.slice(RH, bH)], RH = bH - 1;
                    break;
                  case CH:
                  case EH:
                  case YH:
                  case uH:
                  case MH:
                  case QH:
                  case GH: {
                    let HH = String.fromCharCode(OH);
                    cH = [HH, HH, RH];
                    break
                  }
                  case XH:
                    if (lH = jH.length ? jH.pop()[1] : "", KH = qH.charCodeAt(RH + 1), "url" === lH && KH !== HH && KH !== BH && KH !== SH && KH !== rH && KH !== tH && KH !== hH && KH !== zH) {
                      bH = RH;
                      do {
                        if (IH = !1, bH = qH.indexOf(")", bH + 1), -1 === bH) {
                          if (gH || eH) {
                            bH = RH;
                            break
                          }
                          FH("bracket")
                        }
                        for (fH = bH; qH.charCodeAt(fH - 1) === LH;) fH -= 1, IH = !IH
                      } while (IH);
                      cH = ["brackets", qH.slice(RH, bH + 1), RH, bH], RH = bH
                    } else bH = qH.indexOf(")", RH + 1), mH = qH.slice(RH, bH + 1), -1 === bH || TH.test(mH) ? cH = ["(", "(", RH] : (cH = ["brackets", mH, RH, bH], RH = bH);
                    break;
                  case HH:
                  case BH:
                    kH = OH === HH ? "'" : '"', bH = RH;
                    do {
                      if (IH = !1, bH = qH.indexOf(kH, bH + 1), -1 === bH) {
                        if (gH || eH) {
                          bH = RH + 1;
                          break
                        }
                        FH("string")
                      }
                      for (fH = bH; qH.charCodeAt(fH - 1) === LH;) fH -= 1, IH = !IH
                    } while (IH);
                    cH = ["string", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  case xH:
                    vH.lastIndex = RH + 1, vH.test(qH), bH = 0 === vH.lastIndex ? qH.length - 1 : vH.lastIndex - 2, cH = ["at-word", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  case LH:
                    for (bH = RH, oH = !0; qH.charCodeAt(bH + 1) === LH;) bH += 1, oH = !oH;
                    if (OH = qH.charCodeAt(bH + 1), oH && OH !== AH && OH !== SH && OH !== rH && OH !== tH && OH !== zH && OH !== hH && (bH += 1, UH.test(qH.charAt(bH)))) {
                      for (; UH.test(qH.charAt(bH + 1));) bH += 1;
                      qH.charCodeAt(bH + 1) === SH && (bH += 1)
                    }
                    cH = ["word", qH.slice(RH, bH + 1), RH, bH], RH = bH;
                    break;
                  default:
                    OH === AH && qH.charCodeAt(RH + 1) === WH ? (bH = qH.indexOf("*/", RH + 2) + 1, 0 === bH && (gH || eH ? bH = qH.length : FH("comment")), cH = ["comment", qH.slice(RH, bH + 1), RH, bH], RH = bH) : (PH.lastIndex = RH + 1, PH.test(qH), bH = 0 === PH.lastIndex ? qH.length - 1 : PH.lastIndex - 2, cH = ["word", qH.slice(RH, bH + 1), RH, bH], jH.push(cH), RH = bH)
                }
                return RH++, cH
              },
              position: function() {
                return RH
              }
            }
          }, JA
        }(),
        LH = fr(),
        AH = gr(),
        rH = Nr(),
        SH = jr();
      const hH = {
        empty: !0,
        space: !0
      };
      return hr = class {
        constructor(HH) {
          this.input = HH, this.root = new rH, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: HH,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(HH) {
          let BH, LH, rH, SH = new AH;
          SH.name = HH[1].slice(1), "" === SH.name && this.unnamedAtrule(SH, HH), this.init(SH, HH[2]);
          let hH = !1,
            tH = !1,
            zH = [],
            CH = [];
          for (; !this.tokenizer.endOfFile();) {
            if (BH = (HH = this.tokenizer.nextToken())[0], "(" === BH || "[" === BH ? CH.push("(" === BH ? ")" : "]") : "{" === BH && CH.length > 0 ? CH.push("}") : BH === CH[CH.length - 1] && CH.pop(), 0 === CH.length) {
              if (";" === BH) {
                SH.source.end = this.hT(HH[2]), SH.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === BH) {
                tH = !0;
                break
              }
              if ("}" === BH) {
                if (zH.length > 0) {
                  for (rH = zH.length - 1, LH = zH[rH]; LH && "space" === LH[0];) LH = zH[--rH];
                  LH && (SH.source.end = this.hT(LH[3] || LH[2]), SH.source.end.offset++)
                }
                this.end(HH);
                break
              }
              zH.push(HH)
            } else zH.push(HH);
            if (this.tokenizer.endOfFile()) {
              hH = !0;
              break
            }
          }
          SH.raws.between = this.spacesAndCommentsFromEnd(zH), zH.length ? (SH.raws.afterName = this.spacesAndCommentsFromStart(zH), this.raw(SH, "params", zH), hH && (HH = zH[zH.length - 1], SH.source.end = this.hT(HH[3] || HH[2]), SH.source.end.offset++, this.spaces = SH.raws.between, SH.raws.between = "")) : (SH.raws.afterName = "", SH.params = ""), tH && (SH.nodes = [], this.current = SH)
        }
        checkMissedSemicolon(HH) {
          let BH = this.colon(HH);
          if (!1 === BH) return;
          let LH, AH = 0;
          for (let rH = BH - 1; rH >= 0 && (LH = HH[rH], "space" === LH[0] || (AH += 1, 2 !== AH)); rH--);
          throw this.input.error("Missed semicolon", "word" === LH[0] ? LH[3] + 1 : LH[2])
        }
        colon(HH) {
          let BH, LH, AH, rH = 0;
          for (let [SH, hH] of HH.entries()) {
            if (BH = hH, LH = BH[0], "(" === LH && (rH += 1), ")" === LH && (rH -= 1), 0 === rH && ":" === LH) {
              if (AH) {
                if ("word" === AH[0] && "progid" === AH[1]) continue;
                return SH
              }
              this.doubleColon(BH)
            }
            AH = BH
          }
          return !1
        }
        comment(HH) {
          let BH = new LH;
          this.init(BH, HH[2]), BH.source.end = this.hT(HH[3] || HH[2]), BH.source.end.offset++;
          let AH = HH[1].slice(2, -2);
          if (/^\s*$/.test(AH)) BH.text = "", BH.raws.left = AH, BH.raws.right = "";
          else {
            let HH = AH.match(/^(\s*)([^]*\S)(\s*)$/);
            BH.text = HH[2], BH.raws.left = HH[1], BH.raws.right = HH[3]
          }
        }
        createTokenizer() {
          this.tokenizer = BH(this.input)
        }
        decl(BH, LH) {
          let AH = new HH;
          this.init(AH, BH[0][2]);
          let rH, SH = BH[BH.length - 1];
          for (";" === SH[0] && (this.semicolon = !0, BH.pop()), AH.source.end = this.hT(SH[3] || SH[2] || function(HH) {
              for (let BH = HH.length - 1; BH >= 0; BH--) {
                let LH = HH[BH],
                  AH = LH[3] || LH[2];
                if (AH) return AH
              }
            }(BH)), AH.source.end.offset++;
            "word" !== BH[0][0];) 1 === BH.length && this.unknownWord(BH), AH.raws.before += BH.shift()[1];
          for (AH.source.start = this.hT(BH[0][2]), AH.prop = ""; BH.length;) {
            let HH = BH[0][0];
            if (":" === HH || "space" === HH || "comment" === HH) break;
            AH.prop += BH.shift()[1]
          }
          for (AH.raws.between = ""; BH.length;) {
            if (rH = BH.shift(), ":" === rH[0]) {
              AH.raws.between += rH[1];
              break
            }
            "word" === rH[0] && /\w/.test(rH[1]) && this.unknownWord([rH]), AH.raws.between += rH[1]
          }
          "_" !== AH.prop[0] && "*" !== AH.prop[0] || (AH.raws.before += AH.prop[0], AH.prop = AH.prop.slice(1));
          let hH, tH = [];
          for (; BH.length && (hH = BH[0][0], "space" === hH || "comment" === hH);) tH.push(BH.shift());
          this.precheckMissedSemicolon(BH);
          for (let HH = BH.length - 1; HH >= 0; HH--) {
            if (rH = BH[HH], "!important" === rH[1].toLowerCase()) {
              AH.important = !0;
              let LH = this.stringFrom(BH, HH);
              LH = this.spacesFromEnd(BH) + LH, " !important" !== LH && (AH.raws.important = LH);
              break
            }
            if ("important" === rH[1].toLowerCase()) {
              let LH = BH.slice(0),
                rH = "";
              for (let BH = HH; BH > 0; BH--) {
                let HH = LH[BH][0];
                if (0 === rH.trim().indexOf("!") && "space" !== HH) break;
                rH = LH.pop()[1] + rH
              }
              0 === rH.trim().indexOf("!") && (AH.important = !0, AH.raws.important = rH, BH = LH)
            }
            if ("space" !== rH[0] && "comment" !== rH[0]) break
          }
          BH.some((HH => "space" !== HH[0] && "comment" !== HH[0])) && (AH.raws.between += tH.map((HH => HH[1])).join(""), tH = []), this.raw(AH, "value", tH.concat(BH), LH), AH.value.includes(":") && !LH && this.checkMissedSemicolon(BH)
        }
        doubleColon(HH) {
          throw this.input.error("Double colon", {
            offset: HH[2]
          }, {
            offset: HH[2] + HH[1].length
          })
        }
        emptyRule(HH) {
          let BH = new SH;
          this.init(BH, HH[2]), BH.selector = "", BH.raws.between = "", this.current = BH
        }
        end(HH) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hT(HH[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(HH)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hT(this.tokenizer.position())
        }
        freeSemicolon(HH) {
          if (this.spaces += HH[1], this.current.nodes) {
            let HH = this.current.nodes[this.current.nodes.length - 1];
            HH && "rule" === HH.type && !HH.raws.ownSemicolon && (HH.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        hT(HH) {
          let BH = this.input.fromOffset(HH);
          return {
            column: BH.col,
            line: BH.line,
            offset: HH
          }
        }
        init(HH, BH) {
          this.current.push(HH), HH.source = {
            input: this.input,
            start: this.hT(BH)
          }, HH.raws.before = this.spaces, this.spaces = "", "comment" !== HH.type && (this.semicolon = !1)
        }
        other(HH) {
          let BH = !1,
            LH = null,
            AH = !1,
            rH = null,
            SH = [],
            hH = HH[1].startsWith("--"),
            tH = [],
            zH = HH;
          for (; zH;) {
            if (LH = zH[0], tH.push(zH), "(" === LH || "[" === LH) rH || (rH = zH), SH.push("(" === LH ? ")" : "]");
            else if (hH && AH && "{" === LH) rH || (rH = zH), SH.push("}");
            else if (0 === SH.length) {
              if (";" === LH) {
                if (AH) return void this.decl(tH, hH);
                break
              }
              if ("{" === LH) return void this.rule(tH);
              if ("}" === LH) {
                this.tokenizer.back(tH.pop()), BH = !0;
                break
              }
              ":" === LH && (AH = !0)
            } else LH === SH[SH.length - 1] && (SH.pop(), 0 === SH.length && (rH = null));
            zH = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (BH = !0), SH.length > 0 && this.unclosedBracket(rH), BH && AH) {
            if (!hH)
              for (; tH.length && (zH = tH[tH.length - 1][0], "space" === zH || "comment" === zH);) this.tokenizer.back(tH.pop());
            this.decl(tH, hH)
          } else this.unknownWord(tH)
        }
        parse() {
          let HH;
          for (; !this.tokenizer.endOfFile();) switch (HH = this.tokenizer.nextToken(), HH[0]) {
            case "space":
              this.spaces += HH[1];
              break;
            case ";":
              this.freeSemicolon(HH);
              break;
            case "}":
              this.end(HH);
              break;
            case "comment":
              this.comment(HH);
              break;
            case "at-word":
              this.atrule(HH);
              break;
            case "{":
              this.emptyRule(HH);
              break;
            default:
              this.other(HH)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(HH, BH, LH, AH) {
          let rH, SH, tH, zH, CH = LH.length,
            EH = "",
            XH = !0;
          for (let GH = 0; GH < CH; GH += 1) rH = LH[GH], SH = rH[0], "space" !== SH || GH !== CH - 1 || AH ? "comment" === SH ? (zH = LH[GH - 1] ? LH[GH - 1][0] : "empty", tH = LH[GH + 1] ? LH[GH + 1][0] : "empty", hH[zH] || hH[tH] || "," === EH.slice(-1) ? XH = !1 : EH += rH[1]) : EH += rH[1] : XH = !1;
          if (!XH) {
            let AH = LH.reduce(((HH, BH) => HH + BH[1]), "");
            HH.raws[BH] = {
              raw: AH,
              value: EH
            }
          }
          HH[BH] = EH
        }
        rule(HH) {
          HH.pop();
          let BH = new SH;
          this.init(BH, HH[0][2]), BH.raws.between = this.spacesAndCommentsFromEnd(HH), this.raw(BH, "selector", HH), this.current = BH
        }
        spacesAndCommentsFromEnd(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH || "comment" === BH);) LH = HH.pop()[1] + LH;
          return LH
        }
        spacesAndCommentsFromStart(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[0][0], "space" === BH || "comment" === BH);) LH += HH.shift()[1];
          return LH
        }
        spacesFromEnd(HH) {
          let BH, LH = "";
          for (; HH.length && (BH = HH[HH.length - 1][0], "space" === BH);) LH = HH.pop()[1] + LH;
          return LH
        }
        stringFrom(HH, BH) {
          let LH = "";
          for (let AH = BH; AH < HH.length; AH++) LH += HH[AH][1];
          return HH.splice(BH, HH.length - BH), LH
        }
        unclosedBlock() {
          let HH = this.current.source.start;
          throw this.input.error("Unclosed block", HH.line, HH.column)
        }
        unclosedBracket(HH) {
          throw this.input.error("Unclosed bracket", {
            offset: HH[2]
          }, {
            offset: HH[2] + 1
          })
        }
        unexpectedClose(HH) {
          throw this.input.error("Unexpected }", {
            offset: HH[2]
          }, {
            offset: HH[2] + 1
          })
        }
        unknownWord(HH) {
          throw this.input.error("Unknown word", {
            offset: HH[0][2]
          }, {
            offset: HH[0][2] + HH[0][1].length
          })
        }
        unnamedAtrule(HH, BH) {
          throw this.input.error("At-rule without name", {
            offset: BH[2]
          }, {
            offset: BH[2] + BH[1].length
          })
        }
      }
    }

    function Fr() {
      if (Cr) return zr;
      Cr = 1;
      let HH = lr(),
        BH = nr(),
        LH = or();

      function AH(HH, AH) {
        let rH = new LH(HH, AH),
          SH = new BH(rH);
        try {
          SH.parse()
        } catch (hH) {
          throw hH
        }
        return SH.root
      }
      return zr = AH, AH.default = AH, HH.registerParse(AH), zr
    }

    function Dr() {
      if (Xr) return Er;
      Xr = 1;
      let {
        isClean: HH,
        my: BH
      } = Tr(), LH = Ir(), AH = Vr(), rH = lr(), SH = Kr(), hH = (cr(), qr()), tH = Fr(), zH = Nr();
      const CH = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        EH = {
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
        XH = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function GH(HH) {
        return "object" === typeof HH && "function" === typeof HH.then
      }

      function YH(HH) {
        let BH = !1,
          LH = CH[HH.type];
        return "decl" === HH.type ? BH = HH.prop.toLowerCase() : "atrule" === HH.type && (BH = HH.name.toLowerCase()), BH && HH.append ? [LH, LH + "-" + BH, 0, LH + "Exit", LH + "Exit-" + BH] : BH ? [LH, LH + "-" + BH, LH + "Exit", LH + "Exit-" + BH] : HH.append ? [LH, 0, LH + "Exit"] : [LH, LH + "Exit"]
      }

      function uH(HH) {
        let BH;
        return BH = "document" === HH.type ? ["Document", 0, "DocumentExit"] : "root" === HH.type ? ["Root", 0, "RootExit"] : YH(HH), {
          eventIndex: 0,
          events: BH,
          iterator: 0,
          node: HH,
          visitorIndex: 0,
          visitors: []
        }
      }

      function QH(BH) {
        return BH[HH] = !1, BH.nodes && BH.nodes.forEach((HH => QH(HH))), BH
      }
      let WH = {};
      class MH {
        constructor(HH, LH, AH) {
          let SH;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof LH || null === LH || "root" !== LH.type && "document" !== LH.type)
            if (LH instanceof MH || LH instanceof hH) SH = QH(LH.root), LH.map && ("undefined" === typeof AH.map && (AH.map = {}), AH.map.inline || (AH.map.inline = !1), AH.map.prev = LH.map);
            else {
              let HH = tH;
              AH.syntax && (HH = AH.syntax.parse), AH.parser && (HH = AH.parser), HH.parse && (HH = HH.parse);
              try {
                SH = HH(LH, AH)
              } catch (zH) {
                this.processed = !0, this.error = zH
              }
              SH && !SH[BH] && rH.rebuild(SH)
            }
          else SH = QH(LH);
          this.result = new hH(HH, SH, AH), this.helpers = {
            ...WH,
            postcss: WH,
            result: this.result
          }, this.plugins = this.processor.plugins.map((HH => "object" === typeof HH && HH.prepare ? {
            ...HH,
            ...HH.prepare(this.result)
          } : HH))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (HH) {
          return this.async().catch(HH)
        } finally(HH) {
          return this.async().then(HH, HH)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(HH, BH) {
          let LH = this.result.lastPlugin;
          try {
            BH && BH.addToError(HH), this.error = HH, "CssSyntaxError" !== HH.name || HH.plugin ? LH.postcssVersion : (HH.plugin = LH.postcssPlugin, HH.setMessage())
          } catch (AH) {
            console && console.error && console.error(AH)
          }
          return HH
        }
        prepareVisitors() {
          this.listeners = {};
          let HH = (HH, BH, LH) => {
            this.listeners[BH] || (this.listeners[BH] = []), this.listeners[BH].push([HH, LH])
          };
          for (let BH of this.plugins)
            if ("object" === typeof BH)
              for (let LH in BH) {
                if (!EH[LH] && /^[A-Z]/.test(LH)) throw new Error(`Unknown event ${LH} in ${BH.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!XH[LH])
                  if ("object" === typeof BH[LH])
                    for (let AH in BH[LH]) HH(BH, "*" === AH ? LH : LH + "-" + AH.toLowerCase(), BH[LH][AH]);
                  else "function" === typeof BH[LH] && HH(BH, LH, BH[LH])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let HH = 0; HH < this.plugins.length; HH++) {
            let LH = this.plugins[HH],
              AH = this.runOnRoot(LH);
            if (GH(AH)) try {
              await AH
            } catch (BH) {
              throw this.handleError(BH)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let BH = this.result.root;
            for (; !BH[HH];) {
              BH[HH] = !0;
              let AH = [uH(BH)];
              for (; AH.length > 0;) {
                let HH = this.visitTick(AH);
                if (GH(HH)) try {
                  await HH
                } catch (LH) {
                  let HH = AH[AH.length - 1].node;
                  throw this.handleError(LH, HH)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [HH, AH] of this.listeners.OnceExit) {
                this.result.lastPlugin = HH;
                try {
                  if ("document" === BH.type) {
                    let HH = BH.nodes.map((HH => AH(HH, this.helpers)));
                    await Promise.all(HH)
                  } else await AH(BH, this.helpers)
                } catch (LH) {
                  throw this.handleError(LH)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(HH) {
          this.result.lastPlugin = HH;
          try {
            if ("object" === typeof HH && HH.Once) {
              if ("document" === this.result.root.type) {
                let BH = this.result.root.nodes.map((BH => HH.Once(BH, this.helpers)));
                return GH(BH[0]) ? Promise.all(BH) : BH
              }
              return HH.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof HH) return HH(this.result.root, this.result)
          } catch (BH) {
            throw this.handleError(BH)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let HH = this.result.opts,
            BH = AH;
          HH.syntax && (BH = HH.syntax.stringify), HH.stringifier && (BH = HH.stringifier), BH.stringify && (BH = BH.stringify);
          let rH = new LH(BH, this.result.root, this.result.opts).generate();
          return this.result.css = rH[0], this.result.map = rH[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let HH of this.plugins) {
            if (GH(this.runOnRoot(HH))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let BH = this.result.root;
            for (; !BH[HH];) BH[HH] = !0, this.walkSync(BH);
            if (this.listeners.OnceExit)
              if ("document" === BH.type)
                for (let HH of BH.nodes) this.visitSync(this.listeners.OnceExit, HH);
              else this.visitSync(this.listeners.OnceExit, BH)
          }
          return this.result
        }
        then(HH, BH) {
          return this.async().then(HH, BH)
        }
        toString() {
          return this.css
        }
        visitSync(HH, BH) {
          for (let [AH, rH] of HH) {
            let HH;
            this.result.lastPlugin = AH;
            try {
              HH = rH(BH, this.helpers)
            } catch (LH) {
              throw this.handleError(LH, BH.proxyOf)
            }
            if ("root" !== BH.type && "document" !== BH.type && !BH.parent) return !0;
            if (GH(HH)) throw this.getAsyncError()
          }
        }
        visitTick(BH) {
          let LH = BH[BH.length - 1],
            {
              node: AH,
              visitors: rH
            } = LH;
          if ("root" !== AH.type && "document" !== AH.type && !AH.parent) return void BH.pop();
          if (rH.length > 0 && LH.visitorIndex < rH.length) {
            let [HH, BH] = rH[LH.visitorIndex];
            LH.visitorIndex += 1, LH.visitorIndex === rH.length && (LH.visitors = [], LH.visitorIndex = 0), this.result.lastPlugin = HH;
            try {
              return BH(AH.toProxy(), this.helpers)
            } catch (hH) {
              throw this.handleError(hH, AH)
            }
          }
          if (0 !== LH.iterator) {
            let rH, SH = LH.iterator;
            for (; rH = AH.nodes[AH.indexes[SH]];)
              if (AH.indexes[SH] += 1, !rH[HH]) return rH[HH] = !0, void BH.push(uH(rH));
            LH.iterator = 0, delete AH.indexes[SH]
          }
          let SH = LH.events;
          for (; LH.eventIndex < SH.length;) {
            let BH = SH[LH.eventIndex];
            if (LH.eventIndex += 1, 0 === BH) return void(AH.nodes && AH.nodes.length && (AH[HH] = !0, LH.iterator = AH.getIterator()));
            if (this.listeners[BH]) return void(LH.visitors = this.listeners[BH])
          }
          BH.pop()
        }
        walkSync(BH) {
          BH[HH] = !0;
          let LH = YH(BH);
          for (let AH of LH)
            if (0 === AH) BH.nodes && BH.each((BH => {
              BH[HH] || this.walkSync(BH)
            }));
            else {
              let HH = this.listeners[AH];
              if (HH && this.visitSync(HH, BH.toProxy())) return
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
      return MH.registerPostcss = HH => {
        WH = HH
      }, Er = MH, MH.default = MH, zH.registerLazyResult(MH), SH.registerLazyResult(MH), Er
    }

    function wr() {
      if (Qr) return ur;
      Qr = 1;
      let HH = function() {
          if (Yr) return Gr;
          Yr = 1;
          let HH = Ir(),
            BH = Vr(),
            LH = (cr(), Fr());
          const AH = qr();
          class rH {
            constructor(LH, rH, SH) {
              let hH;
              rH = rH.toString(), this.stringified = !1, this._processor = LH, this._css = rH, this._opts = SH, this._map = void 0;
              let tH = BH;
              this.result = new AH(this._processor, hH, this._opts), this.result.css = rH;
              let zH = this;
              Object.defineProperty(this.result, "root", {
                get: () => zH.root
              });
              let CH = new HH(tH, hH, this._opts, rH);
              if (CH.isMap()) {
                let [HH, BH] = CH.generate();
                HH && (this.result.css = HH), BH && (this.result.map = BH)
              } else CH.clearAnnotation(), this.result.css = CH.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (HH) {
              return this.async().catch(HH)
            } finally(HH) {
              return this.async().then(HH, HH)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(HH, BH) {
              return this.async().then(HH, BH)
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
              let HH, BH = LH;
              try {
                HH = BH(this._css, this._opts)
              } catch (AH) {
                this.error = AH
              }
              if (this.error) throw this.error;
              return this._root = HH, HH
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return Gr = rH, rH.default = rH, Gr
        }(),
        BH = Dr(),
        LH = Kr(),
        AH = Nr();
      class rH {
        constructor() {
          let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(HH)
        }
        normalize(HH) {
          let BH = [];
          for (let LH of HH)
            if (!0 === LH.postcss ? LH = LH() : LH.postcss && (LH = LH.postcss), "object" === typeof LH && Array.isArray(LH.plugins)) BH = BH.concat(LH.plugins);
            else if ("object" === typeof LH && LH.postcssPlugin) BH.push(LH);
          else if ("function" === typeof LH) BH.push(LH);
          else {
            if ("object" !== typeof LH || !LH.parse && !LH.stringify) throw new Error(LH + " is not a PostCSS plugin")
          }
          return BH
        }
        process(LH) {
          let AH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || AH.parser || AH.stringifier || AH.syntax ? new BH(this, LH, AH) : new HH(this, LH, AH)
        }
        use(HH) {
          return this.plugins = this.plugins.concat(this.normalize([HH])), this
        }
      }
      return ur = rH, rH.default = rH, AH.registerProcessor(rH), LH.registerProcessor(rH), ur
    }
    const Zr = EA(function() {
      if (vr) return xr;
      vr = 1;
      let HH = xA(),
        BH = br(),
        LH = Dr(),
        AH = lr(),
        rH = wr(),
        SH = Vr(),
        hH = function() {
          if (Mr) return Wr;
          Mr = 1;
          let HH = br(),
            BH = mr(),
            LH = fr(),
            AH = gr(),
            rH = or(),
            SH = Nr(),
            hH = jr();

          function tH(zH, CH) {
            if (Array.isArray(zH)) return zH.map((HH => tH(HH)));
            let {
              inputs: EH,
              ...XH
            } = zH;
            if (EH) {
              CH = [];
              for (let HH of EH) {
                let LH = {
                  ...HH,
                  __proto__: rH.prototype
                };
                LH.map && (LH.map = {
                  ...LH.map,
                  __proto__: BH.prototype
                }), CH.push(LH)
              }
            }
            if (XH.nodes && (XH.nodes = zH.nodes.map((HH => tH(HH, CH)))), XH.source) {
              let {
                inputId: HH,
                ...BH
              } = XH.source;
              XH.source = BH, null != HH && (XH.source.input = CH[HH])
            }
            if ("root" === XH.type) return new SH(XH);
            if ("decl" === XH.type) return new HH(XH);
            if ("rule" === XH.type) return new hH(XH);
            if ("comment" === XH.type) return new LH(XH);
            if ("atrule" === XH.type) return new AH(XH);
            throw new Error("Unknown node type: " + zH.type)
          }
          return Wr = tH, tH.default = tH, Wr
        }(),
        tH = Kr(),
        zH = er(),
        CH = fr(),
        EH = gr(),
        XH = qr(),
        GH = or(),
        YH = Fr(),
        uH = Rr(),
        QH = jr(),
        WH = Nr(),
        MH = Or();

      function xH() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        return 1 === BH.length && Array.isArray(BH[0]) && (BH = BH[0]), new rH(BH)
      }
      return xH.plugin = function(HH, BH) {
        let LH, AH = !1;

        function SH() {
          console && console.warn && !AH && (AH = !0, console.warn(HH + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(HH + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let LH = BH(...arguments);
          return LH.postcssPlugin = HH, LH.postcssVersion = (new rH).version, LH
        }
        return Object.defineProperty(SH, "postcss", {
          get: () => (LH || (LH = SH()), LH)
        }), SH.process = function(HH, BH, LH) {
          return xH([SH(LH)]).process(HH, BH)
        }, SH
      }, xH.stringify = SH, xH.parse = YH, xH.fromJSON = hH, xH.list = uH, xH.comment = HH => new CH(HH), xH.atRule = HH => new EH(HH), xH.decl = HH => new BH(HH), xH.rule = HH => new QH(HH), xH.root = HH => new WH(HH), xH.document = HH => new tH(HH), xH.CssSyntaxError = HH, xH.Declaration = BH, xH.JF = AH, xH.Processor = rH, xH.Document = tH, xH.Comment = CH, xH.Warning = zH, xH.AtRule = EH, xH.Result = XH, xH.Input = GH, xH.Rule = QH, xH.Root = WH, xH.Node = MH, LH.registerPostcss(xH), xr = xH, xH.default = xH, xr
    }());
    Zr.stringify, Zr.fromJSON, Zr.plugin, Zr.parse, Zr.list, Zr.document, Zr.comment, Zr.atRule, Zr.rule, Zr.decl, Zr.root, Zr.CssSyntaxError, Zr.Declaration, Zr.JF, Zr.Processor, Zr.Document, Zr.Comment, Zr.Warning, Zr.AtRule, Zr.Result, Zr.Input, Zr.Rule, Zr.Root, Zr.Node;
    var dr = (HH => (HH[HH.Document = 0] = "Document", HH[HH.DocumentType = 1] = "DocumentType", HH[HH.Element = 2] = "Element", HH[HH.Text = 3] = "Text", HH[HH.CDATA = 4] = "CDATA", HH[HH.Comment = 5] = "Comment", HH))(dr || {});

    function ar(HH) {
      const BH = [];
      for (const LH in HH) {
        const AH = HH[LH];
        if ("string" !== typeof AH) continue;
        const rH = yr(LH);
        BH.push(`${rH}: ${AH};`)
      }
      return BH.join(" ")
    }
    const sr = /-([a-z])/g,
      Jr = /^--[a-zA-Z0-9-]+$/,
      ir = HH => Jr.test(HH) ? HH : HH.replace(sr, ((HH, BH) => BH ? BH.toUpperCase() : "")),
      pr = /\B([A-Z])/g,
      yr = HH => HH.replace(pr, "-$1").toLowerCase();
    class HS {
      constructor() {
        hA(this, "parentElement", null), hA(this, "parentNode", null), hA(this, "ownerDocument"), hA(this, "firstChild", null), hA(this, "lastChild", null), hA(this, "previousSibling", null), hA(this, "nextSibling", null), hA(this, "ELEMENT_NODE", 1), hA(this, "TEXT_NODE", 3), hA(this, "nodeType"), hA(this, "nodeName"), hA(this, "RRNodeType")
      }
      get childNodes() {
        const HH = [];
        let BH = this.firstChild;
        for (; BH;) HH.push(BH), BH = BH.nextSibling;
        return HH
      }
      contains(HH) {
        if (!(HH instanceof HS)) return !1;
        if (HH.ownerDocument !== this.ownerDocument) return !1;
        if (HH === this) return !0;
        for (; HH.parentNode;) {
          if (HH.parentNode === this) return !0;
          HH = HH.parentNode
        }
        return !1
      }
      appendChild(HH) {
        throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
      }
      insertBefore(HH, BH) {
        throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
      }
      removeChild(HH) {
        throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
      }
      toString() {
        return "RRNode"
      }
    }
    class BS extends HS {
      constructor() {
        for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
        super(BH), hA(this, "nodeType", 9), hA(this, "nodeName", "#document"), hA(this, "compatMode", "CSS1Compat"), hA(this, "RRNodeType", dr.Document), hA(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((HH => HH.RRNodeType === dr.Element && "HTML" === HH.tagName)) || null
      }
      get body() {
        var HH;
        return (null == (HH = this.documentElement) ? void 0 : HH.childNodes.find((HH => HH.RRNodeType === dr.Element && "BODY" === HH.tagName))) || null
      }
      get head() {
        var HH;
        return (null == (HH = this.documentElement) ? void 0 : HH.childNodes.find((HH => HH.RRNodeType === dr.Element && "HEAD" === HH.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(HH) {
        const BH = HH.RRNodeType;
        if ((BH === dr.Element || BH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === BH))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${BH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const LH = ES(this, HH);
        return LH.parentElement = null, LH
      }
      insertBefore(HH, BH) {
        const LH = HH.RRNodeType;
        if ((LH === dr.Element || LH === dr.DocumentType) && this.childNodes.some((HH => HH.RRNodeType === LH))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${LH===dr.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const AH = XS(this, HH, BH);
        return AH.parentElement = null, AH
      }
      removeChild(HH) {
        return GS(this, HH)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(HH) {
        let BH;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === HH ? BH = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === HH && (BH = "-//W3C//DTD HTML 4.0 Transitional//EN"), BH) {
          const HH = this.createDocumentType("html", BH, "");
          this.open(), this.appendChild(HH)
        }
      }
      createDocument(HH, BH, LH) {
        return new BS
      }
      createDocumentType(HH, BH, LH) {
        const AH = new LS(HH, BH, LH);
        return AH.ownerDocument = this, AH
      }
      createElement(HH) {
        const BH = new AS(HH);
        return BH.ownerDocument = this, BH
      }
      createElementNS(HH, BH) {
        return this.createElement(BH)
      }
      createTextNode(HH) {
        const BH = new hS(HH);
        return BH.ownerDocument = this, BH
      }
      createComment(HH) {
        const BH = new tS(HH);
        return BH.ownerDocument = this, BH
      }
      createCDATASection(HH) {
        const BH = new zS(HH);
        return BH.ownerDocument = this, BH
      }
      toString() {
        return "RRDocument"
      }
    }
    class LS extends HS {
      constructor(HH, BH, LH) {
        super(), hA(this, "nodeType", 10), hA(this, "RRNodeType", dr.DocumentType), hA(this, "name"), hA(this, "publicId"), hA(this, "systemId"), hA(this, "textContent", null), this.name = HH, this.publicId = BH, this.systemId = LH, this.nodeName = HH
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class AS extends HS {
      constructor(HH) {
        super(), hA(this, "nodeType", 1), hA(this, "RRNodeType", dr.Element), hA(this, "tagName"), hA(this, "attributes", {}), hA(this, "shadowRoot", null), hA(this, "scrollLeft"), hA(this, "scrollTop"), this.tagName = HH.toUpperCase(), this.nodeName = HH.toUpperCase()
      }
      get textContent() {
        let HH = "";
        return this.childNodes.forEach((BH => HH += BH.textContent)), HH
      }
      set textContent(HH) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(HH))
      }
      get classList() {
        return new CS(this.attributes.class, (HH => {
          this.attributes.class = HH
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const HH = this.attributes.style ? function(HH) {
            const BH = {},
              LH = /:(.+)/;
            return HH.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(HH) {
              if (HH) {
                const AH = HH.split(LH);
                AH.length > 1 && (BH[ir(AH[0].trim())] = AH[1].trim())
              }
            })), BH
          }(this.attributes.style) : {},
          BH = /\B([A-Z])/g;
        return HH.setProperty = (LH, AH, rH) => {
          if (BH.test(LH)) return;
          const SH = ir(LH);
          AH ? HH[SH] = AH : delete HH[SH], "important" === rH && (HH[SH] += " !important"), this.attributes.style = ar(HH)
        }, HH.removeProperty = LH => {
          if (BH.test(LH)) return "";
          const AH = ir(LH),
            rH = HH[AH] || "";
          return delete HH[AH], this.attributes.style = ar(HH), rH
        }, HH
      }
      getAttribute(HH) {
        return void 0 === this.attributes[HH] ? null : this.attributes[HH]
      }
      setAttribute(HH, BH) {
        this.attributes[HH] = BH
      }
      setAttributeNS(HH, BH, LH) {
        this.setAttribute(BH, LH)
      }
      removeAttribute(HH) {
        delete this.attributes[HH]
      }
      appendChild(HH) {
        return ES(this, HH)
      }
      insertBefore(HH, BH) {
        return XS(this, HH, BH)
      }
      removeChild(HH) {
        return GS(this, HH)
      }
      attachShadow(HH) {
        const BH = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = BH, BH
      }
      dispatchEvent(HH) {
        return !0
      }
      toString() {
        let HH = "";
        for (const BH in this.attributes) HH += `${BH}="${this.attributes[BH]}" `;
        return `${this.tagName} ${HH}`
      }
    }
    class rS extends AS {
      constructor() {
        super(...arguments), hA(this, "currentTime"), hA(this, "volume"), hA(this, "paused"), hA(this, "muted"), hA(this, "playbackRate"), hA(this, "loop")
      }
      attachShadow(HH) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class SS extends AS {
      constructor() {
        super(...arguments), hA(this, "tagName", "DIALOG"), hA(this, "nodeName", "DIALOG")
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
    class hS extends HS {
      constructor(HH) {
        super(), hA(this, "nodeType", 3), hA(this, "nodeName", "#text"), hA(this, "RRNodeType", dr.Text), hA(this, "data"), this.data = HH
      }
      get textContent() {
        return this.data
      }
      set textContent(HH) {
        this.data = HH
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class tS extends HS {
      constructor(HH) {
        super(), hA(this, "nodeType", 8), hA(this, "nodeName", "#comment"), hA(this, "RRNodeType", dr.Comment), hA(this, "data"), this.data = HH
      }
      get textContent() {
        return this.data
      }
      set textContent(HH) {
        this.data = HH
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class zS extends HS {
      constructor(HH) {
        super(), hA(this, "nodeName", "#cdata-section"), hA(this, "nodeType", 4), hA(this, "RRNodeType", dr.CDATA), hA(this, "data"), this.data = HH
      }
      get textContent() {
        return this.data
      }
      set textContent(HH) {
        this.data = HH
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class CS {
      constructor(HH, BH) {
        var LH = this;
        if (hA(this, "onChange"), hA(this, "classes", []), hA(this, "add", (function() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            for (const rH of BH) {
              const HH = String(rH);
              LH.classes.indexOf(HH) >= 0 || LH.classes.push(HH)
            }
            LH.onChange && LH.onChange(LH.classes.join(" "))
          })), hA(this, "remove", (function() {
            for (var HH = arguments.length, BH = new Array(HH), AH = 0; AH < HH; AH++) BH[AH] = arguments[AH];
            LH.classes = LH.classes.filter((HH => -1 === BH.indexOf(HH))), LH.onChange && LH.onChange(LH.classes.join(" "))
          })), HH) {
          const BH = HH.trim().split(/\s+/);
          this.classes.push(...BH)
        }
        this.onChange = BH
      }
    }

    function ES(HH, BH) {
      return BH.parentNode && BH.parentNode.removeChild(BH), HH.lastChild ? (HH.lastChild.nextSibling = BH, BH.previousSibling = HH.lastChild) : (HH.firstChild = BH, BH.previousSibling = null), HH.lastChild = BH, BH.nextSibling = null, BH.parentNode = HH, BH.parentElement = HH, BH.ownerDocument = HH.ownerDocument, BH
    }

    function XS(HH, BH, LH) {
      if (!LH) return ES(HH, BH);
      if (LH.parentNode !== HH) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return BH === LH || (BH.parentNode && BH.parentNode.removeChild(BH), BH.previousSibling = LH.previousSibling, LH.previousSibling = BH, BH.nextSibling = LH, BH.previousSibling ? BH.previousSibling.nextSibling = BH : HH.firstChild = BH, BH.parentElement = HH, BH.parentNode = HH, BH.ownerDocument = HH.ownerDocument), BH
    }

    function GS(HH, BH) {
      if (BH.parentNode !== HH) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return BH.previousSibling ? BH.previousSibling.nextSibling = BH.nextSibling : HH.firstChild = BH.nextSibling, BH.nextSibling ? BH.nextSibling.previousSibling = BH.previousSibling : HH.lastChild = BH.previousSibling, BH.previousSibling = null, BH.nextSibling = null, BH.parentElement = null, BH.parentNode = null, BH
    }
    var YS = (HH => (HH[HH.PLACEHOLDER = 0] = "PLACEHOLDER", HH[HH.ELEMENT_NODE = 1] = "ELEMENT_NODE", HH[HH.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", HH[HH.TEXT_NODE = 3] = "TEXT_NODE", HH[HH.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", HH[HH.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", HH[HH.ENTITY_NODE = 6] = "ENTITY_NODE", HH[HH.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", HH[HH.COMMENT_NODE = 8] = "COMMENT_NODE", HH[HH.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", HH[HH.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", HH[HH.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", HH))(YS || {});
    const uS = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      QS = {
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
    let WS = null;

    function MS(HH, BH, LH) {
      let AH = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : BH.mirror || BH.ownerDocument.mirror;
      HH = function(HH, BH, LH, AH) {
          var rH;
          LH.afterAppend && !WS && (WS = new WeakSet, setTimeout((() => {
            WS = null
          }), 0));
          if (!PS(HH, BH)) {
            const SH = vS(BH, LH.mirror, AH);
            null == (rH = HH.parentNode) || rH.replaceChild(SH, HH), HH = SH
          }
          switch (BH.RRNodeType) {
            case dr.Document:
              if (!TS(HH, BH, LH.mirror, AH)) {
                const rH = AH.getMeta(BH);
                rH && (LH.mirror.removeNodeFromMap(HH), HH.close(), HH.open(), LH.mirror.add(HH, rH), null == WS || WS.add(HH))
              }
              break;
            case dr.Element: {
              const rH = HH,
                SH = BH;
              switch (SH.tagName) {
                case "IFRAME": {
                  const rH = HH.contentDocument;
                  if (!rH) break;
                  MS(rH, BH.contentDocument, LH, AH);
                  break
                }
              }
              SH.shadowRoot && (rH.shadowRoot || rH.attachShadow({
                  mode: "open"
                }), xS(rH.shadowRoot, SH.shadowRoot, LH, AH)),
                function(HH, BH, LH) {
                  const AH = HH.attributes,
                    rH = BH.attributes;
                  for (const hH in rH) {
                    const AH = rH[hH],
                      tH = LH.getMeta(BH);
                    if ((null == tH ? void 0 : tH.isSVG) && uS[hH]) HH.setAttributeNS(uS[hH], hH, AH);
                    else if ("CANVAS" === BH.tagName && "rr_dataURL" === hH) {
                      const BH = document.createElement("img");
                      BH.src = AH, BH.onload = () => {
                        const LH = HH.getContext("2d");
                        LH && LH.drawImage(BH, 0, 0, BH.width, BH.height)
                      }
                    } else {
                      if ("IFRAME" === BH.tagName && "srcdoc" === hH) continue;
                      try {
                        HH.setAttribute(hH, AH)
                      } catch (SH) {
                        console.warn(SH)
                      }
                    }
                  }
                  for (const {
                      name: hH
                    }
                    of Array.from(AH)) hH in rH || HH.removeAttribute(hH);
                  BH.scrollLeft && (HH.scrollLeft = BH.scrollLeft), BH.scrollTop && (HH.scrollTop = BH.scrollTop)
                }(rH, SH, AH);
              break
            }
          }
          return HH
        }(HH, BH, LH, AH), xS(HH, BH, LH, AH),
        function(HH, BH, LH) {
          var AH;
          switch (BH.RRNodeType) {
            case dr.Document: {
              const HH = BH.scrollData;
              HH && LH.applyScroll(HH, !0);
              break
            }
            case dr.Element: {
              const AH = HH,
                SH = BH;
              switch (SH.scrollData && LH.applyScroll(SH.scrollData, !0), SH.inputData && LH.applyInput(SH.inputData), SH.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const BH = HH,
                    LH = SH;
                  void 0 !== LH.paused && (LH.paused ? BH.pause() : BH.play()), void 0 !== LH.muted && (BH.muted = LH.muted), void 0 !== LH.volume && (BH.volume = LH.volume), void 0 !== LH.currentTime && (BH.currentTime = LH.currentTime), void 0 !== LH.playbackRate && (BH.playbackRate = LH.playbackRate), void 0 !== LH.loop && (BH.loop = LH.loop);
                  break
                }
                case "CANVAS": {
                  const rH = BH;
                  if (null !== rH.rr_dataURL) {
                    const HH = document.createElement("img");
                    HH.onload = () => {
                      const BH = AH.getContext("2d");
                      BH && BH.drawImage(HH, 0, 0, HH.width, HH.height)
                    }, HH.src = rH.rr_dataURL
                  }
                  rH.canvasMutations.forEach((BH => LH.applyCanvas(BH.event, BH.mutation, HH)));
                  break
                }
                case "STYLE": {
                  const HH = AH.sheet;
                  HH && BH.rules.forEach((BH => LH.applyStyleSheetMutation(BH, HH)));
                  break
                }
                case "DIALOG": {
                  const HH = AH,
                    BH = SH,
                    LH = HH.open,
                    hH = HH.matches("dialog:modal"),
                    tH = BH.open,
                    zH = BH.isModal,
                    CH = hH !== zH,
                    EH = LH !== tH;
                  if ((CH || LH && EH) && HH.close(), tH && (EH || CH)) try {
                    zH ? HH.showModal() : HH.show()
                  } catch (rH) {
                    console.warn(rH)
                  }
                  break
                }
              }
              break
            }
            case dr.Text:
            case dr.Comment:
            case dr.CDATA:
              HH.textContent !== BH.data && (HH.textContent = BH.data)
          }(null == WS ? void 0 : WS.has(HH)) && (WS.delete(HH), null == (AH = LH.afterAppend) || AH.call(LH, HH, LH.mirror.getId(HH)))
        }(HH, BH, LH)
    }

    function xS(HH, BH, LH, AH) {
      const rH = Array.from(HH.childNodes),
        SH = BH.childNodes;
      if (0 === rH.length && 0 === SH.length) return;
      let hH, tH, zH = 0,
        CH = rH.length - 1,
        EH = 0,
        XH = SH.length - 1,
        GH = rH[zH],
        YH = rH[CH],
        uH = SH[EH],
        QH = SH[XH];
      for (; zH <= CH && EH <= XH;)
        if (void 0 === GH) GH = rH[++zH];
        else if (void 0 === YH) YH = rH[--CH];
      else if (TS(GH, uH, LH.mirror, AH)) GH = rH[++zH], uH = SH[++EH];
      else if (TS(YH, QH, LH.mirror, AH)) YH = rH[--CH], QH = SH[--XH];
      else if (TS(GH, QH, LH.mirror, AH)) {
        try {
          HH.insertBefore(GH, YH.nextSibling)
        } catch (xH) {
          console.warn(xH)
        }
        GH = rH[++zH], QH = SH[--XH]
      } else if (TS(YH, uH, LH.mirror, AH)) {
        try {
          HH.insertBefore(YH, GH)
        } catch (xH) {
          console.warn(xH)
        }
        YH = rH[--CH], uH = SH[++EH]
      } else {
        if (!hH) {
          hH = {};
          for (let HH = zH; HH <= CH; HH++) {
            const BH = rH[HH];
            BH && LH.mirror.hasNode(BH) && (hH[LH.mirror.getId(BH)] = HH)
          }
        }
        tH = hH[AH.getId(uH)];
        const BH = rH[tH];
        if (void 0 !== tH && BH && TS(BH, uH, LH.mirror, AH)) {
          try {
            HH.insertBefore(BH, GH)
          } catch (xH) {
            console.warn(xH)
          }
          rH[tH] = void 0
        } else {
          const BH = vS(uH, LH.mirror, AH);
          "#document" === HH.nodeName && GH && (BH.nodeType === BH.DOCUMENT_TYPE_NODE && GH.nodeType === GH.DOCUMENT_TYPE_NODE || BH.nodeType === BH.ELEMENT_NODE && GH.nodeType === GH.ELEMENT_NODE) && (HH.removeChild(GH), LH.mirror.removeNodeFromMap(GH), GH = rH[++zH]);
          try {
            HH.insertBefore(BH, GH || null)
          } catch (xH) {
            console.warn(xH)
          }
        }
        uH = SH[++EH]
      }
      if (zH > CH) {
        const BH = SH[XH + 1];
        let rH = null;
        for (BH && (rH = LH.mirror.yAH(AH.getId(BH))); EH <= XH; ++EH) {
          const BH = vS(SH[EH], LH.mirror, AH);
          try {
            HH.insertBefore(BH, rH)
          } catch (xH) {
            console.warn(xH)
          }
        }
      } else if (EH > XH)
        for (; zH <= CH; zH++) {
          const BH = rH[zH];
          if (BH && BH.parentNode === HH) try {
            HH.removeChild(BH), LH.mirror.removeNodeFromMap(BH)
          } catch (xH) {
            console.warn(xH)
          }
        }
      let WH = HH.firstChild,
        MH = BH.firstChild;
      for (; null !== WH && null !== MH;) MS(WH, MH, LH, AH), WH = WH.nextSibling, MH = MH.nextSibling
    }

    function vS(HH, BH, LH) {
      const AH = LH.getId(HH),
        rH = LH.getMeta(HH);
      let SH = null;
      if (AH > -1 && (SH = BH.yAH(AH)), null !== SH && PS(SH, HH)) return SH;
      switch (HH.RRNodeType) {
        case dr.Document:
          SH = new Document;
          break;
        case dr.DocumentType:
          SH = document.implementation.createDocumentType(HH.name, HH.publicId, HH.systemId);
          break;
        case dr.Element: {
          let BH = HH.tagName.toLowerCase();
          BH = QS[BH] || BH, SH = rH && "isSVG" in rH && (null == rH ? void 0 : rH.isSVG) ? document.createElementNS(uS.svg, BH) : document.createElement(HH.tagName);
          break
        }
        case dr.Text:
          SH = document.createTextNode(HH.data);
          break;
        case dr.Comment:
          SH = document.createComment(HH.data);
          break;
        case dr.CDATA:
          SH = document.createCDATASection(HH.data)
      }
      rH && BH.add(SH, {
        ...rH
      });
      try {
        null == WS || WS.add(SH)
      } catch (hH) {}
      return SH
    }

    function PS(HH, BH) {
      return HH.nodeType === BH.nodeType && (HH.nodeType !== HH.ELEMENT_NODE || HH.tagName.toUpperCase() === BH.tagName)
    }

    function TS(HH, BH, LH, AH) {
      const rH = LH.getId(HH),
        SH = AH.getId(BH);
      return -1 !== rH && rH === SH && PS(HH, BH)
    }
    class US extends BS {
      constructor(HH) {
        super(), hA(this, "UNSERIALIZED_STARTING_ID", -2), hA(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), hA(this, "mirror", new qS), hA(this, "scrollData", null), HH && (this.mirror = HH)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(HH, BH, LH) {
        return new US
      }
      createDocumentType(HH, BH, LH) {
        const AH = new VS(HH, BH, LH);
        return AH.ownerDocument = this, AH
      }
      createElement(HH) {
        const BH = HH.toUpperCase();
        let LH;
        switch (BH) {
          case "AUDIO":
          case "VIDEO":
            LH = new bS(BH);
            break;
          case "IFRAME":
            LH = new IS(BH, this.mirror);
            break;
          case "CANVAS":
            LH = new mS(BH);
            break;
          case "STYLE":
            LH = new oS(BH);
            break;
          case "DIALOG":
            LH = new kS(BH);
            break;
          default:
            LH = new OS(BH)
        }
        return LH.ownerDocument = this, LH
      }
      createComment(HH) {
        const BH = new lS(HH);
        return BH.ownerDocument = this, BH
      }
      createCDATASection(HH) {
        const BH = new KS(HH);
        return BH.ownerDocument = this, BH
      }
      createTextNode(HH) {
        const BH = new fS(HH);
        return BH.ownerDocument = this, BH
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const VS = LS;
    class OS extends AS {
      constructor() {
        super(...arguments), hA(this, "inputData", null), hA(this, "scrollData", null)
      }
    }
    class bS extends rS {}
    class kS extends SS {}
    class mS extends OS {
      constructor() {
        super(...arguments), hA(this, "rr_dataURL", null), hA(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class oS extends OS {
      constructor() {
        super(...arguments), hA(this, "rules", [])
      }
    }
    class IS extends OS {
      constructor(HH, BH) {
        super(HH), hA(this, "contentDocument", new US), this.contentDocument.mirror = BH
      }
    }
    const fS = hS,
      lS = tS,
      KS = zS;

    function cS(HH, BH, LH, AH) {
      let rH;
      switch (HH.nodeType) {
        case YS.DOCUMENT_NODE:
          AH && "IFRAME" === AH.nodeName ? rH = AH.contentDocument : (rH = BH, rH.compatMode = HH.compatMode);
          break;
        case YS.DOCUMENT_TYPE_NODE: {
          const LH = HH;
          rH = BH.createDocumentType(LH.name, LH.publicId, LH.systemId);
          break
        }
        case YS.ELEMENT_NODE: {
          const LH = HH,
            AH = (SH = LH) instanceof HTMLFormElement ? "FORM" : SH.tagName.toUpperCase();
          rH = BH.createElement(AH);
          const hH = rH;
          for (const {
              name: HH,
              value: BH
            }
            of Array.from(LH.attributes)) hH.attributes[HH] = BH;
          LH.scrollLeft && (hH.scrollLeft = LH.scrollLeft), LH.scrollTop && (hH.scrollTop = LH.scrollTop);
          break
        }
        case YS.TEXT_NODE:
          rH = BH.createTextNode(HH.textContent || "");
          break;
        case YS.CDATA_SECTION_NODE:
          rH = BH.createCDATASection(HH.data);
          break;
        case YS.COMMENT_NODE:
          rH = BH.createComment(HH.textContent || "");
          break;
        case YS.DOCUMENT_FRAGMENT_NODE:
          rH = AH.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var SH;
      let hH = LH.getMeta(HH);
      return BH instanceof US && (hH || (hH = gS(rH, BH.unserializedId), LH.add(HH, hH)), BH.mirror.add(rH, {
        ...hH
      })), rH
    }

    function eS(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new CA,
        LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new US;
      return function HH(AH, rH) {
        const SH = cS(AH, LH, BH, rH);
        if (null !== SH)
          if ("IFRAME" !== (null == rH ? void 0 : rH.nodeName) && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE && (null == rH || rH.appendChild(SH), SH.parentNode = rH, SH.parentElement = rH), "IFRAME" === AH.nodeName) {
            const BH = AH.contentDocument;
            BH && HH(BH, SH)
          } else AH.nodeType !== YS.DOCUMENT_NODE && AH.nodeType !== YS.ELEMENT_NODE && AH.nodeType !== YS.DOCUMENT_FRAGMENT_NODE || (AH.nodeType === YS.ELEMENT_NODE && AH.shadowRoot && HH(AH.shadowRoot, SH), AH.childNodes.forEach((BH => HH(BH, SH))))
      }(HH, null), LH
    }
    class qS {
      constructor() {
        hA(this, "idNodeMap", new Map), hA(this, "nodeMetaMap", new WeakMap)
      }
      getId(HH) {
        var BH;
        if (!HH) return -1;
        return (null == (BH = this.getMeta(HH)) ? void 0 : BH.id) ?? -1
      }
      yAH(HH) {
        return this.idNodeMap.get(HH) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(HH) {
        return this.nodeMetaMap.get(HH) || null
      }
      removeNodeFromMap(HH) {
        const BH = this.getId(HH);
        this.idNodeMap.delete(BH), HH.childNodes && HH.childNodes.forEach((HH => this.removeNodeFromMap(HH)))
      }
      has(HH) {
        return this.idNodeMap.has(HH)
      }
      hasNode(HH) {
        return this.nodeMetaMap.has(HH)
      }
      add(HH, BH) {
        const LH = BH.id;
        this.idNodeMap.set(LH, HH), this.nodeMetaMap.set(HH, BH)
      }
      replace(HH, BH) {
        const LH = this.yAH(HH);
        if (LH) {
          const HH = this.nodeMetaMap.get(LH);
          HH && this.nodeMetaMap.set(BH, HH)
        }
        this.idNodeMap.set(HH, BH)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function gS(HH, BH) {
      switch (HH.RRNodeType) {
        case dr.Document:
          return {
            id: BH, type: HH.RRNodeType, childNodes: []
          };
        case dr.DocumentType: {
          const LH = HH;
          return {
            id: BH,
            type: HH.RRNodeType,
            name: LH.name,
            publicId: LH.publicId,
            systemId: LH.systemId
          }
        }
        case dr.Element:
          return {
            id: BH, type: HH.RRNodeType, tagName: HH.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case dr.Text:
        case dr.Comment:
          return {
            id: BH, type: HH.RRNodeType, textContent: HH.textContent || ""
          };
        case dr.CDATA:
          return {
            id: BH, type: HH.RRNodeType, textContent: ""
          }
      }
    }
    const NS = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      RS = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      jS = {},
      nS = {};

    function FS(HH) {
      if (jS[HH]) return jS[HH];
      const BH = globalThis[HH],
        LH = BH.prototype,
        AH = HH in NS ? NS[HH] : void 0,
        rH = Boolean(AH && AH.every((HH => {
          var BH, AH;
          return Boolean(null == (AH = null == (BH = Object.getOwnPropertyDescriptor(LH, HH)) ? void 0 : BH.get) ? void 0 : AH.toString().includes("[native code]"))
        }))),
        SH = HH in RS ? RS[HH] : void 0,
        hH = Boolean(SH && SH.every((HH => {
          var BH;
          return "function" === typeof LH[HH] && (null == (BH = LH[HH]) ? void 0 : BH.toString().includes("[native code]"))
        })));
      if (rH && hH && !globalThis.Zone) return jS[HH] = BH.prototype, BH.prototype;
      try {
        const AH = document.createElement("iframe");
        AH.style.display = "none", document.body.appendChild(AH);
        const rH = AH.contentWindow;
        if (!rH) return BH.prototype;
        const SH = rH[HH].prototype;
        if (!SH) return AH.remove(), LH;
        const hH = navigator.userAgent;
        return hH.includes("Safari") && !hH.includes("Chrome") ? (AH.classList.add("rr-block"), AH.setAttribute("__rrwebUntaintedMutationObserver", ""), nS[HH] = () => AH.remove()) : AH.remove(), jS[HH] = SH
      } catch {
        return LH
      }
    }
    const DS = {};

    function wS(HH, BH, LH) {
      var AH, rH;
      const SH = null == (AH = DS[HH]) ? void 0 : AH[LH];
      if (SH) return SH.call(BH);
      const hH = FS(HH),
        tH = null == (rH = Object.getOwnPropertyDescriptor(hH, LH)) ? void 0 : rH.get;
      return tH ? ((DS[HH] || (DS[HH] = {}))[LH] = tH, tH.call(BH)) : BH[LH]
    }
    const ZS = {};

    function dS(HH, BH, LH) {
      const AH = `${HH}.${String(LH)}`;
      if (ZS[AH]) return ZS[AH].bind(BH);
      const rH = FS(HH)[LH];
      return "function" !== typeof rH ? BH[LH] : (ZS[AH] = rH, rH.bind(BH))
    }

    function aS() {
      return [FS("MutationObserver").constructor, nS.MutationObserver ?? (() => {})]
    }
    let sS = Date.now;

    function JS(HH, BH, LH) {
      try {
        if (!(BH in HH)) return () => {};
        const AH = HH[BH],
          rH = LH(AH);
        return "function" === typeof rH && (rH.prototype = rH.prototype || {}, Object.defineProperties(rH, {
          __rrweb_original__: {
            enumerable: !1,
            value: AH
          }
        })), HH[BH] = rH, () => {
          HH[BH] = AH
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (sS = () => (new Date).getTime());
    const iS = {
      ownerDocument: function(HH) {
        return wS("Node", HH, "ownerDocument")
      },
      childNodes: function(HH) {
        return wS("Node", HH, "childNodes")
      },
      parentNode: function(HH) {
        return wS("Node", HH, "parentNode")
      },
      parentElement: function(HH) {
        return wS("Node", HH, "parentElement")
      },
      textContent: function(HH) {
        return wS("Node", HH, "textContent")
      },
      firstChild: function(HH) {
        return wS("Node", HH, "firstChild")
      },
      lastChild: function(HH) {
        return wS("Node", HH, "lastChild")
      },
      nextSibling: function(HH) {
        return wS("Node", HH, "nextSibling")
      },
      previousSibling: function(HH) {
        return wS("Node", HH, "previousSibling")
      },
      contains: function(HH, BH) {
        return dS("Node", HH, "contains")(BH)
      },
      getRootNode: function(HH) {
        return dS("Node", HH, "getRootNode")()
      },
      host: function(HH) {
        return HH && "host" in HH ? wS("ShadowRoot", HH, "host") : null
      },
      styleSheets: function(HH) {
        return HH.styleSheets
      },
      shadowRoot: function(HH) {
        return HH && "shadowRoot" in HH ? wS("Element", HH, "shadowRoot") : null
      },
      querySelector: function(HH, BH) {
        return wS("Element", HH, "querySelector")(BH)
      },
      querySelectorAll: function(HH, BH) {
        return wS("Element", HH, "querySelectorAll")(BH)
      },
      nowTimestamp: sS,
      mutationObserverCtor: aS,
      patch: JS
    };

    function pS(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const AH = {
        capture: !0,
        passive: !0
      };
      return LH.addEventListener(HH, BH, AH), () => LH.removeEventListener(HH, BH, AH)
    }
    const yS = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let Hh = {
      map: {},
      getId: () => (console.error(yS), -1),
      yAH: () => (console.error(yS), null),
      removeNodeFromMap() {
        console.error(yS)
      },
      has: () => (console.error(yS), !1),
      reset() {
        console.error(yS)
      }
    };

    function Bh(HH, BH) {
      let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        AH = null,
        rH = 0;
      return function() {
        for (var SH = arguments.length, hH = new Array(SH), tH = 0; tH < SH; tH++) hH[tH] = arguments[tH];
        const zH = Date.now();
        rH || !1 !== LH.leading || (rH = zH);
        const CH = BH - (zH - rH),
          EH = this;
        CH <= 0 || CH > BH ? (AH && (clearTimeout(AH), AH = null), rH = zH, HH.apply(EH, hH)) : AH || !1 === LH.trailing || (AH = setTimeout((() => {
          rH = !1 === LH.leading ? 0 : Date.now(), AH = null, HH.apply(EH, hH)
        }), CH))
      }
    }

    function Lh(HH, BH, LH, AH) {
      let rH = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const SH = rH.Object.getOwnPropertyDescriptor(HH, BH);
      return rH.Object.defineProperty(HH, BH, AH ? LH : {
        set(HH) {
          setTimeout((() => {
            LH.set.call(this, HH)
          }), 0), SH && SH.set && SH.set.call(this, HH)
        }
      }), () => Lh(HH, BH, SH || {}, !0)
    }

    function Ah(HH) {
      var BH, LH, AH, rH;
      const SH = HH.document;
      return {
        left: SH.scrollingElement ? SH.scrollingElement.scrollLeft : void 0 !== HH.pageXOffset ? HH.pageXOffset : SH.documentElement.scrollLeft || (null == SH ? void 0 : SH.body) && (null == (BH = iS.parentElement(SH.body)) ? void 0 : BH.scrollLeft) || (null == (LH = null == SH ? void 0 : SH.body) ? void 0 : LH.scrollLeft) || 0,
        top: SH.scrollingElement ? SH.scrollingElement.scrollTop : void 0 !== HH.pageYOffset ? HH.pageYOffset : (null == SH ? void 0 : SH.documentElement.scrollTop) || (null == SH ? void 0 : SH.body) && (null == (AH = iS.parentElement(SH.body)) ? void 0 : AH.scrollTop) || (null == (rH = null == SH ? void 0 : SH.body) ? void 0 : rH.scrollTop) || 0
      }
    }

    function rh() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function Sh() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function hh(HH) {
      if (!HH) return null;
      return HH.nodeType === HH.ELEMENT_NODE ? HH : iS.parentElement(HH)
    }

    function th(HH, BH, LH, AH) {
      if (!HH) return !1;
      const rH = hh(HH);
      if (!rH) return !1;
      try {
        if ("string" === typeof BH) {
          if (rH.classList.contains(BH)) return !0;
          if (AH && null !== rH.closest("." + BH)) return !0
        } else if (AB(rH, BH, AH)) return !0
      } catch (SH) {}
      if (LH) {
        if (rH.matches(LH)) return !0;
        if (AH && null !== rH.closest(LH)) return !0
      }
      return !1
    }

    function zh(HH, BH) {
      return -1 !== BH.getId(HH)
    }

    function Ch(HH, BH, LH) {
      return !("TITLE" !== HH.tagName || !LH.headTitleMutations) || -2 === BH.getId(HH)
    }

    function Eh(HH, BH) {
      if (TH(HH)) return !1;
      const LH = BH.getId(HH);
      if (!BH.has(LH)) return !0;
      const AH = iS.parentNode(HH);
      return (!AH || AH.nodeType !== HH.DOCUMENT_NODE) && (!AH || Eh(AH, BH))
    }

    function Xh(HH) {
      return Boolean(HH.changedTouches)
    }

    function Gh() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in HH && !HH.NodeList.prototype.forEach && (HH.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in HH && !HH.DOMTokenList.prototype.forEach && (HH.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function Yh(HH) {
      const BH = {},
        LH = (HH, LH) => {
          const AH = {
            value: HH,
            parent: LH,
            children: []
          };
          return BH[HH.node.id] = AH, AH
        },
        AH = [];
      for (const rH of HH) {
        const {
          nextId: HH,
          parentId: SH
        } = rH;
        if (HH && HH in BH) {
          const SH = BH[HH];
          if (SH.parent) {
            const HH = SH.parent.children.indexOf(SH);
            SH.parent.children.splice(HH, 0, LH(rH, SH.parent))
          } else {
            const HH = AH.indexOf(SH);
            AH.splice(HH, 0, LH(rH, null))
          }
        } else if (SH in BH) {
          const HH = BH[SH];
          HH.children.push(LH(rH, HH))
        } else AH.push(LH(rH, null))
      }
      return AH
    }

    function uh(HH, BH) {
      BH(HH.value);
      for (let LH = HH.children.length - 1; LH >= 0; LH--) uh(HH.children[LH], BH)
    }

    function Qh(HH, BH) {
      return Boolean("IFRAME" === HH.nodeName && BH.getMeta(HH))
    }

    function Wh(HH, BH) {
      return Boolean("LINK" === HH.nodeName && HH.nodeType === HH.ELEMENT_NODE && HH.getAttribute && "stylesheet" === HH.getAttribute("rel") && BH.getMeta(HH))
    }

    function Mh(HH, BH) {
      var LH, AH;
      const rH = null == (AH = null == (LH = HH.ownerDocument) ? void 0 : LH.defaultView) ? void 0 : AH.frameElement;
      if (!rH || rH === BH) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const SH = rH.getBoundingClientRect(),
        hH = Mh(rH, BH),
        tH = SH.height / rH.clientHeight;
      return {
        x: SH.x * hH.relativeScale + hH.x,
        y: SH.y * hH.relativeScale + hH.y,
        relativeScale: tH,
        absoluteScale: hH.absoluteScale * tH
      }
    }

    function xh(HH) {
      return !!HH && (HH instanceof HS && "shadowRoot" in HH ? Boolean(HH.shadowRoot) : Boolean(iS.shadowRoot(HH)))
    }

    function vh(HH, BH) {
      const LH = null == HH ? void 0 : HH[BH[0]];
      return LH ? 1 === BH.length ? LH : vh(LH.cssRules, BH.slice(1)) : null
    }

    function Ph(HH) {
      const BH = [...HH],
        LH = BH.pop();
      return {
        positions: BH,
        index: LH
      }
    }

    function Th(HH) {
      const BH = new Set,
        LH = [];
      for (let AH = HH.length; AH--;) {
        const rH = HH[AH];
        BH.has(rH.id) || (LH.push(rH), BH.add(rH.id))
      }
      return LH
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (Hh = new Proxy(Hh, {
      get: (HH, BH, LH) => ("map" === BH && console.error(yS), Reflect.get(HH, BH, LH))
    }));
    class Uh {
      constructor() {
        SH(this, "id", 1), SH(this, "styleIDMap", new WeakMap), SH(this, "idStyleMap", new Map)
      }
      getId(HH) {
        return this.styleIDMap.get(HH) ?? -1
      }
      has(HH) {
        return this.styleIDMap.has(HH)
      }
      add(HH, BH) {
        if (this.has(HH)) return this.getId(HH);
        let LH;
        return LH = void 0 === BH ? this.id++ : BH, this.styleIDMap.set(HH, LH), this.idStyleMap.set(LH, HH), LH
      }
      getStyle(HH) {
        return this.idStyleMap.get(HH) || null
      }
      reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
      }
      generateId() {
        return this.id++
      }
    }

    function Vh(HH) {
      var BH;
      let LH = null;
      return "getRootNode" in HH && (null == (BH = iS.getRootNode(HH)) ? void 0 : BH.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && iS.host(iS.getRootNode(HH)) && (LH = iS.host(iS.getRootNode(HH))), LH
    }

    function Oh(HH) {
      let BH, LH = HH;
      for (; BH = Vh(LH);) LH = BH;
      return LH
    }

    function bh(HH) {
      const BH = iS.ownerDocument(HH);
      if (!BH) return !1;
      const LH = Oh(HH);
      return iS.contains(BH, LH)
    }

    function kh(HH) {
      const BH = iS.ownerDocument(HH);
      return !!BH && (iS.contains(BH, HH) || bh(HH))
    }
    Symbol.toStringTag;
    var mh = (HH => (HH[HH.DomContentLoaded = 0] = "DomContentLoaded", HH[HH.Load = 1] = "Load", HH[HH.FullSnapshot = 2] = "FullSnapshot", HH[HH.IncrementalSnapshot = 3] = "IncrementalSnapshot", HH[HH.Meta = 4] = "Meta", HH[HH.Custom = 5] = "Custom", HH[HH.Plugin = 6] = "Plugin", HH[HH.Asset = 7] = "Asset", HH))(mh || {}),
      oh = (HH => (HH[HH.Mutation = 0] = "Mutation", HH[HH.MouseMove = 1] = "MouseMove", HH[HH.MouseInteraction = 2] = "MouseInteraction", HH[HH.Scroll = 3] = "Scroll", HH[HH.ViewportResize = 4] = "ViewportResize", HH[HH.Input = 5] = "Input", HH[HH.TouchMove = 6] = "TouchMove", HH[HH.MediaInteraction = 7] = "MediaInteraction", HH[HH.StyleSheetRule = 8] = "StyleSheetRule", HH[HH.CanvasMutation = 9] = "CanvasMutation", HH[HH.Font = 10] = "Font", HH[HH.Log = 11] = "Log", HH[HH.Drag = 12] = "Drag", HH[HH.StyleDeclaration = 13] = "StyleDeclaration", HH[HH.Selection = 14] = "Selection", HH[HH.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", HH[HH.CustomElement = 16] = "CustomElement", HH))(oh || {}),
      Ih = (HH => (HH[HH.MouseUp = 0] = "MouseUp", HH[HH.MouseDown = 1] = "MouseDown", HH[HH.Click = 2] = "Click", HH[HH.ContextMenu = 3] = "ContextMenu", HH[HH.DblClick = 4] = "DblClick", HH[HH.Focus = 5] = "Focus", HH[HH.Blur = 6] = "Blur", HH[HH.TouchStart = 7] = "TouchStart", HH[HH.TouchMove_Departed = 8] = "TouchMove_Departed", HH[HH.TouchEnd = 9] = "TouchEnd", HH[HH.TouchCancel = 10] = "TouchCancel", HH))(Ih || {}),
      fh = (HH => (HH[HH.Mouse = 0] = "Mouse", HH[HH.Pen = 1] = "Pen", HH[HH.Touch = 2] = "Touch", HH))(fh || {}),
      lh = (HH => (HH[HH["2D"] = 0] = "2D", HH[HH.WebGL = 1] = "WebGL", HH[HH.WebGL2 = 2] = "WebGL2", HH))(lh || {}),
      Kh = (HH => (HH[HH.Play = 0] = "Play", HH[HH.Pause = 1] = "Pause", HH[HH.Seeked = 2] = "Seeked", HH[HH.VolumeChange = 3] = "VolumeChange", HH[HH.RateChange = 4] = "RateChange", HH))(Kh || {}),
      ch = (HH => (HH.Start = "start", HH.Pause = "pause", HH.Resume = "resume", HH.Resize = "resize", HH.Finish = "finish", HH.FullsnapshotRebuilded = "fullsnapshot-rebuilded", HH.LoadStylesheetStart = "load-stylesheet-start", HH.LoadStylesheetEnd = "load-stylesheet-end", HH.SkipStart = "skip-start", HH.SkipEnd = "skip-end", HH.MouseInteraction = "mouse-interaction", HH.EventCast = "event-cast", HH.CustomEvent = "custom-event", HH.Flush = "flush", HH.StateChange = "state-change", HH.PlayBack = "play-back", HH.Destroy = "destroy", HH))(ch || {}),
      eh = (HH => (HH[HH.Document = 0] = "Document", HH[HH.DocumentType = 1] = "DocumentType", HH[HH.Element = 2] = "Element", HH[HH.Text = 3] = "Text", HH[HH.CDATA = 4] = "CDATA", HH[HH.Comment = 5] = "Comment", HH))(eh || {});
    const qh = (HH, BH) => `${HH}@${BH}`;
    class gh {
      constructor() {
        SH(this, "frozen", !1), SH(this, "locked", !1), SH(this, "texts", []), SH(this, "attributes", []), SH(this, "attributeMap", new WeakMap), SH(this, "removes", []), SH(this, "mapRemoves", []), SH(this, "movedMap", {}), SH(this, "addedSet", new Set), SH(this, "movedSet", new Set), SH(this, "droppedSet", new Set), SH(this, "removesSubTreeCache", new Set), SH(this, "mutationCb"), SH(this, "blockClass"), SH(this, "blockSelector"), SH(this, "maskTextClass"), SH(this, "maskTextSelector"), SH(this, "inlineStylesheet"), SH(this, "maskInputOptions"), SH(this, "maskTextFn"), SH(this, "maskInputFn"), SH(this, "keepIframeSrcFn"), SH(this, "recordCanvas"), SH(this, "inlineImages"), SH(this, "slimDOMOptions"), SH(this, "dataURLOptions"), SH(this, "doc"), SH(this, "mirror"), SH(this, "iframeManager"), SH(this, "stylesheetManager"), SH(this, "shadowDomManager"), SH(this, "canvasManager"), SH(this, "processedNodeManager"), SH(this, "unattachedDoc"), SH(this, "processMutations", (HH => {
          HH.forEach(this.processMutation), this.emit()
        })), SH(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const HH = [],
            BH = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const XH of this.movedSet) {
            const HH = iS.parentNode(XH);
            this.removesSubTreeCache.has(HH) && !this.movedSet.has(HH) || this.addedSet.add(XH)
          }
          let LH = null,
            AH = null,
            rH = -1,
            SH = null,
            hH = !1;
          const tH = new Set,
            zH = this.addedSet.values();
          let CH = zH.next();
          for (; this.addedSet.size;) {
            if (null !== LH && this.addedSet.has(iS.previousSibling(LH))) SH = LH, LH = iS.previousSibling(LH);
            else {
              for (this.addedSet.has(CH.value) || (CH = zH.next()), LH = CH.value; AH = iS.parentNode(LH), this.addedSet.has(AH);) LH = AH;
              if (tH.has(AH)) AH = null;
              else if (AH) {
                if (kh(AH) ? (hH = Rh(this.droppedSet, AH) || this.removesSubTreeCache.has(AH), hH && Rh(this.movedSet, LH) && (hH = !1)) : hH = !0, this.addedSet.has(iS.lastChild(AH))) LH = iS.lastChild(AH), SH = null;
                else
                  for (; SH = iS.nextSibling(LH), this.addedSet.has(SH);) LH = SH;
                if (rH = TH(AH) ? this.mirror.getId(Vh(LH)) : this.mirror.getId(AH), -1 === rH && AH.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const HH = iS.host(AH);
                  rH = this.mirror.getId(HH)
                }
              }
            }
            if (this.addedSet.delete(LH), !AH || -1 === rH) {
              tH.add(LH);
              continue
            }
            if (hH) {
              this.droppedSet.add(LH);
              continue
            }
            let EH = !1;
            if (LH.nodeType === Node.TEXT_NODE) {
              const HH = AH.tagName;
              if ("TEXTAREA" === HH) continue;
              "STYLE" === HH && BH.has(rH) && (EH = !0)
            }
            let XH = SH ? this.mirror.getId(SH) : null;
            for (; - 2 === XH;) SH = SH && iS.nextSibling(SH), XH = SH && this.mirror.getId(SH);
            if (-1 === XH) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", SH), LH = null;
              continue
            }
            const GH = zB(LH, {
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
              onSerialize: HH => {
                Qh(HH, this.mirror) && this.iframeManager.addIframe(HH), Wh(HH, this.mirror) && this.stylesheetManager.trackLinkElement(HH), xh(LH) && this.shadowDomManager.addShadowRoot(iS.shadowRoot(LH), this.doc)
              },
              onIframeLoad: (HH, BH) => {
                this.iframeManager.attachIframe(HH, BH), this.shadowDomManager.observeAttachShadow(HH)
              },
              onStylesheetLoad: (HH, BH) => {
                this.stylesheetManager.attachLinkElement(HH, BH)
              },
              cssCaptured: EH
            });
            GH && (HH.push({
              parentId: rH,
              nextId: XH,
              node: GH
            }), BH.add(GH.id))
          }
          const EH = {
            texts: this.texts.map((HH => {
              const BH = HH.node,
                LH = iS.parentNode(BH);
              return LH && "TEXTAREA" === LH.tagName && this.genTextAreaValueMutation(LH), {
                id: this.mirror.getId(BH),
                value: HH.value
              }
            })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
            attributes: this.attributes.map((HH => {
              const {
                attributes: BH
              } = HH;
              if ("string" === typeof BH.style) {
                const LH = JSON.stringify(HH.styleDiff),
                  AH = JSON.stringify(HH._unchangedStyles);
                LH.length < BH.style.length && (LH + AH).split("var(").length === BH.style.split("var(").length && (BH.style = HH.styleDiff)
              }
              return {
                id: this.mirror.getId(HH.node),
                attributes: BH
              }
            })).filter((HH => !BH.has(HH.id))).filter((HH => this.mirror.has(HH.id))),
            removes: this.removes,
            adds: HH
          };
          (EH.texts.length || EH.attributes.length || EH.removes.length || EH.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(EH))
        })), SH(this, "genTextAreaValueMutation", (HH => {
          let BH = this.attributeMap.get(HH);
          BH || (BH = {
            node: HH,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(BH), this.attributeMap.set(HH, BH));
          const LH = Array.from(iS.childNodes(HH), (HH => iS.textContent(HH) || "")).join("");
          BH.attributes.value = mH({
            element: HH,
            maskInputOptions: this.maskInputOptions,
            tagName: HH.tagName,
            type: fH(HH),
            value: LH,
            maskInputFn: this.maskInputFn
          })
        })), SH(this, "processMutation", (HH => {
          if (!Ch(HH.target, this.mirror, this.slimDOMOptions)) switch (HH.type) {
            case "characterData": {
              const BH = iS.textContent(HH.target);
              th(HH.target, this.blockClass, this.blockSelector, !1) || BH === HH.oldValue || this.texts.push({
                value: rB(HH.target, this.maskTextClass, this.maskTextSelector, !0) && BH ? this.maskTextFn ? this.maskTextFn(BH, hh(HH.target)) : BH.replace(/[\S]/g, "*") : BH,
                node: HH.target
              });
              break
            }
            case "attributes": {
              const LH = HH.target,
                AH = oH(LH.tagName);
              let rH = HH.attributeName,
                SH = HH.target.getAttribute(rH);
              if ("value" === rH) {
                const HH = fH(LH);
                SH = mH({
                  element: LH,
                  maskInputOptions: this.maskInputOptions,
                  tagName: LH.tagName,
                  type: HH,
                  value: SH,
                  maskInputFn: this.maskInputFn
                })
              }
              if (th(HH.target, this.blockClass, this.blockSelector, !1) || SH === HH.oldValue) return;
              let hH = this.attributeMap.get(HH.target);
              if ("iframe" === AH && "src" === rH && !this.keepIframeSrcFn(SH)) {
                if (LH.contentDocument) return;
                rH = "rr_src"
              }
              if (hH || (hH = {
                  node: HH.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(hH), this.attributeMap.set(HH.target, hH)), "type" === rH && "input" === AH && "password" === (HH.oldValue || "").toLowerCase() && LH.setAttribute("data-rr-is-password", "true"), !LB(AH, rH))
                if (hH.attributes[rH] = BB(this.doc, AH, oH(rH), SH), "style" === rH) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (BH) {
                    this.unattachedDoc = this.doc
                  }
                  const AH = this.unattachedDoc.createElement("span");
                  HH.oldValue && AH.setAttribute("style", HH.oldValue);
                  for (const HH of Array.from(LH.style)) {
                    const BH = LH.style.getPropertyValue(HH),
                      rH = LH.style.getPropertyPriority(HH);
                    BH !== AH.style.getPropertyValue(HH) || rH !== AH.style.getPropertyPriority(HH) ? hH.styleDiff[HH] = "" === rH ? BH : [BH, rH] : hH._unchangedStyles[HH] = [BH, rH]
                  }
                  for (const HH of Array.from(AH.style)) "" === LH.style.getPropertyValue(HH) && (hH.styleDiff[HH] = !1)
                } else "open" === rH && "DIALOG" === LH.tagName && (LH.matches("dialog:modal") ? hH.attributes.rr_open_mode = "modal" : hH.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (th(HH.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === HH.target.tagName) return void this.genTextAreaValueMutation(HH.target);
              HH.addedNodes.forEach((BH => this.genAdds(BH, HH.target))), HH.removedNodes.forEach((BH => {
                const LH = this.mirror.getId(BH),
                  AH = TH(HH.target) ? this.mirror.getId(iS.host(HH.target)) : this.mirror.getId(HH.target);
                th(HH.target, this.blockClass, this.blockSelector, !1) || Ch(BH, this.mirror, this.slimDOMOptions) || !zh(BH, this.mirror) || (this.addedSet.has(BH) ? (Nh(this.addedSet, BH), this.droppedSet.add(BH)) : this.addedSet.has(HH.target) && -1 === LH || Eh(HH.target, this.mirror) || (this.movedSet.has(BH) && this.movedMap[qh(LH, AH)] ? Nh(this.movedSet, BH) : (this.removes.push({
                  parentId: AH,
                  id: LH,
                  isShadow: !(!TH(HH.target) || !UH(HH.target)) || void 0
                }), function(HH, BH) {
                  const LH = [HH];
                  for (; LH.length;) {
                    const HH = LH.pop();
                    BH.has(HH) || (BH.add(HH), iS.childNodes(HH).forEach((HH => LH.push(HH))))
                  }
                }(BH, this.removesSubTreeCache))), this.mapRemoves.push(BH))
              }))
          }
        })), SH(this, "genAdds", ((HH, BH) => {
          if (!this.processedNodeManager.inOtherBuffer(HH, this) && !this.addedSet.has(HH) && !this.movedSet.has(HH)) {
            if (this.mirror.hasNode(HH)) {
              if (Ch(HH, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(HH);
              let LH = null;
              BH && this.mirror.hasNode(BH) && (LH = this.mirror.getId(BH)), LH && -1 !== LH && (this.movedMap[qh(this.mirror.getId(HH), LH)] = !0)
            } else this.addedSet.add(HH), this.droppedSet.delete(HH);
            th(HH, this.blockClass, this.blockSelector, !1) || (iS.childNodes(HH).forEach((HH => this.genAdds(HH))), xh(HH) && iS.childNodes(iS.shadowRoot(HH)).forEach((BH => {
              this.processedNodeManager.add(BH, this), this.genAdds(BH, HH)
            })))
          }
        }))
      }
      init(HH) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((BH => {
          this[BH] = HH[BH]
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

    function Nh(HH, BH) {
      HH.delete(BH), iS.childNodes(BH).forEach((BH => Nh(HH, BH)))
    }

    function Rh(HH, BH) {
      return 0 !== HH.size && jh(HH, BH)
    }

    function jh(HH, BH) {
      if (HH.has(BH)) return !0;
      const LH = iS.parentNode(BH);
      return !!LH && jh(HH, LH)
    }
    let nh;
    const Fh = HH => {
        if (!nh) return HH;
        return function() {
          try {
            return HH(...arguments)
          } catch (BH) {
            if (nh && !0 === nh(BH)) return;
            throw BH
          }
        }
      },
      Dh = [];

    function wh(HH) {
      try {
        if ("composedPath" in HH) {
          const BH = HH.composedPath();
          if (BH.length) return BH[0]
        } else if ("path" in HH && HH.path.length) return HH.path[0]
      } catch {}
      return HH && HH.target
    }

    function Zh(HH, BH) {
      const LH = new gh;
      Dh.push(LH), LH.init(HH);
      const [AH, rH] = aS(), SH = new AH(Fh(LH.processMutations.bind(LH)));
      return SH.observe(BH, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [SH, rH]
    }

    function dh(HH) {
      let {
        mouseInteractionCb: BH,
        doc: LH,
        mirror: AH,
        blockClass: rH,
        blockSelector: SH,
        sampling: hH
      } = HH;
      if (!1 === hH.mouseInteraction) return () => {};
      const tH = !0 === hH.mouseInteraction || void 0 === hH.mouseInteraction ? {} : hH.mouseInteraction,
        zH = [];
      let CH = null;
      return Object.keys(Ih).filter((HH => Number.isNaN(Number(HH)) && !HH.endsWith("_Departed") && !1 !== tH[HH])).forEach((HH => {
        let hH = oH(HH);
        const tH = (HH => LH => {
          const hH = wh(LH);
          if (th(hH, rH, SH, !0)) return;
          let tH = null,
            zH = HH;
          if ("pointerType" in LH) {
            switch (LH.pointerType) {
              case "mouse":
                tH = fh.Mouse;
                break;
              case "touch":
                tH = fh.Touch;
                break;
              case "pen":
                tH = fh.Pen
            }
            tH === fh.Touch ? Ih[HH] === Ih.MouseDown ? zH = "TouchStart" : Ih[HH] === Ih.MouseUp && (zH = "TouchEnd") : fh.Pen
          } else Xh(LH) && (tH = fh.Touch);
          null !== tH ? (CH = tH, (zH.startsWith("Touch") && tH === fh.Touch || zH.startsWith("Mouse") && tH === fh.Mouse) && (tH = null)) : Ih[HH] === Ih.Click && (tH = CH, CH = null);
          const EH = Xh(LH) ? LH.changedTouches[0] : LH;
          if (!EH) return;
          const XH = AH.getId(hH),
            {
              clientX: GH,
              clientY: YH
            } = EH;
          Fh(BH)({
            type: Ih[zH],
            id: XH,
            x: GH,
            y: YH,
            ...null !== tH && {
              pointerType: tH
            }
          })
        })(HH);
        if (window.PointerEvent) switch (Ih[HH]) {
          case Ih.MouseDown:
          case Ih.MouseUp:
            hH = hH.replace("mouse", "pointer");
            break;
          case Ih.TouchStart:
          case Ih.TouchEnd:
            return
        }
        zH.push(pS(hH, tH, LH))
      })), Fh((() => {
        zH.forEach((HH => HH()))
      }))
    }

    function ah(HH) {
      let {
        scrollCb: BH,
        doc: LH,
        mirror: AH,
        blockClass: rH,
        blockSelector: SH,
        sampling: hH
      } = HH;
      const tH = Fh(Bh(Fh((HH => {
        const hH = wh(HH);
        if (!hH || th(hH, rH, SH, !0)) return;
        const tH = AH.getId(hH);
        if (hH === LH && LH.defaultView) {
          const HH = Ah(LH.defaultView);
          BH({
            id: tH,
            x: HH.left,
            y: HH.top
          })
        } else BH({
          id: tH,
          x: hH.scrollLeft,
          y: hH.scrollTop
        })
      })), hH.scroll || 100));
      return pS("scroll", tH, LH)
    }
    const sh = ["INPUT", "TEXTAREA", "SELECT"],
      Jh = new WeakMap;

    function ih(HH) {
      return function HH(BH, LH) {
        if (Bt("CSSGroupingRule") && BH.parentRule instanceof CSSGroupingRule || Bt("CSSMediaRule") && BH.parentRule instanceof CSSMediaRule || Bt("CSSSupportsRule") && BH.parentRule instanceof CSSSupportsRule || Bt("CSSConditionRule") && BH.parentRule instanceof CSSConditionRule) {
          const AH = Array.from(BH.parentRule.cssRules).indexOf(BH);
          return LH.unshift(AH), HH(BH.parentRule, LH)
        }
        if (BH.parentStyleSheet) {
          const HH = Array.from(BH.parentStyleSheet.cssRules).indexOf(BH);
          LH.unshift(HH)
        }
        return LH
      }(HH, [])
    }

    function ph(HH, BH, LH) {
      let AH, rH;
      return HH ? (HH.ownerNode ? AH = BH.getId(HH.ownerNode) : rH = LH.getId(HH), {
        styleId: rH,
        id: AH
      }) : {}
    }

    function yh(HH, BH) {
      let {
        mirror: LH,
        stylesheetManager: AH
      } = HH;
      var rH, SH, hH;
      let tH = null;
      tH = "#document" === BH.nodeName ? LH.getId(BH) : LH.getId(iS.host(BH));
      const zH = "#document" === BH.nodeName ? null == (rH = BH.defaultView) ? void 0 : rH.Document : null == (hH = null == (SH = BH.ownerDocument) ? void 0 : SH.defaultView) ? void 0 : hH.ShadowRoot,
        CH = (null == zH ? void 0 : zH.prototype) ? Object.getOwnPropertyDescriptor(null == zH ? void 0 : zH.prototype, "adoptedStyleSheets") : void 0;
      return null !== tH && -1 !== tH && zH && CH ? (Object.defineProperty(BH, "adoptedStyleSheets", {
        configurable: CH.configurable,
        enumerable: CH.enumerable,
        get() {
          var HH;
          return null == (HH = CH.get) ? void 0 : HH.call(this)
        },
        set(HH) {
          var BH;
          const LH = null == (BH = CH.set) ? void 0 : BH.call(this, HH);
          if (null !== tH && -1 !== tH) try {
            AH.adoptStyleSheets(HH, tH)
          } catch (rH) {}
          return LH
        }
      }), Fh((() => {
        Object.defineProperty(BH, "adoptedStyleSheets", {
          configurable: CH.configurable,
          enumerable: CH.enumerable,
          get: CH.get,
          set: CH.set
        })
      }))) : () => {}
    }

    function Ht(HH) {
      let BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const LH = HH.doc.defaultView;
      if (!LH) return () => {};
      let AH;
      ! function(HH, BH) {
        const {
          mutationCb: LH,
          mousemoveCb: AH,
          mouseInteractionCb: rH,
          scrollCb: SH,
          viewportResizeCb: hH,
          inputCb: tH,
          mediaInteractionCb: zH,
          styleSheetRuleCb: CH,
          styleDeclarationCb: EH,
          canvasMutationCb: XH,
          fontCb: GH,
          selectionCb: YH,
          customElementCb: uH
        } = HH;
        HH.mutationCb = function() {
          BH.mutation && BH.mutation(...arguments), LH(...arguments)
        }, HH.mousemoveCb = function() {
          BH.mousemove && BH.mousemove(...arguments), AH(...arguments)
        }, HH.mouseInteractionCb = function() {
          BH.mouseInteraction && BH.mouseInteraction(...arguments), rH(...arguments)
        }, HH.scrollCb = function() {
          BH.scroll && BH.scroll(...arguments), SH(...arguments)
        }, HH.viewportResizeCb = function() {
          BH.viewportResize && BH.viewportResize(...arguments), hH(...arguments)
        }, HH.inputCb = function() {
          BH.input && BH.input(...arguments), tH(...arguments)
        }, HH.mediaInteractionCb = function() {
          BH.mediaInteaction && BH.mediaInteaction(...arguments), zH(...arguments)
        }, HH.styleSheetRuleCb = function() {
          BH.styleSheetRule && BH.styleSheetRule(...arguments), CH(...arguments)
        }, HH.styleDeclarationCb = function() {
          BH.styleDeclaration && BH.styleDeclaration(...arguments), EH(...arguments)
        }, HH.canvasMutationCb = function() {
          BH.canvasMutation && BH.canvasMutation(...arguments), XH(...arguments)
        }, HH.fontCb = function() {
          BH.font && BH.font(...arguments), GH(...arguments)
        }, HH.selectionCb = function() {
          BH.selection && BH.selection(...arguments), YH(...arguments)
        }, HH.customElementCb = function() {
          BH.customElement && BH.customElement(...arguments), uH(...arguments)
        }
      }(HH, BH);
      let rH = () => {};
      HH.recordDOM && ([AH, rH] = Zh(HH, HH.doc));
      const SH = function(HH) {
          let {
            mousemoveCb: BH,
            sampling: LH,
            doc: AH,
            mirror: rH
          } = HH;
          if (!1 === LH.mousemove) return () => {};
          const SH = "number" === typeof LH.mousemove ? LH.mousemove : 50,
            hH = "number" === typeof LH.mousemoveCallback ? LH.mousemoveCallback : 500;
          let tH, zH = [];
          const CH = Bh(Fh((HH => {
              const LH = Date.now() - tH;
              BH(zH.map((HH => (HH.timeOffset -= LH, HH))), HH), zH = [], tH = null
            })), hH),
            EH = Fh(Bh(Fh((HH => {
              const BH = wh(HH),
                {
                  clientX: LH,
                  clientY: AH
                } = Xh(HH) ? HH.changedTouches[0] : HH;
              tH || (tH = sS()), zH.push({
                x: LH,
                y: AH,
                id: rH.getId(BH),
                timeOffset: sS() - tH
              }), CH("undefined" !== typeof DragEvent && HH instanceof DragEvent ? oh.Drag : HH instanceof MouseEvent ? oh.MouseMove : oh.TouchMove)
            })), SH, {
              trailing: !1
            })),
            XH = [pS("mousemove", EH, AH), pS("touchmove", EH, AH), pS("drag", EH, AH)];
          return Fh((() => {
            XH.forEach((HH => HH()))
          }))
        }(HH),
        hH = dh(HH),
        tH = ah(HH),
        zH = function(HH, BH) {
          let {
            viewportResizeCb: LH
          } = HH, {
            win: AH
          } = BH, rH = -1, SH = -1;
          return pS("resize", Fh(Bh(Fh((() => {
            const HH = rh(),
              BH = Sh();
            rH === HH && SH === BH || (LH({
              width: Number(BH),
              height: Number(HH)
            }), rH = HH, SH = BH)
          })), 200)), AH)
        }(HH, {
          win: LH
        }),
        CH = function(HH) {
          let {
            inputCb: BH,
            doc: LH,
            mirror: AH,
            blockClass: rH,
            blockSelector: SH,
            ignoreClass: hH,
            ignoreSelector: tH,
            maskInputOptions: zH,
            maskInputFn: CH,
            sampling: EH,
            userTriggeredOnInput: XH
          } = HH;

          function GH(HH) {
            let BH = wh(HH);
            const AH = HH.isTrusted,
              EH = BH && BH.tagName;
            if (BH && "OPTION" === EH && (BH = iS.parentElement(BH)), !BH || !EH || sh.indexOf(EH) < 0 || th(BH, rH, SH, !0)) return;
            if (BH.classList.contains(hH) || tH && BH.matches(tH)) return;
            let GH = BH.value,
              uH = !1;
            const QH = fH(BH) || "";
            "radio" === QH || "checkbox" === QH ? uH = BH.checked : (zH[EH.toLowerCase()] || zH[QH]) && (GH = mH({
              element: BH,
              maskInputOptions: zH,
              tagName: EH,
              type: QH,
              value: GH,
              maskInputFn: CH
            })), YH(BH, XH ? {
              text: GH,
              isChecked: uH,
              userTriggered: AH
            } : {
              text: GH,
              isChecked: uH
            });
            const WH = BH.name;
            "radio" === QH && WH && uH && LH.querySelectorAll(`input[type="radio"][name="${WH}"]`).forEach((HH => {
              if (HH !== BH) {
                const BH = HH.value;
                YH(HH, XH ? {
                  text: BH,
                  isChecked: !uH,
                  userTriggered: !1
                } : {
                  text: BH,
                  isChecked: !uH
                })
              }
            }))
          }

          function YH(HH, LH) {
            const rH = Jh.get(HH);
            if (!rH || rH.text !== LH.text || rH.isChecked !== LH.isChecked) {
              Jh.set(HH, LH);
              const rH = AH.getId(HH);
              Fh(BH)({
                ...LH,
                id: rH
              })
            }
          }
          const uH = ("last" === EH.input ? ["change"] : ["input", "change"]).map((HH => pS(HH, Fh(GH), LH))),
            QH = LH.defaultView;
          if (!QH) return () => {
            uH.forEach((HH => HH()))
          };
          const WH = QH.Object.getOwnPropertyDescriptor(QH.HTMLInputElement.prototype, "value"),
            MH = [
              [QH.HTMLInputElement.prototype, "value"],
              [QH.HTMLInputElement.prototype, "checked"],
              [QH.HTMLSelectElement.prototype, "value"],
              [QH.HTMLTextAreaElement.prototype, "value"],
              [QH.HTMLSelectElement.prototype, "selectedIndex"],
              [QH.HTMLOptionElement.prototype, "selected"]
            ];
          return WH && WH.set && uH.push(...MH.map((HH => Lh(HH[0], HH[1], {
            set() {
              Fh(GH)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, QH)))), Fh((() => {
            uH.forEach((HH => HH()))
          }))
        }(HH),
        EH = function(HH) {
          let {
            mediaInteractionCb: BH,
            blockClass: LH,
            blockSelector: AH,
            mirror: rH,
            sampling: SH,
            doc: hH
          } = HH;
          const tH = Fh((HH => Bh(Fh((SH => {
              const hH = wh(SH);
              if (!hH || th(hH, LH, AH, !0)) return;
              const {
                currentTime: tH,
                volume: zH,
                muted: CH,
                playbackRate: EH,
                loop: XH
              } = hH;
              BH({
                type: HH,
                id: rH.getId(hH),
                currentTime: tH,
                volume: zH,
                muted: CH,
                playbackRate: EH,
                loop: XH
              })
            })), SH.media || 500))),
            zH = [pS("play", tH(Kh.Play), hH), pS("pause", tH(Kh.Pause), hH), pS("seeked", tH(Kh.Seeked), hH), pS("volumechange", tH(Kh.VolumeChange), hH), pS("ratechange", tH(Kh.RateChange), hH)];
          return Fh((() => {
            zH.forEach((HH => HH()))
          }))
        }(HH);
      let XH = () => {},
        GH = () => {},
        YH = () => {},
        uH = () => {};
      HH.recordDOM && (XH = function(HH, BH) {
        let {
          styleSheetRuleCb: LH,
          mirror: AH,
          stylesheetManager: rH
        } = HH, {
          win: SH
        } = BH;
        if (!SH.CSSStyleSheet || !SH.CSSStyleSheet.prototype) return () => {};
        const hH = SH.CSSStyleSheet.prototype.insertRule;
        SH.CSSStyleSheet.prototype.insertRule = new Proxy(hH, {
          apply: Fh(((HH, BH, SH) => {
            const [hH, tH] = SH, {
              id: zH,
              styleId: CH
            } = ph(BH, AH, rH.styleMirror);
            return (zH && -1 !== zH || CH && -1 !== CH) && LH({
              id: zH,
              styleId: CH,
              adds: [{
                rule: hH,
                index: tH
              }]
            }), HH.apply(BH, SH)
          }))
        }), SH.CSSStyleSheet.prototype.addRule = function(HH, BH) {
          let LH = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const AH = `${HH} { ${BH} }`;
          return SH.CSSStyleSheet.prototype.insertRule.apply(this, [AH, LH])
        };
        const tH = SH.CSSStyleSheet.prototype.deleteRule;
        let zH, CH;
        SH.CSSStyleSheet.prototype.deleteRule = new Proxy(tH, {
          apply: Fh(((HH, BH, SH) => {
            const [hH] = SH, {
              id: tH,
              styleId: zH
            } = ph(BH, AH, rH.styleMirror);
            return (tH && -1 !== tH || zH && -1 !== zH) && LH({
              id: tH,
              styleId: zH,
              removes: [{
                index: hH
              }]
            }), HH.apply(BH, SH)
          }))
        }), SH.CSSStyleSheet.prototype.removeRule = function(HH) {
          return SH.CSSStyleSheet.prototype.deleteRule.apply(this, [HH])
        }, SH.CSSStyleSheet.prototype.replace && (zH = SH.CSSStyleSheet.prototype.replace, SH.CSSStyleSheet.prototype.replace = new Proxy(zH, {
          apply: Fh(((HH, BH, SH) => {
            const [hH] = SH, {
              id: tH,
              styleId: zH
            } = ph(BH, AH, rH.styleMirror);
            return (tH && -1 !== tH || zH && -1 !== zH) && LH({
              id: tH,
              styleId: zH,
              replace: hH
            }), HH.apply(BH, SH)
          }))
        })), SH.CSSStyleSheet.prototype.replaceSync && (CH = SH.CSSStyleSheet.prototype.replaceSync, SH.CSSStyleSheet.prototype.replaceSync = new Proxy(CH, {
          apply: Fh(((HH, BH, SH) => {
            const [hH] = SH, {
              id: tH,
              styleId: zH
            } = ph(BH, AH, rH.styleMirror);
            return (tH && -1 !== tH || zH && -1 !== zH) && LH({
              id: tH,
              styleId: zH,
              replaceSync: hH
            }), HH.apply(BH, SH)
          }))
        }));
        const EH = {};
        Lt("CSSGroupingRule") ? EH.CSSGroupingRule = SH.CSSGroupingRule : (Lt("CSSMediaRule") && (EH.CSSMediaRule = SH.CSSMediaRule), Lt("CSSConditionRule") && (EH.CSSConditionRule = SH.CSSConditionRule), Lt("CSSSupportsRule") && (EH.CSSSupportsRule = SH.CSSSupportsRule));
        const XH = {};
        return Object.entries(EH).forEach((HH => {
          let [BH, SH] = HH;
          XH[BH] = {
            insertRule: SH.prototype.insertRule,
            deleteRule: SH.prototype.deleteRule
          }, SH.prototype.insertRule = new Proxy(XH[BH].insertRule, {
            apply: Fh(((HH, BH, SH) => {
              const [hH, tH] = SH, {
                id: zH,
                styleId: CH
              } = ph(BH.parentStyleSheet, AH, rH.styleMirror);
              return (zH && -1 !== zH || CH && -1 !== CH) && LH({
                id: zH,
                styleId: CH,
                adds: [{
                  rule: hH,
                  index: [...ih(BH), tH || 0]
                }]
              }), HH.apply(BH, SH)
            }))
          }), SH.prototype.deleteRule = new Proxy(XH[BH].deleteRule, {
            apply: Fh(((HH, BH, SH) => {
              const [hH] = SH, {
                id: tH,
                styleId: zH
              } = ph(BH.parentStyleSheet, AH, rH.styleMirror);
              return (tH && -1 !== tH || zH && -1 !== zH) && LH({
                id: tH,
                styleId: zH,
                removes: [{
                  index: [...ih(BH), hH]
                }]
              }), HH.apply(BH, SH)
            }))
          })
        })), Fh((() => {
          SH.CSSStyleSheet.prototype.insertRule = hH, SH.CSSStyleSheet.prototype.deleteRule = tH, zH && (SH.CSSStyleSheet.prototype.replace = zH), CH && (SH.CSSStyleSheet.prototype.replaceSync = CH), Object.entries(EH).forEach((HH => {
            let [BH, LH] = HH;
            LH.prototype.insertRule = XH[BH].insertRule, LH.prototype.deleteRule = XH[BH].deleteRule
          }))
        }))
      }(HH, {
        win: LH
      }), GH = yh(HH, HH.doc), YH = function(HH, BH) {
        let {
          styleDeclarationCb: LH,
          mirror: AH,
          ignoreCSSAttributes: rH,
          stylesheetManager: SH
        } = HH, {
          win: hH
        } = BH;
        const tH = hH.CSSStyleDeclaration.prototype.setProperty;
        hH.CSSStyleDeclaration.prototype.setProperty = new Proxy(tH, {
          apply: Fh(((HH, BH, hH) => {
            var zH;
            const [CH, EH, XH] = hH;
            if (rH.has(CH)) return tH.apply(BH, [CH, EH, XH]);
            const {
              id: GH,
              styleId: YH
            } = ph(null == (zH = BH.parentRule) ? void 0 : zH.parentStyleSheet, AH, SH.styleMirror);
            return (GH && -1 !== GH || YH && -1 !== YH) && LH({
              id: GH,
              styleId: YH,
              set: {
                property: CH,
                value: EH,
                priority: XH
              },
              index: ih(BH.parentRule)
            }), HH.apply(BH, hH)
          }))
        });
        const zH = hH.CSSStyleDeclaration.prototype.removeProperty;
        return hH.CSSStyleDeclaration.prototype.removeProperty = new Proxy(zH, {
          apply: Fh(((HH, BH, hH) => {
            var tH;
            const [CH] = hH;
            if (rH.has(CH)) return zH.apply(BH, [CH]);
            const {
              id: EH,
              styleId: XH
            } = ph(null == (tH = BH.parentRule) ? void 0 : tH.parentStyleSheet, AH, SH.styleMirror);
            return (EH && -1 !== EH || XH && -1 !== XH) && LH({
              id: EH,
              styleId: XH,
              remove: {
                property: CH
              },
              index: ih(BH.parentRule)
            }), HH.apply(BH, hH)
          }))
        }), Fh((() => {
          hH.CSSStyleDeclaration.prototype.setProperty = tH, hH.CSSStyleDeclaration.prototype.removeProperty = zH
        }))
      }(HH, {
        win: LH
      }), HH.collectFonts && (uH = function(HH) {
        let {
          fontCb: BH,
          doc: LH
        } = HH;
        const AH = LH.defaultView;
        if (!AH) return () => {};
        const rH = [],
          SH = new WeakMap,
          hH = AH.FontFace;
        AH.FontFace = function(HH, BH, LH) {
          const AH = new hH(HH, BH, LH);
          return SH.set(AH, {
            family: HH,
            buffer: "string" !== typeof BH,
            descriptors: LH,
            fontSource: "string" === typeof BH ? BH : JSON.stringify(Array.from(new Uint8Array(BH)))
          }), AH
        };
        const tH = JS(LH.fonts, "add", (function(HH) {
          return function(LH) {
            return setTimeout(Fh((() => {
              const HH = SH.get(LH);
              HH && (BH(HH), SH.delete(LH))
            })), 0), HH.apply(this, [LH])
          }
        }));
        return rH.push((() => {
          AH.FontFace = hH
        })), rH.push(tH), Fh((() => {
          rH.forEach((HH => HH()))
        }))
      }(HH)));
      const QH = function(HH) {
          const {
            doc: BH,
            mirror: LH,
            blockClass: AH,
            blockSelector: rH,
            selectionCb: SH
          } = HH;
          let hH = !0;
          const tH = Fh((() => {
            const HH = BH.getSelection();
            if (!HH || hH && (null == HH ? void 0 : HH.isCollapsed)) return;
            hH = HH.isCollapsed || !1;
            const tH = [],
              zH = HH.rangeCount || 0;
            for (let BH = 0; BH < zH; BH++) {
              const SH = HH.getRangeAt(BH),
                {
                  startContainer: hH,
                  startOffset: zH,
                  endContainer: CH,
                  endOffset: EH
                } = SH;
              th(hH, AH, rH, !0) || th(CH, AH, rH, !0) || tH.push({
                start: LH.getId(hH),
                startOffset: zH,
                end: LH.getId(CH),
                endOffset: EH
              })
            }
            SH({
              rW: tH
            })
          }));
          return tH(), pS("selectionchange", tH)
        }(HH),
        WH = function(HH) {
          let {
            doc: BH,
            customElementCb: LH
          } = HH;
          const AH = BH.defaultView;
          return AH && AH.customElements ? JS(AH.customElements, "define", (function(HH) {
            return function(BH, AH, rH) {
              try {
                LH({
                  define: {
                    name: BH
                  }
                })
              } catch (SH) {
                console.warn(`Custom element callback failed for ${BH}`)
              }
              return HH.apply(this, [BH, AH, rH])
            }
          })) : () => {}
        }(HH),
        MH = [];
      for (const xH of HH.plugins) MH.push(xH.observer(xH.callback, LH, xH.options));
      return Fh((() => {
        Dh.forEach((HH => HH.reset())), null == AH || AH.disconnect(), rH(), SH(), hH(), tH(), zH(), CH(), EH(), XH(), GH(), YH(), uH(), QH(), WH(), MH.forEach((HH => HH()))
      }))
    }

    function Bt(HH) {
      return "undefined" !== typeof window[HH]
    }

    function Lt(HH) {
      return Boolean("undefined" !== typeof window[HH] && window[HH].prototype && "insertRule" in window[HH].prototype && "deleteRule" in window[HH].prototype)
    }
    class At {
      constructor(HH) {
        SH(this, "iframeIdToRemoteIdMap", new WeakMap), SH(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = HH
      }
      getId(HH, BH, LH, AH) {
        const rH = LH || this.getIdToRemoteIdMap(HH),
          SH = AH || this.getRemoteIdToIdMap(HH);
        let hH = rH.get(BH);
        return hH || (hH = this.generateIdFn(), rH.set(BH, hH), SH.set(hH, BH)), hH
      }
      getIds(HH, BH) {
        const LH = this.getIdToRemoteIdMap(HH),
          AH = this.getRemoteIdToIdMap(HH);
        return BH.map((BH => this.getId(HH, BH, LH, AH)))
      }
      getRemoteId(HH, BH, LH) {
        const AH = LH || this.getRemoteIdToIdMap(HH);
        if ("number" !== typeof BH) return BH;
        const rH = AH.get(BH);
        return rH || -1
      }
      getRemoteIds(HH, BH) {
        const LH = this.getRemoteIdToIdMap(HH);
        return BH.map((BH => this.getRemoteId(HH, BH, LH)))
      }
      reset(HH) {
        if (!HH) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(HH), this.iframeRemoteIdToIdMap.delete(HH)
      }
      getIdToRemoteIdMap(HH) {
        let BH = this.iframeIdToRemoteIdMap.get(HH);
        return BH || (BH = new Map, this.iframeIdToRemoteIdMap.set(HH, BH)), BH
      }
      getRemoteIdToIdMap(HH) {
        let BH = this.iframeRemoteIdToIdMap.get(HH);
        return BH || (BH = new Map, this.iframeRemoteIdToIdMap.set(HH, BH)), BH
      }
    }
    class rt {
      constructor(HH) {
        SH(this, "iframes", new WeakMap), SH(this, "crossOriginIframeMap", new WeakMap), SH(this, "crossOriginIframeMirror", new At(ZH)), SH(this, "crossOriginIframeStyleMirror"), SH(this, "crossOriginIframeRootIdMap", new WeakMap), SH(this, "mirror"), SH(this, "mutationCb"), SH(this, "wrappedEmit"), SH(this, "loadListener"), SH(this, "stylesheetManager"), SH(this, "recordCrossOriginIframes"), this.mutationCb = HH.mutationCb, this.wrappedEmit = HH.wrappedEmit, this.stylesheetManager = HH.stylesheetManager, this.recordCrossOriginIframes = HH.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new At(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = HH.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(HH) {
        this.iframes.set(HH, !0), HH.contentWindow && this.crossOriginIframeMap.set(HH.contentWindow, HH)
      }
      addLoadListener(HH) {
        this.loadListener = HH
      }
      attachIframe(HH, BH) {
        var LH, AH;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(HH),
            nextId: null,
            node: BH
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (LH = HH.contentWindow) || LH.addEventListener("message", this.handleMessage.bind(this))), null == (AH = this.loadListener) || AH.call(this, HH), HH.contentDocument && HH.contentDocument.adoptedStyleSheets && HH.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(HH.contentDocument.adoptedStyleSheets, this.mirror.getId(HH.contentDocument))
      }
      handleMessage(HH) {
        const BH = HH;
        if ("rrweb" !== BH.data.type || BH.origin !== BH.data.origin) return;
        if (!HH.source) return;
        const LH = this.crossOriginIframeMap.get(HH.source);
        if (!LH) return;
        const AH = this.transformCrossOriginEvent(LH, BH.data.event);
        AH && this.wrappedEmit(AH, BH.data.isCheckout)
      }
      transformCrossOriginEvent(HH, BH) {
        var LH;
        switch (BH.type) {
          case mh.FullSnapshot: {
            this.crossOriginIframeMirror.reset(HH), this.crossOriginIframeStyleMirror.reset(HH), this.replaceIdOnNode(BH.data.node, HH);
            const LH = BH.data.node.id;
            return this.crossOriginIframeRootIdMap.set(HH, LH), this.patchRootIdOnNode(BH.data.node, LH), {
              timestamp: BH.timestamp,
              type: mh.IncrementalSnapshot,
              data: {
                source: oh.Mutation,
                adds: [{
                  parentId: this.mirror.getId(HH),
                  nextId: null,
                  node: BH.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }
            }
          }
          case mh.Meta:
          case mh.Load:
          case mh.DomContentLoaded:
            return !1;
          case mh.Plugin:
            return BH;
          case mh.Custom:
            return this.replaceIds(BH.data.payload, HH, ["id", "parentId", "previousId", "nextId"]), BH;
          case mh.IncrementalSnapshot:
            switch (BH.data.source) {
              case oh.Mutation:
                return BH.data.adds.forEach((BH => {
                  this.replaceIds(BH, HH, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(BH.node, HH);
                  const LH = this.crossOriginIframeRootIdMap.get(HH);
                  LH && this.patchRootIdOnNode(BH.node, LH)
                })), BH.data.removes.forEach((BH => {
                  this.replaceIds(BH, HH, ["parentId", "id"])
                })), BH.data.attributes.forEach((BH => {
                  this.replaceIds(BH, HH, ["id"])
                })), BH.data.texts.forEach((BH => {
                  this.replaceIds(BH, HH, ["id"])
                })), BH;
              case oh.Drag:
              case oh.TouchMove:
              case oh.MouseMove:
                return BH.data.positions.forEach((BH => {
                  this.replaceIds(BH, HH, ["id"])
                })), BH;
              case oh.ViewportResize:
                return !1;
              case oh.MediaInteraction:
              case oh.MouseInteraction:
              case oh.Scroll:
              case oh.CanvasMutation:
              case oh.Input:
                return this.replaceIds(BH.data, HH, ["id"]), BH;
              case oh.StyleSheetRule:
              case oh.StyleDeclaration:
                return this.replaceIds(BH.data, HH, ["id"]), this.replaceStyleIds(BH.data, HH, ["styleId"]), BH;
              case oh.Font:
                return BH;
              case oh.Selection:
                return BH.data.rW.forEach((BH => {
                  this.replaceIds(BH, HH, ["start", "end"])
                })), BH;
              case oh.AdoptedStyleSheet:
                return this.replaceIds(BH.data, HH, ["id"]), this.replaceStyleIds(BH.data, HH, ["styleIds"]), null == (LH = BH.data.styles) || LH.forEach((BH => {
                  this.replaceStyleIds(BH, HH, ["styleId"])
                })), BH
            }
        }
        return !1
      }
      replace(HH, BH, LH, AH) {
        for (const rH of AH)(Array.isArray(BH[rH]) || "number" === typeof BH[rH]) && (Array.isArray(BH[rH]) ? BH[rH] = HH.getIds(LH, BH[rH]) : BH[rH] = HH.getId(LH, BH[rH]));
        return BH
      }
      replaceIds(HH, BH, LH) {
        return this.replace(this.crossOriginIframeMirror, HH, BH, LH)
      }
      replaceStyleIds(HH, BH, LH) {
        return this.replace(this.crossOriginIframeStyleMirror, HH, BH, LH)
      }
      replaceIdOnNode(HH, BH) {
        this.replaceIds(HH, BH, ["id", "rootId"]), "childNodes" in HH && HH.childNodes.forEach((HH => {
          this.replaceIdOnNode(HH, BH)
        }))
      }
      patchRootIdOnNode(HH, BH) {
        HH.type === eh.Document || HH.rootId || (HH.rootId = BH), "childNodes" in HH && HH.childNodes.forEach((HH => {
          this.patchRootIdOnNode(HH, BH)
        }))
      }
    }
    class St {
      constructor(HH) {
        SH(this, "shadowDoms", new WeakSet), SH(this, "mutationCb"), SH(this, "scrollCb"), SH(this, "bypassOptions"), SH(this, "mirror"), SH(this, "restoreHandlers", []), this.mutationCb = HH.mutationCb, this.scrollCb = HH.scrollCb, this.bypassOptions = HH.bypassOptions, this.mirror = HH.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(HH, BH) {
        if (!UH(HH)) return;
        if (this.shadowDoms.has(HH)) return;
        this.shadowDoms.add(HH);
        const [LH] = Zh({
          ...this.bypassOptions,
          doc: BH,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, HH);
        this.restoreHandlers.push((() => LH.disconnect())), this.restoreHandlers.push(ah({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: HH,
          mirror: this.mirror
        })), setTimeout((() => {
          HH.adoptedStyleSheets && HH.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(HH.adoptedStyleSheets, this.mirror.getId(iS.host(HH))), this.restoreHandlers.push(yh({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, HH))
        }), 0)
      }
      observeAttachShadow(HH) {
        HH.contentWindow && HH.contentDocument && this.patchAttachShadow(HH.contentWindow.Element, HH.contentDocument)
      }
      patchAttachShadow(HH, BH) {
        const LH = this;
        this.restoreHandlers.push(JS(HH.prototype, "attachShadow", (function(HH) {
          return function(AH) {
            const rH = HH.call(this, AH),
              SH = iS.shadowRoot(this);
            return SH && kh(this) && LH.addShadowRoot(SH, BH), rH
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((HH => {
          try {
            HH()
          } catch (BH) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var ht = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", tt = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), zt = 0; zt < 64; zt++) tt[ht.charCodeAt(zt)] = zt;
    const Ct = new Map;
    const Et = (HH, BH, LH) => {
      if (!HH || !Yt(HH, BH) && "object" !== typeof HH) return;
      const AH = function(HH, BH) {
        let LH = Ct.get(HH);
        return LH || (LH = new Map, Ct.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
      }(LH, HH.constructor.name);
      let rH = AH.indexOf(HH);
      return -1 === rH && (rH = AH.length, AH.push(HH)), rH
    };

    function Xt(HH, BH, LH) {
      if (HH instanceof Array) return HH.map((HH => Xt(HH, BH, LH)));
      if (null === HH) return HH;
      if (HH instanceof Float32Array || HH instanceof Float64Array || HH instanceof Int32Array || HH instanceof Uint32Array || HH instanceof Uint8Array || HH instanceof Uint16Array || HH instanceof Int16Array || HH instanceof Int8Array || HH instanceof Uint8ClampedArray) {
        return {
          rr_type: HH.constructor.name,
          args: [Object.values(HH)]
        }
      }
      if (HH instanceof ArrayBuffer) {
        return {
          rr_type: HH.constructor.name,
          base64: function(HH) {
            var BH, LH = new Uint8Array(HH),
              AH = LH.length,
              rH = "";
            for (BH = 0; BH < AH; BH += 3) rH += ht[LH[BH] >> 2], rH += ht[(3 & LH[BH]) << 4 | LH[BH + 1] >> 4], rH += ht[(15 & LH[BH + 1]) << 2 | LH[BH + 2] >> 6], rH += ht[63 & LH[BH + 2]];
            return AH % 3 === 2 ? rH = rH.substring(0, rH.length - 1) + "=" : AH % 3 === 1 && (rH = rH.substring(0, rH.length - 2) + "=="), rH
          }(HH)
        }
      }
      if (HH instanceof DataView) {
        return {
          rr_type: HH.constructor.name,
          args: [Xt(HH.buffer, BH, LH), HH.byteOffset, HH.byteLength]
        }
      }
      if (HH instanceof HTMLImageElement) {
        const BH = HH.constructor.name,
          {
            src: LH
          } = HH;
        return {
          rr_type: BH,
          src: LH
        }
      }
      if (HH instanceof HTMLCanvasElement) {
        return {
          rr_type: "HTMLImageElement",
          src: HH.toDataURL()
        }
      }
      if (HH instanceof ImageData) {
        return {
          rr_type: HH.constructor.name,
          args: [Xt(HH.data, BH, LH), HH.width, HH.height]
        }
      }
      if (Yt(HH, BH) || "object" === typeof HH) {
        return {
          rr_type: HH.constructor.name,
          index: Et(HH, BH, LH)
        }
      }
      return HH
    }
    const Gt = (HH, BH, LH) => HH.map((HH => Xt(HH, BH, LH))),
      Yt = (HH, BH) => {
        const LH = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((HH => "function" === typeof BH[HH]));
        return Boolean(LH.find((LH => HH instanceof BH[LH])))
      };

    function ut(HH, BH, LH, AH) {
      const rH = [];
      try {
        const SH = JS(HH.HTMLCanvasElement.prototype, "getContext", (function(HH) {
          return function(rH) {
            for (var SH = arguments.length, hH = new Array(SH > 1 ? SH - 1 : 0), tH = 1; tH < SH; tH++) hH[tH - 1] = arguments[tH];
            if (!th(this, BH, LH, !0)) {
              const HH = function(HH) {
                return "experimental-webgl" === HH ? "webgl" : HH
              }(rH);
              if ("__context" in this || (this.__context = HH), AH && ["webgl", "webgl2"].includes(HH))
                if (hH[0] && "object" === typeof hH[0]) {
                  const HH = hH[0];
                  HH.preserveDrawingBuffer || (HH.preserveDrawingBuffer = !0)
                } else hH.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return HH.apply(this, [rH, ...hH])
          }
        }));
        rH.push(SH)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        rH.forEach((HH => HH()))
      }
    }

    function Qt(HH, BH, LH, AH, rH, SH) {
      const hH = [],
        tH = Object.getOwnPropertyNames(HH);
      for (const zH of tH)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(zH)) try {
          if ("function" !== typeof HH[zH]) continue;
          const tH = JS(HH, zH, (function(HH) {
            return function() {
              for (var hH = arguments.length, tH = new Array(hH), CH = 0; CH < hH; CH++) tH[CH] = arguments[CH];
              const EH = HH.apply(this, tH);
              if (Et(EH, SH, this), "tagName" in this.canvas && !th(this.canvas, AH, rH, !0)) {
                const HH = Gt(tH, SH, this),
                  AH = {
                    type: BH,
                    property: zH,
                    args: HH
                  };
                LH(this.canvas, AH)
              }
              return EH
            }
          }));
          hH.push(tH)
        } catch {
          const AH = Lh(HH, zH, {
            set(HH) {
              LH(this.canvas, {
                type: BH,
                property: zH,
                args: [HH],
                setter: !0
              })
            }
          });
          hH.push(AH)
        }
      return hH
    }
    const Wt = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      Mt = "undefined" !== typeof self && self.Blob && new Blob([Wt], {
        type: "text/javascript;charset=utf-8"
      });

    function xt(HH) {
      let BH;
      try {
        if (BH = Mt && (self.URL || self.webkitURL).createObjectURL(Mt), !BH) throw "";
        const LH = new Worker(BH, {
          name: null == HH ? void 0 : HH.name
        });
        return LH.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(BH)
        })), LH
      } catch (LH) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(Wt), {
          name: null == HH ? void 0 : HH.name
        })
      } finally {
        BH && (self.URL || self.webkitURL).revokeObjectURL(BH)
      }
    }
    class vt {
      constructor(HH) {
        SH(this, "pendingCanvasMutations", new Map), SH(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), SH(this, "mirror"), SH(this, "mutationCb"), SH(this, "resetObservers"), SH(this, "frozen", !1), SH(this, "locked", !1), SH(this, "processMutation", ((HH, BH) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(HH) || this.pendingCanvasMutations.set(HH, []), this.pendingCanvasMutations.get(HH).push(BH)
        }));
        const {
          sampling: BH = "all",
          win: LH,
          blockClass: AH,
          blockSelector: rH,
          recordCanvas: hH,
          dataURLOptions: tH
        } = HH;
        this.mutationCb = HH.mutationCb, this.mirror = HH.mirror, hH && "all" === BH && this.initCanvasMutationObserver(LH, AH, rH), hH && "number" === typeof BH && this.initCanvasFPSObserver(BH, LH, AH, rH, {
          dataURLOptions: tH
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
      initCanvasFPSObserver(HH, BH, LH, AH, rH) {
        const SH = ut(BH, LH, AH, !0),
          hH = new Map,
          tH = new xt;
        tH.onmessage = HH => {
          const {
            id: BH
          } = HH.data;
          if (hH.set(BH, !1), !("base64" in HH.data)) return;
          const {
            base64: LH,
            type: AH,
            width: rH,
            height: SH
          } = HH.data;
          this.mutationCb({
            id: BH,
            type: lh["2D"],
            commands: [{
              property: "clearRect",
              args: [0, 0, rH, SH]
            }, {
              property: "drawImage",
              args: [{
                rr_type: "ImageBitmap",
                args: [{
                  rr_type: "Blob",
                  data: [{
                    rr_type: "ArrayBuffer",
                    base64: LH
                  }],
                  type: AH
                }]
              }, 0, 0]
            }]
          })
        };
        const zH = 1e3 / HH;
        let CH, EH = 0;
        const XH = HH => {
          EH && HH - EH < zH || (EH = HH, (() => {
            const HH = [];
            return BH.document.querySelectorAll("canvas").forEach((BH => {
              th(BH, LH, AH, !0) || HH.push(BH)
            })), HH
          })().forEach((async HH => {
            var BH;
            const LH = this.mirror.getId(HH);
            if (hH.get(LH)) return;
            if (0 === HH.width || 0 === HH.height) return;
            if (hH.set(LH, !0), ["webgl", "webgl2"].includes(HH.__context)) {
              const LH = HH.getContext(HH.__context);
              !1 === (null == (BH = null == LH ? void 0 : LH.getContextAttributes()) ? void 0 : BH.preserveDrawingBuffer) && LH.clear(LH.COLOR_BUFFER_BIT)
            }
            const AH = await createImageBitmap(HH);
            tH.postMessage({
              id: LH,
              bitmap: AH,
              width: HH.width,
              height: HH.height,
              dataURLOptions: rH.dataURLOptions
            }, [AH])
          }))), CH = requestAnimationFrame(XH)
        };
        CH = requestAnimationFrame(XH), this.resetObservers = () => {
          SH(), cancelAnimationFrame(CH)
        }
      }
      initCanvasMutationObserver(HH, BH, LH) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const AH = ut(HH, BH, LH, !1),
          rH = function(HH, BH, LH, AH) {
            const rH = [],
              SH = Object.getOwnPropertyNames(BH.CanvasRenderingContext2D.prototype);
            for (const hH of SH) try {
              if ("function" !== typeof BH.CanvasRenderingContext2D.prototype[hH]) continue;
              const SH = JS(BH.CanvasRenderingContext2D.prototype, hH, (function(rH) {
                return function() {
                  for (var SH = arguments.length, tH = new Array(SH), zH = 0; zH < SH; zH++) tH[zH] = arguments[zH];
                  return th(this.canvas, LH, AH, !0) || setTimeout((() => {
                    const LH = Gt(tH, BH, this);
                    HH(this.canvas, {
                      type: lh["2D"],
                      property: hH,
                      args: LH
                    })
                  }), 0), rH.apply(this, tH)
                }
              }));
              rH.push(SH)
            } catch {
              const LH = Lh(BH.CanvasRenderingContext2D.prototype, hH, {
                set(BH) {
                  HH(this.canvas, {
                    type: lh["2D"],
                    property: hH,
                    args: [BH],
                    setter: !0
                  })
                }
              });
              rH.push(LH)
            }
            return () => {
              rH.forEach((HH => HH()))
            }
          }(this.processMutation.bind(this), HH, BH, LH),
          SH = function(HH, BH, LH, AH) {
            const rH = [];
            return "undefined" !== typeof BH.WebGLRenderingContext && rH.push(...Qt(BH.WebGLRenderingContext.prototype, lh.WebGL, HH, LH, AH, BH)), "undefined" !== typeof BH.WebGL2RenderingContext && rH.push(...Qt(BH.WebGL2RenderingContext.prototype, lh.WebGL2, HH, LH, AH, BH)), () => {
              rH.forEach((HH => HH()))
            }
          }(this.processMutation.bind(this), HH, BH, LH);
        this.resetObservers = () => {
          AH(), rH(), SH()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const HH = BH => {
          this.rafStamps.latestId = BH, requestAnimationFrame(HH)
        };
        requestAnimationFrame(HH)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((HH, BH) => {
          const LH = this.mirror.getId(BH);
          this.flushPendingCanvasMutationFor(BH, LH)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(HH, BH) {
        if (this.frozen || this.locked) return;
        const LH = this.pendingCanvasMutations.get(HH);
        if (!LH || -1 === BH) return;
        const AH = LH.map((HH => {
            const {
              type: BH,
              ...LH
            } = HH;
            return LH
          })),
          {
            type: rH
          } = LH[0];
        this.mutationCb({
          id: BH,
          type: rH,
          commands: AH
        }), this.pendingCanvasMutations.delete(HH)
      }
    }
    class Pt {
      constructor(HH) {
        SH(this, "trackedLinkElements", new WeakSet), SH(this, "mutationCb"), SH(this, "adoptedStyleSheetCb"), SH(this, "styleMirror", new Uh), this.mutationCb = HH.mutationCb, this.adoptedStyleSheetCb = HH.adoptedStyleSheetCb
      }
      attachLinkElement(HH, BH) {
        "_cssText" in BH.attributes && this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{
            id: BH.id,
            attributes: BH.attributes
          }]
        }), this.trackLinkElement(HH)
      }
      trackLinkElement(HH) {
        this.trackedLinkElements.has(HH) || (this.trackedLinkElements.add(HH), this.trackStylesheetInLinkElement(HH))
      }
      adoptStyleSheets(HH, BH) {
        if (0 === HH.length) return;
        const LH = {
            id: BH,
            styleIds: []
          },
          AH = [];
        for (const rH of HH) {
          let HH;
          this.styleMirror.has(rH) ? HH = this.styleMirror.getId(rH) : (HH = this.styleMirror.add(rH), AH.push({
            styleId: HH,
            rules: Array.from(rH.rules || CSSRule, ((HH, BH) => ({
              rule: OH(HH, rH.href),
              index: BH
            })))
          })), LH.styleIds.push(HH)
        }
        AH.length > 0 && (LH.styles = AH), this.adoptedStyleSheetCb(LH)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(HH) {}
    }
    class Tt {
      constructor() {
        SH(this, "nodeMap", new WeakMap), SH(this, "active", !1)
      }
      inOtherBuffer(HH, BH) {
        const LH = this.nodeMap.get(HH);
        return LH && Array.from(LH).some((HH => HH !== BH))
      }
      add(HH, BH) {
        this.active || (this.active = !0, requestAnimationFrame((() => {
          this.nodeMap = new WeakMap, this.active = !1
        }))), this.nodeMap.set(HH, (this.nodeMap.get(HH) || new Set).add(BH))
      }
      destroy() {}
    }
    let Ut, Vt, Ot, bt = !1;
    try {
      if (2 !== Array.from([1], (HH => 2 * HH))[0]) {
        const HH = document.createElement("iframe");
        document.body.appendChild(HH), Array.from = (null == (AH = HH.contentWindow) ? void 0 : AH.Array.from) || Array.from, document.body.removeChild(HH)
      }
    } catch (Gz) {
      console.debug("Unable to override Array.from", Gz)
    }
    const kt = kH();

    function mt() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: BH,
        checkoutEveryNms: LH,
        checkoutEveryNth: AH,
        blockClass: rH = "rr-block",
        blockSelector: SH = null,
        ignoreClass: hH = "rr-ignore",
        ignoreSelector: tH = null,
        maskTextClass: zH = "rr-mask",
        maskTextSelector: CH = null,
        inlineStylesheet: EH = !0,
        maskAllInputs: XH,
        maskInputOptions: GH,
        slimDOMOptions: YH,
        maskInputFn: uH,
        maskTextFn: QH,
        hooks: WH,
        packFn: MH,
        sampling: xH = {},
        dataURLOptions: vH = {},
        mousemoveWait: PH,
        recordDOM: TH = !0,
        recordCanvas: UH = !1,
        recordCrossOriginIframes: VH = !1,
        recordAfter: OH = ("DOMContentLoaded" === HH.recordAfter ? HH.recordAfter : "load"),
        userTriggeredOnInput: kH = !1,
        collectFonts: mH = !1,
        inlineImages: oH = !1,
        plugins: IH,
        keepIframeSrcFn: fH = () => !1,
        ignoreCSSAttributes: lH = new Set([]),
        errorHandler: KH
      } = HH;
      nh = KH;
      const cH = !VH || window.parent === window;
      let eH = !1;
      if (!cH) try {
        window.parent.document && (eH = !1)
      } catch (sH) {
        eH = !0
      }
      if (cH && !BH) throw new Error("emit function is required");
      if (!cH && !eH) return () => {};
      void 0 !== PH && void 0 === xH.mousemove && (xH.mousemove = PH), kt.reset();
      const qH = !0 === XH ? {
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
        } : void 0 !== GH ? GH : {
          password: !0
        },
        gH = tB(YH);
      let NH;
      Gh();
      let RH = 0;
      const jH = HH => {
        for (const BH of IH || []) BH.eventProcessor && (HH = BH.eventProcessor(HH));
        return MH && !eH && (HH = MH(HH)), HH
      };
      Ut = (HH, rH) => {
        var SH;
        const hH = HH;
        if (hH.timestamp = sS(), !(null == (SH = Dh[0]) ? void 0 : SH.isFrozen()) || hH.type === mh.FullSnapshot || hH.type === mh.IncrementalSnapshot && hH.data.source === oh.Mutation || Dh.forEach((HH => HH.unfreeze())), cH) null == BH || BH(jH(hH), rH);
        else if (eH) {
          const HH = {
            type: "rrweb",
            event: jH(hH),
            origin: window.location.origin,
            isCheckout: rH
          };
          window.parent.postMessage(HH, "*")
        }
        if (hH.type === mh.FullSnapshot) NH = hH, RH = 0;
        else if (hH.type === mh.IncrementalSnapshot) {
          if (hH.data.source === oh.Mutation && hH.data.isAttachIframe) return;
          RH++;
          const HH = AH && RH >= AH,
            BH = LH && hH.timestamp - NH.timestamp > LH;
          (HH || BH) && Vt(!0)
        }
      };
      const nH = HH => {
          Ut({
            type: mh.IncrementalSnapshot,
            data: {
              source: oh.Mutation,
              ...HH
            }
          })
        },
        FH = HH => Ut({
          type: mh.IncrementalSnapshot,
          data: {
            source: oh.Scroll,
            ...HH
          }
        }),
        DH = HH => Ut({
          type: mh.IncrementalSnapshot,
          data: {
            source: oh.CanvasMutation,
            ...HH
          }
        }),
        wH = new Pt({
          mutationCb: nH,
          adoptedStyleSheetCb: HH => Ut({
            type: mh.IncrementalSnapshot,
            data: {
              source: oh.AdoptedStyleSheet,
              ...HH
            }
          })
        }),
        ZH = new rt({
          mirror: kt,
          mutationCb: nH,
          stylesheetManager: wH,
          recordCrossOriginIframes: VH,
          wrappedEmit: Ut
        });
      for (const bH of IH || []) bH.getMirror && bH.getMirror({
        nodeMirror: kt,
        crossOriginIframeMirror: ZH.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: ZH.crossOriginIframeStyleMirror
      });
      const dH = new Tt;
      Ot = new vt({
        recordCanvas: UH,
        mutationCb: DH,
        win: window,
        blockClass: rH,
        blockSelector: SH,
        mirror: kt,
        sampling: xH.canvas,
        dataURLOptions: vH
      });
      const aH = new St({
        mutationCb: nH,
        scrollCb: FH,
        bypassOptions: {
          blockClass: rH,
          blockSelector: SH,
          maskTextClass: zH,
          maskTextSelector: CH,
          inlineStylesheet: EH,
          maskInputOptions: qH,
          dataURLOptions: vH,
          maskTextFn: QH,
          maskInputFn: uH,
          recordCanvas: UH,
          inlineImages: oH,
          sampling: xH,
          slimDOMOptions: gH,
          iframeManager: ZH,
          stylesheetManager: wH,
          canvasManager: Ot,
          keepIframeSrcFn: fH,
          processedNodeManager: dH
        },
        mirror: kt
      });
      Vt = function() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!TH) return;
        Ut({
          type: mh.Meta,
          data: {
            href: window.location.href,
            width: Sh(),
            height: rh()
          }
        }, HH), wH.reset(), aH.init(), Dh.forEach((HH => HH.lock()));
        const BH = function(HH, BH) {
          const {
            mirror: LH = new bH,
            blockClass: AH = "rr-block",
            blockSelector: rH = null,
            maskTextClass: SH = "rr-mask",
            maskTextSelector: hH = null,
            inlineStylesheet: tH = !0,
            inlineImages: zH = !1,
            recordCanvas: CH = !1,
            maskAllInputs: EH = !1,
            maskTextFn: XH,
            maskInputFn: GH,
            slimDOM: YH = !1,
            dataURLOptions: uH,
            preserveWhiteSpace: QH,
            onSerialize: WH,
            onIframeLoad: MH,
            iframeLoadTimeout: xH,
            onStylesheetLoad: vH,
            stylesheetLoadTimeout: PH,
            keepIframeSrcFn: TH = () => !1
          } = BH;
          return zB(HH, {
            doc: HH,
            mirror: LH,
            blockClass: AH,
            blockSelector: rH,
            maskTextClass: SH,
            maskTextSelector: hH,
            skipChild: !1,
            inlineStylesheet: tH,
            maskInputOptions: !0 === EH ? {
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
            } : !1 === EH ? {
              password: !0
            } : EH,
            maskTextFn: XH,
            maskInputFn: GH,
            slimDOMOptions: tB(YH),
            dataURLOptions: uH,
            inlineImages: zH,
            recordCanvas: CH,
            preserveWhiteSpace: QH,
            onSerialize: WH,
            onIframeLoad: MH,
            iframeLoadTimeout: xH,
            onStylesheetLoad: vH,
            stylesheetLoadTimeout: PH,
            keepIframeSrcFn: TH,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: kt,
          blockClass: rH,
          blockSelector: SH,
          maskTextClass: zH,
          maskTextSelector: CH,
          inlineStylesheet: EH,
          maskAllInputs: qH,
          maskTextFn: QH,
          maskInputFn: uH,
          slimDOM: gH,
          dataURLOptions: vH,
          recordCanvas: UH,
          inlineImages: oH,
          onSerialize: HH => {
            Qh(HH, kt) && ZH.addIframe(HH), Wh(HH, kt) && wH.trackLinkElement(HH), xh(HH) && aH.addShadowRoot(iS.shadowRoot(HH), document)
          },
          onIframeLoad: (HH, BH) => {
            ZH.attachIframe(HH, BH), aH.observeAttachShadow(HH)
          },
          onStylesheetLoad: (HH, BH) => {
            wH.attachLinkElement(HH, BH)
          },
          keepIframeSrcFn: fH
        });
        if (!BH) return console.warn("Failed to snapshot the document");
        Ut({
          type: mh.FullSnapshot,
          data: {
            node: BH,
            initialOffset: Ah(window)
          }
        }, HH), Dh.forEach((HH => HH.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && wH.adoptStyleSheets(document.adoptedStyleSheets, kt.getId(document))
      };
      try {
        const HH = [],
          BH = HH => {
            var BH;
            return Fh(Ht)({
              mutationCb: nH,
              mousemoveCb: (HH, BH) => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: BH,
                  positions: HH
                }
              }),
              mouseInteractionCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.MouseInteraction,
                  ...HH
                }
              }),
              scrollCb: FH,
              viewportResizeCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.ViewportResize,
                  ...HH
                }
              }),
              inputCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.Input,
                  ...HH
                }
              }),
              mediaInteractionCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.MediaInteraction,
                  ...HH
                }
              }),
              styleSheetRuleCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.StyleSheetRule,
                  ...HH
                }
              }),
              styleDeclarationCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.StyleDeclaration,
                  ...HH
                }
              }),
              canvasMutationCb: DH,
              fontCb: HH => Ut({
                type: mh.IncrementalSnapshot,
                data: {
                  source: oh.Font,
                  ...HH
                }
              }),
              selectionCb: HH => {
                Ut({
                  type: mh.IncrementalSnapshot,
                  data: {
                    source: oh.Selection,
                    ...HH
                  }
                })
              },
              customElementCb: HH => {
                Ut({
                  type: mh.IncrementalSnapshot,
                  data: {
                    source: oh.CustomElement,
                    ...HH
                  }
                })
              },
              blockClass: rH,
              ignoreClass: hH,
              ignoreSelector: tH,
              maskTextClass: zH,
              maskTextSelector: CH,
              maskInputOptions: qH,
              inlineStylesheet: EH,
              sampling: xH,
              recordDOM: TH,
              recordCanvas: UH,
              inlineImages: oH,
              userTriggeredOnInput: kH,
              collectFonts: mH,
              doc: HH,
              maskInputFn: uH,
              maskTextFn: QH,
              keepIframeSrcFn: fH,
              blockSelector: SH,
              slimDOMOptions: gH,
              dataURLOptions: vH,
              mirror: kt,
              iframeManager: ZH,
              stylesheetManager: wH,
              shadowDomManager: aH,
              processedNodeManager: dH,
              canvasManager: Ot,
              ignoreCSSAttributes: lH,
              plugins: (null == (BH = null == IH ? void 0 : IH.filter((HH => HH.observer))) ? void 0 : BH.map((HH => ({
                observer: HH.observer,
                options: HH.options,
                callback: BH => Ut({
                  type: mh.Plugin,
                  data: {
                    plugin: HH.name,
                    payload: BH
                  }
                })
              })))) || []
            }, WH)
          };
        ZH.addLoadListener((LH => {
          try {
            HH.push(BH(LH.contentDocument))
          } catch (AH) {
            console.warn(AH)
          }
        }));
        const LH = () => {
          Vt(), HH.push(BH(document)), bt = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? LH() : (HH.push(pS("DOMContentLoaded", (() => {
          Ut({
            type: mh.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === OH && LH()
        }))), HH.push(pS("load", (() => {
          Ut({
            type: mh.Load,
            data: {}
          }), "load" === OH && LH()
        }), window))), () => {
          HH.forEach((HH => {
            try {
              HH()
            } catch (BH) {
              String(BH).toLowerCase().includes("cross-origin") || console.warn(BH)
            }
          })), dH.destroy(), bt = !1, nh = void 0
        }
      } catch (JH) {
        console.warn(JH)
      }
    }

    function ot() {
      let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        BH = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in BH.documentElement.style && !0 !== HH.__forceSmoothScrollPolyfill__) return;
      const LH = HH.HTMLElement || HH.Element,
        AH = {
          scroll: HH.scroll || HH.scrollTo,
          scrollBy: HH.scrollBy,
          elementScroll: LH.prototype.scroll || tH,
          scrollIntoView: LH.prototype.scrollIntoView
        },
        rH = HH.performance && HH.performance.now ? HH.performance.now.bind(HH.performance) : Date.now;
      const SH = (hH = HH.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(hH) ? 1 : 0);
      var hH;

      function tH(HH, BH) {
        this.scrollLeft = HH, this.scrollTop = BH
      }

      function zH(HH) {
        if (null === HH || "object" !== typeof HH || void 0 === HH.behavior || "auto" === HH.behavior || "instant" === HH.behavior) return !0;
        if ("object" === typeof HH && "smooth" === HH.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + HH.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function CH(HH, BH) {
        return "Y" === BH ? HH.clientHeight + SH < HH.scrollHeight : "X" === BH ? HH.clientWidth + SH < HH.scrollWidth : void 0
      }

      function EH(BH, LH) {
        const AH = HH.getComputedStyle(BH, null)["overflow" + LH];
        return "auto" === AH || "scroll" === AH
      }

      function XH(HH) {
        const BH = CH(HH, "Y") && EH(HH, "Y"),
          LH = CH(HH, "X") && EH(HH, "X");
        return BH || LH
      }

      function GH(BH) {
        let LH, AH, SH, hH = (rH() - BH.startTime) / 468;
        var tH;
        hH = hH > 1 ? 1 : hH, tH = hH, LH = .5 * (1 - Math.cos(Math.PI * tH)), AH = BH.startX + (BH.x - BH.startX) * LH, SH = BH.startY + (BH.y - BH.startY) * LH, BH.method.call(BH.scrollable, AH, SH), AH === BH.x && SH === BH.y || HH.requestAnimationFrame(GH.bind(HH, BH))
      }

      function YH(LH, SH, hH) {
        let zH, CH, EH, XH;
        const YH = rH();
        LH === BH.body ? (zH = HH, CH = HH.scrollX || HH.pageXOffset, EH = HH.scrollY || HH.pageYOffset, XH = AH.scroll) : (zH = LH, CH = LH.scrollLeft, EH = LH.scrollTop, XH = tH), GH({
          scrollable: zH,
          method: XH,
          startTime: YH,
          startX: CH,
          startY: EH,
          x: SH,
          y: hH
        })
      }
      HH.scroll = HH.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== zH(arguments[0]) ? YH.call(HH, BH.body, void 0 !== arguments[0].left ? ~~arguments[0].left : HH.scrollX || HH.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : HH.scrollY || HH.pageYOffset) : AH.scroll.call(HH, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : HH.scrollX || HH.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : HH.scrollY || HH.pageYOffset))
      }, HH.scrollBy = function() {
        void 0 !== arguments[0] && (zH(arguments[0]) ? AH.scrollBy.call(HH, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : YH.call(HH, BH.body, ~~arguments[0].left + (HH.scrollX || HH.pageXOffset), ~~arguments[0].top + (HH.scrollY || HH.pageYOffset)))
      }, LH.prototype.scroll = LH.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === zH(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void AH.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const HH = arguments[0].left,
          BH = arguments[0].top;
        YH.call(this, this, "undefined" === typeof HH ? this.scrollLeft : ~~HH, "undefined" === typeof BH ? this.scrollTop : ~~BH)
      }, LH.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== zH(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : AH.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, LH.prototype.scrollIntoView = function() {
        if (!0 === zH(arguments[0])) return void AH.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const LH = function(HH) {
            for (; HH !== BH.body && !1 === XH(HH);) HH = HH.parentNode || HH.host;
            return HH
          }(this),
          rH = LH.getBoundingClientRect(),
          SH = this.getBoundingClientRect();
        LH !== BH.body ? (YH.call(this, LH, LH.scrollLeft + SH.left - rH.left, LH.scrollTop + SH.top - rH.top), "fixed" !== HH.getComputedStyle(LH).position && HH.scrollBy({
          left: rH.left,
          top: rH.top,
          behavior: "smooth"
        })) : HH.scrollBy({
          left: SH.left,
          top: SH.top,
          behavior: "smooth"
        })
      }
    }
    mt.addCustomEvent = (HH, BH) => {
      if (!bt) throw new Error("please add custom event after start recording");
      Ut({
        type: mh.Custom,
        data: {
          tag: HH,
          payload: BH
        }
      })
    }, mt.freezePage = () => {
      Dh.forEach((HH => HH.freeze()))
    }, mt.takeFullSnapshot = HH => {
      if (!bt) throw new Error("please take full snapshot after start recording");
      Vt(HH)
    }, mt.mirror = kt;
    class It {
      constructor() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          BH = arguments.length > 1 ? arguments[1] : void 0;
        SH(this, "timeOffset", 0), SH(this, "speed"), SH(this, "actions"), SH(this, "raf", null), SH(this, "lastTimestamp"), this.actions = HH, this.speed = BH.speed
      }
      addAction(HH) {
        const BH = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= HH.delay) this.actions.push(HH);
        else {
          const BH = this.findActionIndex(HH);
          this.actions.splice(BH, 0, HH)
        }
        BH && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const HH = performance.now();
        for (this.timeOffset += (HH - this.lastTimestamp) * this.speed, this.lastTimestamp = HH; this.actions.length;) {
          const HH = this.actions[0];
          if (!(this.timeOffset >= HH.delay)) break;
          this.actions.shift(), HH.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(HH) {
        this.speed = HH
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(HH) {
        let BH = 0,
          LH = this.actions.length - 1;
        for (; BH <= LH;) {
          const AH = Math.floor((BH + LH) / 2);
          if (this.actions[AH].delay < HH.delay) BH = AH + 1;
          else {
            if (!(this.actions[AH].delay > HH.delay)) return AH + 1;
            LH = AH - 1
          }
        }
        return BH
      }
    }

    function ft(HH, BH) {
      if (HH.type === mh.IncrementalSnapshot && HH.data.source === oh.MouseMove && HH.data.positions && HH.data.positions.length) {
        const LH = HH.data.positions[0].timeOffset,
          AH = HH.timestamp + LH;
        return HH.delay = AH - BH, AH - BH
      }
      return HH.delay = HH.timestamp - BH, HH.delay
    }

    function lt(HH, BH) {
      var LH = "function" == typeof Symbol && HH[Symbol.iterator];
      if (!LH) return HH;
      var AH, rH, SH = LH.call(HH),
        hH = [];
      try {
        for (;
          (void 0 === BH || BH-- > 0) && !(AH = SH.next()).done;) hH.push(AH.value)
      } catch (tH) {
        rH = {
          error: tH
        }
      } finally {
        try {
          AH && !AH.done && (LH = SH.return) && LH.call(SH)
        } finally {
          if (rH) throw rH.error
        }
      }
      return hH
    }
    var Kt, ct;
    (ct = Kt || (Kt = {}))[ct.NotStarted = 0] = "NotStarted", ct[ct.Running = 1] = "Running", ct[ct.Stopped = 2] = "Stopped";
    var et = {
      type: "xstate.init"
    };

    function qt(HH) {
      return void 0 === HH ? [] : [].concat(HH)
    }

    function gt(HH) {
      return {
        type: "xstate.assign",
        assignment: HH
      }
    }

    function Nt(HH, BH) {
      return "string" == typeof(HH = "string" == typeof HH && BH && BH[HH] ? BH[HH] : HH) ? {
        type: HH
      } : "function" == typeof HH ? {
        type: HH.name,
        exec: HH
      } : HH
    }

    function Rt(HH) {
      return function(BH) {
        return HH === BH
      }
    }

    function jt(HH) {
      return "string" == typeof HH ? {
        type: HH
      } : HH
    }

    function nt(HH, BH) {
      return {
        value: HH,
        context: BH,
        actions: [],
        changed: !1,
        matches: Rt(HH)
      }
    }

    function Ft(HH, BH, LH) {
      var AH = BH,
        rH = !1;
      return [HH.filter((function(HH) {
        if ("xstate.assign" === HH.type) {
          rH = !0;
          var BH = Object.assign({}, AH);
          return "function" == typeof HH.assignment ? BH = HH.assignment(AH, LH) : Object.keys(HH.assignment).forEach((function(rH) {
            BH[rH] = "function" == typeof HH.assignment[rH] ? HH.assignment[rH](AH, LH) : HH.assignment[rH]
          })), AH = BH, !1
        }
        return !0
      })), AH, rH]
    }

    function Dt(HH, BH) {
      void 0 === BH && (BH = {});
      var LH = lt(Ft(qt(HH.states[HH.initial].entry).map((function(HH) {
          return Nt(HH, BH.actions)
        })), HH.context, et), 2),
        AH = LH[0],
        rH = LH[1],
        SH = {
          config: HH,
          _options: BH,
          initialState: {
            value: HH.initial,
            actions: AH,
            context: rH,
            matches: Rt(HH.initial)
          },
          transition: function(BH, LH) {
            var AH, rH, hH = "string" == typeof BH ? {
                value: BH,
                context: HH.context
              } : BH,
              tH = hH.value,
              zH = hH.context,
              CH = jt(LH),
              EH = HH.states[tH];
            if (EH.on) {
              var XH = qt(EH.on[CH.type]);
              try {
                for (var GH = function(HH) {
                    var BH = "function" == typeof Symbol && Symbol.iterator,
                      LH = BH && HH[BH],
                      AH = 0;
                    if (LH) return LH.call(HH);
                    if (HH && "number" == typeof HH.length) return {
                      next: function() {
                        return HH && AH >= HH.length && (HH = void 0), {
                          value: HH && HH[AH++],
                          done: !HH
                        }
                      }
                    };
                    throw new TypeError(BH ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(XH), YH = GH.next(); !YH.done; YH = GH.next()) {
                  var uH = YH.value;
                  if (void 0 === uH) return nt(tH, zH);
                  var QH = "string" == typeof uH ? {
                      target: uH
                    } : uH,
                    WH = QH.target,
                    MH = QH.actions,
                    xH = void 0 === MH ? [] : MH,
                    vH = QH.cond,
                    PH = void 0 === vH ? function() {
                      return !0
                    } : vH,
                    TH = void 0 === WH,
                    UH = null != WH ? WH : tH,
                    VH = HH.states[UH];
                  if (PH(zH, CH)) {
                    var OH = lt(Ft((TH ? qt(xH) : [].concat(EH.exit, xH, VH.entry).filter((function(HH) {
                        return HH
                      }))).map((function(HH) {
                        return Nt(HH, SH._options.actions)
                      })), zH, CH), 3),
                      bH = OH[0],
                      kH = OH[1],
                      mH = OH[2],
                      oH = null != WH ? WH : tH;
                    return {
                      value: oH,
                      context: kH,
                      actions: bH,
                      changed: WH !== tH || bH.length > 0 || mH,
                      matches: Rt(oH)
                    }
                  }
                }
              } catch (ct) {
                AH = {
                  error: ct
                }
              } finally {
                try {
                  YH && !YH.done && (rH = GH.return) && rH.call(GH)
                } finally {
                  if (AH) throw AH.error
                }
              }
            }
            return nt(tH, zH)
          }
        };
      return SH
    }
    var wt = function(HH, BH) {
      return HH.actions.forEach((function(LH) {
        var AH = LH.exec;
        return AH && AH(HH.context, BH)
      }))
    };

    function Zt(HH) {
      var BH = HH.initialState,
        LH = Kt.NotStarted,
        AH = new Set,
        rH = {
          _machine: HH,
          send: function(rH) {
            LH === Kt.Running && (BH = HH.transition(BH, rH), wt(BH, jt(rH)), AH.forEach((function(HH) {
              return HH(BH)
            })))
          },
          subscribe: function(HH) {
            return AH.add(HH), HH(BH), {
              unsubscribe: function() {
                return AH.delete(HH)
              }
            }
          },
          start: function(AH) {
            if (AH) {
              var SH = "object" == typeof AH ? AH : {
                context: HH.config.context,
                value: AH
              };
              BH = {
                value: SH.value,
                actions: [],
                context: SH.context,
                matches: Rt(SH.value)
              }
            }
            return LH = Kt.Running, wt(BH, et), rH
          },
          stop: function() {
            return LH = Kt.Stopped, AH.clear(), rH
          },
          get state() {
            return BH
          },
          get status() {
            return LH
          }
        };
      return rH
    }

    function dt(HH, BH) {
      let {
        getCastFn: LH,
        applyEventsSynchronously: AH,
        emitter: rH
      } = BH;
      return Zt(Dt({
        id: "player",
        context: HH,
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
          castEvent: gt({
            lastPlayedEvent: (HH, BH) => "CAST_EVENT" === BH.type ? BH.payload.event : HH.lastPlayedEvent
          }),
          recordTimeOffset: gt(((HH, BH) => {
            let LH = HH.timeOffset;
            return "payload" in BH && "timeOffset" in BH.payload && (LH = BH.payload.timeOffset), {
              ...HH,
              timeOffset: LH,
              baselineTime: HH.events[0].timestamp + LH
            }
          })),
          play(HH) {
            var BH;
            const {
              timer: SH,
              events: hH,
              baselineTime: tH,
              lastPlayedEvent: zH
            } = HH;
            SH.clear();
            for (const LH of hH) ft(LH, tH);
            const CH = function(HH, BH) {
              for (let LH = HH.length - 1; LH >= 0; LH--) {
                const AH = HH[LH];
                if (AH.type === mh.Meta && AH.timestamp <= BH) return HH.slice(LH)
              }
              return HH
            }(hH, tH);
            let EH = null == zH ? void 0 : zH.timestamp;
            (null == zH ? void 0 : zH.type) === mh.IncrementalSnapshot && zH.data.source === oh.MouseMove && (EH = zH.timestamp + (null == (BH = zH.data.positions[0]) ? void 0 : BH.timeOffset)), tH < (EH || 0) && rH.emit(ch.PlayBack);
            const XH = new Array;
            for (const AH of CH)
              if (!(EH && EH < tH && (AH.timestamp <= EH || AH === zH)))
                if (AH.timestamp < tH) XH.push(AH);
                else {
                  const HH = LH(AH, !1);
                  SH.addAction({
                    doAction: () => {
                      HH()
                    },
                    delay: AH.delay
                  })
                } AH(XH), rH.emit(ch.Flush), SH.start()
          },
          pause(HH) {
            HH.timer.clear()
          },
          resetLastPlayedEvent: gt((HH => ({
            ...HH,
            lastPlayedEvent: null
          }))),
          startLive: gt({
            baselineTime: (HH, BH) => (HH.timer.start(), "TO_LIVE" === BH.type && BH.payload.baselineTime ? BH.payload.baselineTime : Date.now())
          }),
          addEvent: gt(((HH, BH) => {
            const {
              baselineTime: AH,
              timer: rH,
              events: SH
            } = HH;
            if ("ADD_EVENT" === BH.type) {
              const {
                event: HH
              } = BH.payload;
              ft(HH, AH);
              let hH = SH.length - 1;
              if (!SH[hH] || SH[hH].timestamp <= HH.timestamp) SH.push(HH);
              else {
                let BH = -1,
                  LH = 0;
                for (; LH <= hH;) {
                  const BH = Math.floor((LH + hH) / 2);
                  SH[BH].timestamp <= HH.timestamp ? LH = BH + 1 : hH = BH - 1
                } - 1 === BH && (BH = LH), SH.splice(BH, 0, HH)
              }
              const tH = HH.timestamp < AH,
                zH = LH(HH, tH);
              tH ? zH() : rH.isActive() && rH.addAction({
                doAction: () => {
                  zH()
                },
                delay: HH.delay
              })
            }
            return {
              ...HH,
              events: SH
            }
          }))
        }
      }))
    }
    const st = new Map;

    function Jt(HH, BH) {
      let LH = st.get(HH);
      return LH || (LH = new Map, st.set(HH, LH)), LH.has(BH) || LH.set(BH, []), LH.get(BH)
    }

    function it(HH, BH, LH) {
      return async AH => {
        if (AH && "object" === typeof AH && "rr_type" in AH) {
          if (LH && (LH.isUnchanged = !1), "ImageBitmap" === AH.rr_type && "args" in AH) {
            const rH = await it(HH, BH, LH)(AH.args);
            return await createImageBitmap.apply(null, rH)
          }
          if ("index" in AH) {
            if (LH || null === BH) return AH;
            const {
              rr_type: HH,
              index: rH
            } = AH;
            return Jt(BH, HH)[rH]
          }
          if ("args" in AH) {
            const {
              rr_type: rH,
              args: SH
            } = AH;
            return new(0, window[rH])(...await Promise.all(SH.map(it(HH, BH, LH))))
          }
          if ("base64" in AH) return function(HH) {
            var BH, LH, AH, rH, SH, hH = .75 * HH.length,
              tH = HH.length,
              zH = 0;
            "=" === HH[HH.length - 1] && (hH--, "=" === HH[HH.length - 2] && hH--);
            var CH = new ArrayBuffer(hH),
              EH = new Uint8Array(CH);
            for (BH = 0; BH < tH; BH += 4) LH = tt[HH.charCodeAt(BH)], AH = tt[HH.charCodeAt(BH + 1)], rH = tt[HH.charCodeAt(BH + 2)], SH = tt[HH.charCodeAt(BH + 3)], EH[zH++] = LH << 2 | AH >> 4, EH[zH++] = (15 & AH) << 4 | rH >> 2, EH[zH++] = (3 & rH) << 6 | 63 & SH;
            return CH
          }(AH.base64);
          if ("src" in AH) {
            const BH = HH.get(AH.src);
            if (BH) return BH;
            {
              const BH = new Image;
              return BH.src = AH.src, HH.set(AH.src, BH), BH
            }
          }
          if ("data" in AH && "Blob" === AH.rr_type) {
            const rH = await Promise.all(AH.data.map(it(HH, BH, LH)));
            return new Blob(rH, {
              type: AH.type
            })
          }
        } else if (Array.isArray(AH)) {
          return await Promise.all(AH.map(it(HH, BH, LH)))
        }
        return AH
      }
    }
    const pt = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function yt(HH) {
      let {
        mutation: BH,
        target: LH,
        type: AH,
        imageMap: rH,
        errorHandler: SH
      } = HH;
      try {
        const HH = function(HH, BH) {
          try {
            return BH === lh.WebGL ? HH.getContext("webgl") || HH.getContext("experimental-webgl") : HH.getContext("webgl2")
          } catch (LH) {
            return null
          }
        }(LH, AH);
        if (!HH) return;
        if (BH.setter) return void(HH[BH.property] = BH.args[0]);
        const SH = HH[BH.property],
          hH = await Promise.all(BH.args.map(it(rH, HH)));
        ! function(HH, BH) {
          if (!(null == BH ? void 0 : BH.constructor)) return;
          const {
            name: LH
          } = BH.constructor;
          if (!pt.includes(LH)) return;
          const AH = Jt(HH, LH);
          AH.includes(BH) || AH.push(BH)
        }(HH, SH.apply(HH, hH))
      } catch (hH) {
        SH(BH, hH)
      }
    }
    async function Hz(HH) {
      let {
        event: BH,
        mutation: LH,
        target: AH,
        imageMap: rH,
        canvasEventMap: SH,
        errorHandler: hH
      } = HH;
      try {
        const HH = SH.get(BH) || LH,
          tH = "commands" in HH ? HH.commands : [HH];
        if ([lh.WebGL, lh.WebGL2].includes(LH.type)) {
          for (let HH = 0; HH < tH.length; HH++) {
            const BH = tH[HH];
            await yt({
              mutation: BH,
              type: LH.type,
              target: AH,
              imageMap: rH,
              errorHandler: hH
            })
          }
          return
        }
        await async function(HH) {
          let {
            event: BH,
            mutations: LH,
            target: AH,
            imageMap: rH,
            errorHandler: SH
          } = HH;
          const hH = AH.getContext("2d");
          if (!hH) return void SH(LH[0], new Error("Canvas context is null"));
          const tH = LH.map((async HH => Promise.all(HH.args.map(it(rH, hH)))));
          (await Promise.all(tH)).forEach(((HH, AH) => {
            const tH = LH[AH];
            try {
              if (tH.setter) return void(hH[tH.property] = tH.args[0]);
              const LH = hH[tH.property];
              "drawImage" === tH.property && "string" === typeof tH.args[0] ? (rH.get(BH), LH.apply(hH, tH.args)) : LH.apply(hH, HH)
            } catch (zH) {
              SH(tH, zH)
            }
          }))
        }({
          event: BH,
          mutations: tH,
          target: AH,
          imageMap: rH,
          errorHandler: hH
        })
      } catch (tH) {
        hH(LH, tH)
      }
    }
    class Bz {
      constructor(HH) {
        SH(this, "mediaMap", new Map), SH(this, "warn"), SH(this, "service"), SH(this, "speedService"), SH(this, "emitter"), SH(this, "getCurrentTime"), SH(this, "metadataCallbackMap", new Map), this.warn = HH.warn, this.service = HH.service, this.speedService = HH.speedService, this.emitter = HH.emitter, this.getCurrentTime = HH.getCurrentTime, this.emitter.on(ch.Start, this.start.bind(this)), this.emitter.on(ch.SkipStart, this.start.bind(this)), this.emitter.on(ch.Pause, this.pause.bind(this)), this.emitter.on(ch.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((BH, LH) => {
          this.syncTargetWithState(LH), HH.pause && LH.pause()
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
      seekTo(HH) {
        let {
          time: BH,
          target: LH,
          mediaState: AH
        } = HH;
        if (AH.isPlaying) {
          const HH = (BH - AH.lastInteractionTimeOffset) / 1e3 * AH.playbackRate,
            rH = "duration" in LH && LH.duration;
          if (Number.isNaN(rH)) return void this.waitForMetadata(LH);
          let SH = AH.currentTimeAtLastInteraction + HH;
          LH.loop && !1 !== rH && (SH %= rH), LH.currentTime = SH
        } else LH.pause(), LH.currentTime = AH.currentTimeAtLastInteraction
      }
      waitForMetadata(HH) {
        if (this.metadataCallbackMap.has(HH)) return;
        if (!("addEventListener" in HH)) return;
        const BH = () => {
          this.metadataCallbackMap.delete(HH);
          const BH = this.mediaMap.get(HH);
          BH && this.seekTo({
            time: this.getCurrentTime(),
            target: HH,
            mediaState: BH
          })
        };
        this.metadataCallbackMap.set(HH, BH), HH.addEventListener("loadedmetadata", BH, {
          once: !0
        })
      }
      getMediaStateFromMutation(HH) {
        let {
          target: BH,
          timeOffset: LH,
          mutation: AH
        } = HH;
        const rH = this.mediaMap.get(BH),
          {
            type: SH,
            playbackRate: hH,
            currentTime: tH,
            muted: zH,
            volume: CH,
            loop: EH
          } = AH;
        return {
          isPlaying: SH === Kh.Play || SH !== Kh.Pause && ((null == rH ? void 0 : rH.isPlaying) || null !== BH.getAttribute("autoplay")),
          currentTimeAtLastInteraction: tH ?? (null == rH ? void 0 : rH.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: LH,
          playbackRate: hH ?? (null == rH ? void 0 : rH.playbackRate) ?? 1,
          volume: CH ?? (null == rH ? void 0 : rH.volume) ?? 1,
          muted: zH ?? (null == rH ? void 0 : rH.muted) ?? null === BH.getAttribute("muted"),
          loop: EH ?? (null == rH ? void 0 : rH.loop) ?? null === BH.getAttribute("loop")
        }
      }
      syncTargetWithState(HH) {
        const BH = this.mediaMap.get(HH);
        if (!BH) return;
        const {
          muted: LH,
          loop: AH,
          volume: rH,
          isPlaying: SH
        } = BH, hH = this.service.state.matches("paused"), tH = BH.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: HH,
            mediaState: BH
          }), HH.volume !== rH && (HH.volume = rH), HH.muted = LH, HH.loop = AH, HH.playbackRate !== tH && (HH.playbackRate = tH), SH && !hH ? HH.play() : HH.pause()
        } catch (zH) {
          this.warn(`Failed to replay media interactions: ${zH.message||zH}`)
        }
      }
      addMediaElements(HH, BH, LH) {
        if (!["AUDIO", "VIDEO"].includes(HH.nodeName)) return;
        const AH = HH,
          rH = LH.getMeta(AH);
        if (!rH || !("attributes" in rH)) return;
        const SH = this.service.state.matches("paused"),
          hH = rH.attributes;
        let tH = !1;
        tH = hH.rr_mediaState ? "played" === hH.rr_mediaState : null !== AH.getAttribute("autoplay"), tH && SH && AH.pause();
        let zH = 1;
        "number" === typeof hH.rr_mediaPlaybackRate && (zH = hH.rr_mediaPlaybackRate);
        let CH = !1;
        CH = "boolean" === typeof hH.rr_mediaMuted ? hH.rr_mediaMuted : null !== AH.getAttribute("muted");
        let EH = !1;
        EH = "boolean" === typeof hH.rr_mediaLoop ? hH.rr_mediaLoop : null !== AH.getAttribute("loop");
        let XH = 1;
        "number" === typeof hH.rr_mediaVolume && (XH = hH.rr_mediaVolume);
        let GH = 0;
        "number" === typeof hH.rr_mediaCurrentTime && (GH = hH.rr_mediaCurrentTime), this.mediaMap.set(AH, {
          isPlaying: tH,
          currentTimeAtLastInteraction: GH,
          lastInteractionTimeOffset: BH,
          playbackRate: zH,
          volume: XH,
          muted: CH,
          loop: EH
        }), this.syncTargetWithState(AH)
      }
      mediaMutation(HH) {
        let {
          target: BH,
          timeOffset: LH,
          mutation: AH
        } = HH;
        this.mediaMap.set(BH, this.getMediaStateFromMutation({
          target: BH,
          timeOffset: LH,
          mutation: AH
        })), this.syncTargetWithState(BH)
      }
      isSupportedMediaElement(HH) {
        return ["AUDIO", "VIDEO"].includes(HH.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Lz(HH, BH) {
      if ("DIALOG" !== HH.nodeName || HH instanceof HS) return;
      const LH = HH,
        AH = LH.open,
        rH = AH && LH.matches("dialog:modal"),
        SH = LH.getAttribute("rr_open_mode"),
        hH = "string" === typeof(null == BH ? void 0 : BH.attributes.open) || "string" === typeof LH.getAttribute("open"),
        tH = "modal" === SH;
      AH && !(rH && "non-modal" === SH || !rH && tH) || (LH.isConnected ? (AH && LH.close(), hH && (tH ? LH.showModal() : LH.show())) : console.warn("dialog is not attached to the dom", LH))
    }

    function Az(HH, BH) {
      if ("DIALOG" !== HH.nodeName || HH instanceof HS) return;
      const LH = HH;
      LH.isConnected ? null === BH.attributes.open && (LH.removeAttribute("open"), LH.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", LH)
    }
    const rz = function(HH) {
        return {
          all: HH = HH || new Map,
          on: function(BH, LH) {
            var AH = HH.get(BH);
            AH ? AH.push(LH) : HH.set(BH, [LH])
          },
          off: function(BH, LH) {
            var AH = HH.get(BH);
            AH && (LH ? AH.splice(AH.indexOf(LH) >>> 0, 1) : HH.set(BH, []))
          },
          emit: function(BH, LH) {
            var AH = HH.get(BH);
            AH && AH.slice().map((function(HH) {
              HH(LH)
            })), (AH = HH.get("*")) && AH.slice().map((function(HH) {
              HH(BH, LH)
            }))
          }
        }
      },
      Sz = "[replayer]",
      hz = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function tz(HH) {
      return HH.type == mh.IncrementalSnapshot && (HH.data.source == oh.TouchMove || HH.data.source == oh.MouseInteraction && HH.data.type == Ih.TouchStart)
    }
    class zz {
      constructor(HH, BH) {
        var LH = this;
        if (SH(this, "wrapper"), SH(this, "iframe"), SH(this, "UNSAFE_replayCanvas", !1), SH(this, "service"), SH(this, "speedService"), SH(this, "config"), SH(this, "usingVirtualDom", !1), SH(this, "virtualDom", new US), SH(this, "mouse"), SH(this, "mouseTail", null), SH(this, "tailPositions", []), SH(this, "emitter", rz()), SH(this, "nextUserInteractionEvent"), SH(this, "legacy_missingNodeRetryMap", {}), SH(this, "cache", iL()), SH(this, "imageMap", new Map), SH(this, "canvasEventMap", new Map), SH(this, "mirror", kH()), SH(this, "styleMirror", new Uh), SH(this, "mediaManager"), SH(this, "firstFullSnapshot", null), SH(this, "newDocumentQueue", []), SH(this, "mousePos", null), SH(this, "touchActive", null), SH(this, "lastMouseDownEvent", null), SH(this, "lastHoveredRootNode"), SH(this, "lastSelectionData", null), SH(this, "constructedStyleMutations", []), SH(this, "adoptedStyleSheets", []), SH(this, "handleResize", (HH => {
            this.iframe.style.display = "inherit";
            for (const BH of [this.mouseTail, this.iframe]) BH && (BH.setAttribute("width", String(HH.width)), BH.setAttribute("height", String(HH.height)))
          })), SH(this, "applyEventsSynchronously", (HH => {
            for (const BH of HH) {
              switch (BH.type) {
                case mh.DomContentLoaded:
                case mh.Load:
                  continue;
                case mh.FullSnapshot:
                case mh.Meta:
                case mh.Plugin:
                case mh.IncrementalSnapshot:
              }
              this.getCastFn(BH, !0)()
            }
          })), SH(this, "getCastFn", (function(HH) {
            let BH, AH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (HH.type) {
              case mh.DomContentLoaded:
              case mh.Load:
                break;
              case mh.Custom:
                BH = () => {
                  LH.emitter.emit(ch.CustomEvent, HH)
                };
                break;
              case mh.Meta:
                BH = () => LH.emitter.emit(ch.Resize, {
                  width: HH.data.width,
                  height: HH.data.height
                });
                break;
              case mh.FullSnapshot:
                BH = () => {
                  var BH;
                  if (LH.firstFullSnapshot) {
                    if (LH.firstFullSnapshot === HH) return void(LH.firstFullSnapshot = !0)
                  } else LH.firstFullSnapshot = !0;
                  LH.mediaManager.reset(), LH.styleMirror.reset(), LH.rebuildFullSnapshot(HH, AH), null == (BH = LH.iframe.contentWindow) || BH.scrollTo(HH.data.initialOffset)
                };
                break;
              case mh.IncrementalSnapshot:
                BH = () => {
                  if (LH.applyIncremental(HH, AH), !AH && (HH === LH.nextUserInteractionEvent && (LH.nextUserInteractionEvent = null, LH.backToNormal()), LH.config.skipInactive && !LH.nextUserInteractionEvent)) {
                    for (const BH of LH.service.state.context.events)
                      if (!(BH.timestamp <= HH.timestamp) && LH.isUserInteraction(BH)) {
                        BH.delay - HH.delay > LH.config.inactivePeriodThreshold * LH.speedService.state.context.timer.speed && (LH.nextUserInteractionEvent = BH);
                        break
                      } if (LH.nextUserInteractionEvent) {
                      const BH = LH.nextUserInteractionEvent.delay - HH.delay,
                        AH = {
                          speed: Math.min(Math.round(BH / 5e3), LH.config.maxSpeed)
                        };
                      LH.speedService.send({
                        type: "FAST_FORWARD",
                        payload: AH
                      }), LH.emitter.emit(ch.SkipStart, AH)
                    }
                  }
                }
            }
            return () => {
              BH && BH();
              for (const BH of LH.config.plugins || []) BH.handler && BH.handler(HH, AH, {
                replayer: LH
              });
              LH.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: HH
                }
              });
              const rH = LH.service.state.context.events.length - 1;
              if (!LH.config.liveMode && HH === LH.service.state.context.events[rH]) {
                const BH = () => {
                  rH < LH.service.state.context.events.length - 1 || (LH.backToNormal(), LH.service.send("END"), LH.emitter.emit(ch.Finish))
                };
                let AH = 50;
                HH.type === mh.IncrementalSnapshot && HH.data.source === oh.MouseMove && HH.data.positions.length && (AH += Math.max(0, -HH.data.positions[0].timeOffset)), setTimeout(BH, AH)
              }
              LH.emitter.emit(ch.EventCast, HH)
            }
          })), !(null == BH ? void 0 : BH.liveMode) && HH.length < 2) throw new Error("Replayer need at least 2 events.");
        const AH = {
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
          mouseTail: hz,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, AH, BH), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(ch.Resize, this.handleResize), this.setupDom();
        for (const SH of this.config.plugins || []) SH.getMirror && SH.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(ch.Flush, (() => {
          if (this.usingVirtualDom) {
            const LH = {
              mirror: this.mirror,
              applyCanvas: (HH, BH, LH) => {
                Hz({
                  event: HH,
                  mutation: BH,
                  target: LH,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (HH, BH) => {
                HH.source === oh.StyleSheetRule ? this.applyStyleSheetRule(HH, BH) : HH.source === oh.StyleDeclaration && this.applyStyleDeclaration(HH, BH)
              },
              afterAppend: (HH, BH) => {
                for (const LH of this.config.plugins || []) LH.onBuild && LH.onBuild(HH, {
                  id: BH,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              MS(this.iframe.contentDocument, this.virtualDom, LH, this.virtualDom.mirror)
            } catch (HH) {
              this.warn(HH)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const HH in this.legacy_missingNodeRetryMap) try {
                const BH = this.legacy_missingNodeRetryMap[HH],
                  AH = vS(BH.node, this.mirror, this.virtualDom.mirror);
                MS(AH, BH.node, LH, this.virtualDom.mirror), BH.node = AH
              } catch (BH) {
                this.warn(BH)
              }
            this.constructedStyleMutations.forEach((HH => {
              this.applyStyleSheetMutation(HH)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((HH => {
              this.applyAdoptedStyleSheet(HH)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [HH, BH] = this.lastMouseDownEvent;
            HH.dispatchEvent(BH)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(ch.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const rH = new It([], {
          speed: this.config.speed
        });
        this.service = dt({
          events: HH.map((HH => BH && BH.unpackFn ? BH.unpackFn(HH) : HH)).sort(((HH, BH) => HH.timestamp - BH.timestamp)),
          timer: rH,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((HH => {
          this.emitter.emit(ch.StateChange, {
            player: HH
          })
        })), this.speedService = Zt(Dt({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: rH
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
            setSpeed: (HH, BH) => {
              "payload" in BH && HH.timer.setSpeed(BH.payload.speed)
            },
            recordSpeed: gt({
              normalSpeed: HH => HH.timer.speed
            }),
            restoreSpeed: HH => {
              HH.timer.setSpeed(HH.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((HH => {
          this.emitter.emit(ch.StateChange, {
            speed: HH
          })
        })), this.mediaManager = new Bz({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const hH = this.service.state.context.events.find((HH => HH.type === mh.Meta)),
          tH = this.service.state.context.events.find((HH => HH.type === mh.FullSnapshot));
        if (hH) {
          const {
            width: HH,
            height: BH
          } = hH.data;
          setTimeout((() => {
            this.emitter.emit(ch.Resize, {
              width: HH,
              height: BH
            })
          }), 0)
        }
        tH && setTimeout((() => {
          var HH;
          this.firstFullSnapshot || (this.firstFullSnapshot = tH, this.rebuildFullSnapshot(tH), null == (HH = this.iframe.contentWindow) || HH.scrollTo(tH.data.initialOffset))
        }), 1), this.service.state.context.events.find(tz) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(HH, BH) {
        return this.emitter.on(HH, BH), this
      }
      off(HH, BH) {
        return this.emitter.off(HH, BH), this
      }
      setConfig(HH) {
        Object.keys(HH).forEach((BH => {
          HH[BH], this.config[BH] = HH[BH]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof HH.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: HH.speed
          }
        }), "undefined" !== typeof HH.mouseTail && (!1 === HH.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const HH = this.service.state.context.events[0],
          BH = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: HH.timestamp,
          endTime: BH.timestamp,
          totalTime: BH.timestamp - HH.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: HH,
          events: BH
        } = this.service.state.context;
        return HH - BH[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var BH, LH;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: HH
          }
        }), null == (LH = null == (BH = this.iframe.contentDocument) ? void 0 : BH.getElementsByTagName("html")[0]) || LH.classList.remove("rrweb-paused"), this.emitter.emit(ch.Start)
      }
      pause(HH) {
        var BH, LH;
        void 0 === HH && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof HH && (this.play(HH), this.service.send({
          type: "PAUSE"
        })), null == (LH = null == (BH = this.iframe.contentDocument) ? void 0 : BH.getElementsByTagName("html")[0]) || LH.classList.add("rrweb-paused"), this.emitter.emit(ch.Pause)
      }
      resume() {
        let HH = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(HH), this.emitter.emit(ch.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(ch.Destroy)
      }
      startLive(HH) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: HH
          }
        })
      }
      addEvent(HH) {
        const BH = this.config.unpackFn ? this.config.unpackFn(HH) : HH;
        tz(BH) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: BH
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
        this.cache = iL()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(HH) {
          var BH;
          if (!HH.root.isConnected) throw new Error(pL);
          const LH = HH.root.ownerDocument.createElement("iframe");
          for (const [rH, SH] of Object.entries(HH.iframeAttributes || {})) "sandbox" !== rH && LH.setAttribute(rH, SH);
          LH.setAttribute("sandbox", "allow-same-origin"), HH.root.appendChild(LH);
          const AH = LH.contentDocument;
          if (!AH || !LH.contentWindow) throw null == (BH = LH.parentNode) || BH.removeChild(LH), new Error(pL);
          return yL.add(AH), LH
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (ot(this.iframe.contentWindow, this.iframe.contentDocument), Gh(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(HH) {
        let BH = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const LH = [],
          AH = new Set,
          rH = (BH, rH) => {
            if ("DIALOG" === BH.nodeName && AH.add(BH), this.collectIframeAndAttachDocument(LH, BH), this.mediaManager.isSupportedMediaElement(BH)) {
              const {
                events: LH
              } = this.service.state.context;
              this.mediaManager.addMediaElements(BH, HH.timestamp - LH[0].timestamp, this.mirror)
            }
            for (const HH of this.config.plugins || []) HH.onBuild && HH.onBuild(BH, {
              id: rH,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), rA(HH.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: rH,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), rH(this.iframe.contentDocument, HH.data.node.id);
        for (const {
            mutationInQueue: tH,
            builtNode: zH
          }
          of LH) this.attachDocumentToIframe(tH, zH), this.newDocumentQueue = this.newDocumentQueue.filter((HH => HH !== tH));
        const {
          documentElement: SH,
          head: hH
        } = this.iframe.contentDocument;
        this.insertStyleRules(SH, hH), AH.forEach((HH => Lz(HH))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(ch.FullsnapshotRebuilded, HH), BH || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(HH, BH) {
        var LH;
        const AH = (rH = this.config.blockClass, [`.${rH} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var rH;
        if (this.config.pauseAnimation && AH.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), AH.length)
          if (this.usingVirtualDom) {
            const LH = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(LH, gS(LH, this.virtualDom.unserializedId)), HH.insertBefore(LH, BH), LH.rules.push({
              source: oh.StyleSheetRule,
              adds: AH.map(((HH, BH) => ({
                rule: HH,
                index: BH
              })))
            })
          } else {
            const rH = document.createElement("style");
            HH.insertBefore(rH, BH);
            for (let HH = 0; HH < AH.length; HH++) null == (LH = rH.sheet) || LH.insertRule(AH[HH], HH)
          }
      }
      attachDocumentToIframe(HH, BH) {
        const LH = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          AH = [],
          rH = new Set,
          SH = (HH, SH) => {
            "DIALOG" === HH.nodeName && rH.add(HH), this.collectIframeAndAttachDocument(AH, HH);
            const hH = LH.getMeta(HH);
            if ((null == hH ? void 0 : hH.type) === eh.Element && "HTML" === (null == hH ? void 0 : hH.tagName.toUpperCase())) {
              const {
                documentElement: HH,
                head: LH
              } = BH.contentDocument;
              this.insertStyleRules(HH, LH)
            }
            if (!this.usingVirtualDom)
              for (const BH of this.config.plugins || []) BH.onBuild && BH.onBuild(HH, {
                id: SH,
                replayer: this
              })
          };
        AA(HH.node, {
          doc: BH.contentDocument,
          mirror: LH,
          hackCss: !0,
          skipChild: !1,
          afterAppend: SH,
          cache: this.cache
        }), SH(BH.contentDocument, HH.node.id);
        for (const {
            mutationInQueue: hH,
            builtNode: tH
          }
          of AH) this.attachDocumentToIframe(hH, tH), this.newDocumentQueue = this.newDocumentQueue.filter((HH => HH !== hH));
        rH.forEach((HH => Lz(HH)))
      }
      collectIframeAndAttachDocument(HH, BH) {
        if (Qh(BH, this.mirror)) {
          const LH = this.newDocumentQueue.find((HH => HH.parentId === this.mirror.getId(BH)));
          LH && HH.push({
            mutationInQueue: LH,
            builtNode: BH
          })
        }
      }
      waitForStylesheetLoad() {
        var HH;
        const BH = null == (HH = this.iframe.contentDocument) ? void 0 : HH.head;
        if (BH) {
          const HH = new Set;
          let LH, AH = this.service.state;
          const rH = () => {
            AH = this.service.state
          };
          this.emitter.on(ch.Start, rH), this.emitter.on(ch.Pause, rH);
          const SH = () => {
            this.emitter.off(ch.Start, rH), this.emitter.off(ch.Pause, rH)
          };
          BH.querySelectorAll('link[rel="stylesheet"]').forEach((BH => {
            BH.sheet || (HH.add(BH), BH.addEventListener("load", (() => {
              HH.delete(BH), 0 === HH.size && -1 !== LH && (AH.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(ch.LoadStylesheetEnd), LH && clearTimeout(LH), SH())
            })))
          })), HH.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(ch.LoadStylesheetStart), LH = setTimeout((() => {
            AH.matches("playing") && this.play(this.getCurrentTime()), LH = -1, SH()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const HH = [];
        for (const BH of this.service.state.context.events)
          if (BH.type === mh.IncrementalSnapshot && BH.data.source === oh.CanvasMutation) {
            HH.push(this.deserializeAndPreloadCanvasEvents(BH.data, BH));
            ("commands" in BH.data ? BH.data.commands : [BH.data]).forEach((HH => {
              this.preloadImages(HH, BH)
            }))
          } return Promise.all(HH)
      }
      preloadImages(HH, BH) {
        if ("drawImage" === HH.property && "string" === typeof HH.args[0] && !this.imageMap.has(BH)) {
          const HH = document.createElement("canvas"),
            BH = HH.getContext("2d"),
            LH = null == BH ? void 0 : BH.createImageData(HH.width, HH.height);
          null == BH || BH.putImageData(LH, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(HH, BH) {
        if (!this.canvasEventMap.has(BH)) {
          const LH = {
            isUnchanged: !0
          };
          if ("commands" in HH) {
            const AH = await Promise.all(HH.commands.map((async HH => {
              const BH = await Promise.all(HH.args.map(it(this.imageMap, null, LH)));
              return {
                ...HH,
                args: BH
              }
            })));
            !1 === LH.isUnchanged && this.canvasEventMap.set(BH, {
              ...HH,
              commands: AH
            })
          } else {
            const AH = await Promise.all(HH.args.map(it(this.imageMap, null, LH)));
            !1 === LH.isUnchanged && this.canvasEventMap.set(BH, {
              ...HH,
              args: AH
            })
          }
        }
      }
      applyIncremental(HH, BH) {
        var LH, AH, rH;
        const {
          data: SH
        } = HH;
        switch (SH.source) {
          case oh.Mutation:
            try {
              this.applyMutation(SH, BH)
            } catch (hH) {
              this.warn(`Exception in mutation ${hH.message||hH}`, SH)
            }
            break;
          case oh.Drag:
          case oh.TouchMove:
          case oh.MouseMove:
            if (BH) {
              const HH = SH.positions[SH.positions.length - 1];
              this.mousePos = {
                x: HH.x,
                y: HH.y,
                id: HH.id,
                debugData: SH
              }
            } else SH.positions.forEach((LH => {
              const AH = {
                doAction: () => {
                  this.moveAndHover(LH.x, LH.y, LH.id, BH, SH)
                },
                delay: LH.timeOffset + HH.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(AH)
            })), this.timer.addAction({
              doAction() {},
              delay: HH.delay - (null == (LH = SH.positions[0]) ? void 0 : LH.timeOffset)
            });
            break;
          case oh.MouseInteraction: {
            if (-1 === SH.id) break;
            const HH = new Event(oH(Ih[SH.type])),
              LH = this.mirror.yAH(SH.id);
            if (!LH) return this.debugNodeNotFound(SH, SH.id);
            this.emitter.emit(ch.MouseInteraction, {
              type: SH.type,
              target: LH
            });
            const {
              triggerFocus: AH
            } = this.config;
            switch (SH.type) {
              case Ih.Blur:
                "blur" in LH && LH.blur();
                break;
              case Ih.Focus:
                AH && LH.focus && LH.focus({
                  preventScroll: !0
                });
                break;
              case Ih.Click:
              case Ih.TouchStart:
              case Ih.TouchEnd:
              case Ih.MouseDown:
              case Ih.MouseUp:
                BH ? (SH.type === Ih.TouchStart ? this.touchActive = !0 : SH.type === Ih.TouchEnd && (this.touchActive = !1), SH.type === Ih.MouseDown ? this.lastMouseDownEvent = [LH, HH] : SH.type === Ih.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: SH.x || 0,
                  y: SH.y || 0,
                  id: SH.id,
                  debugData: SH
                }) : (SH.type === Ih.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(SH.x || 0, SH.y || 0, SH.id, BH, SH), SH.type === Ih.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : SH.type === Ih.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : SH.type === Ih.TouchEnd ? this.mouse.classList.remove("touch-active") : LH.dispatchEvent(HH));
                break;
              case Ih.TouchCancel:
                BH ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                LH.dispatchEvent(HH)
            }
            break
          }
          case oh.Scroll:
            if (-1 === SH.id) break;
            if (this.usingVirtualDom) {
              const HH = this.virtualDom.mirror.yAH(SH.id);
              if (!HH) return this.debugNodeNotFound(SH, SH.id);
              HH.scrollData = SH;
              break
            }
            this.applyScroll(SH, BH);
            break;
          case oh.ViewportResize:
            this.emitter.emit(ch.Resize, {
              width: SH.width,
              height: SH.height
            });
            break;
          case oh.Input:
            if (-1 === SH.id) break;
            if (this.usingVirtualDom) {
              const HH = this.virtualDom.mirror.yAH(SH.id);
              if (!HH) return this.debugNodeNotFound(SH, SH.id);
              HH.inputData = SH;
              break
            }
            this.applyInput(SH);
            break;
          case oh.MediaInteraction: {
            const BH = this.usingVirtualDom ? this.virtualDom.mirror.yAH(SH.id) : this.mirror.yAH(SH.id);
            if (!BH) return this.debugNodeNotFound(SH, SH.id);
            const LH = BH,
              {
                events: AH
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: LH,
              timeOffset: HH.timestamp - AH[0].timestamp,
              mutation: SH
            });
            break
          }
          case oh.StyleSheetRule:
          case oh.StyleDeclaration:
            this.usingVirtualDom ? SH.styleId ? this.constructedStyleMutations.push(SH) : SH.id && (null == (AH = this.virtualDom.mirror.yAH(SH.id)) || AH.rules.push(SH)) : this.applyStyleSheetMutation(SH);
            break;
          case oh.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const BH = this.virtualDom.mirror.yAH(SH.id);
              if (!BH) return this.debugNodeNotFound(SH, SH.id);
              BH.canvasMutations.push({
                event: HH,
                mutation: SH
              })
            } else {
              const BH = this.mirror.yAH(SH.id);
              if (!BH) return this.debugNodeNotFound(SH, SH.id);
              Hz({
                event: HH,
                mutation: SH,
                target: BH,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case oh.Font:
            try {
              const HH = new FontFace(SH.family, SH.buffer ? new Uint8Array(JSON.parse(SH.fontSource)) : SH.fontSource, SH.descriptors);
              null == (rH = this.iframe.contentDocument) || rH.fonts.add(HH)
            } catch (hH) {
              this.warn(hH)
            }
            break;
          case oh.Selection:
            if (BH) {
              this.lastSelectionData = SH;
              break
            }
            this.applySelection(SH);
            break;
          case oh.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(SH) : this.applyAdoptedStyleSheet(SH)
        }
      }
      applyMutation(HH, BH) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && BH && (this.usingVirtualDom = !0, eS(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const zH in this.legacy_missingNodeRetryMap) try {
            const HH = this.legacy_missingNodeRetryMap[zH],
              BH = cS(HH.node, this.virtualDom, this.mirror);
            BH && (HH.node = BH)
          } catch (tH) {
            this.warn(tH)
          }
        const LH = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        HH.removes = HH.removes.filter((BH => !!LH.yAH(BH.id) || (this.warnNodeNotFound(HH, BH.id), !1))), HH.removes.forEach((BH => {
          var AH;
          const rH = LH.yAH(BH.id);
          if (!rH) return;
          let SH = LH.yAH(BH.parentId);
          if (!SH) return this.warnNodeNotFound(HH, BH.parentId);
          if (BH.isShadow && xh(SH) && (SH = SH.shadowRoot), LH.removeNodeFromMap(rH), SH) try {
            SH.removeChild(rH), this.usingVirtualDom && "#text" === rH.nodeName && "STYLE" === SH.nodeName && (null == (AH = SH.rules) ? void 0 : AH.length) > 0 && (SH.rules = [])
          } catch (tH) {
            if (!(tH instanceof DOMException)) throw tH;
            this.warn("parent could not remove child in mutation", SH, rH, HH)
          }
        }));
        const AH = {
            ...this.legacy_missingNodeRetryMap
          },
          rH = [],
          SH = HH => {
            var BH, SH;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let hH = LH.yAH(HH.parentId);
            if (!hH) return HH.node.type === eh.Document ? this.newDocumentQueue.push(HH) : rH.push(HH);
            HH.node.isShadow && (xh(hH) || hH.attachShadow({
              mode: "open"
            }), hH = hH.shadowRoot);
            let tH = null,
              zH = null;
            if (HH.previousId && (tH = LH.yAH(HH.previousId)), HH.nextId && (zH = LH.yAH(HH.nextId)), (HH => {
                let BH = null;
                return HH.nextId && (BH = LH.yAH(HH.nextId)), null !== HH.nextId && void 0 !== HH.nextId && -1 !== HH.nextId && !BH
              })(HH)) return rH.push(HH);
            if (HH.node.rootId && !LH.yAH(HH.node.rootId)) return;
            const CH = HH.node.rootId ? LH.yAH(HH.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (Qh(hH, LH)) return void this.attachDocumentToIframe(HH, hH);
            const EH = (HH, BH) => {
                if (!this.usingVirtualDom) {
                  Lz(HH);
                  for (const LH of this.config.plugins || []) LH.onBuild && LH.onBuild(HH, {
                    id: BH,
                    replayer: this
                  })
                }
              },
              XH = AA(HH.node, {
                doc: CH,
                mirror: LH,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: EH
              });
            if (-1 === HH.previousId || -1 === HH.nextId) return void(AH[HH.node.id] = {
              node: XH,
              mutation: HH
            });
            const GH = LH.getMeta(hH);
            if (GH && GH.type === eh.Element && HH.node.type === eh.Text) {
              const HH = Array.isArray(hH.childNodes) ? hH.childNodes : Array.from(hH.childNodes);
              if ("textarea" === GH.tagName)
                for (const BH of HH) BH.nodeType === hH.TEXT_NODE && hH.removeChild(BH);
              else if ("style" === GH.tagName && 1 === HH.length)
                for (const BH of HH) BH.nodeType !== hH.TEXT_NODE || LH.hasNode(BH) || (XH.textContent = BH.textContent, hH.removeChild(BH))
            } else if ((null == GH ? void 0 : GH.type) === eh.Document) {
              const LH = hH;
              HH.node.type === eh.DocumentType && (null == (BH = LH.childNodes[0]) ? void 0 : BH.nodeType) === Node.DOCUMENT_TYPE_NODE && LH.removeChild(LH.childNodes[0]), "HTML" === XH.nodeName && LH.documentElement && LH.removeChild(LH.documentElement)
            }
            if (tH && tH.nextSibling && tH.nextSibling.parentNode ? hH.insertBefore(XH, tH.nextSibling) : zH && zH.parentNode ? hH.contains(zH) ? hH.insertBefore(XH, zH) : hH.insertBefore(XH, null) : hH.appendChild(XH), EH(XH, HH.node.id), this.usingVirtualDom && "#text" === XH.nodeName && "STYLE" === hH.nodeName && (null == (SH = hH.rules) ? void 0 : SH.length) > 0 && (hH.rules = []), Qh(XH, this.mirror)) {
              const HH = this.mirror.getId(XH),
                BH = this.newDocumentQueue.find((BH => BH.parentId === HH));
              BH && (this.attachDocumentToIframe(BH, XH), this.newDocumentQueue = this.newDocumentQueue.filter((HH => HH !== BH)))
            }(HH.previousId || HH.nextId) && this.legacy_resolveMissingNode(AH, hH, XH, HH)
          };
        HH.adds.forEach((HH => {
          SH(HH)
        }));
        const hH = Date.now();
        for (; rH.length;) {
          const HH = Yh(rH);
          if (rH.length = 0, Date.now() - hH > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", HH);
            break
          }
          for (const BH of HH) {
            LH.yAH(BH.value.parentId) ? uh(BH, (HH => {
              SH(HH)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", BH)
          }
        }
        Object.keys(AH).length && Object.assign(this.legacy_missingNodeRetryMap, AH), Th(HH.texts).forEach((BH => {
          var AH;
          const rH = LH.yAH(BH.id);
          if (!rH) {
            if (HH.removes.find((HH => HH.id === BH.id))) return;
            return this.warnNodeNotFound(HH, BH.id)
          }
          const SH = rH.parentElement;
          if (BH.value && SH && "STYLE" === SH.tagName ? rH.textContent = JL(BH.value, this.cache) : rH.textContent = BH.value, this.usingVirtualDom) {
            const HH = rH.parentNode;
            (null == (AH = null == HH ? void 0 : HH.rules) ? void 0 : AH.length) > 0 && (HH.rules = [])
          }
        })), HH.attributes.forEach((BH => {
          var AH;
          const rH = LH.yAH(BH.id);
          if (!rH) {
            if (HH.removes.find((HH => HH.id === BH.id))) return;
            return this.warnNodeNotFound(HH, BH.id)
          }
          for (const HH in BH.attributes)
            if ("string" === typeof HH) {
              const hH = BH.attributes[HH];
              if (null === hH) rH.removeAttribute(HH), "open" === HH && Az(rH, BH);
              else if ("string" === typeof hH) try {
                if ("_cssText" === HH && ("LINK" === rH.nodeName || "STYLE" === rH.nodeName)) try {
                  const HH = LH.getMeta(rH),
                    AH = AA({
                      ...HH,
                      attributes: {
                        ...HH.attributes,
                        ...BH.attributes
                      }
                    }, {
                      doc: rH.ownerDocument,
                      mirror: LH,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(HH.attributes, BH.attributes);
                  const SH = rH.nextSibling,
                    hH = rH.parentNode;
                  if (AH && hH) {
                    hH.removeChild(rH), hH.insertBefore(AH, SH), LH.replace(BH.id, AH);
                    break
                  }
                } catch (SH) {}
                if ("value" === HH && "TEXTAREA" === rH.nodeName) {
                  const HH = rH;
                  HH.childNodes.forEach((BH => HH.removeChild(BH)));
                  const BH = null == (AH = rH.ownerDocument) ? void 0 : AH.createTextNode(hH);
                  BH && HH.appendChild(BH)
                } else rH.setAttribute(HH, hH);
                "rr_open_mode" === HH && "DIALOG" === rH.nodeName && Lz(rH, BH)
              } catch (tH) {
                this.warn("An error occurred may due to the checkout feature.", tH)
              } else if ("style" === HH) {
                const HH = hH,
                  BH = rH;
                for (const LH in HH)
                  if (!1 === HH[LH]) BH.style.removeProperty(LH);
                  else if (HH[LH] instanceof Array) {
                  const AH = HH[LH];
                  BH.style.setProperty(LH, AH[0], AH[1])
                } else {
                  const AH = HH[LH];
                  BH.style.setProperty(LH, AH)
                }
              }
            }
        }))
      }
      applyScroll(HH, BH) {
        var LH, AH;
        const rH = this.mirror.yAH(HH.id);
        if (!rH) return this.debugNodeNotFound(HH, HH.id);
        const SH = this.mirror.getMeta(rH);
        if (rH === this.iframe.contentDocument) null == (LH = this.iframe.contentWindow) || LH.scrollTo({
          top: HH.y,
          left: HH.x,
          behavior: BH ? "auto" : "smooth"
        });
        else if ((null == SH ? void 0 : SH.type) === eh.Document) null == (AH = rH.defaultView) || AH.scrollTo({
          top: HH.y,
          left: HH.x,
          behavior: BH ? "auto" : "smooth"
        });
        else try {
          rH.scrollTo({
            top: HH.y,
            left: HH.x,
            behavior: BH ? "auto" : "smooth"
          })
        } catch (hH) {}
      }
      applyInput(HH) {
        const BH = this.mirror.yAH(HH.id);
        if (!BH) return this.debugNodeNotFound(HH, HH.id);
        try {
          BH.checked = HH.isChecked, BH.value = HH.text
        } catch (LH) {}
      }
      applySelection(HH) {
        try {
          const BH = new Set,
            LH = HH.rW.map((HH => {
              let {
                start: LH,
                startOffset: AH,
                end: rH,
                endOffset: SH
              } = HH;
              const hH = this.mirror.yAH(LH),
                tH = this.mirror.yAH(rH);
              if (!hH || !tH) return;
              const zH = new Range;
              zH.setStart(hH, AH), zH.setEnd(tH, SH);
              const CH = hH.ownerDocument,
                EH = null == CH ? void 0 : CH.getSelection();
              return EH && BH.add(EH), {
                range: zH,
                selection: EH
              }
            }));
          BH.forEach((HH => HH.removeAllRanges())), LH.forEach((HH => {
            var BH;
            return HH && (null == (BH = HH.selection) ? void 0 : BH.addRange(HH.range))
          }))
        } catch (BH) {}
      }
      applyStyleSheetMutation(HH) {
        var BH;
        let LH = null;
        HH.styleId ? LH = this.styleMirror.getStyle(HH.styleId) : HH.id && (LH = (null == (BH = this.mirror.yAH(HH.id)) ? void 0 : BH.sheet) || null), LH && (HH.source === oh.StyleSheetRule ? this.applyStyleSheetRule(HH, LH) : HH.source === oh.StyleDeclaration && this.applyStyleDeclaration(HH, LH))
      }
      applyStyleSheetRule(HH, BH) {
        var LH, AH, rH, SH;
        if (null == (LH = HH.adds) || LH.forEach((HH => {
            let {
              rule: LH,
              index: AH
            } = HH;
            try {
              if (Array.isArray(AH)) {
                const {
                  positions: HH,
                  index: rH
                } = Ph(AH), SH = vh(BH.cssRules, HH);
                null == SH || SH.insertRule(LH, rH)
              } else {
                const HH = void 0 === AH ? void 0 : Math.min(AH, BH.cssRules.length);
                null == BH || BH.insertRule(LH, HH)
              }
            } catch (rH) {}
          })), null == (AH = HH.removes) || AH.forEach((HH => {
            let {
              index: LH
            } = HH;
            try {
              if (Array.isArray(LH)) {
                const {
                  positions: HH,
                  index: AH
                } = Ph(LH), rH = vh(BH.cssRules, HH);
                null == rH || rH.deleteRule(AH || 0)
              } else null == BH || BH.deleteRule(LH)
            } catch (AH) {}
          })), "string" === typeof HH.replace) try {
          null == (rH = BH.replace) || rH.call(BH, HH.replace)
        } catch (hH) {}
        if ("string" === typeof HH.replaceSync) try {
          null == (SH = BH.replaceSync) || SH.call(BH, HH.replaceSync)
        } catch (hH) {}
      }
      applyStyleDeclaration(HH, BH) {
        if (HH.set) {
          const LH = vh(BH.rules, HH.index);
          (null == LH ? void 0 : LH.style) && LH.style.setProperty(HH.set.property, HH.set.value, HH.set.priority)
        }
        if (HH.remove) {
          const LH = vh(BH.rules, HH.index);
          (null == LH ? void 0 : LH.style) && LH.style.removeProperty(HH.remove.property)
        }
      }
      applyAdoptedStyleSheet(HH) {
        var BH;
        const LH = this.mirror.yAH(HH.id);
        if (!LH) return;
        null == (BH = HH.styles) || BH.forEach((HH => {
          var BH;
          let AH = null,
            rH = null;
          if (xh(LH) ? rH = (null == (BH = LH.ownerDocument) ? void 0 : BH.defaultView) || null : "#document" === LH.nodeName && (rH = LH.defaultView), rH) try {
            AH = new rH.CSSStyleSheet, this.styleMirror.add(AH, HH.styleId), this.applyStyleSheetRule({
              source: oh.StyleSheetRule,
              adds: HH.rules
            }, AH)
          } catch (SH) {}
        }));
        let AH = 0;
        const rH = (HH, BH) => {
          const LH = BH.map((HH => this.styleMirror.getStyle(HH))).filter((HH => null !== HH));
          xh(HH) ? HH.shadowRoot.adoptedStyleSheets = LH : "#document" === HH.nodeName && (HH.adoptedStyleSheets = LH), LH.length !== BH.length && AH < 10 && (setTimeout((() => rH(HH, BH)), 0 + 100 * AH), AH++)
        };
        rH(LH, HH.styleIds)
      }
      legacy_resolveMissingNode(HH, BH, LH, AH) {
        const {
          previousId: rH,
          nextId: SH
        } = AH, hH = rH && HH[rH], tH = SH && HH[SH];
        if (hH) {
          const {
            node: AH,
            mutation: rH
          } = hH;
          BH.insertBefore(AH, LH), delete HH[rH.node.id], delete this.legacy_missingNodeRetryMap[rH.node.id], (rH.previousId || rH.nextId) && this.legacy_resolveMissingNode(HH, BH, AH, rH)
        }
        if (tH) {
          const {
            node: AH,
            mutation: rH
          } = tH;
          BH.insertBefore(AH, LH.nextSibling), delete HH[rH.node.id], delete this.legacy_missingNodeRetryMap[rH.node.id], (rH.previousId || rH.nextId) && this.legacy_resolveMissingNode(HH, BH, AH, rH)
        }
      }
      moveAndHover(HH, BH, LH, AH, rH) {
        const SH = this.mirror.yAH(LH);
        if (!SH) return this.debugNodeNotFound(rH, LH);
        const hH = Mh(SH, this.iframe),
          tH = HH * hH.absoluteScale + hH.x,
          zH = BH * hH.absoluteScale + hH.y;
        this.mouse.style.left = `${tH}px`, this.mouse.style.top = `${zH}px`, AH || this.drawMouseTail({
          x: tH,
          y: zH
        }), this.hoverElements(SH)
      }
      drawMouseTail(HH) {
        if (!this.mouseTail) return;
        const {
          lineCap: BH,
          lineWidth: LH,
          strokeStyle: AH,
          duration: rH
        } = !0 === this.config.mouseTail ? hz : Object.assign({}, hz, this.config.mouseTail), SH = () => {
          if (!this.mouseTail) return;
          const HH = this.mouseTail.getContext("2d");
          HH && this.tailPositions.length && (HH.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), HH.beginPath(), HH.lineWidth = LH, HH.lineCap = BH, HH.strokeStyle = AH, HH.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((BH => HH.lineTo(BH.x, BH.y))), HH.stroke())
        };
        this.tailPositions.push(HH), SH(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((BH => BH !== HH)), SH()
        }), rH / this.speedService.state.context.timer.speed)
      }
      hoverElements(HH) {
        var BH;
        null == (BH = this.lastHoveredRootNode || this.iframe.contentDocument) || BH.querySelectorAll(".\\:hover").forEach((HH => {
          HH.classList.remove(":hover")
        })), this.lastHoveredRootNode = HH.getRootNode();
        let LH = HH;
        for (; LH;) LH.classList && LH.classList.add(":hover"), LH = LH.parentElement
      }
      isUserInteraction(HH) {
        return HH.type === mh.IncrementalSnapshot && (HH.data.source > oh.Mutation && HH.data.source <= oh.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(ch.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(HH, BH) {
        this.warn(`Node with id '${BH}' not found. `, HH)
      }
      warnCanvasMutationFailed(HH, BH) {
        this.warn("Has error on canvas update", BH, "canvas mutation:", HH)
      }
      debugNodeNotFound(HH, BH) {
        this.debug(`Node with id '${BH}' not found. `, HH)
      }
      warn() {
        if (this.config.showWarning) {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.config.logger.warn(Sz, ...BH)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var HH = arguments.length, BH = new Array(HH), LH = 0; LH < HH; LH++) BH[LH] = arguments[LH];
          this.config.logger.log(Sz, ...BH)
        }
      }
    }
    const {
      addCustomEvent: Cz
    } = mt, {
      freezePage: Ez
    } = mt, {
      takeFullSnapshot: Xz
    } = mt
  }
};
Object.freeze(modules);
for (const HH in modules) Object.freeze(modules[HH]);