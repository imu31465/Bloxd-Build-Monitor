export const id = 59;
export const ids = [59];
export const modules = {
  38621: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      f: () => ik
    });
    const Xk = new WeakMap;

    function Tk(kk, Fk) {
      return Xk.set(kk, Fk), kk
    }

    function ik(kk) {
      var Fk;
      return null !== (Fk = Xk.get(kk)) && void 0 !== Fk ? Fk : null
    }
  },
  38649: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(1217);

    function Tk(kk) {
      const Fk = /(\d*\.?\d+)px/.exec(kk);
      return Fk ? Number(Fk[1]) : null
    }

    function ik(kk) {
      return kk.split(/[\s,]+/).pop()
    }
    let yk = !1;
    const lk = {
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
      drawText: function(kk, Fk, Xk, lk, ak, qk) {
        if (ak <= 0 || qk <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Lk,
          fontVariant: tk,
          fontWeight: Zk,
          fontSize: jk,
          font: ek
        } = this, wk = [Lk, tk, Zk, `${jk}px`, ek].filter(Boolean).join(" "), Hk = [
          [Zk, `${jk}px`, ik(ek)].filter(Boolean).join(" "), `${jk}px sans-serif`
        ], Jk = kk.font, xk = function(kk, Fk, Ik) {
          for (const Xk of Fk) {
            kk.font = Xk;
            const Fk = Tk(kk.font),
              yk = ik(Xk);
            if (null !== Fk && Math.abs(Fk - Ik) <= .5 && kk.font.toLowerCase().includes(yk.toLowerCase())) return Xk
          }
          return null
        }(kk, [wk, ...Hk], jk);
        xk !== wk && function(kk, Fk, Xk) {
          yk || (yk = !0, Promise.resolve().then((() => Ik(1076))).then((Ik => {
            let {
              ow: Tk
            } = Ik;
            Tk(new Error("A canvas didn't take canvasTxt's font"), {
              font: kk,
              Gj: Fk,
              drawnWith: null !== Xk && void 0 !== Xk ? Xk : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(wk, Jk, xk);
        const Pk = Tk(kk.font);
        if (null === xk && null !== Pk && Pk > 0) {
          const Ik = jk / Pk;
          kk.save();
          try {
            return kk.scale(Ik, Ik), {
              height: this.drawLines(kk, Fk, Xk / Ik, lk / Ik, ak / Ik, qk / Ik, Pk).height * Ik
            }
          } finally {
            kk.restore()
          }
        }
        return this.drawLines(kk, Fk, Xk, lk, ak, qk, jk)
      },
      drawLines: function(kk, Fk, Ik, Tk, ik, yk, lk) {
        const ak = Ik + ik,
          qk = Tk + yk;
        let Lk, tk = Tk + yk / 2 + lk / 2;
        "right" === this.align ? (Lk = ak, kk.textAlign = "right") : "left" === this.align ? (Lk = Ik, kk.textAlign = "left") : (Lk = Ik + ik / 2, kk.textAlign = "center");
        for (const Xk of Fk) {
          kk.measureText(Xk).width >= ik && (Fk = Fk.replace(Xk, ""))
        }
        Fk = (0, Xk.S)(Fk);
        const Zk = [],
          jk = Fk.split("\n"),
          ek = this.justify ? kk.measureText("\u200a").width : 0;
        jk.forEach((Fk => {
          let Ik = kk.measureText(Fk).width;
          if (Ik <= ik) Zk.push(Fk);
          else {
            let Xk = Fk;
            const Tk = ik;
            let yk, lk, ak;
            for (Ik = kk.measureText(Xk).width; Ik > Tk;) {
              for (yk = 0, lk = 0, ak = ""; lk < Tk;) yk++, ak = Xk.substr(0, yk), lk = kk.measureText(ak).width;
              yk--, ak = ak.substr(0, yk);
              const Fk = yk;
              if (" " !== Xk.substr(yk, 1)) {
                for (;
                  " " !== Xk.substr(yk, 1) && 0 !== yk;) yk--;
                0 === yk && (yk = Fk), ak = Xk.substr(0, yk)
              }
              ak = this.justify ? this.justifyLine(kk, ak, ek, "\u200a", ik) : ak, Xk = Xk.substr(yk), Ik = kk.measureText(Xk).width, Zk.push(ak)
            }
            Ik > 0 && Zk.push(Xk)
          }
        }));
        const wk = this.lineHeight ? this.lineHeight : this.getTextHeight(kk, Fk),
          Hk = wk * (Zk.length - 1),
          Jk = Hk / 2;
        let xk = Tk;
        "top" === this.vAlign ? tk = Tk + lk : "bottom" === this.vAlign ? (tk = qk - Hk, xk = qk) : (xk = Tk + yk / 2, tk -= Jk), Zk.forEach((Fk => {
          Fk = Fk.trim(), kk.fillText(Fk, Lk, tk), tk += wk
        })), this.debug && (kk.lineWidth = 3, kk.strokeStyle = "#00909e", kk.strokeRect(Ik, Tk, ik, yk), kk.lineWidth = 2, kk.strokeStyle = "#f6d743", kk.beginPath(), kk.moveTo(Lk, Tk), kk.lineTo(Lk, qk), kk.stroke(), kk.strokeStyle = "#ff6363", kk.beginPath(), kk.moveTo(Ik, xk), kk.lineTo(ak, xk), kk.stroke());
        return {
          height: Hk + wk
        }
      },
      getTextHeight: function(kk, Fk) {
        const Ik = kk.textBaseline;
        kk.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Xk
        } = kk.measureText(Fk);
        return kk.textBaseline = Ik, Xk
      },
      justifyLine: function(kk, Fk, Ik, Xk, Tk) {
        const ik = Fk.trim(),
          yk = kk.measureText(ik).width,
          lk = ik.split(/\s+/).length - 1,
          ak = Math.floor((Tk - yk) / Ik);
        if (lk <= 0 || ak <= 0) return ik;
        const qk = Math.floor(ak / lk);
        let Lk = ak - lk * qk,
          tk = [];
        for (let Zk = 0; Zk < qk; Zk++) tk.push(Xk);
        tk = tk.join("");
        return ik.replace(/\s+/g, (kk => {
          const Fk = Lk > 0 ? tk + Xk : tk;
          return Lk--, kk + Fk
        }))
      }
    }
  },
  38656: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => wk,
      d: () => ek,
      h: () => Zk,
      k: () => Lk,
      n: () => tk
    });
    var Xk = Ik(4210),
      Tk = Ik(337);
    const ik = 1024,
      yk = 1536,
      lk = 2 * Xk.i + 1,
      ak = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      qk = 1.5;

    function Lk(kk, Fk, Ik) {
      if ("string" !== typeof kk) return Fk;
      try {
        const Ik = JSON.parse(kk);
        return Ik && "object" === typeof Ik ? Ik : Fk
      } catch (Xk) {
        return void 0 !== Ik && console.error(`Couldn't parse ${Ik}`, Xk), Fk
      }
    }

    function tk(kk) {
      return Lk(kk, null, "a leaderboard's rows")
    }

    function Zk(kk, Fk) {
      var Ik, Xk;
      return null !== Fk && void 0 !== Fk ? Fk : {
        status: null !== (Ik = kk.status) && void 0 !== Ik ? Ik : "loading",
        entries: null !== (Xk = kk.entries) && void 0 !== Xk ? Xk : []
      }
    }

    function jk(kk, Fk) {
      return "number" === typeof kk && Number.isFinite(kk) && kk > 0 ? kk : Fk
    }

    function ek(kk, Fk) {
      const Ik = jk(kk.size, 1);
      let Xk = jk(kk.width, jk(2.5 * Ik, 2.5)),
        Tk = jk(kk.height, jk(3.75 * Ik, 3.75));
      Number.isFinite(ik * Tk / Xk) && Number.isFinite(yk * Xk / Tk) || (Xk = 2.5, Tk = 3.75);
      const lk = Tk / Xk,
        ak = Math.max(1, Math.min(ik, Fk / lk));
      return {
        width: Xk,
        height: Tk,
        layoutWidth: Math.max(ik, yk / lk),
        layoutHeight: Math.max(yk, ik * lk),
        pixelWidth: Math.round(ak),
        pixelHeight: Math.round(Math.max(1, Math.min(Fk, ak * lk)))
      }
    }

    function wk(kk, Fk, Ik, yk, Lk, tk) {
      kk.setTransform(1, 0, 0, 1, 0, 0), kk.fillStyle = Tk.J.defaultNameTagBackground, kk.fillRect(0, 0, Fk, Ik), kk.scale(Fk / yk.layoutWidth, Ik / yk.layoutHeight), kk.translate((yk.layoutWidth - ik) / 2, 0),
        function(kk, Fk, Ik, ik) {
          var yk, Lk, tk, Zk;
          const {
            top: jk,
            around: ek,
            showPlayerText: wk,
            localPlayerDbId: xk
          } = Ik, {
            whiteUiText: Pk,
            grayUiText: Kk,
            yellowUiText: Qk
          } = Tk.J;
          kk.textBaseline = "middle";
          const sk = function(Fk, Ik, Xk, Tk, ik, yk) {
              let lk = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              kk.font = `bold ${Tk}px 'Jetbrains Mono', monospace`, kk.fillStyle = ik, kk.textAlign = lk;
              let ak = Fk.replace(/[\r\n\t]/g, " ");
              if (kk.measureText(ak).width > yk) {
                for (; ak.length > 0 && kk.measureText(`${ak}\u2026`).width > yk;) ak = ak.slice(0, -1);
                ak += "\u2026"
              }
              kk.fillText(ak, Ik, Xk)
            },
            Vk = Fk => {
              kk.fillStyle = Pk, kk.globalAlpha = .15, kk.fillRect(24, Fk, 976, 2), kk.globalAlpha = 1
            },
            zk = null === xk ? null : (0, Tk.yc)(xk),
            Sk = kk => null !== zk && kk.playerHash === zk,
            vk = Hk(jk.entries, Xk.k),
            Ek = "ready" === jk.status && vk.length > 0,
            Ok = null === ek ? [] : Hk(ek.entries, lk),
            nk = vk.some(Sk),
            Gk = null === ek ? null : function(kk) {
              const Fk = kk;
              if (!Fk || !Number.isFinite(Fk.rank) || !Number.isFinite(Fk.tied) || !Number.isFinite(Fk.total)) return null;
              return Fk
            }(ek.standing),
            pk = Ok.find(Sk),
            uk = vk.find(Sk),
            bk = null === Gk || void 0 === pk ? null : {
              value: pk.value,
              rank: Gk.rank
            },
            Rk = Jk(vk, void 0 === uk || uk.value === (null === bk || void 0 === bk ? void 0 : bk.value) ? bk : null),
            Uk = Jk(Ok, bk),
            Ck = (kk, Fk) => {
              const Ik = kk.findIndex(Sk);
              return Ik >= 0 ? Fk[Ik] : null
            },
            Nk = null !== (yk = null !== (Lk = null === Gk || void 0 === Gk ? void 0 : Gk.rank) && void 0 !== Lk ? Lk : Ck(Ok, Uk)) && void 0 !== yk ? yk : Ck(vk, Rk);
          kk.font = "bold 34px 'Jetbrains Mono', monospace";
          const ck = [...Ek ? Rk : [], ...nk ? [] : Uk],
            Wk = Math.min(280, Math.max(0, ...ck.map((Fk => kk.measureText(ak.format(Fk)).width)))),
            fk = Wk <= 80,
            Bk = fk ? 80 : 32 + Wk,
            dk = fk ? 148 : Bk + 28,
            Yk = 660 - dk;
          sk(`TOP ${Xk.k}  /  ALL TIME`, 24, 52, 28, Kk, 976), sk(wk ? String(null !== (tk = Fk.title) && void 0 !== tk ? tk : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Pk, 976), sk("RANK", 32, 174, 28, Kk, dk - 40), sk("PLAYER", dk, 174, 28, Kk, Yk), sk(wk ? String(null !== (Zk = Fk.scoreLabel) && void 0 !== Zk ? Zk : "Score").slice(0, 24) : "Score", 992, 174, 28, Kk, 304, "right"), Vk(202);
          const Ak = (ik - 232) / (Xk.k + qk + lk),
            gk = 208 + Xk.k * Ak,
            mk = gk + qk * Ak,
            hk = (Fk, Ik, Xk, Tk) => {
              const ik = Sk(Fk);
              kk.fillStyle = ik ? Qk : Pk, kk.globalAlpha = ik ? .15 : Tk ? .035 : 0, kk.fillRect(24, Xk - Ak / 2 + 1, 976, Ak - 2), kk.globalAlpha = 1;
              const yk = ik ? Qk : Pk;
              sk(ak.format(Ik), Bk, Xk, 34, yk, fk ? 80 : Wk, fk ? "center" : "right"), sk(wk ? String(Fk.name).slice(0, 64) : "Player", dk, Xk, 34, yk, Yk);
              const lk = ak.format(Fk.value);
              sk(kk.measureText(lk).width > 304 ? Fk.value.toExponential(6) : lk, 992, Xk, 34, yk, 304, "right")
            };
          if (Ek)
            for (const [Xk, Tk] of vk.entries()) hk(Tk, Rk[Xk], 208 + (Xk + .5) * Ak, Xk % 2 === 0);
          else {
            const kk = "error" === jk.status,
              Fk = kk ? "Couldn't load leaderboard" : "ready" === jk.status ? "No scores yet" : "Loading leaderboard\u2026",
              Ik = kk ? "Trying again shortly" : "ready" === jk.status ? "Be the first on the board!" : "Fetching the top players",
              Xk = (208 + gk) / 2;
            sk(Fk, 512, Xk - 28, 40, kk ? Tk.J.redUiText : Pk, 960, "center"), sk(Ik, 512, Xk + 27, 30, Kk, 960, "center")
          }
          const rk = gk + qk * Ak / 2;
          if (null === Nk) Vk(rk);
          else {
            const Fk = null === Gk ? 0 : Gk.tied - 1,
              Ik = `YOUR RANK #${ak.format(Nk)}${null===Gk?"":` of ${ak.format(Gk.total)}`}`;
            kk.font = "bold 36px 'Jetbrains Mono', monospace";
            const Xk = Math.max(20, Math.min(36, Math.floor(34560 / kk.measureText(Ik).width)));
            sk(Ik, 512, rk - (Fk > 0 ? 15 : 0), Xk, Qk, 960, "center"), Fk > 0 && sk(`Tied with ${ak.format(Fk)} other${1===Fk?"":"s"}`, 512, rk + 24, 24, Kk, 960, "center")
          }
          if (null === ek) return;
          const Dk = mk + lk * Ak / 2;
          if (nk) sk(`You're in the top ${Xk.k}!`, 512, Dk, 40, Qk, 960, "center");
          else if (0 === Ok.length) sk("You're not on this board yet", 512, Dk, 34, Kk, 960, "center");
          else
            for (const [Xk, Tk] of Ok.entries()) hk(Tk, Uk[Xk], mk + (Xk + .5) * Ak, Xk % 2 === 0)
        }(kk, Lk, tk, yk.layoutHeight)
    }

    function Hk(kk, Fk) {
      return Array.isArray(kk) ? kk.slice(0, Fk).filter((kk => kk && Number.isFinite(kk.rank) && Number.isFinite(kk.value))) : []
    }

    function Jk(kk, Fk) {
      const Ik = [];
      let Xk = !1;
      return kk.forEach(((Tk, ik) => {
        if (null !== Fk && Tk.value === Fk.value) return void Ik.push(Fk.rank);
        const yk = ik > 0 && Tk.value === kk[ik - 1].value;
        yk || (Xk = 0 === ik && 1 !== Tk.rank), Ik.push(yk && !Xk ? Ik[ik - 1] : Tk.rank)
      })), Ik
    }
  },
  38868: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Tk,
      g: () => ik
    });
    const Xk = 32;

    function Tk(kk) {
      return Array.from(kk).length
    }

    function ik(kk) {
      const Fk = [""];
      let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Tk = "";
      const ik = () => {
        Fk.push(""), Ik = 0, Tk = ""
      };
      for (const yk of kk.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(yk)) ik();
        else if (/^\s+$/.test(yk)) Tk += yk;
      else if (yk.length > 0) {
        const kk = Array.from(yk);
        Ik > 0 && Ik + Tk.length + kk.length > Xk && ik(), Fk[Fk.length - 1] += Tk, Ik += Tk.length, Tk = "";
        for (const Tk of kk) Ik >= Xk && ik(), Fk[Fk.length - 1] += Tk, Ik++
      }
      return Fk[Fk.length - 1] += Tk, Fk
    }
  },
  50939: (kk, Fk, Ik) => {
    Ik.r(Fk), Ik.d(Fk, {
      WasmPreviewHost: () => vF,
      pageBuiltInAnimationPack: () => Zk,
      pagePreviews: () => yF,
      previewModule: () => rk
    });
    var Xk = Ik(2803),
      Tk = Ik(633);
    const ik = "[bloxd-wasm-client]";

    function yk(kk) {
      const Fk = {
        wasm: "unknown",
        client: String(Tk.b)
      };
      try {
        var Ik;
        Fk.wasm = null !== (Ik = null === kk || void 0 === kk ? void 0 : kk.Qt()) && void 0 !== Ik ? Ik : Fk.wasm
      } catch {}
      return Fk
    }
    async function lk(kk) {
      if (kk.length < 2 || 31 !== kk[0] || 139 !== kk[1]) return kk;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Fk
        } = await Promise.resolve().then((() => Ik(2758)));
        return Fk(kk)
      }
      const Fk = new Blob([kk]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Fk).arrayBuffer())
    }

    function ak(kk, Fk, Xk, Tk) {
      Promise.resolve().then((() => Ik(40757))).then((Ik => {
        let {
          reportDataLoadFailure: ik
        } = Ik;
        ik(kk, Fk, Xk, Tk)
      }), (Fk => {
        console.warn(`${ik} ${kk} didn't load, and the report couldn't be sent`, Xk.error, Fk)
      }))
    }
    const qk = [3e4, 12e4, 3e5];
    class Lk {
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
        const Fk = yk(kk),
          Ik = await async function(kk, Fk) {
            let Ik;
            try {
              Ik = await kk()
            } catch (Xk) {
              return {
                stage: "fetch",
                error: Xk
              }
            }
            try {
              return Fk(Ik) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Xk) {
              return {
                stage: "decode",
                error: Xk
              }
            }
          }((() => this.deps.fetch()), (Fk => {
            const Ik = kk.Zik(Fk);
            return Ik && this.resolveSet(Fk), Ik
          }));
        if (null !== Ik) {
          if ("fetch" === Ik.stage) {
            this.loading = null;
            const Fk = qk[this.retries++];
            void 0 !== Fk && this.deps.later((() => {
              this.provide(kk)
            }), Fk)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(Ik, Fk))
        }
      }
    }
    let tk = null;

    function Zk() {
      return tk ??= new Lk({
        fetch: async () => lk(await (0, Xk.K)(jk(), {
          priority: "low"
        })),
        onFailed: (kk, Fk) => {
          ak("builtInAnimations", jk(), kk, Fk)
        },
        later: (kk, Fk) => {
          setTimeout(kk, Fk)
        }
      }), tk
    }

    function jk() {
      return Ik(50946)
    }
    var ek = Ik(2801),
      wk = Ik(1194),
      Hk = Ik(314),
      Jk = Ik(309),
      xk = Ik(646),
      Pk = Ik(4797),
      Kk = Ik(40726),
      Qk = Ik(40946),
      sk = (Ik(40779), Ik(40796)),
      Vk = Ik(40799),
      zk = Ik(40808),
      Sk = Ik(40738),
      vk = Ik(40966),
      Ek = Ik(40971),
      Ok = Ik(40721),
      nk = Ik(40991),
      Gk = Ik(40845),
      pk = Ik(40834),
      uk = Ik(40896),
      bk = Ik(40957),
      Rk = Ik(42590),
      Uk = Ik(36249),
      Ck = Ik(3652);
    const Nk = "[bloxd-previews]",
      ck = 4e5,
      Wk = 0,
      fk = 1,
      Bk = 2,
      dk = 1,
      Yk = 2,
      Ak = 3,
      gk = 0,
      mk = 1,
      hk = 2;

    function rk(kk) {
      const Fk = kk,
        Ik = (0, Kk.B)(kk),
        Xk = (0, Kk.g)(kk);
      return null !== Ik && null !== Xk && "function" === typeof Fk.aik && "function" === typeof Fk.qik && "function" === typeof Fk.Lik ? Fk : null
    }

    function Dk(kk, Fk, Ik) {
      let [Xk, Tk] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [kk, Fk], ik = Math.min(Number.isFinite(Ik) && Ik > 0 ? Ik : 1, 2);
      const yk = Math.max(0, Xk, kk) * Math.max(0, Tk, Fk) * ik * ik;
      return yk > ck && (ik *= Math.sqrt(ck / yk)), [Math.max(1, Math.floor(Math.max(0, kk) * ik)), Math.max(1, Math.floor(Math.max(0, Fk) * ik))]
    }

    function Mk() {
      return Ik(50955)
    }
    async function kF(kk, Fk, Xk) {
      let Tk = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      "lost" === kk && (0, Ok.z)();
      const ik = await (0, Ok.Q)();
      if (null === ik || (0, Kk.h)(ik) || (0, Ok.e)()) return;
      const lk = "webgpu" === ik.backend;
      if (!lk && "lost" !== kk) return;
      const ak = lk && (0, Jk.p)(ik.adapter, null !== Xk && void 0 !== Xk ? Xk : null, "lost" === kk, Tk),
        qk = lk ? (0, Kk.M)(kk) : null;
      if (null === qk) {
        lk || (0, xk.s)(), (0, Ok.r)();
        try {
          await async function(kk, Fk, Xk, Tk, ik) {
            let {
              restoreLost: lk,
              adapterRemembered: ak
            } = ik;
            const qk = (0, ek.K)(),
              {
                flushCrashReports: Lk,
                reportRenderReload: tk
              } = await Promise.resolve().then((() => Ik(40757)));
            tk(kk.backend, Tk, yk(qk ? (0, ek.y)() : null), {
              cause: Fk,
              restoreLost: lk,
              adapterRemembered: ak,
              ...FF(kk, Fk, Xk)
            }), await Lk(Gk.c)
          }(ik, kk, Fk, null !== Xk && void 0 !== Xk ? Xk : "start_failed" === kk ? 0 : 1, {
            restoreLost: Tk,
            adapterRemembered: ak
          })
        } catch (tk) {
          console.warn(`${Nk} ${ik.backend} failed at home (${kk}), and its report couldn't be sent`, tk)
        }(0, Gk.i)()
      } else {
        var Lk;
        const Xk = FF(ik, kk, Fk),
          Tk = `WebGPU failed at home (${kk}${void 0===Xk.error?"":`: ${Xk.error instanceof Error?Xk.error.message:(0,Uk.j)(Xk.error)}`}) and ${qk}`;
        console.warn(`${Nk} ${Tk}: the previews stop`, null !== (Lk = Xk.error) && void 0 !== Lk ? Lk : ""), (0, Ok.v)(Tk);
        try {
          const {
            countRenderLost: Fk
          } = await Promise.resolve().then((() => Ik(40757)));
          Fk(kk, Xk.error, Xk.context)
        } catch (Zk) {
          console.warn(`${Nk} WebGPU failed at home (${kk}), and its count couldn't be sent`, Zk)
        }
      }
    }

    function FF(kk, Fk, Ik) {
      var Xk;
      let {
        adapter: Tk
      } = kk;
      const ik = (0, ek.K)();
      return {
        error: "lost" === Fk && null !== (Xk = (0, Kk.N)(ik ? (0, Kk.B)((0, ek.y)()) : null)) && void 0 !== Xk ? Xk : Ik,
        context: {
          adapter: Tk,
          boundAtMs: "start_failed" === Fk ? null : (0, Ok.O)(),
          indirectHangs: (0, Ok.C)(),
          restoresSkipped: (0, Ok.P)()
        }
      }
    }
    async function IF() {
      if (!(0, ek.K)()) {
        const kk = await (0, Ok.Q)();
        if (null === kk || (0, Kk.h)(kk)) return null;
        if (await (0, nk.b)(await kk.load()), !(0, ek.K)()) return null
      }
      return rk((0, ek.y)())
    }
    class XF {
      constructor(kk, Fk, Ik, Xk, Tk, ik) {
        this.page = kk, this.host = Fk, this.id = Ik, this.canvas = Xk, this.size = Tk, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const yk = {
            ...ik.images,
            glbUrl: kk => {
              var Fk;
              return null !== (Fk = this.models.drawnUrl(kk)) && void 0 !== Fk ? Fk : ik.images.glbUrl(kk)
            }
          },
          lk = Fk => kk.modelFile(Fk);
        this.images = new Qk.g(yk, (kk => {
          console.warn(`${Nk} image ${kk.key.kind}:${kk.key.index}:${kk.key.word} failed`, kk.error)
        }), {
          fetchFile: lk,
          fetchImage: Fk => kk.imageFile(Fk)
        }), kk.startModels(), this.models = new sk.h(ik.files, ((Fk, Ik) => kk.buildModel(Fk, Ik)), (kk => {
          console.warn(`${Nk} model file ${kk.file} (${kk.url}) failed`, kk.error)
        }), {
          fetchFile: lk,
          onWritten: (kk, Fk) => {
            this.images.glbWritten(kk, Fk)
          },
          onTaken: (kk, Fk) => {
            this.images.glbTaken(kk, Fk)
          }
        }), this.write = (kk, Fk, Ik) => {
          if (this.closed) return !0;
          if (kk === sk.d) {
            const kk = new DataView(Ik.buffer, Ik.byteOffset, zk.b),
              Xk = kk.getUint32(0, !0),
              Tk = kk.getUint32(zk.f, !0),
              ik = this.page.hostCall(hk, (() => this.host.xyk(this.id, Xk, Fk, Ik.subarray(zk.b))));
            return this.outcomes.push([Tk, ik]), !0
          }
          return kk === Qk.c && (this.page.hostCall(void 0, (() => {
            this.host.Kyk(this.id, Ik)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(kk, Fk, Ik) {
        if (this.closed) return;
        const [Xk, Tk] = Dk(kk, Fk, this.page.dpr(), Ik);
        Xk === this.size[0] && Tk === this.size[1] || (this.size = [Xk, Tk], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Xk, Tk)
        })))
      }
      setMob(kk, Fk, Ik, Xk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Syk(this.id, kk, Fk, Ik, Xk))))
      }
      setPet(kk, Fk, Ik, Xk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.vyk(this.id, kk, Fk, Ik, Xk))))
      }
      setPlayer(kk, Fk, Ik) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.syk(this.id, kk, Fk, Ik))))
      }
      setFigure(kk, Fk, Ik, Xk) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Vyk(this.id, kk, Fk, Ik, Xk))))
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
          beta: Ik,
          radius: Xk
        } = kk;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.oyk(this.id, Fk, Ik, Xk)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((kk => {
          this.settled.push(kk)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, vk.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [kk, Fk] of this.outcomes) {
          const Ik = Fk === gk ? [] : [Fk === mk ? kk : (kk | sk.g) >>> 0];
          this.models.taken(kk, Ik)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(kk) {
        let Fk = !1;
        if (kk) {
          const kk = this.host.Gyk(this.id);
          for (const Fk of kk) this.models.request(Fk);
          const Ik = this.host.nyk(this.id);
          Ik.length > 0 && this.images.onEvent(Ik), Fk = kk.length > 0 || Ik.length > 0
        }
        const Ik = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Xk = Fk || Ik > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Xk ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
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
          Fk.length > 0 && this.images.onEvent(Fk), this.page.isTrapped || kk.Lik(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const kk = this.settled;
        this.settled = [];
        for (const Fk of kk) Fk()
      }
    }
    class TF {
      constructor(kk) {
        this.deps = kk, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: kk => {
            this.modelsFailed(kk)
          },
          onDecoderFailed: kk => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Nk} the Draco decoder didn't load: models waiting on it won't draw`, kk))
          },
          onWorkerLost: kk => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Nk} a model worker was lost: ${kk}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.ke = {
          setShaderPack: (kk, Fk, Ik, Xk, Tk) => (this.shaderPackArgs = [kk, Fk, Ik, Xk, Tk], this.handOverShaderPack(), !0)
        }, this.frame = kk => {
          this.frameId = null;
          const Fk = this.host;
          if (null !== Fk && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Fk, kk)
          } catch (Ik) {
            if (!this.stopIfTrapped(Ik) && (this.stop(), (0, Kk.j)(Ik))) return void this.deps.onRenderFailed("frames_refused", Ik);
            console.warn(`${Nk} the previews stopped: their frame threw`, Ik)
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
      async bindSession(kk, Fk, Ik) {
        const Xk = this.binding,
          Tk = this.sessionEnds;
        try {
          const ik = this.hostOf(kk);
          if (!ik.Pyk()) {
            const Fk = (0, uk.d)().sampleCount,
              yk = await Ik(Fk);
            if (this.sessionEnds !== Tk) return this.keepRendererOfEndedSession(kk, ik, yk, Fk, Xk), Fk;
            if (!ik.Iyk(yk)) throw new Error("the page has a renderer already");
            (0, Ok.y)(performance.now()), this.samples = Fk, (0, bk.f)((0, Kk.g)(kk))
          }
          if (!ik.attach(Fk)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Xk && this.endBinding()
        }
      }
      keepRendererOfEndedSession(kk, Fk, Ik, Xk, Tk) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Tk) try {
          Ik.free()
        } catch (ik) {
          console.warn(`${Nk} an ended session's renderer didn't free`, ik)
        } else Fk.Iyk(Ik) && ((0, Ok.y)(performance.now()), this.samples = Xk, (0, bk.f)(this.registryOf(kk)))
      }
      async beginSession() {
        var kk;
        let Fk = () => {};
        const Ik = new Promise((kk => {
          Fk = kk
        }));
        this.binding = {
          done: Ik,
          release: Fk
        }, await (null === (kk = this.opening) || void 0 === kk ? void 0 : kk.catch((() => null)));
        const Xk = this.pageCanvas;
        return this.pageCanvas = null, Xk
      }
      endSession(kk) {
        var Fk, Ik;
        if (this.sessionEnds++, this.lastEndReturned = kk, this.endBinding(), kk) {
          try {
            var Xk;
            null === (Xk = this.host) || void 0 === Xk || Xk.detach()
          } catch (Tk) {
            return void console.warn(`${Nk} the session's core kept the page's renderer`, Tk)
          }!0 === (null === (Fk = this.host) || void 0 === Fk ? void 0 : Fk.attached()) && console.warn(`${Nk} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (Ik = this.host) || void 0 === Ik ? void 0 : Ik.Pyk()) && (0, bk.f)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var kk;
        null === (kk = this.binding) || void 0 === kk || kk.release(), this.binding = null
      }
      async openPreview(kk, Fk, Ik, Xk) {
        const Tk = await this.renderingHost(),
          ik = this.module;
        if (null === Tk || null === ik) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Tk), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(ik)
        }));
        const yk = this.nextId++,
          lk = this.deps.createCanvas(),
          [ak, qk] = Dk(Fk, Ik, this.deps.dpr(), Xk);
        lk.width = ak, lk.height = qk;
        if (!this.guarded((() => (ik.qik(yk, lk), Tk.open(yk, ak, qk, kk))))) throw this.hostCall(void 0, (() => {
          ik.Lik(yk)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Lk = new XF(this, Tk, yk, lk, [ak, qk], this.deps);
        return this.previews.set(yk, Lk), this.startFrames(), Lk
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Ok.e)() || null !== (0, Ok.N)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((kk => {
          null === kk || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(kk) {
        return this.prefetchedOr(kk, this.deps.fetchModel)
      }
      imageFile(kk) {
        return this.prefetchedOr(kk, Xk.K)
      }
      prefetchedOr(kk, Fk) {
        const Ik = this.prefetchedFiles.get(kk);
        return void 0 === Ik ? Fk(kk) : Ik.catch((() => Fk(kk)))
      }
      async prefetchPlayerFiles() {
        const kk = this.deps.playerFile().then((kk => this.deps.files.url(kk))),
          Fk = await Promise.all([kk, this.deps.images.lifeformAtlasUrl(vk.c)]).catch((() => null));
        if (null === Fk) return;
        const [Ik, Xk] = Fk, Tk = (kk, Fk) => {
          if (null === kk) return;
          const Ik = Fk(kk);
          this.prefetchedFiles.set(kk, Ik), Ik.catch((() => {
            this.prefetchedFiles.delete(kk)
          }))
        };
        Tk(Ik, (kk => this.modelFile(kk))), Tk(Xk, (kk => this.imageFile(kk)))
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
        return this.startModels(), this.models.then((Ik => Ik(kk, Fk))).then((kk => this.unavailable ? new Promise((() => {})) : kk))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(kk) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Nk} the model workers didn't start: models won't draw in the previews`, kk))
      }
      called(kk) {
        return 0 !== kk && this.logError(kk, 0), kk
      }
      closePreview(kk) {
        this.previews.delete(kk.id), null !== this.module && kk.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(kk) {
        if (null !== this.module && this.module !== kk) throw new Error("a second renderer module on one page");
        return this.module = kk, null === this.host && (this.host = this.guarded((() => new kk.aik)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: kk
        } = this;
        null !== kk && this.outsideCall("the game's start or end", (() => {
          kk.zyk(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: kk,
          shaderPackArgs: Fk
        } = this;
        null !== kk && null !== Fk && this.outsideCall("the shader pack's hand-over", (() => {
          kk.aXk(...Fk) || console.warn(`${Nk} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(kk, Fk) {
        try {
          this.hostCall(void 0, Fk)
        } catch (Ik) {
          this.stop(), console.warn(`${Nk} the previews stopped: ${kk} threw`, Ik)
        }
      }
      async loadAnimations(kk) {
        const Fk = yk(null),
          Ik = this.module;
        try {
          Fk.wasm = null === Ik ? Fk.wasm : this.hostCall(Fk.wasm, (() => Ik.Qt()))
        } catch {}
        let Xk, Tk;
        try {
          Xk = await this.fetchAnimationTable()
        } catch (ik) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: ik
          }, Fk)
        }
        if (!this.settleIfTrapped()) {
          try {
            Tk = kk.Qyk(Xk)
          } catch (ik) {
            if (this.stopIfTrapped(ik)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: ik
            }, Fk)
          }
          Tk || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Fk)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const kk = this.host;
        return null !== kk && this.guarded((() => kk.Pyk())) ? kk : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var kk;
        const Fk = null !== (kk = this.module) && void 0 !== kk ? kk : await this.loadModule();
        if (null === Fk) return null;
        const Ik = this.hostOf(Fk),
          Xk = () => this.guarded((() => Ik.Pyk()));
        if (Xk()) return Ik;
        if (null !== (0, Ok.N)() || (0, Ok.e)()) return null;
        const Tk = this.deps.createCanvas();
        Tk.width = 1, Tk.height = 1;
        const ik = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const yk = (0, uk.d)().sampleCount;
        let lk;
        try {
          lk = await (0, Kk.n)(Fk, "previewRenderer", Tk, yk, Rk.e, ik)
        } catch (ak) {
          throw ak instanceof Sk.c ? this.stopForTrap(ak) : (0, Kk.l)(ak) && await this.deps.onRenderFailed("start_failed", ak), ak
        }
        return this.guarded((() => Ik.Iyk(lk))) ? ((0, Ok.y)(performance.now()), this.samples = yk, this.pageCanvas = Tk, (0, bk.f)(this.registryOf(Fk)), Ik) : Xk() ? Ik : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(kk, Fk) {
        for (const yk of this.previews.values()) yk.feed();
        if (this.stopped) return;
        const Ik = this.deps.now(),
          Xk = kk.frame(Fk);
        this.costs.push(this.deps.now() - Ik), this.costs.length > 120 && this.costs.shift();
        const Tk = 0 !== (256 & Xk),
          ik = 255 & Xk;
        for (const yk of this.previews.values()) {
          if (this.stopped) return;
          yk.collect(Tk)
        }
        if (!this.stopped) {
          if (0 !== (512 & Xk) && this.deps.onDrew(), Tk) {
            const Fk = kk.Oyk();
            for (let kk = 0; kk + 1 < Fk.length; kk += 2) Fk[kk] === Pk.N.RenderDeviceLost && this.deps.onDeviceLost(), this.logError(Fk[kk], Fk[kk + 1])
          }
          if (ik !== dk) {
            if (ik === Yk) return this.stop(), void this.deps.onFatal(kk.wyk(), kk.Hyk());
            if (ik === Ak) return this.stop(), void console.warn(`${Nk} the previews stopped: the page's renderer went with its session`);
            (0, Hk.b)(Fk), this.startFrames()
          } else {
            const Fk = kk.Jyk();
            this.stop();
            const Ik = Fk[2] === Pk.Xc.PIPELINE_FAILED ? "pipeline_failed" : "lost";
            this.deps.onRenderFailed(Ik, void 0, Fk[1], Fk[2] === Pk.Xc.RESTORE_LOST)
          }
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Sk.f)(this.module) || "failed" === (0, ek.w)())
      }
      hostCall(kk, Fk) {
        if (this.settleIfTrapped()) return kk;
        try {
          return Fk()
        } catch (Ik) {
          if (this.stopIfTrapped(Ik)) return kk;
          throw Ik
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
          gIk: (Fk, Ik) => {
            this.hostCall(void 0, (() => {
              kk.gIk(Fk, Ik)
            }))
          },
          mIk: Fk => {
            this.hostCall(void 0, (() => {
              kk.mIk(Fk)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, bk.f)(null)), !0)
      }
      stopIfTrapped(kk) {
        return !(null === this.module || !(0, Sk.g)(this.module, kk)) && (this.stopForTrap(kk), !0)
      }
      stopForTrap(kk) {
        this.stop(), (0, bk.f)(null), (0, Ck.g)("previews", kk)
      }
      stop() {
        this.stopped = !0;
        for (const kk of this.previews.values()) kk.abandon()
      }
      logError(kk, Fk) {
        const Ik = `${kk}:${Fk}`;
        this.loggedErrors.has(Ik) || (this.loggedErrors.add(Ik), console.warn(`${Nk} error ${kk} (detail ${Fk})`))
      }
    }
    let iF = null;

    function yF() {
      return iF ??= new TF(function() {
        const kk = (0, Vk.j)(wk.clientSideServerUrls.staticUrl, {
          packUrl: kk => {
            var Fk, Ik;
            return null !== (Fk = null === (Ik = vk.f.current) || void 0 === Ik ? void 0 : Ik.modelUrl(kk)) && void 0 !== Fk ? Fk : null
          }
        });
        return {
          loadModule: IF,
          startModels: async kk => {
            const {
              pageModelPool: Fk
            } = await Ik.e(42).then((() => Ik(51022))), {
              pool: Xk
            } = Fk(kk);
            return (kk, Fk) => Xk.build(kk, Fk)
          },
          fetchAnimations: async () => lk(await (0, Xk.K)(Mk())),
          playerFile: async () => (await (0, Vk.i)()).PLAYER_FILE,
          onAnimationsFailed: (kk, Fk) => {
            ak("previewAnimations", Mk(), kk, Fk)
          },
          provideBuiltInAnimationPack: kk => {
            Zk().provide(kk)
          },
          openExtras: Ok.F,
          files: kk,
          images: (0, vk.m)((0, Qk.o)(kk.url), (() => vk.f.current)),
          pack: vk.f,
          game: Ek.b,
          fetchModel: kk => (0, Vk.f)(kk),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: kk => requestAnimationFrame(kk),
          cancelFrame: kk => {
            cancelAnimationFrame(kk)
          },
          onRenderFailed: kF,
          onFatal: (kk, Fk) => {
            console.error(`${Nk} the previews stopped: renderer error ${kk} (detail ${Fk})`)
          },
          onDeviceLost: () => {
            (0, Ok.J)() === pk.e.webgpu && Jk.F.lost()
          },
          onDrew: () => {
            Jk.F.drew()
          }
        }
      }()), iF
    }
    var lF = Ik(614),
      aF = Ik(38621),
      qF = Ik(3229);
    const LF = {
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
    const tF = "[bloxd-previews]",
      ZF = new Uint32Array(5);

    function jF(kk) {
      return lF.m.indexOf(kk)
    }
    const eF = new WeakSet;

    function wF(kk) {
      const Fk = (0, aF.f)(kk),
        Ik = null === Fk ? -1 : HF(Fk);
      return -1 !== Ik ? Ik : (eF.has(kk) || (eF.add(kk), console.warn(`${tF} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function HF(kk) {
      var Fk;
      return null !== (Fk = LF[kk]) && void 0 !== Fk ? Fk : -1
    }

    function JF(kk, Fk) {
      const {
        canvas: Ik
      } = Fk;
      Ik.style.width = "100%", Ik.style.height = "100%", Ik.style.display = "block", kk.appendChild(Ik)
    }

    function xF(kk) {
      const Fk = kk.getBoundingClientRect();
      return [Fk.width, Fk.height]
    }
    class PF {
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
    class KF {
      constructor(kk) {
        this.preview = kk, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(kk) {
          const {
            canvas: Fk
          } = kk;
          let Ik = null;
          const Xk = kk => {
              var Xk;
              Ik = {
                pointer: kk.pointerId,
                x: kk.clientX,
                y: kk.clientY
              }, null === (Xk = Fk.setPointerCapture) || void 0 === Xk || Xk.call(Fk, kk.pointerId)
            },
            Tk = Fk => {
              var Xk;
              const Tk = kk.orbit;
              if ((null === (Xk = Ik) || void 0 === Xk ? void 0 : Xk.pointer) !== Fk.pointerId || null === Tk) return;
              const ik = Fk.clientX - Ik.x,
                yk = Fk.clientY - Ik.y;
              Ik = {
                ...Ik,
                x: Fk.clientX,
                y: Fk.clientY
              }, kk.setOrbit({
                alpha: Tk.alpha - .01 * ik,
                beta: Math.min(Math.PI - .01, Math.max(.01, Tk.beta - .01 * yk)),
                radius: Tk.radius
              })
            },
            ik = kk => {
              var Fk;
              (null === (Fk = Ik) || void 0 === Fk ? void 0 : Fk.pointer) === kk.pointerId && (Ik = null)
            },
            yk = Fk => {
              const Ik = kk.orbit;
              if (null === Ik) return;
              Fk.preventDefault();
              const Xk = Fk.deltaY * (Fk.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Fk.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Tk = Math.min(100, Math.max(5, Ik.radius + .08 * Xk));
              kk.setOrbit({
                ...Ik,
                radius: Tk
              })
            };
          return Fk.style.touchAction = "none", Fk.addEventListener("pointerdown", Xk), Fk.addEventListener("pointermove", Tk), Fk.addEventListener("pointerup", ik), Fk.addEventListener("pointercancel", ik), Fk.addEventListener("wheel", yk, {
            passive: !1
          }), () => {
            Fk.removeEventListener("pointerdown", Xk), Fk.removeEventListener("pointermove", Tk), Fk.removeEventListener("pointerup", ik), Fk.removeEventListener("pointercancel", ik), Fk.removeEventListener("wheel", yk)
          }
        }(kk), this.dev = {
          canvas: () => kk.canvas,
          isolateHead: () => {
            console.warn(`${tF} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = kk.untilSettled().then((() => {
          if (kk.isStopped) throw new Error(`${tF} the previews stopped before the character drew`);
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
          pitch: Ik,
          radius: Xk
        } = kk;
        const Tk = this.preview.orbit;
        null !== Tk && this.preview.setOrbit({
          alpha: Fk,
          beta: Ik,
          radius: null !== Xk && void 0 !== Xk ? Xk : Tk.radius
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
        this.preview.setPlayer(JSON.stringify(this.cosmetics), ZF, null === (kk = this.emote) ? -1 : HF(kk))
      }
    }

    function QF(kk, Fk) {
      let {
        mobType: Ik,
        variation: Xk,
        animation: Tk
      } = Fk;
      kk.setMob(jF(Ik), null !== Xk && void 0 !== Xk ? Xk : "", 1, wF(Tk))
    }

    function sF(kk, Fk) {
      let {
        mobType: Ik,
        variation: Xk,
        metaInfo: Tk,
        tamed: ik
      } = Fk;
      kk.setPet(jF(Ik), Xk, Tk, ik)
    }
    const VF = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class zF {
      constructor(kk, Fk, Ik, Xk) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, kk(Ik.width, Xk[1], Xk).then((kk => {
          if (this.closed) return void kk.close();
          const {
            style: Ik
          } = kk.canvas;
          Ik.position = "absolute", Ik.top = "0", Ik.visibility = "hidden", JF(Fk, kk), this.preview = kk, this.apply()
        })).catch((kk => {
          console.error(`${tF} couldn't open a lineup figure`, kk)
        }))
      }
      update(kk, Fk, Ik, Xk, Tk) {
        this.figure = kk, this.shown = Fk, this.order = Ik, this.span = Xk, this.lineup = Tk, this.apply()
      }
      close() {
        var kk;
        this.closed = !0, null === (kk = this.preview) || void 0 === kk || kk.close(), this.preview = null
      }
      apply() {
        const {
          preview: kk,
          figure: Fk,
          lineup: Ik
        } = this;
        if (null === kk || null === Fk) return;
        if (this.given !== Fk) {
          var Xk;
          this.given = Fk, this.loaded = !1;
          const Ik = null === Fk.VK ? 0 : null !== (Xk = (0, qF.e)(Fk.VK)) && void 0 !== Xk ? Xk : 0;
          kk.setFigure(function(kk) {
            return JSON.stringify(Object.fromEntries(kk.cosmetics))
          }(Fk), Ik, wF(Fk.animation), Fk.size), kk.untilSettled().then((() => {
            this.given === Fk && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Tk,
          width: ik
        } = this.span;
        kk.resize(ik, Ik[1], Ik);
        const {
          style: yk
        } = kk.canvas;
        yk.left = `${Tk}px`, yk.width = `${ik}px`, yk.zIndex = this.order, yk.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class SF {
      constructor(kk, Fk) {
        this.open = Fk, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = xF(kk), this.layer = document.createElement("div");
        const {
          style: Ik
        } = this.layer;
        Ik.position = "relative", Ik.isolation = "isolate", Ik.overflow = "hidden", Ik.width = "100%", Ik.height = "100%", Ik.pointerEvents = "none", kk.appendChild(this.layer)
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
        for (const Xk of this.figures.splice(kk.length)) Xk.close();
        const {
          size: Ik
        } = this;
        kk.forEach(((Xk, Tk) => {
          var ik;
          const yk = function(kk, Fk, Ik, Xk) {
            let [Tk, ik] = Xk;
            const yk = (kk + .5) * Tk / Fk,
              lk = Math.min(Math.max(Tk / Fk, 2 * Ik * ik), 2 * Math.max(yk, Tk - yk));
            return {
              left: yk - lk / 2,
              width: lk
            }
          }(Tk, kk.length, function(kk) {
            let {
              animation: Fk,
              size: Ik
            } = kk;
            const {
              aimed: Xk,
              ready: Tk
            } = VF;
            return (wF(Fk) === LF.gunAimed ? Xk : Tk) * Ik
          }(Xk), Ik);
          this.figures[Tk] ??= new zF(this.open, this.layer, yk, Ik), this.figures[Tk].update(Xk, null !== (ik = Fk[Tk]) && void 0 !== ik && ik, function(kk, Fk) {
            return String(Math.round(1e3 * kk) + Fk)
          }(Xk.size, Tk), yk, Ik)
        }))
      }
    }
    const oF = {
      player: fk,
      store: Bk
    };
    class vF {
      constructor(kk) {
        this.page = kk
      }
      async openMob(kk) {
        return new PF(await this.open(kk, Wk), QF)
      }
      async openPet(kk) {
        return new PF(await this.open(kk, Wk), sF)
      }
      openMobLineup(kk) {
        return new SF(kk, ((kk, Fk, Ik) => this.page.openPreview(Wk, kk, Fk, Ik)))
      }
      async openCharacter(kk, Fk) {
        return new KF(await this.open(kk, oF[Fk]))
      }
      async open(kk, Fk) {
        const [Ik, Xk] = xF(kk), Tk = await this.page.openPreview(Fk, Ik, Xk);
        return JF(kk, Tk), Tk
      }
    }
  },
  36759: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      B: () => ek,
      D: () => wk,
      F: () => Jk,
      e: () => Xk,
      i: () => Tk,
      k: () => Zk,
      n: () => Hk,
      p: () => Lk,
      r: () => xk,
      v: () => ak,
      w: () => qk,
      z: () => jk
    });
    const Xk = [{
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

    function Tk(kk, Fk) {
      const {
        numLines: Ik,
        charsPerLine: Tk
      } = Xk[Fk];
      return Pk(kk, Ik, Tk, !1)
    }
    const ik = 7 / 8,
      yk = .25,
      lk = 8;

    function ak(kk, Fk) {
      return {
        width: Math.min(kk, lk) - 2 * yk,
        height: Math.min(Fk, lk) - 2 * yk
      }
    }

    function qk(kk, Fk, Ik) {
      const Tk = ak(kk, Fk),
        {
          numLines: yk,
          charsPerLine: lk
        } = Xk[Ik];
      return {
        numLines: Math.max(1, Math.floor(yk / ik * Tk.height)),
        charsPerLine: Math.max(1, Math.floor(lk * Tk.width))
      }
    }

    function Lk(kk, Fk, Ik, Xk) {
      const {
        numLines: Tk,
        charsPerLine: ik
      } = qk(Ik, Xk, Fk);
      return Pk(kk, Tk, ik, !1)
    }
    const tk = 32e3;

    function Zk(kk) {
      return kk.slice(0, tk)
    }
    const jk = 512e3,
      ek = 64,
      wk = jk;

    function Hk(kk, Fk) {
      const Ik = Math.max(0, wk - Fk),
        Xk = Math.min(jk, Ik);
      return kk.slice(0, Xk)
    }
    const Jk = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      Hq: {
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

    function xk(kk, Fk) {
      const {
        numLines: Ik,
        charsPerLine: Xk
      } = Jk[Fk];
      return Pk(kk, Ik, Xk, !1)
    }

    function Pk(kk, Fk, Ik, Xk, Tk) {
      (Tk || Xk) && (kk = kk.slice(0, null !== Tk && void 0 !== Tk ? Tk : Fk * Ik));
      const ik = kk.split("\n");
      if (ik.length > Fk && ik.splice(Fk, ik.length - Fk), !Xk)
        for (let yk = 0; yk < ik.length; yk++) {
          const kk = ik[yk];
          kk.length > Ik && (ik[yk] = kk.substring(0, Ik), ik.length < Fk && ik.splice(yk + 1, 0, kk.substring(Ik)))
        }
      return ik.join("\n")
    }
  },
  50946: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  50955: (kk, Fk, Ik) => {
    kk.exports = Ik.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);