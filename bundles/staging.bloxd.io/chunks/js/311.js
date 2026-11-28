export const id = 311;
export const ids = [311];
export const modules = {
  42755: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      openMobLineupPreview: () => db,
      openMobPreview: () => ub,
      openPetPreview: () => Pb
    });
    var eb = Mb(41496),
      Hb = Mb(41759),
      pb = Mb(42757),
      Vb = Mb(38401),
      gb = Mb(38281),
      lb = Mb(41920),
      Lb = Mb(42787),
      Ib = Mb(39687),
      Ob = Mb(38366),
      Ub = Mb(38343),
      tb = Mb(38279),
      Cb = Mb(39600),
      Eb = Mb(39598),
      Fb = Mb(39330),
      Bb = Mb(38374),
      sb = Mb(2451),
      mb = Mb(42790),
      hb = Mb(3217);
    const zb = new Map;

    function Xb(bb, wb) {
      const Mb = function(bb) {
        return bb.flatMap((bb => {
          var wb;
          let [Mb, eb] = bb;
          const Hb = void 0 === eb || null === (wb = (0, hb.l)(Mb, eb)) || void 0 === wb ? void 0 : wb.attachments;
          return null !== Hb && void 0 !== Hb ? Hb : []
        }))
      }(wb).map((wb => function(bb, wb) {
        let {
          modelGlb: Mb,
          texture: eb,
          animation: Hb
        } = wb;
        const pb = void 0 !== Hb,
          Vb = `${(0,Bb.e)(Mb,eb)}|${pb}`;
        let gb = zb.get(Vb);
        return gb || (gb = (0, mb.h)(bb, Mb, eb, {
          keepTransforms: pb,
          backFaceCulling: !1
        }).then(mb.k, (bb => {
          throw zb.delete(Vb), bb
        })), zb.set(Vb, gb)), gb
      }(bb, wb).then((bb => ({
        attachment: wb,
        nodes: bb
      })), (bb => (console.error(`Mob preview: could not load ${wb.modelGlb}`, bb), null)))));
      return Promise.all(Mb).then((bb => bb.filter((bb => null !== bb))))
    }
    var xb = Mb(39379),
      jb = Mb(39356),
      Kb = Mb(39023),
      rb = Mb(38842);
    Mb(42792), Mb(42161), Mb(42795);
    const Rb = 22,
      Db = 13,
      cb = Math.PI - Math.PI / 16,
      Yb = 6,
      Zb = Math.PI / 4;
    let fb = null;
    const Ab = {},
      Wb = new Map;

    function Jb() {
      if (null !== fb) return fb;
      const bb = document.createElement("canvas");
      bb.classList.add("MobPreviewCanvas");
      const wb = new eb.e(bb, !0, {
        preserveDrawingBuffer: !0
      });
      wb.rHb = (0, sb.h)().FO.engine.rHb;
      const Mb = new Hb.b(wb);
      Mb.clearColor = new Vb.c(0, 0, 0, 0), Mb.ambientColor = new Vb.Color3(1, 1, 1);
      const Lb = new pb.e("iF", Math.PI / 2, Math.PI / 2, Rb, gb.YC.Zero(), Mb),
        Ib = new lb.c("light", new gb.YC(-.1, 1, -.3), Mb);
      return Ib.diffuse = new Vb.Color3(1, 1, 1), Ib.specular = new Vb.Color3(1, 1, 1), Ib.groundColor = new Vb.Color3(.5, .5, .5), fb = {
        engine: wb,
        JE: Mb,
        canvas: bb,
        camera: Lb
      }, fb
    }

    function Sb(bb) {
      return Ab[bb] ??= (0, Fb.q)(bb, Jb().JE, !0).catch((wb => {
        throw delete Ab[bb], wb
      })), Ab[bb]
    }

    function Nb(bb) {
      let wb = Wb.get(bb);
      return wb || (wb = Kb.E[bb].loadModel(Jb().JE, !1).then((bb => (bb.Bx(!1), bb)), (wb => {
        throw Wb.delete(bb), wb
      })), Wb.set(bb, wb)), wb
    }

    function vb() {
      return 2 * Rb * Math.tan(Jb().camera.fov / 2)
    }

    function Qb(bb) {
      var wb, Mb, eb;
      let {
        mobType: Hb,
        variation: pb,
        animation: Vb
      } = bb, lb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
      const zb = null !== (wb = null === lb || void 0 === lb ? void 0 : lb.size) && void 0 !== wb ? wb : 1,
        Rb = null !== (Mb = null === lb || void 0 === lb ? void 0 : lb.cosmetics) && void 0 !== Mb ? Mb : [],
        Yb = null !== (eb = null === lb || void 0 === lb ? void 0 : lb.NK) && void 0 !== eb ? eb : null;
      let Zb = !1,
        fb = null,
        Ab = null;
      const {
        engine: Wb,
        JE: Qb
      } = Jb(), Gb = Qb.onBeforeRenderObservable.add((() => {
        var bb;
        null === (bb = Ab) || void 0 === bb || bb.render(Wb.getDeltaTime())
      })), qb = null === Yb ? null : Nb(Yb).catch((bb => (console.error(`Mob preview: could not load ${Yb}`, bb), null)));
      return Promise.all([Sb(Hb), qb, Xb(Jb().JE, Rb)]).then((bb => {
        var wb, Mb, eb, Xb;
        let [Wb, Sb, Nb] = bb;
        if (Zb) return;
        const Qb = (0, sb.h)().FO.GJ,
          {
            hitBoxDimensions: Gb
          } = (0, Ib.c)(Hb),
          qb = Db / Math.max(Gb.height, Gb.width);
        if (fb = (0, Fb.l)(Hb, qb * zb, !0, !0), Qb.setPosition(fb, hb, -Gb.height * qb / 2 + (null !== (wb = null === lb || void 0 === lb ? void 0 : lb.lift) && void 0 !== wb ? wb : 0) * vb(), 0), Qb.setRotationEulerY(fb, cb), Wb.meshApi instanceof jb.e && Rb.length > 0) {
          for (const [bb, wb] of Rb) Wb.meshApi.updatePlayerCosmetic(null, fb, bb, wb, !0);
          ! function(bb, wb) {
            const Mb = (0, sb.h)().FO.GJ;
            for (const {
                attachment: eb,
                nodes: Hb
              }
              of bb) {
              const bb = Hb.get(eb.modelNode);
              bb ? (0, mb.r)((0, Bb.b)(bb, `${bb.name}Worn`), eb, Mb, wb) : console.error(`Mob preview: attachment node ${eb.modelNode} not found in ${eb.modelGlb}`)
            }
          }(Nb, fb)
        } else Wb.meshApi.updateVariation(fb, Hb, null !== pb && void 0 !== pb ? pb : "default");
        null !== Yb && null !== Sb && function(bb, wb, Mb, eb) {
          var Hb;
          const pb = Kb.E[bb],
            Vb = (0, Cb.k)();
          (0, Cb.g)(pb, null === (Hb = (0, xb.b)(Mb).meshMetadata.heldItemPositionParams) || void 0 === Hb ? void 0 : Hb.itemOffset, Vb);
          const lb = rb.c * Vb.CO.y,
            Ib = Vb.usesQuaternion ? Vb.quaternion : gb.Quaternion.FromEulerVector(Vb.rotation),
            Ob = new Lb.b(`${wb.name}Hand`, Jb().JE);
          Ob.position.eZ((0, Eb.e)(Vb.position, Ib, lb, pb.heldModelOffsetY())), Ob.rotationQuaternion = Ib, Ob.CO.set(Vb.CO.x, lb, Vb.CO.z), wb.clone(`${wb.name}Held`, Ob).Bx(!0);
          const Ub = (0, sb.h)().FO.GJ;
          Ub.attachTransformNode(Ob, eb, Ub.getNamedNode(eb, "ArmRightMesh"))
        }(Yb, Sb, Hb, fb), Qb.set(fb, "aOpacity", 1);
        const ab = null !== (Mb = (0, xb.b)(Hb).meshMetadata.lifeformTypeForModelOverride) && void 0 !== Mb ? Mb : Hb;
        Ab = new tb.AnimatorState, Ab.thinInstMgr = Qb, Ab.qJ = fb, Ab.keb = Qb.OHb(fb, 0), Ab.modelLifeformType = ab, Ab.nodeNameAliases = null !== (eb = null === (Xb = (0, Ob.b)(ab)) || void 0 === Xb ? void 0 : Xb.nodeNameAliases) && void 0 !== eb ? eb : null, Ab.startAnimation(Vb, Ub.e.Movement)
      })).catch((bb => {
        console.error(`Mob preview: could not load ${Hb}`, bb)
      })), () => {
        Zb = !0, Qb.onBeforeRenderObservable.remove(Gb), null !== fb && (0, sb.h)().FO.GJ.delete(fb)
      }
    }

    function Gb(bb, wb) {
      return Qb({
        mobType: "NPC",
        variation: null,
        animation: bb.animation
      }, bb, wb)
    }

    function qb(bb) {
      let {
        mobType: wb,
        variation: Mb,
        metaInfo: eb,
        tamed: Hb
      } = bb, pb = !1, Vb = null, gb = 0;
      const lb = (0, sb.h)(),
        Lb = lb.FO.GJ,
        Ib = bb => {
          gb += Zb * (bb / 1e3) % (2 * Math.PI), Lb.setRotationEulerY(Vb, gb)
        };
      return Sb(wb).then((bb => {
        if (pb) return;
        Vb = (0, Fb.l)(wb, Yb, !0, !0), Lb.setPosition(Vb, 0, -Yb, 0), bb.meshApi.updateVariation(Vb, wb, Mb);
        const gb = {
          wool: "Sheared" !== eb,
          saddle: "Saddled" === eb,
          antlers: "Antlers" === eb,
          collar: Hb
        };
        for (const [wb, Mb] of Object.entries(gb)) Lb.hasGroup(Vb, wb) && bb.meshApi.setMeshGroupVisibility(Vb, wb, Mb);
        Lb.set(Vb, "aOpacity", 1), lb.on("renderTickBegin", Ib)
      })).catch((bb => {
        console.error(`Pet preview: could not load ${wb}`, bb)
      })), () => {
        pb = !0, lb.off("renderTickBegin", Ib), null !== Vb && Lb.delete(Vb)
      }
    }
    class ab {
      constructor(bb, wb) {
        this.place = wb, this.remove = null;
        const {
          engine: Mb,
          JE: eb,
          canvas: Hb
        } = Jb();
        bb.appendChild(Hb), Mb.resize(), Mb.runRenderLoop((() => {
          eb.render()
        }))
      }
      show(bb) {
        var wb;
        null === (wb = this.remove) || void 0 === wb || wb.call(this), this.remove = this.place(bb)
      }
      resize(bb, wb) {
        const {
          engine: Mb,
          canvas: eb
        } = Jb();
        eb.width = bb, eb.height = wb, Mb.resize()
      }
      close() {
        var bb;
        Jb().engine.stopRenderLoop(), null === (bb = this.remove) || void 0 === bb || bb.call(this), this.remove = null
      }
    }
    class ib {
      constructor(bb) {
        this.preview = void 0, this.view = {
          figures: [],
          shown: []
        }, this.aspect = 1, this.placed = [], this.preview = new ab(bb, (() => () => {}))
      }
      show(bb) {
        bb.figures !== this.view.figures && this.preload(bb.figures), this.view = bb, this.place()
      }
      resize(bb, wb) {
        this.preview.resize(bb, wb), this.aspect = bb / wb, this.place()
      }
      close() {
        this.preview.close();
        for (const bb of this.placed) null === bb || void 0 === bb || bb.remove();
        this.placed = []
      }
      preload(bb) {
        const wb = () => {};
        Sb("NPC").catch(wb);
        for (const {
            NK: Mb,
            cosmetics: eb
          }
          of bb) null !== Mb && Nb(Mb).catch(wb), Xb(Jb().JE, eb).catch(wb)
      }
      place() {
        const {
          figures: bb,
          shown: wb
        } = this.view, Mb = bb.map(((Mb, eb) => {
          var Hb;
          const pb = null !== (Hb = this.placed[eb]) && void 0 !== Hb ? Hb : null;
          if (!wb[eb]) return null === pb || void 0 === pb || pb.remove(), null;
          const Vb = (gb = (eb + .5) / bb.length, lb = this.aspect, (.5 - gb) * vb() * lb);
          var gb, lb;
          return null !== pb && pb.figure === Mb && pb.x === Vb ? pb : (null === pb || void 0 === pb || pb.remove(), {
            figure: Mb,
            x: Vb,
            remove: Gb(Mb, Vb)
          })
        }));
        for (const eb of this.placed.slice(bb.length)) null === eb || void 0 === eb || eb.remove();
        this.placed = Mb
      }
    }

    function ub(bb) {
      return new ab(bb, Qb)
    }

    function db(bb) {
      return new ib(bb)
    }

    function Pb(bb) {
      return new ab(bb, qb)
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);