export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39344: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Eb,
      f: () => Yb
    });
    var Ab = Ub(37989),
      Mb = Ub(39124),
      Tb = Ub(39310),
      Eb = {};
    class Yb {
      constructor(bb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = bb, this.checkInputs = () => {}
      }
      add(bb) {
        const ab = bb.getSimpleName();
        this.attached[ab] ? Ab.e.Warn("camera input of type " + ab + " already exists on camera") : (this.attached[ab] = bb, bb.camera = this.camera, bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb))), this.attachedToElement && bb.attachControl(this.noPreventDefault))
      }
      remove(bb) {
        for (const ab in this.attached) {
          const Ub = this.attached[ab];
          if (Ub === bb) return Ub.detachControl(), Ub.camera = null, delete this.attached[ab], void this.rebuildInputCheck()
        }
      }
      removeByType(bb) {
        for (const ab in this.attached) {
          const Ub = this.attached[ab];
          Ub.getClassName() === bb && (Ub.detachControl(), Ub.camera = null, delete this.attached[ab], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(bb) {
        const ab = this.checkInputs;
        return () => {
          ab(), bb()
        }
      }
      attachInput(bb) {
        this.attachedToElement && bb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          bb = !Tb.b.ForceAttachControlToAlwaysPreventDefault && bb, this.attachedToElement = !0, this.noPreventDefault = bb;
          for (const ab in this.attached) this.attached[ab].attachControl(bb)
        }
      }
      detachElement() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ab in this.attached) this.attached[ab].detachControl(), bb && (this.attached[ab].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const bb in this.attached) {
          const ab = this.attached[bb];
          ab.checkInputs && (this.checkInputs = this._addCheckInputs(ab.checkInputs.bind(ab)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(bb) {
        const ab = {};
        for (const Ub in this.attached) {
          const bb = this.attached[Ub],
            Ab = Mb.b.Serialize(bb);
          ab[bb.getClassName()] = Ab
        }
        bb.inputsmgr = ab
      }
      parse(bb) {
        const ab = bb.inputsmgr;
        if (ab) {
          this.clear();
          for (const bb in ab) {
            const Ub = Eb[bb];
            if (Ub) {
              const Ab = ab[bb],
                Tb = Mb.b.Parse((() => new Ub), Ab, null);
              this.add(Tb)
            }
          }
        } else
          for (const Ub in this.attached) {
            const ab = Eb[this.attached[Ub].getClassName()];
            if (ab) {
              const Ab = Mb.b.Parse((() => new ab), bb, null);
              this.remove(this.attached[Ub]), this.add(Ab)
            }
          }
      }
    }
  },
  39347: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Ab.d
    });
    var Ab = Ub(39356);
    (0, Ab.f)()
  },
  39356: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => vb,
      f: () => Pb
    });
    var Ab = Ub(39104),
      Mb = Ub(39110),
      Tb = Ub(36401),
      Eb = Ub(36593),
      Yb = Ub(39359),
      Bb = Ub(39314),
      eb = Ub(36447);
    let vb = (() => {
        var bb;
        let ab, Ub, Bb = Yb.e,
          eb = [],
          vb = [],
          Lb = [],
          Pb = [];
        return bb = class extends Bb {
          constructor(bb, ab, Ub, Mb) {
            super(bb, Ub, Mb), this.groundColor = (0, Ab.k)(this, eb, new Eb.c(0, 0, 0)), this.direction = ((0, Ab.k)(this, vb), (0, Ab.k)(this, Lb, void 0)), (0, Ab.k)(this, Pb), this.direction = ab || Tb.m.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(bb) {
            return this.direction = Tb.m.Normalize(bb.subtract(Tb.m.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Ub.x, Ub.y, Ub.z, 0, ab), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ab), this
          }
          transferToNodeMaterialEffect(bb, ab) {
            const Ub = Tb.m.Normalize(this.direction);
            return bb.setFloat3(ab, Ub.x, Ub.y, Ub.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Tb.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Yb.e.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(bb, ab) {
            bb["HEMILIGHT" + ab] = !0
          }
        }, (() => {
          const Tb = "function" === typeof Symbol && Symbol.metadata ? Object.create(Bb[Symbol.metadata] ?? null) : void 0;
          ab = [(0, Mb.k)()], Ub = [(0, Mb.I)()], (0, Ab.h)(null, null, ab, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: bb => "groundColor" in bb,
              get: bb => bb.groundColor,
              set: (bb, ab) => {
                bb.groundColor = ab
              }
            },
            metadata: Tb
          }, eb, vb), (0, Ab.h)(null, null, Ub, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: bb => "direction" in bb,
              get: bb => bb.direction,
              set: (bb, ab) => {
                bb.direction = ab
              }
            },
            metadata: Tb
          }, Lb, Pb), Tb && Object.defineProperty(bb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Tb
          })
        })(), bb
      })(),
      Lb = !1;

    function Pb() {
      Lb || (Lb = !0, Bb.c.AddNodeConstructor("Light_Type_3", ((bb, ab) => () => new vb(bb, Tb.m.Zero(), ab))), (0, eb.f)("BABYLON.HemisphericLight", vb))
    }
  },
  36587: (bb, ab, Ub) => {
    Ub.d(ab, {
      Color3: () => Ab.c,
      b: () => Ab.g
    });
    var Ab = Ub(36593);
    (0, Ab.k)()
  },
  37113: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Mb
    });
    var Ab = Ub(37122);
    class Mb {
      static GetPlanes(bb) {
        const ab = [];
        for (let Ub = 0; Ub < 6; Ub++) ab.push(new Ab.b(0, 0, 0, 0));
        return Mb.GetPlanesToRef(bb, ab), ab
      }
      static GetNearPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[2], ab.normal.y = Ub[7] + Ub[6], ab.normal.z = Ub[11] + Ub[10], ab.d = Ub[15] + Ub[14], ab.normalize()
      }
      static GetFarPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[2], ab.normal.y = Ub[7] - Ub[6], ab.normal.z = Ub[11] - Ub[10], ab.d = Ub[15] - Ub[14], ab.normalize()
      }
      static GetLeftPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[0], ab.normal.y = Ub[7] + Ub[4], ab.normal.z = Ub[11] + Ub[8], ab.d = Ub[15] + Ub[12], ab.normalize()
      }
      static GetRightPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[0], ab.normal.y = Ub[7] - Ub[4], ab.normal.z = Ub[11] - Ub[8], ab.d = Ub[15] - Ub[12], ab.normalize()
      }
      static GetTopPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] - Ub[1], ab.normal.y = Ub[7] - Ub[5], ab.normal.z = Ub[11] - Ub[9], ab.d = Ub[15] - Ub[13], ab.normalize()
      }
      static GetBottomPlaneToRef(bb, ab) {
        const Ub = bb.m;
        ab.normal.x = Ub[3] + Ub[1], ab.normal.y = Ub[7] + Ub[5], ab.normal.z = Ub[11] + Ub[9], ab.d = Ub[15] + Ub[13], ab.normalize()
      }
      static GetPlanesToRef(bb, ab) {
        Mb.GetNearPlaneToRef(bb, ab[0]), Mb.GetFarPlaneToRef(bb, ab[1]), Mb.GetLeftPlaneToRef(bb, ab[2]), Mb.GetRightPlaneToRef(bb, ab[3]), Mb.GetTopPlaneToRef(bb, ab[4]), Mb.GetBottomPlaneToRef(bb, ab[5])
      }
      static IsPointInFrustum(bb, ab) {
        for (let Ub = 0; Ub < 6; Ub++)
          if (ab[Ub].dotCoordinate(bb) < 0) return !1;
        return !0
      }
    }
  },
  37122: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Mb
    });
    var Ab = Ub(36401);
    class Mb {
      constructor(bb, ab, Ub, Mb) {
        this.normal = new Ab.m(bb, ab, Ub), this.d = Mb
      }
      qUb() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Mb(this.normal.x, this.normal.y, this.normal.z, this.d)
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
        let ab = 0;
        return 0 !== bb && (ab = 1 / bb), this.normal.x *= ab, this.normal.y *= ab, this.normal.z *= ab, this.d *= ab, this
      }
      transform(bb) {
        const ab = Mb._TmpMatrix;
        bb.invertToRef(ab);
        const Ub = ab.m,
          Ab = this.normal.x,
          Tb = this.normal.y,
          Eb = this.normal.z,
          Yb = this.d,
          Bb = Ab * Ub[0] + Tb * Ub[1] + Eb * Ub[2] + Yb * Ub[3],
          eb = Ab * Ub[4] + Tb * Ub[5] + Eb * Ub[6] + Yb * Ub[7],
          vb = Ab * Ub[8] + Tb * Ub[9] + Eb * Ub[10] + Yb * Ub[11],
          Lb = Ab * Ub[12] + Tb * Ub[13] + Eb * Ub[14] + Yb * Ub[15];
        return new Mb(Bb, eb, vb, Lb)
      }
      dotCoordinate(bb) {
        return this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z + this.d
      }
      copyFromPoints(bb, ab, Ub) {
        const Ab = ab.x - bb.x,
          Mb = ab.y - bb.y,
          Tb = ab.z - bb.z,
          Eb = Ub.x - bb.x,
          Yb = Ub.y - bb.y,
          Bb = Ub.z - bb.z,
          eb = Mb * Bb - Tb * Yb,
          vb = Tb * Eb - Ab * Bb,
          Lb = Ab * Yb - Mb * Eb,
          Pb = Math.sqrt(eb * eb + vb * vb + Lb * Lb);
        let Xb;
        return Xb = 0 !== Pb ? 1 / Pb : 0, this.normal.x = eb * Xb, this.normal.y = vb * Xb, this.normal.z = Lb * Xb, this.d = -(this.normal.x * bb.x + this.normal.y * bb.y + this.normal.z * bb.z), this
      }
      isFrontFacingTo(bb, ab) {
        return Ab.m.Dot(this.normal, bb) <= ab
      }
      signedDistanceTo(bb) {
        return Ab.m.Dot(bb, this.normal) + this.d
      }
      static FromArray(bb) {
        return new Mb(bb[0], bb[1], bb[2], bb[3])
      }
      static FromPoints(bb, ab, Ub) {
        const Ab = new Mb(0, 0, 0, 0);
        return Ab.copyFromPoints(bb, ab, Ub), Ab
      }
      static FromPositionAndNormal(bb, ab) {
        const Ub = new Mb(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(bb, ab, Ub)
      }
      static FromPositionAndNormalToRef(bb, ab, Ub) {
        return Ub.normal.EUb(ab), Ub.normal.normalize(), Ub.d = -bb.dot(Ub.normal), Ub
      }
      static SignedDistanceToPlaneFromPositionAndNormal(bb, ab, Ub) {
        const Mb = -(ab.x * bb.x + ab.y * bb.y + ab.z * bb.z);
        return Ab.m.Dot(Ub, ab) + Mb
      }
    }
    Mb._TmpMatrix = Ab.b.Identity()
  },
  36392: (bb, ab, Ub) => {
    Ub.r(ab), Ub.d(ab, {
      Matrix: () => Ab.b,
      Quaternion: () => Ab.e,
      RegisterMathVector: () => Ab.i,
      TmpVectors: () => Ab.j,
      Vector2: () => Ab.l,
      Pj: () => Ab.m,
      Vector4: () => Ab.o
    });
    var Ab = Ub(36401);
    (0, Ab.i)()
  },
  37429: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Ab
    });
    class Ab {
      constructor(bb, ab, Ub, Ab) {
        this.x = bb, this.y = ab, this.width = Ub, this.height = Ab
      }
      toGlobal(bb, ab) {
        return new Ab(this.x * bb, this.y * ab, this.width * bb, this.height * ab)
      }
      toGlobalToRef(bb, ab, Ub) {
        return Ub.x = this.x * bb, Ub.y = this.y * ab, Ub.width = this.width * bb, Ub.height = this.height * ab, this
      }
      clone() {
        return new Ab(this.x, this.y, this.width, this.height)
      }
    }
  },
  39520: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => eb
    });
    var Ab = Ub(36401),
      Mb = Ub(36593),
      Tb = Ub(39522),
      Eb = Ub(39534),
      Yb = Ub(39549);

    function Bb(bb) {
      let ab = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Ub = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Tb = [],
        Bb = bb.width || bb.size || 1,
        eb = bb.height || bb.size || 1,
        vb = bb.depth || bb.size || 1,
        Lb = bb.wrap || !1;
      let Pb = void 0 === bb.topBaseAt ? 1 : bb.topBaseAt,
        Xb = void 0 === bb.bottomBaseAt ? 0 : bb.bottomBaseAt;
      Pb = (Pb + 4) % 4, Xb = (Xb + 4) % 4;
      let jb = [2, 0, 3, 1][Pb],
        Rb = [2, 0, 1, 3][Xb],
        kb = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Lb) {
        ab = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], kb = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let bb = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Ub = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Ab = [17, 18, 19, 16],
          Mb = [22, 23, 20, 21];
        for (; jb > 0;) bb.unshift(bb.pop()), Ab.unshift(Ab.pop()), jb--;
        for (; Rb > 0;) Ub.unshift(Ub.pop()), Mb.unshift(Mb.pop()), Rb--;
        bb = bb.flat(), Ub = Ub.flat(), kb = kb.concat(bb).concat(Ub), ab.push(Ab[0], Ab[2], Ab[3], Ab[0], Ab[1], Ab[2]), ab.push(Mb[0], Mb[2], Mb[3], Mb[0], Mb[1], Mb[2])
      }
      const yb = [Bb / 2, eb / 2, vb / 2],
        Zb = kb.reduce(((bb, ab, Ub) => bb.concat(ab * yb[Ub % 3])), []),
        Db = 0 === bb.sideOrientation ? 0 : bb.sideOrientation || Eb.c.DEFAULTSIDE,
        zb = bb.faceUV || new Array(6),
        xb = bb.faceColors,
        ib = [];
      for (let Eb = 0; Eb < 6; Eb++) void 0 === zb[Eb] && (zb[Eb] = new Ab.o(0, 0, 1, 1)), xb && void 0 === xb[Eb] && (xb[Eb] = new Mb.g(1, 1, 1, 1));
      for (let Ab = 0; Ab < 6; Ab++)
        if (Tb.push(zb[Ab].z, Yb.e ? 1 - zb[Ab].w : zb[Ab].w), Tb.push(zb[Ab].x, Yb.e ? 1 - zb[Ab].w : zb[Ab].w), Tb.push(zb[Ab].x, Yb.e ? 1 - zb[Ab].y : zb[Ab].y), Tb.push(zb[Ab].z, Yb.e ? 1 - zb[Ab].y : zb[Ab].y), xb)
          for (let bb = 0; bb < 4; bb++) ib.push(xb[Ab].r, xb[Ab].g, xb[Ab].b, xb[Ab].a);
      Eb.c._ComputeSides(Db, Zb, ab, Ub, Tb, bb.frontUVs, bb.backUVs);
      const fb = new Eb.c;
      if (fb.indices = ab, fb.positions = Zb, fb.normals = Ub, fb.uvs = Tb, xb) {
        const bb = Db === Eb.c.DOUBLESIDE ? ib.concat(ib) : ib;
        fb.colors = bb
      }
      return fb
    }

    function eb(bb) {
      let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ab = new Tb.d(bb, Ub);
      ab.sideOrientation = Tb.d._GetDefaultSideOrientation(ab.sideOrientation), Ab._originalBuilderSideOrientation = ab.sideOrientation;
      return Bb(ab).applyToMesh(Ab, ab.updatable), Ab
    }
    let vb = !1;
    vb || (vb = !0, Eb.c.CreateBox = Bb, Tb.d.CreateBox = function(bb, ab) {
      return eb(bb, {
        size: ab,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39575: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Lb
    });
    var Ab = Ub(36401),
      Mb = Ub(39522),
      Tb = Ub(39534),
      Eb = Ub(39584),
      Yb = Ub(39244),
      Bb = Ub(37989);

    function eb(bb) {
      const ab = [],
        Ub = [],
        Ab = bb.lines,
        Mb = bb.colors,
        Eb = [];
      let Yb = 0;
      for (let Tb = 0; Tb < Ab.length; Tb++) {
        const bb = Ab[Tb];
        for (let Ab = 0; Ab < bb.length; Ab++) {
          const {
            x: Bb,
            y: eb,
            z: vb
          } = bb[Ab];
          if (Ub.push(Bb, eb, vb), Mb) {
            const bb = Mb[Tb],
              {
                r: ab,
                g: Ub,
                b: Yb,
                a: Bb
              } = bb[Ab];
            Eb.push(ab, Ub, Yb, Bb)
          }
          Ab > 0 && (ab.push(Yb - 1), ab.push(Yb)), Yb++
        }
      }
      const Bb = new Tb.c;
      return Bb.indices = ab, Bb.positions = Ub, Mb && (Bb.colors = Eb), Bb
    }

    function vb(bb) {
      const ab = bb.dashSize || 3,
        Ub = bb.gapSize || 1,
        Mb = bb.dashNb || 200,
        Eb = bb.points,
        Yb = [],
        Bb = [],
        eb = Ab.m.Zero();
      let vb, Lb, Pb, Xb = 0,
        jb = 0;
      for (Pb = 0; Pb < Eb.length - 1; Pb++) Eb[Pb + 1].subtractToRef(Eb[Pb], eb), Xb += eb.length();
      const Rb = Xb / Mb,
        kb = ab * Rb / (ab + Ub);
      for (Pb = 0; Pb < Eb.length - 1; Pb++) {
        Eb[Pb + 1].subtractToRef(Eb[Pb], eb), vb = Math.floor(eb.length() / Rb), eb.normalize();
        for (let bb = 0; bb < vb; bb++) Lb = Rb * bb, Yb.push(Eb[Pb].x + Lb * eb.x, Eb[Pb].y + Lb * eb.y, Eb[Pb].z + Lb * eb.z), Yb.push(Eb[Pb].x + (Lb + kb) * eb.x, Eb[Pb].y + (Lb + kb) * eb.y, Eb[Pb].z + (Lb + kb) * eb.z), Bb.push(jb, jb + 1), jb += 2
      }
      const yb = new Tb.c;
      return yb.positions = Yb, yb.indices = Bb, yb
    }

    function Lb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ab = ab.instance,
        Mb = ab.lines,
        Tb = ab.colors;
      if (Ab) {
        const bb = Ab.getVerticesData(Yb.m.PositionKind);
        let ab, Ub;
        Tb && (ab = Ab.getVerticesData(Yb.m.ColorKind));
        let Eb = 0,
          Bb = 0;
        for (let Ab = 0; Ab < Mb.length; Ab++) {
          const Yb = Mb[Ab];
          for (let Mb = 0; Mb < Yb.length; Mb++) bb[Eb] = Yb[Mb].x, bb[Eb + 1] = Yb[Mb].y, bb[Eb + 2] = Yb[Mb].z, Tb && ab && (Ub = Tb[Ab], ab[Bb] = Ub[Mb].r, ab[Bb + 1] = Ub[Mb].g, ab[Bb + 2] = Ub[Mb].b, ab[Bb + 3] = Ub[Mb].a, Bb += 4), Eb += 3
        }
        return Ab.updateVerticesData(Yb.m.PositionKind, bb, !1, !1), Tb && ab && Ab.updateVerticesData(Yb.m.ColorKind, ab, !1, !1), Ab.refreshBoundingInfo(), Ab
      }
      const Bb = !!Tb,
        vb = new Eb.d(bb, Ub, null, void 0, void 0, Bb, ab.useVertexAlpha, ab.material);
      return eb(ab).applyToMesh(vb, ab.updatable), vb
    }

    function Pb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ab = ab.colors ? [ab.colors] : null;
      return Lb(bb, {
        lines: [ab.points],
        updatable: ab.updatable,
        instance: ab.instance,
        colors: Ab,
        useVertexAlpha: ab.useVertexAlpha,
        material: ab.material
      }, Ub)
    }

    function Xb(bb, ab) {
      let Ub = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Tb = ab.points,
        Yb = ab.instance,
        eb = ab.gapSize || 1,
        Lb = ab.dashSize || 3;
      if (Yb) {
        const bb = bb => {
          const ab = Ab.m.Zero(),
            Ub = bb.length / 6;
          let Mb, Eb, Bb, eb, vb = 0,
            Lb = 0;
          for (Bb = 0; Bb < Tb.length - 1; Bb++) Tb[Bb + 1].subtractToRef(Tb[Bb], ab), vb += ab.length();
          const Pb = vb / Ub,
            Xb = Yb._creationDataStorage.dashSize,
            jb = Xb * Pb / (Xb + Yb._creationDataStorage.gapSize);
          for (Bb = 0; Bb < Tb.length - 1; Bb++)
            for (Tb[Bb + 1].subtractToRef(Tb[Bb], ab), Mb = Math.floor(ab.length() / Pb), ab.normalize(), eb = 0; eb < Mb && Lb < bb.length;) Eb = Pb * eb, bb[Lb] = Tb[Bb].x + Eb * ab.x, bb[Lb + 1] = Tb[Bb].y + Eb * ab.y, bb[Lb + 2] = Tb[Bb].z + Eb * ab.z, bb[Lb + 3] = Tb[Bb].x + (Eb + jb) * ab.x, bb[Lb + 4] = Tb[Bb].y + (Eb + jb) * ab.y, bb[Lb + 5] = Tb[Bb].z + (Eb + jb) * ab.z, Lb += 6, eb++;
          for (; Lb < bb.length;) bb[Lb] = Tb[Bb].x, bb[Lb + 1] = Tb[Bb].y, bb[Lb + 2] = Tb[Bb].z, Lb += 3
        };
        return (ab.dashNb || ab.dashSize || ab.gapSize || ab.useVertexAlpha || ab.material) && Bb.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Yb.updateMeshPositions(bb, !1), Yb
      }
      const Pb = new Eb.d(bb, Ub, null, void 0, void 0, void 0, ab.useVertexAlpha, ab.material);
      return vb(ab).applyToMesh(Pb, ab.updatable), Pb._creationDataStorage = new Mb.i, Pb._creationDataStorage.dashSize = Lb, Pb._creationDataStorage.gapSize = eb, Pb
    }
    let jb = !1;
    jb || (jb = !0, Tb.c.CreateLineSystem = eb, Tb.c.CreateDashedLines = vb, Mb.d.CreateLines = function(bb, ab) {
      return Pb(bb, {
        points: ab,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Mb.d.CreateDashedLines = function(bb, ab, Ub, Ab, Mb) {
      return Xb(bb, {
        points: ab,
        dashSize: Ub,
        gapSize: Ab,
        dashNb: Mb,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39584: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Pb,
      g: () => Rb
    });
    var Ab, Mb, Tb = Ub(36593),
      Eb = Ub(39244),
      Yb = Ub(39522),
      Bb = Ub(39589),
      eb = Ub(39394),
      vb = Ub(39598),
      Lb = Ub(38982);
    class Pb extends Yb.d {
      _isShaderMaterial(bb) {
        return !!bb && "ShaderMaterial" === bb.getClassName()
      }
      constructor(bb) {
        let ab = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ab = arguments.length > 5 ? arguments[5] : void 0,
          Mb = arguments.length > 6 ? arguments[6] : void 0,
          Yb = arguments.length > 7 ? arguments[7] : void 0;
        super(bb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ab, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Ab, this.useVertexAlpha = Mb, this.color = new Tb.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ab && (this.color = ab.color.clone(), this.alpha = ab.alpha, this.useVertexColor = ab.useVertexColor, this.useVertexAlpha = ab.useVertexAlpha), this.intersectionThreshold = .1;
        const Bb = {
          attributes: [Eb.m.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Bb.defines.push("#define VERTEXALPHA") : Bb.needAlphaBlending = !1, this.useVertexColor ? (Bb.defines.push("#define VERTEXCOLOR"), Bb.attributes.push(Eb.m.ColorKind)) : (Bb.uniforms.push("color"), this._color4 = new Tb.g), Yb) this.material = Yb;
        else {
          this.oN().vj().isWebGPU && !Pb.ForceGLSL && (this._shaderLanguage = 1), Bb.shaderLanguage = this._shaderLanguage, Bb.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Ub.e(334).then((() => Ub(41645))), Ub.e(340).then((() => Ub(41651)))]) : await Promise.all([Ub.e(316).then((() => Ub(41657))), Ub.e(322).then((() => Ub(41662)))])
          };
          const bb = new vb.o("colorShader", this.oN(), "color", Bb, !1);
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
        const ab = this.material;
        if (ab === bb) return;
        const Ub = ab && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(bb), Ub && ab?.dispose()
      }
      _setInternalMaterial(bb) {
        this._setMaterial(bb), this.material && (this.material.fillMode = eb.d.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(bb) {}
      _bind(bb, ab) {
        if (!this._geometry) return this;
        const Ub = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ab, Ub) : this._geometry._bind(ab, Ub, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: bb,
            g: ab,
            b: Ub
          } = this.color;
          this._color4.set(bb, ab, Ub, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(bb, ab, Ub) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Ab = this.oN().vj();
        return this._unIndexed ? Ab.drawArraysType(eb.d.LineListDrawMode, bb.verticesStart, bb.verticesCount, Ub) : Ab.drawElementsType(eb.d.LineListDrawMode, bb.indexStart, bb.indexCount, Ub), this
      }
      dispose(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ab) && this.material?.dispose(!1, !1, !0), super.dispose(bb)
      }
      clone(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        if (ab && void 0 === ab._addToSceneRootNodes) {
          const Ub = ab;
          return Ub.source = this, new Pb(bb, this.oN(), Ub.parent, Ub.source, Ub.doNotCloneChildren)
        }
        return new Pb(bb, this.oN(), ab, this, Ub)
      }
      createInstance(bb) {
        const ab = new Xb(bb, this);
        if (this.YH) {
          ab.YH = {};
          for (const bb in this.YH) ab.YH[bb] = this.YH[bb]
        }
        return ab
      }
      serialize(bb) {
        super.serialize(bb), bb.color = this.color.qUb(), bb.alpha = this.alpha
      }
      static Parse(bb, ab) {
        const Ub = new Pb(bb.name, ab);
        return Ub.color = Tb.c.FromArray(bb.color), Ub.alpha = bb.alpha, Ub
      }
    }
    Pb.ForceGLSL = !1;
    class Xb extends Bb.d {
      constructor(bb, ab) {
        super(bb, ab), this.intersectionThreshold = ab.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let jb = !1;

    function Rb() {
      jb || (jb = !0, Yb.d._LinesMeshParser = (bb, ab) => Pb.Parse(bb, ab))
    }(Ab = Pb.prototype).enableEdgesRendering ?? (Ab.enableEdgesRendering = (0, Lb.i)("LinesMesh", "enableEdgesRendering")), (Mb = Xb.prototype).enableEdgesRendering ?? (Mb.enableEdgesRendering = (0, Lb.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37982: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb
    });
    var Ab = Ub(37989);
    const Mb = (bb, ab, Ub) => bb ? bb.getClassName && "Mesh" === bb.getClassName() ? null : !bb.getClassName || "SubMesh" !== bb.getClassName() && "PhysicsBody" !== bb.getClassName() ? bb.clone ? bb.clone() : Array.isArray(bb) ? bb.slice() : Ub && "object" === typeof bb ? {
      ...bb
    } : null : bb.clone(ab) : null;
    class Tb {
      static DeepCopy(bb, ab, Ub, Tb) {
        let Eb = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Yb = function(bb) {
          const ab = [];
          do {
            const Ub = Object.getOwnPropertyNames(bb);
            for (const bb of Ub) - 1 === ab.indexOf(bb) && ab.push(bb)
          } while (bb = Object.getPrototypeOf(bb));
          return ab
        }(bb);
        for (const eb of Yb) {
          if ("_" === eb[0] && (!Tb || -1 === Tb.indexOf(eb))) continue;
          if (eb.endsWith("Observable")) continue;
          if (Ub && -1 !== Ub.indexOf(eb)) continue;
          const Yb = bb[eb],
            vb = typeof Yb;
          if ("function" !== vb) try {
            if ("object" === vb)
              if (Yb instanceof Uint8Array) ab[eb] = Uint8Array.from(Yb);
              else if (Yb instanceof Array) {
              if (ab[eb] = [], Yb.length > 0)
                if ("object" == typeof Yb[0])
                  for (let bb = 0; bb < Yb.length; bb++) {
                    const Ub = Mb(Yb[bb], ab, Eb); - 1 === ab[eb].indexOf(Ub) && ab[eb].push(Ub)
                  } else ab[eb] = Yb.slice(0)
            } else ab[eb] = Mb(Yb, ab, Eb);
            else ab[eb] = Yb
          } catch (Bb) {
            Ab.e.Warn(Bb.message)
          }
        }
      }
    }
  },
  37251: (bb, ab, Ub) => {
    function Ab() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (bb => {
        const ab = 16 * Math.random() | 0;
        return ("x" === bb ? ab : 3 & ab | 8).toString(16)
      }))
    }
    Ub.d(ab, {
      b: () => Ab
    })
  },
  37989: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab
    });
    class Ab {
      static _CheckLimit(bb, ab) {
        let Ub = Ab._LogLimitOutputs[bb];
        return Ub ? Ub.current++ : (Ub = {
          limit: ab,
          current: 1
        }, Ab._LogLimitOutputs[bb] = Ub), Ub.current <= Ub.limit
      }
      static _GenerateLimitMessage(bb) {
        let ab = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Ub = Ab._LogLimitOutputs[bb];
        if (!Ub || !Ab.MessageLimitReached) return;
        const Mb = this._Levels[ab];
        Ub.current === Ub.limit && Ab[Mb.name](Ab.MessageLimitReached.replace(/%LIMIT%/g, "" + Ub.limit).replace(/%TYPE%/g, Mb.name ?? ""))
      }
      static _AddLogEntry(bb) {
        Ab._LogCache = bb + Ab._LogCache, Ab.OnNewCacheEntry && Ab.OnNewCacheEntry(bb)
      }
      static _FormatMessage(bb) {
        const ab = bb => bb < 10 ? "0" + bb : "" + bb,
          Ub = new Date;
        return "[" + ab(Ub.getHours()) + ":" + ab(Ub.getMinutes()) + ":" + ab(Ub.getSeconds()) + "]: " + bb
      }
      static _LogDisabled(bb, ab) {}
      static _LogEnabled() {
        let bb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ab = arguments.length > 1 ? arguments[1] : void 0,
          Ub = arguments.length > 2 ? arguments[2] : void 0;
        const Mb = Array.isArray(ab) ? ab[0] : ab;
        if (void 0 !== Ub && !Ab._CheckLimit(Mb, Ub)) return;
        const Tb = Ab._FormatMessage(Mb),
          Eb = this._Levels[bb],
          Yb = Array.isArray(ab) ? ab.slice(1) : [];
        Eb.logFunc && Eb.logFunc("BJS - " + Tb, ...Yb);
        const Bb = `<div style='color:${Eb.color}'>${Tb}</div><br>`;
        Ab._AddLogEntry(Bb), Ab._GenerateLimitMessage(Mb, bb)
      }
      static get LogCache() {
        return Ab._LogCache
      }
      static ClearLogCache() {
        Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab.errorsCount = 0
      }
      static set LogLevels(bb) {
        Ab.Log = Ab._LogDisabled, Ab.Warn = Ab._LogDisabled, Ab.Error = Ab._LogDisabled;
        const ab = [Ab.MessageLogLevel, Ab.WarningLogLevel, Ab.ErrorLogLevel];
        for (const Ub of ab)
          if ((bb & Ub) === Ub) {
            const bb = this._Levels[Ub];
            Ab[bb.name] = Ab._LogEnabled.bind(Ab, Ub)
          }
      }
    }
    Ab.NoneLogLevel = 0, Ab.MessageLogLevel = 1, Ab.WarningLogLevel = 2, Ab.ErrorLogLevel = 4, Ab.AllLogLevel = 7, Ab.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ab._LogCache = "", Ab._LogLimitOutputs = {}, Ab._Levels = [{}, {
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
    }], Ab.errorsCount = 0, Ab.Log = Ab._LogEnabled.bind(Ab, Ab.MessageLogLevel), Ab.Warn = Ab._LogEnabled.bind(Ab, Ab.WarningLogLevel), Ab.Error = Ab._LogEnabled.bind(Ab, Ab.ErrorLogLevel)
  },
  39185: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => Ab.e
    });
    var Ab = Ub(39188);
    (0, Ab.d)()
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);