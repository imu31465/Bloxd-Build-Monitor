export const id = 227;
export const ids = [227, 233, 236];
export const modules = {
  39804: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => bk,
      i: () => rk
    });
    var Dk = ik(38272),
      fk = ik(39585),
      Sk = ik(39782),
      bk = {};
    class rk {
      constructor(kk) {
        this.attachedToElement = !1, this.attached = {}, this.camera = kk, this.checkInputs = () => {}
      }
      add(kk) {
        const ek = kk.getSimpleName();
        this.attached[ek] ? Dk.b.Warn("camera input of type " + ek + " already exists on camera") : (this.attached[ek] = kk, kk.camera = this.camera, kk.checkInputs && (this.checkInputs = this._addCheckInputs(kk.checkInputs.bind(kk))), this.attachedToElement && kk.attachControl(this.noPreventDefault))
      }
      remove(kk) {
        for (const ek in this.attached) {
          const ik = this.attached[ek];
          if (ik === kk) return ik.detachControl(), ik.camera = null, delete this.attached[ek], void this.rebuildInputCheck()
        }
      }
      removeByType(kk) {
        for (const ek in this.attached) {
          const ik = this.attached[ek];
          ik.getClassName() === kk && (ik.detachControl(), ik.camera = null, delete this.attached[ek], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(kk) {
        const ek = this.checkInputs;
        return () => {
          ek(), kk()
        }
      }
      attachInput(kk) {
        this.attachedToElement && kk.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          kk = !Sk.e.ForceAttachControlToAlwaysPreventDefault && kk, this.attachedToElement = !0, this.noPreventDefault = kk;
          for (const ek in this.attached) this.attached[ek].attachControl(kk)
        }
      }
      detachElement() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const ek in this.attached) this.attached[ek].detachControl(), kk && (this.attached[ek].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const kk in this.attached) {
          const ek = this.attached[kk];
          ek.checkInputs && (this.checkInputs = this._addCheckInputs(ek.checkInputs.bind(ek)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(kk) {
        const ek = {};
        for (const ik in this.attached) {
          const kk = this.attached[ik],
            Dk = fk.b.Serialize(kk);
          ek[kk.getClassName()] = Dk
        }
        kk.inputsmgr = ek
      }
      parse(kk) {
        const ek = kk.inputsmgr;
        if (ek) {
          this.clear();
          for (const kk in ek) {
            const ik = bk[kk];
            if (ik) {
              const Dk = ek[kk],
                Sk = fk.b.Parse((() => new ik), Dk, null);
              this.add(Sk)
            }
          }
        } else
          for (const ik in this.attached) {
            const ek = bk[this.attached[ik].getClassName()];
            if (ek) {
              const Dk = fk.b.Parse((() => new ek), kk, null);
              this.remove(this.attached[ik]), this.add(Dk)
            }
          }
      }
    }
  },
  39813: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk.b
    });
    var Dk = ik(39818);
    (0, Dk.c)()
  },
  39818: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Mk,
      c: () => xk
    });
    var Dk = ik(39566),
      fk = ik(39570),
      Sk = ik(36698),
      bk = ik(36874),
      rk = ik(39822),
      Pk = ik(39787),
      mk = ik(36734);
    let Mk = (() => {
        var kk;
        let ek, ik, Pk = rk.d,
          mk = [],
          Mk = [],
          Kk = [],
          xk = [];
        return kk = class extends Pk {
          constructor(kk, ek, ik, fk) {
            super(kk, ik, fk), this.groundColor = (0, Dk.e)(this, mk, new bk.e(0, 0, 0)), this.direction = ((0, Dk.e)(this, Mk), (0, Dk.e)(this, Kk, void 0)), (0, Dk.e)(this, xk), this.direction = ek || Sk.o.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(kk) {
            return this.direction = Sk.o.Normalize(kk.subtract(Sk.o.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", ik.x, ik.y, ik.z, 0, ek), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), ek), this
          }
          transferToNodeMaterialEffect(kk, ek) {
            const ik = Sk.o.Normalize(this.direction);
            return kk.setFloat3(ek, ik.x, ik.y, ik.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Sk.b.Identity()), this._worldMatrix
          }
          getTypeID() {
            return rk.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(kk, ek) {
            kk["HEMILIGHT" + ek] = !0
          }
        }, (() => {
          const Sk = "function" === typeof Symbol && Symbol.metadata ? Object.create(Pk[Symbol.metadata] ?? null) : void 0;
          ek = [(0, fk.k)()], ik = [(0, fk.F)()], (0, Dk.d)(null, null, ek, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: kk => "groundColor" in kk,
              get: kk => kk.groundColor,
              set: (kk, ek) => {
                kk.groundColor = ek
              }
            },
            metadata: Sk
          }, mk, Mk), (0, Dk.d)(null, null, ik, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: kk => "direction" in kk,
              get: kk => kk.direction,
              set: (kk, ek) => {
                kk.direction = ek
              }
            },
            metadata: Sk
          }, Kk, xk), Sk && Object.defineProperty(kk, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Sk
          })
        })(), kk
      })(),
      Kk = !1;

    function xk() {
      Kk || (Kk = !0, Pk.b.AddNodeConstructor("Light_Type_3", ((kk, ek) => () => new Mk(kk, Sk.o.Zero(), ek))), (0, mk.h)("BABYLON.HemisphericLight", Mk))
    }
  },
  36868: (kk, ek, ik) => {
    ik.d(ek, {
      Color3: () => Dk.e,
      e: () => Dk.f
    });
    var Dk = ik(36874);
    (0, Dk.h)()
  },
  37365: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => fk
    });
    var Dk = ik(37372);
    class fk {
      static GetPlanes(kk) {
        const ek = [];
        for (let ik = 0; ik < 6; ik++) ek.push(new Dk.c(0, 0, 0, 0));
        return fk.GetPlanesToRef(kk, ek), ek
      }
      static GetNearPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[2], ek.normal.y = ik[7] + ik[6], ek.normal.z = ik[11] + ik[10], ek.d = ik[15] + ik[14], ek.normalize()
      }
      static GetFarPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[2], ek.normal.y = ik[7] - ik[6], ek.normal.z = ik[11] - ik[10], ek.d = ik[15] - ik[14], ek.normalize()
      }
      static GetLeftPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[0], ek.normal.y = ik[7] + ik[4], ek.normal.z = ik[11] + ik[8], ek.d = ik[15] + ik[12], ek.normalize()
      }
      static GetRightPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[0], ek.normal.y = ik[7] - ik[4], ek.normal.z = ik[11] - ik[8], ek.d = ik[15] - ik[12], ek.normalize()
      }
      static GetTopPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] - ik[1], ek.normal.y = ik[7] - ik[5], ek.normal.z = ik[11] - ik[9], ek.d = ik[15] - ik[13], ek.normalize()
      }
      static GetBottomPlaneToRef(kk, ek) {
        const ik = kk.m;
        ek.normal.x = ik[3] + ik[1], ek.normal.y = ik[7] + ik[5], ek.normal.z = ik[11] + ik[9], ek.d = ik[15] + ik[13], ek.normalize()
      }
      static GetPlanesToRef(kk, ek) {
        fk.GetNearPlaneToRef(kk, ek[0]), fk.GetFarPlaneToRef(kk, ek[1]), fk.GetLeftPlaneToRef(kk, ek[2]), fk.GetRightPlaneToRef(kk, ek[3]), fk.GetTopPlaneToRef(kk, ek[4]), fk.GetBottomPlaneToRef(kk, ek[5])
      }
      static IsPointInFrustum(kk, ek) {
        for (let ik = 0; ik < 6; ik++)
          if (ek[ik].dotCoordinate(kk) < 0) return !1;
        return !0
      }
    }
  },
  37372: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => fk
    });
    var Dk = ik(36698);
    class fk {
      constructor(kk, ek, ik, fk) {
        this.normal = new Dk.o(kk, ek, ik), this.d = fk
      }
      Tik() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new fk(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let kk = this.normal.getHashCode();
        return kk = 397 * kk ^ this.d, kk
      }
      normalize() {
        const kk = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let ek = 0;
        return 0 !== kk && (ek = 1 / kk), this.normal.x *= ek, this.normal.y *= ek, this.normal.z *= ek, this.d *= ek, this
      }
      transform(kk) {
        const ek = fk._TmpMatrix;
        kk.invertToRef(ek);
        const ik = ek.m,
          Dk = this.normal.x,
          Sk = this.normal.y,
          bk = this.normal.z,
          rk = this.d,
          Pk = Dk * ik[0] + Sk * ik[1] + bk * ik[2] + rk * ik[3],
          mk = Dk * ik[4] + Sk * ik[5] + bk * ik[6] + rk * ik[7],
          Mk = Dk * ik[8] + Sk * ik[9] + bk * ik[10] + rk * ik[11],
          Kk = Dk * ik[12] + Sk * ik[13] + bk * ik[14] + rk * ik[15];
        return new fk(Pk, mk, Mk, Kk)
      }
      dotCoordinate(kk) {
        return this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z + this.d
      }
      copyFromPoints(kk, ek, ik) {
        const Dk = ek.x - kk.x,
          fk = ek.y - kk.y,
          Sk = ek.z - kk.z,
          bk = ik.x - kk.x,
          rk = ik.y - kk.y,
          Pk = ik.z - kk.z,
          mk = fk * Pk - Sk * rk,
          Mk = Sk * bk - Dk * Pk,
          Kk = Dk * rk - fk * bk,
          xk = Math.sqrt(mk * mk + Mk * Mk + Kk * Kk);
        let nk;
        return nk = 0 !== xk ? 1 / xk : 0, this.normal.x = mk * nk, this.normal.y = Mk * nk, this.normal.z = Kk * nk, this.d = -(this.normal.x * kk.x + this.normal.y * kk.y + this.normal.z * kk.z), this
      }
      isFrontFacingTo(kk, ek) {
        return Dk.o.Dot(this.normal, kk) <= ek
      }
      signedDistanceTo(kk) {
        return Dk.o.Dot(kk, this.normal) + this.d
      }
      static FromArray(kk) {
        return new fk(kk[0], kk[1], kk[2], kk[3])
      }
      static FromPoints(kk, ek, ik) {
        const Dk = new fk(0, 0, 0, 0);
        return Dk.copyFromPoints(kk, ek, ik), Dk
      }
      static FromPositionAndNormal(kk, ek) {
        const ik = new fk(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(kk, ek, ik)
      }
      static FromPositionAndNormalToRef(kk, ek, ik) {
        return ik.normal.Fs(ek), ik.normal.normalize(), ik.d = -kk.dot(ik.normal), ik
      }
      static SignedDistanceToPlaneFromPositionAndNormal(kk, ek, ik) {
        const fk = -(ek.x * kk.x + ek.y * kk.y + ek.z * kk.z);
        return Dk.o.Dot(ik, ek) + fk
      }
    }
    fk._TmpMatrix = Dk.b.Identity()
  },
  36690: (kk, ek, ik) => {
    ik.r(ek), ik.d(ek, {
      Matrix: () => Dk.b,
      Quaternion: () => Dk.c,
      RegisterMathVector: () => Dk.g,
      TmpVectors: () => Dk.j,
      Vector2: () => Dk.l,
      eH: () => Dk.o,
      Vector4: () => Dk.p
    });
    var Dk = ik(36698);
    (0, Dk.g)()
  },
  37679: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      constructor(kk, ek, ik, Dk) {
        this.x = kk, this.y = ek, this.width = ik, this.height = Dk
      }
      toGlobal(kk, ek) {
        return new Dk(this.x * kk, this.y * ek, this.width * kk, this.height * ek)
      }
      toGlobalToRef(kk, ek, ik) {
        return ik.x = this.x * kk, ik.y = this.y * ek, ik.width = this.width * kk, ik.height = this.height * ek, this
      }
      clone() {
        return new Dk(this.x, this.y, this.width, this.height)
      }
    }
  },
  39995: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => mk
    });
    var Dk = ik(36698),
      fk = ik(36874),
      Sk = ik(39997),
      bk = ik(40001),
      rk = ik(40014);

    function Pk(kk) {
      let ek = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const ik = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Sk = [],
        Pk = kk.width || kk.size || 1,
        mk = kk.height || kk.size || 1,
        Mk = kk.depth || kk.size || 1,
        Kk = kk.wrap || !1;
      let xk = void 0 === kk.topBaseAt ? 1 : kk.topBaseAt,
        nk = void 0 === kk.bottomBaseAt ? 0 : kk.bottomBaseAt;
      xk = (xk + 4) % 4, nk = (nk + 4) % 4;
      let Uk = [2, 0, 3, 1][xk],
        Hk = [2, 0, 1, 3][nk],
        wk = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Kk) {
        ek = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], wk = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let kk = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          ik = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Dk = [17, 18, 19, 16],
          fk = [22, 23, 20, 21];
        for (; Uk > 0;) kk.unshift(kk.pop()), Dk.unshift(Dk.pop()), Uk--;
        for (; Hk > 0;) ik.unshift(ik.pop()), fk.unshift(fk.pop()), Hk--;
        kk = kk.flat(), ik = ik.flat(), wk = wk.concat(kk).concat(ik), ek.push(Dk[0], Dk[2], Dk[3], Dk[0], Dk[1], Dk[2]), ek.push(fk[0], fk[2], fk[3], fk[0], fk[1], fk[2])
      }
      const lk = [Pk / 2, mk / 2, Mk / 2],
        pk = wk.reduce(((kk, ek, ik) => kk.concat(ek * lk[ik % 3])), []),
        yk = 0 === kk.sideOrientation ? 0 : kk.sideOrientation || bk.b.DEFAULTSIDE,
        Yk = kk.faceUV || new Array(6),
        Lk = kk.faceColors,
        Ck = [];
      for (let bk = 0; bk < 6; bk++) void 0 === Yk[bk] && (Yk[bk] = new Dk.p(0, 0, 1, 1)), Lk && void 0 === Lk[bk] && (Lk[bk] = new fk.f(1, 1, 1, 1));
      for (let Dk = 0; Dk < 6; Dk++)
        if (Sk.push(Yk[Dk].z, rk.e ? 1 - Yk[Dk].w : Yk[Dk].w), Sk.push(Yk[Dk].x, rk.e ? 1 - Yk[Dk].w : Yk[Dk].w), Sk.push(Yk[Dk].x, rk.e ? 1 - Yk[Dk].y : Yk[Dk].y), Sk.push(Yk[Dk].z, rk.e ? 1 - Yk[Dk].y : Yk[Dk].y), Lk)
          for (let kk = 0; kk < 4; kk++) Ck.push(Lk[Dk].r, Lk[Dk].g, Lk[Dk].b, Lk[Dk].a);
      bk.b._ComputeSides(yk, pk, ek, ik, Sk, kk.frontUVs, kk.backUVs);
      const Ak = new bk.b;
      if (Ak.indices = ek, Ak.positions = pk, Ak.normals = ik, Ak.uvs = Sk, Lk) {
        const kk = yk === bk.b.DOUBLESIDE ? Ck.concat(Ck) : Ck;
        Ak.colors = kk
      }
      return Ak
    }

    function mk(kk) {
      let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Dk = new Sk.e(kk, ik);
      ek.sideOrientation = Sk.e._GetDefaultSideOrientation(ek.sideOrientation), Dk._originalBuilderSideOrientation = ek.sideOrientation;
      return Pk(ek).applyToMesh(Dk, ek.updatable), Dk
    }
    let Mk = !1;
    Mk || (Mk = !0, bk.b.CreateBox = Pk, Sk.e.CreateBox = function(kk, ek) {
      return mk(kk, {
        size: ek,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  40029: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Kk
    });
    var Dk = ik(36698),
      fk = ik(39997),
      Sk = ik(40001),
      bk = ik(40038),
      rk = ik(39708),
      Pk = ik(38272);

    function mk(kk) {
      const ek = [],
        ik = [],
        Dk = kk.lines,
        fk = kk.colors,
        bk = [];
      let rk = 0;
      for (let Sk = 0; Sk < Dk.length; Sk++) {
        const kk = Dk[Sk];
        for (let Dk = 0; Dk < kk.length; Dk++) {
          const {
            x: Pk,
            y: mk,
            z: Mk
          } = kk[Dk];
          if (ik.push(Pk, mk, Mk), fk) {
            const kk = fk[Sk],
              {
                r: ek,
                g: ik,
                b: rk,
                a: Pk
              } = kk[Dk];
            bk.push(ek, ik, rk, Pk)
          }
          Dk > 0 && (ek.push(rk - 1), ek.push(rk)), rk++
        }
      }
      const Pk = new Sk.b;
      return Pk.indices = ek, Pk.positions = ik, fk && (Pk.colors = bk), Pk
    }

    function Mk(kk) {
      const ek = kk.dashSize || 3,
        ik = kk.gapSize || 1,
        fk = kk.dashNb || 200,
        bk = kk.points,
        rk = [],
        Pk = [],
        mk = Dk.o.Zero();
      let Mk, Kk, xk, nk = 0,
        Uk = 0;
      for (xk = 0; xk < bk.length - 1; xk++) bk[xk + 1].subtractToRef(bk[xk], mk), nk += mk.length();
      const Hk = nk / fk,
        wk = ek * Hk / (ek + ik);
      for (xk = 0; xk < bk.length - 1; xk++) {
        bk[xk + 1].subtractToRef(bk[xk], mk), Mk = Math.floor(mk.length() / Hk), mk.normalize();
        for (let kk = 0; kk < Mk; kk++) Kk = Hk * kk, rk.push(bk[xk].x + Kk * mk.x, bk[xk].y + Kk * mk.y, bk[xk].z + Kk * mk.z), rk.push(bk[xk].x + (Kk + wk) * mk.x, bk[xk].y + (Kk + wk) * mk.y, bk[xk].z + (Kk + wk) * mk.z), Pk.push(Uk, Uk + 1), Uk += 2
      }
      const lk = new Sk.b;
      return lk.positions = rk, lk.indices = Pk, lk
    }

    function Kk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Dk = ek.instance,
        fk = ek.lines,
        Sk = ek.colors;
      if (Dk) {
        const kk = Dk.getVerticesData(rk.e.PositionKind);
        let ek, ik;
        Sk && (ek = Dk.getVerticesData(rk.e.ColorKind));
        let bk = 0,
          Pk = 0;
        for (let Dk = 0; Dk < fk.length; Dk++) {
          const rk = fk[Dk];
          for (let fk = 0; fk < rk.length; fk++) kk[bk] = rk[fk].x, kk[bk + 1] = rk[fk].y, kk[bk + 2] = rk[fk].z, Sk && ek && (ik = Sk[Dk], ek[Pk] = ik[fk].r, ek[Pk + 1] = ik[fk].g, ek[Pk + 2] = ik[fk].b, ek[Pk + 3] = ik[fk].a, Pk += 4), bk += 3
        }
        return Dk.updateVerticesData(rk.e.PositionKind, kk, !1, !1), Sk && ek && Dk.updateVerticesData(rk.e.ColorKind, ek, !1, !1), Dk.refreshBoundingInfo(), Dk
      }
      const Pk = !!Sk,
        Mk = new bk.e(kk, ik, null, void 0, void 0, Pk, ek.useVertexAlpha, ek.material);
      return mk(ek).applyToMesh(Mk, ek.updatable), Mk
    }

    function xk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Dk = ek.colors ? [ek.colors] : null;
      return Kk(kk, {
        lines: [ek.points],
        updatable: ek.updatable,
        instance: ek.instance,
        colors: Dk,
        useVertexAlpha: ek.useVertexAlpha,
        material: ek.material
      }, ik)
    }

    function nk(kk, ek) {
      let ik = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Sk = ek.points,
        rk = ek.instance,
        mk = ek.gapSize || 1,
        Kk = ek.dashSize || 3;
      if (rk) {
        const kk = kk => {
          const ek = Dk.o.Zero(),
            ik = kk.length / 6;
          let fk, bk, Pk, mk, Mk = 0,
            Kk = 0;
          for (Pk = 0; Pk < Sk.length - 1; Pk++) Sk[Pk + 1].subtractToRef(Sk[Pk], ek), Mk += ek.length();
          const xk = Mk / ik,
            nk = rk._creationDataStorage.dashSize,
            Uk = nk * xk / (nk + rk._creationDataStorage.gapSize);
          for (Pk = 0; Pk < Sk.length - 1; Pk++)
            for (Sk[Pk + 1].subtractToRef(Sk[Pk], ek), fk = Math.floor(ek.length() / xk), ek.normalize(), mk = 0; mk < fk && Kk < kk.length;) bk = xk * mk, kk[Kk] = Sk[Pk].x + bk * ek.x, kk[Kk + 1] = Sk[Pk].y + bk * ek.y, kk[Kk + 2] = Sk[Pk].z + bk * ek.z, kk[Kk + 3] = Sk[Pk].x + (bk + Uk) * ek.x, kk[Kk + 4] = Sk[Pk].y + (bk + Uk) * ek.y, kk[Kk + 5] = Sk[Pk].z + (bk + Uk) * ek.z, Kk += 6, mk++;
          for (; Kk < kk.length;) kk[Kk] = Sk[Pk].x, kk[Kk + 1] = Sk[Pk].y, kk[Kk + 2] = Sk[Pk].z, Kk += 3
        };
        return (ek.dashNb || ek.dashSize || ek.gapSize || ek.useVertexAlpha || ek.material) && Pk.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), rk.updateMeshPositions(kk, !1), rk
      }
      const xk = new bk.e(kk, ik, null, void 0, void 0, void 0, ek.useVertexAlpha, ek.material);
      return Mk(ek).applyToMesh(xk, ek.updatable), xk._creationDataStorage = new fk.j, xk._creationDataStorage.dashSize = Kk, xk._creationDataStorage.gapSize = mk, xk
    }
    let Uk = !1;
    Uk || (Uk = !0, Sk.b.CreateLineSystem = mk, Sk.b.CreateDashedLines = Mk, fk.e.CreateLines = function(kk, ek) {
      return xk(kk, {
        points: ek,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, fk.e.CreateDashedLines = function(kk, ek, ik, Dk, fk) {
      return nk(kk, {
        points: ek,
        dashSize: ik,
        gapSize: Dk,
        dashNb: fk,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  40038: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => xk,
      g: () => Hk
    });
    var Dk, fk, Sk = ik(36874),
      bk = ik(39708),
      rk = ik(39997),
      Pk = ik(40045),
      mk = ik(39861),
      Mk = ik(40049),
      Kk = ik(39447);
    class xk extends rk.e {
      _isShaderMaterial(kk) {
        return !!kk && "ShaderMaterial" === kk.getClassName()
      }
      constructor(kk) {
        let ek = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Dk = arguments.length > 5 ? arguments[5] : void 0,
          fk = arguments.length > 6 ? arguments[6] : void 0,
          rk = arguments.length > 7 ? arguments[7] : void 0;
        super(kk, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ek, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Dk, this.useVertexAlpha = fk, this.color = new Sk.e(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ek && (this.color = ek.color.clone(), this.alpha = ek.alpha, this.useVertexColor = ek.useVertexColor, this.useVertexAlpha = ek.useVertexAlpha), this.intersectionThreshold = .1;
        const Pk = {
          attributes: [bk.e.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Pk.defines.push("#define VERTEXALPHA") : Pk.needAlphaBlending = !1, this.useVertexColor ? (Pk.defines.push("#define VERTEXCOLOR"), Pk.attributes.push(bk.e.ColorKind)) : (Pk.uniforms.push("color"), this._color4 = new Sk.f), rk) this.material = rk;
        else {
          this.XF().JU().isWebGPU && !xk.ForceGLSL && (this._shaderLanguage = 1), Pk.shaderLanguage = this._shaderLanguage, Pk.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([ik.e(343).then((() => ik(42154))), ik.e(349).then((() => ik(42163)))]) : await Promise.all([ik.e(325).then((() => ik(42165))), ik.e(331).then((() => ik(42174)))])
          };
          const kk = new Mk.o("colorShader", this.XF(), "color", Pk, !1);
          kk.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(kk)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(kk) {
        const ek = this.material;
        if (ek === kk) return;
        const ik = ek && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(kk), ik && ek?.dispose()
      }
      _setInternalMaterial(kk) {
        this._setMaterial(kk), this.material && (this.material.fillMode = mk.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(kk) {}
      _bind(kk, ek) {
        if (!this._geometry) return this;
        const ik = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ek, ik) : this._geometry._bind(ek, ik, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: kk,
            g: ek,
            b: ik
          } = this.color;
          this._color4.set(kk, ek, ik, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(kk, ek, ik) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Dk = this.XF().JU();
        return this._unIndexed ? Dk.drawArraysType(mk.e.LineListDrawMode, kk.verticesStart, kk.verticesCount, ik) : Dk.drawElementsType(mk.e.LineListDrawMode, kk.indexStart, kk.indexCount, ik), this
      }
      dispose(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ek) && this.material?.dispose(!1, !1, !0), super.dispose(kk)
      }
      clone(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        if (ek && void 0 === ek._addToSceneRootNodes) {
          const ik = ek;
          return ik.source = this, new xk(kk, this.XF(), ik.parent, ik.source, ik.doNotCloneChildren)
        }
        return new xk(kk, this.XF(), ek, this, ik)
      }
      createInstance(kk) {
        const ek = new nk(kk, this);
        if (this.Iq) {
          ek.Iq = {};
          for (const kk in this.Iq) ek.Iq[kk] = this.Iq[kk]
        }
        return ek
      }
      serialize(kk) {
        super.serialize(kk), kk.color = this.color.Tik(), kk.alpha = this.alpha
      }
      static Parse(kk, ek) {
        const ik = new xk(kk.name, ek);
        return ik.color = Sk.e.FromArray(kk.color), ik.alpha = kk.alpha, ik
      }
    }
    xk.ForceGLSL = !1;
    class nk extends Pk.b {
      constructor(kk, ek) {
        super(kk, ek), this.intersectionThreshold = ek.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Uk = !1;

    function Hk() {
      Uk || (Uk = !0, rk.e._LinesMeshParser = (kk, ek) => xk.Parse(kk, ek))
    }(Dk = xk.prototype).enableEdgesRendering ?? (Dk.enableEdgesRendering = (0, Kk.i)("LinesMesh", "enableEdgesRendering")), (fk = nk.prototype).enableEdgesRendering ?? (fk.enableEdgesRendering = (0, Kk.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38265: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Sk
    });
    var Dk = ik(38272);
    const fk = (kk, ek, ik) => kk ? kk.getClassName && "Mesh" === kk.getClassName() ? null : !kk.getClassName || "SubMesh" !== kk.getClassName() && "PhysicsBody" !== kk.getClassName() ? kk.clone ? kk.clone() : Array.isArray(kk) ? kk.slice() : ik && "object" === typeof kk ? {
      ...kk
    } : null : kk.clone(ek) : null;
    class Sk {
      static DeepCopy(kk, ek, ik, Sk) {
        let bk = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const rk = function(kk) {
          const ek = [];
          do {
            const ik = Object.getOwnPropertyNames(kk);
            for (const kk of ik) - 1 === ek.indexOf(kk) && ek.push(kk)
          } while (kk = Object.getPrototypeOf(kk));
          return ek
        }(kk);
        for (const mk of rk) {
          if ("_" === mk[0] && (!Sk || -1 === Sk.indexOf(mk))) continue;
          if (mk.endsWith("Observable")) continue;
          if (ik && -1 !== ik.indexOf(mk)) continue;
          const rk = kk[mk],
            Mk = typeof rk;
          if ("function" !== Mk) try {
            if ("object" === Mk)
              if (rk instanceof Uint8Array) ek[mk] = Uint8Array.from(rk);
              else if (rk instanceof Array) {
              if (ek[mk] = [], rk.length > 0)
                if ("object" == typeof rk[0])
                  for (let kk = 0; kk < rk.length; kk++) {
                    const ik = fk(rk[kk], ek, bk); - 1 === ek[mk].indexOf(ik) && ek[mk].push(ik)
                  } else ek[mk] = rk.slice(0)
            } else ek[mk] = fk(rk, ek, bk);
            else ek[mk] = rk
          } catch (Pk) {
            Dk.b.Warn(Pk.message)
          }
        }
      }
    }
  },
  37497: (kk, ek, ik) => {
    function Dk() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (kk => {
        const ek = 16 * Math.random() | 0;
        return ("x" === kk ? ek : 3 & ek | 8).toString(16)
      }))
    }
    ik.d(ek, {
      b: () => Dk
    })
  },
  38272: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Dk
    });
    class Dk {
      static _CheckLimit(kk, ek) {
        let ik = Dk._LogLimitOutputs[kk];
        return ik ? ik.current++ : (ik = {
          limit: ek,
          current: 1
        }, Dk._LogLimitOutputs[kk] = ik), ik.current <= ik.limit
      }
      static _GenerateLimitMessage(kk) {
        let ek = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const ik = Dk._LogLimitOutputs[kk];
        if (!ik || !Dk.MessageLimitReached) return;
        const fk = this._Levels[ek];
        ik.current === ik.limit && Dk[fk.name](Dk.MessageLimitReached.replace(/%LIMIT%/g, "" + ik.limit).replace(/%TYPE%/g, fk.name ?? ""))
      }
      static _AddLogEntry(kk) {
        Dk._LogCache = kk + Dk._LogCache, Dk.OnNewCacheEntry && Dk.OnNewCacheEntry(kk)
      }
      static _FormatMessage(kk) {
        const ek = kk => kk < 10 ? "0" + kk : "" + kk,
          ik = new Date;
        return "[" + ek(ik.getHours()) + ":" + ek(ik.getMinutes()) + ":" + ek(ik.getSeconds()) + "]: " + kk
      }
      static _LogDisabled(kk, ek) {}
      static _LogEnabled() {
        let kk = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          ek = arguments.length > 1 ? arguments[1] : void 0,
          ik = arguments.length > 2 ? arguments[2] : void 0;
        const fk = Array.isArray(ek) ? ek[0] : ek;
        if (void 0 !== ik && !Dk._CheckLimit(fk, ik)) return;
        const Sk = Dk._FormatMessage(fk),
          bk = this._Levels[kk],
          rk = Array.isArray(ek) ? ek.slice(1) : [];
        bk.logFunc && bk.logFunc("BJS - " + Sk, ...rk);
        const Pk = `<div style='color:${bk.color}'>${Sk}</div><br>`;
        Dk._AddLogEntry(Pk), Dk._GenerateLimitMessage(fk, kk)
      }
      static get LogCache() {
        return Dk._LogCache
      }
      static ClearLogCache() {
        Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk.errorsCount = 0
      }
      static set LogLevels(kk) {
        Dk.Log = Dk._LogDisabled, Dk.Warn = Dk._LogDisabled, Dk.Error = Dk._LogDisabled;
        const ek = [Dk.MessageLogLevel, Dk.WarningLogLevel, Dk.ErrorLogLevel];
        for (const ik of ek)
          if ((kk & ik) === ik) {
            const kk = this._Levels[ik];
            Dk[kk.name] = Dk._LogEnabled.bind(Dk, ik)
          }
      }
    }
    Dk.NoneLogLevel = 0, Dk.MessageLogLevel = 1, Dk.WarningLogLevel = 2, Dk.ErrorLogLevel = 4, Dk.AllLogLevel = 7, Dk.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Dk._LogCache = "", Dk._LogLimitOutputs = {}, Dk._Levels = [{}, {
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
    }], Dk.errorsCount = 0, Dk.Log = Dk._LogEnabled.bind(Dk, Dk.MessageLogLevel), Dk.Warn = Dk._LogEnabled.bind(Dk, Dk.WarningLogLevel), Dk.Error = Dk._LogEnabled.bind(Dk, Dk.ErrorLogLevel)
  },
  39651: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => Dk.f
    });
    var Dk = ik(39653);
    (0, Dk.b)()
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);