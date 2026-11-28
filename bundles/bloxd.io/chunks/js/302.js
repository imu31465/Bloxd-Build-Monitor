/*! For license information please see welxxc.302.ee031d60.chunk.js.LICENSE.txt */
export const id = 302;
export const ids = [302];
export const modules = {
  42168: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => cV,
      e: () => YV,
      i: () => Ll
    });
    var eb, Hb = Object.defineProperty,
      pb = (bb, wb, Mb) => ((bb, wb, Mb) => wb in bb ? Hb(bb, wb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mb
      }) : bb[wb] = Mb)(bb, "symbol" !== typeof wb ? wb + "" : wb, Mb),
      Vb = Object.defineProperty,
      gb = (bb, wb, Mb) => ((bb, wb, Mb) => wb in bb ? Vb(bb, wb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mb
      }) : bb[wb] = Mb)(bb, "symbol" !== typeof wb ? wb + "" : wb, Mb),
      lb = (bb => (bb[bb.Document = 0] = "Document", bb[bb.DocumentType = 1] = "DocumentType", bb[bb.Element = 2] = "Element", bb[bb.Text = 3] = "Text", bb[bb.CDATA = 4] = "CDATA", bb[bb.Comment = 5] = "Comment", bb))(lb || {});
    const Lb = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      Ib = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      Ob = {},
      Ub = {};

    function tb(bb) {
      if (Ob[bb]) return Ob[bb];
      const wb = globalThis[bb],
        Mb = wb.prototype,
        eb = bb in Lb ? Lb[bb] : void 0,
        Hb = Boolean(eb && eb.every((bb => {
          var wb, eb;
          return Boolean(null == (eb = null == (wb = Object.getOwnPropertyDescriptor(Mb, bb)) ? void 0 : wb.get) ? void 0 : eb.toString().includes("[native code]"))
        }))),
        pb = bb in Ib ? Ib[bb] : void 0,
        Vb = Boolean(pb && pb.every((bb => {
          var wb;
          return "function" === typeof Mb[bb] && (null == (wb = Mb[bb]) ? void 0 : wb.toString().includes("[native code]"))
        })));
      if (Hb && Vb && !globalThis.Zone) return Ob[bb] = wb.prototype, wb.prototype;
      try {
        const eb = document.createElement("iframe");
        eb.style.display = "none", document.body.appendChild(eb);
        const Hb = eb.contentWindow;
        if (!Hb) return wb.prototype;
        const pb = Hb[bb].prototype;
        if (!pb) return eb.remove(), Mb;
        const Vb = navigator.userAgent;
        return Vb.includes("Safari") && !Vb.includes("Chrome") ? (eb.classList.add("rr-block"), eb.setAttribute("__rrwebUntaintedMutationObserver", ""), Ub[bb] = () => eb.remove()) : eb.remove(), Ob[bb] = pb
      } catch {
        return Mb
      }
    }
    const Cb = {};

    function Eb(bb, wb, Mb) {
      var eb, Hb;
      const pb = null == (eb = Cb[bb]) ? void 0 : eb[Mb];
      if (pb) return pb.call(wb);
      const Vb = tb(bb),
        gb = null == (Hb = Object.getOwnPropertyDescriptor(Vb, Mb)) ? void 0 : Hb.get;
      return gb ? ((Cb[bb] || (Cb[bb] = {}))[Mb] = gb, gb.call(wb)) : wb[Mb]
    }
    const Fb = {};

    function Bb(bb, wb, Mb) {
      const eb = `${bb}.${String(Mb)}`;
      if (Fb[eb]) return Fb[eb].bind(wb);
      const Hb = tb(bb)[Mb];
      return "function" !== typeof Hb ? wb[Mb] : (Fb[eb] = Hb, Hb.bind(wb))
    }
    let sb = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (sb = () => (new Date).getTime());
    const mb = {
      ownerDocument: function(bb) {
        return Eb("Node", bb, "ownerDocument")
      },
      childNodes: function(bb) {
        return Eb("Node", bb, "childNodes")
      },
      parentNode: function(bb) {
        return Eb("Node", bb, "parentNode")
      },
      parentElement: function(bb) {
        return Eb("Node", bb, "parentElement")
      },
      textContent: function(bb) {
        return Eb("Node", bb, "textContent")
      },
      firstChild: function(bb) {
        return Eb("Node", bb, "firstChild")
      },
      lastChild: function(bb) {
        return Eb("Node", bb, "lastChild")
      },
      nextSibling: function(bb) {
        return Eb("Node", bb, "nextSibling")
      },
      previousSibling: function(bb) {
        return Eb("Node", bb, "previousSibling")
      },
      contains: function(bb, wb) {
        return Bb("Node", bb, "contains")(wb)
      },
      getRootNode: function(bb) {
        return Bb("Node", bb, "getRootNode")()
      },
      host: function(bb) {
        return bb && "host" in bb ? Eb("ShadowRoot", bb, "host") : null
      },
      styleSheets: function(bb) {
        return bb.styleSheets
      },
      shadowRoot: function(bb) {
        return bb && "shadowRoot" in bb ? Eb("Element", bb, "shadowRoot") : null
      },
      querySelector: function(bb, wb) {
        return Eb("Element", bb, "querySelector")(wb)
      },
      querySelectorAll: function(bb, wb) {
        return Eb("Element", bb, "querySelectorAll")(wb)
      },
      nowTimestamp: sb,
      mutationObserverCtor: function() {
        return [tb("MutationObserver").constructor, Ub.MutationObserver ?? (() => {})]
      },
      patch: function(bb, wb, Mb) {
        try {
          if (!(wb in bb)) return () => {};
          const eb = bb[wb],
            Hb = Mb(eb);
          return "function" === typeof Hb && (Hb.prototype = Hb.prototype || {}, Object.defineProperties(Hb, {
            __rrweb_original__: {
              enumerable: !1,
              value: eb
            }
          })), bb[wb] = Hb, () => {
            bb[wb] = eb
          }
        } catch {
          return () => {}
        }
      }
    };

    function hb(bb) {
      return bb.nodeType === bb.ELEMENT_NODE
    }

    function zb(bb) {
      const wb = bb && "host" in bb && "mode" in bb && mb.host(bb) || null;
      return Boolean(wb && "shadowRoot" in wb && mb.shadowRoot(wb) === bb)
    }

    function Xb(bb) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(bb)
    }

    function xb(bb) {
      try {
        const Mb = bb.rules || bb.cssRules;
        if (!Mb) return null;
        let eb = bb.href;
        !eb && bb.ownerNode && (eb = bb.ownerNode.baseURI);
        const Hb = Array.from(Mb, (bb => jb(bb, eb))).join("");
        return (wb = Hb).includes(" background-clip: text;") && !wb.includes(" -webkit-background-clip: text;") && (wb = wb.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), wb
      } catch (Mb) {
        return null
      }
      var wb
    }

    function jb(bb, wb) {
      if (function(bb) {
          return "styleSheet" in bb
        }(bb)) {
        let wb;
        try {
          wb = xb(bb.styleSheet) || function(bb) {
            const {
              cssText: wb
            } = bb;
            if (wb.split('"').length < 3) return wb;
            const Mb = ["@import", `url(${JSON.stringify(bb.href)})`];
            return "" === bb.layerName ? Mb.push("layer") : bb.layerName && Mb.push(`layer(${bb.layerName})`), bb.supportsText && Mb.push(`supports(${bb.supportsText})`), bb.media.length && Mb.push(bb.media.mediaText), Mb.join(" ") + ";"
          }(bb)
        } catch (Mb) {
          wb = bb.cssText
        }
        return bb.styleSheet.href ? Sb(wb, bb.styleSheet.href) : wb
      } {
        let Mb = bb.cssText;
        return function(bb) {
          return "selectorText" in bb
        }(bb) && bb.selectorText.includes(":") && (Mb = function(bb) {
          const wb = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return bb.replace(wb, "$1\\$2")
        }(Mb)), wb ? Sb(Mb, wb) : Mb
      }
    }
    class Kb {
      constructor() {
        gb(this, "idNodeMap", new Map), gb(this, "nodeMetaMap", new WeakMap)
      }
      getId(bb) {
        var wb;
        if (!bb) return -1;
        return (null == (wb = this.getMeta(bb)) ? void 0 : wb.id) ?? -1
      }
      OHb(bb) {
        return this.idNodeMap.get(bb) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(bb) {
        return this.nodeMetaMap.get(bb) || null
      }
      removeNodeFromMap(bb) {
        const wb = this.getId(bb);
        this.idNodeMap.delete(wb), bb.childNodes && bb.childNodes.forEach((bb => this.removeNodeFromMap(bb)))
      }
      has(bb) {
        return this.idNodeMap.has(bb)
      }
      hasNode(bb) {
        return this.nodeMetaMap.has(bb)
      }
      add(bb, wb) {
        const Mb = wb.id;
        this.idNodeMap.set(Mb, bb), this.nodeMetaMap.set(bb, wb)
      }
      replace(bb, wb) {
        const Mb = this.OHb(bb);
        if (Mb) {
          const bb = this.nodeMetaMap.get(Mb);
          bb && this.nodeMetaMap.set(wb, bb)
        }
        this.idNodeMap.set(bb, wb)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function rb() {
      return new Kb
    }

    function Rb(bb) {
      let {
        element: wb,
        maskInputOptions: Mb,
        tagName: eb,
        type: Hb,
        value: pb,
        maskInputFn: Vb
      } = bb, gb = pb || "";
      const lb = Hb && Db(Hb);
      return (Mb[eb.toLowerCase()] || lb && Mb[lb]) && (gb = Vb ? Vb(gb, wb) : "*".repeat(gb.length)), gb
    }

    function Db(bb) {
      return bb.toLowerCase()
    }
    const cb = "__rrweb_original__";

    function Yb(bb) {
      const wb = bb.type;
      return bb.hasAttribute("data-rr-is-password") ? "password" : wb ? Db(wb) : null
    }

    function Zb(bb, wb) {
      let Mb;
      try {
        Mb = new URL(bb, wb ?? window.location.href)
      } catch (Hb) {
        return null
      }
      const eb = Mb.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == eb ? void 0 : eb[1]) ?? null
    }
    const fb = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      Ab = /^(?:[a-z+]+:)?\/\//i,
      Wb = /^www\..*/i,
      Jb = /^(data:)([^,]*),(.*)/i;

    function Sb(bb, wb) {
      return (bb || "").replace(fb, ((bb, Mb, eb, Hb, pb, Vb) => {
        const gb = eb || pb || Vb,
          lb = Mb || Hb || "";
        if (!gb) return bb;
        if (Ab.test(gb) || Wb.test(gb)) return `url(${lb}${gb}${lb})`;
        if (Jb.test(gb)) return `url(${lb}${gb}${lb})`;
        if ("/" === gb[0]) return `url(${lb}${function(bb){let wb="";return wb=bb.indexOf("//")>-1?bb.split("/").slice(0,3).join("/"):bb.split("/")[0],wb=wb.split("?")[0],wb}(wb)+gb}${lb})`;
        const Lb = gb.split("#")[0],
          Ib = gb.substring(Lb.length),
          Ob = wb.split("#")[0].split("/"),
          Ub = Lb.split("/");
        Ob.pop();
        for (const wb of Ub) "." !== wb && (".." === wb ? Ob.pop() : Ob.push(wb));
        return `url(${lb}${Ob.join("/")}${Ib}${lb})`
      }))
    }
    const Nb = "(?:/\\*[^*]*\\*/)|[\\s;]",
      vb = new RegExp(`${Nb}|\\b(0)px?`, "g"),
      Qb = new RegExp(Nb, "g");

    function Gb(bb) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? bb.replace(Qb, "") : bb.replace(vb, "$1")
    }

    function qb(bb, wb) {
      return function(bb, wb) {
        let Mb = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const eb = Array.from(wb.childNodes),
          Hb = [];
        let pb = 0;
        if (eb.length > 1 && bb && "string" === typeof bb) {
          let wb = Gb(bb, Mb);
          const Vb = wb.length / bb.length;
          for (let gb = 1; gb < eb.length; gb++)
            if (eb[gb].textContent && "string" === typeof eb[gb].textContent) {
              const lb = Gb(eb[gb].textContent, Mb),
                Lb = 100;
              let Ib = 3;
              for (; Ib < lb.length && (lb[Ib].match(/[a-zA-Z0-9]/) || -1 !== lb.indexOf(lb.substring(0, Ib), 1)); Ib++);
              for (; Ib < lb.length; Ib++) {
                let Ob = lb.substring(0, Ib),
                  Ub = wb.split(Ob),
                  tb = -1;
                if (2 === Ub.length) tb = Ub[0].length;
                else if (Ub.length > 2 && "" === Ub[0] && "" !== eb[gb - 1].textContent) tb = wb.indexOf(Ob, 1);
                else if (1 === Ub.length) {
                  if (Ob = Ob.substring(0, Ob.length - 1), Ub = wb.split(Ob), Ub.length <= 1) return Hb.push(bb), Hb;
                  Ib = Lb + 1
                } else Ib === lb.length - 1 && (tb = wb.indexOf(Ob));
                if (Ub.length >= 2 && Ib > Lb) {
                  const bb = eb[gb - 1].textContent;
                  if (bb && "string" === typeof bb) {
                    const Mb = Gb(bb).length;
                    tb = wb.indexOf(Ob, Mb)
                  } - 1 === tb && (tb = Ub[0].length)
                }
                if (-1 !== tb) {
                  let gb = Math.floor(tb / Vb);
                  for (; gb > 0 && gb < bb.length;) {
                    if (pb += 1, pb > 50 * eb.length) return Hb.push(bb), Hb;
                    const lb = Gb(bb.substring(0, gb), Mb);
                    if (lb.length === tb) {
                      Hb.push(bb.substring(0, gb)), bb = bb.substring(gb), wb = wb.substring(tb);
                      break
                    }
                    lb.length < tb ? gb += Math.max(1, Math.floor((tb - lb.length) / Vb)) : gb -= Math.max(1, Math.floor((lb.length - tb) * Vb))
                  }
                  break
                }
              }
            }
        }
        return Hb.push(bb), Hb
      }(bb, wb).join("/* rr_split */")
    }
    let ab = 1;
    const ib = new RegExp("[^a-z0-9-_:]");

    function ub() {
      return ab++
    }
    let db, Pb;
    const nb = /^[^ \t\n\r\u000c]+/,
      yb = /^[, \t\n\r\u000c]+/;
    const ob = new WeakMap;

    function Tb(bb, wb) {
      return wb && "" !== wb.trim() ? bw(bb, wb) : wb
    }

    function kb(bb) {
      return Boolean("svg" === bb.tagName || bb.ownerSVGElement)
    }

    function bw(bb, wb) {
      let Mb = ob.get(bb);
      if (Mb || (Mb = bb.createElement("a"), ob.set(bb, Mb)), wb) {
        if (wb.startsWith("blob:") || wb.startsWith("data:")) return wb
      } else wb = "";
      return Mb.setAttribute("href", wb), Mb.href
    }

    function ww(bb, wb, Mb, eb) {
      return eb ? "src" === Mb || "href" === Mb && ("use" !== wb || "#" !== eb[0]) || "xlink:href" === Mb && "#" !== eb[0] || "background" === Mb && ["table", "td", "th"].includes(wb) ? Tb(bb, eb) : "srcset" === Mb ? function(bb, wb) {
        if ("" === wb.trim()) return wb;
        let Mb = 0;

        function eb(bb) {
          let eb;
          const Hb = bb.exec(wb.substring(Mb));
          return Hb ? (eb = Hb[0], Mb += eb.length, eb) : ""
        }
        const Hb = [];
        for (; eb(yb), !(Mb >= wb.length);) {
          let pb = eb(nb);
          if ("," === pb.slice(-1)) pb = Tb(bb, pb.substring(0, pb.length - 1)), Hb.push(pb);
          else {
            let eb = "";
            pb = Tb(bb, pb);
            let Vb = !1;
            for (;;) {
              const bb = wb.charAt(Mb);
              if ("" === bb) {
                Hb.push((pb + eb).trim());
                break
              }
              if (Vb) ")" === bb && (Vb = !1);
              else {
                if ("," === bb) {
                  Mb += 1, Hb.push((pb + eb).trim());
                  break
                }
                "(" === bb && (Vb = !0)
              }
              eb += bb, Mb += 1
            }
          }
        }
        return Hb.join(", ")
      }(bb, eb) : "style" === Mb ? Sb(eb, bw(bb)) : "object" === wb && "data" === Mb ? Tb(bb, eb) : eb : eb
    }

    function Mw(bb, wb, Mb) {
      return ["video", "audio"].includes(bb) && "autoplay" === Db(wb)
    }

    function ew(bb, wb, Mb) {
      if (!bb) return !1;
      if (bb.nodeType !== bb.ELEMENT_NODE) return !!Mb && ew(mb.parentNode(bb), wb, Mb);
      for (let eb = bb.classList.length; eb--;) {
        const Mb = bb.classList[eb];
        if (wb.test(Mb)) return !0
      }
      return !!Mb && ew(mb.parentNode(bb), wb, Mb)
    }

    function Hw(bb, wb, Mb, eb) {
      let Hb;
      if (hb(bb)) {
        if (Hb = bb, !mb.childNodes(Hb).length) return !1
      } else {
        if (null === mb.parentElement(bb)) return !1;
        Hb = mb.parentElement(bb)
      }
      try {
        if ("string" === typeof wb) {
          if (eb) {
            if (Hb.closest(`.${wb}`)) return !0
          } else if (Hb.classList.contains(wb)) return !0
        } else if (ew(Hb, wb, eb)) return !0;
        if (Mb)
          if (eb) {
            if (Hb.closest(Mb)) return !0
          } else if (Hb.matches(Mb)) return !0
      } catch (pb) {}
      return !1
    }

    function pw(bb, wb) {
      const {
        doc: Mb,
        mirror: eb,
        blockClass: Hb,
        blockSelector: pb,
        needsMask: Vb,
        inlineStylesheet: gb,
        maskInputOptions: Lb = {},
        maskTextFn: Ib,
        maskInputFn: Ob,
        dataURLOptions: Ub = {},
        inlineImages: tb,
        recordCanvas: Cb,
        keepIframeSrcFn: Eb,
        newlyAddedElement: Fb = !1,
        cssCaptured: Bb = !1
      } = wb, sb = function(bb, wb) {
        if (!wb.hasNode(bb)) return;
        const Mb = wb.getId(bb);
        return 1 === Mb ? void 0 : Mb
      }(Mb, eb);
      switch (bb.nodeType) {
        case bb.DOCUMENT_NODE:
          return "CSS1Compat" !== bb.compatMode ? {
            type: lb.Document,
            childNodes: [],
            compatMode: bb.compatMode
          } : {
            type: lb.Document,
            childNodes: []
          };
        case bb.DOCUMENT_TYPE_NODE:
          return {
            type: lb.DocumentType, name: bb.name, publicId: bb.publicId, systemId: bb.systemId, rootId: sb
          };
        case bb.ELEMENT_NODE:
          return function(bb, wb) {
            const {
              doc: Mb,
              blockClass: eb,
              blockSelector: Hb,
              inlineStylesheet: pb,
              maskInputOptions: Vb = {},
              maskInputFn: gb,
              dataURLOptions: Lb = {},
              inlineImages: Ib,
              recordCanvas: Ob,
              keepIframeSrcFn: Ub,
              newlyAddedElement: tb = !1,
              rootId: Cb
            } = wb, Eb = function(bb, wb, Mb) {
              try {
                if ("string" === typeof wb) {
                  if (bb.classList.contains(wb)) return !0
                } else
                  for (let Mb = bb.classList.length; Mb--;) {
                    const eb = bb.classList[Mb];
                    if (wb.test(eb)) return !0
                  }
                if (Mb) return bb.matches(Mb)
              } catch (eb) {}
              return !1
            }(bb, eb, Hb), Fb = function(bb) {
              if (bb instanceof HTMLFormElement) return "form";
              const wb = Db(bb.tagName);
              return ib.test(wb) ? "div" : wb
            }(bb);
            let Bb = {};
            const sb = bb.attributes.length;
            for (let lb = 0; lb < sb; lb++) {
              const wb = bb.attributes[lb];
              Mw(Fb, wb.name, wb.value) || (Bb[wb.name] = ww(Mb, Fb, Db(wb.name), wb.value))
            }
            if ("link" === Fb && pb) {
              const wb = Array.from(Mb.styleSheets).find((wb => wb.href === bb.href));
              let eb = null;
              wb && (eb = xb(wb)), eb && (delete Bb.rel, delete Bb.href, Bb._cssText = eb)
            }
            if ("style" === Fb && bb.sheet) {
              let wb = xb(bb.sheet);
              wb && (bb.childNodes.length > 1 && (wb = qb(wb, bb)), Bb._cssText = wb)
            }
            if (["input", "textarea", "select"].includes(Fb)) {
              const wb = bb.value,
                Mb = bb.checked;
              "radio" !== Bb.type && "checkbox" !== Bb.type && "submit" !== Bb.type && "button" !== Bb.type && wb ? Bb.value = Rb({
                element: bb,
                type: Yb(bb),
                tagName: Fb,
                value: wb,
                maskInputOptions: Vb,
                maskInputFn: gb
              }) : Mb && (Bb.checked = Mb)
            }
            "option" === Fb && (bb.selected && !Vb.select ? Bb.selected = !0 : delete Bb.selected);
            "dialog" === Fb && bb.open && (Bb.rr_open_mode = bb.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === Fb && Ob)
              if ("2d" === bb.__context)(function(bb) {
                const wb = bb.getContext("2d");
                if (!wb) return !0;
                for (let Mb = 0; Mb < bb.width; Mb += 50)
                  for (let eb = 0; eb < bb.height; eb += 50) {
                    const Hb = wb.getImageData,
                      pb = cb in Hb ? Hb[cb] : Hb;
                    if (new Uint32Array(pb.call(wb, Mb, eb, Math.min(50, bb.width - Mb), Math.min(50, bb.height - eb)).data.buffer).some((bb => 0 !== bb))) return !1
                  }
                return !0
              })(bb) || (Bb.rr_dataURL = bb.toDataURL(Lb.type, Lb.quality));
              else if (!("__context" in bb)) {
              const wb = bb.toDataURL(Lb.type, Lb.quality),
                eb = Mb.createElement("canvas");
              eb.width = bb.width, eb.height = bb.height;
              wb !== eb.toDataURL(Lb.type, Lb.quality) && (Bb.rr_dataURL = wb)
            }
            if ("img" === Fb && Ib) {
              db || (db = Mb.createElement("canvas"), Pb = db.getContext("2d"));
              const wb = bb,
                eb = wb.currentSrc || wb.getAttribute("src") || "<unknown-src>",
                Hb = wb.crossOrigin,
                pb = () => {
                  wb.removeEventListener("load", pb);
                  try {
                    db.width = wb.naturalWidth, db.height = wb.naturalHeight, Pb.drawImage(wb, 0, 0), Bb.rr_dataURL = db.toDataURL(Lb.type, Lb.quality)
                  } catch (bb) {
                    if ("anonymous" !== wb.crossOrigin) return wb.crossOrigin = "anonymous", void(wb.complete && 0 !== wb.naturalWidth ? pb() : wb.addEventListener("load", pb));
                    console.warn(`Cannot inline img src=${eb}! Error: ${bb}`)
                  }
                  "anonymous" === wb.crossOrigin && (Hb ? Bb.crossOrigin = Hb : wb.removeAttribute("crossorigin"))
                };
              wb.complete && 0 !== wb.naturalWidth ? pb() : wb.addEventListener("load", pb)
            }
            if (["audio", "video"].includes(Fb)) {
              const wb = Bb;
              wb.rr_mediaState = bb.paused ? "paused" : "played", wb.rr_mediaCurrentTime = bb.currentTime, wb.rr_mediaPlaybackRate = bb.playbackRate, wb.rr_mediaMuted = bb.muted, wb.rr_mediaLoop = bb.loop, wb.rr_mediaVolume = bb.volume
            }
            tb || (bb.scrollLeft && (Bb.rr_scrollLeft = bb.scrollLeft), bb.scrollTop && (Bb.rr_scrollTop = bb.scrollTop));
            if (Eb) {
              const {
                width: wb,
                height: Mb
              } = bb.getBoundingClientRect();
              Bb = {
                class: Bb.class,
                rr_width: `${wb}px`,
                rr_height: `${Mb}px`
              }
            }
            "iframe" !== Fb || Ub(Bb.src) || (bb.contentDocument || (Bb.rr_src = Bb.src), delete Bb.src);
            let mb;
            try {
              customElements.get(Fb) && (mb = !0)
            } catch (hb) {}
            return {
              type: lb.Element,
              tagName: Fb,
              attributes: Bb,
              childNodes: [],
              isSVG: kb(bb) || void 0,
              needBlock: Eb,
              rootId: Cb,
              isCustom: mb
            }
          }(bb, {
            doc: Mb,
            blockClass: Hb,
            blockSelector: pb,
            inlineStylesheet: gb,
            maskInputOptions: Lb,
            maskInputFn: Ob,
            dataURLOptions: Ub,
            inlineImages: tb,
            recordCanvas: Cb,
            keepIframeSrcFn: Eb,
            newlyAddedElement: Fb,
            rootId: sb
          });
        case bb.TEXT_NODE:
          return function(bb, wb) {
            const {
              needsMask: Mb,
              maskTextFn: eb,
              rootId: Hb,
              cssCaptured: pb
            } = wb, Vb = mb.parentNode(bb), gb = Vb && Vb.tagName;
            let Lb = "";
            const Ib = "STYLE" === gb || void 0,
              Ob = "SCRIPT" === gb || void 0;
            Ob ? Lb = "SCRIPT_PLACEHOLDER" : pb || (Lb = mb.textContent(bb), Ib && Lb && (Lb = Sb(Lb, bw(wb.doc))));
            !Ib && !Ob && Lb && Mb && (Lb = eb ? eb(Lb, mb.parentElement(bb)) : Lb.replace(/[\S]/g, "*"));
            return {
              type: lb.Text,
              textContent: Lb || "",
              rootId: Hb
            }
          }(bb, {
            doc: Mb,
            needsMask: Vb,
            maskTextFn: Ib,
            rootId: sb,
            cssCaptured: Bb
          });
        case bb.CDATA_SECTION_NODE:
          return {
            type: lb.CDATA, textContent: "", rootId: sb
          };
        case bb.COMMENT_NODE:
          return {
            type: lb.Comment, textContent: mb.textContent(bb) || "", rootId: sb
          };
        default:
          return !1
      }
    }

    function Vw(bb) {
      return void 0 === bb || null === bb ? "" : bb.toLowerCase()
    }

    function gw(bb) {
      return !0 === bb || "all" === bb ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === bb,
        headMetaDescKeywords: "all" === bb,
        headTitleMutations: "all" === bb
      } : bb || {}
    }

    function lw(bb, wb) {
      const {
        doc: Mb,
        mirror: eb,
        blockClass: Hb,
        blockSelector: pb,
        maskTextClass: Vb,
        maskTextSelector: gb,
        skipChild: Lb = !1,
        inlineStylesheet: Ib = !0,
        maskInputOptions: Ob = {},
        maskTextFn: Ub,
        maskInputFn: tb,
        slimDOMOptions: Cb,
        dataURLOptions: Eb = {},
        inlineImages: Fb = !1,
        recordCanvas: Bb = !1,
        onSerialize: sb,
        onIframeLoad: xb,
        iframeLoadTimeout: jb = 5e3,
        onStylesheetLoad: Kb,
        stylesheetLoadTimeout: rb = 5e3,
        keepIframeSrcFn: Rb = () => !1,
        newlyAddedElement: Db = !1,
        cssCaptured: cb = !1
      } = wb;
      let {
        needsMask: Yb
      } = wb, {
        preserveWhiteSpace: fb = !0
      } = wb;
      if (!Yb) {
        Yb = Hw(bb, Vb, gb, void 0 === Yb)
      }
      const Ab = pw(bb, {
        doc: Mb,
        mirror: eb,
        blockClass: Hb,
        blockSelector: pb,
        needsMask: Yb,
        inlineStylesheet: Ib,
        maskInputOptions: Ob,
        maskTextFn: Ub,
        maskInputFn: tb,
        dataURLOptions: Eb,
        inlineImages: Fb,
        recordCanvas: Bb,
        keepIframeSrcFn: Rb,
        newlyAddedElement: Db,
        cssCaptured: cb
      });
      if (!Ab) return console.warn(bb, "not serialized"), null;
      let Wb;
      Wb = eb.hasNode(bb) ? eb.getId(bb) : function(bb, wb) {
        if (wb.comment && bb.type === lb.Comment) return !0;
        if (bb.type === lb.Element) {
          if (wb.script && ("script" === bb.tagName || "link" === bb.tagName && ("preload" === bb.attributes.rel && "script" === bb.attributes.as || "modulepreload" === bb.attributes.rel) || "link" === bb.tagName && "prefetch" === bb.attributes.rel && "string" === typeof bb.attributes.href && "js" === Zb(bb.attributes.href))) return !0;
          if (wb.headFavicon && ("link" === bb.tagName && "shortcut icon" === bb.attributes.rel || "meta" === bb.tagName && (Vw(bb.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === Vw(bb.attributes.name) || "icon" === Vw(bb.attributes.rel) || "apple-touch-icon" === Vw(bb.attributes.rel) || "shortcut icon" === Vw(bb.attributes.rel)))) return !0;
          if ("meta" === bb.tagName) {
            if (wb.headMetaDescKeywords && Vw(bb.attributes.name).match(/^description|keywords$/)) return !0;
            if (wb.headMetaSocial && (Vw(bb.attributes.property).match(/^(og|twitter|fb):/) || Vw(bb.attributes.name).match(/^(og|twitter):/) || "pinterest" === Vw(bb.attributes.name))) return !0;
            if (wb.headMetaRobots && ("robots" === Vw(bb.attributes.name) || "googlebot" === Vw(bb.attributes.name) || "bingbot" === Vw(bb.attributes.name))) return !0;
            if (wb.headMetaHttpEquiv && void 0 !== bb.attributes["http-equiv"]) return !0;
            if (wb.headMetaAuthorship && ("author" === Vw(bb.attributes.name) || "generator" === Vw(bb.attributes.name) || "framework" === Vw(bb.attributes.name) || "publisher" === Vw(bb.attributes.name) || "progid" === Vw(bb.attributes.name) || Vw(bb.attributes.property).match(/^article:/) || Vw(bb.attributes.property).match(/^product:/))) return !0;
            if (wb.headMetaVerification && ("google-site-verification" === Vw(bb.attributes.name) || "yandex-verification" === Vw(bb.attributes.name) || "csrf-token" === Vw(bb.attributes.name) || "p:domain_verify" === Vw(bb.attributes.name) || "verify-v1" === Vw(bb.attributes.name) || "verification" === Vw(bb.attributes.name) || "shopify-checkout-api-token" === Vw(bb.attributes.name))) return !0
          }
        }
        return !1
      }(Ab, Cb) || !fb && Ab.type === lb.Text && !Ab.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : ub();
      const Jb = Object.assign(Ab, {
        id: Wb
      });
      if (eb.add(bb, Jb), -2 === Wb) return null;
      sb && sb(bb);
      let Sb = !Lb;
      if (Jb.type === lb.Element) {
        Sb = Sb && !Jb.needBlock, delete Jb.needBlock;
        const wb = mb.shadowRoot(bb);
        wb && Xb(wb) && (Jb.isShadowHost = !0)
      }
      if ((Jb.type === lb.Document || Jb.type === lb.Element) && Sb) {
        Cb.headWhitespace && Jb.type === lb.Element && "head" === Jb.tagName && (fb = !1);
        const wb = {
          doc: Mb,
          mirror: eb,
          blockClass: Hb,
          blockSelector: pb,
          needsMask: Yb,
          maskTextClass: Vb,
          maskTextSelector: gb,
          skipChild: Lb,
          inlineStylesheet: Ib,
          maskInputOptions: Ob,
          maskTextFn: Ub,
          maskInputFn: tb,
          slimDOMOptions: Cb,
          dataURLOptions: Eb,
          inlineImages: Fb,
          recordCanvas: Bb,
          preserveWhiteSpace: fb,
          onSerialize: sb,
          onIframeLoad: xb,
          iframeLoadTimeout: jb,
          onStylesheetLoad: Kb,
          stylesheetLoadTimeout: rb,
          keepIframeSrcFn: Rb,
          cssCaptured: !1
        };
        if (Jb.type === lb.Element && "textarea" === Jb.tagName && void 0 !== Jb.attributes.value);
        else {
          Jb.type === lb.Element && void 0 !== Jb.attributes._cssText && "string" === typeof Jb.attributes._cssText && (wb.cssCaptured = !0);
          for (const Mb of Array.from(mb.childNodes(bb))) {
            const bb = lw(Mb, wb);
            bb && Jb.childNodes.push(bb)
          }
        }
        let zb = null;
        if (hb(bb) && (zb = mb.shadowRoot(bb)))
          for (const bb of Array.from(mb.childNodes(zb))) {
            const Mb = lw(bb, wb);
            Mb && (Xb(zb) && (Mb.isShadow = !0), Jb.childNodes.push(Mb))
          }
      }
      const Nb = mb.parentNode(bb);
      return Nb && zb(Nb) && Xb(Nb) && (Jb.isShadow = !0), Jb.type === lb.Element && "iframe" === Jb.tagName && function(bb, wb, Mb) {
        const eb = bb.contentWindow;
        if (!eb) return;
        let Hb, pb = !1;
        try {
          Hb = eb.document.readyState
        } catch (gb) {
          return
        }
        if ("complete" !== Hb) {
          const eb = setTimeout((() => {
            pb || (wb(), pb = !0)
          }), Mb);
          return void bb.addEventListener("load", (() => {
            clearTimeout(eb), pb = !0, wb()
          }))
        }
        const Vb = "about:blank";
        if (eb.location.href !== Vb || bb.src === Vb || "" === bb.src) return setTimeout(wb, 0), bb.addEventListener("load", wb);
        bb.addEventListener("load", wb)
      }(bb, (() => {
        const wb = bb.contentDocument;
        if (wb && xb) {
          const Mb = lw(wb, {
            doc: wb,
            mirror: eb,
            blockClass: Hb,
            blockSelector: pb,
            needsMask: Yb,
            maskTextClass: Vb,
            maskTextSelector: gb,
            skipChild: !1,
            inlineStylesheet: Ib,
            maskInputOptions: Ob,
            maskTextFn: Ub,
            maskInputFn: tb,
            slimDOMOptions: Cb,
            dataURLOptions: Eb,
            inlineImages: Fb,
            recordCanvas: Bb,
            preserveWhiteSpace: fb,
            onSerialize: sb,
            onIframeLoad: xb,
            iframeLoadTimeout: jb,
            onStylesheetLoad: Kb,
            stylesheetLoadTimeout: rb,
            keepIframeSrcFn: Rb
          });
          Mb && xb(bb, Mb)
        }
      }), jb), Jb.type === lb.Element && "link" === Jb.tagName && "string" === typeof Jb.attributes.rel && ("stylesheet" === Jb.attributes.rel || "preload" === Jb.attributes.rel && "string" === typeof Jb.attributes.href && "css" === Zb(Jb.attributes.href)) && function(bb, wb, Mb) {
        let eb, Hb = !1;
        try {
          eb = bb.sheet
        } catch (Vb) {
          return
        }
        if (eb) return;
        const pb = setTimeout((() => {
          Hb || (wb(), Hb = !0)
        }), Mb);
        bb.addEventListener("load", (() => {
          clearTimeout(pb), Hb = !0, wb()
        }))
      }(bb, (() => {
        if (Kb) {
          const wb = lw(bb, {
            doc: Mb,
            mirror: eb,
            blockClass: Hb,
            blockSelector: pb,
            needsMask: Yb,
            maskTextClass: Vb,
            maskTextSelector: gb,
            skipChild: !1,
            inlineStylesheet: Ib,
            maskInputOptions: Ob,
            maskTextFn: Ub,
            maskInputFn: tb,
            slimDOMOptions: Cb,
            dataURLOptions: Eb,
            inlineImages: Fb,
            recordCanvas: Bb,
            preserveWhiteSpace: fb,
            onSerialize: sb,
            onIframeLoad: xb,
            iframeLoadTimeout: jb,
            onStylesheetLoad: Kb,
            stylesheetLoadTimeout: rb,
            keepIframeSrcFn: Rb
          });
          wb && Kb(bb, wb)
        }
      }), rb), Jb
    }
    const Lw = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      Iw = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(bb) {
            bb.params.match(Lw) && (bb.params = bb.params.replace(Lw, "$1-$2"))
          }
        })
      },
      Ow = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const bb = [];
          return {
            Rule: function(wb) {
              -1 === bb.indexOf(wb) && (bb.push(wb), wb.selectors.forEach((function(bb) {
                bb.includes(":hover") && (wb.selector += ",\n" + bb.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function Uw(bb) {
      return bb && bb.__esModule && Object.prototype.hasOwnProperty.call(bb, "default") ? bb.default : bb
    }

    function tw(bb) {
      if (bb.__esModule) return bb;
      var wb = bb.default;
      if ("function" == typeof wb) {
        var Mb = function bb() {
          return this instanceof bb ? Reflect.construct(wb, arguments, this.constructor) : wb.apply(this, arguments)
        };
        Mb.prototype = wb.prototype
      } else Mb = {};
      return Object.defineProperty(Mb, "__esModule", {
        value: !0
      }), Object.keys(bb).forEach((function(wb) {
        var eb = Object.getOwnPropertyDescriptor(bb, wb);
        Object.defineProperty(Mb, wb, eb.get ? eb : {
          enumerable: !0,
          get: function() {
            return bb[wb]
          }
        })
      })), Mb
    }
    var Cw, Ew = {
      exports: {}
    };

    function Fw() {
      if (Cw) return Ew.exports;
      Cw = 1;
      var bb = String,
        wb = function() {
          return {
            isColorSupported: !1,
            reset: bb,
            bold: bb,
            dim: bb,
            italic: bb,
            underline: bb,
            inverse: bb,
            hidden: bb,
            strikethrough: bb,
            black: bb,
            red: bb,
            green: bb,
            yellow: bb,
            blue: bb,
            magenta: bb,
            cyan: bb,
            white: bb,
            gray: bb,
            bgBlack: bb,
            bgRed: bb,
            bgGreen: bb,
            bgYellow: bb,
            bgBlue: bb,
            bgMagenta: bb,
            bgCyan: bb,
            bgWhite: bb
          }
        };
      return Ew.exports = wb(), Ew.exports.createColors = wb, Ew.exports
    }
    const Bw = tw(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var sw, mw;

    function hw() {
      if (mw) return sw;
      mw = 1;
      let bb = Fw(),
        wb = Bw;
      class Mb extends Error {
        constructor(bb, wb, eb, Hb, pb, Vb) {
          super(bb), this.name = "CssSyntaxError", this.reason = bb, pb && (this.file = pb), Hb && (this.source = Hb), Vb && (this.plugin = Vb), "undefined" !== typeof wb && "undefined" !== typeof eb && ("number" === typeof wb ? (this.line = wb, this.column = eb) : (this.line = wb.line, this.column = wb.column, this.endLine = eb.line, this.endColumn = eb.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Mb)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(Mb) {
          if (!this.source) return "";
          let eb = this.source;
          null == Mb && (Mb = bb.isColorSupported), wb && Mb && (eb = wb(eb));
          let Hb, pb, Vb = eb.split(/\r?\n/),
            gb = Math.max(this.line - 3, 0),
            lb = Math.min(this.line + 2, Vb.length),
            Lb = String(lb).length;
          if (Mb) {
            let {
              bold: wb,
              gray: Mb,
              red: eb
            } = bb.createColors(!0);
            Hb = bb => wb(eb(bb)), pb = bb => Mb(bb)
          } else Hb = pb = bb => bb;
          return Vb.slice(gb, lb).map(((bb, wb) => {
            let Mb = gb + 1 + wb,
              eb = " " + (" " + Mb).slice(-Lb) + " | ";
            if (Mb === this.line) {
              let wb = pb(eb.replace(/\d/g, " ")) + bb.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Hb(">") + pb(eb) + bb + "\n " + wb + Hb("^")
            }
            return " " + pb(eb) + bb
          })).join("\n")
        }
        toString() {
          let bb = this.showSourceCode();
          return bb && (bb = "\n\n" + bb + "\n"), this.name + ": " + this.message + bb
        }
      }
      return sw = Mb, Mb.default = Mb, sw
    }
    var zw, Xw, xw, jw, Kw, rw, Rw, Dw, Yw, Zw, fw, Aw, Ww, Jw, Sw, Nw, vw, Qw, Gw, qw, aw, iw, uw, dw, Pw, nw, yw, ow, Tw, kw, bM, wM, MM, eM, HM, pM, VM, gM, lM, LM, IM, OM, UM, tM, CM, EM, FM, BM, sM, mM, hM, zM, XM, xM = {};

    function jM() {
      return zw || (zw = 1, xM.isClean = Symbol("isClean"), xM.my = Symbol("my")), xM
    }

    function KM() {
      if (xw) return Xw;
      xw = 1;
      const bb = {
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
      class wb {
        constructor(bb) {
          this.builder = bb
        }
        atrule(bb, wb) {
          let Mb = "@" + bb.name,
            eb = bb.params ? this.rawValue(bb, "params") : "";
          if ("undefined" !== typeof bb.raws.afterName ? Mb += bb.raws.afterName : eb && (Mb += " "), bb.nodes) this.block(bb, Mb + eb);
          else {
            let Hb = (bb.raws.between || "") + (wb ? ";" : "");
            this.builder(Mb + eb + Hb, bb)
          }
        }
        beforeAfter(bb, wb) {
          let Mb;
          Mb = "decl" === bb.type ? this.raw(bb, null, "beforeDecl") : "comment" === bb.type ? this.raw(bb, null, "beforeComment") : "before" === wb ? this.raw(bb, null, "beforeRule") : this.raw(bb, null, "beforeClose");
          let eb = bb.parent,
            Hb = 0;
          for (; eb && "root" !== eb.type;) Hb += 1, eb = eb.parent;
          if (Mb.includes("\n")) {
            let wb = this.raw(bb, null, "indent");
            if (wb.length)
              for (let bb = 0; bb < Hb; bb++) Mb += wb
          }
          return Mb
        }
        block(bb, wb) {
          let Mb, eb = this.raw(bb, "between", "beforeOpen");
          this.builder(wb + eb + "{", bb, "start"), bb.nodes && bb.nodes.length ? (this.body(bb), Mb = this.raw(bb, "after")) : Mb = this.raw(bb, "after", "emptyBody"), Mb && this.builder(Mb), this.builder("}", bb, "end")
        }
        body(bb) {
          let wb = bb.nodes.length - 1;
          for (; wb > 0 && "comment" === bb.nodes[wb].type;) wb -= 1;
          let Mb = this.raw(bb, "semicolon");
          for (let eb = 0; eb < bb.nodes.length; eb++) {
            let Hb = bb.nodes[eb],
              pb = this.raw(Hb, "before");
            pb && this.builder(pb), this.stringify(Hb, wb !== eb || Mb)
          }
        }
        comment(bb) {
          let wb = this.raw(bb, "left", "commentLeft"),
            Mb = this.raw(bb, "right", "commentRight");
          this.builder("/*" + wb + bb.text + Mb + "*/", bb)
        }
        decl(bb, wb) {
          let Mb = this.raw(bb, "between", "colon"),
            eb = bb.prop + Mb + this.rawValue(bb, "value");
          bb.important && (eb += bb.raws.important || " !important"), wb && (eb += ";"), this.builder(eb, bb)
        }
        document(bb) {
          this.body(bb)
        }
        raw(wb, Mb, eb) {
          let Hb;
          if (eb || (eb = Mb), Mb && (Hb = wb.raws[Mb], "undefined" !== typeof Hb)) return Hb;
          let pb = wb.parent;
          if ("before" === eb) {
            if (!pb || "root" === pb.type && pb.first === wb) return "";
            if (pb && "document" === pb.type) return ""
          }
          if (!pb) return bb[eb];
          let Vb = wb.root();
          if (Vb.rawCache || (Vb.rawCache = {}), "undefined" !== typeof Vb.rawCache[eb]) return Vb.rawCache[eb];
          if ("before" === eb || "after" === eb) return this.beforeAfter(wb, eb);
          {
            let bb = "raw" + ((gb = eb)[0].toUpperCase() + gb.slice(1));
            this[bb] ? Hb = this[bb](Vb, wb) : Vb.walk((bb => {
              if (Hb = bb.raws[Mb], "undefined" !== typeof Hb) return !1
            }))
          }
          var gb;
          return "undefined" === typeof Hb && (Hb = bb[eb]), Vb.rawCache[eb] = Hb, Hb
        }
        rawBeforeClose(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && bb.nodes.length > 0 && "undefined" !== typeof bb.raws.after) return wb = bb.raws.after, wb.includes("\n") && (wb = wb.replace(/[^\n]+$/, "")), !1
          })), wb && (wb = wb.replace(/\S/g, "")), wb
        }
        rawBeforeComment(bb, wb) {
          let Mb;
          return bb.walkComments((bb => {
            if ("undefined" !== typeof bb.raws.before) return Mb = bb.raws.before, Mb.includes("\n") && (Mb = Mb.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Mb ? Mb = this.raw(wb, null, "beforeDecl") : Mb && (Mb = Mb.replace(/\S/g, "")), Mb
        }
        rawBeforeDecl(bb, wb) {
          let Mb;
          return bb.walkDecls((bb => {
            if ("undefined" !== typeof bb.raws.before) return Mb = bb.raws.before, Mb.includes("\n") && (Mb = Mb.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Mb ? Mb = this.raw(wb, null, "beforeRule") : Mb && (Mb = Mb.replace(/\S/g, "")), Mb
        }
        rawBeforeOpen(bb) {
          let wb;
          return bb.walk((bb => {
            if ("decl" !== bb.type && (wb = bb.raws.between, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawBeforeRule(bb) {
          let wb;
          return bb.walk((Mb => {
            if (Mb.nodes && (Mb.parent !== bb || bb.first !== Mb) && "undefined" !== typeof Mb.raws.before) return wb = Mb.raws.before, wb.includes("\n") && (wb = wb.replace(/[^\n]+$/, "")), !1
          })), wb && (wb = wb.replace(/\S/g, "")), wb
        }
        rawColon(bb) {
          let wb;
          return bb.walkDecls((bb => {
            if ("undefined" !== typeof bb.raws.between) return wb = bb.raws.between.replace(/[^\s:]/g, ""), !1
          })), wb
        }
        rawEmptyBody(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && 0 === bb.nodes.length && (wb = bb.raws.after, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawIndent(bb) {
          if (bb.raws.indent) return bb.raws.indent;
          let wb;
          return bb.walk((Mb => {
            let eb = Mb.parent;
            if (eb && eb !== bb && eb.parent && eb.parent === bb && "undefined" !== typeof Mb.raws.before) {
              let bb = Mb.raws.before.split("\n");
              return wb = bb[bb.length - 1], wb = wb.replace(/\S/g, ""), !1
            }
          })), wb
        }
        rawSemicolon(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && bb.nodes.length && "decl" === bb.last.type && (wb = bb.raws.semicolon, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawValue(bb, wb) {
          let Mb = bb[wb],
            eb = bb.raws[wb];
          return eb && eb.value === Mb ? eb.raw : Mb
        }
        root(bb) {
          this.body(bb), bb.raws.after && this.builder(bb.raws.after)
        }
        rule(bb) {
          this.block(bb, this.rawValue(bb, "selector")), bb.raws.ownSemicolon && this.builder(bb.raws.ownSemicolon, bb, "end")
        }
        stringify(bb, wb) {
          if (!this[bb.type]) throw new Error("Unknown AST node type " + bb.type + ". Maybe you need to change PostCSS stringifier.");
          this[bb.type](bb, wb)
        }
      }
      return Xw = wb, wb.default = wb, Xw
    }

    function rM() {
      if (Kw) return jw;
      Kw = 1;
      let bb = KM();

      function wb(wb, Mb) {
        new bb(Mb).stringify(wb)
      }
      return jw = wb, wb.default = wb, jw
    }

    function RM() {
      if (Rw) return rw;
      Rw = 1;
      let {
        isClean: bb,
        my: wb
      } = jM(), Mb = hw(), eb = KM(), Hb = rM();

      function pb(bb, wb) {
        let Mb = new bb.constructor;
        for (let eb in bb) {
          if (!Object.prototype.hasOwnProperty.call(bb, eb)) continue;
          if ("proxyCache" === eb) continue;
          let Hb = bb[eb],
            Vb = typeof Hb;
          "parent" === eb && "object" === Vb ? wb && (Mb[eb] = wb) : "source" === eb ? Mb[eb] = Hb : Array.isArray(Hb) ? Mb[eb] = Hb.map((bb => pb(bb, Mb))) : ("object" === Vb && null !== Hb && (Hb = pb(Hb)), Mb[eb] = Hb)
        }
        return Mb
      }
      class Vb {
        constructor() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[bb] = !1, this[wb] = !0;
          for (let bb in Mb)
            if ("nodes" === bb) {
              this.nodes = [];
              for (let wb of Mb[bb]) "function" === typeof wb.clone ? this.append(wb.clone()) : this.append(wb)
            } else this[bb] = Mb[bb]
        }
        addToError(bb) {
          if (bb.postcssNode = this, bb.stack && this.source && /\n\s{4}at /.test(bb.stack)) {
            let wb = this.source;
            bb.stack = bb.stack.replace(/\n\s{4}at /, `$&${wb.input.from}:${wb.start.line}:${wb.start.column}$&`)
          }
          return bb
        }
        after(bb) {
          return this.parent.insertAfter(this, bb), this
        }
        assign() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let wb in bb) this[wb] = bb[wb];
          return this
        }
        before(bb) {
          return this.parent.insertBefore(this, bb), this
        }
        cleanRaws(bb) {
          delete this.raws.before, delete this.raws.after, bb || delete this.raws.between
        }
        clone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = pb(this);
          for (let Mb in bb) wb[Mb] = bb[Mb];
          return wb
        }
        cloneAfter() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = this.clone(bb);
          return this.parent.insertAfter(this, wb), wb
        }
        cloneBefore() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = this.clone(bb);
          return this.parent.insertBefore(this, wb), wb
        }
        error(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: Mb,
              start: eb
            } = this.rangeBy(wb);
            return this.source.input.error(bb, {
              column: eb.column,
              line: eb.line
            }, {
              column: Mb.column,
              line: Mb.line
            }, wb)
          }
          return new Mb(bb)
        }
        getProxyProcessor() {
          return {
            get: (bb, wb) => "proxyOf" === wb ? bb : "root" === wb ? () => bb.root().toProxy() : bb[wb],
            set: (bb, wb, Mb) => (bb[wb] === Mb || (bb[wb] = Mb, "prop" !== wb && "value" !== wb && "name" !== wb && "params" !== wb && "important" !== wb && "text" !== wb || bb.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[bb]) {
            this[bb] = !1;
            let wb = this;
            for (; wb = wb.parent;) wb[bb] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let bb = this.parent.index(this);
          return this.parent.nodes[bb + 1]
        }
        positionBy(bb, wb) {
          let Mb = this.source.start;
          if (bb.index) Mb = this.positionInside(bb.index, wb);
          else if (bb.word) {
            let eb = (wb = this.toString()).indexOf(bb.word); - 1 !== eb && (Mb = this.positionInside(eb, wb))
          }
          return Mb
        }
        positionInside(bb, wb) {
          let Mb = wb || this.toString(),
            eb = this.source.start.column,
            Hb = this.source.start.line;
          for (let pb = 0; pb < bb; pb++) "\n" === Mb[pb] ? (eb = 1, Hb += 1) : eb += 1;
          return {
            column: eb,
            line: Hb
          }
        }
        prev() {
          if (!this.parent) return;
          let bb = this.parent.index(this);
          return this.parent.nodes[bb - 1]
        }
        rangeBy(bb) {
          let wb = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            Mb = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: wb.column + 1,
              line: wb.line
            };
          if (bb.word) {
            let eb = this.toString(),
              Hb = eb.indexOf(bb.word); - 1 !== Hb && (wb = this.positionInside(Hb, eb), Mb = this.positionInside(Hb + bb.word.length, eb))
          } else bb.start ? wb = {
            column: bb.start.column,
            line: bb.start.line
          } : bb.index && (wb = this.positionInside(bb.index)), bb.end ? Mb = {
            column: bb.end.column,
            line: bb.end.line
          } : "number" === typeof bb.endIndex ? Mb = this.positionInside(bb.endIndex) : bb.index && (Mb = this.positionInside(bb.index + 1));
          return (Mb.line < wb.line || Mb.line === wb.line && Mb.column <= wb.column) && (Mb = {
            column: wb.column + 1,
            line: wb.line
          }), {
            end: Mb,
            start: wb
          }
        }
        raw(bb, wb) {
          return (new eb).raw(this, bb, wb)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let eb = this,
              Hb = !1;
            for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
            for (let bb of wb) bb === this ? Hb = !0 : Hb ? (this.parent.insertAfter(eb, bb), eb = bb) : this.parent.insertBefore(eb, bb);
            Hb || this.remove()
          }
          return this
        }
        root() {
          let bb = this;
          for (; bb.parent && "document" !== bb.parent.type;) bb = bb.parent;
          return bb
        }
        toJSON(bb, wb) {
          let Mb = {},
            eb = null == wb;
          wb = wb || new Map;
          let Hb = 0;
          for (let pb in this) {
            if (!Object.prototype.hasOwnProperty.call(this, pb)) continue;
            if ("parent" === pb || "proxyCache" === pb) continue;
            let bb = this[pb];
            if (Array.isArray(bb)) Mb[pb] = bb.map((bb => "object" === typeof bb && bb.toJSON ? bb.toJSON(null, wb) : bb));
            else if ("object" === typeof bb && bb.toJSON) Mb[pb] = bb.toJSON(null, wb);
            else if ("source" === pb) {
              let eb = wb.get(bb.input);
              null == eb && (eb = Hb, wb.set(bb.input, Hb), Hb++), Mb[pb] = {
                end: bb.end,
                inputId: eb,
                start: bb.start
              }
            } else Mb[pb] = bb
          }
          return eb && (Mb.inputs = [...wb.keys()].map((bb => bb.toJSON()))), Mb
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb;
          bb.stringify && (bb = bb.stringify);
          let wb = "";
          return bb(this, (bb => {
            wb += bb
          })), wb
        }
        warn(bb, wb, Mb) {
          let eb = {
            node: this
          };
          for (let Hb in Mb) eb[Hb] = Mb[Hb];
          return bb.warn(wb, eb)
        }
        get proxyOf() {
          return this
        }
      }
      return rw = Vb, Vb.default = Vb, rw
    }

    function DM() {
      if (Yw) return Dw;
      Yw = 1;
      let bb = RM();
      class wb extends bb {
        constructor(bb) {
          bb && "undefined" !== typeof bb.value && "string" !== typeof bb.value && (bb = {
            ...bb,
            value: String(bb.value)
          }), super(bb), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Dw = wb, wb.default = wb, Dw
    }

    function cM() {
      if (fw) return Zw;
      fw = 1;
      return Zw = {
        nanoid: function() {
          let bb = "",
            wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; wb--;) bb += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return bb
        },
        customAlphabet: function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let Mb = "",
              eb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb;
            for (; eb--;) Mb += bb[Math.random() * bb.length | 0];
            return Mb
          }
        }
      }, Zw
    }

    function YM() {
      if (Ww) return Aw;
      Ww = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Bw, {
        existsSync: Mb,
        readFileSync: eb
      } = Bw, {
        dirname: Hb,
        join: pb
      } = Bw;
      class Vb {
        constructor(bb, wb) {
          if (!1 === wb.map) return;
          this.loadAnnotation(bb), this.inline = this.startWith(this.annotation, "data:");
          let Mb = wb.map ? wb.map.prev : void 0,
            eb = this.loadMap(wb.from, Mb);
          !this.mapFile && wb.from && (this.mapFile = wb.from), this.mapFile && (this.root = Hb(this.mapFile)), eb && (this.text = eb)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new bb(this.text)), this.consumerCache
        }
        decodeInline(bb) {
          if (/^data:application\/json;charset=utf-?8,/.test(bb) || /^data:application\/json,/.test(bb)) return decodeURIComponent(bb.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(bb) || /^data:application\/json;base64,/.test(bb)) return wb = bb.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(wb, "base64").toString() : window.atob(wb);
          var wb;
          let Mb = bb.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + Mb)
        }
        getAnnotationURL(bb) {
          return bb.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(bb) {
          return "object" === typeof bb && ("string" === typeof bb.mappings || "string" === typeof bb._mappings || Array.isArray(bb.sections))
        }
        loadAnnotation(bb) {
          let wb = bb.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!wb) return;
          let Mb = bb.lastIndexOf(wb.pop()),
            eb = bb.indexOf("*/", Mb);
          Mb > -1 && eb > -1 && (this.annotation = this.getAnnotationURL(bb.substring(Mb, eb)))
        }
        loadFile(bb) {
          if (this.root = Hb(bb), Mb(bb)) return this.mapFile = bb, eb(bb, "utf-8").toString().trim()
        }
        loadMap(Mb, eb) {
          if (!1 === eb) return !1;
          if (eb) {
            if ("string" === typeof eb) return eb;
            if ("function" !== typeof eb) {
              if (eb instanceof bb) return wb.fromSourceMap(eb).toString();
              if (eb instanceof wb) return eb.toString();
              if (this.isMap(eb)) return JSON.stringify(eb);
              throw new Error("Unsupported previous source map format: " + eb.toString())
            } {
              let bb = eb(Mb);
              if (bb) {
                let wb = this.loadFile(bb);
                if (!wb) throw new Error("Unable to load previous source map: " + bb.toString());
                return wb
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let bb = this.annotation;
              return Mb && (bb = pb(Hb(Mb), bb)), this.loadFile(bb)
            }
          }
        }
        startWith(bb, wb) {
          return !!bb && bb.substr(0, wb.length) === wb
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return Aw = Vb, Vb.default = Vb, Aw
    }

    function ZM() {
      if (Sw) return Jw;
      Sw = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Bw, {
        fileURLToPath: Mb,
        pathToFileURL: eb
      } = Bw, {
        isAbsolute: Hb,
        resolve: pb
      } = Bw, {
        nanoid: Vb
      } = cM(), gb = Bw, lb = hw(), Lb = YM(), Ib = Symbol("fromOffsetCache"), Ob = Boolean(bb && wb), Ub = Boolean(pb && Hb);
      class tb {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === bb || "undefined" === typeof bb || "object" === typeof bb && !bb.toString) throw new Error(`PostCSS received ${bb} instead of CSS string`);
          if (this.css = bb.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, wb.from && (!Ub || /^\w+:\/\//.test(wb.from) || Hb(wb.from) ? this.file = wb.from : this.file = pb(wb.from)), Ub && Ob) {
            let bb = new Lb(this.css, wb);
            if (bb.text) {
              this.map = bb;
              let wb = bb.consumer().file;
              !this.file && wb && (this.file = this.mapResolve(wb))
            }
          }
          this.file || (this.id = "<input css " + Vb(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(bb, wb, Mb) {
          let Hb, pb, Vb, gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (wb && "object" === typeof wb) {
            let bb = wb,
              eb = Mb;
            if ("number" === typeof bb.offset) {
              let eb = this.fromOffset(bb.offset);
              wb = eb.line, Mb = eb.col
            } else wb = bb.line, Mb = bb.column;
            if ("number" === typeof eb.offset) {
              let bb = this.fromOffset(eb.offset);
              pb = bb.line, Vb = bb.col
            } else pb = eb.line, Vb = eb.column
          } else if (!Mb) {
            let bb = this.fromOffset(wb);
            wb = bb.line, Mb = bb.col
          }
          let Lb = this.origin(wb, Mb, pb, Vb);
          return Hb = Lb ? new lb(bb, void 0 === Lb.endLine ? Lb.line : {
            column: Lb.column,
            line: Lb.line
          }, void 0 === Lb.endLine ? Lb.column : {
            column: Lb.endColumn,
            line: Lb.endLine
          }, Lb.source, Lb.file, gb.plugin) : new lb(bb, void 0 === pb ? wb : {
            column: Mb,
            line: wb
          }, void 0 === pb ? Mb : {
            column: Vb,
            line: pb
          }, this.css, this.file, gb.plugin), Hb.input = {
            column: Mb,
            endColumn: Vb,
            endLine: pb,
            line: wb,
            source: this.css
          }, this.file && (eb && (Hb.input.url = eb(this.file).toString()), Hb.input.file = this.file), Hb
        }
        fromOffset(bb) {
          let wb, Mb;
          if (this[Ib]) Mb = this[Ib];
          else {
            let bb = this.css.split("\n");
            Mb = new Array(bb.length);
            let wb = 0;
            for (let eb = 0, Hb = bb.length; eb < Hb; eb++) Mb[eb] = wb, wb += bb[eb].length + 1;
            this[Ib] = Mb
          }
          wb = Mb[Mb.length - 1];
          let eb = 0;
          if (bb >= wb) eb = Mb.length - 1;
          else {
            let wb, Hb = Mb.length - 2;
            for (; eb < Hb;)
              if (wb = eb + (Hb - eb >> 1), bb < Mb[wb]) Hb = wb - 1;
              else {
                if (!(bb >= Mb[wb + 1])) {
                  eb = wb;
                  break
                }
                eb = wb + 1
              }
          }
          return {
            col: bb - Mb[eb] + 1,
            line: eb + 1
          }
        }
        mapResolve(bb) {
          return /^\w+:\/\//.test(bb) ? bb : pb(this.map.consumer().sourceRoot || this.map.root || ".", bb)
        }
        origin(bb, wb, pb, Vb) {
          if (!this.map) return !1;
          let gb, lb, Lb = this.map.consumer(),
            Ib = Lb.originalPositionFor({
              column: wb,
              line: bb
            });
          if (!Ib.source) return !1;
          "number" === typeof pb && (gb = Lb.originalPositionFor({
            column: Vb,
            line: pb
          })), lb = Hb(Ib.source) ? eb(Ib.source) : new URL(Ib.source, this.map.consumer().sourceRoot || eb(this.map.mapFile));
          let Ob = {
            column: Ib.column,
            endColumn: gb && gb.column,
            endLine: gb && gb.line,
            line: Ib.line,
            url: lb.toString()
          };
          if ("file:" === lb.protocol) {
            if (!Mb) throw new Error("file: protocol is not available in this PostCSS build");
            Ob.file = Mb(lb)
          }
          let Ub = Lb.sourceContentFor(Ib.source);
          return Ub && (Ob.source = Ub), Ob
        }
        toJSON() {
          let bb = {};
          for (let wb of ["hasBOM", "css", "file", "id"]) null != this[wb] && (bb[wb] = this[wb]);
          return this.map && (bb.map = {
            ...this.map
          }, bb.map.consumerCache && (bb.map.consumerCache = void 0)), bb
        }
        get from() {
          return this.file || this.id
        }
      }
      return Jw = tb, tb.default = tb, gb && gb.registerInput && gb.registerInput(tb), Jw
    }

    function fM() {
      if (vw) return Nw;
      vw = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Bw, {
        dirname: Mb,
        relative: eb,
        resolve: Hb,
        sep: pb
      } = Bw, {
        pathToFileURL: Vb
      } = Bw, gb = ZM(), lb = Boolean(bb && wb), Lb = Boolean(Mb && Hb && eb && pb);
      return Nw = class {
        constructor(bb, wb, Mb, eb) {
          this.stringify = bb, this.mapOpts = Mb.map || {}, this.root = wb, this.opts = Mb, this.css = eb, this.originalCSS = eb, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let bb;
          bb = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let wb = "\n";
          this.css.includes("\r\n") && (wb = "\r\n"), this.css += wb + "/*# sourceMappingURL=" + bb + " */"
        }
        applyPrevMaps() {
          for (let wb of this.previous()) {
            let eb, Hb = this.toUrl(this.path(wb.file)),
              pb = wb.root || Mb(wb.file);
            !1 === this.mapOpts.sourcesContent ? (eb = new bb(wb.text), eb.sourcesContent && (eb.sourcesContent = null)) : eb = wb.consumer(), this.map.applySourceMap(eb, Hb, this.toUrl(this.path(pb)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let bb;
              for (let wb = this.root.nodes.length - 1; wb >= 0; wb--) bb = this.root.nodes[wb], "comment" === bb.type && 0 === bb.text.indexOf("# sourceMappingURL=") && this.root.removeChild(wb)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Lb && lb && this.isMap()) return this.generateMap();
          {
            let bb = "";
            return this.stringify(this.root, (wb => {
              bb += wb
            })), [bb]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let bb = this.previous()[0].consumer();
            bb.file = this.outputFile(), this.map = wb.fromSourceMap(bb, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new wb({
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
          this.css = "", this.map = new wb({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let bb, Mb, eb = 1,
            Hb = 1,
            pb = "<no source>",
            Vb = {
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
          this.stringify(this.root, ((wb, gb, lb) => {
            if (this.css += wb, gb && "end" !== lb && (Vb.generated.line = eb, Vb.generated.column = Hb - 1, gb.source && gb.source.start ? (Vb.source = this.sourcePath(gb), Vb.original.line = gb.source.start.line, Vb.original.column = gb.source.start.column - 1, this.map.addMapping(Vb)) : (Vb.source = pb, Vb.original.line = 1, Vb.original.column = 0, this.map.addMapping(Vb))), bb = wb.match(/\n/g), bb ? (eb += bb.length, Mb = wb.lastIndexOf("\n"), Hb = wb.length - Mb) : Hb += wb.length, gb && "start" !== lb) {
              let bb = gb.parent || {
                raws: {}
              };
              ("decl" === gb.type || "atrule" === gb.type && !gb.nodes) && gb === bb.last && !bb.raws.semicolon || (gb.source && gb.source.end ? (Vb.source = this.sourcePath(gb), Vb.original.line = gb.source.end.line, Vb.original.column = gb.source.end.column - 1, Vb.generated.line = eb, Vb.generated.column = Hb - 2, this.map.addMapping(Vb)) : (Vb.source = pb, Vb.original.line = 1, Vb.original.column = 0, Vb.generated.line = eb, Vb.generated.column = Hb - 1, this.map.addMapping(Vb)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((bb => bb.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let bb = this.mapOpts.annotation;
          return ("undefined" === typeof bb || !0 === bb) && (!this.previous().length || this.previous().some((bb => bb.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((bb => bb.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(bb) {
          if (this.mapOpts.absolute) return bb;
          if (60 === bb.charCodeAt(0)) return bb;
          if (/^\w+:\/\//.test(bb)) return bb;
          let wb = this.memoizedPaths.get(bb);
          if (wb) return wb;
          let pb = this.opts.to ? Mb(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (pb = Mb(Hb(pb, this.mapOpts.annotation)));
          let Vb = eb(pb, bb);
          return this.memoizedPaths.set(bb, Vb), Vb
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((bb => {
              if (bb.source && bb.source.input.map) {
                let wb = bb.source.input.map;
                this.previousMaps.includes(wb) || this.previousMaps.push(wb)
              }
            }));
            else {
              let bb = new gb(this.originalCSS, this.opts);
              bb.map && this.previousMaps.push(bb.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let bb = {};
          if (this.root) this.root.walk((wb => {
            if (wb.source) {
              let Mb = wb.source.input.from;
              if (Mb && !bb[Mb]) {
                bb[Mb] = !0;
                let eb = this.usesFileUrls ? this.toFileUrl(Mb) : this.toUrl(this.path(Mb));
                this.map.setSourceContent(eb, wb.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let bb = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(bb, this.css)
          }
        }
        sourcePath(bb) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(bb.source.input.from) : this.toUrl(this.path(bb.source.input.from))
        }
        toBase64(bb) {
          return Buffer ? Buffer.from(bb).toString("base64") : window.btoa(unescape(encodeURIComponent(bb)))
        }
        toFileUrl(bb) {
          let wb = this.memoizedFileURLs.get(bb);
          if (wb) return wb;
          if (Vb) {
            let wb = Vb(bb).toString();
            return this.memoizedFileURLs.set(bb, wb), wb
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(bb) {
          let wb = this.memoizedURLs.get(bb);
          if (wb) return wb;
          "\\" === pb && (bb = bb.replace(/\\/g, "/"));
          let Mb = encodeURI(bb).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(bb, Mb), Mb
        }
      }
    }

    function AM() {
      if (Gw) return Qw;
      Gw = 1;
      let bb = RM();
      class wb extends bb {
        constructor(bb) {
          super(bb), this.type = "comment"
        }
      }
      return Qw = wb, wb.default = wb, Qw
    }

    function WM() {
      if (aw) return qw;
      aw = 1;
      let bb, wb, Mb, eb, {
          isClean: Hb,
          my: pb
        } = jM(),
        Vb = DM(),
        gb = AM(),
        lb = RM();

      function Lb(bb) {
        return bb.map((bb => (bb.nodes && (bb.nodes = Lb(bb.nodes)), delete bb.source, bb)))
      }

      function Ib(bb) {
        if (bb[Hb] = !1, bb.proxyOf.nodes)
          for (let wb of bb.proxyOf.nodes) Ib(wb)
      }
      class Ob extends lb {
        append() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          for (let eb of wb) {
            let bb = this.normalize(eb, this.last);
            for (let wb of bb) this.proxyOf.nodes.push(wb)
          }
          return this.markDirty(), this
        }
        cleanRaws(bb) {
          if (super.cleanRaws(bb), this.nodes)
            for (let wb of this.nodes) wb.cleanRaws(bb)
        }
        each(bb) {
          if (!this.proxyOf.nodes) return;
          let wb, Mb, eb = this.getIterator();
          for (; this.indexes[eb] < this.proxyOf.nodes.length && (wb = this.indexes[eb], Mb = bb(this.proxyOf.nodes[wb], wb), !1 !== Mb);) this.indexes[eb] += 1;
          return delete this.indexes[eb], Mb
        }
        every(bb) {
          return this.nodes.every(bb)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let bb = this.lastEach;
          return this.indexes[bb] = 0, bb
        }
        getProxyProcessor() {
          return {
            get: (bb, wb) => "proxyOf" === wb ? bb : bb[wb] ? "each" === wb || "string" === typeof wb && wb.startsWith("walk") ? function() {
              for (var Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
              return bb[wb](...eb.map((bb => "function" === typeof bb ? (wb, Mb) => bb(wb.toProxy(), Mb) : bb)))
            } : "every" === wb || "some" === wb ? Mb => bb[wb]((function(bb) {
              for (var wb = arguments.length, eb = new Array(wb > 1 ? wb - 1 : 0), Hb = 1; Hb < wb; Hb++) eb[Hb - 1] = arguments[Hb];
              return Mb(bb.toProxy(), ...eb)
            })) : "root" === wb ? () => bb.root().toProxy() : "nodes" === wb ? bb.nodes.map((bb => bb.toProxy())) : "first" === wb || "last" === wb ? bb[wb].toProxy() : bb[wb] : bb[wb],
            set: (bb, wb, Mb) => (bb[wb] === Mb || (bb[wb] = Mb, "name" !== wb && "params" !== wb && "selector" !== wb || bb.markDirty()), !0)
          }
        }
        index(bb) {
          return "number" === typeof bb ? bb : (bb.proxyOf && (bb = bb.proxyOf), this.proxyOf.nodes.indexOf(bb))
        }
        insertAfter(bb, wb) {
          let Mb, eb = this.index(bb),
            Hb = this.normalize(wb, this.proxyOf.nodes[eb]).reverse();
          eb = this.index(bb);
          for (let pb of Hb) this.proxyOf.nodes.splice(eb + 1, 0, pb);
          for (let pb in this.indexes) Mb = this.indexes[pb], eb < Mb && (this.indexes[pb] = Mb + Hb.length);
          return this.markDirty(), this
        }
        insertBefore(bb, wb) {
          let Mb, eb = this.index(bb),
            Hb = 0 === eb && "prepend",
            pb = this.normalize(wb, this.proxyOf.nodes[eb], Hb).reverse();
          eb = this.index(bb);
          for (let Vb of pb) this.proxyOf.nodes.splice(eb, 0, Vb);
          for (let Vb in this.indexes) Mb = this.indexes[Vb], eb <= Mb && (this.indexes[Vb] = Mb + pb.length);
          return this.markDirty(), this
        }
        normalize(eb, lb) {
          if ("string" === typeof eb) eb = Lb(bb(eb).nodes);
          else if ("undefined" === typeof eb) eb = [];
          else if (Array.isArray(eb)) {
            eb = eb.slice(0);
            for (let bb of eb) bb.parent && bb.parent.removeChild(bb, "ignore")
          } else if ("root" === eb.type && "document" !== this.type) {
            eb = eb.nodes.slice(0);
            for (let bb of eb) bb.parent && bb.parent.removeChild(bb, "ignore")
          } else if (eb.type) eb = [eb];
          else if (eb.prop) {
            if ("undefined" === typeof eb.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof eb.value && (eb.value = String(eb.value)), eb = [new Vb(eb)]
          } else if (eb.selector) eb = [new wb(eb)];
          else if (eb.name) eb = [new Mb(eb)];
          else {
            if (!eb.text) throw new Error("Unknown node type in node creation");
            eb = [new gb(eb)]
          }
          return eb.map((bb => (bb[pb] || Ob.rebuild(bb), (bb = bb.proxyOf).parent && bb.parent.removeChild(bb), bb[Hb] && Ib(bb), "undefined" === typeof bb.raws.before && lb && "undefined" !== typeof lb.raws.before && (bb.raws.before = lb.raws.before.replace(/\S/g, "")), bb.parent = this.proxyOf, bb)))
        }
        prepend() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          wb = wb.reverse();
          for (let eb of wb) {
            let bb = this.normalize(eb, this.first, "prepend").reverse();
            for (let wb of bb) this.proxyOf.nodes.unshift(wb);
            for (let wb in this.indexes) this.indexes[wb] = this.indexes[wb] + bb.length
          }
          return this.markDirty(), this
        }
        push(bb) {
          return bb.parent = this, this.proxyOf.nodes.push(bb), this
        }
        removeAll() {
          for (let bb of this.proxyOf.nodes) bb.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(bb) {
          let wb;
          bb = this.index(bb), this.proxyOf.nodes[bb].parent = void 0, this.proxyOf.nodes.splice(bb, 1);
          for (let Mb in this.indexes) wb = this.indexes[Mb], wb >= bb && (this.indexes[Mb] = wb - 1);
          return this.markDirty(), this
        }
        replaceValues(bb, wb, Mb) {
          return Mb || (Mb = wb, wb = {}), this.walkDecls((eb => {
            wb.props && !wb.props.includes(eb.prop) || wb.fast && !eb.value.includes(wb.fast) || (eb.value = eb.value.replace(bb, Mb))
          })), this.markDirty(), this
        }
        some(bb) {
          return this.nodes.some(bb)
        }
        walk(bb) {
          return this.each(((wb, Mb) => {
            let eb;
            try {
              eb = bb(wb, Mb)
            } catch (Hb) {
              throw wb.addToError(Hb)
            }
            return !1 !== eb && wb.walk && (eb = wb.walk(bb)), eb
          }))
        }
        walkAtRules(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("atrule" === Mb.type && bb.test(Mb.name)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("atrule" === Mb.type && Mb.name === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("atrule" === bb.type) return wb(bb, Mb)
          })))
        }
        walkComments(bb) {
          return this.walk(((wb, Mb) => {
            if ("comment" === wb.type) return bb(wb, Mb)
          }))
        }
        walkDecls(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("decl" === Mb.type && bb.test(Mb.prop)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("decl" === Mb.type && Mb.prop === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("decl" === bb.type) return wb(bb, Mb)
          })))
        }
        walkRules(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("rule" === Mb.type && bb.test(Mb.selector)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("rule" === Mb.type && Mb.selector === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("rule" === bb.type) return wb(bb, Mb)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return Ob.registerParse = wb => {
        bb = wb
      }, Ob.registerRule = bb => {
        wb = bb
      }, Ob.registerAtRule = bb => {
        Mb = bb
      }, Ob.registerRoot = bb => {
        eb = bb
      }, qw = Ob, Ob.default = Ob, Ob.rebuild = bb => {
        "atrule" === bb.type ? Object.setPrototypeOf(bb, Mb.prototype) : "rule" === bb.type ? Object.setPrototypeOf(bb, wb.prototype) : "decl" === bb.type ? Object.setPrototypeOf(bb, Vb.prototype) : "comment" === bb.type ? Object.setPrototypeOf(bb, gb.prototype) : "root" === bb.type && Object.setPrototypeOf(bb, eb.prototype), bb[pb] = !0, bb.nodes && bb.nodes.forEach((bb => {
          Ob.rebuild(bb)
        }))
      }, qw
    }

    function JM() {
      if (uw) return iw;
      uw = 1;
      let bb, wb, Mb = WM();
      class eb extends Mb {
        constructor(bb) {
          super({
            type: "document",
            ...bb
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new bb(new wb, this, Mb).stringify()
        }
      }
      return eb.registerLazyResult = wb => {
        bb = wb
      }, eb.registerProcessor = bb => {
        wb = bb
      }, iw = eb, eb.default = eb, iw
    }

    function SM() {
      if (Pw) return dw;
      Pw = 1;
      let bb = {};
      return dw = function(wb) {
        bb[wb] || (bb[wb] = !0, "undefined" !== typeof console && console.warn && console.warn(wb))
      }
    }

    function NM() {
      if (yw) return nw;
      yw = 1;
      class bb {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = bb, wb.node && wb.node.source) {
            let bb = wb.node.rangeBy(wb);
            this.line = bb.start.line, this.column = bb.start.column, this.endLine = bb.end.line, this.endColumn = bb.end.column
          }
          for (let Mb in wb) this[Mb] = wb[Mb]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return nw = bb, bb.default = bb, nw
    }

    function vM() {
      if (Tw) return ow;
      Tw = 1;
      let bb = NM();
      class wb {
        constructor(bb, wb, Mb) {
          this.processor = bb, this.messages = [], this.root = wb, this.opts = Mb, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Mb.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (Mb.plugin = this.lastPlugin.postcssPlugin);
          let eb = new bb(wb, Mb);
          return this.messages.push(eb), eb
        }
        warnings() {
          return this.messages.filter((bb => "warning" === bb.type))
        }
        get content() {
          return this.css
        }
      }
      return ow = wb, wb.default = wb, ow
    }

    function QM() {
      if (MM) return wM;
      MM = 1;
      let bb = WM();
      class wb extends bb {
        constructor(bb) {
          super(bb), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return wM = wb, wb.default = wb, bb.registerAtRule(wb), wM
    }

    function GM() {
      if (HM) return eM;
      HM = 1;
      let bb, wb, Mb = WM();
      class eb extends Mb {
        constructor(bb) {
          super(bb), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(bb, wb, Mb) {
          let eb = super.normalize(bb);
          if (wb)
            if ("prepend" === Mb) this.nodes.length > 1 ? wb.raws.before = this.nodes[1].raws.before : delete wb.raws.before;
            else if (this.first !== wb)
            for (let Hb of eb) Hb.raws.before = wb.raws.before;
          return eb
        }
        removeChild(bb, wb) {
          let Mb = this.index(bb);
          return !wb && 0 === Mb && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[Mb].raws.before), super.removeChild(bb)
        }
        toResult() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new bb(new wb, this, Mb).stringify()
        }
      }
      return eb.registerLazyResult = wb => {
        bb = wb
      }, eb.registerProcessor = bb => {
        wb = bb
      }, eM = eb, eb.default = eb, Mb.registerRoot(eb), eM
    }

    function qM() {
      if (VM) return pM;
      VM = 1;
      let bb = {
        comma: wb => bb.split(wb, [","], !0),
        space: wb => bb.split(wb, [" ", "\n", "\t"]),
        split(bb, wb, Mb) {
          let eb = [],
            Hb = "",
            pb = !1,
            Vb = 0,
            gb = !1,
            lb = "",
            Lb = !1;
          for (let Ib of bb) Lb ? Lb = !1 : "\\" === Ib ? Lb = !0 : gb ? Ib === lb && (gb = !1) : '"' === Ib || "'" === Ib ? (gb = !0, lb = Ib) : "(" === Ib ? Vb += 1 : ")" === Ib ? Vb > 0 && (Vb -= 1) : 0 === Vb && wb.includes(Ib) && (pb = !0), pb ? ("" !== Hb && eb.push(Hb.trim()), Hb = "", pb = !1) : Hb += Ib;
          return (Mb || "" !== Hb) && eb.push(Hb.trim()), eb
        }
      };
      return pM = bb, bb.default = bb, pM
    }

    function aM() {
      if (lM) return gM;
      lM = 1;
      let bb = WM(),
        wb = qM();
      class Mb extends bb {
        constructor(bb) {
          super(bb), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return wb.comma(this.selector)
        }
        set selectors(bb) {
          let wb = this.selector ? this.selector.match(/,\s*/) : null,
            Mb = wb ? wb[0] : "," + this.raw("between", "beforeOpen");
          this.selector = bb.join(Mb)
        }
      }
      return gM = Mb, Mb.default = Mb, bb.registerRule(Mb), gM
    }

    function iM() {
      if (IM) return LM;
      IM = 1;
      let bb = DM(),
        wb = function() {
          if (bM) return kw;
          bM = 1;
          const bb = "'".charCodeAt(0),
            wb = '"'.charCodeAt(0),
            Mb = "\\".charCodeAt(0),
            eb = "/".charCodeAt(0),
            Hb = "\n".charCodeAt(0),
            pb = " ".charCodeAt(0),
            Vb = "\f".charCodeAt(0),
            gb = "\t".charCodeAt(0),
            lb = "\r".charCodeAt(0),
            Lb = "[".charCodeAt(0),
            Ib = "]".charCodeAt(0),
            Ob = "(".charCodeAt(0),
            Ub = ")".charCodeAt(0),
            tb = "{".charCodeAt(0),
            Cb = "}".charCodeAt(0),
            Eb = ";".charCodeAt(0),
            Fb = "*".charCodeAt(0),
            Bb = ":".charCodeAt(0),
            sb = "@".charCodeAt(0),
            mb = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            hb = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            zb = /.[\r\n"'(/\\]/,
            Xb = /[\da-f]/i;
          return kw = function(xb) {
            let jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Jb = xb.css.valueOf(),
              Sb = Wb.ignoreErrors,
              Nb = Jb.length,
              vb = 0,
              Qb = [],
              Gb = [];

            function qb(bb) {
              throw xb.error("Unclosed " + bb, vb)
            }
            return {
              back: function(bb) {
                Gb.push(bb)
              },
              endOfFile: function() {
                return 0 === Gb.length && vb >= Nb
              },
              nextToken: function(xb) {
                if (Gb.length) return Gb.pop();
                if (vb >= Nb) return;
                let Wb = !!xb && xb.ignoreUnclosed;
                switch (jb = Jb.charCodeAt(vb), jb) {
                  case Hb:
                  case pb:
                  case gb:
                  case lb:
                  case Vb:
                    Kb = vb;
                    do {
                      Kb += 1, jb = Jb.charCodeAt(Kb)
                    } while (jb === pb || jb === Hb || jb === gb || jb === lb || jb === Vb);
                    Ab = ["space", Jb.slice(vb, Kb)], vb = Kb - 1;
                    break;
                  case Lb:
                  case Ib:
                  case tb:
                  case Cb:
                  case Bb:
                  case Eb:
                  case Ub: {
                    let bb = String.fromCharCode(jb);
                    Ab = [bb, bb, vb];
                    break
                  }
                  case Ob:
                    if (Zb = Qb.length ? Qb.pop()[1] : "", fb = Jb.charCodeAt(vb + 1), "url" === Zb && fb !== bb && fb !== wb && fb !== pb && fb !== Hb && fb !== gb && fb !== Vb && fb !== lb) {
                      Kb = vb;
                      do {
                        if (cb = !1, Kb = Jb.indexOf(")", Kb + 1), -1 === Kb) {
                          if (Sb || Wb) {
                            Kb = vb;
                            break
                          }
                          qb("bracket")
                        }
                        for (Yb = Kb; Jb.charCodeAt(Yb - 1) === Mb;) Yb -= 1, cb = !cb
                      } while (cb);
                      Ab = ["brackets", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb
                    } else Kb = Jb.indexOf(")", vb + 1), Rb = Jb.slice(vb, Kb + 1), -1 === Kb || zb.test(Rb) ? Ab = ["(", "(", vb] : (Ab = ["brackets", Rb, vb, Kb], vb = Kb);
                    break;
                  case bb:
                  case wb:
                    rb = jb === bb ? "'" : '"', Kb = vb;
                    do {
                      if (cb = !1, Kb = Jb.indexOf(rb, Kb + 1), -1 === Kb) {
                        if (Sb || Wb) {
                          Kb = vb + 1;
                          break
                        }
                        qb("string")
                      }
                      for (Yb = Kb; Jb.charCodeAt(Yb - 1) === Mb;) Yb -= 1, cb = !cb
                    } while (cb);
                    Ab = ["string", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  case sb:
                    mb.lastIndex = vb + 1, mb.test(Jb), Kb = 0 === mb.lastIndex ? Jb.length - 1 : mb.lastIndex - 2, Ab = ["at-word", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  case Mb:
                    for (Kb = vb, Db = !0; Jb.charCodeAt(Kb + 1) === Mb;) Kb += 1, Db = !Db;
                    if (jb = Jb.charCodeAt(Kb + 1), Db && jb !== eb && jb !== pb && jb !== Hb && jb !== gb && jb !== lb && jb !== Vb && (Kb += 1, Xb.test(Jb.charAt(Kb)))) {
                      for (; Xb.test(Jb.charAt(Kb + 1));) Kb += 1;
                      Jb.charCodeAt(Kb + 1) === pb && (Kb += 1)
                    }
                    Ab = ["word", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  default:
                    jb === eb && Jb.charCodeAt(vb + 1) === Fb ? (Kb = Jb.indexOf("*/", vb + 2) + 1, 0 === Kb && (Sb || Wb ? Kb = Jb.length : qb("comment")), Ab = ["comment", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb) : (hb.lastIndex = vb + 1, hb.test(Jb), Kb = 0 === hb.lastIndex ? Jb.length - 1 : hb.lastIndex - 2, Ab = ["word", Jb.slice(vb, Kb + 1), vb, Kb], Qb.push(Ab), vb = Kb)
                }
                return vb++, Ab
              },
              position: function() {
                return vb
              }
            }
          }, kw
        }(),
        Mb = AM(),
        eb = QM(),
        Hb = GM(),
        pb = aM();
      const Vb = {
        empty: !0,
        space: !0
      };
      return LM = class {
        constructor(bb) {
          this.input = bb, this.root = new Hb, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: bb,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(bb) {
          let wb, Mb, Hb, pb = new eb;
          pb.name = bb[1].slice(1), "" === pb.name && this.unnamedAtrule(pb, bb), this.init(pb, bb[2]);
          let Vb = !1,
            gb = !1,
            lb = [],
            Lb = [];
          for (; !this.tokenizer.endOfFile();) {
            if (wb = (bb = this.tokenizer.nextToken())[0], "(" === wb || "[" === wb ? Lb.push("(" === wb ? ")" : "]") : "{" === wb && Lb.length > 0 ? Lb.push("}") : wb === Lb[Lb.length - 1] && Lb.pop(), 0 === Lb.length) {
              if (";" === wb) {
                pb.source.end = this.Qm(bb[2]), pb.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === wb) {
                gb = !0;
                break
              }
              if ("}" === wb) {
                if (lb.length > 0) {
                  for (Hb = lb.length - 1, Mb = lb[Hb]; Mb && "space" === Mb[0];) Mb = lb[--Hb];
                  Mb && (pb.source.end = this.Qm(Mb[3] || Mb[2]), pb.source.end.offset++)
                }
                this.end(bb);
                break
              }
              lb.push(bb)
            } else lb.push(bb);
            if (this.tokenizer.endOfFile()) {
              Vb = !0;
              break
            }
          }
          pb.raws.between = this.spacesAndCommentsFromEnd(lb), lb.length ? (pb.raws.afterName = this.spacesAndCommentsFromStart(lb), this.raw(pb, "params", lb), Vb && (bb = lb[lb.length - 1], pb.source.end = this.Qm(bb[3] || bb[2]), pb.source.end.offset++, this.spaces = pb.raws.between, pb.raws.between = "")) : (pb.raws.afterName = "", pb.params = ""), gb && (pb.nodes = [], this.current = pb)
        }
        checkMissedSemicolon(bb) {
          let wb = this.colon(bb);
          if (!1 === wb) return;
          let Mb, eb = 0;
          for (let Hb = wb - 1; Hb >= 0 && (Mb = bb[Hb], "space" === Mb[0] || (eb += 1, 2 !== eb)); Hb--);
          throw this.input.error("Missed semicolon", "word" === Mb[0] ? Mb[3] + 1 : Mb[2])
        }
        colon(bb) {
          let wb, Mb, eb, Hb = 0;
          for (let [pb, Vb] of bb.entries()) {
            if (wb = Vb, Mb = wb[0], "(" === Mb && (Hb += 1), ")" === Mb && (Hb -= 1), 0 === Hb && ":" === Mb) {
              if (eb) {
                if ("word" === eb[0] && "progid" === eb[1]) continue;
                return pb
              }
              this.doubleColon(wb)
            }
            eb = wb
          }
          return !1
        }
        comment(bb) {
          let wb = new Mb;
          this.init(wb, bb[2]), wb.source.end = this.Qm(bb[3] || bb[2]), wb.source.end.offset++;
          let eb = bb[1].slice(2, -2);
          if (/^\s*$/.test(eb)) wb.text = "", wb.raws.left = eb, wb.raws.right = "";
          else {
            let bb = eb.match(/^(\s*)([^]*\S)(\s*)$/);
            wb.text = bb[2], wb.raws.left = bb[1], wb.raws.right = bb[3]
          }
        }
        createTokenizer() {
          this.tokenizer = wb(this.input)
        }
        decl(wb, Mb) {
          let eb = new bb;
          this.init(eb, wb[0][2]);
          let Hb, pb = wb[wb.length - 1];
          for (";" === pb[0] && (this.semicolon = !0, wb.pop()), eb.source.end = this.Qm(pb[3] || pb[2] || function(bb) {
              for (let wb = bb.length - 1; wb >= 0; wb--) {
                let Mb = bb[wb],
                  eb = Mb[3] || Mb[2];
                if (eb) return eb
              }
            }(wb)), eb.source.end.offset++;
            "word" !== wb[0][0];) 1 === wb.length && this.unknownWord(wb), eb.raws.before += wb.shift()[1];
          for (eb.source.start = this.Qm(wb[0][2]), eb.prop = ""; wb.length;) {
            let bb = wb[0][0];
            if (":" === bb || "space" === bb || "comment" === bb) break;
            eb.prop += wb.shift()[1]
          }
          for (eb.raws.between = ""; wb.length;) {
            if (Hb = wb.shift(), ":" === Hb[0]) {
              eb.raws.between += Hb[1];
              break
            }
            "word" === Hb[0] && /\w/.test(Hb[1]) && this.unknownWord([Hb]), eb.raws.between += Hb[1]
          }
          "_" !== eb.prop[0] && "*" !== eb.prop[0] || (eb.raws.before += eb.prop[0], eb.prop = eb.prop.slice(1));
          let Vb, gb = [];
          for (; wb.length && (Vb = wb[0][0], "space" === Vb || "comment" === Vb);) gb.push(wb.shift());
          this.precheckMissedSemicolon(wb);
          for (let bb = wb.length - 1; bb >= 0; bb--) {
            if (Hb = wb[bb], "!important" === Hb[1].toLowerCase()) {
              eb.important = !0;
              let Mb = this.stringFrom(wb, bb);
              Mb = this.spacesFromEnd(wb) + Mb, " !important" !== Mb && (eb.raws.important = Mb);
              break
            }
            if ("important" === Hb[1].toLowerCase()) {
              let Mb = wb.slice(0),
                Hb = "";
              for (let wb = bb; wb > 0; wb--) {
                let bb = Mb[wb][0];
                if (0 === Hb.trim().indexOf("!") && "space" !== bb) break;
                Hb = Mb.pop()[1] + Hb
              }
              0 === Hb.trim().indexOf("!") && (eb.important = !0, eb.raws.important = Hb, wb = Mb)
            }
            if ("space" !== Hb[0] && "comment" !== Hb[0]) break
          }
          wb.some((bb => "space" !== bb[0] && "comment" !== bb[0])) && (eb.raws.between += gb.map((bb => bb[1])).join(""), gb = []), this.raw(eb, "value", gb.concat(wb), Mb), eb.value.includes(":") && !Mb && this.checkMissedSemicolon(wb)
        }
        doubleColon(bb) {
          throw this.input.error("Double colon", {
            offset: bb[2]
          }, {
            offset: bb[2] + bb[1].length
          })
        }
        emptyRule(bb) {
          let wb = new pb;
          this.init(wb, bb[2]), wb.selector = "", wb.raws.between = "", this.current = wb
        }
        end(bb) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.Qm(bb[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(bb)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.Qm(this.tokenizer.position())
        }
        freeSemicolon(bb) {
          if (this.spaces += bb[1], this.current.nodes) {
            let bb = this.current.nodes[this.current.nodes.length - 1];
            bb && "rule" === bb.type && !bb.raws.ownSemicolon && (bb.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        Qm(bb) {
          let wb = this.input.fromOffset(bb);
          return {
            column: wb.col,
            line: wb.line,
            offset: bb
          }
        }
        init(bb, wb) {
          this.current.push(bb), bb.source = {
            input: this.input,
            start: this.Qm(wb)
          }, bb.raws.before = this.spaces, this.spaces = "", "comment" !== bb.type && (this.semicolon = !1)
        }
        other(bb) {
          let wb = !1,
            Mb = null,
            eb = !1,
            Hb = null,
            pb = [],
            Vb = bb[1].startsWith("--"),
            gb = [],
            lb = bb;
          for (; lb;) {
            if (Mb = lb[0], gb.push(lb), "(" === Mb || "[" === Mb) Hb || (Hb = lb), pb.push("(" === Mb ? ")" : "]");
            else if (Vb && eb && "{" === Mb) Hb || (Hb = lb), pb.push("}");
            else if (0 === pb.length) {
              if (";" === Mb) {
                if (eb) return void this.decl(gb, Vb);
                break
              }
              if ("{" === Mb) return void this.rule(gb);
              if ("}" === Mb) {
                this.tokenizer.back(gb.pop()), wb = !0;
                break
              }
              ":" === Mb && (eb = !0)
            } else Mb === pb[pb.length - 1] && (pb.pop(), 0 === pb.length && (Hb = null));
            lb = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (wb = !0), pb.length > 0 && this.unclosedBracket(Hb), wb && eb) {
            if (!Vb)
              for (; gb.length && (lb = gb[gb.length - 1][0], "space" === lb || "comment" === lb);) this.tokenizer.back(gb.pop());
            this.decl(gb, Vb)
          } else this.unknownWord(gb)
        }
        parse() {
          let bb;
          for (; !this.tokenizer.endOfFile();) switch (bb = this.tokenizer.nextToken(), bb[0]) {
            case "space":
              this.spaces += bb[1];
              break;
            case ";":
              this.freeSemicolon(bb);
              break;
            case "}":
              this.end(bb);
              break;
            case "comment":
              this.comment(bb);
              break;
            case "at-word":
              this.atrule(bb);
              break;
            case "{":
              this.emptyRule(bb);
              break;
            default:
              this.other(bb)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(bb, wb, Mb, eb) {
          let Hb, pb, gb, lb, Lb = Mb.length,
            Ib = "",
            Ob = !0;
          for (let Ub = 0; Ub < Lb; Ub += 1) Hb = Mb[Ub], pb = Hb[0], "space" !== pb || Ub !== Lb - 1 || eb ? "comment" === pb ? (lb = Mb[Ub - 1] ? Mb[Ub - 1][0] : "empty", gb = Mb[Ub + 1] ? Mb[Ub + 1][0] : "empty", Vb[lb] || Vb[gb] || "," === Ib.slice(-1) ? Ob = !1 : Ib += Hb[1]) : Ib += Hb[1] : Ob = !1;
          if (!Ob) {
            let eb = Mb.reduce(((bb, wb) => bb + wb[1]), "");
            bb.raws[wb] = {
              raw: eb,
              value: Ib
            }
          }
          bb[wb] = Ib
        }
        rule(bb) {
          bb.pop();
          let wb = new pb;
          this.init(wb, bb[0][2]), wb.raws.between = this.spacesAndCommentsFromEnd(bb), this.raw(wb, "selector", bb), this.current = wb
        }
        spacesAndCommentsFromEnd(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[bb.length - 1][0], "space" === wb || "comment" === wb);) Mb = bb.pop()[1] + Mb;
          return Mb
        }
        spacesAndCommentsFromStart(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[0][0], "space" === wb || "comment" === wb);) Mb += bb.shift()[1];
          return Mb
        }
        spacesFromEnd(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[bb.length - 1][0], "space" === wb);) Mb = bb.pop()[1] + Mb;
          return Mb
        }
        stringFrom(bb, wb) {
          let Mb = "";
          for (let eb = wb; eb < bb.length; eb++) Mb += bb[eb][1];
          return bb.splice(wb, bb.length - wb), Mb
        }
        unclosedBlock() {
          let bb = this.current.source.start;
          throw this.input.error("Unclosed block", bb.line, bb.column)
        }
        unclosedBracket(bb) {
          throw this.input.error("Unclosed bracket", {
            offset: bb[2]
          }, {
            offset: bb[2] + 1
          })
        }
        unexpectedClose(bb) {
          throw this.input.error("Unexpected }", {
            offset: bb[2]
          }, {
            offset: bb[2] + 1
          })
        }
        unknownWord(bb) {
          throw this.input.error("Unknown word", {
            offset: bb[0][2]
          }, {
            offset: bb[0][2] + bb[0][1].length
          })
        }
        unnamedAtrule(bb, wb) {
          throw this.input.error("At-rule without name", {
            offset: wb[2]
          }, {
            offset: wb[2] + wb[1].length
          })
        }
      }
    }

    function uM() {
      if (UM) return OM;
      UM = 1;
      let bb = WM(),
        wb = iM(),
        Mb = ZM();

      function eb(bb, eb) {
        let Hb = new Mb(bb, eb),
          pb = new wb(Hb);
        try {
          pb.parse()
        } catch (Vb) {
          throw Vb
        }
        return pb.root
      }
      return OM = eb, eb.default = eb, bb.registerParse(eb), OM
    }

    function dM() {
      if (CM) return tM;
      CM = 1;
      let {
        isClean: bb,
        my: wb
      } = jM(), Mb = fM(), eb = rM(), Hb = WM(), pb = JM(), Vb = (SM(), vM()), gb = uM(), lb = GM();
      const Lb = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        Ib = {
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
        Ob = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function Ub(bb) {
        return "object" === typeof bb && "function" === typeof bb.then
      }

      function tb(bb) {
        let wb = !1,
          Mb = Lb[bb.type];
        return "decl" === bb.type ? wb = bb.prop.toLowerCase() : "atrule" === bb.type && (wb = bb.name.toLowerCase()), wb && bb.append ? [Mb, Mb + "-" + wb, 0, Mb + "Exit", Mb + "Exit-" + wb] : wb ? [Mb, Mb + "-" + wb, Mb + "Exit", Mb + "Exit-" + wb] : bb.append ? [Mb, 0, Mb + "Exit"] : [Mb, Mb + "Exit"]
      }

      function Cb(bb) {
        let wb;
        return wb = "document" === bb.type ? ["Document", 0, "DocumentExit"] : "root" === bb.type ? ["Root", 0, "RootExit"] : tb(bb), {
          eventIndex: 0,
          events: wb,
          iterator: 0,
          node: bb,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Eb(wb) {
        return wb[bb] = !1, wb.nodes && wb.nodes.forEach((bb => Eb(bb))), wb
      }
      let Fb = {};
      class Bb {
        constructor(bb, Mb, eb) {
          let pb;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof Mb || null === Mb || "root" !== Mb.type && "document" !== Mb.type)
            if (Mb instanceof Bb || Mb instanceof Vb) pb = Eb(Mb.root), Mb.map && ("undefined" === typeof eb.map && (eb.map = {}), eb.map.inline || (eb.map.inline = !1), eb.map.prev = Mb.map);
            else {
              let bb = gb;
              eb.syntax && (bb = eb.syntax.parse), eb.parser && (bb = eb.parser), bb.parse && (bb = bb.parse);
              try {
                pb = bb(Mb, eb)
              } catch (lb) {
                this.processed = !0, this.error = lb
              }
              pb && !pb[wb] && Hb.rebuild(pb)
            }
          else pb = Eb(Mb);
          this.result = new Vb(bb, pb, eb), this.helpers = {
            ...Fb,
            postcss: Fb,
            result: this.result
          }, this.plugins = this.processor.plugins.map((bb => "object" === typeof bb && bb.prepare ? {
            ...bb,
            ...bb.prepare(this.result)
          } : bb))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (bb) {
          return this.async().catch(bb)
        } finally(bb) {
          return this.async().then(bb, bb)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(bb, wb) {
          let Mb = this.result.lastPlugin;
          try {
            wb && wb.addToError(bb), this.error = bb, "CssSyntaxError" !== bb.name || bb.plugin ? Mb.postcssVersion : (bb.plugin = Mb.postcssPlugin, bb.setMessage())
          } catch (eb) {
            console && console.error && console.error(eb)
          }
          return bb
        }
        prepareVisitors() {
          this.listeners = {};
          let bb = (bb, wb, Mb) => {
            this.listeners[wb] || (this.listeners[wb] = []), this.listeners[wb].push([bb, Mb])
          };
          for (let wb of this.plugins)
            if ("object" === typeof wb)
              for (let Mb in wb) {
                if (!Ib[Mb] && /^[A-Z]/.test(Mb)) throw new Error(`Unknown event ${Mb} in ${wb.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!Ob[Mb])
                  if ("object" === typeof wb[Mb])
                    for (let eb in wb[Mb]) bb(wb, "*" === eb ? Mb : Mb + "-" + eb.toLowerCase(), wb[Mb][eb]);
                  else "function" === typeof wb[Mb] && bb(wb, Mb, wb[Mb])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let bb = 0; bb < this.plugins.length; bb++) {
            let Mb = this.plugins[bb],
              eb = this.runOnRoot(Mb);
            if (Ub(eb)) try {
              await eb
            } catch (wb) {
              throw this.handleError(wb)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let wb = this.result.root;
            for (; !wb[bb];) {
              wb[bb] = !0;
              let eb = [Cb(wb)];
              for (; eb.length > 0;) {
                let bb = this.visitTick(eb);
                if (Ub(bb)) try {
                  await bb
                } catch (Mb) {
                  let bb = eb[eb.length - 1].node;
                  throw this.handleError(Mb, bb)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [bb, eb] of this.listeners.OnceExit) {
                this.result.lastPlugin = bb;
                try {
                  if ("document" === wb.type) {
                    let bb = wb.nodes.map((bb => eb(bb, this.helpers)));
                    await Promise.all(bb)
                  } else await eb(wb, this.helpers)
                } catch (Mb) {
                  throw this.handleError(Mb)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(bb) {
          this.result.lastPlugin = bb;
          try {
            if ("object" === typeof bb && bb.Once) {
              if ("document" === this.result.root.type) {
                let wb = this.result.root.nodes.map((wb => bb.Once(wb, this.helpers)));
                return Ub(wb[0]) ? Promise.all(wb) : wb
              }
              return bb.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof bb) return bb(this.result.root, this.result)
          } catch (wb) {
            throw this.handleError(wb)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let bb = this.result.opts,
            wb = eb;
          bb.syntax && (wb = bb.syntax.stringify), bb.stringifier && (wb = bb.stringifier), wb.stringify && (wb = wb.stringify);
          let Hb = new Mb(wb, this.result.root, this.result.opts).generate();
          return this.result.css = Hb[0], this.result.map = Hb[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let bb of this.plugins) {
            if (Ub(this.runOnRoot(bb))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let wb = this.result.root;
            for (; !wb[bb];) wb[bb] = !0, this.walkSync(wb);
            if (this.listeners.OnceExit)
              if ("document" === wb.type)
                for (let bb of wb.nodes) this.visitSync(this.listeners.OnceExit, bb);
              else this.visitSync(this.listeners.OnceExit, wb)
          }
          return this.result
        }
        then(bb, wb) {
          return this.async().then(bb, wb)
        }
        toString() {
          return this.css
        }
        visitSync(bb, wb) {
          for (let [eb, Hb] of bb) {
            let bb;
            this.result.lastPlugin = eb;
            try {
              bb = Hb(wb, this.helpers)
            } catch (Mb) {
              throw this.handleError(Mb, wb.proxyOf)
            }
            if ("root" !== wb.type && "document" !== wb.type && !wb.parent) return !0;
            if (Ub(bb)) throw this.getAsyncError()
          }
        }
        visitTick(wb) {
          let Mb = wb[wb.length - 1],
            {
              node: eb,
              visitors: Hb
            } = Mb;
          if ("root" !== eb.type && "document" !== eb.type && !eb.parent) return void wb.pop();
          if (Hb.length > 0 && Mb.visitorIndex < Hb.length) {
            let [bb, wb] = Hb[Mb.visitorIndex];
            Mb.visitorIndex += 1, Mb.visitorIndex === Hb.length && (Mb.visitors = [], Mb.visitorIndex = 0), this.result.lastPlugin = bb;
            try {
              return wb(eb.toProxy(), this.helpers)
            } catch (Vb) {
              throw this.handleError(Vb, eb)
            }
          }
          if (0 !== Mb.iterator) {
            let Hb, pb = Mb.iterator;
            for (; Hb = eb.nodes[eb.indexes[pb]];)
              if (eb.indexes[pb] += 1, !Hb[bb]) return Hb[bb] = !0, void wb.push(Cb(Hb));
            Mb.iterator = 0, delete eb.indexes[pb]
          }
          let pb = Mb.events;
          for (; Mb.eventIndex < pb.length;) {
            let wb = pb[Mb.eventIndex];
            if (Mb.eventIndex += 1, 0 === wb) return void(eb.nodes && eb.nodes.length && (eb[bb] = !0, Mb.iterator = eb.getIterator()));
            if (this.listeners[wb]) return void(Mb.visitors = this.listeners[wb])
          }
          wb.pop()
        }
        walkSync(wb) {
          wb[bb] = !0;
          let Mb = tb(wb);
          for (let eb of Mb)
            if (0 === eb) wb.nodes && wb.each((wb => {
              wb[bb] || this.walkSync(wb)
            }));
            else {
              let bb = this.listeners[eb];
              if (bb && this.visitSync(bb, wb.toProxy())) return
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
      return Bb.registerPostcss = bb => {
        Fb = bb
      }, tM = Bb, Bb.default = Bb, lb.registerLazyResult(Bb), pb.registerLazyResult(Bb), tM
    }

    function PM() {
      if (sM) return BM;
      sM = 1;
      let bb = function() {
          if (FM) return EM;
          FM = 1;
          let bb = fM(),
            wb = rM(),
            Mb = (SM(), uM());
          const eb = vM();
          class Hb {
            constructor(Mb, Hb, pb) {
              let Vb;
              Hb = Hb.toString(), this.stringified = !1, this._processor = Mb, this._css = Hb, this._opts = pb, this._map = void 0;
              let gb = wb;
              this.result = new eb(this._processor, Vb, this._opts), this.result.css = Hb;
              let lb = this;
              Object.defineProperty(this.result, "root", {
                get: () => lb.root
              });
              let Lb = new bb(gb, Vb, this._opts, Hb);
              if (Lb.isMap()) {
                let [bb, wb] = Lb.generate();
                bb && (this.result.css = bb), wb && (this.result.map = wb)
              } else Lb.clearAnnotation(), this.result.css = Lb.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (bb) {
              return this.async().catch(bb)
            } finally(bb) {
              return this.async().then(bb, bb)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(bb, wb) {
              return this.async().then(bb, wb)
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
              let bb, wb = Mb;
              try {
                bb = wb(this._css, this._opts)
              } catch (eb) {
                this.error = eb
              }
              if (this.error) throw this.error;
              return this._root = bb, bb
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return EM = Hb, Hb.default = Hb, EM
        }(),
        wb = dM(),
        Mb = JM(),
        eb = GM();
      class Hb {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(bb)
        }
        normalize(bb) {
          let wb = [];
          for (let Mb of bb)
            if (!0 === Mb.postcss ? Mb = Mb() : Mb.postcss && (Mb = Mb.postcss), "object" === typeof Mb && Array.isArray(Mb.plugins)) wb = wb.concat(Mb.plugins);
            else if ("object" === typeof Mb && Mb.postcssPlugin) wb.push(Mb);
          else if ("function" === typeof Mb) wb.push(Mb);
          else {
            if ("object" !== typeof Mb || !Mb.parse && !Mb.stringify) throw new Error(Mb + " is not a PostCSS plugin")
          }
          return wb
        }
        process(Mb) {
          let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || eb.parser || eb.stringifier || eb.syntax ? new wb(this, Mb, eb) : new bb(this, Mb, eb)
        }
        use(bb) {
          return this.plugins = this.plugins.concat(this.normalize([bb])), this
        }
      }
      return BM = Hb, Hb.default = Hb, eb.registerProcessor(Hb), Mb.registerProcessor(Hb), BM
    }
    const nM = Uw(function() {
      if (XM) return zM;
      XM = 1;
      let bb = hw(),
        wb = DM(),
        Mb = dM(),
        eb = WM(),
        Hb = PM(),
        pb = rM(),
        Vb = function() {
          if (hM) return mM;
          hM = 1;
          let bb = DM(),
            wb = YM(),
            Mb = AM(),
            eb = QM(),
            Hb = ZM(),
            pb = GM(),
            Vb = aM();

          function gb(lb, Lb) {
            if (Array.isArray(lb)) return lb.map((bb => gb(bb)));
            let {
              inputs: Ib,
              ...Ob
            } = lb;
            if (Ib) {
              Lb = [];
              for (let bb of Ib) {
                let Mb = {
                  ...bb,
                  __proto__: Hb.prototype
                };
                Mb.map && (Mb.map = {
                  ...Mb.map,
                  __proto__: wb.prototype
                }), Lb.push(Mb)
              }
            }
            if (Ob.nodes && (Ob.nodes = lb.nodes.map((bb => gb(bb, Lb)))), Ob.source) {
              let {
                inputId: bb,
                ...wb
              } = Ob.source;
              Ob.source = wb, null != bb && (Ob.source.input = Lb[bb])
            }
            if ("root" === Ob.type) return new pb(Ob);
            if ("decl" === Ob.type) return new bb(Ob);
            if ("rule" === Ob.type) return new Vb(Ob);
            if ("comment" === Ob.type) return new Mb(Ob);
            if ("atrule" === Ob.type) return new eb(Ob);
            throw new Error("Unknown node type: " + lb.type)
          }
          return mM = gb, gb.default = gb, mM
        }(),
        gb = JM(),
        lb = NM(),
        Lb = AM(),
        Ib = QM(),
        Ob = vM(),
        Ub = ZM(),
        tb = uM(),
        Cb = qM(),
        Eb = aM(),
        Fb = GM(),
        Bb = RM();

      function sb() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return 1 === wb.length && Array.isArray(wb[0]) && (wb = wb[0]), new Hb(wb)
      }
      return sb.plugin = function(bb, wb) {
        let Mb, eb = !1;

        function pb() {
          console && console.warn && !eb && (eb = !0, console.warn(bb + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(bb + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let Mb = wb(...arguments);
          return Mb.postcssPlugin = bb, Mb.postcssVersion = (new Hb).version, Mb
        }
        return Object.defineProperty(pb, "postcss", {
          get: () => (Mb || (Mb = pb()), Mb)
        }), pb.process = function(bb, wb, Mb) {
          return sb([pb(Mb)]).process(bb, wb)
        }, pb
      }, sb.stringify = pb, sb.parse = tb, sb.fromJSON = Vb, sb.list = Cb, sb.comment = bb => new Lb(bb), sb.atRule = bb => new Ib(bb), sb.decl = bb => new wb(bb), sb.rule = bb => new Eb(bb), sb.root = bb => new Fb(bb), sb.document = bb => new gb(bb), sb.CssSyntaxError = bb, sb.Declaration = wb, sb.vN = eb, sb.Processor = Hb, sb.Document = gb, sb.Comment = Lb, sb.Warning = lb, sb.AtRule = Ib, sb.Result = Ob, sb.Input = Ub, sb.Rule = Eb, sb.Root = Fb, sb.Node = Bb, Mb.registerPostcss(sb), zM = sb, sb.default = sb, zM
    }());
    nM.stringify, nM.fromJSON, nM.plugin, nM.parse, nM.list, nM.document, nM.comment, nM.atRule, nM.rule, nM.decl, nM.root, nM.CssSyntaxError, nM.Declaration, nM.vN, nM.Processor, nM.Document, nM.Comment, nM.Warning, nM.AtRule, nM.Result, nM.Input, nM.Rule, nM.Root, nM.Node;
    const yM = {
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

    function oM(bb, wb) {
      const Mb = null == wb ? void 0 : wb.stylesWithHoverClass.get(bb);
      if (Mb) return Mb;
      let eb = bb;
      try {
        eb = nM([Iw, Ow]).process(bb).css
      } catch (Hb) {
        console.warn("Failed to adapt css for replay", Hb)
      }
      return null == wb || wb.stylesWithHoverClass.set(bb, eb), eb
    }

    function TM() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const kM = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      be = new WeakSet;

    function we(bb) {
      if (bb.UNSAFE_allowUnprotectedRebuild) return;
      const wb = bb.doc.defaultView;
      if (wb && (!be.has(bb.doc) || ! function(bb) {
          if (!bb || "IFRAME" !== bb.tagName) return !1;
          if (!("sandbox" in bb)) return !1;
          const wb = Array.from(bb.sandbox);
          return 1 === wb.length && "allow-same-origin" === wb[0]
        }(wb.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function Me(bb, wb, Mb, eb) {
      const {
        doc: Hb,
        hackCss: pb,
        cache: Vb
      } = eb;
      bb.childNodes.length ? function(bb, wb, Mb, eb) {
        const Hb = [];
        for (const Ib of bb.childNodes) Ib.type === lb.Text && Hb.push(Ib);
        const pb = wb.split("/* rr_split */");
        for (; pb.length > 1 && pb.length > Hb.length;) pb.splice(-2, 2, pb.slice(-2).join(""));
        let Vb = "";
        Mb && (Vb = oM(pb.join(""), eb));
        let gb = 0,
          Lb = -1;
        for (let lb = 0; lb < Hb.length && lb !== pb.length; lb++) {
          const bb = Hb[lb];
          let wb = pb[lb];
          const eb = lb < pb.length - 1 ? pb[lb + 1] : null;
          if (Mb && eb) {
            let bb = gb,
              Mb = eb.length;
            Mb = Math.min(Mb, 30);
            let Hb = !1;
            for (; Mb > 2; Mb--) {
              const wb = eb.substring(0, Mb),
                pb = Vb.substring(gb).indexOf(wb);
              if (Hb = -1 !== pb, Hb) {
                bb += pb;
                break
              }
            }
            Hb || (bb += wb.length), wb = Vb.substring(gb, bb), gb = bb
          } else Mb && (wb = Vb.substring(gb)); - 1 !== Lb && (wb = wb.substring(Lb)), eb && (-1 !== Lb || wb.endsWith("0p") && eb.startsWith("x")) && (Lb = eb.indexOf("}"), -1 !== Lb && (Lb += 1, wb += eb.substring(0, Lb))), bb.textContent = wb
        }
      }(bb, Mb, pb, Vb) : (pb && (Mb = oM(Mb, Vb)), wb.appendChild(Hb.createTextNode(Mb)))
    }

    function ee(bb, wb) {
      var Mb;
      const {
        doc: eb,
        hackCss: Hb,
        cache: pb
      } = wb;
      switch (bb.type) {
        case lb.Document:
          return eb.implementation.createDocument(null, "", null);
        case lb.DocumentType:
          return eb.implementation.createDocumentType(bb.name || "html", bb.publicId, bb.systemId);
        case lb.Element: {
          const Hb = function(bb) {
            let wb = yM[bb.tagName] ? yM[bb.tagName] : bb.tagName;
            return "link" === wb && bb.attributes._cssText && (wb = "style"), wb
          }(bb);
          let pb;
          bb.isSVG ? pb = eb.createElementNS("http://www.w3.org/2000/svg", Hb) : (bb.isCustom && (null == (Mb = eb.defaultView) ? void 0 : Mb.customElements) && !eb.defaultView.customElements.get(bb.tagName) && eb.defaultView.customElements.define(bb.tagName, class extends eb.defaultView.HTMLElement {}), pb = eb.createElement(Hb));
          const gb = {};
          for (const Mb in bb.attributes) {
            if (!Object.prototype.hasOwnProperty.call(bb.attributes, Mb)) continue;
            let lb = bb.attributes[Mb];
            if (("option" !== Hb || "selected" !== Mb || !1 !== lb) && null !== lb)
              if (!0 === lb && (lb = ""), Mb.startsWith("rr_")) gb[Mb] = lb;
              else {
                if ("string" !== typeof lb);
                else {
                  if ("style" === Hb && "_cssText" === Mb) {
                    Me(bb, pb, lb, wb);
                    continue
                  }
                  if ("textarea" === Hb && "value" === Mb) {
                    pb.appendChild(eb.createTextNode(lb)), bb.childNodes = [];
                    continue
                  }
                }
                try {
                  if (bb.isSVG && "xlink:href" === Mb) pb.setAttributeNS("http://www.w3.org/1999/xlink", Mb, lb.toString());
                  else if ("onload" === Mb || "onclick" === Mb || "onmouse" === Mb.substring(0, 7)) pb.setAttribute("_" + Mb, lb.toString());
                  else {
                    if ("meta" === Hb && "Content-Security-Policy" === bb.attributes["http-equiv"] && "content" === Mb) {
                      pb.setAttribute("csp-content", lb.toString());
                      continue
                    }
                    "link" === Hb && ("preload" === bb.attributes.rel && "script" === bb.attributes.as || "modulepreload" === bb.attributes.rel) || "link" === Hb && "prefetch" === bb.attributes.rel && "string" === typeof bb.attributes.href && "js" === Zb(bb.attributes.href) || ("img" === Hb && bb.attributes.srcset && bb.attributes.rr_dataURL ? pb.setAttribute("rrweb-original-srcset", bb.attributes.srcset) : pb.setAttribute(Mb, lb.toString()))
                  }
                } catch (Vb) {}
              }
          }
          for (const wb in gb) {
            const Mb = gb[wb];
            if ("canvas" === Hb && "rr_dataURL" === wb) {
              const bb = eb.createElement("img");
              bb.onload = () => {
                const wb = pb.getContext("2d");
                wb && wb.drawImage(bb, 0, 0, bb.width, bb.height)
              }, bb.src = Mb.toString(), pb.RRNodeType && (pb.rr_dataURL = Mb.toString())
            } else if ("img" === Hb && "rr_dataURL" === wb) {
              const wb = pb;
              wb.currentSrc.startsWith("data:") || (wb.setAttribute("rrweb-original-src", bb.attributes.src), wb.src = Mb.toString())
            }
            if ("rr_width" === wb) pb.style.setProperty("width", Mb.toString());
            else if ("rr_height" === wb) pb.style.setProperty("height", Mb.toString());
            else if ("rr_mediaCurrentTime" === wb && "number" === typeof Mb) pb.currentTime = Mb;
            else if ("rr_mediaState" === wb) switch (Mb) {
              case "played":
                pb.play().catch((bb => console.warn("media playback error", bb)));
                break;
              case "paused":
                pb.pause()
            } else "rr_mediaPlaybackRate" === wb && "number" === typeof Mb ? pb.playbackRate = Mb : "rr_mediaMuted" === wb && "boolean" === typeof Mb ? pb.muted = Mb : "rr_mediaLoop" === wb && "boolean" === typeof Mb ? pb.loop = Mb : "rr_mediaVolume" === wb && "number" === typeof Mb ? pb.volume = Mb : "rr_open_mode" === wb && pb.setAttribute("rr_open_mode", Mb)
          }
          if (bb.isShadowHost)
            if (pb.shadowRoot)
              for (; pb.shadowRoot.firstChild;) pb.shadowRoot.removeChild(pb.shadowRoot.firstChild);
            else pb.attachShadow({
              mode: "open"
            });
          return "input" !== Hb && "textarea" !== Hb || pb.setAttribute("autocomplete", "off"), pb
        }
        case lb.Text:
          return bb.isStyle && Hb ? eb.createTextNode(oM(bb.textContent, pb)) : eb.createTextNode(bb.textContent);
        case lb.CDATA:
          return eb.createCDATASection(bb.textContent);
        case lb.Comment:
          return eb.createComment(bb.textContent);
        default:
          return null
      }
    }

    function He(bb, wb) {
      const {
        doc: Mb,
        mirror: eb,
        skipChild: Hb = !1,
        hackCss: pb = !0,
        afterAppend: Vb,
        cache: gb
      } = wb;
      if (eb.has(bb.id)) {
        const wb = eb.OHb(bb.id),
          Mb = eb.getMeta(wb);
        if (Ib = bb, (Lb = Mb) && Ib && Lb.type === Ib.type && (Lb.type === lb.Document ? Lb.compatMode === Ib.compatMode : Lb.type === lb.DocumentType ? Lb.name === Ib.name && Lb.publicId === Ib.publicId && Lb.systemId === Ib.systemId : Lb.type === lb.Comment || Lb.type === lb.Text || Lb.type === lb.CDATA ? Lb.textContent === Ib.textContent : Lb.type === lb.Element && Lb.tagName === Ib.tagName && JSON.stringify(Lb.attributes) === JSON.stringify(Ib.attributes) && Lb.isSVG === Ib.isSVG && Lb.needBlock === Ib.needBlock)) return eb.OHb(bb.id)
      }
      var Lb, Ib;
      let Ob = ee(bb, {
        doc: Mb,
        hackCss: pb,
        cache: gb
      });
      if (!Ob) return null;
      if (bb.rootId && eb.OHb(bb.rootId) !== Mb && eb.replace(bb.rootId, Mb), bb.type === lb.Document && (Mb.close(), Mb.open(), "BackCompat" === bb.compatMode && bb.childNodes && bb.childNodes[0].type !== lb.DocumentType && (bb.childNodes[0].type === lb.Element && "xmlns" in bb.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === bb.childNodes[0].attributes.xmlns ? Mb.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : Mb.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), Ob = Mb), eb.add(Ob, bb), (bb.type === lb.Document || bb.type === lb.Element) && !Hb)
        for (const Ub of bb.childNodes) {
          const wb = He(Ub, {
            doc: Mb,
            mirror: eb,
            skipChild: !1,
            hackCss: pb,
            afterAppend: Vb,
            cache: gb
          });
          if (wb) {
            if (Ub.isShadow && hb(Ob) && Ob.shadowRoot) Ob.shadowRoot.appendChild(wb);
            else if (bb.type === lb.Document && Ub.type == lb.Element) {
              const bb = wb;
              let Mb = null;
              bb.childNodes.forEach((bb => {
                "BODY" === bb.nodeName && (Mb = bb)
              })), Mb ? (bb.removeChild(Mb), Ob.appendChild(wb), bb.appendChild(Mb)) : Ob.appendChild(wb)
            } else Ob.appendChild(wb);
            Vb && Vb(wb, Ub.id)
          } else console.warn("Failed to rebuild", Ub)
        }
      return Ob
    }

    function pe(bb, wb) {
      we(wb);
      const {
        doc: Mb,
        onVisit: eb,
        hackCss: Hb = !0,
        afterAppend: pb,
        cache: Vb,
        mirror: gb = new Kb
      } = wb, Lb = He(bb, {
        doc: Mb,
        mirror: gb,
        skipChild: !1,
        hackCss: Hb,
        afterAppend: pb,
        cache: Vb
      });
      return function(bb, wb) {
        for (const eb of bb.getIds()) bb.has(eb) && (Mb = bb.OHb(eb), wb(Mb));
        var Mb
      }(gb, (bb => {
        eb && eb(bb),
          function(bb, wb) {
            const Mb = wb.getMeta(bb);
            if ((null == Mb ? void 0 : Mb.type) !== lb.Element) return;
            const eb = bb;
            for (const Hb in Mb.attributes) {
              if (!Object.prototype.hasOwnProperty.call(Mb.attributes, Hb) || !Hb.startsWith("rr_")) continue;
              const bb = Mb.attributes[Hb];
              "rr_scrollLeft" === Hb && (eb.scrollLeft = bb), "rr_scrollTop" === Hb && (eb.scrollTop = bb)
            }
          }(bb, gb)
      })), Lb
    }
    var Ve = Object.defineProperty,
      ge = (bb, wb, Mb) => ((bb, wb, Mb) => wb in bb ? Ve(bb, wb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mb
      }) : bb[wb] = Mb)(bb, "symbol" !== typeof wb ? wb + "" : wb, Mb),
      le = Object.defineProperty,
      Le = (bb, wb, Mb) => ((bb, wb, Mb) => wb in bb ? le(bb, wb, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Mb
      }) : bb[wb] = Mb)(bb, "symbol" !== typeof wb ? wb + "" : wb, Mb);
    Date.now().toString();
    let Ie = class {
      constructor() {
        Le(this, "idNodeMap", new Map), Le(this, "nodeMetaMap", new WeakMap)
      }
      getId(bb) {
        var wb;
        if (!bb) return -1;
        return (null == (wb = this.getMeta(bb)) ? void 0 : wb.id) ?? -1
      }
      OHb(bb) {
        return this.idNodeMap.get(bb) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(bb) {
        return this.nodeMetaMap.get(bb) || null
      }
      removeNodeFromMap(bb) {
        const wb = this.getId(bb);
        this.idNodeMap.delete(wb), bb.childNodes && bb.childNodes.forEach((bb => this.removeNodeFromMap(bb)))
      }
      has(bb) {
        return this.idNodeMap.has(bb)
      }
      hasNode(bb) {
        return this.nodeMetaMap.has(bb)
      }
      add(bb, wb) {
        const Mb = wb.id;
        this.idNodeMap.set(Mb, bb), this.nodeMetaMap.set(bb, wb)
      }
      replace(bb, wb) {
        const Mb = this.OHb(bb);
        if (Mb) {
          const bb = this.nodeMetaMap.get(Mb);
          bb && this.nodeMetaMap.set(wb, bb)
        }
        this.idNodeMap.set(bb, wb)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    };

    function Oe(bb) {
      return bb && bb.__esModule && Object.prototype.hasOwnProperty.call(bb, "default") ? bb.default : bb
    }

    function Ue(bb) {
      if (bb.__esModule) return bb;
      var wb = bb.default;
      if ("function" == typeof wb) {
        var Mb = function bb() {
          return this instanceof bb ? Reflect.construct(wb, arguments, this.constructor) : wb.apply(this, arguments)
        };
        Mb.prototype = wb.prototype
      } else Mb = {};
      return Object.defineProperty(Mb, "__esModule", {
        value: !0
      }), Object.keys(bb).forEach((function(wb) {
        var eb = Object.getOwnPropertyDescriptor(bb, wb);
        Object.defineProperty(Mb, wb, eb.get ? eb : {
          enumerable: !0,
          get: function() {
            return bb[wb]
          }
        })
      })), Mb
    }
    var te, Ce = {
      exports: {}
    };

    function Ee() {
      if (te) return Ce.exports;
      te = 1;
      var bb = String,
        wb = function() {
          return {
            isColorSupported: !1,
            reset: bb,
            bold: bb,
            dim: bb,
            italic: bb,
            underline: bb,
            inverse: bb,
            hidden: bb,
            strikethrough: bb,
            black: bb,
            red: bb,
            green: bb,
            yellow: bb,
            blue: bb,
            magenta: bb,
            cyan: bb,
            white: bb,
            gray: bb,
            bgBlack: bb,
            bgRed: bb,
            bgGreen: bb,
            bgYellow: bb,
            bgBlue: bb,
            bgMagenta: bb,
            bgCyan: bb,
            bgWhite: bb
          }
        };
      return Ce.exports = wb(), Ce.exports.createColors = wb, Ce.exports
    }
    const Fe = Ue(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var Be, se;

    function me() {
      if (se) return Be;
      se = 1;
      let bb = Ee(),
        wb = Fe;
      class Mb extends Error {
        constructor(bb, wb, eb, Hb, pb, Vb) {
          super(bb), this.name = "CssSyntaxError", this.reason = bb, pb && (this.file = pb), Hb && (this.source = Hb), Vb && (this.plugin = Vb), "undefined" !== typeof wb && "undefined" !== typeof eb && ("number" === typeof wb ? (this.line = wb, this.column = eb) : (this.line = wb.line, this.column = wb.column, this.endLine = eb.line, this.endColumn = eb.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, Mb)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(Mb) {
          if (!this.source) return "";
          let eb = this.source;
          null == Mb && (Mb = bb.isColorSupported), wb && Mb && (eb = wb(eb));
          let Hb, pb, Vb = eb.split(/\r?\n/),
            gb = Math.max(this.line - 3, 0),
            lb = Math.min(this.line + 2, Vb.length),
            Lb = String(lb).length;
          if (Mb) {
            let {
              bold: wb,
              gray: Mb,
              red: eb
            } = bb.createColors(!0);
            Hb = bb => wb(eb(bb)), pb = bb => Mb(bb)
          } else Hb = pb = bb => bb;
          return Vb.slice(gb, lb).map(((bb, wb) => {
            let Mb = gb + 1 + wb,
              eb = " " + (" " + Mb).slice(-Lb) + " | ";
            if (Mb === this.line) {
              let wb = pb(eb.replace(/\d/g, " ")) + bb.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Hb(">") + pb(eb) + bb + "\n " + wb + Hb("^")
            }
            return " " + pb(eb) + bb
          })).join("\n")
        }
        toString() {
          let bb = this.showSourceCode();
          return bb && (bb = "\n\n" + bb + "\n"), this.name + ": " + this.message + bb
        }
      }
      return Be = Mb, Mb.default = Mb, Be
    }
    var he, ze, Xe, xe, je, Ke, re, Re, De, ce, Ye, Ze, fe, Ae, We, Je, Se, Ne, ve, Qe, Ge, qe, ae, ie, ue, de, Pe, ne, ye, oe, Te, ke, bH, wH, MH, eH, HH, pH, VH, gH, lH, LH, IH, OH, UH, tH, CH, EH, FH, BH, sH, mH, hH, zH = {};

    function XH() {
      return he || (he = 1, zH.isClean = Symbol("isClean"), zH.my = Symbol("my")), zH
    }

    function xH() {
      if (Xe) return ze;
      Xe = 1;
      const bb = {
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
      class wb {
        constructor(bb) {
          this.builder = bb
        }
        atrule(bb, wb) {
          let Mb = "@" + bb.name,
            eb = bb.params ? this.rawValue(bb, "params") : "";
          if ("undefined" !== typeof bb.raws.afterName ? Mb += bb.raws.afterName : eb && (Mb += " "), bb.nodes) this.block(bb, Mb + eb);
          else {
            let Hb = (bb.raws.between || "") + (wb ? ";" : "");
            this.builder(Mb + eb + Hb, bb)
          }
        }
        beforeAfter(bb, wb) {
          let Mb;
          Mb = "decl" === bb.type ? this.raw(bb, null, "beforeDecl") : "comment" === bb.type ? this.raw(bb, null, "beforeComment") : "before" === wb ? this.raw(bb, null, "beforeRule") : this.raw(bb, null, "beforeClose");
          let eb = bb.parent,
            Hb = 0;
          for (; eb && "root" !== eb.type;) Hb += 1, eb = eb.parent;
          if (Mb.includes("\n")) {
            let wb = this.raw(bb, null, "indent");
            if (wb.length)
              for (let bb = 0; bb < Hb; bb++) Mb += wb
          }
          return Mb
        }
        block(bb, wb) {
          let Mb, eb = this.raw(bb, "between", "beforeOpen");
          this.builder(wb + eb + "{", bb, "start"), bb.nodes && bb.nodes.length ? (this.body(bb), Mb = this.raw(bb, "after")) : Mb = this.raw(bb, "after", "emptyBody"), Mb && this.builder(Mb), this.builder("}", bb, "end")
        }
        body(bb) {
          let wb = bb.nodes.length - 1;
          for (; wb > 0 && "comment" === bb.nodes[wb].type;) wb -= 1;
          let Mb = this.raw(bb, "semicolon");
          for (let eb = 0; eb < bb.nodes.length; eb++) {
            let Hb = bb.nodes[eb],
              pb = this.raw(Hb, "before");
            pb && this.builder(pb), this.stringify(Hb, wb !== eb || Mb)
          }
        }
        comment(bb) {
          let wb = this.raw(bb, "left", "commentLeft"),
            Mb = this.raw(bb, "right", "commentRight");
          this.builder("/*" + wb + bb.text + Mb + "*/", bb)
        }
        decl(bb, wb) {
          let Mb = this.raw(bb, "between", "colon"),
            eb = bb.prop + Mb + this.rawValue(bb, "value");
          bb.important && (eb += bb.raws.important || " !important"), wb && (eb += ";"), this.builder(eb, bb)
        }
        document(bb) {
          this.body(bb)
        }
        raw(wb, Mb, eb) {
          let Hb;
          if (eb || (eb = Mb), Mb && (Hb = wb.raws[Mb], "undefined" !== typeof Hb)) return Hb;
          let pb = wb.parent;
          if ("before" === eb) {
            if (!pb || "root" === pb.type && pb.first === wb) return "";
            if (pb && "document" === pb.type) return ""
          }
          if (!pb) return bb[eb];
          let Vb = wb.root();
          if (Vb.rawCache || (Vb.rawCache = {}), "undefined" !== typeof Vb.rawCache[eb]) return Vb.rawCache[eb];
          if ("before" === eb || "after" === eb) return this.beforeAfter(wb, eb);
          {
            let bb = "raw" + ((gb = eb)[0].toUpperCase() + gb.slice(1));
            this[bb] ? Hb = this[bb](Vb, wb) : Vb.walk((bb => {
              if (Hb = bb.raws[Mb], "undefined" !== typeof Hb) return !1
            }))
          }
          var gb;
          return "undefined" === typeof Hb && (Hb = bb[eb]), Vb.rawCache[eb] = Hb, Hb
        }
        rawBeforeClose(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && bb.nodes.length > 0 && "undefined" !== typeof bb.raws.after) return wb = bb.raws.after, wb.includes("\n") && (wb = wb.replace(/[^\n]+$/, "")), !1
          })), wb && (wb = wb.replace(/\S/g, "")), wb
        }
        rawBeforeComment(bb, wb) {
          let Mb;
          return bb.walkComments((bb => {
            if ("undefined" !== typeof bb.raws.before) return Mb = bb.raws.before, Mb.includes("\n") && (Mb = Mb.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Mb ? Mb = this.raw(wb, null, "beforeDecl") : Mb && (Mb = Mb.replace(/\S/g, "")), Mb
        }
        rawBeforeDecl(bb, wb) {
          let Mb;
          return bb.walkDecls((bb => {
            if ("undefined" !== typeof bb.raws.before) return Mb = bb.raws.before, Mb.includes("\n") && (Mb = Mb.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof Mb ? Mb = this.raw(wb, null, "beforeRule") : Mb && (Mb = Mb.replace(/\S/g, "")), Mb
        }
        rawBeforeOpen(bb) {
          let wb;
          return bb.walk((bb => {
            if ("decl" !== bb.type && (wb = bb.raws.between, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawBeforeRule(bb) {
          let wb;
          return bb.walk((Mb => {
            if (Mb.nodes && (Mb.parent !== bb || bb.first !== Mb) && "undefined" !== typeof Mb.raws.before) return wb = Mb.raws.before, wb.includes("\n") && (wb = wb.replace(/[^\n]+$/, "")), !1
          })), wb && (wb = wb.replace(/\S/g, "")), wb
        }
        rawColon(bb) {
          let wb;
          return bb.walkDecls((bb => {
            if ("undefined" !== typeof bb.raws.between) return wb = bb.raws.between.replace(/[^\s:]/g, ""), !1
          })), wb
        }
        rawEmptyBody(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && 0 === bb.nodes.length && (wb = bb.raws.after, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawIndent(bb) {
          if (bb.raws.indent) return bb.raws.indent;
          let wb;
          return bb.walk((Mb => {
            let eb = Mb.parent;
            if (eb && eb !== bb && eb.parent && eb.parent === bb && "undefined" !== typeof Mb.raws.before) {
              let bb = Mb.raws.before.split("\n");
              return wb = bb[bb.length - 1], wb = wb.replace(/\S/g, ""), !1
            }
          })), wb
        }
        rawSemicolon(bb) {
          let wb;
          return bb.walk((bb => {
            if (bb.nodes && bb.nodes.length && "decl" === bb.last.type && (wb = bb.raws.semicolon, "undefined" !== typeof wb)) return !1
          })), wb
        }
        rawValue(bb, wb) {
          let Mb = bb[wb],
            eb = bb.raws[wb];
          return eb && eb.value === Mb ? eb.raw : Mb
        }
        root(bb) {
          this.body(bb), bb.raws.after && this.builder(bb.raws.after)
        }
        rule(bb) {
          this.block(bb, this.rawValue(bb, "selector")), bb.raws.ownSemicolon && this.builder(bb.raws.ownSemicolon, bb, "end")
        }
        stringify(bb, wb) {
          if (!this[bb.type]) throw new Error("Unknown AST node type " + bb.type + ". Maybe you need to change PostCSS stringifier.");
          this[bb.type](bb, wb)
        }
      }
      return ze = wb, wb.default = wb, ze
    }

    function jH() {
      if (je) return xe;
      je = 1;
      let bb = xH();

      function wb(wb, Mb) {
        new bb(Mb).stringify(wb)
      }
      return xe = wb, wb.default = wb, xe
    }

    function KH() {
      if (re) return Ke;
      re = 1;
      let {
        isClean: bb,
        my: wb
      } = XH(), Mb = me(), eb = xH(), Hb = jH();

      function pb(bb, wb) {
        let Mb = new bb.constructor;
        for (let eb in bb) {
          if (!Object.prototype.hasOwnProperty.call(bb, eb)) continue;
          if ("proxyCache" === eb) continue;
          let Hb = bb[eb],
            Vb = typeof Hb;
          "parent" === eb && "object" === Vb ? wb && (Mb[eb] = wb) : "source" === eb ? Mb[eb] = Hb : Array.isArray(Hb) ? Mb[eb] = Hb.map((bb => pb(bb, Mb))) : ("object" === Vb && null !== Hb && (Hb = pb(Hb)), Mb[eb] = Hb)
        }
        return Mb
      }
      class Vb {
        constructor() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[bb] = !1, this[wb] = !0;
          for (let bb in Mb)
            if ("nodes" === bb) {
              this.nodes = [];
              for (let wb of Mb[bb]) "function" === typeof wb.clone ? this.append(wb.clone()) : this.append(wb)
            } else this[bb] = Mb[bb]
        }
        addToError(bb) {
          if (bb.postcssNode = this, bb.stack && this.source && /\n\s{4}at /.test(bb.stack)) {
            let wb = this.source;
            bb.stack = bb.stack.replace(/\n\s{4}at /, `$&${wb.input.from}:${wb.start.line}:${wb.start.column}$&`)
          }
          return bb
        }
        after(bb) {
          return this.parent.insertAfter(this, bb), this
        }
        assign() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let wb in bb) this[wb] = bb[wb];
          return this
        }
        before(bb) {
          return this.parent.insertBefore(this, bb), this
        }
        cleanRaws(bb) {
          delete this.raws.before, delete this.raws.after, bb || delete this.raws.between
        }
        clone() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = pb(this);
          for (let Mb in bb) wb[Mb] = bb[Mb];
          return wb
        }
        cloneAfter() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = this.clone(bb);
          return this.parent.insertAfter(this, wb), wb
        }
        cloneBefore() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            wb = this.clone(bb);
          return this.parent.insertBefore(this, wb), wb
        }
        error(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: Mb,
              start: eb
            } = this.rangeBy(wb);
            return this.source.input.error(bb, {
              column: eb.column,
              line: eb.line
            }, {
              column: Mb.column,
              line: Mb.line
            }, wb)
          }
          return new Mb(bb)
        }
        getProxyProcessor() {
          return {
            get: (bb, wb) => "proxyOf" === wb ? bb : "root" === wb ? () => bb.root().toProxy() : bb[wb],
            set: (bb, wb, Mb) => (bb[wb] === Mb || (bb[wb] = Mb, "prop" !== wb && "value" !== wb && "name" !== wb && "params" !== wb && "important" !== wb && "text" !== wb || bb.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[bb]) {
            this[bb] = !1;
            let wb = this;
            for (; wb = wb.parent;) wb[bb] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let bb = this.parent.index(this);
          return this.parent.nodes[bb + 1]
        }
        positionBy(bb, wb) {
          let Mb = this.source.start;
          if (bb.index) Mb = this.positionInside(bb.index, wb);
          else if (bb.word) {
            let eb = (wb = this.toString()).indexOf(bb.word); - 1 !== eb && (Mb = this.positionInside(eb, wb))
          }
          return Mb
        }
        positionInside(bb, wb) {
          let Mb = wb || this.toString(),
            eb = this.source.start.column,
            Hb = this.source.start.line;
          for (let pb = 0; pb < bb; pb++) "\n" === Mb[pb] ? (eb = 1, Hb += 1) : eb += 1;
          return {
            column: eb,
            line: Hb
          }
        }
        prev() {
          if (!this.parent) return;
          let bb = this.parent.index(this);
          return this.parent.nodes[bb - 1]
        }
        rangeBy(bb) {
          let wb = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            Mb = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: wb.column + 1,
              line: wb.line
            };
          if (bb.word) {
            let eb = this.toString(),
              Hb = eb.indexOf(bb.word); - 1 !== Hb && (wb = this.positionInside(Hb, eb), Mb = this.positionInside(Hb + bb.word.length, eb))
          } else bb.start ? wb = {
            column: bb.start.column,
            line: bb.start.line
          } : bb.index && (wb = this.positionInside(bb.index)), bb.end ? Mb = {
            column: bb.end.column,
            line: bb.end.line
          } : "number" === typeof bb.endIndex ? Mb = this.positionInside(bb.endIndex) : bb.index && (Mb = this.positionInside(bb.index + 1));
          return (Mb.line < wb.line || Mb.line === wb.line && Mb.column <= wb.column) && (Mb = {
            column: wb.column + 1,
            line: wb.line
          }), {
            end: Mb,
            start: wb
          }
        }
        raw(bb, wb) {
          return (new eb).raw(this, bb, wb)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let eb = this,
              Hb = !1;
            for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
            for (let bb of wb) bb === this ? Hb = !0 : Hb ? (this.parent.insertAfter(eb, bb), eb = bb) : this.parent.insertBefore(eb, bb);
            Hb || this.remove()
          }
          return this
        }
        root() {
          let bb = this;
          for (; bb.parent && "document" !== bb.parent.type;) bb = bb.parent;
          return bb
        }
        toJSON(bb, wb) {
          let Mb = {},
            eb = null == wb;
          wb = wb || new Map;
          let Hb = 0;
          for (let pb in this) {
            if (!Object.prototype.hasOwnProperty.call(this, pb)) continue;
            if ("parent" === pb || "proxyCache" === pb) continue;
            let bb = this[pb];
            if (Array.isArray(bb)) Mb[pb] = bb.map((bb => "object" === typeof bb && bb.toJSON ? bb.toJSON(null, wb) : bb));
            else if ("object" === typeof bb && bb.toJSON) Mb[pb] = bb.toJSON(null, wb);
            else if ("source" === pb) {
              let eb = wb.get(bb.input);
              null == eb && (eb = Hb, wb.set(bb.input, Hb), Hb++), Mb[pb] = {
                end: bb.end,
                inputId: eb,
                start: bb.start
              }
            } else Mb[pb] = bb
          }
          return eb && (Mb.inputs = [...wb.keys()].map((bb => bb.toJSON()))), Mb
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hb;
          bb.stringify && (bb = bb.stringify);
          let wb = "";
          return bb(this, (bb => {
            wb += bb
          })), wb
        }
        warn(bb, wb, Mb) {
          let eb = {
            node: this
          };
          for (let Hb in Mb) eb[Hb] = Mb[Hb];
          return bb.warn(wb, eb)
        }
        get proxyOf() {
          return this
        }
      }
      return Ke = Vb, Vb.default = Vb, Ke
    }

    function rH() {
      if (De) return Re;
      De = 1;
      let bb = KH();
      class wb extends bb {
        constructor(bb) {
          bb && "undefined" !== typeof bb.value && "string" !== typeof bb.value && (bb = {
            ...bb,
            value: String(bb.value)
          }), super(bb), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return Re = wb, wb.default = wb, Re
    }

    function RH() {
      if (Ye) return ce;
      Ye = 1;
      return ce = {
        nanoid: function() {
          let bb = "",
            wb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; wb--;) bb += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return bb
        },
        customAlphabet: function(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let Mb = "",
              eb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : wb;
            for (; eb--;) Mb += bb[Math.random() * bb.length | 0];
            return Mb
          }
        }
      }, ce
    }

    function DH() {
      if (fe) return Ze;
      fe = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Fe, {
        existsSync: Mb,
        readFileSync: eb
      } = Fe, {
        dirname: Hb,
        join: pb
      } = Fe;
      class Vb {
        constructor(bb, wb) {
          if (!1 === wb.map) return;
          this.loadAnnotation(bb), this.inline = this.startWith(this.annotation, "data:");
          let Mb = wb.map ? wb.map.prev : void 0,
            eb = this.loadMap(wb.from, Mb);
          !this.mapFile && wb.from && (this.mapFile = wb.from), this.mapFile && (this.root = Hb(this.mapFile)), eb && (this.text = eb)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new bb(this.text)), this.consumerCache
        }
        decodeInline(bb) {
          if (/^data:application\/json;charset=utf-?8,/.test(bb) || /^data:application\/json,/.test(bb)) return decodeURIComponent(bb.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(bb) || /^data:application\/json;base64,/.test(bb)) return wb = bb.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(wb, "base64").toString() : window.atob(wb);
          var wb;
          let Mb = bb.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + Mb)
        }
        getAnnotationURL(bb) {
          return bb.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(bb) {
          return "object" === typeof bb && ("string" === typeof bb.mappings || "string" === typeof bb._mappings || Array.isArray(bb.sections))
        }
        loadAnnotation(bb) {
          let wb = bb.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!wb) return;
          let Mb = bb.lastIndexOf(wb.pop()),
            eb = bb.indexOf("*/", Mb);
          Mb > -1 && eb > -1 && (this.annotation = this.getAnnotationURL(bb.substring(Mb, eb)))
        }
        loadFile(bb) {
          if (this.root = Hb(bb), Mb(bb)) return this.mapFile = bb, eb(bb, "utf-8").toString().trim()
        }
        loadMap(Mb, eb) {
          if (!1 === eb) return !1;
          if (eb) {
            if ("string" === typeof eb) return eb;
            if ("function" !== typeof eb) {
              if (eb instanceof bb) return wb.fromSourceMap(eb).toString();
              if (eb instanceof wb) return eb.toString();
              if (this.isMap(eb)) return JSON.stringify(eb);
              throw new Error("Unsupported previous source map format: " + eb.toString())
            } {
              let bb = eb(Mb);
              if (bb) {
                let wb = this.loadFile(bb);
                if (!wb) throw new Error("Unable to load previous source map: " + bb.toString());
                return wb
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let bb = this.annotation;
              return Mb && (bb = pb(Hb(Mb), bb)), this.loadFile(bb)
            }
          }
        }
        startWith(bb, wb) {
          return !!bb && bb.substr(0, wb.length) === wb
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return Ze = Vb, Vb.default = Vb, Ze
    }

    function cH() {
      if (We) return Ae;
      We = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Fe, {
        fileURLToPath: Mb,
        pathToFileURL: eb
      } = Fe, {
        isAbsolute: Hb,
        resolve: pb
      } = Fe, {
        nanoid: Vb
      } = RH(), gb = Fe, lb = me(), Lb = DH(), Ib = Symbol("fromOffsetCache"), Ob = Boolean(bb && wb), Ub = Boolean(pb && Hb);
      class tb {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === bb || "undefined" === typeof bb || "object" === typeof bb && !bb.toString) throw new Error(`PostCSS received ${bb} instead of CSS string`);
          if (this.css = bb.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, wb.from && (!Ub || /^\w+:\/\//.test(wb.from) || Hb(wb.from) ? this.file = wb.from : this.file = pb(wb.from)), Ub && Ob) {
            let bb = new Lb(this.css, wb);
            if (bb.text) {
              this.map = bb;
              let wb = bb.consumer().file;
              !this.file && wb && (this.file = this.mapResolve(wb))
            }
          }
          this.file || (this.id = "<input css " + Vb(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(bb, wb, Mb) {
          let Hb, pb, Vb, gb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (wb && "object" === typeof wb) {
            let bb = wb,
              eb = Mb;
            if ("number" === typeof bb.offset) {
              let eb = this.fromOffset(bb.offset);
              wb = eb.line, Mb = eb.col
            } else wb = bb.line, Mb = bb.column;
            if ("number" === typeof eb.offset) {
              let bb = this.fromOffset(eb.offset);
              pb = bb.line, Vb = bb.col
            } else pb = eb.line, Vb = eb.column
          } else if (!Mb) {
            let bb = this.fromOffset(wb);
            wb = bb.line, Mb = bb.col
          }
          let Lb = this.origin(wb, Mb, pb, Vb);
          return Hb = Lb ? new lb(bb, void 0 === Lb.endLine ? Lb.line : {
            column: Lb.column,
            line: Lb.line
          }, void 0 === Lb.endLine ? Lb.column : {
            column: Lb.endColumn,
            line: Lb.endLine
          }, Lb.source, Lb.file, gb.plugin) : new lb(bb, void 0 === pb ? wb : {
            column: Mb,
            line: wb
          }, void 0 === pb ? Mb : {
            column: Vb,
            line: pb
          }, this.css, this.file, gb.plugin), Hb.input = {
            column: Mb,
            endColumn: Vb,
            endLine: pb,
            line: wb,
            source: this.css
          }, this.file && (eb && (Hb.input.url = eb(this.file).toString()), Hb.input.file = this.file), Hb
        }
        fromOffset(bb) {
          let wb, Mb;
          if (this[Ib]) Mb = this[Ib];
          else {
            let bb = this.css.split("\n");
            Mb = new Array(bb.length);
            let wb = 0;
            for (let eb = 0, Hb = bb.length; eb < Hb; eb++) Mb[eb] = wb, wb += bb[eb].length + 1;
            this[Ib] = Mb
          }
          wb = Mb[Mb.length - 1];
          let eb = 0;
          if (bb >= wb) eb = Mb.length - 1;
          else {
            let wb, Hb = Mb.length - 2;
            for (; eb < Hb;)
              if (wb = eb + (Hb - eb >> 1), bb < Mb[wb]) Hb = wb - 1;
              else {
                if (!(bb >= Mb[wb + 1])) {
                  eb = wb;
                  break
                }
                eb = wb + 1
              }
          }
          return {
            col: bb - Mb[eb] + 1,
            line: eb + 1
          }
        }
        mapResolve(bb) {
          return /^\w+:\/\//.test(bb) ? bb : pb(this.map.consumer().sourceRoot || this.map.root || ".", bb)
        }
        origin(bb, wb, pb, Vb) {
          if (!this.map) return !1;
          let gb, lb, Lb = this.map.consumer(),
            Ib = Lb.originalPositionFor({
              column: wb,
              line: bb
            });
          if (!Ib.source) return !1;
          "number" === typeof pb && (gb = Lb.originalPositionFor({
            column: Vb,
            line: pb
          })), lb = Hb(Ib.source) ? eb(Ib.source) : new URL(Ib.source, this.map.consumer().sourceRoot || eb(this.map.mapFile));
          let Ob = {
            column: Ib.column,
            endColumn: gb && gb.column,
            endLine: gb && gb.line,
            line: Ib.line,
            url: lb.toString()
          };
          if ("file:" === lb.protocol) {
            if (!Mb) throw new Error("file: protocol is not available in this PostCSS build");
            Ob.file = Mb(lb)
          }
          let Ub = Lb.sourceContentFor(Ib.source);
          return Ub && (Ob.source = Ub), Ob
        }
        toJSON() {
          let bb = {};
          for (let wb of ["hasBOM", "css", "file", "id"]) null != this[wb] && (bb[wb] = this[wb]);
          return this.map && (bb.map = {
            ...this.map
          }, bb.map.consumerCache && (bb.map.consumerCache = void 0)), bb
        }
        get from() {
          return this.file || this.id
        }
      }
      return Ae = tb, tb.default = tb, gb && gb.registerInput && gb.registerInput(tb), Ae
    }

    function YH() {
      if (Se) return Je;
      Se = 1;
      let {
        SourceMapConsumer: bb,
        SourceMapGenerator: wb
      } = Fe, {
        dirname: Mb,
        relative: eb,
        resolve: Hb,
        sep: pb
      } = Fe, {
        pathToFileURL: Vb
      } = Fe, gb = cH(), lb = Boolean(bb && wb), Lb = Boolean(Mb && Hb && eb && pb);
      return Je = class {
        constructor(bb, wb, Mb, eb) {
          this.stringify = bb, this.mapOpts = Mb.map || {}, this.root = wb, this.opts = Mb, this.css = eb, this.originalCSS = eb, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let bb;
          bb = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let wb = "\n";
          this.css.includes("\r\n") && (wb = "\r\n"), this.css += wb + "/*# sourceMappingURL=" + bb + " */"
        }
        applyPrevMaps() {
          for (let wb of this.previous()) {
            let eb, Hb = this.toUrl(this.path(wb.file)),
              pb = wb.root || Mb(wb.file);
            !1 === this.mapOpts.sourcesContent ? (eb = new bb(wb.text), eb.sourcesContent && (eb.sourcesContent = null)) : eb = wb.consumer(), this.map.applySourceMap(eb, Hb, this.toUrl(this.path(pb)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let bb;
              for (let wb = this.root.nodes.length - 1; wb >= 0; wb--) bb = this.root.nodes[wb], "comment" === bb.type && 0 === bb.text.indexOf("# sourceMappingURL=") && this.root.removeChild(wb)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), Lb && lb && this.isMap()) return this.generateMap();
          {
            let bb = "";
            return this.stringify(this.root, (wb => {
              bb += wb
            })), [bb]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let bb = this.previous()[0].consumer();
            bb.file = this.outputFile(), this.map = wb.fromSourceMap(bb, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new wb({
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
          this.css = "", this.map = new wb({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let bb, Mb, eb = 1,
            Hb = 1,
            pb = "<no source>",
            Vb = {
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
          this.stringify(this.root, ((wb, gb, lb) => {
            if (this.css += wb, gb && "end" !== lb && (Vb.generated.line = eb, Vb.generated.column = Hb - 1, gb.source && gb.source.start ? (Vb.source = this.sourcePath(gb), Vb.original.line = gb.source.start.line, Vb.original.column = gb.source.start.column - 1, this.map.addMapping(Vb)) : (Vb.source = pb, Vb.original.line = 1, Vb.original.column = 0, this.map.addMapping(Vb))), bb = wb.match(/\n/g), bb ? (eb += bb.length, Mb = wb.lastIndexOf("\n"), Hb = wb.length - Mb) : Hb += wb.length, gb && "start" !== lb) {
              let bb = gb.parent || {
                raws: {}
              };
              ("decl" === gb.type || "atrule" === gb.type && !gb.nodes) && gb === bb.last && !bb.raws.semicolon || (gb.source && gb.source.end ? (Vb.source = this.sourcePath(gb), Vb.original.line = gb.source.end.line, Vb.original.column = gb.source.end.column - 1, Vb.generated.line = eb, Vb.generated.column = Hb - 2, this.map.addMapping(Vb)) : (Vb.source = pb, Vb.original.line = 1, Vb.original.column = 0, Vb.generated.line = eb, Vb.generated.column = Hb - 1, this.map.addMapping(Vb)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((bb => bb.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let bb = this.mapOpts.annotation;
          return ("undefined" === typeof bb || !0 === bb) && (!this.previous().length || this.previous().some((bb => bb.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((bb => bb.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(bb) {
          if (this.mapOpts.absolute) return bb;
          if (60 === bb.charCodeAt(0)) return bb;
          if (/^\w+:\/\//.test(bb)) return bb;
          let wb = this.memoizedPaths.get(bb);
          if (wb) return wb;
          let pb = this.opts.to ? Mb(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (pb = Mb(Hb(pb, this.mapOpts.annotation)));
          let Vb = eb(pb, bb);
          return this.memoizedPaths.set(bb, Vb), Vb
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((bb => {
              if (bb.source && bb.source.input.map) {
                let wb = bb.source.input.map;
                this.previousMaps.includes(wb) || this.previousMaps.push(wb)
              }
            }));
            else {
              let bb = new gb(this.originalCSS, this.opts);
              bb.map && this.previousMaps.push(bb.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let bb = {};
          if (this.root) this.root.walk((wb => {
            if (wb.source) {
              let Mb = wb.source.input.from;
              if (Mb && !bb[Mb]) {
                bb[Mb] = !0;
                let eb = this.usesFileUrls ? this.toFileUrl(Mb) : this.toUrl(this.path(Mb));
                this.map.setSourceContent(eb, wb.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let bb = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(bb, this.css)
          }
        }
        sourcePath(bb) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(bb.source.input.from) : this.toUrl(this.path(bb.source.input.from))
        }
        toBase64(bb) {
          return Buffer ? Buffer.from(bb).toString("base64") : window.btoa(unescape(encodeURIComponent(bb)))
        }
        toFileUrl(bb) {
          let wb = this.memoizedFileURLs.get(bb);
          if (wb) return wb;
          if (Vb) {
            let wb = Vb(bb).toString();
            return this.memoizedFileURLs.set(bb, wb), wb
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(bb) {
          let wb = this.memoizedURLs.get(bb);
          if (wb) return wb;
          "\\" === pb && (bb = bb.replace(/\\/g, "/"));
          let Mb = encodeURI(bb).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(bb, Mb), Mb
        }
      }
    }

    function ZH() {
      if (ve) return Ne;
      ve = 1;
      let bb = KH();
      class wb extends bb {
        constructor(bb) {
          super(bb), this.type = "comment"
        }
      }
      return Ne = wb, wb.default = wb, Ne
    }

    function fH() {
      if (Ge) return Qe;
      Ge = 1;
      let bb, wb, Mb, eb, {
          isClean: Hb,
          my: pb
        } = XH(),
        Vb = rH(),
        gb = ZH(),
        lb = KH();

      function Lb(bb) {
        return bb.map((bb => (bb.nodes && (bb.nodes = Lb(bb.nodes)), delete bb.source, bb)))
      }

      function Ib(bb) {
        if (bb[Hb] = !1, bb.proxyOf.nodes)
          for (let wb of bb.proxyOf.nodes) Ib(wb)
      }
      class Ob extends lb {
        append() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          for (let eb of wb) {
            let bb = this.normalize(eb, this.last);
            for (let wb of bb) this.proxyOf.nodes.push(wb)
          }
          return this.markDirty(), this
        }
        cleanRaws(bb) {
          if (super.cleanRaws(bb), this.nodes)
            for (let wb of this.nodes) wb.cleanRaws(bb)
        }
        each(bb) {
          if (!this.proxyOf.nodes) return;
          let wb, Mb, eb = this.getIterator();
          for (; this.indexes[eb] < this.proxyOf.nodes.length && (wb = this.indexes[eb], Mb = bb(this.proxyOf.nodes[wb], wb), !1 !== Mb);) this.indexes[eb] += 1;
          return delete this.indexes[eb], Mb
        }
        every(bb) {
          return this.nodes.every(bb)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let bb = this.lastEach;
          return this.indexes[bb] = 0, bb
        }
        getProxyProcessor() {
          return {
            get: (bb, wb) => "proxyOf" === wb ? bb : bb[wb] ? "each" === wb || "string" === typeof wb && wb.startsWith("walk") ? function() {
              for (var Mb = arguments.length, eb = new Array(Mb), Hb = 0; Hb < Mb; Hb++) eb[Hb] = arguments[Hb];
              return bb[wb](...eb.map((bb => "function" === typeof bb ? (wb, Mb) => bb(wb.toProxy(), Mb) : bb)))
            } : "every" === wb || "some" === wb ? Mb => bb[wb]((function(bb) {
              for (var wb = arguments.length, eb = new Array(wb > 1 ? wb - 1 : 0), Hb = 1; Hb < wb; Hb++) eb[Hb - 1] = arguments[Hb];
              return Mb(bb.toProxy(), ...eb)
            })) : "root" === wb ? () => bb.root().toProxy() : "nodes" === wb ? bb.nodes.map((bb => bb.toProxy())) : "first" === wb || "last" === wb ? bb[wb].toProxy() : bb[wb] : bb[wb],
            set: (bb, wb, Mb) => (bb[wb] === Mb || (bb[wb] = Mb, "name" !== wb && "params" !== wb && "selector" !== wb || bb.markDirty()), !0)
          }
        }
        index(bb) {
          return "number" === typeof bb ? bb : (bb.proxyOf && (bb = bb.proxyOf), this.proxyOf.nodes.indexOf(bb))
        }
        insertAfter(bb, wb) {
          let Mb, eb = this.index(bb),
            Hb = this.normalize(wb, this.proxyOf.nodes[eb]).reverse();
          eb = this.index(bb);
          for (let pb of Hb) this.proxyOf.nodes.splice(eb + 1, 0, pb);
          for (let pb in this.indexes) Mb = this.indexes[pb], eb < Mb && (this.indexes[pb] = Mb + Hb.length);
          return this.markDirty(), this
        }
        insertBefore(bb, wb) {
          let Mb, eb = this.index(bb),
            Hb = 0 === eb && "prepend",
            pb = this.normalize(wb, this.proxyOf.nodes[eb], Hb).reverse();
          eb = this.index(bb);
          for (let Vb of pb) this.proxyOf.nodes.splice(eb, 0, Vb);
          for (let Vb in this.indexes) Mb = this.indexes[Vb], eb <= Mb && (this.indexes[Vb] = Mb + pb.length);
          return this.markDirty(), this
        }
        normalize(eb, lb) {
          if ("string" === typeof eb) eb = Lb(bb(eb).nodes);
          else if ("undefined" === typeof eb) eb = [];
          else if (Array.isArray(eb)) {
            eb = eb.slice(0);
            for (let bb of eb) bb.parent && bb.parent.removeChild(bb, "ignore")
          } else if ("root" === eb.type && "document" !== this.type) {
            eb = eb.nodes.slice(0);
            for (let bb of eb) bb.parent && bb.parent.removeChild(bb, "ignore")
          } else if (eb.type) eb = [eb];
          else if (eb.prop) {
            if ("undefined" === typeof eb.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof eb.value && (eb.value = String(eb.value)), eb = [new Vb(eb)]
          } else if (eb.selector) eb = [new wb(eb)];
          else if (eb.name) eb = [new Mb(eb)];
          else {
            if (!eb.text) throw new Error("Unknown node type in node creation");
            eb = [new gb(eb)]
          }
          return eb.map((bb => (bb[pb] || Ob.rebuild(bb), (bb = bb.proxyOf).parent && bb.parent.removeChild(bb), bb[Hb] && Ib(bb), "undefined" === typeof bb.raws.before && lb && "undefined" !== typeof lb.raws.before && (bb.raws.before = lb.raws.before.replace(/\S/g, "")), bb.parent = this.proxyOf, bb)))
        }
        prepend() {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          wb = wb.reverse();
          for (let eb of wb) {
            let bb = this.normalize(eb, this.first, "prepend").reverse();
            for (let wb of bb) this.proxyOf.nodes.unshift(wb);
            for (let wb in this.indexes) this.indexes[wb] = this.indexes[wb] + bb.length
          }
          return this.markDirty(), this
        }
        push(bb) {
          return bb.parent = this, this.proxyOf.nodes.push(bb), this
        }
        removeAll() {
          for (let bb of this.proxyOf.nodes) bb.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(bb) {
          let wb;
          bb = this.index(bb), this.proxyOf.nodes[bb].parent = void 0, this.proxyOf.nodes.splice(bb, 1);
          for (let Mb in this.indexes) wb = this.indexes[Mb], wb >= bb && (this.indexes[Mb] = wb - 1);
          return this.markDirty(), this
        }
        replaceValues(bb, wb, Mb) {
          return Mb || (Mb = wb, wb = {}), this.walkDecls((eb => {
            wb.props && !wb.props.includes(eb.prop) || wb.fast && !eb.value.includes(wb.fast) || (eb.value = eb.value.replace(bb, Mb))
          })), this.markDirty(), this
        }
        some(bb) {
          return this.nodes.some(bb)
        }
        walk(bb) {
          return this.each(((wb, Mb) => {
            let eb;
            try {
              eb = bb(wb, Mb)
            } catch (Hb) {
              throw wb.addToError(Hb)
            }
            return !1 !== eb && wb.walk && (eb = wb.walk(bb)), eb
          }))
        }
        walkAtRules(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("atrule" === Mb.type && bb.test(Mb.name)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("atrule" === Mb.type && Mb.name === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("atrule" === bb.type) return wb(bb, Mb)
          })))
        }
        walkComments(bb) {
          return this.walk(((wb, Mb) => {
            if ("comment" === wb.type) return bb(wb, Mb)
          }))
        }
        walkDecls(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("decl" === Mb.type && bb.test(Mb.prop)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("decl" === Mb.type && Mb.prop === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("decl" === bb.type) return wb(bb, Mb)
          })))
        }
        walkRules(bb, wb) {
          return wb ? bb instanceof RegExp ? this.walk(((Mb, eb) => {
            if ("rule" === Mb.type && bb.test(Mb.selector)) return wb(Mb, eb)
          })) : this.walk(((Mb, eb) => {
            if ("rule" === Mb.type && Mb.selector === bb) return wb(Mb, eb)
          })) : (wb = bb, this.walk(((bb, Mb) => {
            if ("rule" === bb.type) return wb(bb, Mb)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return Ob.registerParse = wb => {
        bb = wb
      }, Ob.registerRule = bb => {
        wb = bb
      }, Ob.registerAtRule = bb => {
        Mb = bb
      }, Ob.registerRoot = bb => {
        eb = bb
      }, Qe = Ob, Ob.default = Ob, Ob.rebuild = bb => {
        "atrule" === bb.type ? Object.setPrototypeOf(bb, Mb.prototype) : "rule" === bb.type ? Object.setPrototypeOf(bb, wb.prototype) : "decl" === bb.type ? Object.setPrototypeOf(bb, Vb.prototype) : "comment" === bb.type ? Object.setPrototypeOf(bb, gb.prototype) : "root" === bb.type && Object.setPrototypeOf(bb, eb.prototype), bb[pb] = !0, bb.nodes && bb.nodes.forEach((bb => {
          Ob.rebuild(bb)
        }))
      }, Qe
    }

    function AH() {
      if (ae) return qe;
      ae = 1;
      let bb, wb, Mb = fH();
      class eb extends Mb {
        constructor(bb) {
          super({
            type: "document",
            ...bb
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new bb(new wb, this, Mb).stringify()
        }
      }
      return eb.registerLazyResult = wb => {
        bb = wb
      }, eb.registerProcessor = bb => {
        wb = bb
      }, qe = eb, eb.default = eb, qe
    }

    function WH() {
      if (ue) return ie;
      ue = 1;
      let bb = {};
      return ie = function(wb) {
        bb[wb] || (bb[wb] = !0, "undefined" !== typeof console && console.warn && console.warn(wb))
      }
    }

    function JH() {
      if (Pe) return de;
      Pe = 1;
      class bb {
        constructor(bb) {
          let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = bb, wb.node && wb.node.source) {
            let bb = wb.node.rangeBy(wb);
            this.line = bb.start.line, this.column = bb.start.column, this.endLine = bb.end.line, this.endColumn = bb.end.column
          }
          for (let Mb in wb) this[Mb] = wb[Mb]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return de = bb, bb.default = bb, de
    }

    function SH() {
      if (ye) return ne;
      ye = 1;
      let bb = JH();
      class wb {
        constructor(bb, wb, Mb) {
          this.processor = bb, this.messages = [], this.root = wb, this.opts = Mb, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(wb) {
          let Mb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          Mb.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (Mb.plugin = this.lastPlugin.postcssPlugin);
          let eb = new bb(wb, Mb);
          return this.messages.push(eb), eb
        }
        warnings() {
          return this.messages.filter((bb => "warning" === bb.type))
        }
        get content() {
          return this.css
        }
      }
      return ne = wb, wb.default = wb, ne
    }

    function NH() {
      if (bH) return ke;
      bH = 1;
      let bb = fH();
      class wb extends bb {
        constructor(bb) {
          super(bb), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return ke = wb, wb.default = wb, bb.registerAtRule(wb), ke
    }

    function vH() {
      if (MH) return wH;
      MH = 1;
      let bb, wb, Mb = fH();
      class eb extends Mb {
        constructor(bb) {
          super(bb), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(bb, wb, Mb) {
          let eb = super.normalize(bb);
          if (wb)
            if ("prepend" === Mb) this.nodes.length > 1 ? wb.raws.before = this.nodes[1].raws.before : delete wb.raws.before;
            else if (this.first !== wb)
            for (let Hb of eb) Hb.raws.before = wb.raws.before;
          return eb
        }
        removeChild(bb, wb) {
          let Mb = this.index(bb);
          return !wb && 0 === Mb && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[Mb].raws.before), super.removeChild(bb)
        }
        toResult() {
          let Mb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new bb(new wb, this, Mb).stringify()
        }
      }
      return eb.registerLazyResult = wb => {
        bb = wb
      }, eb.registerProcessor = bb => {
        wb = bb
      }, wH = eb, eb.default = eb, Mb.registerRoot(eb), wH
    }

    function QH() {
      if (HH) return eH;
      HH = 1;
      let bb = {
        comma: wb => bb.split(wb, [","], !0),
        space: wb => bb.split(wb, [" ", "\n", "\t"]),
        split(bb, wb, Mb) {
          let eb = [],
            Hb = "",
            pb = !1,
            Vb = 0,
            gb = !1,
            lb = "",
            Lb = !1;
          for (let Ib of bb) Lb ? Lb = !1 : "\\" === Ib ? Lb = !0 : gb ? Ib === lb && (gb = !1) : '"' === Ib || "'" === Ib ? (gb = !0, lb = Ib) : "(" === Ib ? Vb += 1 : ")" === Ib ? Vb > 0 && (Vb -= 1) : 0 === Vb && wb.includes(Ib) && (pb = !0), pb ? ("" !== Hb && eb.push(Hb.trim()), Hb = "", pb = !1) : Hb += Ib;
          return (Mb || "" !== Hb) && eb.push(Hb.trim()), eb
        }
      };
      return eH = bb, bb.default = bb, eH
    }

    function GH() {
      if (VH) return pH;
      VH = 1;
      let bb = fH(),
        wb = QH();
      class Mb extends bb {
        constructor(bb) {
          super(bb), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return wb.comma(this.selector)
        }
        set selectors(bb) {
          let wb = this.selector ? this.selector.match(/,\s*/) : null,
            Mb = wb ? wb[0] : "," + this.raw("between", "beforeOpen");
          this.selector = bb.join(Mb)
        }
      }
      return pH = Mb, Mb.default = Mb, bb.registerRule(Mb), pH
    }

    function qH() {
      if (lH) return gH;
      lH = 1;
      let bb = rH(),
        wb = function() {
          if (Te) return oe;
          Te = 1;
          const bb = "'".charCodeAt(0),
            wb = '"'.charCodeAt(0),
            Mb = "\\".charCodeAt(0),
            eb = "/".charCodeAt(0),
            Hb = "\n".charCodeAt(0),
            pb = " ".charCodeAt(0),
            Vb = "\f".charCodeAt(0),
            gb = "\t".charCodeAt(0),
            lb = "\r".charCodeAt(0),
            Lb = "[".charCodeAt(0),
            Ib = "]".charCodeAt(0),
            Ob = "(".charCodeAt(0),
            Ub = ")".charCodeAt(0),
            tb = "{".charCodeAt(0),
            Cb = "}".charCodeAt(0),
            Eb = ";".charCodeAt(0),
            Fb = "*".charCodeAt(0),
            Bb = ":".charCodeAt(0),
            sb = "@".charCodeAt(0),
            mb = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            hb = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            zb = /.[\r\n"'(/\\]/,
            Xb = /[\da-f]/i;
          return oe = function(xb) {
            let jb, Kb, rb, Rb, Db, cb, Yb, Zb, fb, Ab, Wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              Jb = xb.css.valueOf(),
              Sb = Wb.ignoreErrors,
              Nb = Jb.length,
              vb = 0,
              Qb = [],
              Gb = [];

            function qb(bb) {
              throw xb.error("Unclosed " + bb, vb)
            }
            return {
              back: function(bb) {
                Gb.push(bb)
              },
              endOfFile: function() {
                return 0 === Gb.length && vb >= Nb
              },
              nextToken: function(xb) {
                if (Gb.length) return Gb.pop();
                if (vb >= Nb) return;
                let Wb = !!xb && xb.ignoreUnclosed;
                switch (jb = Jb.charCodeAt(vb), jb) {
                  case Hb:
                  case pb:
                  case gb:
                  case lb:
                  case Vb:
                    Kb = vb;
                    do {
                      Kb += 1, jb = Jb.charCodeAt(Kb)
                    } while (jb === pb || jb === Hb || jb === gb || jb === lb || jb === Vb);
                    Ab = ["space", Jb.slice(vb, Kb)], vb = Kb - 1;
                    break;
                  case Lb:
                  case Ib:
                  case tb:
                  case Cb:
                  case Bb:
                  case Eb:
                  case Ub: {
                    let bb = String.fromCharCode(jb);
                    Ab = [bb, bb, vb];
                    break
                  }
                  case Ob:
                    if (Zb = Qb.length ? Qb.pop()[1] : "", fb = Jb.charCodeAt(vb + 1), "url" === Zb && fb !== bb && fb !== wb && fb !== pb && fb !== Hb && fb !== gb && fb !== Vb && fb !== lb) {
                      Kb = vb;
                      do {
                        if (cb = !1, Kb = Jb.indexOf(")", Kb + 1), -1 === Kb) {
                          if (Sb || Wb) {
                            Kb = vb;
                            break
                          }
                          qb("bracket")
                        }
                        for (Yb = Kb; Jb.charCodeAt(Yb - 1) === Mb;) Yb -= 1, cb = !cb
                      } while (cb);
                      Ab = ["brackets", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb
                    } else Kb = Jb.indexOf(")", vb + 1), Rb = Jb.slice(vb, Kb + 1), -1 === Kb || zb.test(Rb) ? Ab = ["(", "(", vb] : (Ab = ["brackets", Rb, vb, Kb], vb = Kb);
                    break;
                  case bb:
                  case wb:
                    rb = jb === bb ? "'" : '"', Kb = vb;
                    do {
                      if (cb = !1, Kb = Jb.indexOf(rb, Kb + 1), -1 === Kb) {
                        if (Sb || Wb) {
                          Kb = vb + 1;
                          break
                        }
                        qb("string")
                      }
                      for (Yb = Kb; Jb.charCodeAt(Yb - 1) === Mb;) Yb -= 1, cb = !cb
                    } while (cb);
                    Ab = ["string", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  case sb:
                    mb.lastIndex = vb + 1, mb.test(Jb), Kb = 0 === mb.lastIndex ? Jb.length - 1 : mb.lastIndex - 2, Ab = ["at-word", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  case Mb:
                    for (Kb = vb, Db = !0; Jb.charCodeAt(Kb + 1) === Mb;) Kb += 1, Db = !Db;
                    if (jb = Jb.charCodeAt(Kb + 1), Db && jb !== eb && jb !== pb && jb !== Hb && jb !== gb && jb !== lb && jb !== Vb && (Kb += 1, Xb.test(Jb.charAt(Kb)))) {
                      for (; Xb.test(Jb.charAt(Kb + 1));) Kb += 1;
                      Jb.charCodeAt(Kb + 1) === pb && (Kb += 1)
                    }
                    Ab = ["word", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb;
                    break;
                  default:
                    jb === eb && Jb.charCodeAt(vb + 1) === Fb ? (Kb = Jb.indexOf("*/", vb + 2) + 1, 0 === Kb && (Sb || Wb ? Kb = Jb.length : qb("comment")), Ab = ["comment", Jb.slice(vb, Kb + 1), vb, Kb], vb = Kb) : (hb.lastIndex = vb + 1, hb.test(Jb), Kb = 0 === hb.lastIndex ? Jb.length - 1 : hb.lastIndex - 2, Ab = ["word", Jb.slice(vb, Kb + 1), vb, Kb], Qb.push(Ab), vb = Kb)
                }
                return vb++, Ab
              },
              position: function() {
                return vb
              }
            }
          }, oe
        }(),
        Mb = ZH(),
        eb = NH(),
        Hb = vH(),
        pb = GH();
      const Vb = {
        empty: !0,
        space: !0
      };
      return gH = class {
        constructor(bb) {
          this.input = bb, this.root = new Hb, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: bb,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(bb) {
          let wb, Mb, Hb, pb = new eb;
          pb.name = bb[1].slice(1), "" === pb.name && this.unnamedAtrule(pb, bb), this.init(pb, bb[2]);
          let Vb = !1,
            gb = !1,
            lb = [],
            Lb = [];
          for (; !this.tokenizer.endOfFile();) {
            if (wb = (bb = this.tokenizer.nextToken())[0], "(" === wb || "[" === wb ? Lb.push("(" === wb ? ")" : "]") : "{" === wb && Lb.length > 0 ? Lb.push("}") : wb === Lb[Lb.length - 1] && Lb.pop(), 0 === Lb.length) {
              if (";" === wb) {
                pb.source.end = this.Qm(bb[2]), pb.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === wb) {
                gb = !0;
                break
              }
              if ("}" === wb) {
                if (lb.length > 0) {
                  for (Hb = lb.length - 1, Mb = lb[Hb]; Mb && "space" === Mb[0];) Mb = lb[--Hb];
                  Mb && (pb.source.end = this.Qm(Mb[3] || Mb[2]), pb.source.end.offset++)
                }
                this.end(bb);
                break
              }
              lb.push(bb)
            } else lb.push(bb);
            if (this.tokenizer.endOfFile()) {
              Vb = !0;
              break
            }
          }
          pb.raws.between = this.spacesAndCommentsFromEnd(lb), lb.length ? (pb.raws.afterName = this.spacesAndCommentsFromStart(lb), this.raw(pb, "params", lb), Vb && (bb = lb[lb.length - 1], pb.source.end = this.Qm(bb[3] || bb[2]), pb.source.end.offset++, this.spaces = pb.raws.between, pb.raws.between = "")) : (pb.raws.afterName = "", pb.params = ""), gb && (pb.nodes = [], this.current = pb)
        }
        checkMissedSemicolon(bb) {
          let wb = this.colon(bb);
          if (!1 === wb) return;
          let Mb, eb = 0;
          for (let Hb = wb - 1; Hb >= 0 && (Mb = bb[Hb], "space" === Mb[0] || (eb += 1, 2 !== eb)); Hb--);
          throw this.input.error("Missed semicolon", "word" === Mb[0] ? Mb[3] + 1 : Mb[2])
        }
        colon(bb) {
          let wb, Mb, eb, Hb = 0;
          for (let [pb, Vb] of bb.entries()) {
            if (wb = Vb, Mb = wb[0], "(" === Mb && (Hb += 1), ")" === Mb && (Hb -= 1), 0 === Hb && ":" === Mb) {
              if (eb) {
                if ("word" === eb[0] && "progid" === eb[1]) continue;
                return pb
              }
              this.doubleColon(wb)
            }
            eb = wb
          }
          return !1
        }
        comment(bb) {
          let wb = new Mb;
          this.init(wb, bb[2]), wb.source.end = this.Qm(bb[3] || bb[2]), wb.source.end.offset++;
          let eb = bb[1].slice(2, -2);
          if (/^\s*$/.test(eb)) wb.text = "", wb.raws.left = eb, wb.raws.right = "";
          else {
            let bb = eb.match(/^(\s*)([^]*\S)(\s*)$/);
            wb.text = bb[2], wb.raws.left = bb[1], wb.raws.right = bb[3]
          }
        }
        createTokenizer() {
          this.tokenizer = wb(this.input)
        }
        decl(wb, Mb) {
          let eb = new bb;
          this.init(eb, wb[0][2]);
          let Hb, pb = wb[wb.length - 1];
          for (";" === pb[0] && (this.semicolon = !0, wb.pop()), eb.source.end = this.Qm(pb[3] || pb[2] || function(bb) {
              for (let wb = bb.length - 1; wb >= 0; wb--) {
                let Mb = bb[wb],
                  eb = Mb[3] || Mb[2];
                if (eb) return eb
              }
            }(wb)), eb.source.end.offset++;
            "word" !== wb[0][0];) 1 === wb.length && this.unknownWord(wb), eb.raws.before += wb.shift()[1];
          for (eb.source.start = this.Qm(wb[0][2]), eb.prop = ""; wb.length;) {
            let bb = wb[0][0];
            if (":" === bb || "space" === bb || "comment" === bb) break;
            eb.prop += wb.shift()[1]
          }
          for (eb.raws.between = ""; wb.length;) {
            if (Hb = wb.shift(), ":" === Hb[0]) {
              eb.raws.between += Hb[1];
              break
            }
            "word" === Hb[0] && /\w/.test(Hb[1]) && this.unknownWord([Hb]), eb.raws.between += Hb[1]
          }
          "_" !== eb.prop[0] && "*" !== eb.prop[0] || (eb.raws.before += eb.prop[0], eb.prop = eb.prop.slice(1));
          let Vb, gb = [];
          for (; wb.length && (Vb = wb[0][0], "space" === Vb || "comment" === Vb);) gb.push(wb.shift());
          this.precheckMissedSemicolon(wb);
          for (let bb = wb.length - 1; bb >= 0; bb--) {
            if (Hb = wb[bb], "!important" === Hb[1].toLowerCase()) {
              eb.important = !0;
              let Mb = this.stringFrom(wb, bb);
              Mb = this.spacesFromEnd(wb) + Mb, " !important" !== Mb && (eb.raws.important = Mb);
              break
            }
            if ("important" === Hb[1].toLowerCase()) {
              let Mb = wb.slice(0),
                Hb = "";
              for (let wb = bb; wb > 0; wb--) {
                let bb = Mb[wb][0];
                if (0 === Hb.trim().indexOf("!") && "space" !== bb) break;
                Hb = Mb.pop()[1] + Hb
              }
              0 === Hb.trim().indexOf("!") && (eb.important = !0, eb.raws.important = Hb, wb = Mb)
            }
            if ("space" !== Hb[0] && "comment" !== Hb[0]) break
          }
          wb.some((bb => "space" !== bb[0] && "comment" !== bb[0])) && (eb.raws.between += gb.map((bb => bb[1])).join(""), gb = []), this.raw(eb, "value", gb.concat(wb), Mb), eb.value.includes(":") && !Mb && this.checkMissedSemicolon(wb)
        }
        doubleColon(bb) {
          throw this.input.error("Double colon", {
            offset: bb[2]
          }, {
            offset: bb[2] + bb[1].length
          })
        }
        emptyRule(bb) {
          let wb = new pb;
          this.init(wb, bb[2]), wb.selector = "", wb.raws.between = "", this.current = wb
        }
        end(bb) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.Qm(bb[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(bb)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.Qm(this.tokenizer.position())
        }
        freeSemicolon(bb) {
          if (this.spaces += bb[1], this.current.nodes) {
            let bb = this.current.nodes[this.current.nodes.length - 1];
            bb && "rule" === bb.type && !bb.raws.ownSemicolon && (bb.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        Qm(bb) {
          let wb = this.input.fromOffset(bb);
          return {
            column: wb.col,
            line: wb.line,
            offset: bb
          }
        }
        init(bb, wb) {
          this.current.push(bb), bb.source = {
            input: this.input,
            start: this.Qm(wb)
          }, bb.raws.before = this.spaces, this.spaces = "", "comment" !== bb.type && (this.semicolon = !1)
        }
        other(bb) {
          let wb = !1,
            Mb = null,
            eb = !1,
            Hb = null,
            pb = [],
            Vb = bb[1].startsWith("--"),
            gb = [],
            lb = bb;
          for (; lb;) {
            if (Mb = lb[0], gb.push(lb), "(" === Mb || "[" === Mb) Hb || (Hb = lb), pb.push("(" === Mb ? ")" : "]");
            else if (Vb && eb && "{" === Mb) Hb || (Hb = lb), pb.push("}");
            else if (0 === pb.length) {
              if (";" === Mb) {
                if (eb) return void this.decl(gb, Vb);
                break
              }
              if ("{" === Mb) return void this.rule(gb);
              if ("}" === Mb) {
                this.tokenizer.back(gb.pop()), wb = !0;
                break
              }
              ":" === Mb && (eb = !0)
            } else Mb === pb[pb.length - 1] && (pb.pop(), 0 === pb.length && (Hb = null));
            lb = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (wb = !0), pb.length > 0 && this.unclosedBracket(Hb), wb && eb) {
            if (!Vb)
              for (; gb.length && (lb = gb[gb.length - 1][0], "space" === lb || "comment" === lb);) this.tokenizer.back(gb.pop());
            this.decl(gb, Vb)
          } else this.unknownWord(gb)
        }
        parse() {
          let bb;
          for (; !this.tokenizer.endOfFile();) switch (bb = this.tokenizer.nextToken(), bb[0]) {
            case "space":
              this.spaces += bb[1];
              break;
            case ";":
              this.freeSemicolon(bb);
              break;
            case "}":
              this.end(bb);
              break;
            case "comment":
              this.comment(bb);
              break;
            case "at-word":
              this.atrule(bb);
              break;
            case "{":
              this.emptyRule(bb);
              break;
            default:
              this.other(bb)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(bb, wb, Mb, eb) {
          let Hb, pb, gb, lb, Lb = Mb.length,
            Ib = "",
            Ob = !0;
          for (let Ub = 0; Ub < Lb; Ub += 1) Hb = Mb[Ub], pb = Hb[0], "space" !== pb || Ub !== Lb - 1 || eb ? "comment" === pb ? (lb = Mb[Ub - 1] ? Mb[Ub - 1][0] : "empty", gb = Mb[Ub + 1] ? Mb[Ub + 1][0] : "empty", Vb[lb] || Vb[gb] || "," === Ib.slice(-1) ? Ob = !1 : Ib += Hb[1]) : Ib += Hb[1] : Ob = !1;
          if (!Ob) {
            let eb = Mb.reduce(((bb, wb) => bb + wb[1]), "");
            bb.raws[wb] = {
              raw: eb,
              value: Ib
            }
          }
          bb[wb] = Ib
        }
        rule(bb) {
          bb.pop();
          let wb = new pb;
          this.init(wb, bb[0][2]), wb.raws.between = this.spacesAndCommentsFromEnd(bb), this.raw(wb, "selector", bb), this.current = wb
        }
        spacesAndCommentsFromEnd(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[bb.length - 1][0], "space" === wb || "comment" === wb);) Mb = bb.pop()[1] + Mb;
          return Mb
        }
        spacesAndCommentsFromStart(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[0][0], "space" === wb || "comment" === wb);) Mb += bb.shift()[1];
          return Mb
        }
        spacesFromEnd(bb) {
          let wb, Mb = "";
          for (; bb.length && (wb = bb[bb.length - 1][0], "space" === wb);) Mb = bb.pop()[1] + Mb;
          return Mb
        }
        stringFrom(bb, wb) {
          let Mb = "";
          for (let eb = wb; eb < bb.length; eb++) Mb += bb[eb][1];
          return bb.splice(wb, bb.length - wb), Mb
        }
        unclosedBlock() {
          let bb = this.current.source.start;
          throw this.input.error("Unclosed block", bb.line, bb.column)
        }
        unclosedBracket(bb) {
          throw this.input.error("Unclosed bracket", {
            offset: bb[2]
          }, {
            offset: bb[2] + 1
          })
        }
        unexpectedClose(bb) {
          throw this.input.error("Unexpected }", {
            offset: bb[2]
          }, {
            offset: bb[2] + 1
          })
        }
        unknownWord(bb) {
          throw this.input.error("Unknown word", {
            offset: bb[0][2]
          }, {
            offset: bb[0][2] + bb[0][1].length
          })
        }
        unnamedAtrule(bb, wb) {
          throw this.input.error("At-rule without name", {
            offset: wb[2]
          }, {
            offset: wb[2] + wb[1].length
          })
        }
      }
    }

    function aH() {
      if (IH) return LH;
      IH = 1;
      let bb = fH(),
        wb = qH(),
        Mb = cH();

      function eb(bb, eb) {
        let Hb = new Mb(bb, eb),
          pb = new wb(Hb);
        try {
          pb.parse()
        } catch (Vb) {
          throw Vb
        }
        return pb.root
      }
      return LH = eb, eb.default = eb, bb.registerParse(eb), LH
    }

    function iH() {
      if (UH) return OH;
      UH = 1;
      let {
        isClean: bb,
        my: wb
      } = XH(), Mb = YH(), eb = jH(), Hb = fH(), pb = AH(), Vb = (WH(), SH()), gb = aH(), lb = vH();
      const Lb = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        Ib = {
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
        Ob = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function Ub(bb) {
        return "object" === typeof bb && "function" === typeof bb.then
      }

      function tb(bb) {
        let wb = !1,
          Mb = Lb[bb.type];
        return "decl" === bb.type ? wb = bb.prop.toLowerCase() : "atrule" === bb.type && (wb = bb.name.toLowerCase()), wb && bb.append ? [Mb, Mb + "-" + wb, 0, Mb + "Exit", Mb + "Exit-" + wb] : wb ? [Mb, Mb + "-" + wb, Mb + "Exit", Mb + "Exit-" + wb] : bb.append ? [Mb, 0, Mb + "Exit"] : [Mb, Mb + "Exit"]
      }

      function Cb(bb) {
        let wb;
        return wb = "document" === bb.type ? ["Document", 0, "DocumentExit"] : "root" === bb.type ? ["Root", 0, "RootExit"] : tb(bb), {
          eventIndex: 0,
          events: wb,
          iterator: 0,
          node: bb,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Eb(wb) {
        return wb[bb] = !1, wb.nodes && wb.nodes.forEach((bb => Eb(bb))), wb
      }
      let Fb = {};
      class Bb {
        constructor(bb, Mb, eb) {
          let pb;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof Mb || null === Mb || "root" !== Mb.type && "document" !== Mb.type)
            if (Mb instanceof Bb || Mb instanceof Vb) pb = Eb(Mb.root), Mb.map && ("undefined" === typeof eb.map && (eb.map = {}), eb.map.inline || (eb.map.inline = !1), eb.map.prev = Mb.map);
            else {
              let bb = gb;
              eb.syntax && (bb = eb.syntax.parse), eb.parser && (bb = eb.parser), bb.parse && (bb = bb.parse);
              try {
                pb = bb(Mb, eb)
              } catch (lb) {
                this.processed = !0, this.error = lb
              }
              pb && !pb[wb] && Hb.rebuild(pb)
            }
          else pb = Eb(Mb);
          this.result = new Vb(bb, pb, eb), this.helpers = {
            ...Fb,
            postcss: Fb,
            result: this.result
          }, this.plugins = this.processor.plugins.map((bb => "object" === typeof bb && bb.prepare ? {
            ...bb,
            ...bb.prepare(this.result)
          } : bb))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (bb) {
          return this.async().catch(bb)
        } finally(bb) {
          return this.async().then(bb, bb)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(bb, wb) {
          let Mb = this.result.lastPlugin;
          try {
            wb && wb.addToError(bb), this.error = bb, "CssSyntaxError" !== bb.name || bb.plugin ? Mb.postcssVersion : (bb.plugin = Mb.postcssPlugin, bb.setMessage())
          } catch (eb) {
            console && console.error && console.error(eb)
          }
          return bb
        }
        prepareVisitors() {
          this.listeners = {};
          let bb = (bb, wb, Mb) => {
            this.listeners[wb] || (this.listeners[wb] = []), this.listeners[wb].push([bb, Mb])
          };
          for (let wb of this.plugins)
            if ("object" === typeof wb)
              for (let Mb in wb) {
                if (!Ib[Mb] && /^[A-Z]/.test(Mb)) throw new Error(`Unknown event ${Mb} in ${wb.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!Ob[Mb])
                  if ("object" === typeof wb[Mb])
                    for (let eb in wb[Mb]) bb(wb, "*" === eb ? Mb : Mb + "-" + eb.toLowerCase(), wb[Mb][eb]);
                  else "function" === typeof wb[Mb] && bb(wb, Mb, wb[Mb])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let bb = 0; bb < this.plugins.length; bb++) {
            let Mb = this.plugins[bb],
              eb = this.runOnRoot(Mb);
            if (Ub(eb)) try {
              await eb
            } catch (wb) {
              throw this.handleError(wb)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let wb = this.result.root;
            for (; !wb[bb];) {
              wb[bb] = !0;
              let eb = [Cb(wb)];
              for (; eb.length > 0;) {
                let bb = this.visitTick(eb);
                if (Ub(bb)) try {
                  await bb
                } catch (Mb) {
                  let bb = eb[eb.length - 1].node;
                  throw this.handleError(Mb, bb)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [bb, eb] of this.listeners.OnceExit) {
                this.result.lastPlugin = bb;
                try {
                  if ("document" === wb.type) {
                    let bb = wb.nodes.map((bb => eb(bb, this.helpers)));
                    await Promise.all(bb)
                  } else await eb(wb, this.helpers)
                } catch (Mb) {
                  throw this.handleError(Mb)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(bb) {
          this.result.lastPlugin = bb;
          try {
            if ("object" === typeof bb && bb.Once) {
              if ("document" === this.result.root.type) {
                let wb = this.result.root.nodes.map((wb => bb.Once(wb, this.helpers)));
                return Ub(wb[0]) ? Promise.all(wb) : wb
              }
              return bb.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof bb) return bb(this.result.root, this.result)
          } catch (wb) {
            throw this.handleError(wb)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let bb = this.result.opts,
            wb = eb;
          bb.syntax && (wb = bb.syntax.stringify), bb.stringifier && (wb = bb.stringifier), wb.stringify && (wb = wb.stringify);
          let Hb = new Mb(wb, this.result.root, this.result.opts).generate();
          return this.result.css = Hb[0], this.result.map = Hb[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let bb of this.plugins) {
            if (Ub(this.runOnRoot(bb))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let wb = this.result.root;
            for (; !wb[bb];) wb[bb] = !0, this.walkSync(wb);
            if (this.listeners.OnceExit)
              if ("document" === wb.type)
                for (let bb of wb.nodes) this.visitSync(this.listeners.OnceExit, bb);
              else this.visitSync(this.listeners.OnceExit, wb)
          }
          return this.result
        }
        then(bb, wb) {
          return this.async().then(bb, wb)
        }
        toString() {
          return this.css
        }
        visitSync(bb, wb) {
          for (let [eb, Hb] of bb) {
            let bb;
            this.result.lastPlugin = eb;
            try {
              bb = Hb(wb, this.helpers)
            } catch (Mb) {
              throw this.handleError(Mb, wb.proxyOf)
            }
            if ("root" !== wb.type && "document" !== wb.type && !wb.parent) return !0;
            if (Ub(bb)) throw this.getAsyncError()
          }
        }
        visitTick(wb) {
          let Mb = wb[wb.length - 1],
            {
              node: eb,
              visitors: Hb
            } = Mb;
          if ("root" !== eb.type && "document" !== eb.type && !eb.parent) return void wb.pop();
          if (Hb.length > 0 && Mb.visitorIndex < Hb.length) {
            let [bb, wb] = Hb[Mb.visitorIndex];
            Mb.visitorIndex += 1, Mb.visitorIndex === Hb.length && (Mb.visitors = [], Mb.visitorIndex = 0), this.result.lastPlugin = bb;
            try {
              return wb(eb.toProxy(), this.helpers)
            } catch (Vb) {
              throw this.handleError(Vb, eb)
            }
          }
          if (0 !== Mb.iterator) {
            let Hb, pb = Mb.iterator;
            for (; Hb = eb.nodes[eb.indexes[pb]];)
              if (eb.indexes[pb] += 1, !Hb[bb]) return Hb[bb] = !0, void wb.push(Cb(Hb));
            Mb.iterator = 0, delete eb.indexes[pb]
          }
          let pb = Mb.events;
          for (; Mb.eventIndex < pb.length;) {
            let wb = pb[Mb.eventIndex];
            if (Mb.eventIndex += 1, 0 === wb) return void(eb.nodes && eb.nodes.length && (eb[bb] = !0, Mb.iterator = eb.getIterator()));
            if (this.listeners[wb]) return void(Mb.visitors = this.listeners[wb])
          }
          wb.pop()
        }
        walkSync(wb) {
          wb[bb] = !0;
          let Mb = tb(wb);
          for (let eb of Mb)
            if (0 === eb) wb.nodes && wb.each((wb => {
              wb[bb] || this.walkSync(wb)
            }));
            else {
              let bb = this.listeners[eb];
              if (bb && this.visitSync(bb, wb.toProxy())) return
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
      return Bb.registerPostcss = bb => {
        Fb = bb
      }, OH = Bb, Bb.default = Bb, lb.registerLazyResult(Bb), pb.registerLazyResult(Bb), OH
    }

    function uH() {
      if (FH) return EH;
      FH = 1;
      let bb = function() {
          if (CH) return tH;
          CH = 1;
          let bb = YH(),
            wb = jH(),
            Mb = (WH(), aH());
          const eb = SH();
          class Hb {
            constructor(Mb, Hb, pb) {
              let Vb;
              Hb = Hb.toString(), this.stringified = !1, this._processor = Mb, this._css = Hb, this._opts = pb, this._map = void 0;
              let gb = wb;
              this.result = new eb(this._processor, Vb, this._opts), this.result.css = Hb;
              let lb = this;
              Object.defineProperty(this.result, "root", {
                get: () => lb.root
              });
              let Lb = new bb(gb, Vb, this._opts, Hb);
              if (Lb.isMap()) {
                let [bb, wb] = Lb.generate();
                bb && (this.result.css = bb), wb && (this.result.map = wb)
              } else Lb.clearAnnotation(), this.result.css = Lb.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (bb) {
              return this.async().catch(bb)
            } finally(bb) {
              return this.async().then(bb, bb)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(bb, wb) {
              return this.async().then(bb, wb)
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
              let bb, wb = Mb;
              try {
                bb = wb(this._css, this._opts)
              } catch (eb) {
                this.error = eb
              }
              if (this.error) throw this.error;
              return this._root = bb, bb
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return tH = Hb, Hb.default = Hb, tH
        }(),
        wb = iH(),
        Mb = AH(),
        eb = vH();
      class Hb {
        constructor() {
          let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(bb)
        }
        normalize(bb) {
          let wb = [];
          for (let Mb of bb)
            if (!0 === Mb.postcss ? Mb = Mb() : Mb.postcss && (Mb = Mb.postcss), "object" === typeof Mb && Array.isArray(Mb.plugins)) wb = wb.concat(Mb.plugins);
            else if ("object" === typeof Mb && Mb.postcssPlugin) wb.push(Mb);
          else if ("function" === typeof Mb) wb.push(Mb);
          else {
            if ("object" !== typeof Mb || !Mb.parse && !Mb.stringify) throw new Error(Mb + " is not a PostCSS plugin")
          }
          return wb
        }
        process(Mb) {
          let eb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || eb.parser || eb.stringifier || eb.syntax ? new wb(this, Mb, eb) : new bb(this, Mb, eb)
        }
        use(bb) {
          return this.plugins = this.plugins.concat(this.normalize([bb])), this
        }
      }
      return EH = Hb, Hb.default = Hb, eb.registerProcessor(Hb), Mb.registerProcessor(Hb), EH
    }
    const dH = Oe(function() {
      if (hH) return mH;
      hH = 1;
      let bb = me(),
        wb = rH(),
        Mb = iH(),
        eb = fH(),
        Hb = uH(),
        pb = jH(),
        Vb = function() {
          if (sH) return BH;
          sH = 1;
          let bb = rH(),
            wb = DH(),
            Mb = ZH(),
            eb = NH(),
            Hb = cH(),
            pb = vH(),
            Vb = GH();

          function gb(lb, Lb) {
            if (Array.isArray(lb)) return lb.map((bb => gb(bb)));
            let {
              inputs: Ib,
              ...Ob
            } = lb;
            if (Ib) {
              Lb = [];
              for (let bb of Ib) {
                let Mb = {
                  ...bb,
                  __proto__: Hb.prototype
                };
                Mb.map && (Mb.map = {
                  ...Mb.map,
                  __proto__: wb.prototype
                }), Lb.push(Mb)
              }
            }
            if (Ob.nodes && (Ob.nodes = lb.nodes.map((bb => gb(bb, Lb)))), Ob.source) {
              let {
                inputId: bb,
                ...wb
              } = Ob.source;
              Ob.source = wb, null != bb && (Ob.source.input = Lb[bb])
            }
            if ("root" === Ob.type) return new pb(Ob);
            if ("decl" === Ob.type) return new bb(Ob);
            if ("rule" === Ob.type) return new Vb(Ob);
            if ("comment" === Ob.type) return new Mb(Ob);
            if ("atrule" === Ob.type) return new eb(Ob);
            throw new Error("Unknown node type: " + lb.type)
          }
          return BH = gb, gb.default = gb, BH
        }(),
        gb = AH(),
        lb = JH(),
        Lb = ZH(),
        Ib = NH(),
        Ob = SH(),
        Ub = cH(),
        tb = aH(),
        Cb = QH(),
        Eb = GH(),
        Fb = vH(),
        Bb = KH();

      function sb() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        return 1 === wb.length && Array.isArray(wb[0]) && (wb = wb[0]), new Hb(wb)
      }
      return sb.plugin = function(bb, wb) {
        let Mb, eb = !1;

        function pb() {
          console && console.warn && !eb && (eb = !0, console.warn(bb + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(bb + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let Mb = wb(...arguments);
          return Mb.postcssPlugin = bb, Mb.postcssVersion = (new Hb).version, Mb
        }
        return Object.defineProperty(pb, "postcss", {
          get: () => (Mb || (Mb = pb()), Mb)
        }), pb.process = function(bb, wb, Mb) {
          return sb([pb(Mb)]).process(bb, wb)
        }, pb
      }, sb.stringify = pb, sb.parse = tb, sb.fromJSON = Vb, sb.list = Cb, sb.comment = bb => new Lb(bb), sb.atRule = bb => new Ib(bb), sb.decl = bb => new wb(bb), sb.rule = bb => new Eb(bb), sb.root = bb => new Fb(bb), sb.document = bb => new gb(bb), sb.CssSyntaxError = bb, sb.Declaration = wb, sb.vN = eb, sb.Processor = Hb, sb.Document = gb, sb.Comment = Lb, sb.Warning = lb, sb.AtRule = Ib, sb.Result = Ob, sb.Input = Ub, sb.Rule = Eb, sb.Root = Fb, sb.Node = Bb, Mb.registerPostcss(sb), mH = sb, sb.default = sb, mH
    }());
    dH.stringify, dH.fromJSON, dH.plugin, dH.parse, dH.list, dH.document, dH.comment, dH.atRule, dH.rule, dH.decl, dH.root, dH.CssSyntaxError, dH.Declaration, dH.vN, dH.Processor, dH.Document, dH.Comment, dH.Warning, dH.AtRule, dH.Result, dH.Input, dH.Rule, dH.Root, dH.Node;
    var PH = (bb => (bb[bb.Document = 0] = "Document", bb[bb.DocumentType = 1] = "DocumentType", bb[bb.Element = 2] = "Element", bb[bb.Text = 3] = "Text", bb[bb.CDATA = 4] = "CDATA", bb[bb.Comment = 5] = "Comment", bb))(PH || {});

    function nH(bb) {
      const wb = [];
      for (const Mb in bb) {
        const eb = bb[Mb];
        if ("string" !== typeof eb) continue;
        const Hb = bp(Mb);
        wb.push(`${Hb}: ${eb};`)
      }
      return wb.join(" ")
    }
    const yH = /-([a-z])/g,
      oH = /^--[a-zA-Z0-9-]+$/,
      TH = bb => oH.test(bb) ? bb : bb.replace(yH, ((bb, wb) => wb ? wb.toUpperCase() : "")),
      kH = /\B([A-Z])/g,
      bp = bb => bb.replace(kH, "-$1").toLowerCase();
    class wp {
      constructor() {
        ge(this, "parentElement", null), ge(this, "parentNode", null), ge(this, "ownerDocument"), ge(this, "firstChild", null), ge(this, "lastChild", null), ge(this, "previousSibling", null), ge(this, "nextSibling", null), ge(this, "ELEMENT_NODE", 1), ge(this, "TEXT_NODE", 3), ge(this, "nodeType"), ge(this, "nodeName"), ge(this, "RRNodeType")
      }
      get childNodes() {
        const bb = [];
        let wb = this.firstChild;
        for (; wb;) bb.push(wb), wb = wb.nextSibling;
        return bb
      }
      contains(bb) {
        if (!(bb instanceof wp)) return !1;
        if (bb.ownerDocument !== this.ownerDocument) return !1;
        if (bb === this) return !0;
        for (; bb.parentNode;) {
          if (bb.parentNode === this) return !0;
          bb = bb.parentNode
        }
        return !1
      }
      appendChild(bb) {
        throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
      }
      insertBefore(bb, wb) {
        throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
      }
      removeChild(bb) {
        throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
      }
      toString() {
        return "RRNode"
      }
    }
    class Mp extends wp {
      constructor() {
        for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
        super(wb), ge(this, "nodeType", 9), ge(this, "nodeName", "#document"), ge(this, "compatMode", "CSS1Compat"), ge(this, "RRNodeType", PH.Document), ge(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((bb => bb.RRNodeType === PH.Element && "HTML" === bb.tagName)) || null
      }
      get body() {
        var bb;
        return (null == (bb = this.documentElement) ? void 0 : bb.childNodes.find((bb => bb.RRNodeType === PH.Element && "BODY" === bb.tagName))) || null
      }
      get head() {
        var bb;
        return (null == (bb = this.documentElement) ? void 0 : bb.childNodes.find((bb => bb.RRNodeType === PH.Element && "HEAD" === bb.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(bb) {
        const wb = bb.RRNodeType;
        if ((wb === PH.Element || wb === PH.DocumentType) && this.childNodes.some((bb => bb.RRNodeType === wb))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${wb===PH.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const Mb = Op(this, bb);
        return Mb.parentElement = null, Mb
      }
      insertBefore(bb, wb) {
        const Mb = bb.RRNodeType;
        if ((Mb === PH.Element || Mb === PH.DocumentType) && this.childNodes.some((bb => bb.RRNodeType === Mb))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${Mb===PH.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const eb = Up(this, bb, wb);
        return eb.parentElement = null, eb
      }
      removeChild(bb) {
        return tp(this, bb)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(bb) {
        let wb;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === bb ? wb = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === bb && (wb = "-//W3C//DTD HTML 4.0 Transitional//EN"), wb) {
          const bb = this.createDocumentType("html", wb, "");
          this.open(), this.appendChild(bb)
        }
      }
      createDocument(bb, wb, Mb) {
        return new Mp
      }
      createDocumentType(bb, wb, Mb) {
        const eb = new ep(bb, wb, Mb);
        return eb.ownerDocument = this, eb
      }
      createElement(bb) {
        const wb = new Hp(bb);
        return wb.ownerDocument = this, wb
      }
      createElementNS(bb, wb) {
        return this.createElement(wb)
      }
      createTextNode(bb) {
        const wb = new gp(bb);
        return wb.ownerDocument = this, wb
      }
      createComment(bb) {
        const wb = new lp(bb);
        return wb.ownerDocument = this, wb
      }
      createCDATASection(bb) {
        const wb = new Lp(bb);
        return wb.ownerDocument = this, wb
      }
      toString() {
        return "RRDocument"
      }
    }
    class ep extends wp {
      constructor(bb, wb, Mb) {
        super(), ge(this, "nodeType", 10), ge(this, "RRNodeType", PH.DocumentType), ge(this, "name"), ge(this, "publicId"), ge(this, "systemId"), ge(this, "textContent", null), this.name = bb, this.publicId = wb, this.systemId = Mb, this.nodeName = bb
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class Hp extends wp {
      constructor(bb) {
        super(), ge(this, "nodeType", 1), ge(this, "RRNodeType", PH.Element), ge(this, "tagName"), ge(this, "attributes", {}), ge(this, "shadowRoot", null), ge(this, "scrollLeft"), ge(this, "scrollTop"), this.tagName = bb.toUpperCase(), this.nodeName = bb.toUpperCase()
      }
      get textContent() {
        let bb = "";
        return this.childNodes.forEach((wb => bb += wb.textContent)), bb
      }
      set textContent(bb) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(bb))
      }
      get classList() {
        return new Ip(this.attributes.class, (bb => {
          this.attributes.class = bb
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const bb = this.attributes.style ? function(bb) {
            const wb = {},
              Mb = /:(.+)/;
            return bb.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(bb) {
              if (bb) {
                const eb = bb.split(Mb);
                eb.length > 1 && (wb[TH(eb[0].trim())] = eb[1].trim())
              }
            })), wb
          }(this.attributes.style) : {},
          wb = /\B([A-Z])/g;
        return bb.setProperty = (Mb, eb, Hb) => {
          if (wb.test(Mb)) return;
          const pb = TH(Mb);
          eb ? bb[pb] = eb : delete bb[pb], "important" === Hb && (bb[pb] += " !important"), this.attributes.style = nH(bb)
        }, bb.removeProperty = Mb => {
          if (wb.test(Mb)) return "";
          const eb = TH(Mb),
            Hb = bb[eb] || "";
          return delete bb[eb], this.attributes.style = nH(bb), Hb
        }, bb
      }
      getAttribute(bb) {
        return void 0 === this.attributes[bb] ? null : this.attributes[bb]
      }
      setAttribute(bb, wb) {
        this.attributes[bb] = wb
      }
      setAttributeNS(bb, wb, Mb) {
        this.setAttribute(wb, Mb)
      }
      removeAttribute(bb) {
        delete this.attributes[bb]
      }
      appendChild(bb) {
        return Op(this, bb)
      }
      insertBefore(bb, wb) {
        return Up(this, bb, wb)
      }
      removeChild(bb) {
        return tp(this, bb)
      }
      attachShadow(bb) {
        const wb = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = wb, wb
      }
      dispatchEvent(bb) {
        return !0
      }
      toString() {
        let bb = "";
        for (const wb in this.attributes) bb += `${wb}="${this.attributes[wb]}" `;
        return `${this.tagName} ${bb}`
      }
    }
    class pp extends Hp {
      constructor() {
        super(...arguments), ge(this, "currentTime"), ge(this, "volume"), ge(this, "paused"), ge(this, "muted"), ge(this, "playbackRate"), ge(this, "loop")
      }
      attachShadow(bb) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class Vp extends Hp {
      constructor() {
        super(...arguments), ge(this, "tagName", "DIALOG"), ge(this, "nodeName", "DIALOG")
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
    class gp extends wp {
      constructor(bb) {
        super(), ge(this, "nodeType", 3), ge(this, "nodeName", "#text"), ge(this, "RRNodeType", PH.Text), ge(this, "data"), this.data = bb
      }
      get textContent() {
        return this.data
      }
      set textContent(bb) {
        this.data = bb
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class lp extends wp {
      constructor(bb) {
        super(), ge(this, "nodeType", 8), ge(this, "nodeName", "#comment"), ge(this, "RRNodeType", PH.Comment), ge(this, "data"), this.data = bb
      }
      get textContent() {
        return this.data
      }
      set textContent(bb) {
        this.data = bb
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class Lp extends wp {
      constructor(bb) {
        super(), ge(this, "nodeName", "#cdata-section"), ge(this, "nodeType", 4), ge(this, "RRNodeType", PH.CDATA), ge(this, "data"), this.data = bb
      }
      get textContent() {
        return this.data
      }
      set textContent(bb) {
        this.data = bb
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class Ip {
      constructor(bb, wb) {
        var Mb = this;
        if (ge(this, "onChange"), ge(this, "classes", []), ge(this, "add", (function() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            for (const Hb of wb) {
              const bb = String(Hb);
              Mb.classes.indexOf(bb) >= 0 || Mb.classes.push(bb)
            }
            Mb.onChange && Mb.onChange(Mb.classes.join(" "))
          })), ge(this, "remove", (function() {
            for (var bb = arguments.length, wb = new Array(bb), eb = 0; eb < bb; eb++) wb[eb] = arguments[eb];
            Mb.classes = Mb.classes.filter((bb => -1 === wb.indexOf(bb))), Mb.onChange && Mb.onChange(Mb.classes.join(" "))
          })), bb) {
          const wb = bb.trim().split(/\s+/);
          this.classes.push(...wb)
        }
        this.onChange = wb
      }
    }

    function Op(bb, wb) {
      return wb.parentNode && wb.parentNode.removeChild(wb), bb.lastChild ? (bb.lastChild.nextSibling = wb, wb.previousSibling = bb.lastChild) : (bb.firstChild = wb, wb.previousSibling = null), bb.lastChild = wb, wb.nextSibling = null, wb.parentNode = bb, wb.parentElement = bb, wb.ownerDocument = bb.ownerDocument, wb
    }

    function Up(bb, wb, Mb) {
      if (!Mb) return Op(bb, wb);
      if (Mb.parentNode !== bb) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return wb === Mb || (wb.parentNode && wb.parentNode.removeChild(wb), wb.previousSibling = Mb.previousSibling, Mb.previousSibling = wb, wb.nextSibling = Mb, wb.previousSibling ? wb.previousSibling.nextSibling = wb : bb.firstChild = wb, wb.parentElement = bb, wb.parentNode = bb, wb.ownerDocument = bb.ownerDocument), wb
    }

    function tp(bb, wb) {
      if (wb.parentNode !== bb) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return wb.previousSibling ? wb.previousSibling.nextSibling = wb.nextSibling : bb.firstChild = wb.nextSibling, wb.nextSibling ? wb.nextSibling.previousSibling = wb.previousSibling : bb.lastChild = wb.previousSibling, wb.previousSibling = null, wb.nextSibling = null, wb.parentElement = null, wb.parentNode = null, wb
    }
    var Cp = (bb => (bb[bb.PLACEHOLDER = 0] = "PLACEHOLDER", bb[bb.ELEMENT_NODE = 1] = "ELEMENT_NODE", bb[bb.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", bb[bb.TEXT_NODE = 3] = "TEXT_NODE", bb[bb.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", bb[bb.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", bb[bb.ENTITY_NODE = 6] = "ENTITY_NODE", bb[bb.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", bb[bb.COMMENT_NODE = 8] = "COMMENT_NODE", bb[bb.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", bb[bb.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", bb[bb.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", bb))(Cp || {});
    const Ep = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      Fp = {
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
    let Bp = null;

    function sp(bb, wb, Mb) {
      let eb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : wb.mirror || wb.ownerDocument.mirror;
      bb = function(bb, wb, Mb, eb) {
          var Hb;
          Mb.afterAppend && !Bp && (Bp = new WeakSet, setTimeout((() => {
            Bp = null
          }), 0));
          if (!zp(bb, wb)) {
            const pb = hp(wb, Mb.mirror, eb);
            null == (Hb = bb.parentNode) || Hb.replaceChild(pb, bb), bb = pb
          }
          switch (wb.RRNodeType) {
            case PH.Document:
              if (!Xp(bb, wb, Mb.mirror, eb)) {
                const Hb = eb.getMeta(wb);
                Hb && (Mb.mirror.removeNodeFromMap(bb), bb.close(), bb.open(), Mb.mirror.add(bb, Hb), null == Bp || Bp.add(bb))
              }
              break;
            case PH.Element: {
              const Hb = bb,
                pb = wb;
              switch (pb.tagName) {
                case "IFRAME": {
                  const Hb = bb.contentDocument;
                  if (!Hb) break;
                  sp(Hb, wb.contentDocument, Mb, eb);
                  break
                }
              }
              pb.shadowRoot && (Hb.shadowRoot || Hb.attachShadow({
                  mode: "open"
                }), mp(Hb.shadowRoot, pb.shadowRoot, Mb, eb)),
                function(bb, wb, Mb) {
                  const eb = bb.attributes,
                    Hb = wb.attributes;
                  for (const Vb in Hb) {
                    const eb = Hb[Vb],
                      gb = Mb.getMeta(wb);
                    if ((null == gb ? void 0 : gb.isSVG) && Ep[Vb]) bb.setAttributeNS(Ep[Vb], Vb, eb);
                    else if ("CANVAS" === wb.tagName && "rr_dataURL" === Vb) {
                      const wb = document.createElement("img");
                      wb.src = eb, wb.onload = () => {
                        const Mb = bb.getContext("2d");
                        Mb && Mb.drawImage(wb, 0, 0, wb.width, wb.height)
                      }
                    } else {
                      if ("IFRAME" === wb.tagName && "srcdoc" === Vb) continue;
                      try {
                        bb.setAttribute(Vb, eb)
                      } catch (pb) {
                        console.warn(pb)
                      }
                    }
                  }
                  for (const {
                      name: Vb
                    }
                    of Array.from(eb)) Vb in Hb || bb.removeAttribute(Vb);
                  wb.scrollLeft && (bb.scrollLeft = wb.scrollLeft), wb.scrollTop && (bb.scrollTop = wb.scrollTop)
                }(Hb, pb, eb);
              break
            }
          }
          return bb
        }(bb, wb, Mb, eb), mp(bb, wb, Mb, eb),
        function(bb, wb, Mb) {
          var eb;
          switch (wb.RRNodeType) {
            case PH.Document: {
              const bb = wb.scrollData;
              bb && Mb.applyScroll(bb, !0);
              break
            }
            case PH.Element: {
              const eb = bb,
                pb = wb;
              switch (pb.scrollData && Mb.applyScroll(pb.scrollData, !0), pb.inputData && Mb.applyInput(pb.inputData), pb.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const wb = bb,
                    Mb = pb;
                  void 0 !== Mb.paused && (Mb.paused ? wb.pause() : wb.play()), void 0 !== Mb.muted && (wb.muted = Mb.muted), void 0 !== Mb.volume && (wb.volume = Mb.volume), void 0 !== Mb.currentTime && (wb.currentTime = Mb.currentTime), void 0 !== Mb.playbackRate && (wb.playbackRate = Mb.playbackRate), void 0 !== Mb.loop && (wb.loop = Mb.loop);
                  break
                }
                case "CANVAS": {
                  const Hb = wb;
                  if (null !== Hb.rr_dataURL) {
                    const bb = document.createElement("img");
                    bb.onload = () => {
                      const wb = eb.getContext("2d");
                      wb && wb.drawImage(bb, 0, 0, bb.width, bb.height)
                    }, bb.src = Hb.rr_dataURL
                  }
                  Hb.canvasMutations.forEach((wb => Mb.applyCanvas(wb.event, wb.mutation, bb)));
                  break
                }
                case "STYLE": {
                  const bb = eb.sheet;
                  bb && wb.rules.forEach((wb => Mb.applyStyleSheetMutation(wb, bb)));
                  break
                }
                case "DIALOG": {
                  const bb = eb,
                    wb = pb,
                    Mb = bb.open,
                    Vb = bb.matches("dialog:modal"),
                    gb = wb.open,
                    lb = wb.isModal,
                    Lb = Vb !== lb,
                    Ib = Mb !== gb;
                  if ((Lb || Mb && Ib) && bb.close(), gb && (Ib || Lb)) try {
                    lb ? bb.showModal() : bb.show()
                  } catch (Hb) {
                    console.warn(Hb)
                  }
                  break
                }
              }
              break
            }
            case PH.Text:
            case PH.Comment:
            case PH.CDATA:
              bb.textContent !== wb.data && (bb.textContent = wb.data)
          }(null == Bp ? void 0 : Bp.has(bb)) && (Bp.delete(bb), null == (eb = Mb.afterAppend) || eb.call(Mb, bb, Mb.mirror.getId(bb)))
        }(bb, wb, Mb)
    }

    function mp(bb, wb, Mb, eb) {
      const Hb = Array.from(bb.childNodes),
        pb = wb.childNodes;
      if (0 === Hb.length && 0 === pb.length) return;
      let Vb, gb, lb = 0,
        Lb = Hb.length - 1,
        Ib = 0,
        Ob = pb.length - 1,
        Ub = Hb[lb],
        tb = Hb[Lb],
        Cb = pb[Ib],
        Eb = pb[Ob];
      for (; lb <= Lb && Ib <= Ob;)
        if (void 0 === Ub) Ub = Hb[++lb];
        else if (void 0 === tb) tb = Hb[--Lb];
      else if (Xp(Ub, Cb, Mb.mirror, eb)) Ub = Hb[++lb], Cb = pb[++Ib];
      else if (Xp(tb, Eb, Mb.mirror, eb)) tb = Hb[--Lb], Eb = pb[--Ob];
      else if (Xp(Ub, Eb, Mb.mirror, eb)) {
        try {
          bb.insertBefore(Ub, tb.nextSibling)
        } catch (sb) {
          console.warn(sb)
        }
        Ub = Hb[++lb], Eb = pb[--Ob]
      } else if (Xp(tb, Cb, Mb.mirror, eb)) {
        try {
          bb.insertBefore(tb, Ub)
        } catch (sb) {
          console.warn(sb)
        }
        tb = Hb[--Lb], Cb = pb[++Ib]
      } else {
        if (!Vb) {
          Vb = {};
          for (let bb = lb; bb <= Lb; bb++) {
            const wb = Hb[bb];
            wb && Mb.mirror.hasNode(wb) && (Vb[Mb.mirror.getId(wb)] = bb)
          }
        }
        gb = Vb[eb.getId(Cb)];
        const wb = Hb[gb];
        if (void 0 !== gb && wb && Xp(wb, Cb, Mb.mirror, eb)) {
          try {
            bb.insertBefore(wb, Ub)
          } catch (sb) {
            console.warn(sb)
          }
          Hb[gb] = void 0
        } else {
          const wb = hp(Cb, Mb.mirror, eb);
          "#document" === bb.nodeName && Ub && (wb.nodeType === wb.DOCUMENT_TYPE_NODE && Ub.nodeType === Ub.DOCUMENT_TYPE_NODE || wb.nodeType === wb.ELEMENT_NODE && Ub.nodeType === Ub.ELEMENT_NODE) && (bb.removeChild(Ub), Mb.mirror.removeNodeFromMap(Ub), Ub = Hb[++lb]);
          try {
            bb.insertBefore(wb, Ub || null)
          } catch (sb) {
            console.warn(sb)
          }
        }
        Cb = pb[++Ib]
      }
      if (lb > Lb) {
        const wb = pb[Ob + 1];
        let Hb = null;
        for (wb && (Hb = Mb.mirror.OHb(eb.getId(wb))); Ib <= Ob; ++Ib) {
          const wb = hp(pb[Ib], Mb.mirror, eb);
          try {
            bb.insertBefore(wb, Hb)
          } catch (sb) {
            console.warn(sb)
          }
        }
      } else if (Ib > Ob)
        for (; lb <= Lb; lb++) {
          const wb = Hb[lb];
          if (wb && wb.parentNode === bb) try {
            bb.removeChild(wb), Mb.mirror.removeNodeFromMap(wb)
          } catch (sb) {
            console.warn(sb)
          }
        }
      let Fb = bb.firstChild,
        Bb = wb.firstChild;
      for (; null !== Fb && null !== Bb;) sp(Fb, Bb, Mb, eb), Fb = Fb.nextSibling, Bb = Bb.nextSibling
    }

    function hp(bb, wb, Mb) {
      const eb = Mb.getId(bb),
        Hb = Mb.getMeta(bb);
      let pb = null;
      if (eb > -1 && (pb = wb.OHb(eb)), null !== pb && zp(pb, bb)) return pb;
      switch (bb.RRNodeType) {
        case PH.Document:
          pb = new Document;
          break;
        case PH.DocumentType:
          pb = document.implementation.createDocumentType(bb.name, bb.publicId, bb.systemId);
          break;
        case PH.Element: {
          let wb = bb.tagName.toLowerCase();
          wb = Fp[wb] || wb, pb = Hb && "isSVG" in Hb && (null == Hb ? void 0 : Hb.isSVG) ? document.createElementNS(Ep.svg, wb) : document.createElement(bb.tagName);
          break
        }
        case PH.Text:
          pb = document.createTextNode(bb.data);
          break;
        case PH.Comment:
          pb = document.createComment(bb.data);
          break;
        case PH.CDATA:
          pb = document.createCDATASection(bb.data)
      }
      Hb && wb.add(pb, {
        ...Hb
      });
      try {
        null == Bp || Bp.add(pb)
      } catch (Vb) {}
      return pb
    }

    function zp(bb, wb) {
      return bb.nodeType === wb.nodeType && (bb.nodeType !== bb.ELEMENT_NODE || bb.tagName.toUpperCase() === wb.tagName)
    }

    function Xp(bb, wb, Mb, eb) {
      const Hb = Mb.getId(bb),
        pb = eb.getId(wb);
      return -1 !== Hb && Hb === pb && zp(bb, wb)
    }
    class xp extends Mp {
      constructor(bb) {
        super(), ge(this, "UNSERIALIZED_STARTING_ID", -2), ge(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), ge(this, "mirror", new Sp), ge(this, "scrollData", null), bb && (this.mirror = bb)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(bb, wb, Mb) {
        return new xp
      }
      createDocumentType(bb, wb, Mb) {
        const eb = new jp(bb, wb, Mb);
        return eb.ownerDocument = this, eb
      }
      createElement(bb) {
        const wb = bb.toUpperCase();
        let Mb;
        switch (wb) {
          case "AUDIO":
          case "VIDEO":
            Mb = new rp(wb);
            break;
          case "IFRAME":
            Mb = new Yp(wb, this.mirror);
            break;
          case "CANVAS":
            Mb = new Dp(wb);
            break;
          case "STYLE":
            Mb = new cp(wb);
            break;
          case "DIALOG":
            Mb = new Rp(wb);
            break;
          default:
            Mb = new Kp(wb)
        }
        return Mb.ownerDocument = this, Mb
      }
      createComment(bb) {
        const wb = new fp(bb);
        return wb.ownerDocument = this, wb
      }
      createCDATASection(bb) {
        const wb = new Ap(bb);
        return wb.ownerDocument = this, wb
      }
      createTextNode(bb) {
        const wb = new Zp(bb);
        return wb.ownerDocument = this, wb
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const jp = ep;
    class Kp extends Hp {
      constructor() {
        super(...arguments), ge(this, "inputData", null), ge(this, "scrollData", null)
      }
    }
    class rp extends pp {}
    class Rp extends Vp {}
    class Dp extends Kp {
      constructor() {
        super(...arguments), ge(this, "rr_dataURL", null), ge(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class cp extends Kp {
      constructor() {
        super(...arguments), ge(this, "rules", [])
      }
    }
    class Yp extends Kp {
      constructor(bb, wb) {
        super(bb), ge(this, "contentDocument", new xp), this.contentDocument.mirror = wb
      }
    }
    const Zp = gp,
      fp = lp,
      Ap = Lp;

    function Wp(bb, wb, Mb, eb) {
      let Hb;
      switch (bb.nodeType) {
        case Cp.DOCUMENT_NODE:
          eb && "IFRAME" === eb.nodeName ? Hb = eb.contentDocument : (Hb = wb, Hb.compatMode = bb.compatMode);
          break;
        case Cp.DOCUMENT_TYPE_NODE: {
          const Mb = bb;
          Hb = wb.createDocumentType(Mb.name, Mb.publicId, Mb.systemId);
          break
        }
        case Cp.ELEMENT_NODE: {
          const Mb = bb,
            eb = (pb = Mb) instanceof HTMLFormElement ? "FORM" : pb.tagName.toUpperCase();
          Hb = wb.createElement(eb);
          const Vb = Hb;
          for (const {
              name: bb,
              value: wb
            }
            of Array.from(Mb.attributes)) Vb.attributes[bb] = wb;
          Mb.scrollLeft && (Vb.scrollLeft = Mb.scrollLeft), Mb.scrollTop && (Vb.scrollTop = Mb.scrollTop);
          break
        }
        case Cp.TEXT_NODE:
          Hb = wb.createTextNode(bb.textContent || "");
          break;
        case Cp.CDATA_SECTION_NODE:
          Hb = wb.createCDATASection(bb.data);
          break;
        case Cp.COMMENT_NODE:
          Hb = wb.createComment(bb.textContent || "");
          break;
        case Cp.DOCUMENT_FRAGMENT_NODE:
          Hb = eb.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var pb;
      let Vb = Mb.getMeta(bb);
      return wb instanceof xp && (Vb || (Vb = Np(Hb, wb.unserializedId), Mb.add(bb, Vb)), wb.mirror.add(Hb, {
        ...Vb
      })), Hb
    }

    function Jp(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Ie,
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new xp;
      return function bb(eb, Hb) {
        const pb = Wp(eb, Mb, wb, Hb);
        if (null !== pb)
          if ("IFRAME" !== (null == Hb ? void 0 : Hb.nodeName) && eb.nodeType !== Cp.DOCUMENT_FRAGMENT_NODE && (null == Hb || Hb.appendChild(pb), pb.parentNode = Hb, pb.parentElement = Hb), "IFRAME" === eb.nodeName) {
            const wb = eb.contentDocument;
            wb && bb(wb, pb)
          } else eb.nodeType !== Cp.DOCUMENT_NODE && eb.nodeType !== Cp.ELEMENT_NODE && eb.nodeType !== Cp.DOCUMENT_FRAGMENT_NODE || (eb.nodeType === Cp.ELEMENT_NODE && eb.shadowRoot && bb(eb.shadowRoot, pb), eb.childNodes.forEach((wb => bb(wb, pb))))
      }(bb, null), Mb
    }
    class Sp {
      constructor() {
        ge(this, "idNodeMap", new Map), ge(this, "nodeMetaMap", new WeakMap)
      }
      getId(bb) {
        var wb;
        if (!bb) return -1;
        return (null == (wb = this.getMeta(bb)) ? void 0 : wb.id) ?? -1
      }
      OHb(bb) {
        return this.idNodeMap.get(bb) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(bb) {
        return this.nodeMetaMap.get(bb) || null
      }
      removeNodeFromMap(bb) {
        const wb = this.getId(bb);
        this.idNodeMap.delete(wb), bb.childNodes && bb.childNodes.forEach((bb => this.removeNodeFromMap(bb)))
      }
      has(bb) {
        return this.idNodeMap.has(bb)
      }
      hasNode(bb) {
        return this.nodeMetaMap.has(bb)
      }
      add(bb, wb) {
        const Mb = wb.id;
        this.idNodeMap.set(Mb, bb), this.nodeMetaMap.set(bb, wb)
      }
      replace(bb, wb) {
        const Mb = this.OHb(bb);
        if (Mb) {
          const bb = this.nodeMetaMap.get(Mb);
          bb && this.nodeMetaMap.set(wb, bb)
        }
        this.idNodeMap.set(bb, wb)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function Np(bb, wb) {
      switch (bb.RRNodeType) {
        case PH.Document:
          return {
            id: wb, type: bb.RRNodeType, childNodes: []
          };
        case PH.DocumentType: {
          const Mb = bb;
          return {
            id: wb,
            type: bb.RRNodeType,
            name: Mb.name,
            publicId: Mb.publicId,
            systemId: Mb.systemId
          }
        }
        case PH.Element:
          return {
            id: wb, type: bb.RRNodeType, tagName: bb.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case PH.Text:
        case PH.Comment:
          return {
            id: wb, type: bb.RRNodeType, textContent: bb.textContent || ""
          };
        case PH.CDATA:
          return {
            id: wb, type: bb.RRNodeType, textContent: ""
          }
      }
    }
    const vp = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      Qp = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      Gp = {},
      qp = {};

    function ap(bb) {
      if (Gp[bb]) return Gp[bb];
      const wb = globalThis[bb],
        Mb = wb.prototype,
        eb = bb in vp ? vp[bb] : void 0,
        Hb = Boolean(eb && eb.every((bb => {
          var wb, eb;
          return Boolean(null == (eb = null == (wb = Object.getOwnPropertyDescriptor(Mb, bb)) ? void 0 : wb.get) ? void 0 : eb.toString().includes("[native code]"))
        }))),
        pb = bb in Qp ? Qp[bb] : void 0,
        Vb = Boolean(pb && pb.every((bb => {
          var wb;
          return "function" === typeof Mb[bb] && (null == (wb = Mb[bb]) ? void 0 : wb.toString().includes("[native code]"))
        })));
      if (Hb && Vb && !globalThis.Zone) return Gp[bb] = wb.prototype, wb.prototype;
      try {
        const eb = document.createElement("iframe");
        eb.style.display = "none", document.body.appendChild(eb);
        const Hb = eb.contentWindow;
        if (!Hb) return wb.prototype;
        const pb = Hb[bb].prototype;
        if (!pb) return eb.remove(), Mb;
        const Vb = navigator.userAgent;
        return Vb.includes("Safari") && !Vb.includes("Chrome") ? (eb.classList.add("rr-block"), eb.setAttribute("__rrwebUntaintedMutationObserver", ""), qp[bb] = () => eb.remove()) : eb.remove(), Gp[bb] = pb
      } catch {
        return Mb
      }
    }
    const ip = {};

    function dp(bb, wb, Mb) {
      var eb, Hb;
      const pb = null == (eb = ip[bb]) ? void 0 : eb[Mb];
      if (pb) return pb.call(wb);
      const Vb = ap(bb),
        gb = null == (Hb = Object.getOwnPropertyDescriptor(Vb, Mb)) ? void 0 : Hb.get;
      return gb ? ((ip[bb] || (ip[bb] = {}))[Mb] = gb, gb.call(wb)) : wb[Mb]
    }
    const Pp = {};

    function np(bb, wb, Mb) {
      const eb = `${bb}.${String(Mb)}`;
      if (Pp[eb]) return Pp[eb].bind(wb);
      const Hb = ap(bb)[Mb];
      return "function" !== typeof Hb ? wb[Mb] : (Pp[eb] = Hb, Hb.bind(wb))
    }

    function yp() {
      return [ap("MutationObserver").constructor, qp.MutationObserver ?? (() => {})]
    }
    let op = Date.now;

    function Tp(bb, wb, Mb) {
      try {
        if (!(wb in bb)) return () => {};
        const eb = bb[wb],
          Hb = Mb(eb);
        return "function" === typeof Hb && (Hb.prototype = Hb.prototype || {}, Object.defineProperties(Hb, {
          __rrweb_original__: {
            enumerable: !1,
            value: eb
          }
        })), bb[wb] = Hb, () => {
          bb[wb] = eb
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (op = () => (new Date).getTime());
    const kp = {
      ownerDocument: function(bb) {
        return dp("Node", bb, "ownerDocument")
      },
      childNodes: function(bb) {
        return dp("Node", bb, "childNodes")
      },
      parentNode: function(bb) {
        return dp("Node", bb, "parentNode")
      },
      parentElement: function(bb) {
        return dp("Node", bb, "parentElement")
      },
      textContent: function(bb) {
        return dp("Node", bb, "textContent")
      },
      firstChild: function(bb) {
        return dp("Node", bb, "firstChild")
      },
      lastChild: function(bb) {
        return dp("Node", bb, "lastChild")
      },
      nextSibling: function(bb) {
        return dp("Node", bb, "nextSibling")
      },
      previousSibling: function(bb) {
        return dp("Node", bb, "previousSibling")
      },
      contains: function(bb, wb) {
        return np("Node", bb, "contains")(wb)
      },
      getRootNode: function(bb) {
        return np("Node", bb, "getRootNode")()
      },
      host: function(bb) {
        return bb && "host" in bb ? dp("ShadowRoot", bb, "host") : null
      },
      styleSheets: function(bb) {
        return bb.styleSheets
      },
      shadowRoot: function(bb) {
        return bb && "shadowRoot" in bb ? dp("Element", bb, "shadowRoot") : null
      },
      querySelector: function(bb, wb) {
        return dp("Element", bb, "querySelector")(wb)
      },
      querySelectorAll: function(bb, wb) {
        return dp("Element", bb, "querySelectorAll")(wb)
      },
      nowTimestamp: op,
      mutationObserverCtor: yp,
      patch: Tp
    };

    function bV(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const eb = {
        capture: !0,
        passive: !0
      };
      return Mb.addEventListener(bb, wb, eb), () => Mb.removeEventListener(bb, wb, eb)
    }
    const wV = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let MV = {
      map: {},
      getId: () => (console.error(wV), -1),
      OHb: () => (console.error(wV), null),
      removeNodeFromMap() {
        console.error(wV)
      },
      has: () => (console.error(wV), !1),
      reset() {
        console.error(wV)
      }
    };

    function eV(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        eb = null,
        Hb = 0;
      return function() {
        for (var pb = arguments.length, Vb = new Array(pb), gb = 0; gb < pb; gb++) Vb[gb] = arguments[gb];
        const lb = Date.now();
        Hb || !1 !== Mb.leading || (Hb = lb);
        const Lb = wb - (lb - Hb),
          Ib = this;
        Lb <= 0 || Lb > wb ? (eb && (clearTimeout(eb), eb = null), Hb = lb, bb.apply(Ib, Vb)) : eb || !1 === Mb.trailing || (eb = setTimeout((() => {
          Hb = !1 === Mb.leading ? 0 : Date.now(), eb = null, bb.apply(Ib, Vb)
        }), Lb))
      }
    }

    function HV(bb, wb, Mb, eb) {
      let Hb = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const pb = Hb.Object.getOwnPropertyDescriptor(bb, wb);
      return Hb.Object.defineProperty(bb, wb, eb ? Mb : {
        set(bb) {
          setTimeout((() => {
            Mb.set.call(this, bb)
          }), 0), pb && pb.set && pb.set.call(this, bb)
        }
      }), () => HV(bb, wb, pb || {}, !0)
    }

    function pV(bb) {
      var wb, Mb, eb, Hb;
      const pb = bb.document;
      return {
        left: pb.scrollingElement ? pb.scrollingElement.scrollLeft : void 0 !== bb.pageXOffset ? bb.pageXOffset : pb.documentElement.scrollLeft || (null == pb ? void 0 : pb.body) && (null == (wb = kp.parentElement(pb.body)) ? void 0 : wb.scrollLeft) || (null == (Mb = null == pb ? void 0 : pb.body) ? void 0 : Mb.scrollLeft) || 0,
        top: pb.scrollingElement ? pb.scrollingElement.scrollTop : void 0 !== bb.pageYOffset ? bb.pageYOffset : (null == pb ? void 0 : pb.documentElement.scrollTop) || (null == pb ? void 0 : pb.body) && (null == (eb = kp.parentElement(pb.body)) ? void 0 : eb.scrollTop) || (null == (Hb = null == pb ? void 0 : pb.body) ? void 0 : Hb.scrollTop) || 0
      }
    }

    function VV() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function gV() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function lV(bb) {
      if (!bb) return null;
      return bb.nodeType === bb.ELEMENT_NODE ? bb : kp.parentElement(bb)
    }

    function LV(bb, wb, Mb, eb) {
      if (!bb) return !1;
      const Hb = lV(bb);
      if (!Hb) return !1;
      try {
        if ("string" === typeof wb) {
          if (Hb.classList.contains(wb)) return !0;
          if (eb && null !== Hb.closest("." + wb)) return !0
        } else if (ew(Hb, wb, eb)) return !0
      } catch (pb) {}
      if (Mb) {
        if (Hb.matches(Mb)) return !0;
        if (eb && null !== Hb.closest(Mb)) return !0
      }
      return !1
    }

    function IV(bb, wb) {
      return -1 !== wb.getId(bb)
    }

    function OV(bb, wb, Mb) {
      return !("TITLE" !== bb.tagName || !Mb.headTitleMutations) || -2 === wb.getId(bb)
    }

    function UV(bb, wb) {
      if (zb(bb)) return !1;
      const Mb = wb.getId(bb);
      if (!wb.has(Mb)) return !0;
      const eb = kp.parentNode(bb);
      return (!eb || eb.nodeType !== bb.DOCUMENT_NODE) && (!eb || UV(eb, wb))
    }

    function tV(bb) {
      return Boolean(bb.changedTouches)
    }

    function CV() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in bb && !bb.NodeList.prototype.forEach && (bb.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in bb && !bb.DOMTokenList.prototype.forEach && (bb.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function EV(bb) {
      const wb = {},
        Mb = (bb, Mb) => {
          const eb = {
            value: bb,
            parent: Mb,
            children: []
          };
          return wb[bb.node.id] = eb, eb
        },
        eb = [];
      for (const Hb of bb) {
        const {
          nextId: bb,
          parentId: pb
        } = Hb;
        if (bb && bb in wb) {
          const pb = wb[bb];
          if (pb.parent) {
            const bb = pb.parent.children.indexOf(pb);
            pb.parent.children.splice(bb, 0, Mb(Hb, pb.parent))
          } else {
            const bb = eb.indexOf(pb);
            eb.splice(bb, 0, Mb(Hb, null))
          }
        } else if (pb in wb) {
          const bb = wb[pb];
          bb.children.push(Mb(Hb, bb))
        } else eb.push(Mb(Hb, null))
      }
      return eb
    }

    function FV(bb, wb) {
      wb(bb.value);
      for (let Mb = bb.children.length - 1; Mb >= 0; Mb--) FV(bb.children[Mb], wb)
    }

    function BV(bb, wb) {
      return Boolean("IFRAME" === bb.nodeName && wb.getMeta(bb))
    }

    function sV(bb, wb) {
      return Boolean("LINK" === bb.nodeName && bb.nodeType === bb.ELEMENT_NODE && bb.getAttribute && "stylesheet" === bb.getAttribute("rel") && wb.getMeta(bb))
    }

    function mV(bb, wb) {
      var Mb, eb;
      const Hb = null == (eb = null == (Mb = bb.ownerDocument) ? void 0 : Mb.defaultView) ? void 0 : eb.frameElement;
      if (!Hb || Hb === wb) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const pb = Hb.getBoundingClientRect(),
        Vb = mV(Hb, wb),
        gb = pb.height / Hb.clientHeight;
      return {
        x: pb.x * Vb.relativeScale + Vb.x,
        y: pb.y * Vb.relativeScale + Vb.y,
        relativeScale: gb,
        absoluteScale: Vb.absoluteScale * gb
      }
    }

    function hV(bb) {
      return !!bb && (bb instanceof wp && "shadowRoot" in bb ? Boolean(bb.shadowRoot) : Boolean(kp.shadowRoot(bb)))
    }

    function zV(bb, wb) {
      const Mb = null == bb ? void 0 : bb[wb[0]];
      return Mb ? 1 === wb.length ? Mb : zV(Mb.cssRules, wb.slice(1)) : null
    }

    function XV(bb) {
      const wb = [...bb],
        Mb = wb.pop();
      return {
        positions: wb,
        index: Mb
      }
    }

    function xV(bb) {
      const wb = new Set,
        Mb = [];
      for (let eb = bb.length; eb--;) {
        const Hb = bb[eb];
        wb.has(Hb.id) || (Mb.push(Hb), wb.add(Hb.id))
      }
      return Mb
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (MV = new Proxy(MV, {
      get: (bb, wb, Mb) => ("map" === wb && console.error(wV), Reflect.get(bb, wb, Mb))
    }));
    class jV {
      constructor() {
        pb(this, "id", 1), pb(this, "styleIDMap", new WeakMap), pb(this, "idStyleMap", new Map)
      }
      getId(bb) {
        return this.styleIDMap.get(bb) ?? -1
      }
      has(bb) {
        return this.styleIDMap.has(bb)
      }
      add(bb, wb) {
        if (this.has(bb)) return this.getId(bb);
        let Mb;
        return Mb = void 0 === wb ? this.id++ : wb, this.styleIDMap.set(bb, Mb), this.idStyleMap.set(Mb, bb), Mb
      }
      getStyle(bb) {
        return this.idStyleMap.get(bb) || null
      }
      reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
      }
      generateId() {
        return this.id++
      }
    }

    function KV(bb) {
      var wb;
      let Mb = null;
      return "getRootNode" in bb && (null == (wb = kp.getRootNode(bb)) ? void 0 : wb.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && kp.host(kp.getRootNode(bb)) && (Mb = kp.host(kp.getRootNode(bb))), Mb
    }

    function rV(bb) {
      let wb, Mb = bb;
      for (; wb = KV(Mb);) Mb = wb;
      return Mb
    }

    function RV(bb) {
      const wb = kp.ownerDocument(bb);
      if (!wb) return !1;
      const Mb = rV(bb);
      return kp.contains(wb, Mb)
    }

    function DV(bb) {
      const wb = kp.ownerDocument(bb);
      return !!wb && (kp.contains(wb, bb) || RV(bb))
    }
    Symbol.toStringTag;
    var cV = (bb => (bb[bb.DomContentLoaded = 0] = "DomContentLoaded", bb[bb.Load = 1] = "Load", bb[bb.FullSnapshot = 2] = "FullSnapshot", bb[bb.IncrementalSnapshot = 3] = "IncrementalSnapshot", bb[bb.Meta = 4] = "Meta", bb[bb.Custom = 5] = "Custom", bb[bb.Plugin = 6] = "Plugin", bb[bb.Asset = 7] = "Asset", bb))(cV || {}),
      YV = (bb => (bb[bb.Mutation = 0] = "Mutation", bb[bb.MouseMove = 1] = "MouseMove", bb[bb.MouseInteraction = 2] = "MouseInteraction", bb[bb.Scroll = 3] = "Scroll", bb[bb.ViewportResize = 4] = "ViewportResize", bb[bb.Input = 5] = "Input", bb[bb.TouchMove = 6] = "TouchMove", bb[bb.MediaInteraction = 7] = "MediaInteraction", bb[bb.StyleSheetRule = 8] = "StyleSheetRule", bb[bb.CanvasMutation = 9] = "CanvasMutation", bb[bb.Font = 10] = "Font", bb[bb.Log = 11] = "Log", bb[bb.Drag = 12] = "Drag", bb[bb.StyleDeclaration = 13] = "StyleDeclaration", bb[bb.Selection = 14] = "Selection", bb[bb.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", bb[bb.CustomElement = 16] = "CustomElement", bb))(YV || {}),
      ZV = (bb => (bb[bb.MouseUp = 0] = "MouseUp", bb[bb.MouseDown = 1] = "MouseDown", bb[bb.Click = 2] = "Click", bb[bb.ContextMenu = 3] = "ContextMenu", bb[bb.DblClick = 4] = "DblClick", bb[bb.Focus = 5] = "Focus", bb[bb.Blur = 6] = "Blur", bb[bb.TouchStart = 7] = "TouchStart", bb[bb.TouchMove_Departed = 8] = "TouchMove_Departed", bb[bb.TouchEnd = 9] = "TouchEnd", bb[bb.TouchCancel = 10] = "TouchCancel", bb))(ZV || {}),
      fV = (bb => (bb[bb.Mouse = 0] = "Mouse", bb[bb.Pen = 1] = "Pen", bb[bb.Touch = 2] = "Touch", bb))(fV || {}),
      AV = (bb => (bb[bb["2D"] = 0] = "2D", bb[bb.WebGL = 1] = "WebGL", bb[bb.WebGL2 = 2] = "WebGL2", bb))(AV || {}),
      WV = (bb => (bb[bb.Play = 0] = "Play", bb[bb.Pause = 1] = "Pause", bb[bb.Seeked = 2] = "Seeked", bb[bb.VolumeChange = 3] = "VolumeChange", bb[bb.RateChange = 4] = "RateChange", bb))(WV || {}),
      JV = (bb => (bb.Start = "start", bb.Pause = "pause", bb.Resume = "resume", bb.Resize = "resize", bb.Finish = "finish", bb.FullsnapshotRebuilded = "fullsnapshot-rebuilded", bb.LoadStylesheetStart = "load-stylesheet-start", bb.LoadStylesheetEnd = "load-stylesheet-end", bb.SkipStart = "skip-start", bb.SkipEnd = "skip-end", bb.MouseInteraction = "mouse-interaction", bb.EventCast = "event-cast", bb.CustomEvent = "custom-event", bb.Flush = "flush", bb.StateChange = "state-change", bb.PlayBack = "play-back", bb.Destroy = "destroy", bb))(JV || {}),
      SV = (bb => (bb[bb.Document = 0] = "Document", bb[bb.DocumentType = 1] = "DocumentType", bb[bb.Element = 2] = "Element", bb[bb.Text = 3] = "Text", bb[bb.CDATA = 4] = "CDATA", bb[bb.Comment = 5] = "Comment", bb))(SV || {});
    const NV = (bb, wb) => `${bb}@${wb}`;
    class vV {
      constructor() {
        pb(this, "frozen", !1), pb(this, "locked", !1), pb(this, "texts", []), pb(this, "attributes", []), pb(this, "attributeMap", new WeakMap), pb(this, "removes", []), pb(this, "mapRemoves", []), pb(this, "movedMap", {}), pb(this, "addedSet", new Set), pb(this, "movedSet", new Set), pb(this, "droppedSet", new Set), pb(this, "removesSubTreeCache", new Set), pb(this, "mutationCb"), pb(this, "blockClass"), pb(this, "blockSelector"), pb(this, "maskTextClass"), pb(this, "maskTextSelector"), pb(this, "inlineStylesheet"), pb(this, "maskInputOptions"), pb(this, "maskTextFn"), pb(this, "maskInputFn"), pb(this, "keepIframeSrcFn"), pb(this, "recordCanvas"), pb(this, "inlineImages"), pb(this, "slimDOMOptions"), pb(this, "dataURLOptions"), pb(this, "doc"), pb(this, "mirror"), pb(this, "iframeManager"), pb(this, "stylesheetManager"), pb(this, "shadowDomManager"), pb(this, "canvasManager"), pb(this, "processedNodeManager"), pb(this, "unattachedDoc"), pb(this, "processMutations", (bb => {
          bb.forEach(this.processMutation), this.emit()
        })), pb(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const bb = [],
            wb = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const Ob of this.movedSet) {
            const bb = kp.parentNode(Ob);
            this.removesSubTreeCache.has(bb) && !this.movedSet.has(bb) || this.addedSet.add(Ob)
          }
          let Mb = null,
            eb = null,
            Hb = -1,
            pb = null,
            Vb = !1;
          const gb = new Set,
            lb = this.addedSet.values();
          let Lb = lb.next();
          for (; this.addedSet.size;) {
            if (null !== Mb && this.addedSet.has(kp.previousSibling(Mb))) pb = Mb, Mb = kp.previousSibling(Mb);
            else {
              for (this.addedSet.has(Lb.value) || (Lb = lb.next()), Mb = Lb.value; eb = kp.parentNode(Mb), this.addedSet.has(eb);) Mb = eb;
              if (gb.has(eb)) eb = null;
              else if (eb) {
                if (DV(eb) ? (Vb = GV(this.droppedSet, eb) || this.removesSubTreeCache.has(eb), Vb && GV(this.movedSet, Mb) && (Vb = !1)) : Vb = !0, this.addedSet.has(kp.lastChild(eb))) Mb = kp.lastChild(eb), pb = null;
                else
                  for (; pb = kp.nextSibling(Mb), this.addedSet.has(pb);) Mb = pb;
                if (Hb = zb(eb) ? this.mirror.getId(KV(Mb)) : this.mirror.getId(eb), -1 === Hb && eb.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const bb = kp.host(eb);
                  Hb = this.mirror.getId(bb)
                }
              }
            }
            if (this.addedSet.delete(Mb), !eb || -1 === Hb) {
              gb.add(Mb);
              continue
            }
            if (Vb) {
              this.droppedSet.add(Mb);
              continue
            }
            let Ib = !1;
            if (Mb.nodeType === Node.TEXT_NODE) {
              const bb = eb.tagName;
              if ("TEXTAREA" === bb) continue;
              "STYLE" === bb && wb.has(Hb) && (Ib = !0)
            }
            let Ob = pb ? this.mirror.getId(pb) : null;
            for (; - 2 === Ob;) pb = pb && kp.nextSibling(pb), Ob = pb && this.mirror.getId(pb);
            if (-1 === Ob) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", pb), Mb = null;
              continue
            }
            const Ub = lw(Mb, {
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
              onSerialize: bb => {
                BV(bb, this.mirror) && this.iframeManager.addIframe(bb), sV(bb, this.mirror) && this.stylesheetManager.trackLinkElement(bb), hV(Mb) && this.shadowDomManager.addShadowRoot(kp.shadowRoot(Mb), this.doc)
              },
              onIframeLoad: (bb, wb) => {
                this.iframeManager.attachIframe(bb, wb), this.shadowDomManager.observeAttachShadow(bb)
              },
              onStylesheetLoad: (bb, wb) => {
                this.stylesheetManager.attachLinkElement(bb, wb)
              },
              cssCaptured: Ib
            });
            Ub && (bb.push({
              parentId: Hb,
              nextId: Ob,
              node: Ub
            }), wb.add(Ub.id))
          }
          const Ib = {
            texts: this.texts.map((bb => {
              const wb = bb.node,
                Mb = kp.parentNode(wb);
              return Mb && "TEXTAREA" === Mb.tagName && this.genTextAreaValueMutation(Mb), {
                id: this.mirror.getId(wb),
                value: bb.value
              }
            })).filter((bb => !wb.has(bb.id))).filter((bb => this.mirror.has(bb.id))),
            attributes: this.attributes.map((bb => {
              const {
                attributes: wb
              } = bb;
              if ("string" === typeof wb.style) {
                const Mb = JSON.stringify(bb.styleDiff),
                  eb = JSON.stringify(bb._unchangedStyles);
                Mb.length < wb.style.length && (Mb + eb).split("var(").length === wb.style.split("var(").length && (wb.style = bb.styleDiff)
              }
              return {
                id: this.mirror.getId(bb.node),
                attributes: wb
              }
            })).filter((bb => !wb.has(bb.id))).filter((bb => this.mirror.has(bb.id))),
            removes: this.removes,
            adds: bb
          };
          (Ib.texts.length || Ib.attributes.length || Ib.removes.length || Ib.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(Ib))
        })), pb(this, "genTextAreaValueMutation", (bb => {
          let wb = this.attributeMap.get(bb);
          wb || (wb = {
            node: bb,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(wb), this.attributeMap.set(bb, wb));
          const Mb = Array.from(kp.childNodes(bb), (bb => kp.textContent(bb) || "")).join("");
          wb.attributes.value = Rb({
            element: bb,
            maskInputOptions: this.maskInputOptions,
            tagName: bb.tagName,
            type: Yb(bb),
            value: Mb,
            maskInputFn: this.maskInputFn
          })
        })), pb(this, "processMutation", (bb => {
          if (!OV(bb.target, this.mirror, this.slimDOMOptions)) switch (bb.type) {
            case "characterData": {
              const wb = kp.textContent(bb.target);
              LV(bb.target, this.blockClass, this.blockSelector, !1) || wb === bb.oldValue || this.texts.push({
                value: Hw(bb.target, this.maskTextClass, this.maskTextSelector, !0) && wb ? this.maskTextFn ? this.maskTextFn(wb, lV(bb.target)) : wb.replace(/[\S]/g, "*") : wb,
                node: bb.target
              });
              break
            }
            case "attributes": {
              const Mb = bb.target,
                eb = Db(Mb.tagName);
              let Hb = bb.attributeName,
                pb = bb.target.getAttribute(Hb);
              if ("value" === Hb) {
                const bb = Yb(Mb);
                pb = Rb({
                  element: Mb,
                  maskInputOptions: this.maskInputOptions,
                  tagName: Mb.tagName,
                  type: bb,
                  value: pb,
                  maskInputFn: this.maskInputFn
                })
              }
              if (LV(bb.target, this.blockClass, this.blockSelector, !1) || pb === bb.oldValue) return;
              let Vb = this.attributeMap.get(bb.target);
              if ("iframe" === eb && "src" === Hb && !this.keepIframeSrcFn(pb)) {
                if (Mb.contentDocument) return;
                Hb = "rr_src"
              }
              if (Vb || (Vb = {
                  node: bb.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(Vb), this.attributeMap.set(bb.target, Vb)), "type" === Hb && "input" === eb && "password" === (bb.oldValue || "").toLowerCase() && Mb.setAttribute("data-rr-is-password", "true"), !Mw(eb, Hb))
                if (Vb.attributes[Hb] = ww(this.doc, eb, Db(Hb), pb), "style" === Hb) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (wb) {
                    this.unattachedDoc = this.doc
                  }
                  const eb = this.unattachedDoc.createElement("span");
                  bb.oldValue && eb.setAttribute("style", bb.oldValue);
                  for (const bb of Array.from(Mb.style)) {
                    const wb = Mb.style.getPropertyValue(bb),
                      Hb = Mb.style.getPropertyPriority(bb);
                    wb !== eb.style.getPropertyValue(bb) || Hb !== eb.style.getPropertyPriority(bb) ? Vb.styleDiff[bb] = "" === Hb ? wb : [wb, Hb] : Vb._unchangedStyles[bb] = [wb, Hb]
                  }
                  for (const bb of Array.from(eb.style)) "" === Mb.style.getPropertyValue(bb) && (Vb.styleDiff[bb] = !1)
                } else "open" === Hb && "DIALOG" === Mb.tagName && (Mb.matches("dialog:modal") ? Vb.attributes.rr_open_mode = "modal" : Vb.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (LV(bb.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === bb.target.tagName) return void this.genTextAreaValueMutation(bb.target);
              bb.addedNodes.forEach((wb => this.genAdds(wb, bb.target))), bb.removedNodes.forEach((wb => {
                const Mb = this.mirror.getId(wb),
                  eb = zb(bb.target) ? this.mirror.getId(kp.host(bb.target)) : this.mirror.getId(bb.target);
                LV(bb.target, this.blockClass, this.blockSelector, !1) || OV(wb, this.mirror, this.slimDOMOptions) || !IV(wb, this.mirror) || (this.addedSet.has(wb) ? (QV(this.addedSet, wb), this.droppedSet.add(wb)) : this.addedSet.has(bb.target) && -1 === Mb || UV(bb.target, this.mirror) || (this.movedSet.has(wb) && this.movedMap[NV(Mb, eb)] ? QV(this.movedSet, wb) : (this.removes.push({
                  parentId: eb,
                  id: Mb,
                  isShadow: !(!zb(bb.target) || !Xb(bb.target)) || void 0
                }), function(bb, wb) {
                  const Mb = [bb];
                  for (; Mb.length;) {
                    const bb = Mb.pop();
                    wb.has(bb) || (wb.add(bb), kp.childNodes(bb).forEach((bb => Mb.push(bb))))
                  }
                }(wb, this.removesSubTreeCache))), this.mapRemoves.push(wb))
              }))
          }
        })), pb(this, "genAdds", ((bb, wb) => {
          if (!this.processedNodeManager.inOtherBuffer(bb, this) && !this.addedSet.has(bb) && !this.movedSet.has(bb)) {
            if (this.mirror.hasNode(bb)) {
              if (OV(bb, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(bb);
              let Mb = null;
              wb && this.mirror.hasNode(wb) && (Mb = this.mirror.getId(wb)), Mb && -1 !== Mb && (this.movedMap[NV(this.mirror.getId(bb), Mb)] = !0)
            } else this.addedSet.add(bb), this.droppedSet.delete(bb);
            LV(bb, this.blockClass, this.blockSelector, !1) || (kp.childNodes(bb).forEach((bb => this.genAdds(bb))), hV(bb) && kp.childNodes(kp.shadowRoot(bb)).forEach((wb => {
              this.processedNodeManager.add(wb, this), this.genAdds(wb, bb)
            })))
          }
        }))
      }
      init(bb) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((wb => {
          this[wb] = bb[wb]
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

    function QV(bb, wb) {
      bb.delete(wb), kp.childNodes(wb).forEach((wb => QV(bb, wb)))
    }

    function GV(bb, wb) {
      return 0 !== bb.size && qV(bb, wb)
    }

    function qV(bb, wb) {
      if (bb.has(wb)) return !0;
      const Mb = kp.parentNode(wb);
      return !!Mb && qV(bb, Mb)
    }
    let aV;
    const iV = bb => {
        if (!aV) return bb;
        return function() {
          try {
            return bb(...arguments)
          } catch (wb) {
            if (aV && !0 === aV(wb)) return;
            throw wb
          }
        }
      },
      uV = [];

    function dV(bb) {
      try {
        if ("composedPath" in bb) {
          const wb = bb.composedPath();
          if (wb.length) return wb[0]
        } else if ("path" in bb && bb.path.length) return bb.path[0]
      } catch {}
      return bb && bb.target
    }

    function PV(bb, wb) {
      const Mb = new vV;
      uV.push(Mb), Mb.init(bb);
      const [eb, Hb] = yp(), pb = new eb(iV(Mb.processMutations.bind(Mb)));
      return pb.observe(wb, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [pb, Hb]
    }

    function nV(bb) {
      let {
        mouseInteractionCb: wb,
        doc: Mb,
        mirror: eb,
        blockClass: Hb,
        blockSelector: pb,
        sampling: Vb
      } = bb;
      if (!1 === Vb.mouseInteraction) return () => {};
      const gb = !0 === Vb.mouseInteraction || void 0 === Vb.mouseInteraction ? {} : Vb.mouseInteraction,
        lb = [];
      let Lb = null;
      return Object.keys(ZV).filter((bb => Number.isNaN(Number(bb)) && !bb.endsWith("_Departed") && !1 !== gb[bb])).forEach((bb => {
        let Vb = Db(bb);
        const gb = (bb => Mb => {
          const Vb = dV(Mb);
          if (LV(Vb, Hb, pb, !0)) return;
          let gb = null,
            lb = bb;
          if ("pointerType" in Mb) {
            switch (Mb.pointerType) {
              case "mouse":
                gb = fV.Mouse;
                break;
              case "touch":
                gb = fV.Touch;
                break;
              case "pen":
                gb = fV.Pen
            }
            gb === fV.Touch ? ZV[bb] === ZV.MouseDown ? lb = "TouchStart" : ZV[bb] === ZV.MouseUp && (lb = "TouchEnd") : fV.Pen
          } else tV(Mb) && (gb = fV.Touch);
          null !== gb ? (Lb = gb, (lb.startsWith("Touch") && gb === fV.Touch || lb.startsWith("Mouse") && gb === fV.Mouse) && (gb = null)) : ZV[bb] === ZV.Click && (gb = Lb, Lb = null);
          const Ib = tV(Mb) ? Mb.changedTouches[0] : Mb;
          if (!Ib) return;
          const Ob = eb.getId(Vb),
            {
              clientX: Ub,
              clientY: tb
            } = Ib;
          iV(wb)({
            type: ZV[lb],
            id: Ob,
            x: Ub,
            y: tb,
            ...null !== gb && {
              pointerType: gb
            }
          })
        })(bb);
        if (window.PointerEvent) switch (ZV[bb]) {
          case ZV.MouseDown:
          case ZV.MouseUp:
            Vb = Vb.replace("mouse", "pointer");
            break;
          case ZV.TouchStart:
          case ZV.TouchEnd:
            return
        }
        lb.push(bV(Vb, gb, Mb))
      })), iV((() => {
        lb.forEach((bb => bb()))
      }))
    }

    function yV(bb) {
      let {
        scrollCb: wb,
        doc: Mb,
        mirror: eb,
        blockClass: Hb,
        blockSelector: pb,
        sampling: Vb
      } = bb;
      const gb = iV(eV(iV((bb => {
        const Vb = dV(bb);
        if (!Vb || LV(Vb, Hb, pb, !0)) return;
        const gb = eb.getId(Vb);
        if (Vb === Mb && Mb.defaultView) {
          const bb = pV(Mb.defaultView);
          wb({
            id: gb,
            x: bb.left,
            y: bb.top
          })
        } else wb({
          id: gb,
          x: Vb.scrollLeft,
          y: Vb.scrollTop
        })
      })), Vb.scroll || 100));
      return bV("scroll", gb, Mb)
    }
    const oV = ["INPUT", "TEXTAREA", "SELECT"],
      TV = new WeakMap;

    function kV(bb) {
      return function bb(wb, Mb) {
        if (eg("CSSGroupingRule") && wb.parentRule instanceof CSSGroupingRule || eg("CSSMediaRule") && wb.parentRule instanceof CSSMediaRule || eg("CSSSupportsRule") && wb.parentRule instanceof CSSSupportsRule || eg("CSSConditionRule") && wb.parentRule instanceof CSSConditionRule) {
          const eb = Array.from(wb.parentRule.cssRules).indexOf(wb);
          return Mb.unshift(eb), bb(wb.parentRule, Mb)
        }
        if (wb.parentStyleSheet) {
          const bb = Array.from(wb.parentStyleSheet.cssRules).indexOf(wb);
          Mb.unshift(bb)
        }
        return Mb
      }(bb, [])
    }

    function bg(bb, wb, Mb) {
      let eb, Hb;
      return bb ? (bb.ownerNode ? eb = wb.getId(bb.ownerNode) : Hb = Mb.getId(bb), {
        styleId: Hb,
        id: eb
      }) : {}
    }

    function wg(bb, wb) {
      let {
        mirror: Mb,
        stylesheetManager: eb
      } = bb;
      var Hb, pb, Vb;
      let gb = null;
      gb = "#document" === wb.nodeName ? Mb.getId(wb) : Mb.getId(kp.host(wb));
      const lb = "#document" === wb.nodeName ? null == (Hb = wb.defaultView) ? void 0 : Hb.Document : null == (Vb = null == (pb = wb.ownerDocument) ? void 0 : pb.defaultView) ? void 0 : Vb.ShadowRoot,
        Lb = (null == lb ? void 0 : lb.prototype) ? Object.getOwnPropertyDescriptor(null == lb ? void 0 : lb.prototype, "adoptedStyleSheets") : void 0;
      return null !== gb && -1 !== gb && lb && Lb ? (Object.defineProperty(wb, "adoptedStyleSheets", {
        configurable: Lb.configurable,
        enumerable: Lb.enumerable,
        get() {
          var bb;
          return null == (bb = Lb.get) ? void 0 : bb.call(this)
        },
        set(bb) {
          var wb;
          const Mb = null == (wb = Lb.set) ? void 0 : wb.call(this, bb);
          if (null !== gb && -1 !== gb) try {
            eb.adoptStyleSheets(bb, gb)
          } catch (Hb) {}
          return Mb
        }
      }), iV((() => {
        Object.defineProperty(wb, "adoptedStyleSheets", {
          configurable: Lb.configurable,
          enumerable: Lb.enumerable,
          get: Lb.get,
          set: Lb.set
        })
      }))) : () => {}
    }

    function Mg(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const Mb = bb.doc.defaultView;
      if (!Mb) return () => {};
      let eb;
      ! function(bb, wb) {
        const {
          mutationCb: Mb,
          mousemoveCb: eb,
          mouseInteractionCb: Hb,
          scrollCb: pb,
          viewportResizeCb: Vb,
          inputCb: gb,
          mediaInteractionCb: lb,
          styleSheetRuleCb: Lb,
          styleDeclarationCb: Ib,
          canvasMutationCb: Ob,
          fontCb: Ub,
          selectionCb: tb,
          customElementCb: Cb
        } = bb;
        bb.mutationCb = function() {
          wb.mutation && wb.mutation(...arguments), Mb(...arguments)
        }, bb.mousemoveCb = function() {
          wb.mousemove && wb.mousemove(...arguments), eb(...arguments)
        }, bb.mouseInteractionCb = function() {
          wb.mouseInteraction && wb.mouseInteraction(...arguments), Hb(...arguments)
        }, bb.scrollCb = function() {
          wb.scroll && wb.scroll(...arguments), pb(...arguments)
        }, bb.viewportResizeCb = function() {
          wb.viewportResize && wb.viewportResize(...arguments), Vb(...arguments)
        }, bb.inputCb = function() {
          wb.input && wb.input(...arguments), gb(...arguments)
        }, bb.mediaInteractionCb = function() {
          wb.mediaInteaction && wb.mediaInteaction(...arguments), lb(...arguments)
        }, bb.styleSheetRuleCb = function() {
          wb.styleSheetRule && wb.styleSheetRule(...arguments), Lb(...arguments)
        }, bb.styleDeclarationCb = function() {
          wb.styleDeclaration && wb.styleDeclaration(...arguments), Ib(...arguments)
        }, bb.canvasMutationCb = function() {
          wb.canvasMutation && wb.canvasMutation(...arguments), Ob(...arguments)
        }, bb.fontCb = function() {
          wb.font && wb.font(...arguments), Ub(...arguments)
        }, bb.selectionCb = function() {
          wb.selection && wb.selection(...arguments), tb(...arguments)
        }, bb.customElementCb = function() {
          wb.customElement && wb.customElement(...arguments), Cb(...arguments)
        }
      }(bb, wb);
      let Hb = () => {};
      bb.recordDOM && ([eb, Hb] = PV(bb, bb.doc));
      const pb = function(bb) {
          let {
            mousemoveCb: wb,
            sampling: Mb,
            doc: eb,
            mirror: Hb
          } = bb;
          if (!1 === Mb.mousemove) return () => {};
          const pb = "number" === typeof Mb.mousemove ? Mb.mousemove : 50,
            Vb = "number" === typeof Mb.mousemoveCallback ? Mb.mousemoveCallback : 500;
          let gb, lb = [];
          const Lb = eV(iV((bb => {
              const Mb = Date.now() - gb;
              wb(lb.map((bb => (bb.timeOffset -= Mb, bb))), bb), lb = [], gb = null
            })), Vb),
            Ib = iV(eV(iV((bb => {
              const wb = dV(bb),
                {
                  clientX: Mb,
                  clientY: eb
                } = tV(bb) ? bb.changedTouches[0] : bb;
              gb || (gb = op()), lb.push({
                x: Mb,
                y: eb,
                id: Hb.getId(wb),
                timeOffset: op() - gb
              }), Lb("undefined" !== typeof DragEvent && bb instanceof DragEvent ? YV.Drag : bb instanceof MouseEvent ? YV.MouseMove : YV.TouchMove)
            })), pb, {
              trailing: !1
            })),
            Ob = [bV("mousemove", Ib, eb), bV("touchmove", Ib, eb), bV("drag", Ib, eb)];
          return iV((() => {
            Ob.forEach((bb => bb()))
          }))
        }(bb),
        Vb = nV(bb),
        gb = yV(bb),
        lb = function(bb, wb) {
          let {
            viewportResizeCb: Mb
          } = bb, {
            win: eb
          } = wb, Hb = -1, pb = -1;
          return bV("resize", iV(eV(iV((() => {
            const bb = VV(),
              wb = gV();
            Hb === bb && pb === wb || (Mb({
              width: Number(wb),
              height: Number(bb)
            }), Hb = bb, pb = wb)
          })), 200)), eb)
        }(bb, {
          win: Mb
        }),
        Lb = function(bb) {
          let {
            inputCb: wb,
            doc: Mb,
            mirror: eb,
            blockClass: Hb,
            blockSelector: pb,
            ignoreClass: Vb,
            ignoreSelector: gb,
            maskInputOptions: lb,
            maskInputFn: Lb,
            sampling: Ib,
            userTriggeredOnInput: Ob
          } = bb;

          function Ub(bb) {
            let wb = dV(bb);
            const eb = bb.isTrusted,
              Ib = wb && wb.tagName;
            if (wb && "OPTION" === Ib && (wb = kp.parentElement(wb)), !wb || !Ib || oV.indexOf(Ib) < 0 || LV(wb, Hb, pb, !0)) return;
            if (wb.classList.contains(Vb) || gb && wb.matches(gb)) return;
            let Ub = wb.value,
              Cb = !1;
            const Eb = Yb(wb) || "";
            "radio" === Eb || "checkbox" === Eb ? Cb = wb.checked : (lb[Ib.toLowerCase()] || lb[Eb]) && (Ub = Rb({
              element: wb,
              maskInputOptions: lb,
              tagName: Ib,
              type: Eb,
              value: Ub,
              maskInputFn: Lb
            })), tb(wb, Ob ? {
              text: Ub,
              isChecked: Cb,
              userTriggered: eb
            } : {
              text: Ub,
              isChecked: Cb
            });
            const Fb = wb.name;
            "radio" === Eb && Fb && Cb && Mb.querySelectorAll(`input[type="radio"][name="${Fb}"]`).forEach((bb => {
              if (bb !== wb) {
                const wb = bb.value;
                tb(bb, Ob ? {
                  text: wb,
                  isChecked: !Cb,
                  userTriggered: !1
                } : {
                  text: wb,
                  isChecked: !Cb
                })
              }
            }))
          }

          function tb(bb, Mb) {
            const Hb = TV.get(bb);
            if (!Hb || Hb.text !== Mb.text || Hb.isChecked !== Mb.isChecked) {
              TV.set(bb, Mb);
              const Hb = eb.getId(bb);
              iV(wb)({
                ...Mb,
                id: Hb
              })
            }
          }
          const Cb = ("last" === Ib.input ? ["change"] : ["input", "change"]).map((bb => bV(bb, iV(Ub), Mb))),
            Eb = Mb.defaultView;
          if (!Eb) return () => {
            Cb.forEach((bb => bb()))
          };
          const Fb = Eb.Object.getOwnPropertyDescriptor(Eb.HTMLInputElement.prototype, "value"),
            Bb = [
              [Eb.HTMLInputElement.prototype, "value"],
              [Eb.HTMLInputElement.prototype, "checked"],
              [Eb.HTMLSelectElement.prototype, "value"],
              [Eb.HTMLTextAreaElement.prototype, "value"],
              [Eb.HTMLSelectElement.prototype, "selectedIndex"],
              [Eb.HTMLOptionElement.prototype, "selected"]
            ];
          return Fb && Fb.set && Cb.push(...Bb.map((bb => HV(bb[0], bb[1], {
            set() {
              iV(Ub)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, Eb)))), iV((() => {
            Cb.forEach((bb => bb()))
          }))
        }(bb),
        Ib = function(bb) {
          let {
            mediaInteractionCb: wb,
            blockClass: Mb,
            blockSelector: eb,
            mirror: Hb,
            sampling: pb,
            doc: Vb
          } = bb;
          const gb = iV((bb => eV(iV((pb => {
              const Vb = dV(pb);
              if (!Vb || LV(Vb, Mb, eb, !0)) return;
              const {
                currentTime: gb,
                volume: lb,
                muted: Lb,
                playbackRate: Ib,
                loop: Ob
              } = Vb;
              wb({
                type: bb,
                id: Hb.getId(Vb),
                currentTime: gb,
                volume: lb,
                muted: Lb,
                playbackRate: Ib,
                loop: Ob
              })
            })), pb.media || 500))),
            lb = [bV("play", gb(WV.Play), Vb), bV("pause", gb(WV.Pause), Vb), bV("seeked", gb(WV.Seeked), Vb), bV("volumechange", gb(WV.VolumeChange), Vb), bV("ratechange", gb(WV.RateChange), Vb)];
          return iV((() => {
            lb.forEach((bb => bb()))
          }))
        }(bb);
      let Ob = () => {},
        Ub = () => {},
        tb = () => {},
        Cb = () => {};
      bb.recordDOM && (Ob = function(bb, wb) {
        let {
          styleSheetRuleCb: Mb,
          mirror: eb,
          stylesheetManager: Hb
        } = bb, {
          win: pb
        } = wb;
        if (!pb.CSSStyleSheet || !pb.CSSStyleSheet.prototype) return () => {};
        const Vb = pb.CSSStyleSheet.prototype.insertRule;
        pb.CSSStyleSheet.prototype.insertRule = new Proxy(Vb, {
          apply: iV(((bb, wb, pb) => {
            const [Vb, gb] = pb, {
              id: lb,
              styleId: Lb
            } = bg(wb, eb, Hb.styleMirror);
            return (lb && -1 !== lb || Lb && -1 !== Lb) && Mb({
              id: lb,
              styleId: Lb,
              adds: [{
                rule: Vb,
                index: gb
              }]
            }), bb.apply(wb, pb)
          }))
        }), pb.CSSStyleSheet.prototype.addRule = function(bb, wb) {
          let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const eb = `${bb} { ${wb} }`;
          return pb.CSSStyleSheet.prototype.insertRule.apply(this, [eb, Mb])
        };
        const gb = pb.CSSStyleSheet.prototype.deleteRule;
        let lb, Lb;
        pb.CSSStyleSheet.prototype.deleteRule = new Proxy(gb, {
          apply: iV(((bb, wb, pb) => {
            const [Vb] = pb, {
              id: gb,
              styleId: lb
            } = bg(wb, eb, Hb.styleMirror);
            return (gb && -1 !== gb || lb && -1 !== lb) && Mb({
              id: gb,
              styleId: lb,
              removes: [{
                index: Vb
              }]
            }), bb.apply(wb, pb)
          }))
        }), pb.CSSStyleSheet.prototype.removeRule = function(bb) {
          return pb.CSSStyleSheet.prototype.deleteRule.apply(this, [bb])
        }, pb.CSSStyleSheet.prototype.replace && (lb = pb.CSSStyleSheet.prototype.replace, pb.CSSStyleSheet.prototype.replace = new Proxy(lb, {
          apply: iV(((bb, wb, pb) => {
            const [Vb] = pb, {
              id: gb,
              styleId: lb
            } = bg(wb, eb, Hb.styleMirror);
            return (gb && -1 !== gb || lb && -1 !== lb) && Mb({
              id: gb,
              styleId: lb,
              replace: Vb
            }), bb.apply(wb, pb)
          }))
        })), pb.CSSStyleSheet.prototype.replaceSync && (Lb = pb.CSSStyleSheet.prototype.replaceSync, pb.CSSStyleSheet.prototype.replaceSync = new Proxy(Lb, {
          apply: iV(((bb, wb, pb) => {
            const [Vb] = pb, {
              id: gb,
              styleId: lb
            } = bg(wb, eb, Hb.styleMirror);
            return (gb && -1 !== gb || lb && -1 !== lb) && Mb({
              id: gb,
              styleId: lb,
              replaceSync: Vb
            }), bb.apply(wb, pb)
          }))
        }));
        const Ib = {};
        Hg("CSSGroupingRule") ? Ib.CSSGroupingRule = pb.CSSGroupingRule : (Hg("CSSMediaRule") && (Ib.CSSMediaRule = pb.CSSMediaRule), Hg("CSSConditionRule") && (Ib.CSSConditionRule = pb.CSSConditionRule), Hg("CSSSupportsRule") && (Ib.CSSSupportsRule = pb.CSSSupportsRule));
        const Ob = {};
        return Object.entries(Ib).forEach((bb => {
          let [wb, pb] = bb;
          Ob[wb] = {
            insertRule: pb.prototype.insertRule,
            deleteRule: pb.prototype.deleteRule
          }, pb.prototype.insertRule = new Proxy(Ob[wb].insertRule, {
            apply: iV(((bb, wb, pb) => {
              const [Vb, gb] = pb, {
                id: lb,
                styleId: Lb
              } = bg(wb.parentStyleSheet, eb, Hb.styleMirror);
              return (lb && -1 !== lb || Lb && -1 !== Lb) && Mb({
                id: lb,
                styleId: Lb,
                adds: [{
                  rule: Vb,
                  index: [...kV(wb), gb || 0]
                }]
              }), bb.apply(wb, pb)
            }))
          }), pb.prototype.deleteRule = new Proxy(Ob[wb].deleteRule, {
            apply: iV(((bb, wb, pb) => {
              const [Vb] = pb, {
                id: gb,
                styleId: lb
              } = bg(wb.parentStyleSheet, eb, Hb.styleMirror);
              return (gb && -1 !== gb || lb && -1 !== lb) && Mb({
                id: gb,
                styleId: lb,
                removes: [{
                  index: [...kV(wb), Vb]
                }]
              }), bb.apply(wb, pb)
            }))
          })
        })), iV((() => {
          pb.CSSStyleSheet.prototype.insertRule = Vb, pb.CSSStyleSheet.prototype.deleteRule = gb, lb && (pb.CSSStyleSheet.prototype.replace = lb), Lb && (pb.CSSStyleSheet.prototype.replaceSync = Lb), Object.entries(Ib).forEach((bb => {
            let [wb, Mb] = bb;
            Mb.prototype.insertRule = Ob[wb].insertRule, Mb.prototype.deleteRule = Ob[wb].deleteRule
          }))
        }))
      }(bb, {
        win: Mb
      }), Ub = wg(bb, bb.doc), tb = function(bb, wb) {
        let {
          styleDeclarationCb: Mb,
          mirror: eb,
          ignoreCSSAttributes: Hb,
          stylesheetManager: pb
        } = bb, {
          win: Vb
        } = wb;
        const gb = Vb.CSSStyleDeclaration.prototype.setProperty;
        Vb.CSSStyleDeclaration.prototype.setProperty = new Proxy(gb, {
          apply: iV(((bb, wb, Vb) => {
            var lb;
            const [Lb, Ib, Ob] = Vb;
            if (Hb.has(Lb)) return gb.apply(wb, [Lb, Ib, Ob]);
            const {
              id: Ub,
              styleId: tb
            } = bg(null == (lb = wb.parentRule) ? void 0 : lb.parentStyleSheet, eb, pb.styleMirror);
            return (Ub && -1 !== Ub || tb && -1 !== tb) && Mb({
              id: Ub,
              styleId: tb,
              set: {
                property: Lb,
                value: Ib,
                priority: Ob
              },
              index: kV(wb.parentRule)
            }), bb.apply(wb, Vb)
          }))
        });
        const lb = Vb.CSSStyleDeclaration.prototype.removeProperty;
        return Vb.CSSStyleDeclaration.prototype.removeProperty = new Proxy(lb, {
          apply: iV(((bb, wb, Vb) => {
            var gb;
            const [Lb] = Vb;
            if (Hb.has(Lb)) return lb.apply(wb, [Lb]);
            const {
              id: Ib,
              styleId: Ob
            } = bg(null == (gb = wb.parentRule) ? void 0 : gb.parentStyleSheet, eb, pb.styleMirror);
            return (Ib && -1 !== Ib || Ob && -1 !== Ob) && Mb({
              id: Ib,
              styleId: Ob,
              remove: {
                property: Lb
              },
              index: kV(wb.parentRule)
            }), bb.apply(wb, Vb)
          }))
        }), iV((() => {
          Vb.CSSStyleDeclaration.prototype.setProperty = gb, Vb.CSSStyleDeclaration.prototype.removeProperty = lb
        }))
      }(bb, {
        win: Mb
      }), bb.collectFonts && (Cb = function(bb) {
        let {
          fontCb: wb,
          doc: Mb
        } = bb;
        const eb = Mb.defaultView;
        if (!eb) return () => {};
        const Hb = [],
          pb = new WeakMap,
          Vb = eb.FontFace;
        eb.FontFace = function(bb, wb, Mb) {
          const eb = new Vb(bb, wb, Mb);
          return pb.set(eb, {
            family: bb,
            buffer: "string" !== typeof wb,
            descriptors: Mb,
            fontSource: "string" === typeof wb ? wb : JSON.stringify(Array.from(new Uint8Array(wb)))
          }), eb
        };
        const gb = Tp(Mb.fonts, "add", (function(bb) {
          return function(Mb) {
            return setTimeout(iV((() => {
              const bb = pb.get(Mb);
              bb && (wb(bb), pb.delete(Mb))
            })), 0), bb.apply(this, [Mb])
          }
        }));
        return Hb.push((() => {
          eb.FontFace = Vb
        })), Hb.push(gb), iV((() => {
          Hb.forEach((bb => bb()))
        }))
      }(bb)));
      const Eb = function(bb) {
          const {
            doc: wb,
            mirror: Mb,
            blockClass: eb,
            blockSelector: Hb,
            selectionCb: pb
          } = bb;
          let Vb = !0;
          const gb = iV((() => {
            const bb = wb.getSelection();
            if (!bb || Vb && (null == bb ? void 0 : bb.isCollapsed)) return;
            Vb = bb.isCollapsed || !1;
            const gb = [],
              lb = bb.rangeCount || 0;
            for (let wb = 0; wb < lb; wb++) {
              const pb = bb.getRangeAt(wb),
                {
                  startContainer: Vb,
                  startOffset: lb,
                  endContainer: Lb,
                  endOffset: Ib
                } = pb;
              LV(Vb, eb, Hb, !0) || LV(Lb, eb, Hb, !0) || gb.push({
                start: Mb.getId(Vb),
                startOffset: lb,
                end: Mb.getId(Lb),
                endOffset: Ib
              })
            }
            pb({
              gF: gb
            })
          }));
          return gb(), bV("selectionchange", gb)
        }(bb),
        Fb = function(bb) {
          let {
            doc: wb,
            customElementCb: Mb
          } = bb;
          const eb = wb.defaultView;
          return eb && eb.customElements ? Tp(eb.customElements, "define", (function(bb) {
            return function(wb, eb, Hb) {
              try {
                Mb({
                  define: {
                    name: wb
                  }
                })
              } catch (pb) {
                console.warn(`Custom element callback failed for ${wb}`)
              }
              return bb.apply(this, [wb, eb, Hb])
            }
          })) : () => {}
        }(bb),
        Bb = [];
      for (const sb of bb.plugins) Bb.push(sb.observer(sb.callback, Mb, sb.options));
      return iV((() => {
        uV.forEach((bb => bb.reset())), null == eb || eb.disconnect(), Hb(), pb(), Vb(), gb(), lb(), Lb(), Ib(), Ob(), Ub(), tb(), Cb(), Eb(), Fb(), Bb.forEach((bb => bb()))
      }))
    }

    function eg(bb) {
      return "undefined" !== typeof window[bb]
    }

    function Hg(bb) {
      return Boolean("undefined" !== typeof window[bb] && window[bb].prototype && "insertRule" in window[bb].prototype && "deleteRule" in window[bb].prototype)
    }
    class pg {
      constructor(bb) {
        pb(this, "iframeIdToRemoteIdMap", new WeakMap), pb(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = bb
      }
      getId(bb, wb, Mb, eb) {
        const Hb = Mb || this.getIdToRemoteIdMap(bb),
          pb = eb || this.getRemoteIdToIdMap(bb);
        let Vb = Hb.get(wb);
        return Vb || (Vb = this.generateIdFn(), Hb.set(wb, Vb), pb.set(Vb, wb)), Vb
      }
      getIds(bb, wb) {
        const Mb = this.getIdToRemoteIdMap(bb),
          eb = this.getRemoteIdToIdMap(bb);
        return wb.map((wb => this.getId(bb, wb, Mb, eb)))
      }
      getRemoteId(bb, wb, Mb) {
        const eb = Mb || this.getRemoteIdToIdMap(bb);
        if ("number" !== typeof wb) return wb;
        const Hb = eb.get(wb);
        return Hb || -1
      }
      getRemoteIds(bb, wb) {
        const Mb = this.getRemoteIdToIdMap(bb);
        return wb.map((wb => this.getRemoteId(bb, wb, Mb)))
      }
      reset(bb) {
        if (!bb) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(bb), this.iframeRemoteIdToIdMap.delete(bb)
      }
      getIdToRemoteIdMap(bb) {
        let wb = this.iframeIdToRemoteIdMap.get(bb);
        return wb || (wb = new Map, this.iframeIdToRemoteIdMap.set(bb, wb)), wb
      }
      getRemoteIdToIdMap(bb) {
        let wb = this.iframeRemoteIdToIdMap.get(bb);
        return wb || (wb = new Map, this.iframeRemoteIdToIdMap.set(bb, wb)), wb
      }
    }
    class Vg {
      constructor(bb) {
        pb(this, "iframes", new WeakMap), pb(this, "crossOriginIframeMap", new WeakMap), pb(this, "crossOriginIframeMirror", new pg(ub)), pb(this, "crossOriginIframeStyleMirror"), pb(this, "crossOriginIframeRootIdMap", new WeakMap), pb(this, "mirror"), pb(this, "mutationCb"), pb(this, "wrappedEmit"), pb(this, "loadListener"), pb(this, "stylesheetManager"), pb(this, "recordCrossOriginIframes"), this.mutationCb = bb.mutationCb, this.wrappedEmit = bb.wrappedEmit, this.stylesheetManager = bb.stylesheetManager, this.recordCrossOriginIframes = bb.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new pg(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = bb.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(bb) {
        this.iframes.set(bb, !0), bb.contentWindow && this.crossOriginIframeMap.set(bb.contentWindow, bb)
      }
      addLoadListener(bb) {
        this.loadListener = bb
      }
      attachIframe(bb, wb) {
        var Mb, eb;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(bb),
            nextId: null,
            node: wb
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (Mb = bb.contentWindow) || Mb.addEventListener("message", this.handleMessage.bind(this))), null == (eb = this.loadListener) || eb.call(this, bb), bb.contentDocument && bb.contentDocument.adoptedStyleSheets && bb.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(bb.contentDocument.adoptedStyleSheets, this.mirror.getId(bb.contentDocument))
      }
      handleMessage(bb) {
        const wb = bb;
        if ("rrweb" !== wb.data.type || wb.origin !== wb.data.origin) return;
        if (!bb.source) return;
        const Mb = this.crossOriginIframeMap.get(bb.source);
        if (!Mb) return;
        const eb = this.transformCrossOriginEvent(Mb, wb.data.event);
        eb && this.wrappedEmit(eb, wb.data.isCheckout)
      }
      transformCrossOriginEvent(bb, wb) {
        var Mb;
        switch (wb.type) {
          case cV.FullSnapshot: {
            this.crossOriginIframeMirror.reset(bb), this.crossOriginIframeStyleMirror.reset(bb), this.replaceIdOnNode(wb.data.node, bb);
            const Mb = wb.data.node.id;
            return this.crossOriginIframeRootIdMap.set(bb, Mb), this.patchRootIdOnNode(wb.data.node, Mb), {
              timestamp: wb.timestamp,
              type: cV.IncrementalSnapshot,
              data: {
                source: YV.Mutation,
                adds: [{
                  parentId: this.mirror.getId(bb),
                  nextId: null,
                  node: wb.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }
            }
          }
          case cV.Meta:
          case cV.Load:
          case cV.DomContentLoaded:
            return !1;
          case cV.Plugin:
            return wb;
          case cV.Custom:
            return this.replaceIds(wb.data.payload, bb, ["id", "parentId", "previousId", "nextId"]), wb;
          case cV.IncrementalSnapshot:
            switch (wb.data.source) {
              case YV.Mutation:
                return wb.data.adds.forEach((wb => {
                  this.replaceIds(wb, bb, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(wb.node, bb);
                  const Mb = this.crossOriginIframeRootIdMap.get(bb);
                  Mb && this.patchRootIdOnNode(wb.node, Mb)
                })), wb.data.removes.forEach((wb => {
                  this.replaceIds(wb, bb, ["parentId", "id"])
                })), wb.data.attributes.forEach((wb => {
                  this.replaceIds(wb, bb, ["id"])
                })), wb.data.texts.forEach((wb => {
                  this.replaceIds(wb, bb, ["id"])
                })), wb;
              case YV.Drag:
              case YV.TouchMove:
              case YV.MouseMove:
                return wb.data.positions.forEach((wb => {
                  this.replaceIds(wb, bb, ["id"])
                })), wb;
              case YV.ViewportResize:
                return !1;
              case YV.MediaInteraction:
              case YV.MouseInteraction:
              case YV.Scroll:
              case YV.CanvasMutation:
              case YV.Input:
                return this.replaceIds(wb.data, bb, ["id"]), wb;
              case YV.StyleSheetRule:
              case YV.StyleDeclaration:
                return this.replaceIds(wb.data, bb, ["id"]), this.replaceStyleIds(wb.data, bb, ["styleId"]), wb;
              case YV.Font:
                return wb;
              case YV.Selection:
                return wb.data.gF.forEach((wb => {
                  this.replaceIds(wb, bb, ["start", "end"])
                })), wb;
              case YV.AdoptedStyleSheet:
                return this.replaceIds(wb.data, bb, ["id"]), this.replaceStyleIds(wb.data, bb, ["styleIds"]), null == (Mb = wb.data.styles) || Mb.forEach((wb => {
                  this.replaceStyleIds(wb, bb, ["styleId"])
                })), wb
            }
        }
        return !1
      }
      replace(bb, wb, Mb, eb) {
        for (const Hb of eb)(Array.isArray(wb[Hb]) || "number" === typeof wb[Hb]) && (Array.isArray(wb[Hb]) ? wb[Hb] = bb.getIds(Mb, wb[Hb]) : wb[Hb] = bb.getId(Mb, wb[Hb]));
        return wb
      }
      replaceIds(bb, wb, Mb) {
        return this.replace(this.crossOriginIframeMirror, bb, wb, Mb)
      }
      replaceStyleIds(bb, wb, Mb) {
        return this.replace(this.crossOriginIframeStyleMirror, bb, wb, Mb)
      }
      replaceIdOnNode(bb, wb) {
        this.replaceIds(bb, wb, ["id", "rootId"]), "childNodes" in bb && bb.childNodes.forEach((bb => {
          this.replaceIdOnNode(bb, wb)
        }))
      }
      patchRootIdOnNode(bb, wb) {
        bb.type === SV.Document || bb.rootId || (bb.rootId = wb), "childNodes" in bb && bb.childNodes.forEach((bb => {
          this.patchRootIdOnNode(bb, wb)
        }))
      }
    }
    class gg {
      constructor(bb) {
        pb(this, "shadowDoms", new WeakSet), pb(this, "mutationCb"), pb(this, "scrollCb"), pb(this, "bypassOptions"), pb(this, "mirror"), pb(this, "restoreHandlers", []), this.mutationCb = bb.mutationCb, this.scrollCb = bb.scrollCb, this.bypassOptions = bb.bypassOptions, this.mirror = bb.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(bb, wb) {
        if (!Xb(bb)) return;
        if (this.shadowDoms.has(bb)) return;
        this.shadowDoms.add(bb);
        const [Mb] = PV({
          ...this.bypassOptions,
          doc: wb,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, bb);
        this.restoreHandlers.push((() => Mb.disconnect())), this.restoreHandlers.push(yV({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: bb,
          mirror: this.mirror
        })), setTimeout((() => {
          bb.adoptedStyleSheets && bb.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(bb.adoptedStyleSheets, this.mirror.getId(kp.host(bb))), this.restoreHandlers.push(wg({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, bb))
        }), 0)
      }
      observeAttachShadow(bb) {
        bb.contentWindow && bb.contentDocument && this.patchAttachShadow(bb.contentWindow.Element, bb.contentDocument)
      }
      patchAttachShadow(bb, wb) {
        const Mb = this;
        this.restoreHandlers.push(Tp(bb.prototype, "attachShadow", (function(bb) {
          return function(eb) {
            const Hb = bb.call(this, eb),
              pb = kp.shadowRoot(this);
            return pb && DV(this) && Mb.addShadowRoot(pb, wb), Hb
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((bb => {
          try {
            bb()
          } catch (wb) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var lg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lg = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), Ig = 0; Ig < 64; Ig++) Lg[lg.charCodeAt(Ig)] = Ig;
    const Og = new Map;
    const Ug = (bb, wb, Mb) => {
      if (!bb || !Eg(bb, wb) && "object" !== typeof bb) return;
      const eb = function(bb, wb) {
        let Mb = Og.get(bb);
        return Mb || (Mb = new Map, Og.set(bb, Mb)), Mb.has(wb) || Mb.set(wb, []), Mb.get(wb)
      }(Mb, bb.constructor.name);
      let Hb = eb.indexOf(bb);
      return -1 === Hb && (Hb = eb.length, eb.push(bb)), Hb
    };

    function tg(bb, wb, Mb) {
      if (bb instanceof Array) return bb.map((bb => tg(bb, wb, Mb)));
      if (null === bb) return bb;
      if (bb instanceof Float32Array || bb instanceof Float64Array || bb instanceof Int32Array || bb instanceof Uint32Array || bb instanceof Uint8Array || bb instanceof Uint16Array || bb instanceof Int16Array || bb instanceof Int8Array || bb instanceof Uint8ClampedArray) {
        return {
          rr_type: bb.constructor.name,
          args: [Object.values(bb)]
        }
      }
      if (bb instanceof ArrayBuffer) {
        return {
          rr_type: bb.constructor.name,
          base64: function(bb) {
            var wb, Mb = new Uint8Array(bb),
              eb = Mb.length,
              Hb = "";
            for (wb = 0; wb < eb; wb += 3) Hb += lg[Mb[wb] >> 2], Hb += lg[(3 & Mb[wb]) << 4 | Mb[wb + 1] >> 4], Hb += lg[(15 & Mb[wb + 1]) << 2 | Mb[wb + 2] >> 6], Hb += lg[63 & Mb[wb + 2]];
            return eb % 3 === 2 ? Hb = Hb.substring(0, Hb.length - 1) + "=" : eb % 3 === 1 && (Hb = Hb.substring(0, Hb.length - 2) + "=="), Hb
          }(bb)
        }
      }
      if (bb instanceof DataView) {
        return {
          rr_type: bb.constructor.name,
          args: [tg(bb.buffer, wb, Mb), bb.byteOffset, bb.byteLength]
        }
      }
      if (bb instanceof HTMLImageElement) {
        const wb = bb.constructor.name,
          {
            src: Mb
          } = bb;
        return {
          rr_type: wb,
          src: Mb
        }
      }
      if (bb instanceof HTMLCanvasElement) {
        return {
          rr_type: "HTMLImageElement",
          src: bb.toDataURL()
        }
      }
      if (bb instanceof ImageData) {
        return {
          rr_type: bb.constructor.name,
          args: [tg(bb.data, wb, Mb), bb.width, bb.height]
        }
      }
      if (Eg(bb, wb) || "object" === typeof bb) {
        return {
          rr_type: bb.constructor.name,
          index: Ug(bb, wb, Mb)
        }
      }
      return bb
    }
    const Cg = (bb, wb, Mb) => bb.map((bb => tg(bb, wb, Mb))),
      Eg = (bb, wb) => {
        const Mb = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((bb => "function" === typeof wb[bb]));
        return Boolean(Mb.find((Mb => bb instanceof wb[Mb])))
      };

    function Fg(bb, wb, Mb, eb) {
      const Hb = [];
      try {
        const pb = Tp(bb.HTMLCanvasElement.prototype, "getContext", (function(bb) {
          return function(Hb) {
            for (var pb = arguments.length, Vb = new Array(pb > 1 ? pb - 1 : 0), gb = 1; gb < pb; gb++) Vb[gb - 1] = arguments[gb];
            if (!LV(this, wb, Mb, !0)) {
              const bb = function(bb) {
                return "experimental-webgl" === bb ? "webgl" : bb
              }(Hb);
              if ("__context" in this || (this.__context = bb), eb && ["webgl", "webgl2"].includes(bb))
                if (Vb[0] && "object" === typeof Vb[0]) {
                  const bb = Vb[0];
                  bb.preserveDrawingBuffer || (bb.preserveDrawingBuffer = !0)
                } else Vb.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return bb.apply(this, [Hb, ...Vb])
          }
        }));
        Hb.push(pb)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        Hb.forEach((bb => bb()))
      }
    }

    function Bg(bb, wb, Mb, eb, Hb, pb) {
      const Vb = [],
        gb = Object.getOwnPropertyNames(bb);
      for (const lb of gb)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(lb)) try {
          if ("function" !== typeof bb[lb]) continue;
          const gb = Tp(bb, lb, (function(bb) {
            return function() {
              for (var Vb = arguments.length, gb = new Array(Vb), Lb = 0; Lb < Vb; Lb++) gb[Lb] = arguments[Lb];
              const Ib = bb.apply(this, gb);
              if (Ug(Ib, pb, this), "tagName" in this.canvas && !LV(this.canvas, eb, Hb, !0)) {
                const bb = Cg(gb, pb, this),
                  eb = {
                    type: wb,
                    property: lb,
                    args: bb
                  };
                Mb(this.canvas, eb)
              }
              return Ib
            }
          }));
          Vb.push(gb)
        } catch {
          const eb = HV(bb, lb, {
            set(bb) {
              Mb(this.canvas, {
                type: wb,
                property: lb,
                args: [bb],
                setter: !0
              })
            }
          });
          Vb.push(eb)
        }
      return Vb
    }
    const sg = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      mg = "undefined" !== typeof self && self.Blob && new Blob([sg], {
        type: "text/javascript;charset=utf-8"
      });

    function hg(bb) {
      let wb;
      try {
        if (wb = mg && (self.URL || self.webkitURL).createObjectURL(mg), !wb) throw "";
        const Mb = new Worker(wb, {
          name: null == bb ? void 0 : bb.name
        });
        return Mb.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(wb)
        })), Mb
      } catch (Mb) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(sg), {
          name: null == bb ? void 0 : bb.name
        })
      } finally {
        wb && (self.URL || self.webkitURL).revokeObjectURL(wb)
      }
    }
    class zg {
      constructor(bb) {
        pb(this, "pendingCanvasMutations", new Map), pb(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), pb(this, "mirror"), pb(this, "mutationCb"), pb(this, "resetObservers"), pb(this, "frozen", !1), pb(this, "locked", !1), pb(this, "processMutation", ((bb, wb) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(bb) || this.pendingCanvasMutations.set(bb, []), this.pendingCanvasMutations.get(bb).push(wb)
        }));
        const {
          sampling: wb = "all",
          win: Mb,
          blockClass: eb,
          blockSelector: Hb,
          recordCanvas: Vb,
          dataURLOptions: gb
        } = bb;
        this.mutationCb = bb.mutationCb, this.mirror = bb.mirror, Vb && "all" === wb && this.initCanvasMutationObserver(Mb, eb, Hb), Vb && "number" === typeof wb && this.initCanvasFPSObserver(wb, Mb, eb, Hb, {
          dataURLOptions: gb
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
      initCanvasFPSObserver(bb, wb, Mb, eb, Hb) {
        const pb = Fg(wb, Mb, eb, !0),
          Vb = new Map,
          gb = new hg;
        gb.onmessage = bb => {
          const {
            id: wb
          } = bb.data;
          if (Vb.set(wb, !1), !("base64" in bb.data)) return;
          const {
            base64: Mb,
            type: eb,
            width: Hb,
            height: pb
          } = bb.data;
          this.mutationCb({
            id: wb,
            type: AV["2D"],
            commands: [{
              property: "clearRect",
              args: [0, 0, Hb, pb]
            }, {
              property: "drawImage",
              args: [{
                rr_type: "ImageBitmap",
                args: [{
                  rr_type: "Blob",
                  data: [{
                    rr_type: "ArrayBuffer",
                    base64: Mb
                  }],
                  type: eb
                }]
              }, 0, 0]
            }]
          })
        };
        const lb = 1e3 / bb;
        let Lb, Ib = 0;
        const Ob = bb => {
          Ib && bb - Ib < lb || (Ib = bb, (() => {
            const bb = [];
            return wb.document.querySelectorAll("canvas").forEach((wb => {
              LV(wb, Mb, eb, !0) || bb.push(wb)
            })), bb
          })().forEach((async bb => {
            var wb;
            const Mb = this.mirror.getId(bb);
            if (Vb.get(Mb)) return;
            if (0 === bb.width || 0 === bb.height) return;
            if (Vb.set(Mb, !0), ["webgl", "webgl2"].includes(bb.__context)) {
              const Mb = bb.getContext(bb.__context);
              !1 === (null == (wb = null == Mb ? void 0 : Mb.getContextAttributes()) ? void 0 : wb.preserveDrawingBuffer) && Mb.clear(Mb.COLOR_BUFFER_BIT)
            }
            const eb = await createImageBitmap(bb);
            gb.postMessage({
              id: Mb,
              bitmap: eb,
              width: bb.width,
              height: bb.height,
              dataURLOptions: Hb.dataURLOptions
            }, [eb])
          }))), Lb = requestAnimationFrame(Ob)
        };
        Lb = requestAnimationFrame(Ob), this.resetObservers = () => {
          pb(), cancelAnimationFrame(Lb)
        }
      }
      initCanvasMutationObserver(bb, wb, Mb) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const eb = Fg(bb, wb, Mb, !1),
          Hb = function(bb, wb, Mb, eb) {
            const Hb = [],
              pb = Object.getOwnPropertyNames(wb.CanvasRenderingContext2D.prototype);
            for (const Vb of pb) try {
              if ("function" !== typeof wb.CanvasRenderingContext2D.prototype[Vb]) continue;
              const pb = Tp(wb.CanvasRenderingContext2D.prototype, Vb, (function(Hb) {
                return function() {
                  for (var pb = arguments.length, gb = new Array(pb), lb = 0; lb < pb; lb++) gb[lb] = arguments[lb];
                  return LV(this.canvas, Mb, eb, !0) || setTimeout((() => {
                    const Mb = Cg(gb, wb, this);
                    bb(this.canvas, {
                      type: AV["2D"],
                      property: Vb,
                      args: Mb
                    })
                  }), 0), Hb.apply(this, gb)
                }
              }));
              Hb.push(pb)
            } catch {
              const Mb = HV(wb.CanvasRenderingContext2D.prototype, Vb, {
                set(wb) {
                  bb(this.canvas, {
                    type: AV["2D"],
                    property: Vb,
                    args: [wb],
                    setter: !0
                  })
                }
              });
              Hb.push(Mb)
            }
            return () => {
              Hb.forEach((bb => bb()))
            }
          }(this.processMutation.bind(this), bb, wb, Mb),
          pb = function(bb, wb, Mb, eb) {
            const Hb = [];
            return "undefined" !== typeof wb.WebGLRenderingContext && Hb.push(...Bg(wb.WebGLRenderingContext.prototype, AV.WebGL, bb, Mb, eb, wb)), "undefined" !== typeof wb.WebGL2RenderingContext && Hb.push(...Bg(wb.WebGL2RenderingContext.prototype, AV.WebGL2, bb, Mb, eb, wb)), () => {
              Hb.forEach((bb => bb()))
            }
          }(this.processMutation.bind(this), bb, wb, Mb);
        this.resetObservers = () => {
          eb(), Hb(), pb()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const bb = wb => {
          this.rafStamps.latestId = wb, requestAnimationFrame(bb)
        };
        requestAnimationFrame(bb)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((bb, wb) => {
          const Mb = this.mirror.getId(wb);
          this.flushPendingCanvasMutationFor(wb, Mb)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(bb, wb) {
        if (this.frozen || this.locked) return;
        const Mb = this.pendingCanvasMutations.get(bb);
        if (!Mb || -1 === wb) return;
        const eb = Mb.map((bb => {
            const {
              type: wb,
              ...Mb
            } = bb;
            return Mb
          })),
          {
            type: Hb
          } = Mb[0];
        this.mutationCb({
          id: wb,
          type: Hb,
          commands: eb
        }), this.pendingCanvasMutations.delete(bb)
      }
    }
    class Xg {
      constructor(bb) {
        pb(this, "trackedLinkElements", new WeakSet), pb(this, "mutationCb"), pb(this, "adoptedStyleSheetCb"), pb(this, "styleMirror", new jV), this.mutationCb = bb.mutationCb, this.adoptedStyleSheetCb = bb.adoptedStyleSheetCb
      }
      attachLinkElement(bb, wb) {
        "_cssText" in wb.attributes && this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{
            id: wb.id,
            attributes: wb.attributes
          }]
        }), this.trackLinkElement(bb)
      }
      trackLinkElement(bb) {
        this.trackedLinkElements.has(bb) || (this.trackedLinkElements.add(bb), this.trackStylesheetInLinkElement(bb))
      }
      adoptStyleSheets(bb, wb) {
        if (0 === bb.length) return;
        const Mb = {
            id: wb,
            styleIds: []
          },
          eb = [];
        for (const Hb of bb) {
          let bb;
          this.styleMirror.has(Hb) ? bb = this.styleMirror.getId(Hb) : (bb = this.styleMirror.add(Hb), eb.push({
            styleId: bb,
            rules: Array.from(Hb.rules || CSSRule, ((bb, wb) => ({
              rule: jb(bb, Hb.href),
              index: wb
            })))
          })), Mb.styleIds.push(bb)
        }
        eb.length > 0 && (Mb.styles = eb), this.adoptedStyleSheetCb(Mb)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(bb) {}
    }
    class xg {
      constructor() {
        pb(this, "nodeMap", new WeakMap), pb(this, "active", !1)
      }
      inOtherBuffer(bb, wb) {
        const Mb = this.nodeMap.get(bb);
        return Mb && Array.from(Mb).some((bb => bb !== wb))
      }
      add(bb, wb) {
        this.active || (this.active = !0, requestAnimationFrame((() => {
          this.nodeMap = new WeakMap, this.active = !1
        }))), this.nodeMap.set(bb, (this.nodeMap.get(bb) || new Set).add(wb))
      }
      destroy() {}
    }
    let jg, Kg, rg, Rg = !1;
    try {
      if (2 !== Array.from([1], (bb => 2 * bb))[0]) {
        const bb = document.createElement("iframe");
        document.body.appendChild(bb), Array.from = (null == (eb = bb.contentWindow) ? void 0 : eb.Array.from) || Array.from, document.body.removeChild(bb)
      }
    } catch (tl) {
      console.debug("Unable to override Array.from", tl)
    }
    const Dg = rb();

    function cg() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: wb,
        checkoutEveryNms: Mb,
        checkoutEveryNth: eb,
        blockClass: Hb = "rr-block",
        blockSelector: pb = null,
        ignoreClass: Vb = "rr-ignore",
        ignoreSelector: gb = null,
        maskTextClass: lb = "rr-mask",
        maskTextSelector: Lb = null,
        inlineStylesheet: Ib = !0,
        maskAllInputs: Ob,
        maskInputOptions: Ub,
        slimDOMOptions: tb,
        maskInputFn: Cb,
        maskTextFn: Eb,
        hooks: Fb,
        packFn: Bb,
        sampling: sb = {},
        dataURLOptions: mb = {},
        mousemoveWait: hb,
        recordDOM: zb = !0,
        recordCanvas: Xb = !1,
        recordCrossOriginIframes: xb = !1,
        recordAfter: jb = ("DOMContentLoaded" === bb.recordAfter ? bb.recordAfter : "load"),
        userTriggeredOnInput: rb = !1,
        collectFonts: Rb = !1,
        inlineImages: Db = !1,
        plugins: cb,
        keepIframeSrcFn: Yb = () => !1,
        ignoreCSSAttributes: Zb = new Set([]),
        errorHandler: fb
      } = bb;
      aV = fb;
      const Ab = !xb || window.parent === window;
      let Wb = !1;
      if (!Ab) try {
        window.parent.document && (Wb = !1)
      } catch (nb) {
        Wb = !0
      }
      if (Ab && !wb) throw new Error("emit function is required");
      if (!Ab && !Wb) return () => {};
      void 0 !== hb && void 0 === sb.mousemove && (sb.mousemove = hb), Dg.reset();
      const Jb = !0 === Ob ? {
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
        } : void 0 !== Ub ? Ub : {
          password: !0
        },
        Sb = gw(tb);
      let Nb;
      CV();
      let vb = 0;
      const Qb = bb => {
        for (const wb of cb || []) wb.eventProcessor && (bb = wb.eventProcessor(bb));
        return Bb && !Wb && (bb = Bb(bb)), bb
      };
      jg = (bb, Hb) => {
        var pb;
        const Vb = bb;
        if (Vb.timestamp = op(), !(null == (pb = uV[0]) ? void 0 : pb.isFrozen()) || Vb.type === cV.FullSnapshot || Vb.type === cV.IncrementalSnapshot && Vb.data.source === YV.Mutation || uV.forEach((bb => bb.unfreeze())), Ab) null == wb || wb(Qb(Vb), Hb);
        else if (Wb) {
          const bb = {
            type: "rrweb",
            event: Qb(Vb),
            origin: window.location.origin,
            isCheckout: Hb
          };
          window.parent.postMessage(bb, "*")
        }
        if (Vb.type === cV.FullSnapshot) Nb = Vb, vb = 0;
        else if (Vb.type === cV.IncrementalSnapshot) {
          if (Vb.data.source === YV.Mutation && Vb.data.isAttachIframe) return;
          vb++;
          const bb = eb && vb >= eb,
            wb = Mb && Vb.timestamp - Nb.timestamp > Mb;
          (bb || wb) && Kg(!0)
        }
      };
      const Gb = bb => {
          jg({
            type: cV.IncrementalSnapshot,
            data: {
              source: YV.Mutation,
              ...bb
            }
          })
        },
        qb = bb => jg({
          type: cV.IncrementalSnapshot,
          data: {
            source: YV.Scroll,
            ...bb
          }
        }),
        ab = bb => jg({
          type: cV.IncrementalSnapshot,
          data: {
            source: YV.CanvasMutation,
            ...bb
          }
        }),
        ib = new Xg({
          mutationCb: Gb,
          adoptedStyleSheetCb: bb => jg({
            type: cV.IncrementalSnapshot,
            data: {
              source: YV.AdoptedStyleSheet,
              ...bb
            }
          })
        }),
        ub = new Vg({
          mirror: Dg,
          mutationCb: Gb,
          stylesheetManager: ib,
          recordCrossOriginIframes: xb,
          wrappedEmit: jg
        });
      for (const Kb of cb || []) Kb.getMirror && Kb.getMirror({
        nodeMirror: Dg,
        crossOriginIframeMirror: ub.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: ub.crossOriginIframeStyleMirror
      });
      const db = new xg;
      rg = new zg({
        recordCanvas: Xb,
        mutationCb: ab,
        win: window,
        blockClass: Hb,
        blockSelector: pb,
        mirror: Dg,
        sampling: sb.canvas,
        dataURLOptions: mb
      });
      const Pb = new gg({
        mutationCb: Gb,
        scrollCb: qb,
        bypassOptions: {
          blockClass: Hb,
          blockSelector: pb,
          maskTextClass: lb,
          maskTextSelector: Lb,
          inlineStylesheet: Ib,
          maskInputOptions: Jb,
          dataURLOptions: mb,
          maskTextFn: Eb,
          maskInputFn: Cb,
          recordCanvas: Xb,
          inlineImages: Db,
          sampling: sb,
          slimDOMOptions: Sb,
          iframeManager: ub,
          stylesheetManager: ib,
          canvasManager: rg,
          keepIframeSrcFn: Yb,
          processedNodeManager: db
        },
        mirror: Dg
      });
      Kg = function() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!zb) return;
        jg({
          type: cV.Meta,
          data: {
            href: window.location.href,
            width: gV(),
            height: VV()
          }
        }, bb), ib.reset(), Pb.init(), uV.forEach((bb => bb.lock()));
        const wb = function(bb, wb) {
          const {
            mirror: Mb = new Kb,
            blockClass: eb = "rr-block",
            blockSelector: Hb = null,
            maskTextClass: pb = "rr-mask",
            maskTextSelector: Vb = null,
            inlineStylesheet: gb = !0,
            inlineImages: lb = !1,
            recordCanvas: Lb = !1,
            maskAllInputs: Ib = !1,
            maskTextFn: Ob,
            maskInputFn: Ub,
            slimDOM: tb = !1,
            dataURLOptions: Cb,
            preserveWhiteSpace: Eb,
            onSerialize: Fb,
            onIframeLoad: Bb,
            iframeLoadTimeout: sb,
            onStylesheetLoad: mb,
            stylesheetLoadTimeout: hb,
            keepIframeSrcFn: zb = () => !1
          } = wb;
          return lw(bb, {
            doc: bb,
            mirror: Mb,
            blockClass: eb,
            blockSelector: Hb,
            maskTextClass: pb,
            maskTextSelector: Vb,
            skipChild: !1,
            inlineStylesheet: gb,
            maskInputOptions: !0 === Ib ? {
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
            } : !1 === Ib ? {
              password: !0
            } : Ib,
            maskTextFn: Ob,
            maskInputFn: Ub,
            slimDOMOptions: gw(tb),
            dataURLOptions: Cb,
            inlineImages: lb,
            recordCanvas: Lb,
            preserveWhiteSpace: Eb,
            onSerialize: Fb,
            onIframeLoad: Bb,
            iframeLoadTimeout: sb,
            onStylesheetLoad: mb,
            stylesheetLoadTimeout: hb,
            keepIframeSrcFn: zb,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: Dg,
          blockClass: Hb,
          blockSelector: pb,
          maskTextClass: lb,
          maskTextSelector: Lb,
          inlineStylesheet: Ib,
          maskAllInputs: Jb,
          maskTextFn: Eb,
          maskInputFn: Cb,
          slimDOM: Sb,
          dataURLOptions: mb,
          recordCanvas: Xb,
          inlineImages: Db,
          onSerialize: bb => {
            BV(bb, Dg) && ub.addIframe(bb), sV(bb, Dg) && ib.trackLinkElement(bb), hV(bb) && Pb.addShadowRoot(kp.shadowRoot(bb), document)
          },
          onIframeLoad: (bb, wb) => {
            ub.attachIframe(bb, wb), Pb.observeAttachShadow(bb)
          },
          onStylesheetLoad: (bb, wb) => {
            ib.attachLinkElement(bb, wb)
          },
          keepIframeSrcFn: Yb
        });
        if (!wb) return console.warn("Failed to snapshot the document");
        jg({
          type: cV.FullSnapshot,
          data: {
            node: wb,
            initialOffset: pV(window)
          }
        }, bb), uV.forEach((bb => bb.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && ib.adoptStyleSheets(document.adoptedStyleSheets, Dg.getId(document))
      };
      try {
        const bb = [],
          wb = bb => {
            var wb;
            return iV(Mg)({
              mutationCb: Gb,
              mousemoveCb: (bb, wb) => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: wb,
                  positions: bb
                }
              }),
              mouseInteractionCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.MouseInteraction,
                  ...bb
                }
              }),
              scrollCb: qb,
              viewportResizeCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.ViewportResize,
                  ...bb
                }
              }),
              inputCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.Input,
                  ...bb
                }
              }),
              mediaInteractionCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.MediaInteraction,
                  ...bb
                }
              }),
              styleSheetRuleCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.StyleSheetRule,
                  ...bb
                }
              }),
              styleDeclarationCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.StyleDeclaration,
                  ...bb
                }
              }),
              canvasMutationCb: ab,
              fontCb: bb => jg({
                type: cV.IncrementalSnapshot,
                data: {
                  source: YV.Font,
                  ...bb
                }
              }),
              selectionCb: bb => {
                jg({
                  type: cV.IncrementalSnapshot,
                  data: {
                    source: YV.Selection,
                    ...bb
                  }
                })
              },
              customElementCb: bb => {
                jg({
                  type: cV.IncrementalSnapshot,
                  data: {
                    source: YV.CustomElement,
                    ...bb
                  }
                })
              },
              blockClass: Hb,
              ignoreClass: Vb,
              ignoreSelector: gb,
              maskTextClass: lb,
              maskTextSelector: Lb,
              maskInputOptions: Jb,
              inlineStylesheet: Ib,
              sampling: sb,
              recordDOM: zb,
              recordCanvas: Xb,
              inlineImages: Db,
              userTriggeredOnInput: rb,
              collectFonts: Rb,
              doc: bb,
              maskInputFn: Cb,
              maskTextFn: Eb,
              keepIframeSrcFn: Yb,
              blockSelector: pb,
              slimDOMOptions: Sb,
              dataURLOptions: mb,
              mirror: Dg,
              iframeManager: ub,
              stylesheetManager: ib,
              shadowDomManager: Pb,
              processedNodeManager: db,
              canvasManager: rg,
              ignoreCSSAttributes: Zb,
              plugins: (null == (wb = null == cb ? void 0 : cb.filter((bb => bb.observer))) ? void 0 : wb.map((bb => ({
                observer: bb.observer,
                options: bb.options,
                callback: wb => jg({
                  type: cV.Plugin,
                  data: {
                    plugin: bb.name,
                    payload: wb
                  }
                })
              })))) || []
            }, Fb)
          };
        ub.addLoadListener((Mb => {
          try {
            bb.push(wb(Mb.contentDocument))
          } catch (eb) {
            console.warn(eb)
          }
        }));
        const Mb = () => {
          Kg(), bb.push(wb(document)), Rg = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? Mb() : (bb.push(bV("DOMContentLoaded", (() => {
          jg({
            type: cV.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === jb && Mb()
        }))), bb.push(bV("load", (() => {
          jg({
            type: cV.Load,
            data: {}
          }), "load" === jb && Mb()
        }), window))), () => {
          bb.forEach((bb => {
            try {
              bb()
            } catch (wb) {
              String(wb).toLowerCase().includes("cross-origin") || console.warn(wb)
            }
          })), db.destroy(), Rg = !1, aV = void 0
        }
      } catch (yb) {
        console.warn(yb)
      }
    }

    function Yg() {
      let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in wb.documentElement.style && !0 !== bb.__forceSmoothScrollPolyfill__) return;
      const Mb = bb.HTMLElement || bb.Element,
        eb = {
          scroll: bb.scroll || bb.scrollTo,
          scrollBy: bb.scrollBy,
          elementScroll: Mb.prototype.scroll || gb,
          scrollIntoView: Mb.prototype.scrollIntoView
        },
        Hb = bb.performance && bb.performance.now ? bb.performance.now.bind(bb.performance) : Date.now;
      const pb = (Vb = bb.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(Vb) ? 1 : 0);
      var Vb;

      function gb(bb, wb) {
        this.scrollLeft = bb, this.scrollTop = wb
      }

      function lb(bb) {
        if (null === bb || "object" !== typeof bb || void 0 === bb.behavior || "auto" === bb.behavior || "instant" === bb.behavior) return !0;
        if ("object" === typeof bb && "smooth" === bb.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + bb.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function Lb(bb, wb) {
        return "Y" === wb ? bb.clientHeight + pb < bb.scrollHeight : "X" === wb ? bb.clientWidth + pb < bb.scrollWidth : void 0
      }

      function Ib(wb, Mb) {
        const eb = bb.getComputedStyle(wb, null)["overflow" + Mb];
        return "auto" === eb || "scroll" === eb
      }

      function Ob(bb) {
        const wb = Lb(bb, "Y") && Ib(bb, "Y"),
          Mb = Lb(bb, "X") && Ib(bb, "X");
        return wb || Mb
      }

      function Ub(wb) {
        let Mb, eb, pb, Vb = (Hb() - wb.startTime) / 468;
        var gb;
        Vb = Vb > 1 ? 1 : Vb, gb = Vb, Mb = .5 * (1 - Math.cos(Math.PI * gb)), eb = wb.startX + (wb.x - wb.startX) * Mb, pb = wb.startY + (wb.y - wb.startY) * Mb, wb.method.call(wb.scrollable, eb, pb), eb === wb.x && pb === wb.y || bb.requestAnimationFrame(Ub.bind(bb, wb))
      }

      function tb(Mb, pb, Vb) {
        let lb, Lb, Ib, Ob;
        const tb = Hb();
        Mb === wb.body ? (lb = bb, Lb = bb.scrollX || bb.pageXOffset, Ib = bb.scrollY || bb.pageYOffset, Ob = eb.scroll) : (lb = Mb, Lb = Mb.scrollLeft, Ib = Mb.scrollTop, Ob = gb), Ub({
          scrollable: lb,
          method: Ob,
          startTime: tb,
          startX: Lb,
          startY: Ib,
          x: pb,
          y: Vb
        })
      }
      bb.scroll = bb.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== lb(arguments[0]) ? tb.call(bb, wb.body, void 0 !== arguments[0].left ? ~~arguments[0].left : bb.scrollX || bb.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : bb.scrollY || bb.pageYOffset) : eb.scroll.call(bb, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : bb.scrollX || bb.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : bb.scrollY || bb.pageYOffset))
      }, bb.scrollBy = function() {
        void 0 !== arguments[0] && (lb(arguments[0]) ? eb.scrollBy.call(bb, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : tb.call(bb, wb.body, ~~arguments[0].left + (bb.scrollX || bb.pageXOffset), ~~arguments[0].top + (bb.scrollY || bb.pageYOffset)))
      }, Mb.prototype.scroll = Mb.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === lb(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void eb.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const bb = arguments[0].left,
          wb = arguments[0].top;
        tb.call(this, this, "undefined" === typeof bb ? this.scrollLeft : ~~bb, "undefined" === typeof wb ? this.scrollTop : ~~wb)
      }, Mb.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== lb(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : eb.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, Mb.prototype.scrollIntoView = function() {
        if (!0 === lb(arguments[0])) return void eb.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const Mb = function(bb) {
            for (; bb !== wb.body && !1 === Ob(bb);) bb = bb.parentNode || bb.host;
            return bb
          }(this),
          Hb = Mb.getBoundingClientRect(),
          pb = this.getBoundingClientRect();
        Mb !== wb.body ? (tb.call(this, Mb, Mb.scrollLeft + pb.left - Hb.left, Mb.scrollTop + pb.top - Hb.top), "fixed" !== bb.getComputedStyle(Mb).position && bb.scrollBy({
          left: Hb.left,
          top: Hb.top,
          behavior: "smooth"
        })) : bb.scrollBy({
          left: pb.left,
          top: pb.top,
          behavior: "smooth"
        })
      }
    }
    cg.addCustomEvent = (bb, wb) => {
      if (!Rg) throw new Error("please add custom event after start recording");
      jg({
        type: cV.Custom,
        data: {
          tag: bb,
          payload: wb
        }
      })
    }, cg.freezePage = () => {
      uV.forEach((bb => bb.freeze()))
    }, cg.takeFullSnapshot = bb => {
      if (!Rg) throw new Error("please take full snapshot after start recording");
      Kg(bb)
    }, cg.mirror = Dg;
    class Zg {
      constructor() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          wb = arguments.length > 1 ? arguments[1] : void 0;
        pb(this, "timeOffset", 0), pb(this, "speed"), pb(this, "actions"), pb(this, "raf", null), pb(this, "lastTimestamp"), this.actions = bb, this.speed = wb.speed
      }
      addAction(bb) {
        const wb = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= bb.delay) this.actions.push(bb);
        else {
          const wb = this.findActionIndex(bb);
          this.actions.splice(wb, 0, bb)
        }
        wb && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const bb = performance.now();
        for (this.timeOffset += (bb - this.lastTimestamp) * this.speed, this.lastTimestamp = bb; this.actions.length;) {
          const bb = this.actions[0];
          if (!(this.timeOffset >= bb.delay)) break;
          this.actions.shift(), bb.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(bb) {
        this.speed = bb
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(bb) {
        let wb = 0,
          Mb = this.actions.length - 1;
        for (; wb <= Mb;) {
          const eb = Math.floor((wb + Mb) / 2);
          if (this.actions[eb].delay < bb.delay) wb = eb + 1;
          else {
            if (!(this.actions[eb].delay > bb.delay)) return eb + 1;
            Mb = eb - 1
          }
        }
        return wb
      }
    }

    function fg(bb, wb) {
      if (bb.type === cV.IncrementalSnapshot && bb.data.source === YV.MouseMove && bb.data.positions && bb.data.positions.length) {
        const Mb = bb.data.positions[0].timeOffset,
          eb = bb.timestamp + Mb;
        return bb.delay = eb - wb, eb - wb
      }
      return bb.delay = bb.timestamp - wb, bb.delay
    }

    function Ag(bb, wb) {
      var Mb = "function" == typeof Symbol && bb[Symbol.iterator];
      if (!Mb) return bb;
      var eb, Hb, pb = Mb.call(bb),
        Vb = [];
      try {
        for (;
          (void 0 === wb || wb-- > 0) && !(eb = pb.next()).done;) Vb.push(eb.value)
      } catch (gb) {
        Hb = {
          error: gb
        }
      } finally {
        try {
          eb && !eb.done && (Mb = pb.return) && Mb.call(pb)
        } finally {
          if (Hb) throw Hb.error
        }
      }
      return Vb
    }
    var Wg, Jg;
    (Jg = Wg || (Wg = {}))[Jg.NotStarted = 0] = "NotStarted", Jg[Jg.Running = 1] = "Running", Jg[Jg.Stopped = 2] = "Stopped";
    var Sg = {
      type: "xstate.init"
    };

    function Ng(bb) {
      return void 0 === bb ? [] : [].concat(bb)
    }

    function vg(bb) {
      return {
        type: "xstate.assign",
        assignment: bb
      }
    }

    function Qg(bb, wb) {
      return "string" == typeof(bb = "string" == typeof bb && wb && wb[bb] ? wb[bb] : bb) ? {
        type: bb
      } : "function" == typeof bb ? {
        type: bb.name,
        exec: bb
      } : bb
    }

    function Gg(bb) {
      return function(wb) {
        return bb === wb
      }
    }

    function qg(bb) {
      return "string" == typeof bb ? {
        type: bb
      } : bb
    }

    function ag(bb, wb) {
      return {
        value: bb,
        context: wb,
        actions: [],
        changed: !1,
        matches: Gg(bb)
      }
    }

    function ig(bb, wb, Mb) {
      var eb = wb,
        Hb = !1;
      return [bb.filter((function(bb) {
        if ("xstate.assign" === bb.type) {
          Hb = !0;
          var wb = Object.assign({}, eb);
          return "function" == typeof bb.assignment ? wb = bb.assignment(eb, Mb) : Object.keys(bb.assignment).forEach((function(Hb) {
            wb[Hb] = "function" == typeof bb.assignment[Hb] ? bb.assignment[Hb](eb, Mb) : bb.assignment[Hb]
          })), eb = wb, !1
        }
        return !0
      })), eb, Hb]
    }

    function ug(bb, wb) {
      void 0 === wb && (wb = {});
      var Mb = Ag(ig(Ng(bb.states[bb.initial].entry).map((function(bb) {
          return Qg(bb, wb.actions)
        })), bb.context, Sg), 2),
        eb = Mb[0],
        Hb = Mb[1],
        pb = {
          config: bb,
          _options: wb,
          initialState: {
            value: bb.initial,
            actions: eb,
            context: Hb,
            matches: Gg(bb.initial)
          },
          transition: function(wb, Mb) {
            var eb, Hb, Vb = "string" == typeof wb ? {
                value: wb,
                context: bb.context
              } : wb,
              gb = Vb.value,
              lb = Vb.context,
              Lb = qg(Mb),
              Ib = bb.states[gb];
            if (Ib.on) {
              var Ob = Ng(Ib.on[Lb.type]);
              try {
                for (var Ub = function(bb) {
                    var wb = "function" == typeof Symbol && Symbol.iterator,
                      Mb = wb && bb[wb],
                      eb = 0;
                    if (Mb) return Mb.call(bb);
                    if (bb && "number" == typeof bb.length) return {
                      next: function() {
                        return bb && eb >= bb.length && (bb = void 0), {
                          value: bb && bb[eb++],
                          done: !bb
                        }
                      }
                    };
                    throw new TypeError(wb ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(Ob), tb = Ub.next(); !tb.done; tb = Ub.next()) {
                  var Cb = tb.value;
                  if (void 0 === Cb) return ag(gb, lb);
                  var Eb = "string" == typeof Cb ? {
                      target: Cb
                    } : Cb,
                    Fb = Eb.target,
                    Bb = Eb.actions,
                    sb = void 0 === Bb ? [] : Bb,
                    mb = Eb.cond,
                    hb = void 0 === mb ? function() {
                      return !0
                    } : mb,
                    zb = void 0 === Fb,
                    Xb = null != Fb ? Fb : gb,
                    xb = bb.states[Xb];
                  if (hb(lb, Lb)) {
                    var jb = Ag(ig((zb ? Ng(sb) : [].concat(Ib.exit, sb, xb.entry).filter((function(bb) {
                        return bb
                      }))).map((function(bb) {
                        return Qg(bb, pb._options.actions)
                      })), lb, Lb), 3),
                      Kb = jb[0],
                      rb = jb[1],
                      Rb = jb[2],
                      Db = null != Fb ? Fb : gb;
                    return {
                      value: Db,
                      context: rb,
                      actions: Kb,
                      changed: Fb !== gb || Kb.length > 0 || Rb,
                      matches: Gg(Db)
                    }
                  }
                }
              } catch (Jg) {
                eb = {
                  error: Jg
                }
              } finally {
                try {
                  tb && !tb.done && (Hb = Ub.return) && Hb.call(Ub)
                } finally {
                  if (eb) throw eb.error
                }
              }
            }
            return ag(gb, lb)
          }
        };
      return pb
    }
    var dg = function(bb, wb) {
      return bb.actions.forEach((function(Mb) {
        var eb = Mb.exec;
        return eb && eb(bb.context, wb)
      }))
    };

    function Pg(bb) {
      var wb = bb.initialState,
        Mb = Wg.NotStarted,
        eb = new Set,
        Hb = {
          _machine: bb,
          send: function(Hb) {
            Mb === Wg.Running && (wb = bb.transition(wb, Hb), dg(wb, qg(Hb)), eb.forEach((function(bb) {
              return bb(wb)
            })))
          },
          subscribe: function(bb) {
            return eb.add(bb), bb(wb), {
              unsubscribe: function() {
                return eb.delete(bb)
              }
            }
          },
          start: function(eb) {
            if (eb) {
              var pb = "object" == typeof eb ? eb : {
                context: bb.config.context,
                value: eb
              };
              wb = {
                value: pb.value,
                actions: [],
                context: pb.context,
                matches: Gg(pb.value)
              }
            }
            return Mb = Wg.Running, dg(wb, Sg), Hb
          },
          stop: function() {
            return Mb = Wg.Stopped, eb.clear(), Hb
          },
          get state() {
            return wb
          },
          get status() {
            return Mb
          }
        };
      return Hb
    }

    function ng(bb, wb) {
      let {
        getCastFn: Mb,
        applyEventsSynchronously: eb,
        emitter: Hb
      } = wb;
      return Pg(ug({
        id: "player",
        context: bb,
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
          castEvent: vg({
            lastPlayedEvent: (bb, wb) => "CAST_EVENT" === wb.type ? wb.payload.event : bb.lastPlayedEvent
          }),
          recordTimeOffset: vg(((bb, wb) => {
            let Mb = bb.timeOffset;
            return "payload" in wb && "timeOffset" in wb.payload && (Mb = wb.payload.timeOffset), {
              ...bb,
              timeOffset: Mb,
              baselineTime: bb.events[0].timestamp + Mb
            }
          })),
          play(bb) {
            var wb;
            const {
              timer: pb,
              events: Vb,
              baselineTime: gb,
              lastPlayedEvent: lb
            } = bb;
            pb.clear();
            for (const Mb of Vb) fg(Mb, gb);
            const Lb = function(bb, wb) {
              for (let Mb = bb.length - 1; Mb >= 0; Mb--) {
                const eb = bb[Mb];
                if (eb.type === cV.Meta && eb.timestamp <= wb) return bb.slice(Mb)
              }
              return bb
            }(Vb, gb);
            let Ib = null == lb ? void 0 : lb.timestamp;
            (null == lb ? void 0 : lb.type) === cV.IncrementalSnapshot && lb.data.source === YV.MouseMove && (Ib = lb.timestamp + (null == (wb = lb.data.positions[0]) ? void 0 : wb.timeOffset)), gb < (Ib || 0) && Hb.emit(JV.PlayBack);
            const Ob = new Array;
            for (const eb of Lb)
              if (!(Ib && Ib < gb && (eb.timestamp <= Ib || eb === lb)))
                if (eb.timestamp < gb) Ob.push(eb);
                else {
                  const bb = Mb(eb, !1);
                  pb.addAction({
                    doAction: () => {
                      bb()
                    },
                    delay: eb.delay
                  })
                } eb(Ob), Hb.emit(JV.Flush), pb.start()
          },
          pause(bb) {
            bb.timer.clear()
          },
          resetLastPlayedEvent: vg((bb => ({
            ...bb,
            lastPlayedEvent: null
          }))),
          startLive: vg({
            baselineTime: (bb, wb) => (bb.timer.start(), "TO_LIVE" === wb.type && wb.payload.baselineTime ? wb.payload.baselineTime : Date.now())
          }),
          addEvent: vg(((bb, wb) => {
            const {
              baselineTime: eb,
              timer: Hb,
              events: pb
            } = bb;
            if ("ADD_EVENT" === wb.type) {
              const {
                event: bb
              } = wb.payload;
              fg(bb, eb);
              let Vb = pb.length - 1;
              if (!pb[Vb] || pb[Vb].timestamp <= bb.timestamp) pb.push(bb);
              else {
                let wb = -1,
                  Mb = 0;
                for (; Mb <= Vb;) {
                  const wb = Math.floor((Mb + Vb) / 2);
                  pb[wb].timestamp <= bb.timestamp ? Mb = wb + 1 : Vb = wb - 1
                } - 1 === wb && (wb = Mb), pb.splice(wb, 0, bb)
              }
              const gb = bb.timestamp < eb,
                lb = Mb(bb, gb);
              gb ? lb() : Hb.isActive() && Hb.addAction({
                doAction: () => {
                  lb()
                },
                delay: bb.delay
              })
            }
            return {
              ...bb,
              events: pb
            }
          }))
        }
      }))
    }
    const yg = new Map;

    function og(bb, wb) {
      let Mb = yg.get(bb);
      return Mb || (Mb = new Map, yg.set(bb, Mb)), Mb.has(wb) || Mb.set(wb, []), Mb.get(wb)
    }

    function Tg(bb, wb, Mb) {
      return async eb => {
        if (eb && "object" === typeof eb && "rr_type" in eb) {
          if (Mb && (Mb.isUnchanged = !1), "ImageBitmap" === eb.rr_type && "args" in eb) {
            const Hb = await Tg(bb, wb, Mb)(eb.args);
            return await createImageBitmap.apply(null, Hb)
          }
          if ("index" in eb) {
            if (Mb || null === wb) return eb;
            const {
              rr_type: bb,
              index: Hb
            } = eb;
            return og(wb, bb)[Hb]
          }
          if ("args" in eb) {
            const {
              rr_type: Hb,
              args: pb
            } = eb;
            return new(0, window[Hb])(...await Promise.all(pb.map(Tg(bb, wb, Mb))))
          }
          if ("base64" in eb) return function(bb) {
            var wb, Mb, eb, Hb, pb, Vb = .75 * bb.length,
              gb = bb.length,
              lb = 0;
            "=" === bb[bb.length - 1] && (Vb--, "=" === bb[bb.length - 2] && Vb--);
            var Lb = new ArrayBuffer(Vb),
              Ib = new Uint8Array(Lb);
            for (wb = 0; wb < gb; wb += 4) Mb = Lg[bb.charCodeAt(wb)], eb = Lg[bb.charCodeAt(wb + 1)], Hb = Lg[bb.charCodeAt(wb + 2)], pb = Lg[bb.charCodeAt(wb + 3)], Ib[lb++] = Mb << 2 | eb >> 4, Ib[lb++] = (15 & eb) << 4 | Hb >> 2, Ib[lb++] = (3 & Hb) << 6 | 63 & pb;
            return Lb
          }(eb.base64);
          if ("src" in eb) {
            const wb = bb.get(eb.src);
            if (wb) return wb;
            {
              const wb = new Image;
              return wb.src = eb.src, bb.set(eb.src, wb), wb
            }
          }
          if ("data" in eb && "Blob" === eb.rr_type) {
            const Hb = await Promise.all(eb.data.map(Tg(bb, wb, Mb)));
            return new Blob(Hb, {
              type: eb.type
            })
          }
        } else if (Array.isArray(eb)) {
          return await Promise.all(eb.map(Tg(bb, wb, Mb)))
        }
        return eb
      }
    }
    const kg = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function bl(bb) {
      let {
        mutation: wb,
        target: Mb,
        type: eb,
        imageMap: Hb,
        errorHandler: pb
      } = bb;
      try {
        const bb = function(bb, wb) {
          try {
            return wb === AV.WebGL ? bb.getContext("webgl") || bb.getContext("experimental-webgl") : bb.getContext("webgl2")
          } catch (Mb) {
            return null
          }
        }(Mb, eb);
        if (!bb) return;
        if (wb.setter) return void(bb[wb.property] = wb.args[0]);
        const pb = bb[wb.property],
          Vb = await Promise.all(wb.args.map(Tg(Hb, bb)));
        ! function(bb, wb) {
          if (!(null == wb ? void 0 : wb.constructor)) return;
          const {
            name: Mb
          } = wb.constructor;
          if (!kg.includes(Mb)) return;
          const eb = og(bb, Mb);
          eb.includes(wb) || eb.push(wb)
        }(bb, pb.apply(bb, Vb))
      } catch (Vb) {
        pb(wb, Vb)
      }
    }
    async function wl(bb) {
      let {
        event: wb,
        mutation: Mb,
        target: eb,
        imageMap: Hb,
        canvasEventMap: pb,
        errorHandler: Vb
      } = bb;
      try {
        const bb = pb.get(wb) || Mb,
          gb = "commands" in bb ? bb.commands : [bb];
        if ([AV.WebGL, AV.WebGL2].includes(Mb.type)) {
          for (let bb = 0; bb < gb.length; bb++) {
            const wb = gb[bb];
            await bl({
              mutation: wb,
              type: Mb.type,
              target: eb,
              imageMap: Hb,
              errorHandler: Vb
            })
          }
          return
        }
        await async function(bb) {
          let {
            event: wb,
            mutations: Mb,
            target: eb,
            imageMap: Hb,
            errorHandler: pb
          } = bb;
          const Vb = eb.getContext("2d");
          if (!Vb) return void pb(Mb[0], new Error("Canvas context is null"));
          const gb = Mb.map((async bb => Promise.all(bb.args.map(Tg(Hb, Vb)))));
          (await Promise.all(gb)).forEach(((bb, eb) => {
            const gb = Mb[eb];
            try {
              if (gb.setter) return void(Vb[gb.property] = gb.args[0]);
              const Mb = Vb[gb.property];
              "drawImage" === gb.property && "string" === typeof gb.args[0] ? (Hb.get(wb), Mb.apply(Vb, gb.args)) : Mb.apply(Vb, bb)
            } catch (lb) {
              pb(gb, lb)
            }
          }))
        }({
          event: wb,
          mutations: gb,
          target: eb,
          imageMap: Hb,
          errorHandler: Vb
        })
      } catch (gb) {
        Vb(Mb, gb)
      }
    }
    class Ml {
      constructor(bb) {
        pb(this, "mediaMap", new Map), pb(this, "warn"), pb(this, "service"), pb(this, "speedService"), pb(this, "emitter"), pb(this, "getCurrentTime"), pb(this, "metadataCallbackMap", new Map), this.warn = bb.warn, this.service = bb.service, this.speedService = bb.speedService, this.emitter = bb.emitter, this.getCurrentTime = bb.getCurrentTime, this.emitter.on(JV.Start, this.start.bind(this)), this.emitter.on(JV.SkipStart, this.start.bind(this)), this.emitter.on(JV.Pause, this.pause.bind(this)), this.emitter.on(JV.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((wb, Mb) => {
          this.syncTargetWithState(Mb), bb.pause && Mb.pause()
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
      seekTo(bb) {
        let {
          time: wb,
          target: Mb,
          mediaState: eb
        } = bb;
        if (eb.isPlaying) {
          const bb = (wb - eb.lastInteractionTimeOffset) / 1e3 * eb.playbackRate,
            Hb = "duration" in Mb && Mb.duration;
          if (Number.isNaN(Hb)) return void this.waitForMetadata(Mb);
          let pb = eb.currentTimeAtLastInteraction + bb;
          Mb.loop && !1 !== Hb && (pb %= Hb), Mb.currentTime = pb
        } else Mb.pause(), Mb.currentTime = eb.currentTimeAtLastInteraction
      }
      waitForMetadata(bb) {
        if (this.metadataCallbackMap.has(bb)) return;
        if (!("addEventListener" in bb)) return;
        const wb = () => {
          this.metadataCallbackMap.delete(bb);
          const wb = this.mediaMap.get(bb);
          wb && this.seekTo({
            time: this.getCurrentTime(),
            target: bb,
            mediaState: wb
          })
        };
        this.metadataCallbackMap.set(bb, wb), bb.addEventListener("loadedmetadata", wb, {
          once: !0
        })
      }
      getMediaStateFromMutation(bb) {
        let {
          target: wb,
          timeOffset: Mb,
          mutation: eb
        } = bb;
        const Hb = this.mediaMap.get(wb),
          {
            type: pb,
            playbackRate: Vb,
            currentTime: gb,
            muted: lb,
            volume: Lb,
            loop: Ib
          } = eb;
        return {
          isPlaying: pb === WV.Play || pb !== WV.Pause && ((null == Hb ? void 0 : Hb.isPlaying) || null !== wb.getAttribute("autoplay")),
          currentTimeAtLastInteraction: gb ?? (null == Hb ? void 0 : Hb.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: Mb,
          playbackRate: Vb ?? (null == Hb ? void 0 : Hb.playbackRate) ?? 1,
          volume: Lb ?? (null == Hb ? void 0 : Hb.volume) ?? 1,
          muted: lb ?? (null == Hb ? void 0 : Hb.muted) ?? null === wb.getAttribute("muted"),
          loop: Ib ?? (null == Hb ? void 0 : Hb.loop) ?? null === wb.getAttribute("loop")
        }
      }
      syncTargetWithState(bb) {
        const wb = this.mediaMap.get(bb);
        if (!wb) return;
        const {
          muted: Mb,
          loop: eb,
          volume: Hb,
          isPlaying: pb
        } = wb, Vb = this.service.state.matches("paused"), gb = wb.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: bb,
            mediaState: wb
          }), bb.volume !== Hb && (bb.volume = Hb), bb.muted = Mb, bb.loop = eb, bb.playbackRate !== gb && (bb.playbackRate = gb), pb && !Vb ? bb.play() : bb.pause()
        } catch (lb) {
          this.warn(`Failed to replay media interactions: ${lb.message||lb}`)
        }
      }
      addMediaElements(bb, wb, Mb) {
        if (!["AUDIO", "VIDEO"].includes(bb.nodeName)) return;
        const eb = bb,
          Hb = Mb.getMeta(eb);
        if (!Hb || !("attributes" in Hb)) return;
        const pb = this.service.state.matches("paused"),
          Vb = Hb.attributes;
        let gb = !1;
        gb = Vb.rr_mediaState ? "played" === Vb.rr_mediaState : null !== eb.getAttribute("autoplay"), gb && pb && eb.pause();
        let lb = 1;
        "number" === typeof Vb.rr_mediaPlaybackRate && (lb = Vb.rr_mediaPlaybackRate);
        let Lb = !1;
        Lb = "boolean" === typeof Vb.rr_mediaMuted ? Vb.rr_mediaMuted : null !== eb.getAttribute("muted");
        let Ib = !1;
        Ib = "boolean" === typeof Vb.rr_mediaLoop ? Vb.rr_mediaLoop : null !== eb.getAttribute("loop");
        let Ob = 1;
        "number" === typeof Vb.rr_mediaVolume && (Ob = Vb.rr_mediaVolume);
        let Ub = 0;
        "number" === typeof Vb.rr_mediaCurrentTime && (Ub = Vb.rr_mediaCurrentTime), this.mediaMap.set(eb, {
          isPlaying: gb,
          currentTimeAtLastInteraction: Ub,
          lastInteractionTimeOffset: wb,
          playbackRate: lb,
          volume: Ob,
          muted: Lb,
          loop: Ib
        }), this.syncTargetWithState(eb)
      }
      mediaMutation(bb) {
        let {
          target: wb,
          timeOffset: Mb,
          mutation: eb
        } = bb;
        this.mediaMap.set(wb, this.getMediaStateFromMutation({
          target: wb,
          timeOffset: Mb,
          mutation: eb
        })), this.syncTargetWithState(wb)
      }
      isSupportedMediaElement(bb) {
        return ["AUDIO", "VIDEO"].includes(bb.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function el(bb, wb) {
      if ("DIALOG" !== bb.nodeName || bb instanceof wp) return;
      const Mb = bb,
        eb = Mb.open,
        Hb = eb && Mb.matches("dialog:modal"),
        pb = Mb.getAttribute("rr_open_mode"),
        Vb = "string" === typeof(null == wb ? void 0 : wb.attributes.open) || "string" === typeof Mb.getAttribute("open"),
        gb = "modal" === pb;
      eb && !(Hb && "non-modal" === pb || !Hb && gb) || (Mb.isConnected ? (eb && Mb.close(), Vb && (gb ? Mb.showModal() : Mb.show())) : console.warn("dialog is not attached to the dom", Mb))
    }

    function Hl(bb, wb) {
      if ("DIALOG" !== bb.nodeName || bb instanceof wp) return;
      const Mb = bb;
      Mb.isConnected ? null === wb.attributes.open && (Mb.removeAttribute("open"), Mb.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", Mb)
    }
    const pl = function(bb) {
        return {
          all: bb = bb || new Map,
          on: function(wb, Mb) {
            var eb = bb.get(wb);
            eb ? eb.push(Mb) : bb.set(wb, [Mb])
          },
          off: function(wb, Mb) {
            var eb = bb.get(wb);
            eb && (Mb ? eb.splice(eb.indexOf(Mb) >>> 0, 1) : bb.set(wb, []))
          },
          emit: function(wb, Mb) {
            var eb = bb.get(wb);
            eb && eb.slice().map((function(bb) {
              bb(Mb)
            })), (eb = bb.get("*")) && eb.slice().map((function(bb) {
              bb(wb, Mb)
            }))
          }
        }
      },
      Vl = "[replayer]",
      gl = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function ll(bb) {
      return bb.type == cV.IncrementalSnapshot && (bb.data.source == YV.TouchMove || bb.data.source == YV.MouseInteraction && bb.data.type == ZV.TouchStart)
    }
    class Ll {
      constructor(bb, wb) {
        var Mb = this;
        if (pb(this, "wrapper"), pb(this, "iframe"), pb(this, "UNSAFE_replayCanvas", !1), pb(this, "service"), pb(this, "speedService"), pb(this, "config"), pb(this, "usingVirtualDom", !1), pb(this, "virtualDom", new xp), pb(this, "mouse"), pb(this, "mouseTail", null), pb(this, "tailPositions", []), pb(this, "emitter", pl()), pb(this, "nextUserInteractionEvent"), pb(this, "legacy_missingNodeRetryMap", {}), pb(this, "cache", TM()), pb(this, "imageMap", new Map), pb(this, "canvasEventMap", new Map), pb(this, "mirror", rb()), pb(this, "styleMirror", new jV), pb(this, "mediaManager"), pb(this, "firstFullSnapshot", null), pb(this, "newDocumentQueue", []), pb(this, "mousePos", null), pb(this, "touchActive", null), pb(this, "lastMouseDownEvent", null), pb(this, "lastHoveredRootNode"), pb(this, "lastSelectionData", null), pb(this, "constructedStyleMutations", []), pb(this, "adoptedStyleSheets", []), pb(this, "handleResize", (bb => {
            this.iframe.style.display = "inherit";
            for (const wb of [this.mouseTail, this.iframe]) wb && (wb.setAttribute("width", String(bb.width)), wb.setAttribute("height", String(bb.height)))
          })), pb(this, "applyEventsSynchronously", (bb => {
            for (const wb of bb) {
              switch (wb.type) {
                case cV.DomContentLoaded:
                case cV.Load:
                  continue;
                case cV.FullSnapshot:
                case cV.Meta:
                case cV.Plugin:
                case cV.IncrementalSnapshot:
              }
              this.getCastFn(wb, !0)()
            }
          })), pb(this, "getCastFn", (function(bb) {
            let wb, eb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (bb.type) {
              case cV.DomContentLoaded:
              case cV.Load:
                break;
              case cV.Custom:
                wb = () => {
                  Mb.emitter.emit(JV.CustomEvent, bb)
                };
                break;
              case cV.Meta:
                wb = () => Mb.emitter.emit(JV.Resize, {
                  width: bb.data.width,
                  height: bb.data.height
                });
                break;
              case cV.FullSnapshot:
                wb = () => {
                  var wb;
                  if (Mb.firstFullSnapshot) {
                    if (Mb.firstFullSnapshot === bb) return void(Mb.firstFullSnapshot = !0)
                  } else Mb.firstFullSnapshot = !0;
                  Mb.mediaManager.reset(), Mb.styleMirror.reset(), Mb.rebuildFullSnapshot(bb, eb), null == (wb = Mb.iframe.contentWindow) || wb.scrollTo(bb.data.initialOffset)
                };
                break;
              case cV.IncrementalSnapshot:
                wb = () => {
                  if (Mb.applyIncremental(bb, eb), !eb && (bb === Mb.nextUserInteractionEvent && (Mb.nextUserInteractionEvent = null, Mb.backToNormal()), Mb.config.skipInactive && !Mb.nextUserInteractionEvent)) {
                    for (const wb of Mb.service.state.context.events)
                      if (!(wb.timestamp <= bb.timestamp) && Mb.isUserInteraction(wb)) {
                        wb.delay - bb.delay > Mb.config.inactivePeriodThreshold * Mb.speedService.state.context.timer.speed && (Mb.nextUserInteractionEvent = wb);
                        break
                      } if (Mb.nextUserInteractionEvent) {
                      const wb = Mb.nextUserInteractionEvent.delay - bb.delay,
                        eb = {
                          speed: Math.min(Math.round(wb / 5e3), Mb.config.maxSpeed)
                        };
                      Mb.speedService.send({
                        type: "FAST_FORWARD",
                        payload: eb
                      }), Mb.emitter.emit(JV.SkipStart, eb)
                    }
                  }
                }
            }
            return () => {
              wb && wb();
              for (const wb of Mb.config.plugins || []) wb.handler && wb.handler(bb, eb, {
                replayer: Mb
              });
              Mb.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: bb
                }
              });
              const Hb = Mb.service.state.context.events.length - 1;
              if (!Mb.config.liveMode && bb === Mb.service.state.context.events[Hb]) {
                const wb = () => {
                  Hb < Mb.service.state.context.events.length - 1 || (Mb.backToNormal(), Mb.service.send("END"), Mb.emitter.emit(JV.Finish))
                };
                let eb = 50;
                bb.type === cV.IncrementalSnapshot && bb.data.source === YV.MouseMove && bb.data.positions.length && (eb += Math.max(0, -bb.data.positions[0].timeOffset)), setTimeout(wb, eb)
              }
              Mb.emitter.emit(JV.EventCast, bb)
            }
          })), !(null == wb ? void 0 : wb.liveMode) && bb.length < 2) throw new Error("Replayer need at least 2 events.");
        const eb = {
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
          mouseTail: gl,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, eb, wb), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(JV.Resize, this.handleResize), this.setupDom();
        for (const pb of this.config.plugins || []) pb.getMirror && pb.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(JV.Flush, (() => {
          if (this.usingVirtualDom) {
            const Mb = {
              mirror: this.mirror,
              applyCanvas: (bb, wb, Mb) => {
                wl({
                  event: bb,
                  mutation: wb,
                  target: Mb,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (bb, wb) => {
                bb.source === YV.StyleSheetRule ? this.applyStyleSheetRule(bb, wb) : bb.source === YV.StyleDeclaration && this.applyStyleDeclaration(bb, wb)
              },
              afterAppend: (bb, wb) => {
                for (const Mb of this.config.plugins || []) Mb.onBuild && Mb.onBuild(bb, {
                  id: wb,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              sp(this.iframe.contentDocument, this.virtualDom, Mb, this.virtualDom.mirror)
            } catch (bb) {
              this.warn(bb)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const bb in this.legacy_missingNodeRetryMap) try {
                const wb = this.legacy_missingNodeRetryMap[bb],
                  eb = hp(wb.node, this.mirror, this.virtualDom.mirror);
                sp(eb, wb.node, Mb, this.virtualDom.mirror), wb.node = eb
              } catch (wb) {
                this.warn(wb)
              }
            this.constructedStyleMutations.forEach((bb => {
              this.applyStyleSheetMutation(bb)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((bb => {
              this.applyAdoptedStyleSheet(bb)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [bb, wb] = this.lastMouseDownEvent;
            bb.dispatchEvent(wb)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(JV.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const Hb = new Zg([], {
          speed: this.config.speed
        });
        this.service = ng({
          events: bb.map((bb => wb && wb.unpackFn ? wb.unpackFn(bb) : bb)).sort(((bb, wb) => bb.timestamp - wb.timestamp)),
          timer: Hb,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((bb => {
          this.emitter.emit(JV.StateChange, {
            player: bb
          })
        })), this.speedService = Pg(ug({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: Hb
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
            setSpeed: (bb, wb) => {
              "payload" in wb && bb.timer.setSpeed(wb.payload.speed)
            },
            recordSpeed: vg({
              normalSpeed: bb => bb.timer.speed
            }),
            restoreSpeed: bb => {
              bb.timer.setSpeed(bb.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((bb => {
          this.emitter.emit(JV.StateChange, {
            speed: bb
          })
        })), this.mediaManager = new Ml({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const Vb = this.service.state.context.events.find((bb => bb.type === cV.Meta)),
          gb = this.service.state.context.events.find((bb => bb.type === cV.FullSnapshot));
        if (Vb) {
          const {
            width: bb,
            height: wb
          } = Vb.data;
          setTimeout((() => {
            this.emitter.emit(JV.Resize, {
              width: bb,
              height: wb
            })
          }), 0)
        }
        gb && setTimeout((() => {
          var bb;
          this.firstFullSnapshot || (this.firstFullSnapshot = gb, this.rebuildFullSnapshot(gb), null == (bb = this.iframe.contentWindow) || bb.scrollTo(gb.data.initialOffset))
        }), 1), this.service.state.context.events.find(ll) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(bb, wb) {
        return this.emitter.on(bb, wb), this
      }
      off(bb, wb) {
        return this.emitter.off(bb, wb), this
      }
      setConfig(bb) {
        Object.keys(bb).forEach((wb => {
          bb[wb], this.config[wb] = bb[wb]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof bb.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: bb.speed
          }
        }), "undefined" !== typeof bb.mouseTail && (!1 === bb.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const bb = this.service.state.context.events[0],
          wb = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: bb.timestamp,
          endTime: wb.timestamp,
          totalTime: wb.timestamp - bb.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: bb,
          events: wb
        } = this.service.state.context;
        return bb - wb[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var wb, Mb;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: bb
          }
        }), null == (Mb = null == (wb = this.iframe.contentDocument) ? void 0 : wb.getElementsByTagName("html")[0]) || Mb.classList.remove("rrweb-paused"), this.emitter.emit(JV.Start)
      }
      pause(bb) {
        var wb, Mb;
        void 0 === bb && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof bb && (this.play(bb), this.service.send({
          type: "PAUSE"
        })), null == (Mb = null == (wb = this.iframe.contentDocument) ? void 0 : wb.getElementsByTagName("html")[0]) || Mb.classList.add("rrweb-paused"), this.emitter.emit(JV.Pause)
      }
      resume() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(bb), this.emitter.emit(JV.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(JV.Destroy)
      }
      startLive(bb) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: bb
          }
        })
      }
      addEvent(bb) {
        const wb = this.config.unpackFn ? this.config.unpackFn(bb) : bb;
        ll(wb) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: wb
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
        this.cache = TM()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(bb) {
          var wb;
          if (!bb.root.isConnected) throw new Error(kM);
          const Mb = bb.root.ownerDocument.createElement("iframe");
          for (const [Hb, pb] of Object.entries(bb.iframeAttributes || {})) "sandbox" !== Hb && Mb.setAttribute(Hb, pb);
          Mb.setAttribute("sandbox", "allow-same-origin"), bb.root.appendChild(Mb);
          const eb = Mb.contentDocument;
          if (!eb || !Mb.contentWindow) throw null == (wb = Mb.parentNode) || wb.removeChild(Mb), new Error(kM);
          return be.add(eb), Mb
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (Yg(this.iframe.contentWindow, this.iframe.contentDocument), CV(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const Mb = [],
          eb = new Set,
          Hb = (wb, Hb) => {
            if ("DIALOG" === wb.nodeName && eb.add(wb), this.collectIframeAndAttachDocument(Mb, wb), this.mediaManager.isSupportedMediaElement(wb)) {
              const {
                events: Mb
              } = this.service.state.context;
              this.mediaManager.addMediaElements(wb, bb.timestamp - Mb[0].timestamp, this.mirror)
            }
            for (const bb of this.config.plugins || []) bb.onBuild && bb.onBuild(wb, {
              id: Hb,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), pe(bb.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: Hb,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), Hb(this.iframe.contentDocument, bb.data.node.id);
        for (const {
            mutationInQueue: gb,
            builtNode: lb
          }
          of Mb) this.attachDocumentToIframe(gb, lb), this.newDocumentQueue = this.newDocumentQueue.filter((bb => bb !== gb));
        const {
          documentElement: pb,
          head: Vb
        } = this.iframe.contentDocument;
        this.insertStyleRules(pb, Vb), eb.forEach((bb => el(bb))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(JV.FullsnapshotRebuilded, bb), wb || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(bb, wb) {
        var Mb;
        const eb = (Hb = this.config.blockClass, [`.${Hb} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var Hb;
        if (this.config.pauseAnimation && eb.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), eb.length)
          if (this.usingVirtualDom) {
            const Mb = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(Mb, Np(Mb, this.virtualDom.unserializedId)), bb.insertBefore(Mb, wb), Mb.rules.push({
              source: YV.StyleSheetRule,
              adds: eb.map(((bb, wb) => ({
                rule: bb,
                index: wb
              })))
            })
          } else {
            const Hb = document.createElement("style");
            bb.insertBefore(Hb, wb);
            for (let bb = 0; bb < eb.length; bb++) null == (Mb = Hb.sheet) || Mb.insertRule(eb[bb], bb)
          }
      }
      attachDocumentToIframe(bb, wb) {
        const Mb = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          eb = [],
          Hb = new Set,
          pb = (bb, pb) => {
            "DIALOG" === bb.nodeName && Hb.add(bb), this.collectIframeAndAttachDocument(eb, bb);
            const Vb = Mb.getMeta(bb);
            if ((null == Vb ? void 0 : Vb.type) === SV.Element && "HTML" === (null == Vb ? void 0 : Vb.tagName.toUpperCase())) {
              const {
                documentElement: bb,
                head: Mb
              } = wb.contentDocument;
              this.insertStyleRules(bb, Mb)
            }
            if (!this.usingVirtualDom)
              for (const wb of this.config.plugins || []) wb.onBuild && wb.onBuild(bb, {
                id: pb,
                replayer: this
              })
          };
        He(bb.node, {
          doc: wb.contentDocument,
          mirror: Mb,
          hackCss: !0,
          skipChild: !1,
          afterAppend: pb,
          cache: this.cache
        }), pb(wb.contentDocument, bb.node.id);
        for (const {
            mutationInQueue: Vb,
            builtNode: gb
          }
          of eb) this.attachDocumentToIframe(Vb, gb), this.newDocumentQueue = this.newDocumentQueue.filter((bb => bb !== Vb));
        Hb.forEach((bb => el(bb)))
      }
      collectIframeAndAttachDocument(bb, wb) {
        if (BV(wb, this.mirror)) {
          const Mb = this.newDocumentQueue.find((bb => bb.parentId === this.mirror.getId(wb)));
          Mb && bb.push({
            mutationInQueue: Mb,
            builtNode: wb
          })
        }
      }
      waitForStylesheetLoad() {
        var bb;
        const wb = null == (bb = this.iframe.contentDocument) ? void 0 : bb.head;
        if (wb) {
          const bb = new Set;
          let Mb, eb = this.service.state;
          const Hb = () => {
            eb = this.service.state
          };
          this.emitter.on(JV.Start, Hb), this.emitter.on(JV.Pause, Hb);
          const pb = () => {
            this.emitter.off(JV.Start, Hb), this.emitter.off(JV.Pause, Hb)
          };
          wb.querySelectorAll('link[rel="stylesheet"]').forEach((wb => {
            wb.sheet || (bb.add(wb), wb.addEventListener("load", (() => {
              bb.delete(wb), 0 === bb.size && -1 !== Mb && (eb.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(JV.LoadStylesheetEnd), Mb && clearTimeout(Mb), pb())
            })))
          })), bb.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(JV.LoadStylesheetStart), Mb = setTimeout((() => {
            eb.matches("playing") && this.play(this.getCurrentTime()), Mb = -1, pb()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const bb = [];
        for (const wb of this.service.state.context.events)
          if (wb.type === cV.IncrementalSnapshot && wb.data.source === YV.CanvasMutation) {
            bb.push(this.deserializeAndPreloadCanvasEvents(wb.data, wb));
            ("commands" in wb.data ? wb.data.commands : [wb.data]).forEach((bb => {
              this.preloadImages(bb, wb)
            }))
          } return Promise.all(bb)
      }
      preloadImages(bb, wb) {
        if ("drawImage" === bb.property && "string" === typeof bb.args[0] && !this.imageMap.has(wb)) {
          const bb = document.createElement("canvas"),
            wb = bb.getContext("2d"),
            Mb = null == wb ? void 0 : wb.createImageData(bb.width, bb.height);
          null == wb || wb.putImageData(Mb, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(bb, wb) {
        if (!this.canvasEventMap.has(wb)) {
          const Mb = {
            isUnchanged: !0
          };
          if ("commands" in bb) {
            const eb = await Promise.all(bb.commands.map((async bb => {
              const wb = await Promise.all(bb.args.map(Tg(this.imageMap, null, Mb)));
              return {
                ...bb,
                args: wb
              }
            })));
            !1 === Mb.isUnchanged && this.canvasEventMap.set(wb, {
              ...bb,
              commands: eb
            })
          } else {
            const eb = await Promise.all(bb.args.map(Tg(this.imageMap, null, Mb)));
            !1 === Mb.isUnchanged && this.canvasEventMap.set(wb, {
              ...bb,
              args: eb
            })
          }
        }
      }
      applyIncremental(bb, wb) {
        var Mb, eb, Hb;
        const {
          data: pb
        } = bb;
        switch (pb.source) {
          case YV.Mutation:
            try {
              this.applyMutation(pb, wb)
            } catch (Vb) {
              this.warn(`Exception in mutation ${Vb.message||Vb}`, pb)
            }
            break;
          case YV.Drag:
          case YV.TouchMove:
          case YV.MouseMove:
            if (wb) {
              const bb = pb.positions[pb.positions.length - 1];
              this.mousePos = {
                x: bb.x,
                y: bb.y,
                id: bb.id,
                debugData: pb
              }
            } else pb.positions.forEach((Mb => {
              const eb = {
                doAction: () => {
                  this.moveAndHover(Mb.x, Mb.y, Mb.id, wb, pb)
                },
                delay: Mb.timeOffset + bb.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(eb)
            })), this.timer.addAction({
              doAction() {},
              delay: bb.delay - (null == (Mb = pb.positions[0]) ? void 0 : Mb.timeOffset)
            });
            break;
          case YV.MouseInteraction: {
            if (-1 === pb.id) break;
            const bb = new Event(Db(ZV[pb.type])),
              Mb = this.mirror.OHb(pb.id);
            if (!Mb) return this.debugNodeNotFound(pb, pb.id);
            this.emitter.emit(JV.MouseInteraction, {
              type: pb.type,
              target: Mb
            });
            const {
              triggerFocus: eb
            } = this.config;
            switch (pb.type) {
              case ZV.Blur:
                "blur" in Mb && Mb.blur();
                break;
              case ZV.Focus:
                eb && Mb.focus && Mb.focus({
                  preventScroll: !0
                });
                break;
              case ZV.Click:
              case ZV.TouchStart:
              case ZV.TouchEnd:
              case ZV.MouseDown:
              case ZV.MouseUp:
                wb ? (pb.type === ZV.TouchStart ? this.touchActive = !0 : pb.type === ZV.TouchEnd && (this.touchActive = !1), pb.type === ZV.MouseDown ? this.lastMouseDownEvent = [Mb, bb] : pb.type === ZV.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: pb.x || 0,
                  y: pb.y || 0,
                  id: pb.id,
                  debugData: pb
                }) : (pb.type === ZV.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(pb.x || 0, pb.y || 0, pb.id, wb, pb), pb.type === ZV.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : pb.type === ZV.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : pb.type === ZV.TouchEnd ? this.mouse.classList.remove("touch-active") : Mb.dispatchEvent(bb));
                break;
              case ZV.TouchCancel:
                wb ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                Mb.dispatchEvent(bb)
            }
            break
          }
          case YV.Scroll:
            if (-1 === pb.id) break;
            if (this.usingVirtualDom) {
              const bb = this.virtualDom.mirror.OHb(pb.id);
              if (!bb) return this.debugNodeNotFound(pb, pb.id);
              bb.scrollData = pb;
              break
            }
            this.applyScroll(pb, wb);
            break;
          case YV.ViewportResize:
            this.emitter.emit(JV.Resize, {
              width: pb.width,
              height: pb.height
            });
            break;
          case YV.Input:
            if (-1 === pb.id) break;
            if (this.usingVirtualDom) {
              const bb = this.virtualDom.mirror.OHb(pb.id);
              if (!bb) return this.debugNodeNotFound(pb, pb.id);
              bb.inputData = pb;
              break
            }
            this.applyInput(pb);
            break;
          case YV.MediaInteraction: {
            const wb = this.usingVirtualDom ? this.virtualDom.mirror.OHb(pb.id) : this.mirror.OHb(pb.id);
            if (!wb) return this.debugNodeNotFound(pb, pb.id);
            const Mb = wb,
              {
                events: eb
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: Mb,
              timeOffset: bb.timestamp - eb[0].timestamp,
              mutation: pb
            });
            break
          }
          case YV.StyleSheetRule:
          case YV.StyleDeclaration:
            this.usingVirtualDom ? pb.styleId ? this.constructedStyleMutations.push(pb) : pb.id && (null == (eb = this.virtualDom.mirror.OHb(pb.id)) || eb.rules.push(pb)) : this.applyStyleSheetMutation(pb);
            break;
          case YV.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const wb = this.virtualDom.mirror.OHb(pb.id);
              if (!wb) return this.debugNodeNotFound(pb, pb.id);
              wb.canvasMutations.push({
                event: bb,
                mutation: pb
              })
            } else {
              const wb = this.mirror.OHb(pb.id);
              if (!wb) return this.debugNodeNotFound(pb, pb.id);
              wl({
                event: bb,
                mutation: pb,
                target: wb,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case YV.Font:
            try {
              const bb = new FontFace(pb.family, pb.buffer ? new Uint8Array(JSON.parse(pb.fontSource)) : pb.fontSource, pb.descriptors);
              null == (Hb = this.iframe.contentDocument) || Hb.fonts.add(bb)
            } catch (Vb) {
              this.warn(Vb)
            }
            break;
          case YV.Selection:
            if (wb) {
              this.lastSelectionData = pb;
              break
            }
            this.applySelection(pb);
            break;
          case YV.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(pb) : this.applyAdoptedStyleSheet(pb)
        }
      }
      applyMutation(bb, wb) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && wb && (this.usingVirtualDom = !0, Jp(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const lb in this.legacy_missingNodeRetryMap) try {
            const bb = this.legacy_missingNodeRetryMap[lb],
              wb = Wp(bb.node, this.virtualDom, this.mirror);
            wb && (bb.node = wb)
          } catch (gb) {
            this.warn(gb)
          }
        const Mb = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        bb.removes = bb.removes.filter((wb => !!Mb.OHb(wb.id) || (this.warnNodeNotFound(bb, wb.id), !1))), bb.removes.forEach((wb => {
          var eb;
          const Hb = Mb.OHb(wb.id);
          if (!Hb) return;
          let pb = Mb.OHb(wb.parentId);
          if (!pb) return this.warnNodeNotFound(bb, wb.parentId);
          if (wb.isShadow && hV(pb) && (pb = pb.shadowRoot), Mb.removeNodeFromMap(Hb), pb) try {
            pb.removeChild(Hb), this.usingVirtualDom && "#text" === Hb.nodeName && "STYLE" === pb.nodeName && (null == (eb = pb.rules) ? void 0 : eb.length) > 0 && (pb.rules = [])
          } catch (gb) {
            if (!(gb instanceof DOMException)) throw gb;
            this.warn("parent could not remove child in mutation", pb, Hb, bb)
          }
        }));
        const eb = {
            ...this.legacy_missingNodeRetryMap
          },
          Hb = [],
          pb = bb => {
            var wb, pb;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let Vb = Mb.OHb(bb.parentId);
            if (!Vb) return bb.node.type === SV.Document ? this.newDocumentQueue.push(bb) : Hb.push(bb);
            bb.node.isShadow && (hV(Vb) || Vb.attachShadow({
              mode: "open"
            }), Vb = Vb.shadowRoot);
            let gb = null,
              lb = null;
            if (bb.previousId && (gb = Mb.OHb(bb.previousId)), bb.nextId && (lb = Mb.OHb(bb.nextId)), (bb => {
                let wb = null;
                return bb.nextId && (wb = Mb.OHb(bb.nextId)), null !== bb.nextId && void 0 !== bb.nextId && -1 !== bb.nextId && !wb
              })(bb)) return Hb.push(bb);
            if (bb.node.rootId && !Mb.OHb(bb.node.rootId)) return;
            const Lb = bb.node.rootId ? Mb.OHb(bb.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (BV(Vb, Mb)) return void this.attachDocumentToIframe(bb, Vb);
            const Ib = (bb, wb) => {
                if (!this.usingVirtualDom) {
                  el(bb);
                  for (const Mb of this.config.plugins || []) Mb.onBuild && Mb.onBuild(bb, {
                    id: wb,
                    replayer: this
                  })
                }
              },
              Ob = He(bb.node, {
                doc: Lb,
                mirror: Mb,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: Ib
              });
            if (-1 === bb.previousId || -1 === bb.nextId) return void(eb[bb.node.id] = {
              node: Ob,
              mutation: bb
            });
            const Ub = Mb.getMeta(Vb);
            if (Ub && Ub.type === SV.Element && bb.node.type === SV.Text) {
              const bb = Array.isArray(Vb.childNodes) ? Vb.childNodes : Array.from(Vb.childNodes);
              if ("textarea" === Ub.tagName)
                for (const wb of bb) wb.nodeType === Vb.TEXT_NODE && Vb.removeChild(wb);
              else if ("style" === Ub.tagName && 1 === bb.length)
                for (const wb of bb) wb.nodeType !== Vb.TEXT_NODE || Mb.hasNode(wb) || (Ob.textContent = wb.textContent, Vb.removeChild(wb))
            } else if ((null == Ub ? void 0 : Ub.type) === SV.Document) {
              const Mb = Vb;
              bb.node.type === SV.DocumentType && (null == (wb = Mb.childNodes[0]) ? void 0 : wb.nodeType) === Node.DOCUMENT_TYPE_NODE && Mb.removeChild(Mb.childNodes[0]), "HTML" === Ob.nodeName && Mb.documentElement && Mb.removeChild(Mb.documentElement)
            }
            if (gb && gb.nextSibling && gb.nextSibling.parentNode ? Vb.insertBefore(Ob, gb.nextSibling) : lb && lb.parentNode ? Vb.contains(lb) ? Vb.insertBefore(Ob, lb) : Vb.insertBefore(Ob, null) : Vb.appendChild(Ob), Ib(Ob, bb.node.id), this.usingVirtualDom && "#text" === Ob.nodeName && "STYLE" === Vb.nodeName && (null == (pb = Vb.rules) ? void 0 : pb.length) > 0 && (Vb.rules = []), BV(Ob, this.mirror)) {
              const bb = this.mirror.getId(Ob),
                wb = this.newDocumentQueue.find((wb => wb.parentId === bb));
              wb && (this.attachDocumentToIframe(wb, Ob), this.newDocumentQueue = this.newDocumentQueue.filter((bb => bb !== wb)))
            }(bb.previousId || bb.nextId) && this.legacy_resolveMissingNode(eb, Vb, Ob, bb)
          };
        bb.adds.forEach((bb => {
          pb(bb)
        }));
        const Vb = Date.now();
        for (; Hb.length;) {
          const bb = EV(Hb);
          if (Hb.length = 0, Date.now() - Vb > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", bb);
            break
          }
          for (const wb of bb) {
            Mb.OHb(wb.value.parentId) ? FV(wb, (bb => {
              pb(bb)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", wb)
          }
        }
        Object.keys(eb).length && Object.assign(this.legacy_missingNodeRetryMap, eb), xV(bb.texts).forEach((wb => {
          var eb;
          const Hb = Mb.OHb(wb.id);
          if (!Hb) {
            if (bb.removes.find((bb => bb.id === wb.id))) return;
            return this.warnNodeNotFound(bb, wb.id)
          }
          const pb = Hb.parentElement;
          if (wb.value && pb && "STYLE" === pb.tagName ? Hb.textContent = oM(wb.value, this.cache) : Hb.textContent = wb.value, this.usingVirtualDom) {
            const bb = Hb.parentNode;
            (null == (eb = null == bb ? void 0 : bb.rules) ? void 0 : eb.length) > 0 && (bb.rules = [])
          }
        })), bb.attributes.forEach((wb => {
          var eb;
          const Hb = Mb.OHb(wb.id);
          if (!Hb) {
            if (bb.removes.find((bb => bb.id === wb.id))) return;
            return this.warnNodeNotFound(bb, wb.id)
          }
          for (const bb in wb.attributes)
            if ("string" === typeof bb) {
              const Vb = wb.attributes[bb];
              if (null === Vb) Hb.removeAttribute(bb), "open" === bb && Hl(Hb, wb);
              else if ("string" === typeof Vb) try {
                if ("_cssText" === bb && ("LINK" === Hb.nodeName || "STYLE" === Hb.nodeName)) try {
                  const bb = Mb.getMeta(Hb),
                    eb = He({
                      ...bb,
                      attributes: {
                        ...bb.attributes,
                        ...wb.attributes
                      }
                    }, {
                      doc: Hb.ownerDocument,
                      mirror: Mb,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(bb.attributes, wb.attributes);
                  const pb = Hb.nextSibling,
                    Vb = Hb.parentNode;
                  if (eb && Vb) {
                    Vb.removeChild(Hb), Vb.insertBefore(eb, pb), Mb.replace(wb.id, eb);
                    break
                  }
                } catch (pb) {}
                if ("value" === bb && "TEXTAREA" === Hb.nodeName) {
                  const bb = Hb;
                  bb.childNodes.forEach((wb => bb.removeChild(wb)));
                  const wb = null == (eb = Hb.ownerDocument) ? void 0 : eb.createTextNode(Vb);
                  wb && bb.appendChild(wb)
                } else Hb.setAttribute(bb, Vb);
                "rr_open_mode" === bb && "DIALOG" === Hb.nodeName && el(Hb, wb)
              } catch (gb) {
                this.warn("An error occurred may due to the checkout feature.", gb)
              } else if ("style" === bb) {
                const bb = Vb,
                  wb = Hb;
                for (const Mb in bb)
                  if (!1 === bb[Mb]) wb.style.removeProperty(Mb);
                  else if (bb[Mb] instanceof Array) {
                  const eb = bb[Mb];
                  wb.style.setProperty(Mb, eb[0], eb[1])
                } else {
                  const eb = bb[Mb];
                  wb.style.setProperty(Mb, eb)
                }
              }
            }
        }))
      }
      applyScroll(bb, wb) {
        var Mb, eb;
        const Hb = this.mirror.OHb(bb.id);
        if (!Hb) return this.debugNodeNotFound(bb, bb.id);
        const pb = this.mirror.getMeta(Hb);
        if (Hb === this.iframe.contentDocument) null == (Mb = this.iframe.contentWindow) || Mb.scrollTo({
          top: bb.y,
          left: bb.x,
          behavior: wb ? "auto" : "smooth"
        });
        else if ((null == pb ? void 0 : pb.type) === SV.Document) null == (eb = Hb.defaultView) || eb.scrollTo({
          top: bb.y,
          left: bb.x,
          behavior: wb ? "auto" : "smooth"
        });
        else try {
          Hb.scrollTo({
            top: bb.y,
            left: bb.x,
            behavior: wb ? "auto" : "smooth"
          })
        } catch (Vb) {}
      }
      applyInput(bb) {
        const wb = this.mirror.OHb(bb.id);
        if (!wb) return this.debugNodeNotFound(bb, bb.id);
        try {
          wb.checked = bb.isChecked, wb.value = bb.text
        } catch (Mb) {}
      }
      applySelection(bb) {
        try {
          const wb = new Set,
            Mb = bb.gF.map((bb => {
              let {
                start: Mb,
                startOffset: eb,
                end: Hb,
                endOffset: pb
              } = bb;
              const Vb = this.mirror.OHb(Mb),
                gb = this.mirror.OHb(Hb);
              if (!Vb || !gb) return;
              const lb = new Range;
              lb.setStart(Vb, eb), lb.setEnd(gb, pb);
              const Lb = Vb.ownerDocument,
                Ib = null == Lb ? void 0 : Lb.getSelection();
              return Ib && wb.add(Ib), {
                range: lb,
                selection: Ib
              }
            }));
          wb.forEach((bb => bb.removeAllRanges())), Mb.forEach((bb => {
            var wb;
            return bb && (null == (wb = bb.selection) ? void 0 : wb.addRange(bb.range))
          }))
        } catch (wb) {}
      }
      applyStyleSheetMutation(bb) {
        var wb;
        let Mb = null;
        bb.styleId ? Mb = this.styleMirror.getStyle(bb.styleId) : bb.id && (Mb = (null == (wb = this.mirror.OHb(bb.id)) ? void 0 : wb.sheet) || null), Mb && (bb.source === YV.StyleSheetRule ? this.applyStyleSheetRule(bb, Mb) : bb.source === YV.StyleDeclaration && this.applyStyleDeclaration(bb, Mb))
      }
      applyStyleSheetRule(bb, wb) {
        var Mb, eb, Hb, pb;
        if (null == (Mb = bb.adds) || Mb.forEach((bb => {
            let {
              rule: Mb,
              index: eb
            } = bb;
            try {
              if (Array.isArray(eb)) {
                const {
                  positions: bb,
                  index: Hb
                } = XV(eb), pb = zV(wb.cssRules, bb);
                null == pb || pb.insertRule(Mb, Hb)
              } else {
                const bb = void 0 === eb ? void 0 : Math.min(eb, wb.cssRules.length);
                null == wb || wb.insertRule(Mb, bb)
              }
            } catch (Hb) {}
          })), null == (eb = bb.removes) || eb.forEach((bb => {
            let {
              index: Mb
            } = bb;
            try {
              if (Array.isArray(Mb)) {
                const {
                  positions: bb,
                  index: eb
                } = XV(Mb), Hb = zV(wb.cssRules, bb);
                null == Hb || Hb.deleteRule(eb || 0)
              } else null == wb || wb.deleteRule(Mb)
            } catch (eb) {}
          })), "string" === typeof bb.replace) try {
          null == (Hb = wb.replace) || Hb.call(wb, bb.replace)
        } catch (Vb) {}
        if ("string" === typeof bb.replaceSync) try {
          null == (pb = wb.replaceSync) || pb.call(wb, bb.replaceSync)
        } catch (Vb) {}
      }
      applyStyleDeclaration(bb, wb) {
        if (bb.set) {
          const Mb = zV(wb.rules, bb.index);
          (null == Mb ? void 0 : Mb.style) && Mb.style.setProperty(bb.set.property, bb.set.value, bb.set.priority)
        }
        if (bb.remove) {
          const Mb = zV(wb.rules, bb.index);
          (null == Mb ? void 0 : Mb.style) && Mb.style.removeProperty(bb.remove.property)
        }
      }
      applyAdoptedStyleSheet(bb) {
        var wb;
        const Mb = this.mirror.OHb(bb.id);
        if (!Mb) return;
        null == (wb = bb.styles) || wb.forEach((bb => {
          var wb;
          let eb = null,
            Hb = null;
          if (hV(Mb) ? Hb = (null == (wb = Mb.ownerDocument) ? void 0 : wb.defaultView) || null : "#document" === Mb.nodeName && (Hb = Mb.defaultView), Hb) try {
            eb = new Hb.CSSStyleSheet, this.styleMirror.add(eb, bb.styleId), this.applyStyleSheetRule({
              source: YV.StyleSheetRule,
              adds: bb.rules
            }, eb)
          } catch (pb) {}
        }));
        let eb = 0;
        const Hb = (bb, wb) => {
          const Mb = wb.map((bb => this.styleMirror.getStyle(bb))).filter((bb => null !== bb));
          hV(bb) ? bb.shadowRoot.adoptedStyleSheets = Mb : "#document" === bb.nodeName && (bb.adoptedStyleSheets = Mb), Mb.length !== wb.length && eb < 10 && (setTimeout((() => Hb(bb, wb)), 0 + 100 * eb), eb++)
        };
        Hb(Mb, bb.styleIds)
      }
      legacy_resolveMissingNode(bb, wb, Mb, eb) {
        const {
          previousId: Hb,
          nextId: pb
        } = eb, Vb = Hb && bb[Hb], gb = pb && bb[pb];
        if (Vb) {
          const {
            node: eb,
            mutation: Hb
          } = Vb;
          wb.insertBefore(eb, Mb), delete bb[Hb.node.id], delete this.legacy_missingNodeRetryMap[Hb.node.id], (Hb.previousId || Hb.nextId) && this.legacy_resolveMissingNode(bb, wb, eb, Hb)
        }
        if (gb) {
          const {
            node: eb,
            mutation: Hb
          } = gb;
          wb.insertBefore(eb, Mb.nextSibling), delete bb[Hb.node.id], delete this.legacy_missingNodeRetryMap[Hb.node.id], (Hb.previousId || Hb.nextId) && this.legacy_resolveMissingNode(bb, wb, eb, Hb)
        }
      }
      moveAndHover(bb, wb, Mb, eb, Hb) {
        const pb = this.mirror.OHb(Mb);
        if (!pb) return this.debugNodeNotFound(Hb, Mb);
        const Vb = mV(pb, this.iframe),
          gb = bb * Vb.absoluteScale + Vb.x,
          lb = wb * Vb.absoluteScale + Vb.y;
        this.mouse.style.left = `${gb}px`, this.mouse.style.top = `${lb}px`, eb || this.drawMouseTail({
          x: gb,
          y: lb
        }), this.hoverElements(pb)
      }
      drawMouseTail(bb) {
        if (!this.mouseTail) return;
        const {
          lineCap: wb,
          lineWidth: Mb,
          strokeStyle: eb,
          duration: Hb
        } = !0 === this.config.mouseTail ? gl : Object.assign({}, gl, this.config.mouseTail), pb = () => {
          if (!this.mouseTail) return;
          const bb = this.mouseTail.getContext("2d");
          bb && this.tailPositions.length && (bb.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), bb.beginPath(), bb.lineWidth = Mb, bb.lineCap = wb, bb.strokeStyle = eb, bb.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((wb => bb.lineTo(wb.x, wb.y))), bb.stroke())
        };
        this.tailPositions.push(bb), pb(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((wb => wb !== bb)), pb()
        }), Hb / this.speedService.state.context.timer.speed)
      }
      hoverElements(bb) {
        var wb;
        null == (wb = this.lastHoveredRootNode || this.iframe.contentDocument) || wb.querySelectorAll(".\\:hover").forEach((bb => {
          bb.classList.remove(":hover")
        })), this.lastHoveredRootNode = bb.getRootNode();
        let Mb = bb;
        for (; Mb;) Mb.classList && Mb.classList.add(":hover"), Mb = Mb.parentElement
      }
      isUserInteraction(bb) {
        return bb.type === cV.IncrementalSnapshot && (bb.data.source > YV.Mutation && bb.data.source <= YV.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(JV.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(bb, wb) {
        this.warn(`Node with id '${wb}' not found. `, bb)
      }
      warnCanvasMutationFailed(bb, wb) {
        this.warn("Has error on canvas update", wb, "canvas mutation:", bb)
      }
      debugNodeNotFound(bb, wb) {
        this.debug(`Node with id '${wb}' not found. `, bb)
      }
      warn() {
        if (this.config.showWarning) {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.config.logger.warn(Vl, ...wb)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var bb = arguments.length, wb = new Array(bb), Mb = 0; Mb < bb; Mb++) wb[Mb] = arguments[Mb];
          this.config.logger.log(Vl, ...wb)
        }
      }
    }
    const {
      addCustomEvent: Il
    } = cg, {
      freezePage: Ol
    } = cg, {
      takeFullSnapshot: Ul
    } = cg
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);