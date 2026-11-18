export const id = 211;
export const ids = [211, 216, 219];
export const modules = {
  38729: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Zy,
      i: () => cb
    });
    var Uy = Wy(37350),
      hy = Wy(38485),
      fy = Wy(38694),
      Zy = {};
    class cb {
      constructor(yb) {
        this.attachedToElement = !1, this.attached = {}, this.camera = yb, this.checkInputs = () => {}
      }
      add(yb) {
        const bb = yb.getSimpleName();
        this.attached[bb] ? Uy.b.Warn("camera input of type " + bb + " already exists on camera") : (this.attached[bb] = yb, yb.camera = this.camera, yb.checkInputs && (this.checkInputs = this._addCheckInputs(yb.checkInputs.bind(yb))), this.attachedToElement && yb.attachControl(this.noPreventDefault))
      }
      remove(yb) {
        for (const bb in this.attached) {
          const Wy = this.attached[bb];
          if (Wy === yb) return Wy.detachControl(), Wy.camera = null, delete this.attached[bb], void this.rebuildInputCheck()
        }
      }
      removeByType(yb) {
        for (const bb in this.attached) {
          const Wy = this.attached[bb];
          Wy.getClassName() === yb && (Wy.detachControl(), Wy.camera = null, delete this.attached[bb], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(yb) {
        const bb = this.checkInputs;
        return () => {
          bb(), yb()
        }
      }
      attachInput(yb) {
        this.attachedToElement && yb.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          yb = !fy.b.ForceAttachControlToAlwaysPreventDefault && yb, this.attachedToElement = !0, this.noPreventDefault = yb;
          for (const bb in this.attached) this.attached[bb].attachControl(yb)
        }
      }
      detachElement() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const bb in this.attached) this.attached[bb].detachControl(), yb && (this.attached[bb].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const yb in this.attached) {
          const bb = this.attached[yb];
          bb.checkInputs && (this.checkInputs = this._addCheckInputs(bb.checkInputs.bind(bb)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(yb) {
        const bb = {};
        for (const Wy in this.attached) {
          const yb = this.attached[Wy],
            Uy = hy.c.Serialize(yb);
          bb[yb.getClassName()] = Uy
        }
        yb.inputsmgr = bb
      }
      parse(yb) {
        const bb = yb.inputsmgr;
        if (bb) {
          this.clear();
          for (const yb in bb) {
            const Wy = Zy[yb];
            if (Wy) {
              const Uy = bb[yb],
                fy = hy.c.Parse((() => new Wy), Uy, null);
              this.add(fy)
            }
          }
        } else
          for (const Wy in this.attached) {
            const bb = Zy[this.attached[Wy].getClassName()];
            if (bb) {
              const Uy = hy.c.Parse((() => new bb), yb, null);
              this.remove(this.attached[Wy]), this.add(Uy)
            }
          }
      }
    }
  },
  38731: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => Uy.d
    });
    var Uy = Wy(38740);
    (0, Uy.g)()
  },
  38740: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => By,
      g: () => ey
    });
    var Uy = Wy(38464),
      hy = Wy(38466),
      fy = Wy(35861),
      Zy = Wy(35919),
      cb = Wy(38742),
      Py = Wy(38697),
      oy = Wy(35909);
    let By = (() => {
        var yb;
        let bb, Wy, Py = cb.d,
          oy = [],
          By = [],
          Ky = [],
          ey = [];
        return yb = class extends Py {
          constructor(yb, bb, Wy, hy) {
            super(yb, Wy, hy), this.groundColor = (0, Uy.l)(this, oy, new Zy.d(0, 0, 0)), this.direction = ((0, Uy.l)(this, By), (0, Uy.l)(this, Ky, void 0)), (0, Uy.l)(this, ey), this.direction = bb || fy.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(yb) {
            return this.direction = fy.n.Normalize(yb.subtract(fy.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", Wy.x, Wy.y, Wy.z, 0, bb), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), bb), this
          }
          transferToNodeMaterialEffect(yb, bb) {
            const Wy = fy.n.Normalize(this.direction);
            return yb.setFloat3(bb, Wy.x, Wy.y, Wy.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = fy.c.Identity()), this._worldMatrix
          }
          getTypeID() {
            return cb.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(yb, bb) {
            yb["HEMILIGHT" + bb] = !0
          }
        }, (() => {
          const fy = "function" === typeof Symbol && Symbol.metadata ? Object.create(Py[Symbol.metadata] ?? null) : void 0;
          bb = [(0, hy.q)()], Wy = [(0, hy.P)()], (0, Uy.j)(null, null, bb, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: yb => "groundColor" in yb,
              get: yb => yb.groundColor,
              set: (yb, bb) => {
                yb.groundColor = bb
              }
            },
            metadata: fy
          }, oy, By), (0, Uy.j)(null, null, Wy, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: yb => "direction" in yb,
              get: yb => yb.direction,
              set: (yb, bb) => {
                yb.direction = bb
              }
            },
            metadata: fy
          }, Ky, ey), fy && Object.defineProperty(yb, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: fy
          })
        })(), yb
      })(),
      Ky = !1;

    function ey() {
      Ky || (Ky = !0, Py.b.AddNodeConstructor("Light_Type_3", ((yb, bb) => () => new By(yb, fy.n.Zero(), bb))), (0, oy.e)("BABYLON.HemisphericLight", By))
    }
  },
  35917: (yb, bb, Wy) => {
    Wy.d(bb, {
      Color3: () => Uy.d,
      e: () => Uy.e
    });
    var Uy = Wy(35919);
    (0, Uy.i)()
  },
  36425: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => hy
    });
    var Uy = Wy(36434);
    class hy {
      static GetPlanes(yb) {
        const bb = [];
        for (let Wy = 0; Wy < 6; Wy++) bb.push(new Uy.c(0, 0, 0, 0));
        return hy.GetPlanesToRef(yb, bb), bb
      }
      static GetNearPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[2], bb.normal.y = Wy[7] + Wy[6], bb.normal.z = Wy[11] + Wy[10], bb.d = Wy[15] + Wy[14], bb.normalize()
      }
      static GetFarPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[2], bb.normal.y = Wy[7] - Wy[6], bb.normal.z = Wy[11] - Wy[10], bb.d = Wy[15] - Wy[14], bb.normalize()
      }
      static GetLeftPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[0], bb.normal.y = Wy[7] + Wy[4], bb.normal.z = Wy[11] + Wy[8], bb.d = Wy[15] + Wy[12], bb.normalize()
      }
      static GetRightPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[0], bb.normal.y = Wy[7] - Wy[4], bb.normal.z = Wy[11] - Wy[8], bb.d = Wy[15] - Wy[12], bb.normalize()
      }
      static GetTopPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] - Wy[1], bb.normal.y = Wy[7] - Wy[5], bb.normal.z = Wy[11] - Wy[9], bb.d = Wy[15] - Wy[13], bb.normalize()
      }
      static GetBottomPlaneToRef(yb, bb) {
        const Wy = yb.m;
        bb.normal.x = Wy[3] + Wy[1], bb.normal.y = Wy[7] + Wy[5], bb.normal.z = Wy[11] + Wy[9], bb.d = Wy[15] + Wy[13], bb.normalize()
      }
      static GetPlanesToRef(yb, bb) {
        hy.GetNearPlaneToRef(yb, bb[0]), hy.GetFarPlaneToRef(yb, bb[1]), hy.GetLeftPlaneToRef(yb, bb[2]), hy.GetRightPlaneToRef(yb, bb[3]), hy.GetTopPlaneToRef(yb, bb[4]), hy.GetBottomPlaneToRef(yb, bb[5])
      }
      static IsPointInFrustum(yb, bb) {
        for (let Wy = 0; Wy < 6; Wy++)
          if (bb[Wy].dotCoordinate(yb) < 0) return !1;
        return !0
      }
    }
  },
  36434: (yb, bb, Wy) => {
    Wy.d(bb, {
      c: () => hy
    });
    var Uy = Wy(35861);
    class hy {
      constructor(yb, bb, Wy, hy) {
        this.normal = new Uy.n(yb, bb, Wy), this.d = hy
      }
      hBy() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new hy(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let yb = this.normal.getHashCode();
        return yb = 397 * yb ^ this.d, yb
      }
      normalize() {
        const yb = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let bb = 0;
        return 0 !== yb && (bb = 1 / yb), this.normal.x *= bb, this.normal.y *= bb, this.normal.z *= bb, this.d *= bb, this
      }
      transform(yb) {
        const bb = hy._TmpMatrix;
        yb.invertToRef(bb);
        const Wy = bb.m,
          Uy = this.normal.x,
          fy = this.normal.y,
          Zy = this.normal.z,
          cb = this.d,
          Py = Uy * Wy[0] + fy * Wy[1] + Zy * Wy[2] + cb * Wy[3],
          oy = Uy * Wy[4] + fy * Wy[5] + Zy * Wy[6] + cb * Wy[7],
          By = Uy * Wy[8] + fy * Wy[9] + Zy * Wy[10] + cb * Wy[11],
          Ky = Uy * Wy[12] + fy * Wy[13] + Zy * Wy[14] + cb * Wy[15];
        return new hy(Py, oy, By, Ky)
      }
      dotCoordinate(yb) {
        return this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z + this.d
      }
      copyFromPoints(yb, bb, Wy) {
        const Uy = bb.x - yb.x,
          hy = bb.y - yb.y,
          fy = bb.z - yb.z,
          Zy = Wy.x - yb.x,
          cb = Wy.y - yb.y,
          Py = Wy.z - yb.z,
          oy = hy * Py - fy * cb,
          By = fy * Zy - Uy * Py,
          Ky = Uy * cb - hy * Zy,
          ey = Math.sqrt(oy * oy + By * By + Ky * Ky);
        let qb;
        return qb = 0 !== ey ? 1 / ey : 0, this.normal.x = oy * qb, this.normal.y = By * qb, this.normal.z = Ky * qb, this.d = -(this.normal.x * yb.x + this.normal.y * yb.y + this.normal.z * yb.z), this
      }
      isFrontFacingTo(yb, bb) {
        return Uy.n.Dot(this.normal, yb) <= bb
      }
      signedDistanceTo(yb) {
        return Uy.n.Dot(yb, this.normal) + this.d
      }
      static FromArray(yb) {
        return new hy(yb[0], yb[1], yb[2], yb[3])
      }
      static FromPoints(yb, bb, Wy) {
        const Uy = new hy(0, 0, 0, 0);
        return Uy.copyFromPoints(yb, bb, Wy), Uy
      }
      static FromPositionAndNormal(yb, bb) {
        const Wy = new hy(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(yb, bb, Wy)
      }
      static FromPositionAndNormalToRef(yb, bb, Wy) {
        return Wy.normal.Coy(bb), Wy.normal.normalize(), Wy.d = -yb.dot(Wy.normal), Wy
      }
      static SignedDistanceToPlaneFromPositionAndNormal(yb, bb, Wy) {
        const hy = -(bb.x * yb.x + bb.y * yb.y + bb.z * yb.z);
        return Uy.n.Dot(Wy, bb) + hy
      }
    }
    hy._TmpMatrix = Uy.c.Identity()
  },
  35856: (yb, bb, Wy) => {
    Wy.r(bb), Wy.d(bb, {
      Matrix: () => Uy.c,
      Quaternion: () => Uy.e,
      RegisterMathVector: () => Uy.i,
      TmpVectors: () => Uy.j,
      Vector2: () => Uy.m,
      dU: () => Uy.n,
      Vector4: () => Uy.p
    });
    var Uy = Wy(35861);
    (0, Uy.i)()
  },
  36794: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => Uy
    });
    class Uy {
      constructor(yb, bb, Wy, Uy) {
        this.x = yb, this.y = bb, this.width = Wy, this.height = Uy
      }
      toGlobal(yb, bb) {
        return new Uy(this.x * yb, this.y * bb, this.width * yb, this.height * bb)
      }
      toGlobalToRef(yb, bb, Wy) {
        return Wy.x = this.x * yb, Wy.y = this.y * bb, Wy.width = this.width * yb, Wy.height = this.height * bb, this
      }
      clone() {
        return new Uy(this.x, this.y, this.width, this.height)
      }
    }
  },
  38900: (yb, bb, Wy) => {
    Wy.d(bb, {
      e: () => oy
    });
    var Uy = Wy(35861),
      hy = Wy(35919),
      fy = Wy(38902),
      Zy = Wy(38915),
      cb = Wy(38935);

    function Py(yb) {
      let bb = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const Wy = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        fy = [],
        Py = yb.width || yb.size || 1,
        oy = yb.height || yb.size || 1,
        By = yb.depth || yb.size || 1,
        Ky = yb.wrap || !1;
      let ey = void 0 === yb.topBaseAt ? 1 : yb.topBaseAt,
        qb = void 0 === yb.bottomBaseAt ? 0 : yb.bottomBaseAt;
      ey = (ey + 4) % 4, qb = (qb + 4) % 4;
      let sy = [2, 0, 3, 1][ey],
        Sy = [2, 0, 1, 3][qb],
        Ey = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (Ky) {
        bb = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Ey = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let yb = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          Wy = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Uy = [17, 18, 19, 16],
          hy = [22, 23, 20, 21];
        for (; sy > 0;) yb.unshift(yb.pop()), Uy.unshift(Uy.pop()), sy--;
        for (; Sy > 0;) Wy.unshift(Wy.pop()), hy.unshift(hy.pop()), Sy--;
        yb = yb.flat(), Wy = Wy.flat(), Ey = Ey.concat(yb).concat(Wy), bb.push(Uy[0], Uy[2], Uy[3], Uy[0], Uy[1], Uy[2]), bb.push(hy[0], hy[2], hy[3], hy[0], hy[1], hy[2])
      }
      const ly = [Py / 2, oy / 2, By / 2],
        mb = Ey.reduce(((yb, bb, Wy) => yb.concat(bb * ly[Wy % 3])), []),
        Cy = 0 === yb.sideOrientation ? 0 : yb.sideOrientation || Zy.e.DEFAULTSIDE,
        Ty = yb.faceUV || new Array(6),
        Vy = yb.faceColors,
        Jy = [];
      for (let Zy = 0; Zy < 6; Zy++) void 0 === Ty[Zy] && (Ty[Zy] = new Uy.p(0, 0, 1, 1)), Vy && void 0 === Vy[Zy] && (Vy[Zy] = new hy.e(1, 1, 1, 1));
      for (let Uy = 0; Uy < 6; Uy++)
        if (fy.push(Ty[Uy].z, cb.e ? 1 - Ty[Uy].w : Ty[Uy].w), fy.push(Ty[Uy].x, cb.e ? 1 - Ty[Uy].w : Ty[Uy].w), fy.push(Ty[Uy].x, cb.e ? 1 - Ty[Uy].y : Ty[Uy].y), fy.push(Ty[Uy].z, cb.e ? 1 - Ty[Uy].y : Ty[Uy].y), Vy)
          for (let yb = 0; yb < 4; yb++) Jy.push(Vy[Uy].r, Vy[Uy].g, Vy[Uy].b, Vy[Uy].a);
      Zy.e._ComputeSides(Cy, mb, bb, Wy, fy, yb.frontUVs, yb.backUVs);
      const gb = new Zy.e;
      if (gb.indices = bb, gb.positions = mb, gb.normals = Wy, gb.uvs = fy, Vy) {
        const yb = Cy === Zy.e.DOUBLESIDE ? Jy.concat(Jy) : Jy;
        gb.colors = yb
      }
      return gb
    }

    function oy(yb) {
      let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Uy = new fy.c(yb, Wy);
      bb.sideOrientation = fy.c._GetDefaultSideOrientation(bb.sideOrientation), Uy._originalBuilderSideOrientation = bb.sideOrientation;
      return Py(bb).applyToMesh(Uy, bb.updatable), Uy
    }
    let By = !1;
    By || (By = !0, Zy.e.CreateBox = Py, fy.c.CreateBox = function(yb, bb) {
      return oy(yb, {
        size: bb,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  38962: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Ky
    });
    var Uy = Wy(35861),
      hy = Wy(38902),
      fy = Wy(38915),
      Zy = Wy(38968),
      cb = Wy(38620),
      Py = Wy(37350);

    function oy(yb) {
      const bb = [],
        Wy = [],
        Uy = yb.lines,
        hy = yb.colors,
        Zy = [];
      let cb = 0;
      for (let fy = 0; fy < Uy.length; fy++) {
        const yb = Uy[fy];
        for (let Uy = 0; Uy < yb.length; Uy++) {
          const {
            x: Py,
            y: oy,
            z: By
          } = yb[Uy];
          if (Wy.push(Py, oy, By), hy) {
            const yb = hy[fy],
              {
                r: bb,
                g: Wy,
                b: cb,
                a: Py
              } = yb[Uy];
            Zy.push(bb, Wy, cb, Py)
          }
          Uy > 0 && (bb.push(cb - 1), bb.push(cb)), cb++
        }
      }
      const Py = new fy.e;
      return Py.indices = bb, Py.positions = Wy, hy && (Py.colors = Zy), Py
    }

    function By(yb) {
      const bb = yb.dashSize || 3,
        Wy = yb.gapSize || 1,
        hy = yb.dashNb || 200,
        Zy = yb.points,
        cb = [],
        Py = [],
        oy = Uy.n.Zero();
      let By, Ky, ey, qb = 0,
        sy = 0;
      for (ey = 0; ey < Zy.length - 1; ey++) Zy[ey + 1].subtractToRef(Zy[ey], oy), qb += oy.length();
      const Sy = qb / hy,
        Ey = bb * Sy / (bb + Wy);
      for (ey = 0; ey < Zy.length - 1; ey++) {
        Zy[ey + 1].subtractToRef(Zy[ey], oy), By = Math.floor(oy.length() / Sy), oy.normalize();
        for (let yb = 0; yb < By; yb++) Ky = Sy * yb, cb.push(Zy[ey].x + Ky * oy.x, Zy[ey].y + Ky * oy.y, Zy[ey].z + Ky * oy.z), cb.push(Zy[ey].x + (Ky + Ey) * oy.x, Zy[ey].y + (Ky + Ey) * oy.y, Zy[ey].z + (Ky + Ey) * oy.z), Py.push(sy, sy + 1), sy += 2
      }
      const ly = new fy.e;
      return ly.positions = cb, ly.indices = Py, ly
    }

    function Ky(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Uy = bb.instance,
        hy = bb.lines,
        fy = bb.colors;
      if (Uy) {
        const yb = Uy.getVerticesData(cb.k.PositionKind);
        let bb, Wy;
        fy && (bb = Uy.getVerticesData(cb.k.ColorKind));
        let Zy = 0,
          Py = 0;
        for (let Uy = 0; Uy < hy.length; Uy++) {
          const cb = hy[Uy];
          for (let hy = 0; hy < cb.length; hy++) yb[Zy] = cb[hy].x, yb[Zy + 1] = cb[hy].y, yb[Zy + 2] = cb[hy].z, fy && bb && (Wy = fy[Uy], bb[Py] = Wy[hy].r, bb[Py + 1] = Wy[hy].g, bb[Py + 2] = Wy[hy].b, bb[Py + 3] = Wy[hy].a, Py += 4), Zy += 3
        }
        return Uy.updateVerticesData(cb.k.PositionKind, yb, !1, !1), fy && bb && Uy.updateVerticesData(cb.k.ColorKind, bb, !1, !1), Uy.refreshBoundingInfo(), Uy
      }
      const Py = !!fy,
        By = new Zy.b(yb, Wy, null, void 0, void 0, Py, bb.useVertexAlpha, bb.material);
      return oy(bb).applyToMesh(By, bb.updatable), By
    }

    function ey(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Uy = bb.colors ? [bb.colors] : null;
      return Ky(yb, {
        lines: [bb.points],
        updatable: bb.updatable,
        instance: bb.instance,
        colors: Uy,
        useVertexAlpha: bb.useVertexAlpha,
        material: bb.material
      }, Wy)
    }

    function qb(yb, bb) {
      let Wy = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const fy = bb.points,
        cb = bb.instance,
        oy = bb.gapSize || 1,
        Ky = bb.dashSize || 3;
      if (cb) {
        const yb = yb => {
          const bb = Uy.n.Zero(),
            Wy = yb.length / 6;
          let hy, Zy, Py, oy, By = 0,
            Ky = 0;
          for (Py = 0; Py < fy.length - 1; Py++) fy[Py + 1].subtractToRef(fy[Py], bb), By += bb.length();
          const ey = By / Wy,
            qb = cb._creationDataStorage.dashSize,
            sy = qb * ey / (qb + cb._creationDataStorage.gapSize);
          for (Py = 0; Py < fy.length - 1; Py++)
            for (fy[Py + 1].subtractToRef(fy[Py], bb), hy = Math.floor(bb.length() / ey), bb.normalize(), oy = 0; oy < hy && Ky < yb.length;) Zy = ey * oy, yb[Ky] = fy[Py].x + Zy * bb.x, yb[Ky + 1] = fy[Py].y + Zy * bb.y, yb[Ky + 2] = fy[Py].z + Zy * bb.z, yb[Ky + 3] = fy[Py].x + (Zy + sy) * bb.x, yb[Ky + 4] = fy[Py].y + (Zy + sy) * bb.y, yb[Ky + 5] = fy[Py].z + (Zy + sy) * bb.z, Ky += 6, oy++;
          for (; Ky < yb.length;) yb[Ky] = fy[Py].x, yb[Ky + 1] = fy[Py].y, yb[Ky + 2] = fy[Py].z, Ky += 3
        };
        return (bb.dashNb || bb.dashSize || bb.gapSize || bb.useVertexAlpha || bb.material) && Py.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), cb.updateMeshPositions(yb, !1), cb
      }
      const ey = new Zy.b(yb, Wy, null, void 0, void 0, void 0, bb.useVertexAlpha, bb.material);
      return By(bb).applyToMesh(ey, bb.updatable), ey._creationDataStorage = new hy.i, ey._creationDataStorage.dashSize = Ky, ey._creationDataStorage.gapSize = oy, ey
    }
    let sy = !1;
    sy || (sy = !0, fy.e.CreateLineSystem = oy, fy.e.CreateDashedLines = By, hy.c.CreateLines = function(yb, bb) {
      return ey(yb, {
        points: bb,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, hy.c.CreateDashedLines = function(yb, bb, Wy, Uy, hy) {
      return qb(yb, {
        points: bb,
        dashSize: Wy,
        gapSize: Uy,
        dashNb: hy,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  38968: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => ey,
      d: () => Sy
    });
    var Uy, hy, fy = Wy(35919),
      Zy = Wy(38620),
      cb = Wy(38902),
      Py = Wy(38976),
      oy = Wy(38782),
      By = Wy(38983),
      Ky = Wy(38347);
    class ey extends cb.c {
      _isShaderMaterial(yb) {
        return !!yb && "ShaderMaterial" === yb.getClassName()
      }
      constructor(yb) {
        let bb = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Uy = arguments.length > 5 ? arguments[5] : void 0,
          hy = arguments.length > 6 ? arguments[6] : void 0,
          cb = arguments.length > 7 ? arguments[7] : void 0;
        super(yb, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, bb, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Uy, this.useVertexAlpha = hy, this.color = new fy.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, bb && (this.color = bb.color.clone(), this.alpha = bb.alpha, this.useVertexColor = bb.useVertexColor, this.useVertexAlpha = bb.useVertexAlpha), this.intersectionThreshold = .1;
        const Py = {
          attributes: [Zy.k.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Py.defines.push("#define VERTEXALPHA") : Py.needAlphaBlending = !1, this.useVertexColor ? (Py.defines.push("#define VERTEXCOLOR"), Py.attributes.push(Zy.k.ColorKind)) : (Py.uniforms.push("color"), this._color4 = new fy.e), cb) this.material = cb;
        else {
          this.kWy().xh().isWebGPU && !ey.ForceGLSL && (this._shaderLanguage = 1), Py.shaderLanguage = this._shaderLanguage, Py.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([Wy.e(322).then((() => Wy(41039))), Wy.e(328).then((() => Wy(41044)))]) : await Promise.all([Wy.e(304).then((() => Wy(41049))), Wy.e(310).then((() => Wy(41056)))])
          };
          const yb = new By.s("colorShader", this.kWy(), "color", Py, !1);
          yb.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(yb)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(yb) {
        const bb = this.material;
        if (bb === yb) return;
        const Wy = bb && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(yb), Wy && bb?.dispose()
      }
      _setInternalMaterial(yb) {
        this._setMaterial(yb), this.material && (this.material.fillMode = oy.e.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(yb) {}
      _bind(yb, bb) {
        if (!this._geometry) return this;
        const Wy = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(bb, Wy) : this._geometry._bind(bb, Wy, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: yb,
            g: bb,
            b: Wy
          } = this.color;
          this._color4.set(yb, bb, Wy, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(yb, bb, Wy) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Uy = this.kWy().xh();
        return this._unIndexed ? Uy.drawArraysType(oy.e.LineListDrawMode, yb.verticesStart, yb.verticesCount, Wy) : Uy.drawElementsType(oy.e.LineListDrawMode, yb.indexStart, yb.indexCount, Wy), this
      }
      dispose(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || bb) && this.material?.dispose(!1, !1, !0), super.dispose(yb)
      }
      clone(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        if (bb && void 0 === bb._addToSceneRootNodes) {
          const Wy = bb;
          return Wy.source = this, new ey(yb, this.kWy(), Wy.parent, Wy.source, Wy.doNotCloneChildren)
        }
        return new ey(yb, this.kWy(), bb, this, Wy)
      }
      createInstance(yb) {
        const bb = new qb(yb, this);
        if (this.BWy) {
          bb.BWy = {};
          for (const yb in this.BWy) bb.BWy[yb] = this.BWy[yb]
        }
        return bb
      }
      serialize(yb) {
        super.serialize(yb), yb.color = this.color.hBy(), yb.alpha = this.alpha
      }
      static Parse(yb, bb) {
        const Wy = new ey(yb.name, bb);
        return Wy.color = fy.d.FromArray(yb.color), Wy.alpha = yb.alpha, Wy
      }
    }
    ey.ForceGLSL = !1;
    class qb extends Py.d {
      constructor(yb, bb) {
        super(yb, bb), this.intersectionThreshold = bb.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let sy = !1;

    function Sy() {
      sy || (sy = !0, cb.c._LinesMeshParser = (yb, bb) => ey.Parse(yb, bb))
    }(Uy = ey.prototype).enableEdgesRendering ?? (Uy.enableEdgesRendering = (0, Ky.f)("LinesMesh", "enableEdgesRendering")), (hy = qb.prototype).enableEdgesRendering ?? (hy.enableEdgesRendering = (0, Ky.f)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  37346: (yb, bb, Wy) => {
    Wy.d(bb, {
      d: () => fy
    });
    var Uy = Wy(37350);
    const hy = (yb, bb, Wy) => yb ? yb.getClassName && "Mesh" === yb.getClassName() ? null : !yb.getClassName || "SubMesh" !== yb.getClassName() && "PhysicsBody" !== yb.getClassName() ? yb.clone ? yb.clone() : Array.isArray(yb) ? yb.slice() : Wy && "object" === typeof yb ? {
      ...yb
    } : null : yb.clone(bb) : null;
    class fy {
      static DeepCopy(yb, bb, Wy, fy) {
        let Zy = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const cb = function(yb) {
          const bb = [];
          do {
            const Wy = Object.getOwnPropertyNames(yb);
            for (const yb of Wy) - 1 === bb.indexOf(yb) && bb.push(yb)
          } while (yb = Object.getPrototypeOf(yb));
          return bb
        }(yb);
        for (const oy of cb) {
          if ("_" === oy[0] && (!fy || -1 === fy.indexOf(oy))) continue;
          if (oy.endsWith("Observable")) continue;
          if (Wy && -1 !== Wy.indexOf(oy)) continue;
          const cb = yb[oy],
            By = typeof cb;
          if ("function" !== By) try {
            if ("object" === By)
              if (cb instanceof Uint8Array) bb[oy] = Uint8Array.from(cb);
              else if (cb instanceof Array) {
              if (bb[oy] = [], cb.length > 0)
                if ("object" == typeof cb[0])
                  for (let yb = 0; yb < cb.length; yb++) {
                    const Wy = hy(cb[yb], bb, Zy); - 1 === bb[oy].indexOf(Wy) && bb[oy].push(Wy)
                  } else bb[oy] = cb.slice(0)
            } else bb[oy] = hy(cb, bb, Zy);
            else bb[oy] = cb
          } catch (Py) {
            Uy.b.Warn(Py.message)
          }
        }
      }
    }
  },
  36559: (yb, bb, Wy) => {
    function Uy() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (yb => {
        const bb = 16 * Math.random() | 0;
        return ("x" === yb ? bb : 3 & bb | 8).toString(16)
      }))
    }
    Wy.d(bb, {
      e: () => Uy
    })
  },
  37350: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy
    });
    class Uy {
      static _CheckLimit(yb, bb) {
        let Wy = Uy._LogLimitOutputs[yb];
        return Wy ? Wy.current++ : (Wy = {
          limit: bb,
          current: 1
        }, Uy._LogLimitOutputs[yb] = Wy), Wy.current <= Wy.limit
      }
      static _GenerateLimitMessage(yb) {
        let bb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const Wy = Uy._LogLimitOutputs[yb];
        if (!Wy || !Uy.MessageLimitReached) return;
        const hy = this._Levels[bb];
        Wy.current === Wy.limit && Uy[hy.name](Uy.MessageLimitReached.replace(/%LIMIT%/g, "" + Wy.limit).replace(/%TYPE%/g, hy.name ?? ""))
      }
      static _AddLogEntry(yb) {
        Uy._LogCache = yb + Uy._LogCache, Uy.OnNewCacheEntry && Uy.OnNewCacheEntry(yb)
      }
      static _FormatMessage(yb) {
        const bb = yb => yb < 10 ? "0" + yb : "" + yb,
          Wy = new Date;
        return "[" + bb(Wy.getHours()) + ":" + bb(Wy.getMinutes()) + ":" + bb(Wy.getSeconds()) + "]: " + yb
      }
      static _LogDisabled(yb, bb) {}
      static _LogEnabled() {
        let yb = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          bb = arguments.length > 1 ? arguments[1] : void 0,
          Wy = arguments.length > 2 ? arguments[2] : void 0;
        const hy = Array.isArray(bb) ? bb[0] : bb;
        if (void 0 !== Wy && !Uy._CheckLimit(hy, Wy)) return;
        const fy = Uy._FormatMessage(hy),
          Zy = this._Levels[yb],
          cb = Array.isArray(bb) ? bb.slice(1) : [];
        Zy.logFunc && Zy.logFunc("BJS - " + fy, ...cb);
        const Py = `<div style='color:${Zy.color}'>${fy}</div><br>`;
        Uy._AddLogEntry(Py), Uy._GenerateLimitMessage(hy, yb)
      }
      static get LogCache() {
        return Uy._LogCache
      }
      static ClearLogCache() {
        Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy.errorsCount = 0
      }
      static set LogLevels(yb) {
        Uy.Log = Uy._LogDisabled, Uy.Warn = Uy._LogDisabled, Uy.Error = Uy._LogDisabled;
        const bb = [Uy.MessageLogLevel, Uy.WarningLogLevel, Uy.ErrorLogLevel];
        for (const Wy of bb)
          if ((yb & Wy) === Wy) {
            const yb = this._Levels[Wy];
            Uy[yb.name] = Uy._LogEnabled.bind(Uy, Wy)
          }
      }
    }
    Uy.NoneLogLevel = 0, Uy.MessageLogLevel = 1, Uy.WarningLogLevel = 2, Uy.ErrorLogLevel = 4, Uy.AllLogLevel = 7, Uy.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Uy._LogCache = "", Uy._LogLimitOutputs = {}, Uy._Levels = [{}, {
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
    }], Uy.errorsCount = 0, Uy.Log = Uy._LogEnabled.bind(Uy, Uy.MessageLogLevel), Uy.Warn = Uy._LogEnabled.bind(Uy, Uy.WarningLogLevel), Uy.Error = Uy._LogEnabled.bind(Uy, Uy.ErrorLogLevel)
  },
  38564: (yb, bb, Wy) => {
    Wy.d(bb, {
      b: () => Uy.g
    });
    var Uy = Wy(38569);
    (0, Uy.c)()
  }
};
Object.freeze(modules);
for (const yb in modules) Object.freeze(modules[yb]);