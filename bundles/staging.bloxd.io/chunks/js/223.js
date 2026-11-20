export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39690: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Tb,
      c: () => Ub
    });
    var kb = sb(38284),
      Wb = sb(39441),
      ab = sb(39658),
      Tb = {};
    class Ub {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const cb = bb.getSimpleName();
        this.attached[cb] ? kb.c.Warn("camera input of type " + cb + " already exists on camera") : (this.attached[cb] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const cb in this.attached) {
          const sb = this.attached[cb];
          if (sb === bb) return sb.detachControl(), sb.camera = null, delete this.attached[cb], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const cb in this.attached) {
          const sb = this.attached[cb];
          sb.getClassName() === bb && (sb.detachControl(), sb.camera = null, delete this.attached[cb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const cb = this.checkInputs;
        return () => {
          cb(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !ab.c.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const cb in this.attached) this.attached[cb].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const cb in this.attached) this.attached[cb].detachControl(), bb && (this.attached[cb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const cb = this.attached[bb];
          cb.checkInputs && (this.checkInputs = this._addCheckInputs(cb.checkInputs.bind(cb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const cb = {};
        for (const sb in this.attached) {
          const bb = this.attached[sb],
            kb = Wb.d.Serialize(bb);
          cb[bb.getClassName()] = kb
        }
        bb.inputsmgr = cb
      }
      parse(bb) {
        const cb = bb.inputsmgr;
        if (cb) {
          this.clear();
          for (const bb in cb) {
            const sb = Tb[bb];
            if (sb) {
              const kb = cb[bb],
                ab = Wb.d.Parse((() => new sb), kb, null);
              this.add(ab)
            }
          }
        } else
          for (const sb in this.attached) {
            const cb = Tb[this.attached[sb].getClassName()];
            if (cb) {
              const kb = Wb.d.Parse((() => new cb), bb, null);
              this.remove(this.attached[sb]), this.add(kb)
            }
          }
      }
    }
  },
  39695: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb.b
    });
    var kb = sb(39700);
    (0, kb.d)()
  },
  39700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => fb,
      d: () => Xb
    });
    var kb = sb(39414),
      Wb = sb(39418),
      ab = sb(36656),
      Tb = sb(36830),
      Ub = sb(39706),
      Ib = sb(39667),
      Hb = sb(36698);
    let fb = (() => {
        var bb;
        let cb, sb, Ib = Ub.b,
          Hb = [],
          fb = [],
          Mb = [],
          Xb = [];
        return bb = class extends Ib {
          constructor(bb, cb, sb, Wb) {
            super(bb, sb, Wb), this.groundColor = (0, kb.m)(this, Hb, new Tb.e(0, 0, 0)), this.direction = ((0, kb.m)(this, fb), (0, kb.m)(this, Mb, void 0)), (0, kb.m)(this, Xb), this.direction = cb || ab.p.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = ab.p.Normalize(bb.subtract(ab.p.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", sb.x, sb.y, sb.z, 0, cb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), cb), this
          }
          transferToNodeMaterialEffect(bb, cb) {
            const sb = ab.p.Normalize(this.direction);
            return bb.setFloat3(cb, sb.x, sb.y, sb.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = ab.e.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Ub.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, cb) {
            bb["HEMILIGHT" + cb] = !0
          }
        }, (() => {
          const ab = "function" === typeof Symbol && Symbol.metadata ? Object.create(Ib[Symbol.metadata] ?? null) : void 0;
          cb = [(0, Wb.o)()], sb = [(0, Wb.C)()], (0, kb.j)(null, null, cb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, cb) => {
                bb.groundColor = cb
              }
            },
            metadata: ab
          }, Hb, fb), (0, kb.j)(null, null, sb, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, cb) => {
                bb.direction = cb
              }
            },
            metadata: ab
          }, Mb, Xb), ab && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: ab
          })
        })(), bb
      })(),
      Mb = !1;

    function Xb() {
      Mb || (Mb = !0, Ib.c.AddNodeConstructor("Light_Type_3", ((bb, cb) => () => new fb(bb, ab.p.Zero(), cb))), (0, Hb.h)("BABYLON.HemisphericLight", fb))
    }
  },
  36821: (bb, cb, sb) => {
    sb.d(cb, {
      Color3: () => kb.e,
      e: () => kb.g
    });
    var kb = sb(36830);
    (0, kb.j)()
  },
  37365: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(37368);
    class Wb {
      static GetPlanes(bb) {
        const cb = [];
        for (let sb = 0; sb < 6; sb++) cb.push(new kb.c(0, 0, 0, 0));
        return Wb.GetPlanesToRef(bb, cb), cb
      }
      static GetNearPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[2], cb.normal.y = sb[7] + sb[6], cb.normal.z = sb[11] + sb[10], cb.d = sb[15] + sb[14], cb.normalize()
      }
      static GetFarPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[2], cb.normal.y = sb[7] - sb[6], cb.normal.z = sb[11] - sb[10], cb.d = sb[15] - sb[14], cb.normalize()
      }
      static GetLeftPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[0], cb.normal.y = sb[7] + sb[4], cb.normal.z = sb[11] + sb[8], cb.d = sb[15] + sb[12], cb.normalize()
      }
      static GetRightPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[0], cb.normal.y = sb[7] - sb[4], cb.normal.z = sb[11] - sb[8], cb.d = sb[15] - sb[12], cb.normalize()
      }
      static GetTopPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] - sb[1], cb.normal.y = sb[7] - sb[5], cb.normal.z = sb[11] - sb[9], cb.d = sb[15] - sb[13], cb.normalize()
      }
      static GetBottomPlaneToRef(bb, cb) {
        const sb = bb.m;
        cb.normal.x = sb[3] + sb[1], cb.normal.y = sb[7] + sb[5], cb.normal.z = sb[11] + sb[9], cb.d = sb[15] + sb[13], cb.normalize()
      }
      static GetPlanesToRef(bb, cb) {
        Wb.GetNearPlaneToRef(bb, cb[0]), Wb.GetFarPlaneToRef(bb, cb[1]), Wb.GetLeftPlaneToRef(bb, cb[2]), Wb.GetRightPlaneToRef(bb, cb[3]), Wb.GetTopPlaneToRef(bb, cb[4]), Wb.GetBottomPlaneToRef(bb, cb[5])
      }
      static IsPointInFrustum(bb, cb) {
        for (let sb = 0; sb < 6; sb++)
          if (cb[sb].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37368: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Wb
    });
    var kb = sb(36656);
    class Wb {
      constructor(bb, cb, sb, Wb) {
        this.normal = new kb.p(bb, cb, sb), this.d = Wb
      }
      Osb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Wb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let cb = 0;
        return 0 !== bb && (cb = 1 / bb), this.normal.x *= cb, this.normal.y *= cb, this.normal.z *= cb, this.d *= cb, this
      }
      transform(bb) {
        const cb = Wb._TmpMatrix;
        bb.invertToRef(cb);
        const sb = cb.m,
          kb = this.normal.x,
          ab = this.normal.y,
          Tb = this.normal.z,
          Ub = this.d,
          Ib = kb * sb[0] + ab * sb[1] + Tb * sb[2] + Ub * sb[3],
          Hb = kb * sb[4] + ab * sb[5] + Tb * sb[6] + Ub * sb[7],
          fb = kb * sb[8] + ab * sb[9] + Tb * sb[10] + Ub * sb[11],
          Mb = kb * sb[12] + ab * sb[13] + Tb * sb[14] + Ub * sb[15];
        return new Wb(Ib, Hb, fb, Mb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, cb, sb) {
        const kb = cb.x - bb.x,
          Wb = cb.y - bb.y,
          ab = cb.z - bb.z,
          Tb = sb.x - bb.x,
          Ub = sb.y - bb.y,
          Ib = sb.z - bb.z,
          Hb = Wb * Ib - ab * Ub,
          fb = ab * Tb - kb * Ib,
          Mb = kb * Ub - Wb * Tb,
          Xb = Math.sqrt(Hb * Hb + fb * fb + Mb * Mb);
        let nb;
        return nb = 0 !== Xb ? 1 / Xb : 0, this.normal.x = Hb * nb, this.normal.y = fb * nb, this.normal.z = Mb * nb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, cb) {
        return kb.p.Dot(this.normal, bb) <= cb
      }
      signedDistanceTo(bb) {
        return kb.p.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Wb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, cb, sb) {
        const kb = new Wb(0, 0, 0, 0);
        return kb.copyFromPoints(bb, cb, sb), kb
      }
      static FromPositionAndNormal(bb, cb) {
        const sb = new Wb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, cb, sb)
      }
      static FromPositionAndNormalToRef(bb, cb, sb) {
        return sb.normal.ssb(cb), sb.normal.normalize(), sb.d = -bb.dot(sb.normal), sb
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, cb, sb) {
        const Wb = -(cb.x * bb.x + cb.y * bb.y + cb.z * bb.z);
        return kb.p.Dot(sb, cb) + Wb
      }
    }
    Wb._TmpMatrix = kb.e.Identity()
  },
  36654: (bb, cb, sb) => {
    sb.r(cb), sb.d(cb, {
      Matrix: () => kb.e,
      Quaternion: () => kb.f,
      RegisterMathVector: () => kb.j,
      TmpVectors: () => kb.m,
      Vector2: () => kb.n,
      Fm: () => kb.p,
      Vector4: () => kb.t
    });
    var kb = sb(36656);
    (0, kb.j)()
  },
  37700: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb
    });
    class kb {
      constructor(bb, cb, sb, kb) {
        this.x = bb, this.y = cb, this.width = sb, this.height = kb
      }
      toGlobal(bb, cb) {
        return new kb(this.x * bb, this.y * cb, this.width * bb, this.height * cb)
      }
      toGlobalToRef(bb, cb, sb) {
        return sb.x = this.x * bb, sb.y = this.y * cb, sb.width = this.width * bb, sb.height = this.height * cb, this
      }
      clone() {
        return new kb(this.x, this.y, this.width, this.height)
      }
    }
  },
  39830: (bb, cb, sb) => {
    sb.d(cb, {
      d: () => Hb
    });
    var kb = sb(36656),
      Wb = sb(36830),
      ab = sb(39835),
      Tb = sb(39848),
      Ub = sb(39861);

    function Ib(bb) {
      let cb = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const sb = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        ab = [],
        Ib = bb.width || bb.size || 1,
        Hb = bb.height || bb.size || 1,
        fb = bb.depth || bb.size || 1,
        Mb = bb.wrap || !1;
      let Xb = void 0 === bb.topBaseAt ? 1 : bb.topBaseAt,
        nb = void 0 === bb.bottomBaseAt ? 0 : bb.bottomBaseAt;
      Xb = (Xb + 4) % 4, nb = (nb + 4) % 4;
      let mb = [2, 0, 3, 1][Xb],
        lb = [2, 0, 1, 3][nb],
        Qb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Mb) {
        cb = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Qb = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let bb = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          sb = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const kb = [17, 18, 19, 16],
          Wb = [22, 23, 20, 21];
        for (; mb > 0;) bb.unshift(bb.pop()), kb.unshift(kb.pop()), mb--;
        for (; lb > 0;) sb.unshift(sb.pop()), Wb.unshift(Wb.pop()), lb--;
        bb = bb.flat(), sb = sb.flat(), Qb = Qb.concat(bb).concat(sb), cb.push(kb[0], kb[2], kb[3], kb[0], kb[1], kb[2]), cb.push(Wb[0], Wb[2], Wb[3], Wb[0], Wb[1], Wb[2])
      }
      const eb = [Ib / 2, Hb / 2, fb / 2],
        Cb = Qb.reduce(((bb, cb, sb) => bb.concat(cb * eb[sb % 3])), []),
        Nb = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Tb.e.DEFAULTSIDE,
        Vb = bb.faceUV || new Array(6),
        Lb = bb.faceColors,
        ub = [];
      for (let Tb = 0; Tb < 6; Tb++) void 0 === Vb[Tb] && (Vb[Tb] = new kb.t(0, 0, 1, 1)), Lb && void 0 === Lb[Tb] && (Lb[Tb] = new Wb.g(1, 1, 1, 1));
      for (let kb = 0; kb < 6; kb++)
        if (ab.push(Vb[kb].z, Ub.e ? 1 - Vb[kb].w : Vb[kb].w), ab.push(Vb[kb].x, Ub.e ? 1 - Vb[kb].w : Vb[kb].w), ab.push(Vb[kb].x, Ub.e ? 1 - Vb[kb].y : Vb[kb].y), ab.push(Vb[kb].z, Ub.e ? 1 - Vb[kb].y : Vb[kb].y), Lb)
          for (let bb = 0; bb < 4; bb++) ub.push(Lb[kb].r, Lb[kb].g, Lb[kb].b, Lb[kb].a);
      Tb.e._ComputeSides(Nb, Cb, cb, sb, ab, bb.frontUVs, bb.backUVs);
      const Yb = new Tb.e;
      if (Yb.indices = cb, Yb.positions = Cb, Yb.normals = sb, Yb.uvs = ab, Lb) {
        const bb = Nb === Tb.e.DOUBLESIDE ? ub.concat(ub) : ub;
        Yb.colors = bb
      }
      return Yb
    }

    function Hb(bb) {
      let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const kb = new ab.b(bb, sb);
      cb.sideOrientation = ab.b._GetDefaultSideOrientation(cb.sideOrientation), kb._originalBuilderSideOrientation = cb.sideOrientation;
      return Ib(cb).applyToMesh(kb, cb.updatable), kb
    }
    let fb = !1;
    fb || (fb = !0, Tb.e.CreateBox = Ib, ab.b.CreateBox = function(bb, cb) {
      return Hb(bb, {
        size: cb,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39873: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Mb
    });
    var kb = sb(36656),
      Wb = sb(39835),
      ab = sb(39848),
      Tb = sb(39877),
      Ub = sb(39576),
      Ib = sb(38284);

    function Hb(bb) {
      const cb = [],
        sb = [],
        kb = bb.lines,
        Wb = bb.colors,
        Tb = [];
      let Ub = 0;
      for (let ab = 0; ab < kb.length; ab++) {
        const bb = kb[ab];
        for (let kb = 0; kb < bb.length; kb++) {
          const {
            x: Ib,
            y: Hb,
            z: fb
          } = bb[kb];
          if (sb.push(Ib, Hb, fb), Wb) {
            const bb = Wb[ab],
              {
                r: cb,
                g: sb,
                b: Ub,
                a: Ib
              } = bb[kb];
            Tb.push(cb, sb, Ub, Ib)
          }
          kb > 0 && (cb.push(Ub - 1), cb.push(Ub)), Ub++
        }
      }
      const Ib = new ab.e;
      return Ib.indices = cb, Ib.positions = sb, Wb && (Ib.colors = Tb), Ib
    }

    function fb(bb) {
      const cb = bb.dashSize || 3,
        sb = bb.gapSize || 1,
        Wb = bb.dashNb || 200,
        Tb = bb.points,
        Ub = [],
        Ib = [],
        Hb = kb.p.Zero();
      let fb, Mb, Xb, nb = 0,
        mb = 0;
      for (Xb = 0; Xb < Tb.length - 1; Xb++) Tb[Xb + 1].subtractToRef(Tb[Xb], Hb), nb += Hb.length();
      const lb = nb / Wb,
        Qb = cb * lb / (cb + sb);
      for (Xb = 0; Xb < Tb.length - 1; Xb++) {
        Tb[Xb + 1].subtractToRef(Tb[Xb], Hb), fb = Math.floor(Hb.length() / lb), Hb.normalize();
        for (let bb = 0; bb < fb; bb++) Mb = lb * bb, Ub.push(Tb[Xb].x + Mb * Hb.x, Tb[Xb].y + Mb * Hb.y, Tb[Xb].z + Mb * Hb.z), Ub.push(Tb[Xb].x + (Mb + Qb) * Hb.x, Tb[Xb].y + (Mb + Qb) * Hb.y, Tb[Xb].z + (Mb + Qb) * Hb.z), Ib.push(mb, mb + 1), mb += 2
      }
      const eb = new ab.e;
      return eb.positions = Ub, eb.indices = Ib, eb
    }

    function Mb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const kb = cb.instance,
        Wb = cb.lines,
        ab = cb.colors;
      if (kb) {
        const bb = kb.getVerticesData(Ub.l.PositionKind);
        let cb, sb;
        ab && (cb = kb.getVerticesData(Ub.l.ColorKind));
        let Tb = 0,
          Ib = 0;
        for (let kb = 0; kb < Wb.length; kb++) {
          const Ub = Wb[kb];
          for (let Wb = 0; Wb < Ub.length; Wb++) bb[Tb] = Ub[Wb].x, bb[Tb + 1] = Ub[Wb].y, bb[Tb + 2] = Ub[Wb].z, ab && cb && (sb = ab[kb], cb[Ib] = sb[Wb].r, cb[Ib + 1] = sb[Wb].g, cb[Ib + 2] = sb[Wb].b, cb[Ib + 3] = sb[Wb].a, Ib += 4), Tb += 3
        }
        return kb.updateVerticesData(Ub.l.PositionKind, bb, !1, !1), ab && cb && kb.updateVerticesData(Ub.l.ColorKind, cb, !1, !1), kb.refreshBoundingInfo(), kb
      }
      const Ib = !!ab,
        fb = new Tb.c(bb, sb, null, void 0, void 0, Ib, cb.useVertexAlpha, cb.material);
      return Hb(cb).applyToMesh(fb, cb.updatable), fb
    }

    function Xb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const kb = cb.colors ? [cb.colors] : null;
      return Mb(bb, {
        lines: [cb.points],
        updatable: cb.updatable,
        instance: cb.instance,
        colors: kb,
        useVertexAlpha: cb.useVertexAlpha,
        material: cb.material
      }, sb)
    }

    function nb(bb, cb) {
      let sb = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const ab = cb.points,
        Ub = cb.instance,
        Hb = cb.gapSize || 1,
        Mb = cb.dashSize || 3;
      if (Ub) {
        const bb = bb => {
          const cb = kb.p.Zero(),
            sb = bb.length / 6;
          let Wb, Tb, Ib, Hb, fb = 0,
            Mb = 0;
          for (Ib = 0; Ib < ab.length - 1; Ib++) ab[Ib + 1].subtractToRef(ab[Ib], cb), fb += cb.length();
          const Xb = fb / sb,
            nb = Ub._creationDataStorage.dashSize,
            mb = nb * Xb / (nb + Ub._creationDataStorage.gapSize);
          for (Ib = 0; Ib < ab.length - 1; Ib++)
            for (ab[Ib + 1].subtractToRef(ab[Ib], cb), Wb = Math.floor(cb.length() / Xb), cb.normalize(), Hb = 0; Hb < Wb && Mb < bb.length;) Tb = Xb * Hb, bb[Mb] = ab[Ib].x + Tb * cb.x, bb[Mb + 1] = ab[Ib].y + Tb * cb.y, bb[Mb + 2] = ab[Ib].z + Tb * cb.z, bb[Mb + 3] = ab[Ib].x + (Tb + mb) * cb.x, bb[Mb + 4] = ab[Ib].y + (Tb + mb) * cb.y, bb[Mb + 5] = ab[Ib].z + (Tb + mb) * cb.z, Mb += 6, Hb++;
          for (; Mb < bb.length;) bb[Mb] = ab[Ib].x, bb[Mb + 1] = ab[Ib].y, bb[Mb + 2] = ab[Ib].z, Mb += 3
        };
        return (cb.dashNb || cb.dashSize || cb.gapSize || cb.useVertexAlpha || cb.material) && Ib.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Ub.updateMeshPositions(bb, !1), Ub
      }
      const Xb = new Tb.c(bb, sb, null, void 0, void 0, void 0, cb.useVertexAlpha, cb.material);
      return fb(cb).applyToMesh(Xb, cb.updatable), Xb._creationDataStorage = new Wb.h, Xb._creationDataStorage.dashSize = Mb, Xb._creationDataStorage.gapSize = Hb, Xb
    }
    let mb = !1;
    mb || (mb = !0, ab.e.CreateLineSystem = Hb, ab.e.CreateDashedLines = fb, Wb.b.CreateLines = function(bb, cb) {
      return Xb(bb, {
        points: cb,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Wb.b.CreateDashedLines = function(bb, cb, sb, kb, Wb) {
      return nb(bb, {
        points: cb,
        dashSize: sb,
        gapSize: kb,
        dashNb: Wb,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39877: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Xb,
      f: () => lb
    });
    var kb, Wb, ab = sb(36830),
      Tb = sb(39576),
      Ub = sb(39835),
      Ib = sb(39884),
      Hb = sb(39730),
      fb = sb(39889),
      Mb = sb(39296);
    class Xb extends Ub.b {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let cb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          kb = arguments.length > 5 ? arguments[5] : void 0,
          Wb = arguments.length > 6 ? arguments[6] : void 0,
          Ub = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, cb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = kb, this.useVertexAlpha = Wb, this.color = new ab.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, cb && (this.color = cb.color.clone(), this.alpha = cb.alpha, this.useVertexColor = cb.useVertexColor, this.useVertexAlpha = cb.useVertexAlpha), this.intersectionThreshold = .1;
        const Ib = {
          attributes: [Tb.l.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Ib.defines.push("#define VERTEXALPHA") : Ib.needAlphaBlending = !1, this.useVertexColor ? (Ib.defines.push("#define VERTEXCOLOR"), Ib.attributes.push(Tb.l.ColorKind)) : (Ib.uniforms.push("color"), this._color4 = new ab.g), Ub) this.material = Ub;
        else {
          this.EY().Sm().isWebGPU && !Xb.ForceGLSL && (this._shaderLanguage = 1), Ib.shaderLanguage = this._shaderLanguage, Ib.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([sb.e(334).then((() => sb(41916))), sb.e(340).then((() => sb(41922)))]) : await Promise.all([sb.e(316).then((() => sb(41925))), sb.e(322).then((() => sb(41928)))])
          };
          const bb = new fb.q("colorShader", this.EY(), "color", Ib, !1);
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
        const cb = this.material;
        if (cb === bb) return;
        const sb = cb && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), sb && cb?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = Hb.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, cb) {
        if (!this._geometry) return this;
        const sb = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(cb, sb) : this._geometry._bind(cb, sb, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: cb,
            b: sb
          } = this.color;
          this._color4.set(bb, cb, sb, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, cb, sb) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const kb = this.EY().Sm();
        return this._unIndexed ? kb.drawArraysType(Hb.e.LineListDrawMode, bb.verticesStart, bb.verticesCount, sb) : kb.drawElementsType(Hb.e.LineListDrawMode, bb.indexStart, bb.indexCount, sb), this
      }
      dispose(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || cb) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        if (cb && void 0 === cb._addToSceneRootNodes) {
          const sb = cb;
          return sb.source = this, new Xb(bb, this.EY(), sb.parent, sb.source, sb.doNotCloneChildren)
        }
        return new Xb(bb, this.EY(), cb, this, sb)
      }
      createInstance(bb) {
        const cb = new nb(bb, this);
        if (this.LJ) {
          cb.LJ = {};
          for (const bb in this.LJ) cb.LJ[bb] = this.LJ[bb]
        }
        return cb
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.Osb(), bb.alpha = this.alpha
      }
      static Parse(bb, cb) {
        const sb = new Xb(bb.name, cb);
        return sb.color = ab.e.FromArray(bb.color), sb.alpha = bb.alpha, sb
      }
    }
    Xb.ForceGLSL = !1;
    class nb extends Ib.e {
      constructor(bb, cb) {
        super(bb, cb), this.intersectionThreshold = cb.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let mb = !1;

    function lb() {
      mb || (mb = !0, Ub.b._LinesMeshParser = (bb, cb) => Xb.Parse(bb, cb))
    }(kb = Xb.prototype).enableEdgesRendering ?? (kb.enableEdgesRendering = (0, Mb.e)("LinesMesh", "enableEdgesRendering")), (Wb = nb.prototype).enableEdgesRendering ?? (Wb.enableEdgesRendering = (0, Mb.e)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38279: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => ab
    });
    var kb = sb(38284);
    const Wb = (bb, cb, sb) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : sb && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(cb) : null;
    class ab {
      static DeepCopy(bb, cb, sb, ab) {
        let Tb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Ub = function(bb) {
          const cb = [];
          do {
            const sb = Object.getOwnPropertyNames(bb);
            for (const bb of sb) - 1 === cb.indexOf(bb) && cb.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return cb
        }(bb);
        for (const Hb of Ub) {
          if ("_" === Hb[0] && (!ab || -1 === ab.indexOf(Hb))) continue;
          if (Hb.endsWith("Observable")) continue;
          if (sb && -1 !== sb.indexOf(Hb)) continue;
          const Ub = bb[Hb],
            fb = typeof Ub;
          if ("function" !== fb) try {
            if ("object" === fb)
              if (Ub instanceof Uint8Array) cb[Hb] = Uint8Array.from(Ub);
              else if (Ub instanceof Array) {
              if (cb[Hb] = [], Ub.length > 0)
                if ("object" == typeof Ub[0])
                  for (let bb = 0; bb < Ub.length; bb++) {
                    const sb = Wb(Ub[bb], cb, Tb); - 1 === cb[Hb].indexOf(sb) && cb[Hb].push(sb)
                  } else cb[Hb] = Ub.slice(0)
            } else cb[Hb] = Wb(Ub, cb, Tb);
            else cb[Hb] = Ub
          } catch (Ib) {
            kb.c.Warn(Ib.message)
          }
        }
      }
    }
  },
  37501: (bb, cb, sb) => {
    function kb() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const cb = 16 * Math.random() | 0;
        return ("x" === bb ? cb : 3 & cb | 8).toString(16)
      }))
    }
    sb.d(cb, {
      b: () => kb
    })
  },
  38284: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb
    });
    class kb {
      static _CheckLimit(bb, cb) {
        let sb = kb._LogLimitOutputs[bb];
        return sb ? sb.current++ : (sb = {
          limit: cb,
          current: 1
        }, kb._LogLimitOutputs[bb] = sb), sb.current <= sb.limit
      }
      static _GenerateLimitMessage(bb) {
        let cb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const sb = kb._LogLimitOutputs[bb];
        if (!sb || !kb.MessageLimitReached) return;
        const Wb = this._Levels[cb];
        sb.current === sb.limit && kb[Wb.name](kb.MessageLimitReached.replace(/%LIMIT%/g, "" + sb.limit).replace(/%TYPE%/g, Wb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        kb._LogCache = bb + kb._LogCache, kb.OnNewCacheEntry && kb.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const cb = bb => bb < 10 ? "0" + bb : "" + bb,
          sb = new Date;
        return "[" + cb(sb.getHours()) + ":" + cb(sb.getMinutes()) + ":" + cb(sb.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, cb) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          cb = arguments.length > 1 ? arguments[1] : void 0,
          sb = arguments.length > 2 ? arguments[2] : void 0;
        const Wb = Array.isArray(cb) ? cb[0] : cb;
        if (void 0 !== sb && !kb._CheckLimit(Wb, sb)) return;
        const ab = kb._FormatMessage(Wb),
          Tb = this._Levels[bb],
          Ub = Array.isArray(cb) ? cb.slice(1) : [];
        Tb.logFunc && Tb.logFunc("BJS - " + ab, ...Ub);
        const Ib = `<div style='color:${Tb.color}'>${ab}</div><br>`;
        kb._AddLogEntry(Ib), kb._GenerateLimitMessage(Wb, bb)
      }
      static get LogCache() {
        return kb._LogCache
      }
      static ClearLogCache() {
        kb._LogCache = "", kb._LogLimitOutputs = {}, kb.errorsCount = 0
      }
      static set LogLevels(bb) {
        kb.Log = kb._LogDisabled, kb.Warn = kb._LogDisabled, kb.Error = kb._LogDisabled;
        const cb = [kb.MessageLogLevel, kb.WarningLogLevel, kb.ErrorLogLevel];
        for (const sb of cb)
          if ((bb & sb) === sb) {
            const bb = this._Levels[sb];
            kb[bb.name] = kb._LogEnabled.bind(kb, sb)
          }
      }
    }
    kb.NoneLogLevel = 0, kb.MessageLogLevel = 1, kb.WarningLogLevel = 2, kb.ErrorLogLevel = 4, kb.AllLogLevel = 7, kb.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", kb._LogCache = "", kb._LogLimitOutputs = {}, kb._Levels = [{}, {
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
    }], kb.errorsCount = 0, kb.Log = kb._LogEnabled.bind(kb, kb.MessageLogLevel), kb.Warn = kb._LogEnabled.bind(kb, kb.WarningLogLevel), kb.Error = kb._LogEnabled.bind(kb, kb.ErrorLogLevel)
  },
  39522: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => kb.c
    });
    var kb = sb(39524);
    (0, kb.b)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);