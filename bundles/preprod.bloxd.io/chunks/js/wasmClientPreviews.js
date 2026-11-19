export const id = 56;
export const ids = [56];
export const modules = {
  38017: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => nz,
      d: () => iz
    });
    const Ez = new WeakMap;

    function nz(zz, uz) {
      return Ez.set(zz, uz), zz
    }

    function iz(zz) {
      var uz;
      return null !== (uz = Ez.get(zz)) && void 0 !== uz ? uz : null
    }
  },
  38036: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Mz
    });
    var Ez = bz(1212);

    function nz(zz) {
      const uz = /(\d*\.?\d+)px/.exec(zz);
      return uz ? Number(uz[1]) : null
    }

    function iz(zz) {
      return zz.split(/[\s,]+/).pop()
    }
    let lz = !1;
    const Mz = {
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
      drawText: function(zz, uz, Ez, Mz, tz, Hz) {
        if (tz <= 0 || Hz <= 0 || this.fontSize <= 0) return {
          height: 0
        };
        const {
          fontStyle: Oz,
          fontVariant: pz,
          fontWeight: dz,
          fontSize: Fz,
          font: Zz
        } = this, Rz = [Oz, pz, dz, `${Fz}px`, Zz].filter(Boolean).join(" "), Kz = [
          [dz, `${Fz}px`, iz(Zz)].filter(Boolean).join(" "), `${Fz}px sans-serif`
        ], wz = zz.font, Xz = function(zz, uz, bz) {
          for (const Ez of uz) {
            zz.font = Ez;
            const uz = nz(zz.font),
              lz = iz(Ez);
            if (null !== uz && Math.abs(uz - bz) <= .5 && zz.font.toLowerCase().includes(lz.toLowerCase())) return Ez
          }
          return null
        }(zz, [Rz, ...Kz], Fz);
        Xz !== Rz && function(zz, uz, Ez) {
          lz || (lz = !0, Promise.resolve().then((() => bz(1068))).then((bz => {
            let {
              WR: nz
            } = bz;
            nz(new Error("A canvas didn't take canvasTxt's font"), {
              font: zz,
              MZ: uz,
              drawnWith: null !== Ez && void 0 !== Ez ? Ez : "the kept font, scaled"
            })
          })).catch((() => {})))
        }(Rz, wz, Xz);
        const fz = nz(zz.font);
        if (null === Xz && null !== fz && fz > 0) {
          const bz = Fz / fz;
          zz.save();
          try {
            return zz.scale(bz, bz), {
              height: this.drawLines(zz, uz, Ez / bz, Mz / bz, tz / bz, Hz / bz, fz).height * bz
            }
          } finally {
            zz.restore()
          }
        }
        return this.drawLines(zz, uz, Ez, Mz, tz, Hz, Fz)
      },
      drawLines: function(zz, uz, bz, nz, iz, lz, Mz) {
        const tz = bz + iz,
          Hz = nz + lz;
        let Oz, pz = nz + lz / 2 + Mz / 2;
        "right" === this.align ? (Oz = tz, zz.textAlign = "right") : "left" === this.align ? (Oz = bz, zz.textAlign = "left") : (Oz = bz + iz / 2, zz.textAlign = "center");
        for (const Ez of uz) {
          zz.measureText(Ez).width >= iz && (uz = uz.replace(Ez, ""))
        }
        uz = (0, Ez.W)(uz);
        const dz = [],
          Fz = uz.split("\n"),
          Zz = this.justify ? zz.measureText("\u200a").width : 0;
        Fz.forEach((uz => {
          let bz = zz.measureText(uz).width;
          if (bz <= iz) dz.push(uz);
          else {
            let Ez = uz;
            const nz = iz;
            let lz, Mz, tz;
            for (bz = zz.measureText(Ez).width; bz > nz;) {
              for (lz = 0, Mz = 0, tz = ""; Mz < nz;) lz++, tz = Ez.substr(0, lz), Mz = zz.measureText(tz).width;
              lz--, tz = tz.substr(0, lz);
              const uz = lz;
              if (" " !== Ez.substr(lz, 1)) {
                for (;
                  " " !== Ez.substr(lz, 1) && 0 !== lz;) lz--;
                0 === lz && (lz = uz), tz = Ez.substr(0, lz)
              }
              tz = this.justify ? this.justifyLine(zz, tz, Zz, "\u200a", iz) : tz, Ez = Ez.substr(lz), bz = zz.measureText(Ez).width, dz.push(tz)
            }
            bz > 0 && dz.push(Ez)
          }
        }));
        const Rz = this.lineHeight ? this.lineHeight : this.getTextHeight(zz, uz),
          Kz = Rz * (dz.length - 1),
          wz = Kz / 2;
        let Xz = nz;
        "top" === this.vAlign ? pz = nz + Mz : "bottom" === this.vAlign ? (pz = Hz - Kz, Xz = Hz) : (Xz = nz + lz / 2, pz -= wz), dz.forEach((uz => {
          uz = uz.trim(), zz.fillText(uz, Oz, pz), pz += Rz
        })), this.debug && (zz.lineWidth = 3, zz.strokeStyle = "#00909e", zz.strokeRect(bz, nz, iz, lz), zz.lineWidth = 2, zz.strokeStyle = "#f6d743", zz.beginPath(), zz.moveTo(Oz, nz), zz.lineTo(Oz, Hz), zz.stroke(), zz.strokeStyle = "#ff6363", zz.beginPath(), zz.moveTo(bz, Xz), zz.lineTo(tz, Xz), zz.stroke());
        return {
          height: Kz + Rz
        }
      },
      getTextHeight: function(zz, uz) {
        const bz = zz.textBaseline;
        zz.textBaseline = "bottom";
        const {
          actualBoundingBoxAscent: Ez
        } = zz.measureText(uz);
        return zz.textBaseline = bz, Ez
      },
      justifyLine: function(zz, uz, bz, Ez, nz) {
        const iz = uz.trim(),
          lz = zz.measureText(iz).width,
          Mz = iz.split(/\s+/).length - 1,
          tz = Math.floor((nz - lz) / bz);
        if (Mz <= 0 || tz <= 0) return iz;
        const Hz = Math.floor(tz / Mz);
        let Oz = tz - Mz * Hz,
          pz = [];
        for (let dz = 0; dz < Hz; dz++) pz.push(Ez);
        pz = pz.join("");
        return iz.replace(/\s+/g, (zz => {
          const uz = Oz > 0 ? pz + Ez : pz;
          return Oz--, zz + uz
        }))
      }
    }
  },
  38040: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Rz,
      h: () => Zz,
      k: () => dz,
      l: () => Oz,
      n: () => pz
    });
    var Ez = bz(4035),
      nz = bz(328);
    const iz = 1024,
      lz = 1536,
      Mz = 2 * Ez.i + 1,
      tz = new Intl.NumberFormat("en", {
        maximumSignificantDigits: 15
      }),
      Hz = 1.5;

    function Oz(zz, uz, bz) {
      if ("string" !== typeof zz) return uz;
      try {
        const bz = JSON.parse(zz);
        return bz && "object" === typeof bz ? bz : uz
      } catch (Ez) {
        return void 0 !== bz && console.error(`Couldn't parse ${bz}`, Ez), uz
      }
    }

    function pz(zz) {
      return Oz(zz, null, "a leaderboard's rows")
    }

    function dz(zz, uz) {
      var bz, Ez;
      return null !== uz && void 0 !== uz ? uz : {
        status: null !== (bz = zz.status) && void 0 !== bz ? bz : "loading",
        entries: null !== (Ez = zz.entries) && void 0 !== Ez ? Ez : []
      }
    }

    function Fz(zz, uz) {
      return "number" === typeof zz && Number.isFinite(zz) && zz > 0 ? zz : uz
    }

    function Zz(zz, uz) {
      const bz = Fz(zz.size, 1);
      let Ez = Fz(zz.width, Fz(2.5 * bz, 2.5)),
        nz = Fz(zz.height, Fz(3.75 * bz, 3.75));
      Number.isFinite(iz * nz / Ez) && Number.isFinite(lz * Ez / nz) || (Ez = 2.5, nz = 3.75);
      const Mz = nz / Ez,
        tz = Math.max(1, Math.min(iz, uz / Mz));
      return {
        width: Ez,
        height: nz,
        layoutWidth: Math.max(iz, lz / Mz),
        layoutHeight: Math.max(lz, iz * Mz),
        pixelWidth: Math.round(tz),
        pixelHeight: Math.round(Math.max(1, Math.min(uz, tz * Mz)))
      }
    }

    function Rz(zz, uz, bz, lz, Oz, pz) {
      zz.setTransform(1, 0, 0, 1, 0, 0), zz.fillStyle = nz.N.defaultNameTagBackground, zz.fillRect(0, 0, uz, bz), zz.scale(uz / lz.layoutWidth, bz / lz.layoutHeight), zz.translate((lz.layoutWidth - iz) / 2, 0),
        function(zz, uz, bz, iz) {
          var lz, Oz, pz, dz;
          const {
            top: Fz,
            around: Zz,
            showPlayerText: Rz,
            localPlayerDbId: Xz
          } = bz, {
            whiteUiText: fz,
            grayUiText: sz,
            yellowUiText: rz
          } = nz.N;
          zz.textBaseline = "middle";
          const oz = function(uz, bz, Ez, nz, iz, lz) {
              let Mz = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : "left";
              zz.font = `bold ${nz}px 'Jetbrains Mono', monospace`, zz.fillStyle = iz, zz.textAlign = Mz;
              let tz = uz.replace(/[\r\n\t]/g, " ");
              if (zz.measureText(tz).width > lz) {
                for (; tz.length > 0 && zz.measureText(`${tz}\u2026`).width > lz;) tz = tz.slice(0, -1);
                tz += "\u2026"
              }
              zz.fillText(tz, bz, Ez)
            },
            Nz = uz => {
              zz.fillStyle = fz, zz.globalAlpha = .15, zz.fillRect(24, uz, 976, 2), zz.globalAlpha = 1
            },
            vz = null === Xz ? null : (0, nz.oc)(Xz),
            xz = zz => null !== vz && zz.playerHash === vz,
            Jz = Kz(Fz.entries, Ez.j),
            Az = "ready" === Fz.status && Jz.length > 0,
            Tz = null === Zz ? [] : Kz(Zz.entries, Mz),
            Lz = Jz.some(xz),
            Pz = null === Zz ? null : function(zz) {
              const uz = zz;
              if (!uz || !Number.isFinite(uz.rank) || !Number.isFinite(uz.tied) || !Number.isFinite(uz.total)) return null;
              return uz
            }(Zz.standing),
            Gz = Tz.find(xz),
            az = Jz.find(xz),
            Vz = null === Pz || void 0 === Gz ? null : {
              value: Gz.value,
              rank: Pz.rank
            },
            mz = wz(Jz, void 0 === az || az.value === (null === Vz || void 0 === Vz ? void 0 : Vz.value) ? Vz : null),
            qz = wz(Tz, Vz),
            hz = (zz, uz) => {
              const bz = zz.findIndex(xz);
              return bz >= 0 ? uz[bz] : null
            },
            Uz = null !== (lz = null !== (Oz = null === Pz || void 0 === Pz ? void 0 : Pz.rank) && void 0 !== Oz ? Oz : hz(Tz, qz)) && void 0 !== lz ? lz : hz(Jz, mz);
          zz.font = "bold 34px 'Jetbrains Mono', monospace";
          const cz = [...Az ? mz : [], ...Lz ? [] : qz],
            gz = Math.min(280, Math.max(0, ...cz.map((uz => zz.measureText(tz.format(uz)).width)))),
            Sz = gz <= 80,
            yz = Sz ? 80 : 32 + gz,
            Dz = Sz ? 148 : yz + 28,
            Qz = 660 - Dz;
          oz(`TOP ${Ez.j}  /  ALL TIME`, 24, 52, 28, sz, 976), oz(Rz ? String(null !== (pz = uz.title) && void 0 !== pz ? pz : "Leaderboard").slice(0, 64) : "Leaderboard", 24, 108, 52, fz, 976), oz("RANK", 32, 174, 28, sz, Dz - 40), oz("PLAYER", Dz, 174, 28, sz, Qz), oz(Rz ? String(null !== (dz = uz.scoreLabel) && void 0 !== dz ? dz : "Score").slice(0, 24) : "Score", 992, 174, 28, sz, 304, "right"), Nz(202);
          const Wz = (iz - 232) / (Ez.j + Hz + Mz),
            ez = 208 + Ez.j * Wz,
            jz = ez + Hz * Wz,
            Iz = (uz, bz, Ez, nz) => {
              const iz = xz(uz);
              zz.fillStyle = iz ? rz : fz, zz.globalAlpha = iz ? .15 : nz ? .035 : 0, zz.fillRect(24, Ez - Wz / 2 + 1, 976, Wz - 2), zz.globalAlpha = 1;
              const lz = iz ? rz : fz;
              oz(tz.format(bz), yz, Ez, 34, lz, Sz ? 80 : gz, Sz ? "center" : "right"), oz(Rz ? String(uz.name).slice(0, 64) : "Player", Dz, Ez, 34, lz, Qz);
              const Mz = tz.format(uz.value);
              oz(zz.measureText(Mz).width > 304 ? uz.value.toExponential(6) : Mz, 992, Ez, 34, lz, 304, "right")
            };
          if (Az)
            for (const [Ez, nz] of Jz.entries()) Iz(nz, mz[Ez], 208 + (Ez + .5) * Wz, Ez % 2 === 0);
          else {
            const zz = "error" === Fz.status,
              uz = zz ? "Couldn't load leaderboard" : "ready" === Fz.status ? "No scores yet" : "Loading leaderboard\u2026",
              bz = zz ? "Trying again shortly" : "ready" === Fz.status ? "Be the first on the board!" : "Fetching the top players",
              Ez = (208 + ez) / 2;
            oz(uz, 512, Ez - 28, 40, zz ? nz.N.redUiText : fz, 960, "center"), oz(bz, 512, Ez + 27, 30, sz, 960, "center")
          }
          const Bz = ez + Hz * Wz / 2;
          if (null === Uz) Nz(Bz);
          else {
            const uz = null === Pz ? 0 : Pz.tied - 1,
              bz = `YOUR RANK #${tz.format(Uz)}${null===Pz?"":` of ${tz.format(Pz.total)}`}`;
            zz.font = "bold 36px 'Jetbrains Mono', monospace";
            const Ez = Math.max(20, Math.min(36, Math.floor(34560 / zz.measureText(bz).width)));
            oz(bz, 512, Bz - (uz > 0 ? 15 : 0), Ez, rz, 960, "center"), uz > 0 && oz(`Tied with ${tz.format(uz)} other${1===uz?"":"s"}`, 512, Bz + 24, 24, sz, 960, "center")
          }
          if (null === Zz) return;
          const Cz = jz + Mz * Wz / 2;
          if (Lz) oz(`You're in the top ${Ez.j}!`, 512, Cz, 40, rz, 960, "center");
          else if (0 === Tz.length) oz("You're not on this board yet", 512, Cz, 34, sz, 960, "center");
          else
            for (const [Ez, nz] of Tz.entries()) Iz(nz, qz[Ez], jz + (Ez + .5) * Wz, Ez % 2 === 0)
        }(zz, Oz, pz, lz.layoutHeight)
    }

    function Kz(zz, uz) {
      return Array.isArray(zz) ? zz.slice(0, uz).filter((zz => zz && Number.isFinite(zz.rank) && Number.isFinite(zz.value))) : []
    }

    function wz(zz, uz) {
      const bz = [];
      let Ez = !1;
      return zz.forEach(((nz, iz) => {
        if (null !== uz && nz.value === uz.value) return void bz.push(uz.rank);
        const lz = iz > 0 && nz.value === zz[iz - 1].value;
        lz || (Ez = 0 === iz && 1 !== nz.rank), bz.push(lz && !Ez ? bz[iz - 1] : nz.rank)
      })), bz
    }
  },
  38239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz,
      e: () => iz
    });
    const Ez = 32;

    function nz(zz) {
      return Array.from(zz).length
    }

    function iz(zz) {
      const uz = [""];
      let bz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        nz = "";
      const iz = () => {
        uz.push(""), bz = 0, nz = ""
      };
      for (const lz of zz.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
        if (/^\r?\n$/.test(lz)) iz();
        else if (/^\s+$/.test(lz)) nz += lz;
      else if (lz.length > 0) {
        const zz = Array.from(lz);
        bz > 0 && bz + nz.length + zz.length > Ez && iz(), uz[uz.length - 1] += nz, bz += nz.length, nz = "";
        for (const nz of zz) bz >= Ez && iz(), uz[uz.length - 1] += nz, bz++
      }
      return uz[uz.length - 1] += nz, uz
    }
  },
  42555: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      WasmPreviewHost: () => ru,
      pageBuiltInAnimationPack: () => dz,
      pagePreviews: () => zu,
      previewModule: () => Wz
    });
    var Ez = bz(3475),
      nz = bz(597);
    const iz = "[bloxd-wasm-client]";

    function lz(zz) {
      const uz = {
        wasm: "unknown",
        client: String(nz.c)
      };
      try {
        var bz;
        uz.wasm = null !== (bz = null === zz || void 0 === zz ? void 0 : zz.Wp()) && void 0 !== bz ? bz : uz.wasm
      } catch {}
      return uz
    }
    async function Mz(zz) {
      if (zz.length < 2 || 31 !== zz[0] || 139 !== zz[1]) return zz;
      if ("undefined" === typeof DecompressionStream) {
        const {
          ungzip: uz
        } = await bz.e(218).then((() => bz(36402)));
        return uz(zz)
      }
      const uz = new Blob([zz]).stream().pipeThrough(new DecompressionStream("gzip"));
      return new Uint8Array(await new Response(uz).arrayBuffer())
    }

    function tz(zz, uz, Ez, nz) {
      Promise.resolve().then((() => bz(40140))).then((bz => {
        let {
          reportDataLoadFailure: iz
        } = bz;
        iz(zz, uz, Ez, nz)
      }), (uz => {
        console.warn(`${iz} ${zz} didn't load, and the report couldn't be sent`, Ez.error, uz)
      }))
    }
    const Hz = [3e4, 12e4, 3e5];
    class Oz {
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
        const uz = lz(zz),
          bz = await async function(zz, uz) {
            let bz;
            try {
              bz = await zz()
            } catch (Ez) {
              return {
                stage: "fetch",
                error: Ez
              }
            }
            try {
              return uz(bz) ? null : {
                stage: "decode",
                error: null
              }
            } catch (Ez) {
              return {
                stage: "decode",
                error: Ez
              }
            }
          }((() => this.deps.fetch()), (uz => {
            const bz = zz.Tnz(uz);
            return bz && this.resolveSet(uz), bz
          }));
        if (null !== bz) {
          if ("fetch" === bz.stage) {
            this.loading = null;
            const uz = Hz[this.retries++];
            void 0 !== uz && this.deps.later((() => {
              this.provide(zz)
            }), uz)
          }
          this.reported || (this.reported = !0, this.deps.onFailed(bz, uz))
        }
      }
    }
    let pz = null;

    function dz() {
      return pz ??= new Oz({
        fetch: async () => Mz(await (0, Ez.z)(Fz(), {
          priority: "low"
        })),
        onFailed: (zz, uz) => {
          tz("builtInAnimations", Fz(), zz, uz)
        },
        later: (zz, uz) => {
          setTimeout(zz, uz)
        }
      }), pz
    }

    function Fz() {
      return bz(42562)
    }
    var Zz = bz(3468),
      Rz = bz(35811),
      Kz = bz(39940),
      wz = bz(1195),
      Xz = bz(311),
      fz = bz(39965),
      sz = bz(40209),
      rz = (bz(39987), bz(40163)),
      oz = bz(40165),
      Nz = bz(40169),
      vz = bz(39976),
      xz = bz(40217),
      Jz = bz(40223),
      Az = bz(40002),
      Tz = bz(40093),
      Lz = bz(40099),
      Pz = bz(40213),
      Gz = bz(41816),
      az = bz(39979);
    const Vz = "[bloxd-previews]",
      mz = 4e5,
      qz = 0,
      hz = 1,
      Uz = 2,
      cz = 1,
      gz = 2,
      Sz = 3,
      yz = 0,
      Dz = 1,
      Qz = 2;

    function Wz(zz) {
      const uz = zz,
        bz = (0, fz.E)(zz),
        Ez = (0, fz.i)(zz);
      return null !== bz && null !== Ez && "function" === typeof uz.xnz && "function" === typeof uz.Jnz && "function" === typeof uz.Anz ? uz : null
    }

    function ez(zz, uz, bz) {
      let [Ez, nz] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [zz, uz], iz = Math.min(Number.isFinite(bz) && bz > 0 ? bz : 1, 2);
      const lz = Math.max(0, Ez, zz) * Math.max(0, nz, uz) * iz * iz;
      return lz > mz && (iz *= Math.sqrt(mz / lz)), [Math.max(1, Math.floor(Math.max(0, zz) * iz)), Math.max(1, Math.floor(Math.max(0, uz) * iz))]
    }

    function jz() {
      return bz(42571)
    }
    async function Iz(zz, uz) {
      "lost" === zz && (0, Az.y)();
      const Ez = await (0, Az.I)();
      if (null === Ez || (0, fz.m)(Ez) || (0, Az.e)()) return;
      const nz = "webgpu" === Ez.backend;
      if (!nz && "lost" !== zz) return;
      const iz = nz ? (0, fz.N)(zz) : null;
      if (null !== iz) {
        const bz = `WebGPU failed at home (${zz}${void 0===uz?"":`: ${uz instanceof Error?uz.message:(0,az.e)(uz)}`}) and ${iz}`;
        return console.warn(`${Vz} ${bz}: the previews stop`, null !== uz && void 0 !== uz ? uz : ""), void(0, Az.v)(bz)
      }(0, Az.s)();
      try {
        await async function(zz, uz, Ez) {
          var nz;
          let {
            backend: iz,
            adapter: Mz
          } = zz;
          const tz = (0, Zz.R)(),
            {
              flushCrashReports: Hz,
              reportRenderReload: Oz
            } = await Promise.resolve().then((() => bz(40140)));
          Oz(iz, "start_failed" === uz ? 0 : 1, lz(tz ? (0, Zz.G)() : null), {
            cause: uz,
            error: "lost" === uz && null !== (nz = (0, fz.S)(tz ? (0, fz.E)((0, Zz.G)()) : null)) && void 0 !== nz ? nz : Ez,
            context: {
              adapter: Mz,
              boundAtMs: "start_failed" === uz ? null : (0, Az.F)(),
              indirectHangs: (0, Az.z)()
            }
          }), await Hz(Tz.c)
        }(Ez, zz, uz)
      } catch (Mz) {
        console.warn(`${Vz} ${Ez.backend} failed at home (${zz}), and its report couldn't be sent`, Mz)
      }(0, Tz.j)()
    }
    async function Bz() {
      if (!(0, Zz.R)()) {
        const zz = await (0, Az.I)();
        if (null === zz || (0, fz.m)(zz)) return null;
        if (await (0, Rz.g)(await zz.load(), Kz.h), !(0, Zz.R)()) return null
      }
      return Wz((0, Zz.G)())
    }
    class Cz {
      constructor(zz, uz, bz, Ez, nz, iz) {
        this.page = zz, this.host = uz, this.id = bz, this.canvas = Ez, this.size = nz, this.models = void 0, this.images = void 0, this.write = void 0, this.outcomes = [], this.closed = !1, this.quiet = 0, this.settled = [];
        const lz = {
            ...iz.images,
            glbUrl: zz => {
              var uz;
              return null !== (uz = this.models.drawnUrl(zz)) && void 0 !== uz ? uz : iz.images.glbUrl(zz)
            }
          },
          Mz = uz => zz.modelFile(uz);
        this.images = new sz.f(lz, (zz => {
          console.warn(`${Vz} image ${zz.key.kind}:${zz.key.index}:${zz.key.word} failed`, zz.error)
        }), {
          fetchFile: Mz,
          fetchImage: uz => zz.imageFile(uz)
        }), zz.startModels(), this.models = new rz.l(iz.files, ((uz, bz) => zz.buildModel(uz, bz)), (zz => {
          console.warn(`${Vz} model file ${zz.file} (${zz.url}) failed`, zz.error)
        }), {
          fetchFile: Mz,
          onWritten: (zz, uz) => {
            this.images.glbWritten(zz, uz)
          },
          onTaken: (zz, uz) => {
            this.images.glbTaken(zz, uz)
          }
        }), this.write = (zz, uz, bz) => {
          if (this.closed) return !0;
          if (zz === rz.e) {
            const zz = new DataView(bz.buffer, bz.byteOffset, Nz.b),
              Ez = zz.getUint32(0, !0),
              nz = zz.getUint32(Nz.c, !0),
              iz = this.page.hostCall(Qz, (() => this.host.Viz(this.id, Ez, uz, bz.subarray(Nz.b))));
            return this.outcomes.push([nz, iz]), !0
          }
          return zz === sz.c && (this.page.hostCall(void 0, (() => {
            this.host.qiz(this.id, bz)
          })), !0)
        }
      }
      get isClosed() {
        return this.closed
      }
      get isStopped() {
        return this.page.isStopped
      }
      resize(zz, uz, bz) {
        if (this.closed) return;
        const [Ez, nz] = ez(zz, uz, this.page.dpr(), bz);
        Ez === this.size[0] && nz === this.size[1] || (this.size = [Ez, nz], this.page.hostCall(void 0, (() => {
          this.host.resize(this.id, Ez, nz)
        })))
      }
      setMob(zz, uz, bz, Ez) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Diz(this.id, zz, uz, bz, Ez))))
      }
      setPet(zz, uz, bz, Ez) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Wiz(this.id, zz, uz, bz, Ez))))
      }
      setPlayer(zz, uz, bz) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.giz(this.id, zz, uz, bz))))
      }
      setFigure(zz, uz, bz, Ez) {
        return this.closed ? 0 : this.page.hostCall(0, (() => this.page.called(this.host.Siz(this.id, zz, uz, bz, Ez))))
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
          alpha: uz,
          beta: bz,
          radius: Ez
        } = zz;
        this.closed || this.page.hostCall(void 0, (() => {
          this.host.Qiz(this.id, uz, bz, Ez)
        }))
      }
      untilSettled() {
        return this.closed || this.page.isStopped ? Promise.resolve() : (this.quiet = 0, new Promise((zz => {
          this.settled.push(zz)
        })))
      }
      packChanged() {
        this.quiet = 0, this.models.refresh(), (0, xz.j)(this.images)
      }
      feed() {
        this.models.drain(this.write);
        for (const [zz, uz] of this.outcomes) {
          const bz = uz === yz ? [] : [uz === Dz ? zz : (zz | rz.i) >>> 0];
          this.models.taken(zz, bz)
        }
        this.outcomes.length = 0, this.images.drain(this.write)
      }
      collect(zz) {
        let uz = !1;
        if (zz) {
          const zz = this.host.Biz(this.id);
          for (const uz of zz) this.models.request(uz);
          const bz = this.host.Iiz(this.id);
          bz.length > 0 && this.images.onEvent(bz), uz = zz.length > 0 || bz.length > 0
        }
        const bz = this.page.modelsUnavailable ? 0 : this.models.asking + this.models.unanswered,
          Ez = uz || bz > 0 || this.images.waiting > 0 || this.images.inFlight > 0;
        this.quiet = Ez ? 0 : this.quiet + 1, this.quiet >= 3 && this.resolveSettled()
      }
      close() {
        this.closed || (this.closed = !0, this.page.closePreview(this), this.resolveSettled())
      }
      abandon() {
        this.resolveSettled()
      }
      dispose(zz) {
        this.page.hostCall(void 0, (() => {
          const uz = this.host.close(this.id);
          uz.length > 0 && this.images.onEvent(uz), this.page.isTrapped || zz.Anz(this.id)
        })), this.images.dispose(), this.canvas.remove()
      }
      resolveSettled() {
        const zz = this.settled;
        this.settled = [];
        for (const uz of zz) uz()
      }
    }
    class Yz {
      constructor(zz) {
        this.deps = zz, this.module = null, this.host = null, this.opening = null, this.pageCanvas = null, this.samples = 1, this.binding = null, this.sessionEnds = 0, this.lastEndReturned = !0, this.previews = new Map, this.nextId = 1, this.frameId = null, this.stopped = !1, this.loggedErrors = new Set, this.modelsListener = {
          onUnavailable: zz => {
            this.modelsFailed(zz)
          },
          onDecoderFailed: zz => {
            this.loggedErrors.has("modelDecoder") || (this.loggedErrors.add("modelDecoder"), console.warn(`${Vz} the Draco decoder didn't load: models waiting on it won't draw`, zz))
          },
          onWorkerLost: zz => {
            this.loggedErrors.has("modelWorker") || (this.loggedErrors.add("modelWorker"), console.warn(`${Vz} a model worker was lost: ${zz}`))
          },
          onModuleRetry: () => {}
        }, this.modelsRestarted = !1, this.costs = [], this.models = null, this.unavailable = !1, this.animations = null, this.animationTable = null, this.moduleLoad = null, this.prefetched = !1, this.prefetchedFiles = new Map, this.shaderPackArgs = null, this.JZ = {
          setShaderPack: (zz, uz, bz, Ez, nz) => (this.shaderPackArgs = [zz, uz, bz, Ez, nz], this.handOverShaderPack(), !0)
        }, this.frame = zz => {
          this.frameId = null;
          const uz = this.host;
          if (null !== uz && 0 !== this.previews.size && !this.settleIfTrapped() && !this.stopped) try {
            this.drawFrame(uz, zz)
          } catch (bz) {
            if (!this.stopIfTrapped(bz) && (this.stop(), (0, fz.o)(bz))) return void this.deps.onRenderFailed("frames_refused", bz);
            console.warn(`${Vz} the previews stopped: their frame threw`, bz)
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
        var zz, uz;
        return null !== (zz = null === (uz = this.host) || void 0 === uz ? void 0 : uz.attached()) && void 0 !== zz && zz
      }
      get open() {
        return this.previews.size
      }
      get frameCostMs() {
        return 0 === this.costs.length ? 0 : this.costs.reduce(((zz, uz) => zz + uz), 0) / this.costs.length
      }
      async bindSession(zz, uz, bz) {
        const Ez = this.binding,
          nz = this.sessionEnds;
        try {
          const iz = this.hostOf(zz);
          if (!iz.miz()) {
            const uz = (0, Lz.f)().sampleCount,
              lz = await bz(uz);
            if (this.sessionEnds !== nz) return this.keepRendererOfEndedSession(zz, iz, lz, uz, Ez), uz;
            if (!iz.fiz(lz)) throw new Error("the page has a renderer already");
            (0, Az.w)(performance.now()), this.samples = uz, (0, Pz.e)((0, fz.i)(zz))
          }
          if (!iz.attach(uz)) throw new Error("the page's renderer is lent to another session");
          return this.samples
        } finally {
          this.binding === Ez && this.endBinding()
        }
      }
      keepRendererOfEndedSession(zz, uz, bz, Ez, nz) {
        if (!this.lastEndReturned || null !== this.binding && this.binding !== nz) try {
          bz.free()
        } catch (iz) {
          console.warn(`${Vz} an ended session's renderer didn't free`, iz)
        } else uz.fiz(bz) && ((0, Az.w)(performance.now()), this.samples = Ez, (0, Pz.e)(this.registryOf(zz)))
      }
      async beginSession() {
        var zz;
        let uz = () => {};
        const bz = new Promise((zz => {
          uz = zz
        }));
        this.binding = {
          done: bz,
          release: uz
        }, await (null === (zz = this.opening) || void 0 === zz ? void 0 : zz.catch((() => null)));
        const Ez = this.pageCanvas;
        return this.pageCanvas = null, Ez
      }
      endSession(zz) {
        var uz, bz;
        if (this.sessionEnds++, this.lastEndReturned = zz, this.endBinding(), zz) {
          try {
            var Ez;
            null === (Ez = this.host) || void 0 === Ez || Ez.detach()
          } catch (nz) {
            return void console.warn(`${Vz} the session's core kept the page's renderer`, nz)
          }!0 === (null === (uz = this.host) || void 0 === uz ? void 0 : uz.attached()) && console.warn(`${Vz} the session's core kept the page's renderer: it ended inside its frame`), null !== this.module && !0 === (null === (bz = this.host) || void 0 === bz ? void 0 : bz.miz()) && (0, Pz.e)(this.registryOf(this.module))
        }
      }
      endBinding() {
        var zz;
        null === (zz = this.binding) || void 0 === zz || zz.release(), this.binding = null
      }
      async openPreview(zz, uz, bz, Ez) {
        const nz = await this.renderingHost(),
          iz = this.module;
        if (null === nz || null === iz) throw new Error("this page can't draw previews: it has no renderer build");
        if (this.animations ??= this.loadAnimations(nz), this.deps.pack.wanted(), this.isStopped) throw new Error("the previews stopped");
        this.guarded((() => {
          this.deps.provideBuiltInAnimationPack(iz)
        }));
        const lz = this.nextId++,
          Mz = this.deps.createCanvas(),
          [tz, Hz] = ez(uz, bz, this.deps.dpr(), Ez);
        Mz.width = tz, Mz.height = Hz;
        if (!this.guarded((() => (iz.Jnz(lz, Mz), nz.open(lz, tz, Hz, zz))))) throw this.hostCall(void 0, (() => {
          iz.Anz(lz)
        })), new Error("the page's renderer is lent to a session that is running");
        this.restartModelsIfFailed();
        const Oz = new Cz(this, nz, lz, Mz, [tz, Hz], this.deps);
        return this.previews.set(lz, Oz), this.startFrames(), Oz
      }
      prefetch() {
        if (this.prefetched || this.isStopped || (0, Az.e)() || null !== (0, Az.D)()) return;
        this.prefetched = !0;
        (null === this.module ? this.loadModule() : Promise.resolve(this.module)).then((zz => {
          null === zz || this.isStopped || (this.startModels(), this.fetchAnimationTable().catch((() => {})), this.prefetchPlayerFiles())
        }), (() => {}))
      }
      modelFile(zz) {
        return this.prefetchedOr(zz, this.deps.fetchModel)
      }
      imageFile(zz) {
        return this.prefetchedOr(zz, Ez.z)
      }
      prefetchedOr(zz, uz) {
        const bz = this.prefetchedFiles.get(zz);
        return void 0 === bz ? uz(zz) : bz.catch((() => uz(zz)))
      }
      async prefetchPlayerFiles() {
        const zz = this.deps.playerFile().then((zz => this.deps.files.url(zz))),
          uz = await Promise.all([zz, this.deps.images.lifeformAtlasUrl(xz.c)]).catch((() => null));
        if (null === uz) return;
        const [bz, Ez] = uz, nz = (zz, uz) => {
          if (null === zz) return;
          const bz = uz(zz);
          this.prefetchedFiles.set(zz, bz), bz.catch((() => {
            this.prefetchedFiles.delete(zz)
          }))
        };
        nz(bz, (zz => this.modelFile(zz))), nz(Ez, (zz => this.imageFile(zz)))
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
      buildModel(zz, uz) {
        return this.startModels(), this.models.then((bz => bz(zz, uz))).then((zz => this.unavailable ? new Promise((() => {})) : zz))
      }
      restartModelsIfFailed() {
        this.unavailable && !this.modelsRestarted && 0 === this.previews.size && (this.modelsRestarted = !0, this.models = null, this.unavailable = !1, this.startModels())
      }
      modelsFailed(zz) {
        this.unavailable = !0, this.loggedErrors.has("models") || (this.loggedErrors.add("models"), console.warn(`${Vz} the model workers didn't start: models won't draw in the previews`, zz))
      }
      called(zz) {
        return 0 !== zz && this.logError(zz, 0), zz
      }
      closePreview(zz) {
        this.previews.delete(zz.id), null !== this.module && zz.dispose(this.module), 0 === this.previews.size && null !== this.frameId && (this.deps.cancelFrame(this.frameId), this.frameId = null)
      }
      hostOf(zz) {
        if (null !== this.module && this.module !== zz) throw new Error("a second renderer module on one page");
        return this.module = zz, null === this.host && (this.host = this.guarded((() => new zz.xnz)), this.tellInGame(), this.handOverShaderPack()), this.host
      }
      tellInGame() {
        const {
          host: zz
        } = this;
        null !== zz && this.outsideCall("the game's start or end", (() => {
          zz.yiz(this.deps.game.inGame())
        }))
      }
      handOverShaderPack() {
        const {
          host: zz,
          shaderPackArgs: uz
        } = this;
        null !== zz && null !== uz && this.outsideCall("the shader pack's hand-over", (() => {
          zz.xbz(...uz) || console.warn(`${Vz} the host refused the shader pack: previews draw without it at home`)
        }))
      }
      outsideCall(zz, uz) {
        try {
          this.hostCall(void 0, uz)
        } catch (bz) {
          this.stop(), console.warn(`${Vz} the previews stopped: ${zz} threw`, bz)
        }
      }
      async loadAnimations(zz) {
        const uz = lz(null),
          bz = this.module;
        try {
          uz.wasm = null === bz ? uz.wasm : this.hostCall(uz.wasm, (() => bz.Wp()))
        } catch {}
        let Ez, nz;
        try {
          Ez = await this.fetchAnimationTable()
        } catch (iz) {
          return void this.deps.onAnimationsFailed({
            stage: "fetch",
            error: iz
          }, uz)
        }
        if (!this.settleIfTrapped()) {
          try {
            nz = zz.Uiz(Ez)
          } catch (iz) {
            if (this.stopIfTrapped(iz)) return;
            return void this.deps.onAnimationsFailed({
              stage: "decode",
              error: iz
            }, uz)
          }
          nz || this.deps.onAnimationsFailed({
            stage: "decode",
            error: null
          }, uz)
        }
      }
      async renderingHost() {
        if (null !== this.binding && await this.binding.done, this.settleIfTrapped()) return null;
        const zz = this.host;
        return null !== zz && this.guarded((() => zz.miz())) ? zz : (this.opening ??= this.openAtHome().finally((() => {
          this.opening = null
        })), this.opening)
      }
      async openAtHome() {
        var zz;
        const uz = null !== (zz = this.module) && void 0 !== zz ? zz : await this.loadModule();
        if (null === uz) return null;
        const bz = this.hostOf(uz),
          Ez = () => this.guarded((() => bz.miz()));
        if (Ez()) return bz;
        if (null !== (0, Az.D)() || (0, Az.e)()) return null;
        const nz = this.deps.createCanvas();
        nz.width = 1, nz.height = 1;
        const iz = await this.deps.openExtras();
        if (this.settleIfTrapped()) return null;
        const lz = (0, Lz.f)().sampleCount;
        let Mz;
        try {
          Mz = await (0, fz.t)(uz, "previewRenderer", nz, lz, Gz.d, iz)
        } catch (tz) {
          throw tz instanceof vz.e ? this.stopForTrap(tz) : (0, fz.r)(tz) && await this.deps.onRenderFailed("start_failed", tz), tz
        }
        return this.guarded((() => bz.fiz(Mz))) ? ((0, Az.w)(performance.now()), this.samples = lz, this.pageCanvas = nz, (0, Pz.e)(this.registryOf(uz)), bz) : Ez() ? bz : null
      }
      startFrames() {
        null !== this.frameId || this.isStopped || (this.frameId = this.deps.requestFrame(this.frame))
      }
      drawFrame(zz, uz) {
        for (const lz of this.previews.values()) lz.feed();
        if (this.stopped) return;
        const bz = this.deps.now(),
          Ez = zz.frame(uz);
        this.costs.push(this.deps.now() - bz), this.costs.length > 120 && this.costs.shift();
        const nz = 0 !== (256 & Ez),
          iz = 255 & Ez;
        for (const lz of this.previews.values()) {
          if (this.stopped) return;
          lz.collect(nz)
        }
        if (!this.stopped) {
          if (nz) {
            const uz = zz.eiz();
            for (let zz = 0; zz + 1 < uz.length; zz += 2) this.logError(uz[zz], uz[zz + 1])
          }
          if (iz === cz) return this.stop(), void this.deps.onRenderFailed("lost");
          if (iz === gz) return this.stop(), void this.deps.onFatal(zz.Giz(), zz.aiz());
          if (iz === Sz) return this.stop(), void console.warn(`${Vz} the previews stopped: the page's renderer went with its session`);
          (0, Xz.d)(uz), this.startFrames()
        }
      }
      get isStopped() {
        return this.stopped || this.isTrapped
      }
      get isTrapped() {
        return null !== this.module && ((0, vz.m)(this.module) || "failed" === (0, Zz.E)())
      }
      hostCall(zz, uz) {
        if (this.settleIfTrapped()) return zz;
        try {
          return uz()
        } catch (bz) {
          if (this.stopIfTrapped(bz)) return zz;
          throw bz
        }
      }
      guarded(zz) {
        if (this.settleIfTrapped()) throw new Error("the previews stopped: their module trapped");
        try {
          return zz()
        } catch (uz) {
          throw this.stopIfTrapped(uz), uz
        }
      }
      registryOf(zz) {
        return {
          Obz: (uz, bz) => {
            this.hostCall(void 0, (() => {
              zz.Obz(uz, bz)
            }))
          },
          pbz: uz => {
            this.hostCall(void 0, (() => {
              zz.pbz(uz)
            }))
          }
        }
      }
      settleIfTrapped() {
        return !!this.isTrapped && (this.stopped || (this.stop(), (0, Pz.e)(null)), !0)
      }
      stopIfTrapped(zz) {
        return !(null === this.module || !(0, vz.q)(this.module, zz)) && (this.stopForTrap(zz), !0)
      }
      stopForTrap(zz) {
        this.stop(), (0, Pz.e)(null), (0, Zz.V)(zz)
      }
      stop() {
        this.stopped = !0;
        for (const zz of this.previews.values()) zz.abandon()
      }
      logError(zz, uz) {
        const bz = `${zz}:${uz}`;
        this.loggedErrors.has(bz) || (this.loggedErrors.add(bz), console.warn(`${Vz} error ${zz} (detail ${uz})`))
      }
    }
    let kz = null;

    function zu() {
      return kz ??= new Yz(function() {
        const zz = (0, oz.q)(wz.clientSideServerUrls.staticUrl, {
          packUrl: zz => {
            var uz, bz;
            return null !== (uz = null === (bz = xz.f.current) || void 0 === bz ? void 0 : bz.modelUrl(zz)) && void 0 !== uz ? uz : null
          }
        });
        return {
          loadModule: Bz,
          startModels: async zz => {
            const {
              pageModelPool: uz
            } = await bz.e(42).then((() => bz(42647))), {
              pool: Ez
            } = uz(zz);
            return (zz, uz) => Ez.build(zz, uz)
          },
          fetchAnimations: async () => Mz(await (0, Ez.z)(jz())),
          playerFile: async () => (await (0, oz.m)()).PLAYER_FILE,
          onAnimationsFailed: (zz, uz) => {
            tz("previewAnimations", jz(), zz, uz)
          },
          provideBuiltInAnimationPack: zz => {
            dz().provide(zz)
          },
          openExtras: Az.B,
          files: zz,
          images: (0, xz.m)((0, sz.n)(zz.url), (() => xz.f.current)),
          pack: xz.f,
          game: Jz.e,
          fetchModel: zz => (0, oz.h)(zz),
          createCanvas: () => document.createElement("canvas"),
          dpr: () => window.devicePixelRatio,
          now: () => performance.now(),
          requestFrame: zz => requestAnimationFrame(zz),
          cancelFrame: zz => {
            cancelAnimationFrame(zz)
          },
          onRenderFailed: Iz,
          onFatal: (zz, uz) => {
            console.error(`${Vz} the previews stopped: renderer error ${zz} (detail ${uz})`)
          }
        }
      }()), kz
    }
    var uu = bz(584),
      bu = bz(38017),
      Eu = bz(3043);
    const nu = {
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
    const iu = "[bloxd-previews]",
      lu = new Uint32Array(5);

    function Mu(zz) {
      return uu.j.indexOf(zz)
    }
    const tu = new WeakSet;

    function Hu(zz) {
      const uz = (0, bu.d)(zz),
        bz = null === uz ? -1 : Ou(uz);
      return -1 !== bz ? bz : (tu.has(zz) || (tu.add(zz), console.warn(`${iu} an animation the previews' table lacks: the mob idles instead`)), -1)
    }

    function Ou(zz) {
      var uz;
      return null !== (uz = nu[zz]) && void 0 !== uz ? uz : -1
    }

    function pu(zz, uz) {
      const {
        canvas: bz
      } = uz;
      bz.style.width = "100%", bz.style.height = "100%", bz.style.display = "block", zz.appendChild(bz)
    }

    function du(zz) {
      const uz = zz.getBoundingClientRect();
      return [uz.width, uz.height]
    }
    class Fu {
      constructor(zz, uz) {
        this.preview = zz, this.showView = uz
      }
      show(zz) {
        this.showView(this.preview, zz)
      }
      resize(zz, uz) {
        this.preview.resize(zz, uz)
      }
      close() {
        this.preview.close()
      }
    }
    class Zu {
      constructor(zz) {
        this.preview = zz, this.ready = void 0, this.dev = void 0, this.built = !1, this.cosmetics = {}, this.emote = null, this.detachControls = void 0, this.detachControls = function(zz) {
          const {
            canvas: uz
          } = zz;
          let bz = null;
          const Ez = zz => {
              var Ez;
              bz = {
                pointer: zz.pointerId,
                x: zz.clientX,
                y: zz.clientY
              }, null === (Ez = uz.setPointerCapture) || void 0 === Ez || Ez.call(uz, zz.pointerId)
            },
            nz = uz => {
              var Ez;
              const nz = zz.orbit;
              if ((null === (Ez = bz) || void 0 === Ez ? void 0 : Ez.pointer) !== uz.pointerId || null === nz) return;
              const iz = uz.clientX - bz.x,
                lz = uz.clientY - bz.y;
              bz = {
                ...bz,
                x: uz.clientX,
                y: uz.clientY
              }, zz.setOrbit({
                alpha: nz.alpha - .01 * iz,
                beta: Math.min(Math.PI - .01, Math.max(.01, nz.beta - .01 * lz)),
                radius: nz.radius
              })
            },
            iz = zz => {
              var uz;
              (null === (uz = bz) || void 0 === uz ? void 0 : uz.pointer) === zz.pointerId && (bz = null)
            },
            lz = uz => {
              const bz = zz.orbit;
              if (null === bz) return;
              uz.preventDefault();
              const Ez = uz.deltaY * (uz.deltaMode === WheelEvent.DOM_DELTA_LINE ? 40 : uz.deltaMode === WheelEvent.DOM_DELTA_PAGE ? 800 : 1),
                nz = Math.min(100, Math.max(5, bz.radius + .08 * Ez));
              zz.setOrbit({
                ...bz,
                radius: nz
              })
            };
          return uz.style.touchAction = "none", uz.addEventListener("pointerdown", Ez), uz.addEventListener("pointermove", nz), uz.addEventListener("pointerup", iz), uz.addEventListener("pointercancel", iz), uz.addEventListener("wheel", lz, {
            passive: !1
          }), () => {
            uz.removeEventListener("pointerdown", Ez), uz.removeEventListener("pointermove", nz), uz.removeEventListener("pointerup", iz), uz.removeEventListener("pointercancel", iz), uz.removeEventListener("wheel", lz)
          }
        }(zz), this.dev = {
          canvas: () => zz.canvas,
          isolateHead: () => {
            console.warn(`${iu} isolateHead: noa's character preview only`)
          }
        }, this.apply(), this.ready = zz.untilSettled().then((() => {
          if (zz.isStopped) throw new Error(`${iu} the previews stopped before the character drew`);
          this.built = !0
        }))
      }
      isReady() {
        return this.built && !this.preview.isClosed
      }
      setCosmetic(zz, uz) {
        this.cosmetics[zz] = uz, this.apply()
      }
      playEmote(zz) {
        null === zz || zz !== this.emote ? (this.emote = zz, this.apply()) : this.preview.replay()
      }
      untilDrawn(zz) {
        return this.preview.untilSettled()
      }
      setOrbit(zz) {
        let {
          yaw: uz,
          pitch: bz,
          radius: Ez
        } = zz;
        const nz = this.preview.orbit;
        null !== nz && this.preview.setOrbit({
          alpha: uz,
          beta: bz,
          radius: null !== Ez && void 0 !== Ez ? Ez : nz.radius
        })
      }
      resetCamera() {}
      resize(zz, uz) {
        this.preview.resize(zz, uz)
      }
      close() {
        this.detachControls(), this.preview.close()
      }
      apply() {
        var zz;
        this.preview.setPlayer(JSON.stringify(this.cosmetics), lu, null === (zz = this.emote) ? -1 : Ou(zz))
      }
    }

    function Ru(zz, uz) {
      let {
        mobType: bz,
        variation: Ez,
        animation: nz
      } = uz;
      zz.setMob(Mu(bz), null !== Ez && void 0 !== Ez ? Ez : "", 1, Hu(nz))
    }

    function Ku(zz, uz) {
      let {
        mobType: bz,
        variation: Ez,
        metaInfo: nz,
        tamed: iz
      } = uz;
      zz.setPet(Mu(bz), Ez, nz, iz)
    }
    const wu = {
      aimed: .533 / 1.15 * 1.1,
      ready: .16 / .85 * 1.1
    };
    class Xu {
      constructor(zz, uz, bz, Ez) {
        this.preview = null, this.closed = !1, this.figure = null, this.shown = !1, this.order = "", this.span = {
          left: 0,
          width: 0
        }, this.lineup = [0, 0], this.given = null, this.loaded = !1, zz(bz.width, Ez[1], Ez).then((zz => {
          if (this.closed) return void zz.close();
          const {
            style: bz
          } = zz.canvas;
          bz.position = "absolute", bz.top = "0", bz.visibility = "hidden", pu(uz, zz), this.preview = zz, this.apply()
        })).catch((zz => {
          console.error(`${iu} couldn't open a lineup figure`, zz)
        }))
      }
      update(zz, uz, bz, Ez, nz) {
        this.figure = zz, this.shown = uz, this.order = bz, this.span = Ez, this.lineup = nz, this.apply()
      }
      close() {
        var zz;
        this.closed = !0, null === (zz = this.preview) || void 0 === zz || zz.close(), this.preview = null
      }
      apply() {
        const {
          preview: zz,
          figure: uz,
          lineup: bz
        } = this;
        if (null === zz || null === uz) return;
        if (this.given !== uz) {
          var Ez;
          this.given = uz, this.loaded = !1;
          const bz = null === uz.Fv ? 0 : null !== (Ez = (0, Eu.e)(uz.Fv)) && void 0 !== Ez ? Ez : 0;
          zz.setFigure(function(zz) {
            return JSON.stringify(Object.fromEntries(zz.cosmetics))
          }(uz), bz, Hu(uz.animation), uz.size), zz.untilSettled().then((() => {
            this.given === uz && (this.loaded = !0, this.apply())
          }))
        }
        const {
          left: nz,
          width: iz
        } = this.span;
        zz.resize(iz, bz[1], bz);
        const {
          style: lz
        } = zz.canvas;
        lz.left = `${nz}px`, lz.width = `${iz}px`, lz.zIndex = this.order, lz.visibility = this.shown && this.loaded ? "visible" : "hidden"
      }
    }
    class fu {
      constructor(zz, uz) {
        this.open = uz, this.layer = void 0, this.figures = [], this.view = {
          figures: [],
          shown: []
        }, this.size = void 0, this.size = du(zz), this.layer = document.createElement("div");
        const {
          style: bz
        } = this.layer;
        bz.position = "relative", bz.isolation = "isolate", bz.overflow = "hidden", bz.width = "100%", bz.height = "100%", bz.pointerEvents = "none", zz.appendChild(this.layer)
      }
      show(zz) {
        this.view = zz, this.place()
      }
      resize(zz, uz) {
        this.size = [zz, uz], this.place()
      }
      close() {
        for (const zz of this.figures) zz.close();
        this.figures = [], this.layer.remove()
      }
      place() {
        const {
          figures: zz,
          shown: uz
        } = this.view;
        for (const Ez of this.figures.splice(zz.length)) Ez.close();
        const {
          size: bz
        } = this;
        zz.forEach(((Ez, nz) => {
          var iz;
          const lz = function(zz, uz, bz, Ez) {
            let [nz, iz] = Ez;
            const lz = (zz + .5) * nz / uz,
              Mz = Math.min(Math.max(nz / uz, 2 * bz * iz), 2 * Math.max(lz, nz - lz));
            return {
              left: lz - Mz / 2,
              width: Mz
            }
          }(nz, zz.length, function(zz) {
            let {
              animation: uz,
              size: bz
            } = zz;
            const {
              aimed: Ez,
              ready: nz
            } = wu;
            return (Hu(uz) === nu.gunAimed ? Ez : nz) * bz
          }(Ez), bz);
          this.figures[nz] ??= new Xu(this.open, this.layer, lz, bz), this.figures[nz].update(Ez, null !== (iz = uz[nz]) && void 0 !== iz && iz, function(zz, uz) {
            return String(Math.round(1e3 * zz) + uz)
          }(Ez.size, nz), lz, bz)
        }))
      }
    }
    const su = {
      player: hz,
      store: Uz
    };
    class ru {
      constructor(zz) {
        this.page = zz
      }
      async openMob(zz) {
        return new Fu(await this.open(zz, qz), Ru)
      }
      async openPet(zz) {
        return new Fu(await this.open(zz, qz), Ku)
      }
      openMobLineup(zz) {
        return new fu(zz, ((zz, uz, bz) => this.page.openPreview(qz, zz, uz, bz)))
      }
      async openCharacter(zz, uz) {
        return new Zu(await this.open(zz, su[uz]))
      }
      async open(zz, uz) {
        const [bz, Ez] = du(zz), nz = await this.page.openPreview(uz, bz, Ez);
        return pu(zz, nz), nz
      }
    }
  },
  36185: (zz, uz, bz) => {
    bz.d(uz, {
      A: () => Fz,
      B: () => Zz,
      C: () => Rz,
      E: () => wz,
      d: () => Ez,
      f: () => nz,
      i: () => dz,
      m: () => Kz,
      n: () => Oz,
      r: () => Xz,
      t: () => tz,
      x: () => Hz
    });
    const Ez = [{
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

    function nz(zz, uz) {
      const {
        numLines: bz,
        charsPerLine: nz
      } = Ez[uz];
      return fz(zz, bz, nz, !1)
    }
    const iz = 7 / 8,
      lz = .25,
      Mz = 8;

    function tz(zz, uz) {
      return {
        width: Math.min(zz, Mz) - 2 * lz,
        height: Math.min(uz, Mz) - 2 * lz
      }
    }

    function Hz(zz, uz, bz) {
      const nz = tz(zz, uz),
        {
          numLines: lz,
          charsPerLine: Mz
        } = Ez[bz];
      return {
        numLines: Math.max(1, Math.floor(lz / iz * nz.height)),
        charsPerLine: Math.max(1, Math.floor(Mz * nz.width))
      }
    }

    function Oz(zz, uz, bz, Ez) {
      const {
        numLines: nz,
        charsPerLine: iz
      } = Hz(bz, Ez, uz);
      return fz(zz, nz, iz, !1)
    }
    const pz = 32e3;

    function dz(zz) {
      return zz.slice(0, pz)
    }
    const Fz = 512e3,
      Zz = 64,
      Rz = Fz;

    function Kz(zz, uz) {
      const bz = Math.max(0, Rz - uz),
        Ez = Math.min(Fz, bz);
      return zz.slice(0, Ez)
    }
    const wz = {
      book: {
        numLines: 13,
        charsPerLine: 19,
        uiFontSize: 1.95
      },
      cM: {
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

    function Xz(zz, uz) {
      const {
        numLines: bz,
        charsPerLine: Ez
      } = wz[uz];
      return fz(zz, bz, Ez, !1)
    }

    function fz(zz, uz, bz, Ez, nz) {
      (nz || Ez) && (zz = zz.slice(0, null !== nz && void 0 !== nz ? nz : uz * bz));
      const iz = zz.split("\n");
      if (iz.length > uz && iz.splice(uz, iz.length - uz), !Ez)
        for (let lz = 0; lz < iz.length; lz++) {
          const zz = iz[lz];
          zz.length > bz && (iz[lz] = zz.substring(0, bz), iz.length < uz && iz.splice(lz + 1, 0, zz.substring(bz)))
        }
      return iz.join("\n")
    }
  },
  42562: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/builtInAnimations.anim.38e056f49512e10b7206.gz"
  },
  42571: (zz, uz, bz) => {
    zz.exports = bz.p + "static/media/previewAnimations.dat.24d2343c38c8f9b3fb85.gz"
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);