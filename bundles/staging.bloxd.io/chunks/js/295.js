/*! For license information please see u88b9b.295.23b41e25.chunk.js.LICENSE.txt */
export const id = 295;
export const ids = [295];
export const modules = {
  41612: (ee, ie, He) => {
    He.d(ie, {
      c: () => PK,
      d: () => AK,
      e: () => JF
    });
    var ye, be = Object.defineProperty,
      Me = (ee, ie, He) => ((ee, ie, He) => ie in ee ? be(ee, ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: He
      }) : ee[ie] = He)(ee, "symbol" !== typeof ie ? ie + "" : ie, He),
      Ke = Object.defineProperty,
      Ue = (ee, ie, He) => ((ee, ie, He) => ie in ee ? Ke(ee, ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: He
      }) : ee[ie] = He)(ee, "symbol" !== typeof ie ? ie + "" : ie, He),
      Fe = (ee => (ee[ee.Document = 0] = "Document", ee[ee.DocumentType = 1] = "DocumentType", ee[ee.Element = 2] = "Element", ee[ee.Text = 3] = "Text", ee[ee.CDATA = 4] = "CDATA", ee[ee.Comment = 5] = "Comment", ee))(Fe || {});
    const Je = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      oe = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      Re = {},
      ke = {};

    function qe(ee) {
      if (Re[ee]) return Re[ee];
      const ie = globalThis[ee],
        He = ie.prototype,
        ye = ee in Je ? Je[ee] : void 0,
        be = Boolean(ye && ye.every((ee => {
          var ie, ye;
          return Boolean(null == (ye = null == (ie = Object.getOwnPropertyDescriptor(He, ee)) ? void 0 : ie.get) ? void 0 : ye.toString().includes("[native code]"))
        }))),
        Me = ee in oe ? oe[ee] : void 0,
        Ke = Boolean(Me && Me.every((ee => {
          var ie;
          return "function" === typeof He[ee] && (null == (ie = He[ee]) ? void 0 : ie.toString().includes("[native code]"))
        })));
      if (be && Ke && !globalThis.Zone) return Re[ee] = ie.prototype, ie.prototype;
      try {
        const ye = document.createElement("iframe");
        ye.style.display = "none", document.body.appendChild(ye);
        const be = ye.contentWindow;
        if (!be) return ie.prototype;
        const Me = be[ee].prototype;
        if (!Me) return ye.remove(), He;
        const Ke = navigator.userAgent;
        return Ke.includes("Safari") && !Ke.includes("Chrome") ? (ye.classList.add("rr-block"), ye.setAttribute("__rrwebUntaintedMutationObserver", ""), ke[ee] = () => ye.remove()) : ye.remove(), Re[ee] = Me
      } catch {
        return He
      }
    }
    const fe = {};

    function Te(ee, ie, He) {
      var ye, be;
      const Me = null == (ye = fe[ee]) ? void 0 : ye[He];
      if (Me) return Me.call(ie);
      const Ke = qe(ee),
        Ue = null == (be = Object.getOwnPropertyDescriptor(Ke, He)) ? void 0 : be.get;
      return Ue ? ((fe[ee] || (fe[ee] = {}))[He] = Ue, Ue.call(ie)) : ie[He]
    }
    const pe = {};

    function Xe(ee, ie, He) {
      const ye = `${ee}.${String(He)}`;
      if (pe[ye]) return pe[ye].bind(ie);
      const be = qe(ee)[He];
      return "function" !== typeof be ? ie[He] : (pe[ye] = be, be.bind(ie))
    }
    let ze = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (ze = () => (new Date).getTime());
    const Be = {
      ownerDocument: function(ee) {
        return Te("Node", ee, "ownerDocument")
      },
      childNodes: function(ee) {
        return Te("Node", ee, "childNodes")
      },
      parentNode: function(ee) {
        return Te("Node", ee, "parentNode")
      },
      parentElement: function(ee) {
        return Te("Node", ee, "parentElement")
      },
      textContent: function(ee) {
        return Te("Node", ee, "textContent")
      },
      firstChild: function(ee) {
        return Te("Node", ee, "firstChild")
      },
      lastChild: function(ee) {
        return Te("Node", ee, "lastChild")
      },
      nextSibling: function(ee) {
        return Te("Node", ee, "nextSibling")
      },
      previousSibling: function(ee) {
        return Te("Node", ee, "previousSibling")
      },
      contains: function(ee, ie) {
        return Xe("Node", ee, "contains")(ie)
      },
      getRootNode: function(ee) {
        return Xe("Node", ee, "getRootNode")()
      },
      host: function(ee) {
        return ee && "host" in ee ? Te("ShadowRoot", ee, "host") : null
      },
      styleSheets: function(ee) {
        return ee.styleSheets
      },
      shadowRoot: function(ee) {
        return ee && "shadowRoot" in ee ? Te("Element", ee, "shadowRoot") : null
      },
      querySelector: function(ee, ie) {
        return Te("Element", ee, "querySelector")(ie)
      },
      querySelectorAll: function(ee, ie) {
        return Te("Element", ee, "querySelectorAll")(ie)
      },
      nowTimestamp: ze,
      mutationObserverCtor: function() {
        return [qe("MutationObserver").constructor, ke.MutationObserver ?? (() => {})]
      },
      patch: function(ee, ie, He) {
        try {
          if (!(ie in ee)) return () => {};
          const ye = ee[ie],
            be = He(ye);
          return "function" === typeof be && (be.prototype = be.prototype || {}, Object.defineProperties(be, {
            __rrweb_original__: {
              enumerable: !1,
              value: ye
            }
          })), ee[ie] = be, () => {
            ee[ie] = ye
          }
        } catch {
          return () => {}
        }
      }
    };

    function Ee(ee) {
      return ee.nodeType === ee.ELEMENT_NODE
    }

    function ge(ee) {
      const ie = ee && "host" in ee && "mode" in ee && Be.host(ee) || null;
      return Boolean(ie && "shadowRoot" in ie && Be.shadowRoot(ie) === ee)
    }

    function Oe(ee) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(ee)
    }

    function de(ee) {
      try {
        const He = ee.rules || ee.cssRules;
        if (!He) return null;
        let ye = ee.href;
        !ye && ee.ownerNode && (ye = ee.ownerNode.baseURI);
        const be = Array.from(He, (ee => We(ee, ye))).join("");
        return (ie = be).includes(" background-clip: text;") && !ie.includes(" -webkit-background-clip: text;") && (ie = ie.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), ie
      } catch (He) {
        return null
      }
      var ie
    }

    function We(ee, ie) {
      if (function(ee) {
          return "styleSheet" in ee
        }(ee)) {
        let ie;
        try {
          ie = de(ee.styleSheet) || function(ee) {
            const {
              cssText: ie
            } = ee;
            if (ie.split('"').length < 3) return ie;
            const He = ["@import", `url(${JSON.stringify(ee.href)})`];
            return "" === ee.layerName ? He.push("layer") : ee.layerName && He.push(`layer(${ee.layerName})`), ee.supportsText && He.push(`supports(${ee.supportsText})`), ee.media.length && He.push(ee.media.mediaText), He.join(" ") + ";"
          }(ee)
        } catch (He) {
          ie = ee.cssText
        }
        return ee.styleSheet.href ? Le(ie, ee.styleSheet.href) : ie
      } {
        let He = ee.cssText;
        return function(ee) {
          return "selectorText" in ee
        }(ee) && ee.selectorText.includes(":") && (He = function(ee) {
          const ie = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return ee.replace(ie, "$1\\$2")
        }(He)), ie ? Le(He, ie) : He
      }
    }
    class te {
      constructor() {
        Ue(this, "idNodeMap", new Map), Ue(this, "nodeMetaMap", new WeakMap)
      }
      getId(ee) {
        var ie;
        if (!ee) return -1;
        return (null == (ie = this.getMeta(ee)) ? void 0 : ie.id) ?? -1
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
        this.idNodeMap.delete(ie), ee.childNodes && ee.childNodes.forEach((ee => this.removeNodeFromMap(ee)))
      }
      has(ee) {
        return this.idNodeMap.has(ee)
      }
      hasNode(ee) {
        return this.nodeMetaMap.has(ee)
      }
      add(ee, ie) {
        const He = ie.id;
        this.idNodeMap.set(He, ee), this.nodeMetaMap.set(ee, ie)
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
    }

    function Ze() {
      return new te
    }

    function we(ee) {
      let {
        element: ie,
        maskInputOptions: He,
        tagName: ye,
        type: be,
        value: Me,
        maskInputFn: Ke
      } = ee, Ue = Me || "";
      const Fe = be && De(be);
      return (He[ye.toLowerCase()] || Fe && He[Fe]) && (Ue = Ke ? Ke(Ue, ie) : "*".repeat(Ue.length)), Ue
    }

    function De(ee) {
      return ee.toLowerCase()
    }
    const Pe = "__rrweb_original__";

    function Ae(ee) {
      const ie = ee.type;
      return ee.hasAttribute("data-rr-is-password") ? "password" : ie ? De(ie) : null
    }

    function Ye(ee, ie) {
      let He;
      try {
        He = new URL(ee, ie ?? window.location.href)
      } catch (be) {
        return null
      }
      const ye = He.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == ye ? void 0 : ye[1]) ?? null
    }
    const Ve = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      ae = /^(?:[a-z+]+:)?\/\//i,
      ce = /^www\..*/i,
      xe = /^(data:)([^,]*),(.*)/i;

    function Le(ee, ie) {
      return (ee || "").replace(Ve, ((ee, He, ye, be, Me, Ke) => {
        const Ue = ye || Me || Ke,
          Fe = He || be || "";
        if (!Ue) return ee;
        if (ae.test(Ue) || ce.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
        if (xe.test(Ue)) return `url(${Fe}${Ue}${Fe})`;
        if ("/" === Ue[0]) return `url(${Fe}${function(ee){let ie="";return ie=ee.indexOf("//")>-1?ee.split("/").slice(0,3).join("/"):ee.split("/")[0],ie=ie.split("?")[0],ie}(ie)+Ue}${Fe})`;
        const Je = Ue.split("#")[0],
          oe = Ue.substring(Je.length),
          Re = ie.split("#")[0].split("/"),
          ke = Je.split("/");
        Re.pop();
        for (const ie of ke) "." !== ie && (".." === ie ? Re.pop() : Re.push(ie));
        return `url(${Fe}${Re.join("/")}${oe}${Fe})`
      }))
    }
    const Ce = "(?:/\\*[^*]*\\*/)|[\\s;]",
      ve = new RegExp(`${Ce}|\\b(0)px?`, "g"),
      ue = new RegExp(Ce, "g");

    function me(ee) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? ee.replace(ue, "") : ee.replace(ve, "$1")
    }

    function le(ee, ie) {
      return function(ee, ie) {
        let He = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const ye = Array.from(ie.childNodes),
          be = [];
        let Me = 0;
        if (ye.length > 1 && ee && "string" === typeof ee) {
          let ie = me(ee, He);
          const Ke = ie.length / ee.length;
          for (let Ue = 1; Ue < ye.length; Ue++)
            if (ye[Ue].textContent && "string" === typeof ye[Ue].textContent) {
              const Fe = me(ye[Ue].textContent, He),
                Je = 100;
              let oe = 3;
              for (; oe < Fe.length && (Fe[oe].match(/[a-zA-Z0-9]/) || -1 !== Fe.indexOf(Fe.substring(0, oe), 1)); oe++);
              for (; oe < Fe.length; oe++) {
                let Re = Fe.substring(0, oe),
                  ke = ie.split(Re),
                  qe = -1;
                if (2 === ke.length) qe = ke[0].length;
                else if (ke.length > 2 && "" === ke[0] && "" !== ye[Ue - 1].textContent) qe = ie.indexOf(Re, 1);
                else if (1 === ke.length) {
                  if (Re = Re.substring(0, Re.length - 1), ke = ie.split(Re), ke.length <= 1) return be.push(ee), be;
                  oe = Je + 1
                } else oe === Fe.length - 1 && (qe = ie.indexOf(Re));
                if (ke.length >= 2 && oe > Je) {
                  const ee = ye[Ue - 1].textContent;
                  if (ee && "string" === typeof ee) {
                    const He = me(ee).length;
                    qe = ie.indexOf(Re, He)
                  } - 1 === qe && (qe = ke[0].length)
                }
                if (-1 !== qe) {
                  let Ue = Math.floor(qe / Ke);
                  for (; Ue > 0 && Ue < ee.length;) {
                    if (Me += 1, Me > 50 * ye.length) return be.push(ee), be;
                    const Fe = me(ee.substring(0, Ue), He);
                    if (Fe.length === qe) {
                      be.push(ee.substring(0, Ue)), ee = ee.substring(Ue), ie = ie.substring(qe);
                      break
                    }
                    Fe.length < qe ? Ue += Math.max(1, Math.floor((qe - Fe.length) / Ke)) : Ue -= Math.max(1, Math.floor((Fe.length - qe) * Ke))
                  }
                  break
                }
              }
            }
        }
        return be.push(ee), be
      }(ee, ie).join("/* rr_split */")
    }
    let Se = 1;
    const ne = new RegExp("[^a-z0-9-_:]");

    function je() {
      return Se++
    }
    let se, Ie;
    const he = /^[^ \t\n\r\u000c]+/,
      Ne = /^[, \t\n\r\u000c]+/;
    const Ge = new WeakMap;

    function re(ee, ie) {
      return ie && "" !== ie.trim() ? ei(ee, ie) : ie
    }

    function Qe(ee) {
      return Boolean("svg" === ee.tagName || ee.ownerSVGElement)
    }

    function ei(ee, ie) {
      let He = Ge.get(ee);
      if (He || (He = ee.createElement("a"), Ge.set(ee, He)), ie) {
        if (ie.startsWith("blob:") || ie.startsWith("data:")) return ie
      } else ie = "";
      return He.setAttribute("href", ie), He.href
    }

    function ii(ee, ie, He, ye) {
      return ye ? "src" === He || "href" === He && ("use" !== ie || "#" !== ye[0]) || "xlink:href" === He && "#" !== ye[0] || "background" === He && ["table", "td", "th"].includes(ie) ? re(ee, ye) : "srcset" === He ? function(ee, ie) {
        if ("" === ie.trim()) return ie;
        let He = 0;

        function ye(ee) {
          let ye;
          const be = ee.exec(ie.substring(He));
          return be ? (ye = be[0], He += ye.length, ye) : ""
        }
        const be = [];
        for (; ye(Ne), !(He >= ie.length);) {
          let Me = ye(he);
          if ("," === Me.slice(-1)) Me = re(ee, Me.substring(0, Me.length - 1)), be.push(Me);
          else {
            let ye = "";
            Me = re(ee, Me);
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
      }(ee, ye) : "style" === He ? Le(ye, ei(ee)) : "object" === ie && "data" === He ? re(ee, ye) : ye : ye
    }

    function Hi(ee, ie, He) {
      return ["video", "audio"].includes(ee) && "autoplay" === De(ie)
    }

    function yi(ee, ie, He) {
      if (!ee) return !1;
      if (ee.nodeType !== ee.ELEMENT_NODE) return !!He && yi(Be.parentNode(ee), ie, He);
      for (let ye = ee.classList.length; ye--;) {
        const He = ee.classList[ye];
        if (ie.test(He)) return !0
      }
      return !!He && yi(Be.parentNode(ee), ie, He)
    }

    function bi(ee, ie, He, ye) {
      let be;
      if (Ee(ee)) {
        if (be = ee, !Be.childNodes(be).length) return !1
      } else {
        if (null === Be.parentElement(ee)) return !1;
        be = Be.parentElement(ee)
      }
      try {
        if ("string" === typeof ie) {
          if (ye) {
            if (be.closest(`.${ie}`)) return !0
          } else if (be.classList.contains(ie)) return !0
        } else if (yi(be, ie, ye)) return !0;
        if (He)
          if (ye) {
            if (be.closest(He)) return !0
          } else if (be.matches(He)) return !0
      } catch (Me) {}
      return !1
    }

    function Mi(ee, ie) {
      const {
        doc: He,
        mirror: ye,
        blockClass: be,
        blockSelector: Me,
        needsMask: Ke,
        inlineStylesheet: Ue,
        maskInputOptions: Je = {},
        maskTextFn: oe,
        maskInputFn: Re,
        dataURLOptions: ke = {},
        inlineImages: qe,
        recordCanvas: fe,
        keepIframeSrcFn: Te,
        newlyAddedElement: pe = !1,
        cssCaptured: Xe = !1
      } = ie, ze = function(ee, ie) {
        if (!ie.hasNode(ee)) return;
        const He = ie.getId(ee);
        return 1 === He ? void 0 : He
      }(He, ye);
      switch (ee.nodeType) {
        case ee.DOCUMENT_NODE:
          return "CSS1Compat" !== ee.compatMode ? {
            type: Fe.Document,
            childNodes: [],
            compatMode: ee.compatMode
          } : {
            type: Fe.Document,
            childNodes: []
          };
        case ee.DOCUMENT_TYPE_NODE:
          return {
            type: Fe.DocumentType, name: ee.name, publicId: ee.publicId, systemId: ee.systemId, rootId: ze
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
              dataURLOptions: Je = {},
              inlineImages: oe,
              recordCanvas: Re,
              keepIframeSrcFn: ke,
              newlyAddedElement: qe = !1,
              rootId: fe
            } = ie, Te = function(ee, ie, He) {
              try {
                if ("string" === typeof ie) {
                  if (ee.classList.contains(ie)) return !0
                } else
                  for (let He = ee.classList.length; He--;) {
                    const ye = ee.classList[He];
                    if (ie.test(ye)) return !0
                  }
                if (He) return ee.matches(He)
              } catch (ye) {}
              return !1
            }(ee, ye, be), pe = function(ee) {
              if (ee instanceof HTMLFormElement) return "form";
              const ie = De(ee.tagName);
              return ne.test(ie) ? "div" : ie
            }(ee);
            let Xe = {};
            const ze = ee.attributes.length;
            for (let Fe = 0; Fe < ze; Fe++) {
              const ie = ee.attributes[Fe];
              Hi(pe, ie.name, ie.value) || (Xe[ie.name] = ii(He, pe, De(ie.name), ie.value))
            }
            if ("link" === pe && Me) {
              const ie = Array.from(He.styleSheets).find((ie => ie.href === ee.href));
              let ye = null;
              ie && (ye = de(ie)), ye && (delete Xe.rel, delete Xe.href, Xe._cssText = ye)
            }
            if ("style" === pe && ee.sheet) {
              let ie = de(ee.sheet);
              ie && (ee.childNodes.length > 1 && (ie = le(ie, ee)), Xe._cssText = ie)
            }
            if (["input", "textarea", "select"].includes(pe)) {
              const ie = ee.value,
                He = ee.checked;
              "radio" !== Xe.type && "checkbox" !== Xe.type && "submit" !== Xe.type && "button" !== Xe.type && ie ? Xe.value = we({
                element: ee,
                type: Ae(ee),
                tagName: pe,
                value: ie,
                maskInputOptions: Ke,
                maskInputFn: Ue
              }) : He && (Xe.checked = He)
            }
            "option" === pe && (ee.selected && !Ke.select ? Xe.selected = !0 : delete Xe.selected);
            "dialog" === pe && ee.open && (Xe.rr_open_mode = ee.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === pe && Re)
              if ("2d" === ee.__context)(function(ee) {
                const ie = ee.getContext("2d");
                if (!ie) return !0;
                for (let He = 0; He < ee.width; He += 50)
                  for (let ye = 0; ye < ee.height; ye += 50) {
                    const be = ie.getImageData,
                      Me = Pe in be ? be[Pe] : be;
                    if (new Uint32Array(Me.call(ie, He, ye, Math.min(50, ee.width - He), Math.min(50, ee.height - ye)).data.buffer).some((ee => 0 !== ee))) return !1
                  }
                return !0
              })(ee) || (Xe.rr_dataURL = ee.toDataURL(Je.type, Je.quality));
              else if (!("__context" in ee)) {
              const ie = ee.toDataURL(Je.type, Je.quality),
                ye = He.createElement("canvas");
              ye.width = ee.width, ye.height = ee.height;
              ie !== ye.toDataURL(Je.type, Je.quality) && (Xe.rr_dataURL = ie)
            }
            if ("img" === pe && oe) {
              se || (se = He.createElement("canvas"), Ie = se.getContext("2d"));
              const ie = ee,
                ye = ie.currentSrc || ie.getAttribute("src") || "<unknown-src>",
                be = ie.crossOrigin,
                Me = () => {
                  ie.removeEventListener("load", Me);
                  try {
                    se.width = ie.naturalWidth, se.height = ie.naturalHeight, Ie.drawImage(ie, 0, 0), Xe.rr_dataURL = se.toDataURL(Je.type, Je.quality)
                  } catch (ee) {
                    if ("anonymous" !== ie.crossOrigin) return ie.crossOrigin = "anonymous", void(ie.complete && 0 !== ie.naturalWidth ? Me() : ie.addEventListener("load", Me));
                    console.warn(`Cannot inline img src=${ye}! Error: ${ee}`)
                  }
                  "anonymous" === ie.crossOrigin && (be ? Xe.crossOrigin = be : ie.removeAttribute("crossorigin"))
                };
              ie.complete && 0 !== ie.naturalWidth ? Me() : ie.addEventListener("load", Me)
            }
            if (["audio", "video"].includes(pe)) {
              const ie = Xe;
              ie.rr_mediaState = ee.paused ? "paused" : "played", ie.rr_mediaCurrentTime = ee.currentTime, ie.rr_mediaPlaybackRate = ee.playbackRate, ie.rr_mediaMuted = ee.muted, ie.rr_mediaLoop = ee.loop, ie.rr_mediaVolume = ee.volume
            }
            qe || (ee.scrollLeft && (Xe.rr_scrollLeft = ee.scrollLeft), ee.scrollTop && (Xe.rr_scrollTop = ee.scrollTop));
            if (Te) {
              const {
                width: ie,
                height: He
              } = ee.getBoundingClientRect();
              Xe = {
                class: Xe.class,
                rr_width: `${ie}px`,
                rr_height: `${He}px`
              }
            }
            "iframe" !== pe || ke(Xe.src) || (ee.contentDocument || (Xe.rr_src = Xe.src), delete Xe.src);
            let Be;
            try {
              customElements.get(pe) && (Be = !0)
            } catch (Ee) {}
            return {
              type: Fe.Element,
              tagName: pe,
              attributes: Xe,
              childNodes: [],
              isSVG: Qe(ee) || void 0,
              needBlock: Te,
              rootId: fe,
              isCustom: Be
            }
          }(ee, {
            doc: He,
            blockClass: be,
            blockSelector: Me,
            inlineStylesheet: Ue,
            maskInputOptions: Je,
            maskInputFn: Re,
            dataURLOptions: ke,
            inlineImages: qe,
            recordCanvas: fe,
            keepIframeSrcFn: Te,
            newlyAddedElement: pe,
            rootId: ze
          });
        case ee.TEXT_NODE:
          return function(ee, ie) {
            const {
              needsMask: He,
              maskTextFn: ye,
              rootId: be,
              cssCaptured: Me
            } = ie, Ke = Be.parentNode(ee), Ue = Ke && Ke.tagName;
            let Je = "";
            const oe = "STYLE" === Ue || void 0,
              Re = "SCRIPT" === Ue || void 0;
            Re ? Je = "SCRIPT_PLACEHOLDER" : Me || (Je = Be.textContent(ee), oe && Je && (Je = Le(Je, ei(ie.doc))));
            !oe && !Re && Je && He && (Je = ye ? ye(Je, Be.parentElement(ee)) : Je.replace(/[\S]/g, "*"));
            return {
              type: Fe.Text,
              textContent: Je || "",
              rootId: be
            }
          }(ee, {
            doc: He,
            needsMask: Ke,
            maskTextFn: oe,
            rootId: ze,
            cssCaptured: Xe
          });
        case ee.CDATA_SECTION_NODE:
          return {
            type: Fe.CDATA, textContent: "", rootId: ze
          };
        case ee.COMMENT_NODE:
          return {
            type: Fe.Comment, textContent: Be.textContent(ee) || "", rootId: ze
          };
        default:
          return !1
      }
    }

    function Ki(ee) {
      return void 0 === ee || null === ee ? "" : ee.toLowerCase()
    }

    function Ui(ee) {
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
      } : ee || {}
    }

    function Fi(ee, ie) {
      const {
        doc: He,
        mirror: ye,
        blockClass: be,
        blockSelector: Me,
        maskTextClass: Ke,
        maskTextSelector: Ue,
        skipChild: Je = !1,
        inlineStylesheet: oe = !0,
        maskInputOptions: Re = {},
        maskTextFn: ke,
        maskInputFn: qe,
        slimDOMOptions: fe,
        dataURLOptions: Te = {},
        inlineImages: pe = !1,
        recordCanvas: Xe = !1,
        onSerialize: ze,
        onIframeLoad: de,
        iframeLoadTimeout: We = 5e3,
        onStylesheetLoad: te,
        stylesheetLoadTimeout: Ze = 5e3,
        keepIframeSrcFn: we = () => !1,
        newlyAddedElement: De = !1,
        cssCaptured: Pe = !1
      } = ie;
      let {
        needsMask: Ae
      } = ie, {
        preserveWhiteSpace: Ve = !0
      } = ie;
      if (!Ae) {
        Ae = bi(ee, Ke, Ue, void 0 === Ae)
      }
      const ae = Mi(ee, {
        doc: He,
        mirror: ye,
        blockClass: be,
        blockSelector: Me,
        needsMask: Ae,
        inlineStylesheet: oe,
        maskInputOptions: Re,
        maskTextFn: ke,
        maskInputFn: qe,
        dataURLOptions: Te,
        inlineImages: pe,
        recordCanvas: Xe,
        keepIframeSrcFn: we,
        newlyAddedElement: De,
        cssCaptured: Pe
      });
      if (!ae) return console.warn(ee, "not serialized"), null;
      let ce;
      ce = ye.hasNode(ee) ? ye.getId(ee) : function(ee, ie) {
        if (ie.comment && ee.type === Fe.Comment) return !0;
        if (ee.type === Fe.Element) {
          if (ie.script && ("script" === ee.tagName || "link" === ee.tagName && ("preload" === ee.attributes.rel && "script" === ee.attributes.as || "modulepreload" === ee.attributes.rel) || "link" === ee.tagName && "prefetch" === ee.attributes.rel && "string" === typeof ee.attributes.href && "js" === Ye(ee.attributes.href))) return !0;
          if (ie.headFavicon && ("link" === ee.tagName && "shortcut icon" === ee.attributes.rel || "meta" === ee.tagName && (Ki(ee.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Ki(ee.attributes.name) || "icon" === Ki(ee.attributes.rel) || "apple-touch-icon" === Ki(ee.attributes.rel) || "shortcut icon" === Ki(ee.attributes.rel)))) return !0;
          if ("meta" === ee.tagName) {
            if (ie.headMetaDescKeywords && Ki(ee.attributes.name).match(/^description|keywords$/)) return !0;
            if (ie.headMetaSocial && (Ki(ee.attributes.property).match(/^(og|twitter|fb):/) || Ki(ee.attributes.name).match(/^(og|twitter):/) || "pinterest" === Ki(ee.attributes.name))) return !0;
            if (ie.headMetaRobots && ("robots" === Ki(ee.attributes.name) || "googlebot" === Ki(ee.attributes.name) || "bingbot" === Ki(ee.attributes.name))) return !0;
            if (ie.headMetaHttpEquiv && void 0 !== ee.attributes["http-equiv"]) return !0;
            if (ie.headMetaAuthorship && ("author" === Ki(ee.attributes.name) || "generator" === Ki(ee.attributes.name) || "framework" === Ki(ee.attributes.name) || "publisher" === Ki(ee.attributes.name) || "progid" === Ki(ee.attributes.name) || Ki(ee.attributes.property).match(/^article:/) || Ki(ee.attributes.property).match(/^product:/))) return !0;
            if (ie.headMetaVerification && ("google-site-verification" === Ki(ee.attributes.name) || "yandex-verification" === Ki(ee.attributes.name) || "csrf-token" === Ki(ee.attributes.name) || "p:domain_verify" === Ki(ee.attributes.name) || "verify-v1" === Ki(ee.attributes.name) || "verification" === Ki(ee.attributes.name) || "shopify-checkout-api-token" === Ki(ee.attributes.name))) return !0
          }
        }
        return !1
      }(ae, fe) || !Ve && ae.type === Fe.Text && !ae.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : je();
      const xe = Object.assign(ae, {
        id: ce
      });
      if (ye.add(ee, xe), -2 === ce) return null;
      ze && ze(ee);
      let Le = !Je;
      if (xe.type === Fe.Element) {
        Le = Le && !xe.needBlock, delete xe.needBlock;
        const ie = Be.shadowRoot(ee);
        ie && Oe(ie) && (xe.isShadowHost = !0)
      }
      if ((xe.type === Fe.Document || xe.type === Fe.Element) && Le) {
        fe.headWhitespace && xe.type === Fe.Element && "head" === xe.tagName && (Ve = !1);
        const ie = {
          doc: He,
          mirror: ye,
          blockClass: be,
          blockSelector: Me,
          needsMask: Ae,
          maskTextClass: Ke,
          maskTextSelector: Ue,
          skipChild: Je,
          inlineStylesheet: oe,
          maskInputOptions: Re,
          maskTextFn: ke,
          maskInputFn: qe,
          slimDOMOptions: fe,
          dataURLOptions: Te,
          inlineImages: pe,
          recordCanvas: Xe,
          preserveWhiteSpace: Ve,
          onSerialize: ze,
          onIframeLoad: de,
          iframeLoadTimeout: We,
          onStylesheetLoad: te,
          stylesheetLoadTimeout: Ze,
          keepIframeSrcFn: we,
          cssCaptured: !1
        };
        if (xe.type === Fe.Element && "textarea" === xe.tagName && void 0 !== xe.attributes.value);
        else {
          xe.type === Fe.Element && void 0 !== xe.attributes._cssText && "string" === typeof xe.attributes._cssText && (ie.cssCaptured = !0);
          for (const He of Array.from(Be.childNodes(ee))) {
            const ee = Fi(He, ie);
            ee && xe.childNodes.push(ee)
          }
        }
        let ge = null;
        if (Ee(ee) && (ge = Be.shadowRoot(ee)))
          for (const ee of Array.from(Be.childNodes(ge))) {
            const He = Fi(ee, ie);
            He && (Oe(ge) && (He.isShadow = !0), xe.childNodes.push(He))
          }
      }
      const Ce = Be.parentNode(ee);
      return Ce && ge(Ce) && Oe(Ce) && (xe.isShadow = !0), xe.type === Fe.Element && "iframe" === xe.tagName && function(ee, ie, He) {
        const ye = ee.contentWindow;
        if (!ye) return;
        let be, Me = !1;
        try {
          be = ye.document.readyState
        } catch (Ue) {
          return
        }
        if ("complete" !== be) {
          const ye = setTimeout((() => {
            Me || (ie(), Me = !0)
          }), He);
          return void ee.addEventListener("load", (() => {
            clearTimeout(ye), Me = !0, ie()
          }))
        }
        const Ke = "about:blank";
        if (ye.location.href !== Ke || ee.src === Ke || "" === ee.src) return setTimeout(ie, 0), ee.addEventListener("load", ie);
        ee.addEventListener("load", ie)
      }(ee, (() => {
        const ie = ee.contentDocument;
        if (ie && de) {
          const He = Fi(ie, {
            doc: ie,
            mirror: ye,
            blockClass: be,
            blockSelector: Me,
            needsMask: Ae,
            maskTextClass: Ke,
            maskTextSelector: Ue,
            skipChild: !1,
            inlineStylesheet: oe,
            maskInputOptions: Re,
            maskTextFn: ke,
            maskInputFn: qe,
            slimDOMOptions: fe,
            dataURLOptions: Te,
            inlineImages: pe,
            recordCanvas: Xe,
            preserveWhiteSpace: Ve,
            onSerialize: ze,
            onIframeLoad: de,
            iframeLoadTimeout: We,
            onStylesheetLoad: te,
            stylesheetLoadTimeout: Ze,
            keepIframeSrcFn: we
          });
          He && de(ee, He)
        }
      }), We), xe.type === Fe.Element && "link" === xe.tagName && "string" === typeof xe.attributes.rel && ("stylesheet" === xe.attributes.rel || "preload" === xe.attributes.rel && "string" === typeof xe.attributes.href && "css" === Ye(xe.attributes.href)) && function(ee, ie, He) {
        let ye, be = !1;
        try {
          ye = ee.sheet
        } catch (Ke) {
          return
        }
        if (ye) return;
        const Me = setTimeout((() => {
          be || (ie(), be = !0)
        }), He);
        ee.addEventListener("load", (() => {
          clearTimeout(Me), be = !0, ie()
        }))
      }(ee, (() => {
        if (te) {
          const ie = Fi(ee, {
            doc: He,
            mirror: ye,
            blockClass: be,
            blockSelector: Me,
            needsMask: Ae,
            maskTextClass: Ke,
            maskTextSelector: Ue,
            skipChild: !1,
            inlineStylesheet: oe,
            maskInputOptions: Re,
            maskTextFn: ke,
            maskInputFn: qe,
            slimDOMOptions: fe,
            dataURLOptions: Te,
            inlineImages: pe,
            recordCanvas: Xe,
            preserveWhiteSpace: Ve,
            onSerialize: ze,
            onIframeLoad: de,
            iframeLoadTimeout: We,
            onStylesheetLoad: te,
            stylesheetLoadTimeout: Ze,
            keepIframeSrcFn: we
          });
          ie && te(ee, ie)
        }
      }), Ze), xe
    }
    const Ji = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      oi = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(ee) {
            ee.params.match(Ji) && (ee.params = ee.params.replace(Ji, "$1-$2"))
          }
        })
      },
      Ri = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const ee = [];
          return {
            Rule: function(ie) {
              -1 === ee.indexOf(ie) && (ee.push(ie), ie.selectors.forEach((function(ee) {
                ee.includes(":hover") && (ie.selector += ",\n" + ee.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function ki(ee) {
      return ee && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") ? ee.default : ee
    }

    function qi(ee) {
      if (ee.__esModule) return ee;
      var ie = ee.default;
      if ("function" == typeof ie) {
        var He = function ee() {
          return this instanceof ee ? Reflect.construct(ie, arguments, this.constructor) : ie.apply(this, arguments)
        };
        He.prototype = ie.prototype
      } else He = {};
      return Object.defineProperty(He, "__esModule", {
        value: !0
      }), Object.keys(ee).forEach((function(ie) {
        var ye = Object.getOwnPropertyDescriptor(ee, ie);
        Object.defineProperty(He, ie, ye.get ? ye : {
          enumerable: !0,
          get: function() {
            return ee[ie]
          }
        })
      })), He
    }
    var fi, Ti = {
      exports: {}
    };

    function Xi() {
      if (fi) return Ti.exports;
      fi = 1;
      var ee = String,
        ie = function() {
          return {
            isColorSupported: !1,
            reset: ee,
            bold: ee,
            dim: ee,
            italic: ee,
            underline: ee,
            inverse: ee,
            hidden: ee,
            strikethrough: ee,
            black: ee,
            red: ee,
            green: ee,
            yellow: ee,
            blue: ee,
            magenta: ee,
            cyan: ee,
            white: ee,
            gray: ee,
            bgBlack: ee,
            bgRed: ee,
            bgGreen: ee,
            bgYellow: ee,
            bgBlue: ee,
            bgMagenta: ee,
            bgCyan: ee,
            bgWhite: ee
          }
        };
      return Ti.exports = ie(), Ti.exports.createColors = ie, Ti.exports
    }
    const zi = qi(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var Bi, Ei;

    function gi() {
      if (Ei) return Bi;
      Ei = 1;
      let ee = Xi(),
        ie = zi;
      class He extends Error {
        constructor(ee, ie, ye, be, Me, Ke) {
          super(ee), this.name = "CssSyntaxError", this.reason = ee, Me && (this.file = Me), be && (this.source = be), Ke && (this.plugin = Ke), "undefined" !== typeof ie && "undefined" !== typeof ye && ("number" === typeof ie ? (this.line = ie, this.column = ye) : (this.line = ie.line, this.column = ie.column, this.endLine = ye.line, this.endColumn = ye.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, He)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(He) {
          if (!this.source) return "";
          let ye = this.source;
          null == He && (He = ee.isColorSupported), ie && He && (ye = ie(ye));
          let be, Me, Ke = ye.split(/\r?\n/),
            Ue = Math.max(this.line - 3, 0),
            Fe = Math.min(this.line + 2, Ke.length),
            Je = String(Fe).length;
          if (He) {
            let {
              bold: ie,
              gray: He,
              red: ye
            } = ee.createColors(!0);
            be = ee => ie(ye(ee)), Me = ee => He(ee)
          } else be = Me = ee => ee;
          return Ke.slice(Ue, Fe).map(((ee, ie) => {
            let He = Ue + 1 + ie,
              ye = " " + (" " + He).slice(-Je) + " | ";
            if (He === this.line) {
              let ie = Me(ye.replace(/\d/g, " ")) + ee.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return be(">") + Me(ye) + ee + "\n " + ie + be("^")
            }
            return " " + Me(ye) + ee
          })).join("\n")
        }
        toString() {
          let ee = this.showSourceCode();
          return ee && (ee = "\n\n" + ee + "\n"), this.name + ": " + this.message + ee
        }
      }
      return Bi = He, He.default = He, Bi
    }
    var Oi, di, Wi, ti, Zi, wi, Di, Pi, Ai, Yi, Vi, ai, ci, xi, Li, Ci, vi, ui, mi, li, Si, ni, ji, si, Ii, Ni, Gi, ri, Qi, eH, iH, HH, yH, bH, MH, KH, UH, FH, JH, oH, RH, kH, qH, fH, TH, pH, XH, zH, BH, EH, gH, OH, dH, WH = {};

    function tH() {
      return Oi || (Oi = 1, WH.isClean = Symbol("isClean"), WH.my = Symbol("my")), WH
    }

    function ZH() {
      if (Wi) return di;
      Wi = 1;
      const ee = {
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
      class ie {
        constructor(ee) {
          this.builder = ee
        }
        atrule(ee, ie) {
          let He = "@" + ee.name,
            ye = ee.params ? this.rawValue(ee, "params") : "";
          if ("undefined" !== typeof ee.raws.afterName ? He += ee.raws.afterName : ye && (He += " "), ee.nodes) this.block(ee, He + ye);
          else {
            let be = (ee.raws.between || "") + (ie ? ";" : "");
            this.builder(He + ye + be, ee)
          }
        }
        beforeAfter(ee, ie) {
          let He;
          He = "decl" === ee.type ? this.raw(ee, null, "beforeDecl") : "comment" === ee.type ? this.raw(ee, null, "beforeComment") : "before" === ie ? this.raw(ee, null, "beforeRule") : this.raw(ee, null, "beforeClose");
          let ye = ee.parent,
            be = 0;
          for (; ye && "root" !== ye.type;) be += 1, ye = ye.parent;
          if (He.includes("\n")) {
            let ie = this.raw(ee, null, "indent");
            if (ie.length)
              for (let ee = 0; ee < be; ee++) He += ie
          }
          return He
        }
        block(ee, ie) {
          let He, ye = this.raw(ee, "between", "beforeOpen");
          this.builder(ie + ye + "{", ee, "start"), ee.nodes && ee.nodes.length ? (this.body(ee), He = this.raw(ee, "after")) : He = this.raw(ee, "after", "emptyBody"), He && this.builder(He), this.builder("}", ee, "end")
        }
        body(ee) {
          let ie = ee.nodes.length - 1;
          for (; ie > 0 && "comment" === ee.nodes[ie].type;) ie -= 1;
          let He = this.raw(ee, "semicolon");
          for (let ye = 0; ye < ee.nodes.length; ye++) {
            let be = ee.nodes[ye],
              Me = this.raw(be, "before");
            Me && this.builder(Me), this.stringify(be, ie !== ye || He)
          }
        }
        comment(ee) {
          let ie = this.raw(ee, "left", "commentLeft"),
            He = this.raw(ee, "right", "commentRight");
          this.builder("/*" + ie + ee.text + He + "*/", ee)
        }
        decl(ee, ie) {
          let He = this.raw(ee, "between", "colon"),
            ye = ee.prop + He + this.rawValue(ee, "value");
          ee.important && (ye += ee.raws.important || " !important"), ie && (ye += ";"), this.builder(ye, ee)
        }
        document(ee) {
          this.body(ee)
        }
        raw(ie, He, ye) {
          let be;
          if (ye || (ye = He), He && (be = ie.raws[He], "undefined" !== typeof be)) return be;
          let Me = ie.parent;
          if ("before" === ye) {
            if (!Me || "root" === Me.type && Me.first === ie) return "";
            if (Me && "document" === Me.type) return ""
          }
          if (!Me) return ee[ye];
          let Ke = ie.root();
          if (Ke.rawCache || (Ke.rawCache = {}), "undefined" !== typeof Ke.rawCache[ye]) return Ke.rawCache[ye];
          if ("before" === ye || "after" === ye) return this.beforeAfter(ie, ye);
          {
            let ee = "raw" + ((Ue = ye)[0].toUpperCase() + Ue.slice(1));
            this[ee] ? be = this[ee](Ke, ie) : Ke.walk((ee => {
              if (be = ee.raws[He], "undefined" !== typeof be) return !1
            }))
          }
          var Ue;
          return "undefined" === typeof be && (be = ee[ye]), Ke.rawCache[ye] = be, be
        }
        rawBeforeClose(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && ee.nodes.length > 0 && "undefined" !== typeof ee.raws.after) return ie = ee.raws.after, ie.includes("\n") && (ie = ie.replace(/[^\n]+$/, "")), !1
          })), ie && (ie = ie.replace(/\S/g, "")), ie
        }
        rawBeforeComment(ee, ie) {
          let He;
          return ee.walkComments((ee => {
            if ("undefined" !== typeof ee.raws.before) return He = ee.raws.before, He.includes("\n") && (He = He.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof He ? He = this.raw(ie, null, "beforeDecl") : He && (He = He.replace(/\S/g, "")), He
        }
        rawBeforeDecl(ee, ie) {
          let He;
          return ee.walkDecls((ee => {
            if ("undefined" !== typeof ee.raws.before) return He = ee.raws.before, He.includes("\n") && (He = He.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof He ? He = this.raw(ie, null, "beforeRule") : He && (He = He.replace(/\S/g, "")), He
        }
        rawBeforeOpen(ee) {
          let ie;
          return ee.walk((ee => {
            if ("decl" !== ee.type && (ie = ee.raws.between, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawBeforeRule(ee) {
          let ie;
          return ee.walk((He => {
            if (He.nodes && (He.parent !== ee || ee.first !== He) && "undefined" !== typeof He.raws.before) return ie = He.raws.before, ie.includes("\n") && (ie = ie.replace(/[^\n]+$/, "")), !1
          })), ie && (ie = ie.replace(/\S/g, "")), ie
        }
        rawColon(ee) {
          let ie;
          return ee.walkDecls((ee => {
            if ("undefined" !== typeof ee.raws.between) return ie = ee.raws.between.replace(/[^\s:]/g, ""), !1
          })), ie
        }
        rawEmptyBody(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && 0 === ee.nodes.length && (ie = ee.raws.after, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawIndent(ee) {
          if (ee.raws.indent) return ee.raws.indent;
          let ie;
          return ee.walk((He => {
            let ye = He.parent;
            if (ye && ye !== ee && ye.parent && ye.parent === ee && "undefined" !== typeof He.raws.before) {
              let ee = He.raws.before.split("\n");
              return ie = ee[ee.length - 1], ie = ie.replace(/\S/g, ""), !1
            }
          })), ie
        }
        rawSemicolon(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && ee.nodes.length && "decl" === ee.last.type && (ie = ee.raws.semicolon, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawValue(ee, ie) {
          let He = ee[ie],
            ye = ee.raws[ie];
          return ye && ye.value === He ? ye.raw : He
        }
        root(ee) {
          this.body(ee), ee.raws.after && this.builder(ee.raws.after)
        }
        rule(ee) {
          this.block(ee, this.rawValue(ee, "selector")), ee.raws.ownSemicolon && this.builder(ee.raws.ownSemicolon, ee, "end")
        }
        stringify(ee, ie) {
          if (!this[ee.type]) throw new Error("Unknown AST node type " + ee.type + ". Maybe you need to change PostCSS stringifier.");
          this[ee.type](ee, ie)
        }
      }
      return di = ie, ie.default = ie, di
    }

    function wH() {
      if (Zi) return ti;
      Zi = 1;
      let ee = ZH();

      function ie(ie, He) {
        new ee(He).stringify(ie)
      }
      return ti = ie, ie.default = ie, ti
    }

    function DH() {
      if (Di) return wi;
      Di = 1;
      let {
        isClean: ee,
        my: ie
      } = tH(), He = gi(), ye = ZH(), be = wH();

      function Me(ee, ie) {
        let He = new ee.constructor;
        for (let ye in ee) {
          if (!Object.prototype.hasOwnProperty.call(ee, ye)) continue;
          if ("proxyCache" === ye) continue;
          let be = ee[ye],
            Ke = typeof be;
          "parent" === ye && "object" === Ke ? ie && (He[ye] = ie) : "source" === ye ? He[ye] = be : Array.isArray(be) ? He[ye] = be.map((ee => Me(ee, He))) : ("object" === Ke && null !== be && (be = Me(be)), He[ye] = be)
        }
        return He
      }
      class Ke {
        constructor() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[ee] = !1, this[ie] = !0;
          for (let ee in He)
            if ("nodes" === ee) {
              this.nodes = [];
              for (let ie of He[ee]) "function" === typeof ie.clone ? this.append(ie.clone()) : this.append(ie)
            } else this[ee] = He[ee]
        }
        addToError(ee) {
          if (ee.postcssNode = this, ee.stack && this.source && /\n\s{4}at /.test(ee.stack)) {
            let ie = this.source;
            ee.stack = ee.stack.replace(/\n\s{4}at /, `$&${ie.input.from}:${ie.start.line}:${ie.start.column}$&`)
          }
          return ee
        }
        after(ee) {
          return this.parent.insertAfter(this, ee), this
        }
        assign() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let ie in ee) this[ie] = ee[ie];
          return this
        }
        before(ee) {
          return this.parent.insertBefore(this, ee), this
        }
        cleanRaws(ee) {
          delete this.raws.before, delete this.raws.after, ee || delete this.raws.between
        }
        clone() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = Me(this);
          for (let He in ee) ie[He] = ee[He];
          return ie
        }
        cloneAfter() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = this.clone(ee);
          return this.parent.insertAfter(this, ie), ie
        }
        cloneBefore() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = this.clone(ee);
          return this.parent.insertBefore(this, ie), ie
        }
        error(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: He,
              start: ye
            } = this.rangeBy(ie);
            return this.source.input.error(ee, {
              column: ye.column,
              line: ye.line
            }, {
              column: He.column,
              line: He.line
            }, ie)
          }
          return new He(ee)
        }
        getProxyProcessor() {
          return {
            get: (ee, ie) => "proxyOf" === ie ? ee : "root" === ie ? () => ee.root().toProxy() : ee[ie],
            set: (ee, ie, He) => (ee[ie] === He || (ee[ie] = He, "prop" !== ie && "value" !== ie && "name" !== ie && "params" !== ie && "important" !== ie && "text" !== ie || ee.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[ee]) {
            this[ee] = !1;
            let ie = this;
            for (; ie = ie.parent;) ie[ee] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let ee = this.parent.index(this);
          return this.parent.nodes[ee + 1]
        }
        positionBy(ee, ie) {
          let He = this.source.start;
          if (ee.index) He = this.positionInside(ee.index, ie);
          else if (ee.word) {
            let ye = (ie = this.toString()).indexOf(ee.word); - 1 !== ye && (He = this.positionInside(ye, ie))
          }
          return He
        }
        positionInside(ee, ie) {
          let He = ie || this.toString(),
            ye = this.source.start.column,
            be = this.source.start.line;
          for (let Me = 0; Me < ee; Me++) "\n" === He[Me] ? (ye = 1, be += 1) : ye += 1;
          return {
            column: ye,
            line: be
          }
        }
        prev() {
          if (!this.parent) return;
          let ee = this.parent.index(this);
          return this.parent.nodes[ee - 1]
        }
        rangeBy(ee) {
          let ie = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            He = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: ie.column + 1,
              line: ie.line
            };
          if (ee.word) {
            let ye = this.toString(),
              be = ye.indexOf(ee.word); - 1 !== be && (ie = this.positionInside(be, ye), He = this.positionInside(be + ee.word.length, ye))
          } else ee.start ? ie = {
            column: ee.start.column,
            line: ee.start.line
          } : ee.index && (ie = this.positionInside(ee.index)), ee.end ? He = {
            column: ee.end.column,
            line: ee.end.line
          } : "number" === typeof ee.endIndex ? He = this.positionInside(ee.endIndex) : ee.index && (He = this.positionInside(ee.index + 1));
          return (He.line < ie.line || He.line === ie.line && He.column <= ie.column) && (He = {
            column: ie.column + 1,
            line: ie.line
          }), {
            end: He,
            start: ie
          }
        }
        raw(ee, ie) {
          return (new ye).raw(this, ee, ie)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let ye = this,
              be = !1;
            for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
            for (let ee of ie) ee === this ? be = !0 : be ? (this.parent.insertAfter(ye, ee), ye = ee) : this.parent.insertBefore(ye, ee);
            be || this.remove()
          }
          return this
        }
        root() {
          let ee = this;
          for (; ee.parent && "document" !== ee.parent.type;) ee = ee.parent;
          return ee
        }
        toJSON(ee, ie) {
          let He = {},
            ye = null == ie;
          ie = ie || new Map;
          let be = 0;
          for (let Me in this) {
            if (!Object.prototype.hasOwnProperty.call(this, Me)) continue;
            if ("parent" === Me || "proxyCache" === Me) continue;
            let ee = this[Me];
            if (Array.isArray(ee)) He[Me] = ee.map((ee => "object" === typeof ee && ee.toJSON ? ee.toJSON(null, ie) : ee));
            else if ("object" === typeof ee && ee.toJSON) He[Me] = ee.toJSON(null, ie);
            else if ("source" === Me) {
              let ye = ie.get(ee.input);
              null == ye && (ye = be, ie.set(ee.input, be), be++), He[Me] = {
                end: ee.end,
                inputId: ye,
                start: ee.start
              }
            } else He[Me] = ee
          }
          return ye && (He.inputs = [...ie.keys()].map((ee => ee.toJSON()))), He
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be;
          ee.stringify && (ee = ee.stringify);
          let ie = "";
          return ee(this, (ee => {
            ie += ee
          })), ie
        }
        warn(ee, ie, He) {
          let ye = {
            node: this
          };
          for (let be in He) ye[be] = He[be];
          return ee.warn(ie, ye)
        }
        get proxyOf() {
          return this
        }
      }
      return wi = Ke, Ke.default = Ke, wi
    }

    function PH() {
      if (Ai) return Pi;
      Ai = 1;
      let ee = DH();
      class ie extends ee {
        constructor(ee) {
          ee && "undefined" !== typeof ee.value && "string" !== typeof ee.value && (ee = {
            ...ee,
            value: String(ee.value)
          }), super(ee), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Pi = ie, ie.default = ie, Pi
    }

    function AH() {
      if (Vi) return Yi;
      Vi = 1;
      return Yi = {
        nanoid: function() {
          let ee = "",
            ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; ie--;) ee += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return ee
        },
        customAlphabet: function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let He = "",
              ye = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie;
            for (; ye--;) He += ee[Math.random() * ee.length | 0];
            return He
          }
        }
      }, Yi
    }

    function YH() {
      if (ci) return ai;
      ci = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = zi, {
        existsSync: He,
        readFileSync: ye
      } = zi, {
        dirname: be,
        join: Me
      } = zi;
      class Ke {
        constructor(ee, ie) {
          if (!1 === ie.map) return;
          this.loadAnnotation(ee), this.inline = this.startWith(this.annotation, "data:");
          let He = ie.map ? ie.map.prev : void 0,
            ye = this.loadMap(ie.from, He);
          !this.mapFile && ie.from && (this.mapFile = ie.from), this.mapFile && (this.root = be(this.mapFile)), ye && (this.text = ye)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new ee(this.text)), this.consumerCache
        }
        decodeInline(ee) {
          if (/^data:application\/json;charset=utf-?8,/.test(ee) || /^data:application\/json,/.test(ee)) return decodeURIComponent(ee.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(ee) || /^data:application\/json;base64,/.test(ee)) return ie = ee.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(ie, "base64").toString() : window.atob(ie);
          var ie;
          let He = ee.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + He)
        }
        getAnnotationURL(ee) {
          return ee.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(ee) {
          return "object" === typeof ee && ("string" === typeof ee.mappings || "string" === typeof ee._mappings || Array.isArray(ee.sections))
        }
        loadAnnotation(ee) {
          let ie = ee.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!ie) return;
          let He = ee.lastIndexOf(ie.pop()),
            ye = ee.indexOf("*/", He);
          He > -1 && ye > -1 && (this.annotation = this.getAnnotationURL(ee.substring(He, ye)))
        }
        loadFile(ee) {
          if (this.root = be(ee), He(ee)) return this.mapFile = ee, ye(ee, "utf-8").toString().trim()
        }
        loadMap(He, ye) {
          if (!1 === ye) return !1;
          if (ye) {
            if ("string" === typeof ye) return ye;
            if ("function" !== typeof ye) {
              if (ye instanceof ee) return ie.fromSourceMap(ye).toString();
              if (ye instanceof ie) return ye.toString();
              if (this.isMap(ye)) return JSON.stringify(ye);
              throw new Error("Unsupported previous source map format: " + ye.toString())
            } {
              let ee = ye(He);
              if (ee) {
                let ie = this.loadFile(ee);
                if (!ie) throw new Error("Unable to load previous source map: " + ee.toString());
                return ie
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let ee = this.annotation;
              return He && (ee = Me(be(He), ee)), this.loadFile(ee)
            }
          }
        }
        startWith(ee, ie) {
          return !!ee && ee.substr(0, ie.length) === ie
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return ai = Ke, Ke.default = Ke, ai
    }

    function VH() {
      if (Li) return xi;
      Li = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = zi, {
        fileURLToPath: He,
        pathToFileURL: ye
      } = zi, {
        isAbsolute: be,
        resolve: Me
      } = zi, {
        nanoid: Ke
      } = AH(), Ue = zi, Fe = gi(), Je = YH(), oe = Symbol("fromOffsetCache"), Re = Boolean(ee && ie), ke = Boolean(Me && be);
      class qe {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === ee || "undefined" === typeof ee || "object" === typeof ee && !ee.toString) throw new Error(`PostCSS received ${ee} instead of CSS string`);
          if (this.css = ee.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, ie.from && (!ke || /^\w+:\/\//.test(ie.from) || be(ie.from) ? this.file = ie.from : this.file = Me(ie.from)), ke && Re) {
            let ee = new Je(this.css, ie);
            if (ee.text) {
              this.map = ee;
              let ie = ee.consumer().file;
              !this.file && ie && (this.file = this.mapResolve(ie))
            }
          }
          this.file || (this.id = "<input css " + Ke(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(ee, ie, He) {
          let be, Me, Ke, Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (ie && "object" === typeof ie) {
            let ee = ie,
              ye = He;
            if ("number" === typeof ee.offset) {
              let ye = this.fromOffset(ee.offset);
              ie = ye.line, He = ye.col
            } else ie = ee.line, He = ee.column;
            if ("number" === typeof ye.offset) {
              let ee = this.fromOffset(ye.offset);
              Me = ee.line, Ke = ee.col
            } else Me = ye.line, Ke = ye.column
          } else if (!He) {
            let ee = this.fromOffset(ie);
            ie = ee.line, He = ee.col
          }
          let Je = this.origin(ie, He, Me, Ke);
          return be = Je ? new Fe(ee, void 0 === Je.endLine ? Je.line : {
            column: Je.column,
            line: Je.line
          }, void 0 === Je.endLine ? Je.column : {
            column: Je.endColumn,
            line: Je.endLine
          }, Je.source, Je.file, Ue.plugin) : new Fe(ee, void 0 === Me ? ie : {
            column: He,
            line: ie
          }, void 0 === Me ? He : {
            column: Ke,
            line: Me
          }, this.css, this.file, Ue.plugin), be.input = {
            column: He,
            endColumn: Ke,
            endLine: Me,
            line: ie,
            source: this.css
          }, this.file && (ye && (be.input.url = ye(this.file).toString()), be.input.file = this.file), be
        }
        fromOffset(ee) {
          let ie, He;
          if (this[oe]) He = this[oe];
          else {
            let ee = this.css.split("\n");
            He = new Array(ee.length);
            let ie = 0;
            for (let ye = 0, be = ee.length; ye < be; ye++) He[ye] = ie, ie += ee[ye].length + 1;
            this[oe] = He
          }
          ie = He[He.length - 1];
          let ye = 0;
          if (ee >= ie) ye = He.length - 1;
          else {
            let ie, be = He.length - 2;
            for (; ye < be;)
              if (ie = ye + (be - ye >> 1), ee < He[ie]) be = ie - 1;
              else {
                if (!(ee >= He[ie + 1])) {
                  ye = ie;
                  break
                }
                ye = ie + 1
              }
          }
          return {
            col: ee - He[ye] + 1,
            line: ye + 1
          }
        }
        mapResolve(ee) {
          return /^\w+:\/\//.test(ee) ? ee : Me(this.map.consumer().sourceRoot || this.map.root || ".", ee)
        }
        origin(ee, ie, Me, Ke) {
          if (!this.map) return !1;
          let Ue, Fe, Je = this.map.consumer(),
            oe = Je.originalPositionFor({
              column: ie,
              line: ee
            });
          if (!oe.source) return !1;
          "number" === typeof Me && (Ue = Je.originalPositionFor({
            column: Ke,
            line: Me
          })), Fe = be(oe.source) ? ye(oe.source) : new URL(oe.source, this.map.consumer().sourceRoot || ye(this.map.mapFile));
          let Re = {
            column: oe.column,
            endColumn: Ue && Ue.column,
            endLine: Ue && Ue.line,
            line: oe.line,
            url: Fe.toString()
          };
          if ("file:" === Fe.protocol) {
            if (!He) throw new Error("file: protocol is not available in this PostCSS build");
            Re.file = He(Fe)
          }
          let ke = Je.sourceContentFor(oe.source);
          return ke && (Re.source = ke), Re
        }
        toJSON() {
          let ee = {};
          for (let ie of ["hasBOM", "css", "file", "id"]) null != this[ie] && (ee[ie] = this[ie]);
          return this.map && (ee.map = {
            ...this.map
          }, ee.map.consumerCache && (ee.map.consumerCache = void 0)), ee
        }
        get from() {
          return this.file || this.id
        }
      }
      return xi = qe, qe.default = qe, Ue && Ue.registerInput && Ue.registerInput(qe), xi
    }

    function aH() {
      if (vi) return Ci;
      vi = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = zi, {
        dirname: He,
        relative: ye,
        resolve: be,
        sep: Me
      } = zi, {
        pathToFileURL: Ke
      } = zi, Ue = VH(), Fe = Boolean(ee && ie), Je = Boolean(He && be && ye && Me);
      return Ci = class {
        constructor(ee, ie, He, ye) {
          this.stringify = ee, this.mapOpts = He.map || {}, this.root = ie, this.opts = He, this.css = ye, this.originalCSS = ye, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let ee;
          ee = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let ie = "\n";
          this.css.includes("\r\n") && (ie = "\r\n"), this.css += ie + "/*# sourceMappingURL=" + ee + " */"
        }
        applyPrevMaps() {
          for (let ie of this.previous()) {
            let ye, be = this.toUrl(this.path(ie.file)),
              Me = ie.root || He(ie.file);
            !1 === this.mapOpts.sourcesContent ? (ye = new ee(ie.text), ye.sourcesContent && (ye.sourcesContent = null)) : ye = ie.consumer(), this.map.applySourceMap(ye, be, this.toUrl(this.path(Me)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let ee;
              for (let ie = this.root.nodes.length - 1; ie >= 0; ie--) ee = this.root.nodes[ie], "comment" === ee.type && 0 === ee.text.indexOf("# sourceMappingURL=") && this.root.removeChild(ie)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Je && Fe && this.isMap()) return this.generateMap();
          {
            let ee = "";
            return this.stringify(this.root, (ie => {
              ee += ie
            })), [ee]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let ee = this.previous()[0].consumer();
            ee.file = this.outputFile(), this.map = ie.fromSourceMap(ee, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new ie({
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
          this.css = "", this.map = new ie({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let ee, He, ye = 1,
            be = 1,
            Me = "<no source>",
            Ke = {
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
          this.stringify(this.root, ((ie, Ue, Fe) => {
            if (this.css += ie, Ue && "end" !== Fe && (Ke.generated.line = ye, Ke.generated.column = be - 1, Ue.source && Ue.source.start ? (Ke.source = this.sourcePath(Ue), Ke.original.line = Ue.source.start.line, Ke.original.column = Ue.source.start.column - 1, this.map.addMapping(Ke)) : (Ke.source = Me, Ke.original.line = 1, Ke.original.column = 0, this.map.addMapping(Ke))), ee = ie.match(/\n/g), ee ? (ye += ee.length, He = ie.lastIndexOf("\n"), be = ie.length - He) : be += ie.length, Ue && "start" !== Fe) {
              let ee = Ue.parent || {
                raws: {}
              };
              ("decl" === Ue.type || "atrule" === Ue.type && !Ue.nodes) && Ue === ee.last && !ee.raws.semicolon || (Ue.source && Ue.source.end ? (Ke.source = this.sourcePath(Ue), Ke.original.line = Ue.source.end.line, Ke.original.column = Ue.source.end.column - 1, Ke.generated.line = ye, Ke.generated.column = be - 2, this.map.addMapping(Ke)) : (Ke.source = Me, Ke.original.line = 1, Ke.original.column = 0, Ke.generated.line = ye, Ke.generated.column = be - 1, this.map.addMapping(Ke)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((ee => ee.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let ee = this.mapOpts.annotation;
          return ("undefined" === typeof ee || !0 === ee) && (!this.previous().length || this.previous().some((ee => ee.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((ee => ee.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(ee) {
          if (this.mapOpts.absolute) return ee;
          if (60 === ee.charCodeAt(0)) return ee;
          if (/^\w+:\/\//.test(ee)) return ee;
          let ie = this.memoizedPaths.get(ee);
          if (ie) return ie;
          let Me = this.opts.to ? He(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (Me = He(be(Me, this.mapOpts.annotation)));
          let Ke = ye(Me, ee);
          return this.memoizedPaths.set(ee, Ke), Ke
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((ee => {
              if (ee.source && ee.source.input.map) {
                let ie = ee.source.input.map;
                this.previousMaps.includes(ie) || this.previousMaps.push(ie)
              }
            }));
            else {
              let ee = new Ue(this.originalCSS, this.opts);
              ee.map && this.previousMaps.push(ee.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let ee = {};
          if (this.root) this.root.walk((ie => {
            if (ie.source) {
              let He = ie.source.input.from;
              if (He && !ee[He]) {
                ee[He] = !0;
                let ye = this.usesFileUrls ? this.toFileUrl(He) : this.toUrl(this.path(He));
                this.map.setSourceContent(ye, ie.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let ee = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(ee, this.css)
          }
        }
        sourcePath(ee) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(ee.source.input.from) : this.toUrl(this.path(ee.source.input.from))
        }
        toBase64(ee) {
          return Buffer ? Buffer.from(ee).toString("base64") : window.btoa(unescape(encodeURIComponent(ee)))
        }
        toFileUrl(ee) {
          let ie = this.memoizedFileURLs.get(ee);
          if (ie) return ie;
          if (Ke) {
            let ie = Ke(ee).toString();
            return this.memoizedFileURLs.set(ee, ie), ie
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(ee) {
          let ie = this.memoizedURLs.get(ee);
          if (ie) return ie;
          "\\" === Me && (ee = ee.replace(/\\/g, "/"));
          let He = encodeURI(ee).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(ee, He), He
        }
      }
    }

    function cH() {
      if (mi) return ui;
      mi = 1;
      let ee = DH();
      class ie extends ee {
        constructor(ee) {
          super(ee), this.type = "comment"
        }
      }
      return ui = ie, ie.default = ie, ui
    }

    function xH() {
      if (Si) return li;
      Si = 1;
      let ee, ie, He, ye, {
          isClean: be,
          my: Me
        } = tH(),
        Ke = PH(),
        Ue = cH(),
        Fe = DH();

      function Je(ee) {
        return ee.map((ee => (ee.nodes && (ee.nodes = Je(ee.nodes)), delete ee.source, ee)))
      }

      function oe(ee) {
        if (ee[be] = !1, ee.proxyOf.nodes)
          for (let ie of ee.proxyOf.nodes) oe(ie)
      }
      class Re extends Fe {
        append() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          for (let ye of ie) {
            let ee = this.normalize(ye, this.last);
            for (let ie of ee) this.proxyOf.nodes.push(ie)
          }
          return this.markDirty(), this
        }
        cleanRaws(ee) {
          if (super.cleanRaws(ee), this.nodes)
            for (let ie of this.nodes) ie.cleanRaws(ee)
        }
        each(ee) {
          if (!this.proxyOf.nodes) return;
          let ie, He, ye = this.getIterator();
          for (; this.indexes[ye] < this.proxyOf.nodes.length && (ie = this.indexes[ye], He = ee(this.proxyOf.nodes[ie], ie), !1 !== He);) this.indexes[ye] += 1;
          return delete this.indexes[ye], He
        }
        every(ee) {
          return this.nodes.every(ee)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let ee = this.lastEach;
          return this.indexes[ee] = 0, ee
        }
        getProxyProcessor() {
          return {
            get: (ee, ie) => "proxyOf" === ie ? ee : ee[ie] ? "each" === ie || "string" === typeof ie && ie.startsWith("walk") ? function() {
              for (var He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
              return ee[ie](...ye.map((ee => "function" === typeof ee ? (ie, He) => ee(ie.toProxy(), He) : ee)))
            } : "every" === ie || "some" === ie ? He => ee[ie]((function(ee) {
              for (var ie = arguments.length, ye = new Array(ie > 1 ? ie - 1 : 0), be = 1; be < ie; be++) ye[be - 1] = arguments[be];
              return He(ee.toProxy(), ...ye)
            })) : "root" === ie ? () => ee.root().toProxy() : "nodes" === ie ? ee.nodes.map((ee => ee.toProxy())) : "first" === ie || "last" === ie ? ee[ie].toProxy() : ee[ie] : ee[ie],
            set: (ee, ie, He) => (ee[ie] === He || (ee[ie] = He, "name" !== ie && "params" !== ie && "selector" !== ie || ee.markDirty()), !0)
          }
        }
        index(ee) {
          return "number" === typeof ee ? ee : (ee.proxyOf && (ee = ee.proxyOf), this.proxyOf.nodes.indexOf(ee))
        }
        insertAfter(ee, ie) {
          let He, ye = this.index(ee),
            be = this.normalize(ie, this.proxyOf.nodes[ye]).reverse();
          ye = this.index(ee);
          for (let Me of be) this.proxyOf.nodes.splice(ye + 1, 0, Me);
          for (let Me in this.indexes) He = this.indexes[Me], ye < He && (this.indexes[Me] = He + be.length);
          return this.markDirty(), this
        }
        insertBefore(ee, ie) {
          let He, ye = this.index(ee),
            be = 0 === ye && "prepend",
            Me = this.normalize(ie, this.proxyOf.nodes[ye], be).reverse();
          ye = this.index(ee);
          for (let Ke of Me) this.proxyOf.nodes.splice(ye, 0, Ke);
          for (let Ke in this.indexes) He = this.indexes[Ke], ye <= He && (this.indexes[Ke] = He + Me.length);
          return this.markDirty(), this
        }
        normalize(ye, Fe) {
          if ("string" === typeof ye) ye = Je(ee(ye).nodes);
          else if ("undefined" === typeof ye) ye = [];
          else if (Array.isArray(ye)) {
            ye = ye.slice(0);
            for (let ee of ye) ee.parent && ee.parent.removeChild(ee, "ignore")
          } else if ("root" === ye.type && "document" !== this.type) {
            ye = ye.nodes.slice(0);
            for (let ee of ye) ee.parent && ee.parent.removeChild(ee, "ignore")
          } else if (ye.type) ye = [ye];
          else if (ye.prop) {
            if ("undefined" === typeof ye.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof ye.value && (ye.value = String(ye.value)), ye = [new Ke(ye)]
          } else if (ye.selector) ye = [new ie(ye)];
          else if (ye.name) ye = [new He(ye)];
          else {
            if (!ye.text) throw new Error("Unknown node type in node creation");
            ye = [new Ue(ye)]
          }
          return ye.map((ee => (ee[Me] || Re.rebuild(ee), (ee = ee.proxyOf).parent && ee.parent.removeChild(ee), ee[be] && oe(ee), "undefined" === typeof ee.raws.before && Fe && "undefined" !== typeof Fe.raws.before && (ee.raws.before = Fe.raws.before.replace(/\S/g, "")), ee.parent = this.proxyOf, ee)))
        }
        prepend() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          ie = ie.reverse();
          for (let ye of ie) {
            let ee = this.normalize(ye, this.first, "prepend").reverse();
            for (let ie of ee) this.proxyOf.nodes.unshift(ie);
            for (let ie in this.indexes) this.indexes[ie] = this.indexes[ie] + ee.length
          }
          return this.markDirty(), this
        }
        push(ee) {
          return ee.parent = this, this.proxyOf.nodes.push(ee), this
        }
        removeAll() {
          for (let ee of this.proxyOf.nodes) ee.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(ee) {
          let ie;
          ee = this.index(ee), this.proxyOf.nodes[ee].parent = void 0, this.proxyOf.nodes.splice(ee, 1);
          for (let He in this.indexes) ie = this.indexes[He], ie >= ee && (this.indexes[He] = ie - 1);
          return this.markDirty(), this
        }
        replaceValues(ee, ie, He) {
          return He || (He = ie, ie = {}), this.walkDecls((ye => {
            ie.props && !ie.props.includes(ye.prop) || ie.fast && !ye.value.includes(ie.fast) || (ye.value = ye.value.replace(ee, He))
          })), this.markDirty(), this
        }
        some(ee) {
          return this.nodes.some(ee)
        }
        walk(ee) {
          return this.each(((ie, He) => {
            let ye;
            try {
              ye = ee(ie, He)
            } catch (be) {
              throw ie.addToError(be)
            }
            return !1 !== ye && ie.walk && (ye = ie.walk(ee)), ye
          }))
        }
        walkAtRules(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("atrule" === He.type && ee.test(He.name)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("atrule" === He.type && He.name === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("atrule" === ee.type) return ie(ee, He)
          })))
        }
        walkComments(ee) {
          return this.walk(((ie, He) => {
            if ("comment" === ie.type) return ee(ie, He)
          }))
        }
        walkDecls(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("decl" === He.type && ee.test(He.prop)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("decl" === He.type && He.prop === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("decl" === ee.type) return ie(ee, He)
          })))
        }
        walkRules(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("rule" === He.type && ee.test(He.selector)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("rule" === He.type && He.selector === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("rule" === ee.type) return ie(ee, He)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return Re.registerParse = ie => {
        ee = ie
      }, Re.registerRule = ee => {
        ie = ee
      }, Re.registerAtRule = ee => {
        He = ee
      }, Re.registerRoot = ee => {
        ye = ee
      }, li = Re, Re.default = Re, Re.rebuild = ee => {
        "atrule" === ee.type ? Object.setPrototypeOf(ee, He.prototype) : "rule" === ee.type ? Object.setPrototypeOf(ee, ie.prototype) : "decl" === ee.type ? Object.setPrototypeOf(ee, Ke.prototype) : "comment" === ee.type ? Object.setPrototypeOf(ee, Ue.prototype) : "root" === ee.type && Object.setPrototypeOf(ee, ye.prototype), ee[Me] = !0, ee.nodes && ee.nodes.forEach((ee => {
          Re.rebuild(ee)
        }))
      }, li
    }

    function LH() {
      if (ji) return ni;
      ji = 1;
      let ee, ie, He = xH();
      class ye extends He {
        constructor(ee) {
          super({
            type: "document",
            ...ee
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new ee(new ie, this, He).stringify()
        }
      }
      return ye.registerLazyResult = ie => {
        ee = ie
      }, ye.registerProcessor = ee => {
        ie = ee
      }, ni = ye, ye.default = ye, ni
    }

    function CH() {
      if (Ii) return si;
      Ii = 1;
      let ee = {};
      return si = function(ie) {
        ee[ie] || (ee[ie] = !0, "undefined" !== typeof console && console.warn && console.warn(ie))
      }
    }

    function vH() {
      if (Gi) return Ni;
      Gi = 1;
      class ee {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = ee, ie.node && ie.node.source) {
            let ee = ie.node.rangeBy(ie);
            this.line = ee.start.line, this.column = ee.start.column, this.endLine = ee.end.line, this.endColumn = ee.end.column
          }
          for (let He in ie) this[He] = ie[He]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return Ni = ee, ee.default = ee, Ni
    }

    function uH() {
      if (Qi) return ri;
      Qi = 1;
      let ee = vH();
      class ie {
        constructor(ee, ie, He) {
          this.processor = ee, this.messages = [], this.root = ie, this.opts = He, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          He.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (He.plugin = this.lastPlugin.postcssPlugin);
          let ye = new ee(ie, He);
          return this.messages.push(ye), ye
        }
        warnings() {
          return this.messages.filter((ee => "warning" === ee.type))
        }
        get content() {
          return this.css
        }
      }
      return ri = ie, ie.default = ie, ri
    }

    function mH() {
      if (yH) return HH;
      yH = 1;
      let ee = xH();
      class ie extends ee {
        constructor(ee) {
          super(ee), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return HH = ie, ie.default = ie, ee.registerAtRule(ie), HH
    }

    function lH() {
      if (MH) return bH;
      MH = 1;
      let ee, ie, He = xH();
      class ye extends He {
        constructor(ee) {
          super(ee), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(ee, ie, He) {
          let ye = super.normalize(ee);
          if (ie)
            if ("prepend" === He) this.nodes.length > 1 ? ie.raws.before = this.nodes[1].raws.before : delete ie.raws.before;
            else if (this.first !== ie)
            for (let be of ye) be.raws.before = ie.raws.before;
          return ye
        }
        removeChild(ee, ie) {
          let He = this.index(ee);
          return !ie && 0 === He && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[He].raws.before), super.removeChild(ee)
        }
        toResult() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new ee(new ie, this, He).stringify()
        }
      }
      return ye.registerLazyResult = ie => {
        ee = ie
      }, ye.registerProcessor = ee => {
        ie = ee
      }, bH = ye, ye.default = ye, He.registerRoot(ye), bH
    }

    function SH() {
      if (UH) return KH;
      UH = 1;
      let ee = {
        comma: ie => ee.split(ie, [","], !0),
        space: ie => ee.split(ie, [" ", "\n", "\t"]),
        split(ee, ie, He) {
          let ye = [],
            be = "",
            Me = !1,
            Ke = 0,
            Ue = !1,
            Fe = "",
            Je = !1;
          for (let oe of ee) Je ? Je = !1 : "\\" === oe ? Je = !0 : Ue ? oe === Fe && (Ue = !1) : '"' === oe || "'" === oe ? (Ue = !0, Fe = oe) : "(" === oe ? Ke += 1 : ")" === oe ? Ke > 0 && (Ke -= 1) : 0 === Ke && ie.includes(oe) && (Me = !0), Me ? ("" !== be && ye.push(be.trim()), be = "", Me = !1) : be += oe;
          return (He || "" !== be) && ye.push(be.trim()), ye
        }
      };
      return KH = ee, ee.default = ee, KH
    }

    function nH() {
      if (JH) return FH;
      JH = 1;
      let ee = xH(),
        ie = SH();
      class He extends ee {
        constructor(ee) {
          super(ee), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return ie.comma(this.selector)
        }
        set selectors(ee) {
          let ie = this.selector ? this.selector.match(/,\s*/) : null,
            He = ie ? ie[0] : "," + this.raw("between", "beforeOpen");
          this.selector = ee.join(He)
        }
      }
      return FH = He, He.default = He, ee.registerRule(He), FH
    }

    function jH() {
      if (RH) return oH;
      RH = 1;
      let ee = PH(),
        ie = function() {
          if (iH) return eH;
          iH = 1;
          const ee = "'".charCodeAt(0),
            ie = '"'.charCodeAt(0),
            He = "\\".charCodeAt(0),
            ye = "/".charCodeAt(0),
            be = "\n".charCodeAt(0),
            Me = " ".charCodeAt(0),
            Ke = "\f".charCodeAt(0),
            Ue = "\t".charCodeAt(0),
            Fe = "\r".charCodeAt(0),
            Je = "[".charCodeAt(0),
            oe = "]".charCodeAt(0),
            Re = "(".charCodeAt(0),
            ke = ")".charCodeAt(0),
            qe = "{".charCodeAt(0),
            fe = "}".charCodeAt(0),
            Te = ";".charCodeAt(0),
            pe = "*".charCodeAt(0),
            Xe = ":".charCodeAt(0),
            ze = "@".charCodeAt(0),
            Be = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            Ee = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            ge = /.[\r\n"'(/\\]/,
            Oe = /[\da-f]/i;
          return eH = function(de) {
            let We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              xe = de.css.valueOf(),
              Le = ce.ignoreErrors,
              Ce = xe.length,
              ve = 0,
              ue = [],
              me = [];

            function le(ee) {
              throw de.error("Unclosed " + ee, ve)
            }
            return {
              back: function(ee) {
                me.push(ee)
              },
              endOfFile: function() {
                return 0 === me.length && ve >= Ce
              },
              nextToken: function(de) {
                if (me.length) return me.pop();
                if (ve >= Ce) return;
                let ce = !!de && de.ignoreUnclosed;
                switch (We = xe.charCodeAt(ve), We) {
                  case be:
                  case Me:
                  case Ue:
                  case Fe:
                  case Ke:
                    te = ve;
                    do {
                      te += 1, We = xe.charCodeAt(te)
                    } while (We === Me || We === be || We === Ue || We === Fe || We === Ke);
                    ae = ["space", xe.slice(ve, te)], ve = te - 1;
                    break;
                  case Je:
                  case oe:
                  case qe:
                  case fe:
                  case Xe:
                  case Te:
                  case ke: {
                    let ee = String.fromCharCode(We);
                    ae = [ee, ee, ve];
                    break
                  }
                  case Re:
                    if (Ye = ue.length ? ue.pop()[1] : "", Ve = xe.charCodeAt(ve + 1), "url" === Ye && Ve !== ee && Ve !== ie && Ve !== Me && Ve !== be && Ve !== Ue && Ve !== Ke && Ve !== Fe) {
                      te = ve;
                      do {
                        if (Pe = !1, te = xe.indexOf(")", te + 1), -1 === te) {
                          if (Le || ce) {
                            te = ve;
                            break
                          }
                          le("bracket")
                        }
                        for (Ae = te; xe.charCodeAt(Ae - 1) === He;) Ae -= 1, Pe = !Pe
                      } while (Pe);
                      ae = ["brackets", xe.slice(ve, te + 1), ve, te], ve = te
                    } else te = xe.indexOf(")", ve + 1), we = xe.slice(ve, te + 1), -1 === te || ge.test(we) ? ae = ["(", "(", ve] : (ae = ["brackets", we, ve, te], ve = te);
                    break;
                  case ee:
                  case ie:
                    Ze = We === ee ? "'" : '"', te = ve;
                    do {
                      if (Pe = !1, te = xe.indexOf(Ze, te + 1), -1 === te) {
                        if (Le || ce) {
                          te = ve + 1;
                          break
                        }
                        le("string")
                      }
                      for (Ae = te; xe.charCodeAt(Ae - 1) === He;) Ae -= 1, Pe = !Pe
                    } while (Pe);
                    ae = ["string", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  case ze:
                    Be.lastIndex = ve + 1, Be.test(xe), te = 0 === Be.lastIndex ? xe.length - 1 : Be.lastIndex - 2, ae = ["at-word", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  case He:
                    for (te = ve, De = !0; xe.charCodeAt(te + 1) === He;) te += 1, De = !De;
                    if (We = xe.charCodeAt(te + 1), De && We !== ye && We !== Me && We !== be && We !== Ue && We !== Fe && We !== Ke && (te += 1, Oe.test(xe.charAt(te)))) {
                      for (; Oe.test(xe.charAt(te + 1));) te += 1;
                      xe.charCodeAt(te + 1) === Me && (te += 1)
                    }
                    ae = ["word", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  default:
                    We === ye && xe.charCodeAt(ve + 1) === pe ? (te = xe.indexOf("*/", ve + 2) + 1, 0 === te && (Le || ce ? te = xe.length : le("comment")), ae = ["comment", xe.slice(ve, te + 1), ve, te], ve = te) : (Ee.lastIndex = ve + 1, Ee.test(xe), te = 0 === Ee.lastIndex ? xe.length - 1 : Ee.lastIndex - 2, ae = ["word", xe.slice(ve, te + 1), ve, te], ue.push(ae), ve = te)
                }
                return ve++, ae
              },
              position: function() {
                return ve
              }
            }
          }, eH
        }(),
        He = cH(),
        ye = mH(),
        be = lH(),
        Me = nH();
      const Ke = {
        empty: !0,
        space: !0
      };
      return oH = class {
        constructor(ee) {
          this.input = ee, this.root = new be, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: ee,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(ee) {
          let ie, He, be, Me = new ye;
          Me.name = ee[1].slice(1), "" === Me.name && this.unnamedAtrule(Me, ee), this.init(Me, ee[2]);
          let Ke = !1,
            Ue = !1,
            Fe = [],
            Je = [];
          for (; !this.tokenizer.endOfFile();) {
            if (ie = (ee = this.tokenizer.nextToken())[0], "(" === ie || "[" === ie ? Je.push("(" === ie ? ")" : "]") : "{" === ie && Je.length > 0 ? Je.push("}") : ie === Je[Je.length - 1] && Je.pop(), 0 === Je.length) {
              if (";" === ie) {
                Me.source.end = this.pE(ee[2]), Me.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === ie) {
                Ue = !0;
                break
              }
              if ("}" === ie) {
                if (Fe.length > 0) {
                  for (be = Fe.length - 1, He = Fe[be]; He && "space" === He[0];) He = Fe[--be];
                  He && (Me.source.end = this.pE(He[3] || He[2]), Me.source.end.offset++)
                }
                this.end(ee);
                break
              }
              Fe.push(ee)
            } else Fe.push(ee);
            if (this.tokenizer.endOfFile()) {
              Ke = !0;
              break
            }
          }
          Me.raws.between = this.spacesAndCommentsFromEnd(Fe), Fe.length ? (Me.raws.afterName = this.spacesAndCommentsFromStart(Fe), this.raw(Me, "params", Fe), Ke && (ee = Fe[Fe.length - 1], Me.source.end = this.pE(ee[3] || ee[2]), Me.source.end.offset++, this.spaces = Me.raws.between, Me.raws.between = "")) : (Me.raws.afterName = "", Me.params = ""), Ue && (Me.nodes = [], this.current = Me)
        }
        checkMissedSemicolon(ee) {
          let ie = this.colon(ee);
          if (!1 === ie) return;
          let He, ye = 0;
          for (let be = ie - 1; be >= 0 && (He = ee[be], "space" === He[0] || (ye += 1, 2 !== ye)); be--);
          throw this.input.error("Missed semicolon", "word" === He[0] ? He[3] + 1 : He[2])
        }
        colon(ee) {
          let ie, He, ye, be = 0;
          for (let [Me, Ke] of ee.entries()) {
            if (ie = Ke, He = ie[0], "(" === He && (be += 1), ")" === He && (be -= 1), 0 === be && ":" === He) {
              if (ye) {
                if ("word" === ye[0] && "progid" === ye[1]) continue;
                return Me
              }
              this.doubleColon(ie)
            }
            ye = ie
          }
          return !1
        }
        comment(ee) {
          let ie = new He;
          this.init(ie, ee[2]), ie.source.end = this.pE(ee[3] || ee[2]), ie.source.end.offset++;
          let ye = ee[1].slice(2, -2);
          if (/^\s*$/.test(ye)) ie.text = "", ie.raws.left = ye, ie.raws.right = "";
          else {
            let ee = ye.match(/^(\s*)([^]*\S)(\s*)$/);
            ie.text = ee[2], ie.raws.left = ee[1], ie.raws.right = ee[3]
          }
        }
        createTokenizer() {
          this.tokenizer = ie(this.input)
        }
        decl(ie, He) {
          let ye = new ee;
          this.init(ye, ie[0][2]);
          let be, Me = ie[ie.length - 1];
          for (";" === Me[0] && (this.semicolon = !0, ie.pop()), ye.source.end = this.pE(Me[3] || Me[2] || function(ee) {
              for (let ie = ee.length - 1; ie >= 0; ie--) {
                let He = ee[ie],
                  ye = He[3] || He[2];
                if (ye) return ye
              }
            }(ie)), ye.source.end.offset++;
            "word" !== ie[0][0];) 1 === ie.length && this.unknownWord(ie), ye.raws.before += ie.shift()[1];
          for (ye.source.start = this.pE(ie[0][2]), ye.prop = ""; ie.length;) {
            let ee = ie[0][0];
            if (":" === ee || "space" === ee || "comment" === ee) break;
            ye.prop += ie.shift()[1]
          }
          for (ye.raws.between = ""; ie.length;) {
            if (be = ie.shift(), ":" === be[0]) {
              ye.raws.between += be[1];
              break
            }
            "word" === be[0] && /\w/.test(be[1]) && this.unknownWord([be]), ye.raws.between += be[1]
          }
          "_" !== ye.prop[0] && "*" !== ye.prop[0] || (ye.raws.before += ye.prop[0], ye.prop = ye.prop.slice(1));
          let Ke, Ue = [];
          for (; ie.length && (Ke = ie[0][0], "space" === Ke || "comment" === Ke);) Ue.push(ie.shift());
          this.precheckMissedSemicolon(ie);
          for (let ee = ie.length - 1; ee >= 0; ee--) {
            if (be = ie[ee], "!important" === be[1].toLowerCase()) {
              ye.important = !0;
              let He = this.stringFrom(ie, ee);
              He = this.spacesFromEnd(ie) + He, " !important" !== He && (ye.raws.important = He);
              break
            }
            if ("important" === be[1].toLowerCase()) {
              let He = ie.slice(0),
                be = "";
              for (let ie = ee; ie > 0; ie--) {
                let ee = He[ie][0];
                if (0 === be.trim().indexOf("!") && "space" !== ee) break;
                be = He.pop()[1] + be
              }
              0 === be.trim().indexOf("!") && (ye.important = !0, ye.raws.important = be, ie = He)
            }
            if ("space" !== be[0] && "comment" !== be[0]) break
          }
          ie.some((ee => "space" !== ee[0] && "comment" !== ee[0])) && (ye.raws.between += Ue.map((ee => ee[1])).join(""), Ue = []), this.raw(ye, "value", Ue.concat(ie), He), ye.value.includes(":") && !He && this.checkMissedSemicolon(ie)
        }
        doubleColon(ee) {
          throw this.input.error("Double colon", {
            offset: ee[2]
          }, {
            offset: ee[2] + ee[1].length
          })
        }
        emptyRule(ee) {
          let ie = new Me;
          this.init(ie, ee[2]), ie.selector = "", ie.raws.between = "", this.current = ie
        }
        end(ee) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pE(ee[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(ee)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pE(this.tokenizer.position())
        }
        freeSemicolon(ee) {
          if (this.spaces += ee[1], this.current.nodes) {
            let ee = this.current.nodes[this.current.nodes.length - 1];
            ee && "rule" === ee.type && !ee.raws.ownSemicolon && (ee.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        pE(ee) {
          let ie = this.input.fromOffset(ee);
          return {
            column: ie.col,
            line: ie.line,
            offset: ee
          }
        }
        init(ee, ie) {
          this.current.push(ee), ee.source = {
            input: this.input,
            start: this.pE(ie)
          }, ee.raws.before = this.spaces, this.spaces = "", "comment" !== ee.type && (this.semicolon = !1)
        }
        other(ee) {
          let ie = !1,
            He = null,
            ye = !1,
            be = null,
            Me = [],
            Ke = ee[1].startsWith("--"),
            Ue = [],
            Fe = ee;
          for (; Fe;) {
            if (He = Fe[0], Ue.push(Fe), "(" === He || "[" === He) be || (be = Fe), Me.push("(" === He ? ")" : "]");
            else if (Ke && ye && "{" === He) be || (be = Fe), Me.push("}");
            else if (0 === Me.length) {
              if (";" === He) {
                if (ye) return void this.decl(Ue, Ke);
                break
              }
              if ("{" === He) return void this.rule(Ue);
              if ("}" === He) {
                this.tokenizer.back(Ue.pop()), ie = !0;
                break
              }
              ":" === He && (ye = !0)
            } else He === Me[Me.length - 1] && (Me.pop(), 0 === Me.length && (be = null));
            Fe = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (ie = !0), Me.length > 0 && this.unclosedBracket(be), ie && ye) {
            if (!Ke)
              for (; Ue.length && (Fe = Ue[Ue.length - 1][0], "space" === Fe || "comment" === Fe);) this.tokenizer.back(Ue.pop());
            this.decl(Ue, Ke)
          } else this.unknownWord(Ue)
        }
        parse() {
          let ee;
          for (; !this.tokenizer.endOfFile();) switch (ee = this.tokenizer.nextToken(), ee[0]) {
            case "space":
              this.spaces += ee[1];
              break;
            case ";":
              this.freeSemicolon(ee);
              break;
            case "}":
              this.end(ee);
              break;
            case "comment":
              this.comment(ee);
              break;
            case "at-word":
              this.atrule(ee);
              break;
            case "{":
              this.emptyRule(ee);
              break;
            default:
              this.other(ee)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(ee, ie, He, ye) {
          let be, Me, Ue, Fe, Je = He.length,
            oe = "",
            Re = !0;
          for (let ke = 0; ke < Je; ke += 1) be = He[ke], Me = be[0], "space" !== Me || ke !== Je - 1 || ye ? "comment" === Me ? (Fe = He[ke - 1] ? He[ke - 1][0] : "empty", Ue = He[ke + 1] ? He[ke + 1][0] : "empty", Ke[Fe] || Ke[Ue] || "," === oe.slice(-1) ? Re = !1 : oe += be[1]) : oe += be[1] : Re = !1;
          if (!Re) {
            let ye = He.reduce(((ee, ie) => ee + ie[1]), "");
            ee.raws[ie] = {
              raw: ye,
              value: oe
            }
          }
          ee[ie] = oe
        }
        rule(ee) {
          ee.pop();
          let ie = new Me;
          this.init(ie, ee[0][2]), ie.raws.between = this.spacesAndCommentsFromEnd(ee), this.raw(ie, "selector", ee), this.current = ie
        }
        spacesAndCommentsFromEnd(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[ee.length - 1][0], "space" === ie || "comment" === ie);) He = ee.pop()[1] + He;
          return He
        }
        spacesAndCommentsFromStart(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[0][0], "space" === ie || "comment" === ie);) He += ee.shift()[1];
          return He
        }
        spacesFromEnd(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[ee.length - 1][0], "space" === ie);) He = ee.pop()[1] + He;
          return He
        }
        stringFrom(ee, ie) {
          let He = "";
          for (let ye = ie; ye < ee.length; ye++) He += ee[ye][1];
          return ee.splice(ie, ee.length - ie), He
        }
        unclosedBlock() {
          let ee = this.current.source.start;
          throw this.input.error("Unclosed block", ee.line, ee.column)
        }
        unclosedBracket(ee) {
          throw this.input.error("Unclosed bracket", {
            offset: ee[2]
          }, {
            offset: ee[2] + 1
          })
        }
        unexpectedClose(ee) {
          throw this.input.error("Unexpected }", {
            offset: ee[2]
          }, {
            offset: ee[2] + 1
          })
        }
        unknownWord(ee) {
          throw this.input.error("Unknown word", {
            offset: ee[0][2]
          }, {
            offset: ee[0][2] + ee[0][1].length
          })
        }
        unnamedAtrule(ee, ie) {
          throw this.input.error("At-rule without name", {
            offset: ie[2]
          }, {
            offset: ie[2] + ie[1].length
          })
        }
      }
    }

    function sH() {
      if (qH) return kH;
      qH = 1;
      let ee = xH(),
        ie = jH(),
        He = VH();

      function ye(ee, ye) {
        let be = new He(ee, ye),
          Me = new ie(be);
        try {
          Me.parse()
        } catch (Ke) {
          throw Ke
        }
        return Me.root
      }
      return kH = ye, ye.default = ye, ee.registerParse(ye), kH
    }

    function IH() {
      if (TH) return fH;
      TH = 1;
      let {
        isClean: ee,
        my: ie
      } = tH(), He = aH(), ye = wH(), be = xH(), Me = LH(), Ke = (CH(), uH()), Ue = sH(), Fe = lH();
      const Je = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        oe = {
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
        Re = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function ke(ee) {
        return "object" === typeof ee && "function" === typeof ee.then
      }

      function qe(ee) {
        let ie = !1,
          He = Je[ee.type];
        return "decl" === ee.type ? ie = ee.prop.toLowerCase() : "atrule" === ee.type && (ie = ee.name.toLowerCase()), ie && ee.append ? [He, He + "-" + ie, 0, He + "Exit", He + "Exit-" + ie] : ie ? [He, He + "-" + ie, He + "Exit", He + "Exit-" + ie] : ee.append ? [He, 0, He + "Exit"] : [He, He + "Exit"]
      }

      function fe(ee) {
        let ie;
        return ie = "document" === ee.type ? ["Document", 0, "DocumentExit"] : "root" === ee.type ? ["Root", 0, "RootExit"] : qe(ee), {
          eventIndex: 0,
          events: ie,
          iterator: 0,
          node: ee,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Te(ie) {
        return ie[ee] = !1, ie.nodes && ie.nodes.forEach((ee => Te(ee))), ie
      }
      let pe = {};
      class Xe {
        constructor(ee, He, ye) {
          let Me;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof He || null === He || "root" !== He.type && "document" !== He.type)
            if (He instanceof Xe || He instanceof Ke) Me = Te(He.root), He.map && ("undefined" === typeof ye.map && (ye.map = {}), ye.map.inline || (ye.map.inline = !1), ye.map.prev = He.map);
            else {
              let ee = Ue;
              ye.syntax && (ee = ye.syntax.parse), ye.parser && (ee = ye.parser), ee.parse && (ee = ee.parse);
              try {
                Me = ee(He, ye)
              } catch (Fe) {
                this.processed = !0, this.error = Fe
              }
              Me && !Me[ie] && be.rebuild(Me)
            }
          else Me = Te(He);
          this.result = new Ke(ee, Me, ye), this.helpers = {
            ...pe,
            postcss: pe,
            result: this.result
          }, this.plugins = this.processor.plugins.map((ee => "object" === typeof ee && ee.prepare ? {
            ...ee,
            ...ee.prepare(this.result)
          } : ee))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (ee) {
          return this.async().catch(ee)
        } finally(ee) {
          return this.async().then(ee, ee)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(ee, ie) {
          let He = this.result.lastPlugin;
          try {
            ie && ie.addToError(ee), this.error = ee, "CssSyntaxError" !== ee.name || ee.plugin ? He.postcssVersion : (ee.plugin = He.postcssPlugin, ee.setMessage())
          } catch (ye) {
            console && console.error && console.error(ye)
          }
          return ee
        }
        prepareVisitors() {
          this.listeners = {};
          let ee = (ee, ie, He) => {
            this.listeners[ie] || (this.listeners[ie] = []), this.listeners[ie].push([ee, He])
          };
          for (let ie of this.plugins)
            if ("object" === typeof ie)
              for (let He in ie) {
                if (!oe[He] && /^[A-Z]/.test(He)) throw new Error(`Unknown event ${He} in ${ie.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!Re[He])
                  if ("object" === typeof ie[He])
                    for (let ye in ie[He]) ee(ie, "*" === ye ? He : He + "-" + ye.toLowerCase(), ie[He][ye]);
                  else "function" === typeof ie[He] && ee(ie, He, ie[He])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let ee = 0; ee < this.plugins.length; ee++) {
            let He = this.plugins[ee],
              ye = this.runOnRoot(He);
            if (ke(ye)) try {
              await ye
            } catch (ie) {
              throw this.handleError(ie)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let ie = this.result.root;
            for (; !ie[ee];) {
              ie[ee] = !0;
              let ye = [fe(ie)];
              for (; ye.length > 0;) {
                let ee = this.visitTick(ye);
                if (ke(ee)) try {
                  await ee
                } catch (He) {
                  let ee = ye[ye.length - 1].node;
                  throw this.handleError(He, ee)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [ee, ye] of this.listeners.OnceExit) {
                this.result.lastPlugin = ee;
                try {
                  if ("document" === ie.type) {
                    let ee = ie.nodes.map((ee => ye(ee, this.helpers)));
                    await Promise.all(ee)
                  } else await ye(ie, this.helpers)
                } catch (He) {
                  throw this.handleError(He)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(ee) {
          this.result.lastPlugin = ee;
          try {
            if ("object" === typeof ee && ee.Once) {
              if ("document" === this.result.root.type) {
                let ie = this.result.root.nodes.map((ie => ee.Once(ie, this.helpers)));
                return ke(ie[0]) ? Promise.all(ie) : ie
              }
              return ee.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof ee) return ee(this.result.root, this.result)
          } catch (ie) {
            throw this.handleError(ie)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let ee = this.result.opts,
            ie = ye;
          ee.syntax && (ie = ee.syntax.stringify), ee.stringifier && (ie = ee.stringifier), ie.stringify && (ie = ie.stringify);
          let be = new He(ie, this.result.root, this.result.opts).generate();
          return this.result.css = be[0], this.result.map = be[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let ee of this.plugins) {
            if (ke(this.runOnRoot(ee))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let ie = this.result.root;
            for (; !ie[ee];) ie[ee] = !0, this.walkSync(ie);
            if (this.listeners.OnceExit)
              if ("document" === ie.type)
                for (let ee of ie.nodes) this.visitSync(this.listeners.OnceExit, ee);
              else this.visitSync(this.listeners.OnceExit, ie)
          }
          return this.result
        }
        then(ee, ie) {
          return this.async().then(ee, ie)
        }
        toString() {
          return this.css
        }
        visitSync(ee, ie) {
          for (let [ye, be] of ee) {
            let ee;
            this.result.lastPlugin = ye;
            try {
              ee = be(ie, this.helpers)
            } catch (He) {
              throw this.handleError(He, ie.proxyOf)
            }
            if ("root" !== ie.type && "document" !== ie.type && !ie.parent) return !0;
            if (ke(ee)) throw this.getAsyncError()
          }
        }
        visitTick(ie) {
          let He = ie[ie.length - 1],
            {
              node: ye,
              visitors: be
            } = He;
          if ("root" !== ye.type && "document" !== ye.type && !ye.parent) return void ie.pop();
          if (be.length > 0 && He.visitorIndex < be.length) {
            let [ee, ie] = be[He.visitorIndex];
            He.visitorIndex += 1, He.visitorIndex === be.length && (He.visitors = [], He.visitorIndex = 0), this.result.lastPlugin = ee;
            try {
              return ie(ye.toProxy(), this.helpers)
            } catch (Ke) {
              throw this.handleError(Ke, ye)
            }
          }
          if (0 !== He.iterator) {
            let be, Me = He.iterator;
            for (; be = ye.nodes[ye.indexes[Me]];)
              if (ye.indexes[Me] += 1, !be[ee]) return be[ee] = !0, void ie.push(fe(be));
            He.iterator = 0, delete ye.indexes[Me]
          }
          let Me = He.events;
          for (; He.eventIndex < Me.length;) {
            let ie = Me[He.eventIndex];
            if (He.eventIndex += 1, 0 === ie) return void(ye.nodes && ye.nodes.length && (ye[ee] = !0, He.iterator = ye.getIterator()));
            if (this.listeners[ie]) return void(He.visitors = this.listeners[ie])
          }
          ie.pop()
        }
        walkSync(ie) {
          ie[ee] = !0;
          let He = qe(ie);
          for (let ye of He)
            if (0 === ye) ie.nodes && ie.each((ie => {
              ie[ee] || this.walkSync(ie)
            }));
            else {
              let ee = this.listeners[ye];
              if (ee && this.visitSync(ee, ie.toProxy())) return
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
      return Xe.registerPostcss = ee => {
        pe = ee
      }, fH = Xe, Xe.default = Xe, Fe.registerLazyResult(Xe), Me.registerLazyResult(Xe), fH
    }

    function hH() {
      if (BH) return zH;
      BH = 1;
      let ee = function() {
          if (XH) return pH;
          XH = 1;
          let ee = aH(),
            ie = wH(),
            He = (CH(), sH());
          const ye = uH();
          class be {
            constructor(He, be, Me) {
              let Ke;
              be = be.toString(), this.stringified = !1, this._processor = He, this._css = be, this._opts = Me, this._map = void 0;
              let Ue = ie;
              this.result = new ye(this._processor, Ke, this._opts), this.result.css = be;
              let Fe = this;
              Object.defineProperty(this.result, "root", {
                get: () => Fe.root
              });
              let Je = new ee(Ue, Ke, this._opts, be);
              if (Je.isMap()) {
                let [ee, ie] = Je.generate();
                ee && (this.result.css = ee), ie && (this.result.map = ie)
              } else Je.clearAnnotation(), this.result.css = Je.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (ee) {
              return this.async().catch(ee)
            } finally(ee) {
              return this.async().then(ee, ee)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(ee, ie) {
              return this.async().then(ee, ie)
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
              let ee, ie = He;
              try {
                ee = ie(this._css, this._opts)
              } catch (ye) {
                this.error = ye
              }
              if (this.error) throw this.error;
              return this._root = ee, ee
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return pH = be, be.default = be, pH
        }(),
        ie = IH(),
        He = LH(),
        ye = lH();
      class be {
        constructor() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(ee)
        }
        normalize(ee) {
          let ie = [];
          for (let He of ee)
            if (!0 === He.postcss ? He = He() : He.postcss && (He = He.postcss), "object" === typeof He && Array.isArray(He.plugins)) ie = ie.concat(He.plugins);
            else if ("object" === typeof He && He.postcssPlugin) ie.push(He);
          else if ("function" === typeof He) ie.push(He);
          else {
            if ("object" !== typeof He || !He.parse && !He.stringify) throw new Error(He + " is not a PostCSS plugin")
          }
          return ie
        }
        process(He) {
          let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || ye.parser || ye.stringifier || ye.syntax ? new ie(this, He, ye) : new ee(this, He, ye)
        }
        use(ee) {
          return this.plugins = this.plugins.concat(this.normalize([ee])), this
        }
      }
      return zH = be, be.default = be, ye.registerProcessor(be), He.registerProcessor(be), zH
    }
    const NH = ki(function() {
      if (dH) return OH;
      dH = 1;
      let ee = gi(),
        ie = PH(),
        He = IH(),
        ye = xH(),
        be = hH(),
        Me = wH(),
        Ke = function() {
          if (gH) return EH;
          gH = 1;
          let ee = PH(),
            ie = YH(),
            He = cH(),
            ye = mH(),
            be = VH(),
            Me = lH(),
            Ke = nH();

          function Ue(Fe, Je) {
            if (Array.isArray(Fe)) return Fe.map((ee => Ue(ee)));
            let {
              inputs: oe,
              ...Re
            } = Fe;
            if (oe) {
              Je = [];
              for (let ee of oe) {
                let He = {
                  ...ee,
                  __proto__: be.prototype
                };
                He.map && (He.map = {
                  ...He.map,
                  __proto__: ie.prototype
                }), Je.push(He)
              }
            }
            if (Re.nodes && (Re.nodes = Fe.nodes.map((ee => Ue(ee, Je)))), Re.source) {
              let {
                inputId: ee,
                ...ie
              } = Re.source;
              Re.source = ie, null != ee && (Re.source.input = Je[ee])
            }
            if ("root" === Re.type) return new Me(Re);
            if ("decl" === Re.type) return new ee(Re);
            if ("rule" === Re.type) return new Ke(Re);
            if ("comment" === Re.type) return new He(Re);
            if ("atrule" === Re.type) return new ye(Re);
            throw new Error("Unknown node type: " + Fe.type)
          }
          return EH = Ue, Ue.default = Ue, EH
        }(),
        Ue = LH(),
        Fe = vH(),
        Je = cH(),
        oe = mH(),
        Re = uH(),
        ke = VH(),
        qe = sH(),
        fe = SH(),
        Te = nH(),
        pe = lH(),
        Xe = DH();

      function ze() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return 1 === ie.length && Array.isArray(ie[0]) && (ie = ie[0]), new be(ie)
      }
      return ze.plugin = function(ee, ie) {
        let He, ye = !1;

        function Me() {
          console && console.warn && !ye && (ye = !0, console.warn(ee + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(ee + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let He = ie(...arguments);
          return He.postcssPlugin = ee, He.postcssVersion = (new be).version, He
        }
        return Object.defineProperty(Me, "postcss", {
          get: () => (He || (He = Me()), He)
        }), Me.process = function(ee, ie, He) {
          return ze([Me(He)]).process(ee, ie)
        }, Me
      }, ze.stringify = Me, ze.parse = qe, ze.fromJSON = Ke, ze.list = fe, ze.comment = ee => new Je(ee), ze.atRule = ee => new oe(ee), ze.decl = ee => new ie(ee), ze.rule = ee => new Te(ee), ze.root = ee => new pe(ee), ze.document = ee => new Ue(ee), ze.CssSyntaxError = ee, ze.Declaration = ie, ze.ZC = ye, ze.Processor = be, ze.Document = Ue, ze.Comment = Je, ze.Warning = Fe, ze.AtRule = oe, ze.Result = Re, ze.Input = ke, ze.Rule = Te, ze.Root = pe, ze.Node = Xe, He.registerPostcss(ze), OH = ze, ze.default = ze, OH
    }());
    NH.stringify, NH.fromJSON, NH.plugin, NH.parse, NH.list, NH.document, NH.comment, NH.atRule, NH.rule, NH.decl, NH.root, NH.CssSyntaxError, NH.Declaration, NH.ZC, NH.Processor, NH.Document, NH.Comment, NH.Warning, NH.AtRule, NH.Result, NH.Input, NH.Rule, NH.Root, NH.Node;
    const GH = {
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

    function rH(ee, ie) {
      const He = null == ie ? void 0 : ie.stylesWithHoverClass.get(ee);
      if (He) return He;
      let ye = ee;
      try {
        ye = NH([oi, Ri]).process(ee).css
      } catch (be) {
        console.warn("Failed to adapt css for replay", be)
      }
      return null == ie || ie.stylesWithHoverClass.set(ee, ye), ye
    }

    function QH() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const ey = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      iy = new WeakSet;

    function Hy(ee) {
      if (ee.UNSAFE_allowUnprotectedRebuild) return;
      const ie = ee.doc.defaultView;
      if (ie && (!iy.has(ee.doc) || ! function(ee) {
          if (!ee || "IFRAME" !== ee.tagName) return !1;
          if (!("sandbox" in ee)) return !1;
          const ie = Array.from(ee.sandbox);
          return 1 === ie.length && "allow-same-origin" === ie[0]
        }(ie.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function yy(ee, ie, He, ye) {
      const {
        doc: be,
        hackCss: Me,
        cache: Ke
      } = ye;
      ee.childNodes.length ? function(ee, ie, He, ye) {
        const be = [];
        for (const oe of ee.childNodes) oe.type === Fe.Text && be.push(oe);
        const Me = ie.split("/* rr_split */");
        for (; Me.length > 1 && Me.length > be.length;) Me.splice(-2, 2, Me.slice(-2).join(""));
        let Ke = "";
        He && (Ke = rH(Me.join(""), ye));
        let Ue = 0,
          Je = -1;
        for (let Fe = 0; Fe < be.length && Fe !== Me.length; Fe++) {
          const ee = be[Fe];
          let ie = Me[Fe];
          const ye = Fe < Me.length - 1 ? Me[Fe + 1] : null;
          if (He && ye) {
            let ee = Ue,
              He = ye.length;
            He = Math.min(He, 30);
            let be = !1;
            for (; He > 2; He--) {
              const ie = ye.substring(0, He),
                Me = Ke.substring(Ue).indexOf(ie);
              if (be = -1 !== Me, be) {
                ee += Me;
                break
              }
            }
            be || (ee += ie.length), ie = Ke.substring(Ue, ee), Ue = ee
          } else He && (ie = Ke.substring(Ue)); - 1 !== Je && (ie = ie.substring(Je)), ye && (-1 !== Je || ie.endsWith("0p") && ye.startsWith("x")) && (Je = ye.indexOf("}"), -1 !== Je && (Je += 1, ie += ye.substring(0, Je))), ee.textContent = ie
        }
      }(ee, He, Me, Ke) : (Me && (He = rH(He, Ke)), ie.appendChild(be.createTextNode(He)))
    }

    function by(ee, ie) {
      var He;
      const {
        doc: ye,
        hackCss: be,
        cache: Me
      } = ie;
      switch (ee.type) {
        case Fe.Document:
          return ye.implementation.createDocument(null, "", null);
        case Fe.DocumentType:
          return ye.implementation.createDocumentType(ee.name || "html", ee.publicId, ee.systemId);
        case Fe.Element: {
          const be = function(ee) {
            let ie = GH[ee.tagName] ? GH[ee.tagName] : ee.tagName;
            return "link" === ie && ee.attributes._cssText && (ie = "style"), ie
          }(ee);
          let Me;
          ee.isSVG ? Me = ye.createElementNS("http://www.w3.org/2000/svg", be) : (ee.isCustom && (null == (He = ye.defaultView) ? void 0 : He.customElements) && !ye.defaultView.customElements.get(ee.tagName) && ye.defaultView.customElements.define(ee.tagName, class extends ye.defaultView.HTMLElement {}), Me = ye.createElement(be));
          const Ue = {};
          for (const He in ee.attributes) {
            if (!Object.prototype.hasOwnProperty.call(ee.attributes, He)) continue;
            let Fe = ee.attributes[He];
            if (("option" !== be || "selected" !== He || !1 !== Fe) && null !== Fe)
              if (!0 === Fe && (Fe = ""), He.startsWith("rr_")) Ue[He] = Fe;
              else {
                if ("string" !== typeof Fe);
                else {
                  if ("style" === be && "_cssText" === He) {
                    yy(ee, Me, Fe, ie);
                    continue
                  }
                  if ("textarea" === be && "value" === He) {
                    Me.appendChild(ye.createTextNode(Fe)), ee.childNodes = [];
                    continue
                  }
                }
                try {
                  if (ee.isSVG && "xlink:href" === He) Me.setAttributeNS("http://www.w3.org/1999/xlink", He, Fe.toString());
                  else if ("onload" === He || "onclick" === He || "onmouse" === He.substring(0, 7)) Me.setAttribute("_" + He, Fe.toString());
                  else {
                    if ("meta" === be && "Content-Security-Policy" === ee.attributes["http-equiv"] && "content" === He) {
                      Me.setAttribute("csp-content", Fe.toString());
                      continue
                    }
                    "link" === be && ("preload" === ee.attributes.rel && "script" === ee.attributes.as || "modulepreload" === ee.attributes.rel) || "link" === be && "prefetch" === ee.attributes.rel && "string" === typeof ee.attributes.href && "js" === Ye(ee.attributes.href) || ("img" === be && ee.attributes.srcset && ee.attributes.rr_dataURL ? Me.setAttribute("rrweb-original-srcset", ee.attributes.srcset) : Me.setAttribute(He, Fe.toString()))
                  }
                } catch (Ke) {}
              }
          }
          for (const ie in Ue) {
            const He = Ue[ie];
            if ("canvas" === be && "rr_dataURL" === ie) {
              const ee = ye.createElement("img");
              ee.onload = () => {
                const ie = Me.getContext("2d");
                ie && ie.drawImage(ee, 0, 0, ee.width, ee.height)
              }, ee.src = He.toString(), Me.RRNodeType && (Me.rr_dataURL = He.toString())
            } else if ("img" === be && "rr_dataURL" === ie) {
              const ie = Me;
              ie.currentSrc.startsWith("data:") || (ie.setAttribute("rrweb-original-src", ee.attributes.src), ie.src = He.toString())
            }
            if ("rr_width" === ie) Me.style.setProperty("width", He.toString());
            else if ("rr_height" === ie) Me.style.setProperty("height", He.toString());
            else if ("rr_mediaCurrentTime" === ie && "number" === typeof He) Me.currentTime = He;
            else if ("rr_mediaState" === ie) switch (He) {
              case "played":
                Me.play().catch((ee => console.warn("media playback error", ee)));
                break;
              case "paused":
                Me.pause()
            } else "rr_mediaPlaybackRate" === ie && "number" === typeof He ? Me.playbackRate = He : "rr_mediaMuted" === ie && "boolean" === typeof He ? Me.muted = He : "rr_mediaLoop" === ie && "boolean" === typeof He ? Me.loop = He : "rr_mediaVolume" === ie && "number" === typeof He ? Me.volume = He : "rr_open_mode" === ie && Me.setAttribute("rr_open_mode", He)
          }
          if (ee.isShadowHost)
            if (Me.shadowRoot)
              for (; Me.shadowRoot.firstChild;) Me.shadowRoot.removeChild(Me.shadowRoot.firstChild);
            else Me.attachShadow({
              mode: "open"
            });
          return "input" !== be && "textarea" !== be || Me.setAttribute("autocomplete", "off"), Me
        }
        case Fe.Text:
          return ee.isStyle && be ? ye.createTextNode(rH(ee.textContent, Me)) : ye.createTextNode(ee.textContent);
        case Fe.CDATA:
          return ye.createCDATASection(ee.textContent);
        case Fe.Comment:
          return ye.createComment(ee.textContent);
        default:
          return null
      }
    }

    function My(ee, ie) {
      const {
        doc: He,
        mirror: ye,
        skipChild: be = !1,
        hackCss: Me = !0,
        afterAppend: Ke,
        cache: Ue
      } = ie;
      if (ye.has(ee.id)) {
        const ie = ye.Abe(ee.id),
          He = ye.getMeta(ie);
        if (oe = ee, (Je = He) && oe && Je.type === oe.type && (Je.type === Fe.Document ? Je.compatMode === oe.compatMode : Je.type === Fe.DocumentType ? Je.name === oe.name && Je.publicId === oe.publicId && Je.systemId === oe.systemId : Je.type === Fe.Comment || Je.type === Fe.Text || Je.type === Fe.CDATA ? Je.textContent === oe.textContent : Je.type === Fe.Element && Je.tagName === oe.tagName && JSON.stringify(Je.attributes) === JSON.stringify(oe.attributes) && Je.isSVG === oe.isSVG && Je.needBlock === oe.needBlock)) return ye.Abe(ee.id)
      }
      var Je, oe;
      let Re = by(ee, {
        doc: He,
        hackCss: Me,
        cache: Ue
      });
      if (!Re) return null;
      if (ee.rootId && ye.Abe(ee.rootId) !== He && ye.replace(ee.rootId, He), ee.type === Fe.Document && (He.close(), He.open(), "BackCompat" === ee.compatMode && ee.childNodes && ee.childNodes[0].type !== Fe.DocumentType && (ee.childNodes[0].type === Fe.Element && "xmlns" in ee.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === ee.childNodes[0].attributes.xmlns ? He.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : He.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), Re = He), ye.add(Re, ee), (ee.type === Fe.Document || ee.type === Fe.Element) && !be)
        for (const ke of ee.childNodes) {
          const ie = My(ke, {
            doc: He,
            mirror: ye,
            skipChild: !1,
            hackCss: Me,
            afterAppend: Ke,
            cache: Ue
          });
          if (ie) {
            if (ke.isShadow && Ee(Re) && Re.shadowRoot) Re.shadowRoot.appendChild(ie);
            else if (ee.type === Fe.Document && ke.type == Fe.Element) {
              const ee = ie;
              let He = null;
              ee.childNodes.forEach((ee => {
                "BODY" === ee.nodeName && (He = ee)
              })), He ? (ee.removeChild(He), Re.appendChild(ie), ee.appendChild(He)) : Re.appendChild(ie)
            } else Re.appendChild(ie);
            Ke && Ke(ie, ke.id)
          } else console.warn("Failed to rebuild", ke)
        }
      return Re
    }

    function Ky(ee, ie) {
      Hy(ie);
      const {
        doc: He,
        onVisit: ye,
        hackCss: be = !0,
        afterAppend: Me,
        cache: Ke,
        mirror: Ue = new te
      } = ie, Je = My(ee, {
        doc: He,
        mirror: Ue,
        skipChild: !1,
        hackCss: be,
        afterAppend: Me,
        cache: Ke
      });
      return function(ee, ie) {
        for (const ye of ee.getIds()) ee.has(ye) && (He = ee.Abe(ye), ie(He));
        var He
      }(Ue, (ee => {
        ye && ye(ee),
          function(ee, ie) {
            const He = ie.getMeta(ee);
            if ((null == He ? void 0 : He.type) !== Fe.Element) return;
            const ye = ee;
            for (const be in He.attributes) {
              if (!Object.prototype.hasOwnProperty.call(He.attributes, be) || !be.startsWith("rr_")) continue;
              const ee = He.attributes[be];
              "rr_scrollLeft" === be && (ye.scrollLeft = ee), "rr_scrollTop" === be && (ye.scrollTop = ee)
            }
          }(ee, Ue)
      })), Je
    }
    var Uy = Object.defineProperty,
      Fy = (ee, ie, He) => ((ee, ie, He) => ie in ee ? Uy(ee, ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: He
      }) : ee[ie] = He)(ee, "symbol" !== typeof ie ? ie + "" : ie, He),
      Jy = Object.defineProperty,
      oy = (ee, ie, He) => ((ee, ie, He) => ie in ee ? Jy(ee, ie, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: He
      }) : ee[ie] = He)(ee, "symbol" !== typeof ie ? ie + "" : ie, He);
    Date.now().toString();
    let Ry = class {
      constructor() {
        oy(this, "idNodeMap", new Map), oy(this, "nodeMetaMap", new WeakMap)
      }
      getId(ee) {
        var ie;
        if (!ee) return -1;
        return (null == (ie = this.getMeta(ee)) ? void 0 : ie.id) ?? -1
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
        this.idNodeMap.delete(ie), ee.childNodes && ee.childNodes.forEach((ee => this.removeNodeFromMap(ee)))
      }
      has(ee) {
        return this.idNodeMap.has(ee)
      }
      hasNode(ee) {
        return this.nodeMetaMap.has(ee)
      }
      add(ee, ie) {
        const He = ie.id;
        this.idNodeMap.set(He, ee), this.nodeMetaMap.set(ee, ie)
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

    function ky(ee) {
      return ee && ee.__esModule && Object.prototype.hasOwnProperty.call(ee, "default") ? ee.default : ee
    }

    function qy(ee) {
      if (ee.__esModule) return ee;
      var ie = ee.default;
      if ("function" == typeof ie) {
        var He = function ee() {
          return this instanceof ee ? Reflect.construct(ie, arguments, this.constructor) : ie.apply(this, arguments)
        };
        He.prototype = ie.prototype
      } else He = {};
      return Object.defineProperty(He, "__esModule", {
        value: !0
      }), Object.keys(ee).forEach((function(ie) {
        var ye = Object.getOwnPropertyDescriptor(ee, ie);
        Object.defineProperty(He, ie, ye.get ? ye : {
          enumerable: !0,
          get: function() {
            return ee[ie]
          }
        })
      })), He
    }
    var fy, Ty = {
      exports: {}
    };

    function py() {
      if (fy) return Ty.exports;
      fy = 1;
      var ee = String,
        ie = function() {
          return {
            isColorSupported: !1,
            reset: ee,
            bold: ee,
            dim: ee,
            italic: ee,
            underline: ee,
            inverse: ee,
            hidden: ee,
            strikethrough: ee,
            black: ee,
            red: ee,
            green: ee,
            yellow: ee,
            blue: ee,
            magenta: ee,
            cyan: ee,
            white: ee,
            gray: ee,
            bgBlack: ee,
            bgRed: ee,
            bgGreen: ee,
            bgYellow: ee,
            bgBlue: ee,
            bgMagenta: ee,
            bgCyan: ee,
            bgWhite: ee
          }
        };
      return Ty.exports = ie(), Ty.exports.createColors = ie, Ty.exports
    }
    const Xy = qy(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var zy, By;

    function Ey() {
      if (By) return zy;
      By = 1;
      let ee = py(),
        ie = Xy;
      class He extends Error {
        constructor(ee, ie, ye, be, Me, Ke) {
          super(ee), this.name = "CssSyntaxError", this.reason = ee, Me && (this.file = Me), be && (this.source = be), Ke && (this.plugin = Ke), "undefined" !== typeof ie && "undefined" !== typeof ye && ("number" === typeof ie ? (this.line = ie, this.column = ye) : (this.line = ie.line, this.column = ie.column, this.endLine = ye.line, this.endColumn = ye.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, He)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(He) {
          if (!this.source) return "";
          let ye = this.source;
          null == He && (He = ee.isColorSupported), ie && He && (ye = ie(ye));
          let be, Me, Ke = ye.split(/\r?\n/),
            Ue = Math.max(this.line - 3, 0),
            Fe = Math.min(this.line + 2, Ke.length),
            Je = String(Fe).length;
          if (He) {
            let {
              bold: ie,
              gray: He,
              red: ye
            } = ee.createColors(!0);
            be = ee => ie(ye(ee)), Me = ee => He(ee)
          } else be = Me = ee => ee;
          return Ke.slice(Ue, Fe).map(((ee, ie) => {
            let He = Ue + 1 + ie,
              ye = " " + (" " + He).slice(-Je) + " | ";
            if (He === this.line) {
              let ie = Me(ye.replace(/\d/g, " ")) + ee.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return be(">") + Me(ye) + ee + "\n " + ie + be("^")
            }
            return " " + Me(ye) + ee
          })).join("\n")
        }
        toString() {
          let ee = this.showSourceCode();
          return ee && (ee = "\n\n" + ee + "\n"), this.name + ": " + this.message + ee
        }
      }
      return zy = He, He.default = He, zy
    }
    var gy, Oy, dy, Wy, ty, Zy, wy, Dy, Py, Ay, Yy, Vy, ay, cy, xy, Ly, Cy, vy, uy, my, ly, Sy, ny, jy, sy, Iy, hy, Ny, Gy, ry, Qy, eb, ib, Hb, yb, bb, Mb, Kb, Ub, Fb, Jb, ob, Rb, kb, qb, fb, Tb, pb, Xb, zb, Bb, Eb, gb, Ob = {};

    function db() {
      return gy || (gy = 1, Ob.isClean = Symbol("isClean"), Ob.my = Symbol("my")), Ob
    }

    function Wb() {
      if (dy) return Oy;
      dy = 1;
      const ee = {
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
      class ie {
        constructor(ee) {
          this.builder = ee
        }
        atrule(ee, ie) {
          let He = "@" + ee.name,
            ye = ee.params ? this.rawValue(ee, "params") : "";
          if ("undefined" !== typeof ee.raws.afterName ? He += ee.raws.afterName : ye && (He += " "), ee.nodes) this.block(ee, He + ye);
          else {
            let be = (ee.raws.between || "") + (ie ? ";" : "");
            this.builder(He + ye + be, ee)
          }
        }
        beforeAfter(ee, ie) {
          let He;
          He = "decl" === ee.type ? this.raw(ee, null, "beforeDecl") : "comment" === ee.type ? this.raw(ee, null, "beforeComment") : "before" === ie ? this.raw(ee, null, "beforeRule") : this.raw(ee, null, "beforeClose");
          let ye = ee.parent,
            be = 0;
          for (; ye && "root" !== ye.type;) be += 1, ye = ye.parent;
          if (He.includes("\n")) {
            let ie = this.raw(ee, null, "indent");
            if (ie.length)
              for (let ee = 0; ee < be; ee++) He += ie
          }
          return He
        }
        block(ee, ie) {
          let He, ye = this.raw(ee, "between", "beforeOpen");
          this.builder(ie + ye + "{", ee, "start"), ee.nodes && ee.nodes.length ? (this.body(ee), He = this.raw(ee, "after")) : He = this.raw(ee, "after", "emptyBody"), He && this.builder(He), this.builder("}", ee, "end")
        }
        body(ee) {
          let ie = ee.nodes.length - 1;
          for (; ie > 0 && "comment" === ee.nodes[ie].type;) ie -= 1;
          let He = this.raw(ee, "semicolon");
          for (let ye = 0; ye < ee.nodes.length; ye++) {
            let be = ee.nodes[ye],
              Me = this.raw(be, "before");
            Me && this.builder(Me), this.stringify(be, ie !== ye || He)
          }
        }
        comment(ee) {
          let ie = this.raw(ee, "left", "commentLeft"),
            He = this.raw(ee, "right", "commentRight");
          this.builder("/*" + ie + ee.text + He + "*/", ee)
        }
        decl(ee, ie) {
          let He = this.raw(ee, "between", "colon"),
            ye = ee.prop + He + this.rawValue(ee, "value");
          ee.important && (ye += ee.raws.important || " !important"), ie && (ye += ";"), this.builder(ye, ee)
        }
        document(ee) {
          this.body(ee)
        }
        raw(ie, He, ye) {
          let be;
          if (ye || (ye = He), He && (be = ie.raws[He], "undefined" !== typeof be)) return be;
          let Me = ie.parent;
          if ("before" === ye) {
            if (!Me || "root" === Me.type && Me.first === ie) return "";
            if (Me && "document" === Me.type) return ""
          }
          if (!Me) return ee[ye];
          let Ke = ie.root();
          if (Ke.rawCache || (Ke.rawCache = {}), "undefined" !== typeof Ke.rawCache[ye]) return Ke.rawCache[ye];
          if ("before" === ye || "after" === ye) return this.beforeAfter(ie, ye);
          {
            let ee = "raw" + ((Ue = ye)[0].toUpperCase() + Ue.slice(1));
            this[ee] ? be = this[ee](Ke, ie) : Ke.walk((ee => {
              if (be = ee.raws[He], "undefined" !== typeof be) return !1
            }))
          }
          var Ue;
          return "undefined" === typeof be && (be = ee[ye]), Ke.rawCache[ye] = be, be
        }
        rawBeforeClose(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && ee.nodes.length > 0 && "undefined" !== typeof ee.raws.after) return ie = ee.raws.after, ie.includes("\n") && (ie = ie.replace(/[^\n]+$/, "")), !1
          })), ie && (ie = ie.replace(/\S/g, "")), ie
        }
        rawBeforeComment(ee, ie) {
          let He;
          return ee.walkComments((ee => {
            if ("undefined" !== typeof ee.raws.before) return He = ee.raws.before, He.includes("\n") && (He = He.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof He ? He = this.raw(ie, null, "beforeDecl") : He && (He = He.replace(/\S/g, "")), He
        }
        rawBeforeDecl(ee, ie) {
          let He;
          return ee.walkDecls((ee => {
            if ("undefined" !== typeof ee.raws.before) return He = ee.raws.before, He.includes("\n") && (He = He.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof He ? He = this.raw(ie, null, "beforeRule") : He && (He = He.replace(/\S/g, "")), He
        }
        rawBeforeOpen(ee) {
          let ie;
          return ee.walk((ee => {
            if ("decl" !== ee.type && (ie = ee.raws.between, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawBeforeRule(ee) {
          let ie;
          return ee.walk((He => {
            if (He.nodes && (He.parent !== ee || ee.first !== He) && "undefined" !== typeof He.raws.before) return ie = He.raws.before, ie.includes("\n") && (ie = ie.replace(/[^\n]+$/, "")), !1
          })), ie && (ie = ie.replace(/\S/g, "")), ie
        }
        rawColon(ee) {
          let ie;
          return ee.walkDecls((ee => {
            if ("undefined" !== typeof ee.raws.between) return ie = ee.raws.between.replace(/[^\s:]/g, ""), !1
          })), ie
        }
        rawEmptyBody(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && 0 === ee.nodes.length && (ie = ee.raws.after, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawIndent(ee) {
          if (ee.raws.indent) return ee.raws.indent;
          let ie;
          return ee.walk((He => {
            let ye = He.parent;
            if (ye && ye !== ee && ye.parent && ye.parent === ee && "undefined" !== typeof He.raws.before) {
              let ee = He.raws.before.split("\n");
              return ie = ee[ee.length - 1], ie = ie.replace(/\S/g, ""), !1
            }
          })), ie
        }
        rawSemicolon(ee) {
          let ie;
          return ee.walk((ee => {
            if (ee.nodes && ee.nodes.length && "decl" === ee.last.type && (ie = ee.raws.semicolon, "undefined" !== typeof ie)) return !1
          })), ie
        }
        rawValue(ee, ie) {
          let He = ee[ie],
            ye = ee.raws[ie];
          return ye && ye.value === He ? ye.raw : He
        }
        root(ee) {
          this.body(ee), ee.raws.after && this.builder(ee.raws.after)
        }
        rule(ee) {
          this.block(ee, this.rawValue(ee, "selector")), ee.raws.ownSemicolon && this.builder(ee.raws.ownSemicolon, ee, "end")
        }
        stringify(ee, ie) {
          if (!this[ee.type]) throw new Error("Unknown AST node type " + ee.type + ". Maybe you need to change PostCSS stringifier.");
          this[ee.type](ee, ie)
        }
      }
      return Oy = ie, ie.default = ie, Oy
    }

    function tb() {
      if (ty) return Wy;
      ty = 1;
      let ee = Wb();

      function ie(ie, He) {
        new ee(He).stringify(ie)
      }
      return Wy = ie, ie.default = ie, Wy
    }

    function Zb() {
      if (wy) return Zy;
      wy = 1;
      let {
        isClean: ee,
        my: ie
      } = db(), He = Ey(), ye = Wb(), be = tb();

      function Me(ee, ie) {
        let He = new ee.constructor;
        for (let ye in ee) {
          if (!Object.prototype.hasOwnProperty.call(ee, ye)) continue;
          if ("proxyCache" === ye) continue;
          let be = ee[ye],
            Ke = typeof be;
          "parent" === ye && "object" === Ke ? ie && (He[ye] = ie) : "source" === ye ? He[ye] = be : Array.isArray(be) ? He[ye] = be.map((ee => Me(ee, He))) : ("object" === Ke && null !== be && (be = Me(be)), He[ye] = be)
        }
        return He
      }
      class Ke {
        constructor() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[ee] = !1, this[ie] = !0;
          for (let ee in He)
            if ("nodes" === ee) {
              this.nodes = [];
              for (let ie of He[ee]) "function" === typeof ie.clone ? this.append(ie.clone()) : this.append(ie)
            } else this[ee] = He[ee]
        }
        addToError(ee) {
          if (ee.postcssNode = this, ee.stack && this.source && /\n\s{4}at /.test(ee.stack)) {
            let ie = this.source;
            ee.stack = ee.stack.replace(/\n\s{4}at /, `$&${ie.input.from}:${ie.start.line}:${ie.start.column}$&`)
          }
          return ee
        }
        after(ee) {
          return this.parent.insertAfter(this, ee), this
        }
        assign() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let ie in ee) this[ie] = ee[ie];
          return this
        }
        before(ee) {
          return this.parent.insertBefore(this, ee), this
        }
        cleanRaws(ee) {
          delete this.raws.before, delete this.raws.after, ee || delete this.raws.between
        }
        clone() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = Me(this);
          for (let He in ee) ie[He] = ee[He];
          return ie
        }
        cloneAfter() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = this.clone(ee);
          return this.parent.insertAfter(this, ie), ie
        }
        cloneBefore() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            ie = this.clone(ee);
          return this.parent.insertBefore(this, ie), ie
        }
        error(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: He,
              start: ye
            } = this.rangeBy(ie);
            return this.source.input.error(ee, {
              column: ye.column,
              line: ye.line
            }, {
              column: He.column,
              line: He.line
            }, ie)
          }
          return new He(ee)
        }
        getProxyProcessor() {
          return {
            get: (ee, ie) => "proxyOf" === ie ? ee : "root" === ie ? () => ee.root().toProxy() : ee[ie],
            set: (ee, ie, He) => (ee[ie] === He || (ee[ie] = He, "prop" !== ie && "value" !== ie && "name" !== ie && "params" !== ie && "important" !== ie && "text" !== ie || ee.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[ee]) {
            this[ee] = !1;
            let ie = this;
            for (; ie = ie.parent;) ie[ee] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let ee = this.parent.index(this);
          return this.parent.nodes[ee + 1]
        }
        positionBy(ee, ie) {
          let He = this.source.start;
          if (ee.index) He = this.positionInside(ee.index, ie);
          else if (ee.word) {
            let ye = (ie = this.toString()).indexOf(ee.word); - 1 !== ye && (He = this.positionInside(ye, ie))
          }
          return He
        }
        positionInside(ee, ie) {
          let He = ie || this.toString(),
            ye = this.source.start.column,
            be = this.source.start.line;
          for (let Me = 0; Me < ee; Me++) "\n" === He[Me] ? (ye = 1, be += 1) : ye += 1;
          return {
            column: ye,
            line: be
          }
        }
        prev() {
          if (!this.parent) return;
          let ee = this.parent.index(this);
          return this.parent.nodes[ee - 1]
        }
        rangeBy(ee) {
          let ie = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            He = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: ie.column + 1,
              line: ie.line
            };
          if (ee.word) {
            let ye = this.toString(),
              be = ye.indexOf(ee.word); - 1 !== be && (ie = this.positionInside(be, ye), He = this.positionInside(be + ee.word.length, ye))
          } else ee.start ? ie = {
            column: ee.start.column,
            line: ee.start.line
          } : ee.index && (ie = this.positionInside(ee.index)), ee.end ? He = {
            column: ee.end.column,
            line: ee.end.line
          } : "number" === typeof ee.endIndex ? He = this.positionInside(ee.endIndex) : ee.index && (He = this.positionInside(ee.index + 1));
          return (He.line < ie.line || He.line === ie.line && He.column <= ie.column) && (He = {
            column: ie.column + 1,
            line: ie.line
          }), {
            end: He,
            start: ie
          }
        }
        raw(ee, ie) {
          return (new ye).raw(this, ee, ie)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let ye = this,
              be = !1;
            for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
            for (let ee of ie) ee === this ? be = !0 : be ? (this.parent.insertAfter(ye, ee), ye = ee) : this.parent.insertBefore(ye, ee);
            be || this.remove()
          }
          return this
        }
        root() {
          let ee = this;
          for (; ee.parent && "document" !== ee.parent.type;) ee = ee.parent;
          return ee
        }
        toJSON(ee, ie) {
          let He = {},
            ye = null == ie;
          ie = ie || new Map;
          let be = 0;
          for (let Me in this) {
            if (!Object.prototype.hasOwnProperty.call(this, Me)) continue;
            if ("parent" === Me || "proxyCache" === Me) continue;
            let ee = this[Me];
            if (Array.isArray(ee)) He[Me] = ee.map((ee => "object" === typeof ee && ee.toJSON ? ee.toJSON(null, ie) : ee));
            else if ("object" === typeof ee && ee.toJSON) He[Me] = ee.toJSON(null, ie);
            else if ("source" === Me) {
              let ye = ie.get(ee.input);
              null == ye && (ye = be, ie.set(ee.input, be), be++), He[Me] = {
                end: ee.end,
                inputId: ye,
                start: ee.start
              }
            } else He[Me] = ee
          }
          return ye && (He.inputs = [...ie.keys()].map((ee => ee.toJSON()))), He
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : be;
          ee.stringify && (ee = ee.stringify);
          let ie = "";
          return ee(this, (ee => {
            ie += ee
          })), ie
        }
        warn(ee, ie, He) {
          let ye = {
            node: this
          };
          for (let be in He) ye[be] = He[be];
          return ee.warn(ie, ye)
        }
        get proxyOf() {
          return this
        }
      }
      return Zy = Ke, Ke.default = Ke, Zy
    }

    function wb() {
      if (Py) return Dy;
      Py = 1;
      let ee = Zb();
      class ie extends ee {
        constructor(ee) {
          ee && "undefined" !== typeof ee.value && "string" !== typeof ee.value && (ee = {
            ...ee,
            value: String(ee.value)
          }), super(ee), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Dy = ie, ie.default = ie, Dy
    }

    function Db() {
      if (Yy) return Ay;
      Yy = 1;
      return Ay = {
        nanoid: function() {
          let ee = "",
            ie = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; ie--;) ee += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return ee
        },
        customAlphabet: function(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let He = "",
              ye = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ie;
            for (; ye--;) He += ee[Math.random() * ee.length | 0];
            return He
          }
        }
      }, Ay
    }

    function Pb() {
      if (ay) return Vy;
      ay = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = Xy, {
        existsSync: He,
        readFileSync: ye
      } = Xy, {
        dirname: be,
        join: Me
      } = Xy;
      class Ke {
        constructor(ee, ie) {
          if (!1 === ie.map) return;
          this.loadAnnotation(ee), this.inline = this.startWith(this.annotation, "data:");
          let He = ie.map ? ie.map.prev : void 0,
            ye = this.loadMap(ie.from, He);
          !this.mapFile && ie.from && (this.mapFile = ie.from), this.mapFile && (this.root = be(this.mapFile)), ye && (this.text = ye)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new ee(this.text)), this.consumerCache
        }
        decodeInline(ee) {
          if (/^data:application\/json;charset=utf-?8,/.test(ee) || /^data:application\/json,/.test(ee)) return decodeURIComponent(ee.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(ee) || /^data:application\/json;base64,/.test(ee)) return ie = ee.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(ie, "base64").toString() : window.atob(ie);
          var ie;
          let He = ee.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + He)
        }
        getAnnotationURL(ee) {
          return ee.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(ee) {
          return "object" === typeof ee && ("string" === typeof ee.mappings || "string" === typeof ee._mappings || Array.isArray(ee.sections))
        }
        loadAnnotation(ee) {
          let ie = ee.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!ie) return;
          let He = ee.lastIndexOf(ie.pop()),
            ye = ee.indexOf("*/", He);
          He > -1 && ye > -1 && (this.annotation = this.getAnnotationURL(ee.substring(He, ye)))
        }
        loadFile(ee) {
          if (this.root = be(ee), He(ee)) return this.mapFile = ee, ye(ee, "utf-8").toString().trim()
        }
        loadMap(He, ye) {
          if (!1 === ye) return !1;
          if (ye) {
            if ("string" === typeof ye) return ye;
            if ("function" !== typeof ye) {
              if (ye instanceof ee) return ie.fromSourceMap(ye).toString();
              if (ye instanceof ie) return ye.toString();
              if (this.isMap(ye)) return JSON.stringify(ye);
              throw new Error("Unsupported previous source map format: " + ye.toString())
            } {
              let ee = ye(He);
              if (ee) {
                let ie = this.loadFile(ee);
                if (!ie) throw new Error("Unable to load previous source map: " + ee.toString());
                return ie
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let ee = this.annotation;
              return He && (ee = Me(be(He), ee)), this.loadFile(ee)
            }
          }
        }
        startWith(ee, ie) {
          return !!ee && ee.substr(0, ie.length) === ie
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return Vy = Ke, Ke.default = Ke, Vy
    }

    function Ab() {
      if (xy) return cy;
      xy = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = Xy, {
        fileURLToPath: He,
        pathToFileURL: ye
      } = Xy, {
        isAbsolute: be,
        resolve: Me
      } = Xy, {
        nanoid: Ke
      } = Db(), Ue = Xy, Fe = Ey(), Je = Pb(), oe = Symbol("fromOffsetCache"), Re = Boolean(ee && ie), ke = Boolean(Me && be);
      class qe {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === ee || "undefined" === typeof ee || "object" === typeof ee && !ee.toString) throw new Error(`PostCSS received ${ee} instead of CSS string`);
          if (this.css = ee.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, ie.from && (!ke || /^\w+:\/\//.test(ie.from) || be(ie.from) ? this.file = ie.from : this.file = Me(ie.from)), ke && Re) {
            let ee = new Je(this.css, ie);
            if (ee.text) {
              this.map = ee;
              let ie = ee.consumer().file;
              !this.file && ie && (this.file = this.mapResolve(ie))
            }
          }
          this.file || (this.id = "<input css " + Ke(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(ee, ie, He) {
          let be, Me, Ke, Ue = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (ie && "object" === typeof ie) {
            let ee = ie,
              ye = He;
            if ("number" === typeof ee.offset) {
              let ye = this.fromOffset(ee.offset);
              ie = ye.line, He = ye.col
            } else ie = ee.line, He = ee.column;
            if ("number" === typeof ye.offset) {
              let ee = this.fromOffset(ye.offset);
              Me = ee.line, Ke = ee.col
            } else Me = ye.line, Ke = ye.column
          } else if (!He) {
            let ee = this.fromOffset(ie);
            ie = ee.line, He = ee.col
          }
          let Je = this.origin(ie, He, Me, Ke);
          return be = Je ? new Fe(ee, void 0 === Je.endLine ? Je.line : {
            column: Je.column,
            line: Je.line
          }, void 0 === Je.endLine ? Je.column : {
            column: Je.endColumn,
            line: Je.endLine
          }, Je.source, Je.file, Ue.plugin) : new Fe(ee, void 0 === Me ? ie : {
            column: He,
            line: ie
          }, void 0 === Me ? He : {
            column: Ke,
            line: Me
          }, this.css, this.file, Ue.plugin), be.input = {
            column: He,
            endColumn: Ke,
            endLine: Me,
            line: ie,
            source: this.css
          }, this.file && (ye && (be.input.url = ye(this.file).toString()), be.input.file = this.file), be
        }
        fromOffset(ee) {
          let ie, He;
          if (this[oe]) He = this[oe];
          else {
            let ee = this.css.split("\n");
            He = new Array(ee.length);
            let ie = 0;
            for (let ye = 0, be = ee.length; ye < be; ye++) He[ye] = ie, ie += ee[ye].length + 1;
            this[oe] = He
          }
          ie = He[He.length - 1];
          let ye = 0;
          if (ee >= ie) ye = He.length - 1;
          else {
            let ie, be = He.length - 2;
            for (; ye < be;)
              if (ie = ye + (be - ye >> 1), ee < He[ie]) be = ie - 1;
              else {
                if (!(ee >= He[ie + 1])) {
                  ye = ie;
                  break
                }
                ye = ie + 1
              }
          }
          return {
            col: ee - He[ye] + 1,
            line: ye + 1
          }
        }
        mapResolve(ee) {
          return /^\w+:\/\//.test(ee) ? ee : Me(this.map.consumer().sourceRoot || this.map.root || ".", ee)
        }
        origin(ee, ie, Me, Ke) {
          if (!this.map) return !1;
          let Ue, Fe, Je = this.map.consumer(),
            oe = Je.originalPositionFor({
              column: ie,
              line: ee
            });
          if (!oe.source) return !1;
          "number" === typeof Me && (Ue = Je.originalPositionFor({
            column: Ke,
            line: Me
          })), Fe = be(oe.source) ? ye(oe.source) : new URL(oe.source, this.map.consumer().sourceRoot || ye(this.map.mapFile));
          let Re = {
            column: oe.column,
            endColumn: Ue && Ue.column,
            endLine: Ue && Ue.line,
            line: oe.line,
            url: Fe.toString()
          };
          if ("file:" === Fe.protocol) {
            if (!He) throw new Error("file: protocol is not available in this PostCSS build");
            Re.file = He(Fe)
          }
          let ke = Je.sourceContentFor(oe.source);
          return ke && (Re.source = ke), Re
        }
        toJSON() {
          let ee = {};
          for (let ie of ["hasBOM", "css", "file", "id"]) null != this[ie] && (ee[ie] = this[ie]);
          return this.map && (ee.map = {
            ...this.map
          }, ee.map.consumerCache && (ee.map.consumerCache = void 0)), ee
        }
        get from() {
          return this.file || this.id
        }
      }
      return cy = qe, qe.default = qe, Ue && Ue.registerInput && Ue.registerInput(qe), cy
    }

    function Yb() {
      if (Cy) return Ly;
      Cy = 1;
      let {
        SourceMapConsumer: ee,
        SourceMapGenerator: ie
      } = Xy, {
        dirname: He,
        relative: ye,
        resolve: be,
        sep: Me
      } = Xy, {
        pathToFileURL: Ke
      } = Xy, Ue = Ab(), Fe = Boolean(ee && ie), Je = Boolean(He && be && ye && Me);
      return Ly = class {
        constructor(ee, ie, He, ye) {
          this.stringify = ee, this.mapOpts = He.map || {}, this.root = ie, this.opts = He, this.css = ye, this.originalCSS = ye, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let ee;
          ee = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let ie = "\n";
          this.css.includes("\r\n") && (ie = "\r\n"), this.css += ie + "/*# sourceMappingURL=" + ee + " */"
        }
        applyPrevMaps() {
          for (let ie of this.previous()) {
            let ye, be = this.toUrl(this.path(ie.file)),
              Me = ie.root || He(ie.file);
            !1 === this.mapOpts.sourcesContent ? (ye = new ee(ie.text), ye.sourcesContent && (ye.sourcesContent = null)) : ye = ie.consumer(), this.map.applySourceMap(ye, be, this.toUrl(this.path(Me)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let ee;
              for (let ie = this.root.nodes.length - 1; ie >= 0; ie--) ee = this.root.nodes[ie], "comment" === ee.type && 0 === ee.text.indexOf("# sourceMappingURL=") && this.root.removeChild(ie)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Je && Fe && this.isMap()) return this.generateMap();
          {
            let ee = "";
            return this.stringify(this.root, (ie => {
              ee += ie
            })), [ee]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let ee = this.previous()[0].consumer();
            ee.file = this.outputFile(), this.map = ie.fromSourceMap(ee, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new ie({
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
          this.css = "", this.map = new ie({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let ee, He, ye = 1,
            be = 1,
            Me = "<no source>",
            Ke = {
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
          this.stringify(this.root, ((ie, Ue, Fe) => {
            if (this.css += ie, Ue && "end" !== Fe && (Ke.generated.line = ye, Ke.generated.column = be - 1, Ue.source && Ue.source.start ? (Ke.source = this.sourcePath(Ue), Ke.original.line = Ue.source.start.line, Ke.original.column = Ue.source.start.column - 1, this.map.addMapping(Ke)) : (Ke.source = Me, Ke.original.line = 1, Ke.original.column = 0, this.map.addMapping(Ke))), ee = ie.match(/\n/g), ee ? (ye += ee.length, He = ie.lastIndexOf("\n"), be = ie.length - He) : be += ie.length, Ue && "start" !== Fe) {
              let ee = Ue.parent || {
                raws: {}
              };
              ("decl" === Ue.type || "atrule" === Ue.type && !Ue.nodes) && Ue === ee.last && !ee.raws.semicolon || (Ue.source && Ue.source.end ? (Ke.source = this.sourcePath(Ue), Ke.original.line = Ue.source.end.line, Ke.original.column = Ue.source.end.column - 1, Ke.generated.line = ye, Ke.generated.column = be - 2, this.map.addMapping(Ke)) : (Ke.source = Me, Ke.original.line = 1, Ke.original.column = 0, Ke.generated.line = ye, Ke.generated.column = be - 1, this.map.addMapping(Ke)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((ee => ee.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let ee = this.mapOpts.annotation;
          return ("undefined" === typeof ee || !0 === ee) && (!this.previous().length || this.previous().some((ee => ee.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((ee => ee.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(ee) {
          if (this.mapOpts.absolute) return ee;
          if (60 === ee.charCodeAt(0)) return ee;
          if (/^\w+:\/\//.test(ee)) return ee;
          let ie = this.memoizedPaths.get(ee);
          if (ie) return ie;
          let Me = this.opts.to ? He(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (Me = He(be(Me, this.mapOpts.annotation)));
          let Ke = ye(Me, ee);
          return this.memoizedPaths.set(ee, Ke), Ke
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((ee => {
              if (ee.source && ee.source.input.map) {
                let ie = ee.source.input.map;
                this.previousMaps.includes(ie) || this.previousMaps.push(ie)
              }
            }));
            else {
              let ee = new Ue(this.originalCSS, this.opts);
              ee.map && this.previousMaps.push(ee.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let ee = {};
          if (this.root) this.root.walk((ie => {
            if (ie.source) {
              let He = ie.source.input.from;
              if (He && !ee[He]) {
                ee[He] = !0;
                let ye = this.usesFileUrls ? this.toFileUrl(He) : this.toUrl(this.path(He));
                this.map.setSourceContent(ye, ie.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let ee = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(ee, this.css)
          }
        }
        sourcePath(ee) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(ee.source.input.from) : this.toUrl(this.path(ee.source.input.from))
        }
        toBase64(ee) {
          return Buffer ? Buffer.from(ee).toString("base64") : window.btoa(unescape(encodeURIComponent(ee)))
        }
        toFileUrl(ee) {
          let ie = this.memoizedFileURLs.get(ee);
          if (ie) return ie;
          if (Ke) {
            let ie = Ke(ee).toString();
            return this.memoizedFileURLs.set(ee, ie), ie
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(ee) {
          let ie = this.memoizedURLs.get(ee);
          if (ie) return ie;
          "\\" === Me && (ee = ee.replace(/\\/g, "/"));
          let He = encodeURI(ee).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(ee, He), He
        }
      }
    }

    function Vb() {
      if (uy) return vy;
      uy = 1;
      let ee = Zb();
      class ie extends ee {
        constructor(ee) {
          super(ee), this.type = "comment"
        }
      }
      return vy = ie, ie.default = ie, vy
    }

    function ab() {
      if (ly) return my;
      ly = 1;
      let ee, ie, He, ye, {
          isClean: be,
          my: Me
        } = db(),
        Ke = wb(),
        Ue = Vb(),
        Fe = Zb();

      function Je(ee) {
        return ee.map((ee => (ee.nodes && (ee.nodes = Je(ee.nodes)), delete ee.source, ee)))
      }

      function oe(ee) {
        if (ee[be] = !1, ee.proxyOf.nodes)
          for (let ie of ee.proxyOf.nodes) oe(ie)
      }
      class Re extends Fe {
        append() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          for (let ye of ie) {
            let ee = this.normalize(ye, this.last);
            for (let ie of ee) this.proxyOf.nodes.push(ie)
          }
          return this.markDirty(), this
        }
        cleanRaws(ee) {
          if (super.cleanRaws(ee), this.nodes)
            for (let ie of this.nodes) ie.cleanRaws(ee)
        }
        each(ee) {
          if (!this.proxyOf.nodes) return;
          let ie, He, ye = this.getIterator();
          for (; this.indexes[ye] < this.proxyOf.nodes.length && (ie = this.indexes[ye], He = ee(this.proxyOf.nodes[ie], ie), !1 !== He);) this.indexes[ye] += 1;
          return delete this.indexes[ye], He
        }
        every(ee) {
          return this.nodes.every(ee)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let ee = this.lastEach;
          return this.indexes[ee] = 0, ee
        }
        getProxyProcessor() {
          return {
            get: (ee, ie) => "proxyOf" === ie ? ee : ee[ie] ? "each" === ie || "string" === typeof ie && ie.startsWith("walk") ? function() {
              for (var He = arguments.length, ye = new Array(He), be = 0; be < He; be++) ye[be] = arguments[be];
              return ee[ie](...ye.map((ee => "function" === typeof ee ? (ie, He) => ee(ie.toProxy(), He) : ee)))
            } : "every" === ie || "some" === ie ? He => ee[ie]((function(ee) {
              for (var ie = arguments.length, ye = new Array(ie > 1 ? ie - 1 : 0), be = 1; be < ie; be++) ye[be - 1] = arguments[be];
              return He(ee.toProxy(), ...ye)
            })) : "root" === ie ? () => ee.root().toProxy() : "nodes" === ie ? ee.nodes.map((ee => ee.toProxy())) : "first" === ie || "last" === ie ? ee[ie].toProxy() : ee[ie] : ee[ie],
            set: (ee, ie, He) => (ee[ie] === He || (ee[ie] = He, "name" !== ie && "params" !== ie && "selector" !== ie || ee.markDirty()), !0)
          }
        }
        index(ee) {
          return "number" === typeof ee ? ee : (ee.proxyOf && (ee = ee.proxyOf), this.proxyOf.nodes.indexOf(ee))
        }
        insertAfter(ee, ie) {
          let He, ye = this.index(ee),
            be = this.normalize(ie, this.proxyOf.nodes[ye]).reverse();
          ye = this.index(ee);
          for (let Me of be) this.proxyOf.nodes.splice(ye + 1, 0, Me);
          for (let Me in this.indexes) He = this.indexes[Me], ye < He && (this.indexes[Me] = He + be.length);
          return this.markDirty(), this
        }
        insertBefore(ee, ie) {
          let He, ye = this.index(ee),
            be = 0 === ye && "prepend",
            Me = this.normalize(ie, this.proxyOf.nodes[ye], be).reverse();
          ye = this.index(ee);
          for (let Ke of Me) this.proxyOf.nodes.splice(ye, 0, Ke);
          for (let Ke in this.indexes) He = this.indexes[Ke], ye <= He && (this.indexes[Ke] = He + Me.length);
          return this.markDirty(), this
        }
        normalize(ye, Fe) {
          if ("string" === typeof ye) ye = Je(ee(ye).nodes);
          else if ("undefined" === typeof ye) ye = [];
          else if (Array.isArray(ye)) {
            ye = ye.slice(0);
            for (let ee of ye) ee.parent && ee.parent.removeChild(ee, "ignore")
          } else if ("root" === ye.type && "document" !== this.type) {
            ye = ye.nodes.slice(0);
            for (let ee of ye) ee.parent && ee.parent.removeChild(ee, "ignore")
          } else if (ye.type) ye = [ye];
          else if (ye.prop) {
            if ("undefined" === typeof ye.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof ye.value && (ye.value = String(ye.value)), ye = [new Ke(ye)]
          } else if (ye.selector) ye = [new ie(ye)];
          else if (ye.name) ye = [new He(ye)];
          else {
            if (!ye.text) throw new Error("Unknown node type in node creation");
            ye = [new Ue(ye)]
          }
          return ye.map((ee => (ee[Me] || Re.rebuild(ee), (ee = ee.proxyOf).parent && ee.parent.removeChild(ee), ee[be] && oe(ee), "undefined" === typeof ee.raws.before && Fe && "undefined" !== typeof Fe.raws.before && (ee.raws.before = Fe.raws.before.replace(/\S/g, "")), ee.parent = this.proxyOf, ee)))
        }
        prepend() {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          ie = ie.reverse();
          for (let ye of ie) {
            let ee = this.normalize(ye, this.first, "prepend").reverse();
            for (let ie of ee) this.proxyOf.nodes.unshift(ie);
            for (let ie in this.indexes) this.indexes[ie] = this.indexes[ie] + ee.length
          }
          return this.markDirty(), this
        }
        push(ee) {
          return ee.parent = this, this.proxyOf.nodes.push(ee), this
        }
        removeAll() {
          for (let ee of this.proxyOf.nodes) ee.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(ee) {
          let ie;
          ee = this.index(ee), this.proxyOf.nodes[ee].parent = void 0, this.proxyOf.nodes.splice(ee, 1);
          for (let He in this.indexes) ie = this.indexes[He], ie >= ee && (this.indexes[He] = ie - 1);
          return this.markDirty(), this
        }
        replaceValues(ee, ie, He) {
          return He || (He = ie, ie = {}), this.walkDecls((ye => {
            ie.props && !ie.props.includes(ye.prop) || ie.fast && !ye.value.includes(ie.fast) || (ye.value = ye.value.replace(ee, He))
          })), this.markDirty(), this
        }
        some(ee) {
          return this.nodes.some(ee)
        }
        walk(ee) {
          return this.each(((ie, He) => {
            let ye;
            try {
              ye = ee(ie, He)
            } catch (be) {
              throw ie.addToError(be)
            }
            return !1 !== ye && ie.walk && (ye = ie.walk(ee)), ye
          }))
        }
        walkAtRules(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("atrule" === He.type && ee.test(He.name)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("atrule" === He.type && He.name === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("atrule" === ee.type) return ie(ee, He)
          })))
        }
        walkComments(ee) {
          return this.walk(((ie, He) => {
            if ("comment" === ie.type) return ee(ie, He)
          }))
        }
        walkDecls(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("decl" === He.type && ee.test(He.prop)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("decl" === He.type && He.prop === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("decl" === ee.type) return ie(ee, He)
          })))
        }
        walkRules(ee, ie) {
          return ie ? ee instanceof RegExp ? this.walk(((He, ye) => {
            if ("rule" === He.type && ee.test(He.selector)) return ie(He, ye)
          })) : this.walk(((He, ye) => {
            if ("rule" === He.type && He.selector === ee) return ie(He, ye)
          })) : (ie = ee, this.walk(((ee, He) => {
            if ("rule" === ee.type) return ie(ee, He)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return Re.registerParse = ie => {
        ee = ie
      }, Re.registerRule = ee => {
        ie = ee
      }, Re.registerAtRule = ee => {
        He = ee
      }, Re.registerRoot = ee => {
        ye = ee
      }, my = Re, Re.default = Re, Re.rebuild = ee => {
        "atrule" === ee.type ? Object.setPrototypeOf(ee, He.prototype) : "rule" === ee.type ? Object.setPrototypeOf(ee, ie.prototype) : "decl" === ee.type ? Object.setPrototypeOf(ee, Ke.prototype) : "comment" === ee.type ? Object.setPrototypeOf(ee, Ue.prototype) : "root" === ee.type && Object.setPrototypeOf(ee, ye.prototype), ee[Me] = !0, ee.nodes && ee.nodes.forEach((ee => {
          Re.rebuild(ee)
        }))
      }, my
    }

    function cb() {
      if (ny) return Sy;
      ny = 1;
      let ee, ie, He = ab();
      class ye extends He {
        constructor(ee) {
          super({
            type: "document",
            ...ee
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new ee(new ie, this, He).stringify()
        }
      }
      return ye.registerLazyResult = ie => {
        ee = ie
      }, ye.registerProcessor = ee => {
        ie = ee
      }, Sy = ye, ye.default = ye, Sy
    }

    function xb() {
      if (sy) return jy;
      sy = 1;
      let ee = {};
      return jy = function(ie) {
        ee[ie] || (ee[ie] = !0, "undefined" !== typeof console && console.warn && console.warn(ie))
      }
    }

    function Lb() {
      if (hy) return Iy;
      hy = 1;
      class ee {
        constructor(ee) {
          let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = ee, ie.node && ie.node.source) {
            let ee = ie.node.rangeBy(ie);
            this.line = ee.start.line, this.column = ee.start.column, this.endLine = ee.end.line, this.endColumn = ee.end.column
          }
          for (let He in ie) this[He] = ie[He]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return Iy = ee, ee.default = ee, Iy
    }

    function Cb() {
      if (Gy) return Ny;
      Gy = 1;
      let ee = Lb();
      class ie {
        constructor(ee, ie, He) {
          this.processor = ee, this.messages = [], this.root = ie, this.opts = He, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(ie) {
          let He = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          He.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (He.plugin = this.lastPlugin.postcssPlugin);
          let ye = new ee(ie, He);
          return this.messages.push(ye), ye
        }
        warnings() {
          return this.messages.filter((ee => "warning" === ee.type))
        }
        get content() {
          return this.css
        }
      }
      return Ny = ie, ie.default = ie, Ny
    }

    function vb() {
      if (ib) return eb;
      ib = 1;
      let ee = ab();
      class ie extends ee {
        constructor(ee) {
          super(ee), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return eb = ie, ie.default = ie, ee.registerAtRule(ie), eb
    }

    function ub() {
      if (yb) return Hb;
      yb = 1;
      let ee, ie, He = ab();
      class ye extends He {
        constructor(ee) {
          super(ee), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(ee, ie, He) {
          let ye = super.normalize(ee);
          if (ie)
            if ("prepend" === He) this.nodes.length > 1 ? ie.raws.before = this.nodes[1].raws.before : delete ie.raws.before;
            else if (this.first !== ie)
            for (let be of ye) be.raws.before = ie.raws.before;
          return ye
        }
        removeChild(ee, ie) {
          let He = this.index(ee);
          return !ie && 0 === He && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[He].raws.before), super.removeChild(ee)
        }
        toResult() {
          let He = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new ee(new ie, this, He).stringify()
        }
      }
      return ye.registerLazyResult = ie => {
        ee = ie
      }, ye.registerProcessor = ee => {
        ie = ee
      }, Hb = ye, ye.default = ye, He.registerRoot(ye), Hb
    }

    function mb() {
      if (Mb) return bb;
      Mb = 1;
      let ee = {
        comma: ie => ee.split(ie, [","], !0),
        space: ie => ee.split(ie, [" ", "\n", "\t"]),
        split(ee, ie, He) {
          let ye = [],
            be = "",
            Me = !1,
            Ke = 0,
            Ue = !1,
            Fe = "",
            Je = !1;
          for (let oe of ee) Je ? Je = !1 : "\\" === oe ? Je = !0 : Ue ? oe === Fe && (Ue = !1) : '"' === oe || "'" === oe ? (Ue = !0, Fe = oe) : "(" === oe ? Ke += 1 : ")" === oe ? Ke > 0 && (Ke -= 1) : 0 === Ke && ie.includes(oe) && (Me = !0), Me ? ("" !== be && ye.push(be.trim()), be = "", Me = !1) : be += oe;
          return (He || "" !== be) && ye.push(be.trim()), ye
        }
      };
      return bb = ee, ee.default = ee, bb
    }

    function lb() {
      if (Ub) return Kb;
      Ub = 1;
      let ee = ab(),
        ie = mb();
      class He extends ee {
        constructor(ee) {
          super(ee), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return ie.comma(this.selector)
        }
        set selectors(ee) {
          let ie = this.selector ? this.selector.match(/,\s*/) : null,
            He = ie ? ie[0] : "," + this.raw("between", "beforeOpen");
          this.selector = ee.join(He)
        }
      }
      return Kb = He, He.default = He, ee.registerRule(He), Kb
    }

    function Sb() {
      if (Jb) return Fb;
      Jb = 1;
      let ee = wb(),
        ie = function() {
          if (Qy) return ry;
          Qy = 1;
          const ee = "'".charCodeAt(0),
            ie = '"'.charCodeAt(0),
            He = "\\".charCodeAt(0),
            ye = "/".charCodeAt(0),
            be = "\n".charCodeAt(0),
            Me = " ".charCodeAt(0),
            Ke = "\f".charCodeAt(0),
            Ue = "\t".charCodeAt(0),
            Fe = "\r".charCodeAt(0),
            Je = "[".charCodeAt(0),
            oe = "]".charCodeAt(0),
            Re = "(".charCodeAt(0),
            ke = ")".charCodeAt(0),
            qe = "{".charCodeAt(0),
            fe = "}".charCodeAt(0),
            Te = ";".charCodeAt(0),
            pe = "*".charCodeAt(0),
            Xe = ":".charCodeAt(0),
            ze = "@".charCodeAt(0),
            Be = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            Ee = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            ge = /.[\r\n"'(/\\]/,
            Oe = /[\da-f]/i;
          return ry = function(de) {
            let We, te, Ze, we, De, Pe, Ae, Ye, Ve, ae, ce = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              xe = de.css.valueOf(),
              Le = ce.ignoreErrors,
              Ce = xe.length,
              ve = 0,
              ue = [],
              me = [];

            function le(ee) {
              throw de.error("Unclosed " + ee, ve)
            }
            return {
              back: function(ee) {
                me.push(ee)
              },
              endOfFile: function() {
                return 0 === me.length && ve >= Ce
              },
              nextToken: function(de) {
                if (me.length) return me.pop();
                if (ve >= Ce) return;
                let ce = !!de && de.ignoreUnclosed;
                switch (We = xe.charCodeAt(ve), We) {
                  case be:
                  case Me:
                  case Ue:
                  case Fe:
                  case Ke:
                    te = ve;
                    do {
                      te += 1, We = xe.charCodeAt(te)
                    } while (We === Me || We === be || We === Ue || We === Fe || We === Ke);
                    ae = ["space", xe.slice(ve, te)], ve = te - 1;
                    break;
                  case Je:
                  case oe:
                  case qe:
                  case fe:
                  case Xe:
                  case Te:
                  case ke: {
                    let ee = String.fromCharCode(We);
                    ae = [ee, ee, ve];
                    break
                  }
                  case Re:
                    if (Ye = ue.length ? ue.pop()[1] : "", Ve = xe.charCodeAt(ve + 1), "url" === Ye && Ve !== ee && Ve !== ie && Ve !== Me && Ve !== be && Ve !== Ue && Ve !== Ke && Ve !== Fe) {
                      te = ve;
                      do {
                        if (Pe = !1, te = xe.indexOf(")", te + 1), -1 === te) {
                          if (Le || ce) {
                            te = ve;
                            break
                          }
                          le("bracket")
                        }
                        for (Ae = te; xe.charCodeAt(Ae - 1) === He;) Ae -= 1, Pe = !Pe
                      } while (Pe);
                      ae = ["brackets", xe.slice(ve, te + 1), ve, te], ve = te
                    } else te = xe.indexOf(")", ve + 1), we = xe.slice(ve, te + 1), -1 === te || ge.test(we) ? ae = ["(", "(", ve] : (ae = ["brackets", we, ve, te], ve = te);
                    break;
                  case ee:
                  case ie:
                    Ze = We === ee ? "'" : '"', te = ve;
                    do {
                      if (Pe = !1, te = xe.indexOf(Ze, te + 1), -1 === te) {
                        if (Le || ce) {
                          te = ve + 1;
                          break
                        }
                        le("string")
                      }
                      for (Ae = te; xe.charCodeAt(Ae - 1) === He;) Ae -= 1, Pe = !Pe
                    } while (Pe);
                    ae = ["string", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  case ze:
                    Be.lastIndex = ve + 1, Be.test(xe), te = 0 === Be.lastIndex ? xe.length - 1 : Be.lastIndex - 2, ae = ["at-word", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  case He:
                    for (te = ve, De = !0; xe.charCodeAt(te + 1) === He;) te += 1, De = !De;
                    if (We = xe.charCodeAt(te + 1), De && We !== ye && We !== Me && We !== be && We !== Ue && We !== Fe && We !== Ke && (te += 1, Oe.test(xe.charAt(te)))) {
                      for (; Oe.test(xe.charAt(te + 1));) te += 1;
                      xe.charCodeAt(te + 1) === Me && (te += 1)
                    }
                    ae = ["word", xe.slice(ve, te + 1), ve, te], ve = te;
                    break;
                  default:
                    We === ye && xe.charCodeAt(ve + 1) === pe ? (te = xe.indexOf("*/", ve + 2) + 1, 0 === te && (Le || ce ? te = xe.length : le("comment")), ae = ["comment", xe.slice(ve, te + 1), ve, te], ve = te) : (Ee.lastIndex = ve + 1, Ee.test(xe), te = 0 === Ee.lastIndex ? xe.length - 1 : Ee.lastIndex - 2, ae = ["word", xe.slice(ve, te + 1), ve, te], ue.push(ae), ve = te)
                }
                return ve++, ae
              },
              position: function() {
                return ve
              }
            }
          }, ry
        }(),
        He = Vb(),
        ye = vb(),
        be = ub(),
        Me = lb();
      const Ke = {
        empty: !0,
        space: !0
      };
      return Fb = class {
        constructor(ee) {
          this.input = ee, this.root = new be, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: ee,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(ee) {
          let ie, He, be, Me = new ye;
          Me.name = ee[1].slice(1), "" === Me.name && this.unnamedAtrule(Me, ee), this.init(Me, ee[2]);
          let Ke = !1,
            Ue = !1,
            Fe = [],
            Je = [];
          for (; !this.tokenizer.endOfFile();) {
            if (ie = (ee = this.tokenizer.nextToken())[0], "(" === ie || "[" === ie ? Je.push("(" === ie ? ")" : "]") : "{" === ie && Je.length > 0 ? Je.push("}") : ie === Je[Je.length - 1] && Je.pop(), 0 === Je.length) {
              if (";" === ie) {
                Me.source.end = this.pE(ee[2]), Me.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === ie) {
                Ue = !0;
                break
              }
              if ("}" === ie) {
                if (Fe.length > 0) {
                  for (be = Fe.length - 1, He = Fe[be]; He && "space" === He[0];) He = Fe[--be];
                  He && (Me.source.end = this.pE(He[3] || He[2]), Me.source.end.offset++)
                }
                this.end(ee);
                break
              }
              Fe.push(ee)
            } else Fe.push(ee);
            if (this.tokenizer.endOfFile()) {
              Ke = !0;
              break
            }
          }
          Me.raws.between = this.spacesAndCommentsFromEnd(Fe), Fe.length ? (Me.raws.afterName = this.spacesAndCommentsFromStart(Fe), this.raw(Me, "params", Fe), Ke && (ee = Fe[Fe.length - 1], Me.source.end = this.pE(ee[3] || ee[2]), Me.source.end.offset++, this.spaces = Me.raws.between, Me.raws.between = "")) : (Me.raws.afterName = "", Me.params = ""), Ue && (Me.nodes = [], this.current = Me)
        }
        checkMissedSemicolon(ee) {
          let ie = this.colon(ee);
          if (!1 === ie) return;
          let He, ye = 0;
          for (let be = ie - 1; be >= 0 && (He = ee[be], "space" === He[0] || (ye += 1, 2 !== ye)); be--);
          throw this.input.error("Missed semicolon", "word" === He[0] ? He[3] + 1 : He[2])
        }
        colon(ee) {
          let ie, He, ye, be = 0;
          for (let [Me, Ke] of ee.entries()) {
            if (ie = Ke, He = ie[0], "(" === He && (be += 1), ")" === He && (be -= 1), 0 === be && ":" === He) {
              if (ye) {
                if ("word" === ye[0] && "progid" === ye[1]) continue;
                return Me
              }
              this.doubleColon(ie)
            }
            ye = ie
          }
          return !1
        }
        comment(ee) {
          let ie = new He;
          this.init(ie, ee[2]), ie.source.end = this.pE(ee[3] || ee[2]), ie.source.end.offset++;
          let ye = ee[1].slice(2, -2);
          if (/^\s*$/.test(ye)) ie.text = "", ie.raws.left = ye, ie.raws.right = "";
          else {
            let ee = ye.match(/^(\s*)([^]*\S)(\s*)$/);
            ie.text = ee[2], ie.raws.left = ee[1], ie.raws.right = ee[3]
          }
        }
        createTokenizer() {
          this.tokenizer = ie(this.input)
        }
        decl(ie, He) {
          let ye = new ee;
          this.init(ye, ie[0][2]);
          let be, Me = ie[ie.length - 1];
          for (";" === Me[0] && (this.semicolon = !0, ie.pop()), ye.source.end = this.pE(Me[3] || Me[2] || function(ee) {
              for (let ie = ee.length - 1; ie >= 0; ie--) {
                let He = ee[ie],
                  ye = He[3] || He[2];
                if (ye) return ye
              }
            }(ie)), ye.source.end.offset++;
            "word" !== ie[0][0];) 1 === ie.length && this.unknownWord(ie), ye.raws.before += ie.shift()[1];
          for (ye.source.start = this.pE(ie[0][2]), ye.prop = ""; ie.length;) {
            let ee = ie[0][0];
            if (":" === ee || "space" === ee || "comment" === ee) break;
            ye.prop += ie.shift()[1]
          }
          for (ye.raws.between = ""; ie.length;) {
            if (be = ie.shift(), ":" === be[0]) {
              ye.raws.between += be[1];
              break
            }
            "word" === be[0] && /\w/.test(be[1]) && this.unknownWord([be]), ye.raws.between += be[1]
          }
          "_" !== ye.prop[0] && "*" !== ye.prop[0] || (ye.raws.before += ye.prop[0], ye.prop = ye.prop.slice(1));
          let Ke, Ue = [];
          for (; ie.length && (Ke = ie[0][0], "space" === Ke || "comment" === Ke);) Ue.push(ie.shift());
          this.precheckMissedSemicolon(ie);
          for (let ee = ie.length - 1; ee >= 0; ee--) {
            if (be = ie[ee], "!important" === be[1].toLowerCase()) {
              ye.important = !0;
              let He = this.stringFrom(ie, ee);
              He = this.spacesFromEnd(ie) + He, " !important" !== He && (ye.raws.important = He);
              break
            }
            if ("important" === be[1].toLowerCase()) {
              let He = ie.slice(0),
                be = "";
              for (let ie = ee; ie > 0; ie--) {
                let ee = He[ie][0];
                if (0 === be.trim().indexOf("!") && "space" !== ee) break;
                be = He.pop()[1] + be
              }
              0 === be.trim().indexOf("!") && (ye.important = !0, ye.raws.important = be, ie = He)
            }
            if ("space" !== be[0] && "comment" !== be[0]) break
          }
          ie.some((ee => "space" !== ee[0] && "comment" !== ee[0])) && (ye.raws.between += Ue.map((ee => ee[1])).join(""), Ue = []), this.raw(ye, "value", Ue.concat(ie), He), ye.value.includes(":") && !He && this.checkMissedSemicolon(ie)
        }
        doubleColon(ee) {
          throw this.input.error("Double colon", {
            offset: ee[2]
          }, {
            offset: ee[2] + ee[1].length
          })
        }
        emptyRule(ee) {
          let ie = new Me;
          this.init(ie, ee[2]), ie.selector = "", ie.raws.between = "", this.current = ie
        }
        end(ee) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.pE(ee[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(ee)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.pE(this.tokenizer.position())
        }
        freeSemicolon(ee) {
          if (this.spaces += ee[1], this.current.nodes) {
            let ee = this.current.nodes[this.current.nodes.length - 1];
            ee && "rule" === ee.type && !ee.raws.ownSemicolon && (ee.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        pE(ee) {
          let ie = this.input.fromOffset(ee);
          return {
            column: ie.col,
            line: ie.line,
            offset: ee
          }
        }
        init(ee, ie) {
          this.current.push(ee), ee.source = {
            input: this.input,
            start: this.pE(ie)
          }, ee.raws.before = this.spaces, this.spaces = "", "comment" !== ee.type && (this.semicolon = !1)
        }
        other(ee) {
          let ie = !1,
            He = null,
            ye = !1,
            be = null,
            Me = [],
            Ke = ee[1].startsWith("--"),
            Ue = [],
            Fe = ee;
          for (; Fe;) {
            if (He = Fe[0], Ue.push(Fe), "(" === He || "[" === He) be || (be = Fe), Me.push("(" === He ? ")" : "]");
            else if (Ke && ye && "{" === He) be || (be = Fe), Me.push("}");
            else if (0 === Me.length) {
              if (";" === He) {
                if (ye) return void this.decl(Ue, Ke);
                break
              }
              if ("{" === He) return void this.rule(Ue);
              if ("}" === He) {
                this.tokenizer.back(Ue.pop()), ie = !0;
                break
              }
              ":" === He && (ye = !0)
            } else He === Me[Me.length - 1] && (Me.pop(), 0 === Me.length && (be = null));
            Fe = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (ie = !0), Me.length > 0 && this.unclosedBracket(be), ie && ye) {
            if (!Ke)
              for (; Ue.length && (Fe = Ue[Ue.length - 1][0], "space" === Fe || "comment" === Fe);) this.tokenizer.back(Ue.pop());
            this.decl(Ue, Ke)
          } else this.unknownWord(Ue)
        }
        parse() {
          let ee;
          for (; !this.tokenizer.endOfFile();) switch (ee = this.tokenizer.nextToken(), ee[0]) {
            case "space":
              this.spaces += ee[1];
              break;
            case ";":
              this.freeSemicolon(ee);
              break;
            case "}":
              this.end(ee);
              break;
            case "comment":
              this.comment(ee);
              break;
            case "at-word":
              this.atrule(ee);
              break;
            case "{":
              this.emptyRule(ee);
              break;
            default:
              this.other(ee)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(ee, ie, He, ye) {
          let be, Me, Ue, Fe, Je = He.length,
            oe = "",
            Re = !0;
          for (let ke = 0; ke < Je; ke += 1) be = He[ke], Me = be[0], "space" !== Me || ke !== Je - 1 || ye ? "comment" === Me ? (Fe = He[ke - 1] ? He[ke - 1][0] : "empty", Ue = He[ke + 1] ? He[ke + 1][0] : "empty", Ke[Fe] || Ke[Ue] || "," === oe.slice(-1) ? Re = !1 : oe += be[1]) : oe += be[1] : Re = !1;
          if (!Re) {
            let ye = He.reduce(((ee, ie) => ee + ie[1]), "");
            ee.raws[ie] = {
              raw: ye,
              value: oe
            }
          }
          ee[ie] = oe
        }
        rule(ee) {
          ee.pop();
          let ie = new Me;
          this.init(ie, ee[0][2]), ie.raws.between = this.spacesAndCommentsFromEnd(ee), this.raw(ie, "selector", ee), this.current = ie
        }
        spacesAndCommentsFromEnd(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[ee.length - 1][0], "space" === ie || "comment" === ie);) He = ee.pop()[1] + He;
          return He
        }
        spacesAndCommentsFromStart(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[0][0], "space" === ie || "comment" === ie);) He += ee.shift()[1];
          return He
        }
        spacesFromEnd(ee) {
          let ie, He = "";
          for (; ee.length && (ie = ee[ee.length - 1][0], "space" === ie);) He = ee.pop()[1] + He;
          return He
        }
        stringFrom(ee, ie) {
          let He = "";
          for (let ye = ie; ye < ee.length; ye++) He += ee[ye][1];
          return ee.splice(ie, ee.length - ie), He
        }
        unclosedBlock() {
          let ee = this.current.source.start;
          throw this.input.error("Unclosed block", ee.line, ee.column)
        }
        unclosedBracket(ee) {
          throw this.input.error("Unclosed bracket", {
            offset: ee[2]
          }, {
            offset: ee[2] + 1
          })
        }
        unexpectedClose(ee) {
          throw this.input.error("Unexpected }", {
            offset: ee[2]
          }, {
            offset: ee[2] + 1
          })
        }
        unknownWord(ee) {
          throw this.input.error("Unknown word", {
            offset: ee[0][2]
          }, {
            offset: ee[0][2] + ee[0][1].length
          })
        }
        unnamedAtrule(ee, ie) {
          throw this.input.error("At-rule without name", {
            offset: ie[2]
          }, {
            offset: ie[2] + ie[1].length
          })
        }
      }
    }

    function nb() {
      if (Rb) return ob;
      Rb = 1;
      let ee = ab(),
        ie = Sb(),
        He = Ab();

      function ye(ee, ye) {
        let be = new He(ee, ye),
          Me = new ie(be);
        try {
          Me.parse()
        } catch (Ke) {
          throw Ke
        }
        return Me.root
      }
      return ob = ye, ye.default = ye, ee.registerParse(ye), ob
    }

    function jb() {
      if (qb) return kb;
      qb = 1;
      let {
        isClean: ee,
        my: ie
      } = db(), He = Yb(), ye = tb(), be = ab(), Me = cb(), Ke = (xb(), Cb()), Ue = nb(), Fe = ub();
      const Je = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        oe = {
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
        Re = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function ke(ee) {
        return "object" === typeof ee && "function" === typeof ee.then
      }

      function qe(ee) {
        let ie = !1,
          He = Je[ee.type];
        return "decl" === ee.type ? ie = ee.prop.toLowerCase() : "atrule" === ee.type && (ie = ee.name.toLowerCase()), ie && ee.append ? [He, He + "-" + ie, 0, He + "Exit", He + "Exit-" + ie] : ie ? [He, He + "-" + ie, He + "Exit", He + "Exit-" + ie] : ee.append ? [He, 0, He + "Exit"] : [He, He + "Exit"]
      }

      function fe(ee) {
        let ie;
        return ie = "document" === ee.type ? ["Document", 0, "DocumentExit"] : "root" === ee.type ? ["Root", 0, "RootExit"] : qe(ee), {
          eventIndex: 0,
          events: ie,
          iterator: 0,
          node: ee,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Te(ie) {
        return ie[ee] = !1, ie.nodes && ie.nodes.forEach((ee => Te(ee))), ie
      }
      let pe = {};
      class Xe {
        constructor(ee, He, ye) {
          let Me;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof He || null === He || "root" !== He.type && "document" !== He.type)
            if (He instanceof Xe || He instanceof Ke) Me = Te(He.root), He.map && ("undefined" === typeof ye.map && (ye.map = {}), ye.map.inline || (ye.map.inline = !1), ye.map.prev = He.map);
            else {
              let ee = Ue;
              ye.syntax && (ee = ye.syntax.parse), ye.parser && (ee = ye.parser), ee.parse && (ee = ee.parse);
              try {
                Me = ee(He, ye)
              } catch (Fe) {
                this.processed = !0, this.error = Fe
              }
              Me && !Me[ie] && be.rebuild(Me)
            }
          else Me = Te(He);
          this.result = new Ke(ee, Me, ye), this.helpers = {
            ...pe,
            postcss: pe,
            result: this.result
          }, this.plugins = this.processor.plugins.map((ee => "object" === typeof ee && ee.prepare ? {
            ...ee,
            ...ee.prepare(this.result)
          } : ee))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (ee) {
          return this.async().catch(ee)
        } finally(ee) {
          return this.async().then(ee, ee)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(ee, ie) {
          let He = this.result.lastPlugin;
          try {
            ie && ie.addToError(ee), this.error = ee, "CssSyntaxError" !== ee.name || ee.plugin ? He.postcssVersion : (ee.plugin = He.postcssPlugin, ee.setMessage())
          } catch (ye) {
            console && console.error && console.error(ye)
          }
          return ee
        }
        prepareVisitors() {
          this.listeners = {};
          let ee = (ee, ie, He) => {
            this.listeners[ie] || (this.listeners[ie] = []), this.listeners[ie].push([ee, He])
          };
          for (let ie of this.plugins)
            if ("object" === typeof ie)
              for (let He in ie) {
                if (!oe[He] && /^[A-Z]/.test(He)) throw new Error(`Unknown event ${He} in ${ie.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!Re[He])
                  if ("object" === typeof ie[He])
                    for (let ye in ie[He]) ee(ie, "*" === ye ? He : He + "-" + ye.toLowerCase(), ie[He][ye]);
                  else "function" === typeof ie[He] && ee(ie, He, ie[He])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let ee = 0; ee < this.plugins.length; ee++) {
            let He = this.plugins[ee],
              ye = this.runOnRoot(He);
            if (ke(ye)) try {
              await ye
            } catch (ie) {
              throw this.handleError(ie)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let ie = this.result.root;
            for (; !ie[ee];) {
              ie[ee] = !0;
              let ye = [fe(ie)];
              for (; ye.length > 0;) {
                let ee = this.visitTick(ye);
                if (ke(ee)) try {
                  await ee
                } catch (He) {
                  let ee = ye[ye.length - 1].node;
                  throw this.handleError(He, ee)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [ee, ye] of this.listeners.OnceExit) {
                this.result.lastPlugin = ee;
                try {
                  if ("document" === ie.type) {
                    let ee = ie.nodes.map((ee => ye(ee, this.helpers)));
                    await Promise.all(ee)
                  } else await ye(ie, this.helpers)
                } catch (He) {
                  throw this.handleError(He)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(ee) {
          this.result.lastPlugin = ee;
          try {
            if ("object" === typeof ee && ee.Once) {
              if ("document" === this.result.root.type) {
                let ie = this.result.root.nodes.map((ie => ee.Once(ie, this.helpers)));
                return ke(ie[0]) ? Promise.all(ie) : ie
              }
              return ee.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof ee) return ee(this.result.root, this.result)
          } catch (ie) {
            throw this.handleError(ie)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let ee = this.result.opts,
            ie = ye;
          ee.syntax && (ie = ee.syntax.stringify), ee.stringifier && (ie = ee.stringifier), ie.stringify && (ie = ie.stringify);
          let be = new He(ie, this.result.root, this.result.opts).generate();
          return this.result.css = be[0], this.result.map = be[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let ee of this.plugins) {
            if (ke(this.runOnRoot(ee))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let ie = this.result.root;
            for (; !ie[ee];) ie[ee] = !0, this.walkSync(ie);
            if (this.listeners.OnceExit)
              if ("document" === ie.type)
                for (let ee of ie.nodes) this.visitSync(this.listeners.OnceExit, ee);
              else this.visitSync(this.listeners.OnceExit, ie)
          }
          return this.result
        }
        then(ee, ie) {
          return this.async().then(ee, ie)
        }
        toString() {
          return this.css
        }
        visitSync(ee, ie) {
          for (let [ye, be] of ee) {
            let ee;
            this.result.lastPlugin = ye;
            try {
              ee = be(ie, this.helpers)
            } catch (He) {
              throw this.handleError(He, ie.proxyOf)
            }
            if ("root" !== ie.type && "document" !== ie.type && !ie.parent) return !0;
            if (ke(ee)) throw this.getAsyncError()
          }
        }
        visitTick(ie) {
          let He = ie[ie.length - 1],
            {
              node: ye,
              visitors: be
            } = He;
          if ("root" !== ye.type && "document" !== ye.type && !ye.parent) return void ie.pop();
          if (be.length > 0 && He.visitorIndex < be.length) {
            let [ee, ie] = be[He.visitorIndex];
            He.visitorIndex += 1, He.visitorIndex === be.length && (He.visitors = [], He.visitorIndex = 0), this.result.lastPlugin = ee;
            try {
              return ie(ye.toProxy(), this.helpers)
            } catch (Ke) {
              throw this.handleError(Ke, ye)
            }
          }
          if (0 !== He.iterator) {
            let be, Me = He.iterator;
            for (; be = ye.nodes[ye.indexes[Me]];)
              if (ye.indexes[Me] += 1, !be[ee]) return be[ee] = !0, void ie.push(fe(be));
            He.iterator = 0, delete ye.indexes[Me]
          }
          let Me = He.events;
          for (; He.eventIndex < Me.length;) {
            let ie = Me[He.eventIndex];
            if (He.eventIndex += 1, 0 === ie) return void(ye.nodes && ye.nodes.length && (ye[ee] = !0, He.iterator = ye.getIterator()));
            if (this.listeners[ie]) return void(He.visitors = this.listeners[ie])
          }
          ie.pop()
        }
        walkSync(ie) {
          ie[ee] = !0;
          let He = qe(ie);
          for (let ye of He)
            if (0 === ye) ie.nodes && ie.each((ie => {
              ie[ee] || this.walkSync(ie)
            }));
            else {
              let ee = this.listeners[ye];
              if (ee && this.visitSync(ee, ie.toProxy())) return
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
      return Xe.registerPostcss = ee => {
        pe = ee
      }, kb = Xe, Xe.default = Xe, Fe.registerLazyResult(Xe), Me.registerLazyResult(Xe), kb
    }

    function sb() {
      if (Xb) return pb;
      Xb = 1;
      let ee = function() {
          if (Tb) return fb;
          Tb = 1;
          let ee = Yb(),
            ie = tb(),
            He = (xb(), nb());
          const ye = Cb();
          class be {
            constructor(He, be, Me) {
              let Ke;
              be = be.toString(), this.stringified = !1, this._processor = He, this._css = be, this._opts = Me, this._map = void 0;
              let Ue = ie;
              this.result = new ye(this._processor, Ke, this._opts), this.result.css = be;
              let Fe = this;
              Object.defineProperty(this.result, "root", {
                get: () => Fe.root
              });
              let Je = new ee(Ue, Ke, this._opts, be);
              if (Je.isMap()) {
                let [ee, ie] = Je.generate();
                ee && (this.result.css = ee), ie && (this.result.map = ie)
              } else Je.clearAnnotation(), this.result.css = Je.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (ee) {
              return this.async().catch(ee)
            } finally(ee) {
              return this.async().then(ee, ee)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(ee, ie) {
              return this.async().then(ee, ie)
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
              let ee, ie = He;
              try {
                ee = ie(this._css, this._opts)
              } catch (ye) {
                this.error = ye
              }
              if (this.error) throw this.error;
              return this._root = ee, ee
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return fb = be, be.default = be, fb
        }(),
        ie = jb(),
        He = cb(),
        ye = ub();
      class be {
        constructor() {
          let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(ee)
        }
        normalize(ee) {
          let ie = [];
          for (let He of ee)
            if (!0 === He.postcss ? He = He() : He.postcss && (He = He.postcss), "object" === typeof He && Array.isArray(He.plugins)) ie = ie.concat(He.plugins);
            else if ("object" === typeof He && He.postcssPlugin) ie.push(He);
          else if ("function" === typeof He) ie.push(He);
          else {
            if ("object" !== typeof He || !He.parse && !He.stringify) throw new Error(He + " is not a PostCSS plugin")
          }
          return ie
        }
        process(He) {
          let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || ye.parser || ye.stringifier || ye.syntax ? new ie(this, He, ye) : new ee(this, He, ye)
        }
        use(ee) {
          return this.plugins = this.plugins.concat(this.normalize([ee])), this
        }
      }
      return pb = be, be.default = be, ye.registerProcessor(be), He.registerProcessor(be), pb
    }
    const Ib = ky(function() {
      if (gb) return Eb;
      gb = 1;
      let ee = Ey(),
        ie = wb(),
        He = jb(),
        ye = ab(),
        be = sb(),
        Me = tb(),
        Ke = function() {
          if (Bb) return zb;
          Bb = 1;
          let ee = wb(),
            ie = Pb(),
            He = Vb(),
            ye = vb(),
            be = Ab(),
            Me = ub(),
            Ke = lb();

          function Ue(Fe, Je) {
            if (Array.isArray(Fe)) return Fe.map((ee => Ue(ee)));
            let {
              inputs: oe,
              ...Re
            } = Fe;
            if (oe) {
              Je = [];
              for (let ee of oe) {
                let He = {
                  ...ee,
                  __proto__: be.prototype
                };
                He.map && (He.map = {
                  ...He.map,
                  __proto__: ie.prototype
                }), Je.push(He)
              }
            }
            if (Re.nodes && (Re.nodes = Fe.nodes.map((ee => Ue(ee, Je)))), Re.source) {
              let {
                inputId: ee,
                ...ie
              } = Re.source;
              Re.source = ie, null != ee && (Re.source.input = Je[ee])
            }
            if ("root" === Re.type) return new Me(Re);
            if ("decl" === Re.type) return new ee(Re);
            if ("rule" === Re.type) return new Ke(Re);
            if ("comment" === Re.type) return new He(Re);
            if ("atrule" === Re.type) return new ye(Re);
            throw new Error("Unknown node type: " + Fe.type)
          }
          return zb = Ue, Ue.default = Ue, zb
        }(),
        Ue = cb(),
        Fe = Lb(),
        Je = Vb(),
        oe = vb(),
        Re = Cb(),
        ke = Ab(),
        qe = nb(),
        fe = mb(),
        Te = lb(),
        pe = ub(),
        Xe = Zb();

      function ze() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        return 1 === ie.length && Array.isArray(ie[0]) && (ie = ie[0]), new be(ie)
      }
      return ze.plugin = function(ee, ie) {
        let He, ye = !1;

        function Me() {
          console && console.warn && !ye && (ye = !0, console.warn(ee + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(ee + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let He = ie(...arguments);
          return He.postcssPlugin = ee, He.postcssVersion = (new be).version, He
        }
        return Object.defineProperty(Me, "postcss", {
          get: () => (He || (He = Me()), He)
        }), Me.process = function(ee, ie, He) {
          return ze([Me(He)]).process(ee, ie)
        }, Me
      }, ze.stringify = Me, ze.parse = qe, ze.fromJSON = Ke, ze.list = fe, ze.comment = ee => new Je(ee), ze.atRule = ee => new oe(ee), ze.decl = ee => new ie(ee), ze.rule = ee => new Te(ee), ze.root = ee => new pe(ee), ze.document = ee => new Ue(ee), ze.CssSyntaxError = ee, ze.Declaration = ie, ze.ZC = ye, ze.Processor = be, ze.Document = Ue, ze.Comment = Je, ze.Warning = Fe, ze.AtRule = oe, ze.Result = Re, ze.Input = ke, ze.Rule = Te, ze.Root = pe, ze.Node = Xe, He.registerPostcss(ze), Eb = ze, ze.default = ze, Eb
    }());
    Ib.stringify, Ib.fromJSON, Ib.plugin, Ib.parse, Ib.list, Ib.document, Ib.comment, Ib.atRule, Ib.rule, Ib.decl, Ib.root, Ib.CssSyntaxError, Ib.Declaration, Ib.ZC, Ib.Processor, Ib.Document, Ib.Comment, Ib.Warning, Ib.AtRule, Ib.Result, Ib.Input, Ib.Rule, Ib.Root, Ib.Node;
    var hb = (ee => (ee[ee.Document = 0] = "Document", ee[ee.DocumentType = 1] = "DocumentType", ee[ee.Element = 2] = "Element", ee[ee.Text = 3] = "Text", ee[ee.CDATA = 4] = "CDATA", ee[ee.Comment = 5] = "Comment", ee))(hb || {});

    function Nb(ee) {
      const ie = [];
      for (const He in ee) {
        const ye = ee[He];
        if ("string" !== typeof ye) continue;
        const be = iM(He);
        ie.push(`${be}: ${ye};`)
      }
      return ie.join(" ")
    }
    const Gb = /-([a-z])/g,
      rb = /^--[a-zA-Z0-9-]+$/,
      Qb = ee => rb.test(ee) ? ee : ee.replace(Gb, ((ee, ie) => ie ? ie.toUpperCase() : "")),
      eM = /\B([A-Z])/g,
      iM = ee => ee.replace(eM, "-$1").toLowerCase();
    class HM {
      constructor() {
        Fy(this, "parentElement", null), Fy(this, "parentNode", null), Fy(this, "ownerDocument"), Fy(this, "firstChild", null), Fy(this, "lastChild", null), Fy(this, "previousSibling", null), Fy(this, "nextSibling", null), Fy(this, "ELEMENT_NODE", 1), Fy(this, "TEXT_NODE", 3), Fy(this, "nodeType"), Fy(this, "nodeName"), Fy(this, "RRNodeType")
      }
      get childNodes() {
        const ee = [];
        let ie = this.firstChild;
        for (; ie;) ee.push(ie), ie = ie.nextSibling;
        return ee
      }
      contains(ee) {
        if (!(ee instanceof HM)) return !1;
        if (ee.ownerDocument !== this.ownerDocument) return !1;
        if (ee === this) return !0;
        for (; ee.parentNode;) {
          if (ee.parentNode === this) return !0;
          ee = ee.parentNode
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
    }
    class yM extends HM {
      constructor() {
        for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
        super(ie), Fy(this, "nodeType", 9), Fy(this, "nodeName", "#document"), Fy(this, "compatMode", "CSS1Compat"), Fy(this, "RRNodeType", hb.Document), Fy(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((ee => ee.RRNodeType === hb.Element && "HTML" === ee.tagName)) || null
      }
      get body() {
        var ee;
        return (null == (ee = this.documentElement) ? void 0 : ee.childNodes.find((ee => ee.RRNodeType === hb.Element && "BODY" === ee.tagName))) || null
      }
      get head() {
        var ee;
        return (null == (ee = this.documentElement) ? void 0 : ee.childNodes.find((ee => ee.RRNodeType === hb.Element && "HEAD" === ee.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(ee) {
        const ie = ee.RRNodeType;
        if ((ie === hb.Element || ie === hb.DocumentType) && this.childNodes.some((ee => ee.RRNodeType === ie))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${ie===hb.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const He = kM(this, ee);
        return He.parentElement = null, He
      }
      insertBefore(ee, ie) {
        const He = ee.RRNodeType;
        if ((He === hb.Element || He === hb.DocumentType) && this.childNodes.some((ee => ee.RRNodeType === He))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${He===hb.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const ye = qM(this, ee, ie);
        return ye.parentElement = null, ye
      }
      removeChild(ee) {
        return fM(this, ee)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(ee) {
        let ie;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === ee ? ie = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === ee && (ie = "-//W3C//DTD HTML 4.0 Transitional//EN"), ie) {
          const ee = this.createDocumentType("html", ie, "");
          this.open(), this.appendChild(ee)
        }
      }
      createDocument(ee, ie, He) {
        return new yM
      }
      createDocumentType(ee, ie, He) {
        const ye = new bM(ee, ie, He);
        return ye.ownerDocument = this, ye
      }
      createElement(ee) {
        const ie = new MM(ee);
        return ie.ownerDocument = this, ie
      }
      createElementNS(ee, ie) {
        return this.createElement(ie)
      }
      createTextNode(ee) {
        const ie = new FM(ee);
        return ie.ownerDocument = this, ie
      }
      createComment(ee) {
        const ie = new JM(ee);
        return ie.ownerDocument = this, ie
      }
      createCDATASection(ee) {
        const ie = new oM(ee);
        return ie.ownerDocument = this, ie
      }
      toString() {
        return "RRDocument"
      }
    }
    class bM extends HM {
      constructor(ee, ie, He) {
        super(), Fy(this, "nodeType", 10), Fy(this, "RRNodeType", hb.DocumentType), Fy(this, "name"), Fy(this, "publicId"), Fy(this, "systemId"), Fy(this, "textContent", null), this.name = ee, this.publicId = ie, this.systemId = He, this.nodeName = ee
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class MM extends HM {
      constructor(ee) {
        super(), Fy(this, "nodeType", 1), Fy(this, "RRNodeType", hb.Element), Fy(this, "tagName"), Fy(this, "attributes", {}), Fy(this, "shadowRoot", null), Fy(this, "scrollLeft"), Fy(this, "scrollTop"), this.tagName = ee.toUpperCase(), this.nodeName = ee.toUpperCase()
      }
      get textContent() {
        let ee = "";
        return this.childNodes.forEach((ie => ee += ie.textContent)), ee
      }
      set textContent(ee) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(ee))
      }
      get classList() {
        return new RM(this.attributes.class, (ee => {
          this.attributes.class = ee
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const ee = this.attributes.style ? function(ee) {
            const ie = {},
              He = /:(.+)/;
            return ee.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(ee) {
              if (ee) {
                const ye = ee.split(He);
                ye.length > 1 && (ie[Qb(ye[0].trim())] = ye[1].trim())
              }
            })), ie
          }(this.attributes.style) : {},
          ie = /\B([A-Z])/g;
        return ee.setProperty = (He, ye, be) => {
          if (ie.test(He)) return;
          const Me = Qb(He);
          ye ? ee[Me] = ye : delete ee[Me], "important" === be && (ee[Me] += " !important"), this.attributes.style = Nb(ee)
        }, ee.removeProperty = He => {
          if (ie.test(He)) return "";
          const ye = Qb(He),
            be = ee[ye] || "";
          return delete ee[ye], this.attributes.style = Nb(ee), be
        }, ee
      }
      getAttribute(ee) {
        return void 0 === this.attributes[ee] ? null : this.attributes[ee]
      }
      setAttribute(ee, ie) {
        this.attributes[ee] = ie
      }
      setAttributeNS(ee, ie, He) {
        this.setAttribute(ie, He)
      }
      removeAttribute(ee) {
        delete this.attributes[ee]
      }
      appendChild(ee) {
        return kM(this, ee)
      }
      insertBefore(ee, ie) {
        return qM(this, ee, ie)
      }
      removeChild(ee) {
        return fM(this, ee)
      }
      attachShadow(ee) {
        const ie = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = ie, ie
      }
      dispatchEvent(ee) {
        return !0
      }
      toString() {
        let ee = "";
        for (const ie in this.attributes) ee += `${ie}="${this.attributes[ie]}" `;
        return `${this.tagName} ${ee}`
      }
    }
    class KM extends MM {
      constructor() {
        super(...arguments), Fy(this, "currentTime"), Fy(this, "volume"), Fy(this, "paused"), Fy(this, "muted"), Fy(this, "playbackRate"), Fy(this, "loop")
      }
      attachShadow(ee) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class UM extends MM {
      constructor() {
        super(...arguments), Fy(this, "tagName", "DIALOG"), Fy(this, "nodeName", "DIALOG")
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
    class FM extends HM {
      constructor(ee) {
        super(), Fy(this, "nodeType", 3), Fy(this, "nodeName", "#text"), Fy(this, "RRNodeType", hb.Text), Fy(this, "data"), this.data = ee
      }
      get textContent() {
        return this.data
      }
      set textContent(ee) {
        this.data = ee
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class JM extends HM {
      constructor(ee) {
        super(), Fy(this, "nodeType", 8), Fy(this, "nodeName", "#comment"), Fy(this, "RRNodeType", hb.Comment), Fy(this, "data"), this.data = ee
      }
      get textContent() {
        return this.data
      }
      set textContent(ee) {
        this.data = ee
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class oM extends HM {
      constructor(ee) {
        super(), Fy(this, "nodeName", "#cdata-section"), Fy(this, "nodeType", 4), Fy(this, "RRNodeType", hb.CDATA), Fy(this, "data"), this.data = ee
      }
      get textContent() {
        return this.data
      }
      set textContent(ee) {
        this.data = ee
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class RM {
      constructor(ee, ie) {
        var He = this;
        if (Fy(this, "onChange"), Fy(this, "classes", []), Fy(this, "add", (function() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            for (const be of ie) {
              const ee = String(be);
              He.classes.indexOf(ee) >= 0 || He.classes.push(ee)
            }
            He.onChange && He.onChange(He.classes.join(" "))
          })), Fy(this, "remove", (function() {
            for (var ee = arguments.length, ie = new Array(ee), ye = 0; ye < ee; ye++) ie[ye] = arguments[ye];
            He.classes = He.classes.filter((ee => -1 === ie.indexOf(ee))), He.onChange && He.onChange(He.classes.join(" "))
          })), ee) {
          const ie = ee.trim().split(/\s+/);
          this.classes.push(...ie)
        }
        this.onChange = ie
      }
    }

    function kM(ee, ie) {
      return ie.parentNode && ie.parentNode.removeChild(ie), ee.lastChild ? (ee.lastChild.nextSibling = ie, ie.previousSibling = ee.lastChild) : (ee.firstChild = ie, ie.previousSibling = null), ee.lastChild = ie, ie.nextSibling = null, ie.parentNode = ee, ie.parentElement = ee, ie.ownerDocument = ee.ownerDocument, ie
    }

    function qM(ee, ie, He) {
      if (!He) return kM(ee, ie);
      if (He.parentNode !== ee) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return ie === He || (ie.parentNode && ie.parentNode.removeChild(ie), ie.previousSibling = He.previousSibling, He.previousSibling = ie, ie.nextSibling = He, ie.previousSibling ? ie.previousSibling.nextSibling = ie : ee.firstChild = ie, ie.parentElement = ee, ie.parentNode = ee, ie.ownerDocument = ee.ownerDocument), ie
    }

    function fM(ee, ie) {
      if (ie.parentNode !== ee) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return ie.previousSibling ? ie.previousSibling.nextSibling = ie.nextSibling : ee.firstChild = ie.nextSibling, ie.nextSibling ? ie.nextSibling.previousSibling = ie.previousSibling : ee.lastChild = ie.previousSibling, ie.previousSibling = null, ie.nextSibling = null, ie.parentElement = null, ie.parentNode = null, ie
    }
    var TM = (ee => (ee[ee.PLACEHOLDER = 0] = "PLACEHOLDER", ee[ee.ELEMENT_NODE = 1] = "ELEMENT_NODE", ee[ee.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", ee[ee.TEXT_NODE = 3] = "TEXT_NODE", ee[ee.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", ee[ee.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", ee[ee.ENTITY_NODE = 6] = "ENTITY_NODE", ee[ee.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", ee[ee.COMMENT_NODE = 8] = "COMMENT_NODE", ee[ee.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", ee[ee.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", ee[ee.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", ee))(TM || {});
    const pM = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      XM = {
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
    let zM = null;

    function BM(ee, ie, He) {
      let ye = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : ie.mirror || ie.ownerDocument.mirror;
      ee = function(ee, ie, He, ye) {
          var be;
          He.afterAppend && !zM && (zM = new WeakSet, setTimeout((() => {
            zM = null
          }), 0));
          if (!OM(ee, ie)) {
            const Me = gM(ie, He.mirror, ye);
            null == (be = ee.parentNode) || be.replaceChild(Me, ee), ee = Me
          }
          switch (ie.RRNodeType) {
            case hb.Document:
              if (!dM(ee, ie, He.mirror, ye)) {
                const be = ye.getMeta(ie);
                be && (He.mirror.removeNodeFromMap(ee), ee.close(), ee.open(), He.mirror.add(ee, be), null == zM || zM.add(ee))
              }
              break;
            case hb.Element: {
              const be = ee,
                Me = ie;
              switch (Me.tagName) {
                case "IFRAME": {
                  const be = ee.contentDocument;
                  if (!be) break;
                  BM(be, ie.contentDocument, He, ye);
                  break
                }
              }
              Me.shadowRoot && (be.shadowRoot || be.attachShadow({
                  mode: "open"
                }), EM(be.shadowRoot, Me.shadowRoot, He, ye)),
                function(ee, ie, He) {
                  const ye = ee.attributes,
                    be = ie.attributes;
                  for (const Ke in be) {
                    const ye = be[Ke],
                      Ue = He.getMeta(ie);
                    if ((null == Ue ? void 0 : Ue.isSVG) && pM[Ke]) ee.setAttributeNS(pM[Ke], Ke, ye);
                    else if ("CANVAS" === ie.tagName && "rr_dataURL" === Ke) {
                      const ie = document.createElement("img");
                      ie.src = ye, ie.onload = () => {
                        const He = ee.getContext("2d");
                        He && He.drawImage(ie, 0, 0, ie.width, ie.height)
                      }
                    } else {
                      if ("IFRAME" === ie.tagName && "srcdoc" === Ke) continue;
                      try {
                        ee.setAttribute(Ke, ye)
                      } catch (Me) {
                        console.warn(Me)
                      }
                    }
                  }
                  for (const {
                      name: Ke
                    }
                    of Array.from(ye)) Ke in be || ee.removeAttribute(Ke);
                  ie.scrollLeft && (ee.scrollLeft = ie.scrollLeft), ie.scrollTop && (ee.scrollTop = ie.scrollTop)
                }(be, Me, ye);
              break
            }
          }
          return ee
        }(ee, ie, He, ye), EM(ee, ie, He, ye),
        function(ee, ie, He) {
          var ye;
          switch (ie.RRNodeType) {
            case hb.Document: {
              const ee = ie.scrollData;
              ee && He.applyScroll(ee, !0);
              break
            }
            case hb.Element: {
              const ye = ee,
                Me = ie;
              switch (Me.scrollData && He.applyScroll(Me.scrollData, !0), Me.inputData && He.applyInput(Me.inputData), Me.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const ie = ee,
                    He = Me;
                  void 0 !== He.paused && (He.paused ? ie.pause() : ie.play()), void 0 !== He.muted && (ie.muted = He.muted), void 0 !== He.volume && (ie.volume = He.volume), void 0 !== He.currentTime && (ie.currentTime = He.currentTime), void 0 !== He.playbackRate && (ie.playbackRate = He.playbackRate), void 0 !== He.loop && (ie.loop = He.loop);
                  break
                }
                case "CANVAS": {
                  const be = ie;
                  if (null !== be.rr_dataURL) {
                    const ee = document.createElement("img");
                    ee.onload = () => {
                      const ie = ye.getContext("2d");
                      ie && ie.drawImage(ee, 0, 0, ee.width, ee.height)
                    }, ee.src = be.rr_dataURL
                  }
                  be.canvasMutations.forEach((ie => He.applyCanvas(ie.event, ie.mutation, ee)));
                  break
                }
                case "STYLE": {
                  const ee = ye.sheet;
                  ee && ie.rules.forEach((ie => He.applyStyleSheetMutation(ie, ee)));
                  break
                }
                case "DIALOG": {
                  const ee = ye,
                    ie = Me,
                    He = ee.open,
                    Ke = ee.matches("dialog:modal"),
                    Ue = ie.open,
                    Fe = ie.isModal,
                    Je = Ke !== Fe,
                    oe = He !== Ue;
                  if ((Je || He && oe) && ee.close(), Ue && (oe || Je)) try {
                    Fe ? ee.showModal() : ee.show()
                  } catch (be) {
                    console.warn(be)
                  }
                  break
                }
              }
              break
            }
            case hb.Text:
            case hb.Comment:
            case hb.CDATA:
              ee.textContent !== ie.data && (ee.textContent = ie.data)
          }(null == zM ? void 0 : zM.has(ee)) && (zM.delete(ee), null == (ye = He.afterAppend) || ye.call(He, ee, He.mirror.getId(ee)))
        }(ee, ie, He)
    }

    function EM(ee, ie, He, ye) {
      const be = Array.from(ee.childNodes),
        Me = ie.childNodes;
      if (0 === be.length && 0 === Me.length) return;
      let Ke, Ue, Fe = 0,
        Je = be.length - 1,
        oe = 0,
        Re = Me.length - 1,
        ke = be[Fe],
        qe = be[Je],
        fe = Me[oe],
        Te = Me[Re];
      for (; Fe <= Je && oe <= Re;)
        if (void 0 === ke) ke = be[++Fe];
        else if (void 0 === qe) qe = be[--Je];
      else if (dM(ke, fe, He.mirror, ye)) ke = be[++Fe], fe = Me[++oe];
      else if (dM(qe, Te, He.mirror, ye)) qe = be[--Je], Te = Me[--Re];
      else if (dM(ke, Te, He.mirror, ye)) {
        try {
          ee.insertBefore(ke, qe.nextSibling)
        } catch (ze) {
          console.warn(ze)
        }
        ke = be[++Fe], Te = Me[--Re]
      } else if (dM(qe, fe, He.mirror, ye)) {
        try {
          ee.insertBefore(qe, ke)
        } catch (ze) {
          console.warn(ze)
        }
        qe = be[--Je], fe = Me[++oe]
      } else {
        if (!Ke) {
          Ke = {};
          for (let ee = Fe; ee <= Je; ee++) {
            const ie = be[ee];
            ie && He.mirror.hasNode(ie) && (Ke[He.mirror.getId(ie)] = ee)
          }
        }
        Ue = Ke[ye.getId(fe)];
        const ie = be[Ue];
        if (void 0 !== Ue && ie && dM(ie, fe, He.mirror, ye)) {
          try {
            ee.insertBefore(ie, ke)
          } catch (ze) {
            console.warn(ze)
          }
          be[Ue] = void 0
        } else {
          const ie = gM(fe, He.mirror, ye);
          "#document" === ee.nodeName && ke && (ie.nodeType === ie.DOCUMENT_TYPE_NODE && ke.nodeType === ke.DOCUMENT_TYPE_NODE || ie.nodeType === ie.ELEMENT_NODE && ke.nodeType === ke.ELEMENT_NODE) && (ee.removeChild(ke), He.mirror.removeNodeFromMap(ke), ke = be[++Fe]);
          try {
            ee.insertBefore(ie, ke || null)
          } catch (ze) {
            console.warn(ze)
          }
        }
        fe = Me[++oe]
      }
      if (Fe > Je) {
        const ie = Me[Re + 1];
        let be = null;
        for (ie && (be = He.mirror.Abe(ye.getId(ie))); oe <= Re; ++oe) {
          const ie = gM(Me[oe], He.mirror, ye);
          try {
            ee.insertBefore(ie, be)
          } catch (ze) {
            console.warn(ze)
          }
        }
      } else if (oe > Re)
        for (; Fe <= Je; Fe++) {
          const ie = be[Fe];
          if (ie && ie.parentNode === ee) try {
            ee.removeChild(ie), He.mirror.removeNodeFromMap(ie)
          } catch (ze) {
            console.warn(ze)
          }
        }
      let pe = ee.firstChild,
        Xe = ie.firstChild;
      for (; null !== pe && null !== Xe;) BM(pe, Xe, He, ye), pe = pe.nextSibling, Xe = Xe.nextSibling
    }

    function gM(ee, ie, He) {
      const ye = He.getId(ee),
        be = He.getMeta(ee);
      let Me = null;
      if (ye > -1 && (Me = ie.Abe(ye)), null !== Me && OM(Me, ee)) return Me;
      switch (ee.RRNodeType) {
        case hb.Document:
          Me = new Document;
          break;
        case hb.DocumentType:
          Me = document.implementation.createDocumentType(ee.name, ee.publicId, ee.systemId);
          break;
        case hb.Element: {
          let ie = ee.tagName.toLowerCase();
          ie = XM[ie] || ie, Me = be && "isSVG" in be && (null == be ? void 0 : be.isSVG) ? document.createElementNS(pM.svg, ie) : document.createElement(ee.tagName);
          break
        }
        case hb.Text:
          Me = document.createTextNode(ee.data);
          break;
        case hb.Comment:
          Me = document.createComment(ee.data);
          break;
        case hb.CDATA:
          Me = document.createCDATASection(ee.data)
      }
      be && ie.add(Me, {
        ...be
      });
      try {
        null == zM || zM.add(Me)
      } catch (Ke) {}
      return Me
    }

    function OM(ee, ie) {
      return ee.nodeType === ie.nodeType && (ee.nodeType !== ee.ELEMENT_NODE || ee.tagName.toUpperCase() === ie.tagName)
    }

    function dM(ee, ie, He, ye) {
      const be = He.getId(ee),
        Me = ye.getId(ie);
      return -1 !== be && be === Me && OM(ee, ie)
    }
    class WM extends yM {
      constructor(ee) {
        super(), Fy(this, "UNSERIALIZED_STARTING_ID", -2), Fy(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), Fy(this, "mirror", new CM), Fy(this, "scrollData", null), ee && (this.mirror = ee)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(ee, ie, He) {
        return new WM
      }
      createDocumentType(ee, ie, He) {
        const ye = new tM(ee, ie, He);
        return ye.ownerDocument = this, ye
      }
      createElement(ee) {
        const ie = ee.toUpperCase();
        let He;
        switch (ie) {
          case "AUDIO":
          case "VIDEO":
            He = new wM(ie);
            break;
          case "IFRAME":
            He = new YM(ie, this.mirror);
            break;
          case "CANVAS":
            He = new PM(ie);
            break;
          case "STYLE":
            He = new AM(ie);
            break;
          case "DIALOG":
            He = new DM(ie);
            break;
          default:
            He = new ZM(ie)
        }
        return He.ownerDocument = this, He
      }
      createComment(ee) {
        const ie = new aM(ee);
        return ie.ownerDocument = this, ie
      }
      createCDATASection(ee) {
        const ie = new cM(ee);
        return ie.ownerDocument = this, ie
      }
      createTextNode(ee) {
        const ie = new VM(ee);
        return ie.ownerDocument = this, ie
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const tM = bM;
    class ZM extends MM {
      constructor() {
        super(...arguments), Fy(this, "inputData", null), Fy(this, "scrollData", null)
      }
    }
    class wM extends KM {}
    class DM extends UM {}
    class PM extends ZM {
      constructor() {
        super(...arguments), Fy(this, "rr_dataURL", null), Fy(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class AM extends ZM {
      constructor() {
        super(...arguments), Fy(this, "rules", [])
      }
    }
    class YM extends ZM {
      constructor(ee, ie) {
        super(ee), Fy(this, "contentDocument", new WM), this.contentDocument.mirror = ie
      }
    }
    const VM = FM,
      aM = JM,
      cM = oM;

    function xM(ee, ie, He, ye) {
      let be;
      switch (ee.nodeType) {
        case TM.DOCUMENT_NODE:
          ye && "IFRAME" === ye.nodeName ? be = ye.contentDocument : (be = ie, be.compatMode = ee.compatMode);
          break;
        case TM.DOCUMENT_TYPE_NODE: {
          const He = ee;
          be = ie.createDocumentType(He.name, He.publicId, He.systemId);
          break
        }
        case TM.ELEMENT_NODE: {
          const He = ee,
            ye = (Me = He) instanceof HTMLFormElement ? "FORM" : Me.tagName.toUpperCase();
          be = ie.createElement(ye);
          const Ke = be;
          for (const {
              name: ee,
              value: ie
            }
            of Array.from(He.attributes)) Ke.attributes[ee] = ie;
          He.scrollLeft && (Ke.scrollLeft = He.scrollLeft), He.scrollTop && (Ke.scrollTop = He.scrollTop);
          break
        }
        case TM.TEXT_NODE:
          be = ie.createTextNode(ee.textContent || "");
          break;
        case TM.CDATA_SECTION_NODE:
          be = ie.createCDATASection(ee.data);
          break;
        case TM.COMMENT_NODE:
          be = ie.createComment(ee.textContent || "");
          break;
        case TM.DOCUMENT_FRAGMENT_NODE:
          be = ye.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var Me;
      let Ke = He.getMeta(ee);
      return ie instanceof WM && (Ke || (Ke = vM(be, ie.unserializedId), He.add(ee, Ke)), ie.mirror.add(be, {
        ...Ke
      })), be
    }

    function LM(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ry,
        He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new WM;
      return function ee(ye, be) {
        const Me = xM(ye, He, ie, be);
        if (null !== Me)
          if ("IFRAME" !== (null == be ? void 0 : be.nodeName) && ye.nodeType !== TM.DOCUMENT_FRAGMENT_NODE && (null == be || be.appendChild(Me), Me.parentNode = be, Me.parentElement = be), "IFRAME" === ye.nodeName) {
            const ie = ye.contentDocument;
            ie && ee(ie, Me)
          } else ye.nodeType !== TM.DOCUMENT_NODE && ye.nodeType !== TM.ELEMENT_NODE && ye.nodeType !== TM.DOCUMENT_FRAGMENT_NODE || (ye.nodeType === TM.ELEMENT_NODE && ye.shadowRoot && ee(ye.shadowRoot, Me), ye.childNodes.forEach((ie => ee(ie, Me))))
      }(ee, null), He
    }
    class CM {
      constructor() {
        Fy(this, "idNodeMap", new Map), Fy(this, "nodeMetaMap", new WeakMap)
      }
      getId(ee) {
        var ie;
        if (!ee) return -1;
        return (null == (ie = this.getMeta(ee)) ? void 0 : ie.id) ?? -1
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
        this.idNodeMap.delete(ie), ee.childNodes && ee.childNodes.forEach((ee => this.removeNodeFromMap(ee)))
      }
      has(ee) {
        return this.idNodeMap.has(ee)
      }
      hasNode(ee) {
        return this.nodeMetaMap.has(ee)
      }
      add(ee, ie) {
        const He = ie.id;
        this.idNodeMap.set(He, ee), this.nodeMetaMap.set(ee, ie)
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
    }

    function vM(ee, ie) {
      switch (ee.RRNodeType) {
        case hb.Document:
          return {
            id: ie, type: ee.RRNodeType, childNodes: []
          };
        case hb.DocumentType: {
          const He = ee;
          return {
            id: ie,
            type: ee.RRNodeType,
            name: He.name,
            publicId: He.publicId,
            systemId: He.systemId
          }
        }
        case hb.Element:
          return {
            id: ie, type: ee.RRNodeType, tagName: ee.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case hb.Text:
        case hb.Comment:
          return {
            id: ie, type: ee.RRNodeType, textContent: ee.textContent || ""
          };
        case hb.CDATA:
          return {
            id: ie, type: ee.RRNodeType, textContent: ""
          }
      }
    }
    const uM = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      mM = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      lM = {},
      SM = {};

    function nM(ee) {
      if (lM[ee]) return lM[ee];
      const ie = globalThis[ee],
        He = ie.prototype,
        ye = ee in uM ? uM[ee] : void 0,
        be = Boolean(ye && ye.every((ee => {
          var ie, ye;
          return Boolean(null == (ye = null == (ie = Object.getOwnPropertyDescriptor(He, ee)) ? void 0 : ie.get) ? void 0 : ye.toString().includes("[native code]"))
        }))),
        Me = ee in mM ? mM[ee] : void 0,
        Ke = Boolean(Me && Me.every((ee => {
          var ie;
          return "function" === typeof He[ee] && (null == (ie = He[ee]) ? void 0 : ie.toString().includes("[native code]"))
        })));
      if (be && Ke && !globalThis.Zone) return lM[ee] = ie.prototype, ie.prototype;
      try {
        const ye = document.createElement("iframe");
        ye.style.display = "none", document.body.appendChild(ye);
        const be = ye.contentWindow;
        if (!be) return ie.prototype;
        const Me = be[ee].prototype;
        if (!Me) return ye.remove(), He;
        const Ke = navigator.userAgent;
        return Ke.includes("Safari") && !Ke.includes("Chrome") ? (ye.classList.add("rr-block"), ye.setAttribute("__rrwebUntaintedMutationObserver", ""), SM[ee] = () => ye.remove()) : ye.remove(), lM[ee] = Me
      } catch {
        return He
      }
    }
    const jM = {};

    function sM(ee, ie, He) {
      var ye, be;
      const Me = null == (ye = jM[ee]) ? void 0 : ye[He];
      if (Me) return Me.call(ie);
      const Ke = nM(ee),
        Ue = null == (be = Object.getOwnPropertyDescriptor(Ke, He)) ? void 0 : be.get;
      return Ue ? ((jM[ee] || (jM[ee] = {}))[He] = Ue, Ue.call(ie)) : ie[He]
    }
    const IM = {};

    function hM(ee, ie, He) {
      const ye = `${ee}.${String(He)}`;
      if (IM[ye]) return IM[ye].bind(ie);
      const be = nM(ee)[He];
      return "function" !== typeof be ? ie[He] : (IM[ye] = be, be.bind(ie))
    }

    function NM() {
      return [nM("MutationObserver").constructor, SM.MutationObserver ?? (() => {})]
    }
    let GM = Date.now;

    function rM(ee, ie, He) {
      try {
        if (!(ie in ee)) return () => {};
        const ye = ee[ie],
          be = He(ye);
        return "function" === typeof be && (be.prototype = be.prototype || {}, Object.defineProperties(be, {
          __rrweb_original__: {
            enumerable: !1,
            value: ye
          }
        })), ee[ie] = be, () => {
          ee[ie] = ye
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (GM = () => (new Date).getTime());
    const QM = {
      ownerDocument: function(ee) {
        return sM("Node", ee, "ownerDocument")
      },
      childNodes: function(ee) {
        return sM("Node", ee, "childNodes")
      },
      parentNode: function(ee) {
        return sM("Node", ee, "parentNode")
      },
      parentElement: function(ee) {
        return sM("Node", ee, "parentElement")
      },
      textContent: function(ee) {
        return sM("Node", ee, "textContent")
      },
      firstChild: function(ee) {
        return sM("Node", ee, "firstChild")
      },
      lastChild: function(ee) {
        return sM("Node", ee, "lastChild")
      },
      nextSibling: function(ee) {
        return sM("Node", ee, "nextSibling")
      },
      previousSibling: function(ee) {
        return sM("Node", ee, "previousSibling")
      },
      contains: function(ee, ie) {
        return hM("Node", ee, "contains")(ie)
      },
      getRootNode: function(ee) {
        return hM("Node", ee, "getRootNode")()
      },
      host: function(ee) {
        return ee && "host" in ee ? sM("ShadowRoot", ee, "host") : null
      },
      styleSheets: function(ee) {
        return ee.styleSheets
      },
      shadowRoot: function(ee) {
        return ee && "shadowRoot" in ee ? sM("Element", ee, "shadowRoot") : null
      },
      querySelector: function(ee, ie) {
        return sM("Element", ee, "querySelector")(ie)
      },
      querySelectorAll: function(ee, ie) {
        return sM("Element", ee, "querySelectorAll")(ie)
      },
      nowTimestamp: GM,
      mutationObserverCtor: NM,
      patch: rM
    };

    function eK(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const ye = {
        capture: !0,
        passive: !0
      };
      return He.addEventListener(ee, ie, ye), () => He.removeEventListener(ee, ie, ye)
    }
    const iK = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let HK = {
      map: {},
      getId: () => (console.error(iK), -1),
      Abe: () => (console.error(iK), null),
      removeNodeFromMap() {
        console.error(iK)
      },
      has: () => (console.error(iK), !1),
      reset() {
        console.error(iK)
      }
    };

    function yK(ee, ie) {
      let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        ye = null,
        be = 0;
      return function() {
        for (var Me = arguments.length, Ke = new Array(Me), Ue = 0; Ue < Me; Ue++) Ke[Ue] = arguments[Ue];
        const Fe = Date.now();
        be || !1 !== He.leading || (be = Fe);
        const Je = ie - (Fe - be),
          oe = this;
        Je <= 0 || Je > ie ? (ye && (clearTimeout(ye), ye = null), be = Fe, ee.apply(oe, Ke)) : ye || !1 === He.trailing || (ye = setTimeout((() => {
          be = !1 === He.leading ? 0 : Date.now(), ye = null, ee.apply(oe, Ke)
        }), Je))
      }
    }

    function bK(ee, ie, He, ye) {
      let be = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const Me = be.Object.getOwnPropertyDescriptor(ee, ie);
      return be.Object.defineProperty(ee, ie, ye ? He : {
        set(ee) {
          setTimeout((() => {
            He.set.call(this, ee)
          }), 0), Me && Me.set && Me.set.call(this, ee)
        }
      }), () => bK(ee, ie, Me || {}, !0)
    }

    function MK(ee) {
      var ie, He, ye, be;
      const Me = ee.document;
      return {
        left: Me.scrollingElement ? Me.scrollingElement.scrollLeft : void 0 !== ee.pageXOffset ? ee.pageXOffset : Me.documentElement.scrollLeft || (null == Me ? void 0 : Me.body) && (null == (ie = QM.parentElement(Me.body)) ? void 0 : ie.scrollLeft) || (null == (He = null == Me ? void 0 : Me.body) ? void 0 : He.scrollLeft) || 0,
        top: Me.scrollingElement ? Me.scrollingElement.scrollTop : void 0 !== ee.pageYOffset ? ee.pageYOffset : (null == Me ? void 0 : Me.documentElement.scrollTop) || (null == Me ? void 0 : Me.body) && (null == (ye = QM.parentElement(Me.body)) ? void 0 : ye.scrollTop) || (null == (be = null == Me ? void 0 : Me.body) ? void 0 : be.scrollTop) || 0
      }
    }

    function KK() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function UK() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function FK(ee) {
      if (!ee) return null;
      return ee.nodeType === ee.ELEMENT_NODE ? ee : QM.parentElement(ee)
    }

    function JK(ee, ie, He, ye) {
      if (!ee) return !1;
      const be = FK(ee);
      if (!be) return !1;
      try {
        if ("string" === typeof ie) {
          if (be.classList.contains(ie)) return !0;
          if (ye && null !== be.closest("." + ie)) return !0
        } else if (yi(be, ie, ye)) return !0
      } catch (Me) {}
      if (He) {
        if (be.matches(He)) return !0;
        if (ye && null !== be.closest(He)) return !0
      }
      return !1
    }

    function oK(ee, ie) {
      return -1 !== ie.getId(ee)
    }

    function RK(ee, ie, He) {
      return !("TITLE" !== ee.tagName || !He.headTitleMutations) || -2 === ie.getId(ee)
    }

    function kK(ee, ie) {
      if (ge(ee)) return !1;
      const He = ie.getId(ee);
      if (!ie.has(He)) return !0;
      const ye = QM.parentNode(ee);
      return (!ye || ye.nodeType !== ee.DOCUMENT_NODE) && (!ye || kK(ye, ie))
    }

    function qK(ee) {
      return Boolean(ee.changedTouches)
    }

    function fK() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in ee && !ee.NodeList.prototype.forEach && (ee.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in ee && !ee.DOMTokenList.prototype.forEach && (ee.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function TK(ee) {
      const ie = {},
        He = (ee, He) => {
          const ye = {
            value: ee,
            parent: He,
            children: []
          };
          return ie[ee.node.id] = ye, ye
        },
        ye = [];
      for (const be of ee) {
        const {
          nextId: ee,
          parentId: Me
        } = be;
        if (ee && ee in ie) {
          const Me = ie[ee];
          if (Me.parent) {
            const ee = Me.parent.children.indexOf(Me);
            Me.parent.children.splice(ee, 0, He(be, Me.parent))
          } else {
            const ee = ye.indexOf(Me);
            ye.splice(ee, 0, He(be, null))
          }
        } else if (Me in ie) {
          const ee = ie[Me];
          ee.children.push(He(be, ee))
        } else ye.push(He(be, null))
      }
      return ye
    }

    function pK(ee, ie) {
      ie(ee.value);
      for (let He = ee.children.length - 1; He >= 0; He--) pK(ee.children[He], ie)
    }

    function XK(ee, ie) {
      return Boolean("IFRAME" === ee.nodeName && ie.getMeta(ee))
    }

    function zK(ee, ie) {
      return Boolean("LINK" === ee.nodeName && ee.nodeType === ee.ELEMENT_NODE && ee.getAttribute && "stylesheet" === ee.getAttribute("rel") && ie.getMeta(ee))
    }

    function BK(ee, ie) {
      var He, ye;
      const be = null == (ye = null == (He = ee.ownerDocument) ? void 0 : He.defaultView) ? void 0 : ye.frameElement;
      if (!be || be === ie) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const Me = be.getBoundingClientRect(),
        Ke = BK(be, ie),
        Ue = Me.height / be.clientHeight;
      return {
        x: Me.x * Ke.relativeScale + Ke.x,
        y: Me.y * Ke.relativeScale + Ke.y,
        relativeScale: Ue,
        absoluteScale: Ke.absoluteScale * Ue
      }
    }

    function EK(ee) {
      return !!ee && (ee instanceof HM && "shadowRoot" in ee ? Boolean(ee.shadowRoot) : Boolean(QM.shadowRoot(ee)))
    }

    function gK(ee, ie) {
      const He = null == ee ? void 0 : ee[ie[0]];
      return He ? 1 === ie.length ? He : gK(He.cssRules, ie.slice(1)) : null
    }

    function OK(ee) {
      const ie = [...ee],
        He = ie.pop();
      return {
        positions: ie,
        index: He
      }
    }

    function dK(ee) {
      const ie = new Set,
        He = [];
      for (let ye = ee.length; ye--;) {
        const be = ee[ye];
        ie.has(be.id) || (He.push(be), ie.add(be.id))
      }
      return He
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (HK = new Proxy(HK, {
      get: (ee, ie, He) => ("map" === ie && console.error(iK), Reflect.get(ee, ie, He))
    }));
    class WK {
      constructor() {
        Me(this, "id", 1), Me(this, "styleIDMap", new WeakMap), Me(this, "idStyleMap", new Map)
      }
      getId(ee) {
        return this.styleIDMap.get(ee) ?? -1
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
    }

    function tK(ee) {
      var ie;
      let He = null;
      return "getRootNode" in ee && (null == (ie = QM.getRootNode(ee)) ? void 0 : ie.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && QM.host(QM.getRootNode(ee)) && (He = QM.host(QM.getRootNode(ee))), He
    }

    function ZK(ee) {
      let ie, He = ee;
      for (; ie = tK(He);) He = ie;
      return He
    }

    function wK(ee) {
      const ie = QM.ownerDocument(ee);
      if (!ie) return !1;
      const He = ZK(ee);
      return QM.contains(ie, He)
    }

    function DK(ee) {
      const ie = QM.ownerDocument(ee);
      return !!ie && (QM.contains(ie, ee) || wK(ee))
    }
    Symbol.toStringTag;
    var PK = (ee => (ee[ee.DomContentLoaded = 0] = "DomContentLoaded", ee[ee.Load = 1] = "Load", ee[ee.FullSnapshot = 2] = "FullSnapshot", ee[ee.IncrementalSnapshot = 3] = "IncrementalSnapshot", ee[ee.Meta = 4] = "Meta", ee[ee.Custom = 5] = "Custom", ee[ee.Plugin = 6] = "Plugin", ee[ee.Asset = 7] = "Asset", ee))(PK || {}),
      AK = (ee => (ee[ee.Mutation = 0] = "Mutation", ee[ee.MouseMove = 1] = "MouseMove", ee[ee.MouseInteraction = 2] = "MouseInteraction", ee[ee.Scroll = 3] = "Scroll", ee[ee.ViewportResize = 4] = "ViewportResize", ee[ee.Input = 5] = "Input", ee[ee.TouchMove = 6] = "TouchMove", ee[ee.MediaInteraction = 7] = "MediaInteraction", ee[ee.StyleSheetRule = 8] = "StyleSheetRule", ee[ee.CanvasMutation = 9] = "CanvasMutation", ee[ee.Font = 10] = "Font", ee[ee.Log = 11] = "Log", ee[ee.Drag = 12] = "Drag", ee[ee.StyleDeclaration = 13] = "StyleDeclaration", ee[ee.Selection = 14] = "Selection", ee[ee.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", ee[ee.CustomElement = 16] = "CustomElement", ee))(AK || {}),
      YK = (ee => (ee[ee.MouseUp = 0] = "MouseUp", ee[ee.MouseDown = 1] = "MouseDown", ee[ee.Click = 2] = "Click", ee[ee.ContextMenu = 3] = "ContextMenu", ee[ee.DblClick = 4] = "DblClick", ee[ee.Focus = 5] = "Focus", ee[ee.Blur = 6] = "Blur", ee[ee.TouchStart = 7] = "TouchStart", ee[ee.TouchMove_Departed = 8] = "TouchMove_Departed", ee[ee.TouchEnd = 9] = "TouchEnd", ee[ee.TouchCancel = 10] = "TouchCancel", ee))(YK || {}),
      VK = (ee => (ee[ee.Mouse = 0] = "Mouse", ee[ee.Pen = 1] = "Pen", ee[ee.Touch = 2] = "Touch", ee))(VK || {}),
      aK = (ee => (ee[ee["2D"] = 0] = "2D", ee[ee.WebGL = 1] = "WebGL", ee[ee.WebGL2 = 2] = "WebGL2", ee))(aK || {}),
      cK = (ee => (ee[ee.Play = 0] = "Play", ee[ee.Pause = 1] = "Pause", ee[ee.Seeked = 2] = "Seeked", ee[ee.VolumeChange = 3] = "VolumeChange", ee[ee.RateChange = 4] = "RateChange", ee))(cK || {}),
      xK = (ee => (ee.Start = "start", ee.Pause = "pause", ee.Resume = "resume", ee.Resize = "resize", ee.Finish = "finish", ee.FullsnapshotRebuilded = "fullsnapshot-rebuilded", ee.LoadStylesheetStart = "load-stylesheet-start", ee.LoadStylesheetEnd = "load-stylesheet-end", ee.SkipStart = "skip-start", ee.SkipEnd = "skip-end", ee.MouseInteraction = "mouse-interaction", ee.EventCast = "event-cast", ee.CustomEvent = "custom-event", ee.Flush = "flush", ee.StateChange = "state-change", ee.PlayBack = "play-back", ee.Destroy = "destroy", ee))(xK || {}),
      LK = (ee => (ee[ee.Document = 0] = "Document", ee[ee.DocumentType = 1] = "DocumentType", ee[ee.Element = 2] = "Element", ee[ee.Text = 3] = "Text", ee[ee.CDATA = 4] = "CDATA", ee[ee.Comment = 5] = "Comment", ee))(LK || {});
    const CK = (ee, ie) => `${ee}@${ie}`;
    class vK {
      constructor() {
        Me(this, "frozen", !1), Me(this, "locked", !1), Me(this, "texts", []), Me(this, "attributes", []), Me(this, "attributeMap", new WeakMap), Me(this, "removes", []), Me(this, "mapRemoves", []), Me(this, "movedMap", {}), Me(this, "addedSet", new Set), Me(this, "movedSet", new Set), Me(this, "droppedSet", new Set), Me(this, "removesSubTreeCache", new Set), Me(this, "mutationCb"), Me(this, "blockClass"), Me(this, "blockSelector"), Me(this, "maskTextClass"), Me(this, "maskTextSelector"), Me(this, "inlineStylesheet"), Me(this, "maskInputOptions"), Me(this, "maskTextFn"), Me(this, "maskInputFn"), Me(this, "keepIframeSrcFn"), Me(this, "recordCanvas"), Me(this, "inlineImages"), Me(this, "slimDOMOptions"), Me(this, "dataURLOptions"), Me(this, "doc"), Me(this, "mirror"), Me(this, "iframeManager"), Me(this, "stylesheetManager"), Me(this, "shadowDomManager"), Me(this, "canvasManager"), Me(this, "processedNodeManager"), Me(this, "unattachedDoc"), Me(this, "processMutations", (ee => {
          ee.forEach(this.processMutation), this.emit()
        })), Me(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const ee = [],
            ie = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const Re of this.movedSet) {
            const ee = QM.parentNode(Re);
            this.removesSubTreeCache.has(ee) && !this.movedSet.has(ee) || this.addedSet.add(Re)
          }
          let He = null,
            ye = null,
            be = -1,
            Me = null,
            Ke = !1;
          const Ue = new Set,
            Fe = this.addedSet.values();
          let Je = Fe.next();
          for (; this.addedSet.size;) {
            if (null !== He && this.addedSet.has(QM.previousSibling(He))) Me = He, He = QM.previousSibling(He);
            else {
              for (this.addedSet.has(Je.value) || (Je = Fe.next()), He = Je.value; ye = QM.parentNode(He), this.addedSet.has(ye);) He = ye;
              if (Ue.has(ye)) ye = null;
              else if (ye) {
                if (DK(ye) ? (Ke = mK(this.droppedSet, ye) || this.removesSubTreeCache.has(ye), Ke && mK(this.movedSet, He) && (Ke = !1)) : Ke = !0, this.addedSet.has(QM.lastChild(ye))) He = QM.lastChild(ye), Me = null;
                else
                  for (; Me = QM.nextSibling(He), this.addedSet.has(Me);) He = Me;
                if (be = ge(ye) ? this.mirror.getId(tK(He)) : this.mirror.getId(ye), -1 === be && ye.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const ee = QM.host(ye);
                  be = this.mirror.getId(ee)
                }
              }
            }
            if (this.addedSet.delete(He), !ye || -1 === be) {
              Ue.add(He);
              continue
            }
            if (Ke) {
              this.droppedSet.add(He);
              continue
            }
            let oe = !1;
            if (He.nodeType === Node.TEXT_NODE) {
              const ee = ye.tagName;
              if ("TEXTAREA" === ee) continue;
              "STYLE" === ee && ie.has(be) && (oe = !0)
            }
            let Re = Me ? this.mirror.getId(Me) : null;
            for (; - 2 === Re;) Me = Me && QM.nextSibling(Me), Re = Me && this.mirror.getId(Me);
            if (-1 === Re) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", Me), He = null;
              continue
            }
            const ke = Fi(He, {
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
              onSerialize: ee => {
                XK(ee, this.mirror) && this.iframeManager.addIframe(ee), zK(ee, this.mirror) && this.stylesheetManager.trackLinkElement(ee), EK(He) && this.shadowDomManager.addShadowRoot(QM.shadowRoot(He), this.doc)
              },
              onIframeLoad: (ee, ie) => {
                this.iframeManager.attachIframe(ee, ie), this.shadowDomManager.observeAttachShadow(ee)
              },
              onStylesheetLoad: (ee, ie) => {
                this.stylesheetManager.attachLinkElement(ee, ie)
              },
              cssCaptured: oe
            });
            ke && (ee.push({
              parentId: be,
              nextId: Re,
              node: ke
            }), ie.add(ke.id))
          }
          const oe = {
            texts: this.texts.map((ee => {
              const ie = ee.node,
                He = QM.parentNode(ie);
              return He && "TEXTAREA" === He.tagName && this.genTextAreaValueMutation(He), {
                id: this.mirror.getId(ie),
                value: ee.value
              }
            })).filter((ee => !ie.has(ee.id))).filter((ee => this.mirror.has(ee.id))),
            attributes: this.attributes.map((ee => {
              const {
                attributes: ie
              } = ee;
              if ("string" === typeof ie.style) {
                const He = JSON.stringify(ee.styleDiff),
                  ye = JSON.stringify(ee._unchangedStyles);
                He.length < ie.style.length && (He + ye).split("var(").length === ie.style.split("var(").length && (ie.style = ee.styleDiff)
              }
              return {
                id: this.mirror.getId(ee.node),
                attributes: ie
              }
            })).filter((ee => !ie.has(ee.id))).filter((ee => this.mirror.has(ee.id))),
            removes: this.removes,
            adds: ee
          };
          (oe.texts.length || oe.attributes.length || oe.removes.length || oe.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(oe))
        })), Me(this, "genTextAreaValueMutation", (ee => {
          let ie = this.attributeMap.get(ee);
          ie || (ie = {
            node: ee,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(ie), this.attributeMap.set(ee, ie));
          const He = Array.from(QM.childNodes(ee), (ee => QM.textContent(ee) || "")).join("");
          ie.attributes.value = we({
            element: ee,
            maskInputOptions: this.maskInputOptions,
            tagName: ee.tagName,
            type: Ae(ee),
            value: He,
            maskInputFn: this.maskInputFn
          })
        })), Me(this, "processMutation", (ee => {
          if (!RK(ee.target, this.mirror, this.slimDOMOptions)) switch (ee.type) {
            case "characterData": {
              const ie = QM.textContent(ee.target);
              JK(ee.target, this.blockClass, this.blockSelector, !1) || ie === ee.oldValue || this.texts.push({
                value: bi(ee.target, this.maskTextClass, this.maskTextSelector, !0) && ie ? this.maskTextFn ? this.maskTextFn(ie, FK(ee.target)) : ie.replace(/[\S]/g, "*") : ie,
                node: ee.target
              });
              break
            }
            case "attributes": {
              const He = ee.target,
                ye = De(He.tagName);
              let be = ee.attributeName,
                Me = ee.target.getAttribute(be);
              if ("value" === be) {
                const ee = Ae(He);
                Me = we({
                  element: He,
                  maskInputOptions: this.maskInputOptions,
                  tagName: He.tagName,
                  type: ee,
                  value: Me,
                  maskInputFn: this.maskInputFn
                })
              }
              if (JK(ee.target, this.blockClass, this.blockSelector, !1) || Me === ee.oldValue) return;
              let Ke = this.attributeMap.get(ee.target);
              if ("iframe" === ye && "src" === be && !this.keepIframeSrcFn(Me)) {
                if (He.contentDocument) return;
                be = "rr_src"
              }
              if (Ke || (Ke = {
                  node: ee.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(Ke), this.attributeMap.set(ee.target, Ke)), "type" === be && "input" === ye && "password" === (ee.oldValue || "").toLowerCase() && He.setAttribute("data-rr-is-password", "true"), !Hi(ye, be))
                if (Ke.attributes[be] = ii(this.doc, ye, De(be), Me), "style" === be) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (ie) {
                    this.unattachedDoc = this.doc
                  }
                  const ye = this.unattachedDoc.createElement("span");
                  ee.oldValue && ye.setAttribute("style", ee.oldValue);
                  for (const ee of Array.from(He.style)) {
                    const ie = He.style.getPropertyValue(ee),
                      be = He.style.getPropertyPriority(ee);
                    ie !== ye.style.getPropertyValue(ee) || be !== ye.style.getPropertyPriority(ee) ? Ke.styleDiff[ee] = "" === be ? ie : [ie, be] : Ke._unchangedStyles[ee] = [ie, be]
                  }
                  for (const ee of Array.from(ye.style)) "" === He.style.getPropertyValue(ee) && (Ke.styleDiff[ee] = !1)
                } else "open" === be && "DIALOG" === He.tagName && (He.matches("dialog:modal") ? Ke.attributes.rr_open_mode = "modal" : Ke.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (JK(ee.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === ee.target.tagName) return void this.genTextAreaValueMutation(ee.target);
              ee.addedNodes.forEach((ie => this.genAdds(ie, ee.target))), ee.removedNodes.forEach((ie => {
                const He = this.mirror.getId(ie),
                  ye = ge(ee.target) ? this.mirror.getId(QM.host(ee.target)) : this.mirror.getId(ee.target);
                JK(ee.target, this.blockClass, this.blockSelector, !1) || RK(ie, this.mirror, this.slimDOMOptions) || !oK(ie, this.mirror) || (this.addedSet.has(ie) ? (uK(this.addedSet, ie), this.droppedSet.add(ie)) : this.addedSet.has(ee.target) && -1 === He || kK(ee.target, this.mirror) || (this.movedSet.has(ie) && this.movedMap[CK(He, ye)] ? uK(this.movedSet, ie) : (this.removes.push({
                  parentId: ye,
                  id: He,
                  isShadow: !(!ge(ee.target) || !Oe(ee.target)) || void 0
                }), function(ee, ie) {
                  const He = [ee];
                  for (; He.length;) {
                    const ee = He.pop();
                    ie.has(ee) || (ie.add(ee), QM.childNodes(ee).forEach((ee => He.push(ee))))
                  }
                }(ie, this.removesSubTreeCache))), this.mapRemoves.push(ie))
              }))
          }
        })), Me(this, "genAdds", ((ee, ie) => {
          if (!this.processedNodeManager.inOtherBuffer(ee, this) && !this.addedSet.has(ee) && !this.movedSet.has(ee)) {
            if (this.mirror.hasNode(ee)) {
              if (RK(ee, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(ee);
              let He = null;
              ie && this.mirror.hasNode(ie) && (He = this.mirror.getId(ie)), He && -1 !== He && (this.movedMap[CK(this.mirror.getId(ee), He)] = !0)
            } else this.addedSet.add(ee), this.droppedSet.delete(ee);
            JK(ee, this.blockClass, this.blockSelector, !1) || (QM.childNodes(ee).forEach((ee => this.genAdds(ee))), EK(ee) && QM.childNodes(QM.shadowRoot(ee)).forEach((ie => {
              this.processedNodeManager.add(ie, this), this.genAdds(ie, ee)
            })))
          }
        }))
      }
      init(ee) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((ie => {
          this[ie] = ee[ie]
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

    function uK(ee, ie) {
      ee.delete(ie), QM.childNodes(ie).forEach((ie => uK(ee, ie)))
    }

    function mK(ee, ie) {
      return 0 !== ee.size && lK(ee, ie)
    }

    function lK(ee, ie) {
      if (ee.has(ie)) return !0;
      const He = QM.parentNode(ie);
      return !!He && lK(ee, He)
    }
    let SK;
    const nK = ee => {
        if (!SK) return ee;
        return function() {
          try {
            return ee(...arguments)
          } catch (ie) {
            if (SK && !0 === SK(ie)) return;
            throw ie
          }
        }
      },
      jK = [];

    function sK(ee) {
      try {
        if ("composedPath" in ee) {
          const ie = ee.composedPath();
          if (ie.length) return ie[0]
        } else if ("path" in ee && ee.path.length) return ee.path[0]
      } catch {}
      return ee && ee.target
    }

    function IK(ee, ie) {
      const He = new vK;
      jK.push(He), He.init(ee);
      const [ye, be] = NM(), Me = new ye(nK(He.processMutations.bind(He)));
      return Me.observe(ie, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [Me, be]
    }

    function hK(ee) {
      let {
        mouseInteractionCb: ie,
        doc: He,
        mirror: ye,
        blockClass: be,
        blockSelector: Me,
        sampling: Ke
      } = ee;
      if (!1 === Ke.mouseInteraction) return () => {};
      const Ue = !0 === Ke.mouseInteraction || void 0 === Ke.mouseInteraction ? {} : Ke.mouseInteraction,
        Fe = [];
      let Je = null;
      return Object.keys(YK).filter((ee => Number.isNaN(Number(ee)) && !ee.endsWith("_Departed") && !1 !== Ue[ee])).forEach((ee => {
        let Ke = De(ee);
        const Ue = (ee => He => {
          const Ke = sK(He);
          if (JK(Ke, be, Me, !0)) return;
          let Ue = null,
            Fe = ee;
          if ("pointerType" in He) {
            switch (He.pointerType) {
              case "mouse":
                Ue = VK.Mouse;
                break;
              case "touch":
                Ue = VK.Touch;
                break;
              case "pen":
                Ue = VK.Pen
            }
            Ue === VK.Touch ? YK[ee] === YK.MouseDown ? Fe = "TouchStart" : YK[ee] === YK.MouseUp && (Fe = "TouchEnd") : VK.Pen
          } else qK(He) && (Ue = VK.Touch);
          null !== Ue ? (Je = Ue, (Fe.startsWith("Touch") && Ue === VK.Touch || Fe.startsWith("Mouse") && Ue === VK.Mouse) && (Ue = null)) : YK[ee] === YK.Click && (Ue = Je, Je = null);
          const oe = qK(He) ? He.changedTouches[0] : He;
          if (!oe) return;
          const Re = ye.getId(Ke),
            {
              clientX: ke,
              clientY: qe
            } = oe;
          nK(ie)({
            type: YK[Fe],
            id: Re,
            x: ke,
            y: qe,
            ...null !== Ue && {
              pointerType: Ue
            }
          })
        })(ee);
        if (window.PointerEvent) switch (YK[ee]) {
          case YK.MouseDown:
          case YK.MouseUp:
            Ke = Ke.replace("mouse", "pointer");
            break;
          case YK.TouchStart:
          case YK.TouchEnd:
            return
        }
        Fe.push(eK(Ke, Ue, He))
      })), nK((() => {
        Fe.forEach((ee => ee()))
      }))
    }

    function NK(ee) {
      let {
        scrollCb: ie,
        doc: He,
        mirror: ye,
        blockClass: be,
        blockSelector: Me,
        sampling: Ke
      } = ee;
      const Ue = nK(yK(nK((ee => {
        const Ke = sK(ee);
        if (!Ke || JK(Ke, be, Me, !0)) return;
        const Ue = ye.getId(Ke);
        if (Ke === He && He.defaultView) {
          const ee = MK(He.defaultView);
          ie({
            id: Ue,
            x: ee.left,
            y: ee.top
          })
        } else ie({
          id: Ue,
          x: Ke.scrollLeft,
          y: Ke.scrollTop
        })
      })), Ke.scroll || 100));
      return eK("scroll", Ue, He)
    }
    const GK = ["INPUT", "TEXTAREA", "SELECT"],
      rK = new WeakMap;

    function QK(ee) {
      return function ee(ie, He) {
        if (yU("CSSGroupingRule") && ie.parentRule instanceof CSSGroupingRule || yU("CSSMediaRule") && ie.parentRule instanceof CSSMediaRule || yU("CSSSupportsRule") && ie.parentRule instanceof CSSSupportsRule || yU("CSSConditionRule") && ie.parentRule instanceof CSSConditionRule) {
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

    function eU(ee, ie, He) {
      let ye, be;
      return ee ? (ee.ownerNode ? ye = ie.getId(ee.ownerNode) : be = He.getId(ee), {
        styleId: be,
        id: ye
      }) : {}
    }

    function iU(ee, ie) {
      let {
        mirror: He,
        stylesheetManager: ye
      } = ee;
      var be, Me, Ke;
      let Ue = null;
      Ue = "#document" === ie.nodeName ? He.getId(ie) : He.getId(QM.host(ie));
      const Fe = "#document" === ie.nodeName ? null == (be = ie.defaultView) ? void 0 : be.Document : null == (Ke = null == (Me = ie.ownerDocument) ? void 0 : Me.defaultView) ? void 0 : Ke.ShadowRoot,
        Je = (null == Fe ? void 0 : Fe.prototype) ? Object.getOwnPropertyDescriptor(null == Fe ? void 0 : Fe.prototype, "adoptedStyleSheets") : void 0;
      return null !== Ue && -1 !== Ue && Fe && Je ? (Object.defineProperty(ie, "adoptedStyleSheets", {
        configurable: Je.configurable,
        enumerable: Je.enumerable,
        get() {
          var ee;
          return null == (ee = Je.get) ? void 0 : ee.call(this)
        },
        set(ee) {
          var ie;
          const He = null == (ie = Je.set) ? void 0 : ie.call(this, ee);
          if (null !== Ue && -1 !== Ue) try {
            ye.adoptStyleSheets(ee, Ue)
          } catch (be) {}
          return He
        }
      }), nK((() => {
        Object.defineProperty(ie, "adoptedStyleSheets", {
          configurable: Je.configurable,
          enumerable: Je.enumerable,
          get: Je.get,
          set: Je.set
        })
      }))) : () => {}
    }

    function HU(ee) {
      let ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const He = ee.doc.defaultView;
      if (!He) return () => {};
      let ye;
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
      let be = () => {};
      ee.recordDOM && ([ye, be] = IK(ee, ee.doc));
      const Me = function(ee) {
          let {
            mousemoveCb: ie,
            sampling: He,
            doc: ye,
            mirror: be
          } = ee;
          if (!1 === He.mousemove) return () => {};
          const Me = "number" === typeof He.mousemove ? He.mousemove : 50,
            Ke = "number" === typeof He.mousemoveCallback ? He.mousemoveCallback : 500;
          let Ue, Fe = [];
          const Je = yK(nK((ee => {
              const He = Date.now() - Ue;
              ie(Fe.map((ee => (ee.timeOffset -= He, ee))), ee), Fe = [], Ue = null
            })), Ke),
            oe = nK(yK(nK((ee => {
              const ie = sK(ee),
                {
                  clientX: He,
                  clientY: ye
                } = qK(ee) ? ee.changedTouches[0] : ee;
              Ue || (Ue = GM()), Fe.push({
                x: He,
                y: ye,
                id: be.getId(ie),
                timeOffset: GM() - Ue
              }), Je("undefined" !== typeof DragEvent && ee instanceof DragEvent ? AK.Drag : ee instanceof MouseEvent ? AK.MouseMove : AK.TouchMove)
            })), Me, {
              trailing: !1
            })),
            Re = [eK("mousemove", oe, ye), eK("touchmove", oe, ye), eK("drag", oe, ye)];
          return nK((() => {
            Re.forEach((ee => ee()))
          }))
        }(ee),
        Ke = hK(ee),
        Ue = NK(ee),
        Fe = function(ee, ie) {
          let {
            viewportResizeCb: He
          } = ee, {
            win: ye
          } = ie, be = -1, Me = -1;
          return eK("resize", nK(yK(nK((() => {
            const ee = KK(),
              ie = UK();
            be === ee && Me === ie || (He({
              width: Number(ie),
              height: Number(ee)
            }), be = ee, Me = ie)
          })), 200)), ye)
        }(ee, {
          win: He
        }),
        Je = function(ee) {
          let {
            inputCb: ie,
            doc: He,
            mirror: ye,
            blockClass: be,
            blockSelector: Me,
            ignoreClass: Ke,
            ignoreSelector: Ue,
            maskInputOptions: Fe,
            maskInputFn: Je,
            sampling: oe,
            userTriggeredOnInput: Re
          } = ee;

          function ke(ee) {
            let ie = sK(ee);
            const ye = ee.isTrusted,
              oe = ie && ie.tagName;
            if (ie && "OPTION" === oe && (ie = QM.parentElement(ie)), !ie || !oe || GK.indexOf(oe) < 0 || JK(ie, be, Me, !0)) return;
            if (ie.classList.contains(Ke) || Ue && ie.matches(Ue)) return;
            let ke = ie.value,
              fe = !1;
            const Te = Ae(ie) || "";
            "radio" === Te || "checkbox" === Te ? fe = ie.checked : (Fe[oe.toLowerCase()] || Fe[Te]) && (ke = we({
              element: ie,
              maskInputOptions: Fe,
              tagName: oe,
              type: Te,
              value: ke,
              maskInputFn: Je
            })), qe(ie, Re ? {
              text: ke,
              isChecked: fe,
              userTriggered: ye
            } : {
              text: ke,
              isChecked: fe
            });
            const pe = ie.name;
            "radio" === Te && pe && fe && He.querySelectorAll(`input[type="radio"][name="${pe}"]`).forEach((ee => {
              if (ee !== ie) {
                const ie = ee.value;
                qe(ee, Re ? {
                  text: ie,
                  isChecked: !fe,
                  userTriggered: !1
                } : {
                  text: ie,
                  isChecked: !fe
                })
              }
            }))
          }

          function qe(ee, He) {
            const be = rK.get(ee);
            if (!be || be.text !== He.text || be.isChecked !== He.isChecked) {
              rK.set(ee, He);
              const be = ye.getId(ee);
              nK(ie)({
                ...He,
                id: be
              })
            }
          }
          const fe = ("last" === oe.input ? ["change"] : ["input", "change"]).map((ee => eK(ee, nK(ke), He))),
            Te = He.defaultView;
          if (!Te) return () => {
            fe.forEach((ee => ee()))
          };
          const pe = Te.Object.getOwnPropertyDescriptor(Te.HTMLInputElement.prototype, "value"),
            Xe = [
              [Te.HTMLInputElement.prototype, "value"],
              [Te.HTMLInputElement.prototype, "checked"],
              [Te.HTMLSelectElement.prototype, "value"],
              [Te.HTMLTextAreaElement.prototype, "value"],
              [Te.HTMLSelectElement.prototype, "selectedIndex"],
              [Te.HTMLOptionElement.prototype, "selected"]
            ];
          return pe && pe.set && fe.push(...Xe.map((ee => bK(ee[0], ee[1], {
            set() {
              nK(ke)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, Te)))), nK((() => {
            fe.forEach((ee => ee()))
          }))
        }(ee),
        oe = function(ee) {
          let {
            mediaInteractionCb: ie,
            blockClass: He,
            blockSelector: ye,
            mirror: be,
            sampling: Me,
            doc: Ke
          } = ee;
          const Ue = nK((ee => yK(nK((Me => {
              const Ke = sK(Me);
              if (!Ke || JK(Ke, He, ye, !0)) return;
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
            Fe = [eK("play", Ue(cK.Play), Ke), eK("pause", Ue(cK.Pause), Ke), eK("seeked", Ue(cK.Seeked), Ke), eK("volumechange", Ue(cK.VolumeChange), Ke), eK("ratechange", Ue(cK.RateChange), Ke)];
          return nK((() => {
            Fe.forEach((ee => ee()))
          }))
        }(ee);
      let Re = () => {},
        ke = () => {},
        qe = () => {},
        fe = () => {};
      ee.recordDOM && (Re = function(ee, ie) {
        let {
          styleSheetRuleCb: He,
          mirror: ye,
          stylesheetManager: be
        } = ee, {
          win: Me
        } = ie;
        if (!Me.CSSStyleSheet || !Me.CSSStyleSheet.prototype) return () => {};
        const Ke = Me.CSSStyleSheet.prototype.insertRule;
        Me.CSSStyleSheet.prototype.insertRule = new Proxy(Ke, {
          apply: nK(((ee, ie, Me) => {
            const [Ke, Ue] = Me, {
              id: Fe,
              styleId: Je
            } = eU(ie, ye, be.styleMirror);
            return (Fe && -1 !== Fe || Je && -1 !== Je) && He({
              id: Fe,
              styleId: Je,
              adds: [{
                rule: Ke,
                index: Ue
              }]
            }), ee.apply(ie, Me)
          }))
        }), Me.CSSStyleSheet.prototype.addRule = function(ee, ie) {
          let He = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const ye = `${ee} { ${ie} }`;
          return Me.CSSStyleSheet.prototype.insertRule.apply(this, [ye, He])
        };
        const Ue = Me.CSSStyleSheet.prototype.deleteRule;
        let Fe, Je;
        Me.CSSStyleSheet.prototype.deleteRule = new Proxy(Ue, {
          apply: nK(((ee, ie, Me) => {
            const [Ke] = Me, {
              id: Ue,
              styleId: Fe
            } = eU(ie, ye, be.styleMirror);
            return (Ue && -1 !== Ue || Fe && -1 !== Fe) && He({
              id: Ue,
              styleId: Fe,
              removes: [{
                index: Ke
              }]
            }), ee.apply(ie, Me)
          }))
        }), Me.CSSStyleSheet.prototype.removeRule = function(ee) {
          return Me.CSSStyleSheet.prototype.deleteRule.apply(this, [ee])
        }, Me.CSSStyleSheet.prototype.replace && (Fe = Me.CSSStyleSheet.prototype.replace, Me.CSSStyleSheet.prototype.replace = new Proxy(Fe, {
          apply: nK(((ee, ie, Me) => {
            const [Ke] = Me, {
              id: Ue,
              styleId: Fe
            } = eU(ie, ye, be.styleMirror);
            return (Ue && -1 !== Ue || Fe && -1 !== Fe) && He({
              id: Ue,
              styleId: Fe,
              replace: Ke
            }), ee.apply(ie, Me)
          }))
        })), Me.CSSStyleSheet.prototype.replaceSync && (Je = Me.CSSStyleSheet.prototype.replaceSync, Me.CSSStyleSheet.prototype.replaceSync = new Proxy(Je, {
          apply: nK(((ee, ie, Me) => {
            const [Ke] = Me, {
              id: Ue,
              styleId: Fe
            } = eU(ie, ye, be.styleMirror);
            return (Ue && -1 !== Ue || Fe && -1 !== Fe) && He({
              id: Ue,
              styleId: Fe,
              replaceSync: Ke
            }), ee.apply(ie, Me)
          }))
        }));
        const oe = {};
        bU("CSSGroupingRule") ? oe.CSSGroupingRule = Me.CSSGroupingRule : (bU("CSSMediaRule") && (oe.CSSMediaRule = Me.CSSMediaRule), bU("CSSConditionRule") && (oe.CSSConditionRule = Me.CSSConditionRule), bU("CSSSupportsRule") && (oe.CSSSupportsRule = Me.CSSSupportsRule));
        const Re = {};
        return Object.entries(oe).forEach((ee => {
          let [ie, Me] = ee;
          Re[ie] = {
            insertRule: Me.prototype.insertRule,
            deleteRule: Me.prototype.deleteRule
          }, Me.prototype.insertRule = new Proxy(Re[ie].insertRule, {
            apply: nK(((ee, ie, Me) => {
              const [Ke, Ue] = Me, {
                id: Fe,
                styleId: Je
              } = eU(ie.parentStyleSheet, ye, be.styleMirror);
              return (Fe && -1 !== Fe || Je && -1 !== Je) && He({
                id: Fe,
                styleId: Je,
                adds: [{
                  rule: Ke,
                  index: [...QK(ie), Ue || 0]
                }]
              }), ee.apply(ie, Me)
            }))
          }), Me.prototype.deleteRule = new Proxy(Re[ie].deleteRule, {
            apply: nK(((ee, ie, Me) => {
              const [Ke] = Me, {
                id: Ue,
                styleId: Fe
              } = eU(ie.parentStyleSheet, ye, be.styleMirror);
              return (Ue && -1 !== Ue || Fe && -1 !== Fe) && He({
                id: Ue,
                styleId: Fe,
                removes: [{
                  index: [...QK(ie), Ke]
                }]
              }), ee.apply(ie, Me)
            }))
          })
        })), nK((() => {
          Me.CSSStyleSheet.prototype.insertRule = Ke, Me.CSSStyleSheet.prototype.deleteRule = Ue, Fe && (Me.CSSStyleSheet.prototype.replace = Fe), Je && (Me.CSSStyleSheet.prototype.replaceSync = Je), Object.entries(oe).forEach((ee => {
            let [ie, He] = ee;
            He.prototype.insertRule = Re[ie].insertRule, He.prototype.deleteRule = Re[ie].deleteRule
          }))
        }))
      }(ee, {
        win: He
      }), ke = iU(ee, ee.doc), qe = function(ee, ie) {
        let {
          styleDeclarationCb: He,
          mirror: ye,
          ignoreCSSAttributes: be,
          stylesheetManager: Me
        } = ee, {
          win: Ke
        } = ie;
        const Ue = Ke.CSSStyleDeclaration.prototype.setProperty;
        Ke.CSSStyleDeclaration.prototype.setProperty = new Proxy(Ue, {
          apply: nK(((ee, ie, Ke) => {
            var Fe;
            const [Je, oe, Re] = Ke;
            if (be.has(Je)) return Ue.apply(ie, [Je, oe, Re]);
            const {
              id: ke,
              styleId: qe
            } = eU(null == (Fe = ie.parentRule) ? void 0 : Fe.parentStyleSheet, ye, Me.styleMirror);
            return (ke && -1 !== ke || qe && -1 !== qe) && He({
              id: ke,
              styleId: qe,
              set: {
                property: Je,
                value: oe,
                priority: Re
              },
              index: QK(ie.parentRule)
            }), ee.apply(ie, Ke)
          }))
        });
        const Fe = Ke.CSSStyleDeclaration.prototype.removeProperty;
        return Ke.CSSStyleDeclaration.prototype.removeProperty = new Proxy(Fe, {
          apply: nK(((ee, ie, Ke) => {
            var Ue;
            const [Je] = Ke;
            if (be.has(Je)) return Fe.apply(ie, [Je]);
            const {
              id: oe,
              styleId: Re
            } = eU(null == (Ue = ie.parentRule) ? void 0 : Ue.parentStyleSheet, ye, Me.styleMirror);
            return (oe && -1 !== oe || Re && -1 !== Re) && He({
              id: oe,
              styleId: Re,
              remove: {
                property: Je
              },
              index: QK(ie.parentRule)
            }), ee.apply(ie, Ke)
          }))
        }), nK((() => {
          Ke.CSSStyleDeclaration.prototype.setProperty = Ue, Ke.CSSStyleDeclaration.prototype.removeProperty = Fe
        }))
      }(ee, {
        win: He
      }), ee.collectFonts && (fe = function(ee) {
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
            buffer: "string" !== typeof ie,
            descriptors: He,
            fontSource: "string" === typeof ie ? ie : JSON.stringify(Array.from(new Uint8Array(ie)))
          }), ye
        };
        const Ue = rM(He.fonts, "add", (function(ee) {
          return function(He) {
            return setTimeout(nK((() => {
              const ee = Me.get(He);
              ee && (ie(ee), Me.delete(He))
            })), 0), ee.apply(this, [He])
          }
        }));
        return be.push((() => {
          ye.FontFace = Ke
        })), be.push(Ue), nK((() => {
          be.forEach((ee => ee()))
        }))
      }(ee)));
      const Te = function(ee) {
          const {
            doc: ie,
            mirror: He,
            blockClass: ye,
            blockSelector: be,
            selectionCb: Me
          } = ee;
          let Ke = !0;
          const Ue = nK((() => {
            const ee = ie.getSelection();
            if (!ee || Ke && (null == ee ? void 0 : ee.isCollapsed)) return;
            Ke = ee.isCollapsed || !1;
            const Ue = [],
              Fe = ee.rangeCount || 0;
            for (let ie = 0; ie < Fe; ie++) {
              const Me = ee.getRangeAt(ie),
                {
                  startContainer: Ke,
                  startOffset: Fe,
                  endContainer: Je,
                  endOffset: oe
                } = Me;
              JK(Ke, ye, be, !0) || JK(Je, ye, be, !0) || Ue.push({
                start: He.getId(Ke),
                startOffset: Fe,
                end: He.getId(Je),
                endOffset: oe
              })
            }
            Me({
              zp: Ue
            })
          }));
          return Ue(), eK("selectionchange", Ue)
        }(ee),
        pe = function(ee) {
          let {
            doc: ie,
            customElementCb: He
          } = ee;
          const ye = ie.defaultView;
          return ye && ye.customElements ? rM(ye.customElements, "define", (function(ee) {
            return function(ie, ye, be) {
              try {
                He({
                  define: {
                    name: ie
                  }
                })
              } catch (Me) {
                console.warn(`Custom element callback failed for ${ie}`)
              }
              return ee.apply(this, [ie, ye, be])
            }
          })) : () => {}
        }(ee),
        Xe = [];
      for (const ze of ee.plugins) Xe.push(ze.observer(ze.callback, He, ze.options));
      return nK((() => {
        jK.forEach((ee => ee.reset())), null == ye || ye.disconnect(), be(), Me(), Ke(), Ue(), Fe(), Je(), oe(), Re(), ke(), qe(), fe(), Te(), pe(), Xe.forEach((ee => ee()))
      }))
    }

    function yU(ee) {
      return "undefined" !== typeof window[ee]
    }

    function bU(ee) {
      return Boolean("undefined" !== typeof window[ee] && window[ee].prototype && "insertRule" in window[ee].prototype && "deleteRule" in window[ee].prototype)
    }
    class MU {
      constructor(ee) {
        Me(this, "iframeIdToRemoteIdMap", new WeakMap), Me(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = ee
      }
      getId(ee, ie, He, ye) {
        const be = He || this.getIdToRemoteIdMap(ee),
          Me = ye || this.getRemoteIdToIdMap(ee);
        let Ke = be.get(ie);
        return Ke || (Ke = this.generateIdFn(), be.set(ie, Ke), Me.set(Ke, ie)), Ke
      }
      getIds(ee, ie) {
        const He = this.getIdToRemoteIdMap(ee),
          ye = this.getRemoteIdToIdMap(ee);
        return ie.map((ie => this.getId(ee, ie, He, ye)))
      }
      getRemoteId(ee, ie, He) {
        const ye = He || this.getRemoteIdToIdMap(ee);
        if ("number" !== typeof ie) return ie;
        const be = ye.get(ie);
        return be || -1
      }
      getRemoteIds(ee, ie) {
        const He = this.getRemoteIdToIdMap(ee);
        return ie.map((ie => this.getRemoteId(ee, ie, He)))
      }
      reset(ee) {
        if (!ee) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(ee), this.iframeRemoteIdToIdMap.delete(ee)
      }
      getIdToRemoteIdMap(ee) {
        let ie = this.iframeIdToRemoteIdMap.get(ee);
        return ie || (ie = new Map, this.iframeIdToRemoteIdMap.set(ee, ie)), ie
      }
      getRemoteIdToIdMap(ee) {
        let ie = this.iframeRemoteIdToIdMap.get(ee);
        return ie || (ie = new Map, this.iframeRemoteIdToIdMap.set(ee, ie)), ie
      }
    }
    class KU {
      constructor(ee) {
        Me(this, "iframes", new WeakMap), Me(this, "crossOriginIframeMap", new WeakMap), Me(this, "crossOriginIframeMirror", new MU(je)), Me(this, "crossOriginIframeStyleMirror"), Me(this, "crossOriginIframeRootIdMap", new WeakMap), Me(this, "mirror"), Me(this, "mutationCb"), Me(this, "wrappedEmit"), Me(this, "loadListener"), Me(this, "stylesheetManager"), Me(this, "recordCrossOriginIframes"), this.mutationCb = ee.mutationCb, this.wrappedEmit = ee.wrappedEmit, this.stylesheetManager = ee.stylesheetManager, this.recordCrossOriginIframes = ee.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new MU(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = ee.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(ee) {
        this.iframes.set(ee, !0), ee.contentWindow && this.crossOriginIframeMap.set(ee.contentWindow, ee)
      }
      addLoadListener(ee) {
        this.loadListener = ee
      }
      attachIframe(ee, ie) {
        var He, ye;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(ee),
            nextId: null,
            node: ie
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (He = ee.contentWindow) || He.addEventListener("message", this.handleMessage.bind(this))), null == (ye = this.loadListener) || ye.call(this, ee), ee.contentDocument && ee.contentDocument.adoptedStyleSheets && ee.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(ee.contentDocument.adoptedStyleSheets, this.mirror.getId(ee.contentDocument))
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
        var He;
        switch (ie.type) {
          case PK.FullSnapshot: {
            this.crossOriginIframeMirror.reset(ee), this.crossOriginIframeStyleMirror.reset(ee), this.replaceIdOnNode(ie.data.node, ee);
            const He = ie.data.node.id;
            return this.crossOriginIframeRootIdMap.set(ee, He), this.patchRootIdOnNode(ie.data.node, He), {
              timestamp: ie.timestamp,
              type: PK.IncrementalSnapshot,
              data: {
                source: AK.Mutation,
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
          case PK.Meta:
          case PK.Load:
          case PK.DomContentLoaded:
            return !1;
          case PK.Plugin:
            return ie;
          case PK.Custom:
            return this.replaceIds(ie.data.payload, ee, ["id", "parentId", "previousId", "nextId"]), ie;
          case PK.IncrementalSnapshot:
            switch (ie.data.source) {
              case AK.Mutation:
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
              case AK.Drag:
              case AK.TouchMove:
              case AK.MouseMove:
                return ie.data.positions.forEach((ie => {
                  this.replaceIds(ie, ee, ["id"])
                })), ie;
              case AK.ViewportResize:
                return !1;
              case AK.MediaInteraction:
              case AK.MouseInteraction:
              case AK.Scroll:
              case AK.CanvasMutation:
              case AK.Input:
                return this.replaceIds(ie.data, ee, ["id"]), ie;
              case AK.StyleSheetRule:
              case AK.StyleDeclaration:
                return this.replaceIds(ie.data, ee, ["id"]), this.replaceStyleIds(ie.data, ee, ["styleId"]), ie;
              case AK.Font:
                return ie;
              case AK.Selection:
                return ie.data.zp.forEach((ie => {
                  this.replaceIds(ie, ee, ["start", "end"])
                })), ie;
              case AK.AdoptedStyleSheet:
                return this.replaceIds(ie.data, ee, ["id"]), this.replaceStyleIds(ie.data, ee, ["styleIds"]), null == (He = ie.data.styles) || He.forEach((ie => {
                  this.replaceStyleIds(ie, ee, ["styleId"])
                })), ie
            }
        }
        return !1
      }
      replace(ee, ie, He, ye) {
        for (const be of ye)(Array.isArray(ie[be]) || "number" === typeof ie[be]) && (Array.isArray(ie[be]) ? ie[be] = ee.getIds(He, ie[be]) : ie[be] = ee.getId(He, ie[be]));
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
        ee.type === LK.Document || ee.rootId || (ee.rootId = ie), "childNodes" in ee && ee.childNodes.forEach((ee => {
          this.patchRootIdOnNode(ee, ie)
        }))
      }
    }
    class UU {
      constructor(ee) {
        Me(this, "shadowDoms", new WeakSet), Me(this, "mutationCb"), Me(this, "scrollCb"), Me(this, "bypassOptions"), Me(this, "mirror"), Me(this, "restoreHandlers", []), this.mutationCb = ee.mutationCb, this.scrollCb = ee.scrollCb, this.bypassOptions = ee.bypassOptions, this.mirror = ee.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(ee, ie) {
        if (!Oe(ee)) return;
        if (this.shadowDoms.has(ee)) return;
        this.shadowDoms.add(ee);
        const [He] = IK({
          ...this.bypassOptions,
          doc: ie,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, ee);
        this.restoreHandlers.push((() => He.disconnect())), this.restoreHandlers.push(NK({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: ee,
          mirror: this.mirror
        })), setTimeout((() => {
          ee.adoptedStyleSheets && ee.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(ee.adoptedStyleSheets, this.mirror.getId(QM.host(ee))), this.restoreHandlers.push(iU({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, ee))
        }), 0)
      }
      observeAttachShadow(ee) {
        ee.contentWindow && ee.contentDocument && this.patchAttachShadow(ee.contentWindow.Element, ee.contentDocument)
      }
      patchAttachShadow(ee, ie) {
        const He = this;
        this.restoreHandlers.push(rM(ee.prototype, "attachShadow", (function(ee) {
          return function(ye) {
            const be = ee.call(this, ye),
              Me = QM.shadowRoot(this);
            return Me && DK(this) && He.addShadowRoot(Me, ie), be
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((ee => {
          try {
            ee()
          } catch (ie) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var FU = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", JU = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), oU = 0; oU < 64; oU++) JU[FU.charCodeAt(oU)] = oU;
    const RU = new Map;
    const kU = (ee, ie, He) => {
      if (!ee || !TU(ee, ie) && "object" !== typeof ee) return;
      const ye = function(ee, ie) {
        let He = RU.get(ee);
        return He || (He = new Map, RU.set(ee, He)), He.has(ie) || He.set(ie, []), He.get(ie)
      }(He, ee.constructor.name);
      let be = ye.indexOf(ee);
      return -1 === be && (be = ye.length, ye.push(ee)), be
    };

    function qU(ee, ie, He) {
      if (ee instanceof Array) return ee.map((ee => qU(ee, ie, He)));
      if (null === ee) return ee;
      if (ee instanceof Float32Array || ee instanceof Float64Array || ee instanceof Int32Array || ee instanceof Uint32Array || ee instanceof Uint8Array || ee instanceof Uint16Array || ee instanceof Int16Array || ee instanceof Int8Array || ee instanceof Uint8ClampedArray) {
        return {
          rr_type: ee.constructor.name,
          args: [Object.values(ee)]
        }
      }
      if (ee instanceof ArrayBuffer) {
        return {
          rr_type: ee.constructor.name,
          base64: function(ee) {
            var ie, He = new Uint8Array(ee),
              ye = He.length,
              be = "";
            for (ie = 0; ie < ye; ie += 3) be += FU[He[ie] >> 2], be += FU[(3 & He[ie]) << 4 | He[ie + 1] >> 4], be += FU[(15 & He[ie + 1]) << 2 | He[ie + 2] >> 6], be += FU[63 & He[ie + 2]];
            return ye % 3 === 2 ? be = be.substring(0, be.length - 1) + "=" : ye % 3 === 1 && (be = be.substring(0, be.length - 2) + "=="), be
          }(ee)
        }
      }
      if (ee instanceof DataView) {
        return {
          rr_type: ee.constructor.name,
          args: [qU(ee.buffer, ie, He), ee.byteOffset, ee.byteLength]
        }
      }
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
        return {
          rr_type: "HTMLImageElement",
          src: ee.toDataURL()
        }
      }
      if (ee instanceof ImageData) {
        return {
          rr_type: ee.constructor.name,
          args: [qU(ee.data, ie, He), ee.width, ee.height]
        }
      }
      if (TU(ee, ie) || "object" === typeof ee) {
        return {
          rr_type: ee.constructor.name,
          index: kU(ee, ie, He)
        }
      }
      return ee
    }
    const fU = (ee, ie, He) => ee.map((ee => qU(ee, ie, He))),
      TU = (ee, ie) => {
        const He = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((ee => "function" === typeof ie[ee]));
        return Boolean(He.find((He => ee instanceof ie[He])))
      };

    function pU(ee, ie, He, ye) {
      const be = [];
      try {
        const Me = rM(ee.HTMLCanvasElement.prototype, "getContext", (function(ee) {
          return function(be) {
            for (var Me = arguments.length, Ke = new Array(Me > 1 ? Me - 1 : 0), Ue = 1; Ue < Me; Ue++) Ke[Ue - 1] = arguments[Ue];
            if (!JK(this, ie, He, !0)) {
              const ee = function(ee) {
                return "experimental-webgl" === ee ? "webgl" : ee
              }(be);
              if ("__context" in this || (this.__context = ee), ye && ["webgl", "webgl2"].includes(ee))
                if (Ke[0] && "object" === typeof Ke[0]) {
                  const ee = Ke[0];
                  ee.preserveDrawingBuffer || (ee.preserveDrawingBuffer = !0)
                } else Ke.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return ee.apply(this, [be, ...Ke])
          }
        }));
        be.push(Me)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        be.forEach((ee => ee()))
      }
    }

    function XU(ee, ie, He, ye, be, Me) {
      const Ke = [],
        Ue = Object.getOwnPropertyNames(ee);
      for (const Fe of Ue)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(Fe)) try {
          if ("function" !== typeof ee[Fe]) continue;
          const Ue = rM(ee, Fe, (function(ee) {
            return function() {
              for (var Ke = arguments.length, Ue = new Array(Ke), Je = 0; Je < Ke; Je++) Ue[Je] = arguments[Je];
              const oe = ee.apply(this, Ue);
              if (kU(oe, Me, this), "tagName" in this.canvas && !JK(this.canvas, ye, be, !0)) {
                const ee = fU(Ue, Me, this),
                  ye = {
                    type: ie,
                    property: Fe,
                    args: ee
                  };
                He(this.canvas, ye)
              }
              return oe
            }
          }));
          Ke.push(Ue)
        } catch {
          const ye = bK(ee, Fe, {
            set(ee) {
              He(this.canvas, {
                type: ie,
                property: Fe,
                args: [ee],
                setter: !0
              })
            }
          });
          Ke.push(ye)
        }
      return Ke
    }
    const zU = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      BU = "undefined" !== typeof self && self.Blob && new Blob([zU], {
        type: "text/javascript;charset=utf-8"
      });

    function EU(ee) {
      let ie;
      try {
        if (ie = BU && (self.URL || self.webkitURL).createObjectURL(BU), !ie) throw "";
        const He = new Worker(ie, {
          name: null == ee ? void 0 : ee.name
        });
        return He.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(ie)
        })), He
      } catch (He) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(zU), {
          name: null == ee ? void 0 : ee.name
        })
      } finally {
        ie && (self.URL || self.webkitURL).revokeObjectURL(ie)
      }
    }
    class gU {
      constructor(ee) {
        Me(this, "pendingCanvasMutations", new Map), Me(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), Me(this, "mirror"), Me(this, "mutationCb"), Me(this, "resetObservers"), Me(this, "frozen", !1), Me(this, "locked", !1), Me(this, "processMutation", ((ee, ie) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(ee) || this.pendingCanvasMutations.set(ee, []), this.pendingCanvasMutations.get(ee).push(ie)
        }));
        const {
          sampling: ie = "all",
          win: He,
          blockClass: ye,
          blockSelector: be,
          recordCanvas: Ke,
          dataURLOptions: Ue
        } = ee;
        this.mutationCb = ee.mutationCb, this.mirror = ee.mirror, Ke && "all" === ie && this.initCanvasMutationObserver(He, ye, be), Ke && "number" === typeof ie && this.initCanvasFPSObserver(ie, He, ye, be, {
          dataURLOptions: Ue
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
      initCanvasFPSObserver(ee, ie, He, ye, be) {
        const Me = pU(ie, He, ye, !0),
          Ke = new Map,
          Ue = new EU;
        Ue.onmessage = ee => {
          const {
            id: ie
          } = ee.data;
          if (Ke.set(ie, !1), !("base64" in ee.data)) return;
          const {
            base64: He,
            type: ye,
            width: be,
            height: Me
          } = ee.data;
          this.mutationCb({
            id: ie,
            type: aK["2D"],
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
              }, 0, 0]
            }]
          })
        };
        const Fe = 1e3 / ee;
        let Je, oe = 0;
        const Re = ee => {
          oe && ee - oe < Fe || (oe = ee, (() => {
            const ee = [];
            return ie.document.querySelectorAll("canvas").forEach((ie => {
              JK(ie, He, ye, !0) || ee.push(ie)
            })), ee
          })().forEach((async ee => {
            var ie;
            const He = this.mirror.getId(ee);
            if (Ke.get(He)) return;
            if (0 === ee.width || 0 === ee.height) return;
            if (Ke.set(He, !0), ["webgl", "webgl2"].includes(ee.__context)) {
              const He = ee.getContext(ee.__context);
              !1 === (null == (ie = null == He ? void 0 : He.getContextAttributes()) ? void 0 : ie.preserveDrawingBuffer) && He.clear(He.COLOR_BUFFER_BIT)
            }
            const ye = await createImageBitmap(ee);
            Ue.postMessage({
              id: He,
              bitmap: ye,
              width: ee.width,
              height: ee.height,
              dataURLOptions: be.dataURLOptions
            }, [ye])
          }))), Je = requestAnimationFrame(Re)
        };
        Je = requestAnimationFrame(Re), this.resetObservers = () => {
          Me(), cancelAnimationFrame(Je)
        }
      }
      initCanvasMutationObserver(ee, ie, He) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const ye = pU(ee, ie, He, !1),
          be = function(ee, ie, He, ye) {
            const be = [],
              Me = Object.getOwnPropertyNames(ie.CanvasRenderingContext2D.prototype);
            for (const Ke of Me) try {
              if ("function" !== typeof ie.CanvasRenderingContext2D.prototype[Ke]) continue;
              const Me = rM(ie.CanvasRenderingContext2D.prototype, Ke, (function(be) {
                return function() {
                  for (var Me = arguments.length, Ue = new Array(Me), Fe = 0; Fe < Me; Fe++) Ue[Fe] = arguments[Fe];
                  return JK(this.canvas, He, ye, !0) || setTimeout((() => {
                    const He = fU(Ue, ie, this);
                    ee(this.canvas, {
                      type: aK["2D"],
                      property: Ke,
                      args: He
                    })
                  }), 0), be.apply(this, Ue)
                }
              }));
              be.push(Me)
            } catch {
              const He = bK(ie.CanvasRenderingContext2D.prototype, Ke, {
                set(ie) {
                  ee(this.canvas, {
                    type: aK["2D"],
                    property: Ke,
                    args: [ie],
                    setter: !0
                  })
                }
              });
              be.push(He)
            }
            return () => {
              be.forEach((ee => ee()))
            }
          }(this.processMutation.bind(this), ee, ie, He),
          Me = function(ee, ie, He, ye) {
            const be = [];
            return "undefined" !== typeof ie.WebGLRenderingContext && be.push(...XU(ie.WebGLRenderingContext.prototype, aK.WebGL, ee, He, ye, ie)), "undefined" !== typeof ie.WebGL2RenderingContext && be.push(...XU(ie.WebGL2RenderingContext.prototype, aK.WebGL2, ee, He, ye, ie)), () => {
              be.forEach((ee => ee()))
            }
          }(this.processMutation.bind(this), ee, ie, He);
        this.resetObservers = () => {
          ye(), be(), Me()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const ee = ie => {
          this.rafStamps.latestId = ie, requestAnimationFrame(ee)
        };
        requestAnimationFrame(ee)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((ee, ie) => {
          const He = this.mirror.getId(ie);
          this.flushPendingCanvasMutationFor(ie, He)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(ee, ie) {
        if (this.frozen || this.locked) return;
        const He = this.pendingCanvasMutations.get(ee);
        if (!He || -1 === ie) return;
        const ye = He.map((ee => {
            const {
              type: ie,
              ...He
            } = ee;
            return He
          })),
          {
            type: be
          } = He[0];
        this.mutationCb({
          id: ie,
          type: be,
          commands: ye
        }), this.pendingCanvasMutations.delete(ee)
      }
    }
    class OU {
      constructor(ee) {
        Me(this, "trackedLinkElements", new WeakSet), Me(this, "mutationCb"), Me(this, "adoptedStyleSheetCb"), Me(this, "styleMirror", new WK), this.mutationCb = ee.mutationCb, this.adoptedStyleSheetCb = ee.adoptedStyleSheetCb
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
          this.styleMirror.has(be) ? ee = this.styleMirror.getId(be) : (ee = this.styleMirror.add(be), ye.push({
            styleId: ee,
            rules: Array.from(be.rules || CSSRule, ((ee, ie) => ({
              rule: We(ee, be.href),
              index: ie
            })))
          })), He.styleIds.push(ee)
        }
        ye.length > 0 && (He.styles = ye), this.adoptedStyleSheetCb(He)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(ee) {}
    }
    class dU {
      constructor() {
        Me(this, "nodeMap", new WeakMap), Me(this, "active", !1)
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
    }
    let WU, tU, ZU, wU = !1;
    try {
      if (2 !== Array.from([1], (ee => 2 * ee))[0]) {
        const ee = document.createElement("iframe");
        document.body.appendChild(ee), Array.from = (null == (ye = ee.contentWindow) ? void 0 : ye.Array.from) || Array.from, document.body.removeChild(ee)
      }
    } catch (qF) {
      console.debug("Unable to override Array.from", qF)
    }
    const DU = Ze();

    function PU() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: ie,
        checkoutEveryNms: He,
        checkoutEveryNth: ye,
        blockClass: be = "rr-block",
        blockSelector: Me = null,
        ignoreClass: Ke = "rr-ignore",
        ignoreSelector: Ue = null,
        maskTextClass: Fe = "rr-mask",
        maskTextSelector: Je = null,
        inlineStylesheet: oe = !0,
        maskAllInputs: Re,
        maskInputOptions: ke,
        slimDOMOptions: qe,
        maskInputFn: fe,
        maskTextFn: Te,
        hooks: pe,
        packFn: Xe,
        sampling: ze = {},
        dataURLOptions: Be = {},
        mousemoveWait: Ee,
        recordDOM: ge = !0,
        recordCanvas: Oe = !1,
        recordCrossOriginIframes: de = !1,
        recordAfter: We = ("DOMContentLoaded" === ee.recordAfter ? ee.recordAfter : "load"),
        userTriggeredOnInput: Ze = !1,
        collectFonts: we = !1,
        inlineImages: De = !1,
        plugins: Pe,
        keepIframeSrcFn: Ae = () => !1,
        ignoreCSSAttributes: Ye = new Set([]),
        errorHandler: Ve
      } = ee;
      SK = Ve;
      const ae = !de || window.parent === window;
      let ce = !1;
      if (!ae) try {
        window.parent.document && (ce = !1)
      } catch (he) {
        ce = !0
      }
      if (ae && !ie) throw new Error("emit function is required");
      if (!ae && !ce) return () => {};
      void 0 !== Ee && void 0 === ze.mousemove && (ze.mousemove = Ee), DU.reset();
      const xe = !0 === Re ? {
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
        } : void 0 !== ke ? ke : {
          password: !0
        },
        Le = Ui(qe);
      let Ce;
      fK();
      let ve = 0;
      const ue = ee => {
        for (const ie of Pe || []) ie.eventProcessor && (ee = ie.eventProcessor(ee));
        return Xe && !ce && (ee = Xe(ee)), ee
      };
      WU = (ee, be) => {
        var Me;
        const Ke = ee;
        if (Ke.timestamp = GM(), !(null == (Me = jK[0]) ? void 0 : Me.isFrozen()) || Ke.type === PK.FullSnapshot || Ke.type === PK.IncrementalSnapshot && Ke.data.source === AK.Mutation || jK.forEach((ee => ee.unfreeze())), ae) null == ie || ie(ue(Ke), be);
        else if (ce) {
          const ee = {
            type: "rrweb",
            event: ue(Ke),
            origin: window.location.origin,
            isCheckout: be
          };
          window.parent.postMessage(ee, "*")
        }
        if (Ke.type === PK.FullSnapshot) Ce = Ke, ve = 0;
        else if (Ke.type === PK.IncrementalSnapshot) {
          if (Ke.data.source === AK.Mutation && Ke.data.isAttachIframe) return;
          ve++;
          const ee = ye && ve >= ye,
            ie = He && Ke.timestamp - Ce.timestamp > He;
          (ee || ie) && tU(!0)
        }
      };
      const me = ee => {
          WU({
            type: PK.IncrementalSnapshot,
            data: {
              source: AK.Mutation,
              ...ee
            }
          })
        },
        le = ee => WU({
          type: PK.IncrementalSnapshot,
          data: {
            source: AK.Scroll,
            ...ee
          }
        }),
        Se = ee => WU({
          type: PK.IncrementalSnapshot,
          data: {
            source: AK.CanvasMutation,
            ...ee
          }
        }),
        ne = new OU({
          mutationCb: me,
          adoptedStyleSheetCb: ee => WU({
            type: PK.IncrementalSnapshot,
            data: {
              source: AK.AdoptedStyleSheet,
              ...ee
            }
          })
        }),
        je = new KU({
          mirror: DU,
          mutationCb: me,
          stylesheetManager: ne,
          recordCrossOriginIframes: de,
          wrappedEmit: WU
        });
      for (const te of Pe || []) te.getMirror && te.getMirror({
        nodeMirror: DU,
        crossOriginIframeMirror: je.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: je.crossOriginIframeStyleMirror
      });
      const se = new dU;
      ZU = new gU({
        recordCanvas: Oe,
        mutationCb: Se,
        win: window,
        blockClass: be,
        blockSelector: Me,
        mirror: DU,
        sampling: ze.canvas,
        dataURLOptions: Be
      });
      const Ie = new UU({
        mutationCb: me,
        scrollCb: le,
        bypassOptions: {
          blockClass: be,
          blockSelector: Me,
          maskTextClass: Fe,
          maskTextSelector: Je,
          inlineStylesheet: oe,
          maskInputOptions: xe,
          dataURLOptions: Be,
          maskTextFn: Te,
          maskInputFn: fe,
          recordCanvas: Oe,
          inlineImages: De,
          sampling: ze,
          slimDOMOptions: Le,
          iframeManager: je,
          stylesheetManager: ne,
          canvasManager: ZU,
          keepIframeSrcFn: Ae,
          processedNodeManager: se
        },
        mirror: DU
      });
      tU = function() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!ge) return;
        WU({
          type: PK.Meta,
          data: {
            href: window.location.href,
            width: UK(),
            height: KK()
          }
        }, ee), ne.reset(), Ie.init(), jK.forEach((ee => ee.lock()));
        const ie = function(ee, ie) {
          const {
            mirror: He = new te,
            blockClass: ye = "rr-block",
            blockSelector: be = null,
            maskTextClass: Me = "rr-mask",
            maskTextSelector: Ke = null,
            inlineStylesheet: Ue = !0,
            inlineImages: Fe = !1,
            recordCanvas: Je = !1,
            maskAllInputs: oe = !1,
            maskTextFn: Re,
            maskInputFn: ke,
            slimDOM: qe = !1,
            dataURLOptions: fe,
            preserveWhiteSpace: Te,
            onSerialize: pe,
            onIframeLoad: Xe,
            iframeLoadTimeout: ze,
            onStylesheetLoad: Be,
            stylesheetLoadTimeout: Ee,
            keepIframeSrcFn: ge = () => !1
          } = ie;
          return Fi(ee, {
            doc: ee,
            mirror: He,
            blockClass: ye,
            blockSelector: be,
            maskTextClass: Me,
            maskTextSelector: Ke,
            skipChild: !1,
            inlineStylesheet: Ue,
            maskInputOptions: !0 === oe ? {
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
            } : !1 === oe ? {
              password: !0
            } : oe,
            maskTextFn: Re,
            maskInputFn: ke,
            slimDOMOptions: Ui(qe),
            dataURLOptions: fe,
            inlineImages: Fe,
            recordCanvas: Je,
            preserveWhiteSpace: Te,
            onSerialize: pe,
            onIframeLoad: Xe,
            iframeLoadTimeout: ze,
            onStylesheetLoad: Be,
            stylesheetLoadTimeout: Ee,
            keepIframeSrcFn: ge,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: DU,
          blockClass: be,
          blockSelector: Me,
          maskTextClass: Fe,
          maskTextSelector: Je,
          inlineStylesheet: oe,
          maskAllInputs: xe,
          maskTextFn: Te,
          maskInputFn: fe,
          slimDOM: Le,
          dataURLOptions: Be,
          recordCanvas: Oe,
          inlineImages: De,
          onSerialize: ee => {
            XK(ee, DU) && je.addIframe(ee), zK(ee, DU) && ne.trackLinkElement(ee), EK(ee) && Ie.addShadowRoot(QM.shadowRoot(ee), document)
          },
          onIframeLoad: (ee, ie) => {
            je.attachIframe(ee, ie), Ie.observeAttachShadow(ee)
          },
          onStylesheetLoad: (ee, ie) => {
            ne.attachLinkElement(ee, ie)
          },
          keepIframeSrcFn: Ae
        });
        if (!ie) return console.warn("Failed to snapshot the document");
        WU({
          type: PK.FullSnapshot,
          data: {
            node: ie,
            initialOffset: MK(window)
          }
        }, ee), jK.forEach((ee => ee.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ne.adoptStyleSheets(document.adoptedStyleSheets, DU.getId(document))
      };
      try {
        const ee = [],
          ie = ee => {
            var ie;
            return nK(HU)({
              mutationCb: me,
              mousemoveCb: (ee, ie) => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: ie,
                  positions: ee
                }
              }),
              mouseInteractionCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.MouseInteraction,
                  ...ee
                }
              }),
              scrollCb: le,
              viewportResizeCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.ViewportResize,
                  ...ee
                }
              }),
              inputCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.Input,
                  ...ee
                }
              }),
              mediaInteractionCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.MediaInteraction,
                  ...ee
                }
              }),
              styleSheetRuleCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.StyleSheetRule,
                  ...ee
                }
              }),
              styleDeclarationCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.StyleDeclaration,
                  ...ee
                }
              }),
              canvasMutationCb: Se,
              fontCb: ee => WU({
                type: PK.IncrementalSnapshot,
                data: {
                  source: AK.Font,
                  ...ee
                }
              }),
              selectionCb: ee => {
                WU({
                  type: PK.IncrementalSnapshot,
                  data: {
                    source: AK.Selection,
                    ...ee
                  }
                })
              },
              customElementCb: ee => {
                WU({
                  type: PK.IncrementalSnapshot,
                  data: {
                    source: AK.CustomElement,
                    ...ee
                  }
                })
              },
              blockClass: be,
              ignoreClass: Ke,
              ignoreSelector: Ue,
              maskTextClass: Fe,
              maskTextSelector: Je,
              maskInputOptions: xe,
              inlineStylesheet: oe,
              sampling: ze,
              recordDOM: ge,
              recordCanvas: Oe,
              inlineImages: De,
              userTriggeredOnInput: Ze,
              collectFonts: we,
              doc: ee,
              maskInputFn: fe,
              maskTextFn: Te,
              keepIframeSrcFn: Ae,
              blockSelector: Me,
              slimDOMOptions: Le,
              dataURLOptions: Be,
              mirror: DU,
              iframeManager: je,
              stylesheetManager: ne,
              shadowDomManager: Ie,
              processedNodeManager: se,
              canvasManager: ZU,
              ignoreCSSAttributes: Ye,
              plugins: (null == (ie = null == Pe ? void 0 : Pe.filter((ee => ee.observer))) ? void 0 : ie.map((ee => ({
                observer: ee.observer,
                options: ee.options,
                callback: ie => WU({
                  type: PK.Plugin,
                  data: {
                    plugin: ee.name,
                    payload: ie
                  }
                })
              })))) || []
            }, pe)
          };
        je.addLoadListener((He => {
          try {
            ee.push(ie(He.contentDocument))
          } catch (ye) {
            console.warn(ye)
          }
        }));
        const He = () => {
          tU(), ee.push(ie(document)), wU = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? He() : (ee.push(eK("DOMContentLoaded", (() => {
          WU({
            type: PK.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === We && He()
        }))), ee.push(eK("load", (() => {
          WU({
            type: PK.Load,
            data: {}
          }), "load" === We && He()
        }), window))), () => {
          ee.forEach((ee => {
            try {
              ee()
            } catch (ie) {
              String(ie).toLowerCase().includes("cross-origin") || console.warn(ie)
            }
          })), se.destroy(), wU = !1, SK = void 0
        }
      } catch (Ne) {
        console.warn(Ne)
      }
    }

    function AU() {
      let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        ie = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in ie.documentElement.style && !0 !== ee.__forceSmoothScrollPolyfill__) return;
      const He = ee.HTMLElement || ee.Element,
        ye = {
          scroll: ee.scroll || ee.scrollTo,
          scrollBy: ee.scrollBy,
          elementScroll: He.prototype.scroll || Ue,
          scrollIntoView: He.prototype.scrollIntoView
        },
        be = ee.performance && ee.performance.now ? ee.performance.now.bind(ee.performance) : Date.now;
      const Me = (Ke = ee.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(Ke) ? 1 : 0);
      var Ke;

      function Ue(ee, ie) {
        this.scrollLeft = ee, this.scrollTop = ie
      }

      function Fe(ee) {
        if (null === ee || "object" !== typeof ee || void 0 === ee.behavior || "auto" === ee.behavior || "instant" === ee.behavior) return !0;
        if ("object" === typeof ee && "smooth" === ee.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + ee.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function Je(ee, ie) {
        return "Y" === ie ? ee.clientHeight + Me < ee.scrollHeight : "X" === ie ? ee.clientWidth + Me < ee.scrollWidth : void 0
      }

      function oe(ie, He) {
        const ye = ee.getComputedStyle(ie, null)["overflow" + He];
        return "auto" === ye || "scroll" === ye
      }

      function Re(ee) {
        const ie = Je(ee, "Y") && oe(ee, "Y"),
          He = Je(ee, "X") && oe(ee, "X");
        return ie || He
      }

      function ke(ie) {
        let He, ye, Me, Ke = (be() - ie.startTime) / 468;
        var Ue;
        Ke = Ke > 1 ? 1 : Ke, Ue = Ke, He = .5 * (1 - Math.cos(Math.PI * Ue)), ye = ie.startX + (ie.x - ie.startX) * He, Me = ie.startY + (ie.y - ie.startY) * He, ie.method.call(ie.scrollable, ye, Me), ye === ie.x && Me === ie.y || ee.requestAnimationFrame(ke.bind(ee, ie))
      }

      function qe(He, Me, Ke) {
        let Fe, Je, oe, Re;
        const qe = be();
        He === ie.body ? (Fe = ee, Je = ee.scrollX || ee.pageXOffset, oe = ee.scrollY || ee.pageYOffset, Re = ye.scroll) : (Fe = He, Je = He.scrollLeft, oe = He.scrollTop, Re = Ue), ke({
          scrollable: Fe,
          method: Re,
          startTime: qe,
          startX: Je,
          startY: oe,
          x: Me,
          y: Ke
        })
      }
      ee.scroll = ee.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== Fe(arguments[0]) ? qe.call(ee, ie.body, void 0 !== arguments[0].left ? ~~arguments[0].left : ee.scrollX || ee.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : ee.scrollY || ee.pageYOffset) : ye.scroll.call(ee, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : ee.scrollX || ee.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : ee.scrollY || ee.pageYOffset))
      }, ee.scrollBy = function() {
        void 0 !== arguments[0] && (Fe(arguments[0]) ? ye.scrollBy.call(ee, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : qe.call(ee, ie.body, ~~arguments[0].left + (ee.scrollX || ee.pageXOffset), ~~arguments[0].top + (ee.scrollY || ee.pageYOffset)))
      }, He.prototype.scroll = He.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === Fe(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void ye.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const ee = arguments[0].left,
          ie = arguments[0].top;
        qe.call(this, this, "undefined" === typeof ee ? this.scrollLeft : ~~ee, "undefined" === typeof ie ? this.scrollTop : ~~ie)
      }, He.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== Fe(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : ye.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, He.prototype.scrollIntoView = function() {
        if (!0 === Fe(arguments[0])) return void ye.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const He = function(ee) {
            for (; ee !== ie.body && !1 === Re(ee);) ee = ee.parentNode || ee.host;
            return ee
          }(this),
          be = He.getBoundingClientRect(),
          Me = this.getBoundingClientRect();
        He !== ie.body ? (qe.call(this, He, He.scrollLeft + Me.left - be.left, He.scrollTop + Me.top - be.top), "fixed" !== ee.getComputedStyle(He).position && ee.scrollBy({
          left: be.left,
          top: be.top,
          behavior: "smooth"
        })) : ee.scrollBy({
          left: Me.left,
          top: Me.top,
          behavior: "smooth"
        })
      }
    }
    PU.addCustomEvent = (ee, ie) => {
      if (!wU) throw new Error("please add custom event after start recording");
      WU({
        type: PK.Custom,
        data: {
          tag: ee,
          payload: ie
        }
      })
    }, PU.freezePage = () => {
      jK.forEach((ee => ee.freeze()))
    }, PU.takeFullSnapshot = ee => {
      if (!wU) throw new Error("please take full snapshot after start recording");
      tU(ee)
    }, PU.mirror = DU;
    class YU {
      constructor() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          ie = arguments.length > 1 ? arguments[1] : void 0;
        Me(this, "timeOffset", 0), Me(this, "speed"), Me(this, "actions"), Me(this, "raf", null), Me(this, "lastTimestamp"), this.actions = ee, this.speed = ie.speed
      }
      addAction(ee) {
        const ie = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= ee.delay) this.actions.push(ee);
        else {
          const ie = this.findActionIndex(ee);
          this.actions.splice(ie, 0, ee)
        }
        ie && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const ee = performance.now();
        for (this.timeOffset += (ee - this.lastTimestamp) * this.speed, this.lastTimestamp = ee; this.actions.length;) {
          const ee = this.actions[0];
          if (!(this.timeOffset >= ee.delay)) break;
          this.actions.shift(), ee.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(ee) {
        this.speed = ee
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(ee) {
        let ie = 0,
          He = this.actions.length - 1;
        for (; ie <= He;) {
          const ye = Math.floor((ie + He) / 2);
          if (this.actions[ye].delay < ee.delay) ie = ye + 1;
          else {
            if (!(this.actions[ye].delay > ee.delay)) return ye + 1;
            He = ye - 1
          }
        }
        return ie
      }
    }

    function VU(ee, ie) {
      if (ee.type === PK.IncrementalSnapshot && ee.data.source === AK.MouseMove && ee.data.positions && ee.data.positions.length) {
        const He = ee.data.positions[0].timeOffset,
          ye = ee.timestamp + He;
        return ee.delay = ye - ie, ye - ie
      }
      return ee.delay = ee.timestamp - ie, ee.delay
    }

    function aU(ee, ie) {
      var He = "function" == typeof Symbol && ee[Symbol.iterator];
      if (!He) return ee;
      var ye, be, Me = He.call(ee),
        Ke = [];
      try {
        for (;
          (void 0 === ie || ie-- > 0) && !(ye = Me.next()).done;) Ke.push(ye.value)
      } catch (Ue) {
        be = {
          error: Ue
        }
      } finally {
        try {
          ye && !ye.done && (He = Me.return) && He.call(Me)
        } finally {
          if (be) throw be.error
        }
      }
      return Ke
    }
    var cU, xU;
    (xU = cU || (cU = {}))[xU.NotStarted = 0] = "NotStarted", xU[xU.Running = 1] = "Running", xU[xU.Stopped = 2] = "Stopped";
    var LU = {
      type: "xstate.init"
    };

    function CU(ee) {
      return void 0 === ee ? [] : [].concat(ee)
    }

    function vU(ee) {
      return {
        type: "xstate.assign",
        assignment: ee
      }
    }

    function uU(ee, ie) {
      return "string" == typeof(ee = "string" == typeof ee && ie && ie[ee] ? ie[ee] : ee) ? {
        type: ee
      } : "function" == typeof ee ? {
        type: ee.name,
        exec: ee
      } : ee
    }

    function mU(ee) {
      return function(ie) {
        return ee === ie
      }
    }

    function lU(ee) {
      return "string" == typeof ee ? {
        type: ee
      } : ee
    }

    function SU(ee, ie) {
      return {
        value: ee,
        context: ie,
        actions: [],
        changed: !1,
        matches: mU(ee)
      }
    }

    function nU(ee, ie, He) {
      var ye = ie,
        be = !1;
      return [ee.filter((function(ee) {
        if ("xstate.assign" === ee.type) {
          be = !0;
          var ie = Object.assign({}, ye);
          return "function" == typeof ee.assignment ? ie = ee.assignment(ye, He) : Object.keys(ee.assignment).forEach((function(be) {
            ie[be] = "function" == typeof ee.assignment[be] ? ee.assignment[be](ye, He) : ee.assignment[be]
          })), ye = ie, !1
        }
        return !0
      })), ye, be]
    }

    function jU(ee, ie) {
      void 0 === ie && (ie = {});
      var He = aU(nU(CU(ee.states[ee.initial].entry).map((function(ee) {
          return uU(ee, ie.actions)
        })), ee.context, LU), 2),
        ye = He[0],
        be = He[1],
        Me = {
          config: ee,
          _options: ie,
          initialState: {
            value: ee.initial,
            actions: ye,
            context: be,
            matches: mU(ee.initial)
          },
          transition: function(ie, He) {
            var ye, be, Ke = "string" == typeof ie ? {
                value: ie,
                context: ee.context
              } : ie,
              Ue = Ke.value,
              Fe = Ke.context,
              Je = lU(He),
              oe = ee.states[Ue];
            if (oe.on) {
              var Re = CU(oe.on[Je.type]);
              try {
                for (var ke = function(ee) {
                    var ie = "function" == typeof Symbol && Symbol.iterator,
                      He = ie && ee[ie],
                      ye = 0;
                    if (He) return He.call(ee);
                    if (ee && "number" == typeof ee.length) return {
                      next: function() {
                        return ee && ye >= ee.length && (ee = void 0), {
                          value: ee && ee[ye++],
                          done: !ee
                        }
                      }
                    };
                    throw new TypeError(ie ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(Re), qe = ke.next(); !qe.done; qe = ke.next()) {
                  var fe = qe.value;
                  if (void 0 === fe) return SU(Ue, Fe);
                  var Te = "string" == typeof fe ? {
                      target: fe
                    } : fe,
                    pe = Te.target,
                    Xe = Te.actions,
                    ze = void 0 === Xe ? [] : Xe,
                    Be = Te.cond,
                    Ee = void 0 === Be ? function() {
                      return !0
                    } : Be,
                    ge = void 0 === pe,
                    Oe = null != pe ? pe : Ue,
                    de = ee.states[Oe];
                  if (Ee(Fe, Je)) {
                    var We = aU(nU((ge ? CU(ze) : [].concat(oe.exit, ze, de.entry).filter((function(ee) {
                        return ee
                      }))).map((function(ee) {
                        return uU(ee, Me._options.actions)
                      })), Fe, Je), 3),
                      te = We[0],
                      Ze = We[1],
                      we = We[2],
                      De = null != pe ? pe : Ue;
                    return {
                      value: De,
                      context: Ze,
                      actions: te,
                      changed: pe !== Ue || te.length > 0 || we,
                      matches: mU(De)
                    }
                  }
                }
              } catch (xU) {
                ye = {
                  error: xU
                }
              } finally {
                try {
                  qe && !qe.done && (be = ke.return) && be.call(ke)
                } finally {
                  if (ye) throw ye.error
                }
              }
            }
            return SU(Ue, Fe)
          }
        };
      return Me
    }
    var sU = function(ee, ie) {
      return ee.actions.forEach((function(He) {
        var ye = He.exec;
        return ye && ye(ee.context, ie)
      }))
    };

    function IU(ee) {
      var ie = ee.initialState,
        He = cU.NotStarted,
        ye = new Set,
        be = {
          _machine: ee,
          send: function(be) {
            He === cU.Running && (ie = ee.transition(ie, be), sU(ie, lU(be)), ye.forEach((function(ee) {
              return ee(ie)
            })))
          },
          subscribe: function(ee) {
            return ye.add(ee), ee(ie), {
              unsubscribe: function() {
                return ye.delete(ee)
              }
            }
          },
          start: function(ye) {
            if (ye) {
              var Me = "object" == typeof ye ? ye : {
                context: ee.config.context,
                value: ye
              };
              ie = {
                value: Me.value,
                actions: [],
                context: Me.context,
                matches: mU(Me.value)
              }
            }
            return He = cU.Running, sU(ie, LU), be
          },
          stop: function() {
            return He = cU.Stopped, ye.clear(), be
          },
          get state() {
            return ie
          },
          get status() {
            return He
          }
        };
      return be
    }

    function hU(ee, ie) {
      let {
        getCastFn: He,
        applyEventsSynchronously: ye,
        emitter: be
      } = ie;
      return IU(jU({
        id: "player",
        context: ee,
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
          castEvent: vU({
            lastPlayedEvent: (ee, ie) => "CAST_EVENT" === ie.type ? ie.payload.event : ee.lastPlayedEvent
          }),
          recordTimeOffset: vU(((ee, ie) => {
            let He = ee.timeOffset;
            return "payload" in ie && "timeOffset" in ie.payload && (He = ie.payload.timeOffset), {
              ...ee,
              timeOffset: He,
              baselineTime: ee.events[0].timestamp + He
            }
          })),
          play(ee) {
            var ie;
            const {
              timer: Me,
              events: Ke,
              baselineTime: Ue,
              lastPlayedEvent: Fe
            } = ee;
            Me.clear();
            for (const He of Ke) VU(He, Ue);
            const Je = function(ee, ie) {
              for (let He = ee.length - 1; He >= 0; He--) {
                const ye = ee[He];
                if (ye.type === PK.Meta && ye.timestamp <= ie) return ee.slice(He)
              }
              return ee
            }(Ke, Ue);
            let oe = null == Fe ? void 0 : Fe.timestamp;
            (null == Fe ? void 0 : Fe.type) === PK.IncrementalSnapshot && Fe.data.source === AK.MouseMove && (oe = Fe.timestamp + (null == (ie = Fe.data.positions[0]) ? void 0 : ie.timeOffset)), Ue < (oe || 0) && be.emit(xK.PlayBack);
            const Re = new Array;
            for (const ye of Je)
              if (!(oe && oe < Ue && (ye.timestamp <= oe || ye === Fe)))
                if (ye.timestamp < Ue) Re.push(ye);
                else {
                  const ee = He(ye, !1);
                  Me.addAction({
                    doAction: () => {
                      ee()
                    },
                    delay: ye.delay
                  })
                } ye(Re), be.emit(xK.Flush), Me.start()
          },
          pause(ee) {
            ee.timer.clear()
          },
          resetLastPlayedEvent: vU((ee => ({
            ...ee,
            lastPlayedEvent: null
          }))),
          startLive: vU({
            baselineTime: (ee, ie) => (ee.timer.start(), "TO_LIVE" === ie.type && ie.payload.baselineTime ? ie.payload.baselineTime : Date.now())
          }),
          addEvent: vU(((ee, ie) => {
            const {
              baselineTime: ye,
              timer: be,
              events: Me
            } = ee;
            if ("ADD_EVENT" === ie.type) {
              const {
                event: ee
              } = ie.payload;
              VU(ee, ye);
              let Ke = Me.length - 1;
              if (!Me[Ke] || Me[Ke].timestamp <= ee.timestamp) Me.push(ee);
              else {
                let ie = -1,
                  He = 0;
                for (; He <= Ke;) {
                  const ie = Math.floor((He + Ke) / 2);
                  Me[ie].timestamp <= ee.timestamp ? He = ie + 1 : Ke = ie - 1
                } - 1 === ie && (ie = He), Me.splice(ie, 0, ee)
              }
              const Ue = ee.timestamp < ye,
                Fe = He(ee, Ue);
              Ue ? Fe() : be.isActive() && be.addAction({
                doAction: () => {
                  Fe()
                },
                delay: ee.delay
              })
            }
            return {
              ...ee,
              events: Me
            }
          }))
        }
      }))
    }
    const NU = new Map;

    function GU(ee, ie) {
      let He = NU.get(ee);
      return He || (He = new Map, NU.set(ee, He)), He.has(ie) || He.set(ie, []), He.get(ie)
    }

    function rU(ee, ie, He) {
      return async ye => {
        if (ye && "object" === typeof ye && "rr_type" in ye) {
          if (He && (He.isUnchanged = !1), "ImageBitmap" === ye.rr_type && "args" in ye) {
            const be = await rU(ee, ie, He)(ye.args);
            return await createImageBitmap.apply(null, be)
          }
          if ("index" in ye) {
            if (He || null === ie) return ye;
            const {
              rr_type: ee,
              index: be
            } = ye;
            return GU(ie, ee)[be]
          }
          if ("args" in ye) {
            const {
              rr_type: be,
              args: Me
            } = ye;
            return new(0, window[be])(...await Promise.all(Me.map(rU(ee, ie, He))))
          }
          if ("base64" in ye) return function(ee) {
            var ie, He, ye, be, Me, Ke = .75 * ee.length,
              Ue = ee.length,
              Fe = 0;
            "=" === ee[ee.length - 1] && (Ke--, "=" === ee[ee.length - 2] && Ke--);
            var Je = new ArrayBuffer(Ke),
              oe = new Uint8Array(Je);
            for (ie = 0; ie < Ue; ie += 4) He = JU[ee.charCodeAt(ie)], ye = JU[ee.charCodeAt(ie + 1)], be = JU[ee.charCodeAt(ie + 2)], Me = JU[ee.charCodeAt(ie + 3)], oe[Fe++] = He << 2 | ye >> 4, oe[Fe++] = (15 & ye) << 4 | be >> 2, oe[Fe++] = (3 & be) << 6 | 63 & Me;
            return Je
          }(ye.base64);
          if ("src" in ye) {
            const ie = ee.get(ye.src);
            if (ie) return ie;
            {
              const ie = new Image;
              return ie.src = ye.src, ee.set(ye.src, ie), ie
            }
          }
          if ("data" in ye && "Blob" === ye.rr_type) {
            const be = await Promise.all(ye.data.map(rU(ee, ie, He)));
            return new Blob(be, {
              type: ye.type
            })
          }
        } else if (Array.isArray(ye)) {
          return await Promise.all(ye.map(rU(ee, ie, He)))
        }
        return ye
      }
    }
    const QU = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function eF(ee) {
      let {
        mutation: ie,
        target: He,
        type: ye,
        imageMap: be,
        errorHandler: Me
      } = ee;
      try {
        const ee = function(ee, ie) {
          try {
            return ie === aK.WebGL ? ee.getContext("webgl") || ee.getContext("experimental-webgl") : ee.getContext("webgl2")
          } catch (He) {
            return null
          }
        }(He, ye);
        if (!ee) return;
        if (ie.setter) return void(ee[ie.property] = ie.args[0]);
        const Me = ee[ie.property],
          Ke = await Promise.all(ie.args.map(rU(be, ee)));
        ! function(ee, ie) {
          if (!(null == ie ? void 0 : ie.constructor)) return;
          const {
            name: He
          } = ie.constructor;
          if (!QU.includes(He)) return;
          const ye = GU(ee, He);
          ye.includes(ie) || ye.push(ie)
        }(ee, Me.apply(ee, Ke))
      } catch (Ke) {
        Me(ie, Ke)
      }
    }
    async function iF(ee) {
      let {
        event: ie,
        mutation: He,
        target: ye,
        imageMap: be,
        canvasEventMap: Me,
        errorHandler: Ke
      } = ee;
      try {
        const ee = Me.get(ie) || He,
          Ue = "commands" in ee ? ee.commands : [ee];
        if ([aK.WebGL, aK.WebGL2].includes(He.type)) {
          for (let ee = 0; ee < Ue.length; ee++) {
            const ie = Ue[ee];
            await eF({
              mutation: ie,
              type: He.type,
              target: ye,
              imageMap: be,
              errorHandler: Ke
            })
          }
          return
        }
        await async function(ee) {
          let {
            event: ie,
            mutations: He,
            target: ye,
            imageMap: be,
            errorHandler: Me
          } = ee;
          const Ke = ye.getContext("2d");
          if (!Ke) return void Me(He[0], new Error("Canvas context is null"));
          const Ue = He.map((async ee => Promise.all(ee.args.map(rU(be, Ke)))));
          (await Promise.all(Ue)).forEach(((ee, ye) => {
            const Ue = He[ye];
            try {
              if (Ue.setter) return void(Ke[Ue.property] = Ue.args[0]);
              const He = Ke[Ue.property];
              "drawImage" === Ue.property && "string" === typeof Ue.args[0] ? (be.get(ie), He.apply(Ke, Ue.args)) : He.apply(Ke, ee)
            } catch (Fe) {
              Me(Ue, Fe)
            }
          }))
        }({
          event: ie,
          mutations: Ue,
          target: ye,
          imageMap: be,
          errorHandler: Ke
        })
      } catch (Ue) {
        Ke(He, Ue)
      }
    }
    class HF {
      constructor(ee) {
        Me(this, "mediaMap", new Map), Me(this, "warn"), Me(this, "service"), Me(this, "speedService"), Me(this, "emitter"), Me(this, "getCurrentTime"), Me(this, "metadataCallbackMap", new Map), this.warn = ee.warn, this.service = ee.service, this.speedService = ee.speedService, this.emitter = ee.emitter, this.getCurrentTime = ee.getCurrentTime, this.emitter.on(xK.Start, this.start.bind(this)), this.emitter.on(xK.SkipStart, this.start.bind(this)), this.emitter.on(xK.Pause, this.pause.bind(this)), this.emitter.on(xK.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((ie, He) => {
          this.syncTargetWithState(He), ee.pause && He.pause()
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
      seekTo(ee) {
        let {
          time: ie,
          target: He,
          mediaState: ye
        } = ee;
        if (ye.isPlaying) {
          const ee = (ie - ye.lastInteractionTimeOffset) / 1e3 * ye.playbackRate,
            be = "duration" in He && He.duration;
          if (Number.isNaN(be)) return void this.waitForMetadata(He);
          let Me = ye.currentTimeAtLastInteraction + ee;
          He.loop && !1 !== be && (Me %= be), He.currentTime = Me
        } else He.pause(), He.currentTime = ye.currentTimeAtLastInteraction
      }
      waitForMetadata(ee) {
        if (this.metadataCallbackMap.has(ee)) return;
        if (!("addEventListener" in ee)) return;
        const ie = () => {
          this.metadataCallbackMap.delete(ee);
          const ie = this.mediaMap.get(ee);
          ie && this.seekTo({
            time: this.getCurrentTime(),
            target: ee,
            mediaState: ie
          })
        };
        this.metadataCallbackMap.set(ee, ie), ee.addEventListener("loadedmetadata", ie, {
          once: !0
        })
      }
      getMediaStateFromMutation(ee) {
        let {
          target: ie,
          timeOffset: He,
          mutation: ye
        } = ee;
        const be = this.mediaMap.get(ie),
          {
            type: Me,
            playbackRate: Ke,
            currentTime: Ue,
            muted: Fe,
            volume: Je,
            loop: oe
          } = ye;
        return {
          isPlaying: Me === cK.Play || Me !== cK.Pause && ((null == be ? void 0 : be.isPlaying) || null !== ie.getAttribute("autoplay")),
          currentTimeAtLastInteraction: Ue ?? (null == be ? void 0 : be.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: He,
          playbackRate: Ke ?? (null == be ? void 0 : be.playbackRate) ?? 1,
          volume: Je ?? (null == be ? void 0 : be.volume) ?? 1,
          muted: Fe ?? (null == be ? void 0 : be.muted) ?? null === ie.getAttribute("muted"),
          loop: oe ?? (null == be ? void 0 : be.loop) ?? null === ie.getAttribute("loop")
        }
      }
      syncTargetWithState(ee) {
        const ie = this.mediaMap.get(ee);
        if (!ie) return;
        const {
          muted: He,
          loop: ye,
          volume: be,
          isPlaying: Me
        } = ie, Ke = this.service.state.matches("paused"), Ue = ie.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: ee,
            mediaState: ie
          }), ee.volume !== be && (ee.volume = be), ee.muted = He, ee.loop = ye, ee.playbackRate !== Ue && (ee.playbackRate = Ue), Me && !Ke ? ee.play() : ee.pause()
        } catch (Fe) {
          this.warn(`Failed to replay media interactions: ${Fe.message||Fe}`)
        }
      }
      addMediaElements(ee, ie, He) {
        if (!["AUDIO", "VIDEO"].includes(ee.nodeName)) return;
        const ye = ee,
          be = He.getMeta(ye);
        if (!be || !("attributes" in be)) return;
        const Me = this.service.state.matches("paused"),
          Ke = be.attributes;
        let Ue = !1;
        Ue = Ke.rr_mediaState ? "played" === Ke.rr_mediaState : null !== ye.getAttribute("autoplay"), Ue && Me && ye.pause();
        let Fe = 1;
        "number" === typeof Ke.rr_mediaPlaybackRate && (Fe = Ke.rr_mediaPlaybackRate);
        let Je = !1;
        Je = "boolean" === typeof Ke.rr_mediaMuted ? Ke.rr_mediaMuted : null !== ye.getAttribute("muted");
        let oe = !1;
        oe = "boolean" === typeof Ke.rr_mediaLoop ? Ke.rr_mediaLoop : null !== ye.getAttribute("loop");
        let Re = 1;
        "number" === typeof Ke.rr_mediaVolume && (Re = Ke.rr_mediaVolume);
        let ke = 0;
        "number" === typeof Ke.rr_mediaCurrentTime && (ke = Ke.rr_mediaCurrentTime), this.mediaMap.set(ye, {
          isPlaying: Ue,
          currentTimeAtLastInteraction: ke,
          lastInteractionTimeOffset: ie,
          playbackRate: Fe,
          volume: Re,
          muted: Je,
          loop: oe
        }), this.syncTargetWithState(ye)
      }
      mediaMutation(ee) {
        let {
          target: ie,
          timeOffset: He,
          mutation: ye
        } = ee;
        this.mediaMap.set(ie, this.getMediaStateFromMutation({
          target: ie,
          timeOffset: He,
          mutation: ye
        })), this.syncTargetWithState(ie)
      }
      isSupportedMediaElement(ee) {
        return ["AUDIO", "VIDEO"].includes(ee.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function yF(ee, ie) {
      if ("DIALOG" !== ee.nodeName || ee instanceof HM) return;
      const He = ee,
        ye = He.open,
        be = ye && He.matches("dialog:modal"),
        Me = He.getAttribute("rr_open_mode"),
        Ke = "string" === typeof(null == ie ? void 0 : ie.attributes.open) || "string" === typeof He.getAttribute("open"),
        Ue = "modal" === Me;
      ye && !(be && "non-modal" === Me || !be && Ue) || (He.isConnected ? (ye && He.close(), Ke && (Ue ? He.showModal() : He.show())) : console.warn("dialog is not attached to the dom", He))
    }

    function bF(ee, ie) {
      if ("DIALOG" !== ee.nodeName || ee instanceof HM) return;
      const He = ee;
      He.isConnected ? null === ie.attributes.open && (He.removeAttribute("open"), He.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", He)
    }
    const MF = function(ee) {
        return {
          all: ee = ee || new Map,
          on: function(ie, He) {
            var ye = ee.get(ie);
            ye ? ye.push(He) : ee.set(ie, [He])
          },
          off: function(ie, He) {
            var ye = ee.get(ie);
            ye && (He ? ye.splice(ye.indexOf(He) >>> 0, 1) : ee.set(ie, []))
          },
          emit: function(ie, He) {
            var ye = ee.get(ie);
            ye && ye.slice().map((function(ee) {
              ee(He)
            })), (ye = ee.get("*")) && ye.slice().map((function(ee) {
              ee(ie, He)
            }))
          }
        }
      },
      KF = "[replayer]",
      UF = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function FF(ee) {
      return ee.type == PK.IncrementalSnapshot && (ee.data.source == AK.TouchMove || ee.data.source == AK.MouseInteraction && ee.data.type == YK.TouchStart)
    }
    class JF {
      constructor(ee, ie) {
        var He = this;
        if (Me(this, "wrapper"), Me(this, "iframe"), Me(this, "UNSAFE_replayCanvas", !1), Me(this, "service"), Me(this, "speedService"), Me(this, "config"), Me(this, "usingVirtualDom", !1), Me(this, "virtualDom", new WM), Me(this, "mouse"), Me(this, "mouseTail", null), Me(this, "tailPositions", []), Me(this, "emitter", MF()), Me(this, "nextUserInteractionEvent"), Me(this, "legacy_missingNodeRetryMap", {}), Me(this, "cache", QH()), Me(this, "imageMap", new Map), Me(this, "canvasEventMap", new Map), Me(this, "mirror", Ze()), Me(this, "styleMirror", new WK), Me(this, "mediaManager"), Me(this, "firstFullSnapshot", null), Me(this, "newDocumentQueue", []), Me(this, "mousePos", null), Me(this, "touchActive", null), Me(this, "lastMouseDownEvent", null), Me(this, "lastHoveredRootNode"), Me(this, "lastSelectionData", null), Me(this, "constructedStyleMutations", []), Me(this, "adoptedStyleSheets", []), Me(this, "handleResize", (ee => {
            this.iframe.style.display = "inherit";
            for (const ie of [this.mouseTail, this.iframe]) ie && (ie.setAttribute("width", String(ee.width)), ie.setAttribute("height", String(ee.height)))
          })), Me(this, "applyEventsSynchronously", (ee => {
            for (const ie of ee) {
              switch (ie.type) {
                case PK.DomContentLoaded:
                case PK.Load:
                  continue;
                case PK.FullSnapshot:
                case PK.Meta:
                case PK.Plugin:
                case PK.IncrementalSnapshot:
              }
              this.getCastFn(ie, !0)()
            }
          })), Me(this, "getCastFn", (function(ee) {
            let ie, ye = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (ee.type) {
              case PK.DomContentLoaded:
              case PK.Load:
                break;
              case PK.Custom:
                ie = () => {
                  He.emitter.emit(xK.CustomEvent, ee)
                };
                break;
              case PK.Meta:
                ie = () => He.emitter.emit(xK.Resize, {
                  width: ee.data.width,
                  height: ee.data.height
                });
                break;
              case PK.FullSnapshot:
                ie = () => {
                  var ie;
                  if (He.firstFullSnapshot) {
                    if (He.firstFullSnapshot === ee) return void(He.firstFullSnapshot = !0)
                  } else He.firstFullSnapshot = !0;
                  He.mediaManager.reset(), He.styleMirror.reset(), He.rebuildFullSnapshot(ee, ye), null == (ie = He.iframe.contentWindow) || ie.scrollTo(ee.data.initialOffset)
                };
                break;
              case PK.IncrementalSnapshot:
                ie = () => {
                  if (He.applyIncremental(ee, ye), !ye && (ee === He.nextUserInteractionEvent && (He.nextUserInteractionEvent = null, He.backToNormal()), He.config.skipInactive && !He.nextUserInteractionEvent)) {
                    for (const ie of He.service.state.context.events)
                      if (!(ie.timestamp <= ee.timestamp) && He.isUserInteraction(ie)) {
                        ie.delay - ee.delay > He.config.inactivePeriodThreshold * He.speedService.state.context.timer.speed && (He.nextUserInteractionEvent = ie);
                        break
                      } if (He.nextUserInteractionEvent) {
                      const ie = He.nextUserInteractionEvent.delay - ee.delay,
                        ye = {
                          speed: Math.min(Math.round(ie / 5e3), He.config.maxSpeed)
                        };
                      He.speedService.send({
                        type: "FAST_FORWARD",
                        payload: ye
                      }), He.emitter.emit(xK.SkipStart, ye)
                    }
                  }
                }
            }
            return () => {
              ie && ie();
              for (const ie of He.config.plugins || []) ie.handler && ie.handler(ee, ye, {
                replayer: He
              });
              He.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: ee
                }
              });
              const be = He.service.state.context.events.length - 1;
              if (!He.config.liveMode && ee === He.service.state.context.events[be]) {
                const ie = () => {
                  be < He.service.state.context.events.length - 1 || (He.backToNormal(), He.service.send("END"), He.emitter.emit(xK.Finish))
                };
                let ye = 50;
                ee.type === PK.IncrementalSnapshot && ee.data.source === AK.MouseMove && ee.data.positions.length && (ye += Math.max(0, -ee.data.positions[0].timeOffset)), setTimeout(ie, ye)
              }
              He.emitter.emit(xK.EventCast, ee)
            }
          })), !(null == ie ? void 0 : ie.liveMode) && ee.length < 2) throw new Error("Replayer need at least 2 events.");
        const ye = {
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
          mouseTail: UF,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, ye, ie), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(xK.Resize, this.handleResize), this.setupDom();
        for (const Me of this.config.plugins || []) Me.getMirror && Me.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(xK.Flush, (() => {
          if (this.usingVirtualDom) {
            const He = {
              mirror: this.mirror,
              applyCanvas: (ee, ie, He) => {
                iF({
                  event: ee,
                  mutation: ie,
                  target: He,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (ee, ie) => {
                ee.source === AK.StyleSheetRule ? this.applyStyleSheetRule(ee, ie) : ee.source === AK.StyleDeclaration && this.applyStyleDeclaration(ee, ie)
              },
              afterAppend: (ee, ie) => {
                for (const He of this.config.plugins || []) He.onBuild && He.onBuild(ee, {
                  id: ie,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              BM(this.iframe.contentDocument, this.virtualDom, He, this.virtualDom.mirror)
            } catch (ee) {
              this.warn(ee)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const ee in this.legacy_missingNodeRetryMap) try {
                const ie = this.legacy_missingNodeRetryMap[ee],
                  ye = gM(ie.node, this.mirror, this.virtualDom.mirror);
                BM(ye, ie.node, He, this.virtualDom.mirror), ie.node = ye
              } catch (ie) {
                this.warn(ie)
              }
            this.constructedStyleMutations.forEach((ee => {
              this.applyStyleSheetMutation(ee)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((ee => {
              this.applyAdoptedStyleSheet(ee)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [ee, ie] = this.lastMouseDownEvent;
            ee.dispatchEvent(ie)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(xK.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const be = new YU([], {
          speed: this.config.speed
        });
        this.service = hU({
          events: ee.map((ee => ie && ie.unpackFn ? ie.unpackFn(ee) : ee)).sort(((ee, ie) => ee.timestamp - ie.timestamp)),
          timer: be,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((ee => {
          this.emitter.emit(xK.StateChange, {
            player: ee
          })
        })), this.speedService = IU(jU({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: be
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
            setSpeed: (ee, ie) => {
              "payload" in ie && ee.timer.setSpeed(ie.payload.speed)
            },
            recordSpeed: vU({
              normalSpeed: ee => ee.timer.speed
            }),
            restoreSpeed: ee => {
              ee.timer.setSpeed(ee.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((ee => {
          this.emitter.emit(xK.StateChange, {
            speed: ee
          })
        })), this.mediaManager = new HF({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const Ke = this.service.state.context.events.find((ee => ee.type === PK.Meta)),
          Ue = this.service.state.context.events.find((ee => ee.type === PK.FullSnapshot));
        if (Ke) {
          const {
            width: ee,
            height: ie
          } = Ke.data;
          setTimeout((() => {
            this.emitter.emit(xK.Resize, {
              width: ee,
              height: ie
            })
          }), 0)
        }
        Ue && setTimeout((() => {
          var ee;
          this.firstFullSnapshot || (this.firstFullSnapshot = Ue, this.rebuildFullSnapshot(Ue), null == (ee = this.iframe.contentWindow) || ee.scrollTo(Ue.data.initialOffset))
        }), 1), this.service.state.context.events.find(FF) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(ee, ie) {
        return this.emitter.on(ee, ie), this
      }
      off(ee, ie) {
        return this.emitter.off(ee, ie), this
      }
      setConfig(ee) {
        Object.keys(ee).forEach((ie => {
          ee[ie], this.config[ie] = ee[ie]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof ee.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: ee.speed
          }
        }), "undefined" !== typeof ee.mouseTail && (!1 === ee.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const ee = this.service.state.context.events[0],
          ie = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: ee.timestamp,
          endTime: ie.timestamp,
          totalTime: ie.timestamp - ee.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: ee,
          events: ie
        } = this.service.state.context;
        return ee - ie[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var ie, He;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: ee
          }
        }), null == (He = null == (ie = this.iframe.contentDocument) ? void 0 : ie.getElementsByTagName("html")[0]) || He.classList.remove("rrweb-paused"), this.emitter.emit(xK.Start)
      }
      pause(ee) {
        var ie, He;
        void 0 === ee && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof ee && (this.play(ee), this.service.send({
          type: "PAUSE"
        })), null == (He = null == (ie = this.iframe.contentDocument) ? void 0 : ie.getElementsByTagName("html")[0]) || He.classList.add("rrweb-paused"), this.emitter.emit(xK.Pause)
      }
      resume() {
        let ee = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(ee), this.emitter.emit(xK.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(xK.Destroy)
      }
      startLive(ee) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: ee
          }
        })
      }
      addEvent(ee) {
        const ie = this.config.unpackFn ? this.config.unpackFn(ee) : ee;
        FF(ie) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: ie
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
        this.cache = QH()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(ee) {
          var ie;
          if (!ee.root.isConnected) throw new Error(ey);
          const He = ee.root.ownerDocument.createElement("iframe");
          for (const [be, Me] of Object.entries(ee.iframeAttributes || {})) "sandbox" !== be && He.setAttribute(be, Me);
          He.setAttribute("sandbox", "allow-same-origin"), ee.root.appendChild(He);
          const ye = He.contentDocument;
          if (!ye || !He.contentWindow) throw null == (ie = He.parentNode) || ie.removeChild(He), new Error(ey);
          return iy.add(ye), He
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (AU(this.iframe.contentWindow, this.iframe.contentDocument), fK(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(ee) {
        let ie = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const He = [],
          ye = new Set,
          be = (ie, be) => {
            if ("DIALOG" === ie.nodeName && ye.add(ie), this.collectIframeAndAttachDocument(He, ie), this.mediaManager.isSupportedMediaElement(ie)) {
              const {
                events: He
              } = this.service.state.context;
              this.mediaManager.addMediaElements(ie, ee.timestamp - He[0].timestamp, this.mirror)
            }
            for (const ee of this.config.plugins || []) ee.onBuild && ee.onBuild(ie, {
              id: be,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), Ky(ee.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: be,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), be(this.iframe.contentDocument, ee.data.node.id);
        for (const {
            mutationInQueue: Ue,
            builtNode: Fe
          }
          of He) this.attachDocumentToIframe(Ue, Fe), this.newDocumentQueue = this.newDocumentQueue.filter((ee => ee !== Ue));
        const {
          documentElement: Me,
          head: Ke
        } = this.iframe.contentDocument;
        this.insertStyleRules(Me, Ke), ye.forEach((ee => yF(ee))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(xK.FullsnapshotRebuilded, ee), ie || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(ee, ie) {
        var He;
        const ye = (be = this.config.blockClass, [`.${be} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var be;
        if (this.config.pauseAnimation && ye.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), ye.length)
          if (this.usingVirtualDom) {
            const He = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(He, vM(He, this.virtualDom.unserializedId)), ee.insertBefore(He, ie), He.rules.push({
              source: AK.StyleSheetRule,
              adds: ye.map(((ee, ie) => ({
                rule: ee,
                index: ie
              })))
            })
          } else {
            const be = document.createElement("style");
            ee.insertBefore(be, ie);
            for (let ee = 0; ee < ye.length; ee++) null == (He = be.sheet) || He.insertRule(ye[ee], ee)
          }
      }
      attachDocumentToIframe(ee, ie) {
        const He = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          ye = [],
          be = new Set,
          Me = (ee, Me) => {
            "DIALOG" === ee.nodeName && be.add(ee), this.collectIframeAndAttachDocument(ye, ee);
            const Ke = He.getMeta(ee);
            if ((null == Ke ? void 0 : Ke.type) === LK.Element && "HTML" === (null == Ke ? void 0 : Ke.tagName.toUpperCase())) {
              const {
                documentElement: ee,
                head: He
              } = ie.contentDocument;
              this.insertStyleRules(ee, He)
            }
            if (!this.usingVirtualDom)
              for (const ie of this.config.plugins || []) ie.onBuild && ie.onBuild(ee, {
                id: Me,
                replayer: this
              })
          };
        My(ee.node, {
          doc: ie.contentDocument,
          mirror: He,
          hackCss: !0,
          skipChild: !1,
          afterAppend: Me,
          cache: this.cache
        }), Me(ie.contentDocument, ee.node.id);
        for (const {
            mutationInQueue: Ke,
            builtNode: Ue
          }
          of ye) this.attachDocumentToIframe(Ke, Ue), this.newDocumentQueue = this.newDocumentQueue.filter((ee => ee !== Ke));
        be.forEach((ee => yF(ee)))
      }
      collectIframeAndAttachDocument(ee, ie) {
        if (XK(ie, this.mirror)) {
          const He = this.newDocumentQueue.find((ee => ee.parentId === this.mirror.getId(ie)));
          He && ee.push({
            mutationInQueue: He,
            builtNode: ie
          })
        }
      }
      waitForStylesheetLoad() {
        var ee;
        const ie = null == (ee = this.iframe.contentDocument) ? void 0 : ee.head;
        if (ie) {
          const ee = new Set;
          let He, ye = this.service.state;
          const be = () => {
            ye = this.service.state
          };
          this.emitter.on(xK.Start, be), this.emitter.on(xK.Pause, be);
          const Me = () => {
            this.emitter.off(xK.Start, be), this.emitter.off(xK.Pause, be)
          };
          ie.querySelectorAll('link[rel="stylesheet"]').forEach((ie => {
            ie.sheet || (ee.add(ie), ie.addEventListener("load", (() => {
              ee.delete(ie), 0 === ee.size && -1 !== He && (ye.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(xK.LoadStylesheetEnd), He && clearTimeout(He), Me())
            })))
          })), ee.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(xK.LoadStylesheetStart), He = setTimeout((() => {
            ye.matches("playing") && this.play(this.getCurrentTime()), He = -1, Me()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const ee = [];
        for (const ie of this.service.state.context.events)
          if (ie.type === PK.IncrementalSnapshot && ie.data.source === AK.CanvasMutation) {
            ee.push(this.deserializeAndPreloadCanvasEvents(ie.data, ie));
            ("commands" in ie.data ? ie.data.commands : [ie.data]).forEach((ee => {
              this.preloadImages(ee, ie)
            }))
          } return Promise.all(ee)
      }
      preloadImages(ee, ie) {
        if ("drawImage" === ee.property && "string" === typeof ee.args[0] && !this.imageMap.has(ie)) {
          const ee = document.createElement("canvas"),
            ie = ee.getContext("2d"),
            He = null == ie ? void 0 : ie.createImageData(ee.width, ee.height);
          null == ie || ie.putImageData(He, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(ee, ie) {
        if (!this.canvasEventMap.has(ie)) {
          const He = {
            isUnchanged: !0
          };
          if ("commands" in ee) {
            const ye = await Promise.all(ee.commands.map((async ee => {
              const ie = await Promise.all(ee.args.map(rU(this.imageMap, null, He)));
              return {
                ...ee,
                args: ie
              }
            })));
            !1 === He.isUnchanged && this.canvasEventMap.set(ie, {
              ...ee,
              commands: ye
            })
          } else {
            const ye = await Promise.all(ee.args.map(rU(this.imageMap, null, He)));
            !1 === He.isUnchanged && this.canvasEventMap.set(ie, {
              ...ee,
              args: ye
            })
          }
        }
      }
      applyIncremental(ee, ie) {
        var He, ye, be;
        const {
          data: Me
        } = ee;
        switch (Me.source) {
          case AK.Mutation:
            try {
              this.applyMutation(Me, ie)
            } catch (Ke) {
              this.warn(`Exception in mutation ${Ke.message||Ke}`, Me)
            }
            break;
          case AK.Drag:
          case AK.TouchMove:
          case AK.MouseMove:
            if (ie) {
              const ee = Me.positions[Me.positions.length - 1];
              this.mousePos = {
                x: ee.x,
                y: ee.y,
                id: ee.id,
                debugData: Me
              }
            } else Me.positions.forEach((He => {
              const ye = {
                doAction: () => {
                  this.moveAndHover(He.x, He.y, He.id, ie, Me)
                },
                delay: He.timeOffset + ee.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(ye)
            })), this.timer.addAction({
              doAction() {},
              delay: ee.delay - (null == (He = Me.positions[0]) ? void 0 : He.timeOffset)
            });
            break;
          case AK.MouseInteraction: {
            if (-1 === Me.id) break;
            const ee = new Event(De(YK[Me.type])),
              He = this.mirror.Abe(Me.id);
            if (!He) return this.debugNodeNotFound(Me, Me.id);
            this.emitter.emit(xK.MouseInteraction, {
              type: Me.type,
              target: He
            });
            const {
              triggerFocus: ye
            } = this.config;
            switch (Me.type) {
              case YK.Blur:
                "blur" in He && He.blur();
                break;
              case YK.Focus:
                ye && He.focus && He.focus({
                  preventScroll: !0
                });
                break;
              case YK.Click:
              case YK.TouchStart:
              case YK.TouchEnd:
              case YK.MouseDown:
              case YK.MouseUp:
                ie ? (Me.type === YK.TouchStart ? this.touchActive = !0 : Me.type === YK.TouchEnd && (this.touchActive = !1), Me.type === YK.MouseDown ? this.lastMouseDownEvent = [He, ee] : Me.type === YK.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: Me.x || 0,
                  y: Me.y || 0,
                  id: Me.id,
                  debugData: Me
                }) : (Me.type === YK.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(Me.x || 0, Me.y || 0, Me.id, ie, Me), Me.type === YK.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : Me.type === YK.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : Me.type === YK.TouchEnd ? this.mouse.classList.remove("touch-active") : He.dispatchEvent(ee));
                break;
              case YK.TouchCancel:
                ie ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                He.dispatchEvent(ee)
            }
            break
          }
          case AK.Scroll:
            if (-1 === Me.id) break;
            if (this.usingVirtualDom) {
              const ee = this.virtualDom.mirror.Abe(Me.id);
              if (!ee) return this.debugNodeNotFound(Me, Me.id);
              ee.scrollData = Me;
              break
            }
            this.applyScroll(Me, ie);
            break;
          case AK.ViewportResize:
            this.emitter.emit(xK.Resize, {
              width: Me.width,
              height: Me.height
            });
            break;
          case AK.Input:
            if (-1 === Me.id) break;
            if (this.usingVirtualDom) {
              const ee = this.virtualDom.mirror.Abe(Me.id);
              if (!ee) return this.debugNodeNotFound(Me, Me.id);
              ee.inputData = Me;
              break
            }
            this.applyInput(Me);
            break;
          case AK.MediaInteraction: {
            const ie = this.usingVirtualDom ? this.virtualDom.mirror.Abe(Me.id) : this.mirror.Abe(Me.id);
            if (!ie) return this.debugNodeNotFound(Me, Me.id);
            const He = ie,
              {
                events: ye
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: He,
              timeOffset: ee.timestamp - ye[0].timestamp,
              mutation: Me
            });
            break
          }
          case AK.StyleSheetRule:
          case AK.StyleDeclaration:
            this.usingVirtualDom ? Me.styleId ? this.constructedStyleMutations.push(Me) : Me.id && (null == (ye = this.virtualDom.mirror.Abe(Me.id)) || ye.rules.push(Me)) : this.applyStyleSheetMutation(Me);
            break;
          case AK.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const ie = this.virtualDom.mirror.Abe(Me.id);
              if (!ie) return this.debugNodeNotFound(Me, Me.id);
              ie.canvasMutations.push({
                event: ee,
                mutation: Me
              })
            } else {
              const ie = this.mirror.Abe(Me.id);
              if (!ie) return this.debugNodeNotFound(Me, Me.id);
              iF({
                event: ee,
                mutation: Me,
                target: ie,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case AK.Font:
            try {
              const ee = new FontFace(Me.family, Me.buffer ? new Uint8Array(JSON.parse(Me.fontSource)) : Me.fontSource, Me.descriptors);
              null == (be = this.iframe.contentDocument) || be.fonts.add(ee)
            } catch (Ke) {
              this.warn(Ke)
            }
            break;
          case AK.Selection:
            if (ie) {
              this.lastSelectionData = Me;
              break
            }
            this.applySelection(Me);
            break;
          case AK.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(Me) : this.applyAdoptedStyleSheet(Me)
        }
      }
      applyMutation(ee, ie) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && ie && (this.usingVirtualDom = !0, LM(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const Fe in this.legacy_missingNodeRetryMap) try {
            const ee = this.legacy_missingNodeRetryMap[Fe],
              ie = xM(ee.node, this.virtualDom, this.mirror);
            ie && (ee.node = ie)
          } catch (Ue) {
            this.warn(Ue)
          }
        const He = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        ee.removes = ee.removes.filter((ie => !!He.Abe(ie.id) || (this.warnNodeNotFound(ee, ie.id), !1))), ee.removes.forEach((ie => {
          var ye;
          const be = He.Abe(ie.id);
          if (!be) return;
          let Me = He.Abe(ie.parentId);
          if (!Me) return this.warnNodeNotFound(ee, ie.parentId);
          if (ie.isShadow && EK(Me) && (Me = Me.shadowRoot), He.removeNodeFromMap(be), Me) try {
            Me.removeChild(be), this.usingVirtualDom && "#text" === be.nodeName && "STYLE" === Me.nodeName && (null == (ye = Me.rules) ? void 0 : ye.length) > 0 && (Me.rules = [])
          } catch (Ue) {
            if (!(Ue instanceof DOMException)) throw Ue;
            this.warn("parent could not remove child in mutation", Me, be, ee)
          }
        }));
        const ye = {
            ...this.legacy_missingNodeRetryMap
          },
          be = [],
          Me = ee => {
            var ie, Me;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let Ke = He.Abe(ee.parentId);
            if (!Ke) return ee.node.type === LK.Document ? this.newDocumentQueue.push(ee) : be.push(ee);
            ee.node.isShadow && (EK(Ke) || Ke.attachShadow({
              mode: "open"
            }), Ke = Ke.shadowRoot);
            let Ue = null,
              Fe = null;
            if (ee.previousId && (Ue = He.Abe(ee.previousId)), ee.nextId && (Fe = He.Abe(ee.nextId)), (ee => {
                let ie = null;
                return ee.nextId && (ie = He.Abe(ee.nextId)), null !== ee.nextId && void 0 !== ee.nextId && -1 !== ee.nextId && !ie
              })(ee)) return be.push(ee);
            if (ee.node.rootId && !He.Abe(ee.node.rootId)) return;
            const Je = ee.node.rootId ? He.Abe(ee.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (XK(Ke, He)) return void this.attachDocumentToIframe(ee, Ke);
            const oe = (ee, ie) => {
                if (!this.usingVirtualDom) {
                  yF(ee);
                  for (const He of this.config.plugins || []) He.onBuild && He.onBuild(ee, {
                    id: ie,
                    replayer: this
                  })
                }
              },
              Re = My(ee.node, {
                doc: Je,
                mirror: He,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: oe
              });
            if (-1 === ee.previousId || -1 === ee.nextId) return void(ye[ee.node.id] = {
              node: Re,
              mutation: ee
            });
            const ke = He.getMeta(Ke);
            if (ke && ke.type === LK.Element && ee.node.type === LK.Text) {
              const ee = Array.isArray(Ke.childNodes) ? Ke.childNodes : Array.from(Ke.childNodes);
              if ("textarea" === ke.tagName)
                for (const ie of ee) ie.nodeType === Ke.TEXT_NODE && Ke.removeChild(ie);
              else if ("style" === ke.tagName && 1 === ee.length)
                for (const ie of ee) ie.nodeType !== Ke.TEXT_NODE || He.hasNode(ie) || (Re.textContent = ie.textContent, Ke.removeChild(ie))
            } else if ((null == ke ? void 0 : ke.type) === LK.Document) {
              const He = Ke;
              ee.node.type === LK.DocumentType && (null == (ie = He.childNodes[0]) ? void 0 : ie.nodeType) === Node.DOCUMENT_TYPE_NODE && He.removeChild(He.childNodes[0]), "HTML" === Re.nodeName && He.documentElement && He.removeChild(He.documentElement)
            }
            if (Ue && Ue.nextSibling && Ue.nextSibling.parentNode ? Ke.insertBefore(Re, Ue.nextSibling) : Fe && Fe.parentNode ? Ke.contains(Fe) ? Ke.insertBefore(Re, Fe) : Ke.insertBefore(Re, null) : Ke.appendChild(Re), oe(Re, ee.node.id), this.usingVirtualDom && "#text" === Re.nodeName && "STYLE" === Ke.nodeName && (null == (Me = Ke.rules) ? void 0 : Me.length) > 0 && (Ke.rules = []), XK(Re, this.mirror)) {
              const ee = this.mirror.getId(Re),
                ie = this.newDocumentQueue.find((ie => ie.parentId === ee));
              ie && (this.attachDocumentToIframe(ie, Re), this.newDocumentQueue = this.newDocumentQueue.filter((ee => ee !== ie)))
            }(ee.previousId || ee.nextId) && this.legacy_resolveMissingNode(ye, Ke, Re, ee)
          };
        ee.adds.forEach((ee => {
          Me(ee)
        }));
        const Ke = Date.now();
        for (; be.length;) {
          const ee = TK(be);
          if (be.length = 0, Date.now() - Ke > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", ee);
            break
          }
          for (const ie of ee) {
            He.Abe(ie.value.parentId) ? pK(ie, (ee => {
              Me(ee)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", ie)
          }
        }
        Object.keys(ye).length && Object.assign(this.legacy_missingNodeRetryMap, ye), dK(ee.texts).forEach((ie => {
          var ye;
          const be = He.Abe(ie.id);
          if (!be) {
            if (ee.removes.find((ee => ee.id === ie.id))) return;
            return this.warnNodeNotFound(ee, ie.id)
          }
          const Me = be.parentElement;
          if (ie.value && Me && "STYLE" === Me.tagName ? be.textContent = rH(ie.value, this.cache) : be.textContent = ie.value, this.usingVirtualDom) {
            const ee = be.parentNode;
            (null == (ye = null == ee ? void 0 : ee.rules) ? void 0 : ye.length) > 0 && (ee.rules = [])
          }
        })), ee.attributes.forEach((ie => {
          var ye;
          const be = He.Abe(ie.id);
          if (!be) {
            if (ee.removes.find((ee => ee.id === ie.id))) return;
            return this.warnNodeNotFound(ee, ie.id)
          }
          for (const ee in ie.attributes)
            if ("string" === typeof ee) {
              const Ke = ie.attributes[ee];
              if (null === Ke) be.removeAttribute(ee), "open" === ee && bF(be, ie);
              else if ("string" === typeof Ke) try {
                if ("_cssText" === ee && ("LINK" === be.nodeName || "STYLE" === be.nodeName)) try {
                  const ee = He.getMeta(be),
                    ye = My({
                      ...ee,
                      attributes: {
                        ...ee.attributes,
                        ...ie.attributes
                      }
                    }, {
                      doc: be.ownerDocument,
                      mirror: He,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(ee.attributes, ie.attributes);
                  const Me = be.nextSibling,
                    Ke = be.parentNode;
                  if (ye && Ke) {
                    Ke.removeChild(be), Ke.insertBefore(ye, Me), He.replace(ie.id, ye);
                    break
                  }
                } catch (Me) {}
                if ("value" === ee && "TEXTAREA" === be.nodeName) {
                  const ee = be;
                  ee.childNodes.forEach((ie => ee.removeChild(ie)));
                  const ie = null == (ye = be.ownerDocument) ? void 0 : ye.createTextNode(Ke);
                  ie && ee.appendChild(ie)
                } else be.setAttribute(ee, Ke);
                "rr_open_mode" === ee && "DIALOG" === be.nodeName && yF(be, ie)
              } catch (Ue) {
                this.warn("An error occurred may due to the checkout feature.", Ue)
              } else if ("style" === ee) {
                const ee = Ke,
                  ie = be;
                for (const He in ee)
                  if (!1 === ee[He]) ie.style.removeProperty(He);
                  else if (ee[He] instanceof Array) {
                  const ye = ee[He];
                  ie.style.setProperty(He, ye[0], ye[1])
                } else {
                  const ye = ee[He];
                  ie.style.setProperty(He, ye)
                }
              }
            }
        }))
      }
      applyScroll(ee, ie) {
        var He, ye;
        const be = this.mirror.Abe(ee.id);
        if (!be) return this.debugNodeNotFound(ee, ee.id);
        const Me = this.mirror.getMeta(be);
        if (be === this.iframe.contentDocument) null == (He = this.iframe.contentWindow) || He.scrollTo({
          top: ee.y,
          left: ee.x,
          behavior: ie ? "auto" : "smooth"
        });
        else if ((null == Me ? void 0 : Me.type) === LK.Document) null == (ye = be.defaultView) || ye.scrollTo({
          top: ee.y,
          left: ee.x,
          behavior: ie ? "auto" : "smooth"
        });
        else try {
          be.scrollTo({
            top: ee.y,
            left: ee.x,
            behavior: ie ? "auto" : "smooth"
          })
        } catch (Ke) {}
      }
      applyInput(ee) {
        const ie = this.mirror.Abe(ee.id);
        if (!ie) return this.debugNodeNotFound(ee, ee.id);
        try {
          ie.checked = ee.isChecked, ie.value = ee.text
        } catch (He) {}
      }
      applySelection(ee) {
        try {
          const ie = new Set,
            He = ee.zp.map((ee => {
              let {
                start: He,
                startOffset: ye,
                end: be,
                endOffset: Me
              } = ee;
              const Ke = this.mirror.Abe(He),
                Ue = this.mirror.Abe(be);
              if (!Ke || !Ue) return;
              const Fe = new Range;
              Fe.setStart(Ke, ye), Fe.setEnd(Ue, Me);
              const Je = Ke.ownerDocument,
                oe = null == Je ? void 0 : Je.getSelection();
              return oe && ie.add(oe), {
                range: Fe,
                selection: oe
              }
            }));
          ie.forEach((ee => ee.removeAllRanges())), He.forEach((ee => {
            var ie;
            return ee && (null == (ie = ee.selection) ? void 0 : ie.addRange(ee.range))
          }))
        } catch (ie) {}
      }
      applyStyleSheetMutation(ee) {
        var ie;
        let He = null;
        ee.styleId ? He = this.styleMirror.getStyle(ee.styleId) : ee.id && (He = (null == (ie = this.mirror.Abe(ee.id)) ? void 0 : ie.sheet) || null), He && (ee.source === AK.StyleSheetRule ? this.applyStyleSheetRule(ee, He) : ee.source === AK.StyleDeclaration && this.applyStyleDeclaration(ee, He))
      }
      applyStyleSheetRule(ee, ie) {
        var He, ye, be, Me;
        if (null == (He = ee.adds) || He.forEach((ee => {
            let {
              rule: He,
              index: ye
            } = ee;
            try {
              if (Array.isArray(ye)) {
                const {
                  positions: ee,
                  index: be
                } = OK(ye), Me = gK(ie.cssRules, ee);
                null == Me || Me.insertRule(He, be)
              } else {
                const ee = void 0 === ye ? void 0 : Math.min(ye, ie.cssRules.length);
                null == ie || ie.insertRule(He, ee)
              }
            } catch (be) {}
          })), null == (ye = ee.removes) || ye.forEach((ee => {
            let {
              index: He
            } = ee;
            try {
              if (Array.isArray(He)) {
                const {
                  positions: ee,
                  index: ye
                } = OK(He), be = gK(ie.cssRules, ee);
                null == be || be.deleteRule(ye || 0)
              } else null == ie || ie.deleteRule(He)
            } catch (ye) {}
          })), "string" === typeof ee.replace) try {
          null == (be = ie.replace) || be.call(ie, ee.replace)
        } catch (Ke) {}
        if ("string" === typeof ee.replaceSync) try {
          null == (Me = ie.replaceSync) || Me.call(ie, ee.replaceSync)
        } catch (Ke) {}
      }
      applyStyleDeclaration(ee, ie) {
        if (ee.set) {
          const He = gK(ie.rules, ee.index);
          (null == He ? void 0 : He.style) && He.style.setProperty(ee.set.property, ee.set.value, ee.set.priority)
        }
        if (ee.remove) {
          const He = gK(ie.rules, ee.index);
          (null == He ? void 0 : He.style) && He.style.removeProperty(ee.remove.property)
        }
      }
      applyAdoptedStyleSheet(ee) {
        var ie;
        const He = this.mirror.Abe(ee.id);
        if (!He) return;
        null == (ie = ee.styles) || ie.forEach((ee => {
          var ie;
          let ye = null,
            be = null;
          if (EK(He) ? be = (null == (ie = He.ownerDocument) ? void 0 : ie.defaultView) || null : "#document" === He.nodeName && (be = He.defaultView), be) try {
            ye = new be.CSSStyleSheet, this.styleMirror.add(ye, ee.styleId), this.applyStyleSheetRule({
              source: AK.StyleSheetRule,
              adds: ee.rules
            }, ye)
          } catch (Me) {}
        }));
        let ye = 0;
        const be = (ee, ie) => {
          const He = ie.map((ee => this.styleMirror.getStyle(ee))).filter((ee => null !== ee));
          EK(ee) ? ee.shadowRoot.adoptedStyleSheets = He : "#document" === ee.nodeName && (ee.adoptedStyleSheets = He), He.length !== ie.length && ye < 10 && (setTimeout((() => be(ee, ie)), 0 + 100 * ye), ye++)
        };
        be(He, ee.styleIds)
      }
      legacy_resolveMissingNode(ee, ie, He, ye) {
        const {
          previousId: be,
          nextId: Me
        } = ye, Ke = be && ee[be], Ue = Me && ee[Me];
        if (Ke) {
          const {
            node: ye,
            mutation: be
          } = Ke;
          ie.insertBefore(ye, He), delete ee[be.node.id], delete this.legacy_missingNodeRetryMap[be.node.id], (be.previousId || be.nextId) && this.legacy_resolveMissingNode(ee, ie, ye, be)
        }
        if (Ue) {
          const {
            node: ye,
            mutation: be
          } = Ue;
          ie.insertBefore(ye, He.nextSibling), delete ee[be.node.id], delete this.legacy_missingNodeRetryMap[be.node.id], (be.previousId || be.nextId) && this.legacy_resolveMissingNode(ee, ie, ye, be)
        }
      }
      moveAndHover(ee, ie, He, ye, be) {
        const Me = this.mirror.Abe(He);
        if (!Me) return this.debugNodeNotFound(be, He);
        const Ke = BK(Me, this.iframe),
          Ue = ee * Ke.absoluteScale + Ke.x,
          Fe = ie * Ke.absoluteScale + Ke.y;
        this.mouse.style.left = `${Ue}px`, this.mouse.style.top = `${Fe}px`, ye || this.drawMouseTail({
          x: Ue,
          y: Fe
        }), this.hoverElements(Me)
      }
      drawMouseTail(ee) {
        if (!this.mouseTail) return;
        const {
          lineCap: ie,
          lineWidth: He,
          strokeStyle: ye,
          duration: be
        } = !0 === this.config.mouseTail ? UF : Object.assign({}, UF, this.config.mouseTail), Me = () => {
          if (!this.mouseTail) return;
          const ee = this.mouseTail.getContext("2d");
          ee && this.tailPositions.length && (ee.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), ee.beginPath(), ee.lineWidth = He, ee.lineCap = ie, ee.strokeStyle = ye, ee.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((ie => ee.lineTo(ie.x, ie.y))), ee.stroke())
        };
        this.tailPositions.push(ee), Me(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((ie => ie !== ee)), Me()
        }), be / this.speedService.state.context.timer.speed)
      }
      hoverElements(ee) {
        var ie;
        null == (ie = this.lastHoveredRootNode || this.iframe.contentDocument) || ie.querySelectorAll(".\\:hover").forEach((ee => {
          ee.classList.remove(":hover")
        })), this.lastHoveredRootNode = ee.getRootNode();
        let He = ee;
        for (; He;) He.classList && He.classList.add(":hover"), He = He.parentElement
      }
      isUserInteraction(ee) {
        return ee.type === PK.IncrementalSnapshot && (ee.data.source > AK.Mutation && ee.data.source <= AK.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(xK.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(ee, ie) {
        this.warn(`Node with id '${ie}' not found. `, ee)
      }
      warnCanvasMutationFailed(ee, ie) {
        this.warn("Has error on canvas update", ie, "canvas mutation:", ee)
      }
      debugNodeNotFound(ee, ie) {
        this.debug(`Node with id '${ie}' not found. `, ee)
      }
      warn() {
        if (this.config.showWarning) {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.config.logger.warn(KF, ...ie)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var ee = arguments.length, ie = new Array(ee), He = 0; He < ee; He++) ie[He] = arguments[He];
          this.config.logger.log(KF, ...ie)
        }
      }
    }
    const {
      addCustomEvent: oF
    } = PU, {
      freezePage: RF
    } = PU, {
      takeFullSnapshot: kF
    } = PU
  }
};
Object.freeze(modules);
for (const ee in modules) Object.freeze(modules[ee]);