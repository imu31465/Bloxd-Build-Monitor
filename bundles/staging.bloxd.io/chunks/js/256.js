export const id = 256;
export const ids = [256, 262, 266];
export const modules = {
  41237: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => oB,
      e: () => jB
    });
    var YB = GB(39366),
      DB = GB(41022),
      QB = GB(41217),
      oB = {};
    class jB {
      constructor(BB) {
        this.attachedToElement = !1, this.attached = {}, this.camera = BB, this.checkInputs = () => {}
      }
      add(BB) {
        const OB = BB.getSimpleName();
        this.attached[OB] ? YB.b.Warn("camera input of type " + OB + " already exists on camera") : (this.attached[OB] = BB, BB.camera = this.camera, BB.checkInputs && (this.checkInputs = this._addCheckInputs(BB.checkInputs.bind(BB))), this.attachedToElement && BB.attachControl(this.noPreventDefault))
      }
      remove(BB) {
        for (const OB in this.attached) {
          const GB = this.attached[OB];
          if (GB === BB) return GB.detachControl(), GB.camera = null, delete this.attached[OB], void this.rebuildInputCheck()
        }
      }
      removeByType(BB) {
        for (const OB in this.attached) {
          const GB = this.attached[OB];
          GB.getClassName() === BB && (GB.detachControl(), GB.camera = null, delete this.attached[OB], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(BB) {
        const OB = this.checkInputs;
        return () => {
          OB(), BB()
        }
      }
      attachInput(BB) {
        this.attachedToElement && BB.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          BB = !QB.e.ForceAttachControlToAlwaysPreventDefault && BB, this.attachedToElement = !0, this.noPreventDefault = BB;
          for (const OB in this.attached) this.attached[OB].attachControl(BB)
        }
      }
      detachElement() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const OB in this.attached) this.attached[OB].detachControl(), BB && (this.attached[OB].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const BB in this.attached) {
          const OB = this.attached[BB];
          OB.checkInputs && (this.checkInputs = this._addCheckInputs(OB.checkInputs.bind(OB)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(BB) {
        const OB = {};
        for (const GB in this.attached) {
          const BB = this.attached[GB],
            YB = DB.d.Serialize(BB);
          OB[BB.getClassName()] = YB
        }
        BB.inputsmgr = OB
      }
      parse(BB) {
        const OB = BB.inputsmgr;
        if (OB) {
          this.clear();
          for (const BB in OB) {
            const GB = oB[BB];
            if (GB) {
              const YB = OB[BB],
                QB = DB.d.Parse((() => new GB), YB, null);
              this.add(QB)
            }
          }
        } else
          for (const GB in this.attached) {
            const OB = oB[this.attached[GB].getClassName()];
            if (OB) {
              const YB = DB.d.Parse((() => new OB), BB, null);
              this.remove(this.attached[GB]), this.add(YB)
            }
          }
      }
    }
  },
  41246: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => YB.c
    });
    var YB = GB(41248);
    (0, YB.d)()
  },
  41248: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => MB,
      d: () => zB
    });
    var YB = GB(40998),
      DB = GB(41004),
      QB = GB(37778),
      oB = GB(37894),
      jB = GB(41250),
      yB = GB(41220),
      JB = GB(37823);
    let MB = (() => {
        var BB;
        let OB, GB, yB = jB.d,
          JB = [],
          MB = [],
          PB = [],
          zB = [];
        return BB = class extends yB {
          constructor(BB, OB, GB, DB) {
            super(BB, GB, DB), this.groundColor = (0, YB.j)(this, JB, new oB.c(0, 0, 0)), this.direction = ((0, YB.j)(this, MB), (0, YB.j)(this, PB, void 0)), (0, YB.j)(this, zB), this.direction = OB || QB.r.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(BB) {
            return this.direction = QB.r.Normalize(BB.subtract(QB.r.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", GB.x, GB.y, GB.z, 0, OB), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), OB), this
          }
          transferToNodeMaterialEffect(BB, OB) {
            const GB = QB.r.Normalize(this.direction);
            return BB.setFloat3(OB, GB.x, GB.y, GB.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = QB.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return jB.d.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(BB, OB) {
            BB["HEMILIGHT" + OB] = !0
          }
        }, (() => {
          const QB = "function" === typeof Symbol && Symbol.metadata ? Object.create(yB[Symbol.metadata] ?? null) : void 0;
          OB = [(0, DB.n)()], GB = [(0, DB.H)()], (0, YB.h)(null, null, OB, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: BB => "groundColor" in BB,
              get: BB => BB.groundColor,
              set: (BB, OB) => {
                BB.groundColor = OB
              }
            },
            metadata: QB
          }, JB, MB), (0, YB.h)(null, null, GB, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: BB => "direction" in BB,
              get: BB => BB.direction,
              set: (BB, OB) => {
                BB.direction = OB
              }
            },
            metadata: QB
          }, PB, zB), QB && Object.defineProperty(BB, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: QB
          })
        })(), BB
      })(),
      PB = !1;

    function zB() {
      PB || (PB = !0, yB.b.AddNodeConstructor("Light_Type_3", ((BB, OB) => () => new MB(BB, QB.r.Zero(), OB))), (0, JB.f)("BABYLON.HemisphericLight", MB))
    }
  },
  37885: (BB, OB, GB) => {
    GB.d(OB, {
      Color3: () => YB.c,
      e: () => YB.g
    });
    var YB = GB(37894);
    (0, YB.k)()
  },
  38424: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => DB
    });
    var YB = GB(38432);
    class DB {
      static GetPlanes(BB) {
        const OB = [];
        for (let GB = 0; GB < 6; GB++) OB.push(new YB.c(0, 0, 0, 0));
        return DB.GetPlanesToRef(BB, OB), OB
      }
      static GetNearPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[2], OB.normal.y = GB[7] + GB[6], OB.normal.z = GB[11] + GB[10], OB.d = GB[15] + GB[14], OB.normalize()
      }
      static GetFarPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[2], OB.normal.y = GB[7] - GB[6], OB.normal.z = GB[11] - GB[10], OB.d = GB[15] - GB[14], OB.normalize()
      }
      static GetLeftPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[0], OB.normal.y = GB[7] + GB[4], OB.normal.z = GB[11] + GB[8], OB.d = GB[15] + GB[12], OB.normalize()
      }
      static GetRightPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[0], OB.normal.y = GB[7] - GB[4], OB.normal.z = GB[11] - GB[8], OB.d = GB[15] - GB[12], OB.normalize()
      }
      static GetTopPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] - GB[1], OB.normal.y = GB[7] - GB[5], OB.normal.z = GB[11] - GB[9], OB.d = GB[15] - GB[13], OB.normalize()
      }
      static GetBottomPlaneToRef(BB, OB) {
        const GB = BB.m;
        OB.normal.x = GB[3] + GB[1], OB.normal.y = GB[7] + GB[5], OB.normal.z = GB[11] + GB[9], OB.d = GB[15] + GB[13], OB.normalize()
      }
      static GetPlanesToRef(BB, OB) {
        DB.GetNearPlaneToRef(BB, OB[0]), DB.GetFarPlaneToRef(BB, OB[1]), DB.GetLeftPlaneToRef(BB, OB[2]), DB.GetRightPlaneToRef(BB, OB[3]), DB.GetTopPlaneToRef(BB, OB[4]), DB.GetBottomPlaneToRef(BB, OB[5])
      }
      static IsPointInFrustum(BB, OB) {
        for (let GB = 0; GB < 6; GB++)
          if (OB[GB].dotCoordinate(BB) < 0) return !1;
        return !0
      }
    }
  },
  38432: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => DB
    });
    var YB = GB(37778);
    class DB {
      constructor(BB, OB, GB, DB) {
        this.normal = new YB.r(BB, OB, GB), this.d = DB
      }
      dDB() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new DB(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let BB = this.normal.getHashCode();
        return BB = 397 * BB ^ this.d, BB
      }
      normalize() {
        const BB = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let OB = 0;
        return 0 !== BB && (OB = 1 / BB), this.normal.x *= OB, this.normal.y *= OB, this.normal.z *= OB, this.d *= OB, this
      }
      transform(BB) {
        const OB = DB._TmpMatrix;
        BB.invertToRef(OB);
        const GB = OB.m,
          YB = this.normal.x,
          QB = this.normal.y,
          oB = this.normal.z,
          jB = this.d,
          yB = YB * GB[0] + QB * GB[1] + oB * GB[2] + jB * GB[3],
          JB = YB * GB[4] + QB * GB[5] + oB * GB[6] + jB * GB[7],
          MB = YB * GB[8] + QB * GB[9] + oB * GB[10] + jB * GB[11],
          PB = YB * GB[12] + QB * GB[13] + oB * GB[14] + jB * GB[15];
        return new DB(yB, JB, MB, PB)
      }
      dotCoordinate(BB) {
        return this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z + this.d
      }
      copyFromPoints(BB, OB, GB) {
        const YB = OB.x - BB.x,
          DB = OB.y - BB.y,
          QB = OB.z - BB.z,
          oB = GB.x - BB.x,
          jB = GB.y - BB.y,
          yB = GB.z - BB.z,
          JB = DB * yB - QB * jB,
          MB = QB * oB - YB * yB,
          PB = YB * jB - DB * oB,
          zB = Math.sqrt(JB * JB + MB * MB + PB * PB);
        let lB;
        return lB = 0 !== zB ? 1 / zB : 0, this.normal.x = JB * lB, this.normal.y = MB * lB, this.normal.z = PB * lB, this.d = -(this.normal.x * BB.x + this.normal.y * BB.y + this.normal.z * BB.z), this
      }
      isFrontFacingTo(BB, OB) {
        return YB.r.Dot(this.normal, BB) <= OB
      }
      signedDistanceTo(BB) {
        return YB.r.Dot(BB, this.normal) + this.d
      }
      static FromArray(BB) {
        return new DB(BB[0], BB[1], BB[2], BB[3])
      }
      static FromPoints(BB, OB, GB) {
        const YB = new DB(0, 0, 0, 0);
        return YB.copyFromPoints(BB, OB, GB), YB
      }
      static FromPositionAndNormal(BB, OB) {
        const GB = new DB(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(BB, OB, GB)
      }
      static FromPositionAndNormalToRef(BB, OB, GB) {
        return GB.normal.IU(OB), GB.normal.normalize(), GB.d = -BB.dot(GB.normal), GB
      }
      static SignedDistanceToPlaneFromPositionAndNormal(BB, OB, GB) {
        const DB = -(OB.x * BB.x + OB.y * BB.y + OB.z * BB.z);
        return YB.r.Dot(GB, OB) + DB
      }
    }
    DB._TmpMatrix = YB.d.Identity()
  },
  37771: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      Matrix: () => YB.d,
      Quaternion: () => YB.f,
      RegisterMathVector: () => YB.j,
      TmpVectors: () => YB.k,
      Vector2: () => YB.o,
      Xp: () => YB.r,
      Vector4: () => YB.t
    });
    var YB = GB(37778);
    (0, YB.j)()
  },
  38769: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => YB
    });
    class YB {
      constructor(BB, OB, GB, YB) {
        this.x = BB, this.y = OB, this.width = GB, this.height = YB
      }
      toGlobal(BB, OB) {
        return new YB(this.x * BB, this.y * OB, this.width * BB, this.height * OB)
      }
      toGlobalToRef(BB, OB, GB) {
        return GB.x = this.x * BB, GB.y = this.y * OB, GB.width = this.width * BB, GB.height = this.height * OB, this
      }
      clone() {
        return new YB(this.x, this.y, this.width, this.height)
      }
    }
  },
  41406: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => JB
    });
    var YB = GB(37778),
      DB = GB(37894),
      QB = GB(41411),
      oB = GB(41423),
      jB = GB(41436);

    function yB(BB) {
      let OB = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const GB = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        QB = [],
        yB = BB.width || BB.size || 1,
        JB = BB.height || BB.size || 1,
        MB = BB.depth || BB.size || 1,
        PB = BB.wrap || !1;
      let zB = void 0 === BB.topBaseAt ? 1 : BB.topBaseAt,
        lB = void 0 === BB.bottomBaseAt ? 0 : BB.bottomBaseAt;
      zB = (zB + 4) % 4, lB = (lB + 4) % 4;
      let pB = [2, 0, 3, 1][zB],
        qB = [2, 0, 1, 3][lB],
        ZB = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (PB) {
        OB = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], ZB = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let BB = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          GB = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const YB = [17, 18, 19, 16],
          DB = [22, 23, 20, 21];
        for (; pB > 0;) BB.unshift(BB.pop()), YB.unshift(YB.pop()), pB--;
        for (; qB > 0;) GB.unshift(GB.pop()), DB.unshift(DB.pop()), qB--;
        BB = BB.flat(), GB = GB.flat(), ZB = ZB.concat(BB).concat(GB), OB.push(YB[0], YB[2], YB[3], YB[0], YB[1], YB[2]), OB.push(DB[0], DB[2], DB[3], DB[0], DB[1], DB[2])
      }
      const NB = [yB / 2, JB / 2, MB / 2],
        RB = ZB.reduce(((BB, OB, GB) => BB.concat(OB * NB[GB % 3])), []),
        WB = 0 === BB.sideOrientation ? 0 : BB.sideOrientation || oB.e.DEFAULTSIDE,
        AB = BB.faceUV || new Array(6),
        VB = BB.faceColors,
        SB = [];
      for (let oB = 0; oB < 6; oB++) void 0 === AB[oB] && (AB[oB] = new YB.t(0, 0, 1, 1)), VB && void 0 === VB[oB] && (VB[oB] = new DB.g(1, 1, 1, 1));
      for (let YB = 0; YB < 6; YB++)
        if (QB.push(AB[YB].z, jB.e ? 1 - AB[YB].w : AB[YB].w), QB.push(AB[YB].x, jB.e ? 1 - AB[YB].w : AB[YB].w), QB.push(AB[YB].x, jB.e ? 1 - AB[YB].y : AB[YB].y), QB.push(AB[YB].z, jB.e ? 1 - AB[YB].y : AB[YB].y), VB)
          for (let BB = 0; BB < 4; BB++) SB.push(VB[YB].r, VB[YB].g, VB[YB].b, VB[YB].a);
      oB.e._ComputeSides(WB, RB, OB, GB, QB, BB.frontUVs, BB.backUVs);
      const nB = new oB.e;
      if (nB.indices = OB, nB.positions = RB, nB.normals = GB, nB.uvs = QB, VB) {
        const BB = WB === oB.e.DOUBLESIDE ? SB.concat(SB) : SB;
        nB.colors = BB
      }
      return nB
    }

    function JB(BB) {
      let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const YB = new QB.c(BB, GB);
      OB.sideOrientation = QB.c._GetDefaultSideOrientation(OB.sideOrientation), YB._originalBuilderSideOrientation = OB.sideOrientation;
      return yB(OB).applyToMesh(YB, OB.updatable), YB
    }
    let MB = !1;
    MB || (MB = !0, oB.e.CreateBox = yB, QB.c.CreateBox = function(BB, OB) {
      return JB(BB, {
        size: OB,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  41452: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => PB
    });
    var YB = GB(37778),
      DB = GB(41411),
      QB = GB(41423),
      oB = GB(41457),
      jB = GB(41150),
      yB = GB(39366);

    function JB(BB) {
      const OB = [],
        GB = [],
        YB = BB.lines,
        DB = BB.colors,
        oB = [];
      let jB = 0;
      for (let QB = 0; QB < YB.length; QB++) {
        const BB = YB[QB];
        for (let YB = 0; YB < BB.length; YB++) {
          const {
            x: yB,
            y: JB,
            z: MB
          } = BB[YB];
          if (GB.push(yB, JB, MB), DB) {
            const BB = DB[QB],
              {
                r: OB,
                g: GB,
                b: jB,
                a: yB
              } = BB[YB];
            oB.push(OB, GB, jB, yB)
          }
          YB > 0 && (OB.push(jB - 1), OB.push(jB)), jB++
        }
      }
      const yB = new QB.e;
      return yB.indices = OB, yB.positions = GB, DB && (yB.colors = oB), yB
    }

    function MB(BB) {
      const OB = BB.dashSize || 3,
        GB = BB.gapSize || 1,
        DB = BB.dashNb || 200,
        oB = BB.points,
        jB = [],
        yB = [],
        JB = YB.r.Zero();
      let MB, PB, zB, lB = 0,
        pB = 0;
      for (zB = 0; zB < oB.length - 1; zB++) oB[zB + 1].subtractToRef(oB[zB], JB), lB += JB.length();
      const qB = lB / DB,
        ZB = OB * qB / (OB + GB);
      for (zB = 0; zB < oB.length - 1; zB++) {
        oB[zB + 1].subtractToRef(oB[zB], JB), MB = Math.floor(JB.length() / qB), JB.normalize();
        for (let BB = 0; BB < MB; BB++) PB = qB * BB, jB.push(oB[zB].x + PB * JB.x, oB[zB].y + PB * JB.y, oB[zB].z + PB * JB.z), jB.push(oB[zB].x + (PB + ZB) * JB.x, oB[zB].y + (PB + ZB) * JB.y, oB[zB].z + (PB + ZB) * JB.z), yB.push(pB, pB + 1), pB += 2
      }
      const NB = new QB.e;
      return NB.positions = jB, NB.indices = yB, NB
    }

    function PB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const YB = OB.instance,
        DB = OB.lines,
        QB = OB.colors;
      if (YB) {
        const BB = YB.getVerticesData(jB.h.PositionKind);
        let OB, GB;
        QB && (OB = YB.getVerticesData(jB.h.ColorKind));
        let oB = 0,
          yB = 0;
        for (let YB = 0; YB < DB.length; YB++) {
          const jB = DB[YB];
          for (let DB = 0; DB < jB.length; DB++) BB[oB] = jB[DB].x, BB[oB + 1] = jB[DB].y, BB[oB + 2] = jB[DB].z, QB && OB && (GB = QB[YB], OB[yB] = GB[DB].r, OB[yB + 1] = GB[DB].g, OB[yB + 2] = GB[DB].b, OB[yB + 3] = GB[DB].a, yB += 4), oB += 3
        }
        return YB.updateVerticesData(jB.h.PositionKind, BB, !1, !1), QB && OB && YB.updateVerticesData(jB.h.ColorKind, OB, !1, !1), YB.refreshBoundingInfo(), YB
      }
      const yB = !!QB,
        MB = new oB.b(BB, GB, null, void 0, void 0, yB, OB.useVertexAlpha, OB.material);
      return JB(OB).applyToMesh(MB, OB.updatable), MB
    }

    function zB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const YB = OB.colors ? [OB.colors] : null;
      return PB(BB, {
        lines: [OB.points],
        updatable: OB.updatable,
        instance: OB.instance,
        colors: YB,
        useVertexAlpha: OB.useVertexAlpha,
        material: OB.material
      }, GB)
    }

    function lB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const QB = OB.points,
        jB = OB.instance,
        JB = OB.gapSize || 1,
        PB = OB.dashSize || 3;
      if (jB) {
        const BB = BB => {
          const OB = YB.r.Zero(),
            GB = BB.length / 6;
          let DB, oB, yB, JB, MB = 0,
            PB = 0;
          for (yB = 0; yB < QB.length - 1; yB++) QB[yB + 1].subtractToRef(QB[yB], OB), MB += OB.length();
          const zB = MB / GB,
            lB = jB._creationDataStorage.dashSize,
            pB = lB * zB / (lB + jB._creationDataStorage.gapSize);
          for (yB = 0; yB < QB.length - 1; yB++)
            for (QB[yB + 1].subtractToRef(QB[yB], OB), DB = Math.floor(OB.length() / zB), OB.normalize(), JB = 0; JB < DB && PB < BB.length;) oB = zB * JB, BB[PB] = QB[yB].x + oB * OB.x, BB[PB + 1] = QB[yB].y + oB * OB.y, BB[PB + 2] = QB[yB].z + oB * OB.z, BB[PB + 3] = QB[yB].x + (oB + pB) * OB.x, BB[PB + 4] = QB[yB].y + (oB + pB) * OB.y, BB[PB + 5] = QB[yB].z + (oB + pB) * OB.z, PB += 6, JB++;
          for (; PB < BB.length;) BB[PB] = QB[yB].x, BB[PB + 1] = QB[yB].y, BB[PB + 2] = QB[yB].z, PB += 3
        };
        return (OB.dashNb || OB.dashSize || OB.gapSize || OB.useVertexAlpha || OB.material) && yB.b.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), jB.updateMeshPositions(BB, !1), jB
      }
      const zB = new oB.b(BB, GB, null, void 0, void 0, void 0, OB.useVertexAlpha, OB.material);
      return MB(OB).applyToMesh(zB, OB.updatable), zB._creationDataStorage = new DB.j, zB._creationDataStorage.dashSize = PB, zB._creationDataStorage.gapSize = JB, zB
    }
    let pB = !1;
    pB || (pB = !0, QB.e.CreateLineSystem = JB, QB.e.CreateDashedLines = MB, DB.c.CreateLines = function(BB, OB) {
      return zB(BB, {
        points: OB,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, DB.c.CreateDashedLines = function(BB, OB, GB, YB, DB) {
      return lB(BB, {
        points: OB,
        dashSize: GB,
        gapSize: YB,
        dashNb: DB,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  41457: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => zB,
      c: () => qB
    });
    var YB, DB, QB = GB(37894),
      oB = GB(41150),
      jB = GB(41411),
      yB = GB(41462),
      JB = GB(41283),
      MB = GB(41468),
      PB = GB(40890);
    class zB extends jB.c {
      _isShaderMaterial(BB) {
        return !!BB && "ShaderMaterial" === BB.getClassName()
      }
      constructor(BB) {
        let OB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          YB = arguments.length > 5 ? arguments[5] : void 0,
          DB = arguments.length > 6 ? arguments[6] : void 0,
          jB = arguments.length > 7 ? arguments[7] : void 0;
        super(BB, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, OB, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = YB, this.useVertexAlpha = DB, this.color = new QB.c(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, OB && (this.color = OB.color.clone(), this.alpha = OB.alpha, this.useVertexColor = OB.useVertexColor, this.useVertexAlpha = OB.useVertexAlpha), this.intersectionThreshold = .1;
        const yB = {
          attributes: [oB.h.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? yB.defines.push("#define VERTEXALPHA") : yB.needAlphaBlending = !1, this.useVertexColor ? (yB.defines.push("#define VERTEXCOLOR"), yB.attributes.push(oB.h.ColorKind)) : (yB.uniforms.push("color"), this._color4 = new QB.g), jB) this.material = jB;
        else {
          this.JF().Lp().isWebGPU && !zB.ForceGLSL && (this._shaderLanguage = 1), yB.shaderLanguage = this._shaderLanguage, yB.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([GB.e(653).then((() => GB(45702))), GB.e(659).then((() => GB(45705)))]) : await Promise.all([GB.e(635).then((() => GB(45713))), GB.e(641).then((() => GB(45721)))])
          };
          const BB = new MB.k("colorShader", this.JF(), "color", yB, !1);
          BB.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(BB)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(BB) {
        const OB = this.material;
        if (OB === BB) return;
        const GB = OB && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(BB), GB && OB?.dispose()
      }
      _setInternalMaterial(BB) {
        this._setMaterial(BB), this.material && (this.material.fillMode = JB.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(BB) {}
      _bind(BB, OB) {
        if (!this._geometry) return this;
        const GB = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(OB, GB) : this._geometry._bind(OB, GB, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: BB,
            g: OB,
            b: GB
          } = this.color;
          this._color4.set(BB, OB, GB, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(BB, OB, GB) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const YB = this.JF().Lp();
        return this._unIndexed ? YB.drawArraysType(JB.b.LineListDrawMode, BB.verticesStart, BB.verticesCount, GB) : YB.drawElementsType(JB.b.LineListDrawMode, BB.indexStart, BB.indexCount, GB), this
      }
      dispose(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || OB) && this.material?.dispose(!1, !1, !0), super.dispose(BB)
      }
      clone(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        if (OB && void 0 === OB._addToSceneRootNodes) {
          const GB = OB;
          return GB.source = this, new zB(BB, this.JF(), GB.parent, GB.source, GB.doNotCloneChildren)
        }
        return new zB(BB, this.JF(), OB, this, GB)
      }
      createInstance(BB) {
        const OB = new lB(BB, this);
        if (this.yX) {
          OB.yX = {};
          for (const BB in this.yX) OB.yX[BB] = this.yX[BB]
        }
        return OB
      }
      serialize(BB) {
        super.serialize(BB), BB.color = this.color.dDB(), BB.alpha = this.alpha
      }
      static Parse(BB, OB) {
        const GB = new zB(BB.name, OB);
        return GB.color = QB.c.FromArray(BB.color), GB.alpha = BB.alpha, GB
      }
    }
    zB.ForceGLSL = !1;
    class lB extends yB.b {
      constructor(BB, OB) {
        super(BB, OB), this.intersectionThreshold = OB.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let pB = !1;

    function qB() {
      pB || (pB = !0, jB.c._LinesMeshParser = (BB, OB) => zB.Parse(BB, OB))
    }(YB = zB.prototype).enableEdgesRendering ?? (YB.enableEdgesRendering = (0, PB.g)("LinesMesh", "enableEdgesRendering")), (DB = lB.prototype).enableEdgesRendering ?? (DB.enableEdgesRendering = (0, PB.g)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  39358: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => QB
    });
    var YB = GB(39366);
    const DB = (BB, OB, GB) => BB ? BB.getClassName && "Mesh" === BB.getClassName() ? null : !BB.getClassName || "SubMesh" !== BB.getClassName() && "PhysicsBody" !== BB.getClassName() ? BB.clone ? BB.clone() : Array.isArray(BB) ? BB.slice() : GB && "object" === typeof BB ? {
      ...BB
    } : null : BB.clone(OB) : null;
    class QB {
      static DeepCopy(BB, OB, GB, QB) {
        let oB = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const jB = function(BB) {
          const OB = [];
          do {
            const GB = Object.getOwnPropertyNames(BB);
            for (const BB of GB) - 1 === OB.indexOf(BB) && OB.push(BB)
          } while (BB = Object.getPrototypeOf(BB));
          return OB
        }(BB);
        for (const JB of jB) {
          if ("_" === JB[0] && (!QB || -1 === QB.indexOf(JB))) continue;
          if (JB.endsWith("Observable")) continue;
          if (GB && -1 !== GB.indexOf(JB)) continue;
          const jB = BB[JB],
            MB = typeof jB;
          if ("function" !== MB) try {
            if ("object" === MB)
              if (jB instanceof Uint8Array) OB[JB] = Uint8Array.from(jB);
              else if (jB instanceof Array) {
              if (OB[JB] = [], jB.length > 0)
                if ("object" == typeof jB[0])
                  for (let BB = 0; BB < jB.length; BB++) {
                    const GB = DB(jB[BB], OB, oB); - 1 === OB[JB].indexOf(GB) && OB[JB].push(GB)
                  } else OB[JB] = jB.slice(0)
            } else OB[JB] = DB(jB, OB, oB);
            else OB[JB] = jB
          } catch (yB) {
            YB.b.Warn(yB.message)
          }
        }
      }
    }
  },
  38589: (BB, OB, GB) => {
    function YB() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (BB => {
        const OB = 16 * Math.random() | 0;
        return ("x" === BB ? OB : 3 & OB | 8).toString(16)
      }))
    }
    GB.d(OB, {
      e: () => YB
    })
  },
  39366: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB
    });
    class YB {
      static _CheckLimit(BB, OB) {
        let GB = YB._LogLimitOutputs[BB];
        return GB ? GB.current++ : (GB = {
          limit: OB,
          current: 1
        }, YB._LogLimitOutputs[BB] = GB), GB.current <= GB.limit
      }
      static _GenerateLimitMessage(BB) {
        let OB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const GB = YB._LogLimitOutputs[BB];
        if (!GB || !YB.MessageLimitReached) return;
        const DB = this._Levels[OB];
        GB.current === GB.limit && YB[DB.name](YB.MessageLimitReached.replace(/%LIMIT%/g, "" + GB.limit).replace(/%TYPE%/g, DB.name ?? ""))
      }
      static _AddLogEntry(BB) {
        YB._LogCache = BB + YB._LogCache, YB.OnNewCacheEntry && YB.OnNewCacheEntry(BB)
      }
      static _FormatMessage(BB) {
        const OB = BB => BB < 10 ? "0" + BB : "" + BB,
          GB = new Date;
        return "[" + OB(GB.getHours()) + ":" + OB(GB.getMinutes()) + ":" + OB(GB.getSeconds()) + "]: " + BB
      }
      static _LogDisabled(BB, OB) {}
      static _LogEnabled() {
        let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          OB = arguments.length > 1 ? arguments[1] : void 0,
          GB = arguments.length > 2 ? arguments[2] : void 0;
        const DB = Array.isArray(OB) ? OB[0] : OB;
        if (void 0 !== GB && !YB._CheckLimit(DB, GB)) return;
        const QB = YB._FormatMessage(DB),
          oB = this._Levels[BB],
          jB = Array.isArray(OB) ? OB.slice(1) : [];
        oB.logFunc && oB.logFunc("BJS - " + QB, ...jB);
        const yB = `<div style='color:${oB.color}'>${QB}</div><br>`;
        YB._AddLogEntry(yB), YB._GenerateLimitMessage(DB, BB)
      }
      static get LogCache() {
        return YB._LogCache
      }
      static ClearLogCache() {
        YB._LogCache = "", YB._LogLimitOutputs = {}, YB.errorsCount = 0
      }
      static set LogLevels(BB) {
        YB.Log = YB._LogDisabled, YB.Warn = YB._LogDisabled, YB.Error = YB._LogDisabled;
        const OB = [YB.MessageLogLevel, YB.WarningLogLevel, YB.ErrorLogLevel];
        for (const GB of OB)
          if ((BB & GB) === GB) {
            const BB = this._Levels[GB];
            YB[BB.name] = YB._LogEnabled.bind(YB, GB)
          }
      }
    }
    YB.NoneLogLevel = 0, YB.MessageLogLevel = 1, YB.WarningLogLevel = 2, YB.ErrorLogLevel = 4, YB.AllLogLevel = 7, YB.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", YB._LogCache = "", YB._LogLimitOutputs = {}, YB._Levels = [{}, {
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
    }], YB.errorsCount = 0, YB.Log = YB._LogEnabled.bind(YB, YB.MessageLogLevel), YB.Warn = YB._LogEnabled.bind(YB, YB.WarningLogLevel), YB.Error = YB._LogEnabled.bind(YB, YB.ErrorLogLevel)
  },
  41089: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.e
    });
    var YB = GB(41091);
    (0, YB.b)()
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);