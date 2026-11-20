export const id = 224;
export const ids = [224, 230, 233];
export const modules = {
  39686: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ub,
      f: () => Lb
    });
    var Bb = hb(38302),
      Ob = hb(39488),
      Gb = hb(39666),
      Ub = {};
    class Lb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const ub = bb.getSimpleName();
        this.attached[ub] ? Bb.b.Warn("camera input of type " + ub + " already exists on camera") : (this.attached[ub] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const ub in this.attached) {
          const hb = this.attached[ub];
          if (hb === bb) return hb.detachControl(), hb.camera = null, delete this.attached[ub], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const ub in this.attached) {
          const hb = this.attached[ub];
          hb.getClassName() === bb && (hb.detachControl(), hb.camera = null, delete this.attached[ub], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const ub = this.checkInputs;
        return () => {
          ub(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !Gb.d.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const ub in this.attached) this.attached[ub].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ub in this.attached) this.attached[ub].detachControl(), bb && (this.attached[ub].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const ub = this.attached[bb];
          ub.checkInputs && (this.checkInputs = this._addCheckInputs(ub.checkInputs.bind(ub)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const ub = {};
        for (const hb in this.attached) {
          const bb = this.attached[hb],
            Bb = Ob.c.Serialize(bb);
          ub[bb.getClassName()] = Bb
        }
        bb.inputsmgr = ub
      }
      parse(bb) {
        const ub = bb.inputsmgr;
        if (ub) {
          this.clear();
          for (const bb in ub) {
            const hb = Ub[bb];
            if (hb) {
              const Bb = ub[bb],
                Gb = Ob.c.Parse((() => new hb), Bb, null);
              this.add(Gb)
            }
          }
        } else
          for (const hb in this.attached) {
            const ub = Ub[this.attached[hb].getClassName()];
            if (ub) {
              const Bb = Ob.c.Parse((() => new ub), bb, null);
              this.remove(this.attached[hb]), this.add(Bb)
            }
          }
      }
    }
  },
  39689: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb.b
    });
    var Bb = hb(39692);
    (0, Bb.c)()
  },
  39692: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => ab,
      c: () => wb
    });
    var Bb = hb(39463),
      Ob = hb(39467),
      Gb = hb(36727),
      Ub = hb(36893),
      Lb = hb(39700),
      Yb = hb(39670),
      Sb = hb(36762);
    let ab = (() => {
        var bb;
        let ub, hb, Yb = Lb.b,
          Sb = [],
          ab = [],
          Hb = [],
          wb = [];
        return bb = class extends Yb {
          constructor(bb, ub, hb, Ob) {
            super(bb, hb, Ob), this.groundColor = (0, Bb.k)(this, Sb, new Ub.b(0, 0, 0)), this.direction = ((0, Bb.k)(this, ab), (0, Bb.k)(this, Hb, void 0)), (0, Bb.k)(this, wb), this.direction = ub || Gb.q.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Gb.q.Normalize(bb.subtract(Gb.q.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", hb.x, hb.y, hb.z, 0, ub), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ub), this
          }
          transferToNodeMaterialEffect(bb, ub) {
            const hb = Gb.q.Normalize(this.direction);
            return bb.setFloat3(ub, hb.x, hb.y, hb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Gb.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Lb.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ub) {
            bb["HEMILIGHT" + ub] = !0
          }
        }, (() => {
          const Gb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Yb[Symbol.metadata] ?? null) : void 0;
          ub = [(0, Ob.p)()], hb = [(0, Ob.H)()], (0, Bb.h)(null, null, ub, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ub) => {
                bb.groundColor = ub
              }
            },
            metadata: Gb
          }, Sb, ab), (0, Bb.h)(null, null, hb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ub) => {
                bb.direction = ub
              }
            },
            metadata: Gb
          }, Hb, wb), Gb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Gb
          })
        })(), bb
      })(),
      Hb = !1;

    function wb() {
      Hb || (Hb = !0, Yb.b.AddNodeConstructor("Light_Type_3", ((bb, ub) => () => new ab(bb, Gb.q.Zero(), ub))), (0, Sb.f)("BABYLON.HemisphericLight", ab))
    }
  },
  36889: (bb, ub, hb) => {
    hb.d(ub, {
      Color3: () => Bb.b,
      b: () => Bb.c
    });
    var Bb = hb(36893);
    (0, Bb.g)()
  },
  37390: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Ob
    });
    var Bb = hb(37399);
    class Ob {
      static GetPlanes(bb) {
        const ub = [];
        for (let hb = 0; hb < 6; hb++) ub.push(new Bb.d(0, 0, 0, 0));
        return Ob.GetPlanesToRef(bb, ub), ub
      }
      static GetNearPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[2], ub.normal.y = hb[7] + hb[6], ub.normal.z = hb[11] + hb[10], ub.d = hb[15] + hb[14], ub.normalize()
      }
      static GetFarPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[2], ub.normal.y = hb[7] - hb[6], ub.normal.z = hb[11] - hb[10], ub.d = hb[15] - hb[14], ub.normalize()
      }
      static GetLeftPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[0], ub.normal.y = hb[7] + hb[4], ub.normal.z = hb[11] + hb[8], ub.d = hb[15] + hb[12], ub.normalize()
      }
      static GetRightPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[0], ub.normal.y = hb[7] - hb[4], ub.normal.z = hb[11] - hb[8], ub.d = hb[15] - hb[12], ub.normalize()
      }
      static GetTopPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] - hb[1], ub.normal.y = hb[7] - hb[5], ub.normal.z = hb[11] - hb[9], ub.d = hb[15] - hb[13], ub.normalize()
      }
      static GetBottomPlaneToRef(bb, ub) {
        const hb = bb.m;
        ub.normal.x = hb[3] + hb[1], ub.normal.y = hb[7] + hb[5], ub.normal.z = hb[11] + hb[9], ub.d = hb[15] + hb[13], ub.normalize()
      }
      static GetPlanesToRef(bb, ub) {
        Ob.GetNearPlaneToRef(bb, ub[0]), Ob.GetFarPlaneToRef(bb, ub[1]), Ob.GetLeftPlaneToRef(bb, ub[2]), Ob.GetRightPlaneToRef(bb, ub[3]), Ob.GetTopPlaneToRef(bb, ub[4]), Ob.GetBottomPlaneToRef(bb, ub[5])
      }
      static IsPointInFrustum(bb, ub) {
        for (let hb = 0; hb < 6; hb++)
          if (ub[hb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37399: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Ob
    });
    var Bb = hb(36727);
    class Ob {
      constructor(bb, ub, hb, Ob) {
        this.normal = new Bb.q(bb, ub, hb), this.d = Ob
      }
      ZBb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Ob(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ub = 0;
        return 0 !== bb && (ub = 1 / bb), this.normal.x *= ub, this.normal.y *= ub, this.normal.z *= ub, this.d *= ub, this
      }
      transform(bb) {
        const ub = Ob._TmpMatrix;
        bb.invertToRef(ub);
        const hb = ub.m,
          Bb = this.normal.x,
          Gb = this.normal.y,
          Ub = this.normal.z,
          Lb = this.d,
          Yb = Bb * hb[0] + Gb * hb[1] + Ub * hb[2] + Lb * hb[3],
          Sb = Bb * hb[4] + Gb * hb[5] + Ub * hb[6] + Lb * hb[7],
          ab = Bb * hb[8] + Gb * hb[9] + Ub * hb[10] + Lb * hb[11],
          Hb = Bb * hb[12] + Gb * hb[13] + Ub * hb[14] + Lb * hb[15];
        return new Ob(Yb, Sb, ab, Hb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ub, hb) {
        const Bb = ub.x - bb.x,
          Ob = ub.y - bb.y,
          Gb = ub.z - bb.z,
          Ub = hb.x - bb.x,
          Lb = hb.y - bb.y,
          Yb = hb.z - bb.z,
          Sb = Ob * Yb - Gb * Lb,
          ab = Gb * Ub - Bb * Yb,
          Hb = Bb * Lb - Ob * Ub,
          wb = Math.sqrt(Sb * Sb + ab * ab + Hb * Hb);
        let Zb;
        return Zb = 0 !== wb ? 1 / wb : 0, this.normal.x = Sb * Zb, this.normal.y = ab * Zb, this.normal.z = Hb * Zb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ub) {
        return Bb.q.Dot(this.normal, bb) <= ub
      }
      signedDistanceTo(bb) {
        return Bb.q.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Ob(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ub, hb) {
        const Bb = new Ob(0, 0, 0, 0);
        return Bb.copyFromPoints(bb, ub, hb), Bb
      }
      static FromPositionAndNormal(bb, ub) {
        const hb = new Ob(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ub, hb)
      }
      static FromPositionAndNormalToRef(bb, ub, hb) {
        return hb.normal.mD(ub), hb.normal.normalize(), hb.d = -bb.dot(hb.normal), hb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ub, hb) {
        const Ob = -(ub.x * bb.x + ub.y * bb.y + ub.z * bb.z);
        return Bb.q.Dot(hb, ub) + Ob
      }
    }
    Ob._TmpMatrix = Bb.d.Identity()
  },
  36720: (bb, ub, hb) => {
    hb.r(ub), hb.d(ub, {
      Matrix: () => Bb.d,
      Quaternion: () => Bb.f,
      RegisterMathVector: () => Bb.h,
      TmpVectors: () => Bb.i,
      Vector2: () => Bb.m,
      YX: () => Bb.q,
      Vector4: () => Bb.r
    });
    var Bb = hb(36727);
    (0, Bb.h)()
  },
  37699: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb
    });
    class Bb {
      constructor(bb, ub, hb, Bb) {
        this.x = bb, this.y = ub, this.width = hb, this.height = Bb
      }
      toGlobal(bb, ub) {
        return new Bb(this.x * bb, this.y * ub, this.width * bb, this.height * ub)
      }
      toGlobalToRef(bb, ub, hb) {
        return hb.x = this.x * bb, hb.y = this.y * ub, hb.width = this.width * bb, hb.height = this.height * ub, this
      }
      clone() {
        return new Bb(this.x, this.y, this.width, this.height)
      }
    }
  },
  39846: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Sb
    });
    var Bb = hb(36727),
      Ob = hb(36893),
      Gb = hb(39854),
      Ub = hb(39862),
      Lb = hb(39880);

    function Yb(bb) {
      let ub = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const hb = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Gb = [],
        Yb = bb.width || bb.size || 1,
        Sb = bb.height || bb.size || 1,
        ab = bb.depth || bb.size || 1,
        Hb = bb.wrap || !1;
      let wb = void 0 === bb.topBaseAt ? 1 : bb.topBaseAt,
        Zb = void 0 === bb.bottomBaseAt ? 0 : bb.bottomBaseAt;
      wb = (wb + 4) % 4, Zb = (Zb + 4) % 4;
      let Xb = [2, 0, 3, 1][wb],
        pb = [2, 0, 1, 3][Zb],
        ob = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Hb) {
        ub = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], ob = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let bb = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          hb = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Bb = [17, 18, 19, 16],
          Ob = [22, 23, 20, 21];
        for (; Xb > 0;) bb.unshift(bb.pop()), Bb.unshift(Bb.pop()), Xb--;
        for (; pb > 0;) hb.unshift(hb.pop()), Ob.unshift(Ob.pop()), pb--;
        bb = bb.flat(), hb = hb.flat(), ob = ob.concat(bb).concat(hb), ub.push(Bb[0], Bb[2], Bb[3], Bb[0], Bb[1], Bb[2]), ub.push(Ob[0], Ob[2], Ob[3], Ob[0], Ob[1], Ob[2])
      }
      const Ab = [Yb / 2, Sb / 2, ab / 2],
        lb = ob.reduce(((bb, ub, hb) => bb.concat(ub * Ab[hb % 3])), []),
        Kb = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Ub.c.DEFAULTSIDE,
        Wb = bb.faceUV || new Array(6),
        Cb = bb.faceColors,
        db = [];
      for (let Ub = 0; Ub < 6; Ub++) void 0 === Wb[Ub] && (Wb[Ub] = new Bb.r(0, 0, 1, 1)), Cb && void 0 === Cb[Ub] && (Cb[Ub] = new Ob.c(1, 1, 1, 1));
      for (let Bb = 0; Bb < 6; Bb++)
        if (Gb.push(Wb[Bb].z, Lb.d ? 1 - Wb[Bb].w : Wb[Bb].w), Gb.push(Wb[Bb].x, Lb.d ? 1 - Wb[Bb].w : Wb[Bb].w), Gb.push(Wb[Bb].x, Lb.d ? 1 - Wb[Bb].y : Wb[Bb].y), Gb.push(Wb[Bb].z, Lb.d ? 1 - Wb[Bb].y : Wb[Bb].y), Cb)
          for (let bb = 0; bb < 4; bb++) db.push(Cb[Bb].r, Cb[Bb].g, Cb[Bb].b, Cb[Bb].a);
      Ub.c._ComputeSides(Kb, lb, ub, hb, Gb, bb.frontUVs, bb.backUVs);
      const rb = new Ub.c;
      if (rb.indices = ub, rb.positions = lb, rb.normals = hb, rb.uvs = Gb, Cb) {
        const bb = Kb === Ub.c.DOUBLESIDE ? db.concat(db) : db;
        rb.colors = bb
      }
      return rb
    }

    function Sb(bb) {
      let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Bb = new Gb.c(bb, hb);
      ub.sideOrientation = Gb.c._GetDefaultSideOrientation(ub.sideOrientation), Bb._originalBuilderSideOrientation = ub.sideOrientation;
      return Yb(ub).applyToMesh(Bb, ub.updatable), Bb
    }
    let ab = !1;
    ab || (ab = !0, Ub.c.CreateBox = Yb, Gb.c.CreateBox = function(bb, ub) {
      return Sb(bb, {
        size: ub,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39908: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Hb
    });
    var Bb = hb(36727),
      Ob = hb(39854),
      Gb = hb(39862),
      Ub = hb(39914),
      Lb = hb(39609),
      Yb = hb(38302);

    function Sb(bb) {
      const ub = [],
        hb = [],
        Bb = bb.lines,
        Ob = bb.colors,
        Ub = [];
      let Lb = 0;
      for (let Gb = 0; Gb < Bb.length; Gb++) {
        const bb = Bb[Gb];
        for (let Bb = 0; Bb < bb.length; Bb++) {
          const {
            x: Yb,
            y: Sb,
            z: ab
          } = bb[Bb];
          if (hb.push(Yb, Sb, ab), Ob) {
            const bb = Ob[Gb],
              {
                r: ub,
                g: hb,
                b: Lb,
                a: Yb
              } = bb[Bb];
            Ub.push(ub, hb, Lb, Yb)
          }
          Bb > 0 && (ub.push(Lb - 1), ub.push(Lb)), Lb++
        }
      }
      const Yb = new Gb.c;
      return Yb.indices = ub, Yb.positions = hb, Ob && (Yb.colors = Ub), Yb
    }

    function ab(bb) {
      const ub = bb.dashSize || 3,
        hb = bb.gapSize || 1,
        Ob = bb.dashNb || 200,
        Ub = bb.points,
        Lb = [],
        Yb = [],
        Sb = Bb.q.Zero();
      let ab, Hb, wb, Zb = 0,
        Xb = 0;
      for (wb = 0; wb < Ub.length - 1; wb++) Ub[wb + 1].subtractToRef(Ub[wb], Sb), Zb += Sb.length();
      const pb = Zb / Ob,
        ob = ub * pb / (ub + hb);
      for (wb = 0; wb < Ub.length - 1; wb++) {
        Ub[wb + 1].subtractToRef(Ub[wb], Sb), ab = Math.floor(Sb.length() / pb), Sb.normalize();
        for (let bb = 0; bb < ab; bb++) Hb = pb * bb, Lb.push(Ub[wb].x + Hb * Sb.x, Ub[wb].y + Hb * Sb.y, Ub[wb].z + Hb * Sb.z), Lb.push(Ub[wb].x + (Hb + ob) * Sb.x, Ub[wb].y + (Hb + ob) * Sb.y, Ub[wb].z + (Hb + ob) * Sb.z), Yb.push(Xb, Xb + 1), Xb += 2
      }
      const Ab = new Gb.c;
      return Ab.positions = Lb, Ab.indices = Yb, Ab
    }

    function Hb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Bb = ub.instance,
        Ob = ub.lines,
        Gb = ub.colors;
      if (Bb) {
        const bb = Bb.getVerticesData(Lb.i.PositionKind);
        let ub, hb;
        Gb && (ub = Bb.getVerticesData(Lb.i.ColorKind));
        let Ub = 0,
          Yb = 0;
        for (let Bb = 0; Bb < Ob.length; Bb++) {
          const Lb = Ob[Bb];
          for (let Ob = 0; Ob < Lb.length; Ob++) bb[Ub] = Lb[Ob].x, bb[Ub + 1] = Lb[Ob].y, bb[Ub + 2] = Lb[Ob].z, Gb && ub && (hb = Gb[Bb], ub[Yb] = hb[Ob].r, ub[Yb + 1] = hb[Ob].g, ub[Yb + 2] = hb[Ob].b, ub[Yb + 3] = hb[Ob].a, Yb += 4), Ub += 3
        }
        return Bb.updateVerticesData(Lb.i.PositionKind, bb, !1, !1), Gb && ub && Bb.updateVerticesData(Lb.i.ColorKind, ub, !1, !1), Bb.refreshBoundingInfo(), Bb
      }
      const Yb = !!Gb,
        ab = new Ub.d(bb, hb, null, void 0, void 0, Yb, ub.useVertexAlpha, ub.material);
      return Sb(ub).applyToMesh(ab, ub.updatable), ab
    }

    function wb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Bb = ub.colors ? [ub.colors] : null;
      return Hb(bb, {
        lines: [ub.points],
        updatable: ub.updatable,
        instance: ub.instance,
        colors: Bb,
        useVertexAlpha: ub.useVertexAlpha,
        material: ub.material
      }, hb)
    }

    function Zb(bb, ub) {
      let hb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Gb = ub.points,
        Lb = ub.instance,
        Sb = ub.gapSize || 1,
        Hb = ub.dashSize || 3;
      if (Lb) {
        const bb = bb => {
          const ub = Bb.q.Zero(),
            hb = bb.length / 6;
          let Ob, Ub, Yb, Sb, ab = 0,
            Hb = 0;
          for (Yb = 0; Yb < Gb.length - 1; Yb++) Gb[Yb + 1].subtractToRef(Gb[Yb], ub), ab += ub.length();
          const wb = ab / hb,
            Zb = Lb._creationDataStorage.dashSize,
            Xb = Zb * wb / (Zb + Lb._creationDataStorage.gapSize);
          for (Yb = 0; Yb < Gb.length - 1; Yb++)
            for (Gb[Yb + 1].subtractToRef(Gb[Yb], ub), Ob = Math.floor(ub.length() / wb), ub.normalize(), Sb = 0; Sb < Ob && Hb < bb.length;) Ub = wb * Sb, bb[Hb] = Gb[Yb].x + Ub * ub.x, bb[Hb + 1] = Gb[Yb].y + Ub * ub.y, bb[Hb + 2] = Gb[Yb].z + Ub * ub.z, bb[Hb + 3] = Gb[Yb].x + (Ub + Xb) * ub.x, bb[Hb + 4] = Gb[Yb].y + (Ub + Xb) * ub.y, bb[Hb + 5] = Gb[Yb].z + (Ub + Xb) * ub.z, Hb += 6, Sb++;
          for (; Hb < bb.length;) bb[Hb] = Gb[Yb].x, bb[Hb + 1] = Gb[Yb].y, bb[Hb + 2] = Gb[Yb].z, Hb += 3
        };
        return (ub.dashNb || ub.dashSize || ub.gapSize || ub.useVertexAlpha || ub.material) && Yb.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Lb.updateMeshPositions(bb, !1), Lb
      }
      const wb = new Ub.d(bb, hb, null, void 0, void 0, void 0, ub.useVertexAlpha, ub.material);
      return ab(ub).applyToMesh(wb, ub.updatable), wb._creationDataStorage = new Ob.i, wb._creationDataStorage.dashSize = Hb, wb._creationDataStorage.gapSize = Sb, wb
    }
    let Xb = !1;
    Xb || (Xb = !0, Gb.c.CreateLineSystem = Sb, Gb.c.CreateDashedLines = ab, Ob.c.CreateLines = function(bb, ub) {
      return wb(bb, {
        points: ub,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Ob.c.CreateDashedLines = function(bb, ub, hb, Bb, Ob) {
      return Zb(bb, {
        points: ub,
        dashSize: hb,
        gapSize: Bb,
        dashNb: Ob,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39914: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => wb,
      e: () => pb
    });
    var Bb, Ob, Gb = hb(36893),
      Ub = hb(39609),
      Lb = hb(39854),
      Yb = hb(39921),
      Sb = hb(39728),
      ab = hb(39928),
      Hb = hb(39333);
    class wb extends Lb.c {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let ub = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Bb = arguments.length > 5 ? arguments[5] : void 0,
          Ob = arguments.length > 6 ? arguments[6] : void 0,
          Lb = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ub, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Bb, this.useVertexAlpha = Ob, this.color = new Gb.b(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ub && (this.color = ub.color.clone(), this.alpha = ub.alpha, this.useVertexColor = ub.useVertexColor, this.useVertexAlpha = ub.useVertexAlpha), this.intersectionThreshold = .1;
        const Yb = {
          attributes: [Ub.i.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Yb.defines.push("#define VERTEXALPHA") : Yb.needAlphaBlending = !1, this.useVertexColor ? (Yb.defines.push("#define VERTEXCOLOR"), Yb.attributes.push(Ub.i.ColorKind)) : (Yb.uniforms.push("color"), this._color4 = new Gb.c), Lb) this.material = Lb;
        else {
          this.ZN().UX().isWebGPU && !wb.ForceGLSL && (this._shaderLanguage = 1), Yb.shaderLanguage = this._shaderLanguage, Yb.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([hb.e(335).then((() => hb(41974))), hb.e(341).then((() => hb(41980)))]) : await Promise.all([hb.e(317).then((() => hb(41982))), hb.e(323).then((() => hb(41987)))])
          };
          const bb = new ab.p("colorShader", this.ZN(), "color", Yb, !1);
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
        const ub = this.material;
        if (ub === bb) return;
        const hb = ub && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), hb && ub?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = Sb.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, ub) {
        if (!this._geometry) return this;
        const hb = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ub, hb) : this._geometry._bind(ub, hb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: ub,
            b: hb
          } = this.color;
          this._color4.set(bb, ub, hb, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, ub, hb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Bb = this.ZN().UX();
        return this._unIndexed ? Bb.drawArraysType(Sb.e.LineListDrawMode, bb.verticesStart, bb.verticesCount, hb) : Bb.drawElementsType(Sb.e.LineListDrawMode, bb.indexStart, bb.indexCount, hb), this
      }
      dispose(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ub) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        if (ub && void 0 === ub._addToSceneRootNodes) {
          const hb = ub;
          return hb.source = this, new wb(bb, this.ZN(), hb.parent, hb.source, hb.doNotCloneChildren)
        }
        return new wb(bb, this.ZN(), ub, this, hb)
      }
      createInstance(bb) {
        const ub = new Zb(bb, this);
        if (this.Fs) {
          ub.Fs = {};
          for (const bb in this.Fs) ub.Fs[bb] = this.Fs[bb]
        }
        return ub
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.ZBb(), bb.alpha = this.alpha
      }
      static Parse(bb, ub) {
        const hb = new wb(bb.name, ub);
        return hb.color = Gb.b.FromArray(bb.color), hb.alpha = bb.alpha, hb
      }
    }
    wb.ForceGLSL = !1;
    class Zb extends Yb.b {
      constructor(bb, ub) {
        super(bb, ub), this.intersectionThreshold = ub.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Xb = !1;

    function pb() {
      Xb || (Xb = !0, Lb.c._LinesMeshParser = (bb, ub) => wb.Parse(bb, ub))
    }(Bb = wb.prototype).enableEdgesRendering ?? (Bb.enableEdgesRendering = (0, Hb.j)("LinesMesh", "enableEdgesRendering")), (Ob = Zb.prototype).enableEdgesRendering ?? (Ob.enableEdgesRendering = (0, Hb.j)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38296: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Gb
    });
    var Bb = hb(38302);
    const Ob = (bb, ub, hb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : hb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ub) : null;
    class Gb {
      static DeepCopy(bb, ub, hb, Gb) {
        let Ub = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Lb = function(bb) {
          const ub = [];
          do {
            const hb = Object.getOwnPropertyNames(bb);
            for (const bb of hb) - 1 === ub.indexOf(bb) && ub.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ub
        }(bb);
        for (const Sb of Lb) {
          if ("_" === Sb[0] && (!Gb || -1 === Gb.indexOf(Sb))) continue;
          if (Sb.endsWith("Observable")) continue;
          if (hb && -1 !== hb.indexOf(Sb)) continue;
          const Lb = bb[Sb],
            ab = typeof Lb;
          if ("function" !== ab) try {
            if ("object" === ab)
              if (Lb instanceof Uint8Array) ub[Sb] = Uint8Array.from(Lb);
              else if (Lb instanceof Array) {
              if (ub[Sb] = [], Lb.length > 0)
                if ("object" == typeof Lb[0])
                  for (let bb = 0; bb < Lb.length; bb++) {
                    const hb = Ob(Lb[bb], ub, Ub); - 1 === ub[Sb].indexOf(hb) && ub[Sb].push(hb)
                  } else ub[Sb] = Lb.slice(0)
            } else ub[Sb] = Ob(Lb, ub, Ub);
            else ub[Sb] = Lb
          } catch (Yb) {
            Bb.b.Warn(Yb.message)
          }
        }
      }
    }
  },
  37507: (bb, ub, hb) => {
    function Bb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ub = 16 * Math.random() | 0;
        return ("x" === bb ? ub : 3 & ub | 8).toString(16)
      }))
    }
    hb.d(ub, {
      d: () => Bb
    })
  },
  38302: (bb, ub, hb) => {
    hb.d(ub, {
      b: () => Bb
    });
    class Bb {
      static _CheckLimit(bb, ub) {
        let hb = Bb._LogLimitOutputs[bb];
        return hb ? hb.current++ : (hb = {
          limit: ub,
          current: 1
        }, Bb._LogLimitOutputs[bb] = hb), hb.current <= hb.limit
      }
      static _GenerateLimitMessage(bb) {
        let ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const hb = Bb._LogLimitOutputs[bb];
        if (!hb || !Bb.MessageLimitReached) return;
        const Ob = this._Levels[ub];
        hb.current === hb.limit && Bb[Ob.name](Bb.MessageLimitReached.replace(/%LIMIT%/g, "" + hb.limit).replace(/%TYPE%/g, Ob.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Bb._LogCache = bb + Bb._LogCache, Bb.OnNewCacheEntry && Bb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ub = bb => bb < 10 ? "0" + bb : "" + bb,
          hb = new Date;
        return "[" + ub(hb.getHours()) + ":" + ub(hb.getMinutes()) + ":" + ub(hb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ub) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ub = arguments.length > 1 ? arguments[1] : void 0,
          hb = arguments.length > 2 ? arguments[2] : void 0;
        const Ob = Array.isArray(ub) ? ub[0] : ub;
        if (void 0 !== hb && !Bb._CheckLimit(Ob, hb)) return;
        const Gb = Bb._FormatMessage(Ob),
          Ub = this._Levels[bb],
          Lb = Array.isArray(ub) ? ub.slice(1) : [];
        Ub.logFunc && Ub.logFunc("BJS - " + Gb, ...Lb);
        const Yb = `<div style='color:${Ub.color}'>${Gb}</div><br>`;
        Bb._AddLogEntry(Yb), Bb._GenerateLimitMessage(Ob, bb)
      }
      static get LogCache() {
        return Bb._LogCache
      }
      static ClearLogCache() {
        Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb.errorsCount = 0
      }
      static set LogLevels(bb) {
        Bb.Log = Bb._LogDisabled, Bb.Warn = Bb._LogDisabled, Bb.Error = Bb._LogDisabled;
        const ub = [Bb.MessageLogLevel, Bb.WarningLogLevel, Bb.ErrorLogLevel];
        for (const hb of ub)
          if ((bb & hb) === hb) {
            const bb = this._Levels[hb];
            Bb[bb.name] = Bb._LogEnabled.bind(Bb, hb)
          }
      }
    }
    Bb.NoneLogLevel = 0, Bb.MessageLogLevel = 1, Bb.WarningLogLevel = 2, Bb.ErrorLogLevel = 4, Bb.AllLogLevel = 7, Bb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Bb._LogCache = "", Bb._LogLimitOutputs = {}, Bb._Levels = [{}, {
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
    }], Bb.errorsCount = 0, Bb.Log = Bb._LogEnabled.bind(Bb, Bb.MessageLogLevel), Bb.Warn = Bb._LogEnabled.bind(Bb, Bb.WarningLogLevel), Bb.Error = Bb._LogEnabled.bind(Bb, Bb.ErrorLogLevel)
  },
  39544: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Bb.f
    });
    var Bb = hb(39551);
    (0, Bb.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);