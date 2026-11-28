/*! For license information please see yteou.302.8e19a4dc.chunk.js.LICENSE.txt */
export const id = 302;
export const ids = [302];
export const modules = {
  42432: (dd, Od, md) => {
    md.d(Od, {
      d: () => sX,
      g: () => uX,
      k: () => Qh
    });
    var Wd, Fd = Object.defineProperty,
      Rd = (dd, Od, md) => ((dd, Od, md) => Od in dd ? Fd(dd, Od, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: md
      }) : dd[Od] = md)(dd, "symbol" !== typeof Od ? Od + "" : Od, md),
      Xd = Object.defineProperty,
      Kd = (dd, Od, md) => ((dd, Od, md) => Od in dd ? Xd(dd, Od, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: md
      }) : dd[Od] = md)(dd, "symbol" !== typeof Od ? Od + "" : Od, md),
      hd = (dd => (dd[dd.Document = 0] = "Document", dd[dd.DocumentType = 1] = "DocumentType", dd[dd.Element = 2] = "Element", dd[dd.Text = 3] = "Text", dd[dd.CDATA = 4] = "CDATA", dd[dd.Comment = 5] = "Comment", dd))(hd || {});
    const vd = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      Qd = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      td = {},
      od = {};

    function Nd(dd) {
      if (td[dd]) return td[dd];
      const Od = globalThis[dd],
        md = Od.prototype,
        Wd = dd in vd ? vd[dd] : void 0,
        Fd = Boolean(Wd && Wd.every((dd => {
          var Od, Wd;
          return Boolean(null == (Wd = null == (Od = Object.getOwnPropertyDescriptor(md, dd)) ? void 0 : Od.get) ? void 0 : Wd.toString().includes("[native code]"))
        }))),
        Rd = dd in Qd ? Qd[dd] : void 0,
        Xd = Boolean(Rd && Rd.every((dd => {
          var Od;
          return "function" === typeof md[dd] && (null == (Od = md[dd]) ? void 0 : Od.toString().includes("[native code]"))
        })));
      if (Fd && Xd && !globalThis.Zone) return td[dd] = Od.prototype, Od.prototype;
      try {
        const Wd = document.createElement("iframe");
        Wd.style.display = "none", document.body.appendChild(Wd);
        const Fd = Wd.contentWindow;
        if (!Fd) return Od.prototype;
        const Rd = Fd[dd].prototype;
        if (!Rd) return Wd.remove(), md;
        const Xd = navigator.userAgent;
        return Xd.includes("Safari") && !Xd.includes("Chrome") ? (Wd.classList.add("rr-block"), Wd.setAttribute("__rrwebUntaintedMutationObserver", ""), od[dd] = () => Wd.remove()) : Wd.remove(), td[dd] = Rd
      } catch {
        return md
      }
    }
    const qd = {};

    function Hd(dd, Od, md) {
      var Wd, Fd;
      const Rd = null == (Wd = qd[dd]) ? void 0 : Wd[md];
      if (Rd) return Rd.call(Od);
      const Xd = Nd(dd),
        Kd = null == (Fd = Object.getOwnPropertyDescriptor(Xd, md)) ? void 0 : Fd.get;
      return Kd ? ((qd[dd] || (qd[dd] = {}))[md] = Kd, Kd.call(Od)) : Od[md]
    }
    const yd = {};

    function bd(dd, Od, md) {
      const Wd = `${dd}.${String(md)}`;
      if (yd[Wd]) return yd[Wd].bind(Od);
      const Fd = Nd(dd)[md];
      return "function" !== typeof Fd ? Od[md] : (yd[Wd] = Fd, Fd.bind(Od))
    }
    let Td = Date.now;
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (Td = () => (new Date).getTime());
    const pd = {
      ownerDocument: function(dd) {
        return Hd("Node", dd, "ownerDocument")
      },
      childNodes: function(dd) {
        return Hd("Node", dd, "childNodes")
      },
      parentNode: function(dd) {
        return Hd("Node", dd, "parentNode")
      },
      parentElement: function(dd) {
        return Hd("Node", dd, "parentElement")
      },
      textContent: function(dd) {
        return Hd("Node", dd, "textContent")
      },
      firstChild: function(dd) {
        return Hd("Node", dd, "firstChild")
      },
      lastChild: function(dd) {
        return Hd("Node", dd, "lastChild")
      },
      nextSibling: function(dd) {
        return Hd("Node", dd, "nextSibling")
      },
      previousSibling: function(dd) {
        return Hd("Node", dd, "previousSibling")
      },
      contains: function(dd, Od) {
        return bd("Node", dd, "contains")(Od)
      },
      getRootNode: function(dd) {
        return bd("Node", dd, "getRootNode")()
      },
      host: function(dd) {
        return dd && "host" in dd ? Hd("ShadowRoot", dd, "host") : null
      },
      styleSheets: function(dd) {
        return dd.styleSheets
      },
      shadowRoot: function(dd) {
        return dd && "shadowRoot" in dd ? Hd("Element", dd, "shadowRoot") : null
      },
      querySelector: function(dd, Od) {
        return Hd("Element", dd, "querySelector")(Od)
      },
      querySelectorAll: function(dd, Od) {
        return Hd("Element", dd, "querySelectorAll")(Od)
      },
      nowTimestamp: Td,
      mutationObserverCtor: function() {
        return [Nd("MutationObserver").constructor, od.MutationObserver ?? (() => {})]
      },
      patch: function(dd, Od, md) {
        try {
          if (!(Od in dd)) return () => {};
          const Wd = dd[Od],
            Fd = md(Wd);
          return "function" === typeof Fd && (Fd.prototype = Fd.prototype || {}, Object.defineProperties(Fd, {
            __rrweb_original__: {
              enumerable: !1,
              value: Wd
            }
          })), dd[Od] = Fd, () => {
            dd[Od] = Wd
          }
        } catch {
          return () => {}
        }
      }
    };

    function Yd(dd) {
      return dd.nodeType === dd.ELEMENT_NODE
    }

    function gd(dd) {
      const Od = dd && "host" in dd && "mode" in dd && pd.host(dd) || null;
      return Boolean(Od && "shadowRoot" in Od && pd.shadowRoot(Od) === dd)
    }

    function wd(dd) {
      return "[object ShadowRoot]" === Object.prototype.toString.call(dd)
    }

    function Ed(dd) {
      try {
        const md = dd.rules || dd.cssRules;
        if (!md) return null;
        let Wd = dd.href;
        !Wd && dd.ownerNode && (Wd = dd.ownerNode.baseURI);
        const Fd = Array.from(md, (dd => Jd(dd, Wd))).join("");
        return (Od = Fd).includes(" background-clip: text;") && !Od.includes(" -webkit-background-clip: text;") && (Od = Od.replace(/\sbackground-clip:\s*text;/g, " -webkit-background-clip: text; background-clip: text;")), Od
      } catch (md) {
        return null
      }
      var Od
    }

    function Jd(dd, Od) {
      if (function(dd) {
          return "styleSheet" in dd
        }(dd)) {
        let Od;
        try {
          Od = Ed(dd.styleSheet) || function(dd) {
            const {
              cssText: Od
            } = dd;
            if (Od.split('"').length < 3) return Od;
            const md = ["@import", `url(${JSON.stringify(dd.href)})`];
            return "" === dd.layerName ? md.push("layer") : dd.layerName && md.push(`layer(${dd.layerName})`), dd.supportsText && md.push(`supports(${dd.supportsText})`), dd.media.length && md.push(dd.media.mediaText), md.join(" ") + ";"
          }(dd)
        } catch (md) {
          Od = dd.cssText
        }
        return dd.styleSheet.href ? Ld(Od, dd.styleSheet.href) : Od
      } {
        let md = dd.cssText;
        return function(dd) {
          return "selectorText" in dd
        }(dd) && dd.selectorText.includes(":") && (md = function(dd) {
          const Od = /(\[(?:[\w-]+)[^\\])(:(?:[\w-]+)\])/gm;
          return dd.replace(Od, "$1\\$2")
        }(md)), Od ? Ld(md, Od) : md
      }
    }
    class Ud {
      constructor() {
        Kd(this, "idNodeMap", new Map), Kd(this, "nodeMetaMap", new WeakMap)
      }
      getId(dd) {
        var Od;
        if (!dd) return -1;
        return (null == (Od = this.getMeta(dd)) ? void 0 : Od.id) ?? -1
      }
      QFd(dd) {
        return this.idNodeMap.get(dd) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(dd) {
        return this.nodeMetaMap.get(dd) || null
      }
      removeNodeFromMap(dd) {
        const Od = this.getId(dd);
        this.idNodeMap.delete(Od), dd.childNodes && dd.childNodes.forEach((dd => this.removeNodeFromMap(dd)))
      }
      has(dd) {
        return this.idNodeMap.has(dd)
      }
      hasNode(dd) {
        return this.nodeMetaMap.has(dd)
      }
      add(dd, Od) {
        const md = Od.id;
        this.idNodeMap.set(md, dd), this.nodeMetaMap.set(dd, Od)
      }
      replace(dd, Od) {
        const md = this.QFd(dd);
        if (md) {
          const dd = this.nodeMetaMap.get(md);
          dd && this.nodeMetaMap.set(Od, dd)
        }
        this.idNodeMap.set(dd, Od)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function xd() {
      return new Ud
    }

    function Bd(dd) {
      let {
        element: Od,
        maskInputOptions: md,
        tagName: Wd,
        type: Fd,
        value: Rd,
        maskInputFn: Xd
      } = dd, Kd = Rd || "";
      const hd = Fd && Sd(Fd);
      return (md[Wd.toLowerCase()] || hd && md[hd]) && (Kd = Xd ? Xd(Kd, Od) : "*".repeat(Kd.length)), Kd
    }

    function Sd(dd) {
      return dd.toLowerCase()
    }
    const sd = "__rrweb_original__";

    function ud(dd) {
      const Od = dd.type;
      return dd.hasAttribute("data-rr-is-password") ? "password" : Od ? Sd(Od) : null
    }

    function Vd(dd, Od) {
      let md;
      try {
        md = new URL(dd, Od ?? window.location.href)
      } catch (Fd) {
        return null
      }
      const Wd = md.pathname.match(/\.([0-9a-z]+)(?:$)/i);
      return (null == Wd ? void 0 : Wd[1]) ?? null
    }
    const Ad = /url\((?:(')([^']*)'|(")(.*?)"|([^)]*))\)/gm,
      rd = /^(?:[a-z+]+:)?\/\//i,
      Gd = /^www\..*/i,
      nd = /^(data:)([^,]*),(.*)/i;

    function Ld(dd, Od) {
      return (dd || "").replace(Ad, ((dd, md, Wd, Fd, Rd, Xd) => {
        const Kd = Wd || Rd || Xd,
          hd = md || Fd || "";
        if (!Kd) return dd;
        if (rd.test(Kd) || Gd.test(Kd)) return `url(${hd}${Kd}${hd})`;
        if (nd.test(Kd)) return `url(${hd}${Kd}${hd})`;
        if ("/" === Kd[0]) return `url(${hd}${function(dd){let Od="";return Od=dd.indexOf("//")>-1?dd.split("/").slice(0,3).join("/"):dd.split("/")[0],Od=Od.split("?")[0],Od}(Od)+Kd}${hd})`;
        const vd = Kd.split("#")[0],
          Qd = Kd.substring(vd.length),
          td = Od.split("#")[0].split("/"),
          od = vd.split("/");
        td.pop();
        for (const Od of od) "." !== Od && (".." === Od ? td.pop() : td.push(Od));
        return `url(${hd}${td.join("/")}${Qd}${hd})`
      }))
    }
    const Pd = "(?:/\\*[^*]*\\*/)|[\\s;]",
      zd = new RegExp(`${Pd}|\\b(0)px?`, "g"),
      cd = new RegExp(Pd, "g");

    function jd(dd) {
      return arguments.length > 1 && void 0 !== arguments[1] && arguments[1] ? dd.replace(cd, "") : dd.replace(zd, "$1")
    }

    function Dd(dd, Od) {
      return function(dd, Od) {
        let md = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        const Wd = Array.from(Od.childNodes),
          Fd = [];
        let Rd = 0;
        if (Wd.length > 1 && dd && "string" === typeof dd) {
          let Od = jd(dd, md);
          const Xd = Od.length / dd.length;
          for (let Kd = 1; Kd < Wd.length; Kd++)
            if (Wd[Kd].textContent && "string" === typeof Wd[Kd].textContent) {
              const hd = jd(Wd[Kd].textContent, md),
                vd = 100;
              let Qd = 3;
              for (; Qd < hd.length && (hd[Qd].match(/[a-zA-Z0-9]/) || -1 !== hd.indexOf(hd.substring(0, Qd), 1)); Qd++);
              for (; Qd < hd.length; Qd++) {
                let td = hd.substring(0, Qd),
                  od = Od.split(td),
                  Nd = -1;
                if (2 === od.length) Nd = od[0].length;
                else if (od.length > 2 && "" === od[0] && "" !== Wd[Kd - 1].textContent) Nd = Od.indexOf(td, 1);
                else if (1 === od.length) {
                  if (td = td.substring(0, td.length - 1), od = Od.split(td), od.length <= 1) return Fd.push(dd), Fd;
                  Qd = vd + 1
                } else Qd === hd.length - 1 && (Nd = Od.indexOf(td));
                if (od.length >= 2 && Qd > vd) {
                  const dd = Wd[Kd - 1].textContent;
                  if (dd && "string" === typeof dd) {
                    const md = jd(dd).length;
                    Nd = Od.indexOf(td, md)
                  } - 1 === Nd && (Nd = od[0].length)
                }
                if (-1 !== Nd) {
                  let Kd = Math.floor(Nd / Xd);
                  for (; Kd > 0 && Kd < dd.length;) {
                    if (Rd += 1, Rd > 50 * Wd.length) return Fd.push(dd), Fd;
                    const hd = jd(dd.substring(0, Kd), md);
                    if (hd.length === Nd) {
                      Fd.push(dd.substring(0, Kd)), dd = dd.substring(Kd), Od = Od.substring(Nd);
                      break
                    }
                    hd.length < Nd ? Kd += Math.max(1, Math.floor((Nd - hd.length) / Xd)) : Kd -= Math.max(1, Math.floor((hd.length - Nd) * Xd))
                  }
                  break
                }
              }
            }
        }
        return Fd.push(dd), Fd
      }(dd, Od).join("/* rr_split */")
    }
    let ed = 1;
    const Id = new RegExp("[^a-z0-9-_:]");

    function ld() {
      return ed++
    }
    let Cd, Zd;
    const kd = /^[^ \t\n\r\u000c]+/,
      fd = /^[, \t\n\r\u000c]+/;
    const Md = new WeakMap;

    function dO(dd, Od) {
      return Od && "" !== Od.trim() ? mO(dd, Od) : Od
    }

    function OO(dd) {
      return Boolean("svg" === dd.tagName || dd.ownerSVGElement)
    }

    function mO(dd, Od) {
      let md = Md.get(dd);
      if (md || (md = dd.createElement("a"), Md.set(dd, md)), Od) {
        if (Od.startsWith("blob:") || Od.startsWith("data:")) return Od
      } else Od = "";
      return md.setAttribute("href", Od), md.href
    }

    function WO(dd, Od, md, Wd) {
      return Wd ? "src" === md || "href" === md && ("use" !== Od || "#" !== Wd[0]) || "xlink:href" === md && "#" !== Wd[0] || "background" === md && ["table", "td", "th"].includes(Od) ? dO(dd, Wd) : "srcset" === md ? function(dd, Od) {
        if ("" === Od.trim()) return Od;
        let md = 0;

        function Wd(dd) {
          let Wd;
          const Fd = dd.exec(Od.substring(md));
          return Fd ? (Wd = Fd[0], md += Wd.length, Wd) : ""
        }
        const Fd = [];
        for (; Wd(fd), !(md >= Od.length);) {
          let Rd = Wd(kd);
          if ("," === Rd.slice(-1)) Rd = dO(dd, Rd.substring(0, Rd.length - 1)), Fd.push(Rd);
          else {
            let Wd = "";
            Rd = dO(dd, Rd);
            let Xd = !1;
            for (;;) {
              const dd = Od.charAt(md);
              if ("" === dd) {
                Fd.push((Rd + Wd).trim());
                break
              }
              if (Xd) ")" === dd && (Xd = !1);
              else {
                if ("," === dd) {
                  md += 1, Fd.push((Rd + Wd).trim());
                  break
                }
                "(" === dd && (Xd = !0)
              }
              Wd += dd, md += 1
            }
          }
        }
        return Fd.join(", ")
      }(dd, Wd) : "style" === md ? Ld(Wd, mO(dd)) : "object" === Od && "data" === md ? dO(dd, Wd) : Wd : Wd
    }

    function FO(dd, Od, md) {
      return ["video", "audio"].includes(dd) && "autoplay" === Sd(Od)
    }

    function RO(dd, Od, md) {
      if (!dd) return !1;
      if (dd.nodeType !== dd.ELEMENT_NODE) return !!md && RO(pd.parentNode(dd), Od, md);
      for (let Wd = dd.classList.length; Wd--;) {
        const md = dd.classList[Wd];
        if (Od.test(md)) return !0
      }
      return !!md && RO(pd.parentNode(dd), Od, md)
    }

    function XO(dd, Od, md, Wd) {
      let Fd;
      if (Yd(dd)) {
        if (Fd = dd, !pd.childNodes(Fd).length) return !1
      } else {
        if (null === pd.parentElement(dd)) return !1;
        Fd = pd.parentElement(dd)
      }
      try {
        if ("string" === typeof Od) {
          if (Wd) {
            if (Fd.closest(`.${Od}`)) return !0
          } else if (Fd.classList.contains(Od)) return !0
        } else if (RO(Fd, Od, Wd)) return !0;
        if (md)
          if (Wd) {
            if (Fd.closest(md)) return !0
          } else if (Fd.matches(md)) return !0
      } catch (Rd) {}
      return !1
    }

    function KO(dd, Od) {
      const {
        doc: md,
        mirror: Wd,
        blockClass: Fd,
        blockSelector: Rd,
        needsMask: Xd,
        inlineStylesheet: Kd,
        maskInputOptions: vd = {},
        maskTextFn: Qd,
        maskInputFn: td,
        dataURLOptions: od = {},
        inlineImages: Nd,
        recordCanvas: qd,
        keepIframeSrcFn: Hd,
        newlyAddedElement: yd = !1,
        cssCaptured: bd = !1
      } = Od, Td = function(dd, Od) {
        if (!Od.hasNode(dd)) return;
        const md = Od.getId(dd);
        return 1 === md ? void 0 : md
      }(md, Wd);
      switch (dd.nodeType) {
        case dd.DOCUMENT_NODE:
          return "CSS1Compat" !== dd.compatMode ? {
            type: hd.Document,
            childNodes: [],
            compatMode: dd.compatMode
          } : {
            type: hd.Document,
            childNodes: []
          };
        case dd.DOCUMENT_TYPE_NODE:
          return {
            type: hd.DocumentType, name: dd.name, publicId: dd.publicId, systemId: dd.systemId, rootId: Td
          };
        case dd.ELEMENT_NODE:
          return function(dd, Od) {
            const {
              doc: md,
              blockClass: Wd,
              blockSelector: Fd,
              inlineStylesheet: Rd,
              maskInputOptions: Xd = {},
              maskInputFn: Kd,
              dataURLOptions: vd = {},
              inlineImages: Qd,
              recordCanvas: td,
              keepIframeSrcFn: od,
              newlyAddedElement: Nd = !1,
              rootId: qd
            } = Od, Hd = function(dd, Od, md) {
              try {
                if ("string" === typeof Od) {
                  if (dd.classList.contains(Od)) return !0
                } else
                  for (let md = dd.classList.length; md--;) {
                    const Wd = dd.classList[md];
                    if (Od.test(Wd)) return !0
                  }
                if (md) return dd.matches(md)
              } catch (Wd) {}
              return !1
            }(dd, Wd, Fd), yd = function(dd) {
              if (dd instanceof HTMLFormElement) return "form";
              const Od = Sd(dd.tagName);
              return Id.test(Od) ? "div" : Od
            }(dd);
            let bd = {};
            const Td = dd.attributes.length;
            for (let hd = 0; hd < Td; hd++) {
              const Od = dd.attributes[hd];
              FO(yd, Od.name, Od.value) || (bd[Od.name] = WO(md, yd, Sd(Od.name), Od.value))
            }
            if ("link" === yd && Rd) {
              const Od = Array.from(md.styleSheets).find((Od => Od.href === dd.href));
              let Wd = null;
              Od && (Wd = Ed(Od)), Wd && (delete bd.rel, delete bd.href, bd._cssText = Wd)
            }
            if ("style" === yd && dd.sheet) {
              let Od = Ed(dd.sheet);
              Od && (dd.childNodes.length > 1 && (Od = Dd(Od, dd)), bd._cssText = Od)
            }
            if (["input", "textarea", "select"].includes(yd)) {
              const Od = dd.value,
                md = dd.checked;
              "radio" !== bd.type && "checkbox" !== bd.type && "submit" !== bd.type && "button" !== bd.type && Od ? bd.value = Bd({
                element: dd,
                type: ud(dd),
                tagName: yd,
                value: Od,
                maskInputOptions: Xd,
                maskInputFn: Kd
              }) : md && (bd.checked = md)
            }
            "option" === yd && (dd.selected && !Xd.select ? bd.selected = !0 : delete bd.selected);
            "dialog" === yd && dd.open && (bd.rr_open_mode = dd.matches("dialog:modal") ? "modal" : "non-modal");
            if ("canvas" === yd && td)
              if ("2d" === dd.__context)(function(dd) {
                const Od = dd.getContext("2d");
                if (!Od) return !0;
                for (let md = 0; md < dd.width; md += 50)
                  for (let Wd = 0; Wd < dd.height; Wd += 50) {
                    const Fd = Od.getImageData,
                      Rd = sd in Fd ? Fd[sd] : Fd;
                    if (new Uint32Array(Rd.call(Od, md, Wd, Math.min(50, dd.width - md), Math.min(50, dd.height - Wd)).data.buffer).some((dd => 0 !== dd))) return !1
                  }
                return !0
              })(dd) || (bd.rr_dataURL = dd.toDataURL(vd.type, vd.quality));
              else if (!("__context" in dd)) {
              const Od = dd.toDataURL(vd.type, vd.quality),
                Wd = md.createElement("canvas");
              Wd.width = dd.width, Wd.height = dd.height;
              Od !== Wd.toDataURL(vd.type, vd.quality) && (bd.rr_dataURL = Od)
            }
            if ("img" === yd && Qd) {
              Cd || (Cd = md.createElement("canvas"), Zd = Cd.getContext("2d"));
              const Od = dd,
                Wd = Od.currentSrc || Od.getAttribute("src") || "<unknown-src>",
                Fd = Od.crossOrigin,
                Rd = () => {
                  Od.removeEventListener("load", Rd);
                  try {
                    Cd.width = Od.naturalWidth, Cd.height = Od.naturalHeight, Zd.drawImage(Od, 0, 0), bd.rr_dataURL = Cd.toDataURL(vd.type, vd.quality)
                  } catch (dd) {
                    if ("anonymous" !== Od.crossOrigin) return Od.crossOrigin = "anonymous", void(Od.complete && 0 !== Od.naturalWidth ? Rd() : Od.addEventListener("load", Rd));
                    console.warn(`Cannot inline img src=${Wd}! Error: ${dd}`)
                  }
                  "anonymous" === Od.crossOrigin && (Fd ? bd.crossOrigin = Fd : Od.removeAttribute("crossorigin"))
                };
              Od.complete && 0 !== Od.naturalWidth ? Rd() : Od.addEventListener("load", Rd)
            }
            if (["audio", "video"].includes(yd)) {
              const Od = bd;
              Od.rr_mediaState = dd.paused ? "paused" : "played", Od.rr_mediaCurrentTime = dd.currentTime, Od.rr_mediaPlaybackRate = dd.playbackRate, Od.rr_mediaMuted = dd.muted, Od.rr_mediaLoop = dd.loop, Od.rr_mediaVolume = dd.volume
            }
            Nd || (dd.scrollLeft && (bd.rr_scrollLeft = dd.scrollLeft), dd.scrollTop && (bd.rr_scrollTop = dd.scrollTop));
            if (Hd) {
              const {
                width: Od,
                height: md
              } = dd.getBoundingClientRect();
              bd = {
                class: bd.class,
                rr_width: `${Od}px`,
                rr_height: `${md}px`
              }
            }
            "iframe" !== yd || od(bd.src) || (dd.contentDocument || (bd.rr_src = bd.src), delete bd.src);
            let pd;
            try {
              customElements.get(yd) && (pd = !0)
            } catch (Yd) {}
            return {
              type: hd.Element,
              tagName: yd,
              attributes: bd,
              childNodes: [],
              isSVG: OO(dd) || void 0,
              needBlock: Hd,
              rootId: qd,
              isCustom: pd
            }
          }(dd, {
            doc: md,
            blockClass: Fd,
            blockSelector: Rd,
            inlineStylesheet: Kd,
            maskInputOptions: vd,
            maskInputFn: td,
            dataURLOptions: od,
            inlineImages: Nd,
            recordCanvas: qd,
            keepIframeSrcFn: Hd,
            newlyAddedElement: yd,
            rootId: Td
          });
        case dd.TEXT_NODE:
          return function(dd, Od) {
            const {
              needsMask: md,
              maskTextFn: Wd,
              rootId: Fd,
              cssCaptured: Rd
            } = Od, Xd = pd.parentNode(dd), Kd = Xd && Xd.tagName;
            let vd = "";
            const Qd = "STYLE" === Kd || void 0,
              td = "SCRIPT" === Kd || void 0;
            td ? vd = "SCRIPT_PLACEHOLDER" : Rd || (vd = pd.textContent(dd), Qd && vd && (vd = Ld(vd, mO(Od.doc))));
            !Qd && !td && vd && md && (vd = Wd ? Wd(vd, pd.parentElement(dd)) : vd.replace(/[\S]/g, "*"));
            return {
              type: hd.Text,
              textContent: vd || "",
              rootId: Fd
            }
          }(dd, {
            doc: md,
            needsMask: Xd,
            maskTextFn: Qd,
            rootId: Td,
            cssCaptured: bd
          });
        case dd.CDATA_SECTION_NODE:
          return {
            type: hd.CDATA, textContent: "", rootId: Td
          };
        case dd.COMMENT_NODE:
          return {
            type: hd.Comment, textContent: pd.textContent(dd) || "", rootId: Td
          };
        default:
          return !1
      }
    }

    function hO(dd) {
      return void 0 === dd || null === dd ? "" : dd.toLowerCase()
    }

    function vO(dd) {
      return !0 === dd || "all" === dd ? {
        script: !0,
        comment: !0,
        headFavicon: !0,
        headWhitespace: !0,
        headMetaSocial: !0,
        headMetaRobots: !0,
        headMetaHttpEquiv: !0,
        headMetaVerification: !0,
        headMetaAuthorship: "all" === dd,
        headMetaDescKeywords: "all" === dd,
        headTitleMutations: "all" === dd
      } : dd || {}
    }

    function QO(dd, Od) {
      const {
        doc: md,
        mirror: Wd,
        blockClass: Fd,
        blockSelector: Rd,
        maskTextClass: Xd,
        maskTextSelector: Kd,
        skipChild: vd = !1,
        inlineStylesheet: Qd = !0,
        maskInputOptions: td = {},
        maskTextFn: od,
        maskInputFn: Nd,
        slimDOMOptions: qd,
        dataURLOptions: Hd = {},
        inlineImages: yd = !1,
        recordCanvas: bd = !1,
        onSerialize: Td,
        onIframeLoad: Ed,
        iframeLoadTimeout: Jd = 5e3,
        onStylesheetLoad: Ud,
        stylesheetLoadTimeout: xd = 5e3,
        keepIframeSrcFn: Bd = () => !1,
        newlyAddedElement: Sd = !1,
        cssCaptured: sd = !1
      } = Od;
      let {
        needsMask: ud
      } = Od, {
        preserveWhiteSpace: Ad = !0
      } = Od;
      if (!ud) {
        ud = XO(dd, Xd, Kd, void 0 === ud)
      }
      const rd = KO(dd, {
        doc: md,
        mirror: Wd,
        blockClass: Fd,
        blockSelector: Rd,
        needsMask: ud,
        inlineStylesheet: Qd,
        maskInputOptions: td,
        maskTextFn: od,
        maskInputFn: Nd,
        dataURLOptions: Hd,
        inlineImages: yd,
        recordCanvas: bd,
        keepIframeSrcFn: Bd,
        newlyAddedElement: Sd,
        cssCaptured: sd
      });
      if (!rd) return console.warn(dd, "not serialized"), null;
      let Gd;
      Gd = Wd.hasNode(dd) ? Wd.getId(dd) : function(dd, Od) {
        if (Od.comment && dd.type === hd.Comment) return !0;
        if (dd.type === hd.Element) {
          if (Od.script && ("script" === dd.tagName || "link" === dd.tagName && ("preload" === dd.attributes.rel && "script" === dd.attributes.as || "modulepreload" === dd.attributes.rel) || "link" === dd.tagName && "prefetch" === dd.attributes.rel && "string" === typeof dd.attributes.href && "js" === Vd(dd.attributes.href))) return !0;
          if (Od.headFavicon && ("link" === dd.tagName && "shortcut icon" === dd.attributes.rel || "meta" === dd.tagName && (hO(dd.attributes.name).match(/^msapplication-tile(image|color)$/) || "application-name" === hO(dd.attributes.name) || "icon" === hO(dd.attributes.rel) || "apple-touch-icon" === hO(dd.attributes.rel) || "shortcut icon" === hO(dd.attributes.rel)))) return !0;
          if ("meta" === dd.tagName) {
            if (Od.headMetaDescKeywords && hO(dd.attributes.name).match(/^description|keywords$/)) return !0;
            if (Od.headMetaSocial && (hO(dd.attributes.property).match(/^(og|twitter|fb):/) || hO(dd.attributes.name).match(/^(og|twitter):/) || "pinterest" === hO(dd.attributes.name))) return !0;
            if (Od.headMetaRobots && ("robots" === hO(dd.attributes.name) || "googlebot" === hO(dd.attributes.name) || "bingbot" === hO(dd.attributes.name))) return !0;
            if (Od.headMetaHttpEquiv && void 0 !== dd.attributes["http-equiv"]) return !0;
            if (Od.headMetaAuthorship && ("author" === hO(dd.attributes.name) || "generator" === hO(dd.attributes.name) || "framework" === hO(dd.attributes.name) || "publisher" === hO(dd.attributes.name) || "progid" === hO(dd.attributes.name) || hO(dd.attributes.property).match(/^article:/) || hO(dd.attributes.property).match(/^product:/))) return !0;
            if (Od.headMetaVerification && ("google-site-verification" === hO(dd.attributes.name) || "yandex-verification" === hO(dd.attributes.name) || "csrf-token" === hO(dd.attributes.name) || "p:domain_verify" === hO(dd.attributes.name) || "verify-v1" === hO(dd.attributes.name) || "verification" === hO(dd.attributes.name) || "shopify-checkout-api-token" === hO(dd.attributes.name))) return !0
          }
        }
        return !1
      }(rd, qd) || !Ad && rd.type === hd.Text && !rd.textContent.replace(/^\s+|\s+$/gm, "").length ? -2 : ld();
      const nd = Object.assign(rd, {
        id: Gd
      });
      if (Wd.add(dd, nd), -2 === Gd) return null;
      Td && Td(dd);
      let Ld = !vd;
      if (nd.type === hd.Element) {
        Ld = Ld && !nd.needBlock, delete nd.needBlock;
        const Od = pd.shadowRoot(dd);
        Od && wd(Od) && (nd.isShadowHost = !0)
      }
      if ((nd.type === hd.Document || nd.type === hd.Element) && Ld) {
        qd.headWhitespace && nd.type === hd.Element && "head" === nd.tagName && (Ad = !1);
        const Od = {
          doc: md,
          mirror: Wd,
          blockClass: Fd,
          blockSelector: Rd,
          needsMask: ud,
          maskTextClass: Xd,
          maskTextSelector: Kd,
          skipChild: vd,
          inlineStylesheet: Qd,
          maskInputOptions: td,
          maskTextFn: od,
          maskInputFn: Nd,
          slimDOMOptions: qd,
          dataURLOptions: Hd,
          inlineImages: yd,
          recordCanvas: bd,
          preserveWhiteSpace: Ad,
          onSerialize: Td,
          onIframeLoad: Ed,
          iframeLoadTimeout: Jd,
          onStylesheetLoad: Ud,
          stylesheetLoadTimeout: xd,
          keepIframeSrcFn: Bd,
          cssCaptured: !1
        };
        if (nd.type === hd.Element && "textarea" === nd.tagName && void 0 !== nd.attributes.value);
        else {
          nd.type === hd.Element && void 0 !== nd.attributes._cssText && "string" === typeof nd.attributes._cssText && (Od.cssCaptured = !0);
          for (const md of Array.from(pd.childNodes(dd))) {
            const dd = QO(md, Od);
            dd && nd.childNodes.push(dd)
          }
        }
        let gd = null;
        if (Yd(dd) && (gd = pd.shadowRoot(dd)))
          for (const dd of Array.from(pd.childNodes(gd))) {
            const md = QO(dd, Od);
            md && (wd(gd) && (md.isShadow = !0), nd.childNodes.push(md))
          }
      }
      const Pd = pd.parentNode(dd);
      return Pd && gd(Pd) && wd(Pd) && (nd.isShadow = !0), nd.type === hd.Element && "iframe" === nd.tagName && function(dd, Od, md) {
        const Wd = dd.contentWindow;
        if (!Wd) return;
        let Fd, Rd = !1;
        try {
          Fd = Wd.document.readyState
        } catch (Kd) {
          return
        }
        if ("complete" !== Fd) {
          const Wd = setTimeout((() => {
            Rd || (Od(), Rd = !0)
          }), md);
          return void dd.addEventListener("load", (() => {
            clearTimeout(Wd), Rd = !0, Od()
          }))
        }
        const Xd = "about:blank";
        if (Wd.location.href !== Xd || dd.src === Xd || "" === dd.src) return setTimeout(Od, 0), dd.addEventListener("load", Od);
        dd.addEventListener("load", Od)
      }(dd, (() => {
        const Od = dd.contentDocument;
        if (Od && Ed) {
          const md = QO(Od, {
            doc: Od,
            mirror: Wd,
            blockClass: Fd,
            blockSelector: Rd,
            needsMask: ud,
            maskTextClass: Xd,
            maskTextSelector: Kd,
            skipChild: !1,
            inlineStylesheet: Qd,
            maskInputOptions: td,
            maskTextFn: od,
            maskInputFn: Nd,
            slimDOMOptions: qd,
            dataURLOptions: Hd,
            inlineImages: yd,
            recordCanvas: bd,
            preserveWhiteSpace: Ad,
            onSerialize: Td,
            onIframeLoad: Ed,
            iframeLoadTimeout: Jd,
            onStylesheetLoad: Ud,
            stylesheetLoadTimeout: xd,
            keepIframeSrcFn: Bd
          });
          md && Ed(dd, md)
        }
      }), Jd), nd.type === hd.Element && "link" === nd.tagName && "string" === typeof nd.attributes.rel && ("stylesheet" === nd.attributes.rel || "preload" === nd.attributes.rel && "string" === typeof nd.attributes.href && "css" === Vd(nd.attributes.href)) && function(dd, Od, md) {
        let Wd, Fd = !1;
        try {
          Wd = dd.sheet
        } catch (Xd) {
          return
        }
        if (Wd) return;
        const Rd = setTimeout((() => {
          Fd || (Od(), Fd = !0)
        }), md);
        dd.addEventListener("load", (() => {
          clearTimeout(Rd), Fd = !0, Od()
        }))
      }(dd, (() => {
        if (Ud) {
          const Od = QO(dd, {
            doc: md,
            mirror: Wd,
            blockClass: Fd,
            blockSelector: Rd,
            needsMask: ud,
            maskTextClass: Xd,
            maskTextSelector: Kd,
            skipChild: !1,
            inlineStylesheet: Qd,
            maskInputOptions: td,
            maskTextFn: od,
            maskInputFn: Nd,
            slimDOMOptions: qd,
            dataURLOptions: Hd,
            inlineImages: yd,
            recordCanvas: bd,
            preserveWhiteSpace: Ad,
            onSerialize: Td,
            onIframeLoad: Ed,
            iframeLoadTimeout: Jd,
            onStylesheetLoad: Ud,
            stylesheetLoadTimeout: xd,
            keepIframeSrcFn: Bd
          });
          Od && Ud(dd, Od)
        }
      }), xd), nd
    }
    const tO = new RegExp(/(max|min)-device-(width|height)/.source, "g"),
      oO = {
        postcssPlugin: "postcss-custom-selectors",
        prepare: () => ({
          postcssPlugin: "postcss-custom-selectors",
          AtRule: function(dd) {
            dd.params.match(tO) && (dd.params = dd.params.replace(tO, "$1-$2"))
          }
        })
      },
      NO = {
        postcssPlugin: "postcss-hover-classes",
        prepare: function() {
          const dd = [];
          return {
            Rule: function(Od) {
              -1 === dd.indexOf(Od) && (dd.push(Od), Od.selectors.forEach((function(dd) {
                dd.includes(":hover") && (Od.selector += ",\n" + dd.replace(/:hover/g, ".\\:hover"))
              })))
            }
          }
        }
      };

    function qO(dd) {
      return dd && dd.__esModule && Object.prototype.hasOwnProperty.call(dd, "default") ? dd.default : dd
    }

    function HO(dd) {
      if (dd.__esModule) return dd;
      var Od = dd.default;
      if ("function" == typeof Od) {
        var md = function dd() {
          return this instanceof dd ? Reflect.construct(Od, arguments, this.constructor) : Od.apply(this, arguments)
        };
        md.prototype = Od.prototype
      } else md = {};
      return Object.defineProperty(md, "__esModule", {
        value: !0
      }), Object.keys(dd).forEach((function(Od) {
        var Wd = Object.getOwnPropertyDescriptor(dd, Od);
        Object.defineProperty(md, Od, Wd.get ? Wd : {
          enumerable: !0,
          get: function() {
            return dd[Od]
          }
        })
      })), md
    }
    var yO, bO = {
      exports: {}
    };

    function TO() {
      if (yO) return bO.exports;
      yO = 1;
      var dd = String,
        Od = function() {
          return {
            isColorSupported: !1,
            reset: dd,
            bold: dd,
            dim: dd,
            italic: dd,
            underline: dd,
            inverse: dd,
            hidden: dd,
            strikethrough: dd,
            black: dd,
            red: dd,
            green: dd,
            yellow: dd,
            blue: dd,
            magenta: dd,
            cyan: dd,
            white: dd,
            gray: dd,
            bgBlack: dd,
            bgRed: dd,
            bgGreen: dd,
            bgYellow: dd,
            bgBlue: dd,
            bgMagenta: dd,
            bgCyan: dd,
            bgWhite: dd
          }
        };
      return bO.exports = Od(), bO.exports.createColors = Od, bO.exports
    }
    const pO = HO(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var YO, gO;

    function wO() {
      if (gO) return YO;
      gO = 1;
      let dd = TO(),
        Od = pO;
      class md extends Error {
        constructor(dd, Od, Wd, Fd, Rd, Xd) {
          super(dd), this.name = "CssSyntaxError", this.reason = dd, Rd && (this.file = Rd), Fd && (this.source = Fd), Xd && (this.plugin = Xd), "undefined" !== typeof Od && "undefined" !== typeof Wd && ("number" === typeof Od ? (this.line = Od, this.column = Wd) : (this.line = Od.line, this.column = Od.column, this.endLine = Wd.line, this.endColumn = Wd.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, md)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(md) {
          if (!this.source) return "";
          let Wd = this.source;
          null == md && (md = dd.isColorSupported), Od && md && (Wd = Od(Wd));
          let Fd, Rd, Xd = Wd.split(/\r?\n/),
            Kd = Math.max(this.line - 3, 0),
            hd = Math.min(this.line + 2, Xd.length),
            vd = String(hd).length;
          if (md) {
            let {
              bold: Od,
              gray: md,
              red: Wd
            } = dd.createColors(!0);
            Fd = dd => Od(Wd(dd)), Rd = dd => md(dd)
          } else Fd = Rd = dd => dd;
          return Xd.slice(Kd, hd).map(((dd, Od) => {
            let md = Kd + 1 + Od,
              Wd = " " + (" " + md).slice(-vd) + " | ";
            if (md === this.line) {
              let Od = Rd(Wd.replace(/\d/g, " ")) + dd.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Fd(">") + Rd(Wd) + dd + "\n " + Od + Fd("^")
            }
            return " " + Rd(Wd) + dd
          })).join("\n")
        }
        toString() {
          let dd = this.showSourceCode();
          return dd && (dd = "\n\n" + dd + "\n"), this.name + ": " + this.message + dd
        }
      }
      return YO = md, md.default = md, YO
    }
    var aO, EO, JO, UO, xO, BO, SO, sO, uO, VO, iO, AO, rO, GO, nO, LO, PO, zO, cO, jO, DO, eO, IO, lO, CO, ZO, kO, fO, MO, dm, Om, mm, Wm, Fm, Rm, Xm, Km, hm, Qm, tm, om, Nm, qm, Hm, ym, bm, Tm, pm, Ym, gm, wm, am, Em, Jm = {};

    function Um() {
      return aO || (aO = 1, Jm.isClean = Symbol("isClean"), Jm.my = Symbol("my")), Jm
    }

    function xm() {
      if (JO) return EO;
      JO = 1;
      const dd = {
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
      class Od {
        constructor(dd) {
          this.builder = dd
        }
        atrule(dd, Od) {
          let md = "@" + dd.name,
            Wd = dd.params ? this.rawValue(dd, "params") : "";
          if ("undefined" !== typeof dd.raws.afterName ? md += dd.raws.afterName : Wd && (md += " "), dd.nodes) this.block(dd, md + Wd);
          else {
            let Fd = (dd.raws.between || "") + (Od ? ";" : "");
            this.builder(md + Wd + Fd, dd)
          }
        }
        beforeAfter(dd, Od) {
          let md;
          md = "decl" === dd.type ? this.raw(dd, null, "beforeDecl") : "comment" === dd.type ? this.raw(dd, null, "beforeComment") : "before" === Od ? this.raw(dd, null, "beforeRule") : this.raw(dd, null, "beforeClose");
          let Wd = dd.parent,
            Fd = 0;
          for (; Wd && "root" !== Wd.type;) Fd += 1, Wd = Wd.parent;
          if (md.includes("\n")) {
            let Od = this.raw(dd, null, "indent");
            if (Od.length)
              for (let dd = 0; dd < Fd; dd++) md += Od
          }
          return md
        }
        block(dd, Od) {
          let md, Wd = this.raw(dd, "between", "beforeOpen");
          this.builder(Od + Wd + "{", dd, "start"), dd.nodes && dd.nodes.length ? (this.body(dd), md = this.raw(dd, "after")) : md = this.raw(dd, "after", "emptyBody"), md && this.builder(md), this.builder("}", dd, "end")
        }
        body(dd) {
          let Od = dd.nodes.length - 1;
          for (; Od > 0 && "comment" === dd.nodes[Od].type;) Od -= 1;
          let md = this.raw(dd, "semicolon");
          for (let Wd = 0; Wd < dd.nodes.length; Wd++) {
            let Fd = dd.nodes[Wd],
              Rd = this.raw(Fd, "before");
            Rd && this.builder(Rd), this.stringify(Fd, Od !== Wd || md)
          }
        }
        comment(dd) {
          let Od = this.raw(dd, "left", "commentLeft"),
            md = this.raw(dd, "right", "commentRight");
          this.builder("/*" + Od + dd.text + md + "*/", dd)
        }
        decl(dd, Od) {
          let md = this.raw(dd, "between", "colon"),
            Wd = dd.prop + md + this.rawValue(dd, "value");
          dd.important && (Wd += dd.raws.important || " !important"), Od && (Wd += ";"), this.builder(Wd, dd)
        }
        document(dd) {
          this.body(dd)
        }
        raw(Od, md, Wd) {
          let Fd;
          if (Wd || (Wd = md), md && (Fd = Od.raws[md], "undefined" !== typeof Fd)) return Fd;
          let Rd = Od.parent;
          if ("before" === Wd) {
            if (!Rd || "root" === Rd.type && Rd.first === Od) return "";
            if (Rd && "document" === Rd.type) return ""
          }
          if (!Rd) return dd[Wd];
          let Xd = Od.root();
          if (Xd.rawCache || (Xd.rawCache = {}), "undefined" !== typeof Xd.rawCache[Wd]) return Xd.rawCache[Wd];
          if ("before" === Wd || "after" === Wd) return this.beforeAfter(Od, Wd);
          {
            let dd = "raw" + ((Kd = Wd)[0].toUpperCase() + Kd.slice(1));
            this[dd] ? Fd = this[dd](Xd, Od) : Xd.walk((dd => {
              if (Fd = dd.raws[md], "undefined" !== typeof Fd) return !1
            }))
          }
          var Kd;
          return "undefined" === typeof Fd && (Fd = dd[Wd]), Xd.rawCache[Wd] = Fd, Fd
        }
        rawBeforeClose(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && dd.nodes.length > 0 && "undefined" !== typeof dd.raws.after) return Od = dd.raws.after, Od.includes("\n") && (Od = Od.replace(/[^\n]+$/, "")), !1
          })), Od && (Od = Od.replace(/\S/g, "")), Od
        }
        rawBeforeComment(dd, Od) {
          let md;
          return dd.walkComments((dd => {
            if ("undefined" !== typeof dd.raws.before) return md = dd.raws.before, md.includes("\n") && (md = md.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof md ? md = this.raw(Od, null, "beforeDecl") : md && (md = md.replace(/\S/g, "")), md
        }
        rawBeforeDecl(dd, Od) {
          let md;
          return dd.walkDecls((dd => {
            if ("undefined" !== typeof dd.raws.before) return md = dd.raws.before, md.includes("\n") && (md = md.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof md ? md = this.raw(Od, null, "beforeRule") : md && (md = md.replace(/\S/g, "")), md
        }
        rawBeforeOpen(dd) {
          let Od;
          return dd.walk((dd => {
            if ("decl" !== dd.type && (Od = dd.raws.between, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawBeforeRule(dd) {
          let Od;
          return dd.walk((md => {
            if (md.nodes && (md.parent !== dd || dd.first !== md) && "undefined" !== typeof md.raws.before) return Od = md.raws.before, Od.includes("\n") && (Od = Od.replace(/[^\n]+$/, "")), !1
          })), Od && (Od = Od.replace(/\S/g, "")), Od
        }
        rawColon(dd) {
          let Od;
          return dd.walkDecls((dd => {
            if ("undefined" !== typeof dd.raws.between) return Od = dd.raws.between.replace(/[^\s:]/g, ""), !1
          })), Od
        }
        rawEmptyBody(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && 0 === dd.nodes.length && (Od = dd.raws.after, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawIndent(dd) {
          if (dd.raws.indent) return dd.raws.indent;
          let Od;
          return dd.walk((md => {
            let Wd = md.parent;
            if (Wd && Wd !== dd && Wd.parent && Wd.parent === dd && "undefined" !== typeof md.raws.before) {
              let dd = md.raws.before.split("\n");
              return Od = dd[dd.length - 1], Od = Od.replace(/\S/g, ""), !1
            }
          })), Od
        }
        rawSemicolon(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && dd.nodes.length && "decl" === dd.last.type && (Od = dd.raws.semicolon, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawValue(dd, Od) {
          let md = dd[Od],
            Wd = dd.raws[Od];
          return Wd && Wd.value === md ? Wd.raw : md
        }
        root(dd) {
          this.body(dd), dd.raws.after && this.builder(dd.raws.after)
        }
        rule(dd) {
          this.block(dd, this.rawValue(dd, "selector")), dd.raws.ownSemicolon && this.builder(dd.raws.ownSemicolon, dd, "end")
        }
        stringify(dd, Od) {
          if (!this[dd.type]) throw new Error("Unknown AST node type " + dd.type + ". Maybe you need to change PostCSS stringifier.");
          this[dd.type](dd, Od)
        }
      }
      return EO = Od, Od.default = Od, EO
    }

    function Bm() {
      if (xO) return UO;
      xO = 1;
      let dd = xm();

      function Od(Od, md) {
        new dd(md).stringify(Od)
      }
      return UO = Od, Od.default = Od, UO
    }

    function Sm() {
      if (SO) return BO;
      SO = 1;
      let {
        isClean: dd,
        my: Od
      } = Um(), md = wO(), Wd = xm(), Fd = Bm();

      function Rd(dd, Od) {
        let md = new dd.constructor;
        for (let Wd in dd) {
          if (!Object.prototype.hasOwnProperty.call(dd, Wd)) continue;
          if ("proxyCache" === Wd) continue;
          let Fd = dd[Wd],
            Xd = typeof Fd;
          "parent" === Wd && "object" === Xd ? Od && (md[Wd] = Od) : "source" === Wd ? md[Wd] = Fd : Array.isArray(Fd) ? md[Wd] = Fd.map((dd => Rd(dd, md))) : ("object" === Xd && null !== Fd && (Fd = Rd(Fd)), md[Wd] = Fd)
        }
        return md
      }
      class Xd {
        constructor() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[dd] = !1, this[Od] = !0;
          for (let dd in md)
            if ("nodes" === dd) {
              this.nodes = [];
              for (let Od of md[dd]) "function" === typeof Od.clone ? this.append(Od.clone()) : this.append(Od)
            } else this[dd] = md[dd]
        }
        addToError(dd) {
          if (dd.postcssNode = this, dd.stack && this.source && /\n\s{4}at /.test(dd.stack)) {
            let Od = this.source;
            dd.stack = dd.stack.replace(/\n\s{4}at /, `$&${Od.input.from}:${Od.start.line}:${Od.start.column}$&`)
          }
          return dd
        }
        after(dd) {
          return this.parent.insertAfter(this, dd), this
        }
        assign() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let Od in dd) this[Od] = dd[Od];
          return this
        }
        before(dd) {
          return this.parent.insertBefore(this, dd), this
        }
        cleanRaws(dd) {
          delete this.raws.before, delete this.raws.after, dd || delete this.raws.between
        }
        clone() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = Rd(this);
          for (let md in dd) Od[md] = dd[md];
          return Od
        }
        cloneAfter() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = this.clone(dd);
          return this.parent.insertAfter(this, Od), Od
        }
        cloneBefore() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = this.clone(dd);
          return this.parent.insertBefore(this, Od), Od
        }
        error(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: md,
              start: Wd
            } = this.rangeBy(Od);
            return this.source.input.error(dd, {
              column: Wd.column,
              line: Wd.line
            }, {
              column: md.column,
              line: md.line
            }, Od)
          }
          return new md(dd)
        }
        getProxyProcessor() {
          return {
            get: (dd, Od) => "proxyOf" === Od ? dd : "root" === Od ? () => dd.root().toProxy() : dd[Od],
            set: (dd, Od, md) => (dd[Od] === md || (dd[Od] = md, "prop" !== Od && "value" !== Od && "name" !== Od && "params" !== Od && "important" !== Od && "text" !== Od || dd.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[dd]) {
            this[dd] = !1;
            let Od = this;
            for (; Od = Od.parent;) Od[dd] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let dd = this.parent.index(this);
          return this.parent.nodes[dd + 1]
        }
        positionBy(dd, Od) {
          let md = this.source.start;
          if (dd.index) md = this.positionInside(dd.index, Od);
          else if (dd.word) {
            let Wd = (Od = this.toString()).indexOf(dd.word); - 1 !== Wd && (md = this.positionInside(Wd, Od))
          }
          return md
        }
        positionInside(dd, Od) {
          let md = Od || this.toString(),
            Wd = this.source.start.column,
            Fd = this.source.start.line;
          for (let Rd = 0; Rd < dd; Rd++) "\n" === md[Rd] ? (Wd = 1, Fd += 1) : Wd += 1;
          return {
            column: Wd,
            line: Fd
          }
        }
        prev() {
          if (!this.parent) return;
          let dd = this.parent.index(this);
          return this.parent.nodes[dd - 1]
        }
        rangeBy(dd) {
          let Od = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            md = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: Od.column + 1,
              line: Od.line
            };
          if (dd.word) {
            let Wd = this.toString(),
              Fd = Wd.indexOf(dd.word); - 1 !== Fd && (Od = this.positionInside(Fd, Wd), md = this.positionInside(Fd + dd.word.length, Wd))
          } else dd.start ? Od = {
            column: dd.start.column,
            line: dd.start.line
          } : dd.index && (Od = this.positionInside(dd.index)), dd.end ? md = {
            column: dd.end.column,
            line: dd.end.line
          } : "number" === typeof dd.endIndex ? md = this.positionInside(dd.endIndex) : dd.index && (md = this.positionInside(dd.index + 1));
          return (md.line < Od.line || md.line === Od.line && md.column <= Od.column) && (md = {
            column: Od.column + 1,
            line: Od.line
          }), {
            end: md,
            start: Od
          }
        }
        raw(dd, Od) {
          return (new Wd).raw(this, dd, Od)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let Wd = this,
              Fd = !1;
            for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
            for (let dd of Od) dd === this ? Fd = !0 : Fd ? (this.parent.insertAfter(Wd, dd), Wd = dd) : this.parent.insertBefore(Wd, dd);
            Fd || this.remove()
          }
          return this
        }
        root() {
          let dd = this;
          for (; dd.parent && "document" !== dd.parent.type;) dd = dd.parent;
          return dd
        }
        toJSON(dd, Od) {
          let md = {},
            Wd = null == Od;
          Od = Od || new Map;
          let Fd = 0;
          for (let Rd in this) {
            if (!Object.prototype.hasOwnProperty.call(this, Rd)) continue;
            if ("parent" === Rd || "proxyCache" === Rd) continue;
            let dd = this[Rd];
            if (Array.isArray(dd)) md[Rd] = dd.map((dd => "object" === typeof dd && dd.toJSON ? dd.toJSON(null, Od) : dd));
            else if ("object" === typeof dd && dd.toJSON) md[Rd] = dd.toJSON(null, Od);
            else if ("source" === Rd) {
              let Wd = Od.get(dd.input);
              null == Wd && (Wd = Fd, Od.set(dd.input, Fd), Fd++), md[Rd] = {
                end: dd.end,
                inputId: Wd,
                start: dd.start
              }
            } else md[Rd] = dd
          }
          return Wd && (md.inputs = [...Od.keys()].map((dd => dd.toJSON()))), md
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd;
          dd.stringify && (dd = dd.stringify);
          let Od = "";
          return dd(this, (dd => {
            Od += dd
          })), Od
        }
        warn(dd, Od, md) {
          let Wd = {
            node: this
          };
          for (let Fd in md) Wd[Fd] = md[Fd];
          return dd.warn(Od, Wd)
        }
        get proxyOf() {
          return this
        }
      }
      return BO = Xd, Xd.default = Xd, BO
    }

    function sm() {
      if (uO) return sO;
      uO = 1;
      let dd = Sm();
      class Od extends dd {
        constructor(dd) {
          dd && "undefined" !== typeof dd.value && "string" !== typeof dd.value && (dd = {
            ...dd,
            value: String(dd.value)
          }), super(dd), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return sO = Od, Od.default = Od, sO
    }

    function um() {
      if (iO) return VO;
      iO = 1;
      return VO = {
        nanoid: function() {
          let dd = "",
            Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; Od--;) dd += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return dd
        },
        customAlphabet: function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let md = "",
              Wd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od;
            for (; Wd--;) md += dd[Math.random() * dd.length | 0];
            return md
          }
        }
      }, VO
    }

    function Vm() {
      if (rO) return AO;
      rO = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = pO, {
        existsSync: md,
        readFileSync: Wd
      } = pO, {
        dirname: Fd,
        join: Rd
      } = pO;
      class Xd {
        constructor(dd, Od) {
          if (!1 === Od.map) return;
          this.loadAnnotation(dd), this.inline = this.startWith(this.annotation, "data:");
          let md = Od.map ? Od.map.prev : void 0,
            Wd = this.loadMap(Od.from, md);
          !this.mapFile && Od.from && (this.mapFile = Od.from), this.mapFile && (this.root = Fd(this.mapFile)), Wd && (this.text = Wd)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new dd(this.text)), this.consumerCache
        }
        decodeInline(dd) {
          if (/^data:application\/json;charset=utf-?8,/.test(dd) || /^data:application\/json,/.test(dd)) return decodeURIComponent(dd.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(dd) || /^data:application\/json;base64,/.test(dd)) return Od = dd.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(Od, "base64").toString() : window.atob(Od);
          var Od;
          let md = dd.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + md)
        }
        getAnnotationURL(dd) {
          return dd.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(dd) {
          return "object" === typeof dd && ("string" === typeof dd.mappings || "string" === typeof dd._mappings || Array.isArray(dd.sections))
        }
        loadAnnotation(dd) {
          let Od = dd.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!Od) return;
          let md = dd.lastIndexOf(Od.pop()),
            Wd = dd.indexOf("*/", md);
          md > -1 && Wd > -1 && (this.annotation = this.getAnnotationURL(dd.substring(md, Wd)))
        }
        loadFile(dd) {
          if (this.root = Fd(dd), md(dd)) return this.mapFile = dd, Wd(dd, "utf-8").toString().trim()
        }
        loadMap(md, Wd) {
          if (!1 === Wd) return !1;
          if (Wd) {
            if ("string" === typeof Wd) return Wd;
            if ("function" !== typeof Wd) {
              if (Wd instanceof dd) return Od.fromSourceMap(Wd).toString();
              if (Wd instanceof Od) return Wd.toString();
              if (this.isMap(Wd)) return JSON.stringify(Wd);
              throw new Error("Unsupported previous source map format: " + Wd.toString())
            } {
              let dd = Wd(md);
              if (dd) {
                let Od = this.loadFile(dd);
                if (!Od) throw new Error("Unable to load previous source map: " + dd.toString());
                return Od
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let dd = this.annotation;
              return md && (dd = Rd(Fd(md), dd)), this.loadFile(dd)
            }
          }
        }
        startWith(dd, Od) {
          return !!dd && dd.substr(0, Od.length) === Od
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return AO = Xd, Xd.default = Xd, AO
    }

    function im() {
      if (nO) return GO;
      nO = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = pO, {
        fileURLToPath: md,
        pathToFileURL: Wd
      } = pO, {
        isAbsolute: Fd,
        resolve: Rd
      } = pO, {
        nanoid: Xd
      } = um(), Kd = pO, hd = wO(), vd = Vm(), Qd = Symbol("fromOffsetCache"), td = Boolean(dd && Od), od = Boolean(Rd && Fd);
      class Nd {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === dd || "undefined" === typeof dd || "object" === typeof dd && !dd.toString) throw new Error(`PostCSS received ${dd} instead of CSS string`);
          if (this.css = dd.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, Od.from && (!od || /^\w+:\/\//.test(Od.from) || Fd(Od.from) ? this.file = Od.from : this.file = Rd(Od.from)), od && td) {
            let dd = new vd(this.css, Od);
            if (dd.text) {
              this.map = dd;
              let Od = dd.consumer().file;
              !this.file && Od && (this.file = this.mapResolve(Od))
            }
          }
          this.file || (this.id = "<input css " + Xd(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(dd, Od, md) {
          let Fd, Rd, Xd, Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (Od && "object" === typeof Od) {
            let dd = Od,
              Wd = md;
            if ("number" === typeof dd.offset) {
              let Wd = this.fromOffset(dd.offset);
              Od = Wd.line, md = Wd.col
            } else Od = dd.line, md = dd.column;
            if ("number" === typeof Wd.offset) {
              let dd = this.fromOffset(Wd.offset);
              Rd = dd.line, Xd = dd.col
            } else Rd = Wd.line, Xd = Wd.column
          } else if (!md) {
            let dd = this.fromOffset(Od);
            Od = dd.line, md = dd.col
          }
          let vd = this.origin(Od, md, Rd, Xd);
          return Fd = vd ? new hd(dd, void 0 === vd.endLine ? vd.line : {
            column: vd.column,
            line: vd.line
          }, void 0 === vd.endLine ? vd.column : {
            column: vd.endColumn,
            line: vd.endLine
          }, vd.source, vd.file, Kd.plugin) : new hd(dd, void 0 === Rd ? Od : {
            column: md,
            line: Od
          }, void 0 === Rd ? md : {
            column: Xd,
            line: Rd
          }, this.css, this.file, Kd.plugin), Fd.input = {
            column: md,
            endColumn: Xd,
            endLine: Rd,
            line: Od,
            source: this.css
          }, this.file && (Wd && (Fd.input.url = Wd(this.file).toString()), Fd.input.file = this.file), Fd
        }
        fromOffset(dd) {
          let Od, md;
          if (this[Qd]) md = this[Qd];
          else {
            let dd = this.css.split("\n");
            md = new Array(dd.length);
            let Od = 0;
            for (let Wd = 0, Fd = dd.length; Wd < Fd; Wd++) md[Wd] = Od, Od += dd[Wd].length + 1;
            this[Qd] = md
          }
          Od = md[md.length - 1];
          let Wd = 0;
          if (dd >= Od) Wd = md.length - 1;
          else {
            let Od, Fd = md.length - 2;
            for (; Wd < Fd;)
              if (Od = Wd + (Fd - Wd >> 1), dd < md[Od]) Fd = Od - 1;
              else {
                if (!(dd >= md[Od + 1])) {
                  Wd = Od;
                  break
                }
                Wd = Od + 1
              }
          }
          return {
            col: dd - md[Wd] + 1,
            line: Wd + 1
          }
        }
        mapResolve(dd) {
          return /^\w+:\/\//.test(dd) ? dd : Rd(this.map.consumer().sourceRoot || this.map.root || ".", dd)
        }
        origin(dd, Od, Rd, Xd) {
          if (!this.map) return !1;
          let Kd, hd, vd = this.map.consumer(),
            Qd = vd.originalPositionFor({
              column: Od,
              line: dd
            });
          if (!Qd.source) return !1;
          "number" === typeof Rd && (Kd = vd.originalPositionFor({
            column: Xd,
            line: Rd
          })), hd = Fd(Qd.source) ? Wd(Qd.source) : new URL(Qd.source, this.map.consumer().sourceRoot || Wd(this.map.mapFile));
          let td = {
            column: Qd.column,
            endColumn: Kd && Kd.column,
            endLine: Kd && Kd.line,
            line: Qd.line,
            url: hd.toString()
          };
          if ("file:" === hd.protocol) {
            if (!md) throw new Error("file: protocol is not available in this PostCSS build");
            td.file = md(hd)
          }
          let od = vd.sourceContentFor(Qd.source);
          return od && (td.source = od), td
        }
        toJSON() {
          let dd = {};
          for (let Od of ["hasBOM", "css", "file", "id"]) null != this[Od] && (dd[Od] = this[Od]);
          return this.map && (dd.map = {
            ...this.map
          }, dd.map.consumerCache && (dd.map.consumerCache = void 0)), dd
        }
        get from() {
          return this.file || this.id
        }
      }
      return GO = Nd, Nd.default = Nd, Kd && Kd.registerInput && Kd.registerInput(Nd), GO
    }

    function Am() {
      if (PO) return LO;
      PO = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = pO, {
        dirname: md,
        relative: Wd,
        resolve: Fd,
        sep: Rd
      } = pO, {
        pathToFileURL: Xd
      } = pO, Kd = im(), hd = Boolean(dd && Od), vd = Boolean(md && Fd && Wd && Rd);
      return LO = class {
        constructor(dd, Od, md, Wd) {
          this.stringify = dd, this.mapOpts = md.map || {}, this.root = Od, this.opts = md, this.css = Wd, this.originalCSS = Wd, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let dd;
          dd = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let Od = "\n";
          this.css.includes("\r\n") && (Od = "\r\n"), this.css += Od + "/*# sourceMappingURL=" + dd + " */"
        }
        applyPrevMaps() {
          for (let Od of this.previous()) {
            let Wd, Fd = this.toUrl(this.path(Od.file)),
              Rd = Od.root || md(Od.file);
            !1 === this.mapOpts.sourcesContent ? (Wd = new dd(Od.text), Wd.sourcesContent && (Wd.sourcesContent = null)) : Wd = Od.consumer(), this.map.applySourceMap(Wd, Fd, this.toUrl(this.path(Rd)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let dd;
              for (let Od = this.root.nodes.length - 1; Od >= 0; Od--) dd = this.root.nodes[Od], "comment" === dd.type && 0 === dd.text.indexOf("# sourceMappingURL=") && this.root.removeChild(Od)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), vd && hd && this.isMap()) return this.generateMap();
          {
            let dd = "";
            return this.stringify(this.root, (Od => {
              dd += Od
            })), [dd]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let dd = this.previous()[0].consumer();
            dd.file = this.outputFile(), this.map = Od.fromSourceMap(dd, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new Od({
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
          this.css = "", this.map = new Od({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let dd, md, Wd = 1,
            Fd = 1,
            Rd = "<no source>",
            Xd = {
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
          this.stringify(this.root, ((Od, Kd, hd) => {
            if (this.css += Od, Kd && "end" !== hd && (Xd.generated.line = Wd, Xd.generated.column = Fd - 1, Kd.source && Kd.source.start ? (Xd.source = this.sourcePath(Kd), Xd.original.line = Kd.source.start.line, Xd.original.column = Kd.source.start.column - 1, this.map.addMapping(Xd)) : (Xd.source = Rd, Xd.original.line = 1, Xd.original.column = 0, this.map.addMapping(Xd))), dd = Od.match(/\n/g), dd ? (Wd += dd.length, md = Od.lastIndexOf("\n"), Fd = Od.length - md) : Fd += Od.length, Kd && "start" !== hd) {
              let dd = Kd.parent || {
                raws: {}
              };
              ("decl" === Kd.type || "atrule" === Kd.type && !Kd.nodes) && Kd === dd.last && !dd.raws.semicolon || (Kd.source && Kd.source.end ? (Xd.source = this.sourcePath(Kd), Xd.original.line = Kd.source.end.line, Xd.original.column = Kd.source.end.column - 1, Xd.generated.line = Wd, Xd.generated.column = Fd - 2, this.map.addMapping(Xd)) : (Xd.source = Rd, Xd.original.line = 1, Xd.original.column = 0, Xd.generated.line = Wd, Xd.generated.column = Fd - 1, this.map.addMapping(Xd)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((dd => dd.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let dd = this.mapOpts.annotation;
          return ("undefined" === typeof dd || !0 === dd) && (!this.previous().length || this.previous().some((dd => dd.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((dd => dd.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(dd) {
          if (this.mapOpts.absolute) return dd;
          if (60 === dd.charCodeAt(0)) return dd;
          if (/^\w+:\/\//.test(dd)) return dd;
          let Od = this.memoizedPaths.get(dd);
          if (Od) return Od;
          let Rd = this.opts.to ? md(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (Rd = md(Fd(Rd, this.mapOpts.annotation)));
          let Xd = Wd(Rd, dd);
          return this.memoizedPaths.set(dd, Xd), Xd
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((dd => {
              if (dd.source && dd.source.input.map) {
                let Od = dd.source.input.map;
                this.previousMaps.includes(Od) || this.previousMaps.push(Od)
              }
            }));
            else {
              let dd = new Kd(this.originalCSS, this.opts);
              dd.map && this.previousMaps.push(dd.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let dd = {};
          if (this.root) this.root.walk((Od => {
            if (Od.source) {
              let md = Od.source.input.from;
              if (md && !dd[md]) {
                dd[md] = !0;
                let Wd = this.usesFileUrls ? this.toFileUrl(md) : this.toUrl(this.path(md));
                this.map.setSourceContent(Wd, Od.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let dd = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(dd, this.css)
          }
        }
        sourcePath(dd) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(dd.source.input.from) : this.toUrl(this.path(dd.source.input.from))
        }
        toBase64(dd) {
          return Buffer ? Buffer.from(dd).toString("base64") : window.btoa(unescape(encodeURIComponent(dd)))
        }
        toFileUrl(dd) {
          let Od = this.memoizedFileURLs.get(dd);
          if (Od) return Od;
          if (Xd) {
            let Od = Xd(dd).toString();
            return this.memoizedFileURLs.set(dd, Od), Od
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(dd) {
          let Od = this.memoizedURLs.get(dd);
          if (Od) return Od;
          "\\" === Rd && (dd = dd.replace(/\\/g, "/"));
          let md = encodeURI(dd).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(dd, md), md
        }
      }
    }

    function rm() {
      if (cO) return zO;
      cO = 1;
      let dd = Sm();
      class Od extends dd {
        constructor(dd) {
          super(dd), this.type = "comment"
        }
      }
      return zO = Od, Od.default = Od, zO
    }

    function Gm() {
      if (DO) return jO;
      DO = 1;
      let dd, Od, md, Wd, {
          isClean: Fd,
          my: Rd
        } = Um(),
        Xd = sm(),
        Kd = rm(),
        hd = Sm();

      function vd(dd) {
        return dd.map((dd => (dd.nodes && (dd.nodes = vd(dd.nodes)), delete dd.source, dd)))
      }

      function Qd(dd) {
        if (dd[Fd] = !1, dd.proxyOf.nodes)
          for (let Od of dd.proxyOf.nodes) Qd(Od)
      }
      class td extends hd {
        append() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          for (let Wd of Od) {
            let dd = this.normalize(Wd, this.last);
            for (let Od of dd) this.proxyOf.nodes.push(Od)
          }
          return this.markDirty(), this
        }
        cleanRaws(dd) {
          if (super.cleanRaws(dd), this.nodes)
            for (let Od of this.nodes) Od.cleanRaws(dd)
        }
        each(dd) {
          if (!this.proxyOf.nodes) return;
          let Od, md, Wd = this.getIterator();
          for (; this.indexes[Wd] < this.proxyOf.nodes.length && (Od = this.indexes[Wd], md = dd(this.proxyOf.nodes[Od], Od), !1 !== md);) this.indexes[Wd] += 1;
          return delete this.indexes[Wd], md
        }
        every(dd) {
          return this.nodes.every(dd)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let dd = this.lastEach;
          return this.indexes[dd] = 0, dd
        }
        getProxyProcessor() {
          return {
            get: (dd, Od) => "proxyOf" === Od ? dd : dd[Od] ? "each" === Od || "string" === typeof Od && Od.startsWith("walk") ? function() {
              for (var md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
              return dd[Od](...Wd.map((dd => "function" === typeof dd ? (Od, md) => dd(Od.toProxy(), md) : dd)))
            } : "every" === Od || "some" === Od ? md => dd[Od]((function(dd) {
              for (var Od = arguments.length, Wd = new Array(Od > 1 ? Od - 1 : 0), Fd = 1; Fd < Od; Fd++) Wd[Fd - 1] = arguments[Fd];
              return md(dd.toProxy(), ...Wd)
            })) : "root" === Od ? () => dd.root().toProxy() : "nodes" === Od ? dd.nodes.map((dd => dd.toProxy())) : "first" === Od || "last" === Od ? dd[Od].toProxy() : dd[Od] : dd[Od],
            set: (dd, Od, md) => (dd[Od] === md || (dd[Od] = md, "name" !== Od && "params" !== Od && "selector" !== Od || dd.markDirty()), !0)
          }
        }
        index(dd) {
          return "number" === typeof dd ? dd : (dd.proxyOf && (dd = dd.proxyOf), this.proxyOf.nodes.indexOf(dd))
        }
        insertAfter(dd, Od) {
          let md, Wd = this.index(dd),
            Fd = this.normalize(Od, this.proxyOf.nodes[Wd]).reverse();
          Wd = this.index(dd);
          for (let Rd of Fd) this.proxyOf.nodes.splice(Wd + 1, 0, Rd);
          for (let Rd in this.indexes) md = this.indexes[Rd], Wd < md && (this.indexes[Rd] = md + Fd.length);
          return this.markDirty(), this
        }
        insertBefore(dd, Od) {
          let md, Wd = this.index(dd),
            Fd = 0 === Wd && "prepend",
            Rd = this.normalize(Od, this.proxyOf.nodes[Wd], Fd).reverse();
          Wd = this.index(dd);
          for (let Xd of Rd) this.proxyOf.nodes.splice(Wd, 0, Xd);
          for (let Xd in this.indexes) md = this.indexes[Xd], Wd <= md && (this.indexes[Xd] = md + Rd.length);
          return this.markDirty(), this
        }
        normalize(Wd, hd) {
          if ("string" === typeof Wd) Wd = vd(dd(Wd).nodes);
          else if ("undefined" === typeof Wd) Wd = [];
          else if (Array.isArray(Wd)) {
            Wd = Wd.slice(0);
            for (let dd of Wd) dd.parent && dd.parent.removeChild(dd, "ignore")
          } else if ("root" === Wd.type && "document" !== this.type) {
            Wd = Wd.nodes.slice(0);
            for (let dd of Wd) dd.parent && dd.parent.removeChild(dd, "ignore")
          } else if (Wd.type) Wd = [Wd];
          else if (Wd.prop) {
            if ("undefined" === typeof Wd.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof Wd.value && (Wd.value = String(Wd.value)), Wd = [new Xd(Wd)]
          } else if (Wd.selector) Wd = [new Od(Wd)];
          else if (Wd.name) Wd = [new md(Wd)];
          else {
            if (!Wd.text) throw new Error("Unknown node type in node creation");
            Wd = [new Kd(Wd)]
          }
          return Wd.map((dd => (dd[Rd] || td.rebuild(dd), (dd = dd.proxyOf).parent && dd.parent.removeChild(dd), dd[Fd] && Qd(dd), "undefined" === typeof dd.raws.before && hd && "undefined" !== typeof hd.raws.before && (dd.raws.before = hd.raws.before.replace(/\S/g, "")), dd.parent = this.proxyOf, dd)))
        }
        prepend() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          Od = Od.reverse();
          for (let Wd of Od) {
            let dd = this.normalize(Wd, this.first, "prepend").reverse();
            for (let Od of dd) this.proxyOf.nodes.unshift(Od);
            for (let Od in this.indexes) this.indexes[Od] = this.indexes[Od] + dd.length
          }
          return this.markDirty(), this
        }
        push(dd) {
          return dd.parent = this, this.proxyOf.nodes.push(dd), this
        }
        removeAll() {
          for (let dd of this.proxyOf.nodes) dd.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(dd) {
          let Od;
          dd = this.index(dd), this.proxyOf.nodes[dd].parent = void 0, this.proxyOf.nodes.splice(dd, 1);
          for (let md in this.indexes) Od = this.indexes[md], Od >= dd && (this.indexes[md] = Od - 1);
          return this.markDirty(), this
        }
        replaceValues(dd, Od, md) {
          return md || (md = Od, Od = {}), this.walkDecls((Wd => {
            Od.props && !Od.props.includes(Wd.prop) || Od.fast && !Wd.value.includes(Od.fast) || (Wd.value = Wd.value.replace(dd, md))
          })), this.markDirty(), this
        }
        some(dd) {
          return this.nodes.some(dd)
        }
        walk(dd) {
          return this.each(((Od, md) => {
            let Wd;
            try {
              Wd = dd(Od, md)
            } catch (Fd) {
              throw Od.addToError(Fd)
            }
            return !1 !== Wd && Od.walk && (Wd = Od.walk(dd)), Wd
          }))
        }
        walkAtRules(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("atrule" === md.type && dd.test(md.name)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("atrule" === md.type && md.name === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("atrule" === dd.type) return Od(dd, md)
          })))
        }
        walkComments(dd) {
          return this.walk(((Od, md) => {
            if ("comment" === Od.type) return dd(Od, md)
          }))
        }
        walkDecls(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("decl" === md.type && dd.test(md.prop)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("decl" === md.type && md.prop === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("decl" === dd.type) return Od(dd, md)
          })))
        }
        walkRules(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("rule" === md.type && dd.test(md.selector)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("rule" === md.type && md.selector === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("rule" === dd.type) return Od(dd, md)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return td.registerParse = Od => {
        dd = Od
      }, td.registerRule = dd => {
        Od = dd
      }, td.registerAtRule = dd => {
        md = dd
      }, td.registerRoot = dd => {
        Wd = dd
      }, jO = td, td.default = td, td.rebuild = dd => {
        "atrule" === dd.type ? Object.setPrototypeOf(dd, md.prototype) : "rule" === dd.type ? Object.setPrototypeOf(dd, Od.prototype) : "decl" === dd.type ? Object.setPrototypeOf(dd, Xd.prototype) : "comment" === dd.type ? Object.setPrototypeOf(dd, Kd.prototype) : "root" === dd.type && Object.setPrototypeOf(dd, Wd.prototype), dd[Rd] = !0, dd.nodes && dd.nodes.forEach((dd => {
          td.rebuild(dd)
        }))
      }, jO
    }

    function nm() {
      if (IO) return eO;
      IO = 1;
      let dd, Od, md = Gm();
      class Wd extends md {
        constructor(dd) {
          super({
            type: "document",
            ...dd
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new dd(new Od, this, md).stringify()
        }
      }
      return Wd.registerLazyResult = Od => {
        dd = Od
      }, Wd.registerProcessor = dd => {
        Od = dd
      }, eO = Wd, Wd.default = Wd, eO
    }

    function Lm() {
      if (CO) return lO;
      CO = 1;
      let dd = {};
      return lO = function(Od) {
        dd[Od] || (dd[Od] = !0, "undefined" !== typeof console && console.warn && console.warn(Od))
      }
    }

    function Pm() {
      if (kO) return ZO;
      kO = 1;
      class dd {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = dd, Od.node && Od.node.source) {
            let dd = Od.node.rangeBy(Od);
            this.line = dd.start.line, this.column = dd.start.column, this.endLine = dd.end.line, this.endColumn = dd.end.column
          }
          for (let md in Od) this[md] = Od[md]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return ZO = dd, dd.default = dd, ZO
    }

    function zm() {
      if (MO) return fO;
      MO = 1;
      let dd = Pm();
      class Od {
        constructor(dd, Od, md) {
          this.processor = dd, this.messages = [], this.root = Od, this.opts = md, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          md.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (md.plugin = this.lastPlugin.postcssPlugin);
          let Wd = new dd(Od, md);
          return this.messages.push(Wd), Wd
        }
        warnings() {
          return this.messages.filter((dd => "warning" === dd.type))
        }
        get content() {
          return this.css
        }
      }
      return fO = Od, Od.default = Od, fO
    }

    function cm() {
      if (Wm) return mm;
      Wm = 1;
      let dd = Gm();
      class Od extends dd {
        constructor(dd) {
          super(dd), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return mm = Od, Od.default = Od, dd.registerAtRule(Od), mm
    }

    function jm() {
      if (Rm) return Fm;
      Rm = 1;
      let dd, Od, md = Gm();
      class Wd extends md {
        constructor(dd) {
          super(dd), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(dd, Od, md) {
          let Wd = super.normalize(dd);
          if (Od)
            if ("prepend" === md) this.nodes.length > 1 ? Od.raws.before = this.nodes[1].raws.before : delete Od.raws.before;
            else if (this.first !== Od)
            for (let Fd of Wd) Fd.raws.before = Od.raws.before;
          return Wd
        }
        removeChild(dd, Od) {
          let md = this.index(dd);
          return !Od && 0 === md && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[md].raws.before), super.removeChild(dd)
        }
        toResult() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new dd(new Od, this, md).stringify()
        }
      }
      return Wd.registerLazyResult = Od => {
        dd = Od
      }, Wd.registerProcessor = dd => {
        Od = dd
      }, Fm = Wd, Wd.default = Wd, md.registerRoot(Wd), Fm
    }

    function Dm() {
      if (Km) return Xm;
      Km = 1;
      let dd = {
        comma: Od => dd.split(Od, [","], !0),
        space: Od => dd.split(Od, [" ", "\n", "\t"]),
        split(dd, Od, md) {
          let Wd = [],
            Fd = "",
            Rd = !1,
            Xd = 0,
            Kd = !1,
            hd = "",
            vd = !1;
          for (let Qd of dd) vd ? vd = !1 : "\\" === Qd ? vd = !0 : Kd ? Qd === hd && (Kd = !1) : '"' === Qd || "'" === Qd ? (Kd = !0, hd = Qd) : "(" === Qd ? Xd += 1 : ")" === Qd ? Xd > 0 && (Xd -= 1) : 0 === Xd && Od.includes(Qd) && (Rd = !0), Rd ? ("" !== Fd && Wd.push(Fd.trim()), Fd = "", Rd = !1) : Fd += Qd;
          return (md || "" !== Fd) && Wd.push(Fd.trim()), Wd
        }
      };
      return Xm = dd, dd.default = dd, Xm
    }

    function em() {
      if (Qm) return hm;
      Qm = 1;
      let dd = Gm(),
        Od = Dm();
      class md extends dd {
        constructor(dd) {
          super(dd), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return Od.comma(this.selector)
        }
        set selectors(dd) {
          let Od = this.selector ? this.selector.match(/,\s*/) : null,
            md = Od ? Od[0] : "," + this.raw("between", "beforeOpen");
          this.selector = dd.join(md)
        }
      }
      return hm = md, md.default = md, dd.registerRule(md), hm
    }

    function Im() {
      if (om) return tm;
      om = 1;
      let dd = sm(),
        Od = function() {
          if (Om) return dm;
          Om = 1;
          const dd = "'".charCodeAt(0),
            Od = '"'.charCodeAt(0),
            md = "\\".charCodeAt(0),
            Wd = "/".charCodeAt(0),
            Fd = "\n".charCodeAt(0),
            Rd = " ".charCodeAt(0),
            Xd = "\f".charCodeAt(0),
            Kd = "\t".charCodeAt(0),
            hd = "\r".charCodeAt(0),
            vd = "[".charCodeAt(0),
            Qd = "]".charCodeAt(0),
            td = "(".charCodeAt(0),
            od = ")".charCodeAt(0),
            Nd = "{".charCodeAt(0),
            qd = "}".charCodeAt(0),
            Hd = ";".charCodeAt(0),
            yd = "*".charCodeAt(0),
            bd = ":".charCodeAt(0),
            Td = "@".charCodeAt(0),
            pd = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            Yd = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            gd = /.[\r\n"'(/\\]/,
            wd = /[\da-f]/i;
          return dm = function(Ed) {
            let Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              nd = Ed.css.valueOf(),
              Ld = Gd.ignoreErrors,
              Pd = nd.length,
              zd = 0,
              cd = [],
              jd = [];

            function Dd(dd) {
              throw Ed.error("Unclosed " + dd, zd)
            }
            return {
              back: function(dd) {
                jd.push(dd)
              },
              endOfFile: function() {
                return 0 === jd.length && zd >= Pd
              },
              nextToken: function(Ed) {
                if (jd.length) return jd.pop();
                if (zd >= Pd) return;
                let Gd = !!Ed && Ed.ignoreUnclosed;
                switch (Jd = nd.charCodeAt(zd), Jd) {
                  case Fd:
                  case Rd:
                  case Kd:
                  case hd:
                  case Xd:
                    Ud = zd;
                    do {
                      Ud += 1, Jd = nd.charCodeAt(Ud)
                    } while (Jd === Rd || Jd === Fd || Jd === Kd || Jd === hd || Jd === Xd);
                    rd = ["space", nd.slice(zd, Ud)], zd = Ud - 1;
                    break;
                  case vd:
                  case Qd:
                  case Nd:
                  case qd:
                  case bd:
                  case Hd:
                  case od: {
                    let dd = String.fromCharCode(Jd);
                    rd = [dd, dd, zd];
                    break
                  }
                  case td:
                    if (Vd = cd.length ? cd.pop()[1] : "", Ad = nd.charCodeAt(zd + 1), "url" === Vd && Ad !== dd && Ad !== Od && Ad !== Rd && Ad !== Fd && Ad !== Kd && Ad !== Xd && Ad !== hd) {
                      Ud = zd;
                      do {
                        if (sd = !1, Ud = nd.indexOf(")", Ud + 1), -1 === Ud) {
                          if (Ld || Gd) {
                            Ud = zd;
                            break
                          }
                          Dd("bracket")
                        }
                        for (ud = Ud; nd.charCodeAt(ud - 1) === md;) ud -= 1, sd = !sd
                      } while (sd);
                      rd = ["brackets", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud
                    } else Ud = nd.indexOf(")", zd + 1), Bd = nd.slice(zd, Ud + 1), -1 === Ud || gd.test(Bd) ? rd = ["(", "(", zd] : (rd = ["brackets", Bd, zd, Ud], zd = Ud);
                    break;
                  case dd:
                  case Od:
                    xd = Jd === dd ? "'" : '"', Ud = zd;
                    do {
                      if (sd = !1, Ud = nd.indexOf(xd, Ud + 1), -1 === Ud) {
                        if (Ld || Gd) {
                          Ud = zd + 1;
                          break
                        }
                        Dd("string")
                      }
                      for (ud = Ud; nd.charCodeAt(ud - 1) === md;) ud -= 1, sd = !sd
                    } while (sd);
                    rd = ["string", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  case Td:
                    pd.lastIndex = zd + 1, pd.test(nd), Ud = 0 === pd.lastIndex ? nd.length - 1 : pd.lastIndex - 2, rd = ["at-word", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  case md:
                    for (Ud = zd, Sd = !0; nd.charCodeAt(Ud + 1) === md;) Ud += 1, Sd = !Sd;
                    if (Jd = nd.charCodeAt(Ud + 1), Sd && Jd !== Wd && Jd !== Rd && Jd !== Fd && Jd !== Kd && Jd !== hd && Jd !== Xd && (Ud += 1, wd.test(nd.charAt(Ud)))) {
                      for (; wd.test(nd.charAt(Ud + 1));) Ud += 1;
                      nd.charCodeAt(Ud + 1) === Rd && (Ud += 1)
                    }
                    rd = ["word", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  default:
                    Jd === Wd && nd.charCodeAt(zd + 1) === yd ? (Ud = nd.indexOf("*/", zd + 2) + 1, 0 === Ud && (Ld || Gd ? Ud = nd.length : Dd("comment")), rd = ["comment", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud) : (Yd.lastIndex = zd + 1, Yd.test(nd), Ud = 0 === Yd.lastIndex ? nd.length - 1 : Yd.lastIndex - 2, rd = ["word", nd.slice(zd, Ud + 1), zd, Ud], cd.push(rd), zd = Ud)
                }
                return zd++, rd
              },
              position: function() {
                return zd
              }
            }
          }, dm
        }(),
        md = rm(),
        Wd = cm(),
        Fd = jm(),
        Rd = em();
      const Xd = {
        empty: !0,
        space: !0
      };
      return tm = class {
        constructor(dd) {
          this.input = dd, this.root = new Fd, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: dd,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(dd) {
          let Od, md, Fd, Rd = new Wd;
          Rd.name = dd[1].slice(1), "" === Rd.name && this.unnamedAtrule(Rd, dd), this.init(Rd, dd[2]);
          let Xd = !1,
            Kd = !1,
            hd = [],
            vd = [];
          for (; !this.tokenizer.endOfFile();) {
            if (Od = (dd = this.tokenizer.nextToken())[0], "(" === Od || "[" === Od ? vd.push("(" === Od ? ")" : "]") : "{" === Od && vd.length > 0 ? vd.push("}") : Od === vd[vd.length - 1] && vd.pop(), 0 === vd.length) {
              if (";" === Od) {
                Rd.source.end = this.hY(dd[2]), Rd.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === Od) {
                Kd = !0;
                break
              }
              if ("}" === Od) {
                if (hd.length > 0) {
                  for (Fd = hd.length - 1, md = hd[Fd]; md && "space" === md[0];) md = hd[--Fd];
                  md && (Rd.source.end = this.hY(md[3] || md[2]), Rd.source.end.offset++)
                }
                this.end(dd);
                break
              }
              hd.push(dd)
            } else hd.push(dd);
            if (this.tokenizer.endOfFile()) {
              Xd = !0;
              break
            }
          }
          Rd.raws.between = this.spacesAndCommentsFromEnd(hd), hd.length ? (Rd.raws.afterName = this.spacesAndCommentsFromStart(hd), this.raw(Rd, "params", hd), Xd && (dd = hd[hd.length - 1], Rd.source.end = this.hY(dd[3] || dd[2]), Rd.source.end.offset++, this.spaces = Rd.raws.between, Rd.raws.between = "")) : (Rd.raws.afterName = "", Rd.params = ""), Kd && (Rd.nodes = [], this.current = Rd)
        }
        checkMissedSemicolon(dd) {
          let Od = this.colon(dd);
          if (!1 === Od) return;
          let md, Wd = 0;
          for (let Fd = Od - 1; Fd >= 0 && (md = dd[Fd], "space" === md[0] || (Wd += 1, 2 !== Wd)); Fd--);
          throw this.input.error("Missed semicolon", "word" === md[0] ? md[3] + 1 : md[2])
        }
        colon(dd) {
          let Od, md, Wd, Fd = 0;
          for (let [Rd, Xd] of dd.entries()) {
            if (Od = Xd, md = Od[0], "(" === md && (Fd += 1), ")" === md && (Fd -= 1), 0 === Fd && ":" === md) {
              if (Wd) {
                if ("word" === Wd[0] && "progid" === Wd[1]) continue;
                return Rd
              }
              this.doubleColon(Od)
            }
            Wd = Od
          }
          return !1
        }
        comment(dd) {
          let Od = new md;
          this.init(Od, dd[2]), Od.source.end = this.hY(dd[3] || dd[2]), Od.source.end.offset++;
          let Wd = dd[1].slice(2, -2);
          if (/^\s*$/.test(Wd)) Od.text = "", Od.raws.left = Wd, Od.raws.right = "";
          else {
            let dd = Wd.match(/^(\s*)([^]*\S)(\s*)$/);
            Od.text = dd[2], Od.raws.left = dd[1], Od.raws.right = dd[3]
          }
        }
        createTokenizer() {
          this.tokenizer = Od(this.input)
        }
        decl(Od, md) {
          let Wd = new dd;
          this.init(Wd, Od[0][2]);
          let Fd, Rd = Od[Od.length - 1];
          for (";" === Rd[0] && (this.semicolon = !0, Od.pop()), Wd.source.end = this.hY(Rd[3] || Rd[2] || function(dd) {
              for (let Od = dd.length - 1; Od >= 0; Od--) {
                let md = dd[Od],
                  Wd = md[3] || md[2];
                if (Wd) return Wd
              }
            }(Od)), Wd.source.end.offset++;
            "word" !== Od[0][0];) 1 === Od.length && this.unknownWord(Od), Wd.raws.before += Od.shift()[1];
          for (Wd.source.start = this.hY(Od[0][2]), Wd.prop = ""; Od.length;) {
            let dd = Od[0][0];
            if (":" === dd || "space" === dd || "comment" === dd) break;
            Wd.prop += Od.shift()[1]
          }
          for (Wd.raws.between = ""; Od.length;) {
            if (Fd = Od.shift(), ":" === Fd[0]) {
              Wd.raws.between += Fd[1];
              break
            }
            "word" === Fd[0] && /\w/.test(Fd[1]) && this.unknownWord([Fd]), Wd.raws.between += Fd[1]
          }
          "_" !== Wd.prop[0] && "*" !== Wd.prop[0] || (Wd.raws.before += Wd.prop[0], Wd.prop = Wd.prop.slice(1));
          let Xd, Kd = [];
          for (; Od.length && (Xd = Od[0][0], "space" === Xd || "comment" === Xd);) Kd.push(Od.shift());
          this.precheckMissedSemicolon(Od);
          for (let dd = Od.length - 1; dd >= 0; dd--) {
            if (Fd = Od[dd], "!important" === Fd[1].toLowerCase()) {
              Wd.important = !0;
              let md = this.stringFrom(Od, dd);
              md = this.spacesFromEnd(Od) + md, " !important" !== md && (Wd.raws.important = md);
              break
            }
            if ("important" === Fd[1].toLowerCase()) {
              let md = Od.slice(0),
                Fd = "";
              for (let Od = dd; Od > 0; Od--) {
                let dd = md[Od][0];
                if (0 === Fd.trim().indexOf("!") && "space" !== dd) break;
                Fd = md.pop()[1] + Fd
              }
              0 === Fd.trim().indexOf("!") && (Wd.important = !0, Wd.raws.important = Fd, Od = md)
            }
            if ("space" !== Fd[0] && "comment" !== Fd[0]) break
          }
          Od.some((dd => "space" !== dd[0] && "comment" !== dd[0])) && (Wd.raws.between += Kd.map((dd => dd[1])).join(""), Kd = []), this.raw(Wd, "value", Kd.concat(Od), md), Wd.value.includes(":") && !md && this.checkMissedSemicolon(Od)
        }
        doubleColon(dd) {
          throw this.input.error("Double colon", {
            offset: dd[2]
          }, {
            offset: dd[2] + dd[1].length
          })
        }
        emptyRule(dd) {
          let Od = new Rd;
          this.init(Od, dd[2]), Od.selector = "", Od.raws.between = "", this.current = Od
        }
        end(dd) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hY(dd[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(dd)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hY(this.tokenizer.position())
        }
        freeSemicolon(dd) {
          if (this.spaces += dd[1], this.current.nodes) {
            let dd = this.current.nodes[this.current.nodes.length - 1];
            dd && "rule" === dd.type && !dd.raws.ownSemicolon && (dd.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        hY(dd) {
          let Od = this.input.fromOffset(dd);
          return {
            column: Od.col,
            line: Od.line,
            offset: dd
          }
        }
        init(dd, Od) {
          this.current.push(dd), dd.source = {
            input: this.input,
            start: this.hY(Od)
          }, dd.raws.before = this.spaces, this.spaces = "", "comment" !== dd.type && (this.semicolon = !1)
        }
        other(dd) {
          let Od = !1,
            md = null,
            Wd = !1,
            Fd = null,
            Rd = [],
            Xd = dd[1].startsWith("--"),
            Kd = [],
            hd = dd;
          for (; hd;) {
            if (md = hd[0], Kd.push(hd), "(" === md || "[" === md) Fd || (Fd = hd), Rd.push("(" === md ? ")" : "]");
            else if (Xd && Wd && "{" === md) Fd || (Fd = hd), Rd.push("}");
            else if (0 === Rd.length) {
              if (";" === md) {
                if (Wd) return void this.decl(Kd, Xd);
                break
              }
              if ("{" === md) return void this.rule(Kd);
              if ("}" === md) {
                this.tokenizer.back(Kd.pop()), Od = !0;
                break
              }
              ":" === md && (Wd = !0)
            } else md === Rd[Rd.length - 1] && (Rd.pop(), 0 === Rd.length && (Fd = null));
            hd = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (Od = !0), Rd.length > 0 && this.unclosedBracket(Fd), Od && Wd) {
            if (!Xd)
              for (; Kd.length && (hd = Kd[Kd.length - 1][0], "space" === hd || "comment" === hd);) this.tokenizer.back(Kd.pop());
            this.decl(Kd, Xd)
          } else this.unknownWord(Kd)
        }
        parse() {
          let dd;
          for (; !this.tokenizer.endOfFile();) switch (dd = this.tokenizer.nextToken(), dd[0]) {
            case "space":
              this.spaces += dd[1];
              break;
            case ";":
              this.freeSemicolon(dd);
              break;
            case "}":
              this.end(dd);
              break;
            case "comment":
              this.comment(dd);
              break;
            case "at-word":
              this.atrule(dd);
              break;
            case "{":
              this.emptyRule(dd);
              break;
            default:
              this.other(dd)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(dd, Od, md, Wd) {
          let Fd, Rd, Kd, hd, vd = md.length,
            Qd = "",
            td = !0;
          for (let od = 0; od < vd; od += 1) Fd = md[od], Rd = Fd[0], "space" !== Rd || od !== vd - 1 || Wd ? "comment" === Rd ? (hd = md[od - 1] ? md[od - 1][0] : "empty", Kd = md[od + 1] ? md[od + 1][0] : "empty", Xd[hd] || Xd[Kd] || "," === Qd.slice(-1) ? td = !1 : Qd += Fd[1]) : Qd += Fd[1] : td = !1;
          if (!td) {
            let Wd = md.reduce(((dd, Od) => dd + Od[1]), "");
            dd.raws[Od] = {
              raw: Wd,
              value: Qd
            }
          }
          dd[Od] = Qd
        }
        rule(dd) {
          dd.pop();
          let Od = new Rd;
          this.init(Od, dd[0][2]), Od.raws.between = this.spacesAndCommentsFromEnd(dd), this.raw(Od, "selector", dd), this.current = Od
        }
        spacesAndCommentsFromEnd(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[dd.length - 1][0], "space" === Od || "comment" === Od);) md = dd.pop()[1] + md;
          return md
        }
        spacesAndCommentsFromStart(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[0][0], "space" === Od || "comment" === Od);) md += dd.shift()[1];
          return md
        }
        spacesFromEnd(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[dd.length - 1][0], "space" === Od);) md = dd.pop()[1] + md;
          return md
        }
        stringFrom(dd, Od) {
          let md = "";
          for (let Wd = Od; Wd < dd.length; Wd++) md += dd[Wd][1];
          return dd.splice(Od, dd.length - Od), md
        }
        unclosedBlock() {
          let dd = this.current.source.start;
          throw this.input.error("Unclosed block", dd.line, dd.column)
        }
        unclosedBracket(dd) {
          throw this.input.error("Unclosed bracket", {
            offset: dd[2]
          }, {
            offset: dd[2] + 1
          })
        }
        unexpectedClose(dd) {
          throw this.input.error("Unexpected }", {
            offset: dd[2]
          }, {
            offset: dd[2] + 1
          })
        }
        unknownWord(dd) {
          throw this.input.error("Unknown word", {
            offset: dd[0][2]
          }, {
            offset: dd[0][2] + dd[0][1].length
          })
        }
        unnamedAtrule(dd, Od) {
          throw this.input.error("At-rule without name", {
            offset: Od[2]
          }, {
            offset: Od[2] + Od[1].length
          })
        }
      }
    }

    function lm() {
      if (qm) return Nm;
      qm = 1;
      let dd = Gm(),
        Od = Im(),
        md = im();

      function Wd(dd, Wd) {
        let Fd = new md(dd, Wd),
          Rd = new Od(Fd);
        try {
          Rd.parse()
        } catch (Xd) {
          throw Xd
        }
        return Rd.root
      }
      return Nm = Wd, Wd.default = Wd, dd.registerParse(Wd), Nm
    }

    function Cm() {
      if (ym) return Hm;
      ym = 1;
      let {
        isClean: dd,
        my: Od
      } = Um(), md = Am(), Wd = Bm(), Fd = Gm(), Rd = nm(), Xd = (Lm(), zm()), Kd = lm(), hd = jm();
      const vd = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        Qd = {
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
        td = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function od(dd) {
        return "object" === typeof dd && "function" === typeof dd.then
      }

      function Nd(dd) {
        let Od = !1,
          md = vd[dd.type];
        return "decl" === dd.type ? Od = dd.prop.toLowerCase() : "atrule" === dd.type && (Od = dd.name.toLowerCase()), Od && dd.append ? [md, md + "-" + Od, 0, md + "Exit", md + "Exit-" + Od] : Od ? [md, md + "-" + Od, md + "Exit", md + "Exit-" + Od] : dd.append ? [md, 0, md + "Exit"] : [md, md + "Exit"]
      }

      function qd(dd) {
        let Od;
        return Od = "document" === dd.type ? ["Document", 0, "DocumentExit"] : "root" === dd.type ? ["Root", 0, "RootExit"] : Nd(dd), {
          eventIndex: 0,
          events: Od,
          iterator: 0,
          node: dd,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Hd(Od) {
        return Od[dd] = !1, Od.nodes && Od.nodes.forEach((dd => Hd(dd))), Od
      }
      let yd = {};
      class bd {
        constructor(dd, md, Wd) {
          let Rd;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof md || null === md || "root" !== md.type && "document" !== md.type)
            if (md instanceof bd || md instanceof Xd) Rd = Hd(md.root), md.map && ("undefined" === typeof Wd.map && (Wd.map = {}), Wd.map.inline || (Wd.map.inline = !1), Wd.map.prev = md.map);
            else {
              let dd = Kd;
              Wd.syntax && (dd = Wd.syntax.parse), Wd.parser && (dd = Wd.parser), dd.parse && (dd = dd.parse);
              try {
                Rd = dd(md, Wd)
              } catch (hd) {
                this.processed = !0, this.error = hd
              }
              Rd && !Rd[Od] && Fd.rebuild(Rd)
            }
          else Rd = Hd(md);
          this.result = new Xd(dd, Rd, Wd), this.helpers = {
            ...yd,
            postcss: yd,
            result: this.result
          }, this.plugins = this.processor.plugins.map((dd => "object" === typeof dd && dd.prepare ? {
            ...dd,
            ...dd.prepare(this.result)
          } : dd))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (dd) {
          return this.async().catch(dd)
        } finally(dd) {
          return this.async().then(dd, dd)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(dd, Od) {
          let md = this.result.lastPlugin;
          try {
            Od && Od.addToError(dd), this.error = dd, "CssSyntaxError" !== dd.name || dd.plugin ? md.postcssVersion : (dd.plugin = md.postcssPlugin, dd.setMessage())
          } catch (Wd) {
            console && console.error && console.error(Wd)
          }
          return dd
        }
        prepareVisitors() {
          this.listeners = {};
          let dd = (dd, Od, md) => {
            this.listeners[Od] || (this.listeners[Od] = []), this.listeners[Od].push([dd, md])
          };
          for (let Od of this.plugins)
            if ("object" === typeof Od)
              for (let md in Od) {
                if (!Qd[md] && /^[A-Z]/.test(md)) throw new Error(`Unknown event ${md} in ${Od.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!td[md])
                  if ("object" === typeof Od[md])
                    for (let Wd in Od[md]) dd(Od, "*" === Wd ? md : md + "-" + Wd.toLowerCase(), Od[md][Wd]);
                  else "function" === typeof Od[md] && dd(Od, md, Od[md])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let dd = 0; dd < this.plugins.length; dd++) {
            let md = this.plugins[dd],
              Wd = this.runOnRoot(md);
            if (od(Wd)) try {
              await Wd
            } catch (Od) {
              throw this.handleError(Od)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Od = this.result.root;
            for (; !Od[dd];) {
              Od[dd] = !0;
              let Wd = [qd(Od)];
              for (; Wd.length > 0;) {
                let dd = this.visitTick(Wd);
                if (od(dd)) try {
                  await dd
                } catch (md) {
                  let dd = Wd[Wd.length - 1].node;
                  throw this.handleError(md, dd)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [dd, Wd] of this.listeners.OnceExit) {
                this.result.lastPlugin = dd;
                try {
                  if ("document" === Od.type) {
                    let dd = Od.nodes.map((dd => Wd(dd, this.helpers)));
                    await Promise.all(dd)
                  } else await Wd(Od, this.helpers)
                } catch (md) {
                  throw this.handleError(md)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(dd) {
          this.result.lastPlugin = dd;
          try {
            if ("object" === typeof dd && dd.Once) {
              if ("document" === this.result.root.type) {
                let Od = this.result.root.nodes.map((Od => dd.Once(Od, this.helpers)));
                return od(Od[0]) ? Promise.all(Od) : Od
              }
              return dd.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof dd) return dd(this.result.root, this.result)
          } catch (Od) {
            throw this.handleError(Od)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let dd = this.result.opts,
            Od = Wd;
          dd.syntax && (Od = dd.syntax.stringify), dd.stringifier && (Od = dd.stringifier), Od.stringify && (Od = Od.stringify);
          let Fd = new md(Od, this.result.root, this.result.opts).generate();
          return this.result.css = Fd[0], this.result.map = Fd[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let dd of this.plugins) {
            if (od(this.runOnRoot(dd))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Od = this.result.root;
            for (; !Od[dd];) Od[dd] = !0, this.walkSync(Od);
            if (this.listeners.OnceExit)
              if ("document" === Od.type)
                for (let dd of Od.nodes) this.visitSync(this.listeners.OnceExit, dd);
              else this.visitSync(this.listeners.OnceExit, Od)
          }
          return this.result
        }
        then(dd, Od) {
          return this.async().then(dd, Od)
        }
        toString() {
          return this.css
        }
        visitSync(dd, Od) {
          for (let [Wd, Fd] of dd) {
            let dd;
            this.result.lastPlugin = Wd;
            try {
              dd = Fd(Od, this.helpers)
            } catch (md) {
              throw this.handleError(md, Od.proxyOf)
            }
            if ("root" !== Od.type && "document" !== Od.type && !Od.parent) return !0;
            if (od(dd)) throw this.getAsyncError()
          }
        }
        visitTick(Od) {
          let md = Od[Od.length - 1],
            {
              node: Wd,
              visitors: Fd
            } = md;
          if ("root" !== Wd.type && "document" !== Wd.type && !Wd.parent) return void Od.pop();
          if (Fd.length > 0 && md.visitorIndex < Fd.length) {
            let [dd, Od] = Fd[md.visitorIndex];
            md.visitorIndex += 1, md.visitorIndex === Fd.length && (md.visitors = [], md.visitorIndex = 0), this.result.lastPlugin = dd;
            try {
              return Od(Wd.toProxy(), this.helpers)
            } catch (Xd) {
              throw this.handleError(Xd, Wd)
            }
          }
          if (0 !== md.iterator) {
            let Fd, Rd = md.iterator;
            for (; Fd = Wd.nodes[Wd.indexes[Rd]];)
              if (Wd.indexes[Rd] += 1, !Fd[dd]) return Fd[dd] = !0, void Od.push(qd(Fd));
            md.iterator = 0, delete Wd.indexes[Rd]
          }
          let Rd = md.events;
          for (; md.eventIndex < Rd.length;) {
            let Od = Rd[md.eventIndex];
            if (md.eventIndex += 1, 0 === Od) return void(Wd.nodes && Wd.nodes.length && (Wd[dd] = !0, md.iterator = Wd.getIterator()));
            if (this.listeners[Od]) return void(md.visitors = this.listeners[Od])
          }
          Od.pop()
        }
        walkSync(Od) {
          Od[dd] = !0;
          let md = Nd(Od);
          for (let Wd of md)
            if (0 === Wd) Od.nodes && Od.each((Od => {
              Od[dd] || this.walkSync(Od)
            }));
            else {
              let dd = this.listeners[Wd];
              if (dd && this.visitSync(dd, Od.toProxy())) return
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
      return bd.registerPostcss = dd => {
        yd = dd
      }, Hm = bd, bd.default = bd, hd.registerLazyResult(bd), Rd.registerLazyResult(bd), Hm
    }

    function Zm() {
      if (Ym) return pm;
      Ym = 1;
      let dd = function() {
          if (Tm) return bm;
          Tm = 1;
          let dd = Am(),
            Od = Bm(),
            md = (Lm(), lm());
          const Wd = zm();
          class Fd {
            constructor(md, Fd, Rd) {
              let Xd;
              Fd = Fd.toString(), this.stringified = !1, this._processor = md, this._css = Fd, this._opts = Rd, this._map = void 0;
              let Kd = Od;
              this.result = new Wd(this._processor, Xd, this._opts), this.result.css = Fd;
              let hd = this;
              Object.defineProperty(this.result, "root", {
                get: () => hd.root
              });
              let vd = new dd(Kd, Xd, this._opts, Fd);
              if (vd.isMap()) {
                let [dd, Od] = vd.generate();
                dd && (this.result.css = dd), Od && (this.result.map = Od)
              } else vd.clearAnnotation(), this.result.css = vd.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (dd) {
              return this.async().catch(dd)
            } finally(dd) {
              return this.async().then(dd, dd)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(dd, Od) {
              return this.async().then(dd, Od)
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
              let dd, Od = md;
              try {
                dd = Od(this._css, this._opts)
              } catch (Wd) {
                this.error = Wd
              }
              if (this.error) throw this.error;
              return this._root = dd, dd
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return bm = Fd, Fd.default = Fd, bm
        }(),
        Od = Cm(),
        md = nm(),
        Wd = jm();
      class Fd {
        constructor() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(dd)
        }
        normalize(dd) {
          let Od = [];
          for (let md of dd)
            if (!0 === md.postcss ? md = md() : md.postcss && (md = md.postcss), "object" === typeof md && Array.isArray(md.plugins)) Od = Od.concat(md.plugins);
            else if ("object" === typeof md && md.postcssPlugin) Od.push(md);
          else if ("function" === typeof md) Od.push(md);
          else {
            if ("object" !== typeof md || !md.parse && !md.stringify) throw new Error(md + " is not a PostCSS plugin")
          }
          return Od
        }
        process(md) {
          let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || Wd.parser || Wd.stringifier || Wd.syntax ? new Od(this, md, Wd) : new dd(this, md, Wd)
        }
        use(dd) {
          return this.plugins = this.plugins.concat(this.normalize([dd])), this
        }
      }
      return pm = Fd, Fd.default = Fd, Wd.registerProcessor(Fd), md.registerProcessor(Fd), pm
    }
    const km = qO(function() {
      if (Em) return am;
      Em = 1;
      let dd = wO(),
        Od = sm(),
        md = Cm(),
        Wd = Gm(),
        Fd = Zm(),
        Rd = Bm(),
        Xd = function() {
          if (wm) return gm;
          wm = 1;
          let dd = sm(),
            Od = Vm(),
            md = rm(),
            Wd = cm(),
            Fd = im(),
            Rd = jm(),
            Xd = em();

          function Kd(hd, vd) {
            if (Array.isArray(hd)) return hd.map((dd => Kd(dd)));
            let {
              inputs: Qd,
              ...td
            } = hd;
            if (Qd) {
              vd = [];
              for (let dd of Qd) {
                let md = {
                  ...dd,
                  __proto__: Fd.prototype
                };
                md.map && (md.map = {
                  ...md.map,
                  __proto__: Od.prototype
                }), vd.push(md)
              }
            }
            if (td.nodes && (td.nodes = hd.nodes.map((dd => Kd(dd, vd)))), td.source) {
              let {
                inputId: dd,
                ...Od
              } = td.source;
              td.source = Od, null != dd && (td.source.input = vd[dd])
            }
            if ("root" === td.type) return new Rd(td);
            if ("decl" === td.type) return new dd(td);
            if ("rule" === td.type) return new Xd(td);
            if ("comment" === td.type) return new md(td);
            if ("atrule" === td.type) return new Wd(td);
            throw new Error("Unknown node type: " + hd.type)
          }
          return gm = Kd, Kd.default = Kd, gm
        }(),
        Kd = nm(),
        hd = Pm(),
        vd = rm(),
        Qd = cm(),
        td = zm(),
        od = im(),
        Nd = lm(),
        qd = Dm(),
        Hd = em(),
        yd = jm(),
        bd = Sm();

      function Td() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return 1 === Od.length && Array.isArray(Od[0]) && (Od = Od[0]), new Fd(Od)
      }
      return Td.plugin = function(dd, Od) {
        let md, Wd = !1;

        function Rd() {
          console && console.warn && !Wd && (Wd = !0, console.warn(dd + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(dd + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let md = Od(...arguments);
          return md.postcssPlugin = dd, md.postcssVersion = (new Fd).version, md
        }
        return Object.defineProperty(Rd, "postcss", {
          get: () => (md || (md = Rd()), md)
        }), Rd.process = function(dd, Od, md) {
          return Td([Rd(md)]).process(dd, Od)
        }, Rd
      }, Td.stringify = Rd, Td.parse = Nd, Td.fromJSON = Xd, Td.list = qd, Td.comment = dd => new vd(dd), Td.atRule = dd => new Qd(dd), Td.decl = dd => new Od(dd), Td.rule = dd => new Hd(dd), Td.root = dd => new yd(dd), Td.document = dd => new Kd(dd), Td.CssSyntaxError = dd, Td.Declaration = Od, Td.nG = Wd, Td.Processor = Fd, Td.Document = Kd, Td.Comment = vd, Td.Warning = hd, Td.AtRule = Qd, Td.Result = td, Td.Input = od, Td.Rule = Hd, Td.Root = yd, Td.Node = bd, md.registerPostcss(Td), am = Td, Td.default = Td, am
    }());
    km.stringify, km.fromJSON, km.plugin, km.parse, km.list, km.document, km.comment, km.atRule, km.rule, km.decl, km.root, km.CssSyntaxError, km.Declaration, km.nG, km.Processor, km.Document, km.Comment, km.Warning, km.AtRule, km.Result, km.Input, km.Rule, km.Root, km.Node;
    const fm = {
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

    function Mm(dd, Od) {
      const md = null == Od ? void 0 : Od.stylesWithHoverClass.get(dd);
      if (md) return md;
      let Wd = dd;
      try {
        Wd = km([oO, NO]).process(dd).css
      } catch (Fd) {
        console.warn("Failed to adapt css for replay", Fd)
      }
      return null == Od || Od.stylesWithHoverClass.set(dd, Wd), Wd
    }

    function dW() {
      return {
        stylesWithHoverClass: new Map
      }
    }
    const OW = "rrweb-snapshot.createSandboxedIframe() requires root to be connected to a document before creating a sandboxed iframe.",
      mW = new WeakSet;

    function WW(dd) {
      if (dd.UNSAFE_allowUnprotectedRebuild) return;
      const Od = dd.doc.defaultView;
      if (Od && (!mW.has(dd.doc) || ! function(dd) {
          if (!dd || "IFRAME" !== dd.tagName) return !1;
          if (!("sandbox" in dd)) return !1;
          const Od = Array.from(dd.sandbox);
          return 1 === Od.length && "allow-same-origin" === Od[0]
        }(Od.frameElement))) throw new Error("rrweb-snapshot.rebuild() cannot rebuild into an unprotected browser document. Use rebuildIntoSandboxedIframe() or set UNSAFE_allowUnprotectedRebuild: true only when you accept the script-execution risk.")
    }

    function FW(dd, Od, md, Wd) {
      const {
        doc: Fd,
        hackCss: Rd,
        cache: Xd
      } = Wd;
      dd.childNodes.length ? function(dd, Od, md, Wd) {
        const Fd = [];
        for (const Qd of dd.childNodes) Qd.type === hd.Text && Fd.push(Qd);
        const Rd = Od.split("/* rr_split */");
        for (; Rd.length > 1 && Rd.length > Fd.length;) Rd.splice(-2, 2, Rd.slice(-2).join(""));
        let Xd = "";
        md && (Xd = Mm(Rd.join(""), Wd));
        let Kd = 0,
          vd = -1;
        for (let hd = 0; hd < Fd.length && hd !== Rd.length; hd++) {
          const dd = Fd[hd];
          let Od = Rd[hd];
          const Wd = hd < Rd.length - 1 ? Rd[hd + 1] : null;
          if (md && Wd) {
            let dd = Kd,
              md = Wd.length;
            md = Math.min(md, 30);
            let Fd = !1;
            for (; md > 2; md--) {
              const Od = Wd.substring(0, md),
                Rd = Xd.substring(Kd).indexOf(Od);
              if (Fd = -1 !== Rd, Fd) {
                dd += Rd;
                break
              }
            }
            Fd || (dd += Od.length), Od = Xd.substring(Kd, dd), Kd = dd
          } else md && (Od = Xd.substring(Kd)); - 1 !== vd && (Od = Od.substring(vd)), Wd && (-1 !== vd || Od.endsWith("0p") && Wd.startsWith("x")) && (vd = Wd.indexOf("}"), -1 !== vd && (vd += 1, Od += Wd.substring(0, vd))), dd.textContent = Od
        }
      }(dd, md, Rd, Xd) : (Rd && (md = Mm(md, Xd)), Od.appendChild(Fd.createTextNode(md)))
    }

    function RW(dd, Od) {
      var md;
      const {
        doc: Wd,
        hackCss: Fd,
        cache: Rd
      } = Od;
      switch (dd.type) {
        case hd.Document:
          return Wd.implementation.createDocument(null, "", null);
        case hd.DocumentType:
          return Wd.implementation.createDocumentType(dd.name || "html", dd.publicId, dd.systemId);
        case hd.Element: {
          const Fd = function(dd) {
            let Od = fm[dd.tagName] ? fm[dd.tagName] : dd.tagName;
            return "link" === Od && dd.attributes._cssText && (Od = "style"), Od
          }(dd);
          let Rd;
          dd.isSVG ? Rd = Wd.createElementNS("http://www.w3.org/2000/svg", Fd) : (dd.isCustom && (null == (md = Wd.defaultView) ? void 0 : md.customElements) && !Wd.defaultView.customElements.get(dd.tagName) && Wd.defaultView.customElements.define(dd.tagName, class extends Wd.defaultView.HTMLElement {}), Rd = Wd.createElement(Fd));
          const Kd = {};
          for (const md in dd.attributes) {
            if (!Object.prototype.hasOwnProperty.call(dd.attributes, md)) continue;
            let hd = dd.attributes[md];
            if (("option" !== Fd || "selected" !== md || !1 !== hd) && null !== hd)
              if (!0 === hd && (hd = ""), md.startsWith("rr_")) Kd[md] = hd;
              else {
                if ("string" !== typeof hd);
                else {
                  if ("style" === Fd && "_cssText" === md) {
                    FW(dd, Rd, hd, Od);
                    continue
                  }
                  if ("textarea" === Fd && "value" === md) {
                    Rd.appendChild(Wd.createTextNode(hd)), dd.childNodes = [];
                    continue
                  }
                }
                try {
                  if (dd.isSVG && "xlink:href" === md) Rd.setAttributeNS("http://www.w3.org/1999/xlink", md, hd.toString());
                  else if ("onload" === md || "onclick" === md || "onmouse" === md.substring(0, 7)) Rd.setAttribute("_" + md, hd.toString());
                  else {
                    if ("meta" === Fd && "Content-Security-Policy" === dd.attributes["http-equiv"] && "content" === md) {
                      Rd.setAttribute("csp-content", hd.toString());
                      continue
                    }
                    "link" === Fd && ("preload" === dd.attributes.rel && "script" === dd.attributes.as || "modulepreload" === dd.attributes.rel) || "link" === Fd && "prefetch" === dd.attributes.rel && "string" === typeof dd.attributes.href && "js" === Vd(dd.attributes.href) || ("img" === Fd && dd.attributes.srcset && dd.attributes.rr_dataURL ? Rd.setAttribute("rrweb-original-srcset", dd.attributes.srcset) : Rd.setAttribute(md, hd.toString()))
                  }
                } catch (Xd) {}
              }
          }
          for (const Od in Kd) {
            const md = Kd[Od];
            if ("canvas" === Fd && "rr_dataURL" === Od) {
              const dd = Wd.createElement("img");
              dd.onload = () => {
                const Od = Rd.getContext("2d");
                Od && Od.drawImage(dd, 0, 0, dd.width, dd.height)
              }, dd.src = md.toString(), Rd.RRNodeType && (Rd.rr_dataURL = md.toString())
            } else if ("img" === Fd && "rr_dataURL" === Od) {
              const Od = Rd;
              Od.currentSrc.startsWith("data:") || (Od.setAttribute("rrweb-original-src", dd.attributes.src), Od.src = md.toString())
            }
            if ("rr_width" === Od) Rd.style.setProperty("width", md.toString());
            else if ("rr_height" === Od) Rd.style.setProperty("height", md.toString());
            else if ("rr_mediaCurrentTime" === Od && "number" === typeof md) Rd.currentTime = md;
            else if ("rr_mediaState" === Od) switch (md) {
              case "played":
                Rd.play().catch((dd => console.warn("media playback error", dd)));
                break;
              case "paused":
                Rd.pause()
            } else "rr_mediaPlaybackRate" === Od && "number" === typeof md ? Rd.playbackRate = md : "rr_mediaMuted" === Od && "boolean" === typeof md ? Rd.muted = md : "rr_mediaLoop" === Od && "boolean" === typeof md ? Rd.loop = md : "rr_mediaVolume" === Od && "number" === typeof md ? Rd.volume = md : "rr_open_mode" === Od && Rd.setAttribute("rr_open_mode", md)
          }
          if (dd.isShadowHost)
            if (Rd.shadowRoot)
              for (; Rd.shadowRoot.firstChild;) Rd.shadowRoot.removeChild(Rd.shadowRoot.firstChild);
            else Rd.attachShadow({
              mode: "open"
            });
          return "input" !== Fd && "textarea" !== Fd || Rd.setAttribute("autocomplete", "off"), Rd
        }
        case hd.Text:
          return dd.isStyle && Fd ? Wd.createTextNode(Mm(dd.textContent, Rd)) : Wd.createTextNode(dd.textContent);
        case hd.CDATA:
          return Wd.createCDATASection(dd.textContent);
        case hd.Comment:
          return Wd.createComment(dd.textContent);
        default:
          return null
      }
    }

    function XW(dd, Od) {
      const {
        doc: md,
        mirror: Wd,
        skipChild: Fd = !1,
        hackCss: Rd = !0,
        afterAppend: Xd,
        cache: Kd
      } = Od;
      if (Wd.has(dd.id)) {
        const Od = Wd.QFd(dd.id),
          md = Wd.getMeta(Od);
        if (Qd = dd, (vd = md) && Qd && vd.type === Qd.type && (vd.type === hd.Document ? vd.compatMode === Qd.compatMode : vd.type === hd.DocumentType ? vd.name === Qd.name && vd.publicId === Qd.publicId && vd.systemId === Qd.systemId : vd.type === hd.Comment || vd.type === hd.Text || vd.type === hd.CDATA ? vd.textContent === Qd.textContent : vd.type === hd.Element && vd.tagName === Qd.tagName && JSON.stringify(vd.attributes) === JSON.stringify(Qd.attributes) && vd.isSVG === Qd.isSVG && vd.needBlock === Qd.needBlock)) return Wd.QFd(dd.id)
      }
      var vd, Qd;
      let td = RW(dd, {
        doc: md,
        hackCss: Rd,
        cache: Kd
      });
      if (!td) return null;
      if (dd.rootId && Wd.QFd(dd.rootId) !== md && Wd.replace(dd.rootId, md), dd.type === hd.Document && (md.close(), md.open(), "BackCompat" === dd.compatMode && dd.childNodes && dd.childNodes[0].type !== hd.DocumentType && (dd.childNodes[0].type === hd.Element && "xmlns" in dd.childNodes[0].attributes && "http://www.w3.org/1999/xhtml" === dd.childNodes[0].attributes.xmlns ? md.write('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">') : md.write('<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">')), td = md), Wd.add(td, dd), (dd.type === hd.Document || dd.type === hd.Element) && !Fd)
        for (const od of dd.childNodes) {
          const Od = XW(od, {
            doc: md,
            mirror: Wd,
            skipChild: !1,
            hackCss: Rd,
            afterAppend: Xd,
            cache: Kd
          });
          if (Od) {
            if (od.isShadow && Yd(td) && td.shadowRoot) td.shadowRoot.appendChild(Od);
            else if (dd.type === hd.Document && od.type == hd.Element) {
              const dd = Od;
              let md = null;
              dd.childNodes.forEach((dd => {
                "BODY" === dd.nodeName && (md = dd)
              })), md ? (dd.removeChild(md), td.appendChild(Od), dd.appendChild(md)) : td.appendChild(Od)
            } else td.appendChild(Od);
            Xd && Xd(Od, od.id)
          } else console.warn("Failed to rebuild", od)
        }
      return td
    }

    function KW(dd, Od) {
      WW(Od);
      const {
        doc: md,
        onVisit: Wd,
        hackCss: Fd = !0,
        afterAppend: Rd,
        cache: Xd,
        mirror: Kd = new Ud
      } = Od, vd = XW(dd, {
        doc: md,
        mirror: Kd,
        skipChild: !1,
        hackCss: Fd,
        afterAppend: Rd,
        cache: Xd
      });
      return function(dd, Od) {
        for (const Wd of dd.getIds()) dd.has(Wd) && (md = dd.QFd(Wd), Od(md));
        var md
      }(Kd, (dd => {
        Wd && Wd(dd),
          function(dd, Od) {
            const md = Od.getMeta(dd);
            if ((null == md ? void 0 : md.type) !== hd.Element) return;
            const Wd = dd;
            for (const Fd in md.attributes) {
              if (!Object.prototype.hasOwnProperty.call(md.attributes, Fd) || !Fd.startsWith("rr_")) continue;
              const dd = md.attributes[Fd];
              "rr_scrollLeft" === Fd && (Wd.scrollLeft = dd), "rr_scrollTop" === Fd && (Wd.scrollTop = dd)
            }
          }(dd, Kd)
      })), vd
    }
    var hW = Object.defineProperty,
      vW = (dd, Od, md) => ((dd, Od, md) => Od in dd ? hW(dd, Od, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: md
      }) : dd[Od] = md)(dd, "symbol" !== typeof Od ? Od + "" : Od, md),
      QW = Object.defineProperty,
      tW = (dd, Od, md) => ((dd, Od, md) => Od in dd ? QW(dd, Od, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: md
      }) : dd[Od] = md)(dd, "symbol" !== typeof Od ? Od + "" : Od, md);
    Date.now().toString();
    let oW = class {
      constructor() {
        tW(this, "idNodeMap", new Map), tW(this, "nodeMetaMap", new WeakMap)
      }
      getId(dd) {
        var Od;
        if (!dd) return -1;
        return (null == (Od = this.getMeta(dd)) ? void 0 : Od.id) ?? -1
      }
      QFd(dd) {
        return this.idNodeMap.get(dd) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(dd) {
        return this.nodeMetaMap.get(dd) || null
      }
      removeNodeFromMap(dd) {
        const Od = this.getId(dd);
        this.idNodeMap.delete(Od), dd.childNodes && dd.childNodes.forEach((dd => this.removeNodeFromMap(dd)))
      }
      has(dd) {
        return this.idNodeMap.has(dd)
      }
      hasNode(dd) {
        return this.nodeMetaMap.has(dd)
      }
      add(dd, Od) {
        const md = Od.id;
        this.idNodeMap.set(md, dd), this.nodeMetaMap.set(dd, Od)
      }
      replace(dd, Od) {
        const md = this.QFd(dd);
        if (md) {
          const dd = this.nodeMetaMap.get(md);
          dd && this.nodeMetaMap.set(Od, dd)
        }
        this.idNodeMap.set(dd, Od)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    };

    function NW(dd) {
      return dd && dd.__esModule && Object.prototype.hasOwnProperty.call(dd, "default") ? dd.default : dd
    }

    function qW(dd) {
      if (dd.__esModule) return dd;
      var Od = dd.default;
      if ("function" == typeof Od) {
        var md = function dd() {
          return this instanceof dd ? Reflect.construct(Od, arguments, this.constructor) : Od.apply(this, arguments)
        };
        md.prototype = Od.prototype
      } else md = {};
      return Object.defineProperty(md, "__esModule", {
        value: !0
      }), Object.keys(dd).forEach((function(Od) {
        var Wd = Object.getOwnPropertyDescriptor(dd, Od);
        Object.defineProperty(md, Od, Wd.get ? Wd : {
          enumerable: !0,
          get: function() {
            return dd[Od]
          }
        })
      })), md
    }
    var HW, yW = {
      exports: {}
    };

    function bW() {
      if (HW) return yW.exports;
      HW = 1;
      var dd = String,
        Od = function() {
          return {
            isColorSupported: !1,
            reset: dd,
            bold: dd,
            dim: dd,
            italic: dd,
            underline: dd,
            inverse: dd,
            hidden: dd,
            strikethrough: dd,
            black: dd,
            red: dd,
            green: dd,
            yellow: dd,
            blue: dd,
            magenta: dd,
            cyan: dd,
            white: dd,
            gray: dd,
            bgBlack: dd,
            bgRed: dd,
            bgGreen: dd,
            bgYellow: dd,
            bgBlue: dd,
            bgMagenta: dd,
            bgCyan: dd,
            bgWhite: dd
          }
        };
      return yW.exports = Od(), yW.exports.createColors = Od, yW.exports
    }
    const TW = qW(Object.freeze(Object.defineProperty({
      __proto__: null,
      default: {}
    }, Symbol.toStringTag, {
      value: "Module"
    })));
    var pW, YW;

    function gW() {
      if (YW) return pW;
      YW = 1;
      let dd = bW(),
        Od = TW;
      class md extends Error {
        constructor(dd, Od, Wd, Fd, Rd, Xd) {
          super(dd), this.name = "CssSyntaxError", this.reason = dd, Rd && (this.file = Rd), Fd && (this.source = Fd), Xd && (this.plugin = Xd), "undefined" !== typeof Od && "undefined" !== typeof Wd && ("number" === typeof Od ? (this.line = Od, this.column = Wd) : (this.line = Od.line, this.column = Od.column, this.endLine = Wd.line, this.endColumn = Wd.column)), this.setMessage(), Error.captureStackTrace && Error.captureStackTrace(this, md)
        }
        setMessage() {
          this.message = this.plugin ? this.plugin + ": " : "", this.message += this.file ? this.file : "<css input>", "undefined" !== typeof this.line && (this.message += ":" + this.line + ":" + this.column), this.message += ": " + this.reason
        }
        showSourceCode(md) {
          if (!this.source) return "";
          let Wd = this.source;
          null == md && (md = dd.isColorSupported), Od && md && (Wd = Od(Wd));
          let Fd, Rd, Xd = Wd.split(/\r?\n/),
            Kd = Math.max(this.line - 3, 0),
            hd = Math.min(this.line + 2, Xd.length),
            vd = String(hd).length;
          if (md) {
            let {
              bold: Od,
              gray: md,
              red: Wd
            } = dd.createColors(!0);
            Fd = dd => Od(Wd(dd)), Rd = dd => md(dd)
          } else Fd = Rd = dd => dd;
          return Xd.slice(Kd, hd).map(((dd, Od) => {
            let md = Kd + 1 + Od,
              Wd = " " + (" " + md).slice(-vd) + " | ";
            if (md === this.line) {
              let Od = Rd(Wd.replace(/\d/g, " ")) + dd.slice(0, this.column - 1).replace(/[^\t]/g, " ");
              return Fd(">") + Rd(Wd) + dd + "\n " + Od + Fd("^")
            }
            return " " + Rd(Wd) + dd
          })).join("\n")
        }
        toString() {
          let dd = this.showSourceCode();
          return dd && (dd = "\n\n" + dd + "\n"), this.name + ": " + this.message + dd
        }
      }
      return pW = md, md.default = md, pW
    }
    var wW, aW, EW, JW, UW, xW, BW, SW, sW, uW, VW, iW, AW, rW, GW, nW, LW, PW, zW, cW, jW, DW, eW, IW, lW, CW, ZW, kW, fW, MW, dF, OF, mF, WF, FF, RF, XF, KF, hF, vF, QF, tF, oF, NF, qF, HF, yF, bF, TF, pF, YF, gF, wF, aF = {};

    function EF() {
      return wW || (wW = 1, aF.isClean = Symbol("isClean"), aF.my = Symbol("my")), aF
    }

    function JF() {
      if (EW) return aW;
      EW = 1;
      const dd = {
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
      class Od {
        constructor(dd) {
          this.builder = dd
        }
        atrule(dd, Od) {
          let md = "@" + dd.name,
            Wd = dd.params ? this.rawValue(dd, "params") : "";
          if ("undefined" !== typeof dd.raws.afterName ? md += dd.raws.afterName : Wd && (md += " "), dd.nodes) this.block(dd, md + Wd);
          else {
            let Fd = (dd.raws.between || "") + (Od ? ";" : "");
            this.builder(md + Wd + Fd, dd)
          }
        }
        beforeAfter(dd, Od) {
          let md;
          md = "decl" === dd.type ? this.raw(dd, null, "beforeDecl") : "comment" === dd.type ? this.raw(dd, null, "beforeComment") : "before" === Od ? this.raw(dd, null, "beforeRule") : this.raw(dd, null, "beforeClose");
          let Wd = dd.parent,
            Fd = 0;
          for (; Wd && "root" !== Wd.type;) Fd += 1, Wd = Wd.parent;
          if (md.includes("\n")) {
            let Od = this.raw(dd, null, "indent");
            if (Od.length)
              for (let dd = 0; dd < Fd; dd++) md += Od
          }
          return md
        }
        block(dd, Od) {
          let md, Wd = this.raw(dd, "between", "beforeOpen");
          this.builder(Od + Wd + "{", dd, "start"), dd.nodes && dd.nodes.length ? (this.body(dd), md = this.raw(dd, "after")) : md = this.raw(dd, "after", "emptyBody"), md && this.builder(md), this.builder("}", dd, "end")
        }
        body(dd) {
          let Od = dd.nodes.length - 1;
          for (; Od > 0 && "comment" === dd.nodes[Od].type;) Od -= 1;
          let md = this.raw(dd, "semicolon");
          for (let Wd = 0; Wd < dd.nodes.length; Wd++) {
            let Fd = dd.nodes[Wd],
              Rd = this.raw(Fd, "before");
            Rd && this.builder(Rd), this.stringify(Fd, Od !== Wd || md)
          }
        }
        comment(dd) {
          let Od = this.raw(dd, "left", "commentLeft"),
            md = this.raw(dd, "right", "commentRight");
          this.builder("/*" + Od + dd.text + md + "*/", dd)
        }
        decl(dd, Od) {
          let md = this.raw(dd, "between", "colon"),
            Wd = dd.prop + md + this.rawValue(dd, "value");
          dd.important && (Wd += dd.raws.important || " !important"), Od && (Wd += ";"), this.builder(Wd, dd)
        }
        document(dd) {
          this.body(dd)
        }
        raw(Od, md, Wd) {
          let Fd;
          if (Wd || (Wd = md), md && (Fd = Od.raws[md], "undefined" !== typeof Fd)) return Fd;
          let Rd = Od.parent;
          if ("before" === Wd) {
            if (!Rd || "root" === Rd.type && Rd.first === Od) return "";
            if (Rd && "document" === Rd.type) return ""
          }
          if (!Rd) return dd[Wd];
          let Xd = Od.root();
          if (Xd.rawCache || (Xd.rawCache = {}), "undefined" !== typeof Xd.rawCache[Wd]) return Xd.rawCache[Wd];
          if ("before" === Wd || "after" === Wd) return this.beforeAfter(Od, Wd);
          {
            let dd = "raw" + ((Kd = Wd)[0].toUpperCase() + Kd.slice(1));
            this[dd] ? Fd = this[dd](Xd, Od) : Xd.walk((dd => {
              if (Fd = dd.raws[md], "undefined" !== typeof Fd) return !1
            }))
          }
          var Kd;
          return "undefined" === typeof Fd && (Fd = dd[Wd]), Xd.rawCache[Wd] = Fd, Fd
        }
        rawBeforeClose(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && dd.nodes.length > 0 && "undefined" !== typeof dd.raws.after) return Od = dd.raws.after, Od.includes("\n") && (Od = Od.replace(/[^\n]+$/, "")), !1
          })), Od && (Od = Od.replace(/\S/g, "")), Od
        }
        rawBeforeComment(dd, Od) {
          let md;
          return dd.walkComments((dd => {
            if ("undefined" !== typeof dd.raws.before) return md = dd.raws.before, md.includes("\n") && (md = md.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof md ? md = this.raw(Od, null, "beforeDecl") : md && (md = md.replace(/\S/g, "")), md
        }
        rawBeforeDecl(dd, Od) {
          let md;
          return dd.walkDecls((dd => {
            if ("undefined" !== typeof dd.raws.before) return md = dd.raws.before, md.includes("\n") && (md = md.replace(/[^\n]+$/, "")), !1
          })), "undefined" === typeof md ? md = this.raw(Od, null, "beforeRule") : md && (md = md.replace(/\S/g, "")), md
        }
        rawBeforeOpen(dd) {
          let Od;
          return dd.walk((dd => {
            if ("decl" !== dd.type && (Od = dd.raws.between, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawBeforeRule(dd) {
          let Od;
          return dd.walk((md => {
            if (md.nodes && (md.parent !== dd || dd.first !== md) && "undefined" !== typeof md.raws.before) return Od = md.raws.before, Od.includes("\n") && (Od = Od.replace(/[^\n]+$/, "")), !1
          })), Od && (Od = Od.replace(/\S/g, "")), Od
        }
        rawColon(dd) {
          let Od;
          return dd.walkDecls((dd => {
            if ("undefined" !== typeof dd.raws.between) return Od = dd.raws.between.replace(/[^\s:]/g, ""), !1
          })), Od
        }
        rawEmptyBody(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && 0 === dd.nodes.length && (Od = dd.raws.after, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawIndent(dd) {
          if (dd.raws.indent) return dd.raws.indent;
          let Od;
          return dd.walk((md => {
            let Wd = md.parent;
            if (Wd && Wd !== dd && Wd.parent && Wd.parent === dd && "undefined" !== typeof md.raws.before) {
              let dd = md.raws.before.split("\n");
              return Od = dd[dd.length - 1], Od = Od.replace(/\S/g, ""), !1
            }
          })), Od
        }
        rawSemicolon(dd) {
          let Od;
          return dd.walk((dd => {
            if (dd.nodes && dd.nodes.length && "decl" === dd.last.type && (Od = dd.raws.semicolon, "undefined" !== typeof Od)) return !1
          })), Od
        }
        rawValue(dd, Od) {
          let md = dd[Od],
            Wd = dd.raws[Od];
          return Wd && Wd.value === md ? Wd.raw : md
        }
        root(dd) {
          this.body(dd), dd.raws.after && this.builder(dd.raws.after)
        }
        rule(dd) {
          this.block(dd, this.rawValue(dd, "selector")), dd.raws.ownSemicolon && this.builder(dd.raws.ownSemicolon, dd, "end")
        }
        stringify(dd, Od) {
          if (!this[dd.type]) throw new Error("Unknown AST node type " + dd.type + ". Maybe you need to change PostCSS stringifier.");
          this[dd.type](dd, Od)
        }
      }
      return aW = Od, Od.default = Od, aW
    }

    function UF() {
      if (UW) return JW;
      UW = 1;
      let dd = JF();

      function Od(Od, md) {
        new dd(md).stringify(Od)
      }
      return JW = Od, Od.default = Od, JW
    }

    function xF() {
      if (BW) return xW;
      BW = 1;
      let {
        isClean: dd,
        my: Od
      } = EF(), md = gW(), Wd = JF(), Fd = UF();

      function Rd(dd, Od) {
        let md = new dd.constructor;
        for (let Wd in dd) {
          if (!Object.prototype.hasOwnProperty.call(dd, Wd)) continue;
          if ("proxyCache" === Wd) continue;
          let Fd = dd[Wd],
            Xd = typeof Fd;
          "parent" === Wd && "object" === Xd ? Od && (md[Wd] = Od) : "source" === Wd ? md[Wd] = Fd : Array.isArray(Fd) ? md[Wd] = Fd.map((dd => Rd(dd, md))) : ("object" === Xd && null !== Fd && (Fd = Rd(Fd)), md[Wd] = Fd)
        }
        return md
      }
      class Xd {
        constructor() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          this.raws = {}, this[dd] = !1, this[Od] = !0;
          for (let dd in md)
            if ("nodes" === dd) {
              this.nodes = [];
              for (let Od of md[dd]) "function" === typeof Od.clone ? this.append(Od.clone()) : this.append(Od)
            } else this[dd] = md[dd]
        }
        addToError(dd) {
          if (dd.postcssNode = this, dd.stack && this.source && /\n\s{4}at /.test(dd.stack)) {
            let Od = this.source;
            dd.stack = dd.stack.replace(/\n\s{4}at /, `$&${Od.input.from}:${Od.start.line}:${Od.start.column}$&`)
          }
          return dd
        }
        after(dd) {
          return this.parent.insertAfter(this, dd), this
        }
        assign() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          for (let Od in dd) this[Od] = dd[Od];
          return this
        }
        before(dd) {
          return this.parent.insertBefore(this, dd), this
        }
        cleanRaws(dd) {
          delete this.raws.before, delete this.raws.after, dd || delete this.raws.between
        }
        clone() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = Rd(this);
          for (let md in dd) Od[md] = dd[md];
          return Od
        }
        cloneAfter() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = this.clone(dd);
          return this.parent.insertAfter(this, Od), Od
        }
        cloneBefore() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            Od = this.clone(dd);
          return this.parent.insertBefore(this, Od), Od
        }
        error(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.source) {
            let {
              end: md,
              start: Wd
            } = this.rangeBy(Od);
            return this.source.input.error(dd, {
              column: Wd.column,
              line: Wd.line
            }, {
              column: md.column,
              line: md.line
            }, Od)
          }
          return new md(dd)
        }
        getProxyProcessor() {
          return {
            get: (dd, Od) => "proxyOf" === Od ? dd : "root" === Od ? () => dd.root().toProxy() : dd[Od],
            set: (dd, Od, md) => (dd[Od] === md || (dd[Od] = md, "prop" !== Od && "value" !== Od && "name" !== Od && "params" !== Od && "important" !== Od && "text" !== Od || dd.markDirty()), !0)
          }
        }
        markDirty() {
          if (this[dd]) {
            this[dd] = !1;
            let Od = this;
            for (; Od = Od.parent;) Od[dd] = !1
          }
        }
        next() {
          if (!this.parent) return;
          let dd = this.parent.index(this);
          return this.parent.nodes[dd + 1]
        }
        positionBy(dd, Od) {
          let md = this.source.start;
          if (dd.index) md = this.positionInside(dd.index, Od);
          else if (dd.word) {
            let Wd = (Od = this.toString()).indexOf(dd.word); - 1 !== Wd && (md = this.positionInside(Wd, Od))
          }
          return md
        }
        positionInside(dd, Od) {
          let md = Od || this.toString(),
            Wd = this.source.start.column,
            Fd = this.source.start.line;
          for (let Rd = 0; Rd < dd; Rd++) "\n" === md[Rd] ? (Wd = 1, Fd += 1) : Wd += 1;
          return {
            column: Wd,
            line: Fd
          }
        }
        prev() {
          if (!this.parent) return;
          let dd = this.parent.index(this);
          return this.parent.nodes[dd - 1]
        }
        rangeBy(dd) {
          let Od = {
              column: this.source.start.column,
              line: this.source.start.line
            },
            md = this.source.end ? {
              column: this.source.end.column + 1,
              line: this.source.end.line
            } : {
              column: Od.column + 1,
              line: Od.line
            };
          if (dd.word) {
            let Wd = this.toString(),
              Fd = Wd.indexOf(dd.word); - 1 !== Fd && (Od = this.positionInside(Fd, Wd), md = this.positionInside(Fd + dd.word.length, Wd))
          } else dd.start ? Od = {
            column: dd.start.column,
            line: dd.start.line
          } : dd.index && (Od = this.positionInside(dd.index)), dd.end ? md = {
            column: dd.end.column,
            line: dd.end.line
          } : "number" === typeof dd.endIndex ? md = this.positionInside(dd.endIndex) : dd.index && (md = this.positionInside(dd.index + 1));
          return (md.line < Od.line || md.line === Od.line && md.column <= Od.column) && (md = {
            column: Od.column + 1,
            line: Od.line
          }), {
            end: md,
            start: Od
          }
        }
        raw(dd, Od) {
          return (new Wd).raw(this, dd, Od)
        }
        remove() {
          return this.parent && this.parent.removeChild(this), this.parent = void 0, this
        }
        replaceWith() {
          if (this.parent) {
            let Wd = this,
              Fd = !1;
            for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
            for (let dd of Od) dd === this ? Fd = !0 : Fd ? (this.parent.insertAfter(Wd, dd), Wd = dd) : this.parent.insertBefore(Wd, dd);
            Fd || this.remove()
          }
          return this
        }
        root() {
          let dd = this;
          for (; dd.parent && "document" !== dd.parent.type;) dd = dd.parent;
          return dd
        }
        toJSON(dd, Od) {
          let md = {},
            Wd = null == Od;
          Od = Od || new Map;
          let Fd = 0;
          for (let Rd in this) {
            if (!Object.prototype.hasOwnProperty.call(this, Rd)) continue;
            if ("parent" === Rd || "proxyCache" === Rd) continue;
            let dd = this[Rd];
            if (Array.isArray(dd)) md[Rd] = dd.map((dd => "object" === typeof dd && dd.toJSON ? dd.toJSON(null, Od) : dd));
            else if ("object" === typeof dd && dd.toJSON) md[Rd] = dd.toJSON(null, Od);
            else if ("source" === Rd) {
              let Wd = Od.get(dd.input);
              null == Wd && (Wd = Fd, Od.set(dd.input, Fd), Fd++), md[Rd] = {
                end: dd.end,
                inputId: Wd,
                start: dd.start
              }
            } else md[Rd] = dd
          }
          return Wd && (md.inputs = [...Od.keys()].map((dd => dd.toJSON()))), md
        }
        toProxy() {
          return this.proxyCache || (this.proxyCache = new Proxy(this, this.getProxyProcessor())), this.proxyCache
        }
        toString() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Fd;
          dd.stringify && (dd = dd.stringify);
          let Od = "";
          return dd(this, (dd => {
            Od += dd
          })), Od
        }
        warn(dd, Od, md) {
          let Wd = {
            node: this
          };
          for (let Fd in md) Wd[Fd] = md[Fd];
          return dd.warn(Od, Wd)
        }
        get proxyOf() {
          return this
        }
      }
      return xW = Xd, Xd.default = Xd, xW
    }

    function BF() {
      if (sW) return SW;
      sW = 1;
      let dd = xF();
      class Od extends dd {
        constructor(dd) {
          dd && "undefined" !== typeof dd.value && "string" !== typeof dd.value && (dd = {
            ...dd,
            value: String(dd.value)
          }), super(dd), this.type = "decl"
        }
        get variable() {
          return this.prop.startsWith("--") || "$" === this.prop[0]
        }
      }
      return SW = Od, Od.default = Od, SW
    }

    function SF() {
      if (VW) return uW;
      VW = 1;
      return uW = {
        nanoid: function() {
          let dd = "",
            Od = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 21;
          for (; Od--;) dd += "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict" [64 * Math.random() | 0];
          return dd
        },
        customAlphabet: function(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 21;
          return function() {
            let md = "",
              Wd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Od;
            for (; Wd--;) md += dd[Math.random() * dd.length | 0];
            return md
          }
        }
      }, uW
    }

    function sF() {
      if (AW) return iW;
      AW = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = TW, {
        existsSync: md,
        readFileSync: Wd
      } = TW, {
        dirname: Fd,
        join: Rd
      } = TW;
      class Xd {
        constructor(dd, Od) {
          if (!1 === Od.map) return;
          this.loadAnnotation(dd), this.inline = this.startWith(this.annotation, "data:");
          let md = Od.map ? Od.map.prev : void 0,
            Wd = this.loadMap(Od.from, md);
          !this.mapFile && Od.from && (this.mapFile = Od.from), this.mapFile && (this.root = Fd(this.mapFile)), Wd && (this.text = Wd)
        }
        consumer() {
          return this.consumerCache || (this.consumerCache = new dd(this.text)), this.consumerCache
        }
        decodeInline(dd) {
          if (/^data:application\/json;charset=utf-?8,/.test(dd) || /^data:application\/json,/.test(dd)) return decodeURIComponent(dd.substr(RegExp.lastMatch.length));
          if (/^data:application\/json;charset=utf-?8;base64,/.test(dd) || /^data:application\/json;base64,/.test(dd)) return Od = dd.substr(RegExp.lastMatch.length), Buffer ? Buffer.from(Od, "base64").toString() : window.atob(Od);
          var Od;
          let md = dd.match(/data:application\/json;([^,]+),/)[1];
          throw new Error("Unsupported source map encoding " + md)
        }
        getAnnotationURL(dd) {
          return dd.replace(/^\/\*\s*# sourceMappingURL=/, "").trim()
        }
        isMap(dd) {
          return "object" === typeof dd && ("string" === typeof dd.mappings || "string" === typeof dd._mappings || Array.isArray(dd.sections))
        }
        loadAnnotation(dd) {
          let Od = dd.match(/\/\*\s*# sourceMappingURL=/gm);
          if (!Od) return;
          let md = dd.lastIndexOf(Od.pop()),
            Wd = dd.indexOf("*/", md);
          md > -1 && Wd > -1 && (this.annotation = this.getAnnotationURL(dd.substring(md, Wd)))
        }
        loadFile(dd) {
          if (this.root = Fd(dd), md(dd)) return this.mapFile = dd, Wd(dd, "utf-8").toString().trim()
        }
        loadMap(md, Wd) {
          if (!1 === Wd) return !1;
          if (Wd) {
            if ("string" === typeof Wd) return Wd;
            if ("function" !== typeof Wd) {
              if (Wd instanceof dd) return Od.fromSourceMap(Wd).toString();
              if (Wd instanceof Od) return Wd.toString();
              if (this.isMap(Wd)) return JSON.stringify(Wd);
              throw new Error("Unsupported previous source map format: " + Wd.toString())
            } {
              let dd = Wd(md);
              if (dd) {
                let Od = this.loadFile(dd);
                if (!Od) throw new Error("Unable to load previous source map: " + dd.toString());
                return Od
              }
            }
          } else {
            if (this.inline) return this.decodeInline(this.annotation);
            if (this.annotation) {
              let dd = this.annotation;
              return md && (dd = Rd(Fd(md), dd)), this.loadFile(dd)
            }
          }
        }
        startWith(dd, Od) {
          return !!dd && dd.substr(0, Od.length) === Od
        }
        withContent() {
          return !!(this.consumer().sourcesContent && this.consumer().sourcesContent.length > 0)
        }
      }
      return iW = Xd, Xd.default = Xd, iW
    }

    function uF() {
      if (GW) return rW;
      GW = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = TW, {
        fileURLToPath: md,
        pathToFileURL: Wd
      } = TW, {
        isAbsolute: Fd,
        resolve: Rd
      } = TW, {
        nanoid: Xd
      } = SF(), Kd = TW, hd = gW(), vd = sF(), Qd = Symbol("fromOffsetCache"), td = Boolean(dd && Od), od = Boolean(Rd && Fd);
      class Nd {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (null === dd || "undefined" === typeof dd || "object" === typeof dd && !dd.toString) throw new Error(`PostCSS received ${dd} instead of CSS string`);
          if (this.css = dd.toString(), "\ufeff" === this.css[0] || "\ufffe" === this.css[0] ? (this.hasBOM = !0, this.css = this.css.slice(1)) : this.hasBOM = !1, Od.from && (!od || /^\w+:\/\//.test(Od.from) || Fd(Od.from) ? this.file = Od.from : this.file = Rd(Od.from)), od && td) {
            let dd = new vd(this.css, Od);
            if (dd.text) {
              this.map = dd;
              let Od = dd.consumer().file;
              !this.file && Od && (this.file = this.mapResolve(Od))
            }
          }
          this.file || (this.id = "<input css " + Xd(6) + ">"), this.map && (this.map.file = this.from)
        }
        error(dd, Od, md) {
          let Fd, Rd, Xd, Kd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
          if (Od && "object" === typeof Od) {
            let dd = Od,
              Wd = md;
            if ("number" === typeof dd.offset) {
              let Wd = this.fromOffset(dd.offset);
              Od = Wd.line, md = Wd.col
            } else Od = dd.line, md = dd.column;
            if ("number" === typeof Wd.offset) {
              let dd = this.fromOffset(Wd.offset);
              Rd = dd.line, Xd = dd.col
            } else Rd = Wd.line, Xd = Wd.column
          } else if (!md) {
            let dd = this.fromOffset(Od);
            Od = dd.line, md = dd.col
          }
          let vd = this.origin(Od, md, Rd, Xd);
          return Fd = vd ? new hd(dd, void 0 === vd.endLine ? vd.line : {
            column: vd.column,
            line: vd.line
          }, void 0 === vd.endLine ? vd.column : {
            column: vd.endColumn,
            line: vd.endLine
          }, vd.source, vd.file, Kd.plugin) : new hd(dd, void 0 === Rd ? Od : {
            column: md,
            line: Od
          }, void 0 === Rd ? md : {
            column: Xd,
            line: Rd
          }, this.css, this.file, Kd.plugin), Fd.input = {
            column: md,
            endColumn: Xd,
            endLine: Rd,
            line: Od,
            source: this.css
          }, this.file && (Wd && (Fd.input.url = Wd(this.file).toString()), Fd.input.file = this.file), Fd
        }
        fromOffset(dd) {
          let Od, md;
          if (this[Qd]) md = this[Qd];
          else {
            let dd = this.css.split("\n");
            md = new Array(dd.length);
            let Od = 0;
            for (let Wd = 0, Fd = dd.length; Wd < Fd; Wd++) md[Wd] = Od, Od += dd[Wd].length + 1;
            this[Qd] = md
          }
          Od = md[md.length - 1];
          let Wd = 0;
          if (dd >= Od) Wd = md.length - 1;
          else {
            let Od, Fd = md.length - 2;
            for (; Wd < Fd;)
              if (Od = Wd + (Fd - Wd >> 1), dd < md[Od]) Fd = Od - 1;
              else {
                if (!(dd >= md[Od + 1])) {
                  Wd = Od;
                  break
                }
                Wd = Od + 1
              }
          }
          return {
            col: dd - md[Wd] + 1,
            line: Wd + 1
          }
        }
        mapResolve(dd) {
          return /^\w+:\/\//.test(dd) ? dd : Rd(this.map.consumer().sourceRoot || this.map.root || ".", dd)
        }
        origin(dd, Od, Rd, Xd) {
          if (!this.map) return !1;
          let Kd, hd, vd = this.map.consumer(),
            Qd = vd.originalPositionFor({
              column: Od,
              line: dd
            });
          if (!Qd.source) return !1;
          "number" === typeof Rd && (Kd = vd.originalPositionFor({
            column: Xd,
            line: Rd
          })), hd = Fd(Qd.source) ? Wd(Qd.source) : new URL(Qd.source, this.map.consumer().sourceRoot || Wd(this.map.mapFile));
          let td = {
            column: Qd.column,
            endColumn: Kd && Kd.column,
            endLine: Kd && Kd.line,
            line: Qd.line,
            url: hd.toString()
          };
          if ("file:" === hd.protocol) {
            if (!md) throw new Error("file: protocol is not available in this PostCSS build");
            td.file = md(hd)
          }
          let od = vd.sourceContentFor(Qd.source);
          return od && (td.source = od), td
        }
        toJSON() {
          let dd = {};
          for (let Od of ["hasBOM", "css", "file", "id"]) null != this[Od] && (dd[Od] = this[Od]);
          return this.map && (dd.map = {
            ...this.map
          }, dd.map.consumerCache && (dd.map.consumerCache = void 0)), dd
        }
        get from() {
          return this.file || this.id
        }
      }
      return rW = Nd, Nd.default = Nd, Kd && Kd.registerInput && Kd.registerInput(Nd), rW
    }

    function VF() {
      if (LW) return nW;
      LW = 1;
      let {
        SourceMapConsumer: dd,
        SourceMapGenerator: Od
      } = TW, {
        dirname: md,
        relative: Wd,
        resolve: Fd,
        sep: Rd
      } = TW, {
        pathToFileURL: Xd
      } = TW, Kd = uF(), hd = Boolean(dd && Od), vd = Boolean(md && Fd && Wd && Rd);
      return nW = class {
        constructor(dd, Od, md, Wd) {
          this.stringify = dd, this.mapOpts = md.map || {}, this.root = Od, this.opts = md, this.css = Wd, this.originalCSS = Wd, this.usesFileUrls = !this.mapOpts.from && this.mapOpts.absolute, this.memoizedFileURLs = new Map, this.memoizedPaths = new Map, this.memoizedURLs = new Map
        }
        addAnnotation() {
          let dd;
          dd = this.isInline() ? "data:application/json;base64," + this.toBase64(this.map.toString()) : "string" === typeof this.mapOpts.annotation ? this.mapOpts.annotation : "function" === typeof this.mapOpts.annotation ? this.mapOpts.annotation(this.opts.to, this.root) : this.outputFile() + ".map";
          let Od = "\n";
          this.css.includes("\r\n") && (Od = "\r\n"), this.css += Od + "/*# sourceMappingURL=" + dd + " */"
        }
        applyPrevMaps() {
          for (let Od of this.previous()) {
            let Wd, Fd = this.toUrl(this.path(Od.file)),
              Rd = Od.root || md(Od.file);
            !1 === this.mapOpts.sourcesContent ? (Wd = new dd(Od.text), Wd.sourcesContent && (Wd.sourcesContent = null)) : Wd = Od.consumer(), this.map.applySourceMap(Wd, Fd, this.toUrl(this.path(Rd)))
          }
        }
        clearAnnotation() {
          if (!1 !== this.mapOpts.annotation)
            if (this.root) {
              let dd;
              for (let Od = this.root.nodes.length - 1; Od >= 0; Od--) dd = this.root.nodes[Od], "comment" === dd.type && 0 === dd.text.indexOf("# sourceMappingURL=") && this.root.removeChild(Od)
            } else this.css && (this.css = this.css.replace(/\n*?\/\*#[\S\s]*?\*\/$/gm, ""))
        }
        generate() {
          if (this.clearAnnotation(), vd && hd && this.isMap()) return this.generateMap();
          {
            let dd = "";
            return this.stringify(this.root, (Od => {
              dd += Od
            })), [dd]
          }
        }
        generateMap() {
          if (this.root) this.generateString();
          else if (1 === this.previous().length) {
            let dd = this.previous()[0].consumer();
            dd.file = this.outputFile(), this.map = Od.fromSourceMap(dd, {
              ignoreInvalidMapping: !0
            })
          } else this.map = new Od({
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
          this.css = "", this.map = new Od({
            file: this.outputFile(),
            ignoreInvalidMapping: !0
          });
          let dd, md, Wd = 1,
            Fd = 1,
            Rd = "<no source>",
            Xd = {
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
          this.stringify(this.root, ((Od, Kd, hd) => {
            if (this.css += Od, Kd && "end" !== hd && (Xd.generated.line = Wd, Xd.generated.column = Fd - 1, Kd.source && Kd.source.start ? (Xd.source = this.sourcePath(Kd), Xd.original.line = Kd.source.start.line, Xd.original.column = Kd.source.start.column - 1, this.map.addMapping(Xd)) : (Xd.source = Rd, Xd.original.line = 1, Xd.original.column = 0, this.map.addMapping(Xd))), dd = Od.match(/\n/g), dd ? (Wd += dd.length, md = Od.lastIndexOf("\n"), Fd = Od.length - md) : Fd += Od.length, Kd && "start" !== hd) {
              let dd = Kd.parent || {
                raws: {}
              };
              ("decl" === Kd.type || "atrule" === Kd.type && !Kd.nodes) && Kd === dd.last && !dd.raws.semicolon || (Kd.source && Kd.source.end ? (Xd.source = this.sourcePath(Kd), Xd.original.line = Kd.source.end.line, Xd.original.column = Kd.source.end.column - 1, Xd.generated.line = Wd, Xd.generated.column = Fd - 2, this.map.addMapping(Xd)) : (Xd.source = Rd, Xd.original.line = 1, Xd.original.column = 0, Xd.generated.line = Wd, Xd.generated.column = Fd - 1, this.map.addMapping(Xd)))
            }
          }))
        }
        isAnnotation() {
          return !!this.isInline() || ("undefined" !== typeof this.mapOpts.annotation ? this.mapOpts.annotation : !this.previous().length || this.previous().some((dd => dd.annotation)))
        }
        isInline() {
          if ("undefined" !== typeof this.mapOpts.inline) return this.mapOpts.inline;
          let dd = this.mapOpts.annotation;
          return ("undefined" === typeof dd || !0 === dd) && (!this.previous().length || this.previous().some((dd => dd.inline)))
        }
        isMap() {
          return "undefined" !== typeof this.opts.map ? !!this.opts.map : this.previous().length > 0
        }
        isSourcesContent() {
          return "undefined" !== typeof this.mapOpts.sourcesContent ? this.mapOpts.sourcesContent : !this.previous().length || this.previous().some((dd => dd.withContent()))
        }
        outputFile() {
          return this.opts.to ? this.path(this.opts.to) : this.opts.from ? this.path(this.opts.from) : "to.css"
        }
        path(dd) {
          if (this.mapOpts.absolute) return dd;
          if (60 === dd.charCodeAt(0)) return dd;
          if (/^\w+:\/\//.test(dd)) return dd;
          let Od = this.memoizedPaths.get(dd);
          if (Od) return Od;
          let Rd = this.opts.to ? md(this.opts.to) : ".";
          "string" === typeof this.mapOpts.annotation && (Rd = md(Fd(Rd, this.mapOpts.annotation)));
          let Xd = Wd(Rd, dd);
          return this.memoizedPaths.set(dd, Xd), Xd
        }
        previous() {
          if (!this.previousMaps)
            if (this.previousMaps = [], this.root) this.root.walk((dd => {
              if (dd.source && dd.source.input.map) {
                let Od = dd.source.input.map;
                this.previousMaps.includes(Od) || this.previousMaps.push(Od)
              }
            }));
            else {
              let dd = new Kd(this.originalCSS, this.opts);
              dd.map && this.previousMaps.push(dd.map)
            } return this.previousMaps
        }
        setSourcesContent() {
          let dd = {};
          if (this.root) this.root.walk((Od => {
            if (Od.source) {
              let md = Od.source.input.from;
              if (md && !dd[md]) {
                dd[md] = !0;
                let Wd = this.usesFileUrls ? this.toFileUrl(md) : this.toUrl(this.path(md));
                this.map.setSourceContent(Wd, Od.source.input.css)
              }
            }
          }));
          else if (this.css) {
            let dd = this.opts.from ? this.toUrl(this.path(this.opts.from)) : "<no source>";
            this.map.setSourceContent(dd, this.css)
          }
        }
        sourcePath(dd) {
          return this.mapOpts.from ? this.toUrl(this.mapOpts.from) : this.usesFileUrls ? this.toFileUrl(dd.source.input.from) : this.toUrl(this.path(dd.source.input.from))
        }
        toBase64(dd) {
          return Buffer ? Buffer.from(dd).toString("base64") : window.btoa(unescape(encodeURIComponent(dd)))
        }
        toFileUrl(dd) {
          let Od = this.memoizedFileURLs.get(dd);
          if (Od) return Od;
          if (Xd) {
            let Od = Xd(dd).toString();
            return this.memoizedFileURLs.set(dd, Od), Od
          }
          throw new Error("`map.absolute` option is not available in this PostCSS build")
        }
        toUrl(dd) {
          let Od = this.memoizedURLs.get(dd);
          if (Od) return Od;
          "\\" === Rd && (dd = dd.replace(/\\/g, "/"));
          let md = encodeURI(dd).replace(/[#?]/g, encodeURIComponent);
          return this.memoizedURLs.set(dd, md), md
        }
      }
    }

    function iF() {
      if (zW) return PW;
      zW = 1;
      let dd = xF();
      class Od extends dd {
        constructor(dd) {
          super(dd), this.type = "comment"
        }
      }
      return PW = Od, Od.default = Od, PW
    }

    function AF() {
      if (jW) return cW;
      jW = 1;
      let dd, Od, md, Wd, {
          isClean: Fd,
          my: Rd
        } = EF(),
        Xd = BF(),
        Kd = iF(),
        hd = xF();

      function vd(dd) {
        return dd.map((dd => (dd.nodes && (dd.nodes = vd(dd.nodes)), delete dd.source, dd)))
      }

      function Qd(dd) {
        if (dd[Fd] = !1, dd.proxyOf.nodes)
          for (let Od of dd.proxyOf.nodes) Qd(Od)
      }
      class td extends hd {
        append() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          for (let Wd of Od) {
            let dd = this.normalize(Wd, this.last);
            for (let Od of dd) this.proxyOf.nodes.push(Od)
          }
          return this.markDirty(), this
        }
        cleanRaws(dd) {
          if (super.cleanRaws(dd), this.nodes)
            for (let Od of this.nodes) Od.cleanRaws(dd)
        }
        each(dd) {
          if (!this.proxyOf.nodes) return;
          let Od, md, Wd = this.getIterator();
          for (; this.indexes[Wd] < this.proxyOf.nodes.length && (Od = this.indexes[Wd], md = dd(this.proxyOf.nodes[Od], Od), !1 !== md);) this.indexes[Wd] += 1;
          return delete this.indexes[Wd], md
        }
        every(dd) {
          return this.nodes.every(dd)
        }
        getIterator() {
          this.lastEach || (this.lastEach = 0), this.indexes || (this.indexes = {}), this.lastEach += 1;
          let dd = this.lastEach;
          return this.indexes[dd] = 0, dd
        }
        getProxyProcessor() {
          return {
            get: (dd, Od) => "proxyOf" === Od ? dd : dd[Od] ? "each" === Od || "string" === typeof Od && Od.startsWith("walk") ? function() {
              for (var md = arguments.length, Wd = new Array(md), Fd = 0; Fd < md; Fd++) Wd[Fd] = arguments[Fd];
              return dd[Od](...Wd.map((dd => "function" === typeof dd ? (Od, md) => dd(Od.toProxy(), md) : dd)))
            } : "every" === Od || "some" === Od ? md => dd[Od]((function(dd) {
              for (var Od = arguments.length, Wd = new Array(Od > 1 ? Od - 1 : 0), Fd = 1; Fd < Od; Fd++) Wd[Fd - 1] = arguments[Fd];
              return md(dd.toProxy(), ...Wd)
            })) : "root" === Od ? () => dd.root().toProxy() : "nodes" === Od ? dd.nodes.map((dd => dd.toProxy())) : "first" === Od || "last" === Od ? dd[Od].toProxy() : dd[Od] : dd[Od],
            set: (dd, Od, md) => (dd[Od] === md || (dd[Od] = md, "name" !== Od && "params" !== Od && "selector" !== Od || dd.markDirty()), !0)
          }
        }
        index(dd) {
          return "number" === typeof dd ? dd : (dd.proxyOf && (dd = dd.proxyOf), this.proxyOf.nodes.indexOf(dd))
        }
        insertAfter(dd, Od) {
          let md, Wd = this.index(dd),
            Fd = this.normalize(Od, this.proxyOf.nodes[Wd]).reverse();
          Wd = this.index(dd);
          for (let Rd of Fd) this.proxyOf.nodes.splice(Wd + 1, 0, Rd);
          for (let Rd in this.indexes) md = this.indexes[Rd], Wd < md && (this.indexes[Rd] = md + Fd.length);
          return this.markDirty(), this
        }
        insertBefore(dd, Od) {
          let md, Wd = this.index(dd),
            Fd = 0 === Wd && "prepend",
            Rd = this.normalize(Od, this.proxyOf.nodes[Wd], Fd).reverse();
          Wd = this.index(dd);
          for (let Xd of Rd) this.proxyOf.nodes.splice(Wd, 0, Xd);
          for (let Xd in this.indexes) md = this.indexes[Xd], Wd <= md && (this.indexes[Xd] = md + Rd.length);
          return this.markDirty(), this
        }
        normalize(Wd, hd) {
          if ("string" === typeof Wd) Wd = vd(dd(Wd).nodes);
          else if ("undefined" === typeof Wd) Wd = [];
          else if (Array.isArray(Wd)) {
            Wd = Wd.slice(0);
            for (let dd of Wd) dd.parent && dd.parent.removeChild(dd, "ignore")
          } else if ("root" === Wd.type && "document" !== this.type) {
            Wd = Wd.nodes.slice(0);
            for (let dd of Wd) dd.parent && dd.parent.removeChild(dd, "ignore")
          } else if (Wd.type) Wd = [Wd];
          else if (Wd.prop) {
            if ("undefined" === typeof Wd.value) throw new Error("Value field is missed in node creation");
            "string" !== typeof Wd.value && (Wd.value = String(Wd.value)), Wd = [new Xd(Wd)]
          } else if (Wd.selector) Wd = [new Od(Wd)];
          else if (Wd.name) Wd = [new md(Wd)];
          else {
            if (!Wd.text) throw new Error("Unknown node type in node creation");
            Wd = [new Kd(Wd)]
          }
          return Wd.map((dd => (dd[Rd] || td.rebuild(dd), (dd = dd.proxyOf).parent && dd.parent.removeChild(dd), dd[Fd] && Qd(dd), "undefined" === typeof dd.raws.before && hd && "undefined" !== typeof hd.raws.before && (dd.raws.before = hd.raws.before.replace(/\S/g, "")), dd.parent = this.proxyOf, dd)))
        }
        prepend() {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          Od = Od.reverse();
          for (let Wd of Od) {
            let dd = this.normalize(Wd, this.first, "prepend").reverse();
            for (let Od of dd) this.proxyOf.nodes.unshift(Od);
            for (let Od in this.indexes) this.indexes[Od] = this.indexes[Od] + dd.length
          }
          return this.markDirty(), this
        }
        push(dd) {
          return dd.parent = this, this.proxyOf.nodes.push(dd), this
        }
        removeAll() {
          for (let dd of this.proxyOf.nodes) dd.parent = void 0;
          return this.proxyOf.nodes = [], this.markDirty(), this
        }
        removeChild(dd) {
          let Od;
          dd = this.index(dd), this.proxyOf.nodes[dd].parent = void 0, this.proxyOf.nodes.splice(dd, 1);
          for (let md in this.indexes) Od = this.indexes[md], Od >= dd && (this.indexes[md] = Od - 1);
          return this.markDirty(), this
        }
        replaceValues(dd, Od, md) {
          return md || (md = Od, Od = {}), this.walkDecls((Wd => {
            Od.props && !Od.props.includes(Wd.prop) || Od.fast && !Wd.value.includes(Od.fast) || (Wd.value = Wd.value.replace(dd, md))
          })), this.markDirty(), this
        }
        some(dd) {
          return this.nodes.some(dd)
        }
        walk(dd) {
          return this.each(((Od, md) => {
            let Wd;
            try {
              Wd = dd(Od, md)
            } catch (Fd) {
              throw Od.addToError(Fd)
            }
            return !1 !== Wd && Od.walk && (Wd = Od.walk(dd)), Wd
          }))
        }
        walkAtRules(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("atrule" === md.type && dd.test(md.name)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("atrule" === md.type && md.name === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("atrule" === dd.type) return Od(dd, md)
          })))
        }
        walkComments(dd) {
          return this.walk(((Od, md) => {
            if ("comment" === Od.type) return dd(Od, md)
          }))
        }
        walkDecls(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("decl" === md.type && dd.test(md.prop)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("decl" === md.type && md.prop === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("decl" === dd.type) return Od(dd, md)
          })))
        }
        walkRules(dd, Od) {
          return Od ? dd instanceof RegExp ? this.walk(((md, Wd) => {
            if ("rule" === md.type && dd.test(md.selector)) return Od(md, Wd)
          })) : this.walk(((md, Wd) => {
            if ("rule" === md.type && md.selector === dd) return Od(md, Wd)
          })) : (Od = dd, this.walk(((dd, md) => {
            if ("rule" === dd.type) return Od(dd, md)
          })))
        }
        get first() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[0]
        }
        get last() {
          if (this.proxyOf.nodes) return this.proxyOf.nodes[this.proxyOf.nodes.length - 1]
        }
      }
      return td.registerParse = Od => {
        dd = Od
      }, td.registerRule = dd => {
        Od = dd
      }, td.registerAtRule = dd => {
        md = dd
      }, td.registerRoot = dd => {
        Wd = dd
      }, cW = td, td.default = td, td.rebuild = dd => {
        "atrule" === dd.type ? Object.setPrototypeOf(dd, md.prototype) : "rule" === dd.type ? Object.setPrototypeOf(dd, Od.prototype) : "decl" === dd.type ? Object.setPrototypeOf(dd, Xd.prototype) : "comment" === dd.type ? Object.setPrototypeOf(dd, Kd.prototype) : "root" === dd.type && Object.setPrototypeOf(dd, Wd.prototype), dd[Rd] = !0, dd.nodes && dd.nodes.forEach((dd => {
          td.rebuild(dd)
        }))
      }, cW
    }

    function rF() {
      if (eW) return DW;
      eW = 1;
      let dd, Od, md = AF();
      class Wd extends md {
        constructor(dd) {
          super({
            type: "document",
            ...dd
          }), this.nodes || (this.nodes = [])
        }
        toResult() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new dd(new Od, this, md).stringify()
        }
      }
      return Wd.registerLazyResult = Od => {
        dd = Od
      }, Wd.registerProcessor = dd => {
        Od = dd
      }, DW = Wd, Wd.default = Wd, DW
    }

    function GF() {
      if (lW) return IW;
      lW = 1;
      let dd = {};
      return IW = function(Od) {
        dd[Od] || (dd[Od] = !0, "undefined" !== typeof console && console.warn && console.warn(Od))
      }
    }

    function nF() {
      if (ZW) return CW;
      ZW = 1;
      class dd {
        constructor(dd) {
          let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (this.type = "warning", this.text = dd, Od.node && Od.node.source) {
            let dd = Od.node.rangeBy(Od);
            this.line = dd.start.line, this.column = dd.start.column, this.endLine = dd.end.line, this.endColumn = dd.end.column
          }
          for (let md in Od) this[md] = Od[md]
        }
        toString() {
          return this.node ? this.node.error(this.text, {
            index: this.index,
            plugin: this.plugin,
            word: this.word
          }).message : this.plugin ? this.plugin + ": " + this.text : this.text
        }
      }
      return CW = dd, dd.default = dd, CW
    }

    function LF() {
      if (fW) return kW;
      fW = 1;
      let dd = nF();
      class Od {
        constructor(dd, Od, md) {
          this.processor = dd, this.messages = [], this.root = Od, this.opts = md, this.css = void 0, this.map = void 0
        }
        toString() {
          return this.css
        }
        warn(Od) {
          let md = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          md.plugin || this.lastPlugin && this.lastPlugin.postcssPlugin && (md.plugin = this.lastPlugin.postcssPlugin);
          let Wd = new dd(Od, md);
          return this.messages.push(Wd), Wd
        }
        warnings() {
          return this.messages.filter((dd => "warning" === dd.type))
        }
        get content() {
          return this.css
        }
      }
      return kW = Od, Od.default = Od, kW
    }

    function PF() {
      if (mF) return OF;
      mF = 1;
      let dd = AF();
      class Od extends dd {
        constructor(dd) {
          super(dd), this.type = "atrule"
        }
        append() {
          return this.proxyOf.nodes || (this.nodes = []), super.append(...arguments)
        }
        prepend() {
          return this.proxyOf.nodes || (this.nodes = []), super.prepend(...arguments)
        }
      }
      return OF = Od, Od.default = Od, dd.registerAtRule(Od), OF
    }

    function zF() {
      if (FF) return WF;
      FF = 1;
      let dd, Od, md = AF();
      class Wd extends md {
        constructor(dd) {
          super(dd), this.type = "root", this.nodes || (this.nodes = [])
        }
        normalize(dd, Od, md) {
          let Wd = super.normalize(dd);
          if (Od)
            if ("prepend" === md) this.nodes.length > 1 ? Od.raws.before = this.nodes[1].raws.before : delete Od.raws.before;
            else if (this.first !== Od)
            for (let Fd of Wd) Fd.raws.before = Od.raws.before;
          return Wd
        }
        removeChild(dd, Od) {
          let md = this.index(dd);
          return !Od && 0 === md && this.nodes.length > 1 && (this.nodes[1].raws.before = this.nodes[md].raws.before), super.removeChild(dd)
        }
        toResult() {
          let md = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return new dd(new Od, this, md).stringify()
        }
      }
      return Wd.registerLazyResult = Od => {
        dd = Od
      }, Wd.registerProcessor = dd => {
        Od = dd
      }, WF = Wd, Wd.default = Wd, md.registerRoot(Wd), WF
    }

    function cF() {
      if (XF) return RF;
      XF = 1;
      let dd = {
        comma: Od => dd.split(Od, [","], !0),
        space: Od => dd.split(Od, [" ", "\n", "\t"]),
        split(dd, Od, md) {
          let Wd = [],
            Fd = "",
            Rd = !1,
            Xd = 0,
            Kd = !1,
            hd = "",
            vd = !1;
          for (let Qd of dd) vd ? vd = !1 : "\\" === Qd ? vd = !0 : Kd ? Qd === hd && (Kd = !1) : '"' === Qd || "'" === Qd ? (Kd = !0, hd = Qd) : "(" === Qd ? Xd += 1 : ")" === Qd ? Xd > 0 && (Xd -= 1) : 0 === Xd && Od.includes(Qd) && (Rd = !0), Rd ? ("" !== Fd && Wd.push(Fd.trim()), Fd = "", Rd = !1) : Fd += Qd;
          return (md || "" !== Fd) && Wd.push(Fd.trim()), Wd
        }
      };
      return RF = dd, dd.default = dd, RF
    }

    function jF() {
      if (hF) return KF;
      hF = 1;
      let dd = AF(),
        Od = cF();
      class md extends dd {
        constructor(dd) {
          super(dd), this.type = "rule", this.nodes || (this.nodes = [])
        }
        get selectors() {
          return Od.comma(this.selector)
        }
        set selectors(dd) {
          let Od = this.selector ? this.selector.match(/,\s*/) : null,
            md = Od ? Od[0] : "," + this.raw("between", "beforeOpen");
          this.selector = dd.join(md)
        }
      }
      return KF = md, md.default = md, dd.registerRule(md), KF
    }

    function DF() {
      if (QF) return vF;
      QF = 1;
      let dd = BF(),
        Od = function() {
          if (dF) return MW;
          dF = 1;
          const dd = "'".charCodeAt(0),
            Od = '"'.charCodeAt(0),
            md = "\\".charCodeAt(0),
            Wd = "/".charCodeAt(0),
            Fd = "\n".charCodeAt(0),
            Rd = " ".charCodeAt(0),
            Xd = "\f".charCodeAt(0),
            Kd = "\t".charCodeAt(0),
            hd = "\r".charCodeAt(0),
            vd = "[".charCodeAt(0),
            Qd = "]".charCodeAt(0),
            td = "(".charCodeAt(0),
            od = ")".charCodeAt(0),
            Nd = "{".charCodeAt(0),
            qd = "}".charCodeAt(0),
            Hd = ";".charCodeAt(0),
            yd = "*".charCodeAt(0),
            bd = ":".charCodeAt(0),
            Td = "@".charCodeAt(0),
            pd = /[\t\n\f\r "#'()/;[\\\]{}]/g,
            Yd = /[\t\n\f\r !"#'():;@[\\\]{}]|\/(?=\*)/g,
            gd = /.[\r\n"'(/\\]/,
            wd = /[\da-f]/i;
          return MW = function(Ed) {
            let Jd, Ud, xd, Bd, Sd, sd, ud, Vd, Ad, rd, Gd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              nd = Ed.css.valueOf(),
              Ld = Gd.ignoreErrors,
              Pd = nd.length,
              zd = 0,
              cd = [],
              jd = [];

            function Dd(dd) {
              throw Ed.error("Unclosed " + dd, zd)
            }
            return {
              back: function(dd) {
                jd.push(dd)
              },
              endOfFile: function() {
                return 0 === jd.length && zd >= Pd
              },
              nextToken: function(Ed) {
                if (jd.length) return jd.pop();
                if (zd >= Pd) return;
                let Gd = !!Ed && Ed.ignoreUnclosed;
                switch (Jd = nd.charCodeAt(zd), Jd) {
                  case Fd:
                  case Rd:
                  case Kd:
                  case hd:
                  case Xd:
                    Ud = zd;
                    do {
                      Ud += 1, Jd = nd.charCodeAt(Ud)
                    } while (Jd === Rd || Jd === Fd || Jd === Kd || Jd === hd || Jd === Xd);
                    rd = ["space", nd.slice(zd, Ud)], zd = Ud - 1;
                    break;
                  case vd:
                  case Qd:
                  case Nd:
                  case qd:
                  case bd:
                  case Hd:
                  case od: {
                    let dd = String.fromCharCode(Jd);
                    rd = [dd, dd, zd];
                    break
                  }
                  case td:
                    if (Vd = cd.length ? cd.pop()[1] : "", Ad = nd.charCodeAt(zd + 1), "url" === Vd && Ad !== dd && Ad !== Od && Ad !== Rd && Ad !== Fd && Ad !== Kd && Ad !== Xd && Ad !== hd) {
                      Ud = zd;
                      do {
                        if (sd = !1, Ud = nd.indexOf(")", Ud + 1), -1 === Ud) {
                          if (Ld || Gd) {
                            Ud = zd;
                            break
                          }
                          Dd("bracket")
                        }
                        for (ud = Ud; nd.charCodeAt(ud - 1) === md;) ud -= 1, sd = !sd
                      } while (sd);
                      rd = ["brackets", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud
                    } else Ud = nd.indexOf(")", zd + 1), Bd = nd.slice(zd, Ud + 1), -1 === Ud || gd.test(Bd) ? rd = ["(", "(", zd] : (rd = ["brackets", Bd, zd, Ud], zd = Ud);
                    break;
                  case dd:
                  case Od:
                    xd = Jd === dd ? "'" : '"', Ud = zd;
                    do {
                      if (sd = !1, Ud = nd.indexOf(xd, Ud + 1), -1 === Ud) {
                        if (Ld || Gd) {
                          Ud = zd + 1;
                          break
                        }
                        Dd("string")
                      }
                      for (ud = Ud; nd.charCodeAt(ud - 1) === md;) ud -= 1, sd = !sd
                    } while (sd);
                    rd = ["string", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  case Td:
                    pd.lastIndex = zd + 1, pd.test(nd), Ud = 0 === pd.lastIndex ? nd.length - 1 : pd.lastIndex - 2, rd = ["at-word", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  case md:
                    for (Ud = zd, Sd = !0; nd.charCodeAt(Ud + 1) === md;) Ud += 1, Sd = !Sd;
                    if (Jd = nd.charCodeAt(Ud + 1), Sd && Jd !== Wd && Jd !== Rd && Jd !== Fd && Jd !== Kd && Jd !== hd && Jd !== Xd && (Ud += 1, wd.test(nd.charAt(Ud)))) {
                      for (; wd.test(nd.charAt(Ud + 1));) Ud += 1;
                      nd.charCodeAt(Ud + 1) === Rd && (Ud += 1)
                    }
                    rd = ["word", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud;
                    break;
                  default:
                    Jd === Wd && nd.charCodeAt(zd + 1) === yd ? (Ud = nd.indexOf("*/", zd + 2) + 1, 0 === Ud && (Ld || Gd ? Ud = nd.length : Dd("comment")), rd = ["comment", nd.slice(zd, Ud + 1), zd, Ud], zd = Ud) : (Yd.lastIndex = zd + 1, Yd.test(nd), Ud = 0 === Yd.lastIndex ? nd.length - 1 : Yd.lastIndex - 2, rd = ["word", nd.slice(zd, Ud + 1), zd, Ud], cd.push(rd), zd = Ud)
                }
                return zd++, rd
              },
              position: function() {
                return zd
              }
            }
          }, MW
        }(),
        md = iF(),
        Wd = PF(),
        Fd = zF(),
        Rd = jF();
      const Xd = {
        empty: !0,
        space: !0
      };
      return vF = class {
        constructor(dd) {
          this.input = dd, this.root = new Fd, this.current = this.root, this.spaces = "", this.semicolon = !1, this.createTokenizer(), this.root.source = {
            input: dd,
            start: {
              column: 1,
              line: 1,
              offset: 0
            }
          }
        }
        atrule(dd) {
          let Od, md, Fd, Rd = new Wd;
          Rd.name = dd[1].slice(1), "" === Rd.name && this.unnamedAtrule(Rd, dd), this.init(Rd, dd[2]);
          let Xd = !1,
            Kd = !1,
            hd = [],
            vd = [];
          for (; !this.tokenizer.endOfFile();) {
            if (Od = (dd = this.tokenizer.nextToken())[0], "(" === Od || "[" === Od ? vd.push("(" === Od ? ")" : "]") : "{" === Od && vd.length > 0 ? vd.push("}") : Od === vd[vd.length - 1] && vd.pop(), 0 === vd.length) {
              if (";" === Od) {
                Rd.source.end = this.hY(dd[2]), Rd.source.end.offset++, this.semicolon = !0;
                break
              }
              if ("{" === Od) {
                Kd = !0;
                break
              }
              if ("}" === Od) {
                if (hd.length > 0) {
                  for (Fd = hd.length - 1, md = hd[Fd]; md && "space" === md[0];) md = hd[--Fd];
                  md && (Rd.source.end = this.hY(md[3] || md[2]), Rd.source.end.offset++)
                }
                this.end(dd);
                break
              }
              hd.push(dd)
            } else hd.push(dd);
            if (this.tokenizer.endOfFile()) {
              Xd = !0;
              break
            }
          }
          Rd.raws.between = this.spacesAndCommentsFromEnd(hd), hd.length ? (Rd.raws.afterName = this.spacesAndCommentsFromStart(hd), this.raw(Rd, "params", hd), Xd && (dd = hd[hd.length - 1], Rd.source.end = this.hY(dd[3] || dd[2]), Rd.source.end.offset++, this.spaces = Rd.raws.between, Rd.raws.between = "")) : (Rd.raws.afterName = "", Rd.params = ""), Kd && (Rd.nodes = [], this.current = Rd)
        }
        checkMissedSemicolon(dd) {
          let Od = this.colon(dd);
          if (!1 === Od) return;
          let md, Wd = 0;
          for (let Fd = Od - 1; Fd >= 0 && (md = dd[Fd], "space" === md[0] || (Wd += 1, 2 !== Wd)); Fd--);
          throw this.input.error("Missed semicolon", "word" === md[0] ? md[3] + 1 : md[2])
        }
        colon(dd) {
          let Od, md, Wd, Fd = 0;
          for (let [Rd, Xd] of dd.entries()) {
            if (Od = Xd, md = Od[0], "(" === md && (Fd += 1), ")" === md && (Fd -= 1), 0 === Fd && ":" === md) {
              if (Wd) {
                if ("word" === Wd[0] && "progid" === Wd[1]) continue;
                return Rd
              }
              this.doubleColon(Od)
            }
            Wd = Od
          }
          return !1
        }
        comment(dd) {
          let Od = new md;
          this.init(Od, dd[2]), Od.source.end = this.hY(dd[3] || dd[2]), Od.source.end.offset++;
          let Wd = dd[1].slice(2, -2);
          if (/^\s*$/.test(Wd)) Od.text = "", Od.raws.left = Wd, Od.raws.right = "";
          else {
            let dd = Wd.match(/^(\s*)([^]*\S)(\s*)$/);
            Od.text = dd[2], Od.raws.left = dd[1], Od.raws.right = dd[3]
          }
        }
        createTokenizer() {
          this.tokenizer = Od(this.input)
        }
        decl(Od, md) {
          let Wd = new dd;
          this.init(Wd, Od[0][2]);
          let Fd, Rd = Od[Od.length - 1];
          for (";" === Rd[0] && (this.semicolon = !0, Od.pop()), Wd.source.end = this.hY(Rd[3] || Rd[2] || function(dd) {
              for (let Od = dd.length - 1; Od >= 0; Od--) {
                let md = dd[Od],
                  Wd = md[3] || md[2];
                if (Wd) return Wd
              }
            }(Od)), Wd.source.end.offset++;
            "word" !== Od[0][0];) 1 === Od.length && this.unknownWord(Od), Wd.raws.before += Od.shift()[1];
          for (Wd.source.start = this.hY(Od[0][2]), Wd.prop = ""; Od.length;) {
            let dd = Od[0][0];
            if (":" === dd || "space" === dd || "comment" === dd) break;
            Wd.prop += Od.shift()[1]
          }
          for (Wd.raws.between = ""; Od.length;) {
            if (Fd = Od.shift(), ":" === Fd[0]) {
              Wd.raws.between += Fd[1];
              break
            }
            "word" === Fd[0] && /\w/.test(Fd[1]) && this.unknownWord([Fd]), Wd.raws.between += Fd[1]
          }
          "_" !== Wd.prop[0] && "*" !== Wd.prop[0] || (Wd.raws.before += Wd.prop[0], Wd.prop = Wd.prop.slice(1));
          let Xd, Kd = [];
          for (; Od.length && (Xd = Od[0][0], "space" === Xd || "comment" === Xd);) Kd.push(Od.shift());
          this.precheckMissedSemicolon(Od);
          for (let dd = Od.length - 1; dd >= 0; dd--) {
            if (Fd = Od[dd], "!important" === Fd[1].toLowerCase()) {
              Wd.important = !0;
              let md = this.stringFrom(Od, dd);
              md = this.spacesFromEnd(Od) + md, " !important" !== md && (Wd.raws.important = md);
              break
            }
            if ("important" === Fd[1].toLowerCase()) {
              let md = Od.slice(0),
                Fd = "";
              for (let Od = dd; Od > 0; Od--) {
                let dd = md[Od][0];
                if (0 === Fd.trim().indexOf("!") && "space" !== dd) break;
                Fd = md.pop()[1] + Fd
              }
              0 === Fd.trim().indexOf("!") && (Wd.important = !0, Wd.raws.important = Fd, Od = md)
            }
            if ("space" !== Fd[0] && "comment" !== Fd[0]) break
          }
          Od.some((dd => "space" !== dd[0] && "comment" !== dd[0])) && (Wd.raws.between += Kd.map((dd => dd[1])).join(""), Kd = []), this.raw(Wd, "value", Kd.concat(Od), md), Wd.value.includes(":") && !md && this.checkMissedSemicolon(Od)
        }
        doubleColon(dd) {
          throw this.input.error("Double colon", {
            offset: dd[2]
          }, {
            offset: dd[2] + dd[1].length
          })
        }
        emptyRule(dd) {
          let Od = new Rd;
          this.init(Od, dd[2]), Od.selector = "", Od.raws.between = "", this.current = Od
        }
        end(dd) {
          this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.semicolon = !1, this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.spaces = "", this.current.parent ? (this.current.source.end = this.hY(dd[2]), this.current.source.end.offset++, this.current = this.current.parent) : this.unexpectedClose(dd)
        }
        endFile() {
          this.current.parent && this.unclosedBlock(), this.current.nodes && this.current.nodes.length && (this.current.raws.semicolon = this.semicolon), this.current.raws.after = (this.current.raws.after || "") + this.spaces, this.root.source.end = this.hY(this.tokenizer.position())
        }
        freeSemicolon(dd) {
          if (this.spaces += dd[1], this.current.nodes) {
            let dd = this.current.nodes[this.current.nodes.length - 1];
            dd && "rule" === dd.type && !dd.raws.ownSemicolon && (dd.raws.ownSemicolon = this.spaces, this.spaces = "")
          }
        }
        hY(dd) {
          let Od = this.input.fromOffset(dd);
          return {
            column: Od.col,
            line: Od.line,
            offset: dd
          }
        }
        init(dd, Od) {
          this.current.push(dd), dd.source = {
            input: this.input,
            start: this.hY(Od)
          }, dd.raws.before = this.spaces, this.spaces = "", "comment" !== dd.type && (this.semicolon = !1)
        }
        other(dd) {
          let Od = !1,
            md = null,
            Wd = !1,
            Fd = null,
            Rd = [],
            Xd = dd[1].startsWith("--"),
            Kd = [],
            hd = dd;
          for (; hd;) {
            if (md = hd[0], Kd.push(hd), "(" === md || "[" === md) Fd || (Fd = hd), Rd.push("(" === md ? ")" : "]");
            else if (Xd && Wd && "{" === md) Fd || (Fd = hd), Rd.push("}");
            else if (0 === Rd.length) {
              if (";" === md) {
                if (Wd) return void this.decl(Kd, Xd);
                break
              }
              if ("{" === md) return void this.rule(Kd);
              if ("}" === md) {
                this.tokenizer.back(Kd.pop()), Od = !0;
                break
              }
              ":" === md && (Wd = !0)
            } else md === Rd[Rd.length - 1] && (Rd.pop(), 0 === Rd.length && (Fd = null));
            hd = this.tokenizer.nextToken()
          }
          if (this.tokenizer.endOfFile() && (Od = !0), Rd.length > 0 && this.unclosedBracket(Fd), Od && Wd) {
            if (!Xd)
              for (; Kd.length && (hd = Kd[Kd.length - 1][0], "space" === hd || "comment" === hd);) this.tokenizer.back(Kd.pop());
            this.decl(Kd, Xd)
          } else this.unknownWord(Kd)
        }
        parse() {
          let dd;
          for (; !this.tokenizer.endOfFile();) switch (dd = this.tokenizer.nextToken(), dd[0]) {
            case "space":
              this.spaces += dd[1];
              break;
            case ";":
              this.freeSemicolon(dd);
              break;
            case "}":
              this.end(dd);
              break;
            case "comment":
              this.comment(dd);
              break;
            case "at-word":
              this.atrule(dd);
              break;
            case "{":
              this.emptyRule(dd);
              break;
            default:
              this.other(dd)
          }
          this.endFile()
        }
        precheckMissedSemicolon() {}
        raw(dd, Od, md, Wd) {
          let Fd, Rd, Kd, hd, vd = md.length,
            Qd = "",
            td = !0;
          for (let od = 0; od < vd; od += 1) Fd = md[od], Rd = Fd[0], "space" !== Rd || od !== vd - 1 || Wd ? "comment" === Rd ? (hd = md[od - 1] ? md[od - 1][0] : "empty", Kd = md[od + 1] ? md[od + 1][0] : "empty", Xd[hd] || Xd[Kd] || "," === Qd.slice(-1) ? td = !1 : Qd += Fd[1]) : Qd += Fd[1] : td = !1;
          if (!td) {
            let Wd = md.reduce(((dd, Od) => dd + Od[1]), "");
            dd.raws[Od] = {
              raw: Wd,
              value: Qd
            }
          }
          dd[Od] = Qd
        }
        rule(dd) {
          dd.pop();
          let Od = new Rd;
          this.init(Od, dd[0][2]), Od.raws.between = this.spacesAndCommentsFromEnd(dd), this.raw(Od, "selector", dd), this.current = Od
        }
        spacesAndCommentsFromEnd(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[dd.length - 1][0], "space" === Od || "comment" === Od);) md = dd.pop()[1] + md;
          return md
        }
        spacesAndCommentsFromStart(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[0][0], "space" === Od || "comment" === Od);) md += dd.shift()[1];
          return md
        }
        spacesFromEnd(dd) {
          let Od, md = "";
          for (; dd.length && (Od = dd[dd.length - 1][0], "space" === Od);) md = dd.pop()[1] + md;
          return md
        }
        stringFrom(dd, Od) {
          let md = "";
          for (let Wd = Od; Wd < dd.length; Wd++) md += dd[Wd][1];
          return dd.splice(Od, dd.length - Od), md
        }
        unclosedBlock() {
          let dd = this.current.source.start;
          throw this.input.error("Unclosed block", dd.line, dd.column)
        }
        unclosedBracket(dd) {
          throw this.input.error("Unclosed bracket", {
            offset: dd[2]
          }, {
            offset: dd[2] + 1
          })
        }
        unexpectedClose(dd) {
          throw this.input.error("Unexpected }", {
            offset: dd[2]
          }, {
            offset: dd[2] + 1
          })
        }
        unknownWord(dd) {
          throw this.input.error("Unknown word", {
            offset: dd[0][2]
          }, {
            offset: dd[0][2] + dd[0][1].length
          })
        }
        unnamedAtrule(dd, Od) {
          throw this.input.error("At-rule without name", {
            offset: Od[2]
          }, {
            offset: Od[2] + Od[1].length
          })
        }
      }
    }

    function eF() {
      if (oF) return tF;
      oF = 1;
      let dd = AF(),
        Od = DF(),
        md = uF();

      function Wd(dd, Wd) {
        let Fd = new md(dd, Wd),
          Rd = new Od(Fd);
        try {
          Rd.parse()
        } catch (Xd) {
          throw Xd
        }
        return Rd.root
      }
      return tF = Wd, Wd.default = Wd, dd.registerParse(Wd), tF
    }

    function IF() {
      if (qF) return NF;
      qF = 1;
      let {
        isClean: dd,
        my: Od
      } = EF(), md = VF(), Wd = UF(), Fd = AF(), Rd = rF(), Xd = (GF(), LF()), Kd = eF(), hd = zF();
      const vd = {
          atrule: "AtRule",
          comment: "Comment",
          decl: "Declaration",
          document: "Document",
          root: "Root",
          rule: "Rule"
        },
        Qd = {
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
        td = {
          Once: !0,
          postcssPlugin: !0,
          prepare: !0
        };

      function od(dd) {
        return "object" === typeof dd && "function" === typeof dd.then
      }

      function Nd(dd) {
        let Od = !1,
          md = vd[dd.type];
        return "decl" === dd.type ? Od = dd.prop.toLowerCase() : "atrule" === dd.type && (Od = dd.name.toLowerCase()), Od && dd.append ? [md, md + "-" + Od, 0, md + "Exit", md + "Exit-" + Od] : Od ? [md, md + "-" + Od, md + "Exit", md + "Exit-" + Od] : dd.append ? [md, 0, md + "Exit"] : [md, md + "Exit"]
      }

      function qd(dd) {
        let Od;
        return Od = "document" === dd.type ? ["Document", 0, "DocumentExit"] : "root" === dd.type ? ["Root", 0, "RootExit"] : Nd(dd), {
          eventIndex: 0,
          events: Od,
          iterator: 0,
          node: dd,
          visitorIndex: 0,
          visitors: []
        }
      }

      function Hd(Od) {
        return Od[dd] = !1, Od.nodes && Od.nodes.forEach((dd => Hd(dd))), Od
      }
      let yd = {};
      class bd {
        constructor(dd, md, Wd) {
          let Rd;
          if (this.stringified = !1, this.processed = !1, "object" !== typeof md || null === md || "root" !== md.type && "document" !== md.type)
            if (md instanceof bd || md instanceof Xd) Rd = Hd(md.root), md.map && ("undefined" === typeof Wd.map && (Wd.map = {}), Wd.map.inline || (Wd.map.inline = !1), Wd.map.prev = md.map);
            else {
              let dd = Kd;
              Wd.syntax && (dd = Wd.syntax.parse), Wd.parser && (dd = Wd.parser), dd.parse && (dd = dd.parse);
              try {
                Rd = dd(md, Wd)
              } catch (hd) {
                this.processed = !0, this.error = hd
              }
              Rd && !Rd[Od] && Fd.rebuild(Rd)
            }
          else Rd = Hd(md);
          this.result = new Xd(dd, Rd, Wd), this.helpers = {
            ...yd,
            postcss: yd,
            result: this.result
          }, this.plugins = this.processor.plugins.map((dd => "object" === typeof dd && dd.prepare ? {
            ...dd,
            ...dd.prepare(this.result)
          } : dd))
        }
        async () {
          return this.error ? Promise.reject(this.error) : this.processed ? Promise.resolve(this.result) : (this.processing || (this.processing = this.runAsync()), this.processing)
        } catch (dd) {
          return this.async().catch(dd)
        } finally(dd) {
          return this.async().then(dd, dd)
        }
        getAsyncError() {
          throw new Error("Use process(css).then(cb) to work with async plugins")
        }
        handleError(dd, Od) {
          let md = this.result.lastPlugin;
          try {
            Od && Od.addToError(dd), this.error = dd, "CssSyntaxError" !== dd.name || dd.plugin ? md.postcssVersion : (dd.plugin = md.postcssPlugin, dd.setMessage())
          } catch (Wd) {
            console && console.error && console.error(Wd)
          }
          return dd
        }
        prepareVisitors() {
          this.listeners = {};
          let dd = (dd, Od, md) => {
            this.listeners[Od] || (this.listeners[Od] = []), this.listeners[Od].push([dd, md])
          };
          for (let Od of this.plugins)
            if ("object" === typeof Od)
              for (let md in Od) {
                if (!Qd[md] && /^[A-Z]/.test(md)) throw new Error(`Unknown event ${md} in ${Od.postcssPlugin}. Try to update PostCSS (${this.processor.version} now).`);
                if (!td[md])
                  if ("object" === typeof Od[md])
                    for (let Wd in Od[md]) dd(Od, "*" === Wd ? md : md + "-" + Wd.toLowerCase(), Od[md][Wd]);
                  else "function" === typeof Od[md] && dd(Od, md, Od[md])
              }
          this.hasListener = Object.keys(this.listeners).length > 0
        }
        async runAsync() {
          this.plugin = 0;
          for (let dd = 0; dd < this.plugins.length; dd++) {
            let md = this.plugins[dd],
              Wd = this.runOnRoot(md);
            if (od(Wd)) try {
              await Wd
            } catch (Od) {
              throw this.handleError(Od)
            }
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Od = this.result.root;
            for (; !Od[dd];) {
              Od[dd] = !0;
              let Wd = [qd(Od)];
              for (; Wd.length > 0;) {
                let dd = this.visitTick(Wd);
                if (od(dd)) try {
                  await dd
                } catch (md) {
                  let dd = Wd[Wd.length - 1].node;
                  throw this.handleError(md, dd)
                }
              }
            }
            if (this.listeners.OnceExit)
              for (let [dd, Wd] of this.listeners.OnceExit) {
                this.result.lastPlugin = dd;
                try {
                  if ("document" === Od.type) {
                    let dd = Od.nodes.map((dd => Wd(dd, this.helpers)));
                    await Promise.all(dd)
                  } else await Wd(Od, this.helpers)
                } catch (md) {
                  throw this.handleError(md)
                }
              }
          }
          return this.processed = !0, this.stringify()
        }
        runOnRoot(dd) {
          this.result.lastPlugin = dd;
          try {
            if ("object" === typeof dd && dd.Once) {
              if ("document" === this.result.root.type) {
                let Od = this.result.root.nodes.map((Od => dd.Once(Od, this.helpers)));
                return od(Od[0]) ? Promise.all(Od) : Od
              }
              return dd.Once(this.result.root, this.helpers)
            }
            if ("function" === typeof dd) return dd(this.result.root, this.result)
          } catch (Od) {
            throw this.handleError(Od)
          }
        }
        stringify() {
          if (this.error) throw this.error;
          if (this.stringified) return this.result;
          this.stringified = !0, this.sync();
          let dd = this.result.opts,
            Od = Wd;
          dd.syntax && (Od = dd.syntax.stringify), dd.stringifier && (Od = dd.stringifier), Od.stringify && (Od = Od.stringify);
          let Fd = new md(Od, this.result.root, this.result.opts).generate();
          return this.result.css = Fd[0], this.result.map = Fd[1], this.result
        }
        sync() {
          if (this.error) throw this.error;
          if (this.processed) return this.result;
          if (this.processed = !0, this.processing) throw this.getAsyncError();
          for (let dd of this.plugins) {
            if (od(this.runOnRoot(dd))) throw this.getAsyncError()
          }
          if (this.prepareVisitors(), this.hasListener) {
            let Od = this.result.root;
            for (; !Od[dd];) Od[dd] = !0, this.walkSync(Od);
            if (this.listeners.OnceExit)
              if ("document" === Od.type)
                for (let dd of Od.nodes) this.visitSync(this.listeners.OnceExit, dd);
              else this.visitSync(this.listeners.OnceExit, Od)
          }
          return this.result
        }
        then(dd, Od) {
          return this.async().then(dd, Od)
        }
        toString() {
          return this.css
        }
        visitSync(dd, Od) {
          for (let [Wd, Fd] of dd) {
            let dd;
            this.result.lastPlugin = Wd;
            try {
              dd = Fd(Od, this.helpers)
            } catch (md) {
              throw this.handleError(md, Od.proxyOf)
            }
            if ("root" !== Od.type && "document" !== Od.type && !Od.parent) return !0;
            if (od(dd)) throw this.getAsyncError()
          }
        }
        visitTick(Od) {
          let md = Od[Od.length - 1],
            {
              node: Wd,
              visitors: Fd
            } = md;
          if ("root" !== Wd.type && "document" !== Wd.type && !Wd.parent) return void Od.pop();
          if (Fd.length > 0 && md.visitorIndex < Fd.length) {
            let [dd, Od] = Fd[md.visitorIndex];
            md.visitorIndex += 1, md.visitorIndex === Fd.length && (md.visitors = [], md.visitorIndex = 0), this.result.lastPlugin = dd;
            try {
              return Od(Wd.toProxy(), this.helpers)
            } catch (Xd) {
              throw this.handleError(Xd, Wd)
            }
          }
          if (0 !== md.iterator) {
            let Fd, Rd = md.iterator;
            for (; Fd = Wd.nodes[Wd.indexes[Rd]];)
              if (Wd.indexes[Rd] += 1, !Fd[dd]) return Fd[dd] = !0, void Od.push(qd(Fd));
            md.iterator = 0, delete Wd.indexes[Rd]
          }
          let Rd = md.events;
          for (; md.eventIndex < Rd.length;) {
            let Od = Rd[md.eventIndex];
            if (md.eventIndex += 1, 0 === Od) return void(Wd.nodes && Wd.nodes.length && (Wd[dd] = !0, md.iterator = Wd.getIterator()));
            if (this.listeners[Od]) return void(md.visitors = this.listeners[Od])
          }
          Od.pop()
        }
        walkSync(Od) {
          Od[dd] = !0;
          let md = Nd(Od);
          for (let Wd of md)
            if (0 === Wd) Od.nodes && Od.each((Od => {
              Od[dd] || this.walkSync(Od)
            }));
            else {
              let dd = this.listeners[Wd];
              if (dd && this.visitSync(dd, Od.toProxy())) return
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
      return bd.registerPostcss = dd => {
        yd = dd
      }, NF = bd, bd.default = bd, hd.registerLazyResult(bd), Rd.registerLazyResult(bd), NF
    }

    function lF() {
      if (TF) return bF;
      TF = 1;
      let dd = function() {
          if (yF) return HF;
          yF = 1;
          let dd = VF(),
            Od = UF(),
            md = (GF(), eF());
          const Wd = LF();
          class Fd {
            constructor(md, Fd, Rd) {
              let Xd;
              Fd = Fd.toString(), this.stringified = !1, this._processor = md, this._css = Fd, this._opts = Rd, this._map = void 0;
              let Kd = Od;
              this.result = new Wd(this._processor, Xd, this._opts), this.result.css = Fd;
              let hd = this;
              Object.defineProperty(this.result, "root", {
                get: () => hd.root
              });
              let vd = new dd(Kd, Xd, this._opts, Fd);
              if (vd.isMap()) {
                let [dd, Od] = vd.generate();
                dd && (this.result.css = dd), Od && (this.result.map = Od)
              } else vd.clearAnnotation(), this.result.css = vd.css
            }
            async () {
              return this.error ? Promise.reject(this.error) : Promise.resolve(this.result)
            } catch (dd) {
              return this.async().catch(dd)
            } finally(dd) {
              return this.async().then(dd, dd)
            }
            sync() {
              if (this.error) throw this.error;
              return this.result
            }
            then(dd, Od) {
              return this.async().then(dd, Od)
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
              let dd, Od = md;
              try {
                dd = Od(this._css, this._opts)
              } catch (Wd) {
                this.error = Wd
              }
              if (this.error) throw this.error;
              return this._root = dd, dd
            }
            get[Symbol.toStringTag]() {
              return "NoWorkResult"
            }
          }
          return HF = Fd, Fd.default = Fd, HF
        }(),
        Od = IF(),
        md = rF(),
        Wd = zF();
      class Fd {
        constructor() {
          let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          this.version = "8.4.38", this.plugins = this.normalize(dd)
        }
        normalize(dd) {
          let Od = [];
          for (let md of dd)
            if (!0 === md.postcss ? md = md() : md.postcss && (md = md.postcss), "object" === typeof md && Array.isArray(md.plugins)) Od = Od.concat(md.plugins);
            else if ("object" === typeof md && md.postcssPlugin) Od.push(md);
          else if ("function" === typeof md) Od.push(md);
          else {
            if ("object" !== typeof md || !md.parse && !md.stringify) throw new Error(md + " is not a PostCSS plugin")
          }
          return Od
        }
        process(md) {
          let Wd = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return this.plugins.length || Wd.parser || Wd.stringifier || Wd.syntax ? new Od(this, md, Wd) : new dd(this, md, Wd)
        }
        use(dd) {
          return this.plugins = this.plugins.concat(this.normalize([dd])), this
        }
      }
      return bF = Fd, Fd.default = Fd, Wd.registerProcessor(Fd), md.registerProcessor(Fd), bF
    }
    const CF = NW(function() {
      if (wF) return gF;
      wF = 1;
      let dd = gW(),
        Od = BF(),
        md = IF(),
        Wd = AF(),
        Fd = lF(),
        Rd = UF(),
        Xd = function() {
          if (YF) return pF;
          YF = 1;
          let dd = BF(),
            Od = sF(),
            md = iF(),
            Wd = PF(),
            Fd = uF(),
            Rd = zF(),
            Xd = jF();

          function Kd(hd, vd) {
            if (Array.isArray(hd)) return hd.map((dd => Kd(dd)));
            let {
              inputs: Qd,
              ...td
            } = hd;
            if (Qd) {
              vd = [];
              for (let dd of Qd) {
                let md = {
                  ...dd,
                  __proto__: Fd.prototype
                };
                md.map && (md.map = {
                  ...md.map,
                  __proto__: Od.prototype
                }), vd.push(md)
              }
            }
            if (td.nodes && (td.nodes = hd.nodes.map((dd => Kd(dd, vd)))), td.source) {
              let {
                inputId: dd,
                ...Od
              } = td.source;
              td.source = Od, null != dd && (td.source.input = vd[dd])
            }
            if ("root" === td.type) return new Rd(td);
            if ("decl" === td.type) return new dd(td);
            if ("rule" === td.type) return new Xd(td);
            if ("comment" === td.type) return new md(td);
            if ("atrule" === td.type) return new Wd(td);
            throw new Error("Unknown node type: " + hd.type)
          }
          return pF = Kd, Kd.default = Kd, pF
        }(),
        Kd = rF(),
        hd = nF(),
        vd = iF(),
        Qd = PF(),
        td = LF(),
        od = uF(),
        Nd = eF(),
        qd = cF(),
        Hd = jF(),
        yd = zF(),
        bd = xF();

      function Td() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        return 1 === Od.length && Array.isArray(Od[0]) && (Od = Od[0]), new Fd(Od)
      }
      return Td.plugin = function(dd, Od) {
        let md, Wd = !1;

        function Rd() {
          console && console.warn && !Wd && (Wd = !0, console.warn(dd + ": postcss.plugin was deprecated. Migration guide:\nhttps://evilmartians.com/chronicles/postcss-8-plugin-migration"), {
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
          }.LANG.startsWith("cn") && console.warn(dd + ": \u91cc\u9762 postcss.plugin \u88ab\u5f03\u7528. \u8fc1\u79fb\u6307\u5357:\nhttps://www.w3ctech.com/topic/2226"));
          let md = Od(...arguments);
          return md.postcssPlugin = dd, md.postcssVersion = (new Fd).version, md
        }
        return Object.defineProperty(Rd, "postcss", {
          get: () => (md || (md = Rd()), md)
        }), Rd.process = function(dd, Od, md) {
          return Td([Rd(md)]).process(dd, Od)
        }, Rd
      }, Td.stringify = Rd, Td.parse = Nd, Td.fromJSON = Xd, Td.list = qd, Td.comment = dd => new vd(dd), Td.atRule = dd => new Qd(dd), Td.decl = dd => new Od(dd), Td.rule = dd => new Hd(dd), Td.root = dd => new yd(dd), Td.document = dd => new Kd(dd), Td.CssSyntaxError = dd, Td.Declaration = Od, Td.nG = Wd, Td.Processor = Fd, Td.Document = Kd, Td.Comment = vd, Td.Warning = hd, Td.AtRule = Qd, Td.Result = td, Td.Input = od, Td.Rule = Hd, Td.Root = yd, Td.Node = bd, md.registerPostcss(Td), gF = Td, Td.default = Td, gF
    }());
    CF.stringify, CF.fromJSON, CF.plugin, CF.parse, CF.list, CF.document, CF.comment, CF.atRule, CF.rule, CF.decl, CF.root, CF.CssSyntaxError, CF.Declaration, CF.nG, CF.Processor, CF.Document, CF.Comment, CF.Warning, CF.AtRule, CF.Result, CF.Input, CF.Rule, CF.Root, CF.Node;
    var ZF = (dd => (dd[dd.Document = 0] = "Document", dd[dd.DocumentType = 1] = "DocumentType", dd[dd.Element = 2] = "Element", dd[dd.Text = 3] = "Text", dd[dd.CDATA = 4] = "CDATA", dd[dd.Comment = 5] = "Comment", dd))(ZF || {});

    function kF(dd) {
      const Od = [];
      for (const md in dd) {
        const Wd = dd[md];
        if ("string" !== typeof Wd) continue;
        const Fd = mR(md);
        Od.push(`${Fd}: ${Wd};`)
      }
      return Od.join(" ")
    }
    const fF = /-([a-z])/g,
      MF = /^--[a-zA-Z0-9-]+$/,
      dR = dd => MF.test(dd) ? dd : dd.replace(fF, ((dd, Od) => Od ? Od.toUpperCase() : "")),
      OR = /\B([A-Z])/g,
      mR = dd => dd.replace(OR, "-$1").toLowerCase();
    class WR {
      constructor() {
        vW(this, "parentElement", null), vW(this, "parentNode", null), vW(this, "ownerDocument"), vW(this, "firstChild", null), vW(this, "lastChild", null), vW(this, "previousSibling", null), vW(this, "nextSibling", null), vW(this, "ELEMENT_NODE", 1), vW(this, "TEXT_NODE", 3), vW(this, "nodeType"), vW(this, "nodeName"), vW(this, "RRNodeType")
      }
      get childNodes() {
        const dd = [];
        let Od = this.firstChild;
        for (; Od;) dd.push(Od), Od = Od.nextSibling;
        return dd
      }
      contains(dd) {
        if (!(dd instanceof WR)) return !1;
        if (dd.ownerDocument !== this.ownerDocument) return !1;
        if (dd === this) return !0;
        for (; dd.parentNode;) {
          if (dd.parentNode === this) return !0;
          dd = dd.parentNode
        }
        return !1
      }
      appendChild(dd) {
        throw new Error("RRDomException: Failed to execute 'appendChild' on 'RRNode': This RRNode type does not support this method.")
      }
      insertBefore(dd, Od) {
        throw new Error("RRDomException: Failed to execute 'insertBefore' on 'RRNode': This RRNode type does not support this method.")
      }
      removeChild(dd) {
        throw new Error("RRDomException: Failed to execute 'removeChild' on 'RRNode': This RRNode type does not support this method.")
      }
      toString() {
        return "RRNode"
      }
    }
    class FR extends WR {
      constructor() {
        for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
        super(Od), vW(this, "nodeType", 9), vW(this, "nodeName", "#document"), vW(this, "compatMode", "CSS1Compat"), vW(this, "RRNodeType", ZF.Document), vW(this, "textContent", null), this.ownerDocument = this
      }
      get documentElement() {
        return this.childNodes.find((dd => dd.RRNodeType === ZF.Element && "HTML" === dd.tagName)) || null
      }
      get body() {
        var dd;
        return (null == (dd = this.documentElement) ? void 0 : dd.childNodes.find((dd => dd.RRNodeType === ZF.Element && "BODY" === dd.tagName))) || null
      }
      get head() {
        var dd;
        return (null == (dd = this.documentElement) ? void 0 : dd.childNodes.find((dd => dd.RRNodeType === ZF.Element && "HEAD" === dd.tagName))) || null
      }
      get implementation() {
        return this
      }
      get firstElementChild() {
        return this.documentElement
      }
      appendChild(dd) {
        const Od = dd.RRNodeType;
        if ((Od === ZF.Element || Od === ZF.DocumentType) && this.childNodes.some((dd => dd.RRNodeType === Od))) throw new Error(`RRDomException: Failed to execute 'appendChild' on 'RRNode': Only one ${Od===ZF.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const md = NR(this, dd);
        return md.parentElement = null, md
      }
      insertBefore(dd, Od) {
        const md = dd.RRNodeType;
        if ((md === ZF.Element || md === ZF.DocumentType) && this.childNodes.some((dd => dd.RRNodeType === md))) throw new Error(`RRDomException: Failed to execute 'insertBefore' on 'RRNode': Only one ${md===ZF.Element?"RRElement":"RRDoctype"} on RRDocument allowed.`);
        const Wd = qR(this, dd, Od);
        return Wd.parentElement = null, Wd
      }
      removeChild(dd) {
        return HR(this, dd)
      }
      open() {
        this.firstChild = null, this.lastChild = null
      }
      close() {}
      write(dd) {
        let Od;
        if ('<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "">' === dd ? Od = "-//W3C//DTD XHTML 1.0 Transitional//EN" : '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN" "">' === dd && (Od = "-//W3C//DTD HTML 4.0 Transitional//EN"), Od) {
          const dd = this.createDocumentType("html", Od, "");
          this.open(), this.appendChild(dd)
        }
      }
      createDocument(dd, Od, md) {
        return new FR
      }
      createDocumentType(dd, Od, md) {
        const Wd = new RR(dd, Od, md);
        return Wd.ownerDocument = this, Wd
      }
      createElement(dd) {
        const Od = new XR(dd);
        return Od.ownerDocument = this, Od
      }
      createElementNS(dd, Od) {
        return this.createElement(Od)
      }
      createTextNode(dd) {
        const Od = new vR(dd);
        return Od.ownerDocument = this, Od
      }
      createComment(dd) {
        const Od = new QR(dd);
        return Od.ownerDocument = this, Od
      }
      createCDATASection(dd) {
        const Od = new tR(dd);
        return Od.ownerDocument = this, Od
      }
      toString() {
        return "RRDocument"
      }
    }
    class RR extends WR {
      constructor(dd, Od, md) {
        super(), vW(this, "nodeType", 10), vW(this, "RRNodeType", ZF.DocumentType), vW(this, "name"), vW(this, "publicId"), vW(this, "systemId"), vW(this, "textContent", null), this.name = dd, this.publicId = Od, this.systemId = md, this.nodeName = dd
      }
      toString() {
        return "RRDocumentType"
      }
    }
    class XR extends WR {
      constructor(dd) {
        super(), vW(this, "nodeType", 1), vW(this, "RRNodeType", ZF.Element), vW(this, "tagName"), vW(this, "attributes", {}), vW(this, "shadowRoot", null), vW(this, "scrollLeft"), vW(this, "scrollTop"), this.tagName = dd.toUpperCase(), this.nodeName = dd.toUpperCase()
      }
      get textContent() {
        let dd = "";
        return this.childNodes.forEach((Od => dd += Od.textContent)), dd
      }
      set textContent(dd) {
        this.firstChild = null, this.lastChild = null, this.appendChild(this.ownerDocument.createTextNode(dd))
      }
      get classList() {
        return new oR(this.attributes.class, (dd => {
          this.attributes.class = dd
        }))
      }
      get id() {
        return this.attributes.id || ""
      }
      get className() {
        return this.attributes.class || ""
      }
      get style() {
        const dd = this.attributes.style ? function(dd) {
            const Od = {},
              md = /:(.+)/;
            return dd.replace(/\/\*.*?\*\//g, "").split(/;(?![^(]*\))/g).forEach((function(dd) {
              if (dd) {
                const Wd = dd.split(md);
                Wd.length > 1 && (Od[dR(Wd[0].trim())] = Wd[1].trim())
              }
            })), Od
          }(this.attributes.style) : {},
          Od = /\B([A-Z])/g;
        return dd.setProperty = (md, Wd, Fd) => {
          if (Od.test(md)) return;
          const Rd = dR(md);
          Wd ? dd[Rd] = Wd : delete dd[Rd], "important" === Fd && (dd[Rd] += " !important"), this.attributes.style = kF(dd)
        }, dd.removeProperty = md => {
          if (Od.test(md)) return "";
          const Wd = dR(md),
            Fd = dd[Wd] || "";
          return delete dd[Wd], this.attributes.style = kF(dd), Fd
        }, dd
      }
      getAttribute(dd) {
        return void 0 === this.attributes[dd] ? null : this.attributes[dd]
      }
      setAttribute(dd, Od) {
        this.attributes[dd] = Od
      }
      setAttributeNS(dd, Od, md) {
        this.setAttribute(Od, md)
      }
      removeAttribute(dd) {
        delete this.attributes[dd]
      }
      appendChild(dd) {
        return NR(this, dd)
      }
      insertBefore(dd, Od) {
        return qR(this, dd, Od)
      }
      removeChild(dd) {
        return HR(this, dd)
      }
      attachShadow(dd) {
        const Od = this.ownerDocument.createElement("SHADOWROOT");
        return this.shadowRoot = Od, Od
      }
      dispatchEvent(dd) {
        return !0
      }
      toString() {
        let dd = "";
        for (const Od in this.attributes) dd += `${Od}="${this.attributes[Od]}" `;
        return `${this.tagName} ${dd}`
      }
    }
    class KR extends XR {
      constructor() {
        super(...arguments), vW(this, "currentTime"), vW(this, "volume"), vW(this, "paused"), vW(this, "muted"), vW(this, "playbackRate"), vW(this, "loop")
      }
      attachShadow(dd) {
        throw new Error("RRDomException: Failed to execute 'attachShadow' on 'RRElement': This RRElement does not support attachShadow")
      }
      play() {
        this.paused = !1
      }
      pause() {
        this.paused = !0
      }
    }
    class hR extends XR {
      constructor() {
        super(...arguments), vW(this, "tagName", "DIALOG"), vW(this, "nodeName", "DIALOG")
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
    class vR extends WR {
      constructor(dd) {
        super(), vW(this, "nodeType", 3), vW(this, "nodeName", "#text"), vW(this, "RRNodeType", ZF.Text), vW(this, "data"), this.data = dd
      }
      get textContent() {
        return this.data
      }
      set textContent(dd) {
        this.data = dd
      }
      toString() {
        return `RRText text=${JSON.stringify(this.data)}`
      }
    }
    class QR extends WR {
      constructor(dd) {
        super(), vW(this, "nodeType", 8), vW(this, "nodeName", "#comment"), vW(this, "RRNodeType", ZF.Comment), vW(this, "data"), this.data = dd
      }
      get textContent() {
        return this.data
      }
      set textContent(dd) {
        this.data = dd
      }
      toString() {
        return `RRComment text=${JSON.stringify(this.data)}`
      }
    }
    class tR extends WR {
      constructor(dd) {
        super(), vW(this, "nodeName", "#cdata-section"), vW(this, "nodeType", 4), vW(this, "RRNodeType", ZF.CDATA), vW(this, "data"), this.data = dd
      }
      get textContent() {
        return this.data
      }
      set textContent(dd) {
        this.data = dd
      }
      toString() {
        return `RRCDATASection data=${JSON.stringify(this.data)}`
      }
    }
    class oR {
      constructor(dd, Od) {
        var md = this;
        if (vW(this, "onChange"), vW(this, "classes", []), vW(this, "add", (function() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            for (const Fd of Od) {
              const dd = String(Fd);
              md.classes.indexOf(dd) >= 0 || md.classes.push(dd)
            }
            md.onChange && md.onChange(md.classes.join(" "))
          })), vW(this, "remove", (function() {
            for (var dd = arguments.length, Od = new Array(dd), Wd = 0; Wd < dd; Wd++) Od[Wd] = arguments[Wd];
            md.classes = md.classes.filter((dd => -1 === Od.indexOf(dd))), md.onChange && md.onChange(md.classes.join(" "))
          })), dd) {
          const Od = dd.trim().split(/\s+/);
          this.classes.push(...Od)
        }
        this.onChange = Od
      }
    }

    function NR(dd, Od) {
      return Od.parentNode && Od.parentNode.removeChild(Od), dd.lastChild ? (dd.lastChild.nextSibling = Od, Od.previousSibling = dd.lastChild) : (dd.firstChild = Od, Od.previousSibling = null), dd.lastChild = Od, Od.nextSibling = null, Od.parentNode = dd, Od.parentElement = dd, Od.ownerDocument = dd.ownerDocument, Od
    }

    function qR(dd, Od, md) {
      if (!md) return NR(dd, Od);
      if (md.parentNode !== dd) throw new Error("Failed to execute 'insertBefore' on 'RRNode': The RRNode before which the new node is to be inserted is not a child of this RRNode.");
      return Od === md || (Od.parentNode && Od.parentNode.removeChild(Od), Od.previousSibling = md.previousSibling, md.previousSibling = Od, Od.nextSibling = md, Od.previousSibling ? Od.previousSibling.nextSibling = Od : dd.firstChild = Od, Od.parentElement = dd, Od.parentNode = dd, Od.ownerDocument = dd.ownerDocument), Od
    }

    function HR(dd, Od) {
      if (Od.parentNode !== dd) throw new Error("Failed to execute 'removeChild' on 'RRNode': The RRNode to be removed is not a child of this RRNode.");
      return Od.previousSibling ? Od.previousSibling.nextSibling = Od.nextSibling : dd.firstChild = Od.nextSibling, Od.nextSibling ? Od.nextSibling.previousSibling = Od.previousSibling : dd.lastChild = Od.previousSibling, Od.previousSibling = null, Od.nextSibling = null, Od.parentElement = null, Od.parentNode = null, Od
    }
    var yR = (dd => (dd[dd.PLACEHOLDER = 0] = "PLACEHOLDER", dd[dd.ELEMENT_NODE = 1] = "ELEMENT_NODE", dd[dd.ATTRIBUTE_NODE = 2] = "ATTRIBUTE_NODE", dd[dd.TEXT_NODE = 3] = "TEXT_NODE", dd[dd.CDATA_SECTION_NODE = 4] = "CDATA_SECTION_NODE", dd[dd.ENTITY_REFERENCE_NODE = 5] = "ENTITY_REFERENCE_NODE", dd[dd.ENTITY_NODE = 6] = "ENTITY_NODE", dd[dd.PROCESSING_INSTRUCTION_NODE = 7] = "PROCESSING_INSTRUCTION_NODE", dd[dd.COMMENT_NODE = 8] = "COMMENT_NODE", dd[dd.DOCUMENT_NODE = 9] = "DOCUMENT_NODE", dd[dd.DOCUMENT_TYPE_NODE = 10] = "DOCUMENT_TYPE_NODE", dd[dd.DOCUMENT_FRAGMENT_NODE = 11] = "DOCUMENT_FRAGMENT_NODE", dd))(yR || {});
    const bR = {
        svg: "http://www.w3.org/2000/svg",
        "xlink:href": "http://www.w3.org/1999/xlink",
        xmlns: "http://www.w3.org/2000/xmlns/"
      },
      TR = {
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
    let pR = null;

    function YR(dd, Od, md) {
      let Wd = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Od.mirror || Od.ownerDocument.mirror;
      dd = function(dd, Od, md, Wd) {
          var Fd;
          md.afterAppend && !pR && (pR = new WeakSet, setTimeout((() => {
            pR = null
          }), 0));
          if (!aR(dd, Od)) {
            const Rd = wR(Od, md.mirror, Wd);
            null == (Fd = dd.parentNode) || Fd.replaceChild(Rd, dd), dd = Rd
          }
          switch (Od.RRNodeType) {
            case ZF.Document:
              if (!ER(dd, Od, md.mirror, Wd)) {
                const Fd = Wd.getMeta(Od);
                Fd && (md.mirror.removeNodeFromMap(dd), dd.close(), dd.open(), md.mirror.add(dd, Fd), null == pR || pR.add(dd))
              }
              break;
            case ZF.Element: {
              const Fd = dd,
                Rd = Od;
              switch (Rd.tagName) {
                case "IFRAME": {
                  const Fd = dd.contentDocument;
                  if (!Fd) break;
                  YR(Fd, Od.contentDocument, md, Wd);
                  break
                }
              }
              Rd.shadowRoot && (Fd.shadowRoot || Fd.attachShadow({
                  mode: "open"
                }), gR(Fd.shadowRoot, Rd.shadowRoot, md, Wd)),
                function(dd, Od, md) {
                  const Wd = dd.attributes,
                    Fd = Od.attributes;
                  for (const Xd in Fd) {
                    const Wd = Fd[Xd],
                      Kd = md.getMeta(Od);
                    if ((null == Kd ? void 0 : Kd.isSVG) && bR[Xd]) dd.setAttributeNS(bR[Xd], Xd, Wd);
                    else if ("CANVAS" === Od.tagName && "rr_dataURL" === Xd) {
                      const Od = document.createElement("img");
                      Od.src = Wd, Od.onload = () => {
                        const md = dd.getContext("2d");
                        md && md.drawImage(Od, 0, 0, Od.width, Od.height)
                      }
                    } else {
                      if ("IFRAME" === Od.tagName && "srcdoc" === Xd) continue;
                      try {
                        dd.setAttribute(Xd, Wd)
                      } catch (Rd) {
                        console.warn(Rd)
                      }
                    }
                  }
                  for (const {
                      name: Xd
                    }
                    of Array.from(Wd)) Xd in Fd || dd.removeAttribute(Xd);
                  Od.scrollLeft && (dd.scrollLeft = Od.scrollLeft), Od.scrollTop && (dd.scrollTop = Od.scrollTop)
                }(Fd, Rd, Wd);
              break
            }
          }
          return dd
        }(dd, Od, md, Wd), gR(dd, Od, md, Wd),
        function(dd, Od, md) {
          var Wd;
          switch (Od.RRNodeType) {
            case ZF.Document: {
              const dd = Od.scrollData;
              dd && md.applyScroll(dd, !0);
              break
            }
            case ZF.Element: {
              const Wd = dd,
                Rd = Od;
              switch (Rd.scrollData && md.applyScroll(Rd.scrollData, !0), Rd.inputData && md.applyInput(Rd.inputData), Rd.tagName) {
                case "AUDIO":
                case "VIDEO": {
                  const Od = dd,
                    md = Rd;
                  void 0 !== md.paused && (md.paused ? Od.pause() : Od.play()), void 0 !== md.muted && (Od.muted = md.muted), void 0 !== md.volume && (Od.volume = md.volume), void 0 !== md.currentTime && (Od.currentTime = md.currentTime), void 0 !== md.playbackRate && (Od.playbackRate = md.playbackRate), void 0 !== md.loop && (Od.loop = md.loop);
                  break
                }
                case "CANVAS": {
                  const Fd = Od;
                  if (null !== Fd.rr_dataURL) {
                    const dd = document.createElement("img");
                    dd.onload = () => {
                      const Od = Wd.getContext("2d");
                      Od && Od.drawImage(dd, 0, 0, dd.width, dd.height)
                    }, dd.src = Fd.rr_dataURL
                  }
                  Fd.canvasMutations.forEach((Od => md.applyCanvas(Od.event, Od.mutation, dd)));
                  break
                }
                case "STYLE": {
                  const dd = Wd.sheet;
                  dd && Od.rules.forEach((Od => md.applyStyleSheetMutation(Od, dd)));
                  break
                }
                case "DIALOG": {
                  const dd = Wd,
                    Od = Rd,
                    md = dd.open,
                    Xd = dd.matches("dialog:modal"),
                    Kd = Od.open,
                    hd = Od.isModal,
                    vd = Xd !== hd,
                    Qd = md !== Kd;
                  if ((vd || md && Qd) && dd.close(), Kd && (Qd || vd)) try {
                    hd ? dd.showModal() : dd.show()
                  } catch (Fd) {
                    console.warn(Fd)
                  }
                  break
                }
              }
              break
            }
            case ZF.Text:
            case ZF.Comment:
            case ZF.CDATA:
              dd.textContent !== Od.data && (dd.textContent = Od.data)
          }(null == pR ? void 0 : pR.has(dd)) && (pR.delete(dd), null == (Wd = md.afterAppend) || Wd.call(md, dd, md.mirror.getId(dd)))
        }(dd, Od, md)
    }

    function gR(dd, Od, md, Wd) {
      const Fd = Array.from(dd.childNodes),
        Rd = Od.childNodes;
      if (0 === Fd.length && 0 === Rd.length) return;
      let Xd, Kd, hd = 0,
        vd = Fd.length - 1,
        Qd = 0,
        td = Rd.length - 1,
        od = Fd[hd],
        Nd = Fd[vd],
        qd = Rd[Qd],
        Hd = Rd[td];
      for (; hd <= vd && Qd <= td;)
        if (void 0 === od) od = Fd[++hd];
        else if (void 0 === Nd) Nd = Fd[--vd];
      else if (ER(od, qd, md.mirror, Wd)) od = Fd[++hd], qd = Rd[++Qd];
      else if (ER(Nd, Hd, md.mirror, Wd)) Nd = Fd[--vd], Hd = Rd[--td];
      else if (ER(od, Hd, md.mirror, Wd)) {
        try {
          dd.insertBefore(od, Nd.nextSibling)
        } catch (Td) {
          console.warn(Td)
        }
        od = Fd[++hd], Hd = Rd[--td]
      } else if (ER(Nd, qd, md.mirror, Wd)) {
        try {
          dd.insertBefore(Nd, od)
        } catch (Td) {
          console.warn(Td)
        }
        Nd = Fd[--vd], qd = Rd[++Qd]
      } else {
        if (!Xd) {
          Xd = {};
          for (let dd = hd; dd <= vd; dd++) {
            const Od = Fd[dd];
            Od && md.mirror.hasNode(Od) && (Xd[md.mirror.getId(Od)] = dd)
          }
        }
        Kd = Xd[Wd.getId(qd)];
        const Od = Fd[Kd];
        if (void 0 !== Kd && Od && ER(Od, qd, md.mirror, Wd)) {
          try {
            dd.insertBefore(Od, od)
          } catch (Td) {
            console.warn(Td)
          }
          Fd[Kd] = void 0
        } else {
          const Od = wR(qd, md.mirror, Wd);
          "#document" === dd.nodeName && od && (Od.nodeType === Od.DOCUMENT_TYPE_NODE && od.nodeType === od.DOCUMENT_TYPE_NODE || Od.nodeType === Od.ELEMENT_NODE && od.nodeType === od.ELEMENT_NODE) && (dd.removeChild(od), md.mirror.removeNodeFromMap(od), od = Fd[++hd]);
          try {
            dd.insertBefore(Od, od || null)
          } catch (Td) {
            console.warn(Td)
          }
        }
        qd = Rd[++Qd]
      }
      if (hd > vd) {
        const Od = Rd[td + 1];
        let Fd = null;
        for (Od && (Fd = md.mirror.QFd(Wd.getId(Od))); Qd <= td; ++Qd) {
          const Od = wR(Rd[Qd], md.mirror, Wd);
          try {
            dd.insertBefore(Od, Fd)
          } catch (Td) {
            console.warn(Td)
          }
        }
      } else if (Qd > td)
        for (; hd <= vd; hd++) {
          const Od = Fd[hd];
          if (Od && Od.parentNode === dd) try {
            dd.removeChild(Od), md.mirror.removeNodeFromMap(Od)
          } catch (Td) {
            console.warn(Td)
          }
        }
      let yd = dd.firstChild,
        bd = Od.firstChild;
      for (; null !== yd && null !== bd;) YR(yd, bd, md, Wd), yd = yd.nextSibling, bd = bd.nextSibling
    }

    function wR(dd, Od, md) {
      const Wd = md.getId(dd),
        Fd = md.getMeta(dd);
      let Rd = null;
      if (Wd > -1 && (Rd = Od.QFd(Wd)), null !== Rd && aR(Rd, dd)) return Rd;
      switch (dd.RRNodeType) {
        case ZF.Document:
          Rd = new Document;
          break;
        case ZF.DocumentType:
          Rd = document.implementation.createDocumentType(dd.name, dd.publicId, dd.systemId);
          break;
        case ZF.Element: {
          let Od = dd.tagName.toLowerCase();
          Od = TR[Od] || Od, Rd = Fd && "isSVG" in Fd && (null == Fd ? void 0 : Fd.isSVG) ? document.createElementNS(bR.svg, Od) : document.createElement(dd.tagName);
          break
        }
        case ZF.Text:
          Rd = document.createTextNode(dd.data);
          break;
        case ZF.Comment:
          Rd = document.createComment(dd.data);
          break;
        case ZF.CDATA:
          Rd = document.createCDATASection(dd.data)
      }
      Fd && Od.add(Rd, {
        ...Fd
      });
      try {
        null == pR || pR.add(Rd)
      } catch (Xd) {}
      return Rd
    }

    function aR(dd, Od) {
      return dd.nodeType === Od.nodeType && (dd.nodeType !== dd.ELEMENT_NODE || dd.tagName.toUpperCase() === Od.tagName)
    }

    function ER(dd, Od, md, Wd) {
      const Fd = md.getId(dd),
        Rd = Wd.getId(Od);
      return -1 !== Fd && Fd === Rd && aR(dd, Od)
    }
    class JR extends FR {
      constructor(dd) {
        super(), vW(this, "UNSERIALIZED_STARTING_ID", -2), vW(this, "_unserializedId", this.UNSERIALIZED_STARTING_ID), vW(this, "mirror", new LR), vW(this, "scrollData", null), dd && (this.mirror = dd)
      }
      get unserializedId() {
        return this._unserializedId--
      }
      createDocument(dd, Od, md) {
        return new JR
      }
      createDocumentType(dd, Od, md) {
        const Wd = new UR(dd, Od, md);
        return Wd.ownerDocument = this, Wd
      }
      createElement(dd) {
        const Od = dd.toUpperCase();
        let md;
        switch (Od) {
          case "AUDIO":
          case "VIDEO":
            md = new BR(Od);
            break;
          case "IFRAME":
            md = new VR(Od, this.mirror);
            break;
          case "CANVAS":
            md = new sR(Od);
            break;
          case "STYLE":
            md = new uR(Od);
            break;
          case "DIALOG":
            md = new SR(Od);
            break;
          default:
            md = new xR(Od)
        }
        return md.ownerDocument = this, md
      }
      createComment(dd) {
        const Od = new AR(dd);
        return Od.ownerDocument = this, Od
      }
      createCDATASection(dd) {
        const Od = new rR(dd);
        return Od.ownerDocument = this, Od
      }
      createTextNode(dd) {
        const Od = new iR(dd);
        return Od.ownerDocument = this, Od
      }
      destroyTree() {
        this.firstChild = null, this.lastChild = null, this.mirror.reset()
      }
      open() {
        super.open(), this._unserializedId = this.UNSERIALIZED_STARTING_ID
      }
    }
    const UR = RR;
    class xR extends XR {
      constructor() {
        super(...arguments), vW(this, "inputData", null), vW(this, "scrollData", null)
      }
    }
    class BR extends KR {}
    class SR extends hR {}
    class sR extends xR {
      constructor() {
        super(...arguments), vW(this, "rr_dataURL", null), vW(this, "canvasMutations", [])
      }
      getContext() {
        return null
      }
    }
    class uR extends xR {
      constructor() {
        super(...arguments), vW(this, "rules", [])
      }
    }
    class VR extends xR {
      constructor(dd, Od) {
        super(dd), vW(this, "contentDocument", new JR), this.contentDocument.mirror = Od
      }
    }
    const iR = vR,
      AR = QR,
      rR = tR;

    function GR(dd, Od, md, Wd) {
      let Fd;
      switch (dd.nodeType) {
        case yR.DOCUMENT_NODE:
          Wd && "IFRAME" === Wd.nodeName ? Fd = Wd.contentDocument : (Fd = Od, Fd.compatMode = dd.compatMode);
          break;
        case yR.DOCUMENT_TYPE_NODE: {
          const md = dd;
          Fd = Od.createDocumentType(md.name, md.publicId, md.systemId);
          break
        }
        case yR.ELEMENT_NODE: {
          const md = dd,
            Wd = (Rd = md) instanceof HTMLFormElement ? "FORM" : Rd.tagName.toUpperCase();
          Fd = Od.createElement(Wd);
          const Xd = Fd;
          for (const {
              name: dd,
              value: Od
            }
            of Array.from(md.attributes)) Xd.attributes[dd] = Od;
          md.scrollLeft && (Xd.scrollLeft = md.scrollLeft), md.scrollTop && (Xd.scrollTop = md.scrollTop);
          break
        }
        case yR.TEXT_NODE:
          Fd = Od.createTextNode(dd.textContent || "");
          break;
        case yR.CDATA_SECTION_NODE:
          Fd = Od.createCDATASection(dd.data);
          break;
        case yR.COMMENT_NODE:
          Fd = Od.createComment(dd.textContent || "");
          break;
        case yR.DOCUMENT_FRAGMENT_NODE:
          Fd = Wd.attachShadow({
            mode: "open"
          });
          break;
        default:
          return null
      }
      var Rd;
      let Xd = md.getMeta(dd);
      return Od instanceof JR && (Xd || (Xd = PR(Fd, Od.unserializedId), md.add(dd, Xd)), Od.mirror.add(Fd, {
        ...Xd
      })), Fd
    }

    function nR(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new oW,
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new JR;
      return function dd(Wd, Fd) {
        const Rd = GR(Wd, md, Od, Fd);
        if (null !== Rd)
          if ("IFRAME" !== (null == Fd ? void 0 : Fd.nodeName) && Wd.nodeType !== yR.DOCUMENT_FRAGMENT_NODE && (null == Fd || Fd.appendChild(Rd), Rd.parentNode = Fd, Rd.parentElement = Fd), "IFRAME" === Wd.nodeName) {
            const Od = Wd.contentDocument;
            Od && dd(Od, Rd)
          } else Wd.nodeType !== yR.DOCUMENT_NODE && Wd.nodeType !== yR.ELEMENT_NODE && Wd.nodeType !== yR.DOCUMENT_FRAGMENT_NODE || (Wd.nodeType === yR.ELEMENT_NODE && Wd.shadowRoot && dd(Wd.shadowRoot, Rd), Wd.childNodes.forEach((Od => dd(Od, Rd))))
      }(dd, null), md
    }
    class LR {
      constructor() {
        vW(this, "idNodeMap", new Map), vW(this, "nodeMetaMap", new WeakMap)
      }
      getId(dd) {
        var Od;
        if (!dd) return -1;
        return (null == (Od = this.getMeta(dd)) ? void 0 : Od.id) ?? -1
      }
      QFd(dd) {
        return this.idNodeMap.get(dd) || null
      }
      getIds() {
        return Array.from(this.idNodeMap.keys())
      }
      getMeta(dd) {
        return this.nodeMetaMap.get(dd) || null
      }
      removeNodeFromMap(dd) {
        const Od = this.getId(dd);
        this.idNodeMap.delete(Od), dd.childNodes && dd.childNodes.forEach((dd => this.removeNodeFromMap(dd)))
      }
      has(dd) {
        return this.idNodeMap.has(dd)
      }
      hasNode(dd) {
        return this.nodeMetaMap.has(dd)
      }
      add(dd, Od) {
        const md = Od.id;
        this.idNodeMap.set(md, dd), this.nodeMetaMap.set(dd, Od)
      }
      replace(dd, Od) {
        const md = this.QFd(dd);
        if (md) {
          const dd = this.nodeMetaMap.get(md);
          dd && this.nodeMetaMap.set(Od, dd)
        }
        this.idNodeMap.set(dd, Od)
      }
      reset() {
        this.idNodeMap = new Map, this.nodeMetaMap = new WeakMap
      }
    }

    function PR(dd, Od) {
      switch (dd.RRNodeType) {
        case ZF.Document:
          return {
            id: Od, type: dd.RRNodeType, childNodes: []
          };
        case ZF.DocumentType: {
          const md = dd;
          return {
            id: Od,
            type: dd.RRNodeType,
            name: md.name,
            publicId: md.publicId,
            systemId: md.systemId
          }
        }
        case ZF.Element:
          return {
            id: Od, type: dd.RRNodeType, tagName: dd.tagName.toLowerCase(), attributes: {}, childNodes: []
          };
        case ZF.Text:
        case ZF.Comment:
          return {
            id: Od, type: dd.RRNodeType, textContent: dd.textContent || ""
          };
        case ZF.CDATA:
          return {
            id: Od, type: dd.RRNodeType, textContent: ""
          }
      }
    }
    const zR = {
        Node: ["childNodes", "parentNode", "parentElement", "textContent", "ownerDocument", "firstChild", "lastChild", "nextSibling", "previousSibling"],
        ShadowRoot: ["host", "styleSheets"],
        Element: ["shadowRoot", "querySelector", "querySelectorAll"],
        MutationObserver: []
      },
      cR = {
        Node: ["contains", "getRootNode"],
        ShadowRoot: ["getSelection"],
        Element: [],
        MutationObserver: ["constructor"]
      },
      jR = {},
      DR = {};

    function eR(dd) {
      if (jR[dd]) return jR[dd];
      const Od = globalThis[dd],
        md = Od.prototype,
        Wd = dd in zR ? zR[dd] : void 0,
        Fd = Boolean(Wd && Wd.every((dd => {
          var Od, Wd;
          return Boolean(null == (Wd = null == (Od = Object.getOwnPropertyDescriptor(md, dd)) ? void 0 : Od.get) ? void 0 : Wd.toString().includes("[native code]"))
        }))),
        Rd = dd in cR ? cR[dd] : void 0,
        Xd = Boolean(Rd && Rd.every((dd => {
          var Od;
          return "function" === typeof md[dd] && (null == (Od = md[dd]) ? void 0 : Od.toString().includes("[native code]"))
        })));
      if (Fd && Xd && !globalThis.Zone) return jR[dd] = Od.prototype, Od.prototype;
      try {
        const Wd = document.createElement("iframe");
        Wd.style.display = "none", document.body.appendChild(Wd);
        const Fd = Wd.contentWindow;
        if (!Fd) return Od.prototype;
        const Rd = Fd[dd].prototype;
        if (!Rd) return Wd.remove(), md;
        const Xd = navigator.userAgent;
        return Xd.includes("Safari") && !Xd.includes("Chrome") ? (Wd.classList.add("rr-block"), Wd.setAttribute("__rrwebUntaintedMutationObserver", ""), DR[dd] = () => Wd.remove()) : Wd.remove(), jR[dd] = Rd
      } catch {
        return md
      }
    }
    const IR = {};

    function lR(dd, Od, md) {
      var Wd, Fd;
      const Rd = null == (Wd = IR[dd]) ? void 0 : Wd[md];
      if (Rd) return Rd.call(Od);
      const Xd = eR(dd),
        Kd = null == (Fd = Object.getOwnPropertyDescriptor(Xd, md)) ? void 0 : Fd.get;
      return Kd ? ((IR[dd] || (IR[dd] = {}))[md] = Kd, Kd.call(Od)) : Od[md]
    }
    const CR = {};

    function ZR(dd, Od, md) {
      const Wd = `${dd}.${String(md)}`;
      if (CR[Wd]) return CR[Wd].bind(Od);
      const Fd = eR(dd)[md];
      return "function" !== typeof Fd ? Od[md] : (CR[Wd] = Fd, Fd.bind(Od))
    }

    function kR() {
      return [eR("MutationObserver").constructor, DR.MutationObserver ?? (() => {})]
    }
    let fR = Date.now;

    function MR(dd, Od, md) {
      try {
        if (!(Od in dd)) return () => {};
        const Wd = dd[Od],
          Fd = md(Wd);
        return "function" === typeof Fd && (Fd.prototype = Fd.prototype || {}, Object.defineProperties(Fd, {
          __rrweb_original__: {
            enumerable: !1,
            value: Wd
          }
        })), dd[Od] = Fd, () => {
          dd[Od] = Wd
        }
      } catch {
        return () => {}
      }
    }
    /[1-9][0-9]{12}/.test(Date.now().toString()) || (fR = () => (new Date).getTime());
    const dX = {
      ownerDocument: function(dd) {
        return lR("Node", dd, "ownerDocument")
      },
      childNodes: function(dd) {
        return lR("Node", dd, "childNodes")
      },
      parentNode: function(dd) {
        return lR("Node", dd, "parentNode")
      },
      parentElement: function(dd) {
        return lR("Node", dd, "parentElement")
      },
      textContent: function(dd) {
        return lR("Node", dd, "textContent")
      },
      firstChild: function(dd) {
        return lR("Node", dd, "firstChild")
      },
      lastChild: function(dd) {
        return lR("Node", dd, "lastChild")
      },
      nextSibling: function(dd) {
        return lR("Node", dd, "nextSibling")
      },
      previousSibling: function(dd) {
        return lR("Node", dd, "previousSibling")
      },
      contains: function(dd, Od) {
        return ZR("Node", dd, "contains")(Od)
      },
      getRootNode: function(dd) {
        return ZR("Node", dd, "getRootNode")()
      },
      host: function(dd) {
        return dd && "host" in dd ? lR("ShadowRoot", dd, "host") : null
      },
      styleSheets: function(dd) {
        return dd.styleSheets
      },
      shadowRoot: function(dd) {
        return dd && "shadowRoot" in dd ? lR("Element", dd, "shadowRoot") : null
      },
      querySelector: function(dd, Od) {
        return lR("Element", dd, "querySelector")(Od)
      },
      querySelectorAll: function(dd, Od) {
        return lR("Element", dd, "querySelectorAll")(Od)
      },
      nowTimestamp: fR,
      mutationObserverCtor: kR,
      patch: MR
    };

    function OX(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document;
      const Wd = {
        capture: !0,
        passive: !0
      };
      return md.addEventListener(dd, Od, Wd), () => md.removeEventListener(dd, Od, Wd)
    }
    const mX = "Please stop import mirror directly. Instead of that,\r\nnow you can use replayer.getMirror() to access the mirror instance of a replayer,\r\nor you can use record.mirror to access the mirror instance during recording.";
    let WX = {
      map: {},
      getId: () => (console.error(mX), -1),
      QFd: () => (console.error(mX), null),
      removeNodeFromMap() {
        console.error(mX)
      },
      has: () => (console.error(mX), !1),
      reset() {
        console.error(mX)
      }
    };

    function FX(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        Wd = null,
        Fd = 0;
      return function() {
        for (var Rd = arguments.length, Xd = new Array(Rd), Kd = 0; Kd < Rd; Kd++) Xd[Kd] = arguments[Kd];
        const hd = Date.now();
        Fd || !1 !== md.leading || (Fd = hd);
        const vd = Od - (hd - Fd),
          Qd = this;
        vd <= 0 || vd > Od ? (Wd && (clearTimeout(Wd), Wd = null), Fd = hd, dd.apply(Qd, Xd)) : Wd || !1 === md.trailing || (Wd = setTimeout((() => {
          Fd = !1 === md.leading ? 0 : Date.now(), Wd = null, dd.apply(Qd, Xd)
        }), vd))
      }
    }

    function RX(dd, Od, md, Wd) {
      let Fd = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : window;
      const Rd = Fd.Object.getOwnPropertyDescriptor(dd, Od);
      return Fd.Object.defineProperty(dd, Od, Wd ? md : {
        set(dd) {
          setTimeout((() => {
            md.set.call(this, dd)
          }), 0), Rd && Rd.set && Rd.set.call(this, dd)
        }
      }), () => RX(dd, Od, Rd || {}, !0)
    }

    function XX(dd) {
      var Od, md, Wd, Fd;
      const Rd = dd.document;
      return {
        left: Rd.scrollingElement ? Rd.scrollingElement.scrollLeft : void 0 !== dd.pageXOffset ? dd.pageXOffset : Rd.documentElement.scrollLeft || (null == Rd ? void 0 : Rd.body) && (null == (Od = dX.parentElement(Rd.body)) ? void 0 : Od.scrollLeft) || (null == (md = null == Rd ? void 0 : Rd.body) ? void 0 : md.scrollLeft) || 0,
        top: Rd.scrollingElement ? Rd.scrollingElement.scrollTop : void 0 !== dd.pageYOffset ? dd.pageYOffset : (null == Rd ? void 0 : Rd.documentElement.scrollTop) || (null == Rd ? void 0 : Rd.body) && (null == (Wd = dX.parentElement(Rd.body)) ? void 0 : Wd.scrollTop) || (null == (Fd = null == Rd ? void 0 : Rd.body) ? void 0 : Fd.scrollTop) || 0
      }
    }

    function KX() {
      return window.innerHeight || document.documentElement && document.documentElement.clientHeight || document.body && document.body.clientHeight
    }

    function hX() {
      return window.innerWidth || document.documentElement && document.documentElement.clientWidth || document.body && document.body.clientWidth
    }

    function vX(dd) {
      if (!dd) return null;
      return dd.nodeType === dd.ELEMENT_NODE ? dd : dX.parentElement(dd)
    }

    function QX(dd, Od, md, Wd) {
      if (!dd) return !1;
      const Fd = vX(dd);
      if (!Fd) return !1;
      try {
        if ("string" === typeof Od) {
          if (Fd.classList.contains(Od)) return !0;
          if (Wd && null !== Fd.closest("." + Od)) return !0
        } else if (RO(Fd, Od, Wd)) return !0
      } catch (Rd) {}
      if (md) {
        if (Fd.matches(md)) return !0;
        if (Wd && null !== Fd.closest(md)) return !0
      }
      return !1
    }

    function tX(dd, Od) {
      return -1 !== Od.getId(dd)
    }

    function oX(dd, Od, md) {
      return !("TITLE" !== dd.tagName || !md.headTitleMutations) || -2 === Od.getId(dd)
    }

    function NX(dd, Od) {
      if (gd(dd)) return !1;
      const md = Od.getId(dd);
      if (!Od.has(md)) return !0;
      const Wd = dX.parentNode(dd);
      return (!Wd || Wd.nodeType !== dd.DOCUMENT_NODE) && (!Wd || NX(Wd, Od))
    }

    function qX(dd) {
      return Boolean(dd.changedTouches)
    }

    function HX() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window;
      "NodeList" in dd && !dd.NodeList.prototype.forEach && (dd.NodeList.prototype.forEach = Array.prototype.forEach), "DOMTokenList" in dd && !dd.DOMTokenList.prototype.forEach && (dd.DOMTokenList.prototype.forEach = Array.prototype.forEach)
    }

    function yX(dd) {
      const Od = {},
        md = (dd, md) => {
          const Wd = {
            value: dd,
            parent: md,
            children: []
          };
          return Od[dd.node.id] = Wd, Wd
        },
        Wd = [];
      for (const Fd of dd) {
        const {
          nextId: dd,
          parentId: Rd
        } = Fd;
        if (dd && dd in Od) {
          const Rd = Od[dd];
          if (Rd.parent) {
            const dd = Rd.parent.children.indexOf(Rd);
            Rd.parent.children.splice(dd, 0, md(Fd, Rd.parent))
          } else {
            const dd = Wd.indexOf(Rd);
            Wd.splice(dd, 0, md(Fd, null))
          }
        } else if (Rd in Od) {
          const dd = Od[Rd];
          dd.children.push(md(Fd, dd))
        } else Wd.push(md(Fd, null))
      }
      return Wd
    }

    function bX(dd, Od) {
      Od(dd.value);
      for (let md = dd.children.length - 1; md >= 0; md--) bX(dd.children[md], Od)
    }

    function TX(dd, Od) {
      return Boolean("IFRAME" === dd.nodeName && Od.getMeta(dd))
    }

    function pX(dd, Od) {
      return Boolean("LINK" === dd.nodeName && dd.nodeType === dd.ELEMENT_NODE && dd.getAttribute && "stylesheet" === dd.getAttribute("rel") && Od.getMeta(dd))
    }

    function YX(dd, Od) {
      var md, Wd;
      const Fd = null == (Wd = null == (md = dd.ownerDocument) ? void 0 : md.defaultView) ? void 0 : Wd.frameElement;
      if (!Fd || Fd === Od) return {
        x: 0,
        y: 0,
        relativeScale: 1,
        absoluteScale: 1
      };
      const Rd = Fd.getBoundingClientRect(),
        Xd = YX(Fd, Od),
        Kd = Rd.height / Fd.clientHeight;
      return {
        x: Rd.x * Xd.relativeScale + Xd.x,
        y: Rd.y * Xd.relativeScale + Xd.y,
        relativeScale: Kd,
        absoluteScale: Xd.absoluteScale * Kd
      }
    }

    function gX(dd) {
      return !!dd && (dd instanceof WR && "shadowRoot" in dd ? Boolean(dd.shadowRoot) : Boolean(dX.shadowRoot(dd)))
    }

    function wX(dd, Od) {
      const md = null == dd ? void 0 : dd[Od[0]];
      return md ? 1 === Od.length ? md : wX(md.cssRules, Od.slice(1)) : null
    }

    function aX(dd) {
      const Od = [...dd],
        md = Od.pop();
      return {
        positions: Od,
        index: md
      }
    }

    function EX(dd) {
      const Od = new Set,
        md = [];
      for (let Wd = dd.length; Wd--;) {
        const Fd = dd[Wd];
        Od.has(Fd.id) || (md.push(Fd), Od.add(Fd.id))
      }
      return md
    }
    "undefined" !== typeof window && window.Proxy && window.Reflect && (WX = new Proxy(WX, {
      get: (dd, Od, md) => ("map" === Od && console.error(mX), Reflect.get(dd, Od, md))
    }));
    class JX {
      constructor() {
        Rd(this, "id", 1), Rd(this, "styleIDMap", new WeakMap), Rd(this, "idStyleMap", new Map)
      }
      getId(dd) {
        return this.styleIDMap.get(dd) ?? -1
      }
      has(dd) {
        return this.styleIDMap.has(dd)
      }
      add(dd, Od) {
        if (this.has(dd)) return this.getId(dd);
        let md;
        return md = void 0 === Od ? this.id++ : Od, this.styleIDMap.set(dd, md), this.idStyleMap.set(md, dd), md
      }
      getStyle(dd) {
        return this.idStyleMap.get(dd) || null
      }
      reset() {
        this.styleIDMap = new WeakMap, this.idStyleMap = new Map, this.id = 1
      }
      generateId() {
        return this.id++
      }
    }

    function UX(dd) {
      var Od;
      let md = null;
      return "getRootNode" in dd && (null == (Od = dX.getRootNode(dd)) ? void 0 : Od.nodeType) === Node.DOCUMENT_FRAGMENT_NODE && dX.host(dX.getRootNode(dd)) && (md = dX.host(dX.getRootNode(dd))), md
    }

    function xX(dd) {
      let Od, md = dd;
      for (; Od = UX(md);) md = Od;
      return md
    }

    function BX(dd) {
      const Od = dX.ownerDocument(dd);
      if (!Od) return !1;
      const md = xX(dd);
      return dX.contains(Od, md)
    }

    function SX(dd) {
      const Od = dX.ownerDocument(dd);
      return !!Od && (dX.contains(Od, dd) || BX(dd))
    }
    Symbol.toStringTag;
    var sX = (dd => (dd[dd.DomContentLoaded = 0] = "DomContentLoaded", dd[dd.Load = 1] = "Load", dd[dd.FullSnapshot = 2] = "FullSnapshot", dd[dd.IncrementalSnapshot = 3] = "IncrementalSnapshot", dd[dd.Meta = 4] = "Meta", dd[dd.Custom = 5] = "Custom", dd[dd.Plugin = 6] = "Plugin", dd[dd.Asset = 7] = "Asset", dd))(sX || {}),
      uX = (dd => (dd[dd.Mutation = 0] = "Mutation", dd[dd.MouseMove = 1] = "MouseMove", dd[dd.MouseInteraction = 2] = "MouseInteraction", dd[dd.Scroll = 3] = "Scroll", dd[dd.ViewportResize = 4] = "ViewportResize", dd[dd.Input = 5] = "Input", dd[dd.TouchMove = 6] = "TouchMove", dd[dd.MediaInteraction = 7] = "MediaInteraction", dd[dd.StyleSheetRule = 8] = "StyleSheetRule", dd[dd.CanvasMutation = 9] = "CanvasMutation", dd[dd.Font = 10] = "Font", dd[dd.Log = 11] = "Log", dd[dd.Drag = 12] = "Drag", dd[dd.StyleDeclaration = 13] = "StyleDeclaration", dd[dd.Selection = 14] = "Selection", dd[dd.AdoptedStyleSheet = 15] = "AdoptedStyleSheet", dd[dd.CustomElement = 16] = "CustomElement", dd))(uX || {}),
      VX = (dd => (dd[dd.MouseUp = 0] = "MouseUp", dd[dd.MouseDown = 1] = "MouseDown", dd[dd.Click = 2] = "Click", dd[dd.ContextMenu = 3] = "ContextMenu", dd[dd.DblClick = 4] = "DblClick", dd[dd.Focus = 5] = "Focus", dd[dd.Blur = 6] = "Blur", dd[dd.TouchStart = 7] = "TouchStart", dd[dd.TouchMove_Departed = 8] = "TouchMove_Departed", dd[dd.TouchEnd = 9] = "TouchEnd", dd[dd.TouchCancel = 10] = "TouchCancel", dd))(VX || {}),
      iX = (dd => (dd[dd.Mouse = 0] = "Mouse", dd[dd.Pen = 1] = "Pen", dd[dd.Touch = 2] = "Touch", dd))(iX || {}),
      AX = (dd => (dd[dd["2D"] = 0] = "2D", dd[dd.WebGL = 1] = "WebGL", dd[dd.WebGL2 = 2] = "WebGL2", dd))(AX || {}),
      rX = (dd => (dd[dd.Play = 0] = "Play", dd[dd.Pause = 1] = "Pause", dd[dd.Seeked = 2] = "Seeked", dd[dd.VolumeChange = 3] = "VolumeChange", dd[dd.RateChange = 4] = "RateChange", dd))(rX || {}),
      GX = (dd => (dd.Start = "start", dd.Pause = "pause", dd.Resume = "resume", dd.Resize = "resize", dd.Finish = "finish", dd.FullsnapshotRebuilded = "fullsnapshot-rebuilded", dd.LoadStylesheetStart = "load-stylesheet-start", dd.LoadStylesheetEnd = "load-stylesheet-end", dd.SkipStart = "skip-start", dd.SkipEnd = "skip-end", dd.MouseInteraction = "mouse-interaction", dd.EventCast = "event-cast", dd.CustomEvent = "custom-event", dd.Flush = "flush", dd.StateChange = "state-change", dd.PlayBack = "play-back", dd.Destroy = "destroy", dd))(GX || {}),
      nX = (dd => (dd[dd.Document = 0] = "Document", dd[dd.DocumentType = 1] = "DocumentType", dd[dd.Element = 2] = "Element", dd[dd.Text = 3] = "Text", dd[dd.CDATA = 4] = "CDATA", dd[dd.Comment = 5] = "Comment", dd))(nX || {});
    const LX = (dd, Od) => `${dd}@${Od}`;
    class PX {
      constructor() {
        Rd(this, "frozen", !1), Rd(this, "locked", !1), Rd(this, "texts", []), Rd(this, "attributes", []), Rd(this, "attributeMap", new WeakMap), Rd(this, "removes", []), Rd(this, "mapRemoves", []), Rd(this, "movedMap", {}), Rd(this, "addedSet", new Set), Rd(this, "movedSet", new Set), Rd(this, "droppedSet", new Set), Rd(this, "removesSubTreeCache", new Set), Rd(this, "mutationCb"), Rd(this, "blockClass"), Rd(this, "blockSelector"), Rd(this, "maskTextClass"), Rd(this, "maskTextSelector"), Rd(this, "inlineStylesheet"), Rd(this, "maskInputOptions"), Rd(this, "maskTextFn"), Rd(this, "maskInputFn"), Rd(this, "keepIframeSrcFn"), Rd(this, "recordCanvas"), Rd(this, "inlineImages"), Rd(this, "slimDOMOptions"), Rd(this, "dataURLOptions"), Rd(this, "doc"), Rd(this, "mirror"), Rd(this, "iframeManager"), Rd(this, "stylesheetManager"), Rd(this, "shadowDomManager"), Rd(this, "canvasManager"), Rd(this, "processedNodeManager"), Rd(this, "unattachedDoc"), Rd(this, "processMutations", (dd => {
          dd.forEach(this.processMutation), this.emit()
        })), Rd(this, "emit", (() => {
          if (this.frozen || this.locked) return;
          const dd = [],
            Od = new Set;
          for (; this.mapRemoves.length;) this.mirror.removeNodeFromMap(this.mapRemoves.shift());
          for (const td of this.movedSet) {
            const dd = dX.parentNode(td);
            this.removesSubTreeCache.has(dd) && !this.movedSet.has(dd) || this.addedSet.add(td)
          }
          let md = null,
            Wd = null,
            Fd = -1,
            Rd = null,
            Xd = !1;
          const Kd = new Set,
            hd = this.addedSet.values();
          let vd = hd.next();
          for (; this.addedSet.size;) {
            if (null !== md && this.addedSet.has(dX.previousSibling(md))) Rd = md, md = dX.previousSibling(md);
            else {
              for (this.addedSet.has(vd.value) || (vd = hd.next()), md = vd.value; Wd = dX.parentNode(md), this.addedSet.has(Wd);) md = Wd;
              if (Kd.has(Wd)) Wd = null;
              else if (Wd) {
                if (SX(Wd) ? (Xd = cX(this.droppedSet, Wd) || this.removesSubTreeCache.has(Wd), Xd && cX(this.movedSet, md) && (Xd = !1)) : Xd = !0, this.addedSet.has(dX.lastChild(Wd))) md = dX.lastChild(Wd), Rd = null;
                else
                  for (; Rd = dX.nextSibling(md), this.addedSet.has(Rd);) md = Rd;
                if (Fd = gd(Wd) ? this.mirror.getId(UX(md)) : this.mirror.getId(Wd), -1 === Fd && Wd.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
                  const dd = dX.host(Wd);
                  Fd = this.mirror.getId(dd)
                }
              }
            }
            if (this.addedSet.delete(md), !Wd || -1 === Fd) {
              Kd.add(md);
              continue
            }
            if (Xd) {
              this.droppedSet.add(md);
              continue
            }
            let Qd = !1;
            if (md.nodeType === Node.TEXT_NODE) {
              const dd = Wd.tagName;
              if ("TEXTAREA" === dd) continue;
              "STYLE" === dd && Od.has(Fd) && (Qd = !0)
            }
            let td = Rd ? this.mirror.getId(Rd) : null;
            for (; - 2 === td;) Rd = Rd && dX.nextSibling(Rd), td = Rd && this.mirror.getId(Rd);
            if (-1 === td) {
              console.warn("Couldn't record new node. Couldn't find mirror id for nextSibling:", Rd), md = null;
              continue
            }
            const od = QO(md, {
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
              onSerialize: dd => {
                TX(dd, this.mirror) && this.iframeManager.addIframe(dd), pX(dd, this.mirror) && this.stylesheetManager.trackLinkElement(dd), gX(md) && this.shadowDomManager.addShadowRoot(dX.shadowRoot(md), this.doc)
              },
              onIframeLoad: (dd, Od) => {
                this.iframeManager.attachIframe(dd, Od), this.shadowDomManager.observeAttachShadow(dd)
              },
              onStylesheetLoad: (dd, Od) => {
                this.stylesheetManager.attachLinkElement(dd, Od)
              },
              cssCaptured: Qd
            });
            od && (dd.push({
              parentId: Fd,
              nextId: td,
              node: od
            }), Od.add(od.id))
          }
          const Qd = {
            texts: this.texts.map((dd => {
              const Od = dd.node,
                md = dX.parentNode(Od);
              return md && "TEXTAREA" === md.tagName && this.genTextAreaValueMutation(md), {
                id: this.mirror.getId(Od),
                value: dd.value
              }
            })).filter((dd => !Od.has(dd.id))).filter((dd => this.mirror.has(dd.id))),
            attributes: this.attributes.map((dd => {
              const {
                attributes: Od
              } = dd;
              if ("string" === typeof Od.style) {
                const md = JSON.stringify(dd.styleDiff),
                  Wd = JSON.stringify(dd._unchangedStyles);
                md.length < Od.style.length && (md + Wd).split("var(").length === Od.style.split("var(").length && (Od.style = dd.styleDiff)
              }
              return {
                id: this.mirror.getId(dd.node),
                attributes: Od
              }
            })).filter((dd => !Od.has(dd.id))).filter((dd => this.mirror.has(dd.id))),
            removes: this.removes,
            adds: dd
          };
          (Qd.texts.length || Qd.attributes.length || Qd.removes.length || Qd.adds.length) && (this.texts = [], this.attributes = [], this.attributeMap = new WeakMap, this.removes = [], this.addedSet = new Set, this.movedSet = new Set, this.droppedSet = new Set, this.removesSubTreeCache = new Set, this.movedMap = {}, this.mutationCb(Qd))
        })), Rd(this, "genTextAreaValueMutation", (dd => {
          let Od = this.attributeMap.get(dd);
          Od || (Od = {
            node: dd,
            attributes: {},
            styleDiff: {},
            _unchangedStyles: {}
          }, this.attributes.push(Od), this.attributeMap.set(dd, Od));
          const md = Array.from(dX.childNodes(dd), (dd => dX.textContent(dd) || "")).join("");
          Od.attributes.value = Bd({
            element: dd,
            maskInputOptions: this.maskInputOptions,
            tagName: dd.tagName,
            type: ud(dd),
            value: md,
            maskInputFn: this.maskInputFn
          })
        })), Rd(this, "processMutation", (dd => {
          if (!oX(dd.target, this.mirror, this.slimDOMOptions)) switch (dd.type) {
            case "characterData": {
              const Od = dX.textContent(dd.target);
              QX(dd.target, this.blockClass, this.blockSelector, !1) || Od === dd.oldValue || this.texts.push({
                value: XO(dd.target, this.maskTextClass, this.maskTextSelector, !0) && Od ? this.maskTextFn ? this.maskTextFn(Od, vX(dd.target)) : Od.replace(/[\S]/g, "*") : Od,
                node: dd.target
              });
              break
            }
            case "attributes": {
              const md = dd.target,
                Wd = Sd(md.tagName);
              let Fd = dd.attributeName,
                Rd = dd.target.getAttribute(Fd);
              if ("value" === Fd) {
                const dd = ud(md);
                Rd = Bd({
                  element: md,
                  maskInputOptions: this.maskInputOptions,
                  tagName: md.tagName,
                  type: dd,
                  value: Rd,
                  maskInputFn: this.maskInputFn
                })
              }
              if (QX(dd.target, this.blockClass, this.blockSelector, !1) || Rd === dd.oldValue) return;
              let Xd = this.attributeMap.get(dd.target);
              if ("iframe" === Wd && "src" === Fd && !this.keepIframeSrcFn(Rd)) {
                if (md.contentDocument) return;
                Fd = "rr_src"
              }
              if (Xd || (Xd = {
                  node: dd.target,
                  attributes: {},
                  styleDiff: {},
                  _unchangedStyles: {}
                }, this.attributes.push(Xd), this.attributeMap.set(dd.target, Xd)), "type" === Fd && "input" === Wd && "password" === (dd.oldValue || "").toLowerCase() && md.setAttribute("data-rr-is-password", "true"), !FO(Wd, Fd))
                if (Xd.attributes[Fd] = WO(this.doc, Wd, Sd(Fd), Rd), "style" === Fd) {
                  if (!this.unattachedDoc) try {
                    this.unattachedDoc = document.implementation.createHTMLDocument()
                  } catch (Od) {
                    this.unattachedDoc = this.doc
                  }
                  const Wd = this.unattachedDoc.createElement("span");
                  dd.oldValue && Wd.setAttribute("style", dd.oldValue);
                  for (const dd of Array.from(md.style)) {
                    const Od = md.style.getPropertyValue(dd),
                      Fd = md.style.getPropertyPriority(dd);
                    Od !== Wd.style.getPropertyValue(dd) || Fd !== Wd.style.getPropertyPriority(dd) ? Xd.styleDiff[dd] = "" === Fd ? Od : [Od, Fd] : Xd._unchangedStyles[dd] = [Od, Fd]
                  }
                  for (const dd of Array.from(Wd.style)) "" === md.style.getPropertyValue(dd) && (Xd.styleDiff[dd] = !1)
                } else "open" === Fd && "DIALOG" === md.tagName && (md.matches("dialog:modal") ? Xd.attributes.rr_open_mode = "modal" : Xd.attributes.rr_open_mode = "non-modal");
              break
            }
            case "childList":
              if (QX(dd.target, this.blockClass, this.blockSelector, !0)) return;
              if ("TEXTAREA" === dd.target.tagName) return void this.genTextAreaValueMutation(dd.target);
              dd.addedNodes.forEach((Od => this.genAdds(Od, dd.target))), dd.removedNodes.forEach((Od => {
                const md = this.mirror.getId(Od),
                  Wd = gd(dd.target) ? this.mirror.getId(dX.host(dd.target)) : this.mirror.getId(dd.target);
                QX(dd.target, this.blockClass, this.blockSelector, !1) || oX(Od, this.mirror, this.slimDOMOptions) || !tX(Od, this.mirror) || (this.addedSet.has(Od) ? (zX(this.addedSet, Od), this.droppedSet.add(Od)) : this.addedSet.has(dd.target) && -1 === md || NX(dd.target, this.mirror) || (this.movedSet.has(Od) && this.movedMap[LX(md, Wd)] ? zX(this.movedSet, Od) : (this.removes.push({
                  parentId: Wd,
                  id: md,
                  isShadow: !(!gd(dd.target) || !wd(dd.target)) || void 0
                }), function(dd, Od) {
                  const md = [dd];
                  for (; md.length;) {
                    const dd = md.pop();
                    Od.has(dd) || (Od.add(dd), dX.childNodes(dd).forEach((dd => md.push(dd))))
                  }
                }(Od, this.removesSubTreeCache))), this.mapRemoves.push(Od))
              }))
          }
        })), Rd(this, "genAdds", ((dd, Od) => {
          if (!this.processedNodeManager.inOtherBuffer(dd, this) && !this.addedSet.has(dd) && !this.movedSet.has(dd)) {
            if (this.mirror.hasNode(dd)) {
              if (oX(dd, this.mirror, this.slimDOMOptions)) return;
              this.movedSet.add(dd);
              let md = null;
              Od && this.mirror.hasNode(Od) && (md = this.mirror.getId(Od)), md && -1 !== md && (this.movedMap[LX(this.mirror.getId(dd), md)] = !0)
            } else this.addedSet.add(dd), this.droppedSet.delete(dd);
            QX(dd, this.blockClass, this.blockSelector, !1) || (dX.childNodes(dd).forEach((dd => this.genAdds(dd))), gX(dd) && dX.childNodes(dX.shadowRoot(dd)).forEach((Od => {
              this.processedNodeManager.add(Od, this), this.genAdds(Od, dd)
            })))
          }
        }))
      }
      init(dd) {
        ["mutationCb", "blockClass", "blockSelector", "maskTextClass", "maskTextSelector", "inlineStylesheet", "maskInputOptions", "maskTextFn", "maskInputFn", "keepIframeSrcFn", "recordCanvas", "inlineImages", "slimDOMOptions", "dataURLOptions", "doc", "mirror", "iframeManager", "stylesheetManager", "shadowDomManager", "canvasManager", "processedNodeManager"].forEach((Od => {
          this[Od] = dd[Od]
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

    function zX(dd, Od) {
      dd.delete(Od), dX.childNodes(Od).forEach((Od => zX(dd, Od)))
    }

    function cX(dd, Od) {
      return 0 !== dd.size && jX(dd, Od)
    }

    function jX(dd, Od) {
      if (dd.has(Od)) return !0;
      const md = dX.parentNode(Od);
      return !!md && jX(dd, md)
    }
    let DX;
    const eX = dd => {
        if (!DX) return dd;
        return function() {
          try {
            return dd(...arguments)
          } catch (Od) {
            if (DX && !0 === DX(Od)) return;
            throw Od
          }
        }
      },
      IX = [];

    function lX(dd) {
      try {
        if ("composedPath" in dd) {
          const Od = dd.composedPath();
          if (Od.length) return Od[0]
        } else if ("path" in dd && dd.path.length) return dd.path[0]
      } catch {}
      return dd && dd.target
    }

    function CX(dd, Od) {
      const md = new PX;
      IX.push(md), md.init(dd);
      const [Wd, Fd] = kR(), Rd = new Wd(eX(md.processMutations.bind(md)));
      return Rd.observe(Od, {
        attributes: !0,
        attributeOldValue: !0,
        characterData: !0,
        characterDataOldValue: !0,
        childList: !0,
        subtree: !0
      }), [Rd, Fd]
    }

    function ZX(dd) {
      let {
        mouseInteractionCb: Od,
        doc: md,
        mirror: Wd,
        blockClass: Fd,
        blockSelector: Rd,
        sampling: Xd
      } = dd;
      if (!1 === Xd.mouseInteraction) return () => {};
      const Kd = !0 === Xd.mouseInteraction || void 0 === Xd.mouseInteraction ? {} : Xd.mouseInteraction,
        hd = [];
      let vd = null;
      return Object.keys(VX).filter((dd => Number.isNaN(Number(dd)) && !dd.endsWith("_Departed") && !1 !== Kd[dd])).forEach((dd => {
        let Xd = Sd(dd);
        const Kd = (dd => md => {
          const Xd = lX(md);
          if (QX(Xd, Fd, Rd, !0)) return;
          let Kd = null,
            hd = dd;
          if ("pointerType" in md) {
            switch (md.pointerType) {
              case "mouse":
                Kd = iX.Mouse;
                break;
              case "touch":
                Kd = iX.Touch;
                break;
              case "pen":
                Kd = iX.Pen
            }
            Kd === iX.Touch ? VX[dd] === VX.MouseDown ? hd = "TouchStart" : VX[dd] === VX.MouseUp && (hd = "TouchEnd") : iX.Pen
          } else qX(md) && (Kd = iX.Touch);
          null !== Kd ? (vd = Kd, (hd.startsWith("Touch") && Kd === iX.Touch || hd.startsWith("Mouse") && Kd === iX.Mouse) && (Kd = null)) : VX[dd] === VX.Click && (Kd = vd, vd = null);
          const Qd = qX(md) ? md.changedTouches[0] : md;
          if (!Qd) return;
          const td = Wd.getId(Xd),
            {
              clientX: od,
              clientY: Nd
            } = Qd;
          eX(Od)({
            type: VX[hd],
            id: td,
            x: od,
            y: Nd,
            ...null !== Kd && {
              pointerType: Kd
            }
          })
        })(dd);
        if (window.PointerEvent) switch (VX[dd]) {
          case VX.MouseDown:
          case VX.MouseUp:
            Xd = Xd.replace("mouse", "pointer");
            break;
          case VX.TouchStart:
          case VX.TouchEnd:
            return
        }
        hd.push(OX(Xd, Kd, md))
      })), eX((() => {
        hd.forEach((dd => dd()))
      }))
    }

    function kX(dd) {
      let {
        scrollCb: Od,
        doc: md,
        mirror: Wd,
        blockClass: Fd,
        blockSelector: Rd,
        sampling: Xd
      } = dd;
      const Kd = eX(FX(eX((dd => {
        const Xd = lX(dd);
        if (!Xd || QX(Xd, Fd, Rd, !0)) return;
        const Kd = Wd.getId(Xd);
        if (Xd === md && md.defaultView) {
          const dd = XX(md.defaultView);
          Od({
            id: Kd,
            x: dd.left,
            y: dd.top
          })
        } else Od({
          id: Kd,
          x: Xd.scrollLeft,
          y: Xd.scrollTop
        })
      })), Xd.scroll || 100));
      return OX("scroll", Kd, md)
    }
    const fX = ["INPUT", "TEXTAREA", "SELECT"],
      MX = new WeakMap;

    function dK(dd) {
      return function dd(Od, md) {
        if (FK("CSSGroupingRule") && Od.parentRule instanceof CSSGroupingRule || FK("CSSMediaRule") && Od.parentRule instanceof CSSMediaRule || FK("CSSSupportsRule") && Od.parentRule instanceof CSSSupportsRule || FK("CSSConditionRule") && Od.parentRule instanceof CSSConditionRule) {
          const Wd = Array.from(Od.parentRule.cssRules).indexOf(Od);
          return md.unshift(Wd), dd(Od.parentRule, md)
        }
        if (Od.parentStyleSheet) {
          const dd = Array.from(Od.parentStyleSheet.cssRules).indexOf(Od);
          md.unshift(dd)
        }
        return md
      }(dd, [])
    }

    function OK(dd, Od, md) {
      let Wd, Fd;
      return dd ? (dd.ownerNode ? Wd = Od.getId(dd.ownerNode) : Fd = md.getId(dd), {
        styleId: Fd,
        id: Wd
      }) : {}
    }

    function mK(dd, Od) {
      let {
        mirror: md,
        stylesheetManager: Wd
      } = dd;
      var Fd, Rd, Xd;
      let Kd = null;
      Kd = "#document" === Od.nodeName ? md.getId(Od) : md.getId(dX.host(Od));
      const hd = "#document" === Od.nodeName ? null == (Fd = Od.defaultView) ? void 0 : Fd.Document : null == (Xd = null == (Rd = Od.ownerDocument) ? void 0 : Rd.defaultView) ? void 0 : Xd.ShadowRoot,
        vd = (null == hd ? void 0 : hd.prototype) ? Object.getOwnPropertyDescriptor(null == hd ? void 0 : hd.prototype, "adoptedStyleSheets") : void 0;
      return null !== Kd && -1 !== Kd && hd && vd ? (Object.defineProperty(Od, "adoptedStyleSheets", {
        configurable: vd.configurable,
        enumerable: vd.enumerable,
        get() {
          var dd;
          return null == (dd = vd.get) ? void 0 : dd.call(this)
        },
        set(dd) {
          var Od;
          const md = null == (Od = vd.set) ? void 0 : Od.call(this, dd);
          if (null !== Kd && -1 !== Kd) try {
            Wd.adoptStyleSheets(dd, Kd)
          } catch (Fd) {}
          return md
        }
      }), eX((() => {
        Object.defineProperty(Od, "adoptedStyleSheets", {
          configurable: vd.configurable,
          enumerable: vd.enumerable,
          get: vd.get,
          set: vd.set
        })
      }))) : () => {}
    }

    function WK(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      const md = dd.doc.defaultView;
      if (!md) return () => {};
      let Wd;
      ! function(dd, Od) {
        const {
          mutationCb: md,
          mousemoveCb: Wd,
          mouseInteractionCb: Fd,
          scrollCb: Rd,
          viewportResizeCb: Xd,
          inputCb: Kd,
          mediaInteractionCb: hd,
          styleSheetRuleCb: vd,
          styleDeclarationCb: Qd,
          canvasMutationCb: td,
          fontCb: od,
          selectionCb: Nd,
          customElementCb: qd
        } = dd;
        dd.mutationCb = function() {
          Od.mutation && Od.mutation(...arguments), md(...arguments)
        }, dd.mousemoveCb = function() {
          Od.mousemove && Od.mousemove(...arguments), Wd(...arguments)
        }, dd.mouseInteractionCb = function() {
          Od.mouseInteraction && Od.mouseInteraction(...arguments), Fd(...arguments)
        }, dd.scrollCb = function() {
          Od.scroll && Od.scroll(...arguments), Rd(...arguments)
        }, dd.viewportResizeCb = function() {
          Od.viewportResize && Od.viewportResize(...arguments), Xd(...arguments)
        }, dd.inputCb = function() {
          Od.input && Od.input(...arguments), Kd(...arguments)
        }, dd.mediaInteractionCb = function() {
          Od.mediaInteaction && Od.mediaInteaction(...arguments), hd(...arguments)
        }, dd.styleSheetRuleCb = function() {
          Od.styleSheetRule && Od.styleSheetRule(...arguments), vd(...arguments)
        }, dd.styleDeclarationCb = function() {
          Od.styleDeclaration && Od.styleDeclaration(...arguments), Qd(...arguments)
        }, dd.canvasMutationCb = function() {
          Od.canvasMutation && Od.canvasMutation(...arguments), td(...arguments)
        }, dd.fontCb = function() {
          Od.font && Od.font(...arguments), od(...arguments)
        }, dd.selectionCb = function() {
          Od.selection && Od.selection(...arguments), Nd(...arguments)
        }, dd.customElementCb = function() {
          Od.customElement && Od.customElement(...arguments), qd(...arguments)
        }
      }(dd, Od);
      let Fd = () => {};
      dd.recordDOM && ([Wd, Fd] = CX(dd, dd.doc));
      const Rd = function(dd) {
          let {
            mousemoveCb: Od,
            sampling: md,
            doc: Wd,
            mirror: Fd
          } = dd;
          if (!1 === md.mousemove) return () => {};
          const Rd = "number" === typeof md.mousemove ? md.mousemove : 50,
            Xd = "number" === typeof md.mousemoveCallback ? md.mousemoveCallback : 500;
          let Kd, hd = [];
          const vd = FX(eX((dd => {
              const md = Date.now() - Kd;
              Od(hd.map((dd => (dd.timeOffset -= md, dd))), dd), hd = [], Kd = null
            })), Xd),
            Qd = eX(FX(eX((dd => {
              const Od = lX(dd),
                {
                  clientX: md,
                  clientY: Wd
                } = qX(dd) ? dd.changedTouches[0] : dd;
              Kd || (Kd = fR()), hd.push({
                x: md,
                y: Wd,
                id: Fd.getId(Od),
                timeOffset: fR() - Kd
              }), vd("undefined" !== typeof DragEvent && dd instanceof DragEvent ? uX.Drag : dd instanceof MouseEvent ? uX.MouseMove : uX.TouchMove)
            })), Rd, {
              trailing: !1
            })),
            td = [OX("mousemove", Qd, Wd), OX("touchmove", Qd, Wd), OX("drag", Qd, Wd)];
          return eX((() => {
            td.forEach((dd => dd()))
          }))
        }(dd),
        Xd = ZX(dd),
        Kd = kX(dd),
        hd = function(dd, Od) {
          let {
            viewportResizeCb: md
          } = dd, {
            win: Wd
          } = Od, Fd = -1, Rd = -1;
          return OX("resize", eX(FX(eX((() => {
            const dd = KX(),
              Od = hX();
            Fd === dd && Rd === Od || (md({
              width: Number(Od),
              height: Number(dd)
            }), Fd = dd, Rd = Od)
          })), 200)), Wd)
        }(dd, {
          win: md
        }),
        vd = function(dd) {
          let {
            inputCb: Od,
            doc: md,
            mirror: Wd,
            blockClass: Fd,
            blockSelector: Rd,
            ignoreClass: Xd,
            ignoreSelector: Kd,
            maskInputOptions: hd,
            maskInputFn: vd,
            sampling: Qd,
            userTriggeredOnInput: td
          } = dd;

          function od(dd) {
            let Od = lX(dd);
            const Wd = dd.isTrusted,
              Qd = Od && Od.tagName;
            if (Od && "OPTION" === Qd && (Od = dX.parentElement(Od)), !Od || !Qd || fX.indexOf(Qd) < 0 || QX(Od, Fd, Rd, !0)) return;
            if (Od.classList.contains(Xd) || Kd && Od.matches(Kd)) return;
            let od = Od.value,
              qd = !1;
            const Hd = ud(Od) || "";
            "radio" === Hd || "checkbox" === Hd ? qd = Od.checked : (hd[Qd.toLowerCase()] || hd[Hd]) && (od = Bd({
              element: Od,
              maskInputOptions: hd,
              tagName: Qd,
              type: Hd,
              value: od,
              maskInputFn: vd
            })), Nd(Od, td ? {
              text: od,
              isChecked: qd,
              userTriggered: Wd
            } : {
              text: od,
              isChecked: qd
            });
            const yd = Od.name;
            "radio" === Hd && yd && qd && md.querySelectorAll(`input[type="radio"][name="${yd}"]`).forEach((dd => {
              if (dd !== Od) {
                const Od = dd.value;
                Nd(dd, td ? {
                  text: Od,
                  isChecked: !qd,
                  userTriggered: !1
                } : {
                  text: Od,
                  isChecked: !qd
                })
              }
            }))
          }

          function Nd(dd, md) {
            const Fd = MX.get(dd);
            if (!Fd || Fd.text !== md.text || Fd.isChecked !== md.isChecked) {
              MX.set(dd, md);
              const Fd = Wd.getId(dd);
              eX(Od)({
                ...md,
                id: Fd
              })
            }
          }
          const qd = ("last" === Qd.input ? ["change"] : ["input", "change"]).map((dd => OX(dd, eX(od), md))),
            Hd = md.defaultView;
          if (!Hd) return () => {
            qd.forEach((dd => dd()))
          };
          const yd = Hd.Object.getOwnPropertyDescriptor(Hd.HTMLInputElement.prototype, "value"),
            bd = [
              [Hd.HTMLInputElement.prototype, "value"],
              [Hd.HTMLInputElement.prototype, "checked"],
              [Hd.HTMLSelectElement.prototype, "value"],
              [Hd.HTMLTextAreaElement.prototype, "value"],
              [Hd.HTMLSelectElement.prototype, "selectedIndex"],
              [Hd.HTMLOptionElement.prototype, "selected"]
            ];
          return yd && yd.set && qd.push(...bd.map((dd => RX(dd[0], dd[1], {
            set() {
              eX(od)({
                target: this,
                isTrusted: !1
              })
            }
          }, !1, Hd)))), eX((() => {
            qd.forEach((dd => dd()))
          }))
        }(dd),
        Qd = function(dd) {
          let {
            mediaInteractionCb: Od,
            blockClass: md,
            blockSelector: Wd,
            mirror: Fd,
            sampling: Rd,
            doc: Xd
          } = dd;
          const Kd = eX((dd => FX(eX((Rd => {
              const Xd = lX(Rd);
              if (!Xd || QX(Xd, md, Wd, !0)) return;
              const {
                currentTime: Kd,
                volume: hd,
                muted: vd,
                playbackRate: Qd,
                loop: td
              } = Xd;
              Od({
                type: dd,
                id: Fd.getId(Xd),
                currentTime: Kd,
                volume: hd,
                muted: vd,
                playbackRate: Qd,
                loop: td
              })
            })), Rd.media || 500))),
            hd = [OX("play", Kd(rX.Play), Xd), OX("pause", Kd(rX.Pause), Xd), OX("seeked", Kd(rX.Seeked), Xd), OX("volumechange", Kd(rX.VolumeChange), Xd), OX("ratechange", Kd(rX.RateChange), Xd)];
          return eX((() => {
            hd.forEach((dd => dd()))
          }))
        }(dd);
      let td = () => {},
        od = () => {},
        Nd = () => {},
        qd = () => {};
      dd.recordDOM && (td = function(dd, Od) {
        let {
          styleSheetRuleCb: md,
          mirror: Wd,
          stylesheetManager: Fd
        } = dd, {
          win: Rd
        } = Od;
        if (!Rd.CSSStyleSheet || !Rd.CSSStyleSheet.prototype) return () => {};
        const Xd = Rd.CSSStyleSheet.prototype.insertRule;
        Rd.CSSStyleSheet.prototype.insertRule = new Proxy(Xd, {
          apply: eX(((dd, Od, Rd) => {
            const [Xd, Kd] = Rd, {
              id: hd,
              styleId: vd
            } = OK(Od, Wd, Fd.styleMirror);
            return (hd && -1 !== hd || vd && -1 !== vd) && md({
              id: hd,
              styleId: vd,
              adds: [{
                rule: Xd,
                index: Kd
              }]
            }), dd.apply(Od, Rd)
          }))
        }), Rd.CSSStyleSheet.prototype.addRule = function(dd, Od) {
          let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.cssRules.length;
          const Wd = `${dd} { ${Od} }`;
          return Rd.CSSStyleSheet.prototype.insertRule.apply(this, [Wd, md])
        };
        const Kd = Rd.CSSStyleSheet.prototype.deleteRule;
        let hd, vd;
        Rd.CSSStyleSheet.prototype.deleteRule = new Proxy(Kd, {
          apply: eX(((dd, Od, Rd) => {
            const [Xd] = Rd, {
              id: Kd,
              styleId: hd
            } = OK(Od, Wd, Fd.styleMirror);
            return (Kd && -1 !== Kd || hd && -1 !== hd) && md({
              id: Kd,
              styleId: hd,
              removes: [{
                index: Xd
              }]
            }), dd.apply(Od, Rd)
          }))
        }), Rd.CSSStyleSheet.prototype.removeRule = function(dd) {
          return Rd.CSSStyleSheet.prototype.deleteRule.apply(this, [dd])
        }, Rd.CSSStyleSheet.prototype.replace && (hd = Rd.CSSStyleSheet.prototype.replace, Rd.CSSStyleSheet.prototype.replace = new Proxy(hd, {
          apply: eX(((dd, Od, Rd) => {
            const [Xd] = Rd, {
              id: Kd,
              styleId: hd
            } = OK(Od, Wd, Fd.styleMirror);
            return (Kd && -1 !== Kd || hd && -1 !== hd) && md({
              id: Kd,
              styleId: hd,
              replace: Xd
            }), dd.apply(Od, Rd)
          }))
        })), Rd.CSSStyleSheet.prototype.replaceSync && (vd = Rd.CSSStyleSheet.prototype.replaceSync, Rd.CSSStyleSheet.prototype.replaceSync = new Proxy(vd, {
          apply: eX(((dd, Od, Rd) => {
            const [Xd] = Rd, {
              id: Kd,
              styleId: hd
            } = OK(Od, Wd, Fd.styleMirror);
            return (Kd && -1 !== Kd || hd && -1 !== hd) && md({
              id: Kd,
              styleId: hd,
              replaceSync: Xd
            }), dd.apply(Od, Rd)
          }))
        }));
        const Qd = {};
        RK("CSSGroupingRule") ? Qd.CSSGroupingRule = Rd.CSSGroupingRule : (RK("CSSMediaRule") && (Qd.CSSMediaRule = Rd.CSSMediaRule), RK("CSSConditionRule") && (Qd.CSSConditionRule = Rd.CSSConditionRule), RK("CSSSupportsRule") && (Qd.CSSSupportsRule = Rd.CSSSupportsRule));
        const td = {};
        return Object.entries(Qd).forEach((dd => {
          let [Od, Rd] = dd;
          td[Od] = {
            insertRule: Rd.prototype.insertRule,
            deleteRule: Rd.prototype.deleteRule
          }, Rd.prototype.insertRule = new Proxy(td[Od].insertRule, {
            apply: eX(((dd, Od, Rd) => {
              const [Xd, Kd] = Rd, {
                id: hd,
                styleId: vd
              } = OK(Od.parentStyleSheet, Wd, Fd.styleMirror);
              return (hd && -1 !== hd || vd && -1 !== vd) && md({
                id: hd,
                styleId: vd,
                adds: [{
                  rule: Xd,
                  index: [...dK(Od), Kd || 0]
                }]
              }), dd.apply(Od, Rd)
            }))
          }), Rd.prototype.deleteRule = new Proxy(td[Od].deleteRule, {
            apply: eX(((dd, Od, Rd) => {
              const [Xd] = Rd, {
                id: Kd,
                styleId: hd
              } = OK(Od.parentStyleSheet, Wd, Fd.styleMirror);
              return (Kd && -1 !== Kd || hd && -1 !== hd) && md({
                id: Kd,
                styleId: hd,
                removes: [{
                  index: [...dK(Od), Xd]
                }]
              }), dd.apply(Od, Rd)
            }))
          })
        })), eX((() => {
          Rd.CSSStyleSheet.prototype.insertRule = Xd, Rd.CSSStyleSheet.prototype.deleteRule = Kd, hd && (Rd.CSSStyleSheet.prototype.replace = hd), vd && (Rd.CSSStyleSheet.prototype.replaceSync = vd), Object.entries(Qd).forEach((dd => {
            let [Od, md] = dd;
            md.prototype.insertRule = td[Od].insertRule, md.prototype.deleteRule = td[Od].deleteRule
          }))
        }))
      }(dd, {
        win: md
      }), od = mK(dd, dd.doc), Nd = function(dd, Od) {
        let {
          styleDeclarationCb: md,
          mirror: Wd,
          ignoreCSSAttributes: Fd,
          stylesheetManager: Rd
        } = dd, {
          win: Xd
        } = Od;
        const Kd = Xd.CSSStyleDeclaration.prototype.setProperty;
        Xd.CSSStyleDeclaration.prototype.setProperty = new Proxy(Kd, {
          apply: eX(((dd, Od, Xd) => {
            var hd;
            const [vd, Qd, td] = Xd;
            if (Fd.has(vd)) return Kd.apply(Od, [vd, Qd, td]);
            const {
              id: od,
              styleId: Nd
            } = OK(null == (hd = Od.parentRule) ? void 0 : hd.parentStyleSheet, Wd, Rd.styleMirror);
            return (od && -1 !== od || Nd && -1 !== Nd) && md({
              id: od,
              styleId: Nd,
              set: {
                property: vd,
                value: Qd,
                priority: td
              },
              index: dK(Od.parentRule)
            }), dd.apply(Od, Xd)
          }))
        });
        const hd = Xd.CSSStyleDeclaration.prototype.removeProperty;
        return Xd.CSSStyleDeclaration.prototype.removeProperty = new Proxy(hd, {
          apply: eX(((dd, Od, Xd) => {
            var Kd;
            const [vd] = Xd;
            if (Fd.has(vd)) return hd.apply(Od, [vd]);
            const {
              id: Qd,
              styleId: td
            } = OK(null == (Kd = Od.parentRule) ? void 0 : Kd.parentStyleSheet, Wd, Rd.styleMirror);
            return (Qd && -1 !== Qd || td && -1 !== td) && md({
              id: Qd,
              styleId: td,
              remove: {
                property: vd
              },
              index: dK(Od.parentRule)
            }), dd.apply(Od, Xd)
          }))
        }), eX((() => {
          Xd.CSSStyleDeclaration.prototype.setProperty = Kd, Xd.CSSStyleDeclaration.prototype.removeProperty = hd
        }))
      }(dd, {
        win: md
      }), dd.collectFonts && (qd = function(dd) {
        let {
          fontCb: Od,
          doc: md
        } = dd;
        const Wd = md.defaultView;
        if (!Wd) return () => {};
        const Fd = [],
          Rd = new WeakMap,
          Xd = Wd.FontFace;
        Wd.FontFace = function(dd, Od, md) {
          const Wd = new Xd(dd, Od, md);
          return Rd.set(Wd, {
            family: dd,
            buffer: "string" !== typeof Od,
            descriptors: md,
            fontSource: "string" === typeof Od ? Od : JSON.stringify(Array.from(new Uint8Array(Od)))
          }), Wd
        };
        const Kd = MR(md.fonts, "add", (function(dd) {
          return function(md) {
            return setTimeout(eX((() => {
              const dd = Rd.get(md);
              dd && (Od(dd), Rd.delete(md))
            })), 0), dd.apply(this, [md])
          }
        }));
        return Fd.push((() => {
          Wd.FontFace = Xd
        })), Fd.push(Kd), eX((() => {
          Fd.forEach((dd => dd()))
        }))
      }(dd)));
      const Hd = function(dd) {
          const {
            doc: Od,
            mirror: md,
            blockClass: Wd,
            blockSelector: Fd,
            selectionCb: Rd
          } = dd;
          let Xd = !0;
          const Kd = eX((() => {
            const dd = Od.getSelection();
            if (!dd || Xd && (null == dd ? void 0 : dd.isCollapsed)) return;
            Xd = dd.isCollapsed || !1;
            const Kd = [],
              hd = dd.rangeCount || 0;
            for (let Od = 0; Od < hd; Od++) {
              const Rd = dd.getRangeAt(Od),
                {
                  startContainer: Xd,
                  startOffset: hd,
                  endContainer: vd,
                  endOffset: Qd
                } = Rd;
              QX(Xd, Wd, Fd, !0) || QX(vd, Wd, Fd, !0) || Kd.push({
                start: md.getId(Xd),
                startOffset: hd,
                end: md.getId(vd),
                endOffset: Qd
              })
            }
            Rd({
              By: Kd
            })
          }));
          return Kd(), OX("selectionchange", Kd)
        }(dd),
        yd = function(dd) {
          let {
            doc: Od,
            customElementCb: md
          } = dd;
          const Wd = Od.defaultView;
          return Wd && Wd.customElements ? MR(Wd.customElements, "define", (function(dd) {
            return function(Od, Wd, Fd) {
              try {
                md({
                  define: {
                    name: Od
                  }
                })
              } catch (Rd) {
                console.warn(`Custom element callback failed for ${Od}`)
              }
              return dd.apply(this, [Od, Wd, Fd])
            }
          })) : () => {}
        }(dd),
        bd = [];
      for (const Td of dd.plugins) bd.push(Td.observer(Td.callback, md, Td.options));
      return eX((() => {
        IX.forEach((dd => dd.reset())), null == Wd || Wd.disconnect(), Fd(), Rd(), Xd(), Kd(), hd(), vd(), Qd(), td(), od(), Nd(), qd(), Hd(), yd(), bd.forEach((dd => dd()))
      }))
    }

    function FK(dd) {
      return "undefined" !== typeof window[dd]
    }

    function RK(dd) {
      return Boolean("undefined" !== typeof window[dd] && window[dd].prototype && "insertRule" in window[dd].prototype && "deleteRule" in window[dd].prototype)
    }
    class XK {
      constructor(dd) {
        Rd(this, "iframeIdToRemoteIdMap", new WeakMap), Rd(this, "iframeRemoteIdToIdMap", new WeakMap), this.generateIdFn = dd
      }
      getId(dd, Od, md, Wd) {
        const Fd = md || this.getIdToRemoteIdMap(dd),
          Rd = Wd || this.getRemoteIdToIdMap(dd);
        let Xd = Fd.get(Od);
        return Xd || (Xd = this.generateIdFn(), Fd.set(Od, Xd), Rd.set(Xd, Od)), Xd
      }
      getIds(dd, Od) {
        const md = this.getIdToRemoteIdMap(dd),
          Wd = this.getRemoteIdToIdMap(dd);
        return Od.map((Od => this.getId(dd, Od, md, Wd)))
      }
      getRemoteId(dd, Od, md) {
        const Wd = md || this.getRemoteIdToIdMap(dd);
        if ("number" !== typeof Od) return Od;
        const Fd = Wd.get(Od);
        return Fd || -1
      }
      getRemoteIds(dd, Od) {
        const md = this.getRemoteIdToIdMap(dd);
        return Od.map((Od => this.getRemoteId(dd, Od, md)))
      }
      reset(dd) {
        if (!dd) return this.iframeIdToRemoteIdMap = new WeakMap, void(this.iframeRemoteIdToIdMap = new WeakMap);
        this.iframeIdToRemoteIdMap.delete(dd), this.iframeRemoteIdToIdMap.delete(dd)
      }
      getIdToRemoteIdMap(dd) {
        let Od = this.iframeIdToRemoteIdMap.get(dd);
        return Od || (Od = new Map, this.iframeIdToRemoteIdMap.set(dd, Od)), Od
      }
      getRemoteIdToIdMap(dd) {
        let Od = this.iframeRemoteIdToIdMap.get(dd);
        return Od || (Od = new Map, this.iframeRemoteIdToIdMap.set(dd, Od)), Od
      }
    }
    class KK {
      constructor(dd) {
        Rd(this, "iframes", new WeakMap), Rd(this, "crossOriginIframeMap", new WeakMap), Rd(this, "crossOriginIframeMirror", new XK(ld)), Rd(this, "crossOriginIframeStyleMirror"), Rd(this, "crossOriginIframeRootIdMap", new WeakMap), Rd(this, "mirror"), Rd(this, "mutationCb"), Rd(this, "wrappedEmit"), Rd(this, "loadListener"), Rd(this, "stylesheetManager"), Rd(this, "recordCrossOriginIframes"), this.mutationCb = dd.mutationCb, this.wrappedEmit = dd.wrappedEmit, this.stylesheetManager = dd.stylesheetManager, this.recordCrossOriginIframes = dd.recordCrossOriginIframes, this.crossOriginIframeStyleMirror = new XK(this.stylesheetManager.styleMirror.generateId.bind(this.stylesheetManager.styleMirror)), this.mirror = dd.mirror, this.recordCrossOriginIframes && window.addEventListener("message", this.handleMessage.bind(this))
      }
      addIframe(dd) {
        this.iframes.set(dd, !0), dd.contentWindow && this.crossOriginIframeMap.set(dd.contentWindow, dd)
      }
      addLoadListener(dd) {
        this.loadListener = dd
      }
      attachIframe(dd, Od) {
        var md, Wd;
        this.mutationCb({
          adds: [{
            parentId: this.mirror.getId(dd),
            nextId: null,
            node: Od
          }],
          removes: [],
          texts: [],
          attributes: [],
          isAttachIframe: !0
        }), this.recordCrossOriginIframes && (null == (md = dd.contentWindow) || md.addEventListener("message", this.handleMessage.bind(this))), null == (Wd = this.loadListener) || Wd.call(this, dd), dd.contentDocument && dd.contentDocument.adoptedStyleSheets && dd.contentDocument.adoptedStyleSheets.length > 0 && this.stylesheetManager.adoptStyleSheets(dd.contentDocument.adoptedStyleSheets, this.mirror.getId(dd.contentDocument))
      }
      handleMessage(dd) {
        const Od = dd;
        if ("rrweb" !== Od.data.type || Od.origin !== Od.data.origin) return;
        if (!dd.source) return;
        const md = this.crossOriginIframeMap.get(dd.source);
        if (!md) return;
        const Wd = this.transformCrossOriginEvent(md, Od.data.event);
        Wd && this.wrappedEmit(Wd, Od.data.isCheckout)
      }
      transformCrossOriginEvent(dd, Od) {
        var md;
        switch (Od.type) {
          case sX.FullSnapshot: {
            this.crossOriginIframeMirror.reset(dd), this.crossOriginIframeStyleMirror.reset(dd), this.replaceIdOnNode(Od.data.node, dd);
            const md = Od.data.node.id;
            return this.crossOriginIframeRootIdMap.set(dd, md), this.patchRootIdOnNode(Od.data.node, md), {
              timestamp: Od.timestamp,
              type: sX.IncrementalSnapshot,
              data: {
                source: uX.Mutation,
                adds: [{
                  parentId: this.mirror.getId(dd),
                  nextId: null,
                  node: Od.data.node
                }],
                removes: [],
                texts: [],
                attributes: [],
                isAttachIframe: !0
              }
            }
          }
          case sX.Meta:
          case sX.Load:
          case sX.DomContentLoaded:
            return !1;
          case sX.Plugin:
            return Od;
          case sX.Custom:
            return this.replaceIds(Od.data.payload, dd, ["id", "parentId", "previousId", "nextId"]), Od;
          case sX.IncrementalSnapshot:
            switch (Od.data.source) {
              case uX.Mutation:
                return Od.data.adds.forEach((Od => {
                  this.replaceIds(Od, dd, ["parentId", "nextId", "previousId"]), this.replaceIdOnNode(Od.node, dd);
                  const md = this.crossOriginIframeRootIdMap.get(dd);
                  md && this.patchRootIdOnNode(Od.node, md)
                })), Od.data.removes.forEach((Od => {
                  this.replaceIds(Od, dd, ["parentId", "id"])
                })), Od.data.attributes.forEach((Od => {
                  this.replaceIds(Od, dd, ["id"])
                })), Od.data.texts.forEach((Od => {
                  this.replaceIds(Od, dd, ["id"])
                })), Od;
              case uX.Drag:
              case uX.TouchMove:
              case uX.MouseMove:
                return Od.data.positions.forEach((Od => {
                  this.replaceIds(Od, dd, ["id"])
                })), Od;
              case uX.ViewportResize:
                return !1;
              case uX.MediaInteraction:
              case uX.MouseInteraction:
              case uX.Scroll:
              case uX.CanvasMutation:
              case uX.Input:
                return this.replaceIds(Od.data, dd, ["id"]), Od;
              case uX.StyleSheetRule:
              case uX.StyleDeclaration:
                return this.replaceIds(Od.data, dd, ["id"]), this.replaceStyleIds(Od.data, dd, ["styleId"]), Od;
              case uX.Font:
                return Od;
              case uX.Selection:
                return Od.data.By.forEach((Od => {
                  this.replaceIds(Od, dd, ["start", "end"])
                })), Od;
              case uX.AdoptedStyleSheet:
                return this.replaceIds(Od.data, dd, ["id"]), this.replaceStyleIds(Od.data, dd, ["styleIds"]), null == (md = Od.data.styles) || md.forEach((Od => {
                  this.replaceStyleIds(Od, dd, ["styleId"])
                })), Od
            }
        }
        return !1
      }
      replace(dd, Od, md, Wd) {
        for (const Fd of Wd)(Array.isArray(Od[Fd]) || "number" === typeof Od[Fd]) && (Array.isArray(Od[Fd]) ? Od[Fd] = dd.getIds(md, Od[Fd]) : Od[Fd] = dd.getId(md, Od[Fd]));
        return Od
      }
      replaceIds(dd, Od, md) {
        return this.replace(this.crossOriginIframeMirror, dd, Od, md)
      }
      replaceStyleIds(dd, Od, md) {
        return this.replace(this.crossOriginIframeStyleMirror, dd, Od, md)
      }
      replaceIdOnNode(dd, Od) {
        this.replaceIds(dd, Od, ["id", "rootId"]), "childNodes" in dd && dd.childNodes.forEach((dd => {
          this.replaceIdOnNode(dd, Od)
        }))
      }
      patchRootIdOnNode(dd, Od) {
        dd.type === nX.Document || dd.rootId || (dd.rootId = Od), "childNodes" in dd && dd.childNodes.forEach((dd => {
          this.patchRootIdOnNode(dd, Od)
        }))
      }
    }
    class hK {
      constructor(dd) {
        Rd(this, "shadowDoms", new WeakSet), Rd(this, "mutationCb"), Rd(this, "scrollCb"), Rd(this, "bypassOptions"), Rd(this, "mirror"), Rd(this, "restoreHandlers", []), this.mutationCb = dd.mutationCb, this.scrollCb = dd.scrollCb, this.bypassOptions = dd.bypassOptions, this.mirror = dd.mirror, this.init()
      }
      init() {
        this.reset(), this.patchAttachShadow(Element, document)
      }
      addShadowRoot(dd, Od) {
        if (!wd(dd)) return;
        if (this.shadowDoms.has(dd)) return;
        this.shadowDoms.add(dd);
        const [md] = CX({
          ...this.bypassOptions,
          doc: Od,
          mutationCb: this.mutationCb,
          mirror: this.mirror,
          shadowDomManager: this
        }, dd);
        this.restoreHandlers.push((() => md.disconnect())), this.restoreHandlers.push(kX({
          ...this.bypassOptions,
          scrollCb: this.scrollCb,
          doc: dd,
          mirror: this.mirror
        })), setTimeout((() => {
          dd.adoptedStyleSheets && dd.adoptedStyleSheets.length > 0 && this.bypassOptions.stylesheetManager.adoptStyleSheets(dd.adoptedStyleSheets, this.mirror.getId(dX.host(dd))), this.restoreHandlers.push(mK({
            mirror: this.mirror,
            stylesheetManager: this.bypassOptions.stylesheetManager
          }, dd))
        }), 0)
      }
      observeAttachShadow(dd) {
        dd.contentWindow && dd.contentDocument && this.patchAttachShadow(dd.contentWindow.Element, dd.contentDocument)
      }
      patchAttachShadow(dd, Od) {
        const md = this;
        this.restoreHandlers.push(MR(dd.prototype, "attachShadow", (function(dd) {
          return function(Wd) {
            const Fd = dd.call(this, Wd),
              Rd = dX.shadowRoot(this);
            return Rd && SX(this) && md.addShadowRoot(Rd, Od), Fd
          }
        })))
      }
      reset() {
        this.restoreHandlers.forEach((dd => {
          try {
            dd()
          } catch (Od) {}
        })), this.restoreHandlers = [], this.shadowDoms = new WeakSet
      }
    }
    for (var vK = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", QK = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), tK = 0; tK < 64; tK++) QK[vK.charCodeAt(tK)] = tK;
    const oK = new Map;
    const NK = (dd, Od, md) => {
      if (!dd || !yK(dd, Od) && "object" !== typeof dd) return;
      const Wd = function(dd, Od) {
        let md = oK.get(dd);
        return md || (md = new Map, oK.set(dd, md)), md.has(Od) || md.set(Od, []), md.get(Od)
      }(md, dd.constructor.name);
      let Fd = Wd.indexOf(dd);
      return -1 === Fd && (Fd = Wd.length, Wd.push(dd)), Fd
    };

    function qK(dd, Od, md) {
      if (dd instanceof Array) return dd.map((dd => qK(dd, Od, md)));
      if (null === dd) return dd;
      if (dd instanceof Float32Array || dd instanceof Float64Array || dd instanceof Int32Array || dd instanceof Uint32Array || dd instanceof Uint8Array || dd instanceof Uint16Array || dd instanceof Int16Array || dd instanceof Int8Array || dd instanceof Uint8ClampedArray) {
        return {
          rr_type: dd.constructor.name,
          args: [Object.values(dd)]
        }
      }
      if (dd instanceof ArrayBuffer) {
        return {
          rr_type: dd.constructor.name,
          base64: function(dd) {
            var Od, md = new Uint8Array(dd),
              Wd = md.length,
              Fd = "";
            for (Od = 0; Od < Wd; Od += 3) Fd += vK[md[Od] >> 2], Fd += vK[(3 & md[Od]) << 4 | md[Od + 1] >> 4], Fd += vK[(15 & md[Od + 1]) << 2 | md[Od + 2] >> 6], Fd += vK[63 & md[Od + 2]];
            return Wd % 3 === 2 ? Fd = Fd.substring(0, Fd.length - 1) + "=" : Wd % 3 === 1 && (Fd = Fd.substring(0, Fd.length - 2) + "=="), Fd
          }(dd)
        }
      }
      if (dd instanceof DataView) {
        return {
          rr_type: dd.constructor.name,
          args: [qK(dd.buffer, Od, md), dd.byteOffset, dd.byteLength]
        }
      }
      if (dd instanceof HTMLImageElement) {
        const Od = dd.constructor.name,
          {
            src: md
          } = dd;
        return {
          rr_type: Od,
          src: md
        }
      }
      if (dd instanceof HTMLCanvasElement) {
        return {
          rr_type: "HTMLImageElement",
          src: dd.toDataURL()
        }
      }
      if (dd instanceof ImageData) {
        return {
          rr_type: dd.constructor.name,
          args: [qK(dd.data, Od, md), dd.width, dd.height]
        }
      }
      if (yK(dd, Od) || "object" === typeof dd) {
        return {
          rr_type: dd.constructor.name,
          index: NK(dd, Od, md)
        }
      }
      return dd
    }
    const HK = (dd, Od, md) => dd.map((dd => qK(dd, Od, md))),
      yK = (dd, Od) => {
        const md = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject", "WebGLVertexArrayObjectOES"].filter((dd => "function" === typeof Od[dd]));
        return Boolean(md.find((md => dd instanceof Od[md])))
      };

    function bK(dd, Od, md, Wd) {
      const Fd = [];
      try {
        const Rd = MR(dd.HTMLCanvasElement.prototype, "getContext", (function(dd) {
          return function(Fd) {
            for (var Rd = arguments.length, Xd = new Array(Rd > 1 ? Rd - 1 : 0), Kd = 1; Kd < Rd; Kd++) Xd[Kd - 1] = arguments[Kd];
            if (!QX(this, Od, md, !0)) {
              const dd = function(dd) {
                return "experimental-webgl" === dd ? "webgl" : dd
              }(Fd);
              if ("__context" in this || (this.__context = dd), Wd && ["webgl", "webgl2"].includes(dd))
                if (Xd[0] && "object" === typeof Xd[0]) {
                  const dd = Xd[0];
                  dd.preserveDrawingBuffer || (dd.preserveDrawingBuffer = !0)
                } else Xd.splice(0, 1, {
                  preserveDrawingBuffer: !0
                })
            }
            return dd.apply(this, [Fd, ...Xd])
          }
        }));
        Fd.push(Rd)
      } catch {
        console.error("failed to patch HTMLCanvasElement.prototype.getContext")
      }
      return () => {
        Fd.forEach((dd => dd()))
      }
    }

    function TK(dd, Od, md, Wd, Fd, Rd) {
      const Xd = [],
        Kd = Object.getOwnPropertyNames(dd);
      for (const hd of Kd)
        if (!["isContextLost", "canvas", "drawingBufferWidth", "drawingBufferHeight"].includes(hd)) try {
          if ("function" !== typeof dd[hd]) continue;
          const Kd = MR(dd, hd, (function(dd) {
            return function() {
              for (var Xd = arguments.length, Kd = new Array(Xd), vd = 0; vd < Xd; vd++) Kd[vd] = arguments[vd];
              const Qd = dd.apply(this, Kd);
              if (NK(Qd, Rd, this), "tagName" in this.canvas && !QX(this.canvas, Wd, Fd, !0)) {
                const dd = HK(Kd, Rd, this),
                  Wd = {
                    type: Od,
                    property: hd,
                    args: dd
                  };
                md(this.canvas, Wd)
              }
              return Qd
            }
          }));
          Xd.push(Kd)
        } catch {
          const Wd = RX(dd, hd, {
            set(dd) {
              md(this.canvas, {
                type: Od,
                property: hd,
                args: [dd],
                setter: !0
              })
            }
          });
          Xd.push(Wd)
        }
      return Xd
    }
    const pK = '(function() {\n  "use strict";\n  var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";\n  var lookup = typeof Uint8Array === "undefined" ? [] : new Uint8Array(256);\n  for (var i = 0; i < chars.length; i++) {\n    lookup[chars.charCodeAt(i)] = i;\n  }\n  var encode = function(arraybuffer) {\n    var bytes = new Uint8Array(arraybuffer), i2, len = bytes.length, base64 = "";\n    for (i2 = 0; i2 < len; i2 += 3) {\n      base64 += chars[bytes[i2] >> 2];\n      base64 += chars[(bytes[i2] & 3) << 4 | bytes[i2 + 1] >> 4];\n      base64 += chars[(bytes[i2 + 1] & 15) << 2 | bytes[i2 + 2] >> 6];\n      base64 += chars[bytes[i2 + 2] & 63];\n    }\n    if (len % 3 === 2) {\n      base64 = base64.substring(0, base64.length - 1) + "=";\n    } else if (len % 3 === 1) {\n      base64 = base64.substring(0, base64.length - 2) + "==";\n    }\n    return base64;\n  };\n  const lastBlobMap = /* @__PURE__ */ new Map();\n  const transparentBlobMap = /* @__PURE__ */ new Map();\n  async function getTransparentBlobFor(width, height, dataURLOptions) {\n    const id = `${width}-${height}`;\n    if ("OffscreenCanvas" in globalThis) {\n      if (transparentBlobMap.has(id)) return transparentBlobMap.get(id);\n      const offscreen = new OffscreenCanvas(width, height);\n      offscreen.getContext("2d");\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      transparentBlobMap.set(id, base64);\n      return base64;\n    } else {\n      return "";\n    }\n  }\n  const worker = self;\n  worker.onmessage = async function(e) {\n    if ("OffscreenCanvas" in globalThis) {\n      const { id, bitmap, width, height, dataURLOptions } = e.data;\n      const transparentBase64 = getTransparentBlobFor(\n        width,\n        height,\n        dataURLOptions\n      );\n      const offscreen = new OffscreenCanvas(width, height);\n      const ctx = offscreen.getContext("2d");\n      ctx.drawImage(bitmap, 0, 0);\n      bitmap.close();\n      const blob = await offscreen.convertToBlob(dataURLOptions);\n      const type = blob.type;\n      const arrayBuffer = await blob.arrayBuffer();\n      const base64 = encode(arrayBuffer);\n      if (!lastBlobMap.has(id) && await transparentBase64 === base64) {\n        lastBlobMap.set(id, base64);\n        return worker.postMessage({ id });\n      }\n      if (lastBlobMap.get(id) === base64) return worker.postMessage({ id });\n      worker.postMessage({\n        id,\n        type,\n        base64,\n        width,\n        height\n      });\n      lastBlobMap.set(id, base64);\n    } else {\n      return worker.postMessage({ id: e.data.id });\n    }\n  };\n})();\n//# sourceMappingURL=image-bitmap-data-url-worker-IJpC7g_b.js.map\n',
      YK = "undefined" !== typeof self && self.Blob && new Blob([pK], {
        type: "text/javascript;charset=utf-8"
      });

    function gK(dd) {
      let Od;
      try {
        if (Od = YK && (self.URL || self.webkitURL).createObjectURL(YK), !Od) throw "";
        const md = new Worker(Od, {
          name: null == dd ? void 0 : dd.name
        });
        return md.addEventListener("error", (() => {
          (self.URL || self.webkitURL).revokeObjectURL(Od)
        })), md
      } catch (md) {
        return new Worker("data:text/javascript;charset=utf-8," + encodeURIComponent(pK), {
          name: null == dd ? void 0 : dd.name
        })
      } finally {
        Od && (self.URL || self.webkitURL).revokeObjectURL(Od)
      }
    }
    class wK {
      constructor(dd) {
        Rd(this, "pendingCanvasMutations", new Map), Rd(this, "rafStamps", {
          latestId: 0,
          invokeId: null
        }), Rd(this, "mirror"), Rd(this, "mutationCb"), Rd(this, "resetObservers"), Rd(this, "frozen", !1), Rd(this, "locked", !1), Rd(this, "processMutation", ((dd, Od) => {
          !(this.rafStamps.invokeId && this.rafStamps.latestId !== this.rafStamps.invokeId) && this.rafStamps.invokeId || (this.rafStamps.invokeId = this.rafStamps.latestId), this.pendingCanvasMutations.has(dd) || this.pendingCanvasMutations.set(dd, []), this.pendingCanvasMutations.get(dd).push(Od)
        }));
        const {
          sampling: Od = "all",
          win: md,
          blockClass: Wd,
          blockSelector: Fd,
          recordCanvas: Xd,
          dataURLOptions: Kd
        } = dd;
        this.mutationCb = dd.mutationCb, this.mirror = dd.mirror, Xd && "all" === Od && this.initCanvasMutationObserver(md, Wd, Fd), Xd && "number" === typeof Od && this.initCanvasFPSObserver(Od, md, Wd, Fd, {
          dataURLOptions: Kd
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
      initCanvasFPSObserver(dd, Od, md, Wd, Fd) {
        const Rd = bK(Od, md, Wd, !0),
          Xd = new Map,
          Kd = new gK;
        Kd.onmessage = dd => {
          const {
            id: Od
          } = dd.data;
          if (Xd.set(Od, !1), !("base64" in dd.data)) return;
          const {
            base64: md,
            type: Wd,
            width: Fd,
            height: Rd
          } = dd.data;
          this.mutationCb({
            id: Od,
            type: AX["2D"],
            commands: [{
              property: "clearRect",
              args: [0, 0, Fd, Rd]
            }, {
              property: "drawImage",
              args: [{
                rr_type: "ImageBitmap",
                args: [{
                  rr_type: "Blob",
                  data: [{
                    rr_type: "ArrayBuffer",
                    base64: md
                  }],
                  type: Wd
                }]
              }, 0, 0]
            }]
          })
        };
        const hd = 1e3 / dd;
        let vd, Qd = 0;
        const td = dd => {
          Qd && dd - Qd < hd || (Qd = dd, (() => {
            const dd = [];
            return Od.document.querySelectorAll("canvas").forEach((Od => {
              QX(Od, md, Wd, !0) || dd.push(Od)
            })), dd
          })().forEach((async dd => {
            var Od;
            const md = this.mirror.getId(dd);
            if (Xd.get(md)) return;
            if (0 === dd.width || 0 === dd.height) return;
            if (Xd.set(md, !0), ["webgl", "webgl2"].includes(dd.__context)) {
              const md = dd.getContext(dd.__context);
              !1 === (null == (Od = null == md ? void 0 : md.getContextAttributes()) ? void 0 : Od.preserveDrawingBuffer) && md.clear(md.COLOR_BUFFER_BIT)
            }
            const Wd = await createImageBitmap(dd);
            Kd.postMessage({
              id: md,
              bitmap: Wd,
              width: dd.width,
              height: dd.height,
              dataURLOptions: Fd.dataURLOptions
            }, [Wd])
          }))), vd = requestAnimationFrame(td)
        };
        vd = requestAnimationFrame(td), this.resetObservers = () => {
          Rd(), cancelAnimationFrame(vd)
        }
      }
      initCanvasMutationObserver(dd, Od, md) {
        this.startRAFTimestamping(), this.startPendingCanvasMutationFlusher();
        const Wd = bK(dd, Od, md, !1),
          Fd = function(dd, Od, md, Wd) {
            const Fd = [],
              Rd = Object.getOwnPropertyNames(Od.CanvasRenderingContext2D.prototype);
            for (const Xd of Rd) try {
              if ("function" !== typeof Od.CanvasRenderingContext2D.prototype[Xd]) continue;
              const Rd = MR(Od.CanvasRenderingContext2D.prototype, Xd, (function(Fd) {
                return function() {
                  for (var Rd = arguments.length, Kd = new Array(Rd), hd = 0; hd < Rd; hd++) Kd[hd] = arguments[hd];
                  return QX(this.canvas, md, Wd, !0) || setTimeout((() => {
                    const md = HK(Kd, Od, this);
                    dd(this.canvas, {
                      type: AX["2D"],
                      property: Xd,
                      args: md
                    })
                  }), 0), Fd.apply(this, Kd)
                }
              }));
              Fd.push(Rd)
            } catch {
              const md = RX(Od.CanvasRenderingContext2D.prototype, Xd, {
                set(Od) {
                  dd(this.canvas, {
                    type: AX["2D"],
                    property: Xd,
                    args: [Od],
                    setter: !0
                  })
                }
              });
              Fd.push(md)
            }
            return () => {
              Fd.forEach((dd => dd()))
            }
          }(this.processMutation.bind(this), dd, Od, md),
          Rd = function(dd, Od, md, Wd) {
            const Fd = [];
            return "undefined" !== typeof Od.WebGLRenderingContext && Fd.push(...TK(Od.WebGLRenderingContext.prototype, AX.WebGL, dd, md, Wd, Od)), "undefined" !== typeof Od.WebGL2RenderingContext && Fd.push(...TK(Od.WebGL2RenderingContext.prototype, AX.WebGL2, dd, md, Wd, Od)), () => {
              Fd.forEach((dd => dd()))
            }
          }(this.processMutation.bind(this), dd, Od, md);
        this.resetObservers = () => {
          Wd(), Fd(), Rd()
        }
      }
      startPendingCanvasMutationFlusher() {
        requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      startRAFTimestamping() {
        const dd = Od => {
          this.rafStamps.latestId = Od, requestAnimationFrame(dd)
        };
        requestAnimationFrame(dd)
      }
      flushPendingCanvasMutations() {
        this.pendingCanvasMutations.forEach(((dd, Od) => {
          const md = this.mirror.getId(Od);
          this.flushPendingCanvasMutationFor(Od, md)
        })), requestAnimationFrame((() => this.flushPendingCanvasMutations()))
      }
      flushPendingCanvasMutationFor(dd, Od) {
        if (this.frozen || this.locked) return;
        const md = this.pendingCanvasMutations.get(dd);
        if (!md || -1 === Od) return;
        const Wd = md.map((dd => {
            const {
              type: Od,
              ...md
            } = dd;
            return md
          })),
          {
            type: Fd
          } = md[0];
        this.mutationCb({
          id: Od,
          type: Fd,
          commands: Wd
        }), this.pendingCanvasMutations.delete(dd)
      }
    }
    class aK {
      constructor(dd) {
        Rd(this, "trackedLinkElements", new WeakSet), Rd(this, "mutationCb"), Rd(this, "adoptedStyleSheetCb"), Rd(this, "styleMirror", new JX), this.mutationCb = dd.mutationCb, this.adoptedStyleSheetCb = dd.adoptedStyleSheetCb
      }
      attachLinkElement(dd, Od) {
        "_cssText" in Od.attributes && this.mutationCb({
          adds: [],
          removes: [],
          texts: [],
          attributes: [{
            id: Od.id,
            attributes: Od.attributes
          }]
        }), this.trackLinkElement(dd)
      }
      trackLinkElement(dd) {
        this.trackedLinkElements.has(dd) || (this.trackedLinkElements.add(dd), this.trackStylesheetInLinkElement(dd))
      }
      adoptStyleSheets(dd, Od) {
        if (0 === dd.length) return;
        const md = {
            id: Od,
            styleIds: []
          },
          Wd = [];
        for (const Fd of dd) {
          let dd;
          this.styleMirror.has(Fd) ? dd = this.styleMirror.getId(Fd) : (dd = this.styleMirror.add(Fd), Wd.push({
            styleId: dd,
            rules: Array.from(Fd.rules || CSSRule, ((dd, Od) => ({
              rule: Jd(dd, Fd.href),
              index: Od
            })))
          })), md.styleIds.push(dd)
        }
        Wd.length > 0 && (md.styles = Wd), this.adoptedStyleSheetCb(md)
      }
      reset() {
        this.styleMirror.reset(), this.trackedLinkElements = new WeakSet
      }
      trackStylesheetInLinkElement(dd) {}
    }
    class EK {
      constructor() {
        Rd(this, "nodeMap", new WeakMap), Rd(this, "active", !1)
      }
      inOtherBuffer(dd, Od) {
        const md = this.nodeMap.get(dd);
        return md && Array.from(md).some((dd => dd !== Od))
      }
      add(dd, Od) {
        this.active || (this.active = !0, requestAnimationFrame((() => {
          this.nodeMap = new WeakMap, this.active = !1
        }))), this.nodeMap.set(dd, (this.nodeMap.get(dd) || new Set).add(Od))
      }
      destroy() {}
    }
    let JK, UK, xK, BK = !1;
    try {
      if (2 !== Array.from([1], (dd => 2 * dd))[0]) {
        const dd = document.createElement("iframe");
        document.body.appendChild(dd), Array.from = (null == (Wd = dd.contentWindow) ? void 0 : Wd.Array.from) || Array.from, document.body.removeChild(dd)
      }
    } catch (qh) {
      console.debug("Unable to override Array.from", qh)
    }
    const SK = xd();

    function sK() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      const {
        emit: Od,
        checkoutEveryNms: md,
        checkoutEveryNth: Wd,
        blockClass: Fd = "rr-block",
        blockSelector: Rd = null,
        ignoreClass: Xd = "rr-ignore",
        ignoreSelector: Kd = null,
        maskTextClass: hd = "rr-mask",
        maskTextSelector: vd = null,
        inlineStylesheet: Qd = !0,
        maskAllInputs: td,
        maskInputOptions: od,
        slimDOMOptions: Nd,
        maskInputFn: qd,
        maskTextFn: Hd,
        hooks: yd,
        packFn: bd,
        sampling: Td = {},
        dataURLOptions: pd = {},
        mousemoveWait: Yd,
        recordDOM: gd = !0,
        recordCanvas: wd = !1,
        recordCrossOriginIframes: Ed = !1,
        recordAfter: Jd = ("DOMContentLoaded" === dd.recordAfter ? dd.recordAfter : "load"),
        userTriggeredOnInput: xd = !1,
        collectFonts: Bd = !1,
        inlineImages: Sd = !1,
        plugins: sd,
        keepIframeSrcFn: ud = () => !1,
        ignoreCSSAttributes: Vd = new Set([]),
        errorHandler: Ad
      } = dd;
      DX = Ad;
      const rd = !Ed || window.parent === window;
      let Gd = !1;
      if (!rd) try {
        window.parent.document && (Gd = !1)
      } catch (kd) {
        Gd = !0
      }
      if (rd && !Od) throw new Error("emit function is required");
      if (!rd && !Gd) return () => {};
      void 0 !== Yd && void 0 === Td.mousemove && (Td.mousemove = Yd), SK.reset();
      const nd = !0 === td ? {
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
        } : void 0 !== od ? od : {
          password: !0
        },
        Ld = vO(Nd);
      let Pd;
      HX();
      let zd = 0;
      const cd = dd => {
        for (const Od of sd || []) Od.eventProcessor && (dd = Od.eventProcessor(dd));
        return bd && !Gd && (dd = bd(dd)), dd
      };
      JK = (dd, Fd) => {
        var Rd;
        const Xd = dd;
        if (Xd.timestamp = fR(), !(null == (Rd = IX[0]) ? void 0 : Rd.isFrozen()) || Xd.type === sX.FullSnapshot || Xd.type === sX.IncrementalSnapshot && Xd.data.source === uX.Mutation || IX.forEach((dd => dd.unfreeze())), rd) null == Od || Od(cd(Xd), Fd);
        else if (Gd) {
          const dd = {
            type: "rrweb",
            event: cd(Xd),
            origin: window.location.origin,
            isCheckout: Fd
          };
          window.parent.postMessage(dd, "*")
        }
        if (Xd.type === sX.FullSnapshot) Pd = Xd, zd = 0;
        else if (Xd.type === sX.IncrementalSnapshot) {
          if (Xd.data.source === uX.Mutation && Xd.data.isAttachIframe) return;
          zd++;
          const dd = Wd && zd >= Wd,
            Od = md && Xd.timestamp - Pd.timestamp > md;
          (dd || Od) && UK(!0)
        }
      };
      const jd = dd => {
          JK({
            type: sX.IncrementalSnapshot,
            data: {
              source: uX.Mutation,
              ...dd
            }
          })
        },
        Dd = dd => JK({
          type: sX.IncrementalSnapshot,
          data: {
            source: uX.Scroll,
            ...dd
          }
        }),
        ed = dd => JK({
          type: sX.IncrementalSnapshot,
          data: {
            source: uX.CanvasMutation,
            ...dd
          }
        }),
        Id = new aK({
          mutationCb: jd,
          adoptedStyleSheetCb: dd => JK({
            type: sX.IncrementalSnapshot,
            data: {
              source: uX.AdoptedStyleSheet,
              ...dd
            }
          })
        }),
        ld = new KK({
          mirror: SK,
          mutationCb: jd,
          stylesheetManager: Id,
          recordCrossOriginIframes: Ed,
          wrappedEmit: JK
        });
      for (const Ud of sd || []) Ud.getMirror && Ud.getMirror({
        nodeMirror: SK,
        crossOriginIframeMirror: ld.crossOriginIframeMirror,
        crossOriginIframeStyleMirror: ld.crossOriginIframeStyleMirror
      });
      const Cd = new EK;
      xK = new wK({
        recordCanvas: wd,
        mutationCb: ed,
        win: window,
        blockClass: Fd,
        blockSelector: Rd,
        mirror: SK,
        sampling: Td.canvas,
        dataURLOptions: pd
      });
      const Zd = new hK({
        mutationCb: jd,
        scrollCb: Dd,
        bypassOptions: {
          blockClass: Fd,
          blockSelector: Rd,
          maskTextClass: hd,
          maskTextSelector: vd,
          inlineStylesheet: Qd,
          maskInputOptions: nd,
          dataURLOptions: pd,
          maskTextFn: Hd,
          maskInputFn: qd,
          recordCanvas: wd,
          inlineImages: Sd,
          sampling: Td,
          slimDOMOptions: Ld,
          iframeManager: ld,
          stylesheetManager: Id,
          canvasManager: xK,
          keepIframeSrcFn: ud,
          processedNodeManager: Cd
        },
        mirror: SK
      });
      UK = function() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!gd) return;
        JK({
          type: sX.Meta,
          data: {
            href: window.location.href,
            width: hX(),
            height: KX()
          }
        }, dd), Id.reset(), Zd.init(), IX.forEach((dd => dd.lock()));
        const Od = function(dd, Od) {
          const {
            mirror: md = new Ud,
            blockClass: Wd = "rr-block",
            blockSelector: Fd = null,
            maskTextClass: Rd = "rr-mask",
            maskTextSelector: Xd = null,
            inlineStylesheet: Kd = !0,
            inlineImages: hd = !1,
            recordCanvas: vd = !1,
            maskAllInputs: Qd = !1,
            maskTextFn: td,
            maskInputFn: od,
            slimDOM: Nd = !1,
            dataURLOptions: qd,
            preserveWhiteSpace: Hd,
            onSerialize: yd,
            onIframeLoad: bd,
            iframeLoadTimeout: Td,
            onStylesheetLoad: pd,
            stylesheetLoadTimeout: Yd,
            keepIframeSrcFn: gd = () => !1
          } = Od;
          return QO(dd, {
            doc: dd,
            mirror: md,
            blockClass: Wd,
            blockSelector: Fd,
            maskTextClass: Rd,
            maskTextSelector: Xd,
            skipChild: !1,
            inlineStylesheet: Kd,
            maskInputOptions: !0 === Qd ? {
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
            } : !1 === Qd ? {
              password: !0
            } : Qd,
            maskTextFn: td,
            maskInputFn: od,
            slimDOMOptions: vO(Nd),
            dataURLOptions: qd,
            inlineImages: hd,
            recordCanvas: vd,
            preserveWhiteSpace: Hd,
            onSerialize: yd,
            onIframeLoad: bd,
            iframeLoadTimeout: Td,
            onStylesheetLoad: pd,
            stylesheetLoadTimeout: Yd,
            keepIframeSrcFn: gd,
            newlyAddedElement: !1
          })
        }(document, {
          mirror: SK,
          blockClass: Fd,
          blockSelector: Rd,
          maskTextClass: hd,
          maskTextSelector: vd,
          inlineStylesheet: Qd,
          maskAllInputs: nd,
          maskTextFn: Hd,
          maskInputFn: qd,
          slimDOM: Ld,
          dataURLOptions: pd,
          recordCanvas: wd,
          inlineImages: Sd,
          onSerialize: dd => {
            TX(dd, SK) && ld.addIframe(dd), pX(dd, SK) && Id.trackLinkElement(dd), gX(dd) && Zd.addShadowRoot(dX.shadowRoot(dd), document)
          },
          onIframeLoad: (dd, Od) => {
            ld.attachIframe(dd, Od), Zd.observeAttachShadow(dd)
          },
          onStylesheetLoad: (dd, Od) => {
            Id.attachLinkElement(dd, Od)
          },
          keepIframeSrcFn: ud
        });
        if (!Od) return console.warn("Failed to snapshot the document");
        JK({
          type: sX.FullSnapshot,
          data: {
            node: Od,
            initialOffset: XX(window)
          }
        }, dd), IX.forEach((dd => dd.unlock())), document.adoptedStyleSheets && document.adoptedStyleSheets.length > 0 && Id.adoptStyleSheets(document.adoptedStyleSheets, SK.getId(document))
      };
      try {
        const dd = [],
          Od = dd => {
            var Od;
            return eX(WK)({
              mutationCb: jd,
              mousemoveCb: (dd, Od) => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: Od,
                  positions: dd
                }
              }),
              mouseInteractionCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.MouseInteraction,
                  ...dd
                }
              }),
              scrollCb: Dd,
              viewportResizeCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.ViewportResize,
                  ...dd
                }
              }),
              inputCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.Input,
                  ...dd
                }
              }),
              mediaInteractionCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.MediaInteraction,
                  ...dd
                }
              }),
              styleSheetRuleCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.StyleSheetRule,
                  ...dd
                }
              }),
              styleDeclarationCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.StyleDeclaration,
                  ...dd
                }
              }),
              canvasMutationCb: ed,
              fontCb: dd => JK({
                type: sX.IncrementalSnapshot,
                data: {
                  source: uX.Font,
                  ...dd
                }
              }),
              selectionCb: dd => {
                JK({
                  type: sX.IncrementalSnapshot,
                  data: {
                    source: uX.Selection,
                    ...dd
                  }
                })
              },
              customElementCb: dd => {
                JK({
                  type: sX.IncrementalSnapshot,
                  data: {
                    source: uX.CustomElement,
                    ...dd
                  }
                })
              },
              blockClass: Fd,
              ignoreClass: Xd,
              ignoreSelector: Kd,
              maskTextClass: hd,
              maskTextSelector: vd,
              maskInputOptions: nd,
              inlineStylesheet: Qd,
              sampling: Td,
              recordDOM: gd,
              recordCanvas: wd,
              inlineImages: Sd,
              userTriggeredOnInput: xd,
              collectFonts: Bd,
              doc: dd,
              maskInputFn: qd,
              maskTextFn: Hd,
              keepIframeSrcFn: ud,
              blockSelector: Rd,
              slimDOMOptions: Ld,
              dataURLOptions: pd,
              mirror: SK,
              iframeManager: ld,
              stylesheetManager: Id,
              shadowDomManager: Zd,
              processedNodeManager: Cd,
              canvasManager: xK,
              ignoreCSSAttributes: Vd,
              plugins: (null == (Od = null == sd ? void 0 : sd.filter((dd => dd.observer))) ? void 0 : Od.map((dd => ({
                observer: dd.observer,
                options: dd.options,
                callback: Od => JK({
                  type: sX.Plugin,
                  data: {
                    plugin: dd.name,
                    payload: Od
                  }
                })
              })))) || []
            }, yd)
          };
        ld.addLoadListener((md => {
          try {
            dd.push(Od(md.contentDocument))
          } catch (Wd) {
            console.warn(Wd)
          }
        }));
        const md = () => {
          UK(), dd.push(Od(document)), BK = !0
        };
        return ["interactive", "complete"].includes(document.readyState) ? md() : (dd.push(OX("DOMContentLoaded", (() => {
          JK({
            type: sX.DomContentLoaded,
            data: {}
          }), "DOMContentLoaded" === Jd && md()
        }))), dd.push(OX("load", (() => {
          JK({
            type: sX.Load,
            data: {}
          }), "load" === Jd && md()
        }), window))), () => {
          dd.forEach((dd => {
            try {
              dd()
            } catch (Od) {
              String(Od).toLowerCase().includes("cross-origin") || console.warn(Od)
            }
          })), Cd.destroy(), BK = !1, DX = void 0
        }
      } catch (fd) {
        console.warn(fd)
      }
    }

    function uK() {
      let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
        Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document;
      if ("scrollBehavior" in Od.documentElement.style && !0 !== dd.__forceSmoothScrollPolyfill__) return;
      const md = dd.HTMLElement || dd.Element,
        Wd = {
          scroll: dd.scroll || dd.scrollTo,
          scrollBy: dd.scrollBy,
          elementScroll: md.prototype.scroll || Kd,
          scrollIntoView: md.prototype.scrollIntoView
        },
        Fd = dd.performance && dd.performance.now ? dd.performance.now.bind(dd.performance) : Date.now;
      const Rd = (Xd = dd.navigator.userAgent, new RegExp(["MSIE ", "Trident/", "Edge/"].join("|")).test(Xd) ? 1 : 0);
      var Xd;

      function Kd(dd, Od) {
        this.scrollLeft = dd, this.scrollTop = Od
      }

      function hd(dd) {
        if (null === dd || "object" !== typeof dd || void 0 === dd.behavior || "auto" === dd.behavior || "instant" === dd.behavior) return !0;
        if ("object" === typeof dd && "smooth" === dd.behavior) return !1;
        throw new TypeError("behavior member of ScrollOptions " + dd.behavior + " is not a valid value for enumeration ScrollBehavior.")
      }

      function vd(dd, Od) {
        return "Y" === Od ? dd.clientHeight + Rd < dd.scrollHeight : "X" === Od ? dd.clientWidth + Rd < dd.scrollWidth : void 0
      }

      function Qd(Od, md) {
        const Wd = dd.getComputedStyle(Od, null)["overflow" + md];
        return "auto" === Wd || "scroll" === Wd
      }

      function td(dd) {
        const Od = vd(dd, "Y") && Qd(dd, "Y"),
          md = vd(dd, "X") && Qd(dd, "X");
        return Od || md
      }

      function od(Od) {
        let md, Wd, Rd, Xd = (Fd() - Od.startTime) / 468;
        var Kd;
        Xd = Xd > 1 ? 1 : Xd, Kd = Xd, md = .5 * (1 - Math.cos(Math.PI * Kd)), Wd = Od.startX + (Od.x - Od.startX) * md, Rd = Od.startY + (Od.y - Od.startY) * md, Od.method.call(Od.scrollable, Wd, Rd), Wd === Od.x && Rd === Od.y || dd.requestAnimationFrame(od.bind(dd, Od))
      }

      function Nd(md, Rd, Xd) {
        let hd, vd, Qd, td;
        const Nd = Fd();
        md === Od.body ? (hd = dd, vd = dd.scrollX || dd.pageXOffset, Qd = dd.scrollY || dd.pageYOffset, td = Wd.scroll) : (hd = md, vd = md.scrollLeft, Qd = md.scrollTop, td = Kd), od({
          scrollable: hd,
          method: td,
          startTime: Nd,
          startX: vd,
          startY: Qd,
          x: Rd,
          y: Xd
        })
      }
      dd.scroll = dd.scrollTo = function() {
        void 0 !== arguments[0] && (!0 !== hd(arguments[0]) ? Nd.call(dd, Od.body, void 0 !== arguments[0].left ? ~~arguments[0].left : dd.scrollX || dd.pageXOffset, void 0 !== arguments[0].top ? ~~arguments[0].top : dd.scrollY || dd.pageYOffset) : Wd.scroll.call(dd, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : dd.scrollX || dd.pageXOffset, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : dd.scrollY || dd.pageYOffset))
      }, dd.scrollBy = function() {
        void 0 !== arguments[0] && (hd(arguments[0]) ? Wd.scrollBy.call(dd, void 0 !== arguments[0].left ? arguments[0].left : "object" !== typeof arguments[0] ? arguments[0] : 0, void 0 !== arguments[0].top ? arguments[0].top : void 0 !== arguments[1] ? arguments[1] : 0) : Nd.call(dd, Od.body, ~~arguments[0].left + (dd.scrollX || dd.pageXOffset), ~~arguments[0].top + (dd.scrollY || dd.pageYOffset)))
      }, md.prototype.scroll = md.prototype.scrollTo = function() {
        if (void 0 === arguments[0]) return;
        if (!0 === hd(arguments[0])) {
          if ("number" === typeof arguments[0] && void 0 === arguments[1]) throw new SyntaxError("Value could not be converted");
          return void Wd.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left : "object" !== typeof arguments[0] ? ~~arguments[0] : this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top : void 0 !== arguments[1] ? ~~arguments[1] : this.scrollTop)
        }
        const dd = arguments[0].left,
          Od = arguments[0].top;
        Nd.call(this, this, "undefined" === typeof dd ? this.scrollLeft : ~~dd, "undefined" === typeof Od ? this.scrollTop : ~~Od)
      }, md.prototype.scrollBy = function() {
        void 0 !== arguments[0] && (!0 !== hd(arguments[0]) ? this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        }) : Wd.elementScroll.call(this, void 0 !== arguments[0].left ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, void 0 !== arguments[0].top ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop))
      }, md.prototype.scrollIntoView = function() {
        if (!0 === hd(arguments[0])) return void Wd.scrollIntoView.call(this, void 0 === arguments[0] || arguments[0]);
        const md = function(dd) {
            for (; dd !== Od.body && !1 === td(dd);) dd = dd.parentNode || dd.host;
            return dd
          }(this),
          Fd = md.getBoundingClientRect(),
          Rd = this.getBoundingClientRect();
        md !== Od.body ? (Nd.call(this, md, md.scrollLeft + Rd.left - Fd.left, md.scrollTop + Rd.top - Fd.top), "fixed" !== dd.getComputedStyle(md).position && dd.scrollBy({
          left: Fd.left,
          top: Fd.top,
          behavior: "smooth"
        })) : dd.scrollBy({
          left: Rd.left,
          top: Rd.top,
          behavior: "smooth"
        })
      }
    }
    sK.addCustomEvent = (dd, Od) => {
      if (!BK) throw new Error("please add custom event after start recording");
      JK({
        type: sX.Custom,
        data: {
          tag: dd,
          payload: Od
        }
      })
    }, sK.freezePage = () => {
      IX.forEach((dd => dd.freeze()))
    }, sK.takeFullSnapshot = dd => {
      if (!BK) throw new Error("please take full snapshot after start recording");
      UK(dd)
    }, sK.mirror = SK;
    class VK {
      constructor() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
          Od = arguments.length > 1 ? arguments[1] : void 0;
        Rd(this, "timeOffset", 0), Rd(this, "speed"), Rd(this, "actions"), Rd(this, "raf", null), Rd(this, "lastTimestamp"), this.actions = dd, this.speed = Od.speed
      }
      addAction(dd) {
        const Od = !0 === this.raf;
        if (!this.actions.length || this.actions[this.actions.length - 1].delay <= dd.delay) this.actions.push(dd);
        else {
          const Od = this.findActionIndex(dd);
          this.actions.splice(Od, 0, dd)
        }
        Od && (this.raf = requestAnimationFrame(this.rafCheck.bind(this)))
      }
      start() {
        this.timeOffset = 0, this.lastTimestamp = performance.now(), this.raf = requestAnimationFrame(this.rafCheck.bind(this))
      }
      updateLiveTime() {
        !0 === this.raf && this.rafCheck()
      }
      rafCheck() {
        const dd = performance.now();
        for (this.timeOffset += (dd - this.lastTimestamp) * this.speed, this.lastTimestamp = dd; this.actions.length;) {
          const dd = this.actions[0];
          if (!(this.timeOffset >= dd.delay)) break;
          this.actions.shift(), dd.doAction()
        }
        this.actions.length > 0 ? this.raf = requestAnimationFrame(this.rafCheck.bind(this)) : this.raf = !0
      }
      clear() {
        this.raf && (!0 !== this.raf && cancelAnimationFrame(this.raf), this.raf = null), this.actions.length = 0
      }
      setSpeed(dd) {
        this.speed = dd
      }
      isActive() {
        return null !== this.raf
      }
      findActionIndex(dd) {
        let Od = 0,
          md = this.actions.length - 1;
        for (; Od <= md;) {
          const Wd = Math.floor((Od + md) / 2);
          if (this.actions[Wd].delay < dd.delay) Od = Wd + 1;
          else {
            if (!(this.actions[Wd].delay > dd.delay)) return Wd + 1;
            md = Wd - 1
          }
        }
        return Od
      }
    }

    function iK(dd, Od) {
      if (dd.type === sX.IncrementalSnapshot && dd.data.source === uX.MouseMove && dd.data.positions && dd.data.positions.length) {
        const md = dd.data.positions[0].timeOffset,
          Wd = dd.timestamp + md;
        return dd.delay = Wd - Od, Wd - Od
      }
      return dd.delay = dd.timestamp - Od, dd.delay
    }

    function AK(dd, Od) {
      var md = "function" == typeof Symbol && dd[Symbol.iterator];
      if (!md) return dd;
      var Wd, Fd, Rd = md.call(dd),
        Xd = [];
      try {
        for (;
          (void 0 === Od || Od-- > 0) && !(Wd = Rd.next()).done;) Xd.push(Wd.value)
      } catch (Kd) {
        Fd = {
          error: Kd
        }
      } finally {
        try {
          Wd && !Wd.done && (md = Rd.return) && md.call(Rd)
        } finally {
          if (Fd) throw Fd.error
        }
      }
      return Xd
    }
    var rK, GK;
    (GK = rK || (rK = {}))[GK.NotStarted = 0] = "NotStarted", GK[GK.Running = 1] = "Running", GK[GK.Stopped = 2] = "Stopped";
    var nK = {
      type: "xstate.init"
    };

    function LK(dd) {
      return void 0 === dd ? [] : [].concat(dd)
    }

    function PK(dd) {
      return {
        type: "xstate.assign",
        assignment: dd
      }
    }

    function zK(dd, Od) {
      return "string" == typeof(dd = "string" == typeof dd && Od && Od[dd] ? Od[dd] : dd) ? {
        type: dd
      } : "function" == typeof dd ? {
        type: dd.name,
        exec: dd
      } : dd
    }

    function cK(dd) {
      return function(Od) {
        return dd === Od
      }
    }

    function jK(dd) {
      return "string" == typeof dd ? {
        type: dd
      } : dd
    }

    function DK(dd, Od) {
      return {
        value: dd,
        context: Od,
        actions: [],
        changed: !1,
        matches: cK(dd)
      }
    }

    function eK(dd, Od, md) {
      var Wd = Od,
        Fd = !1;
      return [dd.filter((function(dd) {
        if ("xstate.assign" === dd.type) {
          Fd = !0;
          var Od = Object.assign({}, Wd);
          return "function" == typeof dd.assignment ? Od = dd.assignment(Wd, md) : Object.keys(dd.assignment).forEach((function(Fd) {
            Od[Fd] = "function" == typeof dd.assignment[Fd] ? dd.assignment[Fd](Wd, md) : dd.assignment[Fd]
          })), Wd = Od, !1
        }
        return !0
      })), Wd, Fd]
    }

    function IK(dd, Od) {
      void 0 === Od && (Od = {});
      var md = AK(eK(LK(dd.states[dd.initial].entry).map((function(dd) {
          return zK(dd, Od.actions)
        })), dd.context, nK), 2),
        Wd = md[0],
        Fd = md[1],
        Rd = {
          config: dd,
          _options: Od,
          initialState: {
            value: dd.initial,
            actions: Wd,
            context: Fd,
            matches: cK(dd.initial)
          },
          transition: function(Od, md) {
            var Wd, Fd, Xd = "string" == typeof Od ? {
                value: Od,
                context: dd.context
              } : Od,
              Kd = Xd.value,
              hd = Xd.context,
              vd = jK(md),
              Qd = dd.states[Kd];
            if (Qd.on) {
              var td = LK(Qd.on[vd.type]);
              try {
                for (var od = function(dd) {
                    var Od = "function" == typeof Symbol && Symbol.iterator,
                      md = Od && dd[Od],
                      Wd = 0;
                    if (md) return md.call(dd);
                    if (dd && "number" == typeof dd.length) return {
                      next: function() {
                        return dd && Wd >= dd.length && (dd = void 0), {
                          value: dd && dd[Wd++],
                          done: !dd
                        }
                      }
                    };
                    throw new TypeError(Od ? "Object is not iterable." : "Symbol.iterator is not defined.")
                  }(td), Nd = od.next(); !Nd.done; Nd = od.next()) {
                  var qd = Nd.value;
                  if (void 0 === qd) return DK(Kd, hd);
                  var Hd = "string" == typeof qd ? {
                      target: qd
                    } : qd,
                    yd = Hd.target,
                    bd = Hd.actions,
                    Td = void 0 === bd ? [] : bd,
                    pd = Hd.cond,
                    Yd = void 0 === pd ? function() {
                      return !0
                    } : pd,
                    gd = void 0 === yd,
                    wd = null != yd ? yd : Kd,
                    Ed = dd.states[wd];
                  if (Yd(hd, vd)) {
                    var Jd = AK(eK((gd ? LK(Td) : [].concat(Qd.exit, Td, Ed.entry).filter((function(dd) {
                        return dd
                      }))).map((function(dd) {
                        return zK(dd, Rd._options.actions)
                      })), hd, vd), 3),
                      Ud = Jd[0],
                      xd = Jd[1],
                      Bd = Jd[2],
                      Sd = null != yd ? yd : Kd;
                    return {
                      value: Sd,
                      context: xd,
                      actions: Ud,
                      changed: yd !== Kd || Ud.length > 0 || Bd,
                      matches: cK(Sd)
                    }
                  }
                }
              } catch (GK) {
                Wd = {
                  error: GK
                }
              } finally {
                try {
                  Nd && !Nd.done && (Fd = od.return) && Fd.call(od)
                } finally {
                  if (Wd) throw Wd.error
                }
              }
            }
            return DK(Kd, hd)
          }
        };
      return Rd
    }
    var lK = function(dd, Od) {
      return dd.actions.forEach((function(md) {
        var Wd = md.exec;
        return Wd && Wd(dd.context, Od)
      }))
    };

    function CK(dd) {
      var Od = dd.initialState,
        md = rK.NotStarted,
        Wd = new Set,
        Fd = {
          _machine: dd,
          send: function(Fd) {
            md === rK.Running && (Od = dd.transition(Od, Fd), lK(Od, jK(Fd)), Wd.forEach((function(dd) {
              return dd(Od)
            })))
          },
          subscribe: function(dd) {
            return Wd.add(dd), dd(Od), {
              unsubscribe: function() {
                return Wd.delete(dd)
              }
            }
          },
          start: function(Wd) {
            if (Wd) {
              var Rd = "object" == typeof Wd ? Wd : {
                context: dd.config.context,
                value: Wd
              };
              Od = {
                value: Rd.value,
                actions: [],
                context: Rd.context,
                matches: cK(Rd.value)
              }
            }
            return md = rK.Running, lK(Od, nK), Fd
          },
          stop: function() {
            return md = rK.Stopped, Wd.clear(), Fd
          },
          get state() {
            return Od
          },
          get status() {
            return md
          }
        };
      return Fd
    }

    function ZK(dd, Od) {
      let {
        getCastFn: md,
        applyEventsSynchronously: Wd,
        emitter: Fd
      } = Od;
      return CK(IK({
        id: "player",
        context: dd,
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
          castEvent: PK({
            lastPlayedEvent: (dd, Od) => "CAST_EVENT" === Od.type ? Od.payload.event : dd.lastPlayedEvent
          }),
          recordTimeOffset: PK(((dd, Od) => {
            let md = dd.timeOffset;
            return "payload" in Od && "timeOffset" in Od.payload && (md = Od.payload.timeOffset), {
              ...dd,
              timeOffset: md,
              baselineTime: dd.events[0].timestamp + md
            }
          })),
          play(dd) {
            var Od;
            const {
              timer: Rd,
              events: Xd,
              baselineTime: Kd,
              lastPlayedEvent: hd
            } = dd;
            Rd.clear();
            for (const md of Xd) iK(md, Kd);
            const vd = function(dd, Od) {
              for (let md = dd.length - 1; md >= 0; md--) {
                const Wd = dd[md];
                if (Wd.type === sX.Meta && Wd.timestamp <= Od) return dd.slice(md)
              }
              return dd
            }(Xd, Kd);
            let Qd = null == hd ? void 0 : hd.timestamp;
            (null == hd ? void 0 : hd.type) === sX.IncrementalSnapshot && hd.data.source === uX.MouseMove && (Qd = hd.timestamp + (null == (Od = hd.data.positions[0]) ? void 0 : Od.timeOffset)), Kd < (Qd || 0) && Fd.emit(GX.PlayBack);
            const td = new Array;
            for (const Wd of vd)
              if (!(Qd && Qd < Kd && (Wd.timestamp <= Qd || Wd === hd)))
                if (Wd.timestamp < Kd) td.push(Wd);
                else {
                  const dd = md(Wd, !1);
                  Rd.addAction({
                    doAction: () => {
                      dd()
                    },
                    delay: Wd.delay
                  })
                } Wd(td), Fd.emit(GX.Flush), Rd.start()
          },
          pause(dd) {
            dd.timer.clear()
          },
          resetLastPlayedEvent: PK((dd => ({
            ...dd,
            lastPlayedEvent: null
          }))),
          startLive: PK({
            baselineTime: (dd, Od) => (dd.timer.start(), "TO_LIVE" === Od.type && Od.payload.baselineTime ? Od.payload.baselineTime : Date.now())
          }),
          addEvent: PK(((dd, Od) => {
            const {
              baselineTime: Wd,
              timer: Fd,
              events: Rd
            } = dd;
            if ("ADD_EVENT" === Od.type) {
              const {
                event: dd
              } = Od.payload;
              iK(dd, Wd);
              let Xd = Rd.length - 1;
              if (!Rd[Xd] || Rd[Xd].timestamp <= dd.timestamp) Rd.push(dd);
              else {
                let Od = -1,
                  md = 0;
                for (; md <= Xd;) {
                  const Od = Math.floor((md + Xd) / 2);
                  Rd[Od].timestamp <= dd.timestamp ? md = Od + 1 : Xd = Od - 1
                } - 1 === Od && (Od = md), Rd.splice(Od, 0, dd)
              }
              const Kd = dd.timestamp < Wd,
                hd = md(dd, Kd);
              Kd ? hd() : Fd.isActive() && Fd.addAction({
                doAction: () => {
                  hd()
                },
                delay: dd.delay
              })
            }
            return {
              ...dd,
              events: Rd
            }
          }))
        }
      }))
    }
    const kK = new Map;

    function fK(dd, Od) {
      let md = kK.get(dd);
      return md || (md = new Map, kK.set(dd, md)), md.has(Od) || md.set(Od, []), md.get(Od)
    }

    function MK(dd, Od, md) {
      return async Wd => {
        if (Wd && "object" === typeof Wd && "rr_type" in Wd) {
          if (md && (md.isUnchanged = !1), "ImageBitmap" === Wd.rr_type && "args" in Wd) {
            const Fd = await MK(dd, Od, md)(Wd.args);
            return await createImageBitmap.apply(null, Fd)
          }
          if ("index" in Wd) {
            if (md || null === Od) return Wd;
            const {
              rr_type: dd,
              index: Fd
            } = Wd;
            return fK(Od, dd)[Fd]
          }
          if ("args" in Wd) {
            const {
              rr_type: Fd,
              args: Rd
            } = Wd;
            return new(0, window[Fd])(...await Promise.all(Rd.map(MK(dd, Od, md))))
          }
          if ("base64" in Wd) return function(dd) {
            var Od, md, Wd, Fd, Rd, Xd = .75 * dd.length,
              Kd = dd.length,
              hd = 0;
            "=" === dd[dd.length - 1] && (Xd--, "=" === dd[dd.length - 2] && Xd--);
            var vd = new ArrayBuffer(Xd),
              Qd = new Uint8Array(vd);
            for (Od = 0; Od < Kd; Od += 4) md = QK[dd.charCodeAt(Od)], Wd = QK[dd.charCodeAt(Od + 1)], Fd = QK[dd.charCodeAt(Od + 2)], Rd = QK[dd.charCodeAt(Od + 3)], Qd[hd++] = md << 2 | Wd >> 4, Qd[hd++] = (15 & Wd) << 4 | Fd >> 2, Qd[hd++] = (3 & Fd) << 6 | 63 & Rd;
            return vd
          }(Wd.base64);
          if ("src" in Wd) {
            const Od = dd.get(Wd.src);
            if (Od) return Od;
            {
              const Od = new Image;
              return Od.src = Wd.src, dd.set(Wd.src, Od), Od
            }
          }
          if ("data" in Wd && "Blob" === Wd.rr_type) {
            const Fd = await Promise.all(Wd.data.map(MK(dd, Od, md)));
            return new Blob(Fd, {
              type: Wd.type
            })
          }
        } else if (Array.isArray(Wd)) {
          return await Promise.all(Wd.map(MK(dd, Od, md)))
        }
        return Wd
      }
    }
    const dh = ["WebGLActiveInfo", "WebGLBuffer", "WebGLFramebuffer", "WebGLProgram", "WebGLRenderbuffer", "WebGLShader", "WebGLShaderPrecisionFormat", "WebGLTexture", "WebGLUniformLocation", "WebGLVertexArrayObject"];
    async function Oh(dd) {
      let {
        mutation: Od,
        target: md,
        type: Wd,
        imageMap: Fd,
        errorHandler: Rd
      } = dd;
      try {
        const dd = function(dd, Od) {
          try {
            return Od === AX.WebGL ? dd.getContext("webgl") || dd.getContext("experimental-webgl") : dd.getContext("webgl2")
          } catch (md) {
            return null
          }
        }(md, Wd);
        if (!dd) return;
        if (Od.setter) return void(dd[Od.property] = Od.args[0]);
        const Rd = dd[Od.property],
          Xd = await Promise.all(Od.args.map(MK(Fd, dd)));
        ! function(dd, Od) {
          if (!(null == Od ? void 0 : Od.constructor)) return;
          const {
            name: md
          } = Od.constructor;
          if (!dh.includes(md)) return;
          const Wd = fK(dd, md);
          Wd.includes(Od) || Wd.push(Od)
        }(dd, Rd.apply(dd, Xd))
      } catch (Xd) {
        Rd(Od, Xd)
      }
    }
    async function mh(dd) {
      let {
        event: Od,
        mutation: md,
        target: Wd,
        imageMap: Fd,
        canvasEventMap: Rd,
        errorHandler: Xd
      } = dd;
      try {
        const dd = Rd.get(Od) || md,
          Kd = "commands" in dd ? dd.commands : [dd];
        if ([AX.WebGL, AX.WebGL2].includes(md.type)) {
          for (let dd = 0; dd < Kd.length; dd++) {
            const Od = Kd[dd];
            await Oh({
              mutation: Od,
              type: md.type,
              target: Wd,
              imageMap: Fd,
              errorHandler: Xd
            })
          }
          return
        }
        await async function(dd) {
          let {
            event: Od,
            mutations: md,
            target: Wd,
            imageMap: Fd,
            errorHandler: Rd
          } = dd;
          const Xd = Wd.getContext("2d");
          if (!Xd) return void Rd(md[0], new Error("Canvas context is null"));
          const Kd = md.map((async dd => Promise.all(dd.args.map(MK(Fd, Xd)))));
          (await Promise.all(Kd)).forEach(((dd, Wd) => {
            const Kd = md[Wd];
            try {
              if (Kd.setter) return void(Xd[Kd.property] = Kd.args[0]);
              const md = Xd[Kd.property];
              "drawImage" === Kd.property && "string" === typeof Kd.args[0] ? (Fd.get(Od), md.apply(Xd, Kd.args)) : md.apply(Xd, dd)
            } catch (hd) {
              Rd(Kd, hd)
            }
          }))
        }({
          event: Od,
          mutations: Kd,
          target: Wd,
          imageMap: Fd,
          errorHandler: Xd
        })
      } catch (Kd) {
        Xd(md, Kd)
      }
    }
    class Wh {
      constructor(dd) {
        Rd(this, "mediaMap", new Map), Rd(this, "warn"), Rd(this, "service"), Rd(this, "speedService"), Rd(this, "emitter"), Rd(this, "getCurrentTime"), Rd(this, "metadataCallbackMap", new Map), this.warn = dd.warn, this.service = dd.service, this.speedService = dd.speedService, this.emitter = dd.emitter, this.getCurrentTime = dd.getCurrentTime, this.emitter.on(GX.Start, this.start.bind(this)), this.emitter.on(GX.SkipStart, this.start.bind(this)), this.emitter.on(GX.Pause, this.pause.bind(this)), this.emitter.on(GX.Finish, this.pause.bind(this)), this.speedService.subscribe((() => {
          this.syncAllMediaElements()
        }))
      }
      syncAllMediaElements() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
          pause: !1
        };
        this.mediaMap.forEach(((Od, md) => {
          this.syncTargetWithState(md), dd.pause && md.pause()
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
      seekTo(dd) {
        let {
          time: Od,
          target: md,
          mediaState: Wd
        } = dd;
        if (Wd.isPlaying) {
          const dd = (Od - Wd.lastInteractionTimeOffset) / 1e3 * Wd.playbackRate,
            Fd = "duration" in md && md.duration;
          if (Number.isNaN(Fd)) return void this.waitForMetadata(md);
          let Rd = Wd.currentTimeAtLastInteraction + dd;
          md.loop && !1 !== Fd && (Rd %= Fd), md.currentTime = Rd
        } else md.pause(), md.currentTime = Wd.currentTimeAtLastInteraction
      }
      waitForMetadata(dd) {
        if (this.metadataCallbackMap.has(dd)) return;
        if (!("addEventListener" in dd)) return;
        const Od = () => {
          this.metadataCallbackMap.delete(dd);
          const Od = this.mediaMap.get(dd);
          Od && this.seekTo({
            time: this.getCurrentTime(),
            target: dd,
            mediaState: Od
          })
        };
        this.metadataCallbackMap.set(dd, Od), dd.addEventListener("loadedmetadata", Od, {
          once: !0
        })
      }
      getMediaStateFromMutation(dd) {
        let {
          target: Od,
          timeOffset: md,
          mutation: Wd
        } = dd;
        const Fd = this.mediaMap.get(Od),
          {
            type: Rd,
            playbackRate: Xd,
            currentTime: Kd,
            muted: hd,
            volume: vd,
            loop: Qd
          } = Wd;
        return {
          isPlaying: Rd === rX.Play || Rd !== rX.Pause && ((null == Fd ? void 0 : Fd.isPlaying) || null !== Od.getAttribute("autoplay")),
          currentTimeAtLastInteraction: Kd ?? (null == Fd ? void 0 : Fd.currentTimeAtLastInteraction) ?? 0,
          lastInteractionTimeOffset: md,
          playbackRate: Xd ?? (null == Fd ? void 0 : Fd.playbackRate) ?? 1,
          volume: vd ?? (null == Fd ? void 0 : Fd.volume) ?? 1,
          muted: hd ?? (null == Fd ? void 0 : Fd.muted) ?? null === Od.getAttribute("muted"),
          loop: Qd ?? (null == Fd ? void 0 : Fd.loop) ?? null === Od.getAttribute("loop")
        }
      }
      syncTargetWithState(dd) {
        const Od = this.mediaMap.get(dd);
        if (!Od) return;
        const {
          muted: md,
          loop: Wd,
          volume: Fd,
          isPlaying: Rd
        } = Od, Xd = this.service.state.matches("paused"), Kd = Od.playbackRate * this.speedService.state.context.timer.speed;
        try {
          this.seekTo({
            time: this.getCurrentTime(),
            target: dd,
            mediaState: Od
          }), dd.volume !== Fd && (dd.volume = Fd), dd.muted = md, dd.loop = Wd, dd.playbackRate !== Kd && (dd.playbackRate = Kd), Rd && !Xd ? dd.play() : dd.pause()
        } catch (hd) {
          this.warn(`Failed to replay media interactions: ${hd.message||hd}`)
        }
      }
      addMediaElements(dd, Od, md) {
        if (!["AUDIO", "VIDEO"].includes(dd.nodeName)) return;
        const Wd = dd,
          Fd = md.getMeta(Wd);
        if (!Fd || !("attributes" in Fd)) return;
        const Rd = this.service.state.matches("paused"),
          Xd = Fd.attributes;
        let Kd = !1;
        Kd = Xd.rr_mediaState ? "played" === Xd.rr_mediaState : null !== Wd.getAttribute("autoplay"), Kd && Rd && Wd.pause();
        let hd = 1;
        "number" === typeof Xd.rr_mediaPlaybackRate && (hd = Xd.rr_mediaPlaybackRate);
        let vd = !1;
        vd = "boolean" === typeof Xd.rr_mediaMuted ? Xd.rr_mediaMuted : null !== Wd.getAttribute("muted");
        let Qd = !1;
        Qd = "boolean" === typeof Xd.rr_mediaLoop ? Xd.rr_mediaLoop : null !== Wd.getAttribute("loop");
        let td = 1;
        "number" === typeof Xd.rr_mediaVolume && (td = Xd.rr_mediaVolume);
        let od = 0;
        "number" === typeof Xd.rr_mediaCurrentTime && (od = Xd.rr_mediaCurrentTime), this.mediaMap.set(Wd, {
          isPlaying: Kd,
          currentTimeAtLastInteraction: od,
          lastInteractionTimeOffset: Od,
          playbackRate: hd,
          volume: td,
          muted: vd,
          loop: Qd
        }), this.syncTargetWithState(Wd)
      }
      mediaMutation(dd) {
        let {
          target: Od,
          timeOffset: md,
          mutation: Wd
        } = dd;
        this.mediaMap.set(Od, this.getMediaStateFromMutation({
          target: Od,
          timeOffset: md,
          mutation: Wd
        })), this.syncTargetWithState(Od)
      }
      isSupportedMediaElement(dd) {
        return ["AUDIO", "VIDEO"].includes(dd.nodeName)
      }
      reset() {
        this.mediaMap.clear()
      }
    }

    function Fh(dd, Od) {
      if ("DIALOG" !== dd.nodeName || dd instanceof WR) return;
      const md = dd,
        Wd = md.open,
        Fd = Wd && md.matches("dialog:modal"),
        Rd = md.getAttribute("rr_open_mode"),
        Xd = "string" === typeof(null == Od ? void 0 : Od.attributes.open) || "string" === typeof md.getAttribute("open"),
        Kd = "modal" === Rd;
      Wd && !(Fd && "non-modal" === Rd || !Fd && Kd) || (md.isConnected ? (Wd && md.close(), Xd && (Kd ? md.showModal() : md.show())) : console.warn("dialog is not attached to the dom", md))
    }

    function Rh(dd, Od) {
      if ("DIALOG" !== dd.nodeName || dd instanceof WR) return;
      const md = dd;
      md.isConnected ? null === Od.attributes.open && (md.removeAttribute("open"), md.removeAttribute("rr_open_mode")) : console.warn("dialog is not attached to the dom", md)
    }
    const Xh = function(dd) {
        return {
          all: dd = dd || new Map,
          on: function(Od, md) {
            var Wd = dd.get(Od);
            Wd ? Wd.push(md) : dd.set(Od, [md])
          },
          off: function(Od, md) {
            var Wd = dd.get(Od);
            Wd && (md ? Wd.splice(Wd.indexOf(md) >>> 0, 1) : dd.set(Od, []))
          },
          emit: function(Od, md) {
            var Wd = dd.get(Od);
            Wd && Wd.slice().map((function(dd) {
              dd(md)
            })), (Wd = dd.get("*")) && Wd.slice().map((function(dd) {
              dd(Od, md)
            }))
          }
        }
      },
      Kh = "[replayer]",
      hh = {
        duration: 500,
        lineCap: "round",
        lineWidth: 3,
        strokeStyle: "red"
      };

    function vh(dd) {
      return dd.type == sX.IncrementalSnapshot && (dd.data.source == uX.TouchMove || dd.data.source == uX.MouseInteraction && dd.data.type == VX.TouchStart)
    }
    class Qh {
      constructor(dd, Od) {
        var md = this;
        if (Rd(this, "wrapper"), Rd(this, "iframe"), Rd(this, "UNSAFE_replayCanvas", !1), Rd(this, "service"), Rd(this, "speedService"), Rd(this, "config"), Rd(this, "usingVirtualDom", !1), Rd(this, "virtualDom", new JR), Rd(this, "mouse"), Rd(this, "mouseTail", null), Rd(this, "tailPositions", []), Rd(this, "emitter", Xh()), Rd(this, "nextUserInteractionEvent"), Rd(this, "legacy_missingNodeRetryMap", {}), Rd(this, "cache", dW()), Rd(this, "imageMap", new Map), Rd(this, "canvasEventMap", new Map), Rd(this, "mirror", xd()), Rd(this, "styleMirror", new JX), Rd(this, "mediaManager"), Rd(this, "firstFullSnapshot", null), Rd(this, "newDocumentQueue", []), Rd(this, "mousePos", null), Rd(this, "touchActive", null), Rd(this, "lastMouseDownEvent", null), Rd(this, "lastHoveredRootNode"), Rd(this, "lastSelectionData", null), Rd(this, "constructedStyleMutations", []), Rd(this, "adoptedStyleSheets", []), Rd(this, "handleResize", (dd => {
            this.iframe.style.display = "inherit";
            for (const Od of [this.mouseTail, this.iframe]) Od && (Od.setAttribute("width", String(dd.width)), Od.setAttribute("height", String(dd.height)))
          })), Rd(this, "applyEventsSynchronously", (dd => {
            for (const Od of dd) {
              switch (Od.type) {
                case sX.DomContentLoaded:
                case sX.Load:
                  continue;
                case sX.FullSnapshot:
                case sX.Meta:
                case sX.Plugin:
                case sX.IncrementalSnapshot:
              }
              this.getCastFn(Od, !0)()
            }
          })), Rd(this, "getCastFn", (function(dd) {
            let Od, Wd = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            switch (dd.type) {
              case sX.DomContentLoaded:
              case sX.Load:
                break;
              case sX.Custom:
                Od = () => {
                  md.emitter.emit(GX.CustomEvent, dd)
                };
                break;
              case sX.Meta:
                Od = () => md.emitter.emit(GX.Resize, {
                  width: dd.data.width,
                  height: dd.data.height
                });
                break;
              case sX.FullSnapshot:
                Od = () => {
                  var Od;
                  if (md.firstFullSnapshot) {
                    if (md.firstFullSnapshot === dd) return void(md.firstFullSnapshot = !0)
                  } else md.firstFullSnapshot = !0;
                  md.mediaManager.reset(), md.styleMirror.reset(), md.rebuildFullSnapshot(dd, Wd), null == (Od = md.iframe.contentWindow) || Od.scrollTo(dd.data.initialOffset)
                };
                break;
              case sX.IncrementalSnapshot:
                Od = () => {
                  if (md.applyIncremental(dd, Wd), !Wd && (dd === md.nextUserInteractionEvent && (md.nextUserInteractionEvent = null, md.backToNormal()), md.config.skipInactive && !md.nextUserInteractionEvent)) {
                    for (const Od of md.service.state.context.events)
                      if (!(Od.timestamp <= dd.timestamp) && md.isUserInteraction(Od)) {
                        Od.delay - dd.delay > md.config.inactivePeriodThreshold * md.speedService.state.context.timer.speed && (md.nextUserInteractionEvent = Od);
                        break
                      } if (md.nextUserInteractionEvent) {
                      const Od = md.nextUserInteractionEvent.delay - dd.delay,
                        Wd = {
                          speed: Math.min(Math.round(Od / 5e3), md.config.maxSpeed)
                        };
                      md.speedService.send({
                        type: "FAST_FORWARD",
                        payload: Wd
                      }), md.emitter.emit(GX.SkipStart, Wd)
                    }
                  }
                }
            }
            return () => {
              Od && Od();
              for (const Od of md.config.plugins || []) Od.handler && Od.handler(dd, Wd, {
                replayer: md
              });
              md.service.send({
                type: "CAST_EVENT",
                payload: {
                  event: dd
                }
              });
              const Fd = md.service.state.context.events.length - 1;
              if (!md.config.liveMode && dd === md.service.state.context.events[Fd]) {
                const Od = () => {
                  Fd < md.service.state.context.events.length - 1 || (md.backToNormal(), md.service.send("END"), md.emitter.emit(GX.Finish))
                };
                let Wd = 50;
                dd.type === sX.IncrementalSnapshot && dd.data.source === uX.MouseMove && dd.data.positions.length && (Wd += Math.max(0, -dd.data.positions[0].timeOffset)), setTimeout(Od, Wd)
              }
              md.emitter.emit(GX.EventCast, dd)
            }
          })), !(null == Od ? void 0 : Od.liveMode) && dd.length < 2) throw new Error("Replayer need at least 2 events.");
        const Wd = {
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
          mouseTail: hh,
          useVirtualDom: !0,
          logger: console
        };
        this.config = Object.assign({}, Wd, Od), this.handleResize = this.handleResize.bind(this), this.getCastFn = this.getCastFn.bind(this), this.applyEventsSynchronously = this.applyEventsSynchronously.bind(this), this.emitter.on(GX.Resize, this.handleResize), this.setupDom();
        for (const Rd of this.config.plugins || []) Rd.getMirror && Rd.getMirror({
          nodeMirror: this.mirror
        });
        this.emitter.on(GX.Flush, (() => {
          if (this.usingVirtualDom) {
            const md = {
              mirror: this.mirror,
              applyCanvas: (dd, Od, md) => {
                mh({
                  event: dd,
                  mutation: Od,
                  target: md,
                  imageMap: this.imageMap,
                  canvasEventMap: this.canvasEventMap,
                  errorHandler: this.warnCanvasMutationFailed.bind(this)
                })
              },
              applyInput: this.applyInput.bind(this),
              applyScroll: this.applyScroll.bind(this),
              applyStyleSheetMutation: (dd, Od) => {
                dd.source === uX.StyleSheetRule ? this.applyStyleSheetRule(dd, Od) : dd.source === uX.StyleDeclaration && this.applyStyleDeclaration(dd, Od)
              },
              afterAppend: (dd, Od) => {
                for (const md of this.config.plugins || []) md.onBuild && md.onBuild(dd, {
                  id: Od,
                  replayer: this
                })
              }
            };
            if (this.iframe.contentDocument) try {
              YR(this.iframe.contentDocument, this.virtualDom, md, this.virtualDom.mirror)
            } catch (dd) {
              this.warn(dd)
            }
            if (this.virtualDom.destroyTree(), this.usingVirtualDom = !1, Object.keys(this.legacy_missingNodeRetryMap).length)
              for (const dd in this.legacy_missingNodeRetryMap) try {
                const Od = this.legacy_missingNodeRetryMap[dd],
                  Wd = wR(Od.node, this.mirror, this.virtualDom.mirror);
                YR(Wd, Od.node, md, this.virtualDom.mirror), Od.node = Wd
              } catch (Od) {
                this.warn(Od)
              }
            this.constructedStyleMutations.forEach((dd => {
              this.applyStyleSheetMutation(dd)
            })), this.constructedStyleMutations = [], this.adoptedStyleSheets.forEach((dd => {
              this.applyAdoptedStyleSheet(dd)
            })), this.adoptedStyleSheets = []
          }
          if (this.mousePos && (this.moveAndHover(this.mousePos.x, this.mousePos.y, this.mousePos.id, !0, this.mousePos.debugData), this.mousePos = null), !0 === this.touchActive ? this.mouse.classList.add("touch-active") : !1 === this.touchActive && this.mouse.classList.remove("touch-active"), this.touchActive = null, this.lastMouseDownEvent) {
            const [dd, Od] = this.lastMouseDownEvent;
            dd.dispatchEvent(Od)
          }
          this.lastMouseDownEvent = null, this.lastSelectionData && (this.applySelection(this.lastSelectionData), this.lastSelectionData = null)
        })), this.emitter.on(GX.PlayBack, (() => {
          this.firstFullSnapshot = null, this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset()
        }));
        const Fd = new VK([], {
          speed: this.config.speed
        });
        this.service = ZK({
          events: dd.map((dd => Od && Od.unpackFn ? Od.unpackFn(dd) : dd)).sort(((dd, Od) => dd.timestamp - Od.timestamp)),
          timer: Fd,
          timeOffset: 0,
          baselineTime: 0,
          lastPlayedEvent: null
        }, {
          getCastFn: this.getCastFn,
          applyEventsSynchronously: this.applyEventsSynchronously,
          emitter: this.emitter
        }), this.service.start(), this.service.subscribe((dd => {
          this.emitter.emit(GX.StateChange, {
            player: dd
          })
        })), this.speedService = CK(IK({
          id: "speed",
          context: {
            normalSpeed: -1,
            timer: Fd
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
            setSpeed: (dd, Od) => {
              "payload" in Od && dd.timer.setSpeed(Od.payload.speed)
            },
            recordSpeed: PK({
              normalSpeed: dd => dd.timer.speed
            }),
            restoreSpeed: dd => {
              dd.timer.setSpeed(dd.normalSpeed)
            }
          }
        })), this.speedService.start(), this.speedService.subscribe((dd => {
          this.emitter.emit(GX.StateChange, {
            speed: dd
          })
        })), this.mediaManager = new Wh({
          warn: this.warn.bind(this),
          service: this.service,
          speedService: this.speedService,
          emitter: this.emitter,
          getCurrentTime: this.getCurrentTime.bind(this)
        });
        const Xd = this.service.state.context.events.find((dd => dd.type === sX.Meta)),
          Kd = this.service.state.context.events.find((dd => dd.type === sX.FullSnapshot));
        if (Xd) {
          const {
            width: dd,
            height: Od
          } = Xd.data;
          setTimeout((() => {
            this.emitter.emit(GX.Resize, {
              width: dd,
              height: Od
            })
          }), 0)
        }
        Kd && setTimeout((() => {
          var dd;
          this.firstFullSnapshot || (this.firstFullSnapshot = Kd, this.rebuildFullSnapshot(Kd), null == (dd = this.iframe.contentWindow) || dd.scrollTo(Kd.data.initialOffset))
        }), 1), this.service.state.context.events.find(vh) && this.mouse.classList.add("touch-device")
      }
      get timer() {
        return this.service.state.context.timer
      }
      on(dd, Od) {
        return this.emitter.on(dd, Od), this
      }
      off(dd, Od) {
        return this.emitter.off(dd, Od), this
      }
      setConfig(dd) {
        Object.keys(dd).forEach((Od => {
          dd[Od], this.config[Od] = dd[Od]
        })), this.config.skipInactive || this.backToNormal(), "undefined" !== typeof dd.speed && this.speedService.send({
          type: "SET_SPEED",
          payload: {
            speed: dd.speed
          }
        }), "undefined" !== typeof dd.mouseTail && (!1 === dd.mouseTail ? this.mouseTail && (this.mouseTail.style.display = "none") : (this.mouseTail || (this.mouseTail = document.createElement("canvas"), this.mouseTail.width = Number.parseFloat(this.iframe.width), this.mouseTail.height = Number.parseFloat(this.iframe.height), this.mouseTail.classList.add("replayer-mouse-tail"), this.wrapper.insertBefore(this.mouseTail, this.iframe)), this.mouseTail.style.display = "inherit"))
      }
      getMetaData() {
        const dd = this.service.state.context.events[0],
          Od = this.service.state.context.events[this.service.state.context.events.length - 1];
        return {
          startTime: dd.timestamp,
          endTime: Od.timestamp,
          totalTime: Od.timestamp - dd.timestamp
        }
      }
      getCurrentTime() {
        return this.config.liveMode && this.timer.updateLiveTime(), this.timer.timeOffset + this.getTimeOffset()
      }
      getTimeOffset() {
        const {
          baselineTime: dd,
          events: Od
        } = this.service.state.context;
        return dd - Od[0].timestamp
      }
      getMirror() {
        return this.mirror
      }
      play() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        var Od, md;
        this.service.state.matches("paused") || this.service.send({
          type: "PAUSE"
        }), this.service.send({
          type: "PLAY",
          payload: {
            timeOffset: dd
          }
        }), null == (md = null == (Od = this.iframe.contentDocument) ? void 0 : Od.getElementsByTagName("html")[0]) || md.classList.remove("rrweb-paused"), this.emitter.emit(GX.Start)
      }
      pause(dd) {
        var Od, md;
        void 0 === dd && this.service.state.matches("playing") && this.service.send({
          type: "PAUSE"
        }), "number" === typeof dd && (this.play(dd), this.service.send({
          type: "PAUSE"
        })), null == (md = null == (Od = this.iframe.contentDocument) ? void 0 : Od.getElementsByTagName("html")[0]) || md.classList.add("rrweb-paused"), this.emitter.emit(GX.Pause)
      }
      resume() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.warn("The 'resume' was deprecated in 1.0. Please use 'play' method which has the same interface."), this.play(dd), this.emitter.emit(GX.Resume)
      }
      destroy() {
        this.pause(), this.mirror.reset(), this.styleMirror.reset(), this.mediaManager.reset(), this.config.root.removeChild(this.wrapper), this.emitter.emit(GX.Destroy)
      }
      startLive(dd) {
        this.service.send({
          type: "TO_LIVE",
          payload: {
            baselineTime: dd
          }
        })
      }
      addEvent(dd) {
        const Od = this.config.unpackFn ? this.config.unpackFn(dd) : dd;
        vh(Od) && this.mouse.classList.add("touch-device"), Promise.resolve().then((() => this.service.send({
          type: "ADD_EVENT",
          payload: {
            event: Od
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
        this.cache = dW()
      }
      setupDom() {
        this.wrapper = document.createElement("div"), this.wrapper.classList.add("replayer-wrapper"), this.config.root.appendChild(this.wrapper), this.mouse = document.createElement("div"), this.mouse.classList.add("replayer-mouse"), this.wrapper.appendChild(this.mouse), !1 !== this.config.mouseTail && (this.mouseTail = document.createElement("canvas"), this.mouseTail.classList.add("replayer-mouse-tail"), this.mouseTail.style.display = "inherit", this.wrapper.appendChild(this.mouseTail)), this.config.UNSAFE_replayCanvas ? (this.iframe = document.createElement("iframe"), this.iframe.setAttribute("sandbox", "allow-same-origin allow-scripts"), this.wrapper.appendChild(this.iframe), this.UNSAFE_replayCanvas = !0) : (this.iframe = function(dd) {
          var Od;
          if (!dd.root.isConnected) throw new Error(OW);
          const md = dd.root.ownerDocument.createElement("iframe");
          for (const [Fd, Rd] of Object.entries(dd.iframeAttributes || {})) "sandbox" !== Fd && md.setAttribute(Fd, Rd);
          md.setAttribute("sandbox", "allow-same-origin"), dd.root.appendChild(md);
          const Wd = md.contentDocument;
          if (!Wd || !md.contentWindow) throw null == (Od = md.parentNode) || Od.removeChild(md), new Error(OW);
          return mW.add(Wd), md
        }({
          root: this.wrapper
        }), this.UNSAFE_replayCanvas = !1), this.iframe.style.display = "none", this.disableInteract(), this.iframe.contentWindow && this.iframe.contentDocument && (uK(this.iframe.contentWindow, this.iframe.contentDocument), HX(this.iframe.contentWindow))
      }
      rebuildFullSnapshot(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
        Object.keys(this.legacy_missingNodeRetryMap).length && this.warn("Found unresolved missing node map", this.legacy_missingNodeRetryMap), this.legacy_missingNodeRetryMap = {};
        const md = [],
          Wd = new Set,
          Fd = (Od, Fd) => {
            if ("DIALOG" === Od.nodeName && Wd.add(Od), this.collectIframeAndAttachDocument(md, Od), this.mediaManager.isSupportedMediaElement(Od)) {
              const {
                events: md
              } = this.service.state.context;
              this.mediaManager.addMediaElements(Od, dd.timestamp - md[0].timestamp, this.mirror)
            }
            for (const dd of this.config.plugins || []) dd.onBuild && dd.onBuild(Od, {
              id: Fd,
              replayer: this
            })
          };
        this.usingVirtualDom && (this.virtualDom.destroyTree(), this.usingVirtualDom = !1), this.mirror.reset(), KW(dd.data.node, {
          doc: this.iframe.contentDocument,
          afterAppend: Fd,
          cache: this.cache,
          mirror: this.mirror,
          UNSAFE_allowUnprotectedRebuild: this.UNSAFE_replayCanvas
        }), Fd(this.iframe.contentDocument, dd.data.node.id);
        for (const {
            mutationInQueue: Kd,
            builtNode: hd
          }
          of md) this.attachDocumentToIframe(Kd, hd), this.newDocumentQueue = this.newDocumentQueue.filter((dd => dd !== Kd));
        const {
          documentElement: Rd,
          head: Xd
        } = this.iframe.contentDocument;
        this.insertStyleRules(Rd, Xd), Wd.forEach((dd => Fh(dd))), this.service.state.matches("playing") || this.iframe.contentDocument.getElementsByTagName("html")[0].classList.add("rrweb-paused"), this.emitter.emit(GX.FullsnapshotRebuilded, dd), Od || this.waitForStylesheetLoad(), this.config.UNSAFE_replayCanvas && this.preloadAllImages()
      }
      insertStyleRules(dd, Od) {
        var md;
        const Wd = (Fd = this.config.blockClass, [`.${Fd} { background: currentColor }`, "noscript { display: none !important; }"]).concat(this.config.insertStyleRules);
        var Fd;
        if (this.config.pauseAnimation && Wd.push("html.rrweb-paused *, html.rrweb-paused *:before, html.rrweb-paused *:after { animation-play-state: paused !important; }"), Wd.length)
          if (this.usingVirtualDom) {
            const md = this.virtualDom.createElement("style");
            this.virtualDom.mirror.add(md, PR(md, this.virtualDom.unserializedId)), dd.insertBefore(md, Od), md.rules.push({
              source: uX.StyleSheetRule,
              adds: Wd.map(((dd, Od) => ({
                rule: dd,
                index: Od
              })))
            })
          } else {
            const Fd = document.createElement("style");
            dd.insertBefore(Fd, Od);
            for (let dd = 0; dd < Wd.length; dd++) null == (md = Fd.sheet) || md.insertRule(Wd[dd], dd)
          }
      }
      attachDocumentToIframe(dd, Od) {
        const md = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror,
          Wd = [],
          Fd = new Set,
          Rd = (dd, Rd) => {
            "DIALOG" === dd.nodeName && Fd.add(dd), this.collectIframeAndAttachDocument(Wd, dd);
            const Xd = md.getMeta(dd);
            if ((null == Xd ? void 0 : Xd.type) === nX.Element && "HTML" === (null == Xd ? void 0 : Xd.tagName.toUpperCase())) {
              const {
                documentElement: dd,
                head: md
              } = Od.contentDocument;
              this.insertStyleRules(dd, md)
            }
            if (!this.usingVirtualDom)
              for (const Od of this.config.plugins || []) Od.onBuild && Od.onBuild(dd, {
                id: Rd,
                replayer: this
              })
          };
        XW(dd.node, {
          doc: Od.contentDocument,
          mirror: md,
          hackCss: !0,
          skipChild: !1,
          afterAppend: Rd,
          cache: this.cache
        }), Rd(Od.contentDocument, dd.node.id);
        for (const {
            mutationInQueue: Xd,
            builtNode: Kd
          }
          of Wd) this.attachDocumentToIframe(Xd, Kd), this.newDocumentQueue = this.newDocumentQueue.filter((dd => dd !== Xd));
        Fd.forEach((dd => Fh(dd)))
      }
      collectIframeAndAttachDocument(dd, Od) {
        if (TX(Od, this.mirror)) {
          const md = this.newDocumentQueue.find((dd => dd.parentId === this.mirror.getId(Od)));
          md && dd.push({
            mutationInQueue: md,
            builtNode: Od
          })
        }
      }
      waitForStylesheetLoad() {
        var dd;
        const Od = null == (dd = this.iframe.contentDocument) ? void 0 : dd.head;
        if (Od) {
          const dd = new Set;
          let md, Wd = this.service.state;
          const Fd = () => {
            Wd = this.service.state
          };
          this.emitter.on(GX.Start, Fd), this.emitter.on(GX.Pause, Fd);
          const Rd = () => {
            this.emitter.off(GX.Start, Fd), this.emitter.off(GX.Pause, Fd)
          };
          Od.querySelectorAll('link[rel="stylesheet"]').forEach((Od => {
            Od.sheet || (dd.add(Od), Od.addEventListener("load", (() => {
              dd.delete(Od), 0 === dd.size && -1 !== md && (Wd.matches("playing") && this.play(this.getCurrentTime()), this.emitter.emit(GX.LoadStylesheetEnd), md && clearTimeout(md), Rd())
            })))
          })), dd.size > 0 && (this.service.send({
            type: "PAUSE"
          }), this.emitter.emit(GX.LoadStylesheetStart), md = setTimeout((() => {
            Wd.matches("playing") && this.play(this.getCurrentTime()), md = -1, Rd()
          }), this.config.loadTimeout))
        }
      }
      async preloadAllImages() {
        const dd = [];
        for (const Od of this.service.state.context.events)
          if (Od.type === sX.IncrementalSnapshot && Od.data.source === uX.CanvasMutation) {
            dd.push(this.deserializeAndPreloadCanvasEvents(Od.data, Od));
            ("commands" in Od.data ? Od.data.commands : [Od.data]).forEach((dd => {
              this.preloadImages(dd, Od)
            }))
          } return Promise.all(dd)
      }
      preloadImages(dd, Od) {
        if ("drawImage" === dd.property && "string" === typeof dd.args[0] && !this.imageMap.has(Od)) {
          const dd = document.createElement("canvas"),
            Od = dd.getContext("2d"),
            md = null == Od ? void 0 : Od.createImageData(dd.width, dd.height);
          null == Od || Od.putImageData(md, 0, 0)
        }
      }
      async deserializeAndPreloadCanvasEvents(dd, Od) {
        if (!this.canvasEventMap.has(Od)) {
          const md = {
            isUnchanged: !0
          };
          if ("commands" in dd) {
            const Wd = await Promise.all(dd.commands.map((async dd => {
              const Od = await Promise.all(dd.args.map(MK(this.imageMap, null, md)));
              return {
                ...dd,
                args: Od
              }
            })));
            !1 === md.isUnchanged && this.canvasEventMap.set(Od, {
              ...dd,
              commands: Wd
            })
          } else {
            const Wd = await Promise.all(dd.args.map(MK(this.imageMap, null, md)));
            !1 === md.isUnchanged && this.canvasEventMap.set(Od, {
              ...dd,
              args: Wd
            })
          }
        }
      }
      applyIncremental(dd, Od) {
        var md, Wd, Fd;
        const {
          data: Rd
        } = dd;
        switch (Rd.source) {
          case uX.Mutation:
            try {
              this.applyMutation(Rd, Od)
            } catch (Xd) {
              this.warn(`Exception in mutation ${Xd.message||Xd}`, Rd)
            }
            break;
          case uX.Drag:
          case uX.TouchMove:
          case uX.MouseMove:
            if (Od) {
              const dd = Rd.positions[Rd.positions.length - 1];
              this.mousePos = {
                x: dd.x,
                y: dd.y,
                id: dd.id,
                debugData: Rd
              }
            } else Rd.positions.forEach((md => {
              const Wd = {
                doAction: () => {
                  this.moveAndHover(md.x, md.y, md.id, Od, Rd)
                },
                delay: md.timeOffset + dd.timestamp - this.service.state.context.baselineTime
              };
              this.timer.addAction(Wd)
            })), this.timer.addAction({
              doAction() {},
              delay: dd.delay - (null == (md = Rd.positions[0]) ? void 0 : md.timeOffset)
            });
            break;
          case uX.MouseInteraction: {
            if (-1 === Rd.id) break;
            const dd = new Event(Sd(VX[Rd.type])),
              md = this.mirror.QFd(Rd.id);
            if (!md) return this.debugNodeNotFound(Rd, Rd.id);
            this.emitter.emit(GX.MouseInteraction, {
              type: Rd.type,
              target: md
            });
            const {
              triggerFocus: Wd
            } = this.config;
            switch (Rd.type) {
              case VX.Blur:
                "blur" in md && md.blur();
                break;
              case VX.Focus:
                Wd && md.focus && md.focus({
                  preventScroll: !0
                });
                break;
              case VX.Click:
              case VX.TouchStart:
              case VX.TouchEnd:
              case VX.MouseDown:
              case VX.MouseUp:
                Od ? (Rd.type === VX.TouchStart ? this.touchActive = !0 : Rd.type === VX.TouchEnd && (this.touchActive = !1), Rd.type === VX.MouseDown ? this.lastMouseDownEvent = [md, dd] : Rd.type === VX.MouseUp && (this.lastMouseDownEvent = null), this.mousePos = {
                  x: Rd.x || 0,
                  y: Rd.y || 0,
                  id: Rd.id,
                  debugData: Rd
                }) : (Rd.type === VX.TouchStart && (this.tailPositions.length = 0), this.moveAndHover(Rd.x || 0, Rd.y || 0, Rd.id, Od, Rd), Rd.type === VX.Click ? (this.mouse.classList.remove("active"), this.mouse.offsetWidth, this.mouse.classList.add("active")) : Rd.type === VX.TouchStart ? (this.mouse.offsetWidth, this.mouse.classList.add("touch-active")) : Rd.type === VX.TouchEnd ? this.mouse.classList.remove("touch-active") : md.dispatchEvent(dd));
                break;
              case VX.TouchCancel:
                Od ? this.touchActive = !1 : this.mouse.classList.remove("touch-active");
                break;
              default:
                md.dispatchEvent(dd)
            }
            break
          }
          case uX.Scroll:
            if (-1 === Rd.id) break;
            if (this.usingVirtualDom) {
              const dd = this.virtualDom.mirror.QFd(Rd.id);
              if (!dd) return this.debugNodeNotFound(Rd, Rd.id);
              dd.scrollData = Rd;
              break
            }
            this.applyScroll(Rd, Od);
            break;
          case uX.ViewportResize:
            this.emitter.emit(GX.Resize, {
              width: Rd.width,
              height: Rd.height
            });
            break;
          case uX.Input:
            if (-1 === Rd.id) break;
            if (this.usingVirtualDom) {
              const dd = this.virtualDom.mirror.QFd(Rd.id);
              if (!dd) return this.debugNodeNotFound(Rd, Rd.id);
              dd.inputData = Rd;
              break
            }
            this.applyInput(Rd);
            break;
          case uX.MediaInteraction: {
            const Od = this.usingVirtualDom ? this.virtualDom.mirror.QFd(Rd.id) : this.mirror.QFd(Rd.id);
            if (!Od) return this.debugNodeNotFound(Rd, Rd.id);
            const md = Od,
              {
                events: Wd
              } = this.service.state.context;
            this.mediaManager.mediaMutation({
              target: md,
              timeOffset: dd.timestamp - Wd[0].timestamp,
              mutation: Rd
            });
            break
          }
          case uX.StyleSheetRule:
          case uX.StyleDeclaration:
            this.usingVirtualDom ? Rd.styleId ? this.constructedStyleMutations.push(Rd) : Rd.id && (null == (Wd = this.virtualDom.mirror.QFd(Rd.id)) || Wd.rules.push(Rd)) : this.applyStyleSheetMutation(Rd);
            break;
          case uX.CanvasMutation:
            if (!this.config.UNSAFE_replayCanvas) return;
            if (this.usingVirtualDom) {
              const Od = this.virtualDom.mirror.QFd(Rd.id);
              if (!Od) return this.debugNodeNotFound(Rd, Rd.id);
              Od.canvasMutations.push({
                event: dd,
                mutation: Rd
              })
            } else {
              const Od = this.mirror.QFd(Rd.id);
              if (!Od) return this.debugNodeNotFound(Rd, Rd.id);
              mh({
                event: dd,
                mutation: Rd,
                target: Od,
                imageMap: this.imageMap,
                canvasEventMap: this.canvasEventMap,
                errorHandler: this.warnCanvasMutationFailed.bind(this)
              })
            }
            break;
          case uX.Font:
            try {
              const dd = new FontFace(Rd.family, Rd.buffer ? new Uint8Array(JSON.parse(Rd.fontSource)) : Rd.fontSource, Rd.descriptors);
              null == (Fd = this.iframe.contentDocument) || Fd.fonts.add(dd)
            } catch (Xd) {
              this.warn(Xd)
            }
            break;
          case uX.Selection:
            if (Od) {
              this.lastSelectionData = Rd;
              break
            }
            this.applySelection(Rd);
            break;
          case uX.AdoptedStyleSheet:
            this.usingVirtualDom ? this.adoptedStyleSheets.push(Rd) : this.applyAdoptedStyleSheet(Rd)
        }
      }
      applyMutation(dd, Od) {
        if (this.config.useVirtualDom && !this.usingVirtualDom && Od && (this.usingVirtualDom = !0, nR(this.iframe.contentDocument, this.mirror, this.virtualDom), Object.keys(this.legacy_missingNodeRetryMap).length))
          for (const hd in this.legacy_missingNodeRetryMap) try {
            const dd = this.legacy_missingNodeRetryMap[hd],
              Od = GR(dd.node, this.virtualDom, this.mirror);
            Od && (dd.node = Od)
          } catch (Kd) {
            this.warn(Kd)
          }
        const md = this.usingVirtualDom ? this.virtualDom.mirror : this.mirror;
        dd.removes = dd.removes.filter((Od => !!md.QFd(Od.id) || (this.warnNodeNotFound(dd, Od.id), !1))), dd.removes.forEach((Od => {
          var Wd;
          const Fd = md.QFd(Od.id);
          if (!Fd) return;
          let Rd = md.QFd(Od.parentId);
          if (!Rd) return this.warnNodeNotFound(dd, Od.parentId);
          if (Od.isShadow && gX(Rd) && (Rd = Rd.shadowRoot), md.removeNodeFromMap(Fd), Rd) try {
            Rd.removeChild(Fd), this.usingVirtualDom && "#text" === Fd.nodeName && "STYLE" === Rd.nodeName && (null == (Wd = Rd.rules) ? void 0 : Wd.length) > 0 && (Rd.rules = [])
          } catch (Kd) {
            if (!(Kd instanceof DOMException)) throw Kd;
            this.warn("parent could not remove child in mutation", Rd, Fd, dd)
          }
        }));
        const Wd = {
            ...this.legacy_missingNodeRetryMap
          },
          Fd = [],
          Rd = dd => {
            var Od, Rd;
            if (!this.iframe.contentDocument) return this.warn("Looks like your replayer has been destroyed.");
            let Xd = md.QFd(dd.parentId);
            if (!Xd) return dd.node.type === nX.Document ? this.newDocumentQueue.push(dd) : Fd.push(dd);
            dd.node.isShadow && (gX(Xd) || Xd.attachShadow({
              mode: "open"
            }), Xd = Xd.shadowRoot);
            let Kd = null,
              hd = null;
            if (dd.previousId && (Kd = md.QFd(dd.previousId)), dd.nextId && (hd = md.QFd(dd.nextId)), (dd => {
                let Od = null;
                return dd.nextId && (Od = md.QFd(dd.nextId)), null !== dd.nextId && void 0 !== dd.nextId && -1 !== dd.nextId && !Od
              })(dd)) return Fd.push(dd);
            if (dd.node.rootId && !md.QFd(dd.node.rootId)) return;
            const vd = dd.node.rootId ? md.QFd(dd.node.rootId) : this.usingVirtualDom ? this.virtualDom : this.iframe.contentDocument;
            if (TX(Xd, md)) return void this.attachDocumentToIframe(dd, Xd);
            const Qd = (dd, Od) => {
                if (!this.usingVirtualDom) {
                  Fh(dd);
                  for (const md of this.config.plugins || []) md.onBuild && md.onBuild(dd, {
                    id: Od,
                    replayer: this
                  })
                }
              },
              td = XW(dd.node, {
                doc: vd,
                mirror: md,
                skipChild: !0,
                hackCss: !0,
                cache: this.cache,
                afterAppend: Qd
              });
            if (-1 === dd.previousId || -1 === dd.nextId) return void(Wd[dd.node.id] = {
              node: td,
              mutation: dd
            });
            const od = md.getMeta(Xd);
            if (od && od.type === nX.Element && dd.node.type === nX.Text) {
              const dd = Array.isArray(Xd.childNodes) ? Xd.childNodes : Array.from(Xd.childNodes);
              if ("textarea" === od.tagName)
                for (const Od of dd) Od.nodeType === Xd.TEXT_NODE && Xd.removeChild(Od);
              else if ("style" === od.tagName && 1 === dd.length)
                for (const Od of dd) Od.nodeType !== Xd.TEXT_NODE || md.hasNode(Od) || (td.textContent = Od.textContent, Xd.removeChild(Od))
            } else if ((null == od ? void 0 : od.type) === nX.Document) {
              const md = Xd;
              dd.node.type === nX.DocumentType && (null == (Od = md.childNodes[0]) ? void 0 : Od.nodeType) === Node.DOCUMENT_TYPE_NODE && md.removeChild(md.childNodes[0]), "HTML" === td.nodeName && md.documentElement && md.removeChild(md.documentElement)
            }
            if (Kd && Kd.nextSibling && Kd.nextSibling.parentNode ? Xd.insertBefore(td, Kd.nextSibling) : hd && hd.parentNode ? Xd.contains(hd) ? Xd.insertBefore(td, hd) : Xd.insertBefore(td, null) : Xd.appendChild(td), Qd(td, dd.node.id), this.usingVirtualDom && "#text" === td.nodeName && "STYLE" === Xd.nodeName && (null == (Rd = Xd.rules) ? void 0 : Rd.length) > 0 && (Xd.rules = []), TX(td, this.mirror)) {
              const dd = this.mirror.getId(td),
                Od = this.newDocumentQueue.find((Od => Od.parentId === dd));
              Od && (this.attachDocumentToIframe(Od, td), this.newDocumentQueue = this.newDocumentQueue.filter((dd => dd !== Od)))
            }(dd.previousId || dd.nextId) && this.legacy_resolveMissingNode(Wd, Xd, td, dd)
          };
        dd.adds.forEach((dd => {
          Rd(dd)
        }));
        const Xd = Date.now();
        for (; Fd.length;) {
          const dd = yX(Fd);
          if (Fd.length = 0, Date.now() - Xd > 500) {
            this.warn("Timeout in the loop, please check the resolve tree data:", dd);
            break
          }
          for (const Od of dd) {
            md.QFd(Od.value.parentId) ? bX(Od, (dd => {
              Rd(dd)
            })) : this.debug("Drop resolve tree since there is no parent for the root node.", Od)
          }
        }
        Object.keys(Wd).length && Object.assign(this.legacy_missingNodeRetryMap, Wd), EX(dd.texts).forEach((Od => {
          var Wd;
          const Fd = md.QFd(Od.id);
          if (!Fd) {
            if (dd.removes.find((dd => dd.id === Od.id))) return;
            return this.warnNodeNotFound(dd, Od.id)
          }
          const Rd = Fd.parentElement;
          if (Od.value && Rd && "STYLE" === Rd.tagName ? Fd.textContent = Mm(Od.value, this.cache) : Fd.textContent = Od.value, this.usingVirtualDom) {
            const dd = Fd.parentNode;
            (null == (Wd = null == dd ? void 0 : dd.rules) ? void 0 : Wd.length) > 0 && (dd.rules = [])
          }
        })), dd.attributes.forEach((Od => {
          var Wd;
          const Fd = md.QFd(Od.id);
          if (!Fd) {
            if (dd.removes.find((dd => dd.id === Od.id))) return;
            return this.warnNodeNotFound(dd, Od.id)
          }
          for (const dd in Od.attributes)
            if ("string" === typeof dd) {
              const Xd = Od.attributes[dd];
              if (null === Xd) Fd.removeAttribute(dd), "open" === dd && Rh(Fd, Od);
              else if ("string" === typeof Xd) try {
                if ("_cssText" === dd && ("LINK" === Fd.nodeName || "STYLE" === Fd.nodeName)) try {
                  const dd = md.getMeta(Fd),
                    Wd = XW({
                      ...dd,
                      attributes: {
                        ...dd.attributes,
                        ...Od.attributes
                      }
                    }, {
                      doc: Fd.ownerDocument,
                      mirror: md,
                      skipChild: !0,
                      hackCss: !0,
                      cache: this.cache
                    });
                  Object.assign(dd.attributes, Od.attributes);
                  const Rd = Fd.nextSibling,
                    Xd = Fd.parentNode;
                  if (Wd && Xd) {
                    Xd.removeChild(Fd), Xd.insertBefore(Wd, Rd), md.replace(Od.id, Wd);
                    break
                  }
                } catch (Rd) {}
                if ("value" === dd && "TEXTAREA" === Fd.nodeName) {
                  const dd = Fd;
                  dd.childNodes.forEach((Od => dd.removeChild(Od)));
                  const Od = null == (Wd = Fd.ownerDocument) ? void 0 : Wd.createTextNode(Xd);
                  Od && dd.appendChild(Od)
                } else Fd.setAttribute(dd, Xd);
                "rr_open_mode" === dd && "DIALOG" === Fd.nodeName && Fh(Fd, Od)
              } catch (Kd) {
                this.warn("An error occurred may due to the checkout feature.", Kd)
              } else if ("style" === dd) {
                const dd = Xd,
                  Od = Fd;
                for (const md in dd)
                  if (!1 === dd[md]) Od.style.removeProperty(md);
                  else if (dd[md] instanceof Array) {
                  const Wd = dd[md];
                  Od.style.setProperty(md, Wd[0], Wd[1])
                } else {
                  const Wd = dd[md];
                  Od.style.setProperty(md, Wd)
                }
              }
            }
        }))
      }
      applyScroll(dd, Od) {
        var md, Wd;
        const Fd = this.mirror.QFd(dd.id);
        if (!Fd) return this.debugNodeNotFound(dd, dd.id);
        const Rd = this.mirror.getMeta(Fd);
        if (Fd === this.iframe.contentDocument) null == (md = this.iframe.contentWindow) || md.scrollTo({
          top: dd.y,
          left: dd.x,
          behavior: Od ? "auto" : "smooth"
        });
        else if ((null == Rd ? void 0 : Rd.type) === nX.Document) null == (Wd = Fd.defaultView) || Wd.scrollTo({
          top: dd.y,
          left: dd.x,
          behavior: Od ? "auto" : "smooth"
        });
        else try {
          Fd.scrollTo({
            top: dd.y,
            left: dd.x,
            behavior: Od ? "auto" : "smooth"
          })
        } catch (Xd) {}
      }
      applyInput(dd) {
        const Od = this.mirror.QFd(dd.id);
        if (!Od) return this.debugNodeNotFound(dd, dd.id);
        try {
          Od.checked = dd.isChecked, Od.value = dd.text
        } catch (md) {}
      }
      applySelection(dd) {
        try {
          const Od = new Set,
            md = dd.By.map((dd => {
              let {
                start: md,
                startOffset: Wd,
                end: Fd,
                endOffset: Rd
              } = dd;
              const Xd = this.mirror.QFd(md),
                Kd = this.mirror.QFd(Fd);
              if (!Xd || !Kd) return;
              const hd = new Range;
              hd.setStart(Xd, Wd), hd.setEnd(Kd, Rd);
              const vd = Xd.ownerDocument,
                Qd = null == vd ? void 0 : vd.getSelection();
              return Qd && Od.add(Qd), {
                range: hd,
                selection: Qd
              }
            }));
          Od.forEach((dd => dd.removeAllRanges())), md.forEach((dd => {
            var Od;
            return dd && (null == (Od = dd.selection) ? void 0 : Od.addRange(dd.range))
          }))
        } catch (Od) {}
      }
      applyStyleSheetMutation(dd) {
        var Od;
        let md = null;
        dd.styleId ? md = this.styleMirror.getStyle(dd.styleId) : dd.id && (md = (null == (Od = this.mirror.QFd(dd.id)) ? void 0 : Od.sheet) || null), md && (dd.source === uX.StyleSheetRule ? this.applyStyleSheetRule(dd, md) : dd.source === uX.StyleDeclaration && this.applyStyleDeclaration(dd, md))
      }
      applyStyleSheetRule(dd, Od) {
        var md, Wd, Fd, Rd;
        if (null == (md = dd.adds) || md.forEach((dd => {
            let {
              rule: md,
              index: Wd
            } = dd;
            try {
              if (Array.isArray(Wd)) {
                const {
                  positions: dd,
                  index: Fd
                } = aX(Wd), Rd = wX(Od.cssRules, dd);
                null == Rd || Rd.insertRule(md, Fd)
              } else {
                const dd = void 0 === Wd ? void 0 : Math.min(Wd, Od.cssRules.length);
                null == Od || Od.insertRule(md, dd)
              }
            } catch (Fd) {}
          })), null == (Wd = dd.removes) || Wd.forEach((dd => {
            let {
              index: md
            } = dd;
            try {
              if (Array.isArray(md)) {
                const {
                  positions: dd,
                  index: Wd
                } = aX(md), Fd = wX(Od.cssRules, dd);
                null == Fd || Fd.deleteRule(Wd || 0)
              } else null == Od || Od.deleteRule(md)
            } catch (Wd) {}
          })), "string" === typeof dd.replace) try {
          null == (Fd = Od.replace) || Fd.call(Od, dd.replace)
        } catch (Xd) {}
        if ("string" === typeof dd.replaceSync) try {
          null == (Rd = Od.replaceSync) || Rd.call(Od, dd.replaceSync)
        } catch (Xd) {}
      }
      applyStyleDeclaration(dd, Od) {
        if (dd.set) {
          const md = wX(Od.rules, dd.index);
          (null == md ? void 0 : md.style) && md.style.setProperty(dd.set.property, dd.set.value, dd.set.priority)
        }
        if (dd.remove) {
          const md = wX(Od.rules, dd.index);
          (null == md ? void 0 : md.style) && md.style.removeProperty(dd.remove.property)
        }
      }
      applyAdoptedStyleSheet(dd) {
        var Od;
        const md = this.mirror.QFd(dd.id);
        if (!md) return;
        null == (Od = dd.styles) || Od.forEach((dd => {
          var Od;
          let Wd = null,
            Fd = null;
          if (gX(md) ? Fd = (null == (Od = md.ownerDocument) ? void 0 : Od.defaultView) || null : "#document" === md.nodeName && (Fd = md.defaultView), Fd) try {
            Wd = new Fd.CSSStyleSheet, this.styleMirror.add(Wd, dd.styleId), this.applyStyleSheetRule({
              source: uX.StyleSheetRule,
              adds: dd.rules
            }, Wd)
          } catch (Rd) {}
        }));
        let Wd = 0;
        const Fd = (dd, Od) => {
          const md = Od.map((dd => this.styleMirror.getStyle(dd))).filter((dd => null !== dd));
          gX(dd) ? dd.shadowRoot.adoptedStyleSheets = md : "#document" === dd.nodeName && (dd.adoptedStyleSheets = md), md.length !== Od.length && Wd < 10 && (setTimeout((() => Fd(dd, Od)), 0 + 100 * Wd), Wd++)
        };
        Fd(md, dd.styleIds)
      }
      legacy_resolveMissingNode(dd, Od, md, Wd) {
        const {
          previousId: Fd,
          nextId: Rd
        } = Wd, Xd = Fd && dd[Fd], Kd = Rd && dd[Rd];
        if (Xd) {
          const {
            node: Wd,
            mutation: Fd
          } = Xd;
          Od.insertBefore(Wd, md), delete dd[Fd.node.id], delete this.legacy_missingNodeRetryMap[Fd.node.id], (Fd.previousId || Fd.nextId) && this.legacy_resolveMissingNode(dd, Od, Wd, Fd)
        }
        if (Kd) {
          const {
            node: Wd,
            mutation: Fd
          } = Kd;
          Od.insertBefore(Wd, md.nextSibling), delete dd[Fd.node.id], delete this.legacy_missingNodeRetryMap[Fd.node.id], (Fd.previousId || Fd.nextId) && this.legacy_resolveMissingNode(dd, Od, Wd, Fd)
        }
      }
      moveAndHover(dd, Od, md, Wd, Fd) {
        const Rd = this.mirror.QFd(md);
        if (!Rd) return this.debugNodeNotFound(Fd, md);
        const Xd = YX(Rd, this.iframe),
          Kd = dd * Xd.absoluteScale + Xd.x,
          hd = Od * Xd.absoluteScale + Xd.y;
        this.mouse.style.left = `${Kd}px`, this.mouse.style.top = `${hd}px`, Wd || this.drawMouseTail({
          x: Kd,
          y: hd
        }), this.hoverElements(Rd)
      }
      drawMouseTail(dd) {
        if (!this.mouseTail) return;
        const {
          lineCap: Od,
          lineWidth: md,
          strokeStyle: Wd,
          duration: Fd
        } = !0 === this.config.mouseTail ? hh : Object.assign({}, hh, this.config.mouseTail), Rd = () => {
          if (!this.mouseTail) return;
          const dd = this.mouseTail.getContext("2d");
          dd && this.tailPositions.length && (dd.clearRect(0, 0, this.mouseTail.width, this.mouseTail.height), dd.beginPath(), dd.lineWidth = md, dd.lineCap = Od, dd.strokeStyle = Wd, dd.moveTo(this.tailPositions[0].x, this.tailPositions[0].y), this.tailPositions.forEach((Od => dd.lineTo(Od.x, Od.y))), dd.stroke())
        };
        this.tailPositions.push(dd), Rd(), setTimeout((() => {
          this.tailPositions = this.tailPositions.filter((Od => Od !== dd)), Rd()
        }), Fd / this.speedService.state.context.timer.speed)
      }
      hoverElements(dd) {
        var Od;
        null == (Od = this.lastHoveredRootNode || this.iframe.contentDocument) || Od.querySelectorAll(".\\:hover").forEach((dd => {
          dd.classList.remove(":hover")
        })), this.lastHoveredRootNode = dd.getRootNode();
        let md = dd;
        for (; md;) md.classList && md.classList.add(":hover"), md = md.parentElement
      }
      isUserInteraction(dd) {
        return dd.type === sX.IncrementalSnapshot && (dd.data.source > uX.Mutation && dd.data.source <= uX.Input)
      }
      backToNormal() {
        this.nextUserInteractionEvent = null, this.speedService.state.matches("normal") || (this.speedService.send({
          type: "BACK_TO_NORMAL"
        }), this.emitter.emit(GX.SkipEnd, {
          speed: this.speedService.state.context.normalSpeed
        }))
      }
      warnNodeNotFound(dd, Od) {
        this.warn(`Node with id '${Od}' not found. `, dd)
      }
      warnCanvasMutationFailed(dd, Od) {
        this.warn("Has error on canvas update", Od, "canvas mutation:", dd)
      }
      debugNodeNotFound(dd, Od) {
        this.debug(`Node with id '${Od}' not found. `, dd)
      }
      warn() {
        if (this.config.showWarning) {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.config.logger.warn(Kh, ...Od)
        }
      }
      debug() {
        if (this.config.showDebug) {
          for (var dd = arguments.length, Od = new Array(dd), md = 0; md < dd; md++) Od[md] = arguments[md];
          this.config.logger.log(Kh, ...Od)
        }
      }
    }
    const {
      addCustomEvent: th
    } = sK, {
      freezePage: oh
    } = sK, {
      takeFullSnapshot: Nh
    } = sK
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);