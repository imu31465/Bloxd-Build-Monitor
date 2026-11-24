export const id = 267;
export const ids = [267];
export const modules = {
  41851: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Op
    });
    class Op {}
    Op.AUTOSAMPLERSUFFIX = "Sampler", Op.DISABLEUA = "#define DISABLE_UNIFORMITY_ANALYSIS", Op.ALPHA_DISABLE = 0, Op.ALPHA_ADD = 1, Op.ALPHA_COMBINE = 2, Op.ALPHA_SUBTRACT = 3, Op.ALPHA_MULTIPLY = 4, Op.ALPHA_MAXIMIZED = 5, Op.ALPHA_ONEONE = 6, Op.ALPHA_PREMULTIPLIED = 7, Op.ALPHA_PREMULTIPLIED_PORTERDUFF = 8, Op.ALPHA_INTERPOLATE = 9, Op.ALPHA_SCREENMODE = 10, Op.ALPHA_ONEONE_ONEONE = 11, Op.ALPHA_ALPHATOCOLOR = 12, Op.ALPHA_REVERSEONEMINUS = 13, Op.ALPHA_SRC_DSTONEMINUSSRCALPHA = 14, Op.ALPHA_ONEONE_ONEZERO = 15, Op.ALPHA_EXCLUSION = 16, Op.ALPHA_LAYER_ACCUMULATE = 17, Op.ALPHA_MIN = 18, Op.ALPHA_MAX = 19, Op.ALPHA_DUAL_SRC0_ADD_SRC1xDST = 20, Op.ALPHA_REPLACE_COLOR = 21, Op.ALPHA_EQUATION_ADD = 0, Op.ALPHA_EQUATION_SUBSTRACT = 1, Op.ALPHA_EQUATION_REVERSE_SUBTRACT = 2, Op.ALPHA_EQUATION_MAX = 3, Op.ALPHA_EQUATION_MIN = 4, Op.ALPHA_EQUATION_DARKEN = 5, Op.DELAYLOADSTATE_NONE = 0, Op.DELAYLOADSTATE_LOADED = 1, Op.DELAYLOADSTATE_LOADING = 2, Op.DELAYLOADSTATE_NOTLOADED = 4, Op.NEVER = 512, Op.ALWAYS = 519, Op.LESS = 513, Op.EQUAL = 514, Op.LEQUAL = 515, Op.GREATER = 516, Op.GEQUAL = 518, Op.NOTEQUAL = 517, Op.KEEP = 7680, Op.ZERO = 0, Op.REPLACE = 7681, Op.INCR = 7682, Op.DECR = 7683, Op.INVERT = 5386, Op.INCR_WRAP = 34055, Op.DECR_WRAP = 34056, Op.TEXTURE_CLAMP_ADDRESSMODE = 0, Op.TEXTURE_WRAP_ADDRESSMODE = 1, Op.TEXTURE_MIRROR_ADDRESSMODE = 2, Op.TEXTURE_REPETITION_NONE = 0, Op.TEXTURE_REPETITION_NOISE_BLEND = 1, Op.TEXTURE_REPETITION_HEX_TILING = 2, Op.TEXTURE_REPETITION_TILE_RANDOMIZATION = 3, Op.TEXTURE_REPETITION_VORONOI_BOMBING = 4, Op.TEXTURE_CREATIONFLAG_STORAGE = 1, Op.TEXTUREFORMAT_ALPHA = 0, Op.TEXTUREFORMAT_LUMINANCE = 1, Op.TEXTUREFORMAT_LUMINANCE_ALPHA = 2, Op.TEXTUREFORMAT_RGB = 4, Op.TEXTUREFORMAT_RGBA = 5, Op.TEXTUREFORMAT_RED = 6, Op.TEXTUREFORMAT_R = 6, Op.TEXTUREFORMAT_R16_UNORM = 33322, Op.TEXTUREFORMAT_RG16_UNORM = 33324, Op.TEXTUREFORMAT_RGB16_UNORM = 32852, Op.TEXTUREFORMAT_RGBA16_UNORM = 32859, Op.TEXTUREFORMAT_R16_SNORM = 36760, Op.TEXTUREFORMAT_RG16_SNORM = 36761, Op.TEXTUREFORMAT_RGB16_SNORM = 36762, Op.TEXTUREFORMAT_RGBA16_SNORM = 36763, Op.TEXTUREFORMAT_RG = 7, Op.TEXTUREFORMAT_RED_INTEGER = 8, Op.TEXTUREFORMAT_R_INTEGER = 8, Op.TEXTUREFORMAT_RG_INTEGER = 9, Op.TEXTUREFORMAT_RGB_INTEGER = 10, Op.TEXTUREFORMAT_RGBA_INTEGER = 11, Op.TEXTUREFORMAT_BGRA = 12, Op.TEXTUREFORMAT_DEPTH24_STENCIL8 = 13, Op.TEXTUREFORMAT_DEPTH32_FLOAT = 14, Op.TEXTUREFORMAT_DEPTH16 = 15, Op.TEXTUREFORMAT_DEPTH24 = 16, Op.TEXTUREFORMAT_DEPTH24UNORM_STENCIL8 = 17, Op.TEXTUREFORMAT_DEPTH32FLOAT_STENCIL8 = 18, Op.TEXTUREFORMAT_STENCIL8 = 19, Op.TEXTUREFORMAT_UNDEFINED = 4294967295, Op.TEXTUREFORMAT_COMPRESSED_RGBA_BPTC_UNORM = 36492, Op.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_BPTC_UNORM = 36493, Op.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT = 36495, Op.TEXTUREFORMAT_COMPRESSED_RGB_BPTC_SIGNED_FLOAT = 36494, Op.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT5 = 33779, Op.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919, Op.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT3 = 33778, Op.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918, Op.TEXTUREFORMAT_COMPRESSED_RGBA_S3TC_DXT1 = 33777, Op.TEXTUREFORMAT_COMPRESSED_RGB_S3TC_DXT1 = 33776, Op.TEXTUREFORMAT_COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917, Op.TEXTUREFORMAT_COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_4x4 = 37808, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x4 = 37809, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_5x5 = 37810, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x5 = 37811, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_6x6 = 37812, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x5 = 37813, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x6 = 37814, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_8x8 = 37815, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x5 = 37816, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x6 = 37817, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x8 = 37818, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_10x10 = 37819, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x10 = 37820, Op.TEXTUREFORMAT_COMPRESSED_RGBA_ASTC_12x12 = 37821, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR = 37840, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR = 37841, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR = 37842, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR = 37843, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR = 37844, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR = 37845, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR = 37846, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR = 37847, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR = 37848, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR = 37849, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR = 37850, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR = 37851, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR = 37852, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR = 37853, Op.TEXTUREFORMAT_COMPRESSED_RGB_ETC1_WEBGL = 36196, Op.TEXTUREFORMAT_COMPRESSED_RGB8_ETC2 = 37492, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ETC2 = 37493, Op.TEXTUREFORMAT_COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495, Op.TEXTUREFORMAT_COMPRESSED_RGBA8_ETC2_EAC = 37496, Op.TEXTUREFORMAT_COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497, Op.TEXTURETYPE_UNSIGNED_BYTE = 0, Op.TEXTURETYPE_UNSIGNED_INT = 0, Op.TEXTURETYPE_FLOAT = 1, Op.TEXTURETYPE_HALF_FLOAT = 2, Op.TEXTURETYPE_BYTE = 3, Op.TEXTURETYPE_SHORT = 4, Op.TEXTURETYPE_UNSIGNED_SHORT = 5, Op.TEXTURETYPE_INT = 6, Op.TEXTURETYPE_UNSIGNED_INTEGER = 7, Op.TEXTURETYPE_UNSIGNED_SHORT_4_4_4_4 = 8, Op.TEXTURETYPE_UNSIGNED_SHORT_5_5_5_1 = 9, Op.TEXTURETYPE_UNSIGNED_SHORT_5_6_5 = 10, Op.TEXTURETYPE_UNSIGNED_INT_2_10_10_10_REV = 11, Op.TEXTURETYPE_UNSIGNED_INT_24_8 = 12, Op.TEXTURETYPE_UNSIGNED_INT_10F_11F_11F_REV = 13, Op.TEXTURETYPE_UNSIGNED_INT_5_9_9_9_REV = 14, Op.TEXTURETYPE_FLOAT_32_UNSIGNED_INT_24_8_REV = 15, Op.TEXTURETYPE_UNDEFINED = 16, Op.TEXTURE_2D = 3553, Op.TEXTURE_2D_ARRAY = 35866, Op.TEXTURE_CUBE_MAP = 34067, Op.TEXTURE_CUBE_MAP_ARRAY = 3735928559, Op.TEXTURE_3D = 32879, Op.TEXTURE_NEAREST_SAMPLINGMODE = 1, Op.TEXTURE_NEAREST_NEAREST = 1, Op.TEXTURE_BILINEAR_SAMPLINGMODE = 2, Op.TEXTURE_LINEAR_LINEAR = 2, Op.TEXTURE_TRILINEAR_SAMPLINGMODE = 3, Op.TEXTURE_LINEAR_LINEAR_MIPLINEAR = 3, Op.TEXTURE_NEAREST_NEAREST_MIPNEAREST = 4, Op.TEXTURE_NEAREST_LINEAR_MIPNEAREST = 5, Op.TEXTURE_NEAREST_LINEAR_MIPLINEAR = 6, Op.TEXTURE_NEAREST_LINEAR = 7, Op.TEXTURE_NEAREST_NEAREST_MIPLINEAR = 8, Op.TEXTURE_LINEAR_NEAREST_MIPNEAREST = 9, Op.TEXTURE_LINEAR_NEAREST_MIPLINEAR = 10, Op.TEXTURE_LINEAR_LINEAR_MIPNEAREST = 11, Op.TEXTURE_LINEAR_NEAREST = 12, Op.TEXTURE_EXPLICIT_MODE = 0, Op.TEXTURE_SPHERICAL_MODE = 1, Op.TEXTURE_PLANAR_MODE = 2, Op.TEXTURE_CUBIC_MODE = 3, Op.TEXTURE_PROJECTION_MODE = 4, Op.TEXTURE_SKYBOX_MODE = 5, Op.TEXTURE_INVCUBIC_MODE = 6, Op.TEXTURE_EQUIRECTANGULAR_MODE = 7, Op.TEXTURE_FIXED_EQUIRECTANGULAR_MODE = 8, Op.TEXTURE_FIXED_EQUIRECTANGULAR_MIRRORED_MODE = 9, Op.TEXTURE_FILTERING_QUALITY_OFFLINE = 4096, Op.TEXTURE_FILTERING_QUALITY_HIGH = 64, Op.TEXTURE_FILTERING_QUALITY_MEDIUM = 16, Op.TEXTURE_FILTERING_QUALITY_LOW = 8, Op.SCALEMODE_FLOOR = 1, Op.SCALEMODE_NEAREST = 2, Op.SCALEMODE_CEILING = 3, Op.MATERIAL_TextureDirtyFlag = 1, Op.MATERIAL_LightDirtyFlag = 2, Op.MATERIAL_FresnelDirtyFlag = 4, Op.MATERIAL_AttributesDirtyFlag = 8, Op.MATERIAL_MiscDirtyFlag = 16, Op.MATERIAL_PrePassDirtyFlag = 32, Op.MATERIAL_ImageProcessingDirtyFlag = 64, Op.MATERIAL_AllDirtyFlag = 127, Op.MATERIAL_TriangleFillMode = 0, Op.MATERIAL_WireFrameFillMode = 1, Op.MATERIAL_PointFillMode = 2, Op.MATERIAL_PointListDrawMode = 3, Op.MATERIAL_LineListDrawMode = 4, Op.MATERIAL_LineLoopDrawMode = 5, Op.MATERIAL_LineStripDrawMode = 6, Op.MATERIAL_TriangleStripDrawMode = 7, Op.MATERIAL_TriangleFanDrawMode = 8, Op.MATERIAL_ClockWiseSideOrientation = 0, Op.MATERIAL_CounterClockWiseSideOrientation = 1, Op.MATERIAL_DIFFUSE_MODEL_E_OREN_NAYAR = 0, Op.MATERIAL_DIFFUSE_MODEL_BURLEY = 1, Op.MATERIAL_DIFFUSE_MODEL_LAMBERT = 2, Op.MATERIAL_DIFFUSE_MODEL_LEGACY = 3, Op.MATERIAL_DIELECTRIC_SPECULAR_MODEL_GLTF = 0, Op.MATERIAL_DIELECTRIC_SPECULAR_MODEL_OPENPBR = 1, Op.MATERIAL_CONDUCTOR_SPECULAR_MODEL_GLTF = 0, Op.MATERIAL_CONDUCTOR_SPECULAR_MODEL_OPENPBR = 1, Op.ACTION_NothingTrigger = 0, Op.ACTION_OnPickTrigger = 1, Op.ACTION_OnLeftPickTrigger = 2, Op.ACTION_OnRightPickTrigger = 3, Op.ACTION_OnCenterPickTrigger = 4, Op.ACTION_OnPickDownTrigger = 5, Op.ACTION_OnDoublePickTrigger = 6, Op.ACTION_OnPickUpTrigger = 7, Op.ACTION_OnPickOutTrigger = 16, Op.ACTION_OnLongPressTrigger = 8, Op.ACTION_OnPointerOverTrigger = 9, Op.ACTION_OnPointerOutTrigger = 10, Op.ACTION_OnEveryFrameTrigger = 11, Op.ACTION_OnIntersectionEnterTrigger = 12, Op.ACTION_OnIntersectionExitTrigger = 13, Op.ACTION_OnKeyDownTrigger = 14, Op.ACTION_OnKeyUpTrigger = 15, Op.PARTICLES_BILLBOARDMODE_Y = 2, Op.PARTICLES_BILLBOARDMODE_ALL = 7, Op.PARTICLES_BILLBOARDMODE_STRETCHED = 8, Op.PARTICLES_BILLBOARDMODE_STRETCHED_LOCAL = 9, Op.MESHES_CULLINGSTRATEGY_STANDARD = 0, Op.MESHES_CULLINGSTRATEGY_BOUNDINGSPHERE_ONLY = 1, Op.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION = 2, Op.MESHES_CULLINGSTRATEGY_OPTIMISTIC_INCLUSION_THEN_BSPHERE_ONLY = 3, Op.SCENELOADER_NO_LOGGING = 0, Op.SCENELOADER_MINIMAL_LOGGING = 1, Op.SCENELOADER_SUMMARY_LOGGING = 2, Op.SCENELOADER_DETAILED_LOGGING = 3, Op.PREPASS_IRRADIANCE_LEGACY_TEXTURE_TYPE = 0, Op.PREPASS_POSITION_TEXTURE_TYPE = 1, Op.PREPASS_VELOCITY_TEXTURE_TYPE = 2, Op.PREPASS_REFLECTIVITY_TEXTURE_TYPE = 3, Op.PREPASS_COLOR_TEXTURE_TYPE = 4, Op.PREPASS_DEPTH_TEXTURE_TYPE = 5, Op.PREPASS_NORMAL_TEXTURE_TYPE = 6, Op.PREPASS_ALBEDO_SQRT_TEXTURE_TYPE = 7, Op.PREPASS_WORLD_NORMAL_TEXTURE_TYPE = 8, Op.PREPASS_LOCAL_POSITION_TEXTURE_TYPE = 9, Op.PREPASS_SCREENSPACE_DEPTH_TEXTURE_TYPE = 10, Op.PREPASS_VELOCITY_LINEAR_TEXTURE_TYPE = 11, Op.PREPASS_ALBEDO_TEXTURE_TYPE = 12, Op.PREPASS_NORMALIZED_VIEW_DEPTH_TEXTURE_TYPE = 13, Op.PREPASS_IRRADIANCE_TEXTURE_TYPE = 14, Op.PREPASS_OBJECT_ID_TEXTURE_TYPE = 15, Op.PREPASS_MESH_BLEND_TAG_TEXTURE_TYPE = 16, Op.BUFFER_CREATIONFLAG_READ = 1, Op.BUFFER_CREATIONFLAG_WRITE = 2, Op.BUFFER_CREATIONFLAG_READWRITE = 3, Op.BUFFER_CREATIONFLAG_UNIFORM = 4, Op.BUFFER_CREATIONFLAG_VERTEX = 8, Op.BUFFER_CREATIONFLAG_INDEX = 16, Op.BUFFER_CREATIONFLAG_STORAGE = 32, Op.BUFFER_CREATIONFLAG_INDIRECT = 64, Op.RENDERPASS_MAIN = 0, Op.INPUT_ALT_KEY = 18, Op.INPUT_CTRL_KEY = 17, Op.INPUT_META_KEY1 = 91, Op.INPUT_META_KEY2 = 92, Op.INPUT_META_KEY3 = 93, Op.INPUT_SHIFT_KEY = 16, Op.SNAPSHOTRENDERING_STANDARD = 0, Op.SNAPSHOTRENDERING_FAST = 1, Op.PERSPECTIVE_CAMERA = 0, Op.ORTHOGRAPHIC_CAMERA = 1, Op.FOVMODE_VERTICAL_FIXED = 0, Op.FOVMODE_HORIZONTAL_FIXED = 1, Op.RIG_MODE_NONE = 0, Op.RIG_MODE_STEREOSCOPIC_ANAGLYPH = 10, Op.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_PARALLEL = 11, Op.RIG_MODE_STEREOSCOPIC_SIDEBYSIDE_CROSSEYED = 12, Op.RIG_MODE_STEREOSCOPIC_OVERUNDER = 13, Op.RIG_MODE_STEREOSCOPIC_INTERLACED = 14, Op.RIG_MODE_VR = 20, Op.RIG_MODE_CUSTOM = 22, Op.MAX_SUPPORTED_UV_SETS = 6, Op.GL_ALPHA_EQUATION_ADD = 32774, Op.GL_ALPHA_EQUATION_MIN = 32775, Op.GL_ALPHA_EQUATION_MAX = 32776, Op.GL_ALPHA_EQUATION_SUBTRACT = 32778, Op.GL_ALPHA_EQUATION_REVERSE_SUBTRACT = 32779, Op.GL_ALPHA_FUNCTION_SRC = 768, Op.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_COLOR = 769, Op.GL_ALPHA_FUNCTION_SRC_ALPHA = 770, Op.GL_ALPHA_FUNCTION_ONE_MINUS_SRC_ALPHA = 771, Op.GL_ALPHA_FUNCTION_DST_ALPHA = 772, Op.GL_ALPHA_FUNCTION_ONE_MINUS_DST_ALPHA = 773, Op.GL_ALPHA_FUNCTION_DST_COLOR = 774, Op.GL_ALPHA_FUNCTION_ONE_MINUS_DST_COLOR = 775, Op.GL_ALPHA_FUNCTION_SRC_ALPHA_SATURATED = 776, Op.GL_ALPHA_FUNCTION_CONSTANT_COLOR = 32769, Op.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_COLOR = 32770, Op.GL_ALPHA_FUNCTION_CONSTANT_ALPHA = 32771, Op.GL_ALPHA_FUNCTION_ONE_MINUS_CONSTANT_ALPHA = 32772, Op.GL_ALPHA_FUNCTION_SRC1_COLOR = 35065, Op.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_COLOR = 35066, Op.GL_ALPHA_FUNCTION_SRC1_ALPHA = 34185, Op.GL_ALPHA_FUNCTION_ONE_MINUS_SRC1_ALPHA = 35067, Op.SnippetUrl = "https://snippet.babylonjs.com", Op.FOGMODE_NONE = 0, Op.FOGMODE_EXP = 1, Op.FOGMODE_EXP2 = 2, Op.FOGMODE_LINEAR = 3, Op.BYTE = 5120, Op.UNSIGNED_BYTE = 5121, Op.SHORT = 5122, Op.UNSIGNED_SHORT = 5123, Op.INT = 5124, Op.UNSIGNED_INT = 5125, Op.FLOAT = 5126, Op.HALF_FLOAT = 5131, Op.PositionKind = "position", Op.NormalKind = "normal", Op.TangentKind = "tangent", Op.UVKind = "uv", Op.UV2Kind = "uv2", Op.UV3Kind = "uv3", Op.UV4Kind = "uv4", Op.UV5Kind = "uv5", Op.UV6Kind = "uv6", Op.ColorKind = "color", Op.ColorInstanceKind = "instanceColor", Op.MatricesIndicesKind = "matricesIndices", Op.MatricesWeightsKind = "matricesWeights", Op.MatricesIndicesExtraKind = "matricesIndicesExtra", Op.MatricesWeightsExtraKind = "matricesWeightsExtra", Op.ANIMATIONTYPE_FLOAT = 0, Op.ANIMATIONTYPE_VECTOR3 = 1, Op.ANIMATIONTYPE_QUATERNION = 2, Op.ANIMATIONTYPE_MATRIX = 3, Op.ANIMATIONTYPE_COLOR3 = 4, Op.ANIMATIONTYPE_COLOR4 = 7, Op.ANIMATIONTYPE_VECTOR2 = 5, Op.ANIMATIONTYPE_SIZE = 6, Op.ShadowMinZ = 0, Op.ShadowMaxZ = 1e4, Op.OUTLINELAYER_SAMPLING_TRIDIRECTIONAL = 0, Op.OUTLINELAYER_SAMPLING_OCTADIRECTIONAL = 1
  },
  41823: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp
    });
    var Op = cp(40203),
      op = cp(40210),
      Ip = cp(37320),
      Sp = cp(40451),
      xp = cp(40423);
    let Lp = (() => {
      var pp;
      let ip, cp, Lp, Yp, Dp = Sp.d,
        Ap = [];
      return pp = class extends Dp {
        constructor() {
          super(...arguments), this._position = (0, Op.l)(this, Ap), this._needProjectionMatrixCompute = !0, this._viewMatrix = Ip.b.Identity(), this._projectionMatrix = Ip.b.Identity()
        }
        _setPosition(pp) {
          this._position = pp
        }
        get position() {
          return this._position
        }
        set position(pp) {
          this._setPosition(pp)
        }
        _setDirection(pp) {
          this._direction = pp
        }
        get direction() {
          return this._direction
        }
        set direction(pp) {
          this._setDirection(pp)
        }
        get shadowMinZ() {
          return this._shadowMinZ
        }
        set shadowMinZ(pp) {
          this._shadowMinZ = pp, this.forceProjectionMatrixCompute()
        }
        get shadowMaxZ() {
          return this._shadowMaxZ
        }
        set shadowMaxZ(pp) {
          this._shadowMaxZ = pp, this.forceProjectionMatrixCompute()
        }
        computeTransformedInformation() {
          return !(!this.parent || !this.parent.getWorldMatrix) && (this.transformedPosition || (this.transformedPosition = Ip.o.Zero()), Ip.o.TransformCoordinatesToRef(this.position, this.parent.getWorldMatrix(), this.transformedPosition), this.direction && (this.transformedDirection || (this.transformedDirection = Ip.o.Zero()), Ip.o.TransformNormalToRef(this.direction, this.parent.getWorldMatrix(), this.transformedDirection)), !0)
        }
        getDepthScale() {
          return 50
        }
        getShadowDirection(pp) {
          return this.transformedDirection ? this.transformedDirection : this.direction
        }
        getAbsolutePosition() {
          return this.transformedPosition ? this.transformedPosition : this.position
        }
        setDirectionToTarget(pp) {
          return this.direction = Ip.o.Normalize(pp.subtract(this.position)), this.direction
        }
        getRotation() {
          this.direction.normalize();
          const pp = Ip.o.Cross(this.direction, xp.c.Y),
            ip = Ip.o.Cross(pp, this.direction);
          return Ip.o.RotationFromAxis(pp, ip, this.direction)
        }
        needCube() {
          return !1
        }
        needProjectionMatrixCompute() {
          return this._needProjectionMatrixCompute
        }
        forceProjectionMatrixCompute() {
          this._needProjectionMatrixCompute = !0
        }
        _initCache() {
          super._initCache(), this._cache.position = Ip.o.Zero()
        }
        _isSynchronized() {
          return !!this._cache.position.equals(this.position)
        }
        computeWorldMatrix(pp) {
          return !pp && this.isSynchronized() ? (this._currentRenderId = this.Gl().getRenderId(), this._worldMatrix) : (this._updateCache(), this._cache.position.rM(this.position), this._worldMatrix || (this._worldMatrix = Ip.b.Identity()), Ip.b.TranslationToRef(this.position.x, this.position.y, this.position.z, this._worldMatrix), this.parent && this.parent.getWorldMatrix && (this._worldMatrix.multiplyToRef(this.parent.getWorldMatrix(), this._worldMatrix), this._markSyncedWithParent()), this._worldMatrixDeterminantIsDirty = !0, this._worldMatrix)
        }
        getDepthMinZ(pp) {
          return void 0 !== this.shadowMinZ ? this.shadowMinZ : pp?.minZ || 0
        }
        getDepthMaxZ(pp) {
          return void 0 !== this.shadowMaxZ ? this.shadowMaxZ : pp?.maxZ || 1e4
        }
        setShadowProjectionMatrix(pp, ip, cp) {
          return this.customProjectionMatrixBuilder ? this.customProjectionMatrixBuilder(ip, cp, pp) : this._setDefaultShadowProjectionMatrix(pp, ip, cp), this
        }
        _syncParentEnabledState() {
          super._syncParentEnabledState(), this.parent && this.parent.getWorldMatrix || (this.transformedPosition = null, this.transformedDirection = null)
        }
        getViewMatrix(pp) {
          const ip = Ip.i.Zy[0];
          let cp = this.position;
          this.computeTransformedInformation() && (cp = this.transformedPosition), Ip.o.NormalizeToRef(this.getShadowDirection(pp), ip), 1 === Math.abs(Ip.o.Dot(ip, Ip.o.Up())) && (ip.z = 1e-13);
          const Op = Ip.i.Zy[1];
          return cp.addToRef(ip, Op), Ip.b.LookAtLHToRef(cp, Op, Ip.o.Up(), this._viewMatrix), this._viewMatrix
        }
        getProjectionMatrix(pp, ip) {
          return this.setShadowProjectionMatrix(this._projectionMatrix, pp ?? this._viewMatrix, ip ?? []), this._projectionMatrix
        }
      }, (() => {
        const Ip = "function" === typeof Symbol && Symbol.metadata ? Object.create(Dp[Symbol.metadata] ?? null) : void 0;
        ip = [(0, op.H)()], cp = [(0, op.H)()], Lp = [(0, op.K)()], Yp = [(0, op.K)()], (0, Op.j)(pp, null, ip, {
          kind: "getter",
          name: "position",
          static: !1,
          private: !1,
          access: {
            has: pp => "position" in pp,
            get: pp => pp.position
          },
          metadata: Ip
        }, null, Ap), (0, Op.j)(pp, null, cp, {
          kind: "getter",
          name: "direction",
          static: !1,
          private: !1,
          access: {
            has: pp => "direction" in pp,
            get: pp => pp.direction
          },
          metadata: Ip
        }, null, Ap), (0, Op.j)(pp, null, Lp, {
          kind: "getter",
          name: "shadowMinZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "shadowMinZ" in pp,
            get: pp => pp.shadowMinZ
          },
          metadata: Ip
        }, null, Ap), (0, Op.j)(pp, null, Yp, {
          kind: "getter",
          name: "shadowMaxZ",
          static: !1,
          private: !1,
          access: {
            has: pp => "shadowMaxZ" in pp,
            get: pp => pp.shadowMaxZ
          },
          metadata: Ip
        }, null, Ap), Ip && Object.defineProperty(pp, Symbol.metadata, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: Ip
        })
      })(), pp
    })()
  },
  41843: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => op
    });
    var Op = cp(40654);
    class op extends Op.d {
      constructor(pp, ip, cp, op, Ip) {
        let Sp = !(arguments.length > 5 && void 0 !== arguments[5]) || arguments[5],
          xp = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          Lp = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 3,
          Yp = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0,
          Dp = arguments.length > 9 ? arguments[9] : void 0,
          Ap = arguments.length > 10 ? arguments[10] : void 0,
          Pp = arguments.length > 11 ? arguments[11] : void 0,
          Wp = arguments.length > 12 ? arguments[12] : void 0;
        super(null, Ip, !Sp, xp, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0, Dp), this.format = op, this._engine && (this._engine._caps.textureFloatLinearFiltering || 1 !== Yp || (Lp = 1), this._engine._caps.textureHalfFloatLinearFiltering || 2 !== Yp || (Lp = 1), this._texture = this._engine.createRawTexture(pp, ip, cp, op, Sp, xp, Lp, null, Yp, Dp ?? 0, Ap ?? !1, Wp), this.wrapU = Op.d.CLAMP_ADDRESSMODE, this.wrapV = Op.d.CLAMP_ADDRESSMODE, this._waitingForData = !!Pp && !pp)
      }
      update(pp) {
        this.updateMipLevel(pp, 0)
      }
      updateMipLevel(pp, ip) {
        this._getEngine().updateRawTexture(this._texture, pp, this._texture.format, this._texture.invertY, null, this._texture.type, this._texture._useSRGBBuffer, ip), this._waitingForData = !1
      }
      clone() {
        if (!this._texture) return super.clone();
        const pp = new op(null, this.getSize().width, this.getSize().height, this.format, this.Gl(), this._texture.generateMipMaps, this._invertY, this.samplingMode, this._texture.type, this._texture._creationFlags, this._useSRGBBuffer);
        return pp._texture = this._texture, this._texture.incrementReferences(), pp
      }
      isReady() {
        return super.isReady() && !this._waitingForData
      }
      static CreateLuminanceTexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 1, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateLuminanceAlphaTexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 2, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateAlphaTexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 0, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3)
      }
      static CreateRGBTexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 4, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9])
      }
      static CreateRGBATexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : 0, arguments.length > 9 && void 0 !== arguments[9] && arguments[9], arguments.length > 10 && void 0 !== arguments[10] && arguments[10])
      }
      static CreateRGBAStorageTexture(pp, ip, cp, Op) {
        return new op(pp, ip, cp, 5, Op, !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4], arguments.length > 5 && void 0 !== arguments[5] && arguments[5], arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 3, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0, 1, arguments.length > 8 && void 0 !== arguments[8] && arguments[8])
      }
      static CreateRTexture(pp, ip, cp, Ip) {
        let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
        return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1)
      }
      static CreateRStorageTexture(pp, ip, cp, Ip) {
        let Sp = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          xp = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          Lp = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : Op.d.TRILINEAR_SAMPLINGMODE;
        return new op(pp, ip, cp, 6, Ip, Sp, xp, Lp, arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 1, 1)
      }
    }
  },
  41884: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op.b
    });
    var Op = cp(40614);
    (0, Op.d)()
  },
  41826: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op.e
    });
    var Op = cp(40631);
    (0, Op.h)()
  },
  40631: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Pp,
      h: () => Up
    });
    var Op, op, Ip = cp(37487),
      Sp = cp(40342),
      xp = cp(40577),
      Lp = cp(40638),
      Yp = cp(40476),
      Dp = cp(40647),
      Ap = cp(40096);
    class Pp extends xp.d {
      _isShaderMaterial(pp) {
        return !!pp && "ShaderMaterial" === pp.getClassName()
      }
      constructor(pp) {
        let ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
          Op = arguments.length > 5 ? arguments[5] : void 0,
          op = arguments.length > 6 ? arguments[6] : void 0,
          xp = arguments.length > 7 ? arguments[7] : void 0;
        super(pp, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, ip, arguments.length > 4 ? arguments[4] : void 0), this.useVertexColor = Op, this.useVertexAlpha = op, this.color = new Ip.d(1, 1, 1), this.alpha = 1, this._shaderLanguage = 0, this._ownsMaterial = !1, ip && (this.color = ip.color.clone(), this.alpha = ip.alpha, this.useVertexColor = ip.useVertexColor, this.useVertexAlpha = ip.useVertexAlpha), this.intersectionThreshold = .1;
        const Lp = {
          attributes: [Sp.j.PositionKind],
          uniforms: ["world", "viewProjection"],
          needAlphaBlending: !0,
          defines: [],
          useClipPlane: null,
          shaderLanguage: 0
        };
        if (this.useVertexAlpha ? Lp.defines.push("#define VERTEXALPHA") : Lp.needAlphaBlending = !1, this.useVertexColor ? (Lp.defines.push("#define VERTEXCOLOR"), Lp.attributes.push(Sp.j.ColorKind)) : (Lp.uniforms.push("color"), this._color4 = new Ip.h), xp) this.material = xp;
        else {
          this.Gl().gy().isWebGPU && !Pp.ForceGLSL && (this._shaderLanguage = 1), Lp.shaderLanguage = this._shaderLanguage, Lp.extraInitializationsAsync = async () => {
            1 === this._shaderLanguage ? await Promise.all([cp.e(349).then((() => cp(42847))), cp.e(355).then((() => cp(42853)))]) : await Promise.all([cp.e(331).then((() => cp(42861))), cp.e(337).then((() => cp(42863)))])
          };
          const pp = new Dp.q("colorShader", this.Gl(), "color", Lp, !1);
          pp.doNotSerialize = !0, this._ownsMaterial = !0, this._setInternalMaterial(pp)
        }
      }
      getClassName() {
        return "LinesMesh"
      }
      get material() {
        return this._internalAbstractMeshDataInfo._material
      }
      set material(pp) {
        const ip = this.material;
        if (ip === pp) return;
        const cp = ip && this._ownsMaterial;
        this._ownsMaterial = !1, this._setInternalMaterial(pp), cp && ip?.dispose()
      }
      _setInternalMaterial(pp) {
        this._setMaterial(pp), this.material && (this.material.fillMode = Yp.b.LineListDrawMode, this.material.disableLighting = !0)
      }
      get checkCollisions() {
        return !1
      }
      set checkCollisions(pp) {}
      _bind(pp, ip) {
        if (!this._geometry) return this;
        const cp = this.isUnIndexed ? null : this._geometry.getIndexBuffer();
        if (!this._userInstancedBuffersStorage || this.hasThinInstances ? this._geometry._bind(ip, cp) : this._geometry._bind(ip, cp, this._userInstancedBuffersStorage.vertexBuffers, this._userInstancedBuffersStorage.vertexArrayObjects), !this.useVertexColor && this._isShaderMaterial(this.material)) {
          const {
            r: pp,
            g: ip,
            b: cp
          } = this.color;
          this._color4.set(pp, ip, cp, this.alpha), this.material.setColor4("color", this._color4)
        }
        return this
      }
      _draw(pp, ip, cp) {
        if (!this._geometry || !this._geometry.getVertexBuffers() || !this._unIndexed && !this._geometry.getIndexBuffer()) return this;
        const Op = this.Gl().gy();
        return this._unIndexed ? Op.drawArraysType(Yp.b.LineListDrawMode, pp.verticesStart, pp.verticesCount, cp) : Op.drawElementsType(Yp.b.LineListDrawMode, pp.indexStart, pp.indexCount, cp), this
      }
      dispose(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        (arguments.length > 2 ? arguments[2] : void 0) || (this._ownsMaterial || ip) && this.material?.dispose(!1, !1, !0), super.dispose(pp)
      }
      clone(pp) {
        let ip = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          cp = arguments.length > 2 ? arguments[2] : void 0;
        if (ip && void 0 === ip._addToSceneRootNodes) {
          const cp = ip;
          return cp.source = this, new Pp(pp, this.Gl(), cp.parent, cp.source, cp.doNotCloneChildren)
        }
        return new Pp(pp, this.Gl(), ip, this, cp)
      }
      createInstance(pp) {
        const ip = new Wp(pp, this);
        if (this.MJ) {
          ip.MJ = {};
          for (const pp in this.MJ) ip.MJ[pp] = this.MJ[pp]
        }
        return ip
      }
      serialize(pp) {
        super.serialize(pp), pp.color = this.color.BOp(), pp.alpha = this.alpha
      }
      static Parse(pp, ip) {
        const cp = new Pp(pp.name, ip);
        return cp.color = Ip.d.FromArray(pp.color), cp.alpha = pp.alpha, cp
      }
    }
    Pp.ForceGLSL = !1;
    class Wp extends Lp.d {
      constructor(pp, ip) {
        super(pp, ip), this.intersectionThreshold = ip.intersectionThreshold
      }
      getClassName() {
        return "InstancedLinesMesh"
      }
    }
    let yp = !1;

    function Up() {
      yp || (yp = !0, xp.d._LinesMeshParser = (pp, ip) => Pp.Parse(pp, ip))
    }(Op = Pp.prototype).enableEdgesRendering ?? (Op.enableEdgesRendering = (0, Ap.k)("LinesMesh", "enableEdgesRendering")), (op = Wp.prototype).enableEdgesRendering ?? (op.enableEdgesRendering = (0, Ap.k)("InstancedLinesMesh", "enableEdgesRendering"))
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);