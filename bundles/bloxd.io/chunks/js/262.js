export const id = 262;
export const ids = [262, 268, 273];
export const modules = {
  42154: (dd, Od, md) => {
    md.d(Od, {
      b: () => Xd,
      f: () => Kd
    });
    var Wd = md(40262),
      Fd = md(41948),
      Rd = md(42126),
      Xd = {};
    class Kd {
      constructor(dd) {
        this.attachedToElement = !1, this.attached = {}, this.camera = dd, this.checkInputs = () => {}
      }
      add(dd) {
        const Od = dd.getSimpleName();
        this.attached[Od] ? Wd.c.Warn("camera input of type " + Od + " already exists on camera") : (this.attached[Od] = dd, dd.camera = this.camera, dd.checkInputs && (this.checkInputs = this._addCheckInputs(dd.checkInputs.bind(dd))), this.attachedToElement && dd.attachControl(this.noPreventDefault))
      }
      remove(dd) {
        for (const Od in this.attached) {
          const md = this.attached[Od];
          if (md === dd) return md.detachControl(), md.camera = null, delete this.attached[Od], void this.rebuildInputCheck()
        }
      }
      removeByType(dd) {
        for (const Od in this.attached) {
          const md = this.attached[Od];
          md.getClassName() === dd && (md.detachControl(), md.camera = null, delete this.attached[Od], this.rebuildInputCheck())
        }
      }
      _addCheckInputs(dd) {
        const Od = this.checkInputs;
        return () => {
          Od(), dd()
        }
      }
      attachInput(dd) {
        this.attachedToElement && dd.attachControl(this.noPreventDefault)
      }
      attachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (!this.attachedToElement) {
          dd = !Rd.e.ForceAttachControlToAlwaysPreventDefault && dd, this.attachedToElement = !0, this.noPreventDefault = dd;
          for (const Od in this.attached) this.attached[Od].attachControl(dd)
        }
      }
      detachElement() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        for (const Od in this.attached) this.attached[Od].detachControl(), dd && (this.attached[Od].camera = null);
        this.attachedToElement = !1
      }
      rebuildInputCheck() {
        this.checkInputs = () => {};
        for (const dd in this.attached) {
          const Od = this.attached[dd];
          Od.checkInputs && (this.checkInputs = this._addCheckInputs(Od.checkInputs.bind(Od)))
        }
      }
      clear() {
        this.attachedToElement && this.detachElement(!0), this.attached = {}, this.attachedToElement = !1, this.checkInputs = () => {}
      }
      serialize(dd) {
        const Od = {};
        for (const md in this.attached) {
          const dd = this.attached[md],
            Wd = Fd.b.Serialize(dd);
          Od[dd.getClassName()] = Wd
        }
        dd.inputsmgr = Od
      }
      parse(dd) {
        const Od = dd.inputsmgr;
        if (Od) {
          this.clear();
          for (const dd in Od) {
            const md = Xd[dd];
            if (md) {
              const Wd = Od[dd],
                Rd = Fd.b.Parse((() => new md), Wd, null);
              this.add(Rd)
            }
          }
        } else
          for (const md in this.attached) {
            const Od = Xd[this.attached[md].getClassName()];
            if (Od) {
              const Wd = Fd.b.Parse((() => new Od), dd, null);
              this.remove(this.attached[md]), this.add(Wd)
            }
          }
      }
    }
  },
  42162: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd.e
    });
    var Wd = md(42168);
    (0, Wd.f)()
  },
  42168: (dd, Od, md) => {
    md.d(Od, {
      e: () => Qd,
      f: () => od
    });
    var Wd = md(41922),
      Fd = md(41931),
      Rd = md(38636),
      Xd = md(38741),
      Kd = md(42172),
      hd = md(42132),
      vd = md(38669);
    let Qd = (() => {
        var dd;
        let Od, md, hd = Kd.c,
          vd = [],
          Qd = [],
          td = [],
          od = [];
        return dd = class extends hd {
          constructor(dd, Od, md, Fd) {
            super(dd, md, Fd), this.groundColor = (0, Wd.k)(this, vd, new Xd.d(0, 0, 0)), this.direction = ((0, Wd.k)(this, Qd), (0, Wd.k)(this, td, void 0)), (0, Wd.k)(this, od), this.direction = Od || Rd.j.Up()
          }
          _buildUniformLayout() {
            this._uniformBuffer.addUniform("vLightData", 4), this._uniformBuffer.addUniform("vLightDiffuse", 4), this._uniformBuffer.addUniform("vLightSpecular", 4), this._uniformBuffer.addUniform("vLightGround", 3), this._uniformBuffer.addUniform("shadowsInfo", 3), this._uniformBuffer.addUniform("depthValues", 2), this._uniformBuffer.create()
          }
          getClassName() {
            return "HemisphericLight"
          }
          setDirectionToTarget(dd) {
            return this.direction = Rd.j.Normalize(dd.subtract(Rd.j.Zero())), this.direction
          }
          getShadowGenerator() {
            return null
          }
          transferToEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return this._uniformBuffer.updateFloat4("vLightData", md.x, md.y, md.z, 0, Od), this._uniformBuffer.updateColor3("vLightGround", this.groundColor.scale(this.intensity), Od), this
          }
          transferToNodeMaterialEffect(dd, Od) {
            const md = Rd.j.Normalize(this.direction);
            return dd.setFloat3(Od, md.x, md.y, md.z), this
          }
          computeWorldMatrix() {
            return this._worldMatrix || (this._worldMatrix = Rd.d.Identity()), this._worldMatrix
          }
          getTypeID() {
            return Kd.c.LIGHTTYPEID_HEMISPHERICLIGHT
          }
          prepareLightSpecificDefines(dd, Od) {
            dd["HEMILIGHT" + Od] = !0
          }
        }, (() => {
          const Rd = "function" === typeof Symbol && Symbol.metadata ? Object.create(hd[Symbol.metadata] ?? null) : void 0;
          Od = [(0, Fd.m)()], md = [(0, Fd.B)()], (0, Wd.h)(null, null, Od, {
            kind: "field",
            name: "groundColor",
            static: !1,
            private: !1,
            access: {
              has: dd => "groundColor" in dd,
              get: dd => dd.groundColor,
              set: (dd, Od) => {
                dd.groundColor = Od
              }
            },
            metadata: Rd
          }, vd, Qd), (0, Wd.h)(null, null, md, {
            kind: "field",
            name: "direction",
            static: !1,
            private: !1,
            access: {
              has: dd => "direction" in dd,
              get: dd => dd.direction,
              set: (dd, Od) => {
                dd.direction = Od
              }
            },
            metadata: Rd
          }, td, od), Rd && Object.defineProperty(dd, Symbol.metadata, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: Rd
          })
        })(), dd
      })(),
      td = !1;

    function od() {
      td || (td = !0, hd.b.AddNodeConstructor("Light_Type_3", ((dd, Od) => () => new Qd(dd, Rd.j.Zero(), Od))), (0, vd.e)("BABYLON.HemisphericLight", Qd))
    }
  },
  38736: (dd, Od, md) => {
    md.d(Od, {
      Color3: () => Wd.d,
      b: () => Wd.f
    });
    var Wd = md(38741);
    (0, Wd.g)()
  },
  39297: (dd, Od, md) => {
    md.d(Od, {
      e: () => Fd
    });
    var Wd = md(39306);
    class Fd {
      static GetPlanes(dd) {
        const Od = [];
        for (let md = 0; md < 6; md++) Od.push(new Wd.d(0, 0, 0, 0));
        return Fd.GetPlanesToRef(dd, Od), Od
      }
      static GetNearPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[2], Od.normal.y = md[7] + md[6], Od.normal.z = md[11] + md[10], Od.d = md[15] + md[14], Od.normalize()
      }
      static GetFarPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[2], Od.normal.y = md[7] - md[6], Od.normal.z = md[11] - md[10], Od.d = md[15] - md[14], Od.normalize()
      }
      static GetLeftPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[0], Od.normal.y = md[7] + md[4], Od.normal.z = md[11] + md[8], Od.d = md[15] + md[12], Od.normalize()
      }
      static GetRightPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[0], Od.normal.y = md[7] - md[4], Od.normal.z = md[11] - md[8], Od.d = md[15] - md[12], Od.normalize()
      }
      static GetTopPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] - md[1], Od.normal.y = md[7] - md[5], Od.normal.z = md[11] - md[9], Od.d = md[15] - md[13], Od.normalize()
      }
      static GetBottomPlaneToRef(dd, Od) {
        const md = dd.m;
        Od.normal.x = md[3] + md[1], Od.normal.y = md[7] + md[5], Od.normal.z = md[11] + md[9], Od.d = md[15] + md[13], Od.normalize()
      }
      static GetPlanesToRef(dd, Od) {
        Fd.GetNearPlaneToRef(dd, Od[0]), Fd.GetFarPlaneToRef(dd, Od[1]), Fd.GetLeftPlaneToRef(dd, Od[2]), Fd.GetRightPlaneToRef(dd, Od[3]), Fd.GetTopPlaneToRef(dd, Od[4]), Fd.GetBottomPlaneToRef(dd, Od[5])
      }
      static IsPointInFrustum(dd, Od) {
        for (let md = 0; md < 6; md++)
          if (Od[md].dotCoordinate(dd) < 0) return !1;
        return !0
      }
    }
  },
  39306: (dd, Od, md) => {
    md.d(Od, {
      d: () => Fd
    });
    var Wd = md(38636);
    class Fd {
      constructor(dd, Od, md, Fd) {
        this.normal = new Wd.j(dd, Od, md), this.d = Fd
      }
      RRd() {
        return [this.normal.x, this.normal.y, this.normal.z, this.d]
      }
      clone() {
        return new Fd(this.normal.x, this.normal.y, this.normal.z, this.d)
      }
      getClassName() {
        return "Plane"
      }
      getHashCode() {
        let dd = this.normal.getHashCode();
        return dd = 397 * dd ^ this.d, dd
      }
      normalize() {
        const dd = Math.sqrt(this.normal.x * this.normal.x + this.normal.y * this.normal.y + this.normal.z * this.normal.z);
        let Od = 0;
        return 0 !== dd && (Od = 1 / dd), this.normal.x *= Od, this.normal.y *= Od, this.normal.z *= Od, this.d *= Od, this
      }
      transform(dd) {
        const Od = Fd._TmpMatrix;
        dd.invertToRef(Od);
        const md = Od.m,
          Wd = this.normal.x,
          Rd = this.normal.y,
          Xd = this.normal.z,
          Kd = this.d,
          hd = Wd * md[0] + Rd * md[1] + Xd * md[2] + Kd * md[3],
          vd = Wd * md[4] + Rd * md[5] + Xd * md[6] + Kd * md[7],
          Qd = Wd * md[8] + Rd * md[9] + Xd * md[10] + Kd * md[11],
          td = Wd * md[12] + Rd * md[13] + Xd * md[14] + Kd * md[15];
        return new Fd(hd, vd, Qd, td)
      }
      dotCoordinate(dd) {
        return this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z + this.d
      }
      copyFromPoints(dd, Od, md) {
        const Wd = Od.x - dd.x,
          Fd = Od.y - dd.y,
          Rd = Od.z - dd.z,
          Xd = md.x - dd.x,
          Kd = md.y - dd.y,
          hd = md.z - dd.z,
          vd = Fd * hd - Rd * Kd,
          Qd = Rd * Xd - Wd * hd,
          td = Wd * Kd - Fd * Xd,
          od = Math.sqrt(vd * vd + Qd * Qd + td * td);
        let Nd;
        return Nd = 0 !== od ? 1 / od : 0, this.normal.x = vd * Nd, this.normal.y = Qd * Nd, this.normal.z = td * Nd, this.d = -(this.normal.x * dd.x + this.normal.y * dd.y + this.normal.z * dd.z), this
      }
      isFrontFacingTo(dd, Od) {
        return Wd.j.Dot(this.normal, dd) <= Od
      }
      signedDistanceTo(dd) {
        return Wd.j.Dot(dd, this.normal) + this.d
      }
      static FromArray(dd) {
        return new Fd(dd[0], dd[1], dd[2], dd[3])
      }
      static FromPoints(dd, Od, md) {
        const Wd = new Fd(0, 0, 0, 0);
        return Wd.copyFromPoints(dd, Od, md), Wd
      }
      static FromPositionAndNormal(dd, Od) {
        const md = new Fd(0, 0, 0, 0);
        return this.FromPositionAndNormalToRef(dd, Od, md)
      }
      static FromPositionAndNormalToRef(dd, Od, md) {
        return md.normal.Bx(Od), md.normal.normalize(), md.d = -dd.dot(md.normal), md
      }
      static SignedDistanceToPlaneFromPositionAndNormal(dd, Od, md) {
        const Fd = -(Od.x * dd.x + Od.y * dd.y + Od.z * dd.z);
        return Wd.j.Dot(md, Od) + Fd
      }
    }
    Fd._TmpMatrix = Wd.d.Identity()
  },
  38627: (dd, Od, md) => {
    md.r(Od), md.d(Od, {
      Matrix: () => Wd.d,
      Quaternion: () => Wd.e,
      RegisterMathVector: () => Wd.f,
      TmpVectors: () => Wd.h,
      Vector2: () => Wd.i,
      Cq: () => Wd.j,
      Vector4: () => Wd.k
    });
    var Wd = md(38636);
    (0, Wd.f)()
  },
  39642: (dd, Od, md) => {
    md.d(Od, {
      b: () => Wd
    });
    class Wd {
      constructor(dd, Od, md, Wd) {
        this.x = dd, this.y = Od, this.width = md, this.height = Wd
      }
      toGlobal(dd, Od) {
        return new Wd(this.x * dd, this.y * Od, this.width * dd, this.height * Od)
      }
      toGlobalToRef(dd, Od, md) {
        return md.x = this.x * dd, md.y = this.y * Od, md.width = this.width * dd, md.height = this.height * Od, this
      }
      clone() {
        return new Wd(this.x, this.y, this.width, this.height)
      }
    }
  },
  42321: (dd, Od, md) => {
    md.d(Od, {
      e: () => vd
    });
    var Wd = md(38636),
      Fd = md(38741),
      Rd = md(42330),
      Xd = md(42339),
      Kd = md(42358);

    function hd(dd) {
      let Od = [0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7, 8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15, 16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23];
      const md = [0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0],
        Rd = [],
        hd = dd.width || dd.size || 1,
        vd = dd.height || dd.size || 1,
        Qd = dd.depth || dd.size || 1,
        td = dd.wrap || !1;
      let od = void 0 === dd.topBaseAt ? 1 : dd.topBaseAt,
        Nd = void 0 === dd.bottomBaseAt ? 0 : dd.bottomBaseAt;
      od = (od + 4) % 4, Nd = (Nd + 4) % 4;
      let qd = [2, 0, 3, 1][od],
        Hd = [2, 0, 1, 3][Nd],
        yd = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1];
      if (td) {
        Od = [2, 3, 0, 2, 0, 1, 4, 5, 6, 4, 6, 7, 9, 10, 11, 9, 11, 8, 12, 14, 15, 12, 13, 14], yd = [-1, 1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, 1, 1, 1, -1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1, 1, 1, -1, -1, 1, -1, -1, -1];
        let dd = [
            [1, 1, 1],
            [-1, 1, 1],
            [-1, 1, -1],
            [1, 1, -1]
          ],
          md = [
            [-1, -1, 1],
            [1, -1, 1],
            [1, -1, -1],
            [-1, -1, -1]
          ];
        const Wd = [17, 18, 19, 16],
          Fd = [22, 23, 20, 21];
        for (; qd > 0;) dd.unshift(dd.pop()), Wd.unshift(Wd.pop()), qd--;
        for (; Hd > 0;) md.unshift(md.pop()), Fd.unshift(Fd.pop()), Hd--;
        dd = dd.flat(), md = md.flat(), yd = yd.concat(dd).concat(md), Od.push(Wd[0], Wd[2], Wd[3], Wd[0], Wd[1], Wd[2]), Od.push(Fd[0], Fd[2], Fd[3], Fd[0], Fd[1], Fd[2])
      }
      const bd = [hd / 2, vd / 2, Qd / 2],
        Td = yd.reduce(((dd, Od, md) => dd.concat(Od * bd[md % 3])), []),
        pd = 0 === dd.sideOrientation ? 0 : dd.sideOrientation || Xd.c.DEFAULTSIDE,
        Yd = dd.faceUV || new Array(6),
        gd = dd.faceColors,
        wd = [];
      for (let Xd = 0; Xd < 6; Xd++) void 0 === Yd[Xd] && (Yd[Xd] = new Wd.k(0, 0, 1, 1)), gd && void 0 === gd[Xd] && (gd[Xd] = new Fd.f(1, 1, 1, 1));
      for (let Wd = 0; Wd < 6; Wd++)
        if (Rd.push(Yd[Wd].z, Kd.e ? 1 - Yd[Wd].w : Yd[Wd].w), Rd.push(Yd[Wd].x, Kd.e ? 1 - Yd[Wd].w : Yd[Wd].w), Rd.push(Yd[Wd].x, Kd.e ? 1 - Yd[Wd].y : Yd[Wd].y), Rd.push(Yd[Wd].z, Kd.e ? 1 - Yd[Wd].y : Yd[Wd].y), gd)
          for (let dd = 0; dd < 4; dd++) wd.push(gd[Wd].r, gd[Wd].g, gd[Wd].b, gd[Wd].a);
      Xd.c._ComputeSides(pd, Td, Od, md, Rd, dd.frontUVs, dd.backUVs);
      const Ed = new Xd.c;
      if (Ed.indices = Od, Ed.positions = Td, Ed.normals = md, Ed.uvs = Rd, gd) {
        const dd = pd === Xd.c.DOUBLESIDE ? wd.concat(wd) : wd;
        Ed.colors = dd
      }
      return Ed
    }

    function vd(dd) {
      let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Wd = new Rd.d(dd, md);
      Od.sideOrientation = Rd.d._GetDefaultSideOrientation(Od.sideOrientation), Wd._originalBuilderSideOrientation = Od.sideOrientation;
      return hd(Od).applyToMesh(Wd, Od.updatable), Wd
    }
    let Qd = !1;
    Qd || (Qd = !0, Xd.c.CreateBox = hd, Rd.d.CreateBox = function(dd, Od) {
      return vd(dd, {
        size: Od,
        sideOrientation: arguments.length > 4 ? arguments[4] : void 0,
        updatable: arguments.length > 3 ? arguments[3] : void 0
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    })
  },
  42384: (dd, Od, md) => {
    md.d(Od, {
      e: () => td
    });
    var Wd = md(38636),
      Fd = md(42330),
      Rd = md(42339),
      Xd = md(42393),
      Kd = md(42075),
      hd = md(40262);

    function vd(dd) {
      const Od = [],
        md = [],
        Wd = dd.lines,
        Fd = dd.colors,
        Xd = [];
      let Kd = 0;
      for (let Rd = 0; Rd < Wd.length; Rd++) {
        const dd = Wd[Rd];
        for (let Wd = 0; Wd < dd.length; Wd++) {
          const {
            x: hd,
            y: vd,
            z: Qd
          } = dd[Wd];
          if (md.push(hd, vd, Qd), Fd) {
            const dd = Fd[Rd],
              {
                r: Od,
                g: md,
                b: Kd,
                a: hd
              } = dd[Wd];
            Xd.push(Od, md, Kd, hd)
          }
          Wd > 0 && (Od.push(Kd - 1), Od.push(Kd)), Kd++
        }
      }
      const hd = new Rd.c;
      return hd.indices = Od, hd.positions = md, Fd && (hd.colors = Xd), hd
    }

    function Qd(dd) {
      const Od = dd.dashSize || 3,
        md = dd.gapSize || 1,
        Fd = dd.dashNb || 200,
        Xd = dd.points,
        Kd = [],
        hd = [],
        vd = Wd.j.Zero();
      let Qd, td, od, Nd = 0,
        qd = 0;
      for (od = 0; od < Xd.length - 1; od++) Xd[od + 1].subtractToRef(Xd[od], vd), Nd += vd.length();
      const Hd = Nd / Fd,
        yd = Od * Hd / (Od + md);
      for (od = 0; od < Xd.length - 1; od++) {
        Xd[od + 1].subtractToRef(Xd[od], vd), Qd = Math.floor(vd.length() / Hd), vd.normalize();
        for (let dd = 0; dd < Qd; dd++) td = Hd * dd, Kd.push(Xd[od].x + td * vd.x, Xd[od].y + td * vd.y, Xd[od].z + td * vd.z), Kd.push(Xd[od].x + (td + yd) * vd.x, Xd[od].y + (td + yd) * vd.y, Xd[od].z + (td + yd) * vd.z), hd.push(qd, qd + 1), qd += 2
      }
      const bd = new Rd.c;
      return bd.positions = Kd, bd.indices = hd, bd
    }

    function td(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Wd = Od.instance,
        Fd = Od.lines,
        Rd = Od.colors;
      if (Wd) {
        const dd = Wd.getVerticesData(Kd.j.PositionKind);
        let Od, md;
        Rd && (Od = Wd.getVerticesData(Kd.j.ColorKind));
        let Xd = 0,
          hd = 0;
        for (let Wd = 0; Wd < Fd.length; Wd++) {
          const Kd = Fd[Wd];
          for (let Fd = 0; Fd < Kd.length; Fd++) dd[Xd] = Kd[Fd].x, dd[Xd + 1] = Kd[Fd].y, dd[Xd + 2] = Kd[Fd].z, Rd && Od && (md = Rd[Wd], Od[hd] = md[Fd].r, Od[hd + 1] = md[Fd].g, Od[hd + 2] = md[Fd].b, Od[hd + 3] = md[Fd].a, hd += 4), Xd += 3
        }
        return Wd.updateVerticesData(Kd.j.PositionKind, dd, !1, !1), Rd && Od && Wd.updateVerticesData(Kd.j.ColorKind, Od, !1, !1), Wd.refreshBoundingInfo(), Wd
      }
      const hd = !!Rd,
        Qd = new Xd.e(dd, md, null, void 0, void 0, hd, Od.useVertexAlpha, Od.material);
      return vd(Od).applyToMesh(Qd, Od.updatable), Qd
    }

    function od(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Wd = Od.colors ? [Od.colors] : null;
      return td(dd, {
        lines: [Od.points],
        updatable: Od.updatable,
        instance: Od.instance,
        colors: Wd,
        useVertexAlpha: Od.useVertexAlpha,
        material: Od.material
      }, md)
    }

    function Nd(dd, Od) {
      let md = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
      const Rd = Od.points,
        Kd = Od.instance,
        vd = Od.gapSize || 1,
        td = Od.dashSize || 3;
      if (Kd) {
        const dd = dd => {
          const Od = Wd.j.Zero(),
            md = dd.length / 6;
          let Fd, Xd, hd, vd, Qd = 0,
            td = 0;
          for (hd = 0; hd < Rd.length - 1; hd++) Rd[hd + 1].subtractToRef(Rd[hd], Od), Qd += Od.length();
          const od = Qd / md,
            Nd = Kd._creationDataStorage.dashSize,
            qd = Nd * od / (Nd + Kd._creationDataStorage.gapSize);
          for (hd = 0; hd < Rd.length - 1; hd++)
            for (Rd[hd + 1].subtractToRef(Rd[hd], Od), Fd = Math.floor(Od.length() / od), Od.normalize(), vd = 0; vd < Fd && td < dd.length;) Xd = od * vd, dd[td] = Rd[hd].x + Xd * Od.x, dd[td + 1] = Rd[hd].y + Xd * Od.y, dd[td + 2] = Rd[hd].z + Xd * Od.z, dd[td + 3] = Rd[hd].x + (Xd + qd) * Od.x, dd[td + 4] = Rd[hd].y + (Xd + qd) * Od.y, dd[td + 5] = Rd[hd].z + (Xd + qd) * Od.z, td += 6, vd++;
          for (; td < dd.length;) dd[td] = Rd[hd].x, dd[td + 1] = Rd[hd].y, dd[td + 2] = Rd[hd].z, td += 3
        };
        return (Od.dashNb || Od.dashSize || Od.gapSize || Od.useVertexAlpha || Od.material) && hd.c.Warn("You have used an option other than points with the instance option. Please be aware that these other options will be ignored."), Kd.updateMeshPositions(dd, !1), Kd
      }
      const od = new Xd.e(dd, md, null, void 0, void 0, void 0, Od.useVertexAlpha, Od.material);
      return Qd(Od).applyToMesh(od, Od.updatable), od._creationDataStorage = new Fd.h, od._creationDataStorage.dashSize = td, od._creationDataStorage.gapSize = vd, od
    }
    let qd = !1;
    qd || (qd = !0, Rd.c.CreateLineSystem = vd, Rd.c.CreateDashedLines = Qd, Fd.d.CreateLines = function(dd, Od) {
      return od(dd, {
        points: Od,
        updatable: arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        instance: arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null
      }, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null)
    }, Fd.d.CreateDashedLines = function(dd, Od, md, Wd, Fd) {
      return Nd(dd, {
        points: Od,
        dashSize: md,
        gapSize: Wd,
        dashNb: Fd,
        updatable: arguments.length > 6 ? arguments[6] : void 0,
        instance: arguments.length > 7 ? arguments[7] : void 0
      }, arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null)
    })
  },
  42393: (dd, Od, md) => {
    md.d(Od, {
      e: () => od,
      f: () => Hd
    });
    var Wd, Fd, Rd = md(38741),
      Xd = md(42075),
      Kd = md(42330),
      hd = md(42402),
      vd = md(42208),
      Qd = md(42406),
      td = md(41817);
    class od extends Kd.d {
      _isShaderMaterial(dd) {
        return !!dd && "ShaderMaterial" === dd.getClassName()
      }
      constructor(dd) {
        let Od = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Wd = arguments.length > 5 ? arguments[5] : void 0,
          Fd = arguments.length > 6 ? arguments[6] : void 0,
          Kd = arguments.length > 7 ? arguments[7] : void 0;
        super(dd, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, Od, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Wd, this.useVertexAlpha = Fd, this.color = new Rd.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, Od && (this.color = Od.color.clone(), this.alpha = Od.alpha, this.useVertexColor = Od.useVertexColor, this.useVertexAlpha = Od.useVertexAlpha), this.intersectionThreshold = .1;
        const hd = {
          attributes: [Xd.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? hd.defines.push("#define VERTEXALPHA") : hd.needAlphaBlending = !1, this.useVertexColor ? (hd.defines.push("#define VERTEXCOLOR"), hd.attributes.push(Xd.j.ColorKind)) : (hd.uniforms.push("color"), this._color4 = new Rd.f), Kd) this.material = Kd;
        else {
          this.zV().Iq().isWebGPU && !od.ForceGLSL && (this._shaderLanguage = 1), hd.shaderLanguage = this._shaderLanguage, hd.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([md.e(663).then((() => md(54990))), md.e(669).then((() => md(54997)))]) : await Promise.all([md.e(645).then((() => md(55001))), md.e(651).then((() => md(55004)))])
          };
          const dd = new Qd.q("colorShader", this.zV(), "color", hd, !1);
          dd.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(dd)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(dd) {
        const Od = this.material;
        if (Od === dd) return;
        const md = Od && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(dd), md && Od?.dispose()
      }
      _setInternalMaterial(dd) {
        this._setMaterial(dd), this.material && (this.material.fillMode = vd.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(dd) {}
      _bind(dd, Od) {
        if (!this._geometry) return this;
        const md = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(Od, md) : this._geometry._bind(Od, md, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: dd,
            g: Od,
            b: md
          } = this.color;
          this._color4.set(dd, Od, md, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(dd, Od, md) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Wd = this.zV().Iq();
        return this._unIndexed ? Wd.drawArraysType(vd.b.LineListDrawMode, dd.verticesStart, dd.verticesCount, md) : Wd.drawElementsType(vd.b.LineListDrawMode, dd.indexStart, dd.indexCount, md), this
      }
      dispose(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || Od) && this.material?.dispose(!1, !1, !0), super.dispose(dd)
      }
      clone(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          md = arguments.length > 2 ? arguments[2] : void 0;
        if (Od && void 0 === Od._addToSceneRootNodes) {
          const md = Od;
          return md.source = this, new od(dd, this.zV(), md.parent, md.source, md.doNotCloneChildren)
        }
        return new od(dd, this.zV(), Od, this, md)
      }
      createInstance(dd) {
        const Od = new Nd(dd, this);
        if (this.xG) {
          Od.xG = {};
          for (const dd in this.xG) Od.xG[dd] = this.xG[dd]
        }
        return Od
      }
      serialize(dd) {
        super.serialize(dd), dd.color = this.color.RRd(), dd.alpha = this.alpha
      }
      static Parse(dd, Od) {
        const md = new od(dd.name, Od);
        return md.color = Rd.d.FromArray(dd.color), md.alpha = dd.alpha, md
      }
    }
    od.ForceGLSL = !1;
    class Nd extends hd.c {
      constructor(dd, Od) {
        super(dd, Od), this.intersectionThreshold = Od.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let qd = !1;

    function Hd() {
      qd || (qd = !0, Kd.d._LinesMeshParser = (dd, Od) => od.Parse(dd, Od))
    }(Wd = od.prototype).enableEdgesRendering ?? (Wd.enableEdgesRendering = (0, td.i)("LinesMesh", "enableEdgesRendering")), (Fd = Nd.prototype).enableEdgesRendering ?? (Fd.enableEdgesRendering = (0, td.i)("InstancedLinesMesh", "enableEdgesRendering"))
  },
  40260: (dd, Od, md) => {
    md.d(Od, {
      d: () => Rd
    });
    var Wd = md(40262);
    const Fd = (dd, Od, md) => dd ? dd.getClassName && "Mesh" === dd.getClassName() ? null : !dd.getClassName || "SubMesh" !== dd.getClassName() && "PhysicsBody" !== dd.getClassName() ? dd.clone ? dd.clone() : Array.isArray(dd) ? dd.slice() : md && "object" === typeof dd ? {
      ...dd
    } : null : dd.clone(Od) : null;
    class Rd {
      static DeepCopy(dd, Od, md, Rd) {
        let Xd = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        const Kd = function(dd) {
          const Od = [];
          do {
            const md = Object.getOwnPropertyNames(dd);
            for (const dd of md) - 1 === Od.indexOf(dd) && Od.push(dd)
          } while (dd = Object.getPrototypeOf(dd));
          return Od
        }(dd);
        for (const vd of Kd) {
          if ("_" === vd[0] && (!Rd || -1 === Rd.indexOf(vd))) continue;
          if (vd.endsWith("Observable")) continue;
          if (md && -1 !== md.indexOf(vd)) continue;
          const Kd = dd[vd],
            Qd = typeof Kd;
          if ("function" !== Qd) try {
            if ("object" === Qd)
              if (Kd instanceof Uint8Array) Od[vd] = Uint8Array.from(Kd);
              else if (Kd instanceof Array) {
              if (Od[vd] = [], Kd.length > 0)
                if ("object" == typeof Kd[0])
                  for (let dd = 0; dd < Kd.length; dd++) {
                    const md = Fd(Kd[dd], Od, Xd); - 1 === Od[vd].indexOf(md) && Od[vd].push(md)
                  } else Od[vd] = Kd.slice(0)
            } else Od[vd] = Fd(Kd, Od, Xd);
            else Od[vd] = Kd
          } catch (hd) {
            Wd.c.Warn(hd.message)
          }
        }
      }
    }
  },
  39461: (dd, Od, md) => {
    function Wd() {
      return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (dd => {
        const Od = 16 * Math.random() | 0;
        return ("x" === dd ? Od : 3 & Od | 8).toString(16)
      }))
    }
    md.d(Od, {
      b: () => Wd
    })
  },
  40262: (dd, Od, md) => {
    md.d(Od, {
      c: () => Wd
    });
    class Wd {
      static _CheckLimit(dd, Od) {
        let md = Wd._LogLimitOutputs[dd];
        return md ? md.current++ : (md = {
          limit: Od,
          current: 1
        }, Wd._LogLimitOutputs[dd] = md), md.current <= md.limit
      }
      static _GenerateLimitMessage(dd) {
        let Od = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
        const md = Wd._LogLimitOutputs[dd];
        if (!md || !Wd.MessageLimitReached) return;
        const Fd = this._Levels[Od];
        md.current === md.limit && Wd[Fd.name](Wd.MessageLimitReached.replace(/%LIMIT%/g, "" + md.limit).replace(/%TYPE%/g, Fd.name ?? ""))
      }
      static _AddLogEntry(dd) {
        Wd._LogCache = dd + Wd._LogCache, Wd.OnNewCacheEntry && Wd.OnNewCacheEntry(dd)
      }
      static _FormatMessage(dd) {
        const Od = dd => dd < 10 ? "0" + dd : "" + dd,
          md = new Date;
        return "[" + Od(md.getHours()) + ":" + Od(md.getMinutes()) + ":" + Od(md.getSeconds()) + "]: " + dd
      }
      static _LogDisabled(dd, Od) {}
      static _LogEnabled() {
        let dd = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
          Od = arguments.length > 1 ? arguments[1] : void 0,
          md = arguments.length > 2 ? arguments[2] : void 0;
        const Fd = Array.isArray(Od) ? Od[0] : Od;
        if (void 0 !== md && !Wd._CheckLimit(Fd, md)) return;
        const Rd = Wd._FormatMessage(Fd),
          Xd = this._Levels[dd],
          Kd = Array.isArray(Od) ? Od.slice(1) : [];
        Xd.logFunc && Xd.logFunc("BJS - " + Rd, ...Kd);
        const hd = `<div style='color:${Xd.color}'>${Rd}</div><br>`;
        Wd._AddLogEntry(hd), Wd._GenerateLimitMessage(Fd, dd)
      }
      static get LogCache() {
        return Wd._LogCache
      }
      static ClearLogCache() {
        Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd.errorsCount = 0
      }
      static set LogLevels(dd) {
        Wd.Log = Wd._LogDisabled, Wd.Warn = Wd._LogDisabled, Wd.Error = Wd._LogDisabled;
        const Od = [Wd.MessageLogLevel, Wd.WarningLogLevel, Wd.ErrorLogLevel];
        for (const md of Od)
          if ((dd & md) === md) {
            const dd = this._Levels[md];
            Wd[dd.name] = Wd._LogEnabled.bind(Wd, md)
          }
      }
    }
    Wd.NoneLogLevel = 0, Wd.MessageLogLevel = 1, Wd.WarningLogLevel = 2, Wd.ErrorLogLevel = 4, Wd.AllLogLevel = 7, Wd.MessageLimitReached = "Too many %TYPE%s (%LIMIT%), no more %TYPE%s will be reported for this message.", Wd._LogCache = "", Wd._LogLimitOutputs = {}, Wd._Levels = [{}, {
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
    }], Wd.errorsCount = 0, Wd.Log = Wd._LogEnabled.bind(Wd, Wd.MessageLogLevel), Wd.Warn = Wd._LogEnabled.bind(Wd, Wd.WarningLogLevel), Wd.Error = Wd._LogEnabled.bind(Wd, Wd.ErrorLogLevel)
  },
  42016: (dd, Od, md) => {
    md.d(Od, {
      e: () => Wd.c
    });
    var Wd = md(42020);
    (0, Wd.b)()
  }
};
Object.freeze(modules);
for (const dd in modules) Object.freeze(modules[dd]);