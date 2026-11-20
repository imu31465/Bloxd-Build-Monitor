export const id = 57;
export const ids = [57];
export const modules = {
  38611: (qq, Eq, gq) => {
    gq.d(Eq, {
      b: () => lq,
      f: () => Oq
    });
    const Yq = new WeakMap;

    function lq(qq, Eq) {
      return Yq.set(qq, Eq), qq
    }

    function Oq(qq) {
      var Eq;
      return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : null
    }
  },
  38638: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => xq
    });
    var Yq = gq(1214);

    function lq(qq) {
      const Eq = /(\d*\.?\d+)px/.exec(qq);
      return Eq ? Number(Eq[1]) : null
    }

    function Oq(qq) {
      return qq.split(/[\s,]+/).pop()
    }
    let mq = !1;
    const xq = {
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
      drawText: function(qq, Eq, Yq, xq, Aq, cq) {
        if (Aq <= 0 || cq <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: uq,
          fontVariant: Bq,
          fontWeight: Wq,
          fontSize: Nq,
          font: aq
        } = this, Vq = [uq, Bq, Wq, `${Nq}px`, aq].filter(Boolean).join(" "), dq = [
          [Wq, `${Nq}px`, Oq(aq)].filter(Boolean).join(" "), `${Nq}px sans-serif`
        ], jq = qq.font, Hq = function(qq, Eq, gq) {
          for (const Yq of Eq) {
            qq.font = Yq;
            const Eq = lq(qq.font),
              mq = Oq(Yq);
            if (null !== Eq && Math.abs(Eq - gq) <= .5 && qq.font.toLowerCase().includes(mq.toLowerCase())) return Yq
          }
          return null
        }(qq, [Vq, ...dq], Nq);
        Hq !== Vq && function(qq, Eq, Yq) {
          mq || (mq = !0, Promise.resolve().then((() => gq(1046))).then((gq => {
            let {
              lV: lq
            } = gq;
            lq(new Error("A canvas didn't take canvasTxt's font"), {
              font: qq,
              jN: Eq,
              drawnWith: null !== Yq && void 0 !== Yq ? Yq : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Vq, jq, Hq);
        const oq = lq(qq.font);
        if (null === Hq && null !== oq && oq > 0) {
          const gq = Nq / oq;
          qq.save();
          try {
            return qq.scale(gq, gq), {
              height: this.drawLines(qq, Eq, Yq / gq, xq / gq, Aq / gq, cq / gq, oq).height * gq
            }
          } finally {
            qq.restore()
          }
        }
        return this.drawLines(qq, Eq, Yq, xq, Aq, cq, Nq)
      },
      drawLines: function(qq, Eq, gq, lq, Oq, mq, xq) {
        const Aq = gq + Oq,
          cq = lq + mq;
        let uq, Bq = lq + mq / 2 + xq / 2;
        "right" === this.align ? (uq = Aq, qq.textAlign = "right") : "left" === this.align ? (uq = gq, qq.textAlign = "left") : (uq = gq + Oq / 2, qq.textAlign = "center");
        for (const Yq of Eq) {
          qq.measureText(Yq).width >= Oq && (Eq = Eq.replace(Yq, ""))
        }
        Eq = (0, Yq.W)(Eq);
        const Wq = [],
          Nq = Eq.split("\n"),
          aq = this.justify ? qq.measureText("\u200a").width : 0;
        Nq.forEach((Eq => {
          let gq = qq.measureText(Eq).width;
          if (gq <= Oq) Wq.push(Eq);
          else {
            let Yq = Eq;
            const lq = Oq;
            let mq, xq, Aq;
            for (gq = qq.measureText(Yq).width; gq > lq;) {
              for (mq = 0, xq = 0, Aq = ""; xq < lq;) mq++, Aq = Yq.substr(0, mq), xq = qq.measureText(Aq).width;
              mq--, Aq = Aq.substr(0, mq);
              const Eq = mq;
              if (" " !== Yq.substr(mq, 1)) {
                for (;
                  " " !== Yq.substr(mq, 1) && 0 !== mq;) mq--;
                0 === mq && (mq = Eq), Aq = Yq.substr(0, mq)
              }
              Aq = this.justify ? this.justifyLine(qq, Aq, aq, "\u200a", Oq) : Aq, Yq = Yq.substr(mq), gq = qq.measureText(Yq).width, Wq.push(Aq)
            }
            gq > 0 && Wq.push(Yq)
          }
        }));
        const Vq = this.lineHeight ? this.lineHeight : this.getTextHeight(qq, Eq),
          dq = Vq * (Wq.length - 1),
          jq = dq / 2;
        let Hq = lq;
        "top" === this.vAlign ? Bq = lq + xq : "bottom" === this.vAlign ? (Bq = cq - dq, Hq = cq) : (Hq = lq + mq / 2, Bq -= jq), Wq.forEach((Eq => {
          Eq = Eq.trim(), qq.fillText(Eq, uq, Bq), Bq += Vq
        })), this.debug && (qq.lineWidth = 3, qq.strokeStyle = "#00909e", qq.strokeRect(gq, lq, Oq, mq), qq.lineWidth = 2, qq.strokeStyle = "#f6d743", qq.beginPath(), qq.moveTo(uq, lq), qq.lineTo(uq, cq), qq.stroke(), qq.strokeStyle = "#ff6363", qq.beginPath(), qq.moveTo(gq, Hq), qq.lineTo(Aq, Hq), qq.stroke());
        return {
          height: dq + Vq
        }
      },
      getTextHeight: function(qq, Eq) {
        const gq = qq.textBaseline;
        qq.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Yq
        } = qq.measureText(Eq);
        return qq.textBaseline = gq, Yq
      },
      justifyLine: function(qq, Eq, gq, Yq, lq) {
        const Oq = Eq.trim(),
          mq = qq.measureText(Oq).width,
          xq = Oq.split(/\s+/).length - 1,
          Aq = Math.floor((lq - mq) / gq);
        if (xq <= 0 || Aq <= 0) return Oq;
        const cq = Math.floor(Aq / xq);
        let uq = Aq - xq * cq,
          Bq = [];
        for (let Wq = 0; Wq < cq; Wq++) Bq.push(Yq);
        Bq = Bq.join("");
        return Oq.replace(/\s+/g, (qq => {
          const Eq = uq > 0 ? Bq + Yq : Bq;
          return uq--, qq + Eq
        }))
      }
    }
  },
  38642: (qq, Eq, gq) => {
    gq.d(Eq, {
      e: () => Vq,
      g: () => aq,
      k: () => Wq,
      l: () => uq,
      n: () => Bq
    });
    var Yq = gq(4096),
      lq = gq(307);
    const Oq = 1024,
      mq = 1536,
      xq = 2 * Yq.j + 1,
      Aq = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      cq = 1.5;

    function uq(qq, Eq, gq) {
      if ("string" !== typeof qq) return Eq;
      try {
        const gq = JSON.parse(qq);
        return gq && "object" === typeof gq ? gq : Eq
      } catch (Yq) {
        return void 0 !== gq && console.error(`Couldn't parse ${gq}`, Yq), Eq
      }
    }

    function Bq(qq) {
      return uq(qq, null, "a leaderboard's rows")
    }

    function Wq(qq, Eq) {
      var gq, Yq;
      return null !== Eq && void 0 !== Eq ? Eq : {
        status: null !== (gq = qq.status) && void 0 !== gq ? gq : "loading",
        entries: null !== (Yq = qq.entries) && void 0 !== Yq ? Yq : []
      }
    }

    function Nq(qq, Eq) {
      return "number" === typeof qq && Number.isFinite(qq) && qq > 0 ? qq : Eq
    }

    function aq(qq, Eq) {
      const gq = Nq(qq.size, 1);
      let Yq = Nq(qq.width, Nq(2.5 * gq, 2.5)),
        lq = Nq(qq.height, Nq(3.75 * gq, 3.75));
      Number.isFinite(Oq * lq / Yq) && Number.isFinite(mq * Yq / lq) || (Yq = 2.5, lq = 3.75);
      const xq = lq / Yq,
        Aq = Math.max(1, Math.min(Oq, Eq / xq));
      return {
        width: Yq,
        height: lq,
        layoutWidth: Math.max(Oq, mq / xq),
        layoutHeight: Math.max(mq, Oq * xq),
        pixelWidth: Math.round(Aq),
        pixelHeight: Math.round(Math.max(1, Math.min(Eq, Aq * xq)))
      }
    }

    function Vq(qq, Eq, gq, mq, uq, Bq) {
      qq.setTransform(1, 0, 0, 1, 0, 0), qq.fillStyle = lq.M.defaultNameTagBackground, qq.fillRect(0, 0, Eq, gq), qq.scale(Eq / mq.layoutWidth, gq / mq.layoutHeight), qq.translate((mq.layoutWidth - Oq) / 2, 0),
        function(qq, Eq, gq, Oq) {
          var mq, uq, Bq, Wq;
          const {
            top: Nq,
            around: aq,
            showPlayerText: Vq,
            localPlayerDbId: Hq
          } = gq, {
            whiteUiText: oq,
            grayUiText: Pq,
            yellowUiText: Qq
          } = lq.M;
          qq.textBaseline = "middle";
          const yq = function(Eq, gq, Yq, lq, Oq, mq) {
              let xq = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              qq.font = `bold ${lq}px 'Jetbrains Mono', monospace`, qq.fillStyle = Oq, qq.textAlign = xq;
              let Aq = Eq.replace(/[\r\n\t]/g, " ");
              if (qq.measureText(Aq).width > mq) {
                for (; Aq.length > 0 && qq.measureText(`${Aq}\u2026`).width > mq;) Aq = Aq.slice(0, -1);
                Aq += "\u2026"
              }
              qq.fillText(Aq, gq, Yq)
            },
            tq = Eq => {
              qq.fillStyle = oq, qq.globalAlpha = .15, qq.fillRect(24, Eq, 976, 2), qq.globalAlpha = 1
            },
            rq = null === Hq ? null : (0, lq.wc)(Hq),
            vq = qq => null !== rq && qq.playerHash === rq,
            hq = dq(Nq.entries, Yq.k),
            nq = "ready" === Nq.status && hq.length > 0,
            bq = null === aq ? [] : dq(aq.entries, xq),
            iq = hq.some(vq),
            Zq = null === aq ? null : function(qq) {
              const Eq = qq;
              if (!Eq || !Number.isFinite(Eq.rank) || !Number.isFinite(Eq.tied) || !Number.isFinite(Eq.total)) return null;
              return Eq
            }(aq.standing),
            fq = bq.find(vq),
            Mq = hq.find(vq),
            Tq = null === Zq || void 0 === fq ? null : {
              value: fq.value,
              rank: Zq.rank
            },
            zq = jq(hq, void 0 === Mq || Mq.value === (null === Tq || void 0 === Tq ? void 0 : Tq.value) ? Tq : null),
            Sq = jq(bq, Tq),
            pq = (qq, Eq) => {
              const gq = qq.findIndex(vq);
              return gq >= 0 ? Eq[gq] : null
            },
            Gq = null !== (mq = null !== (uq = null === Zq || void 0 === Zq ? void 0 : Zq.rank) && void 0 !== uq ? uq : pq(bq, Sq)) && void 0 !== mq ? mq : pq(hq, zq);
          qq.font = "bold 34px 'Jetbrains Mono', monospace";
          const Lq = [...nq ? zq : [], ...iq ? [] : Sq],
            Jq = Math.min(280, Math.max(0, ...Lq.map((Eq => qq.measureText(Aq.format(Eq)).width)))),
            kq = Jq <= 80,
            Rq = kq ? 80 : 32 + Jq,
            Uq = kq ? 148 : Rq + 28,
            Fq = 660 - Uq;
          yq(`TOP ${Yq.k}  /  ALL TIME`, 24, 52, 28, Pq, 976), yq(Vq ? String(null !== (Bq = Eq.title) && void 0 !== Bq ? Bq : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, oq, 976), yq("RANK", 32, 174, 28, Pq, Uq - 40), yq("PLAYER", Uq, 174, 28, Pq, Fq), yq(Vq ? String(null !== (Wq = Eq.scoreLabel) && void 0 !== Wq ? Wq : "Score").slice(0, 24) : "Score", 992, 174, 28, Pq, 304, "right"), tq(202);
          const sq = (Oq - 232) / (Yq.k + cq + xq),
            Xq = 208 + Yq.k * sq,
            wq = Xq + cq * sq,
            Kq = (Eq, gq, Yq, lq) => {
              const Oq = vq(Eq);
              qq.fillStyle = Oq ? Qq : oq, qq.globalAlpha = Oq ? .15 : lq ? .035 : 0, qq.fillRect(24, Yq - sq / 2 + 1, 976, sq - 2), qq.globalAlpha = 1;
              const mq = Oq ? Qq : oq;
              yq(Aq.format(gq), Rq, Yq, 34, mq, kq ? 80 : Jq, kq ? "center" : "right"), yq(Vq ? String(Eq.name).slice(0, 64) : "Player", Uq, Yq, 34, mq, Fq);
              const xq = Aq.format(Eq.value);
              yq(qq.measureText(xq).width > 304 ? Eq.value.toExponential(6) : xq, 992, Yq, 34, mq, 304, "right")
            };
          if (nq)
            for (const [Yq, lq] of hq.entries()) Kq(lq, zq[Yq], 208 + (Yq + .5) * sq, Yq % 2 === 0);
          else {
            const qq = "error" === Nq.status,
              Eq = qq ? "Couldn't load leaderboard" : "ready" === Nq.status ? "No scores yet" : "Loading leaderboard\u2026",
              gq = qq ? "Trying again shortly" : "ready" === Nq.status ? "Be the first on the board!" : "Fetching the top players",
              Yq = (208 + Xq) / 2;
            yq(Eq, 512, Yq - 28, 40, qq ? lq.M.redUiText : oq, 960, "center"), yq(gq, 512, Yq + 27, 30, Pq, 960, "center")
          }
          const Cq = Xq + cq * sq / 2;
          if (null === Gq) tq(Cq);
          else {
            const Eq = null === Zq ? 0 : Zq.tied - 1,
              gq = `YOUR RANK #${Aq.format(Gq)}${null===Zq?"":` of ${Aq.format(Zq.total)}`}`;
            qq.font = "bold 36px 'Jetbrains Mono', monospace";
            const Yq = Math.max(20, Math.min(36, Math.floor(34560 / qq.measureText(gq).width)));
            yq(gq, 512, Cq - (Eq > 0 ? 15 : 0), Yq, Qq, 960, "center"), Eq > 0 && yq(`Tied with ${Aq.format(Eq)} other${1===Eq?"":"s"}`, 512, Cq + 24, 24, Pq, 960, "center")
          }
          if (null === aq) return;
          const Iq = wq + xq * sq / 2;
          if (iq) yq(`You're in the top ${Yq.k}!`, 512, Iq, 40, Qq, 960, "center");
          else if (0 === bq.length) yq("You're not on this board yet", 512, Iq, 34, Pq, 960, "center");
          else
            for (const [Yq, lq] of bq.entries()) Kq(lq, Sq[Yq], wq + (Yq + .5) * sq, Yq % 2 === 0)
        }(qq, uq, Bq, mq.layoutHeight)
    }

    function dq(qq, Eq) {
      return Array.isArray(qq) ? qq.slice(0, Eq).filter((qq => qq && Number.isFinite(qq.rank) && Number.isFinite(qq.value))) : []
    }

    function jq(qq, Eq) {
      const gq = [];
      let Yq = !1;
      return qq.forEach(((lq, Oq) => {
        if (null !== Eq && lq.value === Eq.value) return void gq.push(Eq.rank);
        const mq = Oq > 0 && lq.value === qq[Oq - 1].value;
        mq || (Yq = 0 === Oq && 1 !== lq.rank), gq.push(mq && !Yq ? gq[Oq - 1] : lq.rank)
      })), gq
    }
  },
  38817: (qq, Eq, gq) => {
    gq.d(Eq, {
      d: () => lq,
      e: () => Oq
    });
    const Yq = 32;

    function lq(qq) {
      return Array.from(qq).length
    }

    function Oq(qq) {
      const Eq = [""];
      let gq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        lq = "";
      const Oq = () => {
        Eq.push(""), gq = 0, lq = ""
      };
      for (const mq of qq.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(mq)) Oq();
        else if (/^\s+$/.test(mq)) lq += mq;
      else if (mq.length > 0) {
        const qq = Array.from(mq);
        gq > 0 && gq + lq.length + qq.length > Yq && Oq(), Eq[Eq.length - 1] += lq, gq += lq.length, lq = "";
        for (const lq of qq) gq >= Yq && Oq(), Eq[Eq.length - 1] += lq, gq++
      }
      return Eq[Eq.length - 1] += lq, Eq
    }
  },
  43043: (qq, Eq, gq) => {
    gq.r(Eq), gq.d(Eq, {
      WasmPreviewHost: () => tE,
      pageBuiltInAnimationPack: () => Wq,
      pagePreviews: () => gE,
      previewModule: () => wq
    });
    var Yq = gq(2805),
      lq = gq(600);
    const Oq = "[bloxd-wasm-client]";

    function mq(qq) {
      const Eq = {
        wasm: "unknown",
        client: String(lq.e)
      };
      try {
        var gq;
        Eq.wasm = null !== (gq = null === qq || void 0 === qq ? void 0 : qq.cB()) && void 0 !== gq ? gq : Eq.wasm
      } catch {}
      return Eq
    }
    async function xq(qq) {
      if (qq.length < 2 || 31 !== qq[0] || 139 !== qq[1]) return qq;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: Eq
        } = await Promise.resolve().then((() => gq(2744)));
        return Eq(qq)
      }
      const Eq = new Blob([qq]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(Eq).arrayBuffer())
    }

    function Aq(qq, Eq, Yq, lq) {
      Promise.resolve().then((() => gq(40687))).then((gq => {
        let {
          reportDataLoadFailure: Oq
        } = gq;
        Oq(qq, Eq, Yq, lq)
      }), (Eq => {
        console.warn(`${Oq} ${qq} didn't load, and the report couldn't be sent`, Yq.error, Eq)
      }))
    }
    const cq = [3e4, 12e4, 3e5];
    class uq {
      constructor(qq) {
        this.deps = qq, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((qq => {
          this.resolveSet = qq
        }))
      }
      provide(qq) {
        return this.loading ??= this.load(qq), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(qq) {
        const Eq = mq(qq),
          gq = await async function(qq, Eq) {
            let gq;
            try {
              gq = await qq()
            } catch (Yq) {
              return {
                stage: "fetch",
                error: Yq
              }
            }
            try {
              return Eq(gq) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Yq) {
              return {
                stage: "decode",
                error: Yq
              }
            }
          }((() => this.deps.fetch()), (Eq => {
            const gq = qq.ZOq(Eq);
            return gq && this.resolveSet(Eq), gq
          }));
        if (null !== gq) {
          if ("fetch" === gq.stage) {
            this.loading = null;
            const Eq = cq[this.retries++];
            void 0 !== Eq && this.deps.later((() => {
              this.provide(qq)
            }), Eq)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(gq, Eq))
        }
      }
    }
    let Bq = null;

    function Wq() {
      return Bq ??= new uq({
        fetch: async () => xq(await (0, Yq.P)(Nq(), {
          priority: "low"
        })),
        onFailed: (qq, Eq) => {
          Aq("builtInAnimations", Nq(), qq, Eq)
        },
        later: (qq, Eq) => {
          setTimeout(qq, Eq)
        }
      }), Bq
    }

    function Nq() {
      return gq(43046)
    }
    var aq = gq(2797),
      Vq = gq(36380),
      dq = gq(40490),
      jq = gq(1195),
      Hq = gq(289),
      oq = gq(611),
      Pq = gq(40498),
      Qq = gq(40747),
      yq = (gq(40515), gq(40700)),
      tq = gq(40707),
      rq = gq(40714),
      vq = gq(40508),
      hq = gq(40762),
      nq = gq(40765),
      bq = gq(40534),
      iq = gq(40636),
      Zq = gq(40645),
      fq = gq(40760),
      Mq = gq(42352),
      Tq = gq(36356),
      zq = gq(3563);
    const Sq = "[bloxd-previews]",
      pq = 4e5,
      Gq = 0,
      Lq = 1,
      Jq = 2,
      kq = 1,
      Rq = 2,
      Uq = 3,
      Fq = 0,
      sq = 1,
      Xq = 2;

    function wq(qq) {
      const Eq = qq,
        gq = (0, Pq.B)(qq),
        Yq = (0, Pq.l)(qq);
      return null !== gq && null !== Yq && "function" === typeof Eq.nOq && "function" === typeof Eq.bOq && "function" === typeof Eq.iOq ? Eq : null
    }

    function Kq(qq, Eq, gq) {
      let [Yq, lq] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [qq, Eq], Oq = Math.min(Number.isFinite(gq) && gq > 0 ? gq : 1, 2);
      const mq = Math.max(0, Yq, qq) * Math.max(0, lq, Eq) * Oq * Oq;
      return mq > pq && (Oq *= Math.sqrt(pq / mq)), [Math.max(1, Math.floor(Math.max(0, qq) * Oq)), Math.max(1, Math.floor(Math.max(0, Eq) * Oq))]
    }

    function Cq() {
      return gq(43048)
    }
    async function Iq(qq, Eq) {
      "lost" === qq && (0, bq.w)();
      const Yq = await (0, bq.P)();
      if (null === Yq || (0, Pq.p)(Yq) || (0, bq.c)()) return;
      const lq = "webgpu" === Yq.backend;
      if (!lq && "lost" !== qq) return;
      const Oq = lq ? (0, Pq.K)(qq) : null;
      if (null !== Oq) {
        const gq = `WebGPU failed at home (${qq}${void 0===Eq?"":`: ${Eq instanceof Error?Eq.message:(0,Tq.j)(Eq)}`}) and ${Oq}`;
        return console.warn(`${Sq} ${gq}: the previews stop`, null !== Eq && void 0 !== Eq ? Eq : ""), void(0, bq.o)(gq)
      }
      lq || (0, oq.m)(), (0, bq.n)();
      try {
        await async function(qq, Eq, Yq) {
          var lq;
          let {
            backend: Oq,
            adapter: xq
          } = qq;
          const Aq = (0, aq.P)(),
            {
              flushCrashReports: cq,
              reportRenderReload: uq
            } = await Promise.resolve().then((() => gq(40687)));
          uq(Oq, "start_failed" === Eq ? 0 : 1, mq(Aq ? (0, aq.C)() : null), {
            cause: Eq,
            error: "lost" === Eq && null !== (lq = (0, Pq.O)(Aq ? (0, Pq.B)((0, aq.C)()) : null)) && void 0 !== lq ? lq : Yq,
            context: {
              adapter: xq,
              boundAtMs: "start_failed" === Eq ? null : (0, bq.L)(),
              indirectHangs: (0, bq.z)()
            }
          }), await cq(iq.e)
        }(Yq, qq, Eq)
      } catch (xq) {
        console.warn(`${Sq} ${Yq.backend} failed at home (${qq}), and its report couldn't be sent`, xq)
      }(0, iq.k)()
    }
    async function eq() {
      if (!(0, aq.P)()) {
        const qq = await (0, bq.P)();
        if (null === qq || (0, Pq.p)(qq)) return null;
        if (await (0, Vq.n)(await qq.load(), dq.c), !(0, aq.P)()) return null
      }
      return wq((0, aq.C)())
    }
    class Dq {
      constructor(qq, Eq, gq, Yq, lq, Oq) {
        this.page = qq, this.host = Eq, this.id = gq, this.canvas = Yq, this.size = lq, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const mq = {
            ...Oq.images,
            glbUrl: qq => {
              var Eq;
              return null !== (Eq = this.models.drawnUrl(qq)) && void 0 !== Eq ? Eq : Oq.images.glbUrl(qq)
            }
          },
          xq = Eq => qq.modelFile(Eq);
        this.images = new Qq.g(mq, (qq => {
          console.warn(`${Sq} image ${qq.key.kind}:${qq.key.index}:${qq.key.word} failed`, qq.error)
        }), {
          fetchFile: xq,
          fetchImage: Eq => qq.imageFile(Eq)
        }), qq.startModels(), this.models = new yq.e(Oq.files, ((Eq, gq) => qq.buildModel(Eq, gq)), (qq => {
          console.warn(`${Sq} model file ${qq.file} (${qq.url}) failed`, qq.error)
        }), {
          fetchFile: xq,
          onWritten: (qq, Eq) => {
            this.images.glbWritten(qq, Eq)
          },
          onTaken: (qq, Eq) => {
            this.images.glbTaken(qq, Eq)
          }
        }), this.write = (qq, Eq, gq) => {
          if (this.closed) return !0;
          if (qq === yq.b) {
            const qq = new DataView(gq.buffer, gq.byteOffset, rq.c),
              Yq = qq.getUint32(0, !0),
              lq = qq.getUint32(rq.f, !0),
              Oq = this.page.hostCall(Xq, (() => this.host.Mmq(this.id, Yq, Eq, gq.subarray(rq.c))));
            return this.outcomes.push([lq, Oq]), !0
          }
          return qq === Qq.c && (this.page.hostCall(void 0, (() => {
            this.host.zmq(this.id, gq)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(qq, Eq, gq) {
        if (this.closed) return;
        const [Yq, lq] = Kq(qq, Eq, this.page.dpr(), gq);
        Yq === this.size[0] && lq === this.size[1] || (this.size = [Yq, lq], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Yq, lq)
        })))
      }
      setMob(qq, Eq, gq, Yq) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Jmq(this.id, qq, Eq, gq, Yq))))
      }
      setPet(qq, Eq, gq, Yq) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Rmq(this.id, qq, Eq, gq, Yq))))
      }
      setPlayer(qq, Eq, gq) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.pmq(this.id, qq, Eq, gq))))
      }
      setFigure(qq, Eq, gq, Yq) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Gmq(this.id, qq, Eq, gq, Yq))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const qq = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === qq || qq.length < 3 ? null : {
          alpha: qq[0],
          beta: qq[1],
          radius: qq[2]
        }
      }
      setOrbit(qq) {
        let {
          alpha: Eq,
          beta: gq,
          radius: Yq
        } = qq;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.kmq(this.id, Eq, gq, Yq)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((qq => {
          this.settled.push(qq)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, hq.g)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [qq, Eq] of this.outcomes) {
          const gq = Eq === Fq ? [] : [Eq === sq ? qq : (qq | yq.c) >>> 0];
          this.models.taken(qq, gq)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(qq) {
        let Eq = !1;
        if (qq) {
          const qq = this.host.smq(this.id);
          for (const Eq of qq) this.models.request(Eq);
          const gq = this.host.Fmq(this.id);
          gq.length > 0 && this.images.onEvent(gq), Eq = qq.length > 0 || gq.length > 0
        }
        const gq = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Yq = Eq || gq > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Yq ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(qq) {
        this.page.hostCall(void 0, (() => {
          const Eq = this.host.close(this.id);
          Eq.length > 0 && this.images.onEvent(Eq), this.page.isTrapped || qq.iOq(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const qq = this.settled;
        this.settled = [];
        for (const Eq of qq) Eq()
      }
    }
    class qE {
      constructor(qq) {
        this.deps = qq, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: qq => {
            this.modelsFailed(qq)
          },
          onDecoderFailed: qq => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Sq} the Draco decoder didn't load: models waiting on it won't draw`, qq))
          },
          onWorkerLost: qq => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Sq} a model worker was lost: ${qq}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.pN = {
          setShaderPack: (qq, Eq, gq, Yq, lq) => (this.shaderPackArgs = [qq, Eq, gq, Yq, lq], this.handOverShaderPack(), !0)
        }, this.frame = qq => {
          this.frameId = null;
          const Eq = this.host;
          if (null !== Eq && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(Eq, qq)
          } catch (gq) {
            if (!this.stopIfTrapped(gq) && (this.stop(), (0, Pq.r)(gq))) return void this.deps.onRenderFailed("frames_refused", gq);
            console.warn(`${Sq} the previews stopped: their frame threw`, gq)
          }
        }, qq.pack.onChange((() => {
          this.packChanged()
        })), qq.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const qq of this.previews.values()) qq.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var qq, Eq;
        return null !== (qq = null === (Eq = this.host) || void 0 === Eq ? void 0 : Eq.attached()) && void 0 !== qq && qq
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((qq, Eq) => qq + Eq), 0) / this.costs.length
      }
      async bindSession(qq, Eq, gq) {
        const Yq = this.binding,
          lq = this.sessionEnds;
        try {
          const Oq = this.hostOf(qq);
          if (!Oq.Tmq()) {
            const Eq = (0, Zq.h)().sampleCount,
              mq = await gq(Eq);
            if (this.sessionEnds !== lq) return this.keepRendererOfEndedSession(qq, Oq, mq, Eq, Yq), Eq;
            if (!Oq.Hmq(mq)) throw new Error("the page has a renderer already");
            (0, bq.s)(performance.now()), this.samples = Eq, (0, fq.e)((0, Pq.l)(qq))
          }
          if (!Oq.attach(Eq)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Yq && this.endBinding()
        }
      }
      keepRendererOfEndedSession(qq, Eq, gq, Yq, lq) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== lq) try {
          gq.free()
        } catch (Oq) {
          console.warn(`${Sq} an ended session's renderer didn't free`, Oq)
        } else Eq.Hmq(gq) && ((0, bq.s)(performance.now()), this.samples = Yq, (0, fq.e)(this.registryOf(qq)))
      }
      async beginSession() {
        var qq;
        let Eq = () => {};
        const gq = new Promise((qq => {
          Eq = qq
        }));
        this.binding = {
          done: gq,
          release: Eq
        }, await (null === (qq = this.opening) || void 0 === qq ? void 0 : qq.catch((() => null)));
        const Yq = this.pageCanvas;
        return this.pageCanvas = null, Yq
      }
      endSession(qq) {
        var Eq, gq;
        if (this.sessionEnds++, this.lastEndReturned = qq, this.endBinding(), qq) {
          try {
            var Yq;
            null === (Yq = this.host) || void 0 === Yq || Yq.detach()
          } catch (lq) {
            return void console.warn(`${Sq} the session's core kept the page's renderer`, lq)
          }!0 === (null === (Eq = this.host) || void 0 === Eq ? void 0 : Eq.attached()) && console.warn(`${Sq} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (gq = this.host) || void 0 === gq ? void 0 : gq.Tmq()) && (0, fq.e)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var qq;
        null === (qq = this.binding) || void 0 === qq || qq.release(), this.binding = null
      }
      async openPreview(qq, Eq, gq, Yq) {
        const lq = await this.renderingHost(),
          Oq = this.module;
        if (null === lq || null === Oq) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(lq), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Oq)
        }));
        const mq = this.nextId++,
          xq = this.deps.createCanvas(),
          [Aq, cq] = Kq(Eq, gq, this.deps.dpr(), Yq);
        xq.width = Aq, xq.height = cq;
        if (!this.guarded((() => (Oq.bOq(mq, xq), lq.open(mq, Aq, cq, qq))))) throw this.hostCall(void 0, (() => {
          Oq.iOq(mq)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const uq = new Dq(this, lq, mq, xq, [Aq, cq], this.deps);
        return this.previews.set(mq, uq), this.startFrames(), uq
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, bq.c)() || null !== (0, bq.K)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((qq => {
          null === qq || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(qq) {
        return this.prefetchedOr(qq, this.deps.fetchModel)
      }
      imageFile(qq) {
        return this.prefetchedOr(qq, Yq.P)
      }
      prefetchedOr(qq, Eq) {
        const gq = this.prefetchedFiles.get(qq);
        return void 0 === gq ? Eq(qq) : gq.catch((() => Eq(qq)))
      }
      async prefetchPlayerFiles() {
        const qq = this.deps.playerFile().then((qq => this.deps.files.url(qq))),
          Eq = await Promise.all([qq, this.deps.images.lifeformAtlasUrl(hq.b)]).catch((() => null));
        if (null === Eq) return;
        const [gq, Yq] = Eq, lq = (qq, Eq) => {
          if (null === qq) return;
          const gq = Eq(qq);
          this.prefetchedFiles.set(qq, gq), gq.catch((() => {
            this.prefetchedFiles.delete(qq)
          }))
        };
        lq(gq, (qq => this.modelFile(qq))), lq(Yq, (qq => this.imageFile(qq)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((qq => (null === qq && (this.moduleLoad = null), qq)), (qq => {
          throw this.moduleLoad = null, qq
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((qq => {
          throw this.animationTable = null, qq
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((qq => (this.modelsFailed(qq), () => new Promise((() => {})))))
      }
      buildModel(qq, Eq) {
        return this.startModels(), this.models.then((gq => gq(qq, Eq))).then((qq => this.unavailable ? new Promise((() => {})) : qq))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(qq) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Sq} the model workers didn't start: models won't draw in the previews`, qq))
      }
      called(qq) {
        return 0 !== qq && this.logError(qq, 0), qq
      }
      closePreview(qq) {
        this.previews.delete(qq.id), null !== this.module && qq.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(qq) {
        if (null !== this.module && this.module !== qq) throw new Error("a second renderer module on one page");
        return this.module = qq, null === this.host && (this.host = this.guarded((() => new qq.nOq)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: qq
        } = this;
        null !== qq && this.outsideCall("the game's start or end", (() => {
          qq.Lmq(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: qq,
          shaderPackArgs: Eq
        } = this;
        null !== qq && null !== Eq && this.outsideCall("the shader pack's hand-over", (() => {
          qq.fYq(...Eq) || console.warn(`${Sq} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(qq, Eq) {
        try {
          this.hostCall(void 0, Eq)
        } catch (gq) {
          this.stop(), console.warn(`${Sq} the previews stopped: ${qq} threw`, gq)
        }
      }
      async loadAnimations(qq) {
        const Eq = mq(null),
          gq = this.module;
        try {
          Eq.wasm = null === gq ? Eq.wasm : this.hostCall(Eq.wasm, (() => gq.cB()))
        } catch {}
        let Yq, lq;
        try {
          Yq = await this.fetchAnimationTable()
        } catch (Oq) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Oq
          }, Eq)
        }
        if (!this.settleIfTrapped()) {
          try {
            lq = qq.Smq(Yq)
          } catch (Oq) {
            if (this.stopIfTrapped(Oq)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Oq
            }, Eq)
          }
          lq || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, Eq)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const qq = this.host;
        return null !== qq && this.guarded((() => qq.Tmq())) ? qq : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var qq;
        const Eq = null !== (qq = this.module) && void 0 !== qq ? qq : await this.loadModule();
        if (null === Eq) return null;
        const gq = this.hostOf(Eq),
          Yq = () => this.guarded((() => gq.Tmq()));
        if (Yq()) return gq;
        if (null !== (0, bq.K)() || (0, bq.c)()) return null;
        const lq = this.deps.createCanvas();
        lq.width = 1, lq.height = 1;
        const Oq = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const mq = (0, Zq.h)().sampleCount;
        let xq;
        try {
          xq = await (0, Pq.w)(Eq, "previewRenderer", lq, mq, Mq.b, Oq)
        } catch (Aq) {
          throw Aq instanceof vq.c ? this.stopForTrap(Aq) : (0, Pq.v)(Aq) && await this.deps.onRenderFailed("start_failed", Aq), Aq
        }
        return this.guarded((() => gq.Hmq(xq))) ? ((0, bq.s)(performance.now()), this.samples = mq, this.pageCanvas = lq, (0, fq.e)(this.registryOf(Eq)), gq) : Yq() ? gq : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(qq, Eq) {
        for (const mq of this.previews.values()) mq.feed();
        if (this.stopped) return;
        const gq = this.deps.now(),
          Yq = qq.frame(Eq);
        this.costs.push(this.deps.now() - gq), this.costs.length > 120 && this.costs.shift();
        const lq = 0 !== (256 & Yq),
          Oq = 255 & Yq;
        for (const mq of this.previews.values()) {
          if (this.stopped) return;
          mq.collect(lq)
        }
        if (!this.stopped) {
          if (lq) {
            const Eq = qq.Umq();
            for (let qq = 0; qq + 1 < Eq.length; qq += 2) this.logError(Eq[qq], Eq[qq + 1])
          }
          if (Oq === kq) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Oq === Rq) return this.stop(), void this.deps.onFatal(qq.Zmq(), qq.fmq());
          if (Oq === Uq) return this.stop(), void console.warn(`${Sq} the previews stopped: the page's renderer went with its session`);
          (0, Hq.e)(Eq), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, vq.g)(this.module) || "failed" === (0, aq.B)())
      }
      hostCall(qq, Eq) {
        if (this.settleIfTrapped()) return qq;
        try {
          return Eq()
        } catch (gq) {
          if (this.stopIfTrapped(gq)) return qq;
          throw gq
        }
      }
      guarded(qq) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return qq()
        } catch (Eq) {
          throw this.stopIfTrapped(Eq), Eq
        }
      }
      registryOf(qq) {
        return {
          dYq: (Eq, gq) => {
            this.hostCall(void 0, (() => {
              qq.dYq(Eq, gq)
            }))
          },
          jYq: Eq => {
            this.hostCall(void 0, (() => {
              qq.jYq(Eq)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, fq.e)(null)), !0)
      }
      stopIfTrapped(qq) {
        return !(null === this.module || !(0, vq.k)(this.module, qq)) && (this.stopForTrap(qq), !0)
      }
      stopForTrap(qq) {
        this.stop(), (0, fq.e)(null), (0, zq.e)("previews", qq)
      }
      stop() {
        this.stopped = !0;
        for (const qq of this.previews.values()) qq.abandon()
      }
      logError(qq, Eq) {
        const gq = `${qq}:${Eq}`;
        this.loggedErrors.has(gq) || (this.loggedErrors.add(gq), console.warn(`${Sq} error ${qq} (detail ${Eq})`))
      }
    }
    let EE = null;

    function gE() {
      return EE ??= new qE(function() {
        const qq = (0, tq.s)(jq.clientSideServerUrls.staticUrl, {
          packUrl: qq => {
            var Eq, gq;
            return null !== (Eq = null === (gq = hq.d.current) || void 0 === gq ? void 0 : gq.modelUrl(qq)) && void 0 !== Eq ? Eq : null
          }
        });
        return {
          loadModule: eq,
          startModels: async qq => {
            const {
              pageModelPool: Eq
            } = await gq.e(42).then((() => gq(43119))), {
              pool: Yq
            } = Eq(qq);
            return (qq, Eq) => Yq.build(qq, Eq)
          },
          fetchAnimations: async () => xq(await (0, Yq.P)(Cq())),
          playerFile: async () => (await (0, tq.o)()).PLAYER_FILE,
          onAnimationsFailed: (qq, Eq) => {
            Aq("previewAnimations", Cq(), qq, Eq)
          },
          provideBuiltInAnimationPack: qq => {
            Wq().provide(qq)
          },
          openExtras: bq.D,
          files: qq,
          images: (0, hq.h)((0, Qq.p)(qq.url), (() => hq.d.current)),
          pack: hq.d,
          game: nq.b,
          fetchModel: qq => (0, tq.i)(qq),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: qq => requestAnimationFrame(qq),
          cancelFrame: qq => {
            cancelAnimationFrame(qq)
          },
          onRenderFailed: Iq,
          onFatal: (qq, Eq) => {
            console.error(`${Sq} the previews stopped: renderer error ${qq} (detail ${Eq})`)
          }
        }
      }()), EE
    }
    var YE = gq(583),
      lE = gq(38611),
      OE = gq(3166);
    const mE = {
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
    const xE = "[bloxd-previews]",
      AE = new Uint32Array(5);

    function cE(qq) {
      return YE.m.indexOf(qq)
    }
    const uE = new WeakSet;

    function BE(qq) {
      const Eq = (0, lE.f)(qq),
        gq = null === Eq ? -1 : WE(Eq);
      return -1 !== gq ? gq : (uE.has(qq) || (uE.add(qq), console.warn(`${xE} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function WE(qq) {
      var Eq;
      return null !== (Eq = mE[qq]) && void 0 !== Eq ? Eq : -1
    }

    function NE(qq, Eq) {
      const {
        canvas: gq
      } = Eq;
      gq.style.width = "100%", gq.style.height = "100%", gq.style.display = "block", qq.appendChild(gq)
    }

    function aE(qq) {
      const Eq = qq.getBoundingClientRect();
      return [Eq.width, Eq.height]
    }
    class VE {
      constructor(qq, Eq) {
        this.preview = qq, this.showView = Eq
      }
      show(qq) {
        this.showView(this.preview, qq)
      }
      resize(qq, Eq) {
        this.preview.resize(qq, Eq)
      }
      close() {
        this.preview.close()
      }
    }
    class dE {
      constructor(qq) {
        this.preview = qq, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(qq) {
          const {
            canvas: Eq
          } = qq;
          let gq = null;
          const Yq = qq => {
              var Yq;
              gq = {
                pointer: qq.pointerId,
                x: qq.clientX,
                y: qq.clientY
              }, null === (Yq = Eq.setPointerCapture) || void 0 === Yq || Yq.call(Eq, qq.pointerId)
            },
            lq = Eq => {
              var Yq;
              const lq = qq.orbit;
              if ((null === (Yq = gq) || void 0 === Yq ? void 0 : Yq.pointer) !== Eq.pointerId || null === lq) return;
              const Oq = Eq.clientX - gq.x,
                mq = Eq.clientY - gq.y;
              gq = {
                ...gq,
                x: Eq.clientX,
                y: Eq.clientY
              }, qq.setOrbit({
                alpha: lq.alpha - .01 * Oq,
                beta: Math.min(Math.PI - .01, Math.max(.01, lq.beta - .01 * mq)),
                radius: lq.radius
              })
            },
            Oq = qq => {
              var Eq;
              (null === (Eq = gq) || void 0 === Eq ? void 0 : Eq.pointer) === qq.pointerId && (gq = null)
            },
            mq = Eq => {
              const gq = qq.orbit;
              if (null === gq) return;
              Eq.preventDefault();
              const Yq = Eq.deltaY * (Eq.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : Eq.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                lq = Math.min(100, Math.max(5, gq.radius + .08 * Yq));
              qq.setOrbit({
                ...gq,
                radius: lq
              })
            };
          return Eq.style.touchAction = "none", Eq.addEventListener("pointerdown", Yq), Eq.addEventListener("pointermove", lq), Eq.addEventListener("pointerup", Oq), Eq.addEventListener("pointercancel", Oq), Eq.addEventListener("wheel", mq, {
            passive: !1
          }), () => {
            Eq.removeEventListener("pointerdown", Yq), Eq.removeEventListener("pointermove", lq), Eq.removeEventListener("pointerup", Oq), Eq.removeEventListener("pointercancel", Oq), Eq.removeEventListener("wheel", mq)
          }
        }(qq), this.dev = {
          canvas: () => qq.canvas,
          isolateHead: () => {
            console.warn(`${xE} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = qq.untilSettled().then((() => {
          if (qq.isStopped) throw new Error(`${xE} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(qq, Eq) {
        this.cosmetics[qq] = Eq, this.apply()
      }
      playEmote(qq) {
        null === qq || qq !== this.emote ? (this.emote = qq, this.apply()) : this.preview.replay()
      }
      untilDrawn(qq) {
        return this.preview.untilSettled()
      }
      setOrbit(qq) {
        let {
          yaw: Eq,
          pitch: gq,
          radius: Yq
        } = qq;
        const lq = this.preview.orbit;
        null !== lq && this.preview.setOrbit({
          alpha: Eq,
          beta: gq,
          radius: null !== Yq && void 0 !== Yq ? Yq : lq.radius
        })
      }
      resetCamera() {}
      resize(qq, Eq) {
        this.preview.resize(qq, Eq)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var qq;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), AE, null === (qq = this.emote) ? -1 : WE(qq))
      }
    }

    function jE(qq, Eq) {
      let {
        mobType: gq,
        variation: Yq,
        animation: lq
      } = Eq;
      qq.setMob(cE(gq), null !== Yq && void 0 !== Yq ? Yq : "", 1, BE(lq))
    }

    function HE(qq, Eq) {
      let {
        mobType: gq,
        variation: Yq,
        metaInfo: lq,
        tamed: Oq
      } = Eq;
      qq.setPet(cE(gq), Yq, lq, Oq)
    }
    const oE = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class PE {
      constructor(qq, Eq, gq, Yq) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, qq(gq.width, Yq[1], Yq).then((qq => {
          if (this.closed) return void qq.close();
          const {
            style: gq
          } = qq.canvas;
          gq.position = "absolute", gq.top = "0", gq.visibility = "hidden", NE(Eq, qq), this.preview = qq, this.apply()
        })).catch((qq => {
          console.error(`${xE} couldn't open a lineup figure`, qq)
        }))
      }
      update(qq, Eq, gq, Yq, lq) {
        this.figure = qq, this.shown = Eq, this.order = gq, this.span = Yq, this.lineup = lq, this.apply()
      }
      close() {
        var qq;
        this.closed = !0, null === (qq = this.preview) || void 0 === qq || qq.close(), this.preview = null
      }
      apply() {
        const {
          preview: qq,
          figure: Eq,
          lineup: gq
        } = this;
        if (null === qq || null === Eq) return;
        if (this.given !== Eq) {
          var Yq;
          this.given = Eq, this.loaded = !1;
          const gq = null === Eq.aZ ? 0 : null !== (Yq = (0, OE.e)(Eq.aZ)) && void 0 !== Yq ? Yq : 0;
          qq.setFigure(function(qq) {
            return JSON.stringify(Object.fromEntries(qq.cosmetics))
          }(Eq), gq, BE(Eq.animation), Eq.size), qq.untilSettled().then((() => {
            this.given === Eq && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: lq,
          width: Oq
        } = this.span;
        qq.resize(Oq, gq[1], gq);
        const {
          style: mq
        } = qq.canvas;
        mq.left = `${lq}px`, mq.width = `${Oq}px`, mq.zIndex = this.order, mq.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class QE {
      constructor(qq, Eq) {
        this.open = Eq, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = aE(qq), this.layer = document.createElement("div");
        const {
          style: gq
        } = this.layer;
        gq.position = "relative", gq.isolation = "isolate", gq.overflow = "hidden", gq.width = "100%", gq.height = "100%", gq.pointerEvents = "none", qq.appendChild(this.layer)
      }
      show(qq) {
        this.view = qq, this.place()
      }
      resize(qq, Eq) {
        this.size = [qq, Eq], this.place()
      }
      close() {
        for (const qq of this.figures) qq.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: qq,
          shown: Eq
        } = this.view;
        for (const Yq of this.figures.splice(qq.length)) Yq.close();
        const {
          size: gq
        } = this;
        qq.forEach(((Yq, lq) => {
          var Oq;
          const mq = function(qq, Eq, gq, Yq) {
            let [lq, Oq] = Yq;
            const mq = (qq + .5) * lq / Eq,
              xq = Math.min(Math.max(lq / Eq, 2 * gq * Oq), 2 * Math.max(mq, lq - mq));
            return {
              left: mq - xq / 2,
              width: xq
            }
          }(lq, qq.length, function(qq) {
            let {
              animation: Eq,
              size: gq
            } = qq;
            const {
              aimed: Yq,
              ready: lq
            } = oE;
            return (BE(Eq) === mE.gunAimed ? Yq : lq) * gq
          }(Yq), gq);
          this.figures[lq] ??= new PE(this.open, this.layer, mq, gq), this.figures[lq].update(Yq, null !== (Oq = Eq[lq]) && void 0 !== Oq && Oq, function(qq, Eq) {
            return String(Math.round(1e3 * qq) + Eq)
          }(Yq.size, lq), mq, gq)
        }))
      }
    }
    const yE = {
      player: Lq,
      store: Jq
    };
    class tE {
      constructor(qq) {
        this.page = qq
      }
      async openMob(qq) {
        return new VE(await this.open(qq, Gq), jE)
      }
      async openPet(qq) {
        return new VE(await this.open(qq, Gq), HE)
      }
      openMobLineup(qq) {
        return new QE(qq, ((qq, Eq, gq) => this.page.openPreview(Gq, qq, Eq, gq)))
      }
      async openCharacter(qq, Eq) {
        return new dE(await this.open(qq, yE[Eq]))
      }
      async open(qq, Eq) {
        const [gq, Yq] = aE(qq), lq = await this.page.openPreview(Eq, gq, Yq);
        return NE(qq, lq), lq
      }
    }
  },
  36781: (qq, Eq, gq) => {
    gq.d(Eq, {
      C: () => Vq,
      G: () => jq,
      c: () => Yq,
      d: () => lq,
      g: () => Wq,
      k: () => dq,
      m: () => uq,
      q: () => Hq,
      s: () => Aq,
      t: () => cq,
      w: () => Nq,
      z: () => aq
    });
    const Yq = [{
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

    function lq(qq, Eq) {
      const {
        numLines: gq,
        charsPerLine: lq
      } = Yq[Eq];
      return oq(qq, gq, lq, !1)
    }
    const Oq = 7 / 8,
      mq = .25,
      xq = 8;

    function Aq(qq, Eq) {
      return {
        width: Math.min(qq, xq) - 2 * mq,
        height: Math.min(Eq, xq) - 2 * mq
      }
    }

    function cq(qq, Eq, gq) {
      const lq = Aq(qq, Eq),
        {
          numLines: mq,
          charsPerLine: xq
        } = Yq[gq];
      return {
        numLines: Math.max(1, Math.floor(mq / Oq * lq.height)),
        charsPerLine: Math.max(1, Math.floor(xq * lq.width))
      }
    }

    function uq(qq, Eq, gq, Yq) {
      const {
        numLines: lq,
        charsPerLine: Oq
      } = cq(gq, Yq, Eq);
      return oq(qq, lq, Oq, !1)
    }
    const Bq = 32e3;

    function Wq(qq) {
      return qq.slice(0, Bq)
    }
    const Nq = 512e3,
      aq = 64,
      Vq = Nq;

    function dq(qq, Eq) {
      const gq = Math.max(0, Vq - Eq),
        Yq = Math.min(Nq, gq);
      return qq.slice(0, Yq)
    }
    const jq = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      vc: {
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

    function Hq(qq, Eq) {
      const {
        numLines: gq,
        charsPerLine: Yq
      } = jq[Eq];
      return oq(qq, gq, Yq, !1)
    }

    function oq(qq, Eq, gq, Yq, lq) {
      (lq || Yq) && (qq = qq.slice(0, null !== lq && void 0 !== lq ? lq : Eq * gq));
      const Oq = qq.split("\n");
      if (Oq.length > Eq && Oq.splice(Eq, Oq.length - Eq), !Yq)
        for (let mq = 0; mq < Oq.length; mq++) {
          const qq = Oq[mq];
          qq.length > gq && (Oq[mq] = qq.substring(0, gq), Oq.length < Eq && Oq.splice(mq + 1, 0, qq.substring(gq)))
        }
      return Oq.join("\n")
    }
  },
  43046: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  43048: (qq, Eq, gq) => {
    qq.exports = gq.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const qq in modules) Object.freeze(modules[qq]);