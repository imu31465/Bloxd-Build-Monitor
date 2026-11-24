export const id = 273;
export const ids = [273];
export const modules = {
  40709: (TT, UT, mT) => {
    mT.d(UT, {
      $: () => KT,
      $d: () => rT,
      $f: () => Vm,
      Ab: () => mm,
      Ad: () => BU,
      Ae: () => Qm,
      B: () => KU,
      Bb: () => Um,
      Bc: () => WU,
      C: () => ST,
      Cd: () => HT,
      Cf: () => UW,
      Db: () => pU,
      Dd: () => jT,
      De: () => om,
      E: () => NU,
      Fc: () => lU,
      Gb: () => nU,
      Ge: () => Xm,
      Gf: () => Am,
      H: () => LT,
      Hb: () => zT,
      Hc: () => xT,
      Hd: () => cU,
      He: () => um,
      Ib: () => vT,
      Je: () => ym,
      Jf: () => TW,
      K: () => zU,
      Kb: () => fU,
      Kc: () => kU,
      Ld: () => GU,
      Le: () => Km,
      Mc: () => HU,
      Md: () => uT,
      Mf: () => mW,
      N: () => dT,
      Nb: () => DT,
      Nd: () => LU,
      Ob: () => Tm,
      Of: () => hm,
      Pb: () => aT,
      Pc: () => mU,
      Pe: () => rm,
      Pf: () => em,
      Qc: () => JT,
      Qf: () => cm,
      R: () => tT,
      Rc: () => iT,
      Rd: () => hU,
      Re: () => Cm,
      Sd: () => uU,
      Tb: () => AT,
      Tf: () => Dm,
      Uc: () => WT,
      V: () => wT,
      Vb: () => oT,
      Ve: () => MW,
      W: () => rU,
      Wc: () => YT,
      Wd: () => TU,
      Xf: () => Pm,
      Yb: () => UU,
      Yc: () => gU,
      Z: () => pT,
      Zb: () => ZU,
      Zd: () => RT,
      Ze: () => Jm,
      _c: () => cT,
      ab: () => gW,
      af: () => tm,
      bc: () => NT,
      cd: () => ZT,
      ce: () => bT,
      cg: () => im,
      dg: () => Zm,
      e: () => MT,
      eb: () => RU,
      ec: () => yT,
      ee: () => lT,
      ef: () => xm,
      fc: () => MU,
      fg: () => Fm,
      gb: () => hT,
      gd: () => BT,
      h: () => gT,
      he: () => Hm,
      hg: () => Ym,
      ic: () => fT,
      id: () => Mm,
      ie: () => WW,
      if: () => am,
      j: () => eT,
      jg: () => bm,
      kb: () => oU,
      l: () => FT,
      mb: () => AU,
      mc: () => qT,
      md: () => gm,
      me: () => fm,
      mf: () => wm,
      n: () => km,
      nd: () => OT,
      ne: () => Om,
      ng: () => Nm,
      oc: () => jU,
      oe: () => pm,
      pc: () => kT,
      pe: () => Em,
      q: () => nm,
      qb: () => ET,
      qd: () => IT,
      qf: () => dm,
      re: () => Gm,
      rg: () => qm,
      sb: () => DU,
      tc: () => SU,
      td: () => XT,
      u: () => nT,
      ub: () => PT,
      uc: () => CT,
      ud: () => sT,
      uf: () => zW,
      ug: () => Sm,
      vb: () => Wm,
      vc: () => GT,
      ve: () => Im,
      wg: () => Lm,
      x: () => CU,
      xd: () => QT,
      xe: () => sm,
      xg: () => Bm,
      yb: () => zm,
      yc: () => EU,
      yf: () => Rm,
      zb: () => VT
    });
    const WT = -2147483648,
      zT = 12,
      MT = 12,
      gT = 4095,
      nT = {
        Lifeform: 1,
        Throwable: 2,
        Mesh: 3,
        Audio: 4,
        Item: 5
      },
      HT = {
        Alive: 1,
        Crouching: 2,
        OnGround: 4,
        InFluid: 8,
        Spectating: 16,
        AttemptingBreak: 32,
        Aiming: 64,
        FirstPerson: 128,
        Replay: 256,
        Breaking: 512,
        CursorAim: 1024,
        FreeCam: 2048,
        ZoomFirstPerson: 4096,
        JumpHeld: 8192,
        Flying: 16384,
        CanFly: 32768,
        PadSneakToggled: 65536,
        DropAhead: 131072,
        FreeCamMoves: 262144
      },
      kT = {
        None: 0,
        Entity: 1,
        Open: 2,
        Close: 3,
        Milk: 4,
        Shear: 5,
        Tame: 6,
        TameWith: 7,
        Feed: 8,
        Ride: 9
      },
      jT = {
        Off: 0,
        Key: 1,
        Touch: 2
      },
      lT = {
        Alive: 16
      },
      LT = 32,
      pT = {
        Stored: 1,
        Unloaded: 2,
        ResetAll: 4
      },
      BT = {
        opacity: 0,
        zIndex: 1,
        overlayColour: 2,
        canAttack: 3,
        canSee: 4,
        interactable: 5,
        interactionPrompt: 6,
        showDamageAmounts: 7,
        lockHeadToBody: 8,
        killfeedColour: 9,
        meshScaling: 10,
        colorInLobbyLeaderboard: 11,
        lobbyLeaderboardValues: 12,
        lobbyLeaderboardTags: 13,
        nameTagInfo: 14,
        hasPriorityNametag: 15,
        alwaysInInterest: 16,
        multilineTextBox: 17,
        ranks: 18,
        nameColour: 19,
        hideNameSeed: 20,
        _leaderboardAround: 21,
        _invincible: 22,
        _isAlive: 23,
        _invisibleEffect: 24,
        _glowingEffect: 25,
        _armourReductionSum: 26,
        _protectionEnchantSum: 27,
        _receivingDamageMultiplier: 28
      },
      ZT = 4294967295,
      cT = 0,
      vT = 4294967295,
      fT = 4,
      qT = 123,
      iT = -2147483648,
      bT = {
        Off: 0,
        All: 1,
        Filter: 2
      },
      OT = 51,
      eT = 5,
      YT = 4294967295,
      JT = 4294967295,
      xT = 128,
      dT = ["Workbench", "Furnace", "Artisan Bench", "Potion Table", "Salvaging Table", "Enchanting Table"],
      wT = 16,
      tT = 255,
      aT = {
        Off: 0,
        On: 1,
        Keep: 2
      },
      yT = {
        AltVeto: 1,
        AltAction: 2,
        Click: 3,
        ChangeBlock: 4,
        DropItem: 5,
        Tick: 6,
        Message: 7,
        Create: 8,
        Director: 11
      },
      XT = {
        Hotbar: 256,
        Drop: 257
      },
      IT = {
        Down: 1,
        Next: 2,
        Stack: 4,
        Repeat: 8
      },
      QT = {
        Rate: 0,
        Gyro: 1
      },
      sT = {
        Active: 1,
        JumpHeld: 2,
        JumpPressed: 4,
        Running: 8,
        SprintHeld: 16,
        SneakHeld: 32,
        SneakHoldMode: 64,
        Peek: 128,
        EndToggle: 256
      },
      FT = {
        Prevent: 0,
        Allow: 1,
        PreventPlacement: 2
      },
      PT = {
        None: 0,
        Pose: 1,
        FaceMovement: 2,
        FaceCamera: 3,
        FaceCursor: 4
      },
      VT = {
        LookPointed: 1,
        Held: 2
      },
      uT = 3,
      CT = {
        Synced: 0,
        ChestOpened: 1,
        ChestClosed: 2,
        ChestRefreshed: 3,
        EnchantingTable: 4,
        HotbarRequest: 5,
        Scrolled: 6,
        NumberKey: 7,
        DropRequested: 8
      },
      rT = {
        ToggleMenu: 0,
        EditBoard: 1,
        EditCodeBlock: 2,
        ViewCodeBlock: 3,
        EditCustomLobbyBlock: 4,
        OpenIronChest: 5,
        EditNameTag: 6,
        EditBook: 7,
        CantChangeBlock: 8,
        MiddleBarStart: 9,
        MiddleBarStop: 10,
        AimingOverlay: 11,
        BottomMessage: 12,
        Hitmarker: 13,
        ShotsLeft: 14,
        Crosshair: 15,
        ChargeStage: 16,
        EmoteWheelClose: 17,
        BlockMined: 18
      },
      KT = {
        Alt: 1,
        Up: 2,
        HasPos: 4,
        AttackOnly: 8
      },
      ST = {
        Solid: 1,
        Fluid: 2,
        PlaceOver: 4
      },
      GT = {
        Stackable: 1
      },
      NT = {
        granule: 1,
        wood: 2,
        rock: 3,
        cuttable: 4
      },
      ET = {
        Detail: 1,
        RoomForOne: 2
      },
      hT = {
        HaveIngredients: 1,
        Listed: 2
      },
      DT = {
        HasOpts: 1
      },
      oT = {
        Flat: 0,
        Chevrons: 1,
        FurnaceFire: 2,
        FlatOpaque: 3,
        FlatOnTop: 4
      },
      AT = {
        Up: 1,
        Down: 2
      },
      RT = {
        TwoD: 1,
        Loop: 2
      },
      TU = {
        StopAfter: 1
      },
      UU = {
        Anchor: 1,
        Visible: 2,
        UvOffset: 4,
        Visibility: 8,
        Scale: 16
      },
      mU = {
        Pose: 1,
        Visible: 2
      },
      WU = 255,
      zU = 65535,
      MU = 255,
      gU = 65535,
      nU = ["standing", "sitting", "zombie", "gliding", "driving", "sleeping", "riding"],
      HU = ["", "Sheared", "Saddled", "Antlers", "skyblockHeldBoss"],
      kU = ["Box", "BloxdBlock", "Person", "Leaderboard", "ParticleEmitter"],
      jU = {
        Bytes: 16,
        Hidden: 2147483648,
        Max: 262144
      },
      lU = 4294967295,
      LU = 4294967295,
      pU = 255,
      BU = {
        PresetNone: 65535,
        HasBox: 1,
        Anchored: 1,
        MaxOpts: 4096,
        MaxBurst: 2e3,
        MaxPoints: 512,
        PointBytes: 16,
        MaxKey: 1073741823,
        MaxLiveKeys: 256
      },
      ZU = {
        critical: 123
      },
      cU = 4294967295,
      vU = {
        BYTES: 4,
        Cl: (TT, UT) => TT.getUint32(UT + 0, !0)
      },
      fU = {
        BYTES: 12,
        serverId: (TT, UT) => TT.getInt32(UT + 0, !0),
        index: (TT, UT) => TT.getUint32(UT + 4, !0),
        kind: (TT, UT) => TT.getUint16(UT + 8, !0)
      },
      qU = {
        BYTES: 20,
        pos: (TT, UT, mT) => TT.getInt32(UT + 0 + 4 * mT, !0),
        actual: (TT, UT) => TT.getUint32(UT + 12, !0),
        dataLen: (TT, UT) => TT.getUint32(UT + 16, !0)
      },
      iU = {
        BYTES: 20,
        what: (TT, UT) => TT.getUint8(UT + 0),
        value: (TT, UT) => TT.getInt16(UT + 2, !0),
        pos: (TT, UT, mT) => TT.getInt32(UT + 4 + 4 * mT, !0),
        block: (TT, UT) => TT.getUint32(UT + 16, !0)
      },
      bU = {
        BYTES: 4,
        item: (TT, UT) => TT.getUint16(UT + 0, !0),
        slot: (TT, UT) => TT.getUint8(UT + 2)
      },
      OU = {
        BYTES: 16,
        target: (TT, UT) => TT.getInt32(UT + 0, !0),
        damage: (TT, UT) => TT.getFloat32(UT + 4, !0),
        distance: (TT, UT) => TT.getFloat32(UT + 8, !0),
        crit: (TT, UT) => TT.getUint8(UT + 12)
      },
      eU = {
        BYTES: 4,
        slot: (TT, UT) => TT.getUint16(UT + 0, !0)
      },
      YU = {
        BYTES: 20,
        what: (TT, UT) => TT.getUint8(UT + 0),
        value: (TT, UT) => TT.getInt16(UT + 2, !0),
        pos: (TT, UT, mT) => TT.getInt32(UT + 4 + 4 * mT, !0),
        block: (TT, UT) => TT.getUint32(UT + 16, !0)
      },
      JU = {
        BYTES: 12,
        serverId: (TT, UT) => TT.getInt32(UT + 0, !0),
        index: (TT, UT) => TT.getUint32(UT + 4, !0),
        what: (TT, UT) => TT.getUint16(UT + 8, !0)
      },
      xU = {
        BYTES: 24,
        cx: (TT, UT) => TT.getInt32(UT + 0, !0),
        cy: (TT, UT) => TT.getInt32(UT + 4, !0),
        cz: (TT, UT) => TT.getInt32(UT + 8, !0),
        slot: (TT, UT) => TT.getUint32(UT + 12, !0),
        generation: (TT, UT) => TT.getUint32(UT + 16, !0),
        flags: (TT, UT) => TT.getUint32(UT + 20, !0)
      },
      dU = {
        BYTES: 44,
        pos: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        sound: (TT, UT) => TT.getUint16(UT + 24, !0),
        flags: (TT, UT) => TT.getUint16(UT + 26, !0),
        handle: (TT, UT) => TT.getUint32(UT + 28, !0),
        volume: (TT, UT) => TT.getFloat32(UT + 32, !0),
        rate: (TT, UT) => TT.getFloat32(UT + 36, !0),
        refDist: (TT, UT) => TT.getFloat32(UT + 40, !0)
      },
      wU = {
        BYTES: 28,
        pos: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        handle: (TT, UT) => TT.getUint32(UT + 24, !0)
      },
      tU = {
        BYTES: 16,
        handle: (TT, UT) => TT.getUint32(UT + 0, !0),
        volume: (TT, UT) => TT.getFloat32(UT + 4, !0),
        rate: (TT, UT) => TT.getFloat32(UT + 8, !0),
        refDist: (TT, UT) => TT.getFloat32(UT + 12, !0)
      },
      aU = {
        BYTES: 12,
        handle: (TT, UT) => TT.getUint32(UT + 0, !0),
        to: (TT, UT) => TT.getFloat32(UT + 4, !0),
        ms: (TT, UT) => TT.getUint16(UT + 8, !0),
        flags: (TT, UT) => TT.getUint16(UT + 10, !0)
      },
      yU = {
        BYTES: 4,
        handle: (TT, UT) => TT.getUint32(UT + 0, !0)
      },
      XU = {
        BYTES: 8,
        reason: (TT, UT) => TT.getUint8(UT + 0),
        code: (TT, UT) => TT.getUint8(UT + 1),
        version: (TT, UT) => TT.getUint32(UT + 4, !0)
      },
      IU = {
        BYTES: 4,
        key: (TT, UT) => TT.getUint8(UT + 0),
        tag: (TT, UT) => TT.getUint8(UT + 1)
      },
      QU = {
        BYTES: 16,
        save: (TT, UT) => TT.getUint32(UT + 0, !0),
        index: (TT, UT) => TT.getUint32(UT + 4, !0),
        ptr: (TT, UT) => TT.getUint32(UT + 8, !0),
        len: (TT, UT) => TT.getUint32(UT + 12, !0)
      },
      sU = {
        BYTES: 16,
        save: (TT, UT) => TT.getUint32(UT + 0, !0),
        kind: (TT, UT) => TT.getUint8(UT + 4),
        parts: (TT, UT) => TT.getUint32(UT + 8, !0),
        bytes: (TT, UT) => TT.getUint32(UT + 12, !0)
      },
      FU = {
        BYTES: 4,
        totalTicks: (TT, UT) => TT.getUint32(UT + 0, !0)
      },
      PU = {
        BYTES: 24,
        what: (TT, UT) => TT.getUint8(UT + 0),
        int: (TT, UT) => TT.getInt32(UT + 4, !0),
        x: (TT, UT) => TT.getFloat64(UT + 8, !0),
        y: (TT, UT) => TT.getFloat64(UT + 16, !0)
      },
      VU = {
        BYTES: 8,
        what: (TT, UT) => TT.getUint8(UT + 0),
        kind: (TT, UT) => TT.getUint8(UT + 1),
        save: (TT, UT) => TT.getUint32(UT + 4, !0)
      },
      uU = {
        BYTES: 4,
        Xj: (TT, UT) => TT.getUint16(UT + 0, !0)
      },
      CU = {
        BYTES: 360,
        eye: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        localPos: (TT, UT, mT) => TT.getFloat64(UT + 24 + 8 * mT, !0),
        KTT: (TT, UT, mT) => TT.getFloat64(UT + 48 + 8 * mT, !0),
        viewProj: (TT, UT, mT) => TT.getFloat32(UT + 72 + 4 * mT, !0),
        origin: (TT, UT, mT) => TT.getInt32(UT + 136 + 4 * mT, !0),
        heading: (TT, UT) => TT.getFloat32(UT + 148, !0),
        pitch: (TT, UT) => TT.getFloat32(UT + 152, !0),
        tanHalfFovX: (TT, UT) => TT.getFloat32(UT + 156, !0),
        tanHalfFovY: (TT, UT) => TT.getFloat32(UT + 160, !0),
        viewportCss: (TT, UT, mT) => TT.getFloat32(UT + 164 + 4 * mT, !0),
        localVel: (TT, UT, mT) => TT.getFloat32(UT + 172 + 4 * mT, !0),
        actionDir: (TT, UT, mT) => TT.getFloat32(UT + 184 + 4 * mT, !0),
        localId: (TT, UT) => TT.getInt32(UT + 196, !0),
        playerFlags: (TT, UT) => TT.getUint32(UT + 200, !0),
        targetBlock: (TT, UT, mT) => TT.getInt32(UT + 204 + 4 * mT, !0),
        targetAdjacent: (TT, UT, mT) => TT.getInt32(UT + 216 + 4 * mT, !0),
        targetBlockId: (TT, UT) => TT.getUint32(UT + 228, !0),
        targetNormal: (TT, UT, mT) => TT.getInt8(UT + 232 + 1 * mT),
        targetFlags: (TT, UT) => TT.getUint8(UT + 235),
        pickedEntity: (TT, UT) => TT.getInt32(UT + 236, !0),
        breakingPos: (TT, UT, mT) => TT.getInt32(UT + 240 + 4 * mT, !0),
        breakingProgress: (TT, UT) => TT.getFloat32(UT + 252, !0),
        AY: (TT, UT) => TT.getUint16(UT + 256, !0),
        selectedSlot: (TT, UT) => TT.getUint8(UT + 258),
        heldFlags: (TT, UT) => TT.getUint8(UT + 259),
        heldAttrVersion: (TT, UT) => TT.getUint32(UT + 260, !0),
        inventoryVersion: (TT, UT) => TT.getUint32(UT + 264, !0),
        effectsVersion: (TT, UT) => TT.getUint32(UT + 268, !0),
        entitiesVersion: (TT, UT) => TT.getUint32(UT + 272, !0),
        entRenderPtr: (TT, UT) => TT.getUint32(UT + 276, !0),
        entCapacity: (TT, UT) => TT.getUint32(UT + 280, !0),
        frameMs: (TT, UT) => TT.getFloat32(UT + 284, !0),
        fps: (TT, UT) => TT.getFloat32(UT + 288, !0),
        entVisPtr: (TT, UT) => TT.getUint32(UT + 292, !0),
        momentumFrac: (TT, UT) => TT.getFloat32(UT + 296, !0),
        chunkSlotsPtr: (TT, UT) => TT.getUint32(UT + 300, !0),
        chunkSlotsLen: (TT, UT) => TT.getUint32(UT + 304, !0),
        walkThroughPtr: (TT, UT) => TT.getUint32(UT + 308, !0),
        walkThroughLen: (TT, UT) => TT.getUint32(UT + 312, !0),
        audioViewPtr: (TT, UT) => TT.getUint32(UT + 316, !0),
        inventoryViewPtr: (TT, UT) => TT.getUint32(UT + 320, !0),
        eventOverflowGen: (TT, UT) => TT.getUint32(UT + 324, !0),
        eventOverflowMask: (TT, UT) => TT.getUint32(UT + 328, !0),
        promptEntity: (TT, UT) => TT.getInt32(UT + 332, !0),
        replayViewPtr: (TT, UT) => TT.getUint32(UT + 336, !0),
        slotIcon: (TT, UT) => TT.getUint32(UT + 340, !0),
        localDeaths: (TT, UT) => TT.getUint32(UT + 344, !0),
        cameraFar: (TT, UT) => TT.getFloat32(UT + 348, !0),
        gliderBoostFuel: (TT, UT) => TT.getUint32(UT + 352, !0),
        interactLabel: (TT, UT) => TT.getUint16(UT + 356, !0),
        interactIcon: (TT, UT) => TT.getUint16(UT + 358, !0)
      },
      rU = {
        BYTES: 16,
        voxelsPtr: (TT, UT) => TT.getUint32(UT + 0, !0),
        version: (TT, UT) => TT.getUint32(UT + 4, !0),
        generation: (TT, UT) => TT.getUint32(UT + 8, !0),
        fn: (TT, UT) => TT.getUint32(UT + 12, !0)
      },
      KU = {
        BYTES: 56,
        listener: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        forward: (TT, UT, mT) => TT.getFloat32(UT + 24 + 4 * mT, !0),
        up: (TT, UT, mT) => TT.getFloat32(UT + 36 + 4 * mT, !0),
        dropped: (TT, UT) => TT.getUint32(UT + 48, !0),
        unfollowed: (TT, UT) => TT.getUint32(UT + 52, !0)
      },
      SU = {
        BYTES: 8,
        item: (TT, UT) => TT.getUint16(UT + 0, !0),
        amount: (TT, UT) => TT.getUint16(UT + 2, !0),
        attrVersion: (TT, UT) => TT.getUint32(UT + 4, !0)
      },
      GU = {
        BYTES: 76,
        version: (TT, UT) => TT.getUint32(UT + 0, !0),
        state: (TT, UT) => TT.getUint8(UT + 4),
        cameraMode: (TT, UT) => TT.getUint8(UT + 5),
        Cl: (TT, UT) => TT.getUint32(UT + 8, !0),
        totalTicks: (TT, UT) => TT.getUint32(UT + 12, !0),
        speed: (TT, UT) => TT.getFloat32(UT + 16, !0),
        markIn: (TT, UT) => TT.getUint32(UT + 20, !0),
        markOut: (TT, UT) => TT.getUint32(UT + 24, !0),
        editVersion: (TT, UT) => TT.getUint32(UT + 28, !0),
        drops: (TT, UT, mT) => TT.getUint32(UT + 32 + 4 * mT, !0)
      },
      NU = {
        BYTES: 6,
        flags: (TT, UT) => TT.getUint8(UT + 0),
        harvestType: (TT, UT) => TT.getUint8(UT + 1),
        harvestLevel: (TT, UT) => TT.getUint8(UT + 2),
        attachedTop: (TT, UT) => TT.getUint16(UT + 4, !0)
      },
      EU = {
        BYTES: 3,
        flags: (TT, UT) => TT.getUint8(UT + 0),
        harvests: (TT, UT) => TT.getUint8(UT + 1),
        level: (TT, UT) => TT.getUint8(UT + 2)
      },
      hU = {
        BYTES: 12,
        item: (TT, UT) => TT.getUint32(UT + 0, !0),
        amount: (TT, UT) => TT.getFloat64(UT + 4, !0)
      },
      DU = {
        BYTES: 16,
        recipes: (TT, UT) => TT.getUint32(UT + 0, !0),
        ingredients: (TT, UT) => TT.getUint32(UT + 4, !0),
        craftAllTimes: (TT, UT) => TT.getUint32(UT + 8, !0),
        flags: (TT, UT) => TT.getUint32(UT + 12, !0)
      },
      oU = {
        BYTES: 10,
        item: (TT, UT) => TT.getUint16(UT + 0, !0),
        recipe: (TT, UT) => TT.getUint16(UT + 2, !0),
        produces: (TT, UT) => TT.getUint16(UT + 4, !0),
        requires: (TT, UT) => TT.getUint16(UT + 6, !0),
        flags: (TT, UT) => TT.getUint8(UT + 8)
      },
      AU = {
        BYTES: 4,
        amount: (TT, UT) => TT.getUint16(UT + 0, !0),
        items: (TT, UT) => TT.getUint16(UT + 2, !0)
      },
      RU = {
        BYTES: 8,
        amount: (TT, UT) => TT.getUint32(UT + 0, !0),
        item: (TT, UT) => TT.getUint16(UT + 4, !0),
        from: (TT, UT) => TT.getUint16(UT + 6, !0)
      },
      Tm = {
        BYTES: 16,
        serverId: (TT, UT) => TT.getInt32(UT + 0, !0),
        len: (TT, UT) => TT.getUint32(UT + 4, !0),
        kind: (TT, UT) => TT.getUint16(UT + 8, !0),
        variation: (TT, UT) => TT.getUint16(UT + 10, !0),
        pose: (TT, UT) => TT.getUint8(UT + 12),
        meta: (TT, UT) => TT.getUint8(UT + 13),
        mesh: (TT, UT) => TT.getUint8(UT + 14),
        flags: (TT, UT) => TT.getUint8(UT + 15)
      },
      Um = {
        BYTES: 56,
        terrainOpaque: (TT, UT) => TT.getUint32(UT + 0, !0),
        terrainTransparent: (TT, UT) => TT.getUint32(UT + 4, !0),
        terrainPack: (TT, UT) => TT.getUint32(UT + 8, !0),
        earthSky: (TT, UT) => TT.getUint32(UT + 12, !0),
        skyMeshes: (TT, UT) => TT.getUint32(UT + 16, !0),
        regular: (TT, UT) => TT.getUint32(UT + 20, !0),
        thin: (TT, UT) => TT.getUint32(UT + 24, !0),
        line: (TT, UT) => TT.getUint32(UT + 28, !0),
        text: (TT, UT) => TT.getUint32(UT + 32, !0),
        particles: (TT, UT) => TT.getUint32(UT + 36, !0),
        terrainParts: (TT, UT) => TT.getUint32(UT + 40, !0),
        terrainCompiling: (TT, UT) => TT.getUint32(UT + 44, !0),
        ringCopiesMax: (TT, UT) => TT.getUint32(UT + 48, !0),
        ringBusyWrites: (TT, UT) => TT.getUint32(UT + 52, !0)
      },
      mm = {
        BYTES: 16,
        fov: (TT, UT) => TT.getFloat32(UT + 0, !0),
        baseFov: (TT, UT) => TT.getFloat32(UT + 4, !0),
        aspect: (TT, UT) => TT.getFloat32(UT + 8, !0),
        bodyHeading: (TT, UT) => TT.getFloat32(UT + 12, !0)
      },
      Wm = {
        BYTES: 32,
        eye: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        heading: (TT, UT) => TT.getFloat32(UT + 24, !0),
        pitch: (TT, UT) => TT.getFloat32(UT + 28, !0)
      },
      zm = {
        BYTES: 40,
        feet: (TT, UT, mT) => TT.getFloat64(UT + 0 + 8 * mT, !0),
        eyeHeight: (TT, UT) => TT.getFloat32(UT + 24, !0),
        heading: (TT, UT) => TT.getFloat32(UT + 28, !0),
        headingIsDrawn: (TT, UT) => TT.getUint32(UT + 32, !0)
      },
      Mm = 32,
      gm = 63,
      nm = {
        TickEnd: 32,
        EntitySpawned: 33,
        EntityDespawned: 34,
        ChangeBlockFail: 39,
        ChangeBlockFailEnd: 46,
        InventoryEvent: 48,
        HeldItemChanged: 49,
        ShotDamage: 50,
        EnchantOffer: 51,
        UiEvent: 52,
        EntityInfoChanged: 53,
        ChunkSlot: 55,
        PlaySound: 40,
        SoundPos: 41,
        SoundSet: 42,
        SoundFade: 43,
        SoundStop: 44,
        SoundReset: 45,
        ReplayFailed: 56,
        ReplayOption: 57,
        ReplayFilePart: 58,
        ReplayFileReady: 59,
        ReplayOpened: 60,
        ReplayUiEvent: 61,
        RecorderEvent: 62
      };

    function Hm(TT, UT, mT, WT, zT) {
      var MT, gT, nT, HT, kT, jT, lT, LT, pT, BT, ZT, cT, vT, fT, qT, iT, bT, OT, eT, YT, JT, xT, dT, wT, tT;
      switch (TT) {
        case 32:
          return 4 === WT && (null === (MT = zT.tickEnd) || void 0 === MT || MT.call(zT, vU.Cl(UT, mT)), !0);
        case 33:
          return 12 === WT && (null === (gT = zT.entitySpawned) || void 0 === gT || gT.call(zT, fU.serverId(UT, mT), fU.index(UT, mT), fU.kind(UT, mT)), !0);
        case 34:
          return 12 === WT && (null === (nT = zT.entityDespawned) || void 0 === nT || nT.call(zT, fU.serverId(UT, mT), fU.index(UT, mT), fU.kind(UT, mT)), !0);
        case 39:
          return !(WT < 20) && (null === (HT = zT.changeBlockFail) || void 0 === HT || HT.call(zT, qU.pos(UT, mT, 0), qU.pos(UT, mT, 1), qU.pos(UT, mT, 2), qU.actual(UT, mT), qU.dataLen(UT, mT), mT + 20, WT - 20), !0);
        case 46:
          return 0 === WT && (null === (kT = zT.changeBlockFailEnd) || void 0 === kT || kT.call(zT), !0);
        case 48:
          return 20 === WT && (null === (jT = zT.inventoryEvent) || void 0 === jT || jT.call(zT, iU.what(UT, mT), iU.value(UT, mT), iU.pos(UT, mT, 0), iU.pos(UT, mT, 1), iU.pos(UT, mT, 2), iU.block(UT, mT)), !0);
        case 49:
          return 4 === WT && (null === (lT = zT.heldItemChanged) || void 0 === lT || lT.call(zT, bU.item(UT, mT), bU.slot(UT, mT)), !0);
        case 50:
          return 16 === WT && (null === (LT = zT.shotDamage) || void 0 === LT || LT.call(zT, OU.target(UT, mT), OU.damage(UT, mT), OU.distance(UT, mT), OU.crit(UT, mT)), !0);
        case 51:
          return !(WT < 4) && (null === (pT = zT.enchantOffer) || void 0 === pT || pT.call(zT, eU.slot(UT, mT), mT + 4, WT - 4), !0);
        case 52:
          return !(WT < 20) && (null === (BT = zT.uiEvent) || void 0 === BT || BT.call(zT, YU.what(UT, mT), YU.value(UT, mT), YU.pos(UT, mT, 0), YU.pos(UT, mT, 1), YU.pos(UT, mT, 2), YU.block(UT, mT), mT + 20, WT - 20), !0);
        case 53:
          return 12 === WT && (null === (ZT = zT.entityInfoChanged) || void 0 === ZT || ZT.call(zT, JU.serverId(UT, mT), JU.index(UT, mT), JU.what(UT, mT)), !0);
        case 55:
          return 24 === WT && (null === (cT = zT.chunkSlot) || void 0 === cT || cT.call(zT, xU.cx(UT, mT), xU.cy(UT, mT), xU.cz(UT, mT), xU.slot(UT, mT), xU.generation(UT, mT), xU.flags(UT, mT)), !0);
        case 40:
          return 44 === WT && (null === (vT = zT.playSound) || void 0 === vT || vT.call(zT, dU.pos(UT, mT, 0), dU.pos(UT, mT, 1), dU.pos(UT, mT, 2), dU.sound(UT, mT), dU.flags(UT, mT), dU.handle(UT, mT), dU.volume(UT, mT), dU.rate(UT, mT), dU.refDist(UT, mT)), !0);
        case 41:
          return 28 === WT && (null === (fT = zT.soundPos) || void 0 === fT || fT.call(zT, wU.pos(UT, mT, 0), wU.pos(UT, mT, 1), wU.pos(UT, mT, 2), wU.handle(UT, mT)), !0);
        case 42:
          return 16 === WT && (null === (qT = zT.soundSet) || void 0 === qT || qT.call(zT, tU.handle(UT, mT), tU.volume(UT, mT), tU.rate(UT, mT), tU.refDist(UT, mT)), !0);
        case 43:
          return 12 === WT && (null === (iT = zT.soundFade) || void 0 === iT || iT.call(zT, aU.handle(UT, mT), aU.to(UT, mT), aU.ms(UT, mT), aU.flags(UT, mT)), !0);
        case 44:
          return 4 === WT && (null === (bT = zT.soundStop) || void 0 === bT || bT.call(zT, yU.handle(UT, mT)), !0);
        case 45:
          return 0 === WT && (null === (OT = zT.soundReset) || void 0 === OT || OT.call(zT), !0);
        case 56:
          return 8 === WT && (null === (eT = zT.replayFailed) || void 0 === eT || eT.call(zT, XU.reason(UT, mT), XU.code(UT, mT), XU.version(UT, mT)), !0);
        case 57:
          return !(WT < 4) && (null === (YT = zT.replayOption) || void 0 === YT || YT.call(zT, IU.key(UT, mT), IU.tag(UT, mT), mT + 4, WT - 4), !0);
        case 58:
          return 16 === WT && (null === (JT = zT.replayFilePart) || void 0 === JT || JT.call(zT, QU.save(UT, mT), QU.index(UT, mT), QU.ptr(UT, mT), QU.len(UT, mT)), !0);
        case 59:
          return 16 === WT && (null === (xT = zT.replayFileReady) || void 0 === xT || xT.call(zT, sU.save(UT, mT), sU.kind(UT, mT), sU.parts(UT, mT), sU.bytes(UT, mT)), !0);
        case 60:
          return !(WT < 4) && (null === (dT = zT.replayOpened) || void 0 === dT || dT.call(zT, FU.totalTicks(UT, mT), mT + 4, WT - 4), !0);
        case 61:
          return !(WT < 24) && (null === (wT = zT.replayUiEvent) || void 0 === wT || wT.call(zT, PU.what(UT, mT), PU.int(UT, mT), PU.x(UT, mT), PU.y(UT, mT), mT + 24, WT - 24), !0);
        case 62:
          return 8 === WT && (null === (tT = zT.recorderEvent) || void 0 === tT || tT.call(zT, VU.what(UT, mT), VU.kind(UT, mT), VU.save(UT, mT)), !0);
        default:
          return !1
      }
    }
    const km = {
      SetChunkAddDistance: 2,
      WatchEntityInfo: 66,
      EventResync: 67,
      WatchPromptPick: 68,
      SetLocalDbId: 69,
      SetAltVeto: 128,
      EnchantOfferRequest: 130,
      ClearPickupDelay: 131,
      SyncOpMarker: 132,
      SetHooks: 133,
      SetPublicLobby: 144,
      ClickCodeBlock: 145,
      Send: 256,
      Leave: 257,
      SetPaused: 258,
      ParticleBurst: 320,
      ParticleStart: 321,
      ParticleUpdate: 322,
      ParticleStop: 323,
      ParticleEmitPoints: 324,
      ParticleStopAll: 325,
      InstancePool: 384,
      InstanceCommit: 385,
      GameMeshCreate: 386,
      GameMeshSet: 387,
      GameMeshDispose: 388,
      SetNametagOffset: 389,
      SetFacingTolerance: 390,
      SetGroundArrowStyle: 391,
      InstancePoolDispose: 392,
      MobModel: 393,
      MobModelSet: 394,
      MobModelDispose: 398,
      ThirdPersonFor: 448,
      FreecamMove: 450,
      ScriptedRelease: 451,
      SetZoom: 452,
      SwapZoom: 453,
      FreecamCmd: 454,
      SecondCentres: 455,
      SetCameraFar: 456,
      HighlightCell: 457,
      RecorderOption: 530,
      RecorderFlyingText: 531,
      RecorderPlayerKilled: 532,
      RecorderKillfeed: 533,
      Respawn: 576,
      BindCustomButtonKeys: 577,
      PressCustomButton: 578,
      PadMove: 579
    };
    let jm = new Uint8Array(0);

    function lm(TT) {
      return jm.buffer !== TT.buffer && (jm = new Uint8Array(TT.buffer)), jm
    }

    function Lm(TT, UT, mT) {
      const WT = TT.np(66, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint8(WT + 0, mT), !0
    }

    function pm(TT, UT, mT) {
      const WT = TT.np(67, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function Bm(TT, UT, mT) {
      const WT = TT.np(68, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint8(WT + 0, mT), !0
    }

    function Zm(TT, UT, mT, WT) {
      const zT = TT.np(69, UT, 4 + WT.length);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setUint8(zT + 0, mT), lm(MT).set(WT, MT.byteOffset + zT + 4), !0
    }

    function cm(TT, UT, mT, WT, zT) {
      const MT = TT.np(128, UT, 4 + zT.length);
      if (MT < 0) return !1;
      const gT = TT.view;
      return gT.setUint8(MT + 0, mT), gT.setUint16(MT + 2, WT, !0), lm(gT).set(zT, gT.byteOffset + MT + 4), !0
    }

    function fm(TT, UT, mT) {
      const WT = TT.np(131, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setInt32(WT + 0, mT, !0), !0
    }

    function qm(TT, UT, mT) {
      const WT = TT.np(132, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function im(TT, UT, mT) {
      const WT = TT.np(133, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function bm(TT, UT, mT) {
      const WT = TT.np(144, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint8(WT + 0, mT), !0
    }

    function Om(TT, UT, mT, WT, zT) {
      const MT = TT.np(145, UT, 12);
      if (MT < 0) return !1;
      const gT = TT.view;
      return gT.setInt32(MT + 0, mT, !0), gT.setInt32(MT + 4, WT, !0), gT.setInt32(MT + 8, zT, !0), !0
    }

    function em(TT, UT, mT, WT) {
      const zT = TT.np(256, UT, 4 + WT.length);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setUint16(zT + 0, mT, !0), lm(MT).set(WT, MT.byteOffset + zT + 4), !0
    }

    function Ym(TT, UT, mT) {
      const WT = TT.np(258, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint8(WT + 0, mT), !0
    }

    function Jm(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      const kT = TT.np(320, UT, 48 + HT.length);
      if (kT < 0) return !1;
      const jT = TT.view;
      jT.setUint32(kT + 0, mT, !0), jT.setUint16(kT + 4, WT, !0), jT.setUint16(kT + 6, zT, !0), jT.setUint32(kT + 8, MT, !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat64(kT + 12 + 8 * lT, gT[lT], !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat32(kT + 36 + 4 * lT, nT[lT], !0);
      return lm(jT).set(HT, jT.byteOffset + kT + 48), !0
    }

    function xm(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      const kT = TT.np(321, UT, 48 + HT.length);
      if (kT < 0) return !1;
      const jT = TT.view;
      jT.setUint32(kT + 0, mT, !0), jT.setInt32(kT + 4, WT, !0), jT.setUint16(kT + 8, zT, !0), jT.setUint16(kT + 10, MT, !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat64(kT + 12 + 8 * lT, gT[lT], !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat32(kT + 36 + 4 * lT, nT[lT], !0);
      return lm(jT).set(HT, jT.byteOffset + kT + 48), !0
    }

    function dm(TT, UT, mT, WT, zT, MT, gT) {
      const nT = TT.np(322, UT, 44 + gT.length);
      if (nT < 0) return !1;
      const HT = TT.view;
      HT.setUint32(nT + 0, mT, !0), HT.setUint32(nT + 4, WT, !0);
      for (let kT = 0; kT < 3; kT++) HT.setFloat64(nT + 8 + 8 * kT, zT[kT], !0);
      for (let kT = 0; kT < 3; kT++) HT.setFloat32(nT + 32 + 4 * kT, MT[kT], !0);
      return lm(HT).set(gT, HT.byteOffset + nT + 44), !0
    }

    function wm(TT, UT, mT) {
      const WT = TT.np(323, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function tm(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(324, UT, 32 + MT.length);
      if (gT < 0) return !1;
      const nT = TT.view;
      nT.setUint32(gT + 0, mT, !0), nT.setUint32(gT + 4, WT, !0);
      for (let HT = 0; HT < 3; HT++) nT.setFloat64(gT + 8 + 8 * HT, zT[HT], !0);
      return lm(nT).set(MT, nT.byteOffset + gT + 32), !0
    }

    function am(TT, UT) {
      return !(TT.np(325, UT, 0) < 0)
    }

    function ym(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(384, UT, 16);
      if (gT < 0) return !1;
      const nT = TT.view;
      return nT.setUint32(gT + 0, mT, !0), nT.setUint32(gT + 4, WT, !0), nT.setFloat32(gT + 8, zT, !0), nT.setFloat32(gT + 12, MT, !0), !0
    }

    function Xm(TT, UT, mT, WT, zT, MT, gT) {
      const nT = TT.np(385, UT, 36 + gT.length);
      if (nT < 0) return !1;
      const HT = TT.view;
      HT.setUint32(nT + 0, mT, !0), HT.setUint32(nT + 4, WT, !0);
      for (let kT = 0; kT < 3; kT++) HT.setFloat64(nT + 8 + 8 * kT, zT[kT], !0);
      return HT.setUint32(nT + 32, MT, !0), lm(HT).set(gT, HT.byteOffset + nT + 36), !0
    }

    function Im(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      const kT = TT.np(386, UT, 56 + HT.length);
      if (kT < 0) return !1;
      const jT = TT.view;
      jT.setUint32(kT + 0, mT, !0), jT.setUint8(kT + 4, WT);
      for (let lT = 0; lT < 4; lT++) jT.setFloat32(kT + 8 + 4 * lT, zT[lT], !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat64(kT + 24 + 8 * lT, MT[lT], !0);
      return jT.setUint32(kT + 48, gT, !0), jT.setUint32(kT + 52, nT, !0), lm(jT).set(HT, jT.byteOffset + kT + 56), !0
    }

    function Qm(TT, UT, mT, WT, zT, MT, gT, nT, HT) {
      const kT = TT.np(387, UT, 56);
      if (kT < 0) return !1;
      const jT = TT.view;
      jT.setUint32(kT + 0, mT, !0), jT.setUint16(kT + 4, WT, !0), jT.setUint8(kT + 6, zT);
      for (let lT = 0; lT < 3; lT++) jT.setFloat64(kT + 8 + 8 * lT, MT[lT], !0);
      for (let lT = 0; lT < 2; lT++) jT.setFloat32(kT + 32 + 4 * lT, gT[lT], !0);
      jT.setFloat32(kT + 40, nT, !0);
      for (let lT = 0; lT < 3; lT++) jT.setFloat32(kT + 44 + 4 * lT, HT[lT], !0);
      return !0
    }

    function sm(TT, UT, mT) {
      const WT = TT.np(388, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function Fm(TT, UT, mT, WT) {
      const zT = TT.np(389, UT, 8);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setInt32(zT + 0, mT, !0), MT.setFloat32(zT + 4, WT, !0), !0
    }

    function Pm(TT, UT, mT, WT) {
      const zT = TT.np(390, UT, 8);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setInt32(zT + 0, mT, !0), MT.setFloat32(zT + 4, WT, !0), !0
    }

    function Vm(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(391, UT, 12);
      if (gT < 0) return !1;
      const nT = TT.view;
      return nT.setFloat32(gT + 0, mT, !0), nT.setFloat32(gT + 4, WT, !0), nT.setUint8(gT + 8, zT), nT.setUint8(gT + 9, MT), !0
    }

    function um(TT, UT, mT) {
      const WT = TT.np(392, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function Cm(TT, UT, mT, WT, zT) {
      const MT = TT.np(393, UT, 12);
      if (MT < 0) return !1;
      const gT = TT.view;
      return gT.setUint32(MT + 0, mT, !0), gT.setUint16(MT + 4, WT, !0), gT.setFloat32(MT + 8, zT, !0), !0
    }

    function rm(TT, UT, mT, WT, zT, MT, gT) {
      const nT = TT.np(394, UT, 36);
      if (nT < 0) return !1;
      const HT = TT.view;
      HT.setUint32(nT + 0, mT, !0), HT.setUint16(nT + 4, WT, !0), HT.setUint8(nT + 6, zT);
      for (let kT = 0; kT < 3; kT++) HT.setFloat64(nT + 8 + 8 * kT, MT[kT], !0);
      return HT.setFloat32(nT + 32, gT, !0), !0
    }

    function Km(TT, UT, mT) {
      const WT = TT.np(398, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setUint32(WT + 0, mT, !0), !0
    }

    function Sm(TT, UT, mT) {
      const WT = TT.np(448, UT, 4);
      if (WT < 0) return !1;
      return TT.view.setFloat32(WT + 0, mT, !0), !0
    }

    function Gm(TT, UT, mT, WT) {
      const zT = TT.np(450, UT, 12);
      if (zT < 0) return !1;
      const MT = TT.view;
      for (let gT = 0; gT < 2; gT++) MT.setFloat32(zT + 0 + 4 * gT, mT[gT], !0);
      return MT.setUint8(zT + 8, WT), !0
    }

    function Nm(TT, UT, mT, WT) {
      const zT = TT.np(452, UT, 8);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setFloat32(zT + 0, mT, !0), MT.setUint8(zT + 4, WT), !0
    }

    function Em(TT, UT, mT, WT, zT) {
      const MT = TT.np(454, UT, 4);
      if (MT < 0) return !1;
      const gT = TT.view;
      return gT.setUint8(MT + 0, mT), gT.setUint8(MT + 1, WT), gT.setUint8(MT + 2, zT), !0
    }

    function hm(TT, UT, mT, WT) {
      const zT = TT.np(455, UT, 40);
      if (zT < 0) return !1;
      const MT = TT.view;
      for (let gT = 0; gT < 9; gT++) MT.setInt32(zT + 0 + 4 * gT, mT[gT], !0);
      return MT.setUint32(zT + 36, WT, !0), !0
    }

    function Dm(TT, UT, mT, WT) {
      const zT = TT.np(456, UT, 8);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setFloat32(zT + 0, mT, !0), MT.setUint8(zT + 4, WT), !0
    }

    function om(TT, UT, mT, WT, zT) {
      const MT = TT.np(457, UT, 16);
      if (MT < 0) return !1;
      const gT = TT.view;
      for (let nT = 0; nT < 3; nT++) gT.setInt32(MT + 0 + 4 * nT, mT[nT], !0);
      for (let nT = 0; nT < 3; nT++) gT.setInt8(MT + 12 + 1 * nT, WT[nT]);
      return gT.setUint8(MT + 15, zT), !0
    }

    function Am(TT, UT, mT, WT) {
      const zT = TT.np(530, UT, 4 + WT.length);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setUint8(zT + 0, mT), lm(MT).set(WT, MT.byteOffset + zT + 4), !0
    }

    function Rm(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(531, UT, 12 + MT.length);
      if (gT < 0) return !1;
      const nT = TT.view;
      return nT.setFloat32(gT + 0, mT, !0), nT.setFloat32(gT + 4, WT, !0), nT.setUint32(gT + 8, zT, !0), lm(nT).set(MT, nT.byteOffset + gT + 12), !0
    }

    function TW(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(532, UT, 12 + MT.length);
      if (gT < 0) return !1;
      const nT = TT.view;
      return nT.setInt32(gT + 0, mT, !0), nT.setInt32(gT + 4, WT, !0), nT.setUint32(gT + 8, zT, !0), lm(nT).set(MT, nT.byteOffset + gT + 12), !0
    }

    function UW(TT, UT, mT, WT, zT) {
      const MT = TT.np(533, UT, 8 + zT.length);
      if (MT < 0) return !1;
      const gT = TT.view;
      return gT.setInt32(MT + 0, mT, !0), gT.setInt32(MT + 4, WT, !0), lm(gT).set(zT, gT.byteOffset + MT + 8), !0
    }

    function mW(TT, UT) {
      return !(TT.np(576, UT, 0) < 0)
    }

    function WW(TT, UT, mT, WT, zT, MT) {
      const gT = TT.np(577, UT, 36 + MT.length);
      if (gT < 0) return !1;
      const nT = TT.view;
      nT.setUint8(gT + 0, mT);
      for (let HT = 0; HT < 16; HT++) nT.setUint8(gT + 4 + 1 * HT, WT[HT]);
      for (let HT = 0; HT < 16; HT++) nT.setUint8(gT + 20 + 1 * HT, zT[HT]);
      return lm(nT).set(MT, nT.byteOffset + gT + 36), !0
    }

    function zW(TT, UT, mT, WT) {
      const zT = TT.np(578, UT, 4 + WT.length);
      if (zT < 0) return !1;
      const MT = TT.view;
      return MT.setUint8(zT + 0, mT), lm(MT).set(WT, MT.byteOffset + zT + 4), !0
    }

    function MW(TT, UT, mT, WT, zT, MT, gT, nT) {
      const HT = TT.np(579, UT, 36);
      if (HT < 0) return !1;
      const kT = TT.view;
      return kT.setFloat64(HT + 0, mT, !0), kT.setFloat64(HT + 8, WT, !0), kT.setFloat64(HT + 16, zT, !0), kT.setFloat64(HT + 24, MT, !0), kT.setUint16(HT + 32, gT, !0), kT.setUint8(HT + 34, nT), !0
    }
    class gW {
      constructor(TT, UT) {
        this.core = TT, this.afterCall = UT
      }
      canModify(TT, UT, mT) {
        const WT = this.core.PMT(TT, UT, mT);
        return this.afterCall(), WT
      }
      terrainBlocked(TT, UT, mT, WT, zT) {
        const MT = this.core.agT(TT, UT, mT, WT, zT);
        return this.afterCall(), MT
      }
      EQ(TT, UT, mT, WT) {
        const zT = this.core.SL(TT, UT, mT, WT);
        return this.afterCall(), zT
      }
      blockData(TT, UT, mT) {
        const WT = this.core.sMT(TT, UT, mT);
        return this.afterCall(), WT
      }
      cameraSweep(TT, UT, mT, WT, zT, MT, gT) {
        const nT = this.core.yzT(TT, UT, mT, WT, zT, MT, gT);
        return this.afterCall(), nT
      }
      hasServerTarget(TT) {
        const UT = this.core.RMT(TT);
        return this.afterCall(), UT
      }
      entityInteractable(TT) {
        const UT = this.core.NMT(TT);
        return this.afterCall(), UT
      }
      entityCrouching(TT) {
        const UT = this.core.SMT(TT);
        return this.afterCall(), UT
      }
      predictServerPosition(TT, UT, mT, WT) {
        const zT = this.core.jgT(TT, UT, mT, WT);
        return this.afterCall(), zT
      }
      setOtherEntitySetting(TT, UT, mT) {
        const WT = this.core.PzT(TT, UT, mT);
        return this.afterCall(), WT
      }
      entityInfoBatch(TT) {
        const UT = this.core.rzT(TT);
        return this.afterCall(), UT
      }
      entityName(TT) {
        const UT = this.core.EMT(TT);
        return this.afterCall(), UT
      }
      hasEffect(TT, UT) {
        const mT = this.core.oMT(TT, UT);
        return this.afterCall(), mT
      }
      scratchPtr() {
        const TT = this.core.wzT();
        return this.afterCall(), TT
      }
      invSwap(TT, UT) {
        const mT = this.core.MgT(TT, UT);
        return this.afterCall(), mT
      }
      invMove(TT, UT, mT) {
        const WT = this.core.mgT(TT, UT, mT);
        return this.afterCall(), WT
      }
      invQuickMove(TT, UT, mT, WT) {
        const zT = this.core.WgT(TT, UT, mT, WT);
        return this.afterCall(), zT
      }
      invRemove(TT, UT, mT) {
        const WT = this.core.zgT(TT, UT, mT);
        return this.afterCall(), WT
      }
      invEnchant(TT, UT, mT, WT, zT) {
        const MT = this.core.UgT(TT, UT, mT, WT, zT);
        return this.afterCall(), MT
      }
      craft(TT, UT, mT) {
        const WT = this.core.craft(TT, UT, mT);
        return this.afterCall(), WT
      }
      salvage(TT, UT, mT) {
        const WT = this.core.salvage(TT, UT, mT);
        return this.afterCall(), WT
      }
      selectSlot(TT) {
        const UT = this.core.BgT(TT);
        return this.afterCall(), UT
      }
      closeChest() {
        const TT = this.core.VMT();
        return this.afterCall(), TT
      }
      itemAttributesBatch(TT) {
        const UT = this.core.CzT(TT);
        return this.afterCall(), UT
      }
      itemNames() {
        const TT = this.core.jy();
        return this.afterCall(), TT
      }
      blockProps() {
        const TT = this.core.FMT();
        return this.afterCall(), TT
      }
      itemProps() {
        const TT = this.core.ggT();
        return this.afterCall(), TT
      }
      salvageRecipe(TT) {
        const UT = this.core.SzT(TT);
        return this.afterCall(), UT
      }
      craftingView(TT, UT, mT) {
        const WT = this.core.uzT(TT, UT, mT);
        return this.afterCall(), WT
      }
      directorView() {
        const TT = this.core.azT();
        return this.afterCall(), TT
      }
      directorDefaultPose() {
        const TT = this.core.XzT();
        return this.afterCall(), TT
      }
      directorEntity(TT) {
        const UT = this.core.IzT(TT);
        return this.afterCall(), UT
      }
      directorPose(TT, UT, mT, WT, zT, MT) {
        const gT = this.core.szT(TT, UT, mT, WT, zT, MT);
        return this.afterCall(), gT
      }
      passTimings(TT) {
        const UT = this.core.kgT(TT);
        return this.afterCall(), UT
      }
      drawCensus() {
        const TT = this.core.KMT();
        return this.afterCall(), TT
      }
    }
  }
};
Object.freeze(modules);
for (const TT in modules) Object.freeze(modules[TT]);