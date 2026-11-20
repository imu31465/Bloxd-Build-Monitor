export const id = 56;
export const ids = [56];
export const modules = {
  38046: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      c: () => Xz
    });
    const Fz = new WeakMap;

    function Wz(zz, tz) {
      return Fz.set(zz, tz), zz
    }

    function Xz(zz) {
      var tz;
      return null !== (tz = Fz.get(zz)) && void 0 !== tz ? tz : null
    }
  },
  38073: (zz, tz, sz) => {
    sz.d(tz, {
      d: () => oz
    });
    var Fz = sz(1213);

    function Wz(zz) {
      const tz = /(\d*\.?\d+)px/.exec(zz);
      return tz ? Number(tz[1]) : null
    }

    function Xz(zz) {
      return zz.split(/[\s,]+/).pop()
    }
    let Oz = !1;
    const oz = {
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
      drawText: function(zz, tz, Fz, oz, vz, Uz) {
        if (vz <= 0 || Uz <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Kz,
          fontVariant: uz,
          fontWeight: Nz,
          fontSize: bz,
          font: wz
        } = this, Dz = [Kz, uz, Nz, `${bz}px`, wz].filter(Boolean).join(" "), gz = [
          [Nz, `${bz}px`, Xz(wz)].filter(Boolean).join(" "), `${bz}px sans-serif`
        ], Hz = zz.font, Bz = function(zz, tz, sz) {
          for (const Fz of tz) {
            zz.font = Fz;
            const tz = Wz(zz.font),
              Oz = Xz(Fz);
            if (null !== tz && Math.abs(tz - sz) <= .5 && zz.font.toLowerCase().includes(Oz.toLowerCase())) return Fz
          }
          return null
        }(zz, [Dz, ...gz], bz);
        Bz !== Dz && function(zz, tz, Fz) {
          Oz || (Oz = !0, Promise.resolve().then((() => sz(1060))).then((sz => {
            let {
              SD: Wz
            } = sz;
            Wz(new Error("A canvas didn't take canvasTxt's font"), {
              font: zz,
              Ow: tz,
              drawnWith: null !== Fz && void 0 !== Fz ? Fz : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Dz, Hz, Bz);
        const Pz = Wz(zz.font);
        if (null === Bz && null !== Pz && Pz > 0) {
          const sz = bz / Pz;
          zz.save();
          try {
            return zz.scale(sz, sz), {
              height: this.drawLines(zz, tz, Fz / sz, oz / sz, vz / sz, Uz / sz, Pz).height * sz
            }
          } finally {
            zz.restore()
          }
        }
        return this.drawLines(zz, tz, Fz, oz, vz, Uz, bz)
      },
      drawLines: function(zz, tz, sz, Wz, Xz, Oz, oz) {
        const vz = sz + Xz,
          Uz = Wz + Oz;
        let Kz, uz = Wz + Oz / 2 + oz / 2;
        "right" === this.align ? (Kz = vz, zz.textAlign = "right") : "left" === this.align ? (Kz = sz, zz.textAlign = "left") : (Kz = sz + Xz / 2, zz.textAlign = "center");
        for (const Fz of tz) {
          zz.measureText(Fz).width >= Xz && (tz = tz.replace(Fz, ""))
        }
        tz = (0, Fz.T)(tz);
        const Nz = [],
          bz = tz.split("\n"),
          wz = this.justify ? zz.measureText("\u200a").width : 0;
        bz.forEach((tz => {
          let sz = zz.measureText(tz).width;
          if (sz <= Xz) Nz.push(tz);
          else {
            let Fz = tz;
            const Wz = Xz;
            let Oz, oz, vz;
            for (sz = zz.measureText(Fz).width; sz > Wz;) {
              for (Oz = 0, oz = 0, vz = ""; oz < Wz;) Oz++, vz = Fz.substr(0, Oz), oz = zz.measureText(vz).width;
              Oz--, vz = vz.substr(0, Oz);
              const tz = Oz;
              if (" " !== Fz.substr(Oz, 1)) {
                for (;
                  " " !== Fz.substr(Oz, 1) && 0 !== Oz;) Oz--;
                0 === Oz && (Oz = tz), vz = Fz.substr(0, Oz)
              }
              vz = this.justify ? this.justifyLine(zz, vz, wz, "\u200a", Xz) : vz, Fz = Fz.substr(Oz), sz = zz.measureText(Fz).width, Nz.push(vz)
            }
            sz > 0 && Nz.push(Fz)
          }
        }));
        const Dz = this.lineHeight ? this.lineHeight : this.getTextHeight(zz, tz),
          gz = Dz * (Nz.length - 1),
          Hz = gz / 2;
        let Bz = Wz;
        "top" === this.vAlign ? uz = Wz + oz : "bottom" === this.vAlign ? (uz = Uz - gz, Bz = Uz) : (Bz = Wz + Oz / 2, uz -= Hz), Nz.forEach((tz => {
          tz = tz.trim(), zz.fillText(tz, Kz, uz), uz += Dz
        })), this.debug && (zz.lineWidth = 3, zz.strokeStyle = "#00909e", zz.strokeRect(sz, Wz, Xz, Oz), zz.lineWidth = 2, zz.strokeStyle = "#f6d743", zz.beginPath(), zz.moveTo(Kz, Wz), zz.lineTo(Kz, Uz), zz.stroke(), zz.strokeStyle = "#ff6363", zz.beginPath(), zz.moveTo(sz, Bz), zz.lineTo(vz, Bz), zz.stroke());
        return {
          height: gz + Dz
        }
      },
      getTextHeight: function(zz, tz) {
        const sz = zz.textBaseline;
        zz.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Fz
        } = zz.measureText(tz);
        return zz.textBaseline = sz, Fz
      },
      justifyLine: function(zz, tz, sz, Fz, Wz) {
        const Xz = tz.trim(),
          Oz = zz.measureText(Xz).width,
          oz = Xz.split(/\s+/).length - 1,
          vz = Math.floor((Wz - Oz) / sz);
        if (oz <= 0 || vz <= 0) return Xz;
        const Uz = Math.floor(vz / oz);
        let Kz = vz - oz * Uz,
          uz = [];
        for (let Nz = 0; Nz < Uz; Nz++) uz.push(Fz);
        uz = uz.join("");
        return Xz.replace(/\s+/g, (zz => {
          const tz = Kz > 0 ? uz + Fz : uz;
          return Kz--, zz + tz
        }))
      }
    }
  },
  38076: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Dz,
      d: () => wz,
      e: () => Nz,
      i: () => Kz,
      m: () => uz
    });
    var Fz = sz(3926),
      Wz = sz(321);
    const Xz = 1024,
      Oz = 1536,
      oz = 2 * Fz.k + 1,
      vz = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Uz = 1.5;

    function Kz(zz, tz, sz) {
      if ("string" !== typeof zz) return tz;
      try {
        const sz = JSON.parse(zz);
        return sz && "object" === typeof sz ? sz : tz
      } catch (Fz) {
        return void 0 !== sz && console.error(`Couldn't parse ${sz}`, Fz), tz
      }
    }

    function uz(zz) {
      return Kz(zz, null, "a leaderboard's rows")
    }

    function Nz(zz, tz) {
      var sz, Fz;
      return null !== tz && void 0 !== tz ? tz : {
        status: null !== (sz = zz.status) && void 0 !== sz ? sz : "loading",
        entries: null !== (Fz = zz.entries) && void 0 !== Fz ? Fz : []
      }
    }

    function bz(zz, tz) {
      return "number" === typeof zz && Number.isFinite(zz) && zz > 0 ? zz : tz
    }

    function wz(zz, tz) {
      const sz = bz(zz.size, 1);
      let Fz = bz(zz.width, bz(2.5 * sz, 2.5)),
        Wz = bz(zz.height, bz(3.75 * sz, 3.75));
      Number.isFinite(Xz * Wz / Fz) && Number.isFinite(Oz * Fz / Wz) || (Fz = 2.5, Wz = 3.75);
      const oz = Wz / Fz,
        vz = Math.max(1, Math.min(Xz, tz / oz));
      return {
        width: Fz,
        height: Wz,
        layoutWidth: Math.max(Xz, Oz / oz),
        layoutHeight: Math.max(Oz, Xz * oz),
        pixelWidth: Math.round(vz),
        pixelHeight: Math.round(Math.max(1, Math.min(tz, vz * oz)))
      }
    }

    function Dz(zz, tz, sz, Oz, Kz, uz) {
      zz.setTransform(1, 0, 0, 1, 0, 0), zz.fillStyle = Wz.N.defaultNameTagBackground, zz.fillRect(0, 0, tz, sz), zz.scale(tz / Oz.layoutWidth, sz / Oz.layoutHeight), zz.translate((Oz.layoutWidth - Xz) / 2, 0),
        function(zz, tz, sz, Xz) {
          var Oz, Kz, uz, Nz;
          const {
            top: bz,
            around: wz,
            showPlayerText: Dz,
            localPlayerDbId: Bz
          } = sz, {
            whiteUiText: Pz,
            grayUiText: rz,
            yellowUiText: Yz
          } = Wz.N;
          zz.textBaseline = "middle";
          const xz = function(tz, sz, Fz, Wz, Xz, Oz) {
              let oz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              zz.font = `bold ${Wz}px 'Jetbrains Mono', monospace`, zz.fillStyle = Xz, zz.textAlign = oz;
              let vz = tz.replace(/[\r\n\t]/g, " ");
              if (zz.measureText(vz).width > Oz) {
                for (; vz.length > 0 && zz.measureText(`${vz}\u2026`).width > Oz;) vz = vz.slice(0, -1);
                vz += "\u2026"
              }
              zz.fillText(vz, sz, Fz)
            },
            mz = tz => {
              zz.fillStyle = Pz, zz.globalAlpha = .15, zz.fillRect(24, tz, 976, 2), zz.globalAlpha = 1
            },
            Jz = null === Bz ? null : (0, Wz.lc)(Bz),
            Iz = zz => null !== Jz && zz.playerHash === Jz,
            Cz = gz(bz.entries, Fz.o),
            ez = "ready" === bz.status && Cz.length > 0,
            Zz = null === wz ? [] : gz(wz.entries, oz),
            Gz = Cz.some(Iz),
            Tz = null === wz ? null : function(zz) {
              const tz = zz;
              if (!tz || !Number.isFinite(tz.rank) || !Number.isFinite(tz.tied) || !Number.isFinite(tz.total)) return null;
              return tz
            }(wz.standing),
            cz = Zz.find(Iz),
            jz = Cz.find(Iz),
            Az = null === Tz || void 0 === cz ? null : {
              value: cz.value,
              rank: Tz.rank
            },
            yz = Hz(Cz, void 0 === jz || jz.value === (null === Az || void 0 === Az ? void 0 : Az.value) ? Az : null),
            Mz = Hz(Zz, Az),
            dz = (zz, tz) => {
              const sz = zz.findIndex(Iz);
              return sz >= 0 ? tz[sz] : null
            },
            hz = null !== (Oz = null !== (Kz = null === Tz || void 0 === Tz ? void 0 : Tz.rank) && void 0 !== Kz ? Kz : dz(Zz, Mz)) && void 0 !== Oz ? Oz : dz(Cz, yz);
          zz.font = "bold 34px 'Jetbrains Mono', monospace";
          const Qz = [...ez ? yz : [], ...Gz ? [] : Mz],
            kz = Math.min(280, Math.max(0, ...Qz.map((tz => zz.measureText(vz.format(tz)).width)))),
            iz = kz <= 80,
            Lz = iz ? 80 : 32 + kz,
            lz = iz ? 148 : Lz + 28,
            nz = 660 - lz;
          xz(`TOP ${Fz.o}  /  ALL TIME`, 24, 52, 28, rz, 976), xz(Dz ? String(null !== (uz = tz.title) && void 0 !== uz ? uz : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, Pz, 976), xz("RANK", 32, 174, 28, rz, lz - 40), xz("PLAYER", lz, 174, 28, rz, nz), xz(Dz ? String(null !== (Nz = tz.scoreLabel) && void 0 !== Nz ? Nz : "Score").slice(0, 24) : "Score", 992, 174, 28, rz, 304, "right"), mz(202);
          const az = (Xz - 232) / (Fz.o + Uz + oz),
            qz = 208 + Fz.o * az,
            Sz = qz + Uz * az,
            Vz = (tz, sz, Fz, Wz) => {
              const Xz = Iz(tz);
              zz.fillStyle = Xz ? Yz : Pz, zz.globalAlpha = Xz ? .15 : Wz ? .035 : 0, zz.fillRect(24, Fz - az / 2 + 1, 976, az - 2), zz.globalAlpha = 1;
              const Oz = Xz ? Yz : Pz;
              xz(vz.format(sz), Lz, Fz, 34, Oz, iz ? 80 : kz, iz ? "center" : "right"), xz(Dz ? String(tz.name).slice(0, 64) : "Player", lz, Fz, 34, Oz, nz);
              const oz = vz.format(tz.value);
              xz(zz.measureText(oz).width > 304 ? tz.value.toExponential(6) : oz, 992, Fz, 34, Oz, 304, "right")
            };
          if (ez)
            for (const [Fz, Wz] of Cz.entries()) Vz(Wz, yz[Fz], 208 + (Fz + .5) * az, Fz % 2 === 0);
          else {
            const zz = "error" === bz.status,
              tz = zz ? "Couldn't load leaderboard" : "ready" === bz.status ? "No scores yet" : "Loading leaderboard\u2026",
              sz = zz ? "Trying again shortly" : "ready" === bz.status ? "Be the first on the board!" : "Fetching the top players",
              Fz = (208 + qz) / 2;
            xz(tz, 512, Fz - 28, 40, zz ? Wz.N.redUiText : Pz, 960, "center"), xz(sz, 512, Fz + 27, 30, rz, 960, "center")
          }
          const Rz = qz + Uz * az / 2;
          if (null === hz) mz(Rz);
          else {
            const tz = null === Tz ? 0 : Tz.tied - 1,
              sz = `YOUR RANK #${vz.format(hz)}${null===Tz?"":` of ${vz.format(Tz.total)}`}`;
            zz.font = "bold 36px 'Jetbrains Mono', monospace";
            const Fz = Math.max(20, Math.min(36, Math.floor(34560 / zz.measureText(sz).width)));
            xz(sz, 512, Rz - (tz > 0 ? 15 : 0), Fz, Yz, 960, "center"), tz > 0 && xz(`Tied with ${vz.format(tz)} other${1===tz?"":"s"}`, 512, Rz + 24, 24, rz, 960, "center")
          }
          if (null === wz) return;
          const pz = Sz + oz * az / 2;
          if (Gz) xz(`You're in the top ${Fz.o}!`, 512, pz, 40, Yz, 960, "center");
          else if (0 === Zz.length) xz("You're not on this board yet", 512, pz, 34, rz, 960, "center");
          else
            for (const [Fz, Wz] of Zz.entries()) Vz(Wz, Mz[Fz], Sz + (Fz + .5) * az, Fz % 2 === 0)
        }(zz, Kz, uz, Oz.layoutHeight)
    }

    function gz(zz, tz) {
      return Array.isArray(zz) ? zz.slice(0, tz).filter((zz => zz && Number.isFinite(zz.rank) && Number.isFinite(zz.value))) : []
    }

    function Hz(zz, tz) {
      const sz = [];
      let Fz = !1;
      return zz.forEach(((Wz, Xz) => {
        if (null !== tz && Wz.value === tz.value) return void sz.push(tz.rank);
        const Oz = Xz > 0 && Wz.value === zz[Xz - 1].value;
        Oz || (Fz = 0 === Xz && 1 !== Wz.rank), sz.push(Oz && !Fz ? sz[Xz - 1] : Wz.rank)
      })), sz
    }
  },
  38279: (zz, tz, sz) => {
    sz.d(tz, {
      b: () => Wz,
      d: () => Xz
    });
    const Fz = 32;

    function Wz(zz) {
      return Array.from(zz).length
    }

    function Xz(zz) {
      const tz = [""];
      let sz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        Wz = "";
      const Xz = () => {
        tz.push(""), sz = 0, Wz = ""
      };
      for (const Oz of zz.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(Oz)) Xz();
        else if (/^\s+$/.test(Oz)) Wz += Oz;
      else if (Oz.length > 0) {
        const zz = Array.from(Oz);
        sz > 0 && sz + Wz.length + zz.length > Fz && Xz(), tz[tz.length - 1] += Wz, sz += Wz.length, Wz = "";
        for (const Wz of zz) sz >= Fz && Xz(), tz[tz.length - 1] += Wz, sz++
      }
      return tz[tz.length - 1] += Wz, tz
    }
  },
  42334: (zz, tz, sz) => {
    sz.r(tz), sz.d(tz, {
      WasmPreviewHost: () => xt,
      pageBuiltInAnimationPack: () => Nz,
      pagePreviews: () => tt,
      previewModule: () => qz
    });
    var Fz = sz(3378),
      Wz = sz(585);
    const Xz = "[bloxd-wasm-client]";

    function Oz(zz) {
      const tz = {
        wasm: "unknown",
        client: String(Wz.e)
      };
      try {
        var sz;
        tz.wasm = null !== (sz = null === zz || void 0 === zz ? void 0 : zz.Lu()) && void 0 !== sz ? sz : tz.wasm
      } catch {}
      return tz
    }
    async function oz(zz) {
      if (zz.length < 2 || 31 !== zz[0] || 139 !== zz[1]) return zz;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: tz
        } = await sz.e(218).then((() => sz(36373)));
        return tz(zz)
      }
      const tz = new Blob([zz]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(tz).arrayBuffer())
    }

    function vz(zz, tz, Fz, Wz) {
      Promise.resolve().then((() => sz(40033))).then((sz => {
        let {
          reportDataLoadFailure: Xz
        } = sz;
        Xz(zz, tz, Fz, Wz)
      }), (tz => {
        console.warn(`${Xz} ${zz} didn't load, and the report couldn't be sent`, Fz.error, tz)
      }))
    }
    const Uz = [3e4, 12e4, 3e5];
    class Kz {
      constructor(zz) {
        this.deps = zz, this.loading = null, this.reported = !1, this.retries = 0, this.resolveSet = () => {}, this.set = new Promise((zz => {
          this.resolveSet = zz
        }))
      }
      provide(zz) {
        return this.loading ??= this.load(zz), this.loading
      }
      whenSet() {
        return this.set
      }
      async load(zz) {
        const tz = Oz(zz),
          sz = await async function(zz, tz) {
            let sz;
            try {
              sz = await zz()
            } catch (Fz) {
              return {
                stage: "fetch",
                error: Fz
              }
            }
            try {
              return tz(sz) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Fz) {
              return {
                stage: "decode",
                error: Fz
              }
            }
          }((() => this.deps.fetch()), (tz => {
            const sz = zz.qWz(tz);
            return sz && this.resolveSet(tz), sz
          }));
        if (null !== sz) {
          if ("fetch" === sz.stage) {
            this.loading = null;
            const tz = Uz[this.retries++];
            void 0 !== tz && this.deps.later((() => {
              this.provide(zz)
            }), tz)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(sz, tz))
        }
      }
    }
    let uz = null;

    function Nz() {
      return uz ??= new Kz({
        fetch: async () => oz(await (0, Fz.G)(bz(), {
          priority: "low"
        })),
        onFailed: (zz, tz) => {
          vz("builtInAnimations", bz(), zz, tz)
        },
        later: (zz, tz) => {
          setTimeout(zz, tz)
        }
      }), uz
    }

    function bz() {
      return sz(42336)
    }
    var wz = sz(3376),
      Dz = sz(35828),
      gz = sz(39875),
      Hz = sz(1191),
      Bz = sz(302),
      Pz = sz(39887),
      rz = sz(40094),
      Yz = (sz(39903), sz(40049)),
      xz = sz(40052),
      mz = sz(40055),
      Jz = sz(39901),
      Iz = sz(40116),
      Cz = sz(40119),
      ez = sz(39912),
      Zz = sz(39994),
      Gz = sz(39998),
      Tz = sz(40108),
      cz = sz(41656),
      jz = sz(35805),
      Az = sz(3373);
    const yz = "[bloxd-previews]",
      Mz = 4e5,
      dz = 0,
      hz = 1,
      Qz = 2,
      kz = 1,
      iz = 2,
      Lz = 3,
      lz = 0,
      nz = 1,
      az = 2;

    function qz(zz) {
      const tz = zz,
        sz = (0, Pz.D)(zz),
        Fz = (0, Pz.k)(zz);
      return null !== sz && null !== Fz && "function" === typeof tz.lWz && "function" === typeof tz.nWz && "function" === typeof tz.aWz ? tz : null
    }

    function Sz(zz, tz, sz) {
      let [Fz, Wz] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [zz, tz], Xz = Math.min(Number.isFinite(sz) && sz > 0 ? sz : 1, 2);
      const Oz = Math.max(0, Fz, zz) * Math.max(0, Wz, tz) * Xz * Xz;
      return Oz > Mz && (Xz *= Math.sqrt(Mz / Oz)), [Math.max(1, Math.floor(Math.max(0, zz) * Xz)), Math.max(1, Math.floor(Math.max(0, tz) * Xz))]
    }

    function Vz() {
      return sz(42345)
    }
    async function Rz(zz, tz) {
      "lost" === zz && (0, ez.u)();
      const Fz = await (0, ez.I)();
      if (null === Fz || (0, Pz.m)(Fz) || (0, ez.d)()) return;
      const Wz = "webgpu" === Fz.backend;
      if (!Wz && "lost" !== zz) return;
      const Xz = Wz ? (0, Pz.M)(zz) : null;
      if (null !== Xz) {
        const sz = `WebGPU failed at home (${zz}${void 0===tz?"":`: ${tz instanceof Error?tz.message:(0,jz.i)(tz)}`}) and ${Xz}`;
        return console.warn(`${yz} ${sz}: the previews stop`, null !== tz && void 0 !== tz ? tz : ""), void(0, ez.q)(sz)
      }(0, ez.m)();
      try {
        await async function(zz, tz, Fz) {
          var Wz;
          let {
            backend: Xz,
            adapter: oz
          } = zz;
          const vz = (0, wz.Y)(),
            {
              flushCrashReports: Uz,
              reportRenderReload: Kz
            } = await Promise.resolve().then((() => sz(40033)));
          Kz(Xz, "start_failed" === tz ? 0 : 1, Oz(vz ? (0, wz.J)() : null), {
            cause: tz,
            error: "lost" === tz && null !== (Wz = (0, Pz.P)(vz ? (0, Pz.D)((0, wz.J)()) : null)) && void 0 !== Wz ? Wz : Fz,
            context: {
              adapter: oz,
              boundAtMs: "start_failed" === tz ? null : (0, ez.F)(),
              indirectHangs: (0, ez.x)()
            }
          }), await Uz(Zz.c)
        }(Fz, zz, tz)
      } catch (oz) {
        console.warn(`${yz} ${Fz.backend} failed at home (${zz}), and its report couldn't be sent`, oz)
      }(0, Zz.i)()
    }
    async function pz() {
      if (!(0, wz.Y)()) {
        const zz = await (0, ez.I)();
        if (null === zz || (0, Pz.m)(zz)) return null;
        if (await (0, Dz.h)(await zz.load(), gz.h), !(0, wz.Y)()) return null
      }
      return qz((0, wz.J)())
    }
    class fz {
      constructor(zz, tz, sz, Fz, Wz, Xz) {
        this.page = zz, this.host = tz, this.id = sz, this.canvas = Fz, this.size = Wz, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const Oz = {
            ...Xz.images,
            glbUrl: zz => {
              var tz;
              return null !== (tz = this.models.drawnUrl(zz)) && void 0 !== tz ? tz : Xz.images.glbUrl(zz)
            }
          },
          oz = tz => zz.modelFile(tz);
        this.images = new rz.f(Oz, (zz => {
          console.warn(`${yz} image ${zz.key.kind}:${zz.key.index}:${zz.key.word} failed`, zz.error)
        }), {
          fetchFile: oz,
          fetchImage: tz => zz.imageFile(tz)
        }), zz.startModels(), this.models = new Yz.f(Xz.files, ((tz, sz) => zz.buildModel(tz, sz)), (zz => {
          console.warn(`${yz} model file ${zz.file} (${zz.url}) failed`, zz.error)
        }), {
          fetchFile: oz,
          onWritten: (zz, tz) => {
            this.images.glbWritten(zz, tz)
          },
          onTaken: (zz, tz) => {
            this.images.glbTaken(zz, tz)
          }
        }), this.write = (zz, tz, sz) => {
          if (this.closed) return !0;
          if (zz === Yz.b) {
            const zz = new DataView(sz.buffer, sz.byteOffset, mz.c),
              Fz = zz.getUint32(0, !0),
              Wz = zz.getUint32(mz.e, !0),
              Xz = this.page.hostCall(az, (() => this.host.fXz(this.id, Fz, tz, sz.subarray(mz.c))));
            return this.outcomes.push([Wz, Xz]), !0
          }
          return zz === rz.c && (this.page.hostCall(void 0, (() => {
            this.host.zOz(this.id, sz)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(zz, tz, sz) {
        if (this.closed) return;
        const [Fz, Wz] = Sz(zz, tz, this.page.dpr(), sz);
        Fz === this.size[0] && Wz === this.size[1] || (this.size = [Fz, Wz], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Fz, Wz)
        })))
      }
      setMob(zz, tz, sz, Fz) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.XOz(this.id, zz, tz, sz, Fz))))
      }
      setPet(zz, tz, sz, Fz) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.oOz(this.id, zz, tz, sz, Fz))))
      }
      setPlayer(zz, tz, sz) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.sOz(this.id, zz, tz, sz))))
      }
      setFigure(zz, tz, sz, Fz) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.FOz(this.id, zz, tz, sz, Fz))))
      }
      replay() {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.replay(this.id))))
      }
      get orbit() {
        if (this.closed) return null;
        const zz = this.page.hostCall(null, (() => this.host.orbit(this.id)));
        return null === zz || zz.length < 3 ? null : {
          alpha: zz[0],
          beta: zz[1],
          radius: zz[2]
        }
      }
      setOrbit(zz) {
        let {
          alpha: tz,
          beta: sz,
          radius: Fz
        } = zz;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.OOz(this.id, tz, sz, Fz)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((zz => {
          this.settled.push(zz)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, Iz.i)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [zz, tz] of this.outcomes) {
          const sz = tz === lz ? [] : [tz === nz ? zz : (zz | Yz.d) >>> 0];
          this.models.taken(zz, sz)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(zz) {
        let tz = !1;
        if (zz) {
          const zz = this.host.KOz(this.id);
          for (const tz of zz) this.models.request(tz);
          const sz = this.host.UOz(this.id);
          sz.length > 0 && this.images.onEvent(sz), tz = zz.length > 0 || sz.length > 0
        }
        const sz = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Fz = tz || sz > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Fz ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(zz) {
        this.page.hostCall(void 0, (() => {
          const tz = this.host.close(this.id);
          tz.length > 0 && this.images.onEvent(tz), this.page.isTrapped || zz.aWz(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const zz = this.settled;
        this.settled = [];
        for (const tz of zz) tz()
      }
    }
    class Ez {
      constructor(zz) {
        this.deps = zz, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: zz => {
            this.modelsFailed(zz)
          },
          onDecoderFailed: zz => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${yz} the Draco decoder didn't load: models waiting on it won't draw`, zz))
          },
          onWorkerLost: zz => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${yz} a model worker was lost: ${zz}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.Cw = {
          setShaderPack: (zz, tz, sz, Fz, Wz) => (this.shaderPackArgs = [zz, tz, sz, Fz, Wz], this.handOverShaderPack(), !0)
        }, this.frame = zz => {
          this.frameId = null;
          const tz = this.host;
          if (null !== tz && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(tz, zz)
          } catch (sz) {
            if (!this.stopIfTrapped(sz) && (this.stop(), (0, Pz.p)(sz))) return void this.deps.onRenderFailed("frames_refused", sz);
            console.warn(`${yz} the previews stopped: their frame threw`, sz)
          }
        }, zz.pack.onChange((() => {
          this.packChanged()
        })), zz.game.onGameChange((() => {
          this.tellInGame()
        }))
      }
      packChanged() {
        if (!this.stopped)
          for (const zz of this.previews.values()) zz.packChanged()
      }
      dpr() {
        return this.deps.dpr()
      }
      get sessionBound() {
        var zz, tz;
        return null !== (zz = null === (tz = this.host) || void 0 === tz ? void 0 : tz.attached()) && void 0 !== zz && zz
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((zz, tz) => zz + tz), 0) / this.costs.length
      }
      async bindSession(zz, tz, sz) {
        const Fz = this.binding,
          Wz = this.sessionEnds;
        try {
          const Xz = this.hostOf(zz);
          if (!Xz.EXz()) {
            const tz = (0, Gz.d)().sampleCount,
              Oz = await sz(tz);
            if (this.sessionEnds !== Wz) return this.keepRendererOfEndedSession(zz, Xz, Oz, tz, Fz), tz;
            if (!Xz.dXz(Oz)) throw new Error("the page has a renderer already");
            (0, ez.r)(performance.now()), this.samples = tz, (0, Tz.e)((0, Pz.k)(zz))
          }
          if (!Xz.attach(tz)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Fz && this.endBinding()
        }
      }
      keepRendererOfEndedSession(zz, tz, sz, Fz, Wz) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== Wz) try {
          sz.free()
        } catch (Xz) {
          console.warn(`${yz} an ended session's renderer didn't free`, Xz)
        } else tz.dXz(sz) && ((0, ez.r)(performance.now()), this.samples = Fz, (0, Tz.e)(this.registryOf(zz)))
      }
      async beginSession() {
        var zz;
        let tz = () => {};
        const sz = new Promise((zz => {
          tz = zz
        }));
        this.binding = {
          done: sz,
          release: tz
        }, await (null === (zz = this.opening) || void 0 === zz ? void 0 : zz.catch((() => null)));
        const Fz = this.pageCanvas;
        return this.pageCanvas = null, Fz
      }
      endSession(zz) {
        var tz, sz;
        if (this.sessionEnds++, this.lastEndReturned = zz, this.endBinding(), zz) {
          try {
            var Fz;
            null === (Fz = this.host) || void 0 === Fz || Fz.detach()
          } catch (Wz) {
            return void console.warn(`${yz} the session's core kept the page's renderer`, Wz)
          }!0 === (null === (tz = this.host) || void 0 === tz ? void 0 : tz.attached()) && console.warn(`${yz} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (sz = this.host) || void 0 === sz ? void 0 : sz.EXz()) && (0, Tz.e)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var zz;
        null === (zz = this.binding) || void 0 === zz || zz.release(), this.binding = null
      }
      async openPreview(zz, tz, sz, Fz) {
        const Wz = await this.renderingHost(),
          Xz = this.module;
        if (null === Wz || null === Xz) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(Wz), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(Xz)
        }));
        const Oz = this.nextId++,
          oz = this.deps.createCanvas(),
          [vz, Uz] = Sz(tz, sz, this.deps.dpr(), Fz);
        oz.width = vz, oz.height = Uz;
        if (!this.guarded((() => (Xz.nWz(Oz, oz), Wz.open(Oz, vz, Uz, zz))))) throw this.hostCall(void 0, (() => {
          Xz.aWz(Oz)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Kz = new fz(this, Wz, Oz, oz, [vz, Uz], this.deps);
        return this.previews.set(Oz, Kz), this.startFrames(), Kz
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, ez.d)() || null !== (0, ez.D)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((zz => {
          null === zz || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(zz) {
        return this.prefetchedOr(zz, this.deps.fetchModel)
      }
      imageFile(zz) {
        return this.prefetchedOr(zz, Fz.G)
      }
      prefetchedOr(zz, tz) {
        const sz = this.prefetchedFiles.get(zz);
        return void 0 === sz ? tz(zz) : sz.catch((() => tz(zz)))
      }
      async prefetchPlayerFiles() {
        const zz = this.deps.playerFile().then((zz => this.deps.files.url(zz))),
          tz = await Promise.all([zz, this.deps.images.lifeformAtlasUrl(Iz.d)]).catch((() => null));
        if (null === tz) return;
        const [sz, Fz] = tz, Wz = (zz, tz) => {
          if (null === zz) return;
          const sz = tz(zz);
          this.prefetchedFiles.set(zz, sz), sz.catch((() => {
            this.prefetchedFiles.delete(zz)
          }))
        };
        Wz(sz, (zz => this.modelFile(zz))), Wz(Fz, (zz => this.imageFile(zz)))
      }
      loadModule() {
        return this.moduleLoad ??= this.deps.loadModule().then((zz => (null === zz && (this.moduleLoad = null), zz)), (zz => {
          throw this.moduleLoad = null, zz
        })), this.moduleLoad
      }
      fetchAnimationTable() {
        return this.animationTable ??= this.deps.fetchAnimations().catch((zz => {
          throw this.animationTable = null, zz
        })), this.animationTable
      }
      get modelsUnavailable() {
        return this.unavailable
      }
      startModels() {
        this.models ??= this.deps.startModels(this.modelsListener).catch((zz => (this.modelsFailed(zz), () => new Promise((() => {})))))
      }
      buildModel(zz, tz) {
        return this.startModels(), this.models.then((sz => sz(zz, tz))).then((zz => this.unavailable ? new Promise((() => {})) : zz))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(zz) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${yz} the model workers didn't start: models won't draw in the previews`, zz))
      }
      called(zz) {
        return 0 !== zz && this.logError(zz, 0), zz
      }
      closePreview(zz) {
        this.previews.delete(zz.id), null !== this.module && zz.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(zz) {
        if (null !== this.module && this.module !== zz) throw new Error("a second renderer module on one page");
        return this.module = zz, null === this.host && (this.host = this.guarded((() => new zz.lWz)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: zz
        } = this;
        null !== zz && this.outsideCall("the game's start or end", (() => {
          zz.WOz(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: zz,
          shaderPackArgs: tz
        } = this;
        null !== zz && null !== tz && this.outsideCall("the shader pack's hand-over", (() => {
          zz.isz(...tz) || console.warn(`${yz} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(zz, tz) {
        try {
          this.hostCall(void 0, tz)
        } catch (sz) {
          this.stop(), console.warn(`${yz} the previews stopped: ${zz} threw`, sz)
        }
      }
      async loadAnimations(zz) {
        const tz = Oz(null),
          sz = this.module;
        try {
          tz.wasm = null === sz ? tz.wasm : this.hostCall(tz.wasm, (() => sz.Lu()))
        } catch {}
        let Fz, Wz;
        try {
          Fz = await this.fetchAnimationTable()
        } catch (Xz) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: Xz
          }, tz)
        }
        if (!this.settleIfTrapped()) {
          try {
            Wz = zz.tOz(Fz)
          } catch (Xz) {
            if (this.stopIfTrapped(Xz)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: Xz
            }, tz)
          }
          Wz || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, tz)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const zz = this.host;
        return null !== zz && this.guarded((() => zz.EXz())) ? zz : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var zz;
        const tz = null !== (zz = this.module) && void 0 !== zz ? zz : await this.loadModule();
        if (null === tz) return null;
        const sz = this.hostOf(tz),
          Fz = () => this.guarded((() => sz.EXz()));
        if (Fz()) return sz;
        if (null !== (0, ez.D)() || (0, ez.d)()) return null;
        const Wz = this.deps.createCanvas();
        Wz.width = 1, Wz.height = 1;
        const Xz = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const Oz = (0, Gz.d)().sampleCount;
        let oz;
        try {
          oz = await (0, Pz.u)(tz, "previewRenderer", Wz, Oz, cz.b, Xz)
        } catch (vz) {
          throw vz instanceof Jz.c ? this.stopForTrap(vz) : (0, Pz.r)(vz) && await this.deps.onRenderFailed("start_failed", vz), vz
        }
        return this.guarded((() => sz.dXz(oz))) ? ((0, ez.r)(performance.now()), this.samples = Oz, this.pageCanvas = Wz, (0, Tz.e)(this.registryOf(tz)), sz) : Fz() ? sz : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(zz, tz) {
        for (const Oz of this.previews.values()) Oz.feed();
        if (this.stopped) return;
        const sz = this.deps.now(),
          Fz = zz.frame(tz);
        this.costs.push(this.deps.now() - sz), this.costs.length > 120 && this.costs.shift();
        const Wz = 0 !== (256 & Fz),
          Xz = 255 & Fz;
        for (const Oz of this.previews.values()) {
          if (this.stopped) return;
          Oz.collect(Wz)
        }
        if (!this.stopped) {
          if (Wz) {
            const tz = zz.vOz();
            for (let zz = 0; zz + 1 < tz.length; zz += 2) this.logError(tz[zz], tz[zz + 1])
          }
          if (Xz === kz) return this.stop(), void this.deps.onRenderFailed("lost");
          if (Xz === iz) return this.stop(), void this.deps.onFatal(zz.RXz(), zz.pXz());
          if (Xz === Lz) return this.stop(), void console.warn(`${yz} the previews stopped: the page's renderer went with its session`);
          (0, Bz.d)(tz), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, Jz.i)(this.module) || "failed" === (0, wz.H)())
      }
      hostCall(zz, tz) {
        if (this.settleIfTrapped()) return zz;
        try {
          return tz()
        } catch (sz) {
          if (this.stopIfTrapped(sz)) return zz;
          throw sz
        }
      }
      guarded(zz) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return zz()
        } catch (tz) {
          throw this.stopIfTrapped(tz), tz
        }
      }
      registryOf(zz) {
        return {
          Isz: (tz, sz) => {
            this.hostCall(void 0, (() => {
              zz.Isz(tz, sz)
            }))
          },
          Csz: tz => {
            this.hostCall(void 0, (() => {
              zz.Csz(tz)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Tz.e)(null)), !0)
      }
      stopIfTrapped(zz) {
        return !(null === this.module || !(0, Jz.j)(this.module, zz)) && (this.stopForTrap(zz), !0)
      }
      stopForTrap(zz) {
        this.stop(), (0, Tz.e)(null), (0, Az.e)("previews", zz)
      }
      stop() {
        this.stopped = !0;
        for (const zz of this.previews.values()) zz.abandon()
      }
      logError(zz, tz) {
        const sz = `${zz}:${tz}`;
        this.loggedErrors.has(sz) || (this.loggedErrors.add(sz), console.warn(`${yz} error ${zz} (detail ${tz})`))
      }
    }
    let zt = null;

    function tt() {
      return zt ??= new Ez(function() {
        const zz = (0, xz.q)(Hz.clientSideServerUrls.staticUrl, {
          packUrl: zz => {
            var tz, sz;
            return null !== (tz = null === (sz = Iz.g.current) || void 0 === sz ? void 0 : sz.modelUrl(zz)) && void 0 !== tz ? tz : null
          }
        });
        return {
          loadModule: pz,
          startModels: async zz => {
            const {
              pageModelPool: tz
            } = await sz.e(42).then((() => sz(42415))), {
              pool: Fz
            } = tz(zz);
            return (zz, tz) => Fz.build(zz, tz)
          },
          fetchAnimations: async () => oz(await (0, Fz.G)(Vz())),
          playerFile: async () => (await (0, xz.n)()).PLAYER_FILE,
          onAnimationsFailed: (zz, tz) => {
            vz("previewAnimations", Vz(), zz, tz)
          },
          provideBuiltInAnimationPack: zz => {
            Nz().provide(zz)
          },
          openExtras: ez.z,
          files: zz,
          images: (0, Iz.k)((0, rz.m)(zz.url), (() => Iz.g.current)),
          pack: Iz.g,
          game: Cz.b,
          fetchModel: zz => (0, xz.i)(zz),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: zz => requestAnimationFrame(zz),
          cancelFrame: zz => {
            cancelAnimationFrame(zz)
          },
          onRenderFailed: Rz,
          onFatal: (zz, tz) => {
            console.error(`${yz} the previews stopped: renderer error ${zz} (detail ${tz})`)
          }
        }
      }()), zt
    }
    var st = sz(574),
      Ft = sz(38046),
      Wt = sz(2965);
    const Xt = {
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
    const Ot = "[bloxd-previews]",
      ot = new Uint32Array(5);

    function vt(zz) {
      return st.k.indexOf(zz)
    }
    const Ut = new WeakSet;

    function Kt(zz) {
      const tz = (0, Ft.c)(zz),
        sz = null === tz ? -1 : ut(tz);
      return -1 !== sz ? sz : (Ut.has(zz) || (Ut.add(zz), console.warn(`${Ot} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function ut(zz) {
      var tz;
      return null !== (tz = Xt[zz]) && void 0 !== tz ? tz : -1
    }

    function Nt(zz, tz) {
      const {
        canvas: sz
      } = tz;
      sz.style.width = "100%", sz.style.height = "100%", sz.style.display = "block", zz.appendChild(sz)
    }

    function bt(zz) {
      const tz = zz.getBoundingClientRect();
      return [tz.width, tz.height]
    }
    class wt {
      constructor(zz, tz) {
        this.preview = zz, this.showView = tz
      }
      show(zz) {
        this.showView(this.preview, zz)
      }
      resize(zz, tz) {
        this.preview.resize(zz, tz)
      }
      close() {
        this.preview.close()
      }
    }
    class Dt {
      constructor(zz) {
        this.preview = zz, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(zz) {
          const {
            canvas: tz
          } = zz;
          let sz = null;
          const Fz = zz => {
              var Fz;
              sz = {
                pointer: zz.pointerId,
                x: zz.clientX,
                y: zz.clientY
              }, null === (Fz = tz.setPointerCapture) || void 0 === Fz || Fz.call(tz, zz.pointerId)
            },
            Wz = tz => {
              var Fz;
              const Wz = zz.orbit;
              if ((null === (Fz = sz) || void 0 === Fz ? void 0 : Fz.pointer) !== tz.pointerId || null === Wz) return;
              const Xz = tz.clientX - sz.x,
                Oz = tz.clientY - sz.y;
              sz = {
                ...sz,
                x: tz.clientX,
                y: tz.clientY
              }, zz.setOrbit({
                alpha: Wz.alpha - .01 * Xz,
                beta: Math.min(Math.PI - .01, Math.max(.01, Wz.beta - .01 * Oz)),
                radius: Wz.radius
              })
            },
            Xz = zz => {
              var tz;
              (null === (tz = sz) || void 0 === tz ? void 0 : tz.pointer) === zz.pointerId && (sz = null)
            },
            Oz = tz => {
              const sz = zz.orbit;
              if (null === sz) return;
              tz.preventDefault();
              const Fz = tz.deltaY * (tz.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : tz.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                Wz = Math.min(100, Math.max(5, sz.radius + .08 * Fz));
              zz.setOrbit({
                ...sz,
                radius: Wz
              })
            };
          return tz.style.touchAction = "none", tz.addEventListener("pointerdown", Fz), tz.addEventListener("pointermove", Wz), tz.addEventListener("pointerup", Xz), tz.addEventListener("pointercancel", Xz), tz.addEventListener("wheel", Oz, {
            passive: !1
          }), () => {
            tz.removeEventListener("pointerdown", Fz), tz.removeEventListener("pointermove", Wz), tz.removeEventListener("pointerup", Xz), tz.removeEventListener("pointercancel", Xz), tz.removeEventListener("wheel", Oz)
          }
        }(zz), this.dev = {
          canvas: () => zz.canvas,
          isolateHead: () => {
            console.warn(`${Ot} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = zz.untilSettled().then((() => {
          if (zz.isStopped) throw new Error(`${Ot} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(zz, tz) {
        this.cosmetics[zz] = tz, this.apply()
      }
      playEmote(zz) {
        null === zz || zz !== this.emote ? (this.emote = zz, this.apply()) : this.preview.replay()
      }
      untilDrawn(zz) {
        return this.preview.untilSettled()
      }
      setOrbit(zz) {
        let {
          yaw: tz,
          pitch: sz,
          radius: Fz
        } = zz;
        const Wz = this.preview.orbit;
        null !== Wz && this.preview.setOrbit({
          alpha: tz,
          beta: sz,
          radius: null !== Fz && void 0 !== Fz ? Fz : Wz.radius
        })
      }
      resetCamera() {}
      resize(zz, tz) {
        this.preview.resize(zz, tz)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var zz;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), ot, null === (zz = this.emote) ? -1 : ut(zz))
      }
    }

    function gt(zz, tz) {
      let {
        mobType: sz,
        variation: Fz,
        animation: Wz
      } = tz;
      zz.setMob(vt(sz), null !== Fz && void 0 !== Fz ? Fz : "", 1, Kt(Wz))
    }

    function Ht(zz, tz) {
      let {
        mobType: sz,
        variation: Fz,
        metaInfo: Wz,
        tamed: Xz
      } = tz;
      zz.setPet(vt(sz), Fz, Wz, Xz)
    }
    const Bt = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Pt {
      constructor(zz, tz, sz, Fz) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, zz(sz.width, Fz[1], Fz).then((zz => {
          if (this.closed) return void zz.close();
          const {
            style: sz
          } = zz.canvas;
          sz.position = "absolute", sz.top = "0", sz.visibility = "hidden", Nt(tz, zz), this.preview = zz, this.apply()
        })).catch((zz => {
          console.error(`${Ot} couldn't open a lineup figure`, zz)
        }))
      }
      update(zz, tz, sz, Fz, Wz) {
        this.figure = zz, this.shown = tz, this.order = sz, this.span = Fz, this.lineup = Wz, this.apply()
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.preview) || void 0 === zz || zz.close(), this.preview = null
      }
      apply() {
        const {
          preview: zz,
          figure: tz,
          lineup: sz
        } = this;
        if (null === zz || null === tz) return;
        if (this.given !== tz) {
          var Fz;
          this.given = tz, this.loaded = !1;
          const sz = null === tz.qY ? 0 : null !== (Fz = (0, Wt.b)(tz.qY)) && void 0 !== Fz ? Fz : 0;
          zz.setFigure(function(zz) {
            return JSON.stringify(Object.fromEntries(zz.cosmetics))
          }(tz), sz, Kt(tz.animation), tz.size), zz.untilSettled().then((() => {
            this.given === tz && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: Wz,
          width: Xz
        } = this.span;
        zz.resize(Xz, sz[1], sz);
        const {
          style: Oz
        } = zz.canvas;
        Oz.left = `${Wz}px`, Oz.width = `${Xz}px`, Oz.zIndex = this.order, Oz.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class rt {
      constructor(zz, tz) {
        this.open = tz, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = bt(zz), this.layer = document.createElement("div");
        const {
          style: sz
        } = this.layer;
        sz.position = "relative", sz.isolation = "isolate", sz.overflow = "hidden", sz.width = "100%", sz.height = "100%", sz.pointerEvents = "none", zz.appendChild(this.layer)
      }
      show(zz) {
        this.view = zz, this.place()
      }
      resize(zz, tz) {
        this.size = [zz, tz], this.place()
      }
      close() {
        for (const zz of this.figures) zz.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: zz,
          shown: tz
        } = this.view;
        for (const Fz of this.figures.splice(zz.length)) Fz.close();
        const {
          size: sz
        } = this;
        zz.forEach(((Fz, Wz) => {
          var Xz;
          const Oz = function(zz, tz, sz, Fz) {
            let [Wz, Xz] = Fz;
            const Oz = (zz + .5) * Wz / tz,
              oz = Math.min(Math.max(Wz / tz, 2 * sz * Xz), 2 * Math.max(Oz, Wz - Oz));
            return {
              left: Oz - oz / 2,
              width: oz
            }
          }(Wz, zz.length, function(zz) {
            let {
              animation: tz,
              size: sz
            } = zz;
            const {
              aimed: Fz,
              ready: Wz
            } = Bt;
            return (Kt(tz) === Xt.gunAimed ? Fz : Wz) * sz
          }(Fz), sz);
          this.figures[Wz] ??= new Pt(this.open, this.layer, Oz, sz), this.figures[Wz].update(Fz, null !== (Xz = tz[Wz]) && void 0 !== Xz && Xz, function(zz, tz) {
            return String(Math.round(1e3 * zz) + tz)
          }(Fz.size, Wz), Oz, sz)
        }))
      }
    }
    const Yt = {
      player: hz,
      store: Qz
    };
    class xt {
      constructor(zz) {
        this.page = zz
      }
      async openMob(zz) {
        return new wt(await this.open(zz, dz), gt)
      }
      async openPet(zz) {
        return new wt(await this.open(zz, dz), Ht)
      }
      openMobLineup(zz) {
        return new rt(zz, ((zz, tz, sz) => this.page.openPreview(dz, zz, tz, sz)))
      }
      async openCharacter(zz, tz) {
        return new Dt(await this.open(zz, Yt[tz]))
      }
      async open(zz, tz) {
        const [sz, Fz] = bt(zz), Wz = await this.page.openPreview(tz, sz, Fz);
        return Nt(zz, Wz), Wz
      }
    }
  },
  36189: (zz, tz, sz) => {
    sz.d(tz, {
      A: () => Dz,
      D: () => Hz,
      c: () => Fz,
      g: () => Wz,
      j: () => Nz,
      k: () => gz,
      o: () => Kz,
      p: () => Bz,
      r: () => vz,
      u: () => Uz,
      w: () => bz,
      z: () => wz
    });
    const Fz = [{
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

    function Wz(zz, tz) {
      const {
        numLines: sz,
        charsPerLine: Wz
      } = Fz[tz];
      return Pz(zz, sz, Wz, !1)
    }
    const Xz = 7 / 8,
      Oz = .25,
      oz = 8;

    function vz(zz, tz) {
      return {
        width: Math.min(zz, oz) - 2 * Oz,
        height: Math.min(tz, oz) - 2 * Oz
      }
    }

    function Uz(zz, tz, sz) {
      const Wz = vz(zz, tz),
        {
          numLines: Oz,
          charsPerLine: oz
        } = Fz[sz];
      return {
        numLines: Math.max(1, Math.floor(Oz / Xz * Wz.height)),
        charsPerLine: Math.max(1, Math.floor(oz * Wz.width))
      }
    }

    function Kz(zz, tz, sz, Fz) {
      const {
        numLines: Wz,
        charsPerLine: Xz
      } = Uz(sz, Fz, tz);
      return Pz(zz, Wz, Xz, !1)
    }
    const uz = 32e3;

    function Nz(zz) {
      return zz.slice(0, uz)
    }
    const bz = 512e3,
      wz = 64,
      Dz = bz;

    function gz(zz, tz) {
      const sz = Math.max(0, Dz - tz),
        Fz = Math.min(bz, sz);
      return zz.slice(0, Fz)
    }
    const Hz = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      qo: {
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

    function Bz(zz, tz) {
      const {
        numLines: sz,
        charsPerLine: Fz
      } = Hz[tz];
      return Pz(zz, sz, Fz, !1)
    }

    function Pz(zz, tz, sz, Fz, Wz) {
      (Wz || Fz) && (zz = zz.slice(0, null !== Wz && void 0 !== Wz ? Wz : tz * sz));
      const Xz = zz.split("\n");
      if (Xz.length > tz && Xz.splice(tz, Xz.length - tz), !Fz)
        for (let Oz = 0; Oz < Xz.length; Oz++) {
          const zz = Xz[Oz];
          zz.length > sz && (Xz[Oz] = zz.substring(0, sz), Xz.length < tz && Xz.splice(Oz + 1, 0, zz.substring(sz)))
        }
      return Xz.join("\n")
    }
  },
  42336: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42345: (zz, tz, sz) => {
    zz.exports = sz.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);