export const id = 262;
export const ids = [262, 268, 273];
export const modules = {
  41916: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Vb,
      d: () => gb
    });
    var eb = Mb(39971),
      Hb = Mb(41697),
      pb = Mb(41879),
      Vb = {};
    class gb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const wb = bb.getSimpleName();
        this.attached[wb] ? eb.b.Warn("camera input of type " + wb + " already exists on camera") : (this.attached[wb] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const wb in this.attached) {
          const Mb = this.attached[wb];
          if (Mb === bb) return Mb.detachControl(), Mb.camera = null, delete this.attached[wb], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const wb in this.attached) {
          const Mb = this.attached[wb];
          Mb.getClassName() === bb && (Mb.detachControl(), Mb.camera = null, delete this.attached[wb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const wb = this.checkInputs;
        return () => {
          wb(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !pb.c.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const wb in this.attached) this.attached[wb].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const wb in this.attached) this.attached[wb].detachControl(), bb && (this.attached[wb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const wb = this.attached[bb];
          wb.checkInputs && (this.checkInputs = this._addCheckInputs(wb.checkInputs.bind(wb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const wb = {};
        for (const Mb in this.attached) {
          const bb = this.attached[Mb],
            eb = Hb.d.Serialize(bb);
          wb[bb.getClassName()] = eb
        }
        bb.inputsmgr = wb
      }
      parse(bb) {
        const wb = bb.inputsmgr;
        if (wb) {
          this.clear();
          for (const bb in wb) {
            const Mb = Vb[bb];
            if (Mb) {
              const eb = wb[bb],
                pb = Hb.d.Parse((() => new Mb), eb, null);
              this.add(pb)
            }
          }
        } else
          for (const Mb in this.attached) {
            const wb = Vb[this.attached[Mb].getClassName()];
            if (wb) {
              const eb = Hb.d.Parse((() => new wb), bb, null);
              this.remove(this.attached[Mb]), this.add(eb)
            }
          }
      }
    }
  },
  41920: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => eb.e
    });
    var eb = Mb(41929);
    (0, eb.h)()
  },
  41929: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => Ib,
      h: () => Ub
    });
    var eb = Mb(41675),
      Hb = Mb(41679),
      pb = Mb(38285),
      Vb = Mb(38406),
      gb = Mb(41931),
      lb = Mb(41886),
      Lb = Mb(38333);
    let Ib = (() => {
        var bb;
        let wb, Mb, lb = gb.d,
          Lb = [],
          Ib = [],
          Ob = [],
          Ub = [];
        return bb = class extends lb {
          constructor(bb, wb, Mb, Hb) {
            super(bb, Mb, Hb), this.groundColor = (0, eb.m)(this, Lb, new Vb.e(0, 0, 0)), this.direction = ((0, eb.m)(this, Ib), (0, eb.m)(this, Ob, void 0)), (0, eb.m)(this, Ub), this.direction = wb || pb.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = pb.o.Normalize(bb.subtract(pb.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Mb.x, Mb.y, Mb.z, 0, wb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), wb), this
          }
          transferToNodeMaterialEffect(bb, wb) {
            const Mb = pb.o.Normalize(this.direction);
            return bb.setFloat3(wb, Mb.x, Mb.y, Mb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = pb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return gb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, wb) {
            bb["HEMILIGHT" + wb] = !0
          }
        }, (() => {
          const pb = "function" === typeof Symbol && Symbol.metadata ? Object.create(lb[Symbol.metadata] ?? null) : void 0;
          wb = [(0, Hb.i)()], Mb = [(0, Hb.B)()], (0, eb.i)(null, null, wb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, wb) => {
                bb.groundColor = wb
              }
            },
            metadata: pb
          }, Lb, Ib), (0, eb.i)(null, null, Mb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, wb) => {
                bb.direction = wb
              }
            },
            metadata: pb
          }, Ob, Ub), pb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: pb
          })
        })(), bb
      })(),
      Ob = !1;

    function Ub() {
      Ob || (Ob = !0, lb.d.AddNodeConstructor("Light_Type_3", ((bb, wb) => () => new Ib(bb, pb.o.Zero(), wb))), (0, Lb.e)("BABYLON.HemisphericLight", Ib))
    }
  },
  38401: (bb, wb, Mb) => {
    Mb.d(wb, {
      Color3: () => eb.e,
      c: () => eb.f
    });
    var eb = Mb(38406);
    (0, eb.h)()
  },
  38994: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Hb
    });
    var eb = Mb(39001);
    class Hb {
      static GetPlanes(bb) {
        const wb = [];
        for (let Mb = 0; Mb < 6; Mb++) wb.push(new eb.d(0, 0, 0, 0));
        return Hb.GetPlanesToRef(bb, wb), wb
      }
      static GetNearPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[2], wb.normal.y = Mb[7] + Mb[6], wb.normal.z = Mb[11] + Mb[10], wb.d = Mb[15] + Mb[14], wb.normalize()
      }
      static GetFarPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[2], wb.normal.y = Mb[7] - Mb[6], wb.normal.z = Mb[11] - Mb[10], wb.d = Mb[15] - Mb[14], wb.normalize()
      }
      static GetLeftPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[0], wb.normal.y = Mb[7] + Mb[4], wb.normal.z = Mb[11] + Mb[8], wb.d = Mb[15] + Mb[12], wb.normalize()
      }
      static GetRightPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[0], wb.normal.y = Mb[7] - Mb[4], wb.normal.z = Mb[11] - Mb[8], wb.d = Mb[15] - Mb[12], wb.normalize()
      }
      static GetTopPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] - Mb[1], wb.normal.y = Mb[7] - Mb[5], wb.normal.z = Mb[11] - Mb[9], wb.d = Mb[15] - Mb[13], wb.normalize()
      }
      static GetBottomPlaneToRef(bb, wb) {
        const Mb = bb.m;
        wb.normal.x = Mb[3] + Mb[1], wb.normal.y = Mb[7] + Mb[5], wb.normal.z = Mb[11] + Mb[9], wb.d = Mb[15] + Mb[13], wb.normalize()
      }
      static GetPlanesToRef(bb, wb) {
        Hb.GetNearPlaneToRef(bb, wb[0]), Hb.GetFarPlaneToRef(bb, wb[1]), Hb.GetLeftPlaneToRef(bb, wb[2]), Hb.GetRightPlaneToRef(bb, wb[3]), Hb.GetTopPlaneToRef(bb, wb[4]), Hb.GetBottomPlaneToRef(bb, wb[5])
      }
      static IsPointInFrustum(bb, wb) {
        for (let Mb = 0; Mb < 6; Mb++)
          if (wb[Mb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  39001: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Hb
    });
    var eb = Mb(38285);
    class Hb {
      constructor(bb, wb, Mb, Hb) {
        this.normal = new eb.o(bb, wb, Mb), this.d = Hb
      }
      ppb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Hb(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let bb = this.normal.getHashCode();
        return bb = 397 * bb ^ this.d, bb
      }
      normalize() {
        const bb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let wb = 0;
        return 0 !== bb && (wb = 1 / bb), this.normal.x *= wb, this.normal.y *= wb, this.normal.z *= wb, this.d *= wb, this
      }
      transform(bb) {
        const wb = Hb._TmpMatrix;
        bb.invertToRef(wb);
        const Mb = wb.m,
          eb = this.normal.x,
          pb = this.normal.y,
          Vb = this.normal.z,
          gb = this.d,
          lb = eb * Mb[0] + pb * Mb[1] + Vb * Mb[2] + gb * Mb[3],
          Lb = eb * Mb[4] + pb * Mb[5] + Vb * Mb[6] + gb * Mb[7],
          Ib = eb * Mb[8] + pb * Mb[9] + Vb * Mb[10] + gb * Mb[11],
          Ob = eb * Mb[12] + pb * Mb[13] + Vb * Mb[14] + gb * Mb[15];
        return new Hb(lb, Lb, Ib, Ob)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, wb, Mb) {
        const eb = wb.x - bb.x,
          Hb = wb.y - bb.y,
          pb = wb.z - bb.z,
          Vb = Mb.x - bb.x,
          gb = Mb.y - bb.y,
          lb = Mb.z - bb.z,
          Lb = Hb * lb - pb * gb,
          Ib = pb * Vb - eb * lb,
          Ob = eb * gb - Hb * Vb,
          Ub = Math.sqrt(Lb * Lb + Ib * Ib + Ob * Ob);
        let tb;
        return tb = 0 !== Ub ? 1 / Ub : 0, this.normal.x = Lb * tb, this.normal.y = Ib * tb, this.normal.z = Ob * tb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, wb) {
        return eb.o.Dot(this.normal, bb) <= wb
      }
      signedDistanceTo(bb) {
        return eb.o.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Hb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, wb, Mb) {
        const eb = new Hb(0, 0, 0, 0);
        return eb.copyFromPoints(bb, wb, Mb), eb
      }
      static FromPositionAndNormal(bb, wb) {
        const Mb = new Hb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, wb, Mb)
      }
      static FromPositionAndNormalToRef(bb, wb, Mb) {
        return Mb.normal.eZ(wb), Mb.normal.normalize(), Mb.d = -bb.dot(Mb.normal), Mb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, wb, Mb) {
        const Hb = -(wb.x * bb.x + wb.y * bb.y + wb.z * bb.z);
        return eb.o.Dot(Mb, wb) + Hb
      }
    }
    Hb._TmpMatrix = eb.b.Identity()
  },
  38281: (bb, wb, Mb) => {
    Mb.r(wb), Mb.d(wb, {
      Matrix: () => eb.b,
      Quaternion: () => eb.e,
      RegisterMathVector: () => eb.g,
      TmpVectors: () => eb.j,
      Vector2: () => eb.m,
      YC: () => eb.o,
      Vector4: () => eb.q
    });
    var eb = Mb(38285);
    (0, eb.g)()
  },
  39323: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => eb
    });
    class eb {
      constructor(bb, wb, Mb, eb) {
        this.x = bb, this.y = wb, this.width = Mb, this.height = eb
      }
      toGlobal(bb, wb) {
        return new eb(this.x * bb, this.y * wb, this.width * bb, this.height * wb)
      }
      toGlobalToRef(bb, wb, Mb) {
        return Mb.x = this.x * bb, Mb.y = this.y * wb, Mb.width = this.width * bb, Mb.height = this.height * wb, this
      }
      clone() {
        return new eb(this.x, this.y, this.width, this.height)
      }
    }
  },
  42074: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => Lb
    });
    var eb = Mb(38285),
      Hb = Mb(38406),
      pb = Mb(42078),
      Vb = Mb(42091),
      gb = Mb(42107);

    function lb(bb) {
      let wb = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Mb = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        pb = [],
        lb = bb.width || bb.size || 1,
        Lb = bb.height || bb.size || 1,
        Ib = bb.depth || bb.size || 1,
        Ob = bb.wrap || !1;
      let Ub = void 0 === bb.topBaseAt ? 1 : bb.topBaseAt,
        tb = void 0 === bb.bottomBaseAt ? 0 : bb.bottomBaseAt;
      Ub = (Ub + 4) % 4, tb = (tb + 4) % 4;
      let Cb = [2, 0, 3, 1][Ub],
        Eb = [2, 0, 1, 3][tb],
        Fb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Ob) {
        wb = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Fb = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let bb = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Mb = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const eb = [17, 18, 19, 16],
          Hb = [22, 23, 20, 21];
        for (; Cb > 0;) bb.unshift(bb.pop()), eb.unshift(eb.pop()), Cb--;
        for (; Eb > 0;) Mb.unshift(Mb.pop()), Hb.unshift(Hb.pop()), Eb--;
        bb = bb.flat(), Mb = Mb.flat(), Fb = Fb.concat(bb).concat(Mb), wb.push(eb[0], eb[2], eb[3], eb[0], eb[1], eb[2]), wb.push(Hb[0], Hb[2], Hb[3], Hb[0], Hb[1], Hb[2])
      }
      const Bb = [lb / 2, Lb / 2, Ib / 2],
        sb = Fb.reduce(((bb, wb, Mb) => bb.concat(wb * Bb[Mb % 3])), []),
        mb = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Vb.d.DEFAULTSIDE,
        hb = bb.faceUV || new Array(6),
        zb = bb.faceColors,
        Xb = [];
      for (let Vb = 0; Vb < 6; Vb++) void 0 === hb[Vb] && (hb[Vb] = new eb.q(0, 0, 1, 1)), zb && void 0 === zb[Vb] && (zb[Vb] = new Hb.f(1, 1, 1, 1));
      for (let eb = 0; eb < 6; eb++)
        if (pb.push(hb[eb].z, gb.d ? 1 - hb[eb].w : hb[eb].w), pb.push(hb[eb].x, gb.d ? 1 - hb[eb].w : hb[eb].w), pb.push(hb[eb].x, gb.d ? 1 - hb[eb].y : hb[eb].y), pb.push(hb[eb].z, gb.d ? 1 - hb[eb].y : hb[eb].y), zb)
          for (let bb = 0; bb < 4; bb++) Xb.push(zb[eb].r, zb[eb].g, zb[eb].b, zb[eb].a);
      Vb.d._ComputeSides(mb, sb, wb, Mb, pb, bb.frontUVs, bb.backUVs);
      const xb = new Vb.d;
      if (xb.indices = wb, xb.positions = sb, xb.normals = Mb, xb.uvs = pb, zb) {
        const bb = mb === Vb.d.DOUBLESIDE ? Xb.concat(Xb) : Xb;
        xb.colors = bb
      }
      return xb
    }

    function Lb(bb) {
      let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const eb = new pb.e(bb, Mb);
      wb.sideOrientation = pb.e._GetDefaultSideOrientation(wb.sideOrientation), eb._originalBuilderSideOrientation = wb.sideOrientation;
      return lb(wb).applyToMesh(eb, wb.updatable), eb
    }
    let Ib = !1;
    Ib || (Ib = !0, Vb.d.CreateBox = lb, pb.e.CreateBox = function(bb, wb) {
      return Lb(bb, {
        size: wb,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  42132: (bb, wb, Mb) => {
    Mb.d(wb, {
      d: () => Ob
    });
    var eb = Mb(38285),
      Hb = Mb(42078),
      pb = Mb(42091),
      Vb = Mb(42137),
      gb = Mb(41816),
      lb = Mb(39971);

    function Lb(bb) {
      const wb = [],
        Mb = [],
        eb = bb.lines,
        Hb = bb.colors,
        Vb = [];
      let gb = 0;
      for (let pb = 0; pb < eb.length; pb++) {
        const bb = eb[pb];
        for (let eb = 0; eb < bb.length; eb++) {
          const {
            x: lb,
            y: Lb,
            z: Ib
          } = bb[eb];
          if (Mb.push(lb, Lb, Ib), Hb) {
            const bb = Hb[pb],
              {
                r: wb,
                g: Mb,
                b: gb,
                a: lb
              } = bb[eb];
            Vb.push(wb, Mb, gb, lb)
          }
          eb > 0 && (wb.push(gb - 1), wb.push(gb)), gb++
        }
      }
      const lb = new pb.d;
      return lb.indices = wb, lb.positions = Mb, Hb && (lb.colors = Vb), lb
    }

    function Ib(bb) {
      const wb = bb.dashSize || 3,
        Mb = bb.gapSize || 1,
        Hb = bb.dashNb || 200,
        Vb = bb.points,
        gb = [],
        lb = [],
        Lb = eb.o.Zero();
      let Ib, Ob, Ub, tb = 0,
        Cb = 0;
      for (Ub = 0; Ub < Vb.length - 1; Ub++) Vb[Ub + 1].subtractToRef(Vb[Ub], Lb), tb += Lb.length();
      const Eb = tb / Hb,
        Fb = wb * Eb / (wb + Mb);
      for (Ub = 0; Ub < Vb.length - 1; Ub++) {
        Vb[Ub + 1].subtractToRef(Vb[Ub], Lb), Ib = Math.floor(Lb.length() / Eb), Lb.normalize();
        for (let bb = 0; bb < Ib; bb++) Ob = Eb * bb, gb.push(Vb[Ub].x + Ob * Lb.x, Vb[Ub].y + Ob * Lb.y, Vb[Ub].z + Ob * Lb.z), gb.push(Vb[Ub].x + (Ob + Fb) * Lb.x, Vb[Ub].y + (Ob + Fb) * Lb.y, Vb[Ub].z + (Ob + Fb) * Lb.z), lb.push(Cb, Cb + 1), Cb += 2
      }
      const Bb = new pb.d;
      return Bb.positions = gb, Bb.indices = lb, Bb
    }

    function Ob(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const eb = wb.instance,
        Hb = wb.lines,
        pb = wb.colors;
      if (eb) {
        const bb = eb.getVerticesData(gb.i.PositionKind);
        let wb, Mb;
        pb && (wb = eb.getVerticesData(gb.i.ColorKind));
        let Vb = 0,
          lb = 0;
        for (let eb = 0; eb < Hb.length; eb++) {
          const gb = Hb[eb];
          for (let Hb = 0; Hb < gb.length; Hb++) bb[Vb] = gb[Hb].x, bb[Vb + 1] = gb[Hb].y, bb[Vb + 2] = gb[Hb].z, pb && wb && (Mb = pb[eb], wb[lb] = Mb[Hb].r, wb[lb + 1] = Mb[Hb].g, wb[lb + 2] = Mb[Hb].b, wb[lb + 3] = Mb[Hb].a, lb += 4), Vb += 3
        }
        return eb.updateVerticesData(gb.i.PositionKind, bb, !1, !1), pb && wb && eb.updateVerticesData(gb.i.ColorKind, wb, !1, !1), eb.refreshBoundingInfo(), eb
      }
      const lb = !!pb,
        Ib = new Vb.c(bb, Mb, null, void 0, void 0, lb, wb.useVertexAlpha, wb.material);
      return Lb(wb).applyToMesh(Ib, wb.updatable), Ib
    }

    function Ub(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const eb = wb.colors ? [wb.colors] : null;
      return Ob(bb, {
        lines: [wb.points],
        updatable: wb.updatable,
        instance: wb.instance,
        colors: eb,
        useVertexAlpha: wb.useVertexAlpha,
        material: wb.material
      }, Mb)
    }

    function tb(bb, wb) {
      let Mb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const pb = wb.points,
        gb = wb.instance,
        Lb = wb.gapSize || 1,
        Ob = wb.dashSize || 3;
      if (gb) {
        const bb = bb => {
          const wb = eb.o.Zero(),
            Mb = bb.length / 6;
          let Hb, Vb, lb, Lb, Ib = 0,
            Ob = 0;
          for (lb = 0; lb < pb.length - 1; lb++) pb[lb + 1].subtractToRef(pb[lb], wb), Ib += wb.length();
          const Ub = Ib / Mb,
            tb = gb._creationDataStorage.dashSize,
            Cb = tb * Ub / (tb + gb._creationDataStorage.gapSize);
          for (lb = 0; lb < pb.length - 1; lb++)
            for (pb[lb + 1].subtractToRef(pb[lb], wb), Hb = Math.floor(wb.length() / Ub), wb.normalize(), Lb = 0; Lb < Hb && Ob < bb.length;) Vb = Ub * Lb, bb[Ob] = pb[lb].x + Vb * wb.x, bb[Ob + 1] = pb[lb].y + Vb * wb.y, bb[Ob + 2] = pb[lb].z + Vb * wb.z, bb[Ob + 3] = pb[lb].x + (Vb + Cb) * wb.x, bb[Ob + 4] = pb[lb].y + (Vb + Cb) * wb.y, bb[Ob + 5] = pb[lb].z + (Vb + Cb) * wb.z, Ob += 6, Lb++;
          for (; Ob < bb.length;) bb[Ob] = pb[lb].x, bb[Ob + 1] = pb[lb].y, bb[Ob + 2] = pb[lb].z, Ob += 3
        };
        return (wb.dashNb || wb.dashSize || wb.gapSize || wb.useVertexAlpha || wb.material) && lb.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), gb.updateMeshPositions(bb, !1), gb
      }
      const Ub = new Vb.c(bb, Mb, null, void 0, void 0, void 0, wb.useVertexAlpha, wb.material);
      return Ib(wb).applyToMesh(Ub, wb.updatable), Ub._creationDataStorage = new Hb.j, Ub._creationDataStorage.dashSize = Ob, Ub._creationDataStorage.gapSize = Lb, Ub
    }
    let Cb = !1;
    Cb || (Cb = !0, pb.d.CreateLineSystem = Lb, pb.d.CreateDashedLines = Ib, Hb.e.CreateLines = function(bb, wb) {
      return Ub(bb, {
        points: wb,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Hb.e.CreateDashedLines = function(bb, wb, Mb, eb, Hb) {
      return tb(bb, {
        points: wb,
        dashSize: Mb,
        gapSize: eb,
        dashNb: Hb,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  42137: (bb, wb, Mb) => {
    Mb.d(wb, {
      c: () => Ub,
      f: () => Eb
    });
    var eb, Hb, pb = Mb(38406),
      Vb = Mb(41816),
      gb = Mb(42078),
      lb = Mb(42140),
      Lb = Mb(41963),
      Ib = Mb(42147),
      Ob = Mb(41554);
    class Ub extends gb.e {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let wb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          eb = arguments.length > 5 ? arguments[5] : void 0,
          Hb = arguments.length > 6 ? arguments[6] : void 0,
          gb = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, wb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = eb, this.useVertexAlpha = Hb, this.color = new pb.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, wb && (this.color = wb.color.clone(), this.alpha = wb.alpha, this.useVertexColor = wb.useVertexColor, this.useVertexAlpha = wb.useVertexAlpha), this.intersectionThreshold = .1;
        const lb = {
          attributes: [Vb.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? lb.defines.push("#define VERTEXALPHA") : lb.needAlphaBlending = !1, this.useVertexColor ? (lb.defines.push("#define VERTEXCOLOR"), lb.attributes.push(Vb.i.ColorKind)) : (lb.uniforms.push("color"), this._color4 = new pb.f), gb) this.material = gb;
        else {
          this.RJ().DC().isWebGPU && !Ub.ForceGLSL && (this._shaderLanguage = 1), lb.shaderLanguage = this._shaderLanguage, lb.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Mb.e(663).then((() => Mb(54784))), Mb.e(669).then((() => Mb(54792)))]) : await Promise.all([Mb.e(645).then((() => Mb(54798))), Mb.e(651).then((() => Mb(54802)))])
          };
          const bb = new Ib.n("colorShader", this.RJ(), "color", lb, !1);
          bb.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(bb)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(bb) {
        const wb = this.material;
        if (wb === bb) return;
        const Mb = wb && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), Mb && wb?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = Lb.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, wb) {
        if (!this._geometry) return this;
        const Mb = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(wb, Mb) : this._geometry._bind(wb, Mb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: wb,
            b: Mb
          } = this.color;
          this._color4.set(bb, wb, Mb, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, wb, Mb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const eb = this.RJ().DC();
        return this._unIndexed ? eb.drawArraysType(Lb.b.LineListDrawMode, bb.verticesStart, bb.verticesCount, Mb) : eb.drawElementsType(Lb.b.LineListDrawMode, bb.indexStart, bb.indexCount, Mb), this
      }
      dispose(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || wb) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        if (wb && void 0 === wb._addToSceneRootNodes) {
          const Mb = wb;
          return Mb.source = this, new Ub(bb, this.RJ(), Mb.parent, Mb.source, Mb.doNotCloneChildren)
        }
        return new Ub(bb, this.RJ(), wb, this, Mb)
      }
      createInstance(bb) {
        const wb = new tb(bb, this);
        if (this.hN) {
          wb.hN = {};
          for (const bb in this.hN) wb.hN[bb] = this.hN[bb]
        }
        return wb
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.ppb(), bb.alpha = this.alpha
      }
      static Parse(bb, wb) {
        const Mb = new Ub(bb.name, wb);
        return Mb.color = pb.e.FromArray(bb.color), Mb.alpha = bb.alpha, Mb
      }
    }
    Ub.ForceGLSL = !1;
    class tb extends lb.e {
      constructor(bb, wb) {
        super(bb, wb), this.intersectionThreshold = wb.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Cb = !1;

    function Eb() {
      Cb || (Cb = !0, gb.e._LinesMeshParser = (bb, wb) => Ub.Parse(bb, wb))
    }(eb = Ub.prototype).enableEdgesRendering ?? (eb.enableEdgesRendering = (0, Ob.h)("LinesMesh", "enableEdgesRendering")), (Hb = tb.prototype).enableEdgesRendering ?? (Hb.enableEdgesRendering = (0, Ob.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39966: (bb, wb, Mb) => {
    Mb.d(wb, {
      e: () => pb
    });
    var eb = Mb(39971);
    const Hb = (bb, wb, Mb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Mb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(wb) : null;
    class pb {
      static DeepCopy(bb, wb, Mb, pb) {
        let Vb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const gb = function(bb) {
          const wb = [];
          do {
            const Mb = Object.getOwnPropertyNames(bb);
            for (const bb of Mb) - 1 === wb.indexOf(bb) && wb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return wb
        }(bb);
        for (const Lb of gb) {
          if ("_" === Lb[0] && (!pb || -1 === pb.indexOf(Lb))) continue;
          if (Lb.endsWith("Observable")) continue;
          if (Mb && -1 !== Mb.indexOf(Lb)) continue;
          const gb = bb[Lb],
            Ib = typeof gb;
          if ("function" !== Ib) try {
            if ("object" === Ib)
              if (gb instanceof Uint8Array) wb[Lb] = Uint8Array.from(gb);
              else if (gb instanceof Array) {
              if (wb[Lb] = [], gb.length > 0)
                if ("object" == typeof gb[0])
                  for (let bb = 0; bb < gb.length; bb++) {
                    const Mb = Hb(gb[bb], wb, Vb); - 1 === wb[Lb].indexOf(Mb) && wb[Lb].push(Mb)
                  } else wb[Lb] = gb.slice(0)
            } else wb[Lb] = Hb(gb, wb, Vb);
            else wb[Lb] = gb
          } catch (lb) {
            eb.b.Warn(lb.message)
          }
        }
      }
    }
  },
  39148: (bb, wb, Mb) => {
    function eb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const wb = 16 * Math.random() | 0;
        return ("x" === bb ? wb : 3 & wb | 8).toString(16)
      }))
    }
    Mb.d(wb, {
      c: () => eb
    })
  },
  39971: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb
    });
    class eb {
      static _CheckLimit(bb, wb) {
        let Mb = eb._LogLimitOutputs[bb];
        return Mb ? Mb.current++ : (Mb = {
          limit: wb,
          current: 1
        }, eb._LogLimitOutputs[bb] = Mb), Mb.current <= Mb.limit
      }
      static _GenerateLimitMessage(bb) {
        let wb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Mb = eb._LogLimitOutputs[bb];
        if (!Mb || !eb.MessageLimitReached) return;
        const Hb = this._Levels[wb];
        Mb.current === Mb.limit && eb[Hb.name](eb.MessageLimitReached.replace(/%LIMIT%/g, "" + Mb.limit).replace(/%TYPE%/g, Hb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        eb._LogCache = bb + eb._LogCache, eb.OnNewCacheEntry && eb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const wb = bb => bb < 10 ? "0" + bb : "" + bb,
          Mb = new Date;
        return "[" + wb(Mb.getHours()) + ":" + wb(Mb.getMinutes()) + ":" + wb(Mb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, wb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          wb = arguments.length > 1 ? arguments[1] : void 0,
          Mb = arguments.length > 2 ? arguments[2] : void 0;
        const Hb = Array.isArray(wb) ? wb[0] : wb;
        if (void 0 !== Mb && !eb._CheckLimit(Hb, Mb)) return;
        const pb = eb._FormatMessage(Hb),
          Vb = this._Levels[bb],
          gb = Array.isArray(wb) ? wb.slice(1) : [];
        Vb.logFunc && Vb.logFunc("BJS - " + pb, ...gb);
        const lb = `<div style='color:${Vb.color}'>${pb}</div><br>`;
        eb._AddLogEntry(lb), eb._GenerateLimitMessage(Hb, bb)
      }
      static get LogCache() {
        return eb._LogCache
      }
      static ClearLogCache() {
        eb._LogCache = "", eb._LogLimitOutputs = {}, eb.errorsCount = 0
      }
      static set LogLevels(bb) {
        eb.Log = eb._LogDisabled, eb.Warn = eb._LogDisabled, eb.Error = eb._LogDisabled;
        const wb = [eb.MessageLogLevel, eb.WarningLogLevel, eb.ErrorLogLevel];
        for (const Mb of wb)
          if ((bb & Mb) === Mb) {
            const bb = this._Levels[Mb];
            eb[bb.name] = eb._LogEnabled.bind(eb, Mb)
          }
      }
    }
    eb.NoneLogLevel = 0, eb.MessageLogLevel = 1, eb.WarningLogLevel = 2, eb.ErrorLogLevel = 4, eb.AllLogLevel = 7, eb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", eb._LogCache = "", eb._LogLimitOutputs = {}, eb._Levels = [{}, {
      color: "white",
      logFunc: console.log,
      name: "Log"
    }, {
      color: "orange",
      logFunc: console.warn,
      name: "Warn"
    }, {}, {
      color: "red",
      logFunc: console.error,
      name: "Error"
    }], eb.errorsCount = 0, eb.Log = eb._LogEnabled.bind(eb, eb.MessageLogLevel), eb.Warn = eb._LogEnabled.bind(eb, eb.WarningLogLevel), eb.Error = eb._LogEnabled.bind(eb, eb.ErrorLogLevel)
  },
  41759: (bb, wb, Mb) => {
    Mb.d(wb, {
      b: () => eb.g
    });
    var eb = Mb(41764);
    (0, eb.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);