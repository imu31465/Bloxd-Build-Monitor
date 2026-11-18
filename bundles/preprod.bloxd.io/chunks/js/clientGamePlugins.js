export const id = 27;
export const ids = [27];
export const modules = {
  4050: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => uy,
      f: () => ny
    });
    var Uy = Wy(4052),
      hy = Wy(248);
    const fy = 120,
      Zy = 260,
      cb = 1.15,
      Py = 1.2,
      oy = 2,
      By = 1.08,
      Ky = .8,
      ey = .95,
      qb = 8,
      sy = "[\"')\\]\u300d\u300f\uff09]*",
      Sy = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${sy}$`),
      Ey = new RegExp(`[?\uff1f]${sy}$`),
      ly = new RegExp(`[!\uff01]${sy}$`),
      mb = /[,;:\u3001\uff0c\uff1b\uff1a]$/,
      Cy = "\\u3040-\\u30ff\\u3400-\\u4dbf\\u4e00-\\u9fff\\uac00-\\ud7af\\uf900-\\ufaff",
      Ty = new RegExp(`[${Cy}]`),
      Vy = new RegExp(`[${Cy}]|[^${Cy}]+`, "g"),
      Jy = /[aeiouy\u0430\u0435\u0438\u043e\u0443\u044b\u044d\u044e\u044f\u03b1\u03b5\u03b7\u03b9\u03bf\u03c5\u03c9]+/g;

    function gb(yb) {
      let bb = 2166136261;
      for (let Wy = 0; Wy < yb.length; Wy++) bb ^= yb.charCodeAt(Wy), bb = Math.imul(bb, 16777619);
      return (bb >>> 0) / 4294967295 * 2 - 1
    }

    function Gy(yb) {
      var bb;
      if (Ty.test(yb)) return 1;
      const Wy = yb.normalize("NFD").replace(/\p{M}/gu, "").toLowerCase(),
        Uy = Wy.replace(/[^0-9]/g, "");
      if (Uy.length > 0 && !/\p{L}/u.test(Wy)) return Math.min(Uy.length, 4);
      const hy = null !== (bb = Wy.match(Jy)) && void 0 !== bb ? bb : [];
      if (0 === hy.length) {
        var fy, Zy;
        const yb = null !== (fy = null === (Zy = Wy.match(/\p{L}/gu)) || void 0 === Zy ? void 0 : Zy.length) && void 0 !== fy ? fy : 0;
        return 0 === yb ? 0 : Math.min(Math.max(1, Math.round(yb / 2.5)), qb)
      }
      const cb = Wy.replace(/[^\p{L}]/gu, ""),
        Py = hy.length > 1 && "e" === hy.at(-1) && cb.endsWith("e") && !cb.endsWith("le") && !/[\u00e9\u00e8\u00ea]$/i.test(yb.replace(/[^\p{L}]/gu, ""));
      return Math.min(hy.length - (Py ? 1 : 0), qb)
    }

    function Oy(yb) {
      return yb.toLowerCase().replace(/[^\p{L}\p{N}]/gu, "")
    }

    function Ry(yb) {
      const bb = yb.replace(/[^\p{L}]/gu, "");
      return bb.length >= 2 && bb === bb.toUpperCase() && bb !== bb.toLowerCase()
    }

    function vb(yb, bb) {
      var Wy;
      const qb = bb && (0, Uy.l)(bb),
        sy = null !== (Wy = null === qb || void 0 === qb ? void 0 : qb.syllableMs) && void 0 !== Wy ? Wy : Uy.d,
        Cy = function(yb) {
          const bb = [];
          for (const Uy of (0, hy.Vb)(yb))
            if ("string" === typeof Uy)
              for (const yb of Uy.split(/(\s+)/)) {
                if ("" === yb) continue;
                if (/^\s+$/.test(yb)) {
                  bb.push({
                    kind: "space",
                    text: yb
                  });
                  continue
                }
                if (!Ty.test(yb)) {
                  bb.push({
                    kind: "word",
                    text: yb,
                    delayMs: 0
                  });
                  continue
                }
                let Uy = !0;
                for (const hy of null !== (Wy = yb.match(Vy)) && void 0 !== Wy ? Wy : []) {
                  var Wy;
                  const yb = bb.at(-1);
                  Uy || "word" !== (null === yb || void 0 === yb ? void 0 : yb.kind) || Ty.test(hy) || /[\p{L}\p{N}]/u.test(hy) ? (Uy || bb.push({
                    kind: "space",
                    text: "\u200b"
                  }), bb.push({
                    kind: "word",
                    text: hy,
                    delayMs: 0
                  }), Uy = !1) : yb.text += hy
                }
              } else bb.push({
                kind: "icon",
                text: Uy.icon,
                delayMs: 0
              });
          return bb
        }(yb),
        Jy = [];
      let vb = [];
      for (const Uy of Cy) "space" !== Uy.kind && (vb.push(Uy), Sy.test(Uy.text) && (Jy.push(vb), vb = []));
      Jy.push(vb);
      const ib = [];
      let My = 0;
      for (const Uy of Jy) {
        var Yy, Xy;
        const yb = null !== (Yy = null === (Xy = Uy.at(-1)) || void 0 === Xy ? void 0 : Xy.text) && void 0 !== Yy ? Yy : "",
          bb = Ey.test(yb),
          Wy = ly.test(yb),
          hy = Uy.map((yb => "word" === yb.kind ? Gy(yb.text) : 1)),
          Cy = hy.findLastIndex((yb => yb > 0));
        for (const [Ey, ly] of Uy.entries()) {
          const yb = "word" === ly.kind,
            Uy = hy[Ey];
          ly.delayMs = My;
          for (let hy = 0; qb && hy < Uy; hy++) {
            const {
              intonation: fy
            } = qb;
            let Zy = Cy > 0 ? -fy.declineSemitones * (Ey / Cy) : 0;
            Zy += gb(`${Oy(ly.text)}|${hy}`) * fy.variationSemitones;
            const Sy = Math.min(1, fy.variationSemitones);
            let mb = qb.glideSemitones,
              Ty = 1;
            Wy && (Zy += fy.exclaimLiftSemitones, Ty *= cb), bb && Ey === Cy && (Zy += fy.questionRiseSemitones * (Uy > 1 ? .5 + .5 * hy / (Uy - 1) : 1), hy === Uy - 1 && (mb = Math.abs(mb) + fy.questionRiseSemitones / 2)), yb && Ry(ly.text) && (Zy += oy * Sy, Ty *= Py), Uy > 1 && 0 === hy && (Zy += Ky * Sy, Ty *= By), ib.push({
              atMs: My + hy * sy,
              semitones: Zy,
              glideSemitones: mb,
              durationMs: hy < Uy - 1 ? Math.min(qb.durationMs, sy * ey) : qb.durationMs,
              level: Ty
            })
          }
          My += Uy * sy + (Sy.test(ly.text) ? Zy : mb.test(ly.text) ? fy : 0)
        }
      }
      return {
        pieces: Cy.map((yb => "space" === yb.kind ? yb : "icon" === yb.kind ? {
          kind: "icon",
          icon: yb.text,
          delayMs: yb.delayMs
        } : {
          kind: "word",
          text: yb.text,
          delayMs: yb.delayMs
        })),
        blips: ib
      }
    }
    var ib = Wy(1042),
      My = Wy(1115),
      Yy = Wy(1580);

    function Xy(yb) {
      if ("string" === typeof yb) return yb;
      const bb = My.f.get().getCurrentLanguageCode();
      return (0, ib.t)(bb, yb.translationKey, (0, ib.s)(yb.params, Yy.d.shown))
    }

    function ny(yb) {
      const bb = void 0 === yb.voice ? null : (0, Uy.p)(yb.voice),
        Wy = bb && (0, Uy.l)(bb);
      return {
        plan: vb(Xy(yb.line), Wy),
        synth: Wy
      }
    }

    function uy(yb) {
      const bb = [];
      let Wy = [];
      for (const [hy, fy] of yb.entries()) {
        var Uy;
        "space" === fy.kind && (" " !== fy.text || "icon" !== (null === (Uy = yb[hy + 1]) || void 0 === Uy ? void 0 : Uy.kind)) ? (Wy.length > 0 && bb.push(Wy), bb.push([fy]), Wy = []) : Wy.push(fy)
      }
      return Wy.length > 0 && bb.push(Wy), bb
    }
  },
  4060: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => By,
      e: () => Ky
    });
    var Uy = Wy(4068),
      hy = Wy(19);
    const fy = .25,
      Zy = .85,
      cb = .02,
      Py = .01;

    function oy(yb, bb, Wy, Uy, hy, fy, cb) {
      const {
        waveform: Py,
        pitchHz: oy,
        attackMs: By,
        releaseMs: Ky,
        lowpassHz: ey
      } = Wy, qb = hy + Uy.durationMs / 1e3, sy = oy * 2 ** (Uy.semitones / 12), Sy = yb.createOscillator();
      Sy.type = Py, Sy.frequency.setValueAtTime(sy, hy), Sy.frequency.exponentialRampToValueAtTime(sy * 2 ** (Uy.glideSemitones / 12), qb);
      const Ey = hy + Math.min(By, Uy.durationMs) / 1e3,
        ly = yb.createGain();
      ly.gain.setValueAtTime(0, hy), ly.gain.linearRampToValueAtTime(fy, Ey), ly.gain.linearRampToValueAtTime(fy * Zy, Math.max(Ey, qb - Ky / 1e3)), ly.gain.linearRampToValueAtTime(0, qb);
      const mb = [Sy];
      if (null !== ey) {
        const bb = yb.createBiquadFilter();
        bb.type = "lowpass", bb.frequency.value = ey, mb.push(bb)
      }
      mb.push(ly, bb);
      for (let Zy = 1; Zy < mb.length; Zy++) mb[Zy - 1].connect(mb[Zy]);
      return Sy.onended = () => {
        for (const yb of mb.slice(0, -1)) yb.disconnect();
        cb()
      }, Sy.start(hy), Sy.stop(qb), Sy
    }

    function By(yb, bb, Wy, Uy, hy, Zy) {
      if (0 === Uy.length) return Zy(), () => {};
      const By = fy * Wy.volume * hy,
        Ky = yb.createGain();
      Ky.connect(bb);
      const ey = yb.currentTime + cb,
        qb = new Set;
      for (const fy of Uy) {
        const bb = oy(yb, Ky, Wy, fy, ey + fy.atMs / 1e3, By * fy.level, (() => {
          qb.delete(bb), 0 === qb.size && (Ky.disconnect(), Zy())
        }));
        qb.add(bb)
      }
      return () => {
        const bb = yb.currentTime;
        Ky.gain.setTargetAtTime(0, bb, Py);
        for (const yb of qb) try {
          yb.stop(bb + 5 * Py)
        } catch {}
      }
    }

    function Ky(yb, bb) {
      var Wy;
      const fy = Uy.d.ctx,
        Zy = Uy.d.masterGain;
      if (!fy || !Zy || !hy.d.get("soundOnFromAd")) return () => {};
      const cb = Uy.d;
      return null === (Wy = cb._autoResume) || void 0 === Wy || Wy.call(cb), By(fy, Zy, yb, bb, hy.d.get("soundVolume"), (() => {
        var yb;
        null === (yb = cb._autoSuspend) || void 0 === yb || yb.call(cb)
      }))
    }
  },
  37793: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      closeClientGame: () => rb,
      createDefaultClientPlugins: () => uy
    });
    var Uy = Wy(258);

    function hy() {
      let yb;
      return {
        onCreate(bb) {
          yb = bb
        },
        altVetoBlocks: ["Iron Chest"],
        onPlayerAttemptAltAction(bb, Wy, hy, fy, Zy, cb) {
          var Py, oy;
          if ("Iron Chest" !== yb.getMetaInfo(Zy).rootName) return;
          if (!yb.hasEffect(bb, "Thief")) return;
          const By = yb.getBlockData(Wy, hy, fy);
          return yb.getPlayerDbId(bb) !== (null === By || void 0 === By || null === (Py = By.persisted) || void 0 === Py || null === (oy = Py.shared) || void 0 === oy ? void 0 : oy.ownerDbId) ? (yb.sendMessage(bb, [{
            str: {
              translationKey: "ironChest:thievesCannotOpen"
            },
            style: {
              color: Uy.K.redUiText
            }
          }]), "preventAction") : void 0
        }
      }
    }
    var fy = Wy(3525),
      Zy = Wy(1102);
    const cb = 8.4,
      Py = 1e-4,
      oy = .15,
      By = .04,
      Ky = [.12, .04, .12],
      ey = 26,
      qb = {
        texture: "fishingFishSilhouette",
        mipmaps: !1,
        Hy: 1,
        minLifeTime: Py,
        maxLifeTime: Py,
        minSize: .55,
        maxSize: .55,
        minEmitPower: 0,
        maxEmitPower: 0,
        emitRate: 0,
        colorGradients: [{
          timeFraction: 0,
          minColor: [255, 255, 255, 1]
        }, {
          timeFraction: 1,
          minColor: [0, 0, 0, 1]
        }],
        blendMode: fy.e.Standard
      },
      sy = {
        texture: "bubble",
        mipmaps: !1,
        Hy: 96,
        minLifeTime: .3,
        maxLifeTime: .65,
        minSize: .08,
        maxSize: .19,
        minEmitPower: .2,
        maxEmitPower: .55,
        emitRate: ey,
        gravity: [0, .3, 0],
        dir1: [-.3, .3, -.3],
        dir2: [.3, .7, .3],
        colorGradients: [{
          timeFraction: 0,
          minColor: [216.75, 242.25, 255, 1]
        }, {
          timeFraction: .4,
          minColor: [216.75, 242.25, 255, .9]
        }, {
          timeFraction: 1,
          minColor: [178.5, 229.5, 255, 0]
        }],
        blendMode: fy.e.Standard
      },
      Sy = [0, 0, 0],
      Ey = [0, 0, 0];

    function ly(yb) {
      const bb = new Map;
      let Wy = null;

      function Uy(yb) {
        var bb, Wy;
        null === (bb = yb.bubbles) || void 0 === bb || bb.stop(), null === (Wy = yb.fish) || void 0 === Wy || Wy.stop()
      }

      function hy(Wy) {
        if (!Wy.readDrawnPosition(yb, Ey)) {
          for (const yb of bb.values()) {
            var Uy;
            null === (Uy = yb.bubbles) || void 0 === Uy || Uy.setEmitRate(0)
          }
          return
        }
        const hy = performance.now();
        for (const [yb, Zy] of bb) {
          var fy;
          if (null === (fy = Zy.bubbles) || void 0 === fy || fy.setEmitRate(0), !Wy.readDrawnPosition(yb, Sy)) continue;
          if (!((Sy[0] - Ey[0]) ** 2 + (Sy[1] - Ey[1]) ** 2 + (Sy[2] - Ey[2]) ** 2 < 900)) continue;
          const bb = Math.max(0, Zy.biteAt - hy),
            Uy = Zy.approachDurationMs > 0 ? Math.min(1, 1 - bb / Zy.approachDurationMs) : 1,
            Py = (Zy.approachDurationMs - bb) / 1e3,
            ly = Zy.phase + .25 * Math.sin(1.7 * Py + Zy.phase),
            mb = Math.min(Zy.approachDurationMs / 3e3 * 2.8, cb) * (1 - Uy) * (1 + .15 * Math.sin(2.1 * Py + Zy.phase)),
            Cy = Math.min(1, 4 * (1 - Uy)),
            Ty = (.45 * Math.sin(4.1 * Py + Zy.phase) + .18 * Math.sin(9.7 * Py + 2 * Zy.phase)) * Cy,
            Vy = Sy[0] + Math.cos(ly) * mb - Math.sin(ly) * Ty,
            Jy = Math.ceil(Zy.surfaceY),
            gb = Sy[2] + Math.sin(ly) * mb + Math.cos(ly) * Ty,
            {
              fishAt: Gy,
              bubblesAt: Oy
            } = Zy;
          Gy[0] = Oy[0] = Vy, Gy[1] = Jy + oy, Oy[1] = Jy + By, Gy[2] = Oy[2] = gb, Zy.fish ??= Wy.createParticles(qb, {
            pos: Gy
          }), Zy.fish.moveTo(Gy), Zy.fish.emit(1), Zy.bubbles ??= Wy.createParticles(sy, {
            pos: Oy,
            half: Ky
          }), Zy.bubbles.moveTo(Oy), Zy.bubbles.setEmitRate(ey + 32 * (.5 + .5 * Math.sin(9 * Py + Zy.phase)) ** 4 + 13 * Uy)
        }
      }
      return {
        onCreate(yb) {
          Wy = yb
        },
        onAfterRender() {
          Wy && hy(Wy)
        },
        onClose() {
          for (const yb of bb.values()) Uy(yb);
          bb.clear(), Wy = null
        },
        onReceivedMessageFromServer(yb, Wy) {
          if (yb !== Zy.C) return;
          const {
            hookId: hy,
            waiting: fy
          } = Wy;
          if (fy) bb.has(hy) || bb.set(hy, {
            bubbles: null,
            fish: null,
            fishAt: [0, 0, 0],
            bubblesAt: [0, 0, 0],
            biteAt: performance.now() + fy.remainingMs,
            approachDurationMs: fy.durationMs,
            surfaceY: fy.surfaceY,
            phase: Math.random() * Math.PI * 2
          });
          else {
            const yb = bb.get(hy);
            yb && Uy(yb), bb.delete(hy)
          }
        }
      }
    }
    var mb = Wy(4060),
      Cy = Wy(4050);

    function Ty(yb) {
      let bb, Wy = null,
        Uy = null;
      const hy = () => {
        var yb;
        null === (yb = Uy) || void 0 === yb || yb(), Uy = null
      };
      return {
        onCreate(Uy) {
          bb = Uy, Wy = bb.getClientOption(yb, "dialogue")
        },
        onAfterRender() {
          if (!bb) return;
          const fy = bb.getClientOption(yb, "dialogue");
          if (fy === Wy) return;
          if (Wy = fy, hy(), !fy || !1 === fy.animateIn) return;
          const {
            plan: Zy,
            synth: cb
          } = (0, Cy.f)(fy);
          cb && (Uy = (0, mb.e)(cb, Zy.blips))
        },
        onClose: hy
      }
    }
    var Vy = Wy(37801);
    const Jy = [
        [-.3125, -.25],
        [.3125, -.25],
        [.3125, .25],
        [-.3125, .25]
      ],
      gb = [0, 1 / 3, 1, 1 / 3, 1, 0, 0, 0],
      Gy = [0, 1, 2, 0, 2, 3];

    function Oy(yb, bb, Wy) {
      var Uy;
      let [hy, fy, Zy] = bb;
      if (yb.hasPackModel("Furnace")) return null;
      const cb = ((null !== (Uy = yb.getMetaInfo(Wy).rot) && void 0 !== Uy ? Uy : 1) - 1) * Math.PI / 2,
        Py = Math.PI + cb,
        oy = Math.cos(Py),
        By = Math.sin(Py),
        Ky = [];
      for (const [sy, Sy] of Jy) Ky.push(sy * oy, Sy, -sy * By);
      const ey = {
          positions: Ky,
          indices: Gy,
          uvs: gb
        },
        qb = [hy + .5 + .51 * Math.sin(cb), fy + .375, Zy + .5 + .51 * Math.cos(cb)];
      return yb.createGameMesh(ey, {
        kind: "furnaceFire"
      }, qb)
    }

    function Ry(yb) {
      return Math.floor(yb / 200) % 3
    }

    function vb(yb, bb, Wy) {
      yb.setGameMesh(bb, {
        uvOffset: [0, Wy / 3]
      })
    }
    const ib = [.12, .025, .12],
      My = [{
        style: {
          colours: [
            [176, 176, 182],
            [128, 128, 134]
          ],
          alpha: .6,
          size: [.18, .32],
          life: [1.6, 2.6],
          power: [.5, .8],
          lift: .12,
          spread: .12,
          count: 6,
          blendMode: fy.e.Standard,
          soft: !0
        },
        perSecond: 7
      }, {
        style: {
          colours: [
            [255, 190, 80],
            [255, 110, 35]
          ],
          alpha: 1,
          size: [.04, .07],
          life: [.6, 1.1],
          power: [1, 1.8],
          lift: -.6,
          spread: .35,
          count: 10,
          blendMode: fy.e.Add,
          soft: !1
        },
        perSecond: 6
      }];
    class Yy {
      constructor() {
        this.puffers = null, this.smokes = [], this.renderFrame = 0, this.shownFireFrame = -1, this.centre = [0, 0, 0]
      }
      start(yb, bb) {
        const Wy = yb.getBlockId(bb[0], bb[1], bb[2]);
        if ("Furnace" !== yb.getMetaInfo(Wy).rootName) return;
        const Uy = performance.now();
        let hy = this.smokes.find((yb => yb.pos[0] === bb[0] && yb.pos[1] === bb[1] && yb.pos[2] === bb[2] && yb.Df === Wy));
        if (hy || (hy = {
            pos: [bb[0], bb[1], bb[2]],
            Df: Wy,
            endMs: Uy,
            lastBurstMs: -1 / 0,
            pending: new Array(My.length).fill(0),
            fire: Oy(yb, bb, Wy)
          }, this.smokes.push(hy), null !== hy.fire && (vb(yb, hy.fire, Ry(Uy)), this.shownFireFrame = -1)), hy.endMs = Uy + 6e3, this.smokes.length > 4) {
          const bb = this.smokes.reduce(((yb, bb) => bb.endMs < yb.endMs ? bb : yb));
          Xy(yb, bb), this.smokes.splice(this.smokes.indexOf(bb), 1)
        }
        Uy - hy.lastBurstMs >= 300 && (hy.lastBurstMs = Uy, My.forEach(((yb, bb) => {
          hy.pending[bb] += yb.style.count
        })))
      }
      onAfterRender(yb, bb) {
        if (0 === this.smokes.length) return;
        this.renderFrame++;
        const Wy = performance.now();
        this.smokes = this.smokes.filter((bb => {
          const [Uy, hy, fy] = bb.pos, Zy = Wy < bb.endMs && yb.getBlockId(Uy, hy, fy) === bb.Df;
          return Zy || Xy(yb, bb), Zy
        }));
        const Uy = Ry(Wy);
        if (Uy !== this.shownFireFrame) {
          this.shownFireFrame = Uy;
          for (const bb of this.smokes) null !== bb.fire && vb(yb, bb.fire, Uy)
        }
        if (!yb.particlesEnabled()) {
          for (const yb of this.smokes) yb.pending.fill(0);
          return
        }
        const hy = Math.min(bb, 250) / 1e3;
        for (const fy of this.smokes) {
          const [bb, Uy, Zy] = fy.pos;
          if (0 !== yb.getBlockId(bb, Uy + 1, Zy)) {
            fy.pending.fill(0);
            continue
          }
          const cb = (fy.endMs - Wy) / 6e3,
            Py = this.centre;
          Py[0] = bb + .5, Py[1] = Uy + 1.275, Py[2] = Zy + .5, My.forEach(((bb, Wy) => {
            fy.pending[Wy] += bb.perSecond * cb * hy;
            const Uy = Math.floor(fy.pending[Wy]);
            Uy > 0 && this.emit(yb, Wy, Py, Uy) && (fy.pending[Wy] -= Uy)
          }))
        }
      }
      dispose(yb) {
        for (const Wy of this.smokes) Xy(yb, Wy);
        this.smokes = [];
        for (const Wy of null !== (bb = this.puffers) && void 0 !== bb ? bb : []) {
          var bb;
          Wy.dispose()
        }
        this.puffers = null
      }
      emit(yb, bb, Wy, Uy) {
        return this.puffers ??= My.map((yb => {
          let {
            style: bb,
            perSecond: Wy
          } = yb;
          const Uy = (bb.count / .3 + Wy) * bb.life[1];
          return new Vy.f(bb, Math.ceil(4 * Uy), ib)
        })), this.puffers[bb].emit(yb, Wy, this.renderFrame, Uy)
      }
    }

    function Xy(yb, bb) {
      null !== bb.fire && (yb.disposeGameMesh(bb.fire), bb.fire = null)
    }

    function ny() {
      let yb;
      const bb = new Yy;
      return {
        onCreate(bb) {
          yb = bb
        },
        onReceivedMessageFromServer(Wy, Uy) {
          Wy === Zy.G && bb.start(yb, Uy)
        },
        onAfterRender(Wy) {
          bb.onAfterRender(yb, Wy)
        },
        onClose() {
          bb.dispose(yb)
        }
      }
    }

    function uy(yb, bb, Wy, Uy) {
      return {
        dialogue: Ty(Uy.localPlayerId),
        fishing: ly(Uy.localPlayerId),
        furnaceSmoke: ny(),
        ironChest: hy()
      }
    }

    function rb(yb, bb) {
      for (const hy of [yb, ...null !== bb && void 0 !== bb ? bb : []]) try {
        var Wy;
        null === hy || void 0 === hy || null === (Wy = hy.onClose) || void 0 === Wy || Wy.call(hy)
      } catch (Uy) {
        console.error("Error in client onClose callback", Uy)
      }
    }
  },
  37801: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => Uy,
      f: () => fy
    });
    const Uy = 1 / .6,
      hy = {
        kind: "smokePuff"
      };
    class fy {
      constructor(yb, bb, Wy) {
        this.style = yb, this.Hy = bb, this.half = Wy, this.particles = null, this.lastFrame = -1
      }
      emit(yb, bb, Wy) {
        let fy = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return Wy !== this.lastFrame && (this.lastFrame = Wy, this.particles || (this.particles = yb.createParticles(function(yb, bb) {
          const [
            [Wy, fy, Zy],
            [cb, Py, oy]
          ] = yb.colours;
          return {
            texture: yb.soft ? hy : "square_particle",
            Hy: bb,
            minLifeTime: yb.life[0] / Uy,
            maxLifeTime: yb.life[1] / Uy,
            minEmitPower: yb.power[0] * Uy,
            maxEmitPower: yb.power[1] * Uy,
            minSize: yb.size[0],
            maxSize: yb.size[1],
            emitRate: 0,
            gravity: [0, yb.lift * Uy * Uy, 0],
            dir1: [-yb.spread, 1, -yb.spread],
            dir2: [yb.spread, 1, yb.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [Wy, fy, Zy, yb.alpha],
              maxColor: [cb, Py, oy, yb.alpha]
            }, {
              timeFraction: 1,
              minColor: [Wy, fy, Zy, 0],
              maxColor: [cb, Py, oy, 0]
            }],
            blendMode: yb.blendMode
          }
        }(this.style, this.Hy), {
          pos: bb,
          half: this.half
        })), this.particles.moveTo(bb, this.half), this.particles.emit(fy), !0)
      }
      dispose() {
        var yb;
        null === (yb = this.particles) || void 0 === yb || yb.stop(), this.particles = null
      }
    }
  },
  4052: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy,
      h: () => Uy,
      i: () => fy,
      l: () => Py,
      p: () => Zy
    });
    const Uy = ["sine", "triangle", "square", "sawtooth"],
      hy = 55,
      fy = {
        soft: {
          waveform: "sine",
          pitchHz: 300,
          glideSemitones: -.5,
          durationMs: 80,
          attackMs: 6,
          releaseMs: 18,
          lowpassHz: null,
          volume: .6,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 1.5,
            questionRiseSemitones: 3.5,
            exclaimLiftSemitones: 1.5
          },
          syllableMs: 60
        },
        regular: {
          waveform: "triangle",
          pitchHz: 195,
          glideSemitones: -.6,
          durationMs: 70,
          attackMs: 2,
          releaseMs: 12,
          lowpassHz: null,
          volume: 1,
          intonation: {
            variationSemitones: 1.5,
            declineSemitones: 2,
            questionRiseSemitones: 4,
            exclaimLiftSemitones: 2
          },
          syllableMs: 52
        },
        dark: {
          waveform: "sawtooth",
          pitchHz: 80,
          glideSemitones: -.6,
          durationMs: 85,
          attackMs: 6,
          releaseMs: 16,
          lowpassHz: 420,
          volume: 1.05,
          intonation: {
            variationSemitones: 1,
            declineSemitones: 3.5,
            questionRiseSemitones: 2.5,
            exclaimLiftSemitones: 1
          },
          syllableMs: 64
        },
        "high-pitched": {
          waveform: "triangle",
          pitchHz: 300,
          glideSemitones: -.8,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: null,
          volume: .8,
          intonation: {
            variationSemitones: 2.2,
            declineSemitones: 2,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3
          },
          syllableMs: 44
        },
        gruff: {
          waveform: "sawtooth",
          pitchHz: 105,
          glideSemitones: -.8,
          durationMs: 75,
          attackMs: 4,
          releaseMs: 14,
          lowpassHz: 900,
          volume: .85,
          intonation: {
            variationSemitones: 1.2,
            declineSemitones: 3,
            questionRiseSemitones: 3,
            exclaimLiftSemitones: 2
          },
          syllableMs: 58
        },
        lively: {
          waveform: "square",
          pitchHz: 230,
          glideSemitones: .6,
          durationMs: 55,
          attackMs: 2,
          releaseMs: 10,
          lowpassHz: 2400,
          volume: .5,
          intonation: {
            variationSemitones: 2.6,
            declineSemitones: 1.5,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 3.5
          },
          syllableMs: 44
        },
        posh: {
          waveform: "triangle",
          pitchHz: 175,
          glideSemitones: 1.2,
          durationMs: 90,
          attackMs: 6,
          releaseMs: 20,
          lowpassHz: 2e3,
          volume: 1,
          intonation: {
            variationSemitones: 2,
            declineSemitones: 4,
            questionRiseSemitones: 5,
            exclaimLiftSemitones: 2.5
          },
          syllableMs: 60
        },
        mechanical: {
          waveform: "square",
          pitchHz: 140,
          glideSemitones: 0,
          durationMs: 60,
          attackMs: 0,
          releaseMs: 4,
          lowpassHz: 1400,
          volume: .55,
          intonation: {
            variationSemitones: 0,
            declineSemitones: 0,
            questionRiseSemitones: 0,
            exclaimLiftSemitones: 0
          },
          syllableMs: 62
        }
      };

    function Zy(yb) {
      return "string" !== typeof yb ? yb : Object.hasOwn(fy, yb) ? fy[yb] : null
    }

    function cb(yb, bb, Wy) {
      return Math.min(Wy, Math.max(bb, yb))
    }

    function Py(yb) {
      const bb = cb(yb.durationMs, 10, 500),
        Wy = cb(yb.attackMs, 0, bb),
        {
          intonation: hy
        } = yb;
      return {
        waveform: Uy.includes(yb.waveform) ? yb.waveform : "sine",
        pitchHz: cb(yb.pitchHz, 20, 4e3),
        glideSemitones: cb(yb.glideSemitones, -24, 24),
        durationMs: bb,
        attackMs: Wy,
        releaseMs: cb(yb.releaseMs, 0, bb - Wy),
        lowpassHz: null === yb.lowpassHz ? null : cb(yb.lowpassHz, 20, 2e4),
        volume: cb(yb.volume, 0, 2),
        intonation: {
          variationSemitones: cb(hy.variationSemitones, 0, 6),
          declineSemitones: cb(hy.declineSemitones, 0, 12),
          questionRiseSemitones: cb(hy.questionRiseSemitones, 0, 12),
          exclaimLiftSemitones: cb(hy.exclaimLiftSemitones, 0, 12)
        },
        syllableMs: cb(yb.syllableMs, 25, 200)
      }
    }
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);