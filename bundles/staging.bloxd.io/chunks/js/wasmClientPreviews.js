export const id = 56;
export const ids = [56];
export const modules = {
  38277: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      b: () => tk,
      e: () => ak
    });
    const Rk = new WeakMap;

    function tk(kk, Fk) {
      return Rk.set(kk, Fk), kk
    }

    function ak(kk) {
      var Fk;
      return null !== (Fk = Rk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  38303: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => bk
    });
    var Rk = Bk(1173);

    function tk(kk) {
      const Fk = /(\d*\.?\d+)px/.exec(kk);
      return Fk ? Number(Fk[1]) : null
    }

    function ak(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let Xk = !1;
    const bk = {
      debug: !1,
      align: "center",
      vAlign: "middle",
      fontSize: 14,
      fontWeight: "",
      fontStyle: "",
      fontVariant: "",
      font: "Arial",
      lineHeight: null,
      justify: !1,
      drawText: function(kk, Fk, Rk, bk, wk, dk) {
        if (wk <= 0 || dk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: sk,
          fontVariant: Vk,
          fontWeight: Jk,
          fontSize: Ak,
          font: ek
        } = this, yk = [sk, Vk, Jk, `${Ak}px`, ek].filter(Boolean).join(" "), fk = [
          [Jk, `${Ak}px`, ak(ek)].filter(Boolean).join(" "), `${Ak}px sans-serif`
        ], mk = kk.font, Wk = function(kk, Fk, Bk) {
          for (const Rk of Fk) {
            kk.font = Rk;
            const Fk = tk(kk.font),
              Xk = ak(Rk);
            if (null !== Fk && Math.abs(Fk - Bk) <= .5 && kk.font.toLowerCase().includes(Xk.toLowerCase())) return Rk
          }
          return null
        }(kk, [yk, ...fk], Ak);
        Wk !== yk && function(kk, Fk, Rk) {
          Xk || (Xk = !0, Promise.resolve().then((() => Bk(1047))).then((Bk => {
            let {
              ly: tk
            } = Bk;
            tk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              lA: Fk,
              drawnWith: null !== Rk && void 0 !== Rk ? Rk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(yk, mk, Wk);
        const vk = tk(kk.font);
        if (null === Wk && null !== vk && vk > 0) {
          const Bk = Ak / vk;
          kk.save();
          try {
            return kk.scale(Bk, Bk), {
              height: this.drawLines(kk, Fk, Rk / Bk, bk / Bk, wk / Bk, dk / Bk, vk).height * Bk
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, Fk, Rk, bk, wk, dk, Ak)
      },
      drawLines: function(kk, Fk, Bk, tk, ak, Xk, bk) {
        const wk = Bk + ak,
          dk = tk + Xk;
        let sk, Vk = tk + Xk / 2 + bk / 2;
        "right" === this.align ? (sk = wk, kk.textAlign = "right") : "left" === this.align ? (sk = Bk, kk.textAlign = "left") : (sk = Bk + ak / 2, kk.textAlign = "center");
        for (const Rk of Fk) {
          kk.measureText(Rk).width >= ak && (Fk = Fk.replace(Rk, ""))
        }
        Fk = (0, Rk.V)(Fk);
        const Jk = [],
          Ak = Fk.split("\n"),
          ek = this.justify ? kk.measureText("\u200a").width : 0;
        Ak.forEach((Fk => {
          let Bk = kk.measureText(Fk).width;
          if (Bk <= ak) Jk.push(Fk);
          else {
            let Rk = Fk;
            const tk = ak;
            let Xk, bk, wk;
            for (Bk = kk.measureText(Rk).width; Bk > tk;) {
              for (Xk = 0, bk = 0, wk = ""; bk < tk;) Xk++, wk = Rk.substr(0, Xk), bk = kk.measureText(wk).width;
              Xk--, wk = wk.substr(0, Xk);
              const Fk = Xk;
              if (" " !== Rk.substr(Xk, 1)) {
                for (;
                  " " !== Rk.substr(Xk, 1) && 0 !== Xk;) Xk--;
                0 === Xk && (Xk = Fk), wk = Rk.substr(0, Xk)
              }
              wk = this.justify ? this.justifyLine(kk, wk, ek, "\u200a", ak) : wk, Rk = Rk.substr(Xk), Bk = kk.measureText(Rk).width, Jk.push(wk)
            }
            Bk > 0 && Jk.push(Rk)
          }
        }));
        const yk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, Fk),
          fk = yk * (Jk.length - 1),
          mk = fk / 2;
        let Wk = tk;
        "top" === this.vAlign ? Vk = tk + bk : "bottom" === this.vAlign ? (Vk = dk - fk, Wk = dk) : (Wk = tk + Xk / 2, Vk -= mk), Jk.forEach((Fk => {
          Fk = Fk.trim(), kk.fillText(Fk, sk, Vk), Vk += yk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(Bk, tk, ak, Xk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(sk, tk), kk.lineTo(sk, dk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(Bk, Wk), kk.lineTo(wk, Wk), kk.stroke());
        return {
          height: fk + yk
        }
      },
      getTextHeight: function(kk, Fk) {
        const Bk = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Rk
        } = kk.measureText(Fk);
        return kk.textBaseline = Bk, Rk
      },
      justifyLine: function(kk, Fk, Bk, Rk, tk) {
        const ak = Fk.trim(),
          Xk = kk.measureText(ak).width,
          bk = ak.split(/\s+/).length - 1,
          wk = Math.floor((tk - Xk) / Bk);
        if (bk <= 0 || wk <= 0) return ak;
        const dk = Math.floor(wk / bk);
        let sk = wk - bk * dk,
          Vk = [];
        for (let Jk = 0; Jk < dk; Jk++) Vk.push(Rk);
        Vk = Vk.join("");
        return ak.replace(/\s+/g, (kk => {
          const Fk = sk > 0 ? Vk + Rk : Vk;
          return sk--, kk + Fk
        }))
      }
    }
  },
  38310: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      d: () => yk,
      e: () => ek,
      f: () => Jk,
      g: () => sk,
      j: () => Vk
    });
    var Rk = Bk(4002),
      tk = Bk(291);
    const ak = 1024,
      Xk = 1536,
      bk = 2 * Rk.k + 1,
      wk = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      dk = 1.5;

    function sk(kk, Fk, Bk) {
      if ("string" !== typeof kk) return Fk;
      try {
        const Bk = JSON.parse(kk);
        return Bk && "object" === typeof Bk ? Bk : Fk
      } catch (Rk) {
        return void 0 !== Bk && console.error(`Couldn't parse ${Bk}`, Rk), Fk
      }
    }

    function Vk(kk) {
      return sk(kk, null, "a leaderboard's rows")
    }

    function Jk(kk, Fk) {
      var Bk, Rk;
      return null !== Fk && void 0 !== Fk ? Fk : {
        status: null !== (Bk = kk.status) && void 0 !== Bk ? Bk : "loading",
        entries: null !== (Rk = kk.entries) && void 0 !== Rk ? Rk : []
      }
    }

    function Ak(kk, Fk) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : Fk
    }

    function ek(kk, Fk) {
      const Bk = Ak(kk.size, 1);
      let Rk = Ak(kk.width, Ak(2.5 * Bk, 2.5)),
        tk = Ak(kk.height, Ak(3.75 * Bk, 3.75));
      Number.isFinite(ak * tk / Rk) && Number.isFinite(Xk * Rk / tk) || (Rk = 2.5, tk = 3.75);
      const bk = tk / Rk,
        wk = Math.max(1, Math.min(ak, Fk / bk));
      return {
        width: Rk,
        height: tk,
        layoutWidth: Math.max(ak, Xk / bk),
        layoutHeight: Math.max(Xk, ak * bk),
        pixelWidth: Math.round(wk),
        pixelHeight: Math.round(Math.max(1, Math.min(Fk, wk * bk)))
      }
    }

    function yk(kk, Fk, Bk, Xk, sk, Vk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = tk.N.defaultNameTagBackground, kk.fillRect(0, 0, Fk, Bk), kk.scale(Fk / Xk.layoutWidth, Bk / Xk.layoutHeight), kk.translate((Xk.layoutWidth - ak) / 2, 0),
        function(kk, Fk, Bk, ak) {
          var Xk, sk, Vk, Jk;
          const {
            top: Ak,
            around: ek,
            showPlayerText: yk,
            localPlayerDbId: Wk
          } = Bk, {
            whiteUiText: vk,
            grayUiText: ik,
            yellowUiText: Yk
          } = tk.N;
          kk.textBaseline = "middle";
          const Lk = function(Fk, Bk, Rk, tk, ak, Xk) {
              let bk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${tk}px 'Jetbrains Mono', monospace`, kk.fillStyle = ak, kk.textAlign = bk;
              let wk = Fk.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(wk).width > Xk) {
                for (; wk.length > 0 && kk.measureText(`${wk}\u2026`).width > Xk;) wk = wk.slice(0, -1);
                wk += "\u2026"
              }
              kk.fillText(wk, Bk, Rk)
            },
            Ok = Fk => {
              kk.fillStyle = vk, kk.globalAlpha = .15, kk.fillRect(24, Fk, 976, 2), kk.globalAlpha = 1
            },
            Ek = null === Wk ? null : (0, tk.qc)(Wk),
            Sk = kk => null !== Ek && kk.playerHash === Ek,
            Nk = fk(Ak.entries, Rk.n),
            Hk = "ready" === Ak.status && Nk.length > 0,
            uk = null === ek ? [] : fk(ek.entries, bk),
            Mk = Nk.some(Sk),
            gk = null === ek ? null : function(kk) {
              const Fk = kk;
              if (!Fk || !Number.isFinite(Fk.rank) || !Number.isFinite(Fk.tied) || !Number.isFinite(Fk.total)) return null;
              return Fk
            }(ek.standing),
            Uk = uk.find(Sk),
            ck = Nk.find(Sk),
            Gk = null === gk || void 0 === Uk ? null : {
              value: Uk.value,
              rank: gk.rank
            },
            Tk = mk(Nk, void 0 === ck || ck.value === (null === Gk || void 0 === Gk ? void 0 : Gk.value) ? Gk : null),
            rk = mk(uk, Gk),
            Dk = (kk, Fk) => {
              const Bk = kk.findIndex(Sk);
              return Bk >= 0 ? Fk[Bk] : null
            },
            zk = null !== (Xk = null !== (sk = null === gk || void 0 === gk ? void 0 : gk.rank) && void 0 !== sk ? sk : Dk(uk, rk)) && void 0 !== Xk ? Xk : Dk(Nk, Tk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const Pk = [...Hk ? Tk : [], ...Mk ? [] : rk],
            hk = Math.min(280, Math.max(0, ...Pk.map((Fk => kk.measureText(wk.format(Fk)).width)))),
            qk = hk <= 80,
            Ck = qk ? 80 : 32 + hk,
            Zk = qk ? 148 : Ck + 28,
            pk = 660 - Zk;
          Lk(`TOP ${Rk.n}  /  ALL TIME`, 24, 52, 28, ik, 976), Lk(yk ? String(null !== (Vk = Fk.title) && void 0 !== Vk ? Vk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, vk, 976), Lk("RANK", 32, 174, 28, ik, Zk - 40), Lk("PLAYER", Zk, 174, 28, ik, pk), Lk(yk ? String(null !== (Jk = Fk.scoreLabel) && void 0 !== Jk ? Jk : "Score").slice(0, 24) : "Score", 992, 174, 28, ik, 304, "right"), Ok(202);
          const Kk = (ak - 232) / (Rk.n + dk + bk),
            xk = 208 + Rk.n * Kk,
            jk = xk + dk * Kk,
            lk = (Fk, Bk, Rk, tk) => {
              const ak = Sk(Fk);
              kk.fillStyle = ak ? Yk : vk, kk.globalAlpha = ak ? .15 : tk ? .035 : 0, kk.fillRect(24, Rk - Kk / 2 + 1, 976, Kk - 2), kk.globalAlpha = 1;
              const Xk = ak ? Yk : vk;
              Lk(wk.format(Bk), Ck, Rk, 34, Xk, qk ? 80 : hk, qk ? "center" : "right"), Lk(yk ? String(Fk.name).slice(0, 64) : "Player", Zk, Rk, 34, Xk, pk);
              const bk = wk.format(Fk.value);
              Lk(kk.measureText(bk).width > 304 ? Fk.value.toExponential(6) : bk, 992, Rk, 34, Xk, 304, "right")
            };
          if (Hk)
            for (const [Rk, tk] of Nk.entries()) lk(tk, Tk[Rk], 208 + (Rk + .5) * Kk, Rk % 2 === 0);
          else {
            const kk = "error" === Ak.status,
              Fk = kk ? "Couldn't load leaderboard" : "ready" === Ak.status ? "No scores yet" : "Loading leaderboard\u2026",
              Bk = kk ? "Trying again shortly" : "ready" === Ak.status ? "Be the first on the board!" : "Fetching the top players",
              Rk = (208 + xk) / 2;
            Lk(Fk, 512, Rk - 28, 40, kk ? tk.N.redUiText : vk, 960, "center"), Lk(Bk, 512, Rk + 27, 30, ik, 960, "center")
          }
          const nk = xk + dk * Kk / 2;
          if (null === zk) Ok(nk);
          else {
            const Fk = null === gk ? 0 : gk.tied - 1,
              Bk = `YOUR RANK #${wk.format(zk)}${null===gk?"":` of ${wk.format(gk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Rk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(Bk).width)));
            Lk(Bk, 512, nk - (Fk > 0 ? 15 : 0), Rk, Yk, 960, "center"), Fk > 0 && Lk(`Tied with ${wk.format(Fk)} other${1===Fk?"":"s"}`, 512, nk + 24, 24, ik, 960, "center")
          }
          if (null === ek) return;
          const Ik = jk + bk * Kk / 2;
          if (Mk) Lk(`You're in the top ${Rk.n}!`, 512, Ik, 40, Yk, 960, "center");
          else if (0 === uk.length) Lk("You're not on this board yet", 512, Ik, 34, ik, 960, "center");
          else
            for (const [Rk, tk] of uk.entries()) lk(tk, rk[Rk], jk + (Rk + .5) * Kk, Rk % 2 === 0)
        }(kk, sk, Vk, Xk.layoutHeight)
    }

    function fk(kk, Fk) {
      return Array.isArray(kk) ? kk.slice(0, Fk).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function mk(kk, Fk) {
      const Bk = [];
      let Rk = !1;
      return kk.forEach(((tk, ak) => {
        if (null !== Fk && tk.value === Fk.value) return void Bk.push(Fk.rank);
        const Xk = ak > 0 && tk.value === kk[ak - 1].value;
        Xk || (Rk = 0 === ak && 1 !== tk.rank), Bk.push(Xk && !Rk ? Bk[ak - 1] : tk.rank)
      })), Bk
    }
  },
  38516: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => tk,
      e: () => ak
    });
    const Rk = 32;

    function tk(kk) {
      return Array.from(kk).length
    }

    function ak(kk) {
      const Fk = [""];
      let Bk = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        tk = "";
      const ak = () => {
        Fk.push(""), Bk = 0, tk = ""
      };
      for (const Xk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Xk)) ak();
        else if (/^\s+$/.test(Xk)) tk += Xk;
      else if (Xk.length > 0) {
        const kk = Array.from(Xk);
        Bk > 0 && Bk + tk.length + kk.length > Rk && ak(), Fk[Fk.length - 1] += tk, Bk += tk.length, tk = "";
        for (const tk of kk) Bk >= Rk && ak(), Fk[Fk.length - 1] += tk, Bk++
      }
      return Fk[Fk.length - 1] += tk, Fk
    }
  },
  42735: (kk, Fk, Bk) => {
    Bk.r(Fk), Bk.d(Fk, {
      WasmPreviewHost: () => LF,
      pageBuiltInAnimationPack: () => Jk,
      pagePreviews: () => BF,
      previewModule: () => xk
    });
    var Rk = Bk(3506),
      tk = Bk(608);
    const ak = "[bloxd-wasm-client]";

    function Xk(kk) {
      const Fk = {
        wasm: "unknown",
        client: String(tk.e)
      };
      try {
        var Bk;
        Fk.wasm = null !== (Bk = null === kk || void 0 === kk ? void 0 : kk.CV()) && void 0 !== Bk ? Bk : Fk.wasm
      } catch {}
      return Fk
    }
    async function bk(kk) {
      if (kk.length < 2 || 31 !== kk[0] || 139 !== kk[1]) return kk;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Fk
        } = await Bk.e(218).then((() => Bk(36639)));
        return Fk(kk)
      }
      const Fk = new Blob([kk]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Fk).arrayBuffer())
    }

    function wk(kk, Fk, Rk, tk) {
      Promise.resolve().then((() => Bk(40355))).then((Bk => {
        let {
          reportDataLoadFailure: ak
        } = Bk;
        ak(kk, Fk, Rk, tk)
      }), (Fk => {
        console.warn(`${ak} ${kk} didn't load, and the report couldn't be sent`, Rk.error, Fk)
      }))
    }
    const dk = [3e4, 12e4, 3e5];
    class sk {
      constructor(kk) {
        this.deps = kk, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((kk => {
          this.resolveSet = kk
        }))
      }
      provide(kk) {
        return this.loading ??= this.load(kk), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(kk) {
        const Fk = Xk(kk),
          Bk = await async function(kk, Fk) {
            let Bk;
            try {
              Bk = await kk()
            } catch (Rk) {
              return {
                stage: "fetch",
                error: Rk
              }
            }
            try {
              return Fk(Bk) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Rk) {
              return {
                stage: "decode",
                error: Rk
              }
            }
          }((() => this.deps.fetch()), (Fk => {
            const Bk = kk.jtk(Fk);
            return Bk && this.resolveSet(Fk), Bk
          }));
        if (null !== Bk) {
          if ("fetch" === Bk.stage) {
            this.loading = null;
            const Fk = dk[this.retries++];
            void 0 !== Fk && this.deps.later((() => {
              this.provide(kk)
            }), Fk)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Bk, Fk))
        }
      }
    }
    let Vk = null;

    function Jk() {
      return Vk ??= new sk({
        fetch: async () => bk(await (0, Rk.N)(Ak(), {
          priority: "low"
        })),
        onFailed: (kk, Fk) => {
          wk("builtInAnimations", Ak(), kk, Fk)
        },
        later: (kk, Fk) => {
          setTimeout(kk, Fk)
        }
      }), Vk
    }

    function Ak() {
      return Bk(42741)
    }
    var ek = Bk(3502),
      yk = Bk(36046),
      fk = Bk(40171),
      mk = Bk(1154),
      Wk = Bk(276),
      vk = Bk(40189),
      ik = Bk(40435),
      Yk = (Bk(40207), Bk(40379)),
      Lk = Bk(40387),
      Ok = Bk(40393),
      Ek = Bk(40200),
      Sk = Bk(40448),
      Nk = Bk(40452),
      Hk = Bk(40231),
      uk = Bk(40311),
      Mk = Bk(40319),
      gk = Bk(40440),
      Uk = Bk(42001),
      ck = Bk(36019),
      Gk = Bk(3495);
    const Tk = "[bloxd-previews]",
      rk = 4e5,
      Dk = 0,
      zk = 1,
      Pk = 2,
      hk = 1,
      qk = 2,
      Ck = 3,
      Zk = 0,
      pk = 1,
      Kk = 2;

    function xk(kk) {
      const Fk = kk,
        Bk = (0, vk.C)(kk),
        Rk = (0, vk.i)(kk);
      return null !== Bk && null !== Rk && "function" === typeof Fk.ptk && "function" === typeof Fk.Ktk && "function" === typeof Fk.xtk ? Fk : null
    }

    function jk(kk, Fk, Bk) {
      let [Rk, tk] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [kk, Fk], ak = Math.min(Number.isFinite(Bk) && Bk > 0 ? Bk : 1, 2);
      const Xk = Math.max(0, Rk, kk) * Math.max(0, tk, Fk) * ak * ak;
      return Xk > rk && (ak *= Math.sqrt(rk / Xk)), [Math.max(1, Math.floor(Math.max(0, kk) * ak)), Math.max(1, Math.floor(Math.max(0, Fk) * ak))]
    }

    function lk() {
      return Bk(42745)
    }
    async function nk(kk, Fk) {
      "lost" === kk && (0, Hk.C)();
      const Rk = await (0, Hk.P)();
      if (null === Rk || (0, vk.k)(Rk) || (0, Hk.e)()) return;
      const tk = "webgpu" === Rk.backend;
      if (!tk && "lost" !== kk) return;
      const ak = tk ? (0, vk.L)(kk) : null;
      if (null !== ak) {
        const Bk = `WebGPU failed at home (${kk}${void 0===Fk?"":`: ${Fk instanceof Error?Fk.message:(0,ck.j)(Fk)}`}) and ${ak}`;
        return console.warn(`${Tk} ${Bk}: the previews stop`, null !== Fk && void 0 !== Fk ? Fk : ""), void(0, Hk.v)(Bk)
      }(0, Hk.u)();
      try {
        await async function(kk, Fk, Rk) {
          var tk;
          let {
            backend: ak,
            adapter: bk
          } = kk;
          const wk = (0, ek.N)(),
            {
              flushCrashReports: dk,
              reportRenderReload: sk
            } = await Promise.resolve().then((() => Bk(40355)));
          sk(ak, "start_failed" === Fk ? 0 : 1, Xk(wk ? (0, ek.y)() : null), {
            cause: Fk,
            error: "lost" === Fk && null !== (tk = (0, vk.N)(wk ? (0, vk.C)((0, ek.y)()) : null)) && void 0 !== tk ? tk : Rk,
            context: {
              adapter: bk,
              boundAtMs: "start_failed" === Fk ? null : (0, Hk.M)(),
              indirectHangs: (0, Hk.G)()
            }
          }), await dk(uk.e)
        }(Rk, kk, Fk)
      } catch (bk) {
        console.warn(`${Tk} ${Rk.backend} failed at home (${kk}), and its report couldn't be sent`, bk)
      }(0, uk.k)()
    }
    async function Ik() {
      if (!(0, ek.N)()) {
        const kk = await (0, Hk.P)();
        if (null === kk || (0, vk.k)(kk)) return null;
        if (await (0, yk.f)(await kk.load(), fk.f), !(0, ek.N)()) return null
      }
      return xk((0, ek.y)())
    }
    class Qk {
      constructor(kk, Fk, Bk, Rk, tk, ak) {
        this.page = kk, this.host = Fk, this.id = Bk, this.canvas = Rk, this.size = tk, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Xk = {
            ...ak.images,
            glbUrl: kk => {
              var Fk;
              return null !== (Fk = this.models.drawnUrl(kk)) && void 0 !== Fk ? Fk : ak.images.glbUrl(kk)
            }
          },
          bk = Fk => kk.modelFile(Fk);
        this.images = new ik.g(Xk, (kk => {
          console.warn(`${Tk} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
        }), {
          fetchFile: bk,
          fetchImage: Fk => kk.imageFile(Fk)
        }), kk.startModels(), this.models = new Yk.i(ak.files, ((Fk, Bk) => kk.buildModel(Fk, Bk)), (kk => {
          console.warn(`${Tk} model file ${kk.file} (${kk.url}) failed`, kk.error)
        }), {
          fetchFile: bk,
          onWritten: (kk, Fk) => {
            this.images.glbWritten(kk, Fk)
          },
          onTaken: (kk, Fk) => {
            this.images.glbTaken(kk, Fk)
          }
        }), this.write = (kk, Fk, Bk) => {
          if (this.closed) return !0;
          if (kk === Yk.b) {
            const kk = new DataView(Bk.buffer, Bk.byteOffset, Ok.c),
              Rk = kk.getUint32(0, !0),
              tk = kk.getUint32(Ok.f, !0),
              ak = this.page.hostCall(Kk, (() => this.host.bXk(this.id, Rk, Fk, Bk.subarray(Ok.c))));
            return this.outcomes.push([tk, ak]), !0
          }
          return kk === ik.d && (this.page.hostCall(void 0, (() => {
            this.host.dXk(this.id, Bk)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(kk, Fk, Bk) {
        if (this.closed) return;
        const [Rk, tk] = jk(kk, Fk, this.page.dpr(), Bk);
        Rk === this.size[0] && tk === this.size[1] || (this.size = [Rk, tk], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Rk, tk)
        })))
      }
      setMob(kk, Fk, Bk, Rk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.eXk(this.id, kk, Fk, Bk, Rk))))
      }
      setPet(kk, Fk, Bk, Rk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fXk(this.id, kk, Fk, Bk, Rk))))
      }
      setPlayer(kk, Fk, Bk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.VXk(this.id, kk, Fk, Bk))))
      }
      setFigure(kk, Fk, Bk, Rk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.JXk(this.id, kk, Fk, Bk, Rk))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const kk = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === kk || kk.length < 3 ? null : {
          alpha: kk[0],
          beta: kk[1],
          radius: kk[2]
        }
      }
      setOrbit(kk) {
        let {
          alpha: Fk,
          beta: Bk,
          radius: Rk
        } = kk;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.yXk(this.id, Fk, Bk, Rk)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((kk => {
          this.settled.push(kk)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Sk.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [kk, Fk] of this.outcomes) {
          const Bk = Fk === Zk ? [] : [Fk === pk ? kk : (kk | Yk.f) >>> 0];
          this.models.taken(kk, Bk)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(kk) {
        let Fk = !1;
        if (kk) {
          const kk = this.host.vXk(this.id);
          for (const Fk of kk) this.models.request(Fk);
          const Bk = this.host.WXk(this.id);
          Bk.length > 0 && this.images.onEvent(Bk), Fk = kk.length > 0 || Bk.length > 0
        }
        const Bk = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Rk = Fk || Bk > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Rk ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(kk) {
        this.page.hostCall(void 0, (() => {
          const Fk = this.host.close(this.id);
          Fk.length > 0 && this.images.onEvent(Fk), this.page.isTrapped || kk.xtk(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const kk = this.settled;
        this.settled = [];
        for (const Fk of kk) Fk()
      }
    }
    class kF {
      constructor(kk) {
        this.deps = kk, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: kk => {
            this.modelsFailed(kk)
          },
          onDecoderFailed: kk => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Tk} the Draco decoder didn't load: models waiting on it won't draw`, kk))
          },
          onWorkerLost: kk => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Tk} a model worker was lost: ${kk}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.ie = {
          setShaderPack: (kk, Fk, Bk, Rk, tk) => (this.shaderPackArgs = [kk, Fk, Bk, Rk, tk], this.handOverShaderPack(), !0)
        }, this.frame = kk => {
          this.frameId = null;
          const Fk = this.host;
          if (null !== Fk && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Fk, kk)
          } catch (Bk) {
            if (!this.stopIfTrapped(Bk) && (this.stop(), (0, vk.m)(Bk))) return void this.deps.onRenderFailed("frames_refused", Bk);
            console.warn(`${Tk} the previews stopped: their frame threw`, Bk)
          }
        }, kk.pack.onChange((() => {
          this.packChanged()
        })), kk.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const kk of this.previews.values()) kk.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var kk, Fk;
        return null !== (kk = null === (Fk = this.host) || void 0 === Fk ? void 0 : Fk.attached()) && void 0 !== kk && kk
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((kk, Fk) => kk + Fk), 0) / this.costs.length
      }
      async bindSession(kk, Fk, Bk) {
        const Rk = this.binding,
          tk = this.sessionEnds;
        try {
          const ak = this.hostOf(kk);
          if (!ak.wXk()) {
            const Fk = (0, Mk.h)().sampleCount,
              Xk = await Bk(Fk);
            if (this.sessionEnds !== tk) return this.keepRendererOfEndedSession(kk, ak, Xk, Fk, Rk), Fk;
            if (!ak.Zak(Xk)) throw new Error("the page has a renderer already");
            (0, Hk.y)(performance.now()), this.samples = Fk, (0, gk.f)((0, vk.i)(kk))
          }
          if (!ak.attach(Fk)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Rk && this.endBinding()
        }
      }
      keepRendererOfEndedSession(kk, Fk, Bk, Rk, tk) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== tk) try {
          Bk.free()
        } catch (ak) {
          console.warn(`${Tk} an ended session's renderer didn't free`, ak)
        } else Fk.Zak(Bk) && ((0, Hk.y)(performance.now()), this.samples = Rk, (0, gk.f)(this.registryOf(kk)))
      }
      async beginSession() {
        var kk;
        let Fk = () => {};
        const Bk = new Promise((kk => {
          Fk = kk
        }));
        this.binding = {
          done: Bk,
          release: Fk
        }, await (null === (kk = this.opening) || void 0 === kk ? void 0 : kk.catch((() => null)));
        const Rk = this.pageCanvas;
        return this.pageCanvas = null, Rk
      }
      endSession(kk) {
        var Fk, Bk;
        if (this.sessionEnds++, this.lastEndReturned = kk, this.endBinding(), kk) {
          try {
            var Rk;
            null === (Rk = this.host) || void 0 === Rk || Rk.detach()
          } catch (tk) {
            return void console.warn(`${Tk} the session's core kept the page's renderer`, tk)
          }!0 === (null === (Fk = this.host) || void 0 === Fk ? void 0 : Fk.attached()) && console.warn(`${Tk} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Bk = this.host) || void 0 === Bk ? void 0 : Bk.wXk()) && (0, gk.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var kk;
        null === (kk = this.binding) || void 0 === kk || kk.release(), this.binding = null
      }
      async openPreview(kk, Fk, Bk, Rk) {
        const tk = await this.renderingHost(),
          ak = this.module;
        if (null === tk || null === ak) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(tk), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(ak)
        }));
        const Xk = this.nextId++,
          bk = this.deps.createCanvas(),
          [wk, dk] = jk(Fk, Bk, this.deps.dpr(), Rk);
        bk.width = wk, bk.height = dk;
        if (!this.guarded((() => (ak.Ktk(Xk, bk), tk.open(Xk, wk, dk, kk))))) throw this.hostCall(void 0, (() => {
          ak.xtk(Xk)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const sk = new Qk(this, tk, Xk, bk, [wk, dk], this.deps);
        return this.previews.set(Xk, sk), this.startFrames(), sk
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Hk.e)() || null !== (0, Hk.J)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((kk => {
          null === kk || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(kk) {
        return this.prefetchedOr(kk, this.deps.fetchModel)
      }
      imageFile(kk) {
        return this.prefetchedOr(kk, Rk.N)
      }
      prefetchedOr(kk, Fk) {
        const Bk = this.prefetchedFiles.get(kk);
        return void 0 === Bk ? Fk(kk) : Bk.catch((() => Fk(kk)))
      }
      async prefetchPlayerFiles() {
        const kk = this.deps.playerFile().then((kk => this.deps.files.url(kk))),
          Fk = await Promise.all([kk, this.deps.images.lifeformAtlasUrl(Sk.e)]).catch((() => null));
        if (null === Fk) return;
        const [Bk, Rk] = Fk, tk = (kk, Fk) => {
          if (null === kk) return;
          const Bk = Fk(kk);
          this.prefetchedFiles.set(kk, Bk), Bk.catch((() => {
            this.prefetchedFiles.delete(kk)
          }))
        };
        tk(Bk, (kk => this.modelFile(kk))), tk(Rk, (kk => this.imageFile(kk)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((kk => (null === kk && (this.moduleLoad = null), kk)), (kk => {
          throw this.moduleLoad = null, kk
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((kk => {
          throw this.animationTable = null, kk
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((kk => (this.modelsFailed(kk), () => new Promise((() => {})))))
      }
      buildModel(kk, Fk) {
        return this.startModels(), this.models.then((Bk => Bk(kk, Fk))).then((kk => this.unavailable ? new Promise((() => {})) : kk))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(kk) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Tk} the model workers didn't start: models won't draw in the previews`, kk))
      }
      called(kk) {
        return 0 !== kk && this.logError(kk, 0), kk
      }
      closePreview(kk) {
        this.previews.delete(kk.id), null !== this.module && kk.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(kk) {
        if (null !== this.module && this.module !== kk) throw new Error("a second renderer module on one page");
        return this.module = kk, null === this.host && (this.host = this.guarded((() => new kk.ptk)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: kk
        } = this;
        null !== kk && this.outsideCall("the game's start or end", (() => {
          kk.AXk(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: kk,
          shaderPackArgs: Fk
        } = this;
        null !== kk && null !== Fk && this.outsideCall("the shader pack's hand-over", (() => {
          kk.CBk(...Fk) || console.warn(`${Tk} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(kk, Fk) {
        try {
          this.hostCall(void 0, Fk)
        } catch (Bk) {
          this.stop(), console.warn(`${Tk} the previews stopped: ${kk} threw`, Bk)
        }
      }
      async loadAnimations(kk) {
        const Fk = Xk(null),
          Bk = this.module;
        try {
          Fk.wasm = null === Bk ? Fk.wasm : this.hostCall(Fk.wasm, (() => Bk.CV()))
        } catch {}
        let Rk, tk;
        try {
          Rk = await this.fetchAnimationTable()
        } catch (ak) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: ak
          }, Fk)
        }
        if (!this.settleIfTrapped()) {
          try {
            tk = kk.sXk(Rk)
          } catch (ak) {
            if (this.stopIfTrapped(ak)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: ak
            }, Fk)
          }
          tk || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Fk)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const kk = this.host;
        return null !== kk && this.guarded((() => kk.wXk())) ? kk : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var kk;
        const Fk = null !== (kk = this.module) && void 0 !== kk ? kk : await this.loadModule();
        if (null === Fk) return null;
        const Bk = this.hostOf(Fk),
          Rk = () => this.guarded((() => Bk.wXk()));
        if (Rk()) return Bk;
        if (null !== (0, Hk.J)() || (0, Hk.e)()) return null;
        const tk = this.deps.createCanvas();
        tk.width = 1, tk.height = 1;
        const ak = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Xk = (0, Mk.h)().sampleCount;
        let bk;
        try {
          bk = await (0, vk.r)(Fk, "previewRenderer", tk, Xk, Uk.b, ak)
        } catch (wk) {
          throw wk instanceof Ek.d ? this.stopForTrap(wk) : (0, vk.o)(wk) && await this.deps.onRenderFailed("start_failed", wk), wk
        }
        return this.guarded((() => Bk.Zak(bk))) ? ((0, Hk.y)(performance.now()), this.samples = Xk, this.pageCanvas = tk, (0, gk.f)(this.registryOf(Fk)), Bk) : Rk() ? Bk : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(kk, Fk) {
        for (const Xk of this.previews.values()) Xk.feed();
        if (this.stopped) return;
        const Bk = this.deps.now(),
          Rk = kk.frame(Fk);
        this.costs.push(this.deps.now() - Bk), this.costs.length > 120 && this.costs.shift();
        const tk = 0 !== (256 & Rk),
          ak = 255 & Rk;
        for (const Xk of this.previews.values()) {
          if (this.stopped) return;
          Xk.collect(tk)
        }
        if (!this.stopped) {
          if (tk) {
            const Fk = kk.mXk();
            for (let kk = 0; kk + 1 < Fk.length; kk += 2) this.logError(Fk[kk], Fk[kk + 1])
          }
          if (ak === hk) return this.stop(), void this.deps.onRenderFailed("lost");
          if (ak === qk) return this.stop(), void this.deps.onFatal(kk.aXk(), kk.XXk());
          if (ak === Ck) return this.stop(), void console.warn(`${Tk} the previews stopped: the page's renderer went with its session`);
          (0, Wk.b)(Fk), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Ek.g)(this.module) || "failed" === (0, ek.v)())
      }
      hostCall(kk, Fk) {
        if (this.settleIfTrapped()) return kk;
        try {
          return Fk()
        } catch (Bk) {
          if (this.stopIfTrapped(Bk)) return kk;
          throw Bk
        }
      }
      guarded(kk) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return kk()
        } catch (Fk) {
          throw this.stopIfTrapped(Fk), Fk
        }
      }
      registryOf(kk) {
        return {
          NBk: (Fk, Bk) => {
            this.hostCall(void 0, (() => {
              kk.NBk(Fk, Bk)
            }))
          },
          HBk: Fk => {
            this.hostCall(void 0, (() => {
              kk.HBk(Fk)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, gk.f)(null)), !0)
      }
      stopIfTrapped(kk) {
        return !(null === this.module || !(0, Ek.h)(this.module, kk)) && (this.stopForTrap(kk), !0)
      }
      stopForTrap(kk) {
        this.stop(), (0, gk.f)(null), (0, Gk.h)("previews", kk)
      }
      stop() {
        this.stopped = !0;
        for (const kk of this.previews.values()) kk.abandon()
      }
      logError(kk, Fk) {
        const Bk = `${kk}:${Fk}`;
        this.loggedErrors.has(Bk) || (this.loggedErrors.add(Bk), console.warn(`${Tk} error ${kk} (detail ${Fk})`))
      }
    }
    let FF = null;

    function BF() {
      return FF ??= new kF(function() {
        const kk = (0, Lk.r)(mk.clientSideServerUrls.staticUrl, {
          packUrl: kk => {
            var Fk, Bk;
            return null !== (Fk = null === (Bk = Sk.h.current) || void 0 === Bk ? void 0 : Bk.modelUrl(kk)) && void 0 !== Fk ? Fk : null
          }
        });
        return {
          loadModule: Ik,
          startModels: async kk => {
            const {
              pageModelPool: Fk
            } = await Bk.e(42).then((() => Bk(42819))), {
              pool: Rk
            } = Fk(kk);
            return (kk, Fk) => Rk.build(kk, Fk)
          },
          fetchAnimations: async () => bk(await (0, Rk.N)(lk())),
          playerFile: async () => (await (0, Lk.o)()).PLAYER_FILE,
          onAnimationsFailed: (kk, Fk) => {
            wk("previewAnimations", lk(), kk, Fk)
          },
          provideBuiltInAnimationPack: kk => {
            Jk().provide(kk)
          },
          openExtras: Hk.H,
          files: kk,
          images: (0, Sk.k)((0, ik.l)(kk.url), (() => Sk.h.current)),
          pack: Sk.h,
          game: Nk.c,
          fetchModel: kk => (0, Lk.j)(kk),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: kk => requestAnimationFrame(kk),
          cancelFrame: kk => {
            cancelAnimationFrame(kk)
          },
          onRenderFailed: nk,
          onFatal: (kk, Fk) => {
            console.error(`${Tk} the previews stopped: renderer error ${kk} (detail ${Fk})`)
          }
        }
      }()), FF
    }
    var RF = Bk(594),
      tF = Bk(38277),
      aF = Bk(3090);
    const XF = {
      wave: 0,
      clap: 1,
      point: 2,
      shrug: 3,
      cheer: 4,
      sit: 5,
      beeFly: 6,
      bow: 7,
      jesterDance: 8,
      mobIdle: 9,
      caveGolem: 10,
      magmaGolem: 11,
      frostWraith: 12,
      tikiTerror: 13,
      gunReady: 14,
      gunAimed: 15
    };
    const bF = "[bloxd-previews]",
      wF = new Uint32Array(5);

    function dF(kk) {
      return RF.i.indexOf(kk)
    }
    const sF = new WeakSet;

    function VF(kk) {
      const Fk = (0, tF.e)(kk),
        Bk = null === Fk ? -1 : JF(Fk);
      return -1 !== Bk ? Bk : (sF.has(kk) || (sF.add(kk), console.warn(`${bF} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function JF(kk) {
      var Fk;
      return null !== (Fk = XF[kk]) && void 0 !== Fk ? Fk : -1
    }

    function AF(kk, Fk) {
      const {
        canvas: Bk
      } = Fk;
      Bk.style.width = "100%", Bk.style.height = "100%", Bk.style.display = "block", kk.appendChild(Bk)
    }

    function eF(kk) {
      const Fk = kk.getBoundingClientRect();
      return [Fk.width, Fk.height]
    }
    class yF {
      constructor(kk, Fk) {
        this.preview = kk, this.showView = Fk
      }
      show(kk) {
        this.showView(this.preview, kk)
      }
      resize(kk, Fk) {
        this.preview.resize(kk, Fk)
      }
      close() {
        this.preview.close()
      }
    }
    class fF {
      constructor(kk) {
        this.preview = kk, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(kk) {
          const {
            canvas: Fk
          } = kk;
          let Bk = null;
          const Rk = kk => {
              var Rk;
              Bk = {
                pointer: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY
              }, null === (Rk = Fk.setPointerCapture) || void 0 === Rk || Rk.call(Fk, kk.pointerId)
            },
            tk = Fk => {
              var Rk;
              const tk = kk.orbit;
              if ((null === (Rk = Bk) || void 0 === Rk ? void 0 : Rk.pointer) !== Fk.pointerId || null === tk) return;
              const ak = Fk.clientX - Bk.x,
                Xk = Fk.clientY - Bk.y;
              Bk = {
                ...Bk,
                x: Fk.clientX,
                y: Fk.clientY
              }, kk.setOrbit({
                alpha: tk.alpha - .01 * ak,
                beta: Math.min(Math.PI - .01, Math.max(.01, tk.beta - .01 * Xk)),
                radius: tk.radius
              })
            },
            ak = kk => {
              var Fk;
              (null === (Fk = Bk) || void 0 === Fk ? void 0 : Fk.pointer) === kk.pointerId && (Bk = null)
            },
            Xk = Fk => {
              const Bk = kk.orbit;
              if (null === Bk) return;
              Fk.preventDefault();
              const Rk = Fk.deltaY * (Fk.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Fk.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                tk = Math.min(100, Math.max(5, Bk.radius + .08 * Rk));
              kk.setOrbit({
                ...Bk,
                radius: tk
              })
            };
          return Fk.style.touchAction = "none", Fk.addEventListener("pointerdown", Rk), Fk.addEventListener("pointermove", tk), Fk.addEventListener("pointerup", ak), Fk.addEventListener("pointercancel", ak), Fk.addEventListener("wheel", Xk, {
            passive: !1
          }), () => {
            Fk.removeEventListener("pointerdown", Rk), Fk.removeEventListener("pointermove", tk), Fk.removeEventListener("pointerup", ak), Fk.removeEventListener("pointercancel", ak), Fk.removeEventListener("wheel", Xk)
          }
        }(kk), this.dev = {
          canvas: () => kk.canvas,
          isolateHead: () => {
            console.warn(`${bF} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = kk.untilSettled().then((() => {
          if (kk.isStopped) throw new Error(`${bF} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(kk, Fk) {
        this.cosmetics[kk] = Fk, this.apply()
      }
      playEmote(kk) {
        null === kk || kk !== this.emote ? (this.emote = kk, this.apply()) : this.preview.replay()
      }
      untilDrawn(kk) {
        return this.preview.untilSettled()
      }
      setOrbit(kk) {
        let {
          yaw: Fk,
          pitch: Bk,
          radius: Rk
        } = kk;
        const tk = this.preview.orbit;
        null !== tk && this.preview.setOrbit({
          alpha: Fk,
          beta: Bk,
          radius: null !== Rk && void 0 !== Rk ? Rk : tk.radius
        })
      }
      resetCamera() {}
      resize(kk, Fk) {
        this.preview.resize(kk, Fk)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var kk;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), wF, null === (kk = this.emote) ? -1 : JF(kk))
      }
    }

    function mF(kk, Fk) {
      let {
        mobType: Bk,
        variation: Rk,
        animation: tk
      } = Fk;
      kk.setMob(dF(Bk), null !== Rk && void 0 !== Rk ? Rk : "", 1, VF(tk))
    }

    function WF(kk, Fk) {
      let {
        mobType: Bk,
        variation: Rk,
        metaInfo: tk,
        tamed: ak
      } = Fk;
      kk.setPet(dF(Bk), Rk, tk, ak)
    }
    const vF = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class iF {
      constructor(kk, Fk, Bk, Rk) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, kk(Bk.width, Rk[1], Rk).then((kk => {
          if (this.closed) return void kk.close();
          const {
            style: Bk
          } = kk.canvas;
          Bk.position = "absolute", Bk.top = "0", Bk.visibility = "hidden", AF(Fk, kk), this.preview = kk, this.apply()
        })).catch((kk => {
          console.error(`${bF} couldn't open a lineup figure`, kk)
        }))
      }
      update(kk, Fk, Bk, Rk, tk) {
        this.figure = kk, this.shown = Fk, this.order = Bk, this.span = Rk, this.lineup = tk, this.apply()
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.preview) || void 0 === kk || kk.close(), this.preview = null
      }
      apply() {
        const {
          preview: kk,
          figure: Fk,
          lineup: Bk
        } = this;
        if (null === kk || null === Fk) return;
        if (this.given !== Fk) {
          var Rk;
          this.given = Fk, this.loaded = !1;
          const Bk = null === Fk.TY ? 0 : null !== (Rk = (0, aF.c)(Fk.TY)) && void 0 !== Rk ? Rk : 0;
          kk.setFigure(function(kk) {
            return JSON.stringify(Object.fromEntries(kk.cosmetics))
          }(Fk), Bk, VF(Fk.animation), Fk.size), kk.untilSettled().then((() => {
            this.given === Fk && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: tk,
          width: ak
        } = this.span;
        kk.resize(ak, Bk[1], Bk);
        const {
          style: Xk
        } = kk.canvas;
        Xk.left = `${tk}px`, Xk.width = `${ak}px`, Xk.zIndex = this.order, Xk.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class YF {
      constructor(kk, Fk) {
        this.open = Fk, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = eF(kk), this.layer = document.createElement("div");
        const {
          style: Bk
        } = this.layer;
        Bk.position = "relative", Bk.isolation = "isolate", Bk.overflow = "hidden", Bk.width = "100%", Bk.height = "100%", Bk.pointerEvents = "none", kk.appendChild(this.layer)
      }
      show(kk) {
        this.view = kk, this.place()
      }
      resize(kk, Fk) {
        this.size = [kk, Fk], this.place()
      }
      close() {
        for (const kk of this.figures) kk.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: kk,
          shown: Fk
        } = this.view;
        for (const Rk of this.figures.splice(kk.length)) Rk.close();
        const {
          size: Bk
        } = this;
        kk.forEach(((Rk, tk) => {
          var ak;
          const Xk = function(kk, Fk, Bk, Rk) {
            let [tk, ak] = Rk;
            const Xk = (kk + .5) * tk / Fk,
              bk = Math.min(Math.max(tk / Fk, 2 * Bk * ak), 2 * Math.max(Xk, tk - Xk));
            return {
              left: Xk - bk / 2,
              width: bk
            }
          }(tk, kk.length, function(kk) {
            let {
              animation: Fk,
              size: Bk
            } = kk;
            const {
              aimed: Rk,
              ready: tk
            } = vF;
            return (VF(Fk) === XF.gunAimed ? Rk : tk) * Bk
          }(Rk), Bk);
          this.figures[tk] ??= new iF(this.open, this.layer, Xk, Bk), this.figures[tk].update(Rk, null !== (ak = Fk[tk]) && void 0 !== ak && ak, function(kk, Fk) {
            return String(Math.round(1e3 * kk) + Fk)
          }(Rk.size, tk), Xk, Bk)
        }))
      }
    }
    const oF = {
      player: zk,
      store: Pk
    };
    class LF {
      constructor(kk) {
        this.page = kk
      }
      async openMob(kk) {
        return new yF(await this.open(kk, Dk), mF)
      }
      async openPet(kk) {
        return new yF(await this.open(kk, Dk), WF)
      }
      openMobLineup(kk) {
        return new YF(kk, ((kk, Fk, Bk) => this.page.openPreview(Dk, kk, Fk, Bk)))
      }
      async openCharacter(kk, Fk) {
        return new fF(await this.open(kk, oF[Fk]))
      }
      async open(kk, Fk) {
        const [Bk, Rk] = eF(kk), tk = await this.page.openPreview(Fk, Bk, Rk);
        return AF(kk, tk), tk
      }
    }
  },
  36436: (kk, Fk, Bk) => {
    Bk.d(Fk, {
      c: () => Rk,
      e: () => tk,
      f: () => Jk,
      g: () => fk,
      h: () => sk,
      l: () => Wk,
      o: () => wk,
      p: () => dk,
      s: () => Ak,
      w: () => ek,
      y: () => yk,
      z: () => mk
    });
    const Rk = [{
      numLines: 7,
      charsPerLine: 16,
      uiFontSize: 3.3,
      ingameFontSize: 25
    }, {
      numLines: 5,
      charsPerLine: 11,
      uiFontSize: 4.6,
      ingameFontSize: 36
    }, {
      numLines: 3,
      charsPerLine: 7,
      uiFontSize: 7.5,
      ingameFontSize: 58
    }];

    function tk(kk, Fk) {
      const {
        numLines: Bk,
        charsPerLine: tk
      } = Rk[Fk];
      return vk(kk, Bk, tk, !1)
    }
    const ak = 7 / 8,
      Xk = .25,
      bk = 8;

    function wk(kk, Fk) {
      return {
        width: Math.min(kk, bk) - 2 * Xk,
        height: Math.min(Fk, bk) - 2 * Xk
      }
    }

    function dk(kk, Fk, Bk) {
      const tk = wk(kk, Fk),
        {
          numLines: Xk,
          charsPerLine: bk
        } = Rk[Bk];
      return {
        numLines: Math.max(1, Math.floor(Xk / ak * tk.height)),
        charsPerLine: Math.max(1, Math.floor(bk * tk.width))
      }
    }

    function sk(kk, Fk, Bk, Rk) {
      const {
        numLines: tk,
        charsPerLine: ak
      } = dk(Bk, Rk, Fk);
      return vk(kk, tk, ak, !1)
    }
    const Vk = 32e3;

    function Jk(kk) {
      return kk.slice(0, Vk)
    }
    const Ak = 512e3,
      ek = 64,
      yk = Ak;

    function fk(kk, Fk) {
      const Bk = Math.max(0, yk - Fk),
        Rk = Math.min(Ak, Bk);
      return kk.slice(0, Rk)
    }
    const mk = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Eb: {
        numLines: 1,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      nameTag: {
        numLines: 1,
        charsPerLine: 13,
        uiFontSize: 4.6
      }
    };

    function Wk(kk, Fk) {
      const {
        numLines: Bk,
        charsPerLine: Rk
      } = mk[Fk];
      return vk(kk, Bk, Rk, !1)
    }

    function vk(kk, Fk, Bk, Rk, tk) {
      (tk || Rk) && (kk = kk.slice(0, null !== tk && void 0 !== tk ? tk : Fk * Bk));
      const ak = kk.split("\n");
      if (ak.length > Fk && ak.splice(Fk, ak.length - Fk), !Rk)
        for (let Xk = 0; Xk < ak.length; Xk++) {
          const kk = ak[Xk];
          kk.length > Bk && (ak[Xk] = kk.substring(0, Bk), ak.length < Fk && ak.splice(Xk + 1, 0, kk.substring(Bk)))
        }
      return ak.join("\n")
    }
  },
  42741: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42745: (kk, Fk, Bk) => {
    kk.exports = Bk.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);