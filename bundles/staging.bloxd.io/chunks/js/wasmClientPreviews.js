export const id = 59;
export const ids = [59];
export const modules = {
  38226: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      i: () => Sk
    });
    const Dk = new WeakMap;

    function fk(kk, ek) {
      return Dk.set(kk, ek), kk
    }

    function Sk(kk) {
      var ek;
      return null !== (ek = Dk.get(kk)) && void 0 !== ek ? ek : null
    }
  },
  38245: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => rk
    });
    var Dk = ik(1207);

    function fk(kk) {
      const ek = /(\d*\.?\d+)px/.exec(kk);
      return ek ? Number(ek[1]) : null
    }

    function Sk(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let bk = !1;
    const rk = {
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
      drawText: function(kk, ek, Dk, rk, Pk, mk) {
        if (Pk <= 0 || mk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Mk,
          fontVariant: Kk,
          fontWeight: xk,
          fontSize: nk,
          font: Uk
        } = this, Hk = [Mk, Kk, xk, `${nk}px`, Uk].filter(Boolean).join(" "), wk = [
          [xk, `${nk}px`, Sk(Uk)].filter(Boolean).join(" "), `${nk}px sans-serif`
        ], lk = kk.font, pk = function(kk, ek, ik) {
          for (const Dk of ek) {
            kk.font = Dk;
            const ek = fk(kk.font),
              bk = Sk(Dk);
            if (null !== ek && Math.abs(ek - ik) <= .5 && kk.font.toLowerCase().includes(bk.toLowerCase())) return Dk
          }
          return null
        }(kk, [Hk, ...wk], nk);
        pk !== Hk && function(kk, ek, Dk) {
          bk || (bk = !0, Promise.resolve().then((() => ik(1046))).then((ik => {
            let {
              cH: fk
            } = ik;
            fk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              fU: ek,
              drawnWith: null !== Dk && void 0 !== Dk ? Dk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Hk, lk, pk);
        const yk = fk(kk.font);
        if (null === pk && null !== yk && yk > 0) {
          const ik = nk / yk;
          kk.save();
          try {
            return kk.scale(ik, ik), {
              height: this.drawLines(kk, ek, Dk / ik, rk / ik, Pk / ik, mk / ik, yk).height * ik
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, ek, Dk, rk, Pk, mk, nk)
      },
      drawLines: function(kk, ek, ik, fk, Sk, bk, rk) {
        const Pk = ik + Sk,
          mk = fk + bk;
        let Mk, Kk = fk + bk / 2 + rk / 2;
        "right" === this.align ? (Mk = Pk, kk.textAlign = "right") : "left" === this.align ? (Mk = ik, kk.textAlign = "left") : (Mk = ik + Sk / 2, kk.textAlign = "center");
        for (const Dk of ek) {
          kk.measureText(Dk).width >= Sk && (ek = ek.replace(Dk, ""))
        }
        ek = (0, Dk.T)(ek);
        const xk = [],
          nk = ek.split("\n"),
          Uk = this.justify ? kk.measureText("\u200a").width : 0;
        nk.forEach((ek => {
          let ik = kk.measureText(ek).width;
          if (ik <= Sk) xk.push(ek);
          else {
            let Dk = ek;
            const fk = Sk;
            let bk, rk, Pk;
            for (ik = kk.measureText(Dk).width; ik > fk;) {
              for (bk = 0, rk = 0, Pk = ""; rk < fk;) bk++, Pk = Dk.substr(0, bk), rk = kk.measureText(Pk).width;
              bk--, Pk = Pk.substr(0, bk);
              const ek = bk;
              if (" " !== Dk.substr(bk, 1)) {
                for (;
                  " " !== Dk.substr(bk, 1) && 0 !== bk;) bk--;
                0 === bk && (bk = ek), Pk = Dk.substr(0, bk)
              }
              Pk = this.justify ? this.justifyLine(kk, Pk, Uk, "\u200a", Sk) : Pk, Dk = Dk.substr(bk), ik = kk.measureText(Dk).width, xk.push(Pk)
            }
            ik > 0 && xk.push(Dk)
          }
        }));
        const Hk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, ek),
          wk = Hk * (xk.length - 1),
          lk = wk / 2;
        let pk = fk;
        "top" === this.vAlign ? Kk = fk + rk : "bottom" === this.vAlign ? (Kk = mk - wk, pk = mk) : (pk = fk + bk / 2, Kk -= lk), xk.forEach((ek => {
          ek = ek.trim(), kk.fillText(ek, Mk, Kk), Kk += Hk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(ik, fk, Sk, bk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(Mk, fk), kk.lineTo(Mk, mk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(ik, pk), kk.lineTo(Pk, pk), kk.stroke());
        return {
          height: wk + Hk
        }
      },
      getTextHeight: function(kk, ek) {
        const ik = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Dk
        } = kk.measureText(ek);
        return kk.textBaseline = ik, Dk
      },
      justifyLine: function(kk, ek, ik, Dk, fk) {
        const Sk = ek.trim(),
          bk = kk.measureText(Sk).width,
          rk = Sk.split(/\s+/).length - 1,
          Pk = Math.floor((fk - bk) / ik);
        if (rk <= 0 || Pk <= 0) return Sk;
        const mk = Math.floor(Pk / rk);
        let Mk = Pk - rk * mk,
          Kk = [];
        for (let xk = 0; xk < mk; xk++) Kk.push(Dk);
        Kk = Kk.join("");
        return Sk.replace(/\s+/g, (kk => {
          const ek = Mk > 0 ? Kk + Dk : Kk;
          return Mk--, kk + ek
        }))
      }
    }
  },
  38254: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Hk,
      h: () => Uk,
      l: () => xk,
      p: () => Mk,
      q: () => Kk
    });
    var Dk = ik(4189),
      fk = ik(314);
    const Sk = 1024,
      bk = 1536,
      rk = 2 * Dk.n + 1,
      Pk = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      mk = 1.5;

    function Mk(kk, ek, ik) {
      if ("string" !== typeof kk) return ek;
      try {
        const ik = JSON.parse(kk);
        return ik && "object" === typeof ik ? ik : ek
      } catch (Dk) {
        return void 0 !== ik && console.error(`Couldn't parse ${ik}`, Dk), ek
      }
    }

    function Kk(kk) {
      return Mk(kk, null, "a leaderboard's rows")
    }

    function xk(kk, ek) {
      var ik, Dk;
      return null !== ek && void 0 !== ek ? ek : {
        status: null !== (ik = kk.status) && void 0 !== ik ? ik : "loading",
        entries: null !== (Dk = kk.entries) && void 0 !== Dk ? Dk : []
      }
    }

    function nk(kk, ek) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : ek
    }

    function Uk(kk, ek) {
      const ik = nk(kk.size, 1);
      let Dk = nk(kk.width, nk(2.5 * ik, 2.5)),
        fk = nk(kk.height, nk(3.75 * ik, 3.75));
      Number.isFinite(Sk * fk / Dk) && Number.isFinite(bk * Dk / fk) || (Dk = 2.5, fk = 3.75);
      const rk = fk / Dk,
        Pk = Math.max(1, Math.min(Sk, ek / rk));
      return {
        width: Dk,
        height: fk,
        layoutWidth: Math.max(Sk, bk / rk),
        layoutHeight: Math.max(bk, Sk * rk),
        pixelWidth: Math.round(Pk),
        pixelHeight: Math.round(Math.max(1, Math.min(ek, Pk * rk)))
      }
    }

    function Hk(kk, ek, ik, bk, Mk, Kk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = fk.D.defaultNameTagBackground, kk.fillRect(0, 0, ek, ik), kk.scale(ek / bk.layoutWidth, ik / bk.layoutHeight), kk.translate((bk.layoutWidth - Sk) / 2, 0),
        function(kk, ek, ik, Sk) {
          var bk, Mk, Kk, xk;
          const {
            top: nk,
            around: Uk,
            showPlayerText: Hk,
            localPlayerDbId: pk
          } = ik, {
            whiteUiText: yk,
            grayUiText: Yk,
            yellowUiText: Lk
          } = fk.D;
          kk.textBaseline = "middle";
          const Ck = function(ek, ik, Dk, fk, Sk, bk) {
              let rk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${fk}px 'Jetbrains Mono', monospace`, kk.fillStyle = Sk, kk.textAlign = rk;
              let Pk = ek.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(Pk).width > bk) {
                for (; Pk.length > 0 && kk.measureText(`${Pk}\u2026`).width > bk;) Pk = Pk.slice(0, -1);
                Pk += "\u2026"
              }
              kk.fillText(Pk, ik, Dk)
            },
            Ak = ek => {
              kk.fillStyle = yk, kk.globalAlpha = .15, kk.fillRect(24, ek, 976, 2), kk.globalAlpha = 1
            },
            jk = null === pk ? null : (0, fk._b)(pk),
            sk = kk => null !== jk && kk.playerHash === jk,
            dk = wk(nk.entries, Dk.r),
            Vk = "ready" === nk.status && dk.length > 0,
            Fk = null === Uk ? [] : wk(Uk.entries, rk),
            uk = dk.some(sk),
            qk = null === Uk ? null : function(kk) {
              const ek = kk;
              if (!ek || !Number.isFinite(ek.rank) || !Number.isFinite(ek.tied) || !Number.isFinite(ek.total)) return null;
              return ek
            }(Uk.standing),
            Ik = Fk.find(sk),
            zk = dk.find(sk),
            Qk = null === qk || void 0 === Ik ? null : {
              value: Ik.value,
              rank: qk.rank
            },
            vk = lk(dk, void 0 === zk || zk.value === (null === Qk || void 0 === Qk ? void 0 : Qk.value) ? Qk : null),
            Ek = lk(Fk, Qk),
            hk = (kk, ek) => {
              const ik = kk.findIndex(sk);
              return ik >= 0 ? ek[ik] : null
            },
            ak = null !== (bk = null !== (Mk = null === qk || void 0 === qk ? void 0 : qk.rank) && void 0 !== Mk ? Mk : hk(Fk, Ek)) && void 0 !== bk ? bk : hk(dk, vk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const Wk = [...Vk ? vk : [], ...uk ? [] : Ek],
            tk = Math.min(280, Math.max(0, ...Wk.map((ek => kk.measureText(Pk.format(ek)).width)))),
            Xk = tk <= 80,
            Bk = Xk ? 80 : 32 + tk,
            ck = Xk ? 148 : Bk + 28,
            Tk = 660 - ck;
          Ck(`TOP ${Dk.r}  /  ALL TIME`, 24, 52, 28, Yk, 976), Ck(Hk ? String(null !== (Kk = ek.title) && void 0 !== Kk ? Kk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, yk, 976), Ck("RANK", 32, 174, 28, Yk, ck - 40), Ck("PLAYER", ck, 174, 28, Yk, Tk), Ck(Hk ? String(null !== (xk = ek.scoreLabel) && void 0 !== xk ? xk : "Score").slice(0, 24) : "Score", 992, 174, 28, Yk, 304, "right"), Ak(202);
          const Zk = (Sk - 232) / (Dk.r + mk + rk),
            Ok = 208 + Dk.r * Zk,
            gk = Ok + mk * Zk,
            Gk = (ek, ik, Dk, fk) => {
              const Sk = sk(ek);
              kk.fillStyle = Sk ? Lk : yk, kk.globalAlpha = Sk ? .15 : fk ? .035 : 0, kk.fillRect(24, Dk - Zk / 2 + 1, 976, Zk - 2), kk.globalAlpha = 1;
              const bk = Sk ? Lk : yk;
              Ck(Pk.format(ik), Bk, Dk, 34, bk, Xk ? 80 : tk, Xk ? "center" : "right"), Ck(Hk ? String(ek.name).slice(0, 64) : "Player", ck, Dk, 34, bk, Tk);
              const rk = Pk.format(ek.value);
              Ck(kk.measureText(rk).width > 304 ? ek.value.toExponential(6) : rk, 992, Dk, 34, bk, 304, "right")
            };
          if (Vk)
            for (const [Dk, fk] of dk.entries()) Gk(fk, vk[Dk], 208 + (Dk + .5) * Zk, Dk % 2 === 0);
          else {
            const kk = "error" === nk.status,
              ek = kk ? "Couldn't load leaderboard" : "ready" === nk.status ? "No scores yet" : "Loading leaderboard\u2026",
              ik = kk ? "Trying again shortly" : "ready" === nk.status ? "Be the first on the board!" : "Fetching the top players",
              Dk = (208 + Ok) / 2;
            Ck(ek, 512, Dk - 28, 40, kk ? fk.D.redUiText : yk, 960, "center"), Ck(ik, 512, Dk + 27, 30, Yk, 960, "center")
          }
          const Nk = Ok + mk * Zk / 2;
          if (null === ak) Ak(Nk);
          else {
            const ek = null === qk ? 0 : qk.tied - 1,
              ik = `YOUR RANK #${Pk.format(ak)}${null===qk?"":` of ${Pk.format(qk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Dk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(ik).width)));
            Ck(ik, 512, Nk - (ek > 0 ? 15 : 0), Dk, Lk, 960, "center"), ek > 0 && Ck(`Tied with ${Pk.format(ek)} other${1===ek?"":"s"}`, 512, Nk + 24, 24, Yk, 960, "center")
          }
          if (null === Uk) return;
          const Rk = gk + rk * Zk / 2;
          if (uk) Ck(`You're in the top ${Dk.r}!`, 512, Rk, 40, Lk, 960, "center");
          else if (0 === Fk.length) Ck("You're not on this board yet", 512, Rk, 34, Yk, 960, "center");
          else
            for (const [Dk, fk] of Fk.entries()) Gk(fk, Ek[Dk], gk + (Dk + .5) * Zk, Dk % 2 === 0)
        }(kk, Mk, Kk, bk.layoutHeight)
    }

    function wk(kk, ek) {
      return Array.isArray(kk) ? kk.slice(0, ek).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function lk(kk, ek) {
      const ik = [];
      let Dk = !1;
      return kk.forEach(((fk, Sk) => {
        if (null !== ek && fk.value === ek.value) return void ik.push(ek.rank);
        const bk = Sk > 0 && fk.value === kk[Sk - 1].value;
        bk || (Dk = 0 === Sk && 1 !== fk.rank), ik.push(bk && !Dk ? ik[Sk - 1] : fk.rank)
      })), ik
    }
  },
  38441: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => fk,
      i: () => Sk
    });
    const Dk = 32;

    function fk(kk) {
      return Array.from(kk).length
    }

    function Sk(kk) {
      const ek = [""];
      let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        fk = "";
      const Sk = () => {
        ek.push(""), ik = 0, fk = ""
      };
      for (const bk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(bk)) Sk();
        else if (/^\s+$/.test(bk)) fk += bk;
      else if (bk.length > 0) {
        const kk = Array.from(bk);
        ik > 0 && ik + fk.length + kk.length > Dk && Sk(), ek[ek.length - 1] += fk, ik += fk.length, fk = "";
        for (const fk of kk) ik >= Dk && Sk(), ek[ek.length - 1] += fk, ik++
      }
      return ek[ek.length - 1] += fk, ek
    }
  },
  50512: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      WasmPreviewHost: () => Fe,
      pageBuiltInAnimationPack: () => xk,
      pagePreviews: () => re,
      previewModule: () => Rk
    });
    var Dk = ik(2823),
      fk = ik(600);
    const Sk = "[bloxd-wasm-client]";

    function bk(kk) {
      const ek = {
        wasm: "unknown",
        client: String(fk.c)
      };
      try {
        var ik;
        ek.wasm = null !== (ik = null === kk || void 0 === kk ? void 0 : kk.IK()) && void 0 !== ik ? ik : ek.wasm
      } catch {}
      return ek
    }
    async function rk(kk) {
      if (kk.length < 2 || 31 !== kk[0] || 139 !== kk[1]) return kk;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: ek
        } = await Promise.resolve().then((() => ik(2763)));
        return ek(kk)
      }
      const ek = new Blob([kk]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(ek).arrayBuffer())
    }

    function Pk(kk, ek, Dk, fk) {
      Promise.resolve().then((() => ik(40326))).then((ik => {
        let {
          reportDataLoadFailure: Sk
        } = ik;
        Sk(kk, ek, Dk, fk)
      }), (ek => {
        console.warn(`${Sk} ${kk} didn't load, and the report couldn't be sent`, Dk.error, ek)
      }))
    }
    const mk = [3e4, 12e4, 3e5];
    class Mk {
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
        const ek = bk(kk),
          ik = await async function(kk, ek) {
            let ik;
            try {
              ik = await kk()
            } catch (Dk) {
              return {
                stage: "fetch",
                error: Dk
              }
            }
            try {
              return ek(ik) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Dk) {
              return {
                stage: "decode",
                error: Dk
              }
            }
          }((() => this.deps.fetch()), (ek => {
            const ik = kk.Gfk(ek);
            return ik && this.resolveSet(ek), ik
          }));
        if (null !== ik) {
          if ("fetch" === ik.stage) {
            this.loading = null;
            const ek = mk[this.retries++];
            void 0 !== ek && this.deps.later((() => {
              this.provide(kk)
            }), ek)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(ik, ek))
        }
      }
    }
    let Kk = null;

    function xk() {
      return Kk ??= new Mk({
        fetch: async () => rk(await (0, Dk.M)(nk(), {
          priority: "low"
        })),
        onFailed: (kk, ek) => {
          Pk("builtInAnimations", nk(), kk, ek)
        },
        later: (kk, ek) => {
          setTimeout(kk, ek)
        }
      }), Kk
    }

    function nk() {
      return ik(50521)
    }
    var Uk = ik(2821),
      Hk = ik(35878),
      wk = ik(40452),
      lk = ik(1177),
      pk = ik(293),
      yk = ik(280),
      Yk = ik(610),
      Lk = ik(4735),
      Ck = ik(40297),
      Ak = ik(40525),
      jk = (ik(40358), ik(40371)),
      sk = ik(40378),
      dk = ik(40380),
      Vk = ik(40305),
      Fk = ik(40553),
      uk = ik(40557),
      qk = ik(40294),
      Ik = ik(40425),
      zk = ik(40415),
      Qk = ik(40475),
      vk = ik(40541),
      Ek = ik(42192),
      hk = ik(35843),
      ak = ik(3661);
    const Wk = "[bloxd-previews]",
      tk = 4e5,
      Xk = 0,
      Bk = 1,
      ck = 2,
      Tk = 1,
      Zk = 2,
      Ok = 3,
      gk = 0,
      Gk = 1,
      Nk = 2;

    function Rk(kk) {
      const ek = kk,
        ik = (0, Ck.I)(kk),
        Dk = (0, Ck.l)(kk);
      return null !== ik && null !== Dk && "function" === typeof ek.Zfk && "function" === typeof ek.Ofk && "function" === typeof ek.gfk ? ek : null
    }

    function Jk(kk, ek, ik) {
      let [Dk, fk] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [kk, ek], Sk = Math.min(Number.isFinite(ik) && ik > 0 ? ik : 1, 2);
      const bk = Math.max(0, Dk, kk) * Math.max(0, fk, ek) * Sk * Sk;
      return bk > tk && (Sk *= Math.sqrt(tk / bk)), [Math.max(1, Math.floor(Math.max(0, kk) * Sk)), Math.max(1, Math.floor(Math.max(0, ek) * Sk))]
    }

    function ke() {
      return ik(50530)
    }
    async function ee(kk, ek, Dk) {
      let fk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === kk && (0, qk.x)();
      const Sk = await (0, qk.U)();
      if (null === Sk || (0, Ck.m)(Sk) || (0, qk.b)()) return;
      const rk = "webgpu" === Sk.backend;
      if (!rk && "lost" !== kk) return;
      const Pk = rk && (0, yk.n)(Sk.adapter, null !== Dk && void 0 !== Dk ? Dk : null, "lost" === kk, fk),
        mk = rk ? (0, Ck.T)(kk) : null;
      if (null === mk) {
        rk || (0, Yk.o)(), (0, qk.t)();
        try {
          await async function(kk, ek, Dk, fk, Sk) {
            let {
              restoreLost: rk,
              adapterRemembered: Pk
            } = Sk;
            const mk = (0, Uk.S)(),
              {
                flushCrashReports: Mk,
                reportRenderReload: Kk
              } = await Promise.resolve().then((() => ik(40326)));
            Kk(kk.backend, fk, bk(mk ? (0, Uk.H)() : null), {
              cause: ek,
              restoreLost: rk,
              adapterRemembered: Pk,
              ...ie(kk, ek, Dk)
            }), await Mk(Ik.c)
          }(Sk, kk, ek, null !== Dk && void 0 !== Dk ? Dk : "start_failed" === kk ? 0 : 1, {
            restoreLost: fk,
            adapterRemembered: Pk
          })
        } catch (Kk) {
          console.warn(`${Wk} ${Sk.backend} failed at home (${kk}), and its report couldn't be sent`, Kk)
        }(0, Ik.i)()
      } else {
        var Mk;
        const Dk = ie(Sk, kk, ek),
          fk = `WebGPU failed at home (${kk}${void 0===Dk.error?"":`: ${Dk.error instanceof Error?Dk.error.message:(0,hk.j)(Dk.error)}`}) and ${mk}`;
        console.warn(`${Wk} ${fk}: the previews stop`, null !== (Mk = Dk.error) && void 0 !== Mk ? Mk : ""), (0, qk.u)(fk);
        try {
          const {
            countRenderLost: ek
          } = await Promise.resolve().then((() => ik(40326)));
          ek(kk, Dk.error, Dk.context)
        } catch (xk) {
          console.warn(`${Wk} WebGPU failed at home (${kk}), and its count couldn't be sent`, xk)
        }
      }
    }

    function ie(kk, ek, ik) {
      var Dk;
      let {
        adapter: fk
      } = kk;
      const Sk = (0, Uk.S)();
      return {
        error: "lost" === ek && null !== (Dk = (0, Ck.U)(Sk ? (0, Ck.I)((0, Uk.H)()) : null)) && void 0 !== Dk ? Dk : ik,
        context: {
          adapter: fk,
          boundAtMs: "start_failed" === ek ? null : (0, qk.N)(),
          indirectHangs: (0, qk.A)(),
          restoresSkipped: (0, qk.Q)()
        }
      }
    }
    async function De() {
      if (!(0, Uk.S)()) {
        const kk = await (0, qk.U)();
        if (null === kk || (0, Ck.m)(kk)) return null;
        if (await (0, Hk.j)(await kk.load(), wk.h), !(0, Uk.S)()) return null
      }
      return Rk((0, Uk.H)())
    }
    class fe {
      constructor(kk, ek, ik, Dk, fk, Sk) {
        this.page = kk, this.host = ek, this.id = ik, this.canvas = Dk, this.size = fk, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const bk = {
            ...Sk.images,
            glbUrl: kk => {
              var ek;
              return null !== (ek = this.models.drawnUrl(kk)) && void 0 !== ek ? ek : Sk.images.glbUrl(kk)
            }
          },
          rk = ek => kk.modelFile(ek);
        this.images = new Ak.e(bk, (kk => {
          console.warn(`${Wk} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
        }), {
          fetchFile: rk,
          fetchImage: ek => kk.imageFile(ek)
        }), kk.startModels(), this.models = new jk.h(Sk.files, ((ek, ik) => kk.buildModel(ek, ik)), (kk => {
          console.warn(`${Wk} model file ${kk.file} (${kk.url}) failed`, kk.error)
        }), {
          fetchFile: rk,
          onWritten: (kk, ek) => {
            this.images.glbWritten(kk, ek)
          },
          onTaken: (kk, ek) => {
            this.images.glbTaken(kk, ek)
          }
        }), this.write = (kk, ek, ik) => {
          if (this.closed) return !0;
          if (kk === jk.b) {
            const kk = new DataView(ik.buffer, ik.byteOffset, dk.b),
              Dk = kk.getUint32(0, !0),
              fk = kk.getUint32(dk.e, !0),
              Sk = this.page.hostCall(Nk, (() => this.host.JSk(this.id, Dk, ek, ik.subarray(dk.b))));
            return this.outcomes.push([fk, Sk]), !0
          }
          return kk === Ak.b && (this.page.hostCall(void 0, (() => {
            this.host.ebk(this.id, ik)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(kk, ek, ik) {
        if (this.closed) return;
        const [Dk, fk] = Jk(kk, ek, this.page.dpr(), ik);
        Dk === this.size[0] && fk === this.size[1] || (this.size = [Dk, fk], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Dk, fk)
        })))
      }
      setMob(kk, ek, ik, Dk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.bbk(this.id, kk, ek, ik, Dk))))
      }
      setPet(kk, ek, ik, Dk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Pbk(this.id, kk, ek, ik, Dk))))
      }
      setPlayer(kk, ek, ik) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Dbk(this.id, kk, ek, ik))))
      }
      setFigure(kk, ek, ik, Dk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.fbk(this.id, kk, ek, ik, Dk))))
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
          alpha: ek,
          beta: ik,
          radius: Dk
        } = kk;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.rbk(this.id, ek, ik, Dk)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((kk => {
          this.settled.push(kk)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Fk.h)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [kk, ek] of this.outcomes) {
          const ik = ek === gk ? [] : [ek === Gk ? kk : (kk | jk.d) >>> 0];
          this.models.taken(kk, ik)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(kk) {
        let ek = !1;
        if (kk) {
          const kk = this.host.Kbk(this.id);
          for (const ek of kk) this.models.request(ek);
          const ik = this.host.Mbk(this.id);
          ik.length > 0 && this.images.onEvent(ik), ek = kk.length > 0 || ik.length > 0
        }
        const ik = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Dk = ek || ik > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Dk ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(kk) {
        this.page.hostCall(void 0, (() => {
          const ek = this.host.close(this.id);
          ek.length > 0 && this.images.onEvent(ek), this.page.isTrapped || kk.gfk(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const kk = this.settled;
        this.settled = [];
        for (const ek of kk) ek()
      }
    }
    class Se {
      constructor(kk) {
        this.deps = kk, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: kk => {
            this.modelsFailed(kk)
          },
          onDecoderFailed: kk => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Wk} the Draco decoder didn't load: models waiting on it won't draw`, kk))
          },
          onWorkerLost: kk => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Wk} a model worker was lost: ${kk}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.AU = {
          setShaderPack: (kk, ek, ik, Dk, fk) => (this.shaderPackArgs = [kk, ek, ik, Dk, fk], this.handOverShaderPack(), !0)
        }, this.frame = kk => {
          this.frameId = null;
          const ek = this.host;
          if (null !== ek && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(ek, kk)
          } catch (ik) {
            if (!this.stopIfTrapped(ik) && (this.stop(), (0, Ck.p)(ik))) return void this.deps.onRenderFailed("frames_refused", ik);
            console.warn(`${Wk} the previews stopped: their frame threw`, ik)
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
        var kk, ek;
        return null !== (kk = null === (ek = this.host) || void 0 === ek ? void 0 : ek.attached()) && void 0 !== kk && kk
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((kk, ek) => kk + ek), 0) / this.costs.length
      }
      async bindSession(kk, ek, ik) {
        const Dk = this.binding,
          fk = this.sessionEnds;
        try {
          const Sk = this.hostOf(kk);
          if (!Sk.kbk()) {
            const ek = (0, Qk.g)().sampleCount,
              bk = await ik(ek);
            if (this.sessionEnds !== fk) return this.keepRendererOfEndedSession(kk, Sk, bk, ek, Dk), ek;
            if (!Sk.hSk(bk)) throw new Error("the page has a renderer already");
            (0, qk.v)(performance.now()), this.samples = ek, (0, vk.f)((0, Ck.l)(kk))
          }
          if (!Sk.attach(ek)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Dk && this.endBinding()
        }
      }
      keepRendererOfEndedSession(kk, ek, ik, Dk, fk) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== fk) try {
          ik.free()
        } catch (Sk) {
          console.warn(`${Wk} an ended session's renderer didn't free`, Sk)
        } else ek.hSk(ik) && ((0, qk.v)(performance.now()), this.samples = Dk, (0, vk.f)(this.registryOf(kk)))
      }
      async beginSession() {
        var kk;
        let ek = () => {};
        const ik = new Promise((kk => {
          ek = kk
        }));
        this.binding = {
          done: ik,
          release: ek
        }, await (null === (kk = this.opening) || void 0 === kk ? void 0 : kk.catch((() => null)));
        const Dk = this.pageCanvas;
        return this.pageCanvas = null, Dk
      }
      endSession(kk) {
        var ek, ik;
        if (this.sessionEnds++, this.lastEndReturned = kk, this.endBinding(), kk) {
          try {
            var Dk;
            null === (Dk = this.host) || void 0 === Dk || Dk.detach()
          } catch (fk) {
            return void console.warn(`${Wk} the session's core kept the page's renderer`, fk)
          }!0 === (null === (ek = this.host) || void 0 === ek ? void 0 : ek.attached()) && console.warn(`${Wk} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (ik = this.host) || void 0 === ik ? void 0 : ik.kbk()) && (0, vk.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var kk;
        null === (kk = this.binding) || void 0 === kk || kk.release(), this.binding = null
      }
      async openPreview(kk, ek, ik, Dk) {
        const fk = await this.renderingHost(),
          Sk = this.module;
        if (null === fk || null === Sk) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(fk), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Sk)
        }));
        const bk = this.nextId++,
          rk = this.deps.createCanvas(),
          [Pk, mk] = Jk(ek, ik, this.deps.dpr(), Dk);
        rk.width = Pk, rk.height = mk;
        if (!this.guarded((() => (Sk.Ofk(bk, rk), fk.open(bk, Pk, mk, kk))))) throw this.hostCall(void 0, (() => {
          Sk.gfk(bk)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Mk = new fe(this, fk, bk, rk, [Pk, mk], this.deps);
        return this.previews.set(bk, Mk), this.startFrames(), Mk
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, qk.b)() || null !== (0, qk.L)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((kk => {
          null === kk || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(kk) {
        return this.prefetchedOr(kk, this.deps.fetchModel)
      }
      imageFile(kk) {
        return this.prefetchedOr(kk, Dk.M)
      }
      prefetchedOr(kk, ek) {
        const ik = this.prefetchedFiles.get(kk);
        return void 0 === ik ? ek(kk) : ik.catch((() => ek(kk)))
      }
      async prefetchPlayerFiles() {
        const kk = this.deps.playerFile().then((kk => this.deps.files.url(kk))),
          ek = await Promise.all([kk, this.deps.images.lifeformAtlasUrl(Fk.e)]).catch((() => null));
        if (null === ek) return;
        const [ik, Dk] = ek, fk = (kk, ek) => {
          if (null === kk) return;
          const ik = ek(kk);
          this.prefetchedFiles.set(kk, ik), ik.catch((() => {
            this.prefetchedFiles.delete(kk)
          }))
        };
        fk(ik, (kk => this.modelFile(kk))), fk(Dk, (kk => this.imageFile(kk)))
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
      buildModel(kk, ek) {
        return this.startModels(), this.models.then((ik => ik(kk, ek))).then((kk => this.unavailable ? new Promise((() => {})) : kk))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(kk) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Wk} the model workers didn't start: models won't draw in the previews`, kk))
      }
      called(kk) {
        return 0 !== kk && this.logError(kk, 0), kk
      }
      closePreview(kk) {
        this.previews.delete(kk.id), null !== this.module && kk.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(kk) {
        if (null !== this.module && this.module !== kk) throw new Error("a second renderer module on one page");
        return this.module = kk, null === this.host && (this.host = this.guarded((() => new kk.Zfk)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: kk
        } = this;
        null !== kk && this.outsideCall("the game's start or end", (() => {
          kk.Sbk(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: kk,
          shaderPackArgs: ek
        } = this;
        null !== kk && null !== ek && this.outsideCall("the shader pack's hand-over", (() => {
          kk.Oik(...ek) || console.warn(`${Wk} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(kk, ek) {
        try {
          this.hostCall(void 0, ek)
        } catch (ik) {
          this.stop(), console.warn(`${Wk} the previews stopped: ${kk} threw`, ik)
        }
      }
      async loadAnimations(kk) {
        const ek = bk(null),
          ik = this.module;
        try {
          ek.wasm = null === ik ? ek.wasm : this.hostCall(ek.wasm, (() => ik.IK()))
        } catch {}
        let Dk, fk;
        try {
          Dk = await this.fetchAnimationTable()
        } catch (Sk) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Sk
          }, ek)
        }
        if (!this.settleIfTrapped()) {
          try {
            fk = kk.ibk(Dk)
          } catch (Sk) {
            if (this.stopIfTrapped(Sk)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Sk
            }, ek)
          }
          fk || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, ek)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const kk = this.host;
        return null !== kk && this.guarded((() => kk.kbk())) ? kk : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var kk;
        const ek = null !== (kk = this.module) && void 0 !== kk ? kk : await this.loadModule();
        if (null === ek) return null;
        const ik = this.hostOf(ek),
          Dk = () => this.guarded((() => ik.kbk()));
        if (Dk()) return ik;
        if (null !== (0, qk.L)() || (0, qk.b)()) return null;
        const fk = this.deps.createCanvas();
        fk.width = 1, fk.height = 1;
        const Sk = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const bk = (0, Qk.g)().sampleCount;
        let rk;
        try {
          rk = await (0, Ck.u)(ek, "previewRenderer", fk, bk, Ek.e, Sk)
        } catch (Pk) {
          throw Pk instanceof Vk.d ? this.stopForTrap(Pk) : (0, Ck.r)(Pk) && await this.deps.onRenderFailed("start_failed", Pk), Pk
        }
        return this.guarded((() => ik.hSk(rk))) ? ((0, qk.v)(performance.now()), this.samples = bk, this.pageCanvas = fk, (0, vk.f)(this.registryOf(ek)), ik) : Dk() ? ik : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(kk, ek) {
        for (const bk of this.previews.values()) bk.feed();
        if (this.stopped) return;
        const ik = this.deps.now(),
          Dk = kk.frame(ek);
        this.costs.push(this.deps.now() - ik), this.costs.length > 120 && this.costs.shift();
        const fk = 0 !== (256 & Dk),
          Sk = 255 & Dk;
        for (const bk of this.previews.values()) {
          if (this.stopped) return;
          bk.collect(fk)
        }
        if (!this.stopped) {
          if (0 !== (512 & Dk) && this.deps.onDrew(), fk) {
            const ek = kk.mbk();
            for (let kk = 0; kk + 1 < ek.length; kk += 2) ek[kk] === Lk.P.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(ek[kk], ek[kk + 1])
          }
          if (Sk !== Tk) {
            if (Sk === Zk) return this.stop(), void this.deps.onFatal(kk.GSk(), kk.NSk());
            if (Sk === Ok) return this.stop(), void console.warn(`${Wk} the previews stopped: the page's renderer went with its session`);
            (0, pk.c)(ek), this.startFrames()
          } else {
            const ek = kk.RSk();
            this.stop();
            const ik = ek[2] === Lk.kd.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(ik, void 0, ek[1], ek[2] === Lk.kd.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Vk.h)(this.module) || "failed" === (0, Uk.D)())
      }
      hostCall(kk, ek) {
        if (this.settleIfTrapped()) return kk;
        try {
          return ek()
        } catch (ik) {
          if (this.stopIfTrapped(ik)) return kk;
          throw ik
        }
      }
      guarded(kk) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return kk()
        } catch (ek) {
          throw this.stopIfTrapped(ek), ek
        }
      }
      registryOf(kk) {
        return {
          Iik: (ek, ik) => {
            this.hostCall(void 0, (() => {
              kk.Iik(ek, ik)
            }))
          },
          zik: ek => {
            this.hostCall(void 0, (() => {
              kk.zik(ek)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, vk.f)(null)), !0)
      }
      stopIfTrapped(kk) {
        return !(null === this.module || !(0, Vk.j)(this.module, kk)) && (this.stopForTrap(kk), !0)
      }
      stopForTrap(kk) {
        this.stop(), (0, vk.f)(null), (0, ak.g)("previews", kk)
      }
      stop() {
        this.stopped = !0;
        for (const kk of this.previews.values()) kk.abandon()
      }
      logError(kk, ek) {
        const ik = `${kk}:${ek}`;
        this.loggedErrors.has(ik) || (this.loggedErrors.add(ik), console.warn(`${Wk} error ${kk} (detail ${ek})`))
      }
    }
    let be = null;

    function re() {
      return be ??= new Se(function() {
        const kk = (0, sk.o)(lk.clientSideServerUrls.staticUrl, {
          packUrl: kk => {
            var ek, ik;
            return null !== (ek = null === (ik = Fk.g.current) || void 0 === ik ? void 0 : ik.modelUrl(kk)) && void 0 !== ek ? ek : null
          }
        });
        return {
          loadModule: De,
          startModels: async kk => {
            const {
              pageModelPool: ek
            } = await ik.e(42).then((() => ik(50602))), {
              pool: Dk
            } = ek(kk);
            return (kk, ek) => Dk.build(kk, ek)
          },
          fetchAnimations: async () => rk(await (0, Dk.M)(ke())),
          playerFile: async () => (await (0, sk.n)()).PLAYER_FILE,
          onAnimationsFailed: (kk, ek) => {
            Pk("previewAnimations", ke(), kk, ek)
          },
          provideBuiltInAnimationPack: kk => {
            xk().provide(kk)
          },
          openExtras: qk.E,
          files: kk,
          images: (0, Fk.l)((0, Ak.j)(kk.url), (() => Fk.g.current)),
          pack: Fk.g,
          game: uk.c,
          fetchModel: kk => (0, sk.j)(kk),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: kk => requestAnimationFrame(kk),
          cancelFrame: kk => {
            cancelAnimationFrame(kk)
          },
          onRenderFailed: ee,
          onFatal: (kk, ek) => {
            console.error(`${Wk} the previews stopped: renderer error ${kk} (detail ${ek})`)
          },
          onDeviceLost: () => {
            (0, qk.H)() === zk.e.webgpu && yk.D.lost()
          },
          onDrew: () => {
            yk.D.drew()
          }
        }
      }()), be
    }
    var Pe = ik(585),
      me = ik(38226),
      Me = ik(3261);
    const Ke = {
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
    const xe = "[bloxd-previews]",
      ne = new Uint32Array(5);

    function Ue(kk) {
      return Pe.n.indexOf(kk)
    }
    const He = new WeakSet;

    function we(kk) {
      const ek = (0, me.i)(kk),
        ik = null === ek ? -1 : le(ek);
      return -1 !== ik ? ik : (He.has(kk) || (He.add(kk), console.warn(`${xe} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function le(kk) {
      var ek;
      return null !== (ek = Ke[kk]) && void 0 !== ek ? ek : -1
    }

    function pe(kk, ek) {
      const {
        canvas: ik
      } = ek;
      ik.style.width = "100%", ik.style.height = "100%", ik.style.display = "block", kk.appendChild(ik)
    }

    function ye(kk) {
      const ek = kk.getBoundingClientRect();
      return [ek.width, ek.height]
    }
    class Ye {
      constructor(kk, ek) {
        this.preview = kk, this.showView = ek
      }
      show(kk) {
        this.showView(this.preview, kk)
      }
      resize(kk, ek) {
        this.preview.resize(kk, ek)
      }
      close() {
        this.preview.close()
      }
    }
    class Le {
      constructor(kk) {
        this.preview = kk, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(kk) {
          const {
            canvas: ek
          } = kk;
          let ik = null;
          const Dk = kk => {
              var Dk;
              ik = {
                pointer: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY
              }, null === (Dk = ek.setPointerCapture) || void 0 === Dk || Dk.call(ek, kk.pointerId)
            },
            fk = ek => {
              var Dk;
              const fk = kk.orbit;
              if ((null === (Dk = ik) || void 0 === Dk ? void 0 : Dk.pointer) !== ek.pointerId || null === fk) return;
              const Sk = ek.clientX - ik.x,
                bk = ek.clientY - ik.y;
              ik = {
                ...ik,
                x: ek.clientX,
                y: ek.clientY
              }, kk.setOrbit({
                alpha: fk.alpha - .01 * Sk,
                beta: Math.min(Math.PI - .01, Math.max(.01, fk.beta - .01 * bk)),
                radius: fk.radius
              })
            },
            Sk = kk => {
              var ek;
              (null === (ek = ik) || void 0 === ek ? void 0 : ek.pointer) === kk.pointerId && (ik = null)
            },
            bk = ek => {
              const ik = kk.orbit;
              if (null === ik) return;
              ek.preventDefault();
              const Dk = ek.deltaY * (ek.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : ek.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                fk = Math.min(100, Math.max(5, ik.radius + .08 * Dk));
              kk.setOrbit({
                ...ik,
                radius: fk
              })
            };
          return ek.style.touchAction = "none", ek.addEventListener("pointerdown", Dk), ek.addEventListener("pointermove", fk), ek.addEventListener("pointerup", Sk), ek.addEventListener("pointercancel", Sk), ek.addEventListener("wheel", bk, {
            passive: !1
          }), () => {
            ek.removeEventListener("pointerdown", Dk), ek.removeEventListener("pointermove", fk), ek.removeEventListener("pointerup", Sk), ek.removeEventListener("pointercancel", Sk), ek.removeEventListener("wheel", bk)
          }
        }(kk), this.dev = {
          canvas: () => kk.canvas,
          isolateHead: () => {
            console.warn(`${xe} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = kk.untilSettled().then((() => {
          if (kk.isStopped) throw new Error(`${xe} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(kk, ek) {
        this.cosmetics[kk] = ek, this.apply()
      }
      playEmote(kk) {
        null === kk || kk !== this.emote ? (this.emote = kk, this.apply()) : this.preview.replay()
      }
      untilDrawn(kk) {
        return this.preview.untilSettled()
      }
      setOrbit(kk) {
        let {
          yaw: ek,
          pitch: ik,
          radius: Dk
        } = kk;
        const fk = this.preview.orbit;
        null !== fk && this.preview.setOrbit({
          alpha: ek,
          beta: ik,
          radius: null !== Dk && void 0 !== Dk ? Dk : fk.radius
        })
      }
      resetCamera() {}
      resize(kk, ek) {
        this.preview.resize(kk, ek)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var kk;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), ne, null === (kk = this.emote) ? -1 : le(kk))
      }
    }

    function Ce(kk, ek) {
      let {
        mobType: ik,
        variation: Dk,
        animation: fk
      } = ek;
      kk.setMob(Ue(ik), null !== Dk && void 0 !== Dk ? Dk : "", 1, we(fk))
    }

    function Ae(kk, ek) {
      let {
        mobType: ik,
        variation: Dk,
        metaInfo: fk,
        tamed: Sk
      } = ek;
      kk.setPet(Ue(ik), Dk, fk, Sk)
    }
    const je = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class se {
      constructor(kk, ek, ik, Dk) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, kk(ik.width, Dk[1], Dk).then((kk => {
          if (this.closed) return void kk.close();
          const {
            style: ik
          } = kk.canvas;
          ik.position = "absolute", ik.top = "0", ik.visibility = "hidden", pe(ek, kk), this.preview = kk, this.apply()
        })).catch((kk => {
          console.error(`${xe} couldn't open a lineup figure`, kk)
        }))
      }
      update(kk, ek, ik, Dk, fk) {
        this.figure = kk, this.shown = ek, this.order = ik, this.span = Dk, this.lineup = fk, this.apply()
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.preview) || void 0 === kk || kk.close(), this.preview = null
      }
      apply() {
        const {
          preview: kk,
          figure: ek,
          lineup: ik
        } = this;
        if (null === kk || null === ek) return;
        if (this.given !== ek) {
          var Dk;
          this.given = ek, this.loaded = !1;
          const ik = null === ek.JY ? 0 : null !== (Dk = (0, Me.e)(ek.JY)) && void 0 !== Dk ? Dk : 0;
          kk.setFigure(function(kk) {
            return JSON.stringify(Object.fromEntries(kk.cosmetics))
          }(ek), ik, we(ek.animation), ek.size), kk.untilSettled().then((() => {
            this.given === ek && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: fk,
          width: Sk
        } = this.span;
        kk.resize(Sk, ik[1], ik);
        const {
          style: bk
        } = kk.canvas;
        bk.left = `${fk}px`, bk.width = `${Sk}px`, bk.zIndex = this.order, bk.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class de {
      constructor(kk, ek) {
        this.open = ek, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = ye(kk), this.layer = document.createElement("div");
        const {
          style: ik
        } = this.layer;
        ik.position = "relative", ik.isolation = "isolate", ik.overflow = "hidden", ik.width = "100%", ik.height = "100%", ik.pointerEvents = "none", kk.appendChild(this.layer)
      }
      show(kk) {
        this.view = kk, this.place()
      }
      resize(kk, ek) {
        this.size = [kk, ek], this.place()
      }
      close() {
        for (const kk of this.figures) kk.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: kk,
          shown: ek
        } = this.view;
        for (const Dk of this.figures.splice(kk.length)) Dk.close();
        const {
          size: ik
        } = this;
        kk.forEach(((Dk, fk) => {
          var Sk;
          const bk = function(kk, ek, ik, Dk) {
            let [fk, Sk] = Dk;
            const bk = (kk + .5) * fk / ek,
              rk = Math.min(Math.max(fk / ek, 2 * ik * Sk), 2 * Math.max(bk, fk - bk));
            return {
              left: bk - rk / 2,
              width: rk
            }
          }(fk, kk.length, function(kk) {
            let {
              animation: ek,
              size: ik
            } = kk;
            const {
              aimed: Dk,
              ready: fk
            } = je;
            return (we(ek) === Ke.gunAimed ? Dk : fk) * ik
          }(Dk), ik);
          this.figures[fk] ??= new se(this.open, this.layer, bk, ik), this.figures[fk].update(Dk, null !== (Sk = ek[fk]) && void 0 !== Sk && Sk, function(kk, ek) {
            return String(Math.round(1e3 * kk) + ek)
          }(Dk.size, fk), bk, ik)
        }))
      }
    }
    const Ve = {
      player: Bk,
      store: ck
    };
    class Fe {
      constructor(kk) {
        this.page = kk
      }
      async openMob(kk) {
        return new Ye(await this.open(kk, Xk), Ce)
      }
      async openPet(kk) {
        return new Ye(await this.open(kk, Xk), Ae)
      }
      openMobLineup(kk) {
        return new de(kk, ((kk, ek, ik) => this.page.openPreview(Xk, kk, ek, ik)))
      }
      async openCharacter(kk, ek) {
        return new Le(await this.open(kk, Ve[ek]))
      }
      async open(kk, ek) {
        const [ik, Dk] = ye(kk), fk = await this.page.openPreview(ek, ik, Dk);
        return pe(kk, fk), fk
      }
    }
  },
  36329: (kk, ek, ik) => {
    ik.d(ek, {
      A: () => Uk,
      D: () => Hk,
      G: () => lk,
      d: () => Dk,
      g: () => fk,
      i: () => xk,
      l: () => wk,
      n: () => Mk,
      p: () => pk,
      s: () => Pk,
      w: () => mk,
      z: () => nk
    });
    const Dk = [{
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

    function fk(kk, ek) {
      const {
        numLines: ik,
        charsPerLine: fk
      } = Dk[ek];
      return yk(kk, ik, fk, !1)
    }
    const Sk = 7 / 8,
      bk = .25,
      rk = 8;

    function Pk(kk, ek) {
      return {
        width: Math.min(kk, rk) - 2 * bk,
        height: Math.min(ek, rk) - 2 * bk
      }
    }

    function mk(kk, ek, ik) {
      const fk = Pk(kk, ek),
        {
          numLines: bk,
          charsPerLine: rk
        } = Dk[ik];
      return {
        numLines: Math.max(1, Math.floor(bk / Sk * fk.height)),
        charsPerLine: Math.max(1, Math.floor(rk * fk.width))
      }
    }

    function Mk(kk, ek, ik, Dk) {
      const {
        numLines: fk,
        charsPerLine: Sk
      } = mk(ik, Dk, ek);
      return yk(kk, fk, Sk, !1)
    }
    const Kk = 32e3;

    function xk(kk) {
      return kk.slice(0, Kk)
    }
    const nk = 512e3,
      Uk = 64,
      Hk = nk;

    function wk(kk, ek) {
      const ik = Math.max(0, Hk - ek),
        Dk = Math.min(nk, ik);
      return kk.slice(0, Dk)
    }
    const lk = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      cb: {
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

    function pk(kk, ek) {
      const {
        numLines: ik,
        charsPerLine: Dk
      } = lk[ek];
      return yk(kk, ik, Dk, !1)
    }

    function yk(kk, ek, ik, Dk, fk) {
      (fk || Dk) && (kk = kk.slice(0, null !== fk && void 0 !== fk ? fk : ek * ik));
      const Sk = kk.split("\n");
      if (Sk.length > ek && Sk.splice(ek, Sk.length - ek), !Dk)
        for (let bk = 0; bk < Sk.length; bk++) {
          const kk = Sk[bk];
          kk.length > ik && (Sk[bk] = kk.substring(0, ik), Sk.length < ek && Sk.splice(bk + 1, 0, kk.substring(ik)))
        }
      return Sk.join("\n")
    }
  },
  50521: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50530: (kk, ek, ik) => {
    kk.exports = ik.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);