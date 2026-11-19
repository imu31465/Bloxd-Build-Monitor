export const id = 223;
export const ids = [223, 229, 232];
export const modules = {
  39402: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => lz,
      i: () => Mz
    });
    var Ez = bz(38060),
      nz = bz(39182),
      iz = bz(39376),
      lz = {};
    class Mz {
      constructor(zz) {
        this.attachedToElement = !1, this.attached = {}, this.camera = zz, this.checkInputs = () => {}
      }
      add(zz) {
        const uz = zz.getSimpleName();
        this.attached[uz] ? Ez.e.Warn("camera input of type " + uz + " already exists on camera") : (this.attached[uz] = zz, zz.camera = this.camera, zz.checkInputs && (this.checkInputs = this._addCheckInputs(zz.checkInputs.bind(zz))), this.attachedToElement && zz.attachControl(this.noPreventDefault))
      }
      remove(zz) {
        for (const uz in this.attached) {
          const bz = this.attached[uz];
          if (bz === zz) return bz.detachControl(), bz.camera = null, delete this.attached[uz], void this.rebuildInputCheck()
        }
      }
      removeByType(zz) {
        for (const uz in this.attached) {
          const bz = this.attached[uz];
          bz.getClassName() === zz && (bz.detachControl(), bz.camera = null, delete this.attached[uz], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(zz) {
        const uz = this.checkInputs;
        return () => {
          uz(), zz()
        }
      }
      attachInput(zz) {
        this.attachedToElement && zz.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          zz = !iz.d.ForceAttachControlToAlwaysPreventDefault && zz, this.attachedToElement = !0, this.noPreventDefault = zz;
          for (const uz in this.attached) this.attached[uz].attachControl(zz)
        }
      }
      detachElement() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const uz in this.attached) this.attached[uz].detachControl(), zz && (this.attached[uz].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const zz in this.attached) {
          const uz = this.attached[zz];
          uz.checkInputs && (this.checkInputs = this._addCheckInputs(uz.checkInputs.bind(uz)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(zz) {
        const uz = {};
        for (const bz in this.attached) {
          const zz = this.attached[bz],
            Ez = nz.e.Serialize(zz);
          uz[zz.getClassName()] = Ez
        }
        zz.inputsmgr = uz
      }
      parse(zz) {
        const uz = zz.inputsmgr;
        if (uz) {
          this.clear();
          for (const zz in uz) {
            const bz = lz[zz];
            if (bz) {
              const Ez = uz[zz],
                iz = nz.e.Parse((() => new bz), Ez, null);
              this.add(iz)
            }
          }
        } else
          for (const bz in this.attached) {
            const uz = lz[this.attached[bz].getClassName()];
            if (uz) {
              const Ez = nz.e.Parse((() => new uz), zz, null);
              this.remove(this.attached[bz]), this.add(Ez)
            }
          }
      }
    }
  },
  39406: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Ez.c
    });
    var Ez = bz(39412);
    (0, Ez.e)()
  },
  39412: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => Oz,
      e: () => dz
    });
    var Ez = bz(39170),
      nz = bz(39172),
      iz = bz(36519),
      lz = bz(36715),
      Mz = bz(39421),
      tz = bz(39384),
      Hz = bz(36564);
    let Oz = (() => {
        var zz;
        let uz, bz, tz = Mz.b,
          Hz = [],
          Oz = [],
          pz = [],
          dz = [];
        return zz = class extends tz {
          constructor(zz, uz, bz, nz) {
            super(zz, bz, nz), this.groundColor = (0, Ez.j)(this, Hz, new lz.c(0, 0, 0)), this.direction = ((0, Ez.j)(this, Oz), (0, Ez.j)(this, pz, void 0)), (0, Ez.j)(this, dz), this.direction = uz || iz.n.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(zz) {
            return this.direction = iz.n.Normalize(zz.subtract(iz.n.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", bz.x, bz.y, bz.z, 0, uz), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), uz), this
          }
          transferToNodeMaterialEffect(zz, uz) {
            const bz = iz.n.Normalize(this.direction);
            return zz.setFloat3(uz, bz.x, bz.y, bz.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = iz.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Mz.b.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(zz, uz) {
            zz["HEMILIGHT" + uz] = !0
          }
        }, (() => {
          const iz = "function" === typeof Symbol && Symbol.metadata ? Object.create(tz[Symbol.metadata] ?? null) : void 0;
          uz = [(0, nz.q)()], bz = [(0, nz.D)()], (0, Ez.h)(null, null, uz, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: zz => "groundColor" in zz,
              get: zz => zz.groundColor,
              set: (zz, uz) => {
                zz.groundColor = uz
              }
            },
            metadata: iz
          }, Hz, Oz), (0, Ez.h)(null, null, bz, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: zz => "direction" in zz,
              get: zz => zz.direction,
              set: (zz, uz) => {
                zz.direction = uz
              }
            },
            metadata: iz
          }, pz, dz), iz && Object.defineProperty(zz, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: iz
          })
        })(), zz
      })(),
      pz = !1;

    function dz() {
      pz || (pz = !0, tz.c.AddNodeConstructor("Light_Type_3", ((zz, uz) => () => new Oz(zz, iz.n.Zero(), uz))), (0, Hz.c)("BABYLON.HemisphericLight", Oz))
    }
  },
  36709: (zz, uz, bz) => {
    bz.d(uz, {
      Color3: () => Ez.c,
      d: () => Ez.g
    });
    var Ez = bz(36715);
    (0, Ez.j)()
  },
  37235: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => nz
    });
    var Ez = bz(37239);
    class nz {
      static GetPlanes(zz) {
        const uz = [];
        for (let bz = 0; bz < 6; bz++) uz.push(new Ez.b(0, 0, 0, 0));
        return nz.GetPlanesToRef(zz, uz), uz
      }
      static GetNearPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[2], uz.normal.y = bz[7] + bz[6], uz.normal.z = bz[11] + bz[10], uz.d = bz[15] + bz[14], uz.normalize()
      }
      static GetFarPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[2], uz.normal.y = bz[7] - bz[6], uz.normal.z = bz[11] - bz[10], uz.d = bz[15] - bz[14], uz.normalize()
      }
      static GetLeftPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[0], uz.normal.y = bz[7] + bz[4], uz.normal.z = bz[11] + bz[8], uz.d = bz[15] + bz[12], uz.normalize()
      }
      static GetRightPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[0], uz.normal.y = bz[7] - bz[4], uz.normal.z = bz[11] - bz[8], uz.d = bz[15] - bz[12], uz.normalize()
      }
      static GetTopPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] - bz[1], uz.normal.y = bz[7] - bz[5], uz.normal.z = bz[11] - bz[9], uz.d = bz[15] - bz[13], uz.normalize()
      }
      static GetBottomPlaneToRef(zz, uz) {
        const bz = zz.m;
        uz.normal.x = bz[3] + bz[1], uz.normal.y = bz[7] + bz[5], uz.normal.z = bz[11] + bz[9], uz.d = bz[15] + bz[13], uz.normalize()
      }
      static GetPlanesToRef(zz, uz) {
        nz.GetNearPlaneToRef(zz, uz[0]), nz.GetFarPlaneToRef(zz, uz[1]), nz.GetLeftPlaneToRef(zz, uz[2]), nz.GetRightPlaneToRef(zz, uz[3]), nz.GetTopPlaneToRef(zz, uz[4]), nz.GetBottomPlaneToRef(zz, uz[5])
      }
      static IsPointInFrustum(zz, uz) {
        for (let bz = 0; bz < 6; bz++)
          if (uz[bz].dotCoordinate(zz) < 0) return !1;
        return !0
      }
    }
  },
  37239: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => nz
    });
    var Ez = bz(36519);
    class nz {
      constructor(zz, uz, bz, nz) {
        this.normal = new Ez.n(zz, uz, bz), this.d = nz
      }
      obz() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new nz(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let zz = this.normal.getHashCode();
        return zz = 397 * zz ^ this.d, zz
      }
      normalize() {
        const zz = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let uz = 0;
        return 0 !== zz && (uz = 1 / zz), this.normal.x *= uz, this.normal.y *= uz, this.normal.z *= uz, this.d *= uz, this
      }
      transform(zz) {
        const uz = nz._TmpMatrix;
        zz.invertToRef(uz);
        const bz = uz.m,
          Ez = this.normal.x,
          iz = this.normal.y,
          lz = this.normal.z,
          Mz = this.d,
          tz = Ez * bz[0] + iz * bz[1] + lz * bz[2] + Mz * bz[3],
          Hz = Ez * bz[4] + iz * bz[5] + lz * bz[6] + Mz * bz[7],
          Oz = Ez * bz[8] + iz * bz[9] + lz * bz[10] + Mz * bz[11],
          pz = Ez * bz[12] + iz * bz[13] + lz * bz[14] + Mz * bz[15];
        return new nz(tz, Hz, Oz, pz)
      }
      dotCoordinate(zz) {
        return this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z + this.d
      }
      copyFromPoints(zz, uz, bz) {
        const Ez = uz.x - zz.x,
          nz = uz.y - zz.y,
          iz = uz.z - zz.z,
          lz = bz.x - zz.x,
          Mz = bz.y - zz.y,
          tz = bz.z - zz.z,
          Hz = nz * tz - iz * Mz,
          Oz = iz * lz - Ez * tz,
          pz = Ez * Mz - nz * lz,
          dz = Math.sqrt(Hz * Hz + Oz * Oz + pz * pz);
        let Fz;
        return Fz = 0 !== dz ? 1 / dz : 0, this.normal.x = Hz * Fz, this.normal.y = Oz * Fz, this.normal.z = pz * Fz, this.d = -(this.normal.x * zz.x + this.normal.y * zz.y + this.normal.z * zz.z), this
      }
      isFrontFacingTo(zz, uz) {
        return Ez.n.Dot(this.normal, zz) <= uz
      }
      signedDistanceTo(zz) {
        return Ez.n.Dot(zz, this.normal) + this.d
      }
      static FromArray(zz) {
        return new nz(zz[0], zz[1], zz[2], zz[3])
      }
      static FromPoints(zz, uz, bz) {
        const Ez = new nz(0, 0, 0, 0);
        return Ez.copyFromPoints(zz, uz, bz), Ez
      }
      static FromPositionAndNormal(zz, uz) {
        const bz = new nz(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(zz, uz, bz)
      }
      static FromPositionAndNormalToRef(zz, uz, bz) {
        return bz.normal.euz(uz), bz.normal.normalize(), bz.d = -zz.dot(bz.normal), bz
      }
      static SignedDistanceToPlaneFromPositionAndNormal(zz, uz, bz) {
        const nz = -(uz.x * zz.x + uz.y * zz.y + uz.z * zz.z);
        return Ez.n.Dot(bz, uz) + nz
      }
    }
    nz._TmpMatrix = Ez.d.Identity()
  },
  36514: (zz, uz, bz) => {
    bz.r(uz), bz.d(uz, {
      Matrix: () => Ez.d,
      Quaternion: () => Ez.h,
      RegisterMathVector: () => Ez.j,
      TmpVectors: () => Ez.l,
      Vector2: () => Ez.m,
      ER: () => Ez.n,
      Vector4: () => Ez.r
    });
    var Ez = bz(36519);
    (0, Ez.j)()
  },
  37519: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Ez
    });
    class Ez {
      constructor(zz, uz, bz, Ez) {
        this.x = zz, this.y = uz, this.width = bz, this.height = Ez
      }
      toGlobal(zz, uz) {
        return new Ez(this.x * zz, this.y * uz, this.width * zz, this.height * uz)
      }
      toGlobalToRef(zz, uz, bz) {
        return bz.x = this.x * zz, bz.y = this.y * uz, bz.width = this.width * zz, bz.height = this.height * uz, this
      }
      clone() {
        return new Ez(this.x, this.y, this.width, this.height)
      }
    }
  },
  39582: (zz, uz, bz) => {
    bz.d(uz, {
      d: () => Hz
    });
    var Ez = bz(36519),
      nz = bz(36715),
      iz = bz(39584),
      lz = bz(39596),
      Mz = bz(39609);

    function tz(zz) {
      let uz = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const bz = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        iz = [],
        tz = zz.width || zz.size || 1,
        Hz = zz.height || zz.size || 1,
        Oz = zz.depth || zz.size || 1,
        pz = zz.wrap || !1;
      let dz = void 0 === zz.topBaseAt ? 1 : zz.topBaseAt,
        Fz = void 0 === zz.bottomBaseAt ? 0 : zz.bottomBaseAt;
      dz = (dz + 4) % 4, Fz = (Fz + 4) % 4;
      let Zz = [2, 0, 3, 1][dz],
        Rz = [2, 0, 1, 3][Fz],
        Kz = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (pz) {
        uz = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], Kz = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let zz = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          bz = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Ez = [17, 18, 19, 16],
          nz = [22, 23, 20, 21];
        for (; Zz > 0;) zz.unshift(zz.pop()), Ez.unshift(Ez.pop()), Zz--;
        for (; Rz > 0;) bz.unshift(bz.pop()), nz.unshift(nz.pop()), Rz--;
        zz = zz.flat(), bz = bz.flat(), Kz = Kz.concat(zz).concat(bz), uz.push(Ez[0], Ez[2], Ez[3], Ez[0], Ez[1], Ez[2]), uz.push(nz[0], nz[2], nz[3], nz[0], nz[1], nz[2])
      }
      const wz = [tz / 2, Hz / 2, Oz / 2],
        Xz = Kz.reduce(((zz, uz, bz) => zz.concat(uz * wz[bz % 3])), []),
        fz = 0 === zz.sideOrientation ? 0 : zz.sideOrientation || lz.b.DEFAULTSIDE,
        sz = zz.faceUV || new Array(6),
        rz = zz.faceColors,
        oz = [];
      for (let lz = 0; lz < 6; lz++) void 0 === sz[lz] && (sz[lz] = new Ez.r(0, 0, 1, 1)), rz && void 0 === rz[lz] && (rz[lz] = new nz.g(1, 1, 1, 1));
      for (let Ez = 0; Ez < 6; Ez++)
        if (iz.push(sz[Ez].z, Mz.b ? 1 - sz[Ez].w : sz[Ez].w), iz.push(sz[Ez].x, Mz.b ? 1 - sz[Ez].w : sz[Ez].w), iz.push(sz[Ez].x, Mz.b ? 1 - sz[Ez].y : sz[Ez].y), iz.push(sz[Ez].z, Mz.b ? 1 - sz[Ez].y : sz[Ez].y), rz)
          for (let zz = 0; zz < 4; zz++) oz.push(rz[Ez].r, rz[Ez].g, rz[Ez].b, rz[Ez].a);
      lz.b._ComputeSides(fz, Xz, uz, bz, iz, zz.frontUVs, zz.backUVs);
      const Nz = new lz.b;
      if (Nz.indices = uz, Nz.positions = Xz, Nz.normals = bz, Nz.uvs = iz, rz) {
        const zz = fz === lz.b.DOUBLESIDE ? oz.concat(oz) : oz;
        Nz.colors = zz
      }
      return Nz
    }

    function Hz(zz) {
      let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ez = new iz.c(zz, bz);
      uz.sideOrientation = iz.c._GetDefaultSideOrientation(uz.sideOrientation), Ez._originalBuilderSideOrientation = uz.sideOrientation;
      return tz(uz).applyToMesh(Ez, uz.updatable), Ez
    }
    let Oz = !1;
    Oz || (Oz = !0, lz.b.CreateBox = tz, iz.c.CreateBox = function(zz, uz) {
      return Hz(zz, {
        size: uz,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  39624: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => pz
    });
    var Ez = bz(36519),
      nz = bz(39584),
      iz = bz(39596),
      lz = bz(39626),
      Mz = bz(39299),
      tz = bz(38060);

    function Hz(zz) {
      const uz = [],
        bz = [],
        Ez = zz.lines,
        nz = zz.colors,
        lz = [];
      let Mz = 0;
      for (let iz = 0; iz < Ez.length; iz++) {
        const zz = Ez[iz];
        for (let Ez = 0; Ez < zz.length; Ez++) {
          const {
            x: tz,
            y: Hz,
            z: Oz
          } = zz[Ez];
          if (bz.push(tz, Hz, Oz), nz) {
            const zz = nz[iz],
              {
                r: uz,
                g: bz,
                b: Mz,
                a: tz
              } = zz[Ez];
            lz.push(uz, bz, Mz, tz)
          }
          Ez > 0 && (uz.push(Mz - 1), uz.push(Mz)), Mz++
        }
      }
      const tz = new iz.b;
      return tz.indices = uz, tz.positions = bz, nz && (tz.colors = lz), tz
    }

    function Oz(zz) {
      const uz = zz.dashSize || 3,
        bz = zz.gapSize || 1,
        nz = zz.dashNb || 200,
        lz = zz.points,
        Mz = [],
        tz = [],
        Hz = Ez.n.Zero();
      let Oz, pz, dz, Fz = 0,
        Zz = 0;
      for (dz = 0; dz < lz.length - 1; dz++) lz[dz + 1].subtractToRef(lz[dz], Hz), Fz += Hz.length();
      const Rz = Fz / nz,
        Kz = uz * Rz / (uz + bz);
      for (dz = 0; dz < lz.length - 1; dz++) {
        lz[dz + 1].subtractToRef(lz[dz], Hz), Oz = Math.floor(Hz.length() / Rz), Hz.normalize();
        for (let zz = 0; zz < Oz; zz++) pz = Rz * zz, Mz.push(lz[dz].x + pz * Hz.x, lz[dz].y + pz * Hz.y, lz[dz].z + pz * Hz.z), Mz.push(lz[dz].x + (pz + Kz) * Hz.x, lz[dz].y + (pz + Kz) * Hz.y, lz[dz].z + (pz + Kz) * Hz.z), tz.push(Zz, Zz + 1), Zz += 2
      }
      const wz = new iz.b;
      return wz.positions = Mz, wz.indices = tz, wz
    }

    function pz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ez = uz.instance,
        nz = uz.lines,
        iz = uz.colors;
      if (Ez) {
        const zz = Ez.getVerticesData(Mz.j.PositionKind);
        let uz, bz;
        iz && (uz = Ez.getVerticesData(Mz.j.ColorKind));
        let lz = 0,
          tz = 0;
        for (let Ez = 0; Ez < nz.length; Ez++) {
          const Mz = nz[Ez];
          for (let nz = 0; nz < Mz.length; nz++) zz[lz] = Mz[nz].x, zz[lz + 1] = Mz[nz].y, zz[lz + 2] = Mz[nz].z, iz && uz && (bz = iz[Ez], uz[tz] = bz[nz].r, uz[tz + 1] = bz[nz].g, uz[tz + 2] = bz[nz].b, uz[tz + 3] = bz[nz].a, tz += 4), lz += 3
        }
        return Ez.updateVerticesData(Mz.j.PositionKind, zz, !1, !1), iz && uz && Ez.updateVerticesData(Mz.j.ColorKind, uz, !1, !1), Ez.refreshBoundingInfo(), Ez
      }
      const tz = !!iz,
        Oz = new lz.c(zz, bz, null, void 0, void 0, tz, uz.useVertexAlpha, uz.material);
      return Hz(uz).applyToMesh(Oz, uz.updatable), Oz
    }

    function dz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Ez = uz.colors ? [uz.colors] : null;
      return pz(zz, {
        lines: [uz.points],
        updatable: uz.updatable,
        instance: uz.instance,
        colors: Ez,
        useVertexAlpha: uz.useVertexAlpha,
        material: uz.material
      }, bz)
    }

    function Fz(zz, uz) {
      let bz = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const iz = uz.points,
        Mz = uz.instance,
        Hz = uz.gapSize || 1,
        pz = uz.dashSize || 3;
      if (Mz) {
        const zz = zz => {
          const uz = Ez.n.Zero(),
            bz = zz.length / 6;
          let nz, lz, tz, Hz, Oz = 0,
            pz = 0;
          for (tz = 0; tz < iz.length - 1; tz++) iz[tz + 1].subtractToRef(iz[tz], uz), Oz += uz.length();
          const dz = Oz / bz,
            Fz = Mz._creationDataStorage.dashSize,
            Zz = Fz * dz / (Fz + Mz._creationDataStorage.gapSize);
          for (tz = 0; tz < iz.length - 1; tz++)
            for (iz[tz + 1].subtractToRef(iz[tz], uz), nz = Math.floor(uz.length() / dz), uz.normalize(), Hz = 0; Hz < nz && pz < zz.length;) lz = dz * Hz, zz[pz] = iz[tz].x + lz * uz.x, zz[pz + 1] = iz[tz].y + lz * uz.y, zz[pz + 2] = iz[tz].z + lz * uz.z, zz[pz + 3] = iz[tz].x + (lz + Zz) * uz.x, zz[pz + 4] = iz[tz].y + (lz + Zz) * uz.y, zz[pz + 5] = iz[tz].z + (lz + Zz) * uz.z, pz += 6, Hz++;
          for (; pz < zz.length;) zz[pz] = iz[tz].x, zz[pz + 1] = iz[tz].y, zz[pz + 2] = iz[tz].z, pz += 3
        };
        return (uz.dashNb || uz.dashSize || uz.gapSize || uz.useVertexAlpha || uz.material) && tz.e.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Mz.updateMeshPositions(zz, !1), Mz
      }
      const dz = new lz.c(zz, bz, null, void 0, void 0, void 0, uz.useVertexAlpha, uz.material);
      return Oz(uz).applyToMesh(dz, uz.updatable), dz._creationDataStorage = new nz.h, dz._creationDataStorage.dashSize = pz, dz._creationDataStorage.gapSize = Hz, dz
    }
    let Zz = !1;
    Zz || (Zz = !0, iz.b.CreateLineSystem = Hz, iz.b.CreateDashedLines = Oz, nz.c.CreateLines = function(zz, uz) {
      return dz(zz, {
        points: uz,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, nz.c.CreateDashedLines = function(zz, uz, bz, Ez, nz) {
      return Fz(zz, {
        points: uz,
        dashSize: bz,
        gapSize: Ez,
        dashNb: nz,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  39626: (zz, uz, bz) => {
    bz.d(uz, {
      c: () => dz,
      d: () => Rz
    });
    var Ez, nz, iz = bz(36715),
      lz = bz(39299),
      Mz = bz(39584),
      tz = bz(39631),
      Hz = bz(39451),
      Oz = bz(39634),
      pz = bz(39061);
    class dz extends Mz.c {
      _isShaderMaterial(zz) {
        return !!zz && "ShaderMaterial" === zz.getClassName()
      }
      constructor(zz) {
        let uz = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Ez = arguments.length > 5 ? arguments[5] : void 0,
          nz = arguments.length > 6 ? arguments[6] : void 0,
          Mz = arguments.length > 7 ? arguments[7] : void 0;
        super(zz, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, uz, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Ez, this.useVertexAlpha = nz, this.color = new iz.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, uz && (this.color = uz.color.clone(), this.alpha = uz.alpha, this.useVertexColor = uz.useVertexColor, this.useVertexAlpha = uz.useVertexAlpha), this.intersectionThreshold = .1;
        const tz = {
          attributes: [lz.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? tz.defines.push("#define VERTEXALPHA") : tz.needAlphaBlending = !1, this.useVertexColor ? (tz.defines.push("#define VERTEXCOLOR"), tz.attributes.push(lz.j.ColorKind)) : (tz.uniforms.push("color"), this._color4 = new iz.g), Mz) this.material = Mz;
        else {
          this.XT().uR().isWebGPU && !dz.ForceGLSL && (this._shaderLanguage = 1), tz.shaderLanguage = this._shaderLanguage, tz.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([bz.e(334).then((() => bz(41776))), bz.e(340).then((() => bz(41784)))]) : await Promise.all([bz.e(316).then((() => bz(41790))), bz.e(322).then((() => bz(41798)))])
          };
          const zz = new Oz.p("colorShader", this.XT(), "color", tz, !1);
          zz.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(zz)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(zz) {
        const uz = this.material;
        if (uz === zz) return;
        const bz = uz && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(zz), bz && uz?.dispose()
      }
      _setInternalMaterial(zz) {
        this._setMaterial(zz), this.material && (this.material.fillMode = Hz.c.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(zz) {}
      _bind(zz, uz) {
        if (!this._geometry) return this;
        const bz = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(uz, bz) : this._geometry._bind(uz, bz, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: zz,
            g: uz,
            b: bz
          } = this.color;
          this._color4.set(zz, uz, bz, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(zz, uz, bz) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Ez = this.XT().uR();
        return this._unIndexed ? Ez.drawArraysType(Hz.c.LineListDrawMode, zz.verticesStart, zz.verticesCount, bz) : Ez.drawElementsType(Hz.c.LineListDrawMode, zz.indexStart, zz.indexCount, bz), this
      }
      dispose(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || uz) && this.material?.dispose(!1, !1, !0), super.dispose(zz)
      }
      clone(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        if (uz && void 0 === uz._addToSceneRootNodes) {
          const bz = uz;
          return bz.source = this, new dz(zz, this.XT(), bz.parent, bz.source, bz.doNotCloneChildren)
        }
        return new dz(zz, this.XT(), uz, this, bz)
      }
      createInstance(zz) {
        const uz = new Fz(zz, this);
        if (this.RP) {
          uz.RP = {};
          for (const zz in this.RP) uz.RP[zz] = this.RP[zz]
        }
        return uz
      }
      serialize(zz) {
        super.serialize(zz), zz.color = this.color.obz(), zz.alpha = this.alpha
      }
      static Parse(zz, uz) {
        const bz = new dz(zz.name, uz);
        return bz.color = iz.c.FromArray(zz.color), bz.alpha = zz.alpha, bz
      }
    }
    dz.ForceGLSL = !1;
    class Fz extends tz.e {
      constructor(zz, uz) {
        super(zz, uz), this.intersectionThreshold = uz.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let Zz = !1;

    function Rz() {
      Zz || (Zz = !0, Mz.c._LinesMeshParser = (zz, uz) => dz.Parse(zz, uz))
    }(Ez = dz.prototype).enableEdgesRendering ?? (Ez.enableEdgesRendering = (0, pz.h)("LinesMesh", "enableEdgesRendering")), (nz = Fz.prototype).enableEdgesRendering ?? (nz.enableEdgesRendering = (0, pz.h)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  38054: (zz, uz, bz) => {
    bz.d(uz, {
      b: () => iz
    });
    var Ez = bz(38060);
    const nz = (zz, uz, bz) => zz ? zz.getClassName && "Mesh" === zz.getClassName() ? null : !zz.getClassName || "SubMesh" !== zz.getClassName() && "PhysicsBody" !== zz.getClassName() ? zz.clone ? zz.clone() : Array.isArray(zz) ? zz.slice() : bz && "object" === typeof zz ? {
      ...zz
    } : null : zz.clone(uz) : null;
    class iz {
      static DeepCopy(zz, uz, bz, iz) {
        let lz = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Mz = function(zz) {
          const uz = [];
          do {
            const bz = Object.getOwnPropertyNames(zz);
            for (const zz of bz) - 1 === uz.indexOf(zz) && uz.push(zz)
          } while (zz = Object.getPrototypeOf(zz));
          return uz
        }(zz);
        for (const Hz of Mz) {
          if ("_" === Hz[0] && (!iz || -1 === iz.indexOf(Hz))) continue;
          if (Hz.endsWith("Observable")) continue;
          if (bz && -1 !== bz.indexOf(Hz)) continue;
          const Mz = zz[Hz],
            Oz = typeof Mz;
          if ("function" !== Oz) try {
            if ("object" === Oz)
              if (Mz instanceof Uint8Array) uz[Hz] = Uint8Array.from(Mz);
              else if (Mz instanceof Array) {
              if (uz[Hz] = [], Mz.length > 0)
                if ("object" == typeof Mz[0])
                  for (let zz = 0; zz < Mz.length; zz++) {
                    const bz = nz(Mz[zz], uz, lz); - 1 === uz[Hz].indexOf(bz) && uz[Hz].push(bz)
                  } else uz[Hz] = Mz.slice(0)
            } else uz[Hz] = nz(Mz, uz, lz);
            else uz[Hz] = Mz
          } catch (tz) {
            Ez.e.Warn(tz.message)
          }
        }
      }
    }
  },
  37335: (zz, uz, bz) => {
    function Ez() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (zz => {
        const uz = 16 * Math.random() | 0;
        return ("x" === zz ? uz : 3 & uz | 8).toString(16)
      }))
    }
    bz.d(uz, {
      c: () => Ez
    })
  },
  38060: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez
    });
    class Ez {
      static _CheckLimit(zz, uz) {
        let bz = Ez._LogLimitOutputs[zz];
        return bz ? bz.current++ : (bz = {
          limit: uz,
          current: 1
        }, Ez._LogLimitOutputs[zz] = bz), bz.current <= bz.limit
      }
      static _GenerateLimitMessage(zz) {
        let uz = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const bz = Ez._LogLimitOutputs[zz];
        if (!bz || !Ez.MessageLimitReached) return;
        const nz = this._Levels[uz];
        bz.current === bz.limit && Ez[nz.name](Ez.MessageLimitReached.replace(/%LIMIT%/g, "" + bz.limit).replace(/%TYPE%/g, nz.name ?? ""))
      }
      static _AddLogEntry(zz) {
        Ez._LogCache = zz + Ez._LogCache, Ez.OnNewCacheEntry && Ez.OnNewCacheEntry(zz)
      }
      static _FormatMessage(zz) {
        const uz = zz => zz < 10 ? "0" + zz : "" + zz,
          bz = new Date;
        return "[" + uz(bz.getHours()) + ":" + uz(bz.getMinutes()) + ":" + uz(bz.getSeconds()) + "]: " + zz
      }
      static _LogDisabled(zz, uz) {}
      static _LogEnabled() {
        let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          uz = arguments.length > 1 ? arguments[1] : void 0,
          bz = arguments.length > 2 ? arguments[2] : void 0;
        const nz = Array.isArray(uz) ? uz[0] : uz;
        if (void 0 !== bz && !Ez._CheckLimit(nz, bz)) return;
        const iz = Ez._FormatMessage(nz),
          lz = this._Levels[zz],
          Mz = Array.isArray(uz) ? uz.slice(1) : [];
        lz.logFunc && lz.logFunc("BJS - " + iz, ...Mz);
        const tz = `<div style='color:${lz.color}'>${iz}</div><br>`;
        Ez._AddLogEntry(tz), Ez._GenerateLimitMessage(nz, zz)
      }
      static get LogCache() {
        return Ez._LogCache
      }
      static ClearLogCache() {
        Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez.errorsCount = 0
      }
      static set LogLevels(zz) {
        Ez.Log = Ez._LogDisabled, Ez.Warn = Ez._LogDisabled, Ez.Error = Ez._LogDisabled;
        const uz = [Ez.MessageLogLevel, Ez.WarningLogLevel, Ez.ErrorLogLevel];
        for (const bz of uz)
          if ((zz & bz) === bz) {
            const zz = this._Levels[bz];
            Ez[zz.name] = Ez._LogEnabled.bind(Ez, bz)
          }
      }
    }
    Ez.NoneLogLevel = 0, Ez.MessageLogLevel = 1, Ez.WarningLogLevel = 2, Ez.ErrorLogLevel = 4, Ez.AllLogLevel = 7, Ez.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Ez._LogCache = "", Ez._LogLimitOutputs = {}, Ez._Levels = [{}, {
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
    }], Ez.errorsCount = 0, Ez.Log = Ez._LogEnabled.bind(Ez, Ez.MessageLogLevel), Ez.Warn = Ez._LogEnabled.bind(Ez, Ez.WarningLogLevel), Ez.Error = Ez._LogEnabled.bind(Ez, Ez.ErrorLogLevel)
  },
  39250: (zz, uz, bz) => {
    bz.d(uz, {
      e: () => Ez.e
    });
    var Ez = bz(39253);
    (0, Ez.b)()
  }
};
Object.freeze(modules);
for (const zz in modules) Object.freeze(modules[zz]);